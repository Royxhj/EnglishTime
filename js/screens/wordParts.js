// 숙어 · 구동사와 접두사 · 접미사: 묶음별 설명 → 예문 → 10문제 테스트. 화면 틀은 둘이 같이 쓴다.
const WORD_PARTS_TEST_SIZE = 10;

// 뜻이 비슷해서 서로 오답 보기로 내면 안 되는 접사
const AFFIX_LOOKALIKE = [["un-", "dis-", "in- / im-"], ["-tion / -sion", "-ment", "-ness"], ["-ful", "-ous"]];

function lookalike(a, b) {
  return AFFIX_LOOKALIKE.some((g) => g.includes(a) && g.includes(b));
}

function pickDistractors(correct, pool, n = 3) {
  return shuffle(pool.filter((x) => x !== correct)).filter((x, i, arr) => arr.indexOf(x) === i).slice(0, n);
}

function idiomQuestion(set, item, kind) {
  const others = set.items.filter((x) => x !== item);
  if (kind === "meaning") {
    return {
      id: `idiom|${set.id}|${item.e}|m`,
      kind: "idiom",
      label: "이 표현의 뜻은?",
      q: item.e,
      big: true,
      ko: `예) ${item.en}`,
      choices: shuffle([item.ko, ...pickDistractors(item.ko, others.map((x) => x.ko))]),
      correctAnswer: item.ko,
      explain: `<b>${item.e}</b> = ${item.ko}<br>${item.en}<br>${item.tr}`,
      summary: `${item.e} = ${item.ko}`,
      listenText: item.en,
      selectedAnswer: null,
    };
  }
  return {
    id: `idiom|${set.id}|${item.e}|e`,
    kind: "idiom",
    label: "뜻에 맞는 표현은?",
    q: item.ko,
    big: true,
    ko: item.tr,
    choices: shuffle([item.e, ...pickDistractors(item.e, others.map((x) => x.e))]),
    correctAnswer: item.e,
    explain: `<b>${item.e}</b> = ${item.ko}<br>${item.en}`,
    summary: `${item.ko} = ${item.e}`,
    listenText: item.en,
    selectedAnswer: null,
  };
}

function buildIdiomQuestions(setId) {
  const set = IDIOM_SETS.find((s) => s.id === setId);
  return shuffle(set.items)
    .slice(0, WORD_PARTS_TEST_SIZE)
    .map((item, i) => idiomQuestion(set, item, i % 2 ? "meaning" : "expr"));
}

function affixWordQuestion(set, affix, w) {
  const pool = set.items.flatMap((a) => a.words.map((x) => x.meaning));
  return {
    id: `affix|${w.word}`,
    kind: "affix",
    label: "조각으로 나누어 뜻을 짐작해 보세요",
    q: w.word,
    big: true,
    ko: `${affix.a} (${affix.ko}) + ${w.base}`,
    choices: shuffle([w.meaning, ...pickDistractors(w.meaning, pool)]),
    correctAnswer: w.meaning,
    explain: `<b>${w.word}</b> = ${affix.a.startsWith("-") ? `${w.base} + ${affix.a}` : `${affix.a} + ${w.base}`} → ${w.meaning}<br>${affix.a}: ${affix.ko}. ${affix.note}`,
    summary: `${w.word} = ${w.meaning}`,
    listenText: w.word,
    selectedAnswer: null,
  };
}

function affixMeaningQuestion(set, affix) {
  const pool = set.items.filter((x) => x !== affix && !lookalike(x.a, affix.a)).map((x) => x.ko);
  return {
    id: `affix|${affix.a}`,
    kind: "affix",
    label: "이 조각의 뜻은?",
    q: affix.a,
    big: true,
    ko: `예) ${affix.words.map((w) => w.word).join(", ")}`,
    choices: shuffle([affix.ko, ...pickDistractors(affix.ko, pool)]),
    correctAnswer: affix.ko,
    explain: `<b>${affix.a}</b> = ${affix.ko}<br>${affix.words.map((w) => `${w.word}(${w.meaning})`).join(", ")}`,
    summary: `${affix.a} = ${affix.ko}`,
    listenText: null,
    selectedAnswer: null,
  };
}

function buildAffixQuestions(setId) {
  const set = AFFIX_SETS.find((s) => s.id === setId);
  const words = shuffle(set.items.flatMap((a) => a.words.map((w) => ({ a, w })))).slice(0, 7).map(({ a, w }) => affixWordQuestion(set, a, w));
  const metas = shuffle(set.items).slice(0, WORD_PARTS_TEST_SIZE - words.length).map((a) => affixMeaningQuestion(set, a));
  return shuffle([...words, ...metas]);
}

let wordPartsOpen = {};

// config: { key, title, subtitle, introHtml, sets, section, itemsHtml(set) }
function renderWordPartsScreen(root, { profileName, config, startTest, back }) {
  const best = (id) => getSectionBest(profileName, config.section, id);
  const myLevel = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  const openId = wordPartsOpen[config.key] || (config.sets.find((s) => s.levelId === myLevel) || config.sets.find((s) => !best(s.id)) || config.sets[0]).id;

  root.innerHTML = `
    <div class="screen screen-vp">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">${config.title}</h1>
      <p class="subtitle">${config.subtitle}</p>
      <section class="lesson-section">${config.introHtml}</section>
      ${config.sets
        .map((set) => {
          const level = levelById(set.levelId);
          const b = best(set.id);
          return `
      <details class="basic-grade vp-group" data-set="${set.id}" style="--accent:${level.color}" ${set.id === openId ? "open" : ""}>
        <summary class="basic-grade-title">${set.emoji} ${set.title} <span class="basic-grade-count">${b ? `최고 ${b.correct}/${b.total}` : `${set.items.length}개`}</span></summary>
        <div class="vp-body">
          <p class="lesson-point-text">${set.intro}</p>
          <ul class="vp-list">${config.itemsHtml(set)}</ul>
          <button class="primary-btn" data-test="${set.id}">✏️ 테스트 (${WORD_PARTS_TEST_SIZE}문제)</button>
        </div>
      </details>`;
        })
        .join("")}
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-speak]").forEach((btn) => btn.addEventListener("click", () => speak(decodeURIComponent(btn.dataset.speak))));
  root.querySelectorAll(".vp-group").forEach((el) =>
    el.addEventListener("toggle", () => {
      if (el.open) wordPartsOpen[config.key] = el.dataset.set;
    })
  );
  root.querySelectorAll("[data-test]").forEach((btn) => btn.addEventListener("click", () => startTest(btn.dataset.test)));
}

const speakBtnHtml = (text) => `<button class="speak-btn" data-speak="${encodeURIComponent(text)}" aria-label="듣기" ${speechSupported ? "" : "disabled"}>🔊</button>`;

const IDIOM_SCREEN = {
  key: "idiom",
  title: "🧩 숙어 · 생활 표현",
  subtitle: "덩어리로 외우는 표현",
  section: "idiom",
  sets: IDIOM_SETS,
  introHtml: `<p class="lesson-point-text">숙어는 <b>여러 단어가 모여 새로운 뜻</b>을 만드는 표현이에요. give(주다) + up(위로)을 더해도 '포기하다'라는 뜻은 나오지 않죠. 그래서 <b>예문과 함께 덩어리째</b> 외우는 게 가장 좋아요. 🔊로 예문을 듣고 소리 내어 따라 읽어 보세요.</p>`,
  itemsHtml: (set) =>
    set.items
      .map(
        (it) => `
      <li class="vp-verb">
        <p class="vp-verb-head"><b>${it.e}</b> <span>${it.ko}</span></p>
        <div class="lesson-example">${speakBtnHtml(it.en)}<div><p class="lesson-example-en">${it.en}</p><p class="lesson-example-ko">${it.tr}</p></div></div>
      </li>`
      )
      .join(""),
};

const AFFIX_SCREEN = {
  key: "affix",
  title: "🔤 접두사 · 접미사",
  subtitle: "단어 조각으로 뜻 짐작하기",
  section: "affix",
  sets: AFFIX_SETS,
  introHtml: `<p class="lesson-point-text">긴 영어 단어는 대부분 <b>앞 조각(접두사) + 뿌리 단어 + 뒤 조각(접미사)</b>으로 되어 있어요. 예를 들어 <b>un + believe + able</b> = unbelievable(믿을 수 없는)이에요. 조각의 뜻만 알아도 처음 보는 단어의 뜻을 짐작할 수 있어서, 독해할 때 큰 힘이 돼요.</p>`,
  itemsHtml: (set) =>
    set.items
      .map(
        (a) => `
      <li class="vp-verb">
        <p class="vp-verb-head"><b>${a.a}</b> <span>${a.ko}</span></p>
        <p class="lesson-point-text">${a.note}</p>
        ${a.words
          .map(
            (w) => `<div class="lesson-example">${speakBtnHtml(w.word)}<div><p class="lesson-example-en">${w.base} → <b>${w.word}</b></p><p class="lesson-example-ko">${w.meaning}</p></div></div>`
          )
          .join("")}
      </li>`
      )
      .join(""),
};
