const VOICE_OPTIONS = [
  { id: "auto", label: "자동" },
  { id: "female", label: "👩 여자" },
  { id: "male", label: "👨 남자" },
];
const RATE_OPTIONS = [
  { id: "slow", label: "🐢 느리게" },
  { id: "normal", label: "보통" },
  { id: "fast", label: "🐇 빠르게" },
];

const THEME_OPTIONS = [
  { id: "auto", label: "자동" },
  { id: "light", label: "☀️ 밝게" },
  { id: "dark", label: "🌙 어둡게" },
];

function downloadBackup() {
  const blob = new Blob([JSON.stringify(exportBackup(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `영어공부-백업-${dateKey()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// 기록 옮기기 코드: 백업 내용을 압축해 글자로 바꾼다. 메신저로 보내 다른 기기에 붙여넣으면 된다.
const TRANSFER_PREFIX = "EW1z:";
const TRANSFER_PREFIX_PLAIN = "EW1:";

const toBase64 = (bytes) => {
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
};
const fromBase64 = (text) => Uint8Array.from(atob(text), (c) => c.charCodeAt(0));

async function makeTransferCode() {
  const bytes = new TextEncoder().encode(JSON.stringify(exportBackup()));
  if (!window.CompressionStream) return TRANSFER_PREFIX_PLAIN + toBase64(bytes);
  const zipped = await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"))).arrayBuffer();
  return TRANSFER_PREFIX + toBase64(new Uint8Array(zipped));
}

async function readTransferCode(code) {
  const text = code.replace(/\s+/g, "");
  if (text.startsWith(TRANSFER_PREFIX)) {
    if (!window.DecompressionStream) throw new Error("이 브라우저는 압축 코드를 풀 수 없어요");
    const raw = await new Response(new Blob([fromBase64(text.slice(TRANSFER_PREFIX.length))]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
    return JSON.parse(raw);
  }
  if (text.startsWith(TRANSFER_PREFIX_PLAIN)) return JSON.parse(new TextDecoder().decode(fromBase64(text.slice(TRANSFER_PREFIX_PLAIN.length))));
  throw new Error("옮기기 코드가 아니에요");
}

function renderSettingsScreen(root, { profileName, actions }) {
  const member = findMember(profileName);
  const settings = getSettings();
  const preferred = getPreferredLevel(profileName) || "auto";
  const levelOptions = [{ id: "auto", label: "자동 (최근 단계)" }, ...LEVELS.map((lv) => ({ id: lv.id, label: `${lv.emoji} ${shortLevelLabel(lv)}` }))];

  root.innerHTML = `
    <div class="screen screen-settings">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">⚙️ 설정</h1>

      <section class="settings-card">
        <h2 class="section-title">내 프로필</h2>
        <div class="settings-row">
          <span class="home-avatar" style="--accent:${member.color}">${member.emoji}</span>
          <span class="settings-name">${member.name}</span>
          <button class="secondary-btn small-btn" id="editMemberBtn">수정</button>
        </div>
      </section>

      <section class="settings-card">
        <h2 class="section-title">내 단계</h2>
        <p class="settings-help">오늘의 학습, 홈의 "이어서 하기", 듣기 · 영작 · 모의고사 목록이 이 단계에 맞춰져요. 홈에는 이 단계에 맞는 메뉴만 보여요.</p>
        <div class="level-pick" role="radiogroup">
          ${levelOptions.map((o) => `<button class="pick-chip${o.id === preferred ? " active" : ""}" data-level="${o.id}" role="radio" aria-checked="${o.id === preferred}">${o.label}</button>`).join("")}
        </div>
      </section>

      <section class="settings-card">
        <h2 class="section-title">화면 · 소리 <small>(이 기기 전체에 적용)</small></h2>
        <div class="settings-line"><span>글자 크기</span>${textSizeControlHtml()}</div>
        <div class="settings-line"><span>화면 테마</span>${segmentedHtml("theme", THEME_OPTIONS, settings.theme)}</div>
        <div class="settings-line">
          <span>효과음</span>
          <button class="switch${settings.sound ? " on" : ""}" id="soundSwitch" role="switch" aria-checked="${settings.sound}" aria-label="효과음">
            <span class="switch-knob"></span>
          </button>
        </div>
      </section>

      <section class="settings-card">
        <h2 class="section-title">영어 목소리 <small>(이 기기 전체에 적용)</small></h2>
        <p class="settings-help">기기에 깔린 목소리를 써서 기기마다 소리가 달라요. 고른 목소리가 없는 기기에서는 기본 목소리로 읽어요.</p>
        <div class="settings-line"><span>목소리</span>${segmentedHtml("voice", VOICE_OPTIONS, settings.voice)}</div>
        <div class="settings-line"><span>말하기 속도</span>${segmentedHtml("rate", RATE_OPTIONS, settings.speechRate)}</div>
        <button class="secondary-btn" id="voiceTestBtn" ${speechSupported ? "" : "disabled"}>🔊 들어 보기</button>
      </section>

      <section class="settings-card">
        <h2 class="section-title">앱으로 설치</h2>
        <p class="settings-help">홈 화면에 설치하면 앱처럼 바로 열리고, 인터넷이 없어도 공부할 수 있어요.</p>
        <div id="installGuide"></div>
      </section>

      <section class="settings-card">
        <h2 class="section-title">기록 백업</h2>
        <p class="settings-help">기록은 이 기기의 브라우저에만 저장돼요. 브라우저 데이터를 지우면 사라지니, 가끔 파일로 저장해 두세요. 다른 기기에서 불러오면 기록을 옮길 수 있어요.</p>
        <div class="settings-actions">
          <button class="secondary-btn" id="exportBtn">💾 파일로 저장</button>
          <button class="secondary-btn" id="importBtn">📂 파일 불러오기</button>
          <input type="file" id="importInput" accept="application/json,.json" hidden />
        </div>
      </section>

      <section class="settings-card">
        <h2 class="section-title">다른 기기로 옮기기 (코드)</h2>
        <p class="settings-help">파일 대신 글자 코드로 옮길 수 있어요. ① 이 기기에서 <b>코드 복사</b> → ② 카카오톡 '나에게 보내기' 등으로 보내기 → ③ 새 기기에서 코드를 붙여넣고 <b>불러오기</b>. 가족 모두의 기록이 함께 옮겨져요.</p>
        <div class="settings-actions">
          <button class="secondary-btn" id="copyCodeBtn">📋 코드 복사</button>
        </div>
        <textarea class="text-input transfer-input" id="transferInput" rows="3" placeholder="여기에 옮기기 코드를 붙여넣어요" spellcheck="false" autocomplete="off"></textarea>
        <button class="primary-btn" id="pasteCodeBtn">📥 코드로 불러오기</button>
      </section>
    </div>
  `;

  bindTextSizeControl(root);
  mountInstallGuide(root.querySelector("#installGuide"));
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#editMemberBtn").addEventListener("click", actions.editMember);

  bindSegmented(root, "level", (id) => setPreferredLevel(profileName, id === "auto" ? null : id));
  bindSegmented(root, "theme", (theme) => {
    updateSettings({ theme });
    applyTheme(theme);
  });

  const voiceTest = () => speak("Hello! Let's learn English together.");
  bindSegmented(root, "voice", (voice) => {
    updateSettings({ voice });
    voiceTest();
  });
  bindSegmented(root, "rate", (speechRate) => {
    updateSettings({ speechRate });
    voiceTest();
  });
  root.querySelector("#voiceTestBtn").addEventListener("click", voiceTest);

  const soundSwitch = root.querySelector("#soundSwitch");
  soundSwitch.addEventListener("click", () => {
    const on = !getSettings().sound;
    updateSettings({ sound: on });
    soundSwitch.classList.toggle("on", on);
    soundSwitch.setAttribute("aria-checked", String(on));
    if (on) playSound("correct");
  });

  root.querySelector("#exportBtn").addEventListener("click", () => {
    downloadBackup();
    showToast(`<span class="toast-emoji">💾</span><span>백업 파일을 저장했어요</span>`);
  });

  const transferInput = root.querySelector("#transferInput");
  root.querySelector("#copyCodeBtn").addEventListener("click", async () => {
    const code = await makeTransferCode();
    try {
      await navigator.clipboard.writeText(code);
      showToast(`<span class="toast-emoji">📋</span><span>코드를 복사했어요 (${code.length.toLocaleString()}자). 메신저에 붙여넣어 보내세요.</span>`);
    } catch {
      // 복사가 막힌 브라우저에서는 칸에 넣고 전체 선택해 둔다
      transferInput.value = code;
      transferInput.select();
      showToast(`<span class="toast-emoji">📋</span><span>아래 칸의 코드를 길게 눌러 복사하세요</span>`);
    }
  });
  root.querySelector("#pasteCodeBtn").addEventListener("click", async () => {
    let data;
    try {
      data = await readTransferCode(transferInput.value);
      if (data?.app !== "englishword") throw new Error();
    } catch {
      showToast(`<span class="toast-emoji">⚠️</span><span>올바른 옮기기 코드가 아니에요. 처음부터 끝까지 다 붙여넣었는지 확인해 주세요.</span>`);
      return;
    }
    showConfirmModal({
      message: `이 기기의 기록을 코드(${escapeHtml(data.exportedAt?.slice(0, 10) || "날짜 모름")}, 가족 ${data.family?.length || 0}명)의 내용으로 바꿀까요?`,
      confirmText: "불러오기",
      cancelText: "취소",
      onConfirm: () => {
        importBackup(data);
        actions.afterImport();
      },
    });
  });

  const importInput = root.querySelector("#importInput");
  root.querySelector("#importBtn").addEventListener("click", () => importInput.click());
  importInput.addEventListener("change", async () => {
    const file = importInput.files[0];
    importInput.value = "";
    if (!file) return;
    let data;
    try {
      data = JSON.parse(await file.text());
      if (data?.app !== "englishword") throw new Error();
    } catch {
      showToast(`<span class="toast-emoji">⚠️</span><span>이 앱의 백업 파일이 아니에요</span>`);
      return;
    }
    showConfirmModal({
      message: `이 기기의 기록을 백업 파일(${escapeHtml(data.exportedAt?.slice(0, 10) || "날짜 모름")})의 내용으로 바꿀까요?`,
      confirmText: "불러오기",
      cancelText: "취소",
      onConfirm: () => {
        importBackup(data);
        actions.afterImport();
      },
    });
  });
}
