const VOCAB_SEARCH_LIMIT = 60;
const CARD_DIRECTIONS = [
  { id: "en-ko", label: "영어 → 뜻" },
  { id: "ko-en", label: "뜻 → 영어" },
];

function nextReviewLabel(entry) {
  if (!entry) return "";
  const days = Math.round((new Date(entry.due) - new Date(dateKey())) / 86400000);
  if (days <= 0) return "오늘";
  if (days === 1) return "내일";
  return `${days}일 뒤`;
}

function vocabRowHtml(card, entry, starred) {
  const status = vocabBoxLabel(entry);
  return `
    <li class="vocab-row" data-id="${card.id}">
      <button class="vocab-main" data-expand aria-expanded="false">
        <span class="vocab-dot ${status.cls}" title="${status.label}"></span>
        <span class="vocab-word">${card.word}</span>
        <span class="vocab-meaning">${card.meaningKo}</span>
      </button>
      <button class="speak-btn" data-speak aria-label="${card.word} 발음 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
      <button class="star-btn${starred ? " on" : ""}" data-star aria-pressed="${starred}" aria-label="즐겨찾기">${starred ? "★" : "☆"}</button>
      <div class="vocab-detail" hidden>
        ${card.ipa ? `<span class="ipa-text">${card.ipa}</span>` : ""}
        ${card.desc ? `<p>${card.emoji} ${card.desc}</p>` : ""}
        ${card.examples.slice(0, 2).map((ex) => `<p class="vocab-example">${ex.en}<br><small>${ex.ko}</small></p>`).join("")}
        <p class="vocab-status">${status.label}${entry ? ` · 다음 복습 ${nextReviewLabel(entry)}` : ""}</p>
      </div>
    </li>
  `;
}

// view: { tab: levelId | "starred" | "custom" }
function renderVocabScreen(root, { profileName, view, actions }) {
  const stats = getVocabStats(profileName);
  const entries = getVocabEntries(profileName);
  const starredSet = new Set(getStarredIds(profileName));
  const customIds = Object.keys(getCustomWords(profileName));
  const direction = getSettings().cardDirection;
  const tabs = [
    ...LEVELS.map((lv) => ({ id: lv.id, label: `${lv.emoji} ${shortLevelLabel(lv)}` })),
    { id: "starred", label: `⭐ 즐겨찾기 ${starredSet.size}` },
    { id: "custom", label: `📖 지문 단어 ${customIds.length}` },
  ];
  const tab = view.tab;
  const isLevel = !!levelById(tab);

  root.innerHTML = `
    <div class="screen screen-vocab">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📇 단어장</h1>
      <p class="subtitle">카드를 넘기며 외우고, 헷갈리는 단어는 자주 다시 나와요</p>

      <div class="stat-grid stat-grid--3">
        <div class="stat-card"><span class="stat-value">${stats.learned}</span><span class="stat-label">공부한 단어</span></div>
        <div class="stat-card"><span class="stat-value">${stats.mastered}</span><span class="stat-label">외운 단어</span></div>
        <div class="stat-card"><span class="stat-value">${stats.due}</span><span class="stat-label">오늘 복습</span></div>
      </div>

      <button class="daily-card${stats.due === 0 ? " daily-card--done" : ""}" id="reviewBtn" ${stats.due === 0 ? "disabled" : ""}>
        <span class="daily-emoji">${stats.due === 0 ? "🎉" : "🔁"}</span>
        <span class="daily-text">
          <span class="daily-title">${stats.due === 0 ? "오늘 복습 끝!" : `오늘 복습할 단어 ${stats.due}개`}</span>
          <span class="daily-desc">${stats.due === 0 ? "새 단어를 공부해 보세요" : "잊어버리기 전에 다시 봐요"}</span>
        </span>
        ${stats.due === 0 ? "" : `<span class="daily-go" aria-hidden="true">›</span>`}
      </button>

      <div class="settings-line"><span>카드 방향</span>${segmentedHtml("direction", CARD_DIRECTIONS, direction)}</div>

      <div class="level-pick vocab-tabs" role="tablist">
        ${tabs.map((t) => `<button class="pick-chip${t.id === tab ? " active" : ""}" data-tab="${t.id}" role="tab" aria-selected="${t.id === tab}">${t.label}</button>`).join("")}
      </div>

      ${
        isLevel
          ? `<button class="primary-btn" id="studyBtn">📇 이 단계 카드 공부 (${VOCAB_SESSION_SIZE}장)</button>`
          : tab === "starred" && starredSet.size > 0
            ? `<button class="primary-btn" id="studyBtn">⭐ 즐겨찾기 카드 공부</button>`
            : ""
      }

      <input class="text-input" id="vocabSearch" type="search" placeholder="🔍 영어나 뜻으로 전체 단어 검색" autocomplete="off" />
      <p class="settings-help" id="listInfo"></p>
      <ul class="vocab-list" id="vocabList"></ul>

      ${bottomNavHtml([{ label: "⬆ 맨 위로" }, { label: "🏠 홈으로" }])}
    </div>
  `;
  bindBottomNav(root, [
    { onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { onClick: actions.back },
  ]);

  const list = root.querySelector("#vocabList");
  const info = root.querySelector("#listInfo");

  const cardsForTab = () => {
    if (isLevel) return (WORD_BANK[tab] || []).map((w) => vocabCard(profileName, w.id));
    const ids = tab === "starred" ? [...starredSet] : customIds;
    return ids.map((id) => vocabCard(profileName, id)).filter(Boolean);
  };

  const drawList = () => {
    const q = root.querySelector("#vocabSearch").value.trim().toLowerCase();
    let cards;
    if (q) {
      const all = [...LEVELS.flatMap((lv) => (WORD_BANK[lv.id] || []).map((w) => w.id)), ...customIds];
      cards = all
        .map((id) => vocabCard(profileName, id))
        .filter((c) => c && (c.word.toLowerCase().includes(q) || c.meaningKo.includes(q)));
      info.textContent = cards.length === 0 ? "찾는 단어가 없어요." : `검색 결과 ${cards.length}개${cards.length > VOCAB_SEARCH_LIMIT ? ` (앞에서 ${VOCAB_SEARCH_LIMIT}개만 보여요)` : ""}`;
      cards = cards.slice(0, VOCAB_SEARCH_LIMIT);
    } else {
      cards = cardsForTab();
      info.textContent =
        cards.length === 0
          ? tab === "starred"
            ? "☆를 눌러 즐겨찾기한 단어가 여기에 모여요."
            : "독해 지문에서 밑줄 단어를 눌러 ＋단어장을 누르면 여기에 모여요."
          : `${cards.length}개 단어`;
    }
    list.innerHTML = cards.map((c) => vocabRowHtml(c, entries[c.id], starredSet.has(c.id))).join("");
  };

  list.addEventListener("click", (e) => {
    const row = e.target.closest(".vocab-row");
    if (!row) return;
    const id = row.dataset.id;
    if (e.target.closest("[data-speak]")) {
      speak(vocabCard(profileName, id).word);
    } else if (e.target.closest("[data-star]")) {
      const on = toggleStar(profileName, id);
      if (on) starredSet.add(id);
      else starredSet.delete(id);
      const btn = row.querySelector("[data-star]");
      btn.classList.toggle("on", on);
      btn.textContent = on ? "★" : "☆";
      btn.setAttribute("aria-pressed", String(on));
    } else if (e.target.closest("[data-expand]")) {
      const detail = row.querySelector(".vocab-detail");
      detail.hidden = !detail.hidden;
      row.querySelector("[data-expand]").setAttribute("aria-expanded", String(!detail.hidden));
    }
  });

  root.querySelector("#vocabSearch").addEventListener("input", drawList);
  drawList();

  bindSegmented(root, "direction", (cardDirection) => updateSettings({ cardDirection }));
  root.querySelectorAll("[data-tab]").forEach((btn) => btn.addEventListener("click", () => actions.setTab(btn.dataset.tab)));
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#reviewBtn").addEventListener("click", () => actions.study({ type: "review" }));
  root.querySelector("#studyBtn")?.addEventListener("click", () =>
    actions.study(isLevel ? { type: "level", levelId: tab } : { type: "starred" })
  );
}

// session: { source, queue, cards, index, flipped, first, requeued }
function renderFlashcardScreen(root, { session, profileName, actions }) {
  const id = session.queue[session.index];
  const card = session.cards[id];
  const direction = getSettings().cardDirection;
  const enFirst = direction === "en-ko";
  const total = session.queue.length;
  const isRepeat = session.first[id] !== undefined;
  const entry = getVocabEntries(profileName)[id];
  const level = levelById(card.levelId);

  const wordSide = `
    <span class="card-word">${card.word}</span>
    ${card.ipa ? `<span class="card-ipa">${card.ipa}</span>` : ""}
  `;
  const meaningSide = `
    <span class="card-emoji">${card.emoji}</span>
    <span class="card-meaning">${card.meaningKo}</span>
  `;

  root.innerHTML = `
    <div class="screen screen-quiz"${levelThemeStyle(level)}>
      <button class="quit-btn" id="quitBtn">✕ 그만하기</button>
      <div class="quiz-topbar">
        <div class="progress">${vocabSessionTitle(session.source)} · ${session.index + 1} / ${total}</div>
        <div class="score-live">${isRepeat ? "🔁 한 번 더" : entry ? "복습" : "새 단어"}</div>
      </div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${(session.index / total) * 100}%"></div></div>

      <button class="flashcard${session.flipped ? " flipped" : ""}" id="flashcard" aria-label="카드 뒤집기">
        <span class="flashcard-face flashcard-front">${enFirst ? wordSide : meaningSide}</span>
        <span class="flashcard-face flashcard-back">
          ${enFirst ? meaningSide : wordSide}
          ${card.desc ? `<span class="card-desc">${card.desc}</span>` : ""}
        </span>
      </button>

      ${
        session.flipped
          ? `
        <div class="word-detail-card">
          <div class="word-line">
            <span class="word-text">${card.word}</span>
            <button class="speak-btn" id="speakWordBtn" aria-label="발음 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
            <span class="ipa-text">${card.ipa}</span>
          </div>
          ${card.examples
            .slice(0, 2)
            .map(
              (ex, i) => `
            <div class="example-item">
              <div class="example-en">
                <button class="speak-btn" data-example="${i}" aria-label="예문 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
                <span>${ex.en}</span>
              </div>
              <div class="example-ko example-ko--always">${ex.ko}</div>
            </div>`
            )
            .join("")}
        </div>
        <div class="card-actions">
          <button class="secondary-btn card-unsure" id="unsureBtn">😕 헷갈려요</button>
          <button class="primary-btn" id="knownBtn">😊 알아요</button>
        </div>
        <p class="settings-help card-keys">키보드: ← 헷갈려요 · → 알아요</p>`
          : `
        <p class="card-hint">${enFirst ? "뜻을 떠올려 본 다음" : "영어 단어를 떠올려 본 다음"} 카드를 눌러 확인해요</p>
        <button class="primary-btn" id="flipBtn">카드 뒤집기</button>`
      }
    </div>
  `;

  const flip = () => {
    if (!session.flipped) actions.flip();
  };
  root.querySelector("#flashcard").addEventListener("click", flip);
  root.querySelector("#flipBtn")?.addEventListener("click", flip);
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#speakWordBtn")?.addEventListener("click", () => speak(card.word));
  root.querySelectorAll("[data-example]").forEach((btn) => btn.addEventListener("click", () => speak(card.examples[Number(btn.dataset.example)].en)));
  root.querySelector("#knownBtn")?.addEventListener("click", () => actions.answer(true));
  root.querySelector("#unsureBtn")?.addEventListener("click", () => actions.answer(false));

  // 영어가 보이는 순간 발음을 들려준다 (앞면이 영어면 처음에, 아니면 뒤집었을 때).
  if (enFirst ? !session.flipped && !session.spoken : session.flipped && !session.spoken) {
    session.spoken = true;
    speak(card.word);
  }
  (root.querySelector("#knownBtn") || root.querySelector("#flipBtn")).focus({ preventScroll: true });
}

function renderVocabSummaryScreen(root, { session, profileName, actions }) {
  const entries = getVocabEntries(profileName);
  const ids = Object.keys(session.first);
  const known = ids.filter((id) => session.first[id]);
  const unsure = ids.filter((id) => !session.first[id]);

  root.innerHTML = `
    <div class="screen screen-result">
      <h1 class="title">📇 카드 ${ids.length}장 공부 완료!</h1>
      <p class="subtitle">${profileName}님 · ${vocabSessionTitle(session.source)}</p>

      <div class="stat-grid">
        <div class="stat-card"><span class="stat-value">😊 ${known.length}</span><span class="stat-label">알아요</span></div>
        <div class="stat-card"><span class="stat-value">😕 ${unsure.length}</span><span class="stat-label">헷갈려요 · 내일 다시</span></div>
      </div>

      <div class="answer-summary">
        ${ids
          .map((id) => {
            const card = session.cards[id];
            return `
            <div class="summary-row">
              <span class="summary-mark">${session.first[id] ? "😊" : "😕"}</span>
              <span class="summary-meaning summary-meaning--text"><b>${card.word}</b> · ${card.meaningKo}</span>
              <span class="vocab-next">${nextReviewLabel(entries[id])}</span>
            </div>`;
          })
          .join("")}
      </div>

      <div class="result-actions">
        <button class="primary-btn" id="moreBtn">📇 ${session.source.type === "review" ? "남은 복습 계속" : "다음 카드 계속"}</button>
        <button class="secondary-btn" id="vocabBtn">단어장으로</button>
        <button class="secondary-btn" id="homeBtn">홈으로</button>
      </div>
    </div>
  `;

  root.querySelector("#moreBtn").addEventListener("click", actions.more);
  root.querySelector("#vocabBtn").addEventListener("click", actions.toVocab);
  root.querySelector("#homeBtn").addEventListener("click", actions.home);
  if (known.length >= ids.length * 0.8 && ids.length > 0) burstConfetti(30);
}
