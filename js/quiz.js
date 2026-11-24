
const QUESTIONS_PER_GAME = 10;
const POINTS_PER_QUESTION = 10;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function toQuestion(wordData, pool, levelId) {
  const distractorPool = pool.filter((w) => w.id !== wordData.id);
  const distractorWords = shuffle(distractorPool).slice(0, 3);
  const choiceMeta = shuffle([
    { word: wordData.word, meaningKo: wordData.meaningKo, isCorrect: true },
    ...distractorWords.map((w) => ({ word: w.word, meaningKo: w.meaningKo, isCorrect: false })),
  ]);
  const choices = choiceMeta.map((c) => c.word);

  return {
    data: wordData,
    levelId,
    choices,
    choiceMeta,
    correctAnswer: wordData.word,
    pictureHintUsed: false,
    descHintUsed: false,
    letterHintUsed: false,
    selectedAnswer: null,
  };
}

function letterHintPattern(word) {
  return word
    .split("")
    .map((ch, i) => (i === 0 ? ch : ch === " " ? " " : "_"))
    .join(" ");
}

function buildQuestions(levelId) {
  const pool = WORD_BANK[levelId] || [];
  const picked = shuffle(pool).slice(0, QUESTIONS_PER_GAME);
  return picked.map((wordData) => toQuestion(wordData, pool, levelId));
}

let wordIndex = null;

function getWordIndex() {
  if (wordIndex) return wordIndex;
  wordIndex = new Map();
  for (const level of LEVELS) {
    for (const wordData of WORD_BANK[level.id] || []) {
      wordIndex.set(wordData.id, wordData);
    }
  }
  return wordIndex;
}

function findWordById(id) {
  return getWordIndex().get(id) || null;
}

function buildReviewQuestions(wrongWordRefs) {
  const picked = shuffle(wrongWordRefs).slice(0, QUESTIONS_PER_GAME);
  return picked
    .map((ref) => {
      const wordData = findWordById(ref.id);
      if (!wordData) return null;
      const pool = WORD_BANK[ref.levelId] || [wordData];
      return toQuestion(wordData, pool, ref.levelId);
    })
    .filter(Boolean);
}

function scoreFromCorrectCount(correctCount) {
  return correctCount * POINTS_PER_QUESTION;
}

function normalizeTyped(text) {
  return text.toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?,]+$/, "").trim();
}

function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return dp[a.length][b.length];
}

// 단어 문제를 문법·독해와 같은 4지선다 형식으로 바꾼다 (오늘의 학습용).
function wordToMcQuestion(wordData, levelId) {
  const base = toQuestion(wordData, WORD_BANK[levelId] || [wordData], levelId);
  const ex = wordData.examples[0];
  return {
    id: wordData.id,
    kind: "word",
    levelId,
    label: "이 뜻을 가진 영어 단어는 무엇일까요?",
    q: wordData.meaningKo,
    big: true,
    ko: null,
    choices: base.choices,
    correctAnswer: wordData.word,
    explain: `<b>${wordData.word}</b> ${wordData.ipa} · ${wordData.meaningKo}<br>예) ${ex.en} — ${ex.ko}`,
    summary: `<b>${wordData.word}</b> · ${wordData.meaningKo}`,
    listenText: wordData.word,
    selectedAnswer: null,
  };
}
