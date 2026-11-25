const root = document.getElementById("app");

const store = createStore({
  screen: "profile",
  profileName: null,

  // 단어 (choice | spelling | dictation)
  wordMode: "choice",
  levelId: null,
  mode: "normal", // normal | review
  questions: [],
  currentIndex: 0,
  isNewBest: false,

  // 문법 · 독해 · 오늘의 학습이 함께 쓰는 4지선다 세션. source.type: grammar | grammarReview | reading | daily
  mc: null,
  grammarTopicId: null,
  passageId: null,
  readingMode: "read", // read(읽기 연습) | quiz(독해 문제)

  // 끊어 읽기
  chunk: null,

  // 프로필 편집 (editMember가 null이면 새 가족 추가), 오답노트 탭
  editMember: null,
  memberReturn: "profile",
  wrongTab: "words",

  // 단어장: 보고 있는 탭(단계 id | starred | custom)과 카드 공부 세션
  vocabTab: null,
  vocabSession: null,

  // 기초 문법 (배우기 → 해 보기 → 결과)
  basic: null,
});

const set = (patch) => store.setState(patch);
const currentProfile = () => store.getState().profileName;
const goHome = () => set({ screen: "home" });

// ── 단어 ──
function currentScore() {
  const correct = store.getState().questions.filter((q) => q.selectedAnswer === q.correctAnswer).length;
  return scoreFromCorrectCount(correct);
}

function startWordQuiz(levelId) {
  set({ levelId, mode: "normal", questions: buildQuestions(levelId), currentIndex: 0, screen: "quiz" });
}

function startWordReview() {
  const refs = getWrongWords(currentProfile());
  if (refs.length === 0) return;
  set({ mode: "review", levelId: null, questions: buildReviewQuestions(refs), currentIndex: 0, screen: "quiz" });
}

function recordWordAnswer(question, isCorrect) {
  if (isCorrect && getVocabEntries(currentProfile())[question.data.id]) recordVocabReview(currentProfile(), question.data.id, question.levelId, true);
  recordAnswerOutcome(currentProfile(), question.data.id, question.levelId, isCorrect);
  recordActivity(currentProfile());
}

function nextWordQuestion() {
  const state = store.getState();
  if (state.currentIndex + 1 < state.questions.length) {
    set({ currentIndex: state.currentIndex + 1 });
    return;
  }
  const finalScore = currentScore();
  const { isNewBest, hadPriorAttempt } =
    state.mode === "normal"
      ? recordResult(state.profileName, state.levelId, finalScore, state.wordMode)
      : { isNewBest: false, hadPriorAttempt: false };
  // 첫 도전은 이전 기록이 없어 무조건 "신기록"이 되므로, 점수가 낮으면 축하 뱃지를 띄우지 않는다.
  set({ isNewBest: isNewBest && (hadPriorAttempt || finalScore >= 60), screen: "result" });
  announceBadges(checkNewBadges(currentProfile()));
}

// ── 4지선다 세션 (문법 · 독해 · 오늘의 학습) ──
function startMc(source, questions) {
  if (questions.length === 0) return;
  set({ mc: { source, questions, index: 0, isNewBest: false }, screen: "mcQuiz" });
}

function startGrammarQuiz(topicId) {
  set({ grammarTopicId: topicId });
  startMc({ type: "grammar", id: topicId }, buildGrammarQuestions(topicId));
}
const startGrammarReview = () => startMc({ type: "grammarReview" }, buildGrammarReviewQuestions(getGrammarWrongIds(currentProfile())));
function startReadingQuiz(passageId) {
  set({ passageId });
  startMc({ type: "reading", id: passageId }, buildReadingQuestions(findPassage(passageId)));
}
const startDaily = () => startMc({ type: "daily" }, buildDailyQuestions(currentProfile()));
const startExam = (gradeId) => startMc({ type: "exam", id: gradeId }, buildExamQuestions(gradeId));
const startIdiomTest = (setId) => startMc({ type: "idiom", id: setId }, buildIdiomQuestions(setId));
const startAffixTest = (setId) => startMc({ type: "affix", id: setId }, buildAffixQuestions(setId));
const startListening = (levelId) => startMc({ type: "listening", id: levelId }, buildListeningQuestions(levelId));
const startDrillReview = () => startMc({ type: "drillReview" }, buildDrillReviewQuestions(currentProfile()));
const startVerbPatternTest = (id) => startMc({ type: "verbPattern", id }, buildVerbPatternQuestions(id));
const startIrregularTest = (setId) => startMc({ type: "irregular", id: setId }, buildIrregularQuestions(setId));
const startTopicQuiz = (topicId) => startMc({ type: "topic", id: topicId }, buildTopicQuestions(topicId));
const startNumbers = (setId) => startMc({ type: "numbers", id: setId }, buildNumberQuestions(setId));
const startSounds = (setId) => startMc({ type: "sounds", id: setId }, buildSoundQuestions(setId));
const startStoryQuiz = (chapterId) => startMc({ type: "story", id: chapterId }, buildReadingQuestions(findStoryChapter(chapterId).chapter));
const openStoryChapter = (chapterId) => set({ storyChapterId: chapterId, screen: "storyRead" });

function mcSourceInfo(source) {
  if (source.type === "grammar") {
    const topic = findGrammarTopic(source.id);
    return { label: `${topic.emoji} ${topic.title}`, level: levelById(topic.levelId), quitTo: "grammarList", listScreen: "grammarList" };
  }
  if (source.type === "reading") {
    const passage = findPassage(source.id);
    return {
      label: `${passage.emoji} ${passage.title}`,
      level: levelById(passage.levelId),
      contextHtml: passageContextHtml(passage),
      quitTo: "readingList",
      listScreen: "readingList",
    };
  }
  if (source.type === "irregular") {
    const set = findIrregularSet(source.id);
    return { label: `🔁 ${set.title}`, level: levelById(set.levelId), quitTo: "irregular", listScreen: "irregular" };
  }
  if (source.type === "picture") {
    const [kind, levelId] = source.id.split(":");
    return { label: kind === "listen" ? "🎧 듣고 그림 고르기" : "🖼️ 그림 보고 단어 고르기", level: levelById(levelId), quitTo: "pictureList", listScreen: "pictureList" };
  }
  if (source.type === "email") return { label: "📧 업무 이메일", level: levelById("adult"), quitTo: "practiceList", listScreen: "practiceList" };
  if (source.type === "exam") {
    const grade = BASIC_GRADES.find((g) => g.id === source.id);
    return { label: `📝 ${grade.label} 모의고사`, level: levelById(grade.levelId), quitTo: "examList", listScreen: "examList" };
  }
  if (source.type === "idiom" || source.type === "affix") {
    const set = (source.type === "idiom" ? IDIOM_SETS : AFFIX_SETS).find((s) => s.id === source.id);
    const screen = source.type === "idiom" ? "idioms" : "affixes";
    return { label: `${set.emoji} ${set.title}`, level: levelById(set.levelId), quitTo: screen, listScreen: screen };
  }
  if (source.type === "listening") {
    const level = levelById(source.id);
    return { label: `🎧 듣기 평가 · ${shortLevelLabel(level)}`, level, quitTo: "listeningList", listScreen: "listeningList" };
  }
  if (source.type === "topic") {
    const g = TOPIC_WORD_GROUPS.find((x) => x.id === source.id);
    return { label: `${g.emoji} ${g.title}`, level: null, quitTo: "topicView", listScreen: "topicList" };
  }
  if (source.type === "numbers") {
    const ns = NUMBER_SETS.find((x) => x.id === source.id);
    return { label: `${ns.emoji} ${ns.title}`, level: levelById(ns.levelId), quitTo: "numbersList", listScreen: "numbersList" };
  }
  if (source.type === "sounds") {
    const ss = SOUND_PAIR_SETS.find((x) => x.id === source.id);
    return { label: ss ? `${ss.emoji} ${ss.title}` : "🎲 소리 구별 모두 섞기", level: null, quitTo: "soundsList", listScreen: "soundsList" };
  }
  if (source.type === "story") {
    const { series, chapter } = findStoryChapter(source.id);
    return { label: `${series.emoji} ${series.title} ${chapter.no}장`, level: levelById(series.levelId), contextHtml: passageContextHtml(chapter), quitTo: "storyRead", listScreen: "storyList" };
  }
  if (source.type === "drillReview") return { label: "📝 기초 · 동사 오답 복습", level: null, quitTo: "wrongNote", listScreen: "wrongNote" };
  if (source.type === "verbPattern") return { label: vpTestLabel(source.id), level: null, quitTo: "verbPattern", listScreen: "verbPattern" };
  if (source.type === "daily") return { label: "☀️ 오늘의 학습", level: null, quitTo: "home", listScreen: "home" };
  if (source.type === "weekly") return { label: "📅 주간 단어 시험", level: null, quitTo: "home", listScreen: "home" };
  return { label: "📝 문법 오답 복습", level: null, quitTo: "grammarList", listScreen: "grammarList" };
}

function selectMcAnswer(question, choice) {
  if (question.selectedAnswer !== null) return;
  question.selectedAnswer = choice;
  const isCorrect = choice === question.correctAnswer;
  if (question.kind === "word") {
    // 단어장에서 공부 중인 단어라면, 맞힌 경우 다음 복습을 뒤로 미룬다 (틀리면 recordAnswerOutcome이 처리).
    if (isCorrect && getVocabEntries(currentProfile())[question.id]) recordVocabReview(currentProfile(), question.id, question.levelId, true);
    recordAnswerOutcome(currentProfile(), question.id, question.levelId, isCorrect);
  }
  if (question.kind === "grammar") recordGrammarAnswer(currentProfile(), question.id, isCorrect);
  if (question.drill) recordDrillAnswer(currentProfile(), question.id, isCorrect);
  recordActivity(currentProfile());
  set({});
}

function nextMcQuestion() {
  const { mc } = store.getState();
  if (mc.index + 1 < mc.questions.length) {
    set({ mc: { ...mc, index: mc.index + 1 } });
    return;
  }
  const correct = mc.questions.filter((q) => q.selectedAnswer === q.correctAnswer).length;
  const total = mc.questions.length;
  let isNewBest = false;
  if (mc.source.type === "grammar") isNewBest = recordSectionResult(currentProfile(), "grammar", mc.source.id, correct, total);
  if (mc.source.type === "reading") isNewBest = recordSectionResult(currentProfile(), "reading", mc.source.id, correct, total);
  if (mc.source.type === "irregular") isNewBest = recordSectionResult(currentProfile(), "irregular", mc.source.id, correct, total);
  if (mc.source.type === "picture") isNewBest = recordSectionResult(currentProfile(), "picture", mc.source.id, correct, total);
  if (mc.source.type === "email") isNewBest = recordSectionResult(currentProfile(), "email", "all", correct, total);
  if (mc.source.type === "exam") isNewBest = recordSectionResult(currentProfile(), "exam", mc.source.id, correct, total);
  if (mc.source.type === "idiom" || mc.source.type === "affix") isNewBest = recordSectionResult(currentProfile(), mc.source.type, mc.source.id, correct, total);
  if (mc.source.type === "listening") isNewBest = recordSectionResult(currentProfile(), "listening", mc.source.id, correct, total);
  if (mc.source.type === "verbPattern") isNewBest = recordSectionResult(currentProfile(), "verbPattern", mc.source.id, correct, total);
  if (mc.source.type === "daily") recordDaily(currentProfile(), correct, total);
  if (["topic", "numbers", "sounds", "story"].includes(mc.source.type)) isNewBest = recordSectionResult(currentProfile(), mc.source.type, mc.source.id, correct, total);
  if (mc.source.type === "weekly") isNewBest = recordSectionResult(currentProfile(), "weekly", mc.source.id, correct, total);
  set({ mc: { ...mc, isNewBest }, screen: "mcResult" });
  announceBadges(checkNewBadges(currentProfile()));
}

function mcResultActions(source, hasWrong) {
  const retry = { label: "🔁 다시 풀기", primary: true };
  if (source.type === "grammar") {
    return {
      actions: [
        { ...retry, onClick: () => startGrammarQuiz(source.id) },
        { label: "📘 문법 노트 보기", onClick: () => set({ grammarTopicId: source.id, screen: "grammarNote" }) },
        { label: "문법 목록으로", onClick: () => set({ screen: "grammarList" }) },
      ],
      reviewCta: hasWrong && getGrammarWrongIds(currentProfile()).length > 0 ? { label: "📝 문법 오답노트로 복습하기", onClick: startGrammarReview } : null,
    };
  }
  if (source.type === "reading") {
    const i = READING_PASSAGES.findIndex((p) => p.id === source.id);
    const next = READING_PASSAGES[i + 1];
    return {
      actions: [
        { ...retry, onClick: () => startReadingQuiz(source.id) },
        { label: "📖 지문 다시 읽기", onClick: () => set({ passageId: source.id, readingMode: "read", screen: "passage" }) },
        ...(next ? [{ label: `다음 지문: ${next.emoji} ${next.title}`, onClick: () => startReadingQuiz(next.id) }] : []),
        { label: "목록으로", onClick: () => set({ screen: "readingList" }) },
      ],
    };
  }
  if (source.type === "irregular") {
    const i = IRREGULAR_SETS.findIndex((s) => s.id === source.id);
    const next = IRREGULAR_SETS[i + 1];
    return {
      actions: [
        { ...retry, onClick: () => startIrregularTest(source.id) },
        { label: "🔁 변화표 다시 보기", onClick: () => set({ screen: "irregular" }) },
        ...(next ? [{ label: `다음 단계: ${next.emoji} ${next.title}`, onClick: () => startIrregularTest(next.id) }] : []),
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "picture") {
    const [kind, levelId] = source.id.split(":");
    const other = kind === "listen" ? "picture" : "listen";
    return {
      actions: [
        { ...retry, onClick: () => startPicture(levelId, kind) },
        { label: other === "listen" ? "🎧 듣고 그림 고르기" : "🖼️ 그림 보고 단어 고르기", onClick: () => startPicture(levelId, other) },
        { label: "🃏 짝 맞추기 게임", onClick: () => startMemory(levelId) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "email") {
    return {
      actions: [
        { ...retry, onClick: startEmail },
        { label: "💬 회화 롤플레이 하러 가기", onClick: () => set({ screen: "practiceList" }) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "exam") {
    const hasDrill = getDrillWrongEntries(currentProfile()).length > 0;
    return {
      actions: [
        { ...retry, onClick: () => startExam(source.id) },
        ...(hasWrong && hasDrill ? [{ label: "📝 틀린 문제 복습하기", onClick: startDrillReview }] : []),
        { label: "다른 학년 고르기", onClick: () => set({ screen: "examList" }) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "idiom" || source.type === "affix") {
    const sets = source.type === "idiom" ? IDIOM_SETS : AFFIX_SETS;
    const start = source.type === "idiom" ? startIdiomTest : startAffixTest;
    const screen = source.type === "idiom" ? "idioms" : "affixes";
    const next = sets[sets.findIndex((s) => s.id === source.id) + 1];
    return {
      actions: [
        { ...retry, onClick: () => start(source.id) },
        { label: "📖 다시 공부하기", onClick: () => set({ screen }) },
        ...(next ? [{ label: `다음: ${next.emoji} ${next.title}`, onClick: () => start(next.id) }] : []),
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "listening") {
    const i = LISTENING_SETS.findIndex((s) => s.levelId === source.id);
    const next = LISTENING_SETS[i + 1];
    return {
      actions: [
        { ...retry, onClick: () => startListening(source.id) },
        ...(next ? [{ label: `다음 단계: ${levelById(next.levelId).label}`, onClick: () => startListening(next.levelId) }] : []),
        { label: "단계 고르기", onClick: () => set({ screen: "listeningList" }) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "drillReview") {
    const left = getDrillWrongEntries(currentProfile()).length;
    return {
      actions: [
        ...(left > 0 ? [{ label: "🔁 남은 오답 다시 풀기", primary: true, onClick: startDrillReview }] : []),
        { label: "📝 오답노트로", primary: left === 0, onClick: () => set({ screen: "wrongNote" }) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "verbPattern") {
    const ids = [...VERB_PATTERN_GROUPS.map((g) => g.id), "all"];
    const next = ids[ids.indexOf(source.id) + 1];
    return {
      actions: [
        { ...retry, onClick: () => startVerbPatternTest(source.id) },
        { label: "📖 설명 다시 보기", onClick: () => set({ screen: "verbPattern" }) },
        ...(next ? [{ label: `다음 테스트: ${vpTestLabel(next)}`, onClick: () => startVerbPatternTest(next) }] : []),
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "topic") {
    const next = TOPIC_WORD_GROUPS[TOPIC_WORD_GROUPS.findIndex((g) => g.id === source.id) + 1];
    return {
      actions: [
        { ...retry, onClick: () => startTopicQuiz(source.id) },
        { label: "📋 단어 다시 보기", onClick: () => set({ topicId: source.id, screen: "topicView" }) },
        ...(next ? [{ label: `다음 주제: ${next.emoji} ${next.title}`, onClick: () => set({ topicId: next.id, screen: "topicView" }) }] : []),
        { label: "주제 목록", onClick: () => set({ screen: "topicList" }) },
      ],
    };
  }
  if (source.type === "numbers" || source.type === "sounds") {
    const list = source.type === "numbers" ? "numbersList" : "soundsList";
    const start = source.type === "numbers" ? startNumbers : startSounds;
    return {
      actions: [
        { label: "🔁 새 문제로 다시", primary: true, onClick: () => start(source.id) },
        { label: "다른 묶음 고르기", onClick: () => set({ screen: list }) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "story") {
    const { series, chapter } = findStoryChapter(source.id);
    const next = series.chapters[chapter.no];
    const passed = storyChapterPassed(currentProfile(), chapter.id);
    return {
      actions: [
        ...(next && passed ? [{ label: `📖 다음 장: ${next.emoji} ${next.title}`, primary: true, onClick: () => openStoryChapter(next.id) }] : []),
        { label: passed ? "🔁 다시 풀기" : `🔁 다시 풀기 (${STORY_PASS}개 맞히면 다음 장)`, primary: !(next && passed), onClick: () => startStoryQuiz(chapter.id) },
        { label: "📖 이 장 다시 읽기", onClick: () => openStoryChapter(chapter.id) },
        { label: "이야기 목록", onClick: () => set({ screen: "storyList" }) },
      ],
    };
  }
  if (source.type === "weekly") {
    const wrongLeft = getWrongWords(currentProfile()).length;
    return {
      actions: [
        { ...retry, onClick: startWeekly },
        ...(hasWrong && wrongLeft > 0 ? [{ label: `📝 틀린 단어 복습 (${wrongLeft})`, onClick: () => set({ screen: "wrongNote" }) }] : []),
        { label: "📇 단어장 보기", onClick: () => set({ screen: "vocab" }) },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  if (source.type === "daily") {
    // 오늘의 학습을 마치면 다음 공부로 바로 이어지게 한다
    const next = nextStep(currentProfile());
    const wrongLeft = getWrongWords(currentProfile()).length + getGrammarWrongIds(currentProfile()).length + getDrillWrongEntries(currentProfile()).length;
    return {
      actions: [
        { label: `▶ 이어서 하기: ${next.emoji} ${next.title}`, primary: true, onClick: () => openNextStep(next) },
        ...(hasWrong && wrongLeft > 0 ? [{ label: `📝 오답노트에서 바로 복습 (${wrongLeft})`, onClick: () => set({ screen: "wrongNote" }) }] : []),
        { label: "☀️ 한 번 더 하기", onClick: startDaily },
        { label: "🏠 홈으로", onClick: goHome },
      ],
    };
  }
  return {
    actions: [
      ...(getGrammarWrongIds(currentProfile()).length > 0 ? [{ label: "🔁 남은 오답 다시 풀기", primary: true, onClick: startGrammarReview }] : []),
      { label: "문법 목록으로", primary: getGrammarWrongIds(currentProfile()).length === 0, onClick: () => set({ screen: "grammarList" }) },
    ],
  };
}

// ── 끊어 읽기 ──
function startChunkSet(setId) {
  set({ chunk: { setId, items: buildChunkSession(setId), index: 0, isNewBest: false }, screen: "chunkSession" });
}

function tapChunk(chunkIndex) {
  const { chunk } = store.getState();
  const item = chunk.items[chunk.index];
  const expected = CHUNK_STEPS[item.step].role;
  if (item.sentence.chunks[chunkIndex].role === expected) {
    item.step += 1;
    item.wrongChunk = null;
    if (item.step >= CHUNK_STEPS.length) {
      recordActivity(currentProfile());
      if (item.mistakes === 0) burstConfetti();
    }
    playSound("correct");
  } else {
    item.mistakes += 1;
    item.wrongChunk = chunkIndex;
    playSound("wrong");
  }
  set({});
}

function nextChunk() {
  const { chunk } = store.getState();
  if (chunk.index + 1 < chunk.items.length) {
    set({ chunk: { ...chunk, index: chunk.index + 1 } });
    return;
  }
  const correct = chunk.items.filter((it) => it.mistakes === 0).length;
  const isNewBest = recordSectionResult(currentProfile(), "chunks", chunk.setId, correct, chunk.items.length);
  set({ chunk: { ...chunk, isNewBest }, screen: "chunkResult" });
  announceBadges(checkNewBadges(currentProfile()));
}

// ── 초등: 그림 퀴즈 · 짝 맞추기 ──
const startPicture = (levelId, kind) => startMc({ type: "picture", id: `${kind}:${levelId}` }, buildPictureQuestions(levelId, kind));
const startMemory = (levelId) => set({ memory: buildMemoryGame(levelId), screen: "memory" });

// ── 단어 놀이: 스펠링 게임 · 주간 단어 시험 ──
const startSpelling = (levelId) => set({ spelling: buildSpellingGame(levelId), screen: "spelling" });
const startWeekly = () => startMc({ type: "weekly", id: weekDateKeys()[0] }, buildWeeklyQuestions(currentProfile()));

const spellingActions = {
  guess: (letter) => {
    const { spelling: game } = store.getState();
    if (game.done || spellingStatus(game) !== "playing" || game.guessed.includes(letter)) return;
    const w = game.words[game.index];
    game.guessed.push(letter);
    if (w.word.includes(letter)) playSound("correct");
    else {
      game.misses += 1;
      playSound("wrong");
    }
    const status = spellingStatus(game);
    if (status !== "playing") {
      const solved = status === "solved";
      game.results.push({ word: w, solved });
      recordAnswerOutcome(currentProfile(), w.id, game.levelId, solved);
      recordActivity(currentProfile());
      speak(w.word, { rate: 0.85 });
      if (solved && game.misses === 0) burstConfetti(30);
    }
    set({});
  },
  next: () => {
    const { spelling: game } = store.getState();
    if (game.index + 1 < game.words.length) {
      Object.assign(game, { index: game.index + 1, guessed: [], misses: 0 });
    } else {
      const solved = game.results.filter((r) => r.solved).length;
      game.done = true;
      game.isNewBest = recordSectionResult(currentProfile(), "spelling", game.levelId, solved, game.words.length);
      if (solved === game.words.length) burstConfetti(40);
      announceBadges(checkNewBadges(currentProfile()));
    }
    set({});
  },
  again: () => startSpelling(store.getState().spelling.levelId),
  list: () => set({ screen: "spellingList" }),
  quit: () => set({ screen: "home" }),
};

// ── ⏱️ 60초 스피드 퀴즈 ──
let speedTimer = null;

function speedTick() {
  const { screen, speed } = store.getState();
  if (screen !== "speed" || !speed || speed.done || speed.ready) {
    clearInterval(speedTimer);
    speedTimer = null;
    return;
  }
  const left = speedSecondsLeft(speed);
  const timeEl = document.getElementById("speedTime");
  if (timeEl) timeEl.textContent = left;
  const bar = document.getElementById("speedBar");
  if (bar) bar.style.width = `${(left / SPEED_SECONDS) * 100}%`;
  if (left <= 0) finishSpeed();
}

function finishSpeed() {
  const { speed } = store.getState();
  clearInterval(speedTimer);
  speedTimer = null;
  if (speed.done) return;
  speed.done = true;
  speed.isNewBest = recordBestCount(currentProfile(), "speed", speed.levelId, speed.correct, speed.correct + speed.wrong);
  if (speed.isNewBest) burstConfetti(40);
  set({});
  announceBadges(checkNewBadges(currentProfile()));
}

const startSpeed = (levelId) => set({ speed: newSpeedGame(levelId), screen: "speed" });

const speedActions = {
  go: () => {
    const { speed } = store.getState();
    speed.ready = false;
    speed.endsAt = Date.now() + SPEED_SECONDS * 1000;
    clearInterval(speedTimer);
    speedTimer = setInterval(speedTick, 250);
    set({});
  },
  answer: (choice) => {
    const { speed } = store.getState();
    if (speed.done || speed.ready) return;
    if (speedSecondsLeft(speed) <= 0) {
      finishSpeed();
      return;
    }
    const { w } = speed.q;
    const ok = choice === w.meaningKo;
    if (ok) {
      speed.correct += 1;
      speed.combo += 1;
      speed.maxCombo = Math.max(speed.maxCombo, speed.combo);
      playSound("correct");
    } else {
      speed.wrong += 1;
      speed.combo = 0;
      if (!speed.missed.some((m) => m.id === w.id)) speed.missed.push(w);
      playSound("wrong");
    }
    recordAnswerOutcome(currentProfile(), w.id, speed.levelId, ok);
    recordActivity(currentProfile());
    speed.flash = ok ? "ok" : "bad";
    speed.q = speedQuestion(speed.levelId, w.id);
    set({});
  },
  again: () => startSpeed(store.getState().speed.levelId),
  list: () => set({ screen: "speedList" }),
  quit: () => set({ screen: "speedList" }),
};

// ── ⚔️ 가족 대결 ──
function openBattleSetup() {
  const me = currentProfile();
  const other = getFamily().find((m) => m.name !== me);
  const prev = (store.getState().battlePick || []).filter((n) => findMember(n));
  set({ battlePick: prev.length === 2 ? prev : [me, ...(other ? [other.name] : [])], screen: "battleSetup" });
}

const battleActions = {
  ready: () => {
    store.getState().battle.phase = "question";
    set({});
  },
  answer: (choice) => {
    const { battle } = store.getState();
    const q = battle.questions[battle.index];
    if (battle.phase !== "question") return;
    q.selectedAnswer = choice;
    const ok = choice === q.correctAnswer;
    const player = battle.players[q.player];
    if (ok) player.score += 1;
    recordAnswerOutcome(player.name, q.id, q.levelId, ok);
    recordActivity(player.name);
    speak(q.listenText, { rate: 0.85 });
    battle.phase = "answered";
    set({});
  },
  next: () => {
    const { battle } = store.getState();
    if (battle.index + 1 < battle.questions.length) {
      battle.index += 1;
      battle.phase = "ready";
    } else {
      battle.done = true;
      burstConfetti(50);
      playSound("badge");
    }
    set({});
  },
  again: () => set({ battle: buildBattle(store.getState().battle.players.map((p) => p.name)) }),
  setup: openBattleSetup,
  quit: () => set({ screen: "battleSetup" }),
  home: goHome,
};

// ── 📓 영어 일기 ──
const diaryActions = {
  pick: (line, opt) => {
    store.getState().diaryDraft.picks[line] = opt;
    set({});
  },
  save: () => {
    const { diaryDraft } = store.getState();
    saveDiary(currentProfile(), { d: dateKey(), t: diaryDraft.tplId, p: [...diaryDraft.picks] });
    recordActivity(currentProfile());
    burstConfetti(40);
    playSound("correct");
    showToast(`<span class="toast-emoji">📓</span><span>일기장에 저장했어요!</span>`);
    set({ screen: "diaryList" });
  },
  back: () => set({ screen: "diaryList" }),
};

let memoryBusy = false;
const memoryActions = {
  flip: (i) => {
    const { memory } = store.getState();
    if (memoryBusy || memory.done || memory.open.includes(i) || memory.matched.includes(i)) return;
    const card = memory.cards[i];
    if (card.kind === "word") speak(card.word.word, { rate: 0.85 });
    memory.open.push(i);
    if (memory.open.length === 2) {
      memory.moves += 1;
      const [a, b] = memory.open.map((k) => memory.cards[k]);
      if (a.pair === b.pair) {
        memory.matched.push(...memory.open);
        memory.open = [];
        playSound("correct");
        speak(a.word.word, { rate: 0.85 });
        recordActivity(currentProfile());
        if (memory.matched.length === memory.cards.length) {
          memory.done = true;
          recordSectionResult(currentProfile(), "memory", memory.levelId, MEMORY_PAIRS, memory.moves);
          burstConfetti(40);
          announceBadges(checkNewBadges(currentProfile()));
        }
      } else {
        memoryBusy = true;
        setTimeout(() => {
          memory.open = [];
          memoryBusy = false;
          set({});
        }, 900);
      }
    }
    set({});
  },
  again: () => startMemory(store.getState().memory.levelId),
  quit: () => set({ screen: "home" }),
};

// ── 실전 연습: 회화 롤플레이 · 업무 이메일 ──
const startRoleplay = (id) => set({ roleplay: buildRoleplaySession(id), screen: "roleplay" });
const startEmail = () => startMc({ type: "email", id: "all" }, buildEmailQuestions());

const roleplayActions = {
  choose: (choice) => {
    const { roleplay } = store.getState();
    const turn = findRoleplay(roleplay.id).turns[roleplay.turn];
    const item = roleplay.items[roleplay.turn];
    if (item.solved || item.wrong.includes(choice)) return;
    const ok = choice === turn.answer;
    if (item.firstTry === undefined) {
      item.firstTry = ok;
      recordActivity(currentProfile());
    }
    if (ok) {
      item.solved = true;
      answerFeedback(true);
      speak(turn.choices[turn.answer]);
    } else {
      item.wrong.push(choice);
      playSound("wrong");
    }
    set({});
  },
  next: () => {
    const { roleplay } = store.getState();
    const rp = findRoleplay(roleplay.id);
    if (roleplay.turn + 1 < rp.turns.length) {
      roleplay.turn += 1;
      set({});
      return;
    }
    const correct = roleplay.items.filter((it) => it.firstTry).length;
    roleplay.isNewBest = recordSectionResult(currentProfile(), "roleplay", roleplay.id, correct, rp.turns.length);
    set({ screen: "roleplayResult" });
    announceBadges(checkNewBadges(currentProfile()));
  },
  quit: () => set({ screen: "practiceList" }),
};

// "이어서 하기" 열기 (홈 · 오늘의 학습 결과에서 같이 쓴다)
function openNextStep(step) {
  if (step.type === "lesson") startBasic(step.id);
  else if (step.type === "listening") startListening(step.id);
  else if (step.type === "exam") startExam(step.id);
  else if (step.type === "crossword") startCrossword(step.id);
  else if (step.type === "screen") set({ screen: step.screen });
  else set({ screen: "settings" });
}

// ── 가로세로 낱말 퀴즈 ──
function startCrossword(levelId) {
  const puzzle = buildCrossword(levelId);
  if (!puzzle) {
    showToast(`<span class="toast-emoji">🧩</span><span>퍼즐을 만들지 못했어요. 다시 눌러 주세요.</span>`);
    return;
  }
  set({ crossword: puzzle, screen: "crossword" });
}

const crosswordActions = {
  finish: (puzzle) => {
    const clean = puzzle.entries.filter((e) => entrySolved(puzzle, e) && entryCells(e).every(([r, c]) => !puzzle.grid[r][c].hinted)).length;
    recordSectionResult(currentProfile(), "crossword", puzzle.levelId, clean, puzzle.entries.length);
    recordActivity(currentProfile());
    if (!puzzle.revealed) {
      playSound("correct");
      burstConfetti(40);
      showToast(`<span class="toast-emoji">🧩</span><span>퍼즐 완성! 힌트 없이 맞힌 단어 ${clean} / ${puzzle.entries.length}</span>`);
    }
    set({});
    announceBadges(checkNewBadges(currentProfile()));
  },
  newPuzzle: startCrossword,
  quit: () => set({ screen: "crosswordList" }),
};

// ── 영작 연습 ──
const startWriting = (gradeId, mode) => set({ writing: buildWritingSession(gradeId, mode), screen: "writingSession" });

function writingItem() {
  const { writing } = store.getState();
  return writing.items[writing.index];
}

function settleWriting(item, ok) {
  if (item.firstTry === undefined) {
    item.firstTry = ok;
    recordActivity(currentProfile());
  }
}

const writingActions = {
  tapPool: (w) => {
    const item = writingItem();
    if (item.solved || item.revealed) return;
    item.pool = item.pool.filter((x) => x !== w);
    item.built.push(w);
    item.wrong = false;
    if (item.built.length === item.words.length) {
      if (item.built.map((x) => item.words[x]).join(" ") === item.words.join(" ")) {
        item.solved = true;
        settleWriting(item, true);
        answerFeedback(true);
        speak(item.en, { rate: 0.85 });
      } else {
        item.wrong = true;
        settleWriting(item, false);
        playSound("wrong");
      }
    }
    set({});
  },
  tapBuilt: (w) => {
    const item = writingItem();
    if (item.solved || item.revealed) return;
    item.built = item.built.filter((x) => x !== w);
    item.pool.push(w);
    item.wrong = false;
    set({});
  },
  checkTyped: (text) => {
    const item = writingItem();
    if (item.solved || item.revealed || !text.trim()) return;
    item.typed = text;
    if (writingNormalize(text) === writingNormalize(item.en)) {
      item.solved = true;
      item.wrong = false;
      settleWriting(item, !item.hint);
      answerFeedback(true);
      speak(item.en, { rate: 0.85 });
    } else {
      item.wrong = true;
      settleWriting(item, false);
      playSound("wrong");
    }
    set({});
  },
  hint: (text) => {
    const item = writingItem();
    item.typed = text;
    item.hint = true;
    set({});
  },
  reveal: () => {
    const item = writingItem();
    item.revealed = true;
    settleWriting(item, false);
    set({});
  },
  next: () => {
    const { writing } = store.getState();
    if (writing.index + 1 < writing.items.length) {
      writing.index += 1;
      set({});
      return;
    }
    const correct = writing.items.filter((it) => it.firstTry).length;
    writing.isNewBest = recordSectionResult(currentProfile(), "writing", `${writing.mode}:${writing.gradeId}`, correct, writing.items.length);
    set({ screen: "writingResult" });
    announceBadges(checkNewBadges(currentProfile()));
  },
  quit: () => set({ screen: "writingList" }),
};

// ── 따라 말하기 ──
const startSpeaking = (groupId) => set({ speaking: buildSpeakingSession(groupId), screen: "speakingSession" });

const speakingActions = {
  heard: (text, score) => {
    const { speaking } = store.getState();
    const item = speaking.items[speaking.index];
    const wasPassed = item.best >= SPEAKING_PASS;
    item.heard = text;
    item.tries += 1;
    item.best = Math.max(item.best, score);
    recordActivity(currentProfile());
    if (score >= SPEAKING_PASS) {
      playSound("correct");
      if (!wasPassed) burstConfetti(20);
    }
    set({});
  },
  selfCheck: (ok) => {
    const { speaking } = store.getState();
    const item = speaking.items[speaking.index];
    item.tries += 1;
    if (ok) {
      item.best = 1;
      recordActivity(currentProfile());
      playSound("correct");
    }
    set({});
  },
  next: () => {
    const { speaking } = store.getState();
    if (speaking.index + 1 < speaking.items.length) {
      speaking.index += 1;
      set({});
      return;
    }
    const passed = speaking.items.filter((it) => it.best >= SPEAKING_PASS).length;
    speaking.isNewBest = recordSectionResult(currentProfile(), "speaking", speaking.groupId, passed, speaking.items.length);
    set({ screen: "speakingResult" });
    announceBadges(checkNewBadges(currentProfile()));
  },
  quit: () => set({ screen: "speakingList" }),
};

// ── 단어장 카드 공부 ──
function openVocab() {
  const { vocabTab, profileName } = store.getState();
  set({ vocabTab: vocabTab || getPreferredLevel(profileName) || getLastWordLevel(profileName) || LEVELS[0].id, screen: "vocab" });
}

function startVocabSession(source) {
  const cards = buildVocabSession(currentProfile(), source);
  if (cards.length === 0) {
    showToast(`<span class="toast-emoji">📇</span><span>지금 공부할 카드가 없어요</span>`);
    return;
  }
  set({
    vocabSession: {
      source,
      queue: cards.map((c) => c.id),
      cards: Object.fromEntries(cards.map((c) => [c.id, c])),
      index: 0,
      flipped: false,
      spoken: false,
      first: {},
      requeued: {},
    },
    screen: "vocabSession",
  });
}

function flipCard() {
  store.getState().vocabSession.flipped = true;
  set({});
}

function answerCard(known) {
  const session = store.getState().vocabSession;
  if (!session.flipped) return;
  const id = session.queue[session.index];
  // 처음 답한 것만 기록하고, 헷갈리는 카드는 이번 공부 끝에 한 번 더 보여 준다.
  if (session.first[id] === undefined) {
    session.first[id] = known;
    recordVocabReview(currentProfile(), id, session.cards[id].levelId, known);
    recordActivity(currentProfile());
  }
  if (!known && !session.requeued[id]) {
    session.requeued[id] = true;
    session.queue.push(id);
  }
  if (known) playSound("correct");
  session.index += 1;
  session.flipped = false;
  session.spoken = false;
  if (session.index >= session.queue.length) {
    set({ screen: "vocabSummary" });
    announceBadges(checkNewBadges(currentProfile()));
  } else {
    set({});
  }
}

document.addEventListener("keydown", (e) => {
  const state = store.getState();
  if (state.screen !== "vocabSession" || !state.vocabSession?.flipped || document.querySelector(".modal-overlay")) return;
  if (e.key === "ArrowRight") answerCard(true);
  if (e.key === "ArrowLeft") answerCard(false);
});

// ── 기초 문법 ──
const startBasic = (topicId) => set({ basic: newBasicSession(topicId), screen: "basicLesson" });

function basicCurrent() {
  const { basic } = store.getState();
  const topic = findBasicTopic(basic.topicId);
  return { basic, topic, item: topic.practice[basic.pIndex], state: basic.items[basic.pIndex] };
}

// 문제마다 첫 시도만 기록한다 (맞히면 한 번에 맞힌 것으로 셈).
function settleBasicAttempt(state, correct) {
  if (state.firstTry !== undefined) return;
  state.firstTry = correct;
  recordActivity(currentProfile());
}

function solveBasic(state, item) {
  state.solved = true;
  settleBasicAttempt(state, true);
  answerFeedback(true);
  speak(basicAnswerText(item), { rate: 0.8 });
}

const toLessonList = () => set({ screen: lessonCollectionOf(store.getState().basic.topicId).listScreen });

const basicActions = {
  quit: toLessonList,
  toList: toLessonList,
  restart: () => startBasic(store.getState().basic.topicId),
  prevSlide: () => {
    const { basic } = store.getState();
    basic.slide = Math.max(0, basic.slide - 1);
    stopSpeaking();
    set({});
  },
  nextSlide: () => {
    const { basic, topic } = basicCurrent();
    stopSpeaking();
    if (basic.slide < topic.slides.length - 1) basic.slide += 1;
    else basic.phase = "practice";
    set({});
  },
  choose: (choiceIndex) => {
    const { item, state } = basicCurrent();
    if (state.solved || state.wrongPicks.includes(choiceIndex)) return;
    if (choiceIndex === item.answer) {
      solveBasic(state, item);
    } else {
      state.wrongPicks.push(choiceIndex);
      settleBasicAttempt(state, false);
      playSound("wrong");
    }
    set({});
  },
  tapPool: (wordIndex) => {
    const { item, state } = basicCurrent();
    if (state.solved) return;
    state.pool = state.pool.filter((w) => w !== wordIndex);
    state.built.push(wordIndex);
    state.wrongOrder = false;
    if (state.built.length === item.words.length) {
      if (state.built.map((w) => item.words[w]).join(" ") === item.words.join(" ")) {
        solveBasic(state, item);
      } else {
        state.wrongOrder = true;
        settleBasicAttempt(state, false);
        playSound("wrong");
      }
    }
    set({});
  },
  tapBuilt: (wordIndex) => {
    const { state } = basicCurrent();
    if (state.solved) return;
    state.built = state.built.filter((w) => w !== wordIndex);
    state.pool.push(wordIndex);
    state.wrongOrder = false;
    set({});
  },
  resetOrder: () => {
    const { state } = basicCurrent();
    state.pool = [...state.pool, ...state.built];
    state.built = [];
    state.wrongOrder = false;
    set({});
  },
  nextPractice: () => {
    const { basic, topic } = basicCurrent();
    if (basic.pIndex < topic.practice.length - 1) {
      basic.pIndex += 1;
      set({});
      return;
    }
    basic.phase = "done";
    const correct = basic.items.filter((s) => s.firstTry).length;
    recordSectionResult(currentProfile(), "basics", topic.id, correct, topic.practice.length);
    set({});
    if (basicStars(correct, topic.practice.length) === 3) burstConfetti(36);
    announceBadges(checkNewBadges(currentProfile()));
  },
  practiceAgain: () => {
    const { basic, topic } = basicCurrent();
    basic.items = topic.practice.map(newBasicItem);
    basic.pIndex = 0;
    basic.phase = "practice";
    basic.spokenKey = null;
    set({});
  },
};

// ── 오답노트 · 가족 편집 ──
function reviewFromWrongNote(kind) {
  if (kind === "grammar") {
    startGrammarReview();
    return;
  }
  if (kind === "drill") {
    startDrillReview();
    return;
  }
  set({ wordMode: kind });
  startWordReview();
}

function saveMember(member) {
  const { editMember, memberReturn, profileName } = store.getState();
  const { level, ...info } = member;
  if (editMember === null) {
    addFamilyMember(info);
    if (level) setPreferredLevel(info.name, level);
    set({ profileName: info.name, screen: "home" });
    return;
  }
  updateFamilyMember(editMember, info);
  set({ profileName: profileName === editMember ? member.name : profileName, screen: memberReturn });
}

function deleteMember() {
  removeFamilyMember(store.getState().editMember);
  set({ profileName: null, screen: "profile" });
}

// ── 뒤로가기: 휴대폰 뒤로 버튼이 앱을 닫지 않고 한 단계 위 화면으로 가게 한다 ──
const QUIZ_QUIT_TARGET = {
  quiz: () => "level",
  mcQuiz: (s) => mcSourceInfo(s.mc.source).quitTo,
  chunkSession: () => "chunkIntro",
  speakingSession: () => "speakingList",
  writingSession: () => "writingList",
  roleplay: () => "practiceList",
  spelling: (s) => (s.spelling.done ? null : "spellingList"),
  speed: (s) => (s.speed.done || s.speed.ready ? null : "speedList"),
  battle: (s) => (s.battle.done ? null : "battleSetup"),
};

function parentScreen(state) {
  switch (state.screen) {
    case "home": return "profile";
    case "grammarList": return "grammarNotes";
    case "level": case "readingList": case "chunkIntro":
    case "settings": case "wrongNote": case "report": case "vocab": case "grammarNotes": case "phonics": case "talk":
    case "irregular": case "verbPattern": case "speakingList": case "listeningList": case "writingList":
    case "idioms": case "affixes": case "examList": case "goals": case "crosswordList": case "family": case "practiceList":
    case "pictureList": case "stickers": case "memory": case "spellingList":
    case "topicList": case "numbersList": case "soundsList": case "storyList": case "diaryList": case "speedList": case "battleSetup": case "shop": return "home";
    case "topicView": return "topicList";
    case "storyRead": return "storyList";
    case "diaryWrite": return "diaryList";
    case "speed": return "speedList";
    case "battle": return "battleSetup";
    case "spelling": return "spellingList";
    case "roleplayResult": return "practiceList";
    case "crossword": return "crosswordList";
    case "speakingResult": return "speakingList";
    case "writingResult": return "writingList";
    case "grammarNote": return "grammarNotes";
    case "basicLesson": return lessonCollectionOf(state.basic.topicId).listScreen;
    case "vocabSession": case "vocabSummary": return "vocab";
    case "memberEdit": return state.memberReturn;
    case "passage": return "readingList";
    case "result": return "level";
    case "mcResult": return mcSourceInfo(state.mc.source).listScreen;
    case "chunkResult": return "chunkIntro";
    default: return null;
  }
}

let hasBackBuffer = false;

window.addEventListener("popstate", () => {
  hasBackBuffer = false;
  const state = store.getState();
  const openModal = document.querySelector(".modal-overlay");

  // 문제를 푸는 중이면 그만둘지 묻는다 (끝난 게임은 묻지 않고 위 화면으로)
  const quitTarget = QUIZ_QUIT_TARGET[state.screen]?.(state);
  if (openModal || quitTarget) {
    history.pushState({ englishword: true }, "");
    hasBackBuffer = true;
    if (openModal) openModal.querySelector("#modalCancelBtn").click();
    else
      showConfirmModal({
        message: "지금 그만두면 이번 기록은 저장되지 않아요. 그만할까요?",
        confirmText: "그만하기",
        cancelText: "계속 풀기",
        onConfirm: () => set({ screen: quitTarget }),
      });
    return;
  }

  const target = parentScreen(state);
  if (target === "profile") set({ screen: "profile", profileName: null });
  else if (target) set({ screen: target });
});

// ── 새 버전 반영: 문제를 푸는 중이 아닐 때 새로고침하고, 보던 화면으로 돌아온다 ──
const RELOAD_SAFE_SCREENS = new Set([
  "profile", "home", "level", "grammarList", "readingList", "chunkIntro",
  "vocab", "grammarNotes", "report", "wrongNote", "settings", "phonics", "talk", "irregular", "verbPattern", "speakingList", "listeningList", "writingList", "idioms", "affixes", "examList", "goals", "crosswordList", "family", "practiceList", "pictureList", "stickers", "spellingList", "topicList", "numbersList", "soundsList", "storyList", "diaryList", "speedList", "shop",
]);
const RESUME_KEY = "englishword:resume";

function reloadForUpdate() {
  const s = store.getState();
  try {
    sessionStorage.setItem(
      RESUME_KEY,
      JSON.stringify({ profileName: s.profileName, screen: s.screen, wordMode: s.wordMode, readingMode: s.readingMode, vocabTab: s.vocabTab, wrongTab: s.wrongTab })
    );
  } catch {
    // 저장 못 하면 첫 화면부터 다시 시작
  }
  location.reload();
}

document.addEventListener("pwa-update-ready", () => {
  if (RELOAD_SAFE_SCREENS.has(store.getState().screen)) reloadForUpdate();
});

function restoreAfterUpdate() {
  let saved = null;
  try {
    saved = JSON.parse(sessionStorage.getItem(RESUME_KEY));
    sessionStorage.removeItem(RESUME_KEY);
  } catch {
    return false;
  }
  if (!saved || !RELOAD_SAFE_SCREENS.has(saved.screen)) return false;
  const { screen, profileName, wordMode, readingMode, vocabTab, wrongTab } = saved;
  store.setState({ screen, profileName, wordMode, readingMode, vocabTab, wrongTab });
  return true;
}

// ── 렌더링 ──
let lastViewKey = null;
let lastScreen = null;

function render() {
  const state = store.getState();

  // 문제를 푸는 동안 새 버전이 준비됐다면, 안전한 화면으로 돌아온 지금 반영한다.
  if (appUpdateReady && RELOAD_SAFE_SCREENS.has(state.screen)) {
    reloadForUpdate();
    return;
  }

  const needsProfile = !["profile", "memberEdit"].includes(state.screen);
  if (needsProfile && !findMember(state.profileName)) {
    set({ profileName: null, screen: "profile" });
    return;
  }

  if (state.screen !== "profile" && !hasBackBuffer) {
    history.pushState({ englishword: true }, "");
    hasBackBuffer = true;
  }

  // 지문 듣기 중에 다른 화면으로 가면 소리를 멈춘다.
  if (["passage", "basicLesson", "storyRead"].includes(lastScreen) && state.screen !== lastScreen) stopSpeaking();
  lastScreen = state.screen;

  const viewKey = [state.screen, state.currentIndex, state.mc?.index, state.chunk?.index, state.passageId, state.grammarTopicId, state.vocabSession?.index, state.vocabTab, state.basic?.phase, state.basic?.slide, state.basic?.pIndex, state.topicId, state.storyChapterId, state.diaryDraft?.tplId].join(":");
  if (viewKey !== lastViewKey) {
    window.scrollTo(0, 0);
    lastViewKey = viewKey;
  }

  const screens = {
    profile: () =>
      renderProfileScreen(root, {
        selectProfile: (name) => set({ profileName: name, screen: "home" }),
        addMember: () => set({ editMember: null, memberReturn: "profile", screen: "memberEdit" }),
      }),

    memberEdit: () =>
      renderMemberEditScreen(root, {
        member: state.editMember === null ? null : findMember(state.editMember),
        onSave: saveMember,
        onDelete: deleteMember,
        onCancel: () => set({ screen: state.memberReturn }),
      }),

    settings: () =>
      renderSettingsScreen(root, {
        profileName: state.profileName,
        actions: {
          back: goHome,
          editMember: () => set({ editMember: state.profileName, memberReturn: "settings", screen: "memberEdit" }),
          afterImport: () => {
            applyTheme(getSettings().theme);
            set({ profileName: null, screen: "profile" });
            showToast(`<span class="toast-emoji">📂</span><span>기록을 불러왔어요</span>`);
          },
        },
      }),

    wrongNote: () =>
      renderWrongNoteScreen(root, {
        profileName: state.profileName,
        tab: state.wrongTab,
        actions: {
          back: goHome,
          setTab: (wrongTab) => set({ wrongTab }),
          review: reviewFromWrongNote,
          refresh: () => set({}),
        },
      }),

    report: () =>
      renderReportScreen(root, {
        profileName: state.profileName,
        actions: {
          back: goHome,
          openWrongNote: () => set({ screen: "wrongNote" }),
          openTopic: (topicId) => set({ grammarTopicId: topicId, screen: "grammarNote" }),
          openVocab,
        },
      }),

    home: () =>
      renderHomeScreen(root, {
        profileName: state.profileName,
        actions: {
          backToProfile: () => set({ profileName: null, screen: "profile" }),
          openSettings: () => set({ screen: "settings" }),
          openWrongNote: () => set({ screen: "wrongNote" }),
          openReport: () => set({ screen: "report" }),
          startDaily,
          openWords: (wordMode) => set({ wordMode, screen: "level" }),
          openVocab,
          openGrammarNotes: () => set({ screen: "grammarNotes" }),
          openPhonics: () => set({ screen: "phonics" }),
          openTalk: () => set({ screen: "talk" }),
          openIrregular: () => set({ screen: "irregular" }),
          openVerbPattern: () => set({ screen: "verbPattern" }),
          openSpeaking: () => set({ screen: "speakingList" }),
          openListening: () => set({ screen: "listeningList" }),
          openWriting: () => set({ screen: "writingList" }),
          openIdioms: () => set({ screen: "idioms" }),
          openExam: () => set({ screen: "examList" }),
          openGoals: () => set({ screen: "goals" }),
          openCrossword: () => set({ screen: "crosswordList" }),
          openFamily: () => set({ screen: "family" }),
          levelUp: () => {
            const i = LEVELS.findIndex((lv) => lv.id === getPreferredLevel(state.profileName));
            const nextLevel = LEVELS[i + 1];
            if (!nextLevel) return;
            showConfirmModal({
              message: `${shortLevelLabel(nextLevel)} 단계로 올라갈까요? 오늘의 학습과 "오늘 할 일"이 새 단계에 맞춰져요. 설정에서 언제든 바꿀 수 있어요.`,
              confirmText: "올라가기",
              cancelText: "나중에",
              onConfirm: () => {
                setPreferredLevel(state.profileName, nextLevel.id);
                set({});
                showToast(`<span class="toast-emoji">🚀</span><span>${shortLevelLabel(nextLevel)} 단계 시작!</span>`);
              },
            });
          },
          openPractice: () => set({ screen: "practiceList" }),
          openPicture: () => set({ screen: "pictureList" }),
          openStickers: () => set({ screen: "stickers" }),
          startPicture,
          startMemory,
          openSpelling: () => set({ screen: "spellingList" }),
          openShop: () => set({ screen: "shop" }),
          openStories: () => set({ screen: "storyList" }),
          openTopics: () => set({ screen: "topicList" }),
          openNumbers: () => set({ screen: "numbersList" }),
          openSounds: () => set({ screen: "soundsList" }),
          openDiary: () => set({ screen: "diaryList" }),
          openSpeed: () => set({ screen: "speedList" }),
          openBattle: openBattleSetup,
          startWeekly,
          refresh: () => set({}),
          openNext: openNextStep,
          openAffixes: () => set({ screen: "affixes" }),
          openReadingPractice: () => set({ readingMode: "read", screen: "readingList" }),
          openGrammar: () => set({ screen: "grammarList" }),
          openChunks: () => set({ screen: "chunkIntro" }),
          openReadingQuiz: () => set({ readingMode: "quiz", screen: "readingList" }),
        },
      }),

    vocab: () =>
      renderVocabScreen(root, {
        profileName: state.profileName,
        view: { tab: state.vocabTab },
        actions: {
          back: goHome,
          setTab: (vocabTab) => set({ vocabTab }),
          study: startVocabSession,
        },
      }),

    vocabSession: () =>
      renderFlashcardScreen(root, {
        session: state.vocabSession,
        profileName: state.profileName,
        actions: {
          flip: flipCard,
          answer: answerCard,
          quit: () => set({ screen: "vocab" }),
        },
      }),

    vocabSummary: () =>
      renderVocabSummaryScreen(root, {
        session: state.vocabSession,
        profileName: state.profileName,
        actions: {
          more: () => startVocabSession(state.vocabSession.source),
          toVocab: () => set({ screen: "vocab" }),
          home: goHome,
        },
      }),

    level: () =>
      renderLevelScreen(root, {
        profileName: state.profileName,
        wordMode: state.wordMode,
        selectLevel: startWordQuiz,
        backToHome: goHome,
        startReview: startWordReview,
        setMode: (wordMode) => set({ wordMode }),
      }),

    quiz: () => {
      const question = state.questions[state.currentIndex];
      const level = state.mode === "normal" ? levelById(state.levelId) : null;
      const quit = () => set({ screen: "level" });

      if (state.wordMode === "choice") {
        renderQuizScreen(root, {
          question,
          index: state.currentIndex,
          total: state.questions.length,
          score: currentScore(),
          levelColor: level?.color,
          levelColorDark: level?.colorDark,
          actions: {
            quitQuiz: quit,
            useHint: (type) => {
              if (question.selectedAnswer !== null) return;
              question[`${type}HintUsed`] = true;
              set({});
            },
            selectAnswer: (choice) => {
              if (question.selectedAnswer !== null) return;
              question.selectedAnswer = choice;
              recordWordAnswer(question, choice === question.correctAnswer);
              set({});
            },
            nextQuestion: nextWordQuestion,
          },
        });
        return;
      }

      renderTypingQuizScreen(root, {
        mode: state.wordMode,
        question,
        index: state.currentIndex,
        total: state.questions.length,
        score: currentScore(),
        level,
        actions: {
          quit,
          submit: (typed, isCorrect) => {
            if (question.selectedAnswer !== null) return;
            question.typedAnswer = typed;
            question.selectedAnswer = isCorrect ? question.correctAnswer : typed;
            recordWordAnswer(question, isCorrect);
            set({});
          },
          next: nextWordQuestion,
        },
      });
    },

    result: () => {
      const level = levelById(state.levelId);
      const levelIndex = LEVELS.findIndex((lv) => lv.id === state.levelId);
      renderResultScreen(root, {
        score: currentScore(),
        questions: state.questions,
        levelLabel: level ? level.label : "",
        modeTitle: WORD_MODES[state.wordMode].title,
        profileName: state.profileName,
        isNewBest: state.isNewBest,
        isReview: state.mode === "review",
        nextLevel: levelIndex >= 0 ? LEVELS[levelIndex + 1] || null : null,
        levelColor: state.mode === "normal" ? level?.color : null,
        actions: {
          playAgain: () =>
            set({
              questions: state.mode === "review" ? buildReviewQuestions(getWrongWords(state.profileName)) : buildQuestions(state.levelId),
              currentIndex: 0,
              screen: "quiz",
            }),
          changeLevel: () => set({ screen: "level" }),
          goHome,
          selectLevel: startWordQuiz,
          startReview: startWordReview,
        },
      });
    },

    grammarList: () =>
      renderGrammarListScreen(root, {
        profileName: state.profileName,
        startQuiz: startGrammarQuiz,
        startReview: startGrammarReview,
        backToHome: () => set({ screen: "grammarNotes" }),
      }),

    grammarNotes: () =>
      renderGrammarNotesScreen(root, {
        profileName: state.profileName,
        openNote: (topicId) => set({ grammarTopicId: topicId, screen: "grammarNote" }),
        openBasic: startBasic,
        back: goHome,
        openQuiz: () => set({ screen: "grammarList" }),
      }),

    basicLesson: () => renderBasicLessonScreen(root, { session: state.basic, actions: basicActions }),

    phonics: () =>
      renderLessonListScreen(root, {
        profileName: state.profileName,
        title: "🔤 파닉스",
        subtitle: "글자와 소리 연결하기",
        help: "글자가 내는 소리를 배우면 처음 보는 단어도 읽을 수 있어요. 문제를 열면 소리가 나와요. 위에서부터 차례로 해 봐요.",
        groups: PHONICS_GROUPS,
        topics: PHONICS_TOPICS,
        openLesson: startBasic,
        back: goHome,
      }),

    talk: () =>
      renderLessonListScreen(root, {
        profileName: state.profileName,
        title: "💬 대화 표현",
        subtitle: "교과서에 나오는 상황별 말하기",
        help: "예문을 누르면 영어로 들려줘요. 따라 말해 보고, 친구나 가족과 역할을 바꿔 가며 말해 봐요.",
        groups: TALK_GROUPS,
        topics: TALK_TOPICS,
        groupLevels: TALK_GROUP_LEVELS,
        openLesson: startBasic,
        back: goHome,
      }),

    pictureList: () => renderPictureQuizListScreen(root, { profileName: state.profileName, start: startPicture, back: goHome }),
    memory: () => renderMemoryScreen(root, { game: state.memory, actions: memoryActions }),
    spellingList: () => renderSpellingListScreen(root, { profileName: state.profileName, start: startSpelling, back: goHome }),
    spelling: () => renderSpellingScreen(root, { game: state.spelling, actions: spellingActions }),
    stickers: () => renderStickerScreen(root, { profileName: state.profileName, back: goHome }),

    topicList: () => renderTopicListScreen(root, { profileName: state.profileName, open: (topicId) => set({ topicId, screen: "topicView" }), back: goHome }),
    topicView: () => renderTopicViewScreen(root, { topicId: state.topicId, startQuiz: () => startTopicQuiz(state.topicId), back: () => set({ screen: "topicList" }) }),
    numbersList: () => renderNumbersListScreen(root, { profileName: state.profileName, start: startNumbers, back: goHome }),
    soundsList: () => renderSoundsListScreen(root, { profileName: state.profileName, start: startSounds, back: goHome }),
    speedList: () => renderSpeedListScreen(root, { profileName: state.profileName, start: startSpeed, back: goHome }),
    speed: () => renderSpeedScreen(root, { game: state.speed, actions: speedActions }),
    battleSetup: () =>
      renderBattleSetupScreen(root, {
        profileName: state.profileName,
        picked: state.battlePick || [],
        toggle: (name) => {
          const picked = state.battlePick || [];
          set({ battlePick: picked.includes(name) ? picked.filter((n) => n !== name) : [...picked, name].slice(-2) });
        },
        start: () => set({ battle: buildBattle(state.battlePick), screen: "battle" }),
        back: goHome,
      }),
    battle: () => renderBattleScreen(root, { battle: state.battle, actions: battleActions }),
    storyList: () => renderStoryListScreen(root, { profileName: state.profileName, open: openStoryChapter, back: goHome }),
    storyRead: () =>
      renderPassageScreen(root, {
        profileName: state.profileName,
        passage: findStoryChapter(state.storyChapterId).chapter,
        startQuiz: () => startStoryQuiz(state.storyChapterId),
        backToList: () => set({ screen: "storyList" }),
        goHome,
      }),
    diaryList: () =>
      renderDiaryListScreen(root, {
        profileName: state.profileName,
        write: (tplId) => set({ diaryDraft: { tplId, picks: findDiaryTemplate(tplId).lines.map(() => null) }, screen: "diaryWrite" }),
        back: goHome,
      }),
    diaryWrite: () => renderDiaryWriteScreen(root, { draft: state.diaryDraft, actions: diaryActions }),
    shop: () =>
      renderShopScreen(root, {
        profileName: state.profileName,
        actions: {
          back: goHome,
          tap: (itemId) => {
            if (shopStatus(state.profileName).owned.includes(itemId)) toggleShopEquip(state.profileName, itemId);
            else if (buyShopItem(state.profileName, itemId)) {
              burstConfetti(30);
              playSound("badge");
              showToast(`<span class="toast-emoji">${shopItem(itemId).emoji}</span><span>${shopItem(itemId).name} 샀어요!</span>`);
            }
            set({});
          },
        },
      }),

    practiceList: () => renderPracticeListScreen(root, { profileName: state.profileName, startRoleplay, startEmail, back: goHome }),
    roleplay: () => renderRoleplayScreen(root, { session: state.roleplay, actions: roleplayActions }),
    roleplayResult: () => {
      const { roleplay } = state;
      const rp = findRoleplay(roleplay.id);
      const i = ROLEPLAYS.indexOf(rp);
      const next = ROLEPLAYS[i + 1];
      renderScoreResultScreen(root, {
        subtitle: `${state.profileName}님 · ${rp.emoji} ${rp.title}`,
        correct: roleplay.items.filter((it) => it.firstTry).length,
        total: rp.turns.length,
        level: levelById("adult"),
        isNewBest: roleplay.isNewBest,
        rows: rp.turns.map((t, k) => ({ html: `${t.them}<br>→ <b>${t.choices[t.answer]}</b>`, ok: !!roleplay.items[k].firstTry })),
        actions: [
          { label: "🔁 다시 하기", primary: true, onClick: () => startRoleplay(rp.id) },
          ...(next ? [{ label: `다음 상황: ${next.emoji} ${next.title}`, onClick: () => startRoleplay(next.id) }] : []),
          { label: "실전 연습 목록", onClick: () => set({ screen: "practiceList" }) },
          { label: "🏠 홈으로", onClick: goHome },
        ],
      });
    },

    family: () => renderFamilyScreen(root, { openMember: (name) => set({ profileName: name, screen: "home" }), back: goHome }),

    crosswordList: () => renderCrosswordListScreen(root, { profileName: state.profileName, start: startCrossword, back: goHome }),
    crossword: () => renderCrosswordScreen(root, { puzzle: state.crossword, actions: crosswordActions }),

    goals: () => renderGoalsScreen(root, { profileName: state.profileName, back: goHome }),

    examList: () => renderExamListScreen(root, { profileName: state.profileName, start: startExam, back: goHome }),

    idioms: () => renderWordPartsScreen(root, { profileName: state.profileName, config: IDIOM_SCREEN, startTest: startIdiomTest, back: goHome }),
    affixes: () => renderWordPartsScreen(root, { profileName: state.profileName, config: AFFIX_SCREEN, startTest: startAffixTest, back: goHome }),

    writingList: () => renderWritingListScreen(root, { profileName: state.profileName, start: startWriting, back: goHome }),

    writingSession: () =>
      renderWritingSessionScreen(root, {
        session: state.writing,
        grade: BASIC_GRADES.find((g) => g.id === state.writing.gradeId),
        actions: writingActions,
      }),

    writingResult: () => {
      const { writing } = state;
      const grade = BASIC_GRADES.find((g) => g.id === writing.gradeId);
      renderScoreResultScreen(root, {
        subtitle: `${state.profileName}님 · ✍️ ${grade.label} · ${writing.mode === "order" ? "단어 배열" : "직접 쓰기"}`,
        correct: writing.items.filter((it) => it.firstTry).length,
        total: writing.items.length,
        level: levelById(grade.levelId),
        isNewBest: writing.isNewBest,
        rows: writing.items.map((it) => ({ html: `${it.en} <small>${it.ko}</small>`, ok: !!it.firstTry })),
        actions: [
          { label: "🔁 다시 하기", primary: true, onClick: () => startWriting(writing.gradeId, writing.mode) },
          ...(writing.mode === "order" ? [{ label: "⌨️ 직접 쓰기로 도전", onClick: () => startWriting(writing.gradeId, "type") }] : []),
          { label: "다른 학년 고르기", onClick: () => set({ screen: "writingList" }) },
          { label: "홈으로", onClick: goHome },
        ],
      });
    },

    listeningList: () => renderListeningListScreen(root, { profileName: state.profileName, start: startListening, back: goHome }),

    speakingList: () => renderSpeakingListScreen(root, { profileName: state.profileName, start: startSpeaking, back: goHome }),

    speakingSession: () =>
      renderSpeakingSessionScreen(root, {
        session: state.speaking,
        group: TALK_GROUPS.find((g) => g.id === state.speaking.groupId),
        actions: speakingActions,
      }),

    speakingResult: () => {
      const { speaking } = state;
      const group = TALK_GROUPS.find((g) => g.id === speaking.groupId);
      renderScoreResultScreen(root, {
        subtitle: `${state.profileName}님 · 🎙️ ${group.label}`,
        correct: speaking.items.filter((it) => it.best >= SPEAKING_PASS).length,
        total: speaking.items.length,
        level: null,
        isNewBest: speaking.isNewBest,
        rows: speaking.items.map((it) => ({ html: `${it.en}${it.tries && SpeechRecognitionApi ? ` <small>(${Math.round(it.best * 100)}%)</small>` : ""}`, ok: it.best >= SPEAKING_PASS })),
        actions: [
          { label: "🔁 다시 하기", primary: true, onClick: () => startSpeaking(speaking.groupId) },
          { label: "다른 묶음 고르기", onClick: () => set({ screen: "speakingList" }) },
          { label: "홈으로", onClick: goHome },
        ],
      });
    },

    verbPattern: () => renderVerbPatternScreen(root, { profileName: state.profileName, startTest: startVerbPatternTest, back: goHome }),

    irregular: () => renderIrregularScreen(root, { profileName: state.profileName, startTest: startIrregularTest, back: goHome }),

    grammarNote: () =>
      renderGrammarNoteScreen(root, {
        profileName: state.profileName,
        topic: findGrammarTopic(state.grammarTopicId),
        actions: {
          back: () => set({ screen: "grammarNotes" }),
          home: goHome,
          goTopic: (topicId) => set({ grammarTopicId: topicId }),
          startQuiz: () => startGrammarQuiz(state.grammarTopicId),
        },
      }),

    readingList: () =>
      renderReadingListScreen(root, {
        profileName: state.profileName,
        mode: state.readingMode,
        setMode: (readingMode) => set({ readingMode }),
        openPassage: (passageId) => set({ passageId, screen: "passage" }),
        startQuiz: startReadingQuiz,
        backToHome: goHome,
      }),

    passage: () =>
      renderPassageScreen(root, {
        profileName: state.profileName,
        passage: findPassage(state.passageId),
        startQuiz: () => startReadingQuiz(state.passageId),
        backToList: () => set({ screen: "readingList" }),
        goHome,
      }),

    mcQuiz: () => {
      const { mc } = state;
      const info = mcSourceInfo(mc.source);
      const question = mc.questions[mc.index];
      renderMcQuizScreen(root, {
        question,
        index: mc.index,
        total: mc.questions.length,
        correctCount: mc.questions.filter((q) => q.selectedAnswer === q.correctAnswer).length,
        label: info.label,
        level: info.level,
        contextHtml: info.contextHtml,
        actions: {
          select: (choice) => selectMcAnswer(question, choice),
          next: nextMcQuestion,
          quit: () => set({ screen: info.quitTo }),
        },
      });
    },

    mcResult: () => {
      const { mc } = state;
      const info = mcSourceInfo(mc.source);
      const correct = mc.questions.filter((q) => q.selectedAnswer === q.correctAnswer).length;
      const { actions, reviewCta } = mcResultActions(mc.source, correct < mc.questions.length);
      renderScoreResultScreen(root, {
        subtitle: `${state.profileName}님 · ${info.label}${mc.source.type === "exam" ? `<br><b>${Math.round((correct / mc.questions.length) * 100)}점</b> · ${examAreaReport(mc.questions)}` : ""}`,
        correct,
        total: mc.questions.length,
        level: info.level,
        isNewBest: mc.isNewBest,
        rows: mc.questions.map((q) => ({ html: q.summary, ok: q.selectedAnswer === q.correctAnswer })),
        reviewCta,
        actions,
      });
    },

    chunkIntro: () =>
      renderChunkIntroScreen(root, {
        profileName: state.profileName,
        startSet: startChunkSet,
        backToHome: goHome,
      }),

    chunkSession: () => {
      const { chunk } = state;
      renderChunkSessionScreen(root, {
        set: findChunkSet(chunk.setId),
        item: chunk.items[chunk.index],
        index: chunk.index,
        total: chunk.items.length,
        correctCount: chunk.items.filter((it) => it.step >= CHUNK_STEPS.length && it.mistakes === 0).length,
        actions: {
          tapChunk,
          next: nextChunk,
          quit: () => set({ screen: "chunkIntro" }),
        },
      });
    },

    chunkResult: () => {
      const { chunk } = state;
      const chunkSet = findChunkSet(chunk.setId);
      renderScoreResultScreen(root, {
        subtitle: `${state.profileName}님 · ✂️ 끊어 읽기 ${chunkSet.title}`,
        correct: chunk.items.filter((it) => it.mistakes === 0).length,
        total: chunk.items.length,
        level: levelById(chunkSet.levelId),
        isNewBest: chunk.isNewBest,
        rows: chunk.items.map((it) => ({ html: it.sentence.chunks.map((c) => c.en).join(" / "), ok: it.mistakes === 0 })),
        actions: [
          { label: "🔁 다시 하기", primary: true, onClick: () => startChunkSet(chunk.setId) },
          { label: "다른 단계 고르기", onClick: () => set({ screen: "chunkIntro" }) },
          { label: "홈으로", onClick: goHome },
        ],
      });
    },
  };

  screens[state.screen]();
  renderTabBar(state);
}

// ── 하단 탭 바: 홈 · 복습 · 목표 · 기록 · 설정 사이를 어디서든 한 번에 오간다 ──
const TAB_ITEMS = [
  { screen: "home", emoji: "🏠", label: "홈" },
  { screen: "wrongNote", emoji: "🔁", label: "복습" },
  { screen: "goals", emoji: "🎯", label: "목표" },
  { screen: "report", emoji: "📊", label: "기록" },
  { screen: "settings", emoji: "⚙️", label: "설정" },
];

function renderTabBar(state) {
  const show = !!state.profileName && TAB_ITEMS.some((t) => t.screen === state.screen);
  root.classList.toggle("with-tabbar", show);
  if (!show) return;
  const wrong = getWrongWords(state.profileName).length + getGrammarWrongIds(state.profileName).length + getDrillWrongEntries(state.profileName).length;
  const goal = goalSummary(state.profileName);
  const badge = (t) => {
    if (t.screen === "wrongNote" && wrong > 0) return `<span class="tab-badge">${wrong > 99 ? "99+" : wrong}</span>`;
    if (t.screen === "goals" && goal.total) return `<span class="tab-badge${goal.done === goal.total ? " tab-badge--ok" : ""}">${goal.done}/${goal.total}</span>`;
    return "";
  };
  root.insertAdjacentHTML(
    "beforeend",
    `<nav class="tab-bar" aria-label="주요 메뉴">
      ${TAB_ITEMS.map(
        (t) => `<button class="tab-item${t.screen === state.screen ? " active" : ""}" data-tab-screen="${t.screen}" ${t.screen === state.screen ? 'aria-current="page"' : ""}>
          <span class="tab-emoji" aria-hidden="true">${t.emoji}</span><span class="tab-label">${t.label}</span>${badge(t)}
        </button>`
      ).join("")}
    </nav>`
  );
  root.querySelectorAll("[data-tab-screen]").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.tabScreen !== store.getState().screen) set({ screen: b.dataset.tabScreen });
    })
  );
}

applyTextScale(getTextScale());
applyTheme(getSettings().theme);
registerServiceWorker();
const resumedAfterUpdate = restoreAfterUpdate();
store.subscribe(render);
render();
if (resumedAfterUpdate) showToast(`<span class="toast-emoji">✨</span><span>새 버전으로 업데이트했어요</span>`);
