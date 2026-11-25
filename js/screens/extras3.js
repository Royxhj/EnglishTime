// 🎄 어드벤트 달력 · 🍎 친구 돌보기 · 🔗 짝꿍 단어 잇기 · 🎨 그림 그리고 맞히기 · 🎵 챈트 · 🌍 세계 문화 카드

// ── 🎄 크리스마스 어드벤트 달력 (12월 1~25일, 12월 31일까지 밀린 칸도 할 수 있음) ──
const ADVENT_DAYS = 25;
const ADVENT_PASS = 3;
const pad2 = (n) => String(n).padStart(2, "0");

function adventInfo(now = new Date()) {
  const year = now.getFullYear();
  const inDec = now.getMonth() === 11;
  const teaser = now.getMonth() === 10 && now.getDate() >= 15;
  const openUpTo = inDec ? Math.min(now.getDate(), ADVENT_DAYS) : 0;
  const daysLeft = teaser ? Math.round((new Date(year, 11, 1) - new Date(year, now.getMonth(), now.getDate())) / 86400000) : 0;
  return { year, inDec, teaser, openUpTo, daysLeft, season: inDec || teaser };
}

const adventKey = (year, day) => `${year}-12-${pad2(day)}`;
const adventWord = (day) => XMAS_WORDS[(day - 1) % XMAS_WORDS.length];

function buildXmasQuestions(day) {
  const main = adventWord(day);
  const others = shuffle(XMAS_WORDS.filter((w) => w !== main)).slice(0, 4);
  return [main, ...others].map((w, i) => {
    const koFirst = i % 2 === 1;
    const wrong = shuffle(XMAS_WORDS.filter((x) => x !== w)).slice(0, 3);
    const label = (x) => (koFirst ? `${x.emoji} ${x.word}` : x.meaningKo);
    return {
      id: `xmas-${day}-${i}`,
      kind: "xmas",
      label: koFirst ? "🎄 뜻에 맞는 영어 단어는?" : "🎄 이 단어의 뜻은?",
      q: koFirst ? w.meaningKo : `${w.emoji} ${w.word}`,
      big: true,
      ko: null,
      choices: shuffle([w, ...wrong].map(label)),
      correctAnswer: label(w),
      explain: `<b>${w.word}</b> = ${w.meaningKo}<br>${w.ex.en}<br><small>${w.ex.ko}</small>`,
      summary: `${w.emoji} <b>${w.word}</b> · ${w.meaningKo}`,
      listenText: w.ex.en,
      selectedAnswer: null,
    };
  });
}

function adventRewardsHtml(count) {
  const gifts = SHOP_ITEMS.filter((it) => it.advent).sort((a, b) => a.advent - b.advent);
  return `<div class="advent-gifts">${gifts.map((g) => `<span class="${count >= g.advent ? "got" : ""}">${g.emoji}<small>${count >= g.advent ? "받음 ✓" : `도장 ${g.advent}개`}</small></span>`).join("")}</div>`;
}

function renderAdventScreen(root, { profileName, selected, now = new Date(), actions }) {
  const info = adventInfo(now);
  const stamps = getProfileData(profileName).advent.filter((k) => k.startsWith(`${info.year}-12-`));
  const count = stamps.length;
  const doors = Array.from({ length: ADVENT_DAYS }, (_, i) => i + 1);
  const sel = selected && selected <= info.openUpTo ? selected : null;
  const w = sel ? adventWord(sel) : null;
  root.innerHTML = `
    <div class="screen screen-advent">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎄 어드벤트 달력</h1>
      <p class="subtitle">${info.inDec ? `12월 1일부터 25일까지 하루에 한 칸씩 열어요 · 도장 <b>${count}</b> / ${ADVENT_DAYS}` : `12월 1일에 열려요! ${info.daysLeft ? `${info.daysLeft}일 남았어요 ⏳` : ""}`}</p>
      ${adventRewardsHtml(count)}
      <p class="settings-help">칸을 열고 크리스마스 퀴즈 5문제 중 ${ADVENT_PASS}개 이상 맞히면 🌟 도장과 ⭐ ${ADVENT_STARS}개! 도장을 모으면 별 상점에서 선물을 공짜로 받아요. 지난 칸도 12월 31일까지 할 수 있어요.</p>
      <div class="advent-grid">
        ${doors
          .map((d) => {
            const done = stamps.includes(adventKey(info.year, d));
            const open = d <= info.openUpTo;
            return `<button class="advent-door${done ? " done" : open ? " open" : ""}${sel === d ? " sel" : ""}${d === 25 ? " big" : ""}" data-day="${d}" ${open ? "" : "disabled"}><b>${d}</b><span>${done ? "🌟" : open ? adventWord(d).emoji : "🔒"}</span></button>`;
          })
          .join("")}
      </div>
      ${
        w
          ? `<section class="advent-card">
          <p class="phrase-label">🎁 12월 ${sel}일의 단어</p>
          <div class="phrase-main"><span class="phrase-emoji">${w.emoji}</span><div><b class="phrase-en">${w.word}</b><small>${w.meaningKo}</small></div><button class="speak-btn" id="advSay" aria-label="듣기">🔊</button></div>
          <p class="advent-ex"><button class="speak-btn" id="advEx" aria-label="예문 듣기">🔊</button> ${w.ex.en}<small>${w.ex.ko}</small></p>
          <button class="primary-btn" id="advQuizBtn">${stamps.includes(adventKey(info.year, sel)) ? "🔁 퀴즈 다시 풀기" : `🎄 미션: 크리스마스 퀴즈 5문제`}</button>
        </section>`
          : ""
      }
      <button class="secondary-btn" id="storyBtn">📚 크리스마스 이야기 읽기</button>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#storyBtn").addEventListener("click", actions.story);
  root.querySelectorAll("[data-day]").forEach((b) => b.addEventListener("click", () => actions.select(Number(b.dataset.day))));
  if (w) {
    root.querySelector("#advSay").addEventListener("click", () => speak(w.word, { rate: 0.85 }));
    root.querySelector("#advEx").addEventListener("click", () => speak(w.ex.en, { rate: 0.85 }));
    root.querySelector("#advQuizBtn").addEventListener("click", () => actions.quiz(sel));
  }
}

function adventHomeCardHtml(profileName) {
  const info = adventInfo();
  if (!info.season) return "";
  const stamps = getProfileData(profileName).advent.filter((k) => k.startsWith(`${info.year}-12-`));
  const todayDone = info.inDec && info.openUpTo && stamps.includes(adventKey(info.year, info.openUpTo));
  return `
    <button class="advent-home" id="adventBtn">
      <span class="advent-home-emoji">🎄</span>
      <span><b>${info.inDec ? (todayDone ? "오늘 칸 완료! 🌟" : info.openUpTo === new Date().getDate() ? `12월 ${info.openUpTo}일 칸을 열어요!` : "지난 칸을 마저 열어요") : "크리스마스 어드벤트 달력"}</b><small>${info.inDec ? `도장 ${stamps.length} / ${ADVENT_DAYS} · 모으면 크리스마스 선물` : `12월 1일 시작 · ${info.daysLeft}일 남았어요`}</small></span>
    </button>`;
}

// ── 🍎 친구 돌보기: 쓰다듬기 · 간식 주기로 친밀도가 오른다 ──
const CARE_PET_MAX = 3;
const CARE_SNACK_MAX = 5;
const CARE_REACTIONS = {
  pet: [["That tickles!", "간지러워요!"], ["I like you!", "네가 좋아!"], ["More, please!", "더 해 줘요!"], ["Hee hee!", "히히!"]],
  snack: [["Yummy!", "맛있어요!"], ["Thank you so much!", "정말 고마워요!"], ["Delicious!", "아주 맛있어요!"], ["I'm full and happy!", "배불러서 행복해요!"]],
  limit: [["Let's study together!", "같이 공부하자!"], ["I'm sleepy now.", "이제 졸려요."]],
};

function lastStudyGap(profileName) {
  const keys = Object.keys(getProfileData(profileName).activity).sort();
  if (!keys.length) return Infinity;
  return Math.round((new Date(dateKey()) - new Date(keys[keys.length - 1])) / 86400000);
}

function petMood(profileName) {
  const gap = lastStudyGap(profileName);
  if (gap === 0) return { emoji: "😆", en: "I'm so happy today!", ko: "오늘 정말 행복해요!" };
  if (gap === 1) return { emoji: "😊", en: "Let's have fun today!", ko: "오늘도 재밌게 놀자!" };
  if (gap === 2) return { emoji: "🥺", en: "I missed you!", ko: "보고 싶었어요!" };
  return { emoji: "😢", en: "I'm bored... Let's study!", ko: "심심해요… 같이 공부해요!" };
}

function petCareHtml(profileName) {
  const care = getPetCare(profileName);
  const mood = petMood(profileName);
  return `
    <div class="pet-care">
      <p class="pet-bubble" id="petBubble"><span>${mood.emoji}</span> ${mood.en}<small>${mood.ko}</small></p>
      <div class="pet-care-btns">
        <button class="chip-btn" id="petPetBtn" ${care.pets >= CARE_PET_MAX ? "disabled" : ""}>✋ 쓰다듬기 <small>${CARE_PET_MAX - care.pets}</small></button>
        <button class="chip-btn" id="petSnackBtn" ${care.snacks >= CARE_SNACK_MAX || shopStatus(profileName).stars < 1 ? "disabled" : ""}>🍎 간식 <small>⭐1</small></button>
        <span class="pet-bond" title="친밀도">❤️ ${care.bond}</span>
      </div>
    </div>`;
}

function bindPetCare(root, profileName) {
  const react = (kind) => {
    const result = petCareAction(profileName, kind, { petMax: CARE_PET_MAX, snackMax: CARE_SNACK_MAX });
    const [en, ko] = CARE_REACTIONS[result.ok ? kind : "limit"][Math.floor(Math.random() * 4) % CARE_REACTIONS[result.ok ? kind : "limit"].length];
    playSound(result.ok ? "correct" : "wrong");
    speak(en, { rate: 0.9 });
    set({});
    const bubble = document.querySelector("#petBubble");
    if (bubble) bubble.innerHTML = `<span>${kind === "snack" && result.ok ? "🍎" : "💕"}</span> ${en}<small>${ko}</small>`;
    document.querySelector(".pet-card .pet-avatar")?.classList.add("pet-bounce");
  };
  root.querySelector("#petPetBtn")?.addEventListener("click", () => react("pet"));
  root.querySelector("#petSnackBtn")?.addEventListener("click", () => react("snack"));
}

// ── 🔗 짝꿍 단어 잇기: 왼쪽과 오른쪽에서 짝을 찾아 누른다 ──
const PAIR_ROUND = 5;
const PAIR_COLORS = ["#ffb020", "#4dabf7", "#69db7c", "#f783ac", "#b197fc"];

function newPairGame(setId) {
  const ps = WORD_PAIR_SETS.find((x) => x.id === setId);
  const pairs = shuffle(ps.pairs);
  const game = { setId, title: ps.title, kind: ps.kind, pairs, round: 0, mistakes: 0, sel: null, wrong: null, matched: {}, done: false, isNewBest: false };
  pairRoundSetup(game);
  return game;
}

function pairRoundSetup(game) {
  const idx = Array.from({ length: Math.min(PAIR_ROUND, game.pairs.length - game.round * PAIR_ROUND) }, (_, i) => game.round * PAIR_ROUND + i);
  game.left = shuffle(idx);
  game.right = shuffle(idx);
  game.matched = {};
  game.sel = null;
  game.wrong = null;
}

function renderPairsListScreen(root, { profileName, start, back }) {
  const card = (s) => {
    const best = getSectionBest(profileName, "pairs", s.id);
    return `
      <button class="level-card" data-set="${s.id}">
        <span class="level-icon">${s.emoji}</span>
        <span class="topic-text"><span class="level-label">${s.title}</span><span class="topic-summary">${s.kind} · ${s.pairs[0][0]} ${s.kind === "반대말" ? "↔" : s.kind === "비슷한 말" ? "≈" : "&"} ${s.pairs[0][2]} …</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(WORD_PAIR_SETS, (s) => s.levels, myLevelOf(profileName));
  root.innerHTML = `
    <div class="screen screen-pairs">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🔗 짝꿍 단어 잇기</h1>
      <p class="subtitle">반대말 · 비슷한 말 · 함께 쓰는 말을 짝지어요</p>
      <section class="lesson-section"><p class="lesson-point-text">왼쪽 단어를 누르고, 짝이 되는 오른쪽 단어를 눌러요. 한 판에 ${PAIR_ROUND}쌍씩 두 번! 틀리지 않을수록 점수가 높아요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => start(b.dataset.set)));
}

function renderPairsScreen(root, { game, actions }) {
  if (game.done) {
    const score = Math.max(0, game.pairs.length - game.mistakes);
    root.innerHTML = `
      <div class="screen screen-pairs">
        <h1 class="title">🔗 ${game.title} 결과</h1>
        <div class="result-banner ${game.mistakes === 0 ? "correct" : "wrong"}" role="status">${game.mistakes === 0 ? "🎉 한 번도 안 틀렸어요!" : `틀린 횟수 ${game.mistakes}번`} · ${score} / ${game.pairs.length}점${game.isNewBest ? " · 🏆 최고 기록!" : ""}</div>
        <ul class="pair-review">${game.pairs.map(([a, aKo, b, bKo]) => `<li><b>${a}</b> <small>${aKo}</small> <span>${game.kind === "반대말" ? "↔" : game.kind === "비슷한 말" ? "≈" : "&"}</span> <b>${b}</b> <small>${bKo}</small></li>`).join("")}</ul>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 다시 하기</button>
          <button class="secondary-btn" id="listBtn">다른 묶음</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const col = (side, list) =>
    list
      .map((i) => {
        const [a, aKo, b, bKo] = game.pairs[i];
        const [w, ko] = side === "L" ? [a, aKo] : [b, bKo];
        const m = game.matched[i];
        const isSel = game.sel && game.sel.side === side && game.sel.i === i;
        const isWrong = game.wrong && game.wrong.side === side && game.wrong.i === i;
        return `<button class="pair-word${m !== undefined ? " matched" : ""}${isSel ? " sel" : ""}${isWrong ? " shake wrong" : ""}" data-side="${side}" data-i="${i}" ${m !== undefined ? `style="--pc:${PAIR_COLORS[m]}" disabled` : ""}><b>${w}</b>${m !== undefined ? `<small>${ko}</small>` : ""}</button>`;
      })
      .join("");
  root.innerHTML = `
    <div class="screen screen-pairs no-anim">
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${game.round + 1} / ${Math.ceil(game.pairs.length / PAIR_ROUND)}판 · 틀림 ${game.mistakes}</span>
      </div>
      <p class="subtitle">${game.kind === "반대말" ? "↔️ 반대말끼리" : game.kind === "비슷한 말" ? "🟰 비슷한 말끼리" : "🤝 함께 쓰는 말끼리"} 이어요</p>
      <div class="pair-board"><div class="pair-col">${col("L", game.left)}</div><div class="pair-col">${col("R", game.right)}</div></div>
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelectorAll("[data-side]").forEach((b) => b.addEventListener("click", () => actions.tap(b.dataset.side, Number(b.dataset.i))));
}

const pairsActions = {
  tap: (side, i) => {
    const { pairs: game } = store.getState();
    const [a, , b] = game.pairs[i];
    speak(side === "L" ? a : b, { rate: 0.9 });
    game.wrong = null;
    if (!game.sel || game.sel.side === side) {
      game.sel = { side, i };
      set({});
      return;
    }
    if (game.sel.i === i) {
      game.matched[i] = Object.keys(game.matched).length % PAIR_COLORS.length;
      playSound("correct");
      recordActivity(currentProfile());
      game.sel = null;
      if (Object.keys(game.matched).length === game.left.length) {
        game.round += 1;
        if (game.round * PAIR_ROUND >= game.pairs.length) {
          game.done = true;
          game.isNewBest = recordSectionResult(currentProfile(), "pairs", game.setId, Math.max(0, game.pairs.length - game.mistakes), game.pairs.length);
          if (!game.mistakes) burstConfetti(50);
          announceBadges(checkNewBadges(currentProfile()));
        } else setTimeout(() => {
          pairRoundSetup(game);
          set({});
        }, 500);
      }
    } else {
      game.mistakes += 1;
      game.wrong = { side, i };
      game.sel = null;
      playSound("wrong");
    }
    set({});
  },
  again: () => set({ pairs: newPairGame(store.getState().pairs.setId) }),
  list: () => set({ screen: "pairsList" }),
  home: () => goHome(),
  quit: () => set({ screen: "pairsList" }),
};

// ── 🎨 그림 그리고 맞히기 (가족 게임) ──
const DRAW_SECONDS = 60;
const DRAW_COLORS = ["#222222", "#e03131", "#1971c2", "#2f9e44", "#f08c00"];
let drawTimer = null;

function drawWordPool() {
  const pool = [...pictureWordPool("elementary-low"), ...pictureWordPool("elementary-mid")];
  return pool.filter((w, i) => pool.findIndex((x) => x.word === w.word) === i);
}

function newDrawGame(players) {
  return { players, turn: 0, rounds: players.length * 2, phase: "ready", word: null, choices: [], image: null, picked: null, scores: Object.fromEntries(players.map((p) => [p, 0])), used: [], done: false };
}

function drawNextWord(game) {
  const pool = drawWordPool().filter((w) => !game.used.includes(w.word));
  const w = shuffle(pool)[0];
  game.used.push(w.word);
  game.word = w;
  game.choices = shuffle([w, ...shuffle(pool.filter((x) => x !== w && x.emoji !== w.emoji)).slice(0, 3)]).map((x) => x.word);
}

const drawRoles = (game) => ({ drawer: game.players[game.turn % game.players.length], guesser: game.players[(game.turn + 1) % game.players.length] });

function renderDrawSetupScreen(root, { profileName, start, back }) {
  const family = getFamily();
  const picked = new Set(family.length > 1 ? family.slice(0, 2).map((m) => m.name) : []);
  const draw = () => {
    root.innerHTML = `
      <div class="screen screen-draw">
        <button class="back-btn" id="backBtn">← 홈</button>
        <h1 class="title">🎨 그림 그리고 맞히기</h1>
        <p class="subtitle">한 사람이 영어 단어를 그리면, 다음 사람이 보고 맞혀요</p>
        <section class="lesson-section"><p class="lesson-point-text">✏️ 그리는 사람만 단어를 봐요(글자는 쓰면 안 돼요!). ${DRAW_SECONDS}초 안에 그리고 휴대폰을 넘기면, 다음 사람이 보기에서 영어 단어를 골라요. 맞히면 <b>그린 사람과 맞힌 사람 모두 1점</b>!</p></section>
        ${
          family.length > 1
            ? `<h2 class="section-title">함께 할 사람 (2명 이상)</h2>
               <div class="battle-pick">${family.map((m) => `<button class="battle-member${picked.has(m.name) ? " active" : ""}" data-name="${escapeHtml(m.name)}" style="--accent:${m.color}"><span class="battle-member-emoji">${m.emoji}</span><b>${m.name}</b><small>${picked.has(m.name) ? "✓ 함께해요" : "누르면 참가"}</small></button>`).join("")}</div>`
            : `<p class="settings-help">가족이 한 명뿐이라 '나'와 '가족'으로 번갈아 해요.</p>`
        }
        <button class="primary-btn" id="startBtn" ${family.length > 1 && picked.size < 2 ? "disabled" : ""}>🎨 시작하기 (${family.length > 1 ? picked.size : 2}명 · 한 사람당 2번 그리기)</button>
      </div>`;
    root.querySelector("#backBtn").addEventListener("click", back);
    root.querySelectorAll("[data-name]").forEach((b) =>
      b.addEventListener("click", () => {
        const n = b.dataset.name;
        picked.has(n) ? picked.delete(n) : picked.add(n);
        draw();
      })
    );
    root.querySelector("#startBtn").addEventListener("click", () => start(family.length > 1 ? family.filter((m) => picked.has(m.name)).map((m) => m.name) : [profileName, "가족"]));
  };
  draw();
}

function renderDrawScreen(root, { game, actions }) {
  clearInterval(drawTimer);
  const { drawer, guesser } = drawRoles(game);
  const who = (n) => {
    const m = findMember(n);
    return `${m?.emoji || "🙂"} ${escapeHtml(n)}`;
  };
  const scores = `<div class="draw-scores">${game.players.map((p) => `<span>${who(p)} <b>${game.scores[p]}</b></span>`).join("")}</div>`;
  if (game.done) {
    const max = Math.max(...Object.values(game.scores));
    root.innerHTML = `
      <div class="screen screen-draw">
        <h1 class="title">🎨 결과</h1>
        <div class="result-banner correct" role="status">🏆 ${game.players.filter((p) => game.scores[p] === max).map(who).join(", ")} ${max}점!</div>
        ${scores}
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 한 판 더</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  const top = `<div class="cw-top"><button class="back-btn" id="quitBtn">× 그만하기</button><span class="cw-progress">${game.turn + 1} / ${game.rounds}번째 그림</span></div>${scores}`;
  if (game.phase === "ready" || game.phase === "pass") {
    const isPass = game.phase === "pass";
    root.innerHTML = `
      <div class="screen screen-draw">
        ${top}
        <div class="battle-ready">
          <span class="battle-ready-emoji">${isPass ? "👀" : "✏️"}</span>
          <p><b>${who(isPass ? guesser : drawer)}</b> 차례!</p>
          <small>${isPass ? "그림을 보고 무슨 단어인지 맞혀요" : "다른 사람은 화면을 보지 마세요 🙈"}</small>
          <button class="primary-btn" id="goBtn">${isPass ? "그림 보기" : "단어 보기"}</button>
        </div>
      </div>`;
    root.querySelector("#quitBtn").addEventListener("click", actions.quit);
    root.querySelector("#goBtn").addEventListener("click", isPass ? actions.toGuess : actions.toDraw);
    return;
  }
  if (game.phase === "draw") {
    root.innerHTML = `
      <div class="screen screen-draw no-anim">
        ${top}
        <div class="draw-word"><span>${game.word.emoji}</span><b>${game.word.word}</b><small>${game.word.meaningKo}</small><span class="draw-time" id="drawTime">${DRAW_SECONDS}</span></div>
        <canvas class="draw-canvas" id="drawCanvas" aria-label="그림판"></canvas>
        <div class="draw-tools">
          ${DRAW_COLORS.map((c, i) => `<button class="draw-color${i === 0 ? " active" : ""}" data-color="${c}" style="background:${c}" aria-label="색"></button>`).join("")}
          <button class="chip-btn" id="eraseBtn">🧽</button>
          <button class="chip-btn" id="clearBtn">🗑️</button>
        </div>
        <button class="primary-btn" id="doneBtn">✅ 다 그렸어요 → ${who(guesser)}에게 넘기기</button>
      </div>`;
    root.querySelector("#quitBtn").addEventListener("click", actions.quit);
    const canvas = root.querySelector("#drawCanvas");
    const dpr = window.devicePixelRatio || 1;
    const size = canvas.clientWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, size, size);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    let color = DRAW_COLORS[0];
    let width = 5;
    let last = null;
    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };
    canvas.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      canvas.setPointerCapture?.(e.pointerId);
      last = pos(e);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(last[0], last[1], width / 2, 0, Math.PI * 2);
      ctx.fill();
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!last) return;
      const p = pos(e);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(last[0], last[1]);
      ctx.lineTo(p[0], p[1]);
      ctx.stroke();
      last = p;
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => canvas.addEventListener(ev, () => (last = null)));
    root.querySelectorAll("[data-color]").forEach((b) =>
      b.addEventListener("click", () => {
        color = b.dataset.color;
        width = 5;
        root.querySelectorAll(".draw-color, #eraseBtn").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
      })
    );
    root.querySelector("#eraseBtn").addEventListener("click", (e) => {
      color = "#ffffff";
      width = 22;
      root.querySelectorAll(".draw-color").forEach((x) => x.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
    root.querySelector("#clearBtn").addEventListener("click", () => {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, size, size);
    });
    const finish = () => {
      clearInterval(drawTimer);
      actions.drawn(canvas.toDataURL("image/png"));
    };
    root.querySelector("#doneBtn").addEventListener("click", finish);
    let left = DRAW_SECONDS;
    drawTimer = setInterval(() => {
      const el = root.querySelector("#drawTime");
      if (!el) return clearInterval(drawTimer);
      left -= 1;
      el.textContent = left;
      el.classList.toggle("hurry", left <= 10);
      if (left <= 0) finish();
    }, 1000);
    return;
  }
  // guess · reveal
  const reveal = game.phase === "reveal";
  const ok = reveal && game.picked === game.word.word;
  root.innerHTML = `
    <div class="screen screen-draw no-anim">
      ${top}
      <p class="subtitle">${reveal ? (ok ? `🎉 정답! ${who(drawer)} · ${who(guesser)} 모두 +1점` : `❌ 정답은 <b>${game.word.word}</b> (${game.word.meaningKo}) ${game.word.emoji}`) : `👀 ${who(drawer)}의 그림은 무엇일까요?`}</p>
      <img class="draw-canvas" src="${game.image}" alt="그림">
      <div class="choice-grid">
        ${game.choices.map((c) => `<button class="choice-btn${reveal ? (c === game.word.word ? " correct" : c === game.picked ? " wrong" : "") : ""}" data-w="${c}" ${reveal ? "disabled" : ""}>${c}</button>`).join("")}
      </div>
      ${reveal ? `<button class="primary-btn" id="nextBtn">${game.turn + 1 < game.rounds ? "다음 그림 →" : "결과 보기"}</button>` : ""}
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelectorAll("[data-w]").forEach((b) => b.addEventListener("click", () => actions.guess(b.dataset.w)));
  root.querySelector("#nextBtn")?.addEventListener("click", actions.next);
}

const drawActions = {
  toDraw: () => {
    const { draw: game } = store.getState();
    drawNextWord(game);
    game.phase = "draw";
    set({});
  },
  drawn: (image) => {
    const { draw: game } = store.getState();
    if (game.phase !== "draw") return;
    game.image = image;
    game.phase = "pass";
    set({});
  },
  toGuess: () => {
    store.getState().draw.phase = "guess";
    set({});
  },
  guess: (word) => {
    const { draw: game } = store.getState();
    if (game.phase !== "guess") return;
    game.picked = word;
    game.phase = "reveal";
    const { drawer, guesser } = drawRoles(game);
    if (word === game.word.word) {
      game.scores[drawer] += 1;
      game.scores[guesser] += 1;
      playSound("correct");
    } else playSound("wrong");
    speak(game.word.word, { rate: 0.85 });
    [drawer, guesser].forEach((n) => findMember(n) && recordActivity(n));
    set({});
  },
  next: () => {
    const { draw: game } = store.getState();
    game.turn += 1;
    Object.assign(game, { phase: "ready", image: null, picked: null, word: null });
    if (game.turn >= game.rounds) {
      game.done = true;
      game.players.forEach((n) => findMember(n) && recordCountUp(n, "drawgame", "all"));
      burstConfetti(50);
      game.players.forEach((n) => findMember(n) && announceBadges(checkNewBadges(n)));
    }
    set({});
  },
  again: () => set({ draw: newDrawGame(store.getState().draw.players) }),
  home: () => goHome(),
  quit: () => {
    clearInterval(drawTimer);
    set({ screen: "drawSetup" });
  },
};

// ── 🎵 챈트로 외우기 ──
let chantToken = 0;

function speakAsync(text, opts) {
  return new Promise((resolve) => {
    const u = speak(text, opts);
    if (!u) return setTimeout(resolve, 1200);
    let done = false;
    const fin = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    u.addEventListener("end", fin);
    u.addEventListener("error", fin);
    setTimeout(fin, 9000);
  });
}

function renderChantListScreen(root, { profileName, open, back }) {
  const card = (c) => {
    const best = getSectionBest(profileName, "chant", c.id);
    return `
      <button class="level-card" data-chant="${c.id}">
        <span class="level-icon">${c.emoji}</span>
        <span class="topic-text"><span class="level-label">${c.title}</span><span class="topic-summary">${c.lines[0].en}</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? "✅ 불렀어요" : `${c.lines.length}줄`}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(CHANTS, (c) => c.levels, myLevelOf(profileName));
  root.innerHTML = `
    <div class="screen screen-chant">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎵 챈트로 외우기</h1>
      <p class="subtitle">리듬에 맞춰 따라 부르며 요일 · 달 · 계절 · 몸 · 반대말을 외워요</p>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-chant]").forEach((b) => b.addEventListener("click", () => open(b.dataset.chant)));
}

function renderChantScreen(root, { profileName, chantId, back }) {
  chantToken += 1;
  const chant = CHANTS.find((c) => c.id === chantId);
  root.innerHTML = `
    <div class="screen screen-chant">
      <button class="back-btn" id="backBtn">← 챈트 목록</button>
      <h1 class="title">${chant.emoji} ${chant.title}</h1>
      <div class="chant-beat" id="beat" aria-hidden="true">👏</div>
      <ol class="chant-lines">${chant.lines.map((l, i) => `<li data-line="${i}"><b>${l.en}</b><small>${l.ko}</small></li>`).join("")}</ol>
      <div class="chant-btns">
        <button class="primary-btn" id="playBtn" ${speechSupported ? "" : "disabled"}>▶ 같이 부르기</button>
        <button class="secondary-btn" id="echoBtn" ${speechSupported ? "" : "disabled"}>🗣 한 줄씩 따라 하기</button>
      </div>
      <p class="settings-help" id="chantStatus">줄을 누르면 그 줄만 들을 수 있어요. 손뼉을 치며 박자에 맞춰 불러 봐요!</p>
    </div>`;
  const status = root.querySelector("#chantStatus");
  const beat = root.querySelector("#beat");
  const lines = [...root.querySelectorAll("[data-line]")];
  const stop = () => {
    chantToken += 1;
    stopSpeaking();
    lines.forEach((l) => l.classList.remove("now"));
    beat.classList.remove("on");
    root.querySelector("#playBtn").textContent = "▶ 같이 부르기";
    root.querySelector("#echoBtn").textContent = "🗣 한 줄씩 따라 하기";
  };
  const run = async (echo) => {
    const btn = root.querySelector(echo ? "#echoBtn" : "#playBtn");
    if (btn.textContent.startsWith("⏹")) return stop();
    stop();
    const token = chantToken;
    btn.textContent = "⏹ 멈추기";
    beat.classList.add("on");
    for (let i = 0; i < chant.lines.length; i++) {
      if (token !== chantToken || !root.isConnected) return;
      lines.forEach((l, k) => l.classList.toggle("now", k === i));
      lines[i].scrollIntoView({ block: "nearest" });
      status.textContent = echo ? "🔊 잘 들어요…" : `🎵 ${i + 1} / ${chant.lines.length}`;
      const t0 = performance.now();
      await speakAsync(chant.lines[i].en, { rate: 0.85 });
      if (echo && token === chantToken) {
        status.textContent = "🗣 이제 따라 해요!";
        await new Promise((r) => setTimeout(r, Math.max(1800, (performance.now() - t0) * 1.2)));
      }
    }
    if (token !== chantToken) return;
    stop();
    status.textContent = "🎉 끝까지 불렀어요! 한 번 더 불러 볼까요?";
    if (recordSectionResult(profileName, "chant", chant.id, 1, 1)) playSound("badge");
    recordActivity(profileName);
    announceBadges(checkNewBadges(profileName));
  };
  root.querySelector("#backBtn").addEventListener("click", () => {
    stop();
    back();
  });
  root.querySelector("#playBtn").addEventListener("click", () => run(false));
  root.querySelector("#echoBtn").addEventListener("click", () => run(true));
  lines.forEach((l, i) => l.addEventListener("click", () => speak(chant.lines[i].en, { rate: 0.85 })));
}

// ── 🌍 세계 문화 카드 ──
function renderCultureListScreen(root, { profileName, open, back }) {
  const done = CULTURE_CARDS.filter((c) => getSectionBest(profileName, "culture", c.id)).length;
  root.innerHTML = `
    <div class="screen screen-culture">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🌍 세계 문화 카드</h1>
      <p class="subtitle">영어를 쓰는 나라들의 인사 · 음식 · 명절 · 학교 이야기 · 모은 카드 ${done} / ${CULTURE_CARDS.length}</p>
      <div class="culture-grid">
        ${CULTURE_CARDS.map((c) => {
          const got = getSectionBest(profileName, "culture", c.id);
          return `<button class="culture-card${got ? " got" : ""}" data-card="${c.id}"><span class="culture-flag">${c.flag}</span><span class="culture-emoji">${c.emoji}</span><b>${c.title}</b><small>${c.country}${got ? " · ✅" : ""}</small></button>`;
        }).join("")}
      </div>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-card]").forEach((b) => b.addEventListener("click", () => open(b.dataset.card)));
}

function renderCultureCardScreen(root, { profileName, cardId, open, back }) {
  const i = CULTURE_CARDS.findIndex((c) => c.id === cardId);
  const card = CULTURE_CARDS[i];
  const next = CULTURE_CARDS[i + 1];
  const order = shuffle(card.quiz.choices.map((_, k) => k));
  root.innerHTML = `
    <div class="screen screen-culture">
      <button class="back-btn" id="backBtn">← 카드 목록</button>
      <div class="lesson-head"><span class="lesson-emoji">${card.flag} ${card.emoji}</span><h1 class="title">${card.title}</h1><p class="subtitle">${card.country}</p></div>
      <article class="passage-card-body">
        ${card.en.map((en, k) => `<div class="culture-line"><button class="speak-btn" data-say="${k}" aria-label="듣기" ${speechSupported ? "" : "disabled"}>🔊</button><p><b>${en}</b><small>${card.ko[k]}</small></p></div>`).join("")}
      </article>
      <button class="listen-btn" id="allBtn" ${speechSupported ? "" : "disabled"}>▶ 전체 듣기</button>
      <section class="question-card">
        <p class="question-label">🧠 퀴즈</p>
        <p class="grammar-question">${card.quiz.q}</p>
        <div class="choice-grid">${order.map((k) => `<button class="choice-btn" data-k="${k}">${card.quiz.choices[k]}</button>`).join("")}</div>
        <p class="settings-help" id="quizMsg"></p>
      </section>
      ${next ? `<button class="secondary-btn" id="nextBtn">다음 카드: ${next.flag} ${next.title} →</button>` : ""}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", () => {
    stopSpeaking();
    back();
  });
  root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speak(card.en[Number(b.dataset.say)], { rate: 0.85 })));
  root.querySelector("#allBtn").addEventListener("click", async () => {
    for (const en of card.en) await speakAsync(en, { rate: 0.85 });
  });
  root.querySelector("#nextBtn")?.addEventListener("click", () => {
    stopSpeaking();
    open(next.id);
  });
  root.querySelectorAll("[data-k]").forEach((b) =>
    b.addEventListener("click", () => {
      const ok = Number(b.dataset.k) === card.quiz.answer;
      b.classList.add(ok ? "correct" : "wrong");
      recordActivity(profileName);
      if (ok) {
        root.querySelectorAll("[data-k]").forEach((x) => (x.disabled = true));
        playSound("correct");
        const first = !getSectionBest(profileName, "culture", card.id);
        recordSectionResult(profileName, "culture", card.id, 1, 1);
        root.querySelector("#quizMsg").innerHTML = first ? `🎉 정답! <b>${card.flag} ${card.title}</b> 카드를 모았어요` : "🎉 정답!";
        if (first) announceBadges(checkNewBadges(profileName));
      } else {
        b.disabled = true;
        playSound("wrong");
        root.querySelector("#quizMsg").textContent = "🤔 다시 읽어 보고 골라 봐요";
      }
    })
  );
}
