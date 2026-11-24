const GRAMMAR_REVIEW_LIMIT = 10;

function findGrammarTopic(topicId) {
  return GRAMMAR_TOPICS.find((t) => t.id === topicId) || null;
}

function toGrammarQuestion(topic, index) {
  const raw = topic.questions[index];
  const correctAnswer = raw.choices[raw.answer];
  const hasBlank = raw.q.includes("___");
  return {
    id: `${topic.id}-${index}`,
    kind: "grammar",
    topicId: topic.id,
    label: "빈칸이나 질문에 알맞은 답을 고르세요",
    q: raw.q,
    ko: raw.ko || null,
    choices: shuffle(raw.choices),
    correctAnswer,
    explain: raw.explain,
    summary: withBlank(raw.q, correctAnswer),
    listenText: hasBlank ? raw.q.replace("___", correctAnswer) : null,
    selectedAnswer: null,
  };
}

function buildGrammarQuestions(topicId) {
  const topic = findGrammarTopic(topicId);
  if (!topic) return [];
  return shuffle(topic.questions.map((_, i) => toGrammarQuestion(topic, i)));
}

function grammarQuestionById(id) {
  const cut = id.lastIndexOf("-");
  const topic = findGrammarTopic(id.slice(0, cut));
  const index = Number(id.slice(cut + 1));
  return topic && topic.questions[index] ? toGrammarQuestion(topic, index) : null;
}

function buildGrammarReviewQuestions(questionIds) {
  return shuffle(questionIds).slice(0, GRAMMAR_REVIEW_LIMIT).map(grammarQuestionById).filter(Boolean);
}

function buildReadingQuestions(passage) {
  return passage.questions.map((raw, i) => ({
    id: `${passage.id}-${i}`,
    kind: "reading",
    label: "지문을 읽고 알맞은 답을 고르세요",
    q: raw.q,
    ko: null,
    choices: shuffle(raw.choices),
    correctAnswer: raw.choices[raw.answer],
    explain: raw.explain,
    summary: raw.q,
    listenText: null,
    selectedAnswer: null,
  }));
}

const DAILY_WORDS = 5;
const DAILY_GRAMMAR = 3;

// 오늘의 학습: 단어 5문제 + 문법 3문제.
// 단어는 오답노트 → 단어장 오늘 복습 → 내 단계의 새 단어 순서로 채운다.
function buildDailyQuestions(profileName) {
  const levelId = getPreferredLevel(profileName) || getLastWordLevel(profileName) || LEVELS[0].id;
  const vocab = getVocabEntries(profileName);
  const picked = [];
  const used = new Set();
  const take = (id, wordLevelId) => {
    if (picked.length >= DAILY_WORDS || used.has(id) || !findWordById(id)) return;
    used.add(id);
    picked.push(wordToMcQuestion(findWordById(id), wordLevelId));
  };
  shuffle(getWrongWords(profileName)).slice(0, 2).forEach((ref) => take(ref.id, ref.levelId));
  shuffle(getDueVocabIds(profileName)).forEach((id) => take(id, vocab[id].levelId));
  shuffle(WORD_BANK[levelId]).forEach((w) => take(w.id, levelId));
  // 문법은 내 단계에 맞춰 기초 문법 · 불규칙 동사 · to/-ing · 독해 문법에서 고른다 (js/drill.js).
  return shuffle([...picked, ...buildDailyGrammarQuestions(profileName, levelId, DAILY_GRAMMAR)]);
}
