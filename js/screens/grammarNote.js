// 예문 표시: [[말]] = 핵심 강조, [S|말] 등 = 문장 성분 색 표시
const LESSON_ROLE = /\[(S|V|O|C|M)\|([^\]]+)\]/g;
const LESSON_KEY = /\[\[([^\]]+)\]\]/g;

function lessonMarkup(text) {
  return text
    .replace(LESSON_KEY, '<mark class="lesson-key">$1</mark>')
    .replace(LESSON_ROLE, (_, role, words) => {
      const r = CHUNK_ROLES[role];
      return `<span class="lesson-role" style="--role:${r.color}">${words}<small>${r.label}</small></span>`;
    });
}

function lessonPlain(text) {
  return text.replace(LESSON_KEY, "$1").replace(LESSON_ROLE, "$2");
}

function noteSearchText(topic) {
  const note = GRAMMAR_NOTES[topic.id];
  const lesson = GRAMMAR_LESSONS[topic.id];
  const strip = (html) => html.replace(/<[^>]+>/g, "");
  return [
    topic.title,
    topic.summary,
    strip(lesson.hook),
    ...lesson.terms.map((t) => `${t.term} ${t.meaning}`),
    ...lesson.steps.map((s) => `${s.title} ${strip(s.body)} ${s.examples.map((e) => lessonPlain(e.en)).join(" ")}`),
    ...topic.points.map((p) => `${p.title} ${strip(p.text)}`),
    ...note.mistakes.map((m) => `${m.wrong} ${m.right} ${m.why}`),
    ...note.table.rows.flat(),
  ]
    .join(" ")
    .toLowerCase();
}

function lessonExamplesHtml(examples, keyPrefix) {
  return examples
    .map(
      (ex, i) => `
    <div class="lesson-example">
      <button class="speak-btn" data-lesson-speak="${keyPrefix}-${i}" aria-label="예문 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
      <div>
        <p class="lesson-example-en">${lessonMarkup(ex.en)}</p>
        <p class="lesson-example-ko">${ex.ko}</p>
      </div>
    </div>`
    )
    .join("");
}

// 내 단계(없으면 최근 단계)가 초등이면 어려운 독해 문법은 접어서 보여 준다.
function isElementaryLearner(profileName) {
  const level = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  return !level || level.startsWith("elementary");
}

const BASIC_GRADES = [
  { id: "초2", label: "🌱 초등 1~2학년", color: "#ffb020", levelId: "elementary-low" },
  { id: "초4", label: "🌿 초등 3~4학년", color: "#6fb92c", levelId: "elementary-mid" },
  { id: "초6", label: "🚀 초등 5~6학년", color: "#16a3a3", levelId: "elementary-high" },
  { id: "중1", label: "📘 중학교 1학년", color: "#4361ee", levelId: "middle" },
  { id: "중2", label: "📗 중학교 2학년", color: "#5a4fcf", levelId: "middle" },
  { id: "중3", label: "📕 중학교 3학년", color: "#7b3fe4", levelId: "middle" },
  { id: "고1", label: "🎓 고등학교 1학년", color: "#8338ec", levelId: "high" },
  { id: "고2", label: "🎓 고등학교 2학년", color: "#a12fd0", levelId: "high" },
  { id: "고3", label: "🎓 고등학교 3학년", color: "#c0268f", levelId: "high" },
  { id: "성인1", label: "💼 성인 ① 헷갈리는 기본기", color: "#3a5a78", levelId: "adult" },
  { id: "성인2", label: "💼 성인 ② 자연스럽고 정중한 영어", color: "#2b6f8f", levelId: "adult" },
];

// 마지막으로 펼친 학년(앱을 켜 둔 동안 기억). 없으면 내 단계에 맞는 학년, 그다음은 덜 끝낸 첫 학년.
let basicGradeChoice = null;

function basicGradeToOpen(profileName) {
  if (basicGradeChoice) return basicGradeChoice;
  const level = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  const unfinished = (g) => BASIC_TOPICS.some((t) => t.grade === g.id && !getSectionBest(profileName, "basics", t.id));
  // 내 단계에 맞는 학년(중·고등학교·성인은 그 안에서 덜 끝낸 첫 학년)
  const byLevel = BASIC_GRADES.filter((g) => g.levelId === level);
  if (byLevel.length) return (byLevel.find(unfinished) || byLevel[byLevel.length - 1]).id;
  return (BASIC_GRADES.find(unfinished) || BASIC_GRADES[0]).id;
}

function renderGrammarNotesScreen(root, { profileName, openNote, openBasic, back }) {
  const readCount = GRAMMAR_TOPICS.filter((t) => isNoteRead(profileName, t.id)).length;
  const basicDone = BASIC_TOPICS.filter((t) => getSectionBest(profileName, "basics", t.id)).length;
  const collapseAdvanced = isElementaryLearner(profileName);
  const openGrade = basicGradeToOpen(profileName);

  root.innerHTML = `
    <div class="screen screen-notes">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📘 문법 노트</h1>
      <p class="subtitle">쉬운 기초부터 차근차근 배워요</p>

      <section class="group">
        <h2 class="group-title">🧸 단계별 문법 · 초등~성인 (${basicDone} / ${BASIC_TOPICS.length})</h2>
        <p class="settings-help">설명을 소리로 읽어 주고, 배우고 나면 바로 해 봐요. 학년을 눌러 펼치고, 위에서부터 차례로 하면 좋아요.</p>
        ${BASIC_GRADES.map((g) => ({ ...g, topics: BASIC_TOPICS.filter((t) => t.grade === g.id) }))
          .filter((g) => g.topics.length)
          .map((g) => {
            const done = g.topics.filter((t) => getSectionBest(profileName, "basics", t.id)).length;
            return `
          <details class="basic-grade" data-grade="${g.id}" ${g.id === openGrade ? "open" : ""}>
          <summary class="basic-grade-title">${g.label} <span class="basic-grade-count">${done} / ${g.topics.length}</span></summary>
          <div class="level-grid">
            ${BASIC_TOPICS.map((t, i) => ({ t, i }))
              .filter(({ t }) => t.grade === g.id)
              .map(({ t, i }) => {
                const best = getSectionBest(profileName, "basics", t.id);
                const stars = best ? basicStars(best.correct, best.total) : 0;
                return `
              <button class="level-card basic-topic-card" data-basic="${t.id}" style="--accent:${g.color}">
                <span class="level-icon">${t.emoji}</span>
                <span class="topic-text">
                  <span class="level-label">${i + 1}. ${t.title}</span>
                  <span class="topic-summary">${t.subtitle}</span>
                </span>
                <span class="level-best${best ? "" : " level-best-empty"}">${best ? "⭐".repeat(stars) : "시작"}</span>
              </button>`;
              })
              .join("")}
          </div>
          </details>`;
          })
          .join("")}
      </section>

      <details class="advanced-notes" id="advancedNotes" ${collapseAdvanced ? "" : "open"}>
        <summary class="group-title">📘 독해 문법 요약 · 고등학교까지 (${readCount} / ${GRAMMAR_TOPICS.length} 이해함)</summary>
        ${collapseAdvanced ? `<p class="settings-help">기초 문법을 먼저 익힌 뒤에 보면 좋아요.</p>` : ""}
      <input class="text-input" id="noteSearch" type="search" placeholder="🔍 찾고 싶은 문법 (예: 관계대명사, which, 현재완료)" autocomplete="off" />
      <p class="settings-help" id="noteInfo" hidden></p>
      <div class="level-grid" id="noteList">
        ${GRAMMAR_TOPICS.map((topic, i) => {
          const level = levelById(topic.levelId);
          const read = isNoteRead(profileName, topic.id);
          return `
            <button class="level-card topic-card" data-id="${topic.id}" style="--accent:${level.color}">
              <span class="level-icon">${topic.emoji}</span>
              <span class="topic-text">
                <span class="level-label">${i + 1}. ${topic.title}</span>
                <span class="topic-summary">${topic.summary}</span>
                <span class="topic-level">${shortLevelLabel(level)}</span>
              </span>
              <span class="level-best${read ? "" : " level-best-empty"}">${read ? "✓ 이해함" : "읽기"}</span>
            </button>
          `;
        }).join("")}
      </div>
      </details>
    </div>
  `;

  root.querySelectorAll("[data-basic]").forEach((btn) => btn.addEventListener("click", () => openBasic(btn.dataset.basic)));
  root.querySelectorAll(".basic-grade").forEach((el) =>
    el.addEventListener("toggle", () => {
      if (el.open) basicGradeChoice = el.dataset.grade;
    })
  );

  const index = Object.fromEntries(GRAMMAR_TOPICS.map((t) => [t.id, noteSearchText(t)]));
  const info = root.querySelector("#noteInfo");
  root.querySelector("#noteSearch").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let shown = 0;
    root.querySelectorAll("#noteList .topic-card").forEach((card) => {
      const match = !q || index[card.dataset.id].includes(q);
      card.hidden = !match;
      if (match) shown += 1;
    });
    info.hidden = !q;
    info.textContent = shown === 0 ? "찾는 문법이 없어요. 다른 말로 찾아보세요." : `${shown}개 주제`;
  });

  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll(".topic-card[data-id]").forEach((btn) => btn.addEventListener("click", () => openNote(btn.dataset.id)));
}

function renderGrammarNoteScreen(root, { profileName, topic, actions }) {
  const level = levelById(topic.levelId);
  const note = GRAMMAR_NOTES[topic.id];
  const index = GRAMMAR_TOPICS.indexOf(topic);
  const prev = GRAMMAR_TOPICS[index - 1];
  const next = GRAMMAR_TOPICS[index + 1];
  const read = isNoteRead(profileName, topic.id);
  const examples = [...topic.examples, ...note.examples];
  const lesson = GRAMMAR_LESSONS[topic.id];
  const bottomLinks = [
    { label: "📘 문법 노트 목록", onClick: actions.back },
    { label: "🏠 홈으로", onClick: actions.home },
  ];

  root.innerHTML = `
    <div class="screen screen-lesson"${levelThemeStyle(level)}>
      <button class="back-btn" id="backBtn">← 문법 노트</button>
      <div class="lesson-head">
        <span class="lesson-emoji">${topic.emoji}</span>
        <h1 class="title">${index + 1}. ${topic.title}</h1>
        <p class="subtitle">${topic.summary} · <span class="topic-level">${shortLevelLabel(level)}</span>${read ? " · ✓ 이해함" : ""}</p>
      </div>

      <nav class="note-toc" aria-label="목차">
        <a href="#sec-steps">차근차근</a><a href="#sec-checks">잠깐 확인</a><a href="#sec-points">한눈에 정리</a><a href="#sec-table">정리표</a><a href="#sec-examples">예문</a><a href="#sec-mistakes">자주 하는 실수</a><a href="#sec-tip">독해 팁</a>
      </nav>

      <section class="lesson-hook">
        <span class="lesson-hook-icon" aria-hidden="true">💡</span>
        <div>
          <p class="lesson-hook-label">한마디로</p>
          <p class="lesson-hook-text">${lesson.hook}</p>
        </div>
      </section>

      <section class="lesson-section">
        <h2 class="section-title">📖 이 단원에 나오는 말</h2>
        <dl class="term-list">
          ${lesson.terms.map((t) => `<div class="term-row"><dt>${t.term}</dt><dd>${t.meaning}</dd></div>`).join("")}
        </dl>
      </section>

      <section class="lesson-section" id="sec-steps">
        <h2 class="section-title">👣 차근차근 배워요</h2>
        ${lesson.steps
          .map(
            (s, i) => `
          <div class="lesson-step">
            <p class="lesson-step-title"><span class="lesson-point-num">${i + 1}</span>${s.title}</p>
            <p class="lesson-step-body">${s.body}</p>
            ${lessonExamplesHtml(s.examples, i)}
          </div>`
          )
          .join("")}
        ${lesson.steps.some((s) => s.examples.some((e) => /\[(S|V|O|C|M)\|/.test(e.en))) ? `<div class="role-legend">${Object.values(CHUNK_ROLES).map((r) => `<span class="role-chip" style="--role:${r.color}">${r.label}</span>`).join("")}</div>` : ""}
      </section>

      <section class="lesson-section" id="sec-checks">
        <h2 class="section-title">✋ 잠깐 확인!</h2>
        ${lesson.checks
          .map(
            (c, ci) => `
          <div class="lesson-check" data-check="${ci}">
            <p class="lesson-check-q">Q${ci + 1}. ${c.q}</p>
            <div class="lesson-check-choices">
              ${c.choices.map((choice, i) => `<button class="lesson-check-choice" data-choice="${i}">${choice}</button>`).join("")}
            </div>
            <p class="lesson-check-feedback" hidden></p>
          </div>`
          )
          .join("")}
      </section>

      <section class="lesson-section" id="sec-points">
        <h2 class="section-title">📝 한눈에 정리</h2>
        ${topic.points
          .map(
            (p, i) => `
          <div class="lesson-point">
            <span class="lesson-point-num">${i + 1}</span>
            <div>
              <p class="lesson-point-title">${p.title}</p>
              <p class="lesson-point-text">${p.text}</p>
            </div>
          </div>`
          )
          .join("")}
      </section>

      <section class="lesson-section" id="sec-table">
        <h2 class="section-title">${note.table.caption}</h2>
        <div class="table-scroll">
          <table class="note-table">
            <thead><tr>${note.table.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
            <tbody>${note.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </section>

      <section class="lesson-section" id="sec-examples">
        <h2 class="section-title">예문으로 익혀요</h2>
        ${examples
          .map(
            (ex, i) => `
          <div class="example-item">
            <div class="example-en">
              <button class="speak-btn" data-example="${i}" aria-label="예문 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
              <span>${ex.en}</span>
            </div>
            <div class="example-ko example-ko--always">${ex.ko}</div>
          </div>`
          )
          .join("")}
      </section>

      <section class="lesson-section" id="sec-mistakes">
        <h2 class="section-title">자주 하는 실수</h2>
        ${note.mistakes
          .map(
            (m) => `
          <div class="mistake-card">
            <p class="mistake-wrong"><span aria-label="틀린 문장">✗</span> ${m.wrong}</p>
            <p class="mistake-right"><span aria-label="맞는 문장">✓</span> ${m.right}</p>
            <p class="mistake-why">${m.why}</p>
          </div>`
          )
          .join("")}
      </section>

      <section class="lesson-section tip-section" id="sec-tip">
        <h2 class="section-title">📖 독해에서는 이렇게</h2>
        <p class="lesson-point-text">${note.tip}</p>
      </section>

      <div class="note-nav">
        ${prev ? `<button class="secondary-btn" data-go="${prev.id}"><small>◀ 이전 주제</small>${prev.title}</button>` : "<span></span>"}
        ${next ? `<button class="secondary-btn" data-go="${next.id}"><small>다음 주제 ▶</small>${next.title}</button>` : "<span></span>"}
      </div>

      <div class="sticky-cta passage-actions">
        ${read ? "" : `<button class="secondary-btn" id="understoodBtn">✓ 이해했어요</button>`}
        <button class="primary-btn" id="quizBtn">✏️ 문제 풀기 (${topic.questions.length})</button>
      </div>

      ${bottomNavHtml(bottomLinks)}
    </div>
  `;
  bindBottomNav(root, bottomLinks);

  root.querySelectorAll(".note-toc a").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      root.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "start" });
    })
  );
  root.querySelectorAll("[data-example]").forEach((btn) => btn.addEventListener("click", () => speak(examples[Number(btn.dataset.example)].en)));
  root.querySelectorAll("[data-lesson-speak]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const [step, i] = btn.dataset.lessonSpeak.split("-").map(Number);
      speak(lessonPlain(lesson.steps[step].examples[i].en));
    })
  );

  // 잠깐 확인: 고르면 바로 맞았는지와 설명을 보여 준다 (점수에는 들어가지 않음).
  root.querySelectorAll(".lesson-check").forEach((box) => {
    const check = lesson.checks[Number(box.dataset.check)];
    const feedback = box.querySelector(".lesson-check-feedback");
    box.querySelectorAll(".lesson-check-choice").forEach((btn) =>
      btn.addEventListener("click", () => {
        const picked = Number(btn.dataset.choice);
        const ok = picked === check.answer;
        box.querySelectorAll(".lesson-check-choice").forEach((b) => {
          const i = Number(b.dataset.choice);
          b.classList.toggle("correct", i === check.answer);
          b.classList.toggle("wrong", i === picked && !ok);
          b.disabled = true;
        });
        feedback.hidden = false;
        feedback.className = `lesson-check-feedback ${ok ? "correct" : "wrong"}`;
        feedback.innerHTML = `${ok ? "🎉 맞았어요!" : "🤔 다시 볼까요?"} ${check.explain}`;
        if (ok) playSound("correct");
      })
    );
  });
  root.querySelectorAll("[data-go]").forEach((btn) => btn.addEventListener("click", () => actions.goTopic(btn.dataset.go)));
  root.querySelector("#understoodBtn")?.addEventListener("click", (e) => {
    markNoteRead(profileName, topic.id);
    e.currentTarget.remove();
    showToast(`<span class="toast-emoji">📘</span><span>이해함으로 표시했어요: ${topic.title}</span>`);
    announceBadges(checkNewBadges(profileName));
  });
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#quizBtn").addEventListener("click", () => {
    markNoteRead(profileName, topic.id);
    actions.startQuiz();
  });
}
