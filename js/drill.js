// 연습 문제(기초 문법 · 불규칙 동사 · to/-ing)를 id로 다시 만들기, 오답 복습, 오늘의 학습용 단계 맞춤 문제.
// id 형식: "basic|주제id|문제번호" · "irr|세트id|원형|past|pp|base" · "vp|b|동사|정답" · "vp|k|동사"
const DRILL_REVIEW_LIMIT = 10;

function basicChooseQuestion(topic, index) {
  const raw = topic.practice[index];
  if (!raw || raw.type !== "choose") return null;
  const correctAnswer = raw.choices[raw.answer];
  return {
    id: `basic|${topic.id}|${index}`,
    drill: true,
    kind: "basic",
    label: "빈칸에 알맞은 답을 고르세요",
    q: raw.q,
    ko: raw.ko || null,
    choices: shuffle(raw.choices),
    correctAnswer,
    explain: `${topic.emoji} ${topic.title}: ${raw.hint}`,
    summary: withBlank(raw.q, correctAnswer),
    listenText: raw.q.includes("___") ? raw.q.replace("___", correctAnswer) : null,
    selectedAnswer: null,
  };
}

function drillQuestionById(id) {
  const [type, a, b, c] = id.split("|");
  if (type === "basic") {
    const topic = findBasicTopic(a);
    return topic ? basicChooseQuestion(topic, Number(b)) : null;
  }
  if (type === "irr") {
    const set = findIrregularSet(a);
    const v = set?.verbs.find((x) => x.base === b);
    return v ? irregularQuestion(v, set, c) : null;
  }
  if (type === "vp") {
    for (const g of VERB_PATTERN_GROUPS) {
      const v = g.verbs.find((x) => x.v === b);
      if (!v) continue;
      if (a === "k") return vpKindQuestion({ g, v, item: v.items[0] });
      const item = v.items.find((it) => it.form === c);
      return item ? vpBlankQuestion({ g, v, item }) : null;
    }
  }
  return null;
}

// 오답노트에 보여 줄 출처
function drillSourceLabel(id) {
  const [type, a] = id.split("|");
  if (type === "basic") {
    const topic = findBasicTopic(a);
    return topic ? `${topic.emoji} ${topic.title}` : "";
  }
  if (type === "irr") return "🔁 불규칙 동사";
  return "🔀 to부정사 · 동명사";
}

function buildDrillReviewQuestions(profileName) {
  return shuffle(getDrillWrongEntries(profileName).map((e) => e.id))
    .slice(0, DRILL_REVIEW_LIMIT)
    .map(drillQuestionById)
    .filter(Boolean);
}

function levelRank(levelId) {
  return LEVELS.findIndex((lv) => lv.id === levelId);
}

// 내 단계의 기초 문법 주제 중 끝낸 것 + 학년마다 다음 한 주제
function openBasicTopicsFor(profileName, levelId) {
  const grades = BASIC_GRADES.filter((g) => g.levelId === levelId).map((g) => g.id);
  const open = [];
  for (const grade of grades) {
    const topics = BASIC_TOPICS.filter((t) => t.grade === grade);
    const firstTodo = topics.findIndex((t) => !getSectionBest(profileName, "basics", t.id));
    open.push(...topics.slice(0, firstTodo === -1 ? topics.length : firstTodo + 1));
  }
  return open;
}

// 오늘의 학습 문법 문제: 연습 오답 → 문법 오답 → 내 단계에 맞는 새 문제(여러 종류를 돌아가며)
function buildDailyGrammarQuestions(profileName, levelId, count) {
  const rank = Math.max(0, levelRank(levelId));
  const picked = [];
  const used = new Set();
  const add = (q) => {
    if (!q || picked.length >= count || used.has(q.id)) return;
    used.add(q.id);
    picked.push(q);
  };

  shuffle(getDrillWrongEntries(profileName)).slice(0, 1).forEach((e) => add(drillQuestionById(e.id)));
  if (rank >= levelRank("middle")) shuffle(getGrammarWrongIds(profileName)).slice(0, 1).forEach((id) => add(grammarQuestionById(id)));

  const pools = [];
  const basicPool = openBasicTopicsFor(profileName, levelId).flatMap((t) => t.practice.map((_, i) => () => basicChooseQuestion(t, i)));
  if (basicPool.length) pools.push(shuffle(basicPool));
  if (rank >= levelRank("elementary-mid")) {
    const sets = IRREGULAR_SETS.filter((s) => levelRank(s.levelId) <= rank);
    pools.push(shuffle(sets.flatMap((s) => s.verbs.map((v) => () => irregularQuestion(v, s, ["past", "pp"][Math.floor(Math.random() * 2)])))));
  }
  if (rank >= levelRank("middle")) {
    pools.push(shuffle(vpEntries(["to-only", "ing-only", "both-diff"]).map((e) => () => vpBlankQuestion(e))));
    const doneUntil = GRAMMAR_TOPICS.findIndex((t) => !getSectionBest(profileName, "grammar", t.id));
    const openTopics = GRAMMAR_TOPICS.slice(0, doneUntil === -1 ? GRAMMAR_TOPICS.length : doneUntil + 1);
    pools.push(shuffle(openTopics.flatMap((t) => t.questions.map((_, i) => () => grammarQuestionById(`${t.id}-${i}`)))));
  }
  const order = shuffle(pools.filter((p) => p.length));
  for (let round = 0; picked.length < count && order.some((p) => p.length); round++) {
    for (const pool of order) {
      // choose가 아닌 문제(순서 맞추기)는 건너뛴다
      while (pool.length && picked.length < count) {
        const q = pool.shift()();
        if (q && !used.has(q.id)) {
          add(q);
          break;
        }
      }
    }
  }
  return picked;
}
