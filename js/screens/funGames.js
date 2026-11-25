// 🗂️ 주제별 단어 · 🔢 숫자 · 시간 · 날짜 · 돈 읽기 · 👂 비슷한 소리 구별 · ⏱️ 60초 스피드 퀴즈 · ⚔️ 가족 대결

// ── 🗂️ 주제별 단어 ──
const TOPIC_QUIZ_SIZE = 10;
let wordTextIndex = null;

// 영어 철자로 단어장 단어를 찾는다 → { w, levelId }
function findWordByText(text) {
  if (!wordTextIndex) {
    wordTextIndex = new Map();
    for (const lv of LEVELS) for (const w of WORD_BANK[lv.id] || []) wordTextIndex.set(w.word.toLowerCase(), { w, levelId: lv.id });
  }
  return wordTextIndex.get(text.toLowerCase()) || null;
}

function topicWords(topicId) {
  const group = TOPIC_WORD_GROUPS.find((g) => g.id === topicId);
  return group ? group.words.map(findWordByText).filter(Boolean) : [];
}

function buildTopicQuestions(topicId) {
  const all = topicWords(topicId);
  return shuffle(all)
    .slice(0, TOPIC_QUIZ_SIZE)
    .map(({ w, levelId }) => {
      // 보기도 같은 주제에서 고른다 (뜻이 같은 단어는 빼고)
      const others = shuffle(all.filter((x) => x.w.id !== w.id && x.w.meaningKo !== w.meaningKo && x.w.word !== w.word)).slice(0, 3);
      const ex = w.examples[0];
      return {
        id: w.id,
        kind: "word",
        levelId,
        label: "뜻에 맞는 영어 단어를 골라요",
        q: `${w.emoji} ${w.meaningKo}`,
        big: true,
        ko: null,
        choices: shuffle([w.word, ...others.map((o) => o.w.word)]),
        correctAnswer: w.word,
        explain: `<b>${w.word}</b> ${w.ipa} · ${w.meaningKo}<br>예) ${ex.en} — ${ex.ko}`,
        summary: `${w.emoji} <b>${w.word}</b> · ${w.meaningKo}`,
        listenText: w.word,
        selectedAnswer: null,
      };
    });
}

function renderTopicListScreen(root, { profileName, open, back }) {
  root.innerHTML = `
    <div class="screen screen-topics">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🗂️ 주제별 단어</h1>
      <p class="subtitle">동물, 음식, 몸, 직업처럼 주제로 묶어서 외워요</p>
      <div class="level-grid">
        ${TOPIC_WORD_GROUPS.map((g) => {
          const best = getSectionBest(profileName, "topic", g.id);
          return `
          <button class="level-card" data-topic="${g.id}">
            <span class="level-icon">${g.emoji}</span>
            <span class="topic-text"><span class="level-label">${g.title}</span><span class="topic-summary">${topicWords(g.id).length}개 단어</span></span>
            <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
          </button>`;
        }).join("")}
      </div>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-topic]").forEach((b) => b.addEventListener("click", () => open(b.dataset.topic)));
}

function renderTopicViewScreen(root, { topicId, startQuiz, back }) {
  const group = TOPIC_WORD_GROUPS.find((g) => g.id === topicId);
  const words = topicWords(topicId);
  root.innerHTML = `
    <div class="screen screen-topics">
      <button class="back-btn" id="backBtn">← 주제 목록</button>
      <h1 class="title">${group.emoji} ${group.title}</h1>
      <p class="subtitle">카드를 누르면 발음을 들려줘요 · ${words.length}개</p>
      <div class="topic-word-grid">
        ${words
          .map(
            ({ w, levelId }, i) => `
          <button class="topic-word" data-i="${i}" aria-label="${escapeHtml(w.word)} 듣기">
            <span class="topic-word-emoji">${w.emoji}</span>
            <b>${w.word}</b>
            <small>${w.meaningKo}</small>
            <span class="topic-word-level">${shortLevelLabel(levelById(levelId))}</span>
          </button>`
          )
          .join("")}
      </div>
      <div class="sticky-cta">
        <button class="primary-btn" id="quizBtn">🧠 퀴즈 ${Math.min(TOPIC_QUIZ_SIZE, words.length)}문제</button>
      </div>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelector("#quizBtn").addEventListener("click", startQuiz);
  root.querySelectorAll("[data-i]").forEach((b) => b.addEventListener("click", () => speak(words[Number(b.dataset.i)].w.word, { rate: 0.85 })));
}

// ── 🔢 숫자 · 시간 · 날짜 · 돈 읽기 ──
const NUMBER_QUIZ_SIZE = 10;
const NUM_ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const NUM_TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

function numberWords(n) {
  if (n < 20) return NUM_ONES[n];
  if (n < 100) return NUM_TENS[Math.floor(n / 10)] + (n % 10 ? `-${NUM_ONES[n % 10]}` : "");
  if (n < 1000) return `${NUM_ONES[Math.floor(n / 100)]} hundred${n % 100 ? ` ${numberWords(n % 100)}` : ""}`;
  return `${numberWords(Math.floor(n / 1000))} thousand${n % 1000 ? ` ${numberWords(n % 1000)}` : ""}`;
}

function ordinalWords(n) {
  const words = numberWords(n);
  const m = words.match(/^(.*?)([a-z]+)$/);
  const special = { one: "first", two: "second", three: "third", five: "fifth", eight: "eighth", nine: "ninth", twelve: "twelfth" };
  const last = special[m[2]] || (m[2].endsWith("y") ? `${m[2].slice(0, -1)}ieth` : `${m[2]}th`);
  return m[1] + last;
}

function ordinalDigits(n) {
  const suffix = n % 100 >= 11 && n % 100 <= 13 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[n % 10] || "th";
  return `${n}${suffix}`;
}

// 13 ↔ 30처럼 헷갈리는 짝
const teenTy = (n) => (n >= 13 && n <= 19 ? (n - 10) * 10 : n >= 30 && n <= 90 && n % 10 === 0 ? n / 10 + 10 : null);

const NUMBER_SETS = [
  {
    id: "n20",
    levelId: "elementary-low",
    emoji: "🔢",
    title: "숫자 1~20",
    desc: "one부터 twenty까지",
    pick: () => randInt(1, 20),
    render: (n) => ({ digits: String(n), words: numberWords(n) }),
    near: (n) => [n - 1, n + 1, n + 10, n - 10, teenTy(n)].filter((x) => x >= 1 && x <= 20),
  },
  {
    id: "n100",
    levelId: "elementary-mid",
    emoji: "💯",
    title: "숫자 21~100",
    desc: "thirteen과 thirty 구별하기",
    pick: () => (Math.random() < 0.35 ? [13, 14, 15, 16, 17, 18, 19, 30, 40, 50, 60, 70, 80, 90][randInt(0, 13)] : randInt(21, 99)),
    render: (n) => ({ digits: String(n), words: numberWords(n) }),
    near: (n) => [teenTy(n), n + 1, n - 1, n + 10, n - 10, (n % 10) * 10 + Math.floor(n / 10)].filter((x) => x && x >= 11 && x <= 100),
  },
  {
    id: "time",
    levelId: "elementary-mid",
    emoji: "🕒",
    title: "시각 읽기",
    desc: "seven o'clock, three thirty",
    pick: () => ({ h: randInt(1, 12), m: [0, 0, 5, 10, 15, 20, 30, 30, 40, 45, 50][randInt(0, 10)] }),
    render: ({ h, m }) => {
      const words = m === 0 ? `${numberWords(h)} o'clock` : m < 10 ? `${numberWords(h)} oh ${numberWords(m)}` : `${numberWords(h)} ${numberWords(m)}`;
      const next = numberWords((h % 12) + 1);
      const note = m === 30 ? `half past ${numberWords(h)}` : m === 15 ? `a quarter past ${numberWords(h)}` : m === 45 ? `a quarter to ${next}` : "";
      return { digits: `${h}:${String(m).padStart(2, "0")}`, words, note: note && `이렇게도 말해요: <b>${note}</b>` };
    },
    near: ({ h, m }) => [{ h, m: (m + 30) % 60 }, { h: (h % 12) + 1, m }, { h: h === 1 ? 12 : h - 1, m }, { h, m: m === 15 ? 50 : m === 50 ? 15 : (m + 15) % 60 }, { h: m >= 1 && m <= 12 ? m : h, m: h * 5 < 60 ? h * 5 : m }],
  },
  {
    id: "date",
    levelId: "elementary-high",
    emoji: "📆",
    title: "서수와 날짜",
    desc: "first, second … May third",
    pick: () => ({ mo: randInt(1, 12), d: Math.random() < 0.3 ? [1, 2, 3, 12, 13, 20, 21, 22, 23, 30][randInt(0, 9)] : randInt(1, 28) }),
    render: ({ mo, d }) => ({ digits: `${mo}월 ${d}일`, words: `${MONTH_NAMES[mo - 1]} ${ordinalWords(d)}`, note: `${MONTH_NAMES[mo - 1]} ${ordinalDigits(d)}로 쓰기도 해요` }),
    near: ({ mo, d }) => [{ mo, d: teenTy(d) && teenTy(d) <= 30 ? teenTy(d) : d + 1 }, { mo: (mo % 12) + 1, d }, { mo, d: d > 1 ? d - 1 : d + 2 }, { mo: mo > 1 ? mo - 1 : 12, d }, { mo, d: d + 10 <= 30 ? d + 10 : d - 10 }],
  },
  {
    id: "money",
    levelId: "elementary-high",
    emoji: "💵",
    title: "돈과 가격",
    desc: "dollars and cents, won",
    pick: () => (Math.random() < 0.6 ? { usd: randInt(1, 99), c: [0, 0, 25, 50, 75, 99][randInt(0, 5)] } : { won: randInt(1, 50) * 500 }),
    render: (v) => {
      if (v.won) return { digits: `${v.won.toLocaleString("ko-KR")}원`, words: `${numberWords(v.won)} won` };
      const dollars = `${numberWords(v.usd)} dollar${v.usd === 1 ? "" : "s"}`;
      return { digits: `$${v.usd}${v.c ? `.${String(v.c).padStart(2, "0")}` : ""}`, words: v.c ? `${dollars} and ${numberWords(v.c)} cents` : dollars };
    },
    near: (v) =>
      v.won
        ? [v.won + 500, v.won - 500, v.won * 10 <= 25000 ? v.won * 10 : v.won + 1000, v.won + 5000].filter((x) => x > 0 && x <= 30000).map((won) => ({ won }))
        : [{ usd: teenTy(v.usd) || v.usd + 1, c: v.c }, { usd: v.usd, c: v.c === 50 ? 15 : v.c === 25 ? 75 : 50 }, { usd: v.c || v.usd + 10, c: v.c ? v.usd % 100 : 0 }, { usd: v.usd + 10 <= 99 ? v.usd + 10 : v.usd - 10, c: v.c }].filter((x) => x.usd >= 1 && x.usd <= 99),
  },
  {
    id: "big",
    levelId: "elementary-high",
    emoji: "🏔️",
    title: "큰 수",
    desc: "hundred, thousand (100~10,000)",
    pick: () => (Math.random() < 0.4 ? randInt(1, 9) * 100 + randInt(0, 99) : randInt(1, 9) * 1000 + randInt(0, 9) * 100 + (Math.random() < 0.5 ? randInt(0, 99) : 0)),
    render: (n) => ({ digits: n.toLocaleString("en-US"), words: numberWords(n) }),
    near: (n) => {
      const s = String(n);
      const swapped = s.length > 2 ? Number(s[0] + s[2] + s[1] + s.slice(3)) : n + 100;
      return [swapped, n + 1000, n - 100, n + 10, n < 1000 ? n * 10 : Math.floor(n / 10)].filter((x) => x >= 100 && x <= 10000);
    },
  },
];

function numberQuestion(set, i) {
  const value = set.pick();
  const it = set.render(value);
  const seen = new Set([it.digits, it.words]);
  const others = [];
  for (const v of [...shuffle(set.near(value)), ...Array.from({ length: 30 }, set.pick)]) {
    const r = set.render(v);
    if (seen.has(r.digits) || seen.has(r.words)) continue;
    seen.add(r.digits).add(r.words);
    others.push(r);
    if (others.length === 3) break;
  }
  const listen = i % 2 === 0;
  return {
    id: `num-${set.id}-${i}`,
    kind: "numbers",
    label: listen ? "🔊 잘 듣고 알맞은 것을 골라요" : "영어로 바르게 읽은 것을 골라요",
    q: listen ? "🔊" : it.digits,
    big: true,
    ko: null,
    speakText: listen ? it.words : null,
    choices: shuffle([it, ...others].map((x) => (listen ? x.digits : x.words))),
    correctAnswer: listen ? it.digits : it.words,
    explain: `${it.digits} = <b>${it.words}</b>${it.note ? `<br>${it.note}` : ""}`,
    summary: `${it.digits} · <b>${it.words}</b>`,
    listenText: it.words,
    selectedAnswer: null,
  };
}

function buildNumberQuestions(setId) {
  const set = NUMBER_SETS.find((s) => s.id === setId);
  return Array.from({ length: NUMBER_QUIZ_SIZE }, (_, i) => numberQuestion(set, i));
}

function renderNumbersListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName);
  const card = (s) => {
    const best = getSectionBest(profileName, "numbers", s.id);
    const lv = levelById(s.levelId);
    return `
      <button class="level-card" data-set="${s.id}" style="--accent:${lv.color}">
        <span class="level-icon">${s.emoji}</span>
        <span class="topic-text"><span class="level-label">${s.title}</span><span class="topic-summary">${s.desc} · ${shortLevelLabel(lv)}</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  const kid = !myLevel || myLevel.startsWith("elementary");
  const { mine, others } = kid ? splitByMyLevel(NUMBER_SETS, (s) => [s.levelId], myLevel) : { mine: NUMBER_SETS, others: [] };
  root.innerHTML = `
    <div class="screen screen-numbers">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🔢 숫자 · 시간 · 날짜 · 돈</h1>
      <p class="subtitle">듣고 고르기와 읽고 고르기가 번갈아 나와요 · ${NUMBER_QUIZ_SIZE}문제</p>
      <section class="lesson-section"><p class="lesson-point-text">thirteen(13)은 뒤를 세게 '써-<b>틴</b>', thirty(30)는 앞을 세게 '<b>써</b>-티'라고 해요. 숫자는 할 때마다 새로 나와요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => start(b.dataset.set)));
}

// ── 👂 비슷한 소리 구별 ──
const SOUND_QUIZ_SIZE = 10;

function buildSoundQuestions(setId) {
  const sets = setId === "all" ? SOUND_PAIR_SETS : SOUND_PAIR_SETS.filter((s) => s.id === setId);
  const items = shuffle(sets.flatMap((s) => s.pairs.map((p) => ({ p, s })))).slice(0, SOUND_QUIZ_SIZE);
  return items.map(({ p: [a, aKo, b, bKo], s }, i) => {
    const pickA = Math.random() < 0.5;
    const [word, ko] = pickA ? [a, aKo] : [b, bKo];
    const answer = `${word} · ${ko}`;
    return {
      id: `snd-${s.id}-${i}`,
      kind: "sounds",
      label: `🔊 ${s.title} · 들린 단어를 골라요`,
      q: "🔊",
      big: true,
      ko: null,
      speakText: word,
      choices: shuffle([`${a} · ${aKo}`, `${b} · ${bKo}`]),
      correctAnswer: answer,
      explain: `<b>${a}</b> (${aKo}) ↔ <b>${b}</b> (${bKo})<br>${s.tip}`,
      summary: `<b>${word}</b> · ${ko} <small>(${pickA ? b : a}와 구별)</small>`,
      listenText: word,
      selectedAnswer: null,
    };
  });
}

function renderSoundsListScreen(root, { profileName, start, back }) {
  const card = (id, emoji, title, desc) => {
    const best = getSectionBest(profileName, "sounds", id);
    return `
      <button class="level-card" data-set="${id}">
        <span class="level-icon">${emoji}</span>
        <span class="topic-text"><span class="level-label">${title}</span><span class="topic-summary">${desc}</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  root.innerHTML = `
    <div class="screen screen-sounds">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">👂 비슷한 소리 구별</h1>
      <p class="subtitle">ship과 sheep, light와 right처럼 헷갈리는 소리를 듣고 골라요</p>
      <div class="level-grid">
        ${card("all", "🎲", "모두 섞기", `${SOUND_PAIR_SETS.length}가지 소리에서 ${SOUND_QUIZ_SIZE}문제`)}
        ${SOUND_PAIR_SETS.map((s) => card(s.id, s.emoji, s.title, `${s.pairs.length}쌍 · 예) ${s.pairs[0][0]} / ${s.pairs[0][2]}`)).join("")}
      </div>
      <h2 class="section-title">🔊 먼저 들어 보기</h2>
      ${SOUND_PAIR_SETS.map(
        (s) => `
        <details class="sound-preview">
          <summary>${s.emoji} ${s.title}</summary>
          <p class="settings-help">${s.tip}</p>
          <div class="sound-pairs">
            ${s.pairs.map(([a, aKo, b, bKo]) => `<div class="sound-pair"><button class="chip-btn" data-say="${a}">🔊 ${a} <small>${aKo}</small></button><button class="chip-btn" data-say="${b}">🔊 ${b} <small>${bKo}</small></button></div>`).join("")}
          </div>
        </details>`
      ).join("")}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => start(b.dataset.set)));
  root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speak(b.dataset.say, { rate: 0.8 })));
}

// ── ⏱️ 60초 스피드 퀴즈 ──
const SPEED_SECONDS = 60;

function speedQuestion(levelId, prevId) {
  const pool = (WORD_BANK[levelId] || []).filter((w) => w.id !== prevId);
  const w = pool[Math.floor(Math.random() * pool.length)];
  const used = new Set([w.meaningKo]);
  const others = [];
  for (const x of shuffle(pool)) {
    if (used.has(x.meaningKo)) continue;
    used.add(x.meaningKo);
    others.push(x.meaningKo);
    if (others.length === 3) break;
  }
  return { w, choices: shuffle([w.meaningKo, ...others]) };
}

function newSpeedGame(levelId) {
  return { levelId, ready: true, endsAt: 0, q: speedQuestion(levelId), correct: 0, wrong: 0, combo: 0, maxCombo: 0, missed: [], flash: null, done: false, isNewBest: false };
}

function speedSecondsLeft(game) {
  return Math.max(0, Math.ceil((game.endsAt - Date.now()) / 1000));
}

function renderSpeedListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const best = getSectionBest(profileName, "speed", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">${(WORD_BANK[lv.id] || []).length}개 단어</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `최고 ${best.correct}개` : "도전 전"}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-speed">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">⏱️ 60초 스피드 퀴즈</h1>
      <p class="subtitle">1분 동안 영어 단어의 뜻을 최대한 많이 맞혀요</p>
      <section class="lesson-section"><p class="lesson-point-text">연속으로 맞히면 🔥 콤보가 올라가요. 틀려도 시간은 줄지 않으니 빠르게 다음 문제로!</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function renderSpeedScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  if (game.done) {
    root.innerHTML = `
      <div class="screen screen-speed"${levelThemeStyle(level)}>
        <h1 class="title">⏱️ 스피드 퀴즈 결과</h1>
        <p class="subtitle">${shortLevelLabel(level)}</p>
        <div class="speed-final">
          <div><b>${game.correct}</b><small>맞힌 단어</small></div>
          <div><b>${game.wrong}</b><small>틀린 단어</small></div>
          <div><b>🔥${game.maxCombo}</b><small>최고 콤보</small></div>
        </div>
        ${game.isNewBest ? `<div class="result-banner correct" role="status">🏆 최고 기록!</div>` : ""}
        ${
          game.missed.length
            ? `<h2 class="section-title">틀린 단어 (오답노트에 담았어요)</h2>
               <ul class="spell-summary">${game.missed.map((w) => `<li class="miss"><span class="spell-sum-emoji">${w.emoji}</span><b>${w.word}</b> <span>${w.meaningKo}</span></li>`).join("")}</ul>`
            : ""
        }
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 다시 도전</button>
          <button class="secondary-btn" id="listBtn">단계 고르기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.quit);
    return;
  }
  if (game.ready) {
    root.innerHTML = `
      <div class="screen screen-speed"${levelThemeStyle(level)}>
        <button class="back-btn" id="listBtn">← 단계 고르기</button>
        <h1 class="title">⏱️ 준비됐나요?</h1>
        <p class="subtitle">${shortLevelLabel(level)} · ${SPEED_SECONDS}초</p>
        <div class="speed-ready">
          <p>영어 단어가 나오면 알맞은 <b>뜻</b>을 눌러요.</p>
          <button class="primary-btn" id="goBtn">▶ 시작!</button>
        </div>
      </div>`;
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#goBtn").addEventListener("click", actions.go);
    return;
  }
  const left = speedSecondsLeft(game);
  const { w, choices } = game.q;
  // 답할 때마다 화면을 다시 그리므로 깜빡이지 않게 화면 등장 효과를 끈다
  root.innerHTML = `
    <div class="screen screen-speed no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">맞힘 <b>${game.correct}</b>${game.combo >= 2 ? ` · 🔥${game.combo} 콤보` : ""}</span>
      </div>
      <div class="speed-timer"><span id="speedTime">${left}</span>초</div>
      <div class="progress-bar"><div class="progress-bar-fill" id="speedBar" style="width:${(left / SPEED_SECONDS) * 100}%"></div></div>
      <div class="speed-card${game.flash ? ` flash-${game.flash}` : ""}">
        <span class="speed-emoji" aria-hidden="true">${w.emoji}</span>
        <p class="speed-word">${w.word}</p>
      </div>
      <div class="choice-grid">
        ${choices.map((c, i) => `<button class="choice-btn" data-c="${i}">${c}</button>`).join("")}
      </div>
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelectorAll("[data-c]").forEach((b) => b.addEventListener("click", () => actions.answer(choices[Number(b.dataset.c)])));
}

// ── ⚔️ 가족 대결: 휴대폰 하나로 두 사람이 번갈아 문제를 푼다 ──
const BATTLE_ROUNDS = 5;

function battleLevelOf(name) {
  return getPreferredLevel(name) || getLastWordLevel(name) || "elementary-low";
}

function buildBattle(names) {
  const players = names.map((name) => {
    const m = findMember(name);
    return { name, emoji: m.emoji, color: m.color, levelId: battleLevelOf(name), score: 0 };
  });
  const perPlayer = players.map((p) => shuffle(WORD_BANK[p.levelId] || []).slice(0, BATTLE_ROUNDS).map((w) => wordToMcQuestion(w, p.levelId)));
  const questions = [];
  for (let r = 0; r < BATTLE_ROUNDS; r++) players.forEach((_, k) => questions.push({ ...perPlayer[k][r], player: k }));
  return { players, questions, index: 0, phase: "ready", done: false };
}

function renderBattleSetupScreen(root, { profileName, picked, toggle, start, back }) {
  const family = getFamily();
  root.innerHTML = `
    <div class="screen screen-battle">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">⚔️ 가족 대결</h1>
      <p class="subtitle">휴대폰 하나로 두 사람이 번갈아 ${BATTLE_ROUNDS}문제씩 풀어요</p>
      ${
        family.length < 2
          ? `<section class="lesson-section"><p class="lesson-point-text">가족이 2명 이상이어야 할 수 있어요. 프로필 화면에서 "➕ 가족 추가"로 가족을 늘려 주세요.</p></section>`
          : `<section class="lesson-section"><p class="lesson-point-text">각자 <b>자기 단계</b>의 단어가 나와요. 그래서 동생과 형, 아이와 어른도 공평하게 겨룰 수 있어요. 두 명을 골라 주세요.</p></section>
             <div class="battle-pick">
               ${family
                 .map(
                   (m) => `<button class="battle-member${picked.includes(m.name) ? " on" : ""}" data-name="${escapeHtml(m.name)}" style="--accent:${m.color}" aria-pressed="${picked.includes(m.name)}">
                     <span class="battle-member-emoji">${m.emoji}</span><b>${m.name}</b><small>${shortLevelLabel(levelById(battleLevelOf(m.name)))}</small>
                   </button>`
                 )
                 .join("")}
             </div>
             <div class="sticky-cta"><button class="primary-btn" id="startBtn" ${picked.length === 2 ? "" : "disabled"}>⚔️ 대결 시작 ${picked.length}/2</button></div>`
      }
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelector("#startBtn")?.addEventListener("click", start);
  root.querySelectorAll("[data-name]").forEach((b) => b.addEventListener("click", () => toggle(b.dataset.name)));
}

function battleScoreboard(battle) {
  const turn = battle.done ? -1 : battle.questions[battle.index].player;
  return `
    <div class="battle-board">
      ${battle.players
        .map(
          (p, k) => `<div class="battle-side${k === turn ? " turn" : ""}" style="--accent:${p.color}">
            <span class="battle-member-emoji">${p.emoji}</span><b>${p.name}</b><span class="battle-score">${p.score}</span>
          </div>`
        )
        .join(`<span class="battle-vs">VS</span>`)}
    </div>`;
}

function renderBattleScreen(root, { battle, actions }) {
  if (battle.done) {
    const [a, b] = battle.players;
    const winner = a.score === b.score ? null : a.score > b.score ? a : b;
    root.innerHTML = `
      <div class="screen screen-battle">
        <h1 class="title">⚔️ 대결 결과</h1>
        ${battleScoreboard(battle)}
        <div class="result-banner correct" role="status">${winner ? `🏆 ${winner.emoji} ${winner.name} 승리!` : "🤝 무승부! 둘 다 잘했어요"}</div>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 한 판 더</button>
          <button class="secondary-btn" id="setupBtn">사람 바꾸기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#setupBtn").addEventListener("click", actions.setup);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const q = battle.questions[battle.index];
  const p = battle.players[q.player];
  const round = Math.floor(battle.index / 2) + 1;
  let body = "";
  if (battle.phase === "ready") {
    body = `
      <div class="battle-ready" style="--accent:${p.color}">
        <span class="battle-ready-emoji">${p.emoji}</span>
        <p><b>${p.name}</b> 차례!</p>
        <small>${round} / ${BATTLE_ROUNDS}라운드 · 휴대폰을 넘겨 주세요</small>
        <button class="primary-btn" id="readyBtn">준비됐어요!</button>
      </div>`;
  } else {
    const answered = battle.phase === "answered";
    const ok = q.selectedAnswer === q.correctAnswer;
    body = `
      <div class="question-card">
        <p class="question-label">${p.emoji} ${p.name} · ${q.label}</p>
        <p class="question-meaning">${q.q}</p>
      </div>
      ${
        answered
          ? `<div class="result-banner ${ok ? "correct" : "wrong"}" role="status">${ok ? "🎉 정답! +1점" : `❌ 정답은 "${q.correctAnswer}"`}</div>
             <div class="explain-card"><div class="explain-body"><span class="explain-icon">💡</span><p>${q.explain}</p></div>
               <button class="listen-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>🔊 발음 듣기</button></div>
             <button class="primary-btn" id="nextBtn">${battle.index + 1 < battle.questions.length ? "다음 사람 차례 →" : "결과 보기"}</button>`
          : `<div class="choice-grid">${q.choices.map((c, i) => `<button class="choice-btn" data-c="${i}">${c}</button>`).join("")}</div>`
      }`;
  }
  root.innerHTML = `
    <div class="screen screen-battle">
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${battle.index + 1} / ${battle.questions.length}</span>
      </div>
      ${battleScoreboard(battle)}
      ${body}
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#readyBtn")?.addEventListener("click", actions.ready);
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
  root.querySelector("#listenBtn")?.addEventListener("click", () => speak(q.listenText));
  root.querySelectorAll("[data-c]").forEach((b) =>
    b.addEventListener("click", () => {
      const ok = q.choices[Number(b.dataset.c)] === q.correctAnswer;
      answerFeedback(ok, b);
      actions.answer(q.choices[Number(b.dataset.c)]);
    })
  );
}
