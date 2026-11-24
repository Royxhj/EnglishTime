function wrongProgressHtml(entry) {
  const hits = entry.hits || 0;
  return `<span class="wrong-progress" title="연속 ${WRONG_CLEAR_STREAK}번 맞히면 졸업">
    ${Array.from({ length: WRONG_CLEAR_STREAK }, (_, i) => `<span class="dot${i < hits ? " on" : ""}"></span>`).join("")}
  </span>`;
}

function renderWrongNoteScreen(root, { profileName, tab, actions }) {
  const words = getWrongWords(profileName)
    .map((e) => ({ ...e, data: findWordById(e.id) }))
    .filter((e) => e.data)
    .sort((a, b) => (b.missed || 1) - (a.missed || 1));
  const grammar = getGrammarWrongEntries(profileName)
    .map((e) => ({ ...e, q: grammarQuestionById(e.id) }))
    .filter((e) => e.q);
  const drill = getDrillWrongEntries(profileName)
    .map((e) => ({ ...e, q: drillQuestionById(e.id) }))
    .filter((e) => e.q)
    .sort((a, b) => (b.missed || 1) - (a.missed || 1));
  const current = ["grammar", "drill"].includes(tab) ? tab : "words";
  const list = { words, grammar, drill }[current];

  const drillRows = drill
    .map(
      (e) => `
      <li class="wrong-row">
        <div class="wrong-main">
          <div class="wrong-title">${e.q.summary}</div>
          <div class="wrong-sub">${drillSourceLabel(e.id)}${e.missed > 1 ? ` · ${e.missed}번 틀림` : ""}</div>
        </div>
        ${wrongProgressHtml(e)}
        <button class="wrong-remove" data-remove="${e.id}" aria-label="외웠어요">외웠어요</button>
      </li>`
    )
    .join("");

  const wordRows = words
    .map(
      (e) => `
      <li class="wrong-row">
        <div class="wrong-main">
          <div class="wrong-title">
            <b>${e.data.word}</b>
            <button class="speak-btn" data-speak="${e.data.word}" aria-label="발음 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
          </div>
          <div class="wrong-sub">${e.data.meaningKo} · ${shortLevelLabel(levelById(e.levelId))}${e.missed > 1 ? ` · ${e.missed}번 틀림` : ""}</div>
        </div>
        ${wrongProgressHtml(e)}
        <button class="wrong-remove" data-remove="${e.id}" aria-label="${e.data.word} 외웠어요">외웠어요</button>
      </li>`
    )
    .join("");

  const grammarRows = grammar
    .map((e) => {
      const topic = findGrammarTopic(e.q.topicId);
      return `
      <li class="wrong-row">
        <div class="wrong-main">
          <div class="wrong-title">${e.q.summary}</div>
          <div class="wrong-sub">${topic.emoji} ${topic.title}${e.missed > 1 ? ` · ${e.missed}번 틀림` : ""}</div>
        </div>
        ${wrongProgressHtml(e)}
        <button class="wrong-remove" data-remove="${e.id}" aria-label="외웠어요">외웠어요</button>
      </li>`;
    })
    .join("");

  root.innerHTML = `
    <div class="screen screen-wrong">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📝 오답노트</h1>
      <p class="subtitle">틀린 문제는 <b>연속 ${WRONG_CLEAR_STREAK}번</b> 맞히면 졸업해요</p>
      <p class="settings-help">틀린 문제는 다음 날, 한 번 맞히면 3일 뒤에 ☀️ 오늘의 학습에 저절로 다시 나와요. 여기서 바로 복습해도 돼요.</p>

      <div class="segmented segmented--wide" role="tablist">
        <button class="segmented-btn${current === "words" ? " active" : ""}" data-tab="words" role="tab" aria-selected="${current === "words"}">단어 ${words.length}</button>
        <button class="segmented-btn${current === "grammar" ? " active" : ""}" data-tab="grammar" role="tab" aria-selected="${current === "grammar"}">문법 ${grammar.length}</button>
        <button class="segmented-btn${current === "drill" ? " active" : ""}" data-tab="drill" role="tab" aria-selected="${current === "drill"}">연습 ${drill.length}</button>
      </div>

      ${
        list.length === 0
          ? `<div class="empty-state"><span class="empty-emoji">🎉</span><p>${{ words: "틀린 단어가 없어요!", grammar: "틀린 문법 문제가 없어요!", drill: "틀린 기초 문법 · 동사 문제가 없어요!" }[current]}</p></div>`
          : `
        <div class="settings-actions">
          ${
            {
              words: `<button class="primary-btn" data-review="choice">📚 고르기로 복습</button>
                 <button class="secondary-btn" data-review="spelling">⌨️ 철자로 복습</button>`,
              grammar: `<button class="primary-btn" data-review="grammar">✏️ 문법 오답 복습</button>`,
              drill: `<button class="primary-btn" data-review="drill">🔁 기초 · 동사 오답 복습</button>`,
            }[current]
          }
        </div>
        <p class="settings-help">${current === "drill" ? "오늘의 학습 · 불규칙 동사 · to부정사/동명사에서 틀린 문제가 모여요." : ""}</p>
        <ul class="wrong-list">${{ words: wordRows, grammar: grammarRows, drill: drillRows }[current]}</ul>`
      }
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelectorAll("[data-tab]").forEach((btn) => btn.addEventListener("click", () => actions.setTab(btn.dataset.tab)));
  root.querySelectorAll("[data-speak]").forEach((btn) => btn.addEventListener("click", () => speak(btn.dataset.speak)));
  root.querySelectorAll("[data-review]").forEach((btn) => btn.addEventListener("click", () => actions.review(btn.dataset.review)));
  root.querySelectorAll("[data-remove]").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (current === "words") removeWrongWord(profileName, btn.dataset.remove);
      else if (current === "drill") removeDrillWrong(profileName, btn.dataset.remove);
      else removeGrammarWrong(profileName, btn.dataset.remove);
      actions.refresh();
    })
  );
}
