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
        <p class="settings-help">오늘의 학습에 나오는 단어 단계예요. 단어 퀴즈 목록에도 ⭐로 표시돼요.</p>
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
