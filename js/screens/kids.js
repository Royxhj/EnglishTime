// 초등 저학년을 위한 것들: 그림 퀴즈(듣고 그림 고르기 · 그림 보고 단어 고르기), 짝 맞추기 게임,
// 문제를 풀수록 자라는 캐릭터와 스티커북.
const PICTURE_QUIZ_SIZE = 10;

// 그림만 보고는 뜻을 알기 어려운 기호 · 달력 · 화살표 같은 그림
const VAGUE_EMOJIS = new Set(["🗓", "🗓️", "📅", "📆", "⏰", "⏳", "⌛", "❓", "❗", "➡️", "⬅️", "⬆️", "⬇️", "↩️", "🔁", "🔄", "✅", "❌", "✔️", "💬", "🗨️", "👉", "👈", "✨", "💡", "➕", "➖", "🔢", "📝", "📌"]);

// 같은 단계에서 그림(이모지)이 겹치지 않고, 그림으로 알아볼 수 있는 단어만 쓴다 (보기 그림이 같으면 헷갈리니까)
function pictureWordPool(levelId) {
  const list = (WORD_BANK[levelId] || []).filter((w) => w.emoji && !VAGUE_EMOJIS.has(w.emoji) && /^[a-z ]+$/i.test(w.word));
  const count = {};
  list.forEach((w) => (count[w.emoji] = (count[w.emoji] || 0) + 1));
  return list.filter((w) => count[w.emoji] === 1);
}

function pictureQuestion(w, levelId, kind) {
  const pool = pictureWordPool(levelId).filter((x) => x.id !== w.id);
  const others = shuffle(pool).slice(0, 3);
  if (kind === "listen") {
    return {
      id: w.id,
      kind: "word",
      levelId,
      label: "🔊 잘 듣고 알맞은 그림을 골라요",
      q: "🔊",
      big: true,
      ko: null,
      speakText: w.word,
      bigChoices: true,
      choices: shuffle([w.emoji, ...others.map((o) => o.emoji)]),
      correctAnswer: w.emoji,
      explain: `${w.emoji} = <b>${w.word}</b> (${w.meaningKo})`,
      summary: `${w.emoji} <b>${w.word}</b> · ${w.meaningKo}`,
      listenText: w.word,
      selectedAnswer: null,
    };
  }
  return {
    id: w.id,
    kind: "word",
    levelId,
    label: "그림에 맞는 영어 단어를 골라요",
    q: w.emoji,
    big: true,
    bigEmoji: true,
    ko: null,
    choices: shuffle([w.word, ...others.map((o) => o.word)]),
    correctAnswer: w.word,
    explain: `${w.emoji} = <b>${w.word}</b> (${w.meaningKo})`,
    summary: `${w.emoji} <b>${w.word}</b> · ${w.meaningKo}`,
    listenText: w.word,
    selectedAnswer: null,
  };
}

function buildPictureQuestions(levelId, kind) {
  return shuffle(pictureWordPool(levelId))
    .slice(0, PICTURE_QUIZ_SIZE)
    .map((w, i) => pictureQuestion(w, levelId, kind === "mix" ? (i % 2 ? "picture" : "listen") : kind));
}

function renderPictureQuizListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const kidLevels = LEVELS.filter((lv) => lv.id.startsWith("elementary"));
  const card = (lv, kind, emoji, title, desc) => {
    const best = getSectionBest(profileName, "picture", `${kind}:${lv.id}`);
    return `
      <button class="level-card" data-level="${lv.id}" data-kind="${kind}" style="--accent:${lv.color}">
        <span class="level-icon">${emoji}</span>
        <span class="topic-text"><span class="level-label">${title}</span><span class="topic-summary">${desc} · ${shortLevelLabel(lv)}</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
      </button>`;
  };
  const cards = (lv) => card(lv, "listen", "🎧", "듣고 그림 고르기", "소리를 듣고 그림을 눌러요") + card(lv, "picture", "🖼️", "그림 보고 단어 고르기", "그림에 맞는 영어를 골라요");
  const { mine, others } = splitByMyLevel(kidLevels, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-picture">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎧 그림 퀴즈</h1>
      <p class="subtitle">글을 몰라도 소리와 그림으로 풀어요</p>
      ${levelSplitHtml(mine.map(cards).join(""), others.map(cards).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-kind]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level, b.dataset.kind)));
}

// ── 짝 맞추기: 그림 카드와 영어 카드를 뒤집어 짝을 찾는다 ──
const MEMORY_PAIRS = 6;

function buildMemoryGame(levelId) {
  const words = shuffle(pictureWordPool(levelId)).slice(0, MEMORY_PAIRS);
  const cards = shuffle(words.flatMap((w) => [{ id: `${w.id}-p`, pair: w.id, face: w.emoji, kind: "picture", word: w }, { id: `${w.id}-w`, pair: w.id, face: w.word, kind: "word", word: w }]));
  return { levelId, cards, open: [], matched: [], moves: 0, done: false };
}

function renderMemoryScreen(root, { game, actions }) {
  const level = levelById(game.levelId);
  root.innerHTML = `
    <div class="screen screen-memory"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">찾은 짝 ${game.matched.length / 2} / ${MEMORY_PAIRS} · ${game.moves}번 뒤집음</span>
      </div>
      <h1 class="title">🃏 짝 맞추기</h1>
      <p class="subtitle">그림과 영어 단어가 같은 짝을 찾아요</p>
      <div class="memory-grid">
        ${game.cards
          .map((c, i) => {
            const shown = game.open.includes(i) || game.matched.includes(i);
            return `<button class="memory-card${shown ? " open" : ""}${game.matched.includes(i) ? " matched" : ""}${c.kind === "picture" ? " pic" : ""}" data-card="${i}" aria-label="${shown ? c.face : "뒤집힌 카드"}" ${game.matched.includes(i) ? "disabled" : ""}>
              <span>${shown ? c.face : "❓"}</span>
            </button>`;
          })
          .join("")}
      </div>
      ${
        game.done
          ? `<div class="result-banner correct" role="status">🎉 다 찾았어요! ${game.moves}번 만에 성공</div>
             <div class="result-actions"><button class="primary-btn" id="againBtn">🔁 새 카드로 다시 하기</button></div>`
          : ""
      }
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  root.querySelector("#againBtn")?.addEventListener("click", actions.again);
  root.querySelectorAll("[data-card]").forEach((b) => b.addEventListener("click", () => actions.flip(Number(b.dataset.card))));
}

// ── 자라는 캐릭터와 스티커: 푼 문제 수만큼 자라고 모인다 ──
// 친구 종류마다 7단계로 자란다. 단계는 푼 문제 수로 정해지고, 종류를 바꿔도 자란 만큼 그대로 간다.
const PET_MINS = [0, 20, 80, 200, 400, 800, 1500];
const PET_KINDS = [
  { id: "chick", title: "병아리", stages: [["🥚", "알"], ["🐣", "아기 병아리"], ["🐥", "병아리"], ["🐤", "꼬마 새"], ["🐔", "멋진 닭"], ["🦚", "공작새"], ["🦄", "전설의 유니콘"]] },
  { id: "frog", title: "개구리", stages: [["🫧", "개구리 알", 1], ["🐸", "아기 개구리", 0.6], ["🐸", "꼬마 개구리", 0.75], ["🐸", "청개구리", 0.9], ["🐸", "점프왕 개구리", 1.05], ["🐸", "연못 대장", 1.2], ["🐸", "전설의 개구리 왕", 1.35]] },
  { id: "puppy", title: "강아지", stages: [["🦴", "뼈다귀"], ["🐶", "아기 강아지"], ["🐕", "강아지"], ["🦮", "든든한 개"], ["🐩", "멋쟁이 개"], ["🐕‍🦺", "구조견"], ["🐺", "달빛 늑대"]] },
  { id: "kitten", title: "고양이", stages: [["🧶", "털실 뭉치"], ["🐱", "아기 고양이"], ["🐈", "고양이"], ["🐈‍⬛", "까만 고양이"], ["🐆", "치타"], ["🐅", "호랑이"], ["🦁", "사자 왕"]] },
  { id: "bunny", title: "숲속 친구", stages: [["🌰", "도토리"], ["🐿️", "다람쥐"], ["🐰", "토끼"], ["🦔", "고슴도치"], ["🦝", "너구리"], ["🦌", "사슴"], ["🦄", "숲의 유니콘"]] },
  { id: "bear", title: "곰", stages: [["🍯", "꿀단지"], ["🧸", "곰 인형"], ["🐻", "아기 곰"], ["🐨", "코알라"], ["🐼", "판다"], ["🐻‍❄️", "북극곰"], ["🦣", "전설의 매머드"]] },
  { id: "sea", title: "바다 친구", stages: [["🐚", "조개껍데기"], ["🐸", "개구리"], ["🐢", "거북이"], ["🐙", "문어"], ["🦭", "물개"], ["🐬", "돌고래"], ["🐳", "바다의 왕 고래"]] },
  { id: "dino", title: "공룡", stages: [["🥚", "공룡 알"], ["🦎", "아기 공룡"], ["🐊", "악어 공룡"], ["🦕", "목 긴 공룡"], ["🦖", "티라노"], ["🐲", "아기 용"], ["🐉", "전설의 용"]] },
  { id: "bird", title: "하늘 친구", stages: [["🪺", "새 둥지"], ["🐧", "아기 펭귄"], ["🦆", "오리"], ["🦉", "부엉이"], ["🦩", "홍학"], ["🦢", "백조"], ["🦅", "하늘의 왕 독수리"]] },
  { id: "bug", title: "곤충", stages: [["🌱", "새싹"], ["🐛", "애벌레"], ["🐝", "꿀벌"], ["🐞", "무당벌레"], ["🦗", "귀뚜라미"], ["🦋", "나비"], ["🧚", "숲의 요정"]] },
  { id: "jungle", title: "정글 친구", stages: [["🍌", "바나나"], ["🐵", "아기 원숭이"], ["🐒", "원숭이"], ["🦥", "나무늘보"], ["🦧", "오랑우탄"], ["🦍", "고릴라"], ["🐘", "정글의 왕 코끼리"]] },
];
const petKindById = (id) => PET_KINDS.find((k) => k.id === id) || PET_KINDS[0];
// 같은 그림으로 자라는 친구(개구리)는 scale로 크기가 커진다
const petStages = (kindId) => petKindById(kindId).stages.map(([emoji, name, scale], i) => ({ min: PET_MINS[i], emoji, name, scale: scale || 1 }));
const PET_STAGES = petStages("chick");
const STICKERS = "🌟🍎🐶🐱🚗🎈🍦🦋🌈🐠🍓🚀🐻🌻🎁🦁🍩🐢⚽🎨🐧🍉🚂🐰🌙🦖🍪🎸🐳👑".match(/\p{Extended_Pictographic}/gu);
const STICKER_EVERY = 15;

function petStatus(profileName) {
  const p = getProfileData(profileName);
  const total = p.totalAnswered || 0;
  const kind = petKindById(p.petKind);
  const stages = petStages(kind.id);
  let stage = stages[0];
  for (const s of stages) if (total >= s.min) stage = s;
  const next = stages[stages.indexOf(stage) + 1];
  const stickers = Math.min(STICKERS.length, Math.floor(total / STICKER_EVERY));
  return { total, kind, stages, chosen: !!p.petKind, stage, next, left: next ? next.min - total : 0, stickers, toNextSticker: STICKER_EVERY - (total % STICKER_EVERY) };
}

function petCardHtml(profileName) {
  const s = petStatus(profileName);
  const pct = s.next ? Math.round(((s.total - s.stage.min) / (s.next.min - s.stage.min)) * 100) : 100;
  const theme = petBackgroundStyle(profileName);
  return `
    <section class="pet-card${theme.cls}"${theme.style}>
      <button class="pet-pick-btn" id="petPickBtn" aria-label="친구 바꾸기">${dressedPetHtml(profileName, s.stage.emoji, false, s.stage.scale)}</button>
      <div class="pet-text">
        <b>내 친구: ${s.stage.name}</b>
        <small>${s.chosen ? "" : "🐾 캐릭터를 눌러 좋아하는 동물로 바꿔 봐요! · "}${s.next ? `문제 ${s.left}개 더 풀면 ${s.next.emoji}로 자라요!` : "최고 단계까지 자랐어요! 🎉"}</small>
        <span class="progress-track"><span class="progress-fill" style="width:${pct}%"></span></span>
      </div>
      <div class="pet-btns">
        <button class="pet-sticker-btn" id="shopBtn" aria-label="별 상점, 별 ${shopStatus(profileName).stars}개">⭐ <b>${shopStatus(profileName).stars}</b></button>
        <button class="pet-sticker-btn" id="stickerBtn" aria-label="스티커북">📒 <b>${s.stickers}</b></button>
      </div>
    </section>`;
}

function renderStickerScreen(root, { profileName, back, choosePet }) {
  const s = petStatus(profileName);
  const stageIndex = s.stages.indexOf(s.stage);
  root.innerHTML = `
    <div class="screen screen-stickers">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📒 스티커북</h1>
      <p class="subtitle">문제를 ${STICKER_EVERY}개 풀 때마다 스티커가 하나씩 생겨요 · ${s.stickers} / ${STICKERS.length}</p>
      <section class="pet-big${petBackgroundStyle(profileName).cls}"${petBackgroundStyle(profileName).style}>
        ${dressedPetHtml(profileName, s.stage.emoji, true, s.stage.scale)}
        <p><b>${s.stage.name}</b> · 지금까지 ${s.total}문제</p>
        <p class="settings-help">${s.next ? `${s.left}문제 더 풀면 ${s.next.emoji} ${s.next.name}(으)로 자라요` : "최고 단계예요!"} · 다음 스티커까지 ${s.toNextSticker}문제</p>
      </section>
      <h2 class="section-title">🐾 친구 고르기 <small>자란 만큼 그대로 바뀌어요</small></h2>
      <div class="pet-kinds">
        ${PET_KINDS.map((k) => `<button class="pet-kind${k.id === s.kind.id ? " active" : ""}" data-kind="${k.id}" aria-pressed="${k.id === s.kind.id}"><span class="pet-kind-emoji"${k.stages[stageIndex][2] ? ` style="transform:scale(${k.stages[stageIndex][2]})"` : ""}>${k.stages[stageIndex][0]}</span><small>${k.title}</small></button>`).join("")}
      </div>
      <h2 class="section-title">📒 스티커</h2>
      <div class="sticker-grid">
        ${STICKERS.map((e, i) => `<span class="sticker${i < s.stickers ? " got" : ""}" aria-label="${i < s.stickers ? e : "아직 없는 스티커"}">${i < s.stickers ? e : "?"}</span>`).join("")}
      </div>
      <h2 class="section-title">자라는 순서</h2>
      <p class="pet-stages">${s.stages.map((p) => `<span class="${s.total >= p.min ? "got" : ""}"><i style="display:inline-block;transform:scale(${p.scale})">${p.emoji}</i><small>${p.min}</small></span>`).join("")}</p>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-kind]").forEach((b) => b.addEventListener("click", () => choosePet(b.dataset.kind)));
}
