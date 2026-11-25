// 🎙️ 내 목소리 녹음 · 📝 우리 집 단어장 · ⌨️ 타자 연습 · 💬 오늘의 한마디 · 👨‍👩‍👧 가족 미션 · 👾 오답 몬스터

// ── 🎙️ 내 목소리 녹음해서 원어민 소리와 비교하기 (아이폰에서도 됨) ──
const REC_MAX_MS = 8000;
const REC_KEEP = 30;
const recSupported = !!(navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
const recordings = new Map(); // 녹음 key → 오디오 주소 (앱을 끄면 사라짐)
let recState = null;

// compact: 문장 옆 작은 버튼 (읽기 지문)
function recorderHtml(key, compact) {
  if (!recSupported) return "";
  const k = escapeHtml(key);
  const has = recordings.has(key);
  if (compact) {
    return `<button class="speak-btn rec-btn" data-rec="${k}" data-label="⏺" aria-label="내 목소리 녹음">⏺</button><button class="speak-btn rec-play" data-rec-play="${k}" aria-label="내 목소리 듣기" ${has ? "" : "hidden"}>▶</button>`;
  }
  return `<div class="rec-row"><button class="chip-btn rec-btn" data-rec="${k}" data-label="⏺ 내 목소리 녹음">⏺ 내 목소리 녹음</button><button class="chip-btn rec-play" data-rec-play="${k}" ${has ? "" : "hidden"}>▶ 내 목소리 듣기</button></div>`;
}

function bindRecorders(root) {
  root.querySelectorAll("[data-rec]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleRecording(btn.dataset.rec, btn, root);
    })
  );
  root.querySelectorAll("[data-rec-play]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playRecording(btn.dataset.recPlay);
    })
  );
}

function stopRecording() {
  if (!recState) return;
  clearTimeout(recState.timer);
  try {
    if (recState.rec.state !== "inactive") recState.rec.stop();
  } catch {}
  recState = null;
}

function playRecording(key) {
  const url = recordings.get(key);
  if (!url) return;
  stopSpeaking();
  new Audio(url).play().catch(() => {});
}

async function toggleRecording(key, btn, root) {
  if (recState) {
    const same = recState.key === key;
    stopRecording();
    if (same) return;
  }
  stopSpeaking();
  if (typeof stopRecognition === "function") stopRecognition();
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch {
    showToast(`<span class="toast-emoji">🎤</span><span>마이크를 쓸 수 없어요. 휴대폰 설정에서 이 앱(브라우저)의 <b>마이크 권한</b>을 허용해 주세요.</span>`);
    return;
  }
  const chunks = [];
  const rec = new MediaRecorder(stream);
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  rec.onstop = () => {
    stream.getTracks().forEach((t) => t.stop());
    btn.classList.remove("recording");
    btn.textContent = btn.dataset.label;
    if (!chunks.length) return;
    const old = recordings.get(key);
    if (old) URL.revokeObjectURL(old);
    recordings.delete(key);
    recordings.set(key, URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/mp4" })));
    while (recordings.size > REC_KEEP) {
      const [firstKey, firstUrl] = recordings.entries().next().value;
      URL.revokeObjectURL(firstUrl);
      recordings.delete(firstKey);
    }
    root.querySelectorAll("[data-rec-play]").forEach((b) => {
      if (b.dataset.recPlay === key) b.hidden = false;
    });
    recordActivity(currentProfile());
    playRecording(key);
  };
  rec.start();
  recState = { key, rec, timer: setTimeout(stopRecording, REC_MAX_MS) };
  btn.classList.add("recording");
  btn.textContent = btn.dataset.label.length > 2 ? "⏹ 녹음 멈추기" : "⏹";
}

// ── 📝 우리 집 단어장: 학교 · 학원 단어를 직접 넣어 시험 보기 ──
const WORDLIST_MAX = 30;
const WORDLIST_WORDS = 100;

// "apple 사과", "apple - 사과", "사과 apple", "apple"(기본 단어장에서 뜻 찾기) 모두 받는다
function parseWordListText(text) {
  const words = [];
  const skipped = [];
  for (const raw of String(text).split(/\r?\n/)) {
    const line = raw.trim().replace(/^\d+[.)]\s*/, "");
    if (!line) continue;
    let en = "";
    let ko = "";
    const enFirst = line.match(/^([A-Za-z][A-Za-z' .-]*[A-Za-z.]|[A-Za-z])\s*[-:=,·|\t]?\s*(.*)$/);
    const koFirst = line.match(/^([^A-Za-z]+?)\s*[-:=,·|\t]?\s*([A-Za-z][A-Za-z' .-]*)$/);
    if (enFirst) [en, ko] = [enFirst[1], enFirst[2]];
    else if (koFirst) [ko, en] = [koFirst[1], koFirst[2]];
    en = en.replace(/\s+/g, " ").trim();
    ko = ko.replace(/^[-:=,·|\s]+/, "").trim();
    if (en && !ko) ko = findWordByText(en.toLowerCase())?.w.meaningKo || "";
    if (!en || !ko || en.length > 40 || ko.length > 60) {
      skipped.push(line);
      continue;
    }
    if (!words.some((w) => w.w.toLowerCase() === en.toLowerCase())) words.push({ w: en, ko: cleanText(ko, 60) });
  }
  return { words: words.slice(0, WORDLIST_WORDS), skipped };
}

const findWordList = (profileName, id) => getWordLists(profileName).find((l) => l.id === id) || null;

function renderWordListsScreen(root, { profileName, actions }) {
  const lists = getWordLists(profileName);
  const card = (l) => {
    const best = ["choice", "spell", "dict"].map((m) => getSectionBest(profileName, "wordlist", `${l.id}:${m}`)).filter(Boolean);
    const top = best.length ? Math.max(...best.map((b) => Math.round((b.correct / b.total) * 100))) : null;
    return `
      <button class="level-card" data-list="${l.id}">
        <span class="level-icon">📝</span>
        <span class="topic-text"><span class="level-label">${escapeHtml(l.title)}</span><span class="topic-summary">${l.words.length}단어 · ${l.words.slice(0, 3).map((w) => escapeHtml(w.w)).join(", ")}${l.words.length > 3 ? " …" : ""}</span></span>
        <span class="level-best${top === null ? " level-best-empty" : ""}">${top === null ? "시험 전" : `최고 ${top}점`}</span>
      </button>`;
  };
  root.innerHTML = `
    <div class="screen screen-wordlists">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📝 우리 집 단어장</h1>
      <p class="subtitle">학교 · 학원에서 받은 단어를 넣고 시험 봐요</p>
      <button class="primary-btn" id="newBtn" ${lists.length >= WORDLIST_MAX ? "disabled" : ""}>➕ 새 단어장 만들기</button>
      ${lists.length ? `<div class="level-grid">${lists.map(card).join("")}</div>` : `<section class="lesson-section"><p class="lesson-point-text">받아쓰기 시험 단어, 학원 단어처럼 외워야 할 단어를 <b>한 줄에 하나씩</b> 붙여 넣으면 돼요. 뜻 고르기 · 철자 쓰기 · 받아쓰기 시험과 시험지 인쇄를 할 수 있어요.</p></section>`}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#newBtn").addEventListener("click", actions.create);
  root.querySelectorAll("[data-list]").forEach((b) => b.addEventListener("click", () => actions.open(b.dataset.list)));
}

function renderWordListEditScreen(root, { profileName, listId, actions }) {
  const list = listId ? findWordList(profileName, listId) : null;
  const text = list ? list.words.map((w) => `${w.w} ${w.ko}`).join("\n") : "";
  root.innerHTML = `
    <div class="screen screen-wordlists">
      <button class="back-btn" id="backBtn">← 돌아가기</button>
      <h1 class="title">${list ? "✏️ 단어장 고치기" : "➕ 새 단어장"}</h1>
      <section class="settings-card">
        <label class="settings-label" for="wlTitle">이름</label>
        <input class="text-input" id="wlTitle" maxlength="20" placeholder="예) 3단원 받아쓰기" value="${list ? escapeHtml(list.title) : ""}">
        <label class="settings-label" for="wlText">단어 (한 줄에 하나씩)</label>
        <textarea class="dict-input wl-text" id="wlText" rows="10" spellcheck="false" autocapitalize="off" placeholder="apple 사과&#10;library - 도서관&#10;구름 cloud&#10;because">${escapeHtml(text)}</textarea>
        <p class="settings-help">영어와 뜻 사이는 띄어쓰기나 - 로 나눠요. 뜻을 안 쓰면 기본 단어장에서 찾아 넣어요. 최대 ${WORDLIST_WORDS}단어.</p>
        <p class="settings-help" id="wlPreview"></p>
      </section>
      <button class="primary-btn" id="saveBtn">💾 저장하기</button>
      ${list ? `<button class="secondary-btn danger-btn" id="deleteBtn">🗑️ 이 단어장 지우기</button>` : ""}
    </div>`;
  const input = root.querySelector("#wlText");
  const preview = root.querySelector("#wlPreview");
  const update = () => {
    const { words, skipped } = parseWordListText(input.value);
    preview.innerHTML = `✅ ${words.length}단어 인식${skipped.length ? ` · ⚠️ 못 읽은 줄 ${skipped.length}개: ${skipped.slice(0, 3).map(escapeHtml).join(" / ")}` : ""}`;
  };
  input.addEventListener("input", update);
  update();
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#saveBtn").addEventListener("click", () => {
    const { words } = parseWordListText(input.value);
    const title = cleanText(root.querySelector("#wlTitle").value, 20) || `단어장 ${getWordLists(profileName).length + 1}`;
    if (!words.length) {
      showToast(`<span class="toast-emoji">✋</span><span>단어를 한 개 이상 넣어 주세요.</span>`);
      return;
    }
    actions.save(title, words);
  });
  root.querySelector("#deleteBtn")?.addEventListener("click", () =>
    showConfirmModal({ message: `"${escapeHtml(list.title)}" 단어장을 지울까요? 지우면 되돌릴 수 없어요.`, confirmText: "지우기", onConfirm: actions.remove })
  );
}

function renderWordListViewScreen(root, { profileName, listId, actions }) {
  const list = findWordList(profileName, listId);
  if (!list) return actions.back();
  const score = (m) => {
    const b = getSectionBest(profileName, "wordlist", `${list.id}:${m}`);
    return b ? ` <small>${Math.round((b.correct / b.total) * 100)}점</small>` : "";
  };
  root.innerHTML = `
    <div class="screen screen-wordlists">
      <button class="back-btn" id="backBtn">← 단어장 목록</button>
      <h1 class="title">📝 ${escapeHtml(list.title)}</h1>
      <p class="subtitle">${list.words.length}단어</p>
      <div class="wl-tests">
        <button class="secondary-btn" id="choiceBtn" ${list.words.length < 2 ? "disabled" : ""}>✅ 뜻 고르기${score("choice")}</button>
        <button class="secondary-btn" id="spellBtn">✍️ 철자 쓰기${score("spell")}</button>
        <button class="secondary-btn" id="dictBtn" ${speechSupported ? "" : "disabled"}>🎧 받아쓰기${score("dict")}</button>
        <button class="secondary-btn" id="printBtn">🖨️ 시험지 인쇄</button>
      </div>
      <ul class="wl-words">
        ${list.words.map((w, i) => `<li><button class="speak-btn" data-say="${i}" aria-label="듣기" ${speechSupported ? "" : "disabled"}>🔊</button><b>${escapeHtml(w.w)}</b><span>${escapeHtml(w.ko)}</span></li>`).join("")}
      </ul>
      <button class="secondary-btn" id="editBtn">✏️ 단어장 고치기</button>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#editBtn").addEventListener("click", actions.edit);
  root.querySelector("#choiceBtn").addEventListener("click", () => actions.test("choice"));
  root.querySelector("#spellBtn").addEventListener("click", () => actions.test("spell"));
  root.querySelector("#dictBtn").addEventListener("click", () => actions.test("dict"));
  root.querySelector("#printBtn").addEventListener("click", actions.print);
  root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speak(list.words[Number(b.dataset.say)].w, { rate: 0.85 })));
}

// 뜻 고르기 (객관식 화면 재사용): 보기가 모자라면 기본 단어장 뜻으로 채운다
function buildWordListQuestions(list, profileName) {
  const extra = (WORD_BANK[getPreferredLevel(profileName) || "elementary-mid"] || []).map((w) => w.meaningKo);
  return shuffle(list.words).map((w, i) => {
    const others = shuffle([...new Set([...list.words.map((x) => x.ko), ...shuffle(extra).slice(0, 6)])].filter((ko) => ko !== w.ko)).slice(0, 3);
    return {
      id: `wl-${list.id}-${i}`,
      kind: "wordlist",
      label: `📝 ${escapeHtml(list.title)} · 뜻 고르기`,
      q: escapeHtml(w.w),
      big: true,
      ko: null,
      choices: shuffle([w.ko, ...others]),
      correctAnswer: w.ko,
      explain: `<b>${escapeHtml(w.w)}</b> = ${escapeHtml(w.ko)}`,
      summary: `<b>${escapeHtml(w.w)}</b> · ${escapeHtml(w.ko)}`,
      listenText: w.w,
      selectedAnswer: null,
    };
  });
}

function newWordListTest(list, mode, only) {
  const items = shuffle(only || list.words);
  return { listId: list.id, title: list.title, mode, items, index: 0, answer: null, ok: null, correct: 0, wrongs: [], done: false, isNewBest: false };
}

const sameSpelling = (a, b) => a.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.]$/, "") === b.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.]$/, "");

function renderWordListTestScreen(root, { game, actions }) {
  if (game.done) {
    const score = Math.round((game.correct / game.items.length) * 100);
    root.innerHTML = `
      <div class="screen screen-wordlists">
        <h1 class="title">📝 ${escapeHtml(game.title)}</h1>
        <div class="result-banner ${score >= 80 ? "correct" : "wrong"}" role="status">${game.mode === "spell" ? "✍️ 철자 쓰기" : "🎧 받아쓰기"} ${score}점 · ${game.correct} / ${game.items.length}${game.isNewBest ? " · 🏆 최고 기록!" : ""}</div>
        ${game.wrongs.length ? `<h2 class="section-title">틀린 단어</h2><ul class="wl-words">${game.wrongs.map((w) => `<li><b>${escapeHtml(w.w)}</b><span>${escapeHtml(w.ko)}</span><small class="wl-mine">내 답: ${escapeHtml(w.mine || "(빈칸)")}</small></li>`).join("")}</ul>` : ""}
        <div class="result-actions">
          ${game.wrongs.length ? `<button class="primary-btn" id="wrongBtn">🔁 틀린 단어만 다시</button>` : ""}
          <button class="${game.wrongs.length ? "secondary-btn" : "primary-btn"}" id="againBtn">🔁 처음부터 다시</button>
          <button class="secondary-btn" id="listBtn">단어장으로</button>
        </div>
      </div>`;
    root.querySelector("#wrongBtn")?.addEventListener("click", actions.retryWrong);
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    return;
  }
  const w = game.items[game.index];
  const answered = game.ok !== null;
  root.innerHTML = `
    <div class="screen screen-wordlists no-anim">
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.index + 1} / ${game.items.length} · 맞힘 ${game.correct}</span>
      </div>
      <div class="question-card">
        <p class="question-label">${game.mode === "spell" ? "✍️ 뜻을 보고 영어로 써요" : "🎧 듣고 영어로 써요"}</p>
        ${game.mode === "spell" ? `<p class="question-meaning">${escapeHtml(w.ko)}</p><p class="settings-help">${w.w.length}글자 · 첫 글자 <b>${escapeHtml(w.w[0])}</b></p>` : `<div class="listen-row"><button class="listen-btn" id="sayBtn">🔊 다시 듣기</button><button class="listen-btn" id="slowBtn">🐢 천천히</button></div>${answered ? `<p class="question-meaning">${escapeHtml(w.ko)}</p>` : ""}`}
      </div>
      ${
        answered
          ? `<div class="result-banner ${game.ok ? "correct" : "wrong"}" role="status">${game.ok ? "🎉 정답!" : `❌ 정답은 <b>${escapeHtml(w.w)}</b> (내 답: ${escapeHtml(game.answer) || "빈칸"})`}</div>
             <button class="primary-btn" id="nextBtn">${game.index + 1 < game.items.length ? "다음 →" : "결과 보기"}</button>`
          : `<form class="chain-type" id="wlForm" autocomplete="off">
          <input id="wlInput" type="text" autocapitalize="off" spellcheck="false" autocomplete="off" placeholder="영어로 쓰기" aria-label="답">
          <button class="secondary-btn" type="submit">✔</button>
        </form>`
      }
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#sayBtn")?.addEventListener("click", () => speak(w.w, { rate: 0.85 }));
  root.querySelector("#slowBtn")?.addEventListener("click", () => speak(w.w, { rate: 0.55 }));
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
  root.querySelector("#nextBtn")?.focus({ preventScroll: true });
  const form = root.querySelector("#wlForm");
  if (form) {
    const input = root.querySelector("#wlInput");
    input.focus({ preventScroll: true });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      actions.check(input.value);
    });
  }
  if (game.mode === "dict" && !answered && game.spokenFor !== game.index) {
    game.spokenFor = game.index;
    setTimeout(() => speak(w.w, { rate: 0.85 }), 300);
  }
}

const wordListTestActions = {
  check: (text) => {
    const { wlTest: game } = store.getState();
    if (game.ok !== null) return;
    const w = game.items[game.index];
    game.answer = text.trim();
    game.ok = sameSpelling(text, w.w);
    if (game.ok) game.correct += 1;
    else game.wrongs.push({ ...w, mine: game.answer });
    playSound(game.ok ? "correct" : "wrong");
    recordActivity(currentProfile());
    if (game.mode === "spell" || !game.ok) speak(w.w, { rate: 0.85 });
    set({});
  },
  next: () => {
    const { wlTest: game } = store.getState();
    if (game.index + 1 < game.items.length) Object.assign(game, { index: game.index + 1, answer: null, ok: null });
    else {
      game.done = true;
      game.isNewBest = recordSectionResult(currentProfile(), "wordlist", `${game.listId}:${game.mode}`, game.correct, game.items.length);
      if (game.correct === game.items.length) burstConfetti(50);
      announceBadges(checkNewBadges(currentProfile()));
    }
    set({});
  },
  retryWrong: () => {
    const { wlTest: game } = store.getState();
    const list = findWordList(currentProfile(), game.listId);
    set({ wlTest: newWordListTest(list, game.mode, game.wrongs.map(({ w, ko }) => ({ w, ko }))) });
  },
  again: () => {
    const { wlTest: game } = store.getState();
    set({ wlTest: newWordListTest(findWordList(currentProfile(), game.listId), game.mode) });
  },
  list: () => set({ screen: "wordListView" }),
  quit: () => set({ screen: "wordListView" }),
};

// ── ⌨️ 영어 타자 연습 ──
const TYPING_WORDS = 15;
const TYPING_SENTENCES = 5;

function newTyping(levelId, kind) {
  const items =
    kind === "word"
      ? shuffle((WORD_BANK[levelId] || []).filter((w) => /^[a-z]{2,}$/i.test(w.word)).map((w) => w.word)).slice(0, TYPING_WORDS)
      : shuffle(dictationPool(levelId).map((s) => s.en)).slice(0, TYPING_SENTENCES);
  return { levelId, kind, items, index: 0, start: null, chars: 0, errors: 0, done: false, cpm: 0, acc: 0, isNewBest: false };
}

function renderTypingListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv, kind) => {
    const best = getSectionBest(profileName, "typing", `${kind}:${lv.id}`);
    return `
      <button class="level-card" data-level="${lv.id}" data-kind="${kind}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">${kind === "word" ? `단어 ${TYPING_WORDS}개` : `문장 ${TYPING_SENTENCES}개`}</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `${best.correct}타 · ${best.total}%` : "도전 전"}</span>
      </button>`;
  };
  const words = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  const sents = splitByMyLevel(LEVELS.filter((lv) => dictationPool(lv.id).length >= TYPING_SENTENCES), (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-typing">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">⌨️ 영어 타자 연습</h1>
      <p class="subtitle">보이는 대로 빨리, 정확하게 쳐요 · 1분에 몇 타인지 재요</p>
      <section class="lesson-section"><p class="lesson-point-text">PC 키보드에서 하면 자판 익히기에 좋아요. 손가락은 <b>A S D F</b> · <b>J K L ;</b> 자리에 올려놓고 시작해요. 틀린 글자는 빨갛게 보여요.</p></section>
      <h2 class="section-title">🔤 단어 타자</h2>
      ${levelSplitHtml(words.mine.map((lv) => card(lv, "word")).join(""), words.others.map((lv) => card(lv, "word")).join(""), words.others.length)}
      <h2 class="section-title">📝 문장 타자</h2>
      ${levelSplitHtml(sents.mine.map((lv) => card(lv, "sentence")).join(""), sents.others.map((lv) => card(lv, "sentence")).join(""), sents.others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level, b.dataset.kind)));
}

function renderTypingScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  if (game.done) {
    root.innerHTML = `
      <div class="screen screen-typing"${levelThemeStyle(level)}>
        <h1 class="title">⌨️ 타자 결과</h1>
        <div class="family-stats report-fun typing-stats">
          <div><b>${game.cpm}</b><small>1분에 친 타수</small></div>
          <div><b>${game.acc}%</b><small>정확도</small></div>
          <div><b>${game.errors}</b><small>틀린 글자</small></div>
        </div>
        ${game.isNewBest ? `<div class="result-banner correct" role="status">🏆 최고 기록!</div>` : ""}
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 다시 하기</button>
          <button class="secondary-btn" id="listBtn">다른 단계</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const target = game.items[game.index];
  const next = game.items[game.index + 1];
  root.innerHTML = `
    <div class="screen screen-typing no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.index + 1} / ${game.items.length} · 틀린 글자 <span id="typErr">${game.errors}</span></span>
      </div>
      <div class="typing-target" id="typTarget">${[...target].map((ch) => `<span>${ch === " " ? "&nbsp;" : escapeHtml(ch)}</span>`).join("")}</div>
      ${next ? `<p class="typing-next">다음: ${escapeHtml(next)}</p>` : ""}
      <input class="typing-box" id="typInput" type="text" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" aria-label="여기에 치기">
      <p class="settings-help">다 치면 저절로 다음으로 넘어가요.</p>
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  const input = root.querySelector("#typInput");
  const spans = [...root.querySelectorAll("#typTarget span")];
  let prev = "";
  const paint = (v) => {
    spans.forEach((s, i) => {
      s.className = i < v.length ? (v[i] === target[i] ? "ok" : "bad") : i === v.length ? "cur" : "";
    });
  };
  paint("");
  input.focus({ preventScroll: true });
  input.addEventListener("paste", (e) => e.preventDefault()); // 붙여 넣기로 기록을 올리지 못하게
  input.addEventListener("input", () => {
    const v = input.value;
    if (game.start === null && v) game.start = Date.now();
    // 새로 친 글자가 틀렸으면 센다
    let wrongNow = 0;
    for (let i = prev.length; i < v.length; i++) if (v[i] !== target[i]) wrongNow += 1;
    if (v.startsWith(prev) && wrongNow) {
      game.errors += wrongNow;
      root.querySelector("#typErr").textContent = game.errors;
    }
    prev = v;
    paint(v);
    if (v === target) actions.done();
  });
}

const typingActions = {
  done: () => {
    const { typing: game } = store.getState();
    game.chars += game.items[game.index].length;
    recordActivity(currentProfile());
    if (game.index + 1 < game.items.length) {
      game.index += 1;
      set({});
      return;
    }
    const minutes = Math.max(1 / 60, (Date.now() - (game.start || Date.now())) / 60000);
    game.cpm = Math.round(game.chars / minutes);
    game.acc = Math.round((game.chars / (game.chars + game.errors)) * 100);
    game.done = true;
    game.isNewBest = recordBestCount(currentProfile(), "typing", `${game.kind}:${game.levelId}`, game.cpm, game.acc);
    playSound("badge");
    announceBadges(checkNewBadges(currentProfile()));
    set({});
  },
  again: () => {
    const { typing: game } = store.getState();
    set({ typing: newTyping(game.levelId, game.kind) });
  },
  list: () => set({ screen: "typingList" }),
  home: () => goHome(),
  quit: () => set({ screen: "typingList" }),
};

// ── 💬 오늘의 영어 한마디 (홈 카드) ──
function todayPhrase(profileName) {
  const group = PHRASE_GROUP_OF_LEVEL[getPreferredLevel(profileName)] || "kid";
  const list = DAILY_PHRASES[group];
  const day = Math.floor(new Date(dateKey()).getTime() / 86400000);
  return list[((day % list.length) + list.length) % list.length];
}

function todayPhraseHtml(profileName) {
  const p = todayPhrase(profileName);
  return `
    <section class="phrase-card">
      <p class="phrase-label">💬 오늘의 영어 한마디</p>
      <div class="phrase-main">
        <span class="phrase-emoji">${p.emoji}</span>
        <div><b class="phrase-en">${p.en}</b><small>${p.ko}</small></div>
        <button class="speak-btn" id="phraseSayBtn" aria-label="표현 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
      </div>
      <details class="phrase-ex"><summary>이렇게 써요</summary><p><button class="speak-btn" id="phraseExBtn" aria-label="예문 듣기" ${speechSupported ? "" : "disabled"}>🔊</button> ${p.ex.en}<small>${p.ex.ko}</small></p></details>
    </section>`;
}

function bindTodayPhrase(root, profileName) {
  const p = todayPhrase(profileName);
  root.querySelector("#phraseSayBtn")?.addEventListener("click", () => speak(p.en, { rate: 0.85 }));
  root.querySelector("#phraseExBtn")?.addEventListener("click", () => speak(p.ex.en, { rate: 0.85 }));
}

// ── 👨‍👩‍👧 가족 공동 미션: 이번 주 가족 합계 문제 수 + 모두 3일 이상 ──
const MISSION_PER_MEMBER = 100;
const MISSION_DAYS = 3;
const MISSION_STARS = 20;

function familyMission() {
  const family = getFamily();
  const rows = family.map((m) => ({ m, w: getWeeklyHistory(m.name, 1)[0] }));
  const total = rows.reduce((a, r) => a + r.w.answers, 0);
  const target = MISSION_PER_MEMBER * family.length;
  const daysOk = rows.filter((r) => r.w.days >= MISSION_DAYS).length;
  return { rows, total, target, daysOk, members: family.length, done: total >= target && daysOk === family.length, week: weekDateKeys()[0] };
}

// 미션을 이루면 가족 모두에게 별을 한 번씩 준다. 지금 프로필이 새로 받았으면 true
function grantFamilyMission(profileName) {
  const mission = familyMission();
  if (mission.members < 2 || !mission.done) return false;
  let mine = false;
  for (const m of getFamily()) if (grantMissionStars(m.name, mission.week, MISSION_STARS) && m.name === profileName) mine = true;
  return mine;
}

function familyMissionHtml() {
  const mission = familyMission();
  const pct = Math.min(100, Math.round((mission.total / mission.target) * 100));
  return `
    <section class="settings-card mission-card${mission.done ? " done" : ""}">
      <h3 class="mission-title">🎯 이번 주 가족 미션 ${mission.done ? "· 🎉 성공!" : ""}</h3>
      <div class="mission-row"><span>✏️ 다 같이 ${mission.target}문제</span><b>${mission.total} / ${mission.target}</b></div>
      <div class="progress-track"><span class="progress-fill" style="width:${pct}%"></span></div>
      <div class="mission-row"><span>📅 모두 ${MISSION_DAYS}일 이상 공부</span><b>${mission.daysOk} / ${mission.members}명</b></div>
      <p class="mission-members">${mission.rows.map((r) => `<span class="${r.w.days >= MISSION_DAYS ? "ok" : ""}">${r.m.emoji} ${escapeHtml(r.m.name)} ${r.w.days}일</span>`).join("")}</p>
      <p class="settings-help">${mission.done ? `가족 모두 ⭐ ${MISSION_STARS}개를 받았어요!` : `성공하면 가족 모두 ⭐ ${MISSION_STARS}개씩 받아요. 월요일마다 새로 시작해요.`}</p>
    </section>`;
}

// ── 👾 오답 몬스터: 틀렸던 단어로 몬스터를 무찌른다 ──
const MONSTER_HP = 100;
const MONSTER_HIT = 20;
const MONSTER_HEAL = 10;
const MONSTER_HEARTS = 3;
const MONSTERS = ["👾", "👹", "🐲", "🦖", "👻", "🤖"];

function wordLevelOf(id) {
  return LEVELS.find((lv) => (WORD_BANK[lv.id] || []).some((w) => w.id === id))?.id || null;
}

function monsterPool(profileName) {
  const ids = new Set(getWrongWords(profileName).map((r) => r.id));
  const fromWrong = ids.size;
  if (ids.size < 8) getWordsSeen(profileName).forEach((s) => ids.size < 8 && ids.add(s.id));
  if (ids.size < 8) shuffle(WORD_BANK[getPreferredLevel(profileName) || "elementary-mid"] || []).forEach((w) => ids.size < 8 && ids.add(w.id));
  const words = [...ids].map(findWordById).filter(Boolean).map((w) => ({ w, levelId: wordLevelOf(w.id) }));
  return { words, fromWrong };
}

function monsterQuestion(item) {
  const others = shuffle((WORD_BANK[item.levelId] || []).filter((x) => x.meaningKo !== item.w.meaningKo)).slice(0, 3).map((x) => x.meaningKo);
  return { ...item, choices: shuffle([item.w.meaningKo, ...others]), picked: null };
}

function newMonsterBattle(profileName) {
  const { words, fromWrong } = monsterPool(profileName);
  const queue = shuffle(words);
  return { monster: MONSTERS[Math.floor(Math.random() * MONSTERS.length)], hp: MONSTER_HP, hearts: MONSTER_HEARTS, queue, pool: words, fromWrong, q: monsterQuestion(queue[0]), turn: 0, hits: 0, misses: 0, effect: null, done: false, result: null };
}

function renderMonsterScreen(root, { game, actions }) {
  const hpPct = Math.max(0, Math.round((game.hp / MONSTER_HP) * 100));
  const head = `
    <div class="monster-stage">
      <span class="monster${game.effect === "hit" ? " hit" : ""}${game.effect === "heal" ? " heal" : ""}${game.done && game.result === "win" ? " beaten" : ""}">${game.done && game.result === "win" ? "💥" : game.monster}</span>
      <div class="monster-hp"><span style="width:${hpPct}%"></span></div>
      <small>몬스터 체력 ${game.hp} / ${MONSTER_HP} · 나 ${"❤️".repeat(game.hearts)}${"🤍".repeat(MONSTER_HEARTS - game.hearts)}</small>
    </div>`;
  if (game.done) {
    root.innerHTML = `
      <div class="screen screen-monster">
        <h1 class="title">👾 오답 몬스터</h1>
        ${head}
        <div class="result-banner ${game.result === "win" ? "correct" : "wrong"}" role="status">${game.result === "win" ? `🎉 몬스터를 무찔렀어요! ${game.hits}번 공격 · 실수 ${game.misses}번` : "💔 이번엔 몬스터가 이겼어요. 틀린 단어를 다시 보고 도전해요!"}</div>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">⚔️ 새 몬스터와 싸우기</button>
          <button class="secondary-btn" id="noteBtn">📝 오답노트 보기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#noteBtn").addEventListener("click", actions.note);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const q = game.q;
  root.innerHTML = `
    <div class="screen screen-monster no-anim">
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.fromWrong ? `오답 ${game.fromWrong}개로 싸워요` : "최근 본 단어로 싸워요"}</span>
      </div>
      ${head}
      <div class="question-card">
        <p class="question-label">뜻을 맞히면 공격! ⚔️ 틀리면 몬스터가 회복해요</p>
        <p class="question-meaning">${q.w.word} <button class="speak-btn" id="sayBtn" aria-label="듣기" ${speechSupported ? "" : "disabled"}>🔊</button></p>
      </div>
      <div class="choice-grid">
        ${q.choices.map((c, i) => `<button class="choice-btn${q.picked !== null ? (c === q.w.meaningKo ? " correct" : i === q.picked ? " wrong" : "") : ""}" data-c="${i}" ${q.picked !== null ? "disabled" : ""}>${c}</button>`).join("")}
      </div>
      ${q.picked !== null ? `<button class="primary-btn" id="nextBtn">다음 공격 →</button>` : ""}
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#sayBtn").addEventListener("click", () => speak(q.w.word, { rate: 0.85 }));
  root.querySelectorAll("[data-c]").forEach((b) => b.addEventListener("click", () => actions.pick(Number(b.dataset.c))));
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
  root.querySelector("#nextBtn")?.focus({ preventScroll: true });
}

const monsterActions = {
  pick: (i) => {
    const { monster: game } = store.getState();
    const q = game.q;
    if (game.done || q.picked !== null) return;
    q.picked = i;
    const ok = q.choices[i] === q.w.meaningKo;
    if (q.levelId) recordAnswerOutcome(currentProfile(), q.w.id, q.levelId, ok);
    recordActivity(currentProfile());
    if (ok) {
      game.hp = Math.max(0, game.hp - MONSTER_HIT);
      game.hits += 1;
      game.effect = "hit";
      playSound("correct");
      game.queue.shift();
    } else {
      game.hp = Math.min(MONSTER_HP, game.hp + MONSTER_HEAL);
      game.hearts -= 1;
      game.misses += 1;
      game.effect = "heal";
      playSound("wrong");
      game.queue.push(game.queue.shift()); // 틀린 단어는 다시 나온다
    }
    if (game.hp <= 0 || game.hearts <= 0) {
      game.done = true;
      game.result = game.hp <= 0 ? "win" : "lose";
      if (game.result === "win") {
        recordCountUp(currentProfile(), "monster", "all");
        burstConfetti(70);
        playSound("badge");
      }
      announceBadges(checkNewBadges(currentProfile()));
    }
    set({});
  },
  next: () => {
    const { monster: game } = store.getState();
    if (!game.queue.length) game.queue = shuffle(game.pool);
    game.q = monsterQuestion(game.queue[0]);
    game.effect = null;
    set({});
  },
  again: () => set({ monster: newMonsterBattle(currentProfile()) }),
  note: () => set({ screen: "wrongNote" }),
  home: () => goHome(),
  quit: () => goHome(),
};
