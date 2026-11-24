// 배지는 저장된 기록에서 계산한다. 처음 달성한 날짜만 profile.badges에 남긴다.
const BADGES = [
  { id: "first", emoji: "🌱", title: "첫걸음", desc: "첫 문제 풀기", test: (p) => p.totalAnswered >= 1 },
  { id: "answered100", emoji: "💯", title: "백 문제", desc: "문제 100개 풀기", test: (p) => p.totalAnswered >= 100 },
  { id: "answered500", emoji: "🏔️", title: "오백 문제", desc: "문제 500개 풀기", test: (p) => p.totalAnswered >= 500 },
  { id: "day50", emoji: "⚡", title: "열공의 날", desc: "하루에 50문제 풀기", test: (p) => p.bestDay >= 50 },
  { id: "streak3", emoji: "🔥", title: "3일 연속", desc: "3일 연속 공부하기", test: (p) => p.bestStreak >= 3 },
  { id: "streak7", emoji: "🔥", title: "일주일 연속", desc: "7일 연속 공부하기", test: (p) => p.bestStreak >= 7 },
  { id: "streak30", emoji: "👑", title: "한 달 연속", desc: "30일 연속 공부하기", test: (p) => p.bestStreak >= 30 },
  { id: "word100", emoji: "🎯", title: "단어 만점", desc: "단어 퀴즈 100점", test: (p) => wordBests(p, "choice").some((v) => v >= 100) },
  { id: "spelling80", emoji: "⌨️", title: "철자 박사", desc: "철자 쓰기 80점 이상", test: (p) => wordBests(p, "spelling").some((v) => v >= 80) },
  { id: "dictation80", emoji: "🎧", title: "귀가 트였어요", desc: "받아쓰기 80점 이상", test: (p) => wordBests(p, "dictation").some((v) => v >= 80) },
  { id: "grammarAll", emoji: "✏️", title: "문법 정복", desc: `문법 ${GRAMMAR_TOPICS.length}주제 모두 풀기`, test: (p) => GRAMMAR_TOPICS.every((t) => p.grammar.best[t.id]) },
  { id: "grammarPerfect3", emoji: "⭐", title: "문법 만점 3개", desc: "문법 주제 3개 만점", test: (p) => perfectCount(p.grammar.best) >= 3 },
  { id: "readingAll", emoji: "📖", title: "독서왕", desc: "독해 지문 모두 풀기", test: (p) => READING_PASSAGES.every((r) => p.reading.best[r.id]) },
  { id: "chunksAll", emoji: "✂️", title: "끊어 읽기 달인", desc: "끊어 읽기 모든 단계 풀기", test: (p) => CHUNK_SETS.every((s) => p.chunks.best[s.id]) },
  { id: "daily7", emoji: "☀️", title: "꾸준한 하루", desc: "오늘의 학습 7번 완료", test: (p) => Object.keys(p.daily).length >= 7 },
  { id: "cards30", emoji: "📇", title: "카드 30장", desc: "단어 카드 30장 공부하기", test: (p) => Object.keys(p.vocab).length >= 30 },
  { id: "mastered50", emoji: "🧠", title: "단어 50개 외우기", desc: "단어장에서 50개 외우기", test: (p) => Object.values(p.vocab).filter((v) => v.box >= VOCAB_MASTERED_BOX).length >= 50 },
  { id: "reader10", emoji: "🗣️", title: "소리 내어 읽기", desc: "읽기 연습 지문 10개 읽기", test: (p) => Object.keys(p.readingRead).length >= 10 },
  { id: "notesAll", emoji: "📘", title: "문법 노트 완독", desc: `문법 노트 ${GRAMMAR_TOPICS.length}주제 모두 이해하기`, test: (p) => GRAMMAR_TOPICS.every((t) => p.notesRead[t.id]) },
  {
    id: "allModes", emoji: "🌈", title: "골고루 학습", desc: "6가지 학습 모두 해보기",
    test: (p) =>
      ["choice", "spelling", "dictation"].every((m) => wordBests(p, m).length > 0) &&
      ["grammar", "reading", "chunks"].every((s) => Object.keys(p[s].best).length > 0),
  },
];

function wordBests(profile, mode) {
  return Object.entries(profile.bestByLevel)
    .filter(([key]) => (mode === "choice" ? !key.includes(":") : key.startsWith(`${mode}:`)))
    .map(([, v]) => v);
}

function perfectCount(bests) {
  return Object.values(bests).filter((b) => b.correct === b.total).length;
}

function evaluateBadges(profileName) {
  const profile = getProfileData(profileName);
  return BADGES.map((b) => ({ ...b, earned: !!profile.badges[b.id] || b.test(profile), date: profile.badges[b.id] || null }));
}

function checkNewBadges(profileName) {
  const profile = getProfileData(profileName);
  const fresh = BADGES.filter((b) => !profile.badges[b.id] && b.test(profile));
  if (fresh.length > 0) saveBadges(profileName, fresh.map((b) => b.id));
  return fresh;
}
