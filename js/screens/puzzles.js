// 🔍 단어 찾기 퍼즐 · 🕵️ 단어 추리 · ❓ 영어 수수께끼 · 🎧 문장 받아쓰기 · ⭐ 내 메뉴 고정 · 📨 주간 요약

// ── 🔍 단어 찾기 퍼즐: 글자판에서 숨은 단어를 찾아 긋는다 ──
const WS_DIRS_ALL = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];
const WS_CONF = {
  "elementary-low": { size: 7, count: 5, maxLen: 6, dirs: WS_DIRS_ALL.slice(0, 2), showWord: true },
  "elementary-mid": { size: 8, count: 6, maxLen: 7, dirs: WS_DIRS_ALL.slice(0, 3), showWord: true },
  "elementary-high": { size: 9, count: 7, maxLen: 8, dirs: WS_DIRS_ALL.slice(0, 4), showWord: true },
  middle: { size: 10, count: 8, maxLen: 9, dirs: WS_DIRS_ALL.slice(0, 4), showWord: false },
  high: { size: 10, count: 8, maxLen: 9, dirs: WS_DIRS_ALL, showWord: false },
  adult: { size: 10, count: 8, maxLen: 9, dirs: WS_DIRS_ALL, showWord: false },
};
const WS_COLORS = ["#ffb020", "#6fb92c", "#16a3a3", "#4361ee", "#e8590c", "#c2255c", "#8338ec", "#2b8a3e"];

function buildWordSearch(levelId) {
  const conf = WS_CONF[levelId] || WS_CONF["elementary-low"];
  const { size } = conf;
  const pool = shuffle((WORD_BANK[levelId] || []).filter((w) => /^[a-z]+$/.test(w.word) && w.word.length >= 3 && w.word.length <= conf.maxLen));
  for (let attempt = 0; attempt < 20; attempt++) {
    const grid = Array(size * size).fill("");
    const placed = [];
    for (const w of pool) {
      if (placed.length === conf.count) break;
      if (placed.some((p) => p.w.word.includes(w.word) || w.word.includes(p.w.word))) continue;
      for (let t = 0; t < 120; t++) {
        const [dr, dc] = conf.dirs[Math.floor(Math.random() * conf.dirs.length)];
        const r0 = Math.floor(Math.random() * size);
        const c0 = Math.floor(Math.random() * size);
        const cells = [...w.word].map((_, k) => [r0 + dr * k, c0 + dc * k]);
        if (cells.some(([r, c]) => r < 0 || c < 0 || r >= size || c >= size)) continue;
        if (cells.some(([r, c], k) => grid[r * size + c] && grid[r * size + c] !== w.word[k])) continue;
        cells.forEach(([r, c], k) => (grid[r * size + c] = w.word[k]));
        placed.push({ w, cells: cells.map(([r, c]) => r * size + c), found: false });
        break;
      }
    }
    if (placed.length < conf.count) continue;
    const letters = "abcdefghijklmnoprstuwy";
    for (let i = 0; i < grid.length; i++) if (!grid[i]) grid[i] = letters[Math.floor(Math.random() * letters.length)];
    return { levelId, size, grid, words: placed, showWord: conf.showWord, foundCells: {}, anchor: null, hintCell: null, hints: 0, start: Date.now(), done: false, seconds: 0, isNewBest: false };
  }
  return null;
}

// a → b 칸이 한 줄(가로 · 세로 · 대각선)이면 그 칸들을 돌려준다
function wsLine(game, a, b) {
  const n = game.size;
  const [r1, c1, r2, c2] = [Math.floor(a / n), a % n, Math.floor(b / n), b % n];
  const dr = Math.sign(r2 - r1);
  const dc = Math.sign(c2 - c1);
  const len = Math.max(Math.abs(r2 - r1), Math.abs(c2 - c1));
  if (!(r1 === r2 || c1 === c2 || Math.abs(r2 - r1) === Math.abs(c2 - c1))) return null;
  return Array.from({ length: len + 1 }, (_, k) => (r1 + dr * k) * n + (c1 + dc * k));
}

// 고른 줄이 아직 못 찾은 단어(앞 · 뒤 어느 쪽으로 읽어도)면 그 단어를 돌려준다
function wsTrySelect(game, a, b) {
  const cells = wsLine(game, a, b);
  if (!cells || cells.length < 3) return null;
  const s = cells.map((i) => game.grid[i]).join("");
  const r = [...s].reverse().join("");
  const hit = game.words.find((x) => !x.found && (x.w.word === s || x.w.word === r));
  if (!hit) return null;
  hit.found = true;
  hit.color = WS_COLORS[game.words.filter((x) => x.found).length - 1];
  cells.forEach((i) => (game.foundCells[i] = hit.color));
  return hit;
}

function renderWordSearchListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const conf = WS_CONF[lv.id];
    const best = getSectionBest(profileName, "wordsearch", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">${conf.size}×${conf.size} 판 · 단어 ${conf.count}개${conf.showWord ? "" : " · 뜻만 보고 찾기"}${conf.dirs.length > 4 ? " · 거꾸로도 숨어 있어요" : ""}</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `✅ ${best.total}번 완성` : "도전 전"}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-wordsearch">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🔍 단어 찾기 퍼즐</h1>
      <p class="subtitle">글자판 속에 숨은 단어를 찾아요 · 할 때마다 새 판</p>
      <section class="lesson-section"><p class="lesson-point-text">첫 글자에서 마지막 글자까지 <b>손가락으로 쭉 그어요</b>. 첫 글자와 마지막 글자를 차례로 눌러도 돼요. 단어는 가로 · 세로 · 대각선으로 숨어 있어요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function renderWordSearchScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  const foundN = game.words.filter((x) => x.found).length;
  const wordList = game.words
    .map((x) => `<li class="ws-word${x.found ? " found" : ""}" style="${x.found ? `--wc:${x.color}` : ""}"><span>${x.w.emoji}</span> ${x.found || game.showWord ? `<b>${x.w.word}</b>` : `<b class="ws-blank">${x.w.word.length}글자</b>`}<small>${x.w.meaningKo}</small></li>`)
    .join("");
  const cells = game.grid
    .map((ch, i) => `<button class="ws-cell${game.foundCells[i] ? " found" : ""}${game.anchor === i ? " sel" : ""}${game.hintCell === i ? " hint" : ""}" data-i="${i}" style="${game.foundCells[i] ? `--wc:${game.foundCells[i]}` : ""}" ${game.done ? "disabled" : ""}>${ch}</button>`)
    .join("");
  root.innerHTML = `
    <div class="screen screen-wordsearch no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">${game.done ? "← 단계 고르기" : "× 그만하기"}</button>
        <span class="cw-progress">찾은 단어 ${foundN} / ${game.words.length}</span>
      </div>
      ${game.done ? `<div class="result-banner correct" role="status">🎉 다 찾았어요! ${Math.floor(game.seconds / 60) ? `${Math.floor(game.seconds / 60)}분 ` : ""}${game.seconds % 60}초${game.hints ? ` · 힌트 ${game.hints}번` : ""}</div>` : ""}
      <div class="ws-grid" id="wsGrid" style="--n:${game.size}">${cells}</div>
      <ul class="ws-words">${wordList}</ul>
      ${
        game.done
          ? `<div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 새 판으로 다시</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>`
          : `<button class="link-btn" id="hintBtn">💡 힌트: 못 찾은 단어의 첫 글자 보기</button>`
      }
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  if (game.done) {
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  root.querySelector("#hintBtn").addEventListener("click", actions.hint);

  // 손가락으로 긋기 + 두 번 눌러 고르기
  const grid = root.querySelector("#wsGrid");
  let dragFrom = null;
  let dragTo = null;
  const cellAt = (e) => {
    const el = document.elementFromPoint(e.clientX, e.clientY)?.closest?.("[data-i]");
    return el && grid.contains(el) ? Number(el.dataset.i) : null;
  };
  const paint = (a, b) => {
    const line = a !== null && b !== null ? wsLine(game, a, b) || [a] : [];
    grid.querySelectorAll(".ws-cell").forEach((el) => el.classList.toggle("drag", line.includes(Number(el.dataset.i))));
  };
  grid.addEventListener("pointerdown", (e) => {
    const i = cellAt(e);
    if (i === null) return;
    e.preventDefault();
    dragFrom = i;
    dragTo = i;
    grid.setPointerCapture?.(e.pointerId);
    paint(i, i);
  });
  grid.addEventListener("pointermove", (e) => {
    if (dragFrom === null) return;
    const i = cellAt(e);
    if (i !== null && i !== dragTo) {
      dragTo = i;
      paint(dragFrom, dragTo);
    }
  });
  const end = () => {
    if (dragFrom === null) return;
    const [a, b] = [dragFrom, dragTo];
    dragFrom = null;
    paint(null, null);
    if (a !== b) actions.select(a, b);
    else actions.tap(a);
  };
  grid.addEventListener("pointerup", end);
  grid.addEventListener("pointercancel", () => {
    dragFrom = null;
    paint(null, null);
  });
}

const wordSearchActions = {
  select: (a, b) => {
    const { wordsearch: game } = store.getState();
    if (game.done) return;
    const hit = wsTrySelect(game, a, b);
    game.anchor = null;
    if (!hit) {
      playSound("wrong");
      set({});
      return;
    }
    game.hintCell = null;
    playSound("correct");
    speak(hit.w.word, { rate: 0.85 });
    recordActivity(currentProfile());
    if (game.words.every((x) => x.found)) {
      game.done = true;
      game.seconds = Math.round((Date.now() - game.start) / 1000);
      recordWordSearchDone(currentProfile(), game.levelId);
      burstConfetti(60);
      announceBadges(checkNewBadges(currentProfile()));
    }
    set({});
  },
  tap: (i) => {
    const { wordsearch: game } = store.getState();
    if (game.anchor === null || game.anchor === i) {
      game.anchor = game.anchor === i ? null : i;
      set({});
    } else wordSearchActions.select(game.anchor, i);
  },
  hint: () => {
    const { wordsearch: game } = store.getState();
    const left = game.words.filter((x) => !x.found);
    if (!left.length) return;
    game.hintCell = left[Math.floor(Math.random() * left.length)].cells[0];
    game.hints += 1;
    set({});
  },
  again: () => set({ wordsearch: buildWordSearch(store.getState().wordsearch.levelId) }),
  home: () => goHome(),
  quit: () => set({ screen: "wordSearchList" }),
};

// ── 🕵️ 단어 추리: 뜻과 그림을 보고 글자를 하나씩 골라 단어를 맞힌다 (연잎 6장) ──
const GUESS_ROUND = 5;
const GUESS_LIVES = 6;
const GUESS_KEYS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

function newWordGuess(levelId) {
  const pool = (WORD_BANK[levelId] || []).filter((w) => /^[a-z]{3,10}$/.test(w.word));
  return { levelId, words: shuffle(pool).slice(0, GUESS_ROUND), index: 0, guessed: [], lives: GUESS_LIVES, listened: false, wordDone: null, results: [], done: false, isNewBest: false };
}

const guessWord = (game) => game.words[game.index];
const guessSolved = (game) => [...guessWord(game).word].every((ch) => game.guessed.includes(ch));

function renderWordGuessListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const best = getSectionBest(profileName, "wordguess", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">${GUESS_ROUND}단어 · 연잎 ${GUESS_LIVES}장</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-guess">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🕵️ 단어 추리</h1>
      <p class="subtitle">뜻을 보고 글자를 하나씩 골라 영어 단어를 맞혀요</p>
      <section class="lesson-section"><p class="lesson-point-text">없는 글자를 고르면 🐸 개구리가 밟고 있는 연잎 🪷이 하나씩 가라앉아요. 연잎이 다 없어지기 전에 맞혀요! 모음(a e i o u)부터 골라 보면 쉬워요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function renderWordGuessScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  if (game.done) {
    const solved = game.results.filter((r) => r.ok).length;
    root.innerHTML = `
      <div class="screen screen-guess"${levelThemeStyle(level)}>
        <h1 class="title">🕵️ 단어 추리 결과</h1>
        <div class="result-banner ${solved >= 3 ? "correct" : "wrong"}" role="status">${solved === GUESS_ROUND ? "🎉 다 맞혔어요! 명탐정이에요!" : `${GUESS_ROUND}개 중 ${solved}개 맞혔어요`}${game.isNewBest ? " · 🏆 최고 기록!" : ""}</div>
        <ul class="guess-results">${game.results.map((r) => `<li class="${r.ok ? "ok" : "no"}">${r.ok ? "✅" : "❌"} ${r.w.emoji} <b>${r.w.word}</b> <small>${r.w.meaningKo}</small><button class="chip-btn" data-say="${r.w.word}">🔊</button></li>`).join("")}</ul>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 새 단어로 다시</button>
          <button class="secondary-btn" id="listBtn">단계 고르기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speak(b.dataset.say, { rate: 0.85 })));
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const w = guessWord(game);
  const pads = `${"🪷".repeat(game.lives)}${"💧".repeat(GUESS_LIVES - game.lives)}`;
  const slots = [...w.word].map((ch) => `<span class="guess-slot${game.guessed.includes(ch) ? " open" : game.wordDone ? " miss" : ""}">${game.guessed.includes(ch) || game.wordDone ? ch : ""}</span>`).join("");
  root.innerHTML = `
    <div class="screen screen-guess no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.index + 1} / ${game.words.length}</span>
      </div>
      <div class="guess-pond" aria-label="남은 연잎 ${game.lives}장"><span class="guess-frog${game.lives === 0 ? " splash" : ""}">${game.lives === 0 ? "💦" : "🐸"}</span><span>${pads}</span></div>
      <div class="guess-clue">
        <span class="guess-emoji">${w.emoji}</span>
        <p><b>${w.meaningKo}</b><small>${w.word.length}글자</small></p>
      </div>
      <div class="guess-slots">${slots}</div>
      ${
        game.wordDone
          ? `<div class="result-banner ${game.wordDone === "win" ? "correct" : "wrong"}" role="status">${game.wordDone === "win" ? "🎉 맞혔어요!" : "💦 연잎이 다 가라앉았어요"} · <b>${w.word}</b> ${w.ipa || ""}</div>
             <button class="primary-btn" id="nextBtn">${game.index + 1 < game.words.length ? "다음 단어 →" : "결과 보기"}</button>`
          : `<div class="guess-keys">${GUESS_KEYS.map((row) => `<div class="guess-row">${[...row].map((ch) => `<button class="guess-key${game.guessed.includes(ch) ? (w.word.includes(ch) ? " hit" : " miss") : ""}" data-k="${ch}" ${game.guessed.includes(ch) ? "disabled" : ""}>${ch}</button>`).join("")}</div>`).join("")}</div>
             <button class="link-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>💡 힌트: 소리 들어 보기${game.listened ? " (사용함)" : ""}</button>`
      }
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
  root.querySelector("#listenBtn")?.addEventListener("click", actions.listen);
  root.querySelectorAll("[data-k]").forEach((b) => b.addEventListener("click", () => actions.letter(b.dataset.k)));
}

const wordGuessActions = {
  letter: (ch) => {
    const { guess: game } = store.getState();
    if (!game || game.done || game.wordDone || game.guessed.includes(ch)) return;
    const w = guessWord(game);
    game.guessed.push(ch);
    if (w.word.includes(ch)) playSound("correct");
    else {
      game.lives -= 1;
      playSound("wrong");
    }
    const finished = guessSolved(game) ? "win" : game.lives <= 0 ? "lose" : null;
    if (finished) {
      game.wordDone = finished;
      game.results.push({ w, ok: finished === "win" });
      recordAnswerOutcome(currentProfile(), w.id, game.levelId, finished === "win");
      recordActivity(currentProfile());
      speak(w.word, { rate: 0.85 });
    }
    set({});
  },
  listen: () => {
    const { guess: game } = store.getState();
    game.listened = true;
    speak(guessWord(game).word, { rate: 0.75 });
    set({});
  },
  next: () => {
    const { guess: game } = store.getState();
    if (game.index + 1 < game.words.length) {
      Object.assign(game, { index: game.index + 1, guessed: [], lives: GUESS_LIVES, listened: false, wordDone: null });
    } else {
      game.done = true;
      const solved = game.results.filter((r) => r.ok).length;
      game.isNewBest = recordSectionResult(currentProfile(), "wordguess", game.levelId, solved, game.words.length);
      if (solved === game.words.length) burstConfetti(60);
      announceBadges(checkNewBadges(currentProfile()));
    }
    set({});
  },
  again: () => set({ guess: newWordGuess(store.getState().guess.levelId) }),
  list: () => set({ screen: "wordGuessList" }),
  home: () => goHome(),
  quit: () => set({ screen: "wordGuessList" }),
};

// 실제 키보드로도 글자를 고를 수 있게 한다
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey || !/^[a-zA-Z]$/.test(e.key)) return;
  if (typeof store === "undefined" || store.getState().screen !== "wordGuess") return;
  wordGuessActions.letter(e.key.toLowerCase());
});

// ── ❓ 영어 수수께끼 ──
const RIDDLE_QUIZ_SIZE = 8;

function buildRiddleQuestions(setId) {
  const rs = RIDDLE_SETS.find((s) => s.id === setId);
  return shuffle(rs.items)
    .slice(0, RIDDLE_QUIZ_SIZE)
    .map((it) => {
      const label = (x) => `${x.emoji} ${x.a}`;
      const others = shuffle(rs.items.filter((x) => x !== it)).slice(0, 3);
      return {
        id: it.id,
        kind: "riddle",
        label: `❓ ${rs.label} · 나는 무엇일까요?`,
        q: it.en,
        ko: `<details class="riddle-ko"><summary>🇰🇷 해석 보기</summary>${it.ko}</details>`,
        choices: shuffle([it, ...others].map(label)),
        correctAnswer: label(it),
        explain: `<b>${it.a}</b> = ${it.aKo}`,
        summary: `${it.emoji} <b>${it.a}</b> · ${it.aKo}`,
        listenText: it.en,
        selectedAnswer: null,
      };
    });
}

function renderRiddleListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName);
  const card = (s) => {
    const best = getSectionBest(profileName, "riddle", s.id);
    return `
      <button class="level-card" data-set="${s.id}">
        <span class="level-icon">${s.emoji}</span>
        <span class="topic-text"><span class="level-label">${s.label}</span><span class="topic-summary">${s.levels.map((id) => shortLevelLabel(levelById(id))).join(" · ")} · ${s.items.length}개 중 ${RIDDLE_QUIZ_SIZE}문제</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(RIDDLE_SETS, (s) => s.levels, myLevel);
  root.innerHTML = `
    <div class="screen screen-riddle">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">❓ 영어 수수께끼</h1>
      <p class="subtitle">영어로 된 힌트를 읽고 "나는 무엇일까요?"를 맞혀요</p>
      <section class="lesson-section"><p class="lesson-point-text">모르는 말이 있으면 <b>🇰🇷 해석 보기</b>를 눌러요. 수수께끼는 말장난이 많아요. 예) hands = 손 / 시곗바늘</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => start(b.dataset.set)));
}

// ── 🎧 문장 받아쓰기: 문장을 듣고 쓰면 틀린 단어를 표시한다 ──
const DICT_SIZE = 5;
const DICT_LEN = { "elementary-low": [3, 6], "elementary-mid": [4, 8], "elementary-high": [5, 10], middle: [6, 12], high: [7, 15], adult: [7, 15] };

function dictationPool(levelId) {
  const [min, max] = DICT_LEN[levelId] || [4, 10];
  const sources = [...READING_PASSAGES.filter((p) => p.levelId === levelId), ...STORY_SERIES.filter((s) => s.levelId === levelId).flatMap((s) => s.chapters)];
  const seen = new Set();
  return sources
    .flatMap((p) => p.sentences)
    .filter((s) => {
      const n = speakingWords(s.en).length;
      if (n < min || n > max || seen.has(s.en) || /["“”]/.test(s.en)) return false;
      seen.add(s.en);
      return true;
    });
}

function newDictation(levelId) {
  return { levelId, items: shuffle(dictationPool(levelId)).slice(0, DICT_SIZE), index: 0, typed: "", match: null, showKo: false, hits: 0, total: 0, perfect: 0, done: false, isNewBest: false };
}

function renderDictationListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const best = getSectionBest(profileName, "sentdict", lv.id);
    const [min, max] = DICT_LEN[lv.id];
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">${DICT_SIZE}문장 · 한 문장 ${min}~${max}단어 · 문장 ${dictationPool(lv.id).length}개</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `${Math.round((best.correct / best.total) * 100)}점` : "도전 전"}</span>
      </button>`;
  };
  const levels = LEVELS.filter((lv) => dictationPool(lv.id).length >= DICT_SIZE);
  const { mine, others } = splitByMyLevel(levels, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-dictation">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎧 문장 받아쓰기</h1>
      <p class="subtitle">문장을 듣고 그대로 써요 · 맞게 쓴 단어는 초록, 틀린 단어는 빨강</p>
      <section class="lesson-section"><p class="lesson-point-text">대문자 · 마침표 · 쉼표는 신경 쓰지 않아도 돼요. 단어만 맞으면 정답! <b>🐢 천천히</b>로 여러 번 들어도 괜찮아요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function renderDictationScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  if (game.done) {
    const score = game.total ? Math.round((game.hits / game.total) * 100) : 0;
    root.innerHTML = `
      <div class="screen screen-dictation"${levelThemeStyle(level)}>
        <h1 class="title">🎧 받아쓰기 결과</h1>
        <div class="result-banner ${score >= 80 ? "correct" : "wrong"}" role="status">${score}점 · 단어 ${game.hits} / ${game.total} · 완벽한 문장 ${game.perfect}개${game.isNewBest ? " · 🏆 최고 기록!" : ""}</div>
        <ol class="dict-review">${game.items.map((s) => `<li><button class="chip-btn" data-say="${escapeHtml(s.en)}">🔊</button> ${s.en}<small>${s.ko}</small></li>`).join("")}</ol>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 새 문장으로 다시</button>
          <button class="secondary-btn" id="listBtn">단계 고르기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speak(b.dataset.say)));
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const s = game.items[game.index];
  const m = game.match;
  root.innerHTML = `
    <div class="screen screen-dictation no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.index + 1} / ${game.items.length} · 단어 ${game.hits} / ${game.total}</span>
      </div>
      <div class="question-card">
        <p class="question-label">🎧 듣고 그대로 써요</p>
        <div class="listen-row">
          <button class="listen-btn" id="sayBtn" ${speechSupported ? "" : "disabled"}>🔊 다시 듣기</button>
          <button class="listen-btn" id="slowBtn" ${speechSupported ? "" : "disabled"}>🐢 천천히</button>
        </div>
        ${game.showKo || m ? `<p class="grammar-question-ko">${s.ko}</p>` : `<button class="link-btn" id="koBtn">💡 힌트: 우리말 뜻 보기</button>`}
      </div>
      ${
        m
          ? `<div class="explain-card">
          <p class="speak-words">${m.words.map((w, k) => `<span class="${m.hit[k] ? "hit" : "miss"}">${w}</span>`).join(" ")}</p>
          <p class="explain-mine">내가 쓴 답: <b>${escapeHtml(game.typed) || "(빈칸)"}</b></p>
          <p class="dict-answer">정답: ${s.en}</p>
          <div class="result-banner ${m.score === 1 ? "correct" : m.score >= 0.8 ? "correct" : "wrong"}">${m.score === 1 ? "🎉 완벽해요!" : `단어 ${m.hit.filter(Boolean).length} / ${m.words.length} 맞았어요`}</div>
        </div>
        <button class="primary-btn" id="nextBtn">${game.index + 1 < game.items.length ? "다음 문장 →" : "결과 보기"}</button>`
          : `<form id="dictForm" class="dict-form" autocomplete="off">
          <textarea id="dictInput" class="dict-input" rows="3" autocapitalize="off" spellcheck="false" placeholder="들은 문장을 영어로 써요" aria-label="받아쓰기 답">${escapeHtml(game.typed)}</textarea>
          <button class="primary-btn" type="submit">✔ 확인</button>
        </form>`
      }
    </div>`;
  const say = (rate) => speak(s.en, { rate });
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#sayBtn").addEventListener("click", () => say(0.85));
  root.querySelector("#slowBtn").addEventListener("click", () => say(0.55));
  root.querySelector("#koBtn")?.addEventListener("click", () => {
    game.typed = root.querySelector("#dictInput")?.value || "";
    actions.showKo();
  });
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
  const form = root.querySelector("#dictForm");
  if (form) {
    const input = root.querySelector("#dictInput");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      actions.check(input.value);
    });
  }
  if (!m && game.spokenFor !== game.index) {
    game.spokenFor = game.index;
    setTimeout(() => say(0.85), 350);
  }
}

const dictationActions = {
  showKo: () => {
    store.getState().dictation.showKo = true;
    set({});
  },
  check: (text) => {
    const { dictation: game } = store.getState();
    if (game.match) return;
    const s = game.items[game.index];
    game.typed = text.trim();
    game.match = speakingMatch(s.en, game.typed);
    const hit = game.match.hit.filter(Boolean).length;
    game.hits += hit;
    game.total += game.match.words.length;
    if (game.match.score === 1) game.perfect += 1;
    playSound(game.match.score >= 0.8 ? "correct" : "wrong");
    recordActivity(currentProfile());
    set({});
  },
  next: () => {
    const { dictation: game } = store.getState();
    if (game.index + 1 < game.items.length) Object.assign(game, { index: game.index + 1, typed: "", match: null, showKo: false });
    else {
      game.done = true;
      game.isNewBest = recordSectionResult(currentProfile(), "sentdict", game.levelId, game.hits, game.total);
      if (game.hits === game.total) burstConfetti(60);
      announceBadges(checkNewBadges(currentProfile()));
    }
    set({});
  },
  again: () => set({ dictation: newDictation(store.getState().dictation.levelId) }),
  list: () => set({ screen: "dictationList" }),
  home: () => goHome(),
  quit: () => set({ screen: "dictationList" }),
};

// ── ⭐ 내 메뉴: 홈 타일을 꾹 누르면 맨 위에 고정한다 ──
const LONG_PRESS_MS = 550;

function setupHomePins(root, profileName) {
  const pins = getHomePins(profileName);
  const grid = root.querySelector("#pinGrid");
  pins.forEach((id) => {
    const tile = root.querySelector(`#${id}.tile`);
    if (tile && grid) {
      tile.classList.add("pinned");
      grid.append(tile);
    }
  });
  const hasPins = grid && grid.children.length > 0;
  root.querySelector("#pinGroup")?.classList.toggle("pin-empty", !hasPins);

  // 꾹 누르면 고정/해제하고, 손을 뗀 뒤 따라오는 클릭은 삼킨 다음 홈을 다시 그린다
  let timer = null;
  let pressed = false;
  let startXY = null;
  const finish = () => {
    clearTimeout(timer);
    if (!pressed) return;
    pressed = false;
    setTimeout(() => {
      if (store.getState().screen === "home") set({});
    }, 60);
  };
  root.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("contextmenu", (e) => e.preventDefault());
    tile.addEventListener(
      "click",
      (e) => {
        if (tile.dataset.pressed) {
          delete tile.dataset.pressed;
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      },
      true
    );
    tile.addEventListener("pointerdown", (e) => {
      startXY = [e.clientX, e.clientY];
      clearTimeout(timer);
      timer = setTimeout(() => {
        pressed = true;
        tile.dataset.pressed = "1";
        const pinned = toggleHomePin(profileName, tile.id);
        tile.classList.toggle("pinned", pinned);
        if (getSettings().vibrate) navigator.vibrate?.(30);
        showToast(`<span class="toast-emoji">${pinned ? "📌" : "🗑️"}</span><span><b>${tile.querySelector(".tile-title")?.textContent || ""}</b> ${pinned ? "내 메뉴에 고정했어요" : "고정을 풀었어요"}</span>`);
      }, LONG_PRESS_MS);
    });
    tile.addEventListener("pointermove", (e) => {
      if (startXY && Math.hypot(e.clientX - startXY[0], e.clientY - startXY[1]) > 10) clearTimeout(timer);
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => tile.addEventListener(ev, finish));
  });
}

// ── 📨 부모용 이번 주 요약 (카톡 등에 붙여 넣기) ──
function weeklySummaryText(profileName) {
  const [last, now] = getWeeklyHistory(profileName, 2);
  const stats = getStats(profileName);
  const monday = new Date();
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const md = (d) => `${d.getMonth() + 1}/${d.getDate()}`;
  const wrong = getWrongWords(profileName)
    .slice()
    .sort((a, b) => (b.missed || 0) - (a.missed || 0))
    .slice(0, 5)
    .map((r) => findWordById(r.id))
    .filter(Boolean);
  const p = getProfileData(profileName);
  const weekKeys = weekDateKeys();
  const badges = Object.entries(p.badges)
    .filter(([, d]) => weekKeys.includes(d))
    .map(([id]) => BADGES.find((b) => b.id === id))
    .filter(Boolean);
  const diff = now.answers - last.answers;
  const lines = [
    `📚 ${profileName} 영어 공부 · 이번 주 (${md(monday)}~${md(new Date())})`,
    `📅 공부한 날: ${now.days}일${stats.streak > 0 ? ` (🔥 ${stats.streak}일 연속)` : ""}`,
    `✏️ 푼 문제: ${now.answers}문제 (지난주 ${last.answers}문제${diff ? `, ${diff > 0 ? "▲" : "▼"}${Math.abs(diff)}` : ""})`,
    `☀️ 오늘의 학습: ${now.daily}번`,
    `📖 이번 주 본 단어: ${weeklySeenCount(profileName)}개`,
  ];
  if (badges.length) lines.push(`🏅 새 배지: ${badges.map((b) => `${b.emoji} ${b.title}`).join(", ")}`);
  if (wrong.length) lines.push(`📝 자주 틀린 단어: ${wrong.map((w) => `${w.word}(${w.meaningKo})`).join(", ")}`);
  return lines.join("\n");
}

async function shareWeeklySummary(profileName, mode) {
  const text = weeklySummaryText(profileName);
  if (mode === "share" && navigator.share) {
    try {
      await navigator.share({ text });
      return;
    } catch (e) {
      if (e?.name === "AbortError") return;
    }
  }
  let ok = false;
  try {
    await navigator.clipboard.writeText(text);
    ok = true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.append(ta);
    ta.select();
    try {
      ok = document.execCommand("copy");
    } catch {}
    ta.remove();
  }
  showToast(`<span class="toast-emoji">${ok ? "📋" : "⚠️"}</span><span>${ok ? "이번 주 요약을 복사했어요. 카톡에 붙여 넣어 보세요!" : "복사하지 못했어요"}</span>`);
}
