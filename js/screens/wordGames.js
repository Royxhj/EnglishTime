// 단어 놀이: 🎯 스펠링 게임(그림 · 뜻 · 소리를 보고 글자를 하나씩 맞히기)과
// 📅 주간 단어 시험(이번 주에 문제 · 카드로 본 단어만 모아 10문제).

// ── 🎯 스펠링 게임 ──
const SPELLING_WORDS = 5;
const SPELLING_LIVES = 6;
const SPELLING_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function spellingWordPool(levelId) {
  const maxLen = levelId.startsWith("elementary") ? 8 : 10;
  return (WORD_BANK[levelId] || []).filter((w) => /^[a-z]+$/.test(w.word) && w.word.length >= 3 && w.word.length <= maxLen);
}

function buildSpellingGame(levelId) {
  const words = shuffle(spellingWordPool(levelId)).slice(0, SPELLING_WORDS);
  return { levelId, words, index: 0, guessed: [], misses: 0, results: [], done: false, isNewBest: false };
}

// 현재 단어가 다 맞았는지, 기회를 다 썼는지
function spellingStatus(game) {
  const w = game.words[game.index];
  if ([...w.word].every((ch) => game.guessed.includes(ch))) return "solved";
  if (game.misses >= SPELLING_LIVES) return "failed";
  return "playing";
}

function renderSpellingListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const best = getSectionBest(profileName, "spelling", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">${spellingWordPool(lv.id).length}개 단어 중 ${SPELLING_WORDS}개</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-spelling">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎯 스펠링 게임</h1>
      <p class="subtitle">그림과 뜻을 보고, 소리를 듣고, 글자를 하나씩 골라 단어를 완성해요</p>
      <section class="lesson-section"><p class="lesson-point-text">틀린 글자는 ❤️ 하나가 줄어요. ❤️ ${SPELLING_LIVES}개가 다 없어지기 전에 단어를 완성하면 성공! 한 판에 ${SPELLING_WORDS}단어예요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function renderSpellingScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  if (game.done) {
    const solved = game.results.filter((r) => r.solved).length;
    root.innerHTML = `
      <div class="screen screen-spelling"${levelThemeStyle(level)}>
        <h1 class="title">🎯 스펠링 게임 결과</h1>
        <p class="subtitle">${shortLevelLabel(level)}</p>
        <div class="result-banner ${solved === game.words.length ? "correct" : ""}" role="status">${solved} / ${game.words.length} 단어 성공${game.isNewBest ? " · 🏆 최고 기록!" : ""}</div>
        <ul class="spell-summary">
          ${game.results
            .map(
              (r) => `<li class="${r.solved ? "ok" : "miss"}"><span class="spell-sum-emoji">${r.word.emoji}</span><b>${r.word.word}</b> <span>${r.word.meaningKo}</span> <span class="spell-sum-mark">${r.solved ? "⭕" : "❌"}</span></li>`
            )
            .join("")}
        </ul>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 새 단어로 다시 하기</button>
          <button class="secondary-btn" id="listBtn">단계 고르기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.quit);
    return;
  }

  const w = game.words[game.index];
  const status = spellingStatus(game);
  const over = status !== "playing";
  const slots = [...w.word]
    .map((ch) => {
      const shown = game.guessed.includes(ch) || over;
      const cls = shown && !game.guessed.includes(ch) ? " reveal" : shown ? " filled" : "";
      return `<span class="spell-slot${cls}">${shown ? ch : ""}</span>`;
    })
    .join("");
  const hearts = "❤️".repeat(SPELLING_LIVES - game.misses) + "🤍".repeat(game.misses);
  const keys = SPELLING_LETTERS.map((ch) => {
    const used = game.guessed.includes(ch);
    const cls = used ? (w.word.includes(ch) ? " hit" : " miss") : "";
    return `<button class="spell-key${cls}" data-letter="${ch}" ${used || over ? "disabled" : ""} aria-label="${ch}">${ch}</button>`;
  }).join("");

  root.innerHTML = `
    <div class="screen screen-spelling"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.index + 1} / ${game.words.length} · 성공 ${game.results.filter((r) => r.solved).length}</span>
      </div>
      <div class="spell-card">
        <div class="spell-emoji" aria-hidden="true">${w.emoji}</div>
        <p class="spell-meaning">${w.meaningKo}</p>
        <button class="speak-btn spell-speak" id="speakBtn" aria-label="단어 듣기" ${speechSupported ? "" : "disabled"}>🔊 듣기</button>
      </div>
      <div class="spell-slots" aria-label="${w.word.length}글자">${slots}</div>
      <p class="spell-hearts" aria-label="남은 기회 ${SPELLING_LIVES - game.misses}">${hearts}</p>
      ${
        over
          ? `<div class="result-banner ${status === "solved" ? "correct" : "wrong"}" role="status">${status === "solved" ? `🎉 성공! <b>${w.word}</b> = ${w.meaningKo}` : `아쉬워요! 정답은 <b>${w.word}</b> (${w.meaningKo})`}</div>
             <p class="spell-example">${w.examples[0].en}<br><small>${w.examples[0].ko}</small></p>
             <div class="result-actions"><button class="primary-btn" id="nextBtn">${game.index + 1 < game.words.length ? "다음 단어 →" : "결과 보기"}</button></div>`
          : `<div class="spell-keys">${keys}</div>`
      }
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#speakBtn").addEventListener("click", () => speak(w.word, { rate: 0.8 }));
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
  root.querySelectorAll("[data-letter]").forEach((b) => b.addEventListener("click", () => actions.guess(b.dataset.letter)));
}

// ── 📅 주간 단어 시험 ──
const WEEKLY_TEST_SIZE = 10;

// 이번 주(월요일부터)에 본 단어 → 모자라면 지난 7일 → 그래도 모자라면 내 단계 단어로 채운다
function buildWeeklyQuestions(profileName) {
  const monday = weekDateKeys()[0];
  const seen = getWordsSeen(profileName);
  const pick = (list) => list.map((s) => ({ s, w: findWordById(s.id) })).filter((x) => x.w);
  const thisWeek = pick(seen.filter((s) => s.date >= monday));
  const lastDays = pick(seen.filter((s) => s.date < monday && s.date >= daysAgoKey(7)));
  const chosen = [...shuffle(thisWeek), ...shuffle(lastDays)].slice(0, WEEKLY_TEST_SIZE);
  const levelId = myLevelOf(profileName) || "elementary-low";
  const fill = shuffle((WORD_BANK[levelId] || []).filter((w) => !chosen.some((c) => c.w.id === w.id)))
    .slice(0, WEEKLY_TEST_SIZE - chosen.length)
    .map((w) => ({ s: { levelId }, w }));
  return shuffle([...chosen, ...fill]).map(({ s, w }) => wordToMcQuestion(w, s.levelId || levelId));
}

function weeklySeenCount(profileName) {
  const monday = weekDateKeys()[0];
  return getWordsSeen(profileName).filter((s) => s.date >= monday).length;
}
