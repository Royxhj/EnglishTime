const STORAGE_KEY = "englishword:profiles";
const FAMILY_KEY = "englishword:family";
const SETTINGS_KEY = "englishword:settings";
const ACTIVITY_KEEP_DAYS = 60;
// 오답은 연속으로 이 횟수만큼 맞혀야 오답노트에서 빠진다.
const WRONG_CLEAR_STREAK = 2;

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable (private mode, etc.) — fail silently
  }
}

// 화면 하나를 그릴 때도 기록을 수십 번 조회하므로, 한 번 읽은 기록을 메모리에 두고 저장할 때 함께 갱신한다.
let profilesCache = null;

function readAll() {
  if (!profilesCache) profilesCache = readJson(STORAGE_KEY, {});
  return profilesCache;
}

function writeAll(data) {
  profilesCache = data;
  writeJson(STORAGE_KEY, data);
}

// 같은 기기의 다른 탭에서 기록이 바뀌면 다시 읽는다.
window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY || e.key === null) profilesCache = null;
});

function dateKey(date = new Date()) {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${m}-${d}`;
}

function daysAgoKey(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return dateKey(d);
}

function daysFromTodayKey(days) {
  return daysAgoKey(-days);
}

// ── 가족 구성 (이 기기에만 저장. 코드에는 가족 정보를 두지 않는다) ──
const RESTORED_EMOJIS = ["🧑", "👩", "🧒", "👦", "👧", "👴", "👵", "👶"];
const RESTORED_COLORS = ["#4d96ff", "#ff6b81", "#ffb703", "#38b26b", "#8338ec", "#16a3a3", "#ff8b3d", "#3a5a78"];

function getFamily() {
  const family = readJson(FAMILY_KEY, null);
  if (Array.isArray(family)) return family;
  // 가족 목록이 따로 저장되기 전부터 쓰던 기기: 학습 기록이 있는 이름으로 목록을 되살린다.
  const restored = Object.keys(readAll()).map((name, i) => ({
    name,
    emoji: RESTORED_EMOJIS[i % RESTORED_EMOJIS.length],
    color: RESTORED_COLORS[i % RESTORED_COLORS.length],
  }));
  if (restored.length > 0) writeJson(FAMILY_KEY, restored);
  return restored;
}

function findMember(name) {
  return getFamily().find((m) => m.name === name) || null;
}

function addFamilyMember(member) {
  writeJson(FAMILY_KEY, [...getFamily(), member]);
}

// 기록은 이름을 키로 저장되므로, 이름을 바꾸면 기록도 새 이름으로 옮긴다.
function updateFamilyMember(oldName, member) {
  writeJson(FAMILY_KEY, getFamily().map((m) => (m.name === oldName ? member : m)));
  if (oldName !== member.name) {
    const all = readAll();
    if (all[oldName]) {
      all[member.name] = all[oldName];
      delete all[oldName];
      writeAll(all);
    }
  }
}

function removeFamilyMember(name) {
  writeJson(FAMILY_KEY, getFamily().filter((m) => m.name !== name));
  const all = readAll();
  delete all[name];
  writeAll(all);
}

// ── 기기 설정 ──
function getSettings() {
  return { sound: true, vibrate: false, theme: "auto", cardDirection: "en-ko", voice: "auto", speechRate: "normal", ...readJson(SETTINGS_KEY, {}) };
}

function updateSettings(patch) {
  writeJson(SETTINGS_KEY, { ...getSettings(), ...patch });
}

// ── 프로필 기록 ──
function normalizeProfile(profile) {
  const p = profile || {};
  p.history ||= [];
  p.bestByLevel ||= {};
  p.wrongWords ||= {};
  p.activity ||= {};
  p.daily ||= {};
  p.badges ||= {};
  p.totalAnswered ||= 0;
  p.bestStreak ||= 0;
  p.bestDay ||= 0;
  p.vocab ||= {};
  p.starred ||= {};
  p.customWords ||= {};
  p.readingRead ||= {};
  p.notesRead ||= {};
  p.wordSeen ||= {};
  if (!Array.isArray(p.diary)) p.diary = [];
  p.shop ||= {};
  p.shop.spent ||= 0;
  if (!Array.isArray(p.shop.owned)) p.shop.owned = [];
  p.shop.equip ||= {};
  if (!Array.isArray(p.perfectMonths)) p.perfectMonths = [];
  p.battleWins ||= 0;
  if (!Array.isArray(p.homePins)) p.homePins = [];
  for (const section of ["grammar", "reading", "chunks", "basics", "irregular", "verbPattern", "drill", "speaking", "listening", "writing", "idiom", "affix", "exam", "crossword", "roleplay", "email", "picture", "memory", "spelling", "weekly", "topic", "numbers", "sounds", "story", "speed", "wordchain", "bingo", "aloud", "wordsearch", "wordguess", "riddle", "sentdict"]) {
    p[section] ||= { best: {}, wrong: {} };
    p[section].best ||= {};
    p[section].wrong ||= {};
  }
  return p;
}

function getProfileData(profileName) {
  return normalizeProfile(readAll()[profileName]);
}

function updateProfile(profileName, mutate) {
  const all = readAll();
  const profile = normalizeProfile(all[profileName]);
  const result = mutate(profile);
  all[profileName] = profile;
  writeAll(all);
  return result;
}

function getPreferredLevel(profileName) {
  return getProfileData(profileName).preferredLevel || null;
}

function setPreferredLevel(profileName, levelId) {
  updateProfile(profileName, (profile) => {
    profile.preferredLevel = levelId;
  });
}

// ── 오답 (연속 정답 규칙) ──
function updateWrongEntry(entries, id, isCorrect, base) {
  const entry = entries[id];
  if (isCorrect) {
    if (!entry) return;
    const hits = (entry.hits || 0) + 1;
    if (hits >= WRONG_CLEAR_STREAK) delete entries[id];
    else entries[id] = { ...entry, hits, lastHit: dateKey() };
  } else {
    entries[id] = { ...base, hits: 0, missed: (entry?.missed || 0) + 1, lastMissed: dateKey(), lastHit: null };
  }
}

// 오답 복습 간격: 틀린 다음 날 → 한 번 맞히면 3일 뒤 → 또 맞히면 졸업
const WRONG_REVIEW_DAYS = [1, 3];

function daysSinceKey(key) {
  if (!key) return Infinity;
  return Math.round((new Date(dateKey()) - new Date(key)) / 86400000);
}

function isWrongDue(entry) {
  const last = entry.lastHit || entry.lastMissed;
  const wait = WRONG_REVIEW_DAYS[Math.min(entry.hits || 0, WRONG_REVIEW_DAYS.length - 1)];
  return daysSinceKey(last) >= wait;
}

// 오늘 복습할 때가 된 오답 (단어 · 문법 · 연습), 오래 기다린 것부터
function getDueWrongs(profileName) {
  const p = getProfileData(profileName);
  const sortOld = (list) => list.filter(isWrongDue).sort((a, b) => (a.lastHit || a.lastMissed || "").localeCompare(b.lastHit || b.lastMissed || ""));
  return {
    words: sortOld(Object.values(p.wrongWords)),
    grammar: sortOld(Object.entries(p.grammar.wrong).map(([id, v]) => (v === true ? { id, hits: 0 } : { ...v, id }))),
    drill: sortOld(Object.values(p.drill.wrong)),
  };
}

// 최근 2주 동안 문제나 카드로 본 단어 (주간 단어 시험에 쓴다)
const WORD_SEEN_KEEP_DAYS = 14;

function markWordSeen(profile, wordId, levelId) {
  profile.wordSeen[wordId] = { levelId, date: dateKey() };
  const cutoff = daysAgoKey(WORD_SEEN_KEEP_DAYS);
  for (const [id, v] of Object.entries(profile.wordSeen)) if (!(v.date >= cutoff)) delete profile.wordSeen[id];
}

function getWordsSeen(profileName) {
  return Object.entries(getProfileData(profileName).wordSeen).map(([id, v]) => ({ id, ...v }));
}

function recordAnswerOutcome(profileName, wordId, levelId, isCorrect) {
  updateProfile(profileName, (profile) => {
    markWordSeen(profile, wordId, levelId);
    updateWrongEntry(profile.wrongWords, wordId, isCorrect, { id: wordId, levelId });
    // 퀴즈에서 틀린 단어는 단어장의 '헷갈려요' 단계로 보내 내일 다시 복습하게 한다.
    if (!isCorrect) profile.vocab[wordId] = { ...profile.vocab[wordId], levelId, box: 0, due: daysFromTodayKey(VOCAB_INTERVALS[0]) };
  });
}

function getWrongWords(profileName) {
  return Object.values(getProfileData(profileName).wrongWords);
}

function removeWrongWord(profileName, wordId) {
  updateProfile(profileName, (profile) => {
    delete profile.wrongWords[wordId];
  });
}

function recordGrammarAnswer(profileName, questionId, isCorrect) {
  updateProfile(profileName, (profile) => updateWrongEntry(profile.grammar.wrong, questionId, isCorrect, { id: questionId }));
}

function getGrammarWrongEntries(profileName) {
  const wrong = getProfileData(profileName).grammar.wrong;
  // 예전 형식(true)도 읽을 수 있게 맞춘다.
  return Object.entries(wrong).map(([id, v]) => (v === true ? { id, hits: 0 } : { ...v, id }));
}

function getGrammarWrongIds(profileName) {
  return getGrammarWrongEntries(profileName).map((e) => e.id);
}

function removeGrammarWrong(profileName, questionId) {
  updateProfile(profileName, (profile) => {
    delete profile.grammar.wrong[questionId];
  });
}

// 기초 문법 · 불규칙 동사 · to/-ing처럼 문제를 id로 다시 만들 수 있는 연습 문제 오답
function recordDrillAnswer(profileName, questionId, isCorrect) {
  updateProfile(profileName, (profile) => updateWrongEntry(profile.drill.wrong, questionId, isCorrect, { id: questionId }));
}

function getDrillWrongEntries(profileName) {
  return Object.values(getProfileData(profileName).drill.wrong);
}

function removeDrillWrong(profileName, questionId) {
  updateProfile(profileName, (profile) => {
    delete profile.drill.wrong[questionId];
  });
}

// ── 단어 퀴즈 점수 (mode: choice | spelling | dictation) ──
function bestKey(levelId, mode = "choice") {
  return mode === "choice" ? levelId : `${mode}:${levelId}`;
}

function recordResult(profileName, levelId, score, mode = "choice") {
  return updateProfile(profileName, (profile) => {
    profile.history.unshift({ date: dateKey(), level: levelId, mode, score });
    profile.history = profile.history.slice(0, 20);

    const key = bestKey(levelId, mode);
    const prevBest = profile.bestByLevel[key] || 0;
    const isNewBest = score > prevBest;
    if (isNewBest) profile.bestByLevel[key] = score;
    return { isNewBest, hadPriorAttempt: prevBest > 0 };
  });
}

function getBestScore(profileName, levelId, mode = "choice") {
  return getProfileData(profileName).bestByLevel[bestKey(levelId, mode)] || null;
}

function getOverallBest(profileName) {
  const best = getProfileData(profileName).bestByLevel;
  const values = Object.entries(best).filter(([key]) => !key.includes(":")).map(([, v]) => v);
  return values.length ? Math.max(...values) : null;
}

function getLastWordLevel(profileName) {
  return getProfileData(profileName).history[0]?.level || null;
}

// ── 문법 · 독해 · 끊어 읽기 (section별 정답률 최고 기록) ──
function recordSectionResult(profileName, section, id, correct, total) {
  return updateProfile(profileName, (profile) => {
    profile.lessonDay = dateKey(); // 홈 "오늘 할 일"의 '이어서 하기' 체크용
    const best = profile[section].best;
    const prev = best[id];
    const isNewBest = !prev || correct / total > prev.correct / prev.total;
    if (isNewBest) best[id] = { correct, total };
    // 첫 도전의 낮은 점수에는 "신기록" 축하를 띄우지 않는다.
    const hadPriorScore = !!prev && prev.correct > 0;
    return isNewBest && (hadPriorScore || correct / total >= 0.6);
  });
}

// 개수가 많을수록 좋은 기록 (스피드 퀴즈: 1분 동안 맞힌 수)
function recordBestCount(profileName, section, id, correct, total) {
  return updateProfile(profileName, (profile) => {
    profile.lessonDay = dateKey();
    const prev = profile[section].best[id];
    const isNewBest = correct > 0 && (!prev || correct > prev.correct);
    if (isNewBest) profile[section].best[id] = { correct, total };
    return isNewBest;
  });
}

// 단어 찾기: 단계별로 완성한 횟수를 센다 ({ correct: 횟수, total: 횟수 })
function recordWordSearchDone(profileName, levelId) {
  updateProfile(profileName, (profile) => {
    profile.lessonDay = dateKey();
    const n = (profile.wordsearch.best[levelId]?.total || 0) + 1;
    profile.wordsearch.best[levelId] = { correct: n, total: n };
  });
}

function getSectionBest(profileName, section, id) {
  return getProfileData(profileName)[section].best[id] || null;
}

// ── 학습 기록: 연속 학습일 · 주간 문제 수 · 오늘의 학습 ──
function streakFrom(activity) {
  let streak = 0;
  // 오늘 아직 안 했어도 어제까지 이어졌다면 연속 기록은 살아 있다.
  for (let i = activity[dateKey()] > 0 ? 0 : 1; activity[daysAgoKey(i)] > 0; i++) streak++;
  return streak;
}

// 개근한 달: 그달 모든 날에 공부 기록이 있으면 "YYYY-MM"을 남긴다 (지난달과, 오늘이 말일이면 이번 달)
function markPerfectMonths(profile) {
  const now = new Date();
  const check = (y, m) => {
    const id = `${y}-${String(m + 1).padStart(2, "0")}`;
    if (profile.perfectMonths.includes(id)) return;
    const days = new Date(y, m + 1, 0).getDate();
    for (let d = 1; d <= days; d++) if (!(profile.activity[dateKey(new Date(y, m, d))] > 0)) return;
    profile.perfectMonths.push(id);
  };
  const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  check(prev.getFullYear(), prev.getMonth());
  check(now.getFullYear(), now.getMonth());
}

function recordActivity(profileName) {
  updateProfile(profileName, (profile) => {
    const today = dateKey();
    profile.activity[today] = (profile.activity[today] || 0) + 1;
    profile.totalAnswered += 1;
    profile.bestDay = Math.max(profile.bestDay, profile.activity[today]);
    profile.bestStreak = Math.max(profile.bestStreak, streakFrom(profile.activity));
    markPerfectMonths(profile);
    const cutoff = daysAgoKey(ACTIVITY_KEEP_DAYS);
    for (const key of Object.keys(profile.activity)) {
      if (key < cutoff) delete profile.activity[key];
    }
  });
}

function getStats(profileName) {
  const { activity, daily } = getProfileData(profileName);
  let week = 0;
  for (let i = 0; i < 7; i++) week += activity[daysAgoKey(i)] || 0;
  return { today: activity[dateKey()] || 0, streak: streakFrom(activity), week, dailyToday: daily[dateKey()] || null };
}

// ── 이번 주 목표 (월요일~일요일) ──
function weekDateKeys() {
  const today = new Date();
  const sinceMonday = (today.getDay() + 6) % 7;
  return Array.from({ length: sinceMonday + 1 }, (_, i) => daysAgoKey(sinceMonday - i));
}

// 최근 n주(월~일) 기록. 오래된 주부터, 마지막이 이번 주.
function getWeeklyHistory(profileName, n = 4) {
  const { activity, daily } = getProfileData(profileName);
  const sinceMonday = (new Date().getDay() + 6) % 7;
  return Array.from({ length: n }, (_, i) => {
    const weeksAgo = n - 1 - i;
    const start = sinceMonday + weeksAgo * 7; // 그 주 월요일이 며칠 전인지
    const keys = Array.from({ length: weeksAgo === 0 ? sinceMonday + 1 : 7 }, (_, d) => daysAgoKey(start - d));
    return {
      weeksAgo,
      answers: keys.reduce((sum, k) => sum + (activity[k] || 0), 0),
      days: keys.filter((k) => activity[k] > 0).length,
      daily: keys.filter((k) => daily[k]).length,
    };
  });
}

function getWeekProgress(profileName) {
  const { activity, daily } = getProfileData(profileName);
  const keys = weekDateKeys();
  return {
    answers: keys.reduce((sum, k) => sum + (activity[k] || 0), 0),
    days: keys.filter((k) => activity[k] > 0).length,
    daily: keys.filter((k) => daily[k]).length,
  };
}

function getGoals(profileName) {
  const g = getProfileData(profileName).goals || {};
  return { counts: { answers: 0, days: 0, daily: 0, ...(g.counts || {}) }, tasks: g.tasks || [] };
}

function setGoals(profileName, goals) {
  updateProfile(profileName, (profile) => {
    profile.goals = goals;
  });
}

function getRecentActivity(profileName, days) {
  const { activity } = getProfileData(profileName);
  return Array.from({ length: days }, (_, i) => {
    const key = daysAgoKey(days - 1 - i);
    return { key, count: activity[key] || 0 };
  });
}

function recordDaily(profileName, correct, total) {
  updateProfile(profileName, (profile) => {
    const prev = profile.daily[dateKey()];
    if (!prev || correct > prev.correct) profile.daily[dateKey()] = { correct, total };
  });
}

// ── 단어장 (간격 반복) ──
// box 단계별 다음 복습까지의 날짜. 0단계(헷갈려요)는 내일, 5단계는 한 달 뒤.
const VOCAB_INTERVALS = [1, 1, 3, 7, 14, 30];
const VOCAB_MASTERED_BOX = 3;

function recordVocabReview(profileName, wordId, levelId, known) {
  updateProfile(profileName, (profile) => {
    const prev = profile.vocab[wordId];
    markWordSeen(profile, wordId, levelId);
    // 처음 보는데 이미 아는 단어는 바로 2단계(3일 뒤)로 보낸다.
    const box = known ? (prev ? Math.min(prev.box + 1, VOCAB_INTERVALS.length - 1) : 2) : 0;
    profile.vocab[wordId] = { levelId, box, due: daysFromTodayKey(VOCAB_INTERVALS[box]), seen: (prev?.seen || 0) + 1 };
  });
}

function getVocabEntries(profileName) {
  return getProfileData(profileName).vocab;
}

function getDueVocabIds(profileName) {
  const today = dateKey();
  return Object.entries(getVocabEntries(profileName))
    .filter(([, v]) => v.due <= today)
    .map(([id]) => id);
}

function getVocabStats(profileName) {
  const entries = Object.values(getVocabEntries(profileName));
  const today = dateKey();
  return {
    learned: entries.length,
    mastered: entries.filter((v) => v.box >= VOCAB_MASTERED_BOX).length,
    due: entries.filter((v) => v.due <= today).length,
  };
}

function toggleStar(profileName, wordId) {
  return updateProfile(profileName, (profile) => {
    if (profile.starred[wordId]) delete profile.starred[wordId];
    else profile.starred[wordId] = true;
    return !!profile.starred[wordId];
  });
}

function getStarredIds(profileName) {
  return Object.keys(getProfileData(profileName).starred);
}

// 지문에서 고른 단어 중 단어장에 없는 단어. 바로 오늘 복습 목록에 넣는다.
function addCustomWord(profileName, word) {
  updateProfile(profileName, (profile) => {
    profile.customWords[word.id] = word;
    profile.vocab[word.id] ||= { levelId: word.levelId, box: 0, due: dateKey(), seen: 0 };
  });
}

function getCustomWords(profileName) {
  return getProfileData(profileName).customWords;
}

function removeCustomWord(profileName, wordId) {
  updateProfile(profileName, (profile) => {
    delete profile.customWords[wordId];
    delete profile.vocab[wordId];
    delete profile.starred[wordId];
  });
}

// ── 읽기 연습 · 문법 노트 읽음 표시 ──
function markPassageRead(profileName, passageId) {
  updateProfile(profileName, (profile) => {
    profile.readingRead[passageId] ||= dateKey();
  });
}

function isPassageRead(profileName, passageId) {
  return !!getProfileData(profileName).readingRead[passageId];
}

function markNoteRead(profileName, topicId) {
  updateProfile(profileName, (profile) => {
    profile.notesRead[topicId] ||= dateKey();
  });
}

function isNoteRead(profileName, topicId) {
  return !!getProfileData(profileName).notesRead[topicId];
}

// ── 영어 일기 · 별 상점 ──
function saveDiary(profileName, entry) {
  updateProfile(profileName, (profile) => {
    profile.diary.unshift(entry);
    profile.diary = profile.diary.slice(0, DIARY_KEEP);
    profile.lessonDay = dateKey();
  });
}

function getDiaryEntries(profileName) {
  return getProfileData(profileName).diary.filter((e) => findDiaryTemplate(e.t));
}

// 별이 모자라거나 없는 물건이면 false
function buyShopItem(profileName, itemId) {
  const item = shopItem(itemId);
  if (!item || !shopItemUnlocked(profileName, item) || shopStatus(profileName).stars < item.price) return false;
  updateProfile(profileName, (profile) => {
    if (profile.shop.owned.includes(itemId)) return;
    profile.shop.spent += item.price;
    profile.shop.owned.push(itemId);
    profile.shop.equip[item.cat] = itemId;
  });
  return true;
}

function toggleShopEquip(profileName, itemId) {
  const item = shopItem(itemId);
  updateProfile(profileName, (profile) => {
    if (!item || !profile.shop.owned.includes(itemId)) return;
    if (profile.shop.equip[item.cat] === itemId) delete profile.shop.equip[item.cat];
    else profile.shop.equip[item.cat] = itemId;
  });
}

function recordBattleWin(profileName) {
  updateProfile(profileName, (profile) => {
    profile.battleWins += 1;
  });
}

// ⭐ 홈 '내 메뉴'에 고정한 타일 id (꾹 눌러 고정/해제)
const HOME_PIN_MAX = 8;
const isPinId = (id) => typeof id === "string" && /^[a-zA-Z]{2,30}Btn$/.test(id);
function getHomePins(profileName) {
  return getProfileData(profileName).homePins.filter(isPinId);
}

function toggleHomePin(profileName, id) {
  if (!isPinId(id)) return false;
  return updateProfile(profileName, (profile) => {
    if (profile.homePins.includes(id)) {
      profile.homePins = profile.homePins.filter((x) => x !== id);
      return false;
    }
    profile.homePins = [...profile.homePins, id].slice(-HOME_PIN_MAX);
    return true;
  });
}

function saveBadges(profileName, ids) {
  updateProfile(profileName, (profile) => {
    for (const id of ids) profile.badges[id] ||= dateKey();
  });
}

// ── 백업 ──
function exportBackup() {
  return {
    app: "englishword",
    version: 1,
    exportedAt: new Date().toISOString(),
    family: getFamily(),
    profiles: readAll(),
    settings: getSettings(),
  };
}

// 백업 파일은 외부에서 온 데이터라, 화면에 그대로 그려지는 글자에서 HTML 특수문자를 빼고 형식을 확인한다.
const cleanText = (value, max = 80) => String(value ?? "").replace(/[<>&"'`]/g, "").trim().slice(0, max);
const cleanColor = (value) => (/^#[0-9a-f]{3,8}$/i.test(value) ? value : RESTORED_COLORS[0]);
const SETTING_CHOICES = { theme: ["auto", "light", "dark"], cardDirection: ["en-ko", "ko-en"], voice: ["auto", "female", "male"], speechRate: ["slow", "normal", "fast"] };

function cleanCustomWords(words) {
  const out = {};
  for (const [id, w] of Object.entries(words || {})) {
    if (!/^c:[\w-]+:\d+$/.test(id) || !w) continue;
    out[id] = {
      id,
      word: cleanText(w.word, 40),
      meaningKo: cleanText(w.meaningKo, 60),
      sentence: cleanText(w.sentence, 300),
      sentenceKo: cleanText(w.sentenceKo, 300),
      levelId: levelById(w.levelId) ? w.levelId : LEVELS[0].id,
      sourceTitle: cleanText(w.sourceTitle, 40),
    };
  }
  return out;
}

function importBackup(data) {
  if (!data || data.app !== "englishword" || typeof data.profiles !== "object" || data.profiles === null || !Array.isArray(data.family)) {
    throw new Error("이 앱의 백업 파일이 아니에요.");
  }
  const renamed = {};
  const family = [];
  for (const m of data.family) {
    const name = cleanText(m?.name, 8);
    if (!name || family.some((f) => f.name === name)) continue;
    renamed[m.name] = name;
    family.push({ name, emoji: cleanText(m.emoji, 8) || RESTORED_EMOJIS[0], color: cleanColor(m.color) });
  }

  const profiles = {};
  const taskIds = new Set(goalTaskCatalog().map((t) => t.id));
  for (const [key, profile] of Object.entries(data.profiles)) {
    const name = renamed[key] ?? cleanText(key, 8);
    if (!name || typeof profile !== "object" || profile === null) continue;
    const p = normalizeProfile({ ...profile });
    p.customWords = cleanCustomWords(p.customWords);
    if (p.preferredLevel && !levelById(p.preferredLevel)) delete p.preferredLevel;
    p.wrongWords = Object.fromEntries(Object.entries(p.wrongWords).filter(([id, e]) => findWordById(id) && levelById(e?.levelId)));
    p.vocab = Object.fromEntries(Object.entries(p.vocab).filter(([id, e]) => (findWordById(id) || p.customWords[id]) && typeof e?.due === "string"));
    p.starred = Object.fromEntries(Object.keys(p.starred).filter((id) => findWordById(id) || p.customWords[id]).map((id) => [id, true]));
    // 연습 오답은 지금 앱에서 다시 만들 수 있는 문제만 남긴다
    p.drill.wrong = Object.fromEntries(
      Object.entries(p.drill.wrong)
        .filter(([id]) => drillQuestionById(id))
        .map(([id, e]) => [id, { id, hits: Number(e?.hits) || 0, missed: Number(e?.missed) || 1, lastMissed: cleanText(e?.lastMissed, 10) }])
    );
    // 일기는 고른 표현 번호만, 상점은 있는 물건만 남긴다
    p.diary = p.diary
      .filter((e) => e && findDiaryTemplate(e.t) && /^\d{4}-\d{2}-\d{2}$/.test(e.d) && Array.isArray(e.p) && findDiaryTemplate(e.t).lines.every((l, i) => Number.isInteger(e.p[i]) && e.p[i] >= 0 && e.p[i] < l.options.length))
      .map((e) => ({ d: e.d, t: e.t, p: e.p.slice(0, findDiaryTemplate(e.t).lines.length) }))
      .slice(0, DIARY_KEEP);
    p.perfectMonths = p.perfectMonths.filter((m) => typeof m === "string" && /^\d{4}-\d{2}$/.test(m)).slice(0, 120);
    p.battleWins = Math.max(0, Math.floor(Number(p.battleWins) || 0));
    p.homePins = [...new Set(p.homePins.filter(isPinId))].slice(0, HOME_PIN_MAX);
    const owned = p.shop.owned.filter((id) => shopItem(id));
    p.shop = {
      spent: Math.max(0, Number(p.shop.spent) || 0),
      owned,
      equip: Object.fromEntries(Object.entries(p.shop.equip).filter(([cat, id]) => owned.includes(id) && shopItem(id).cat === cat)),
    };
    const goals = p.goals || {};
    p.goals = {
      counts: Object.fromEntries(GOAL_COUNTS.map((c) => [c.key, c.options.includes(Number(goals.counts?.[c.key])) ? Number(goals.counts[c.key]) : 0])),
      tasks: Array.isArray(goals.tasks) ? goals.tasks.filter((id) => taskIds.has(id)).slice(0, 30) : [],
    };
    profiles[name] = p;
  }

  const settings = {};
  for (const [key, choices] of Object.entries(SETTING_CHOICES)) {
    if (choices.includes(data.settings?.[key])) settings[key] = data.settings[key];
  }
  if (typeof data.settings?.sound === "boolean") settings.sound = data.settings.sound;
  if (typeof data.settings?.vibrate === "boolean") settings.vibrate = data.settings.vibrate;
  if (typeof data.settings?.readingSlow === "boolean") settings.readingSlow = data.settings.readingSlow;

  writeJson(FAMILY_KEY, family);
  writeAll(profiles);
  writeJson(SETTINGS_KEY, settings);
}
