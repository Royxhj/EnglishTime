const REPORT_DAYS = 14;
const WEAK_RATIO = 0.7;

function ratioPercent(best) {
  return best ? Math.round((best.correct / best.total) * 100) : null;
}

function barHtml(percent, color) {
  return `<span class="bar"><span class="bar-fill" style="width:${percent ?? 0}%; background:${color}"></span></span>`;
}

function renderReportScreen(root, { profileName, actions }) {
  const profile = getProfileData(profileName);
  const stats = getStats(profileName);
  const recent = getRecentActivity(profileName, REPORT_DAYS);
  const maxDay = Math.max(1, ...recent.map((d) => d.count));
  const badges = evaluateBadges(profileName);
  const earnedCount = badges.filter((b) => b.earned).length;

  const grammarRows = GRAMMAR_TOPICS.map((t) => {
    const best = getSectionBest(profileName, "grammar", t.id);
    const pct = ratioPercent(best);
    const weak = best && best.correct / best.total < WEAK_RATIO;
    return { t, pct, weak };
  });
  const weakTopics = grammarRows.filter((r) => r.weak);
  const sectionDone = (section, items) => items.filter((it) => getSectionBest(profileName, section, it.id)).length;
  const vocab = getVocabStats(profileName);
  const passagesRead = READING_PASSAGES.filter((p) => isPassageRead(profileName, p.id)).length;
  const notesRead = GRAMMAR_TOPICS.filter((t) => isNoteRead(profileName, t.id)).length;
  const pct = (a, b) => (b > 0 ? (a / b) * 100 : 0);

  root.innerHTML = `
    <div class="screen screen-report">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📊 ${profileName}님의 학습 리포트</h1>

      <div class="stat-grid">
        <div class="stat-card"><span class="stat-value">🔥 ${stats.streak}</span><span class="stat-label">연속 학습일<br><small>최고 ${profile.bestStreak}일</small></span></div>
        <div class="stat-card"><span class="stat-value">${stats.week}</span><span class="stat-label">이번 주 문제</span></div>
        <div class="stat-card"><span class="stat-value">${profile.totalAnswered}</span><span class="stat-label">지금까지 문제</span></div>
        <div class="stat-card"><span class="stat-value">🏅 ${earnedCount}</span><span class="stat-label">배지 / ${BADGES.length}</span></div>
      </div>

      <section class="settings-card">
        <h2 class="section-title">📚 공부 기록</h2>
        <ul class="bar-list">
          <li><span class="bar-name">📇 외운 단어</span>${barHtml(pct(vocab.mastered, vocab.learned), "var(--correct)")}<span class="bar-value">${vocab.mastered}/${vocab.learned}</span></li>
          <li><span class="bar-name">📖 읽은 지문</span>${barHtml(pct(passagesRead, READING_PASSAGES.length), "var(--primary)")}<span class="bar-value">${passagesRead}/${READING_PASSAGES.length}</span></li>
          <li><span class="bar-name">📘 문법 노트</span>${barHtml(pct(notesRead, GRAMMAR_TOPICS.length), "var(--primary)")}<span class="bar-value">${notesRead}/${GRAMMAR_TOPICS.length}</span></li>
        </ul>
        <p class="settings-help">외운 단어는 카드에서 '알아요'를 여러 번 이어서 눌러 일주일 간격 복습까지 온 단어예요.</p>
        ${vocab.due > 0 ? `<button class="secondary-btn" id="vocabBtn">📇 오늘 복습할 단어 ${vocab.due}개 보러 가기</button>` : ""}
      </section>

      <section class="settings-card">
        <h2 class="section-title">최근 ${REPORT_DAYS}일</h2>
        <div class="day-chart" role="img" aria-label="최근 ${REPORT_DAYS}일 학습량">
          ${recent
            .map(
              (d, i) => `
            <div class="day-col" title="${d.key}: ${d.count}문제">
              <span class="day-count">${d.count || ""}</span>
              <span class="day-bar${i === recent.length - 1 ? " today" : ""}" style="height:${(d.count / maxDay) * 100}%"></span>
              <span class="day-label">${i === recent.length - 1 ? "오늘" : Number(d.key.slice(8))}</span>
            </div>`
            )
            .join("")}
        </div>
      </section>

      ${
        weakTopics.length > 0
          ? `
        <section class="settings-card weak-card">
          <h2 class="section-title">💡 다시 보면 좋은 문법</h2>
          <div class="level-pick">
            ${weakTopics.map((r) => `<button class="pick-chip" data-topic="${r.t.id}">${r.t.emoji} ${r.t.title} ${r.pct}%</button>`).join("")}
          </div>
        </section>`
          : ""
      }

      <section class="settings-card">
        <h2 class="section-title">단어 최고 점수</h2>
        <table class="report-table">
          <thead><tr><th>단계</th><th>📚 고르기</th><th>⌨️ 철자</th><th>🎧 듣기</th></tr></thead>
          <tbody>
            ${LEVELS.map(
              (lv) => `<tr><th scope="row">${lv.emoji} ${shortLevelLabel(lv)}</th>${["choice", "spelling", "dictation"]
                .map((m) => {
                  const s = getBestScore(profileName, lv.id, m);
                  return `<td>${s === null ? "–" : s}</td>`;
                })
                .join("")}</tr>`
            ).join("")}
          </tbody>
        </table>
      </section>

      <section class="settings-card">
        <h2 class="section-title">문법 정답률 (${sectionDone("grammar", GRAMMAR_TOPICS)} / ${GRAMMAR_TOPICS.length})</h2>
        <ul class="bar-list">
          ${grammarRows
            .map(
              (r) => `<li><span class="bar-name">${r.t.emoji} ${r.t.title}</span>${barHtml(r.pct, r.weak ? "var(--wrong)" : "var(--correct)")}<span class="bar-value">${r.pct === null ? "–" : `${r.pct}%`}</span></li>`
            )
            .join("")}
        </ul>
      </section>

      <section class="settings-card">
        <h2 class="section-title">독해 · 끊어 읽기 · 동사 연습</h2>
        <ul class="bar-list">
          <li><span class="bar-name">📖 독해 지문</span>${barHtml((sectionDone("reading", READING_PASSAGES) / READING_PASSAGES.length) * 100, "var(--primary)")}<span class="bar-value">${sectionDone("reading", READING_PASSAGES)}/${READING_PASSAGES.length}</span></li>
          ${CHUNK_SETS.map((s) => {
            const pct = ratioPercent(getSectionBest(profileName, "chunks", s.id));
            return `<li><span class="bar-name">✂️ 끊어 읽기 ${s.title}</span>${barHtml(pct, "var(--primary)")}<span class="bar-value">${pct === null ? "–" : `${pct}%`}</span></li>`;
          }).join("")}
          ${IRREGULAR_SETS.map((s) => {
            const pct = ratioPercent(getSectionBest(profileName, "irregular", s.id));
            return `<li><span class="bar-name">🔁 불규칙 동사 ${s.title.split(":")[0]}</span>${barHtml(pct, "var(--primary)")}<span class="bar-value">${pct === null ? "–" : `${pct}%`}</span></li>`;
          }).join("")}
          ${[...VERB_PATTERN_GROUPS.map((g) => ({ id: g.id, name: g.short })), { id: "all", name: "종합" }].map((g) => {
            const pct = ratioPercent(getSectionBest(profileName, "verbPattern", g.id));
            return `<li><span class="bar-name">🔀 to/-ing ${g.name}</span>${barHtml(pct, "var(--primary)")}<span class="bar-value">${pct === null ? "–" : `${pct}%`}</span></li>`;
          }).join("")}
        </ul>
        <button class="secondary-btn" id="wrongNoteBtn">📝 오답노트 보기 (단어 ${getWrongWords(profileName).length} · 문법 ${getGrammarWrongIds(profileName).length})</button>
      </section>

      <section class="settings-card">
        <h2 class="section-title">말하기 · 듣기 · 쓰기 · 시험</h2>
        <ul class="bar-list">
          ${[
            { name: "📘 단계별 문법 · 파닉스 · 대화", done: sectionDone("basics", [...BASIC_TOPICS, ...PHONICS_TOPICS, ...TALK_TOPICS]), total: BASIC_TOPICS.length + PHONICS_TOPICS.length + TALK_TOPICS.length },
            { name: "🎙️ 따라 말하기 묶음", done: sectionDone("speaking", TALK_GROUPS), total: TALK_GROUPS.length },
            { name: "🎧 듣기 평가 단계", done: LISTENING_SETS.filter((s) => getSectionBest(profileName, "listening", s.levelId)).length, total: LISTENING_SETS.length },
            { name: "✍️ 영작 연습 학년", done: BASIC_GRADES.filter((g) => getSectionBest(profileName, "writing", `order:${g.id}`) || getSectionBest(profileName, "writing", `type:${g.id}`)).length, total: BASIC_GRADES.length },
            { name: "🧩 숙어 · 🔠 접사", done: sectionDone("idiom", IDIOM_SETS) + sectionDone("affix", AFFIX_SETS), total: IDIOM_SETS.length + AFFIX_SETS.length },
            { name: "🧩 가로세로 낱말 단계", done: LEVELS.filter((lv) => getSectionBest(profileName, "crossword", lv.id)).length, total: LEVELS.length },
            { name: "📝 단원 모의고사 학년", done: sectionDone("exam", BASIC_GRADES), total: BASIC_GRADES.length },
          ]
            .map((r) => `<li><span class="bar-name">${r.name}</span>${barHtml((r.done / r.total) * 100, "var(--primary)")}<span class="bar-value">${r.done}/${r.total}</span></li>`)
            .join("")}
        </ul>
        ${(() => {
          const exams = BASIC_GRADES.map((g) => ({ g, b: getSectionBest(profileName, "exam", g.id) })).filter((x) => x.b);
          return exams.length ? `<p class="settings-help">모의고사 최고 점수: ${exams.map((x) => `${x.g.id} ${Math.round((x.b.correct / x.b.total) * 100)}점`).join(" · ")}</p>` : "";
        })()}
      </section>

      <section class="settings-card">
        <h2 class="section-title">🎮 놀이 · 이야기 · 일기</h2>
        <ul class="bar-list">
          ${(() => {
            const chapters = STORY_SERIES.flatMap((s) => s.chapters);
            const storyDone = chapters.filter((c) => storyChapterPassed(profileName, c.id)).length;
            const avgPct = (section, ids) => {
              const bests = ids.map((id) => getSectionBest(profileName, section, id)).filter(Boolean);
              return bests.length ? Math.round((bests.reduce((a, b) => a + b.correct / b.total, 0) / bests.length) * 100) : null;
            };
            const rows = [
              { name: "📚 이야기책 장", pct: pct(storyDone, chapters.length), value: `${storyDone}/${chapters.length}` },
              { name: "🗂️ 주제별 단어", pct: pct(sectionDone("topic", TOPIC_WORD_GROUPS), TOPIC_WORD_GROUPS.length), value: `${sectionDone("topic", TOPIC_WORD_GROUPS)}/${TOPIC_WORD_GROUPS.length}` },
              { name: "🔢 숫자 · 시간 정답률", pct: avgPct("numbers", NUMBER_SETS.map((s) => s.id)), value: null },
              { name: "👂 소리 구별 정답률", pct: avgPct("sounds", ["all", ...SOUND_PAIR_SETS.map((s) => s.id)]), value: null },
              { name: "🗣️ 소리 내어 읽은 글", pct: null, value: `${Object.values(profile.aloud.best).filter((b) => b.correct === b.total).length}편` },
            ];
            return rows
              .map((r) => `<li><span class="bar-name">${r.name}</span>${barHtml(r.pct, "var(--primary)")}<span class="bar-value">${r.value ?? (r.pct === null ? "–" : `${r.pct}%`)}</span></li>`)
              .join("");
          })()}
        </ul>
        <div class="family-stats report-fun">
          <div><b>${Math.max(0, ...Object.values(profile.speed.best).map((b) => b.correct))}</b><small>⏱️ 60초 퀴즈 최고</small></div>
          <div><b>${Math.max(0, ...Object.values(profile.wordchain.best).map((b) => b.correct))}</b><small>🔤 끝말잇기 최고</small></div>
          <div><b>${profile.battleWins}</b><small>⚔️ 가족 대결 승리</small></div>
          <div><b>${profile.diary.length}</b><small>📓 쓴 일기</small></div>
          <div><b>${Object.keys(profile.bingo.best).length}</b><small>🎱 빙고 단계</small></div>
          <div><b>${profile.perfectMonths.length}</b><small>📆 개근한 달</small></div>
        </div>
        <button class="secondary-btn" id="calendarBtn">📆 출석 달력 보기</button>
      </section>

      <section class="settings-card">
        <h2 class="section-title">배지 ${earnedCount} / ${BADGES.length}</h2>
        <div class="badge-grid">
          ${badges
            .map(
              (b) => `
            <div class="badge${b.earned ? " earned" : ""}" title="${b.desc}">
              <span class="badge-emoji">${b.earned ? b.emoji : "🔒"}</span>
              <span class="badge-title">${b.title}</span>
              <span class="badge-desc">${b.desc}</span>
            </div>`
            )
            .join("")}
        </div>
      </section>

      ${bottomNavHtml([{ label: "⬆ 맨 위로" }, { label: "🏠 홈으로" }])}
    </div>
  `;
  bindBottomNav(root, [
    { onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { onClick: actions.back },
  ]);

  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#wrongNoteBtn").addEventListener("click", actions.openWrongNote);
  root.querySelector("#calendarBtn").addEventListener("click", actions.openCalendar);
  root.querySelector("#vocabBtn")?.addEventListener("click", actions.openVocab);
  root.querySelectorAll("[data-topic]").forEach((btn) => btn.addEventListener("click", () => actions.openTopic(btn.dataset.topic)));
}
