// 단원 모의고사: 학년(BASIC_GRADES)마다 20문제, 듣기 · 문법 · 어휘 · 동사 · 숙어를 섞어 100점 만점으로 채점한다.
const EXAM_SIZE = 20;

function examPlan(levelId) {
  const rank = levelRank(levelId);
  if (rank <= levelRank("elementary-low")) return { listening: 2, grammar: 10, word: 8 };
  if (rank < levelRank("middle")) return { listening: 2, grammar: 9, word: 6, irregular: 3 };
  return { listening: 2, grammar: 8, word: 5, irregular: 2, verb: 3 };
}

const EXAM_AREAS = { listening: "듣기", grammar: "문법", word: "어휘", irregular: "불규칙 동사", verb: "동사 · 숙어" };

function tagExam(q, area) {
  return { ...q, examArea: area, summary: `<small>[${EXAM_AREAS[area]}]</small> ${q.summary}` };
}

function buildExamQuestions(gradeId) {
  const grade = BASIC_GRADES.find((g) => g.id === gradeId);
  const levelId = grade.levelId;
  const plan = examPlan(levelId);
  const parts = [];

  parts.push(...shuffle(buildListeningQuestions(levelId)).slice(0, plan.listening).map((q) => tagExam(q, "listening")));

  const grammarPool = BASIC_TOPICS.filter((t) => t.grade === gradeId).flatMap((t) => t.practice.map((p, i) => (p.type === "choose" ? [t, i] : null)).filter(Boolean));
  parts.push(...shuffle(grammarPool).slice(0, plan.grammar).map(([t, i]) => tagExam(basicChooseQuestion(t, i), "grammar")));

  parts.push(...shuffle(WORD_BANK[levelId]).slice(0, plan.word).map((w) => tagExam(wordToMcQuestion(w, levelId), "word")));

  if (plan.irregular) {
    const sets = IRREGULAR_SETS.filter((s) => levelRank(s.levelId) <= levelRank(levelId));
    const verbs = shuffle(sets.flatMap((s) => s.verbs.map((v) => [v, s])));
    parts.push(...verbs.slice(0, plan.irregular).map(([v, s], i) => tagExam(irregularQuestion(v, s, i % 2 ? "pp" : "past"), "irregular")));
  }
  if (plan.verb) {
    const idiomSet = IDIOM_SETS.find((s) => s.levelId === levelId) || IDIOM_SETS[0];
    const vp = shuffle(vpEntries(["to-only", "ing-only", "both-diff"])).slice(0, 2).map(vpBlankQuestion);
    const idiom = shuffle(idiomSet.items).slice(0, plan.verb - vp.length).map((item) => idiomQuestion(idiomSet, item, "meaning"));
    parts.push(...[...vp, ...idiom].map((q) => tagExam(q, "verb")));
  }

  // 시험지처럼 듣기를 먼저, 나머지는 섞는다. 모자라면 문법 문제로 채운다.
  const listening = parts.filter((q) => q.examArea === "listening");
  let rest = shuffle(parts.filter((q) => q.examArea !== "listening"));
  const extra = shuffle(grammarPool).filter(([t, i]) => !rest.some((q) => q.id === `basic|${t.id}|${i}`));
  while (listening.length + rest.length < EXAM_SIZE && extra.length) {
    const [t, i] = extra.shift();
    rest.push(tagExam(basicChooseQuestion(t, i), "grammar"));
  }
  return [...listening, ...rest].slice(0, EXAM_SIZE);
}

function examAreaReport(questions) {
  const areas = {};
  for (const q of questions) {
    const a = (areas[q.examArea] ||= { ok: 0, total: 0 });
    a.total += 1;
    if (q.selectedAnswer === q.correctAnswer) a.ok += 1;
  }
  return Object.keys(EXAM_AREAS)
    .filter((k) => areas[k])
    .map((k) => `${EXAM_AREAS[k]} ${areas[k].ok}/${areas[k].total}`)
    .join(" · ");
}

function renderExamListScreen(root, { profileName, start, back }) {
  const myLevel = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  root.innerHTML = `
    <div class="screen screen-exam">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📝 단원 모의고사</h1>
      <p class="subtitle">학년별 20문제 · 100점 만점</p>
      <section class="lesson-section">
        <p class="lesson-point-text">중간 · 기말고사처럼 <b>듣기 → 문법 · 어휘 · 동사 · 숙어</b>를 섞어 20문제를 풀어요. 한 문제에 5점이에요. 끝나면 영역별 점수를 보여 주고, 틀린 문제는 오답노트에 모여요.</p>
      </section>
      ${(() => {
        const card = (g) => {
          const best = getSectionBest(profileName, "exam", g.id);
          return `
          <button class="level-card" data-grade="${g.id}" style="--accent:${g.color}">
            <span class="level-icon">📝</span>
            <span class="topic-text">
              <span class="level-label">${g.label}${g.levelId === myLevel ? " · 내 단계" : ""}</span>
              <span class="topic-summary">${Object.entries(examPlan(g.levelId)).map(([k, n]) => `${EXAM_AREAS[k]} ${n}`).join(" · ")}</span>
            </span>
            <span class="level-best${best ? "" : " level-best-empty"}">${best ? `${Math.round((best.correct / best.total) * 100)}점` : "시작"}</span>
          </button>`;
        };
        const { mine, others } = splitByMyLevel(BASIC_GRADES, (g) => [g.levelId], myLevel);
        return levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length);
      })()}
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-grade]").forEach((btn) => btn.addEventListener("click", () => start(btn.dataset.grade)));
}
