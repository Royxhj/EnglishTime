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
  { id: "basics10", emoji: "🧸", title: "차근차근", desc: "단계별 문법 · 파닉스 · 대화 10주제 끝내기", test: (p) => Object.keys(p.basics.best).length >= 10 },
  { id: "basics50", emoji: "🏫", title: "꾸준한 학생", desc: "단계별 문법 · 파닉스 · 대화 50주제 끝내기", test: (p) => Object.keys(p.basics.best).length >= 50 },
  { id: "irregularAll", emoji: "🔁", title: "불규칙 동사 정복", desc: "불규칙 동사 3단계 모두 80점 이상", test: (p) => IRREGULAR_SETS.every((s) => ratioAtLeast(p.irregular.best[s.id], 0.8)) },
  { id: "verbPatternAll", emoji: "🔀", title: "to · ing 달인", desc: "to부정사 · 동명사 종합 테스트 80점 이상", test: (p) => ratioAtLeast(p.verbPattern.best.all, 0.8) },
  { id: "idiomFirst", emoji: "🧩", title: "숙어 첫걸음", desc: "숙어 · 접사 테스트 하나 80점 이상", test: (p) => [...Object.values(p.idiom.best), ...Object.values(p.affix.best)].some((b) => ratioAtLeast(b, 0.8)) },
  { id: "speaker", emoji: "🎙️", title: "또박또박", desc: "따라 말하기 한 묶음에서 6문장 통과", test: (p) => Object.values(p.speaking.best).some((b) => ratioAtLeast(b, 0.75)) },
  { id: "listener", emoji: "🎧", title: "귀 쫑긋", desc: "듣기 평가 한 단계 만점", test: (p) => perfectCount(p.listening.best) >= 1 },
  { id: "writer", emoji: "✍️", title: "문장 장인", desc: "영작 연습 직접 쓰기 80점 이상", test: (p) => Object.entries(p.writing.best).some(([k, b]) => k.startsWith("type:") && ratioAtLeast(b, 0.8)) },
  { id: "crossword", emoji: "🧩", title: "퍼즐 해결사", desc: "가로세로 낱말 힌트 없이 완성", test: (p) => perfectCount(p.crossword.best) >= 1 },
  { id: "exam100", emoji: "🏆", title: "모의고사 만점", desc: "단원 모의고사 100점", test: (p) => perfectCount(p.exam.best) >= 1 },
  { id: "speed20", emoji: "⚡", title: "번개 손", desc: "60초 퀴즈에서 20개 맞히기", test: (p) => Object.values(p.speed.best).some((b) => b.correct >= 20) },
  { id: "battleWin", emoji: "⚔️", title: "첫 승리", desc: "가족 대결에서 이기기", test: (p) => p.battleWins >= 1 },
  { id: "diary5", emoji: "📓", title: "일기 작가", desc: "영어 일기 5편 쓰기", test: (p) => p.diary.length >= 5 },
  { id: "storyDone", emoji: "📚", title: "책벌레", desc: "이야기책 한 편 끝까지 읽기", test: (p) => STORY_SERIES.some((s) => s.chapters.every((c) => (p.story.best[c.id]?.correct || 0) >= STORY_PASS)) },
  { id: "shopFirst", emoji: "🛍️", title: "첫 쇼핑", desc: "별 상점에서 처음 꾸미기", test: (p) => p.shop.owned.length >= 1 },
  { id: "soundsPerfect", emoji: "👂", title: "소리 탐정", desc: "소리 구별 10문제 만점", test: (p) => perfectCount(p.sounds.best) >= 1 },
  { id: "numbersAll", emoji: "🔢", title: "숫자 박사", desc: "숫자 · 시간 6묶음 모두 80% 이상", test: (p) => NUMBER_SETS.every((s) => ratioAtLeast(p.numbers.best[s.id], 0.8)) },
  { id: "chain10", emoji: "🐍", title: "끝말잇기 왕", desc: "끝말잇기에서 10개 이어 가기", test: (p) => Object.values(p.wordchain.best).some((b) => b.correct >= 10) },
  { id: "bingo", emoji: "🎱", title: "빙고!", desc: "단어 빙고 완성하기", test: (p) => Object.keys(p.bingo.best).length >= 1 },
  { id: "aloudAll", emoji: "🗣️", title: "낭독왕", desc: "지문 · 이야기 한 장을 모두 소리 내어 읽기", test: (p) => Object.values(p.aloud.best).some((b) => b.correct === b.total) },
  { id: "wordSearch", emoji: "🔍", title: "숨은 단어 탐험가", desc: "단어 찾기 퍼즐 완성하기", test: (p) => Object.keys(p.wordsearch.best).length >= 1 },
  { id: "wordGuess", emoji: "🕵️", title: "명탐정", desc: "단어 추리 5개 모두 맞히기", test: (p) => perfectCount(p.wordguess.best) >= 1 },
  { id: "riddle", emoji: "❓", title: "수수께끼 박사", desc: "영어 수수께끼 만점", test: (p) => perfectCount(p.riddle.best) >= 1 },
  { id: "wordList", emoji: "🏠", title: "우리 집 단어 박사", desc: "우리 집 단어장 시험 90점 이상", test: (p) => Object.values(p.wordlist.best).some((b) => b.correct / b.total >= 0.9) },
  { id: "typing100", emoji: "⌨️", title: "타자왕", desc: "타자 연습 1분에 100타 넘기", test: (p) => Object.values(p.typing.best).some((b) => b.correct >= 100) },
  { id: "monster", emoji: "👾", title: "몬스터 사냥꾼", desc: "오답 몬스터 무찌르기", test: (p) => Object.keys(p.monster.best).length >= 1 },
  { id: "familyMission", emoji: "🎯", title: "함께 해냈어요", desc: "가족 미션 성공", test: (p) => p.missionWeeks.length >= 1 },
  { id: "dictation", emoji: "📝", title: "받아쓰기 달인", desc: "문장 받아쓰기 90점 이상", test: (p) => Object.values(p.sentdict.best).some((b) => b.correct / b.total >= 0.9) },
  { id: "perfectMonth", emoji: "📆", title: "개근상", desc: "한 달 동안 하루도 빠짐없이 공부하기", test: (p) => p.perfectMonths.length >= 1 },
  { id: "goalWeek", emoji: "🎯", title: "목표 달성", desc: "이번 주 목표 모두 이루기", test: (p, name) => {
      const s = goalSummary(name);
      return s.total > 0 && s.done === s.total;
    } },
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

function ratioAtLeast(best, ratio) {
  return !!best && best.correct / best.total >= ratio;
}

function perfectCount(bests) {
  return Object.values(bests).filter((b) => b.correct === b.total).length;
}

function evaluateBadges(profileName) {
  const profile = getProfileData(profileName);
  return BADGES.map((b) => ({ ...b, earned: !!profile.badges[b.id] || b.test(profile, profileName), date: profile.badges[b.id] || null }));
}

function checkNewBadges(profileName) {
  const profile = getProfileData(profileName);
  const fresh = BADGES.filter((b) => !profile.badges[b.id] && b.test(profile, profileName));
  if (fresh.length > 0) saveBadges(profileName, fresh.map((b) => b.id));
  return fresh;
}
