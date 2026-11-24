// to부정사 · 동명사 목적어 동사: 원리 설명 → 묶음별 동사와 예문 → 테스트(빈칸 고르기 · 어느 묶음인지 고르기).
const VP_GROUP_TEST_SIZE = 8;
const VP_ALL_TEST_SIZE = 12;

const VP_REASONS = {
  "to-only": "앞으로 할 일(원함 · 계획 · 약속)을 말하는 동사라 to부정사만 써요.",
  "ing-only": "하고 있거나 한 행동 자체를 다루는 동사라 동명사(-ing)만 써요.",
  "both-same": "to부정사와 동명사 둘 다 쓸 수 있고 뜻도 같아요.",
};

function vpBase(item) {
  return (item.form.startsWith("to ") ? item.form : item.alt).slice(3);
}

function vpMarked(item) {
  return item.en.replace(item.form, `<mark class="lesson-key">${item.form}</mark>`);
}

function vpEntries(groupIds) {
  return VERB_PATTERN_GROUPS.filter((g) => groupIds.includes(g.id)).flatMap((g) => g.verbs.flatMap((v) => v.items.map((item) => ({ g, v, item }))));
}

function vpBlankQuestion({ g, v, item }) {
  const isTo = item.form.startsWith("to ");
  return {
    id: `vp|b|${v.v}|${item.form}`,
    drill: true,
    kind: "verbPattern",
    label: "빈칸에 알맞은 것을 고르세요",
    q: `${item.en.replace(item.form, "___")} (${vpBase(item)})`,
    ko: item.tr,
    choices: shuffle([item.form, item.alt]),
    correctAnswer: item.form,
    explain: `<b>${v.v}</b>(${v.ko}) + ${isTo ? "to부정사" : "동명사"}<br>${item.why || VP_REASONS[g.id]}`,
    summary: vpMarked(item),
    listenText: item.en,
    selectedAnswer: null,
  };
}

function vpKindQuestion({ g, v, item }) {
  return {
    id: `vp|k|${v.v}`,
    drill: true,
    kind: "verbPattern",
    label: "이 동사 뒤에 올 수 있는 것은?",
    q: v.v,
    big: true,
    ko: `${v.ko}`,
    choices: VERB_PATTERN_GROUPS.map((x) => x.short),
    correctAnswer: g.short,
    explain: `<b>${v.v}</b> → ${g.short}<br>${g.id === "both-diff" ? "to는 앞으로 할 일, -ing는 이미 한 일로 뜻이 달라져요." : VP_REASONS[g.id]}<br>예) ${vpMarked(item)}`,
    summary: `${v.v} → ${g.short}`,
    listenText: item.en,
    selectedAnswer: null,
  };
}

// 묶음 하나: 빈칸 문제(뜻이 같은 묶음은 어느 묶음인지 고르는 문제). 전체: 빈칸 8 + 묶음 고르기 4.
function buildVerbPatternQuestions(id) {
  if (id === "all") {
    const blanks = shuffle(vpEntries(["to-only", "ing-only", "both-diff"])).slice(0, 8).map(vpBlankQuestion);
    const usedVerbs = new Set(blanks.map((q) => q.id.split("|")[2]));
    const kinds = shuffle(VERB_PATTERN_GROUPS.flatMap((g) => g.verbs.map((v) => ({ g, v, item: v.items[0] }))))
      .filter((e) => !usedVerbs.has(e.v.v))
      .slice(0, VP_ALL_TEST_SIZE - blanks.length)
      .map(vpKindQuestion);
    return shuffle([...blanks, ...kinds]);
  }
  if (id === "both-same") {
    const mine = vpEntries(["both-same"]).map(vpKindQuestion);
    const others = shuffle(vpEntries(["to-only", "ing-only"])).slice(0, VP_GROUP_TEST_SIZE - mine.length).map(vpKindQuestion);
    return shuffle([...mine, ...others]);
  }
  const size = id === "both-diff" ? vpEntries([id]).length : VP_GROUP_TEST_SIZE;
  return shuffle(vpEntries([id])).slice(0, size).map(vpBlankQuestion);
}

function vpTestLabel(id) {
  if (id === "all") return "🔀 to부정사 · 동명사 종합";
  const g = VERB_PATTERN_GROUPS.find((x) => x.id === id);
  return `${g.emoji} ${g.title}`;
}

function vpTestSize(id) {
  if (id === "all") return VP_ALL_TEST_SIZE;
  if (id === "both-diff") return vpEntries([id]).length;
  return VP_GROUP_TEST_SIZE;
}

let vpOpenGroup = null;

function renderVerbPatternScreen(root, { profileName, startTest, back }) {
  const best = (id) => getSectionBest(profileName, "verbPattern", id);
  const openId = vpOpenGroup || (VERB_PATTERN_GROUPS.find((g) => !best(g.id)) || VERB_PATTERN_GROUPS[0]).id;
  const bestLabel = (id) => (best(id) ? `최고 ${best(id).correct}/${best(id).total}` : "");
  const allBest = best("all");

  root.innerHTML = `
    <div class="screen screen-vp">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🔀 to부정사 · 동명사</h1>
      <p class="subtitle">동사 뒤에 to가 올까, -ing가 올까?</p>

      <section class="lesson-section">
        <h2 class="section-title">💡 먼저 알아 둘 원리</h2>
        <p class="lesson-point-text">'수영하는 것을 좋아한다'처럼 동사 뒤에 <b>또 다른 동작</b>을 목적어로 쓰려면, 그 동작을 <b>to + 동사원형</b>(to부정사)이나 <b>동사ing</b>(동명사)로 바꿔야 해요. I like swim.은 틀리고 I like swimming. / I like to swim.이 맞아요.</p>
        <p class="lesson-point-text">문제는 <b>앞에 오는 동사가 어느 쪽을 좋아하는지</b>가 정해져 있다는 거예요. want는 to만, enjoy는 -ing만 받아요. 다행히 큰 원리가 있어요.</p>
        <div class="vp-principle">
          <div><b>to + 동사원형</b><span>➡️ 아직 안 한 일, 앞으로 할 일</span><small>I want <u>to go</u>. 가고 싶다 (아직 안 감)</small></div>
          <div><b>동사ing</b><span>🔄 하고 있거나 이미 한 일</span><small>I enjoy <u>going</u> there. 가는 걸 즐긴다 (실제로 감)</small></div>
        </div>
        <p class="lesson-point-text">이 원리로 대부분을 이해할 수 있어요. 아래 네 묶음을 차례로 보고, 묶음마다 테스트로 확인해 보세요.</p>
        <div class="table-scroll">
          <table class="note-table">
            <thead><tr><th>묶음</th><th>대표 동사</th></tr></thead>
            <tbody>${VERB_PATTERN_GROUPS.map((g) => `<tr><td>${g.emoji} ${g.short}</td><td>${g.verbs.slice(0, 5).map((v) => v.v).join(", ")} …</td></tr>`).join("")}</tbody>
          </table>
        </div>
        <button class="primary-btn" data-test="all">🧩 전체 섞어서 테스트 (${VP_ALL_TEST_SIZE}문제)${allBest ? ` · 최고 ${allBest.correct}/${allBest.total}` : ""}</button>
      </section>

      ${VERB_PATTERN_GROUPS.map(
        (g, gi) => `
      <details class="basic-grade vp-group" data-group="${g.id}" style="--accent:${g.color}" ${g.id === openId ? "open" : ""}>
        <summary class="basic-grade-title">${gi + 1}. ${g.emoji} ${g.title} <span class="basic-grade-count">${bestLabel(g.id) || `${g.verbs.length}개`}</span></summary>
        <div class="vp-body">
          <p class="vp-rule">${g.rule}</p>
          ${g.explain.map((p) => `<p class="lesson-point-text">${p}</p>`).join("")}
          <p class="vp-tip">📌 ${g.tip}</p>
          <ul class="vp-list">
            ${g.verbs
              .map(
                (v) => `
              <li class="vp-verb">
                <p class="vp-verb-head"><b>${v.v}</b> <span>${v.ko}</span></p>
                ${v.items
                  .map(
                    (item) => `
                <div class="lesson-example">
                  <button class="speak-btn" data-speak="${encodeURIComponent(item.en)}" aria-label="예문 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
                  <div>
                    <p class="lesson-example-en">${vpMarked(item)}</p>
                    <p class="lesson-example-ko">${item.tr}</p>
                    ${item.why ? `<p class="vp-why">👉 ${item.why}</p>` : ""}
                  </div>
                </div>`
                  )
                  .join("")}
              </li>`
              )
              .join("")}
          </ul>
          <button class="primary-btn" data-test="${g.id}">✏️ ${g.short} 테스트 (${vpTestSize(g.id)}문제)</button>
        </div>
      </details>`
      ).join("")}
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-speak]").forEach((btn) => btn.addEventListener("click", () => speak(decodeURIComponent(btn.dataset.speak))));
  root.querySelectorAll(".vp-group").forEach((el) =>
    el.addEventListener("toggle", () => {
      if (el.open) vpOpenGroup = el.dataset.group;
    })
  );
  root.querySelectorAll("[data-test]").forEach((btn) => btn.addEventListener("click", () => startTest(btn.dataset.test)));
}
