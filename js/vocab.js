const VOCAB_SESSION_SIZE = 10;
const VOCAB_REVIEW_LIMIT = 20;

// 단어장 카드 한 장. 기본 단어장 단어와 지문에서 추가한 단어를 같은 모양으로 맞춘다.
function vocabCard(profileName, id) {
  const bank = findWordById(id);
  if (bank) {
    const levelId = LEVELS.find((lv) => (WORD_BANK[lv.id] || []).includes(bank))?.id;
    return { ...bank, levelId, custom: false };
  }
  const custom = getCustomWords(profileName)[id];
  if (!custom) return null;
  return {
    id,
    word: custom.word,
    ipa: "",
    meaningKo: custom.meaningKo,
    emoji: "📖",
    desc: custom.sourceTitle ? `'${custom.sourceTitle}' 지문에서 추가한 단어예요.` : "",
    examples: custom.sentence ? [{ en: custom.sentence, ko: custom.sentenceKo || "" }] : [],
    levelId: custom.levelId,
    custom: true,
  };
}

// source: { type: "review" } | { type: "level", levelId } | { type: "starred" }
function buildVocabSession(profileName, source) {
  const entries = getVocabEntries(profileName);
  const today = dateKey();
  let ids;
  if (source.type === "review") {
    ids = shuffle(getDueVocabIds(profileName)).slice(0, VOCAB_REVIEW_LIMIT);
  } else if (source.type === "starred") {
    ids = shuffle(getStarredIds(profileName)).slice(0, VOCAB_REVIEW_LIMIT);
  } else {
    const pool = WORD_BANK[source.levelId] || [];
    const due = shuffle(pool.filter((w) => entries[w.id] && entries[w.id].due <= today).map((w) => w.id));
    const fresh = shuffle(pool.filter((w) => !entries[w.id]).map((w) => w.id));
    ids = [...due, ...fresh].slice(0, VOCAB_SESSION_SIZE);
  }
  return ids.map((id) => vocabCard(profileName, id)).filter(Boolean);
}

function vocabBoxLabel(entry) {
  if (!entry) return { label: "새 단어", cls: "new" };
  if (entry.box >= VOCAB_MASTERED_BOX) return { label: "외웠어요", cls: "mastered" };
  if (entry.box === 0) return { label: "헷갈려요", cls: "unsure" };
  return { label: "익히는 중", cls: "learning" };
}

function vocabSessionTitle(source) {
  if (source.type === "review") return "🔁 오늘의 복습";
  if (source.type === "starred") return "⭐ 즐겨찾기";
  const level = levelById(source.levelId);
  return `${level.emoji} ${shortLevelLabel(level)}`;
}

// 지문의 단어를 단어장에 넣는다. 기본 단어장에 같은 단어가 있으면 그 단어(발음·예문 포함)를 쓴다.
function addGlossToVocab(profileName, passage, glossIndex) {
  const g = passage.glossary[glossIndex];
  const lower = g.w.toLowerCase();
  for (const level of LEVELS) {
    const match = (WORD_BANK[level.id] || []).find((w) => w.word.toLowerCase() === lower);
    if (match) {
      const entry = getVocabEntries(profileName)[match.id];
      if (!entry) recordVocabReview(profileName, match.id, level.id, false);
      return { id: match.id, word: match.word };
    }
  }
  const sentence = passage.sentences.find((s) => new RegExp(`\\b${escapeRegExp(g.w)}\\b`, "i").test(s.en));
  const id = `c:${passage.id}:${glossIndex}`;
  addCustomWord(profileName, {
    id,
    word: g.w,
    meaningKo: g.ko,
    sentence: sentence?.en || "",
    sentenceKo: sentence?.ko || "",
    levelId: passage.levelId,
    sourceTitle: passage.title,
  });
  return { id, word: g.w };
}

function isGlossInVocab(profileName, passage, glossIndex) {
  const g = passage.glossary[glossIndex];
  const entries = getVocabEntries(profileName);
  if (entries[`c:${passage.id}:${glossIndex}`]) return true;
  const lower = g.w.toLowerCase();
  return LEVELS.some((lv) => (WORD_BANK[lv.id] || []).some((w) => w.word.toLowerCase() === lower && entries[w.id]));
}
