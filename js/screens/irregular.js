// 불규칙 동사: 변화표로 공부하고(듣기 · 가리고 외우기) 4지선다로 테스트한다.
const IRREGULAR_QUIZ_SIZE = 10;

const IRREGULAR_NOTES = {
  be: "주어가 I · he · she · it이면 was, you · we · they면 were예요.",
  read: "철자는 그대로지만 과거형 · 과거분사 read는 [레드]로 소리 나요.",
  get: "영국 영어에서는 과거분사로 got도 써요.",
  lie: "'거짓말하다'의 lie는 lied - lied로 규칙 변화해요. lay(놓다)와도 헷갈리지 마세요.",
  lay: "lie(눕다)의 과거형도 lay예요. 목적어가 있으면 '놓다'의 lay예요.",
  find: "found는 '설립하다'라는 다른 동사이기도 해요 (found - founded - founded).",
  rise: "rise는 스스로 오르는 것(목적어 없음), raise(올리다)는 규칙 변화예요.",
  leave: "left는 '왼쪽'이라는 뜻도 있어요.",
  win: "won은 [원]으로 소리 나요. 한국 돈 '원'과 같은 소리예요.",
};

function findIrregularSet(id) {
  return IRREGULAR_SETS.find((s) => s.id === id) || null;
}

function regularized(base) {
  if (base.endsWith("e")) return `${base}d`;
  if (/[^aeiou]y$/.test(base)) return `${base.slice(0, -1)}ied`;
  return `${base}ed`;
}

function irregularFormsText(v) {
  return `${v.base} - ${v.past} - ${v.pp}`;
}

function irregularExplain(v) {
  const pattern = IRREGULAR_PATTERNS.find((p) => p.id === irregularPattern(v));
  const note = IRREGULAR_NOTES[v.base];
  return `<b>${irregularFormsText(v)}</b> (${v.ko})<br>${pattern.label}: ${pattern.desc}.${note ? `<br>${note}` : ""}`;
}

// 보기: 같은 동사의 다른 모양 → -ed를 붙인 틀린 모양 → 같은 세트의 다른 동사 순서로 채운다.
function irregularChoices(correct, candidates, fallback, alt) {
  const picked = [];
  const bad = new Set([correct, ...alt]);
  for (const c of [...candidates, ...shuffle(fallback)]) {
    if (picked.length >= 3) break;
    if (!c || bad.has(c) || picked.includes(c)) continue;
    picked.push(c);
  }
  return shuffle([correct, ...picked]);
}

function irregularQuestion(v, set, kind) {
  const others = set.verbs.filter((o) => o !== v);
  const n = (b) => (b.endsWith("e") ? `${b}n` : `${b}en`);
  const forms = {
    past: { q: `${v.base} - ___ - ${v.pp}`, ask: "과거형", correct: v.past, candidates: [v.pp, regularized(v.base), v.base, n(v.base)], fallback: others.map((o) => o.past) },
    pp: { q: `${v.base} - ${v.past} - ___`, ask: "과거분사", correct: v.pp, candidates: [v.past, regularized(v.base), n(v.base), v.base], fallback: others.map((o) => o.pp) },
    base: { q: `___ - ${v.past} - ${v.pp}`, ask: "원형", correct: v.base, candidates: [], fallback: others.map((o) => o.base) },
  }[kind];
  return {
    id: `irr|${set.id}|${v.base}|${kind}`,
    drill: true,
    kind: "irregular",
    label: `빈칸에 알맞은 ${forms.ask}${kind === "pp" ? "를" : "을"} 고르세요`,
    q: forms.q,
    ko: kind === "base" ? null : `${v.base}: ${v.ko}`,
    choices: irregularChoices(forms.correct, forms.candidates, forms.fallback, v.alt),
    correctAnswer: forms.correct,
    explain: irregularExplain(v),
    summary: irregularFormsText(v),
    listenText: `${v.base}, ${v.past.replace(" / ", ", ")}, ${v.pp}`,
    selectedAnswer: null,
  };
}

function buildIrregularQuestions(setId) {
  const set = findIrregularSet(setId);
  if (!set) return [];
  // 과거형 · 과거분사를 주로 묻고, 가끔 원형을 거꾸로 묻는다.
  const kinds = ["past", "pp", "past", "pp", "base"];
  return shuffle(set.verbs)
    .slice(0, IRREGULAR_QUIZ_SIZE)
    .map((v, i) => irregularQuestion(v, set, kinds[i % kinds.length]));
}

// 화면을 떠났다 와도 가리기 · 펼친 단계를 기억한다(앱을 켜 둔 동안).
let irregularHideForms = false;
let irregularOpenSet = null;

function irregularSetToOpen(profileName) {
  if (irregularOpenSet) return irregularOpenSet;
  const level = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  const order = LEVELS.map((lv) => lv.id);
  const mine = order.indexOf(level);
  // 내 단계보다 높지 않은 세트 중 가장 높은 것
  const fit = [...IRREGULAR_SETS].reverse().find((s) => mine >= order.indexOf(s.levelId));
  return (fit || IRREGULAR_SETS[0]).id;
}

function irregularVerbRow(v, setId) {
  const forms = [v.past, v.pp].map((f) => `<span class="irr-form" data-form>${f}</span>`);
  return `
    <li class="irr-row">
      <button class="speak-btn" data-speak="${setId}|${v.base}" aria-label="${v.base} 변화 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
      <span class="irr-forms"><b class="irr-base">${v.base}</b><span class="irr-arrow">-</span>${forms[0]}<span class="irr-arrow">-</span>${forms[1]}</span>
      <span class="irr-ko">${v.ko}</span>
    </li>`;
}

function renderIrregularScreen(root, { profileName, startTest, back }) {
  const openSet = irregularSetToOpen(profileName);

  root.innerHTML = `
    <div class="screen screen-irregular${irregularHideForms ? " irr-hidden" : ""}">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🔁 불규칙 동사</h1>
      <p class="subtitle">원형 - 과거형 - 과거분사 외우기</p>

      <section class="lesson-section">
        <h2 class="section-title">이렇게 공부해요</h2>
        <p class="lesson-point-text">대부분의 동사는 <b>-ed</b>를 붙여 과거형을 만들지만 (play - played - played), 자주 쓰는 동사 중에는 모양이 제멋대로 바뀌는 <b>불규칙 동사</b>가 많아요. 과거형은 '어제 한 일', 과거분사(p.p.)는 <b>현재완료(have p.p.)</b>와 <b>수동태(be p.p.)</b>에 써요.</p>
        <div class="irr-patterns">
          ${IRREGULAR_PATTERNS.map((p) => `<div class="irr-pattern-card"><b>${p.label}</b><span>${p.desc}</span><small>${p.example}</small></div>`).join("")}
        </div>
        <p class="settings-help">🔊를 누르면 세 모양을 이어서 읽어 줘요. 소리 내어 따라 말하면 더 잘 외워져요.</p>
        <button class="secondary-btn" id="hideBtn" aria-pressed="${irregularHideForms}">${irregularHideForms ? "👀 모두 보이기" : "🙈 과거형 · 과거분사 가리기"}</button>
        <p class="settings-help" id="hideHelp" ${irregularHideForms ? "" : "hidden"}>가린 칸을 누르면 하나씩 보여요. 먼저 떠올려 보고 확인해요.</p>
      </section>

      ${IRREGULAR_SETS.map((set) => {
        const level = levelById(set.levelId);
        const best = getSectionBest(profileName, "irregular", set.id);
        const groups = IRREGULAR_PATTERNS.map((p) => ({ ...p, verbs: set.verbs.filter((v) => irregularPattern(v) === p.id) })).filter((g) => g.verbs.length);
        return `
        <details class="basic-grade irr-set" data-set="${set.id}" style="--accent:${level.color}" ${set.id === openSet ? "open" : ""}>
          <summary class="basic-grade-title">${set.emoji} ${set.title} <span class="basic-grade-count">${best ? `최고 ${best.correct}/${best.total}` : `${set.verbs.length}개`}</span></summary>
          <div class="irr-body">
            <p class="settings-help">${set.desc} · ${shortLevelLabel(level)} · ${set.verbs.length}개</p>
            <button class="primary-btn" data-test="${set.id}">✏️ 테스트 (${Math.min(IRREGULAR_QUIZ_SIZE, set.verbs.length)}문제)</button>
            ${groups
              .map(
                (g) => `
              <h3 class="irr-group-title">${g.label} <small>${g.desc}</small></h3>
              <ul class="irr-list">${g.verbs.map((v) => irregularVerbRow(v, set.id)).join("")}</ul>`
              )
              .join("")}
          </div>
        </details>`;
      }).join("")}
    </div>
  `;

  const screen = root.querySelector(".screen-irregular");
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelector("#hideBtn").addEventListener("click", (e) => {
    irregularHideForms = !irregularHideForms;
    screen.classList.toggle("irr-hidden", irregularHideForms);
    screen.querySelectorAll(".irr-form.revealed").forEach((el) => el.classList.remove("revealed"));
    e.currentTarget.textContent = irregularHideForms ? "👀 모두 보이기" : "🙈 과거형 · 과거분사 가리기";
    e.currentTarget.setAttribute("aria-pressed", String(irregularHideForms));
    root.querySelector("#hideHelp").hidden = !irregularHideForms;
  });
  root.querySelectorAll("[data-form]").forEach((el) =>
    el.addEventListener("click", () => {
      if (irregularHideForms) el.classList.add("revealed");
    })
  );
  root.querySelectorAll("[data-speak]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const [setId, base] = btn.dataset.speak.split("|");
      const v = findIrregularSet(setId).verbs.find((x) => x.base === base);
      speak(`${v.base}, ${v.past.replace(" / ", ", ")}, ${v.pp}`, { rate: 0.8 });
    })
  );
  root.querySelectorAll(".irr-set").forEach((el) =>
    el.addEventListener("toggle", () => {
      if (el.open) irregularOpenSet = el.dataset.set;
    })
  );
  root.querySelectorAll("[data-test]").forEach((btn) => btn.addEventListener("click", () => startTest(btn.dataset.test)));
}
