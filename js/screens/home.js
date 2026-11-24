function lessonDoneCount(profileName, topics) {
  return topics.filter((t) => getSectionBest(profileName, "basics", t.id)).length;
}

function sectionCount(profileName, section, sets) {
  return sets.filter((s) => getSectionBest(profileName, section, s.id)).length;
}

function homeTile({ id, emoji, title, meta, warn, disabled }) {
  return `
    <button class="tile" id="${id}" ${disabled ? "disabled" : ""}>
      <span class="tile-emoji">${emoji}</span>
      <span class="tile-title">${title}</span>
      <span class="tile-meta${warn ? " tile-meta--warn" : ""}">${meta}</span>
    </button>
  `;
}

function leaderboardHtml(currentName) {
  const rows = getFamily().map((p) => ({ ...p, stats: getStats(p.name) })).sort(
    (a, b) => b.stats.week - a.stats.week || b.stats.streak - a.stats.streak
  );
  const medals = ["🥇", "🥈", "🥉"];
  return rows
    .map(
      (p, i) => `
      <li class="rank-row${p.name === currentName ? " rank-row--me" : ""}" style="--accent:${p.color}">
        <span class="rank-pos">${p.stats.week > 0 && medals[i] ? medals[i] : i + 1}</span>
        <span class="rank-name">${p.emoji} ${p.name}</span>
        <span class="rank-streak">${p.stats.streak > 0 ? `🔥 ${p.stats.streak}일` : ""}</span>
        <span class="rank-count">${p.stats.week}문제</span>
      </li>`
    )
    .join("");
}

// 혼자 쓰는 기기에서는 가족 순위 대신 나의 주간 기록(이번 주 vs 지난주, 최근 4주)을 보여 준다.
function weeklyRecordHtml(profileName) {
  const weeks = getWeeklyHistory(profileName, 4);
  const [thisWeek, lastWeek] = [weeks[3], weeks[2]];
  const delta = (now, before, unit) => {
    const d = now - before;
    if (!now && !before) return `<small class="week-delta">–</small>`;
    if (d === 0) return `<small class="week-delta">지난주와 같아요</small>`;
    return `<small class="week-delta ${d > 0 ? "up" : "down"}">지난주보다 ${d > 0 ? "▲" : "▼"}${Math.abs(d)}${unit}</small>`;
  };
  const left = 6 - ((new Date().getDay() + 6) % 7); // 이번 주 남은 날
  const gap = lastWeek.answers - thisWeek.answers;
  const message =
    thisWeek.answers === 0 && lastWeek.answers === 0
      ? "이번 주 첫 공부를 시작해 봐요! 🌱"
      : gap < 0
        ? `지난주보다 ${-gap}문제 더 풀었어요! 📈`
        : gap === 0
          ? "지난주와 같은 만큼 풀었어요. 하나만 더 풀면 기록을 넘어요! ✨"
          : left > 0
            ? `지난주 기록까지 ${gap}문제 남았어요. 남은 ${left}일 동안 힘내요! 💪`
            : `지난주보다 ${gap}문제 적어요. 다음 주에 다시 도전해요! 💪`;
  const max = Math.max(1, ...weeks.map((w) => w.answers));
  const label = (w) => (w.weeksAgo === 0 ? "이번 주" : w.weeksAgo === 1 ? "지난주" : `${w.weeksAgo}주 전`);
  return `
    <section class="group">
      <h2 class="group-title">📈 나의 주간 기록</h2>
      <div class="settings-card week-card">
        <div class="family-stats week-stats">
          <div><b>${thisWeek.answers}</b><small>이번 주 문제</small>${delta(thisWeek.answers, lastWeek.answers, "")}</div>
          <div><b>${thisWeek.days}일</b><small>공부한 날</small>${delta(thisWeek.days, lastWeek.days, "일")}</div>
          <div><b>${thisWeek.daily}번</b><small>오늘의 학습</small>${delta(thisWeek.daily, lastWeek.daily, "번")}</div>
        </div>
        <p class="week-msg">${message}</p>
        <div class="week-bars" role="img" aria-label="최근 4주 푼 문제 수: ${weeks.map((w) => `${label(w)} ${w.answers}`).join(", ")}">
          ${weeks
            .map(
              (w) => `
            <div class="week-bar${w.weeksAgo === 0 ? " now" : ""}">
              <span class="week-bar-value">${w.answers}</span>
              <span class="week-bar-fill" style="height:${Math.max(4, Math.round((w.answers / max) * 80))}px"></span>
              <span class="week-bar-label">${label(w)}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderHomeScreen(root, ctx) {
  const { profileName, actions } = ctx;
  const profile = findMember(profileName);
  const stats = getStats(profileName);
  const badgeCount = evaluateBadges(profileName).filter((b) => b.earned).length;
  const wrongWords = getWrongWords(profileName).length;
  const wrongGrammar = getGrammarWrongIds(profileName).length;
  const grammarDone = GRAMMAR_TOPICS.filter((t) => getSectionBest(profileName, "grammar", t.id)).length;
  const readingDone = READING_PASSAGES.filter((p) => getSectionBest(profileName, "reading", p.id)).length;
  const chunkDone = CHUNK_SETS.filter((s) => getSectionBest(profileName, "chunks", s.id)).length;
  const wordBest = getOverallBest(profileName);
  const daily = stats.dailyToday;
  const vocab = getVocabStats(profileName);
  const notesRead = GRAMMAR_TOPICS.filter((t) => isNoteRead(profileName, t.id)).length;
  const passagesRead = READING_PASSAGES.filter((p) => isPassageRead(profileName, p.id)).length;
  const goal = goalSummary(profileName);
  const next = nextStep(profileName);
  // 단계에 맞지 않는 타일은 숨긴다 (초등은 중학교 이상 내용, 중학교 이상은 파닉스)
  const level = getPreferredLevel(profileName);
  const isKid = !level || level.startsWith("elementary");
  const myGrades = BASIC_GRADES.filter((g) => g.levelId === level).map((g) => g.id);
  const myBasics = BASIC_TOPICS.filter((t) => myGrades.includes(t.grade));
  const myPassages = READING_PASSAGES.filter((p) => p.levelId === level);
  const myTalks = TALK_TOPICS.filter((t) => TALK_GROUP_LEVELS[t.group]?.includes(level));
  const show = { phonics: !level || ["elementary-low", "elementary-mid", "elementary-high", "middle"].includes(level), advanced: !isKid };

  root.innerHTML = `
    <div class="screen screen-home" style="--accent:${profile.color}">
      <div class="home-header">
        <div class="home-topline">
          <button class="back-btn" id="backBtn">← 프로필 변경</button>
          <button class="icon-btn" id="settingsBtn" aria-label="설정">⚙️ 설정</button>
        </div>
        <div class="home-hello">
          <span class="home-avatar">${profile.emoji}</span>
          <div>
            <h1 class="home-title">${profileName}님, 안녕하세요!</h1>
            <p class="home-stats">
              ${stats.streak > 0 ? `<span class="chip chip-fire">🔥 ${stats.streak}일 연속</span>` : `<span class="chip">오늘 첫 공부를 시작해요</span>`}
              <span class="chip">오늘 ${stats.today}문제</span>
              ${badgeCount > 0 ? `<span class="chip">🏅 ${badgeCount}</span>` : ""}
            </p>
          </div>
        </div>
      </div>

      <button class="daily-card${daily ? " daily-card--done" : ""}" id="dailyBtn">
        <span class="daily-emoji">${daily ? "✅" : "☀️"}</span>
        <span class="daily-text">
          <span class="daily-title">${daily ? "오늘의 학습 완료!" : "오늘의 학습"}</span>
          <span class="daily-desc">${daily ? `${daily.correct} / ${daily.total} 정답 · 한 번 더 할 수 있어요` : `${vocab.due > 0 ? "복습 단어 포함 · " : ""}단어 ${DAILY_WORDS} + 문법 ${DAILY_GRAMMAR}문제 · 약 5분`}</span>
        </span>
        <span class="daily-go" aria-hidden="true">›</span>
      </button>

      <button class="next-card" id="nextBtn">
        <span class="next-emoji">${next.emoji}</span>
        <span class="next-text">
          <span class="next-label">▶ 이어서 하기</span>
          <span class="next-title">${next.title}</span>
          <span class="next-desc">${next.desc}</span>
        </span>
        <span class="next-go" aria-hidden="true">›</span>
      </button>

      <div class="quick-links">
        <button class="quick-link" id="wrongNoteBtn">📝 오답노트 <b>${wrongWords + wrongGrammar + getDrillWrongEntries(profileName).length}</b></button>
        <button class="quick-link" id="reportBtn">📊 학습 리포트</button>
        <button class="quick-link${goal.total && goal.done === goal.total ? " quick-link--done" : ""}" id="goalsBtn">🎯 이번 주 목표 ${goal.total ? `<b>${goal.done}/${goal.total}</b>` : "정하기"}</button>
      </div>

      <section class="group">
        <h2 class="group-title">📚 배우기</h2>
        <div class="tile-grid">
          ${show.phonics ? homeTile({ id: "phonicsBtn", emoji: "🔤", title: "파닉스", meta: `${lessonDoneCount(profileName, PHONICS_TOPICS)} / ${PHONICS_TOPICS.length}` }) : ""}
          ${homeTile({ id: "vocabBtn", emoji: "📇", title: "단어장", meta: vocab.due > 0 ? `복습 ${vocab.due}개` : vocab.learned > 0 ? `외운 단어 ${vocab.mastered}` : "카드로 외우기", warn: vocab.due > 0 })}
          ${homeTile({
            id: "notesBtn",
            emoji: "📘",
            title: "문법 노트",
            meta: level ? `내 단계 ${lessonDoneCount(profileName, myBasics)} / ${myBasics.length}` : `단계별 ${lessonDoneCount(profileName, BASIC_TOPICS)} / ${BASIC_TOPICS.length}`,
          })}
          ${homeTile({ id: "talkBtn", emoji: "💬", title: "대화 표현", meta: level && myTalks.length ? `내 단계 ${lessonDoneCount(profileName, myTalks)} / ${myTalks.length}` : `${lessonDoneCount(profileName, TALK_TOPICS)} / ${TALK_TOPICS.length}` })}
          ${homeTile({ id: "readPracticeBtn", emoji: "📖", title: "읽기 연습", meta: level ? `내 단계 ${myPassages.filter((p) => isPassageRead(profileName, p.id)).length} / ${myPassages.length} 읽음` : `${passagesRead} / ${READING_PASSAGES.length} 읽음` })}
          ${homeTile({ id: "irregularBtn", emoji: "🔁", title: "불규칙 동사", meta: `${sectionCount(profileName, "irregular", IRREGULAR_SETS)} / ${IRREGULAR_SETS.length} 단계` })}
          ${show.advanced ? homeTile({ id: "verbPatternBtn", emoji: "🔀", title: "to부정사 · 동명사", meta: `${sectionCount(profileName, "verbPattern", VERB_PATTERN_GROUPS)} / ${VERB_PATTERN_GROUPS.length} 묶음` }) : ""}
          ${show.advanced ? homeTile({ id: "idiomsBtn", emoji: "🧩", title: "숙어 · 구동사", meta: `${sectionCount(profileName, "idiom", IDIOM_SETS)} / ${IDIOM_SETS.length} 단계` }) : ""}
          ${show.advanced ? homeTile({ id: "affixesBtn", emoji: "🔠", title: "접두사 · 접미사", meta: `${sectionCount(profileName, "affix", AFFIX_SETS)} / ${AFFIX_SETS.length} 묶음` }) : ""}
        </div>
      </section>

      <section class="group">
        <h2 class="group-title">🗣️ 말하기 · 듣기 · 쓰기</h2>
        <div class="tile-grid">
          ${homeTile({ id: "speakingBtn", emoji: "🎙️", title: "따라 말하기", meta: `${sectionCount(profileName, "speaking", TALK_GROUPS)} / ${TALK_GROUPS.length} 묶음` })}
          ${homeTile({ id: "listeningBtn", emoji: "🎧", title: "듣기 평가", meta: `${LISTENING_SETS.filter((s) => getSectionBest(profileName, "listening", s.levelId)).length} / ${LISTENING_SETS.length} 단계` })}
          ${homeTile({ id: "writingBtn", emoji: "✍️", title: "영작 연습", meta: "뜻 보고 문장 만들기" })}
          ${homeTile({ id: "dictationBtn", emoji: "🖊️", title: "받아쓰기", meta: speechSupported ? "듣고 쓰기" : "소리 미지원", disabled: !speechSupported })}
        </div>
      </section>

      <section class="group">
        <h2 class="group-title">✏️ 문제 풀기</h2>
        <div class="tile-grid">
          ${homeTile({ id: "wordsBtn", emoji: "📚", title: "단어 퀴즈", meta: wrongWords > 0 ? `오답 ${wrongWords}개` : wordBest !== null ? `최고 ${wordBest}점` : "4지선다", warn: wrongWords > 0 })}
          ${homeTile({ id: "spellingBtn", emoji: "⌨️", title: "철자 쓰기", meta: "직접 입력" })}
          ${homeTile({ id: "grammarBtn", emoji: "✏️", title: "문법 문제", meta: wrongGrammar > 0 ? `오답 ${wrongGrammar}개` : `${grammarDone} / ${GRAMMAR_TOPICS.length} 완료`, warn: wrongGrammar > 0 })}
          ${homeTile({ id: "chunksBtn", emoji: "✂️", title: "끊어 읽기", meta: `${chunkDone} / ${CHUNK_SETS.length} 완료` })}
          ${homeTile({ id: "readingBtn", emoji: "📰", title: "독해 문제", meta: level ? `내 단계 ${myPassages.filter((p) => getSectionBest(profileName, "reading", p.id)).length} / ${myPassages.length} 완료` : `${readingDone} / ${READING_PASSAGES.length} 완료` })}
          ${homeTile({ id: "crosswordBtn", emoji: "🧩", title: "가로세로 낱말", meta: "매번 새 퍼즐" })}
          ${homeTile({ id: "examBtn", emoji: "📝", title: "단원 모의고사", meta: "20문제 · 100점" })}
        </div>
      </section>
      ${
        getFamily().length > 1
          ? `<section class="group">
        <h2 class="group-title">이번 주 가족 순위</h2>
        <ol class="rank-list">${leaderboardHtml(profileName)}</ol>
        <button class="secondary-btn" id="familyBtn">👨‍👩‍👧 가족 한눈에 보기</button>
      </section>`
          : weeklyRecordHtml(profileName)
      }
    </div>
  `;

  // 단계에 따라 숨긴 타일도 있어서 없으면 건너뛴다
  const bind = (id, fn) => root.querySelector(`#${id}`)?.addEventListener("click", fn);
  bind("nextBtn", () => actions.openNext(next));
  bind("familyBtn", actions.openFamily);
  bind("backBtn", actions.backToProfile);
  bind("settingsBtn", actions.openSettings);
  bind("wrongNoteBtn", actions.openWrongNote);
  bind("reportBtn", actions.openReport);
  bind("dailyBtn", actions.startDaily);
  bind("wordsBtn", () => actions.openWords("choice"));
  bind("spellingBtn", () => actions.openWords("spelling"));
  bind("dictationBtn", () => actions.openWords("dictation"));
  bind("vocabBtn", actions.openVocab);
  bind("notesBtn", actions.openGrammarNotes);
  bind("phonicsBtn", actions.openPhonics);
  bind("talkBtn", actions.openTalk);
  bind("irregularBtn", actions.openIrregular);
  bind("speakingBtn", actions.openSpeaking);
  bind("listeningBtn", actions.openListening);
  bind("writingBtn", actions.openWriting);
  bind("idiomsBtn", actions.openIdioms);
  bind("examBtn", actions.openExam);
  bind("goalsBtn", actions.openGoals);
  bind("crosswordBtn", actions.openCrossword);
  bind("affixesBtn", actions.openAffixes);
  bind("verbPatternBtn", actions.openVerbPattern);
  bind("readPracticeBtn", actions.openReadingPractice);
  bind("grammarBtn", actions.openGrammar);
  bind("chunksBtn", actions.openChunks);
  bind("readingBtn", actions.openReadingQuiz);
}
