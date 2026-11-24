// 이번 주 목표와 과제: 부모님이 아이 프로필에 목표(문제 수 · 공부한 날 · 오늘의 학습)와 과제를 정해 주면 진행률을 보여 준다.
const GOAL_COUNTS = [
  { key: "answers", emoji: "✏️", label: "문제 풀기", unit: "문제", options: [0, 30, 50, 100, 150, 200, 300] },
  { key: "days", emoji: "📅", label: "공부한 날", unit: "일", options: [0, 2, 3, 4, 5, 6, 7] },
  { key: "daily", emoji: "☀️", label: "오늘의 학습 완료", unit: "번", options: [0, 2, 3, 4, 5, 6, 7] },
];
const TASK_PASS = 0.8;

const passed = (best, ratio = TASK_PASS) => !!best && best.correct / best.total >= ratio;

// 과제 목록: id → { group, label, done(profileName) }
function goalTaskCatalog() {
  const list = [];
  const add = (group, id, label, done) => list.push({ group, id, label, done });
  for (const g of BASIC_GRADES) {
    const topics = BASIC_TOPICS.filter((t) => t.grade === g.id);
    add("📘 단계별 문법", `basics|${g.id}`, `${g.label} 주제 모두 끝내기 (${topics.length}개)`, (p) => topics.every((t) => getSectionBest(p, "basics", t.id)));
  }
  for (const s of IRREGULAR_SETS) add("🔁 불규칙 동사", `irregular|${s.id}`, `${s.title} 테스트 80점 이상`, (p) => passed(getSectionBest(p, "irregular", s.id)));
  for (const g of VERB_PATTERN_GROUPS) add("🔀 to부정사 · 동명사", `verbPattern|${g.id}`, `${g.title} 테스트 80점 이상`, (p) => passed(getSectionBest(p, "verbPattern", g.id)));
  add("🔀 to부정사 · 동명사", "verbPattern|all", "종합 테스트 80점 이상", (p) => passed(getSectionBest(p, "verbPattern", "all")));
  for (const s of IDIOM_SETS) add("🧩 숙어 · 구동사", `idiom|${s.id}`, `${s.title} 테스트 80점 이상`, (p) => passed(getSectionBest(p, "idiom", s.id)));
  for (const s of AFFIX_SETS) add("🔠 접두사 · 접미사", `affix|${s.id}`, `${s.title.split(":")[0]} 테스트 80점 이상`, (p) => passed(getSectionBest(p, "affix", s.id)));
  for (const s of LISTENING_SETS) add("🎧 듣기 평가", `listening|${s.levelId}`, `${levelById(s.levelId).label} 80점 이상`, (p) => passed(getSectionBest(p, "listening", s.levelId)));
  for (const g of TALK_GROUPS) add("🎙️ 따라 말하기", `speaking|${g.id}`, `${g.label} 8문장 중 6개 통과`, (p) => passed(getSectionBest(p, "speaking", g.id), 0.75));
  for (const g of BASIC_GRADES) add("✍️ 영작 연습", `writing|${g.id}`, `${g.label} 단어 배열 80점 이상`, (p) => passed(getSectionBest(p, "writing", `order:${g.id}`)));
  for (const g of BASIC_GRADES) add("📝 단원 모의고사", `exam|${g.id}`, `${g.label} 모의고사 80점 이상`, (p) => passed(getSectionBest(p, "exam", g.id)));
  return list;
}

function goalSummary(profileName) {
  const goals = getGoals(profileName);
  const week = getWeekProgress(profileName);
  const catalog = goalTaskCatalog();
  const counts = GOAL_COUNTS.filter((c) => goals.counts[c.key] > 0).map((c) => ({ ...c, target: goals.counts[c.key], value: week[c.key] }));
  const tasks = goals.tasks.map((id) => catalog.find((t) => t.id === id)).filter(Boolean).map((t) => ({ ...t, isDone: t.done(profileName) }));
  const total = counts.length + tasks.length;
  const done = counts.filter((c) => c.value >= c.target).length + tasks.filter((t) => t.isDone).length;
  return { goals, counts, tasks, total, done, catalog };
}

function renderGoalsScreen(root, { profileName, back }) {
  const s = goalSummary(profileName);
  const groups = [...new Set(s.catalog.map((t) => t.group))];

  root.innerHTML = `
    <div class="screen screen-goals">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎯 이번 주 목표</h1>
      <p class="subtitle">${profileName}님 · 월요일부터 일요일까지</p>

      <section class="settings-card">
        <h2 class="section-title">진행 상황 ${s.total ? `${s.done} / ${s.total}` : ""}</h2>
        ${
          s.total === 0
            ? `<p class="settings-help">아직 목표가 없어요. 아래에서 이번 주 목표를 정해 보세요. 아이 목표는 부모님이 함께 정해 주면 좋아요.</p>`
            : `<ul class="bar-list">
            ${s.counts
              .map((c) => {
                const pct = Math.min(100, Math.round((c.value / c.target) * 100));
                return `<li><span class="bar-name">${c.emoji} ${c.label}</span>${barHtml(pct, c.value >= c.target ? "var(--correct)" : "var(--primary)")}<span class="bar-value">${c.value}/${c.target}${c.unit}</span></li>`;
              })
              .join("")}
          </ul>
          <ul class="goal-tasks">
            ${s.tasks.map((t) => `<li class="${t.isDone ? "done" : ""}"><span>${t.isDone ? "✅" : "⬜"}</span><span>${t.group.split(" ")[0]} ${t.label}</span><button class="wrong-remove" data-remove="${t.id}" aria-label="과제 빼기">빼기</button></li>`).join("")}
          </ul>
          ${s.total > 0 && s.done === s.total ? `<p class="goal-cheer">🎉 이번 주 목표를 모두 이뤘어요!</p>` : ""}`
        }
      </section>

      <section class="settings-card">
        <h2 class="section-title">목표 정하기</h2>
        ${GOAL_COUNTS.map(
          (c) => `
          <label class="goal-row">
            <span>${c.emoji} 이번 주 ${c.label}</span>
            <select class="text-input goal-select" data-count="${c.key}">
              ${c.options.map((o) => `<option value="${o}" ${s.goals.counts[c.key] === o ? "selected" : ""}>${o === 0 ? "목표 없음" : `${o}${c.unit}`}</option>`).join("")}
            </select>
          </label>`
        ).join("")}
        <label class="goal-row goal-row--col">
          <span>📌 과제 추가</span>
          <select class="text-input" id="taskSelect">
            <option value="">과제를 골라요</option>
            ${groups
              .map(
                (g) => `<optgroup label="${g}">${s.catalog
                  .filter((t) => t.group === g && !s.goals.tasks.includes(t.id))
                  .map((t) => `<option value="${t.id}">${t.label}</option>`)
                  .join("")}</optgroup>`
              )
              .join("")}
          </select>
        </label>
        <button class="primary-btn" id="addTaskBtn">＋ 과제 추가</button>
        <p class="settings-help">과제는 해당 테스트에서 80점 이상(따라 말하기는 6문장 통과)을 받으면 저절로 ✅가 돼요. 숫자 목표는 매주 월요일에 새로 셉니다.</p>
      </section>
    </div>
  `;

  const save = (goals) => {
    setGoals(profileName, goals);
    renderGoalsScreen(root, { profileName, back });
  };
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-count]").forEach((sel) =>
    sel.addEventListener("change", () => save({ ...s.goals, counts: { ...s.goals.counts, [sel.dataset.count]: Number(sel.value) } }))
  );
  root.querySelector("#addTaskBtn").addEventListener("click", () => {
    const id = root.querySelector("#taskSelect").value;
    if (id) save({ ...s.goals, tasks: [...s.goals.tasks, id] });
  });
  root.querySelectorAll("[data-remove]").forEach((btn) => btn.addEventListener("click", () => save({ ...s.goals, tasks: s.goals.tasks.filter((t) => t !== btn.dataset.remove) })));
}
