// 🐍 영어 끝말잇기 · 🎱 단어 빙고 · 📆 출석 달력 · 🖨️ 인쇄용 단어 시험지

// ── 🐍 영어 끝말잇기: 앞 단어의 마지막 글자로 시작하는 단어를 이어 간다 ──
const CHAIN_LIVES = 3;
let chainByLetter = null;

// 첫 글자별 단어 목록 (한 단어 · 세 글자 이상)
function chainWords(letter) {
  if (!chainByLetter) {
    chainByLetter = {};
    for (const lv of LEVELS) {
      for (const w of WORD_BANK[lv.id] || []) {
        if (!/^[a-z]{3,}$/.test(w.word)) continue;
        (chainByLetter[w.word[0]] ||= []).push({ w, levelId: lv.id });
      }
    }
  }
  return chainByLetter[letter] || [];
}

// 내 단계와 가까운 단어부터
function chainByCloseness(list, levelId) {
  const my = LEVELS.findIndex((lv) => lv.id === levelId);
  const dist = (x) => Math.abs(LEVELS.findIndex((lv) => lv.id === x.levelId) - my);
  return shuffle(list).sort((a, b) => dist(a) - dist(b));
}

const chainLast = (game) => game.history[game.history.length - 1].w.word;
const chainNeed = (game) => chainLast(game).slice(-1);

function chainOptions(game) {
  const need = chainNeed(game);
  const valid = chainByCloseness(chainWords(need).filter((x) => !game.used.includes(x.w.word)), game.levelId).slice(0, 2);
  const letters = "abcdefghijklmnoprstw".split("").filter((l) => l !== need);
  const wrong = [];
  for (const l of shuffle(letters)) {
    const pick = chainByCloseness(chainWords(l).filter((x) => !game.used.includes(x.w.word)), game.levelId)[0];
    if (pick) wrong.push(pick);
    if (wrong.length === 4 - valid.length) break;
  }
  return shuffle([...valid, ...wrong]).map((x) => ({ ...x, ok: x.w.word[0] === need, hidden: false, wrong: false }));
}

function newWordChain(levelId) {
  // 컴퓨터가 내 단계 단어로 시작한다 (다음 글자로 시작하는 단어가 넉넉한 것으로)
  const pool = (WORD_BANK[levelId] || []).filter((w) => /^[a-z]{3,}$/.test(w.word)).map((w) => ({ w, levelId }));
  const start = shuffle(pool).find((x) => chainWords(x.w.word.slice(-1)).length > 5) || chainWords("a")[0];
  const game = { levelId, used: [start.w.word], history: [{ who: "cpu", ...start }], lives: CHAIN_LIVES, turns: 0, hintUsed: false, options: [], done: false, result: null, isNewBest: false, message: "" };
  game.options = chainOptions(game);
  return game;
}

// 컴퓨터 차례: 이을 단어가 없거나, 오래 이어지면 가끔 "모르겠어요!" 하고 진다
function chainComputerMove(game) {
  const need = chainNeed(game);
  const cands = chainByCloseness(chainWords(need).filter((x) => !game.used.includes(x.w.word)), game.levelId);
  const giveUp = cands.length === 0 || (game.turns >= 6 && Math.random() < 0.12 + game.turns * 0.01);
  if (giveUp) return null;
  // 사람이 이을 단어가 있는 글자로 끝나는 단어를 고른다
  return cands.find((x) => chainWords(x.w.word.slice(-1)).some((y) => !game.used.includes(y.w.word) && y.w.word !== x.w.word)) || null;
}

function renderWordChainListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const best = getSectionBest(profileName, "wordchain", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">이 단계 단어가 먼저 나와요</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `최고 ${best.correct}개` : "도전 전"}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-chain">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🐍 영어 끝말잇기</h1>
      <p class="subtitle">컴퓨터 🤖와 번갈아 단어를 이어요 · apple → egg → green …</p>
      <section class="lesson-section"><p class="lesson-point-text">앞 단어의 <b>마지막 글자</b>로 시작하는 단어를 골라요. 틀리면 ❤️가 하나 줄고, 직접 써도 돼요. 컴퓨터가 막히면 내가 이겨요!</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function renderWordChainScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  const last = chainLast(game);
  const chips = game.history
    .slice(-8)
    .map((h) => `<span class="chain-chip ${h.who}"><span>${h.who === "cpu" ? "🤖" : "🧒"}</span>${h.w.emoji} <b>${h.w.word}</b><small>${h.w.meaningKo}</small></span>`)
    .join(`<span class="chain-arrow">→</span>`);
  if (game.done) {
    root.innerHTML = `
      <div class="screen screen-chain"${levelThemeStyle(level)}>
        <h1 class="title">🐍 끝말잇기 결과</h1>
        <div class="result-banner ${game.result === "win" ? "correct" : "wrong"}" role="status">
          ${game.result === "win" ? `🎉 컴퓨터가 "${chainNeed(game)}"로 시작하는 단어를 못 찾았어요. 내가 이겼어요!` : "💔 하트를 다 썼어요. 다음엔 이길 수 있어요!"}
        </div>
        <p class="subtitle">내가 이은 단어 <b>${game.turns}개</b>${game.isNewBest ? " · 🏆 최고 기록!" : ""}</p>
        <div class="chain-row">${game.history.map((h) => `<span class="chain-chip ${h.who}"><span>${h.who === "cpu" ? "🤖" : "🧒"}</span>${h.w.emoji} <b>${h.w.word}</b><small>${h.w.meaningKo}</small></span>`).join(`<span class="chain-arrow">→</span>`)}</div>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 다시 하기</button>
          <button class="secondary-btn" id="listBtn">단계 고르기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  root.innerHTML = `
    <div class="screen screen-chain"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">이은 단어 ${game.turns} · ${"❤️".repeat(game.lives)}${"🤍".repeat(CHAIN_LIVES - game.lives)}</span>
      </div>
      <div class="chain-row">${chips}</div>
      <div class="chain-need">
        <p><b>${last.slice(0, -1)}<span class="chain-letter">${last.slice(-1)}</span></b></p>
        <small>다음은 <b class="chain-letter">${chainNeed(game).toUpperCase()}</b> 로 시작하는 단어!</small>
      </div>
      ${game.message ? `<p class="chain-msg" role="status">${game.message}</p>` : ""}
      <div class="choice-grid">
        ${game.options
          .map((o, i) => (o.hidden ? "" : `<button class="choice-btn chain-opt${o.wrong ? " wrong" : ""}" data-o="${i}" ${o.wrong ? "disabled" : ""}><span>${o.w.emoji}</span> ${o.w.word}<small>${o.w.meaningKo}</small></button>`))
          .join("")}
      </div>
      <form class="chain-type" id="typeForm" autocomplete="off">
        <input id="typeInput" type="text" inputmode="latin" autocapitalize="off" spellcheck="false" placeholder="${chainNeed(game)}로 시작하는 단어 직접 쓰기" aria-label="단어 직접 쓰기">
        <button class="secondary-btn" type="submit">✔</button>
      </form>
      <button class="link-btn" id="hintBtn" ${game.hintUsed ? "disabled" : ""}>💡 힌트: 틀린 보기 하나 지우기</button>
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#hintBtn").addEventListener("click", actions.hint);
  root.querySelectorAll("[data-o]").forEach((b) => b.addEventListener("click", () => actions.pick(Number(b.dataset.o))));
  root.querySelector("#typeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    actions.type(root.querySelector("#typeInput").value);
  });
}

// ── 🎱 단어 빙고: 소리를 듣고 내 판에서 그 단어를 찾아 지운다 ──
const BINGO_N = 4;
const BINGO_LINES = [
  ...Array.from({ length: BINGO_N }, (_, r) => Array.from({ length: BINGO_N }, (_, c) => r * BINGO_N + c)),
  ...Array.from({ length: BINGO_N }, (_, c) => Array.from({ length: BINGO_N }, (_, r) => r * BINGO_N + c)),
  Array.from({ length: BINGO_N }, (_, i) => i * BINGO_N + i),
  Array.from({ length: BINGO_N }, (_, i) => i * BINGO_N + (BINGO_N - 1 - i)),
];

function bingoWordPool(levelId) {
  if (levelId.startsWith("elementary")) return pictureWordPool(levelId);
  const list = (WORD_BANK[levelId] || []).filter((w) => /^[a-z]+$/.test(w.word));
  return list.filter((w, i) => list.findIndex((x) => x.emoji === w.emoji) === i);
}

function newBingoPlayer(name, levelId) {
  const m = findMember(name);
  return { name, emoji: m?.emoji || "🧒", color: m?.color || "#ff8b3d", levelId, board: shuffle(bingoWordPool(levelId)).slice(0, BINGO_N * BINGO_N), marked: Array(BINGO_N * BINGO_N).fill(false), queue: shuffle([...Array(BINGO_N * BINGO_N).keys()]), hits: 0, taps: 0 };
}

function newBingo(players) {
  return { players, turn: 0, phase: players.length > 1 ? "ready" : "play", wrongCell: null, done: false, winner: null, isNewBest: false };
}

const bingoLineCount = (p) => BINGO_LINES.filter((line) => line.every((i) => p.marked[i])).length;
const bingoCall = (game) => {
  const p = game.players[game.turn];
  return p.board[p.queue[0]];
};

function renderBingoSetupScreen(root, { profileName, startSolo, startDuo, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const others = getFamily().filter((m) => m.name !== profileName);
  const card = (lv) => {
    const best = getSectionBest(profileName, "bingo", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">혼자 하기</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `정확도 ${Math.round((best.correct / best.total) * 100)}%` : "도전 전"}</span>
      </button>`;
  };
  const split = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-bingo">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎱 단어 빙고</h1>
      <p class="subtitle">소리를 듣고 내 판에서 그 단어를 눌러요 · 한 줄이 다 지워지면 빙고!</p>
      <section class="lesson-section"><p class="lesson-point-text">틀린 칸을 누르면 그 단어는 맨 뒤로 가서 나중에 다시 나와요. 적게 틀릴수록 빨리 빙고가 돼요.</p></section>
      ${
        others.length
          ? `<h2 class="section-title">👨‍👩‍👧 둘이서 (번갈아 하기 · 각자 자기 단계 판)</h2>
             <div class="battle-pick">${others.map((m) => `<button class="battle-member" data-with="${escapeHtml(m.name)}" style="--accent:${m.color}"><span class="battle-member-emoji">${m.emoji}</span><b>${m.name}</b><small>와(과) 함께</small></button>`).join("")}</div>`
          : ""
      }
      <h2 class="section-title">🙋 혼자 하기</h2>
      ${levelSplitHtml(split.mine.map(card).join(""), split.others.map(card).join(""), split.others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => startSolo(b.dataset.level)));
  root.querySelectorAll("[data-with]").forEach((b) => b.addEventListener("click", () => startDuo(b.dataset.with)));
}

function renderBingoScreen(root, { game, actions }) {
  const p = game.players[game.turn];
  const duo = game.players.length > 1;
  const level = levelById(p.levelId);
  const board = (pl, active) => `
    <div class="bingo-board">
      ${pl.board
        .map((w, i) => `<button class="bingo-cell${pl.marked[i] ? " marked" : ""}${active && game.wrongCell === i ? " shake" : ""}" data-cell="${i}" ${!active || pl.marked[i] ? "disabled" : ""}><span class="bingo-emoji">${pl.marked[i] ? "⭐" : w.emoji}</span><small>${w.word}</small></button>`)
        .join("")}
    </div>`;
  const scores = duo ? `<div class="battle-board">${game.players.map((pl, k) => `<div class="battle-side${k === game.turn && !game.done ? " turn" : ""}" style="--accent:${pl.color}"><span class="battle-member-emoji">${pl.emoji}</span><b>${pl.name}</b><span class="battle-score">${bingoLineCount(pl)}줄</span></div>`).join(`<span class="battle-vs">VS</span>`)}</div>` : "";

  if (game.done) {
    const w = game.winner;
    root.innerHTML = `
      <div class="screen screen-bingo"${levelThemeStyle(level)}>
        <h1 class="title">🎱 빙고!</h1>
        ${scores}
        <div class="result-banner correct" role="status">${duo ? `🏆 ${w.emoji} ${w.name} 빙고!` : `🎉 빙고! ${w.taps}번 눌러서 ${w.hits}개 맞혔어요${game.isNewBest ? " · 🏆 최고 기록!" : ""}`}</div>
        ${board(w, false)}
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 새 판으로 다시</button>
          <button class="secondary-btn" id="setupBtn">처음으로</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#setupBtn").addEventListener("click", actions.setup);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  if (game.phase === "ready") {
    root.innerHTML = `
      <div class="screen screen-bingo">
        <div class="cw-top"><button class="back-btn" id="quitBtn">× 그만하기</button></div>
        ${scores}
        <div class="battle-ready" style="--accent:${p.color}">
          <span class="battle-ready-emoji">${p.emoji}</span>
          <p><b>${p.name}</b> 차례!</p>
          <small>휴대폰을 넘겨 주세요</small>
          <button class="primary-btn" id="readyBtn">준비됐어요!</button>
        </div>
      </div>`;
    root.querySelector("#quitBtn").addEventListener("click", actions.quit);
    root.querySelector("#readyBtn").addEventListener("click", actions.ready);
    return;
  }
  root.innerHTML = `
    <div class="screen screen-bingo no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${duo ? `${p.emoji} ${p.name} · ` : ""}${bingoLineCount(p) ? `${bingoLineCount(p)}줄 · ` : ""}맞힘 ${p.hits}</span>
      </div>
      ${scores}
      <div class="listen-row bingo-listen">
        <button class="listen-btn" id="sayBtn" ${speechSupported ? "" : "disabled"}>🔊 다시 듣기</button>
        <button class="listen-btn" id="slowBtn" ${speechSupported ? "" : "disabled"}>🐢 천천히</button>
      </div>
      ${board(p, true)}
    </div>`;
  const call = bingoCall(game);
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#sayBtn").addEventListener("click", () => speak(call.word, { rate: 0.85 }));
  root.querySelector("#slowBtn").addEventListener("click", () => speak(call.word, { rate: 0.55 }));
  root.querySelectorAll("[data-cell]").forEach((b) => b.addEventListener("click", () => actions.tap(Number(b.dataset.cell))));
  if (!game.spokenFor || game.spokenFor !== `${game.turn}:${p.taps}`) {
    game.spokenFor = `${game.turn}:${p.taps}`;
    setTimeout(() => speak(call.word, { rate: 0.85 }), 350);
  }
}

// ── 📆 출석 달력 ──
const WEEKDAYS_KO = ["일", "월", "화", "수", "목", "금", "토"];

function renderCalendarScreen(root, { profileName, offset, setOffset, back }) {
  const p = getProfileData(profileName);
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const today = dateKey();
  const cells = [];
  for (let i = 0; i < first.getDay(); i++) cells.push(`<span class="cal-cell empty"></span>`);
  let studied = 0;
  for (let d = 1; d <= days; d++) {
    const key = dateKey(new Date(first.getFullYear(), first.getMonth(), d));
    const n = p.activity[key] || 0;
    if (n > 0) studied += 1;
    cells.push(`<span class="cal-cell${n ? " stamped" : ""}${key === today ? " today" : ""}${key > today ? " future" : ""}"><b>${d}</b>${n ? `<span class="cal-stamp">🌟</span><small>${n}</small>` : ""}</span>`);
  }
  const passedDays = offset < 0 ? days : now.getDate();
  root.innerHTML = `
    <div class="screen screen-calendar">
      <button class="back-btn" id="backBtn">← 돌아가기</button>
      <h1 class="title">📆 출석 달력</h1>
      <div class="cal-head">
        <button class="icon-btn" id="prevBtn" ${offset <= -1 ? "disabled" : ""} aria-label="지난달">‹</button>
        <b>${first.getFullYear()}년 ${first.getMonth() + 1}월</b>
        <button class="icon-btn" id="nextBtn" ${offset >= 0 ? "disabled" : ""} aria-label="다음 달">›</button>
      </div>
      <p class="subtitle">공부한 날 <b>${studied}일</b> / ${passedDays}일${studied === days ? " · 🏆 개근!" : ""}</p>
      <div class="cal-grid">
        ${WEEKDAYS_KO.map((w) => `<span class="cal-week">${w}</span>`).join("")}
        ${cells.join("")}
      </div>
      <section class="lesson-section"><p class="lesson-point-text">한 달 동안 하루도 빠짐없이 공부하면(<b>개근</b>) ⭐ 별 상점에서 🏆 개근 트로피를, 두 번 하면 ✨ 황금 배경을 공짜로 받을 수 있어요. 지금까지 개근: <b>${p.perfectMonths.length}번</b></p></section>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelector("#prevBtn").addEventListener("click", () => setOffset(offset - 1));
  root.querySelector("#nextBtn").addEventListener("click", () => setOffset(offset + 1));
}

// ── 🖨️ 인쇄용 단어 시험지 ──
const PRINT_KINDS = [
  { id: "en-ko", label: "영어 → 뜻 쓰기" },
  { id: "ko-en", label: "뜻 → 영어 쓰기" },
  { id: "mix", label: "섞어서" },
];
const PRINT_COUNTS = [10, 20, 30];

function printSourceWords(profileName, source) {
  if (source === "wrong") return getWrongWords(profileName).map((r) => findWordById(r.id)).filter(Boolean);
  if (source === "starred") return getStarredIds(profileName).map(findWordById).filter(Boolean);
  if (source === "seen") return getWordsSeen(profileName).map((s) => findWordById(s.id)).filter(Boolean);
  return WORD_BANK[source] || [];
}

function buildPrintSheet(profileName, opts) {
  const words = shuffle(printSourceWords(profileName, opts.source)).slice(0, opts.count);
  return {
    ...opts,
    items: words.map((w, i) => {
      const enFirst = opts.kind === "en-ko" || (opts.kind === "mix" && i % 2 === 0);
      return enFirst ? { q: w.word, a: w.meaningKo, hint: "뜻" } : { q: w.meaningKo, a: w.word, hint: "영어" };
    }),
  };
}

function printSourceOptions(profileName) {
  return [
    ...LEVELS.map((lv) => ({ id: lv.id, label: `${lv.emoji} ${shortLevelLabel(lv)}`, n: (WORD_BANK[lv.id] || []).length })),
    { id: "wrong", label: "📝 오답노트", n: getWrongWords(profileName).length },
    { id: "starred", label: "⭐ 즐겨찾기", n: getStarredIds(profileName).length },
    { id: "seen", label: "📅 최근 2주 본 단어", n: getWordsSeen(profileName).length },
  ];
}

function renderPrintSetupScreen(root, { profileName, opts, setOpts, make, back }) {
  const sources = printSourceOptions(profileName);
  const cur = sources.find((s) => s.id === opts.source) || sources[0];
  root.innerHTML = `
    <div class="screen screen-print">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🖨️ 단어 시험지 만들기</h1>
      <p class="subtitle">종이로 풀 시험지와 정답지를 만들어 인쇄해요 (정답지는 다음 장)</p>
      <section class="settings-card">
        <h2 class="section-title">어떤 단어로?</h2>
        <div class="level-pick">${sources.map((s) => `<button class="pick-chip${s.id === cur.id ? " active" : ""}" data-source="${s.id}" ${s.n ? "" : "disabled"}>${s.label} <small>${s.n}</small></button>`).join("")}</div>
        <h2 class="section-title">문제 모양</h2>
        <div class="level-pick">${PRINT_KINDS.map((k) => `<button class="pick-chip${k.id === opts.kind ? " active" : ""}" data-kind="${k.id}">${k.label}</button>`).join("")}</div>
        <h2 class="section-title">문제 수</h2>
        <div class="level-pick">${PRINT_COUNTS.map((c) => `<button class="pick-chip${c === opts.count ? " active" : ""}" data-count="${c}">${c}문제</button>`).join("")}</div>
      </section>
      <button class="primary-btn" id="makeBtn" ${cur.n ? "" : "disabled"}>📄 시험지 만들기${cur.n < opts.count ? ` (단어가 ${cur.n}개라 ${cur.n}문제)` : ""}</button>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelector("#makeBtn").addEventListener("click", make);
  root.querySelectorAll("[data-source]").forEach((b) => b.addEventListener("click", () => setOpts({ source: b.dataset.source })));
  root.querySelectorAll("[data-kind]").forEach((b) => b.addEventListener("click", () => setOpts({ kind: b.dataset.kind })));
  root.querySelectorAll("[data-count]").forEach((b) => b.addEventListener("click", () => setOpts({ count: Number(b.dataset.count) })));
}

function renderPrintSheetScreen(root, { profileName, sheet, actions }) {
  const src = printSourceOptions(profileName).find((s) => s.id === sheet.source);
  const kind = PRINT_KINDS.find((k) => k.id === sheet.kind);
  root.innerHTML = `
    <div class="screen screen-print no-anim">
      <div class="print-toolbar no-print">
        <button class="back-btn" id="backBtn">← 설정</button>
        <button class="secondary-btn" id="againBtn">🔀 다른 단어로</button>
        <button class="primary-btn" id="printBtn">🖨️ 인쇄하기</button>
      </div>
      <p class="settings-help no-print">휴대폰에서는 인쇄 화면에서 프린터를 고르거나 PDF로 저장할 수 있어요.</p>
      <article class="print-sheet">
        <header class="print-head">
          <h1>영어 단어 시험</h1>
          <p>${src.label.replace(/^\S+\s/, "")} · ${kind.label} · ${sheet.items.length}문제</p>
          <div class="print-fields"><span>이름: ______________</span><span>날짜: ____월 ____일</span><span>점수: ______ / ${sheet.items.length}</span></div>
        </header>
        <ol class="print-list">
          ${sheet.items.map((it) => `<li><span class="print-q">${it.q}</span><span class="print-line">${it.hint}: </span></li>`).join("")}
        </ol>
        <section class="print-answers">
          <h2>정답</h2>
          <ol class="print-list answers">${sheet.items.map((it) => `<li><span class="print-q">${it.q}</span> → <b>${it.a}</b></li>`).join("")}</ol>
        </section>
      </article>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#againBtn").addEventListener("click", actions.again);
  root.querySelector("#printBtn").addEventListener("click", () => window.print());
}
