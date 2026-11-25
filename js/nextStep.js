// "이어서 하기": 내 단계에서 아직 안 끝낸 다음 공부를 하나 골라 홈 맨 위에 보여 준다.
// 목록 화면에서는 내 단계를 먼저 펼치고, 다른 단계는 접어 둔다.
const TALK_GROUP_LEVELS = {
  hello: ["elementary-low", "elementary-mid"],
  daily: ["elementary-mid", "elementary-high"],
  out: ["elementary-mid", "elementary-high"],
  middle: ["middle"],
  high: ["high"],
  adult: ["adult"],
};

function myLevelOf(profileName) {
  return getPreferredLevel(profileName) || getLastWordLevel(profileName) || null;
}

function nextStep(profileName) {
  const level = getPreferredLevel(profileName);
  if (!level) return { emoji: "🧭", title: "내 단계 정하기", desc: "설정에서 단계를 고르면 맞춤 공부를 이어서 추천해요", type: "settings" };
  const done = (section, id) => !!getSectionBest(profileName, section, id);
  const passedBest = (section, id) => {
    const b = getSectionBest(profileName, section, id);
    return b && b.correct / b.total >= 0.8;
  };

  for (const g of BASIC_GRADES.filter((x) => x.levelId === level)) {
    const t = BASIC_TOPICS.find((x) => x.grade === g.id && !done("basics", x.id));
    if (t) return { emoji: t.emoji, title: `${g.label.replace(/^\S+\s/, "")} · ${t.title}`, desc: t.subtitle, type: "lesson", id: t.id };
  }
  const talk = TALK_TOPICS.find((t) => TALK_GROUP_LEVELS[t.group]?.includes(level) && !done("basics", t.id));
  if (talk) return { emoji: talk.emoji, title: `대화 표현 · ${talk.title}`, desc: talk.subtitle, type: "lesson", id: talk.id };
  const irr = IRREGULAR_SETS.find((s) => s.levelId === level && !passedBest("irregular", s.id));
  if (irr) return { emoji: "🔁", title: `불규칙 동사 · ${irr.title}`, desc: "변화표를 보고 테스트 80점 넘기기", type: "screen", screen: "irregular" };
  if (!passedBest("listening", level) && LISTENING_SETS.some((s) => s.levelId === level)) {
    return { emoji: "🎧", title: "듣기 평가", desc: `${levelById(level).label} 대화 5개`, type: "listening", id: level };
  }
  const exam = BASIC_GRADES.find((g) => g.levelId === level && !passedBest("exam", g.id));
  if (exam) return { emoji: "📝", title: `단원 모의고사 · ${exam.label.replace(/^\S+\s/, "")}`, desc: "20문제 · 80점 넘기기", type: "exam", id: exam.id };
  return { emoji: "🧩", title: "가로세로 낱말", desc: "내 단계를 다 끝냈어요! 퍼즐로 단어를 다져요", type: "crossword", id: level };
}

// 내 단계 진행률: 문법 · 대화 · 읽기 · 듣기 · 단어 각각의 진행 비율을 평균 낸다.
function levelProgress(profileName) {
  const levelId = getPreferredLevel(profileName);
  if (!levelId) return null;
  const level = levelById(levelId);
  const best = (section, id) => getSectionBest(profileName, section, id);
  const grades = BASIC_GRADES.filter((g) => g.levelId === levelId).map((g) => g.id);
  const basics = BASIC_TOPICS.filter((t) => grades.includes(t.grade));
  const talks = TALK_TOPICS.filter((t) => TALK_GROUP_LEVELS[t.group]?.includes(levelId));
  const passages = READING_PASSAGES.filter((p) => p.levelId === levelId);
  const listening = LISTENING_SETS.find((s) => s.levelId === levelId);
  const words = WORD_BANK[levelId] || [];
  const vocab = getVocabEntries(profileName);
  const listenBest = best("listening", levelId);
  const parts = [
    basics.length && { label: "문법", done: basics.filter((t) => best("basics", t.id)).length, total: basics.length },
    talks.length && { label: "대화", done: talks.filter((t) => best("basics", t.id)).length, total: talks.length },
    passages.length && { label: "읽기", done: passages.filter((p) => best("reading", p.id) || isPassageRead(profileName, p.id)).length, total: passages.length },
    listening && { label: "듣기", done: listenBest ? Math.round((listenBest.correct / listenBest.total) * 5) : 0, total: 5 },
    words.length && { label: "단어", done: words.filter((w) => vocab[w.id]).length, total: words.length },
  ].filter(Boolean);
  const percent = parts.length ? Math.round((parts.reduce((sum, p) => sum + p.done / p.total, 0) / parts.length) * 100) : 0;
  return { level, percent, parts };
}

// 목록을 내 단계 / 다른 단계로 나눈다. levelsOf(item) → 그 항목이 속한 단계 id 배열
function splitByMyLevel(items, levelsOf, myLevel) {
  if (!myLevel) return { mine: items, others: [] };
  const mine = items.filter((it) => levelsOf(it).includes(myLevel));
  return mine.length ? { mine, others: items.filter((it) => !mine.includes(it)) } : { mine: items, others: [] };
}

// 내 단계 카드는 그대로, 다른 단계는 접어서 보여 준다
function levelSplitHtml(mineHtml, othersHtml, othersCount) {
  return `
    <div class="level-grid">${mineHtml}</div>
    ${
      othersCount
        ? `<details class="other-levels">
        <summary class="basic-grade-title">다른 단계 보기 <span class="basic-grade-count">${othersCount}</span></summary>
        <div class="level-grid">${othersHtml}</div>
      </details>`
        : ""
    }`;
}
