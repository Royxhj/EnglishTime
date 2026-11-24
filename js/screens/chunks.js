const CHUNK_STEPS = [
  { role: "S", prompt: "주어를 찾아 누르세요", tip: "'~은/는/이/가'로 해석되는 덩어리예요" },
  { role: "V", prompt: "동사를 찾아 누르세요", tip: "주어가 '어찌하다/어떠하다'에 해당하는 말이에요" },
];

function findChunkSet(id) {
  return CHUNK_SETS.find((s) => s.id === id) || null;
}

function buildChunkSession(setId) {
  return findChunkSet(setId).sentences.map((sentence) => ({ sentence, step: 0, mistakes: 0, wrongChunk: null }));
}

function roleLegendHtml() {
  return `
    <div class="role-legend">
      ${Object.values(CHUNK_ROLES).map((r) => `<span class="role-chip" style="--role:${r.color}">${r.label}</span>`).join("")}
    </div>
  `;
}

function renderChunkIntroScreen(root, { profileName, startSet, backToHome }) {
  root.innerHTML = `
    <div class="screen screen-chunks-intro">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">✂️ 끊어 읽기</h1>
      <p class="subtitle">긴 문장도 덩어리로 나누면 앞에서부터 바로 읽혀요</p>

      <section class="lesson-section">
        <h2 class="section-title">이렇게 연습해요</h2>
        <div class="lesson-point"><span class="lesson-point-num">1</span><p class="lesson-point-text">문장에서 <b>주어</b> 덩어리를 찾아 눌러요.</p></div>
        <div class="lesson-point"><span class="lesson-point-num">2</span><p class="lesson-point-text">이어서 <b>동사</b>를 찾아 눌러요. 주어를 꾸미는 말(수식어)에 속지 마세요!</p></div>
        <div class="lesson-point"><span class="lesson-point-num">3</span><p class="lesson-point-text">덩어리별 해석(직독직해)을 보며 앞에서부터 읽는 연습을 해요.</p></div>
        ${roleLegendHtml()}
      </section>

      <div class="level-grid">
        ${CHUNK_SETS.map((set) => {
          const level = levelById(set.levelId);
          const best = getSectionBest(profileName, "chunks", set.id);
          return `
            <button class="level-card chunk-set-card" data-id="${set.id}" style="--accent:${level.color}">
              <span class="level-icon">${set.emoji}</span>
              <span class="topic-text">
                <span class="level-label">${set.title}</span>
                <span class="topic-summary">${set.desc}</span>
                <span class="topic-level">${shortLevelLabel(level)} · ${set.sentences.length}문장</span>
              </span>
              <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", backToHome);
  root.querySelectorAll(".chunk-set-card").forEach((btn) => {
    btn.addEventListener("click", () => startSet(btn.dataset.id));
  });
}

// ctx: { set, item, index, total, correctCount, actions: { tapChunk, next, quit } }
function renderChunkSessionScreen(root, ctx) {
  const { set, item, index, total, correctCount, actions } = ctx;
  const level = levelById(set.levelId);
  const { sentence, step } = item;
  const done = step >= CHUNK_STEPS.length;
  const current = CHUNK_STEPS[step];

  const chunkHtml = sentence.chunks
    .map((c, i) => {
      const found = !done && CHUNK_STEPS.slice(0, step).some((s) => s.role === c.role);
      const role = CHUNK_ROLES[c.role];
      const cls = done || found ? " revealed" : item.wrongChunk === i ? " wrong shake" : "";
      return `
        <button class="chunk${cls}" data-chunk="${i}" style="--role:${role.color}" ${done || found ? "disabled" : ""}>
          <span class="chunk-en">${c.en}</span>
          ${done || found ? `<span class="chunk-role">${role.label}</span>` : ""}
        </button>`;
    })
    .join(`<span class="chunk-slash" aria-hidden="true">/</span>`);

  root.innerHTML = `
    <div class="screen screen-quiz"${levelThemeStyle(level)}>
      ${quizTopbarHtml({ label: `✂️ 끊어 읽기 · ${set.title}`, index, total, scoreText: `한 번에 ${correctCount}`, progressCount: done ? index + 1 : index })}

      <div class="question-card chunk-card">
        <p class="question-label">${done ? (item.mistakes === 0 ? "🎉 한 번에 찾았어요!" : "👍 덩어리로 나눠 읽어 봐요") : current.prompt}</p>
        <div class="chunk-row">${chunkHtml}</div>
        ${!done ? `<p class="chunk-tip">💡 ${current.tip}</p>` : ""}
      </div>

      ${
        done
          ? `
        <div class="explain-card">
          <p class="section-title">직독직해</p>
          <p class="chunk-translation">${sentence.chunks.map((c) => `<span style="--role:${CHUNK_ROLES[c.role].color}">${c.ko}</span>`).join(" / ")}</p>
          <div class="explain-body"><span class="explain-icon">📝</span><p>${sentence.ko}</p></div>
          <button class="listen-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>🔊 문장 듣기</button>
        </div>
        ${roleLegendHtml()}
        <button class="primary-btn" id="nextBtn">${index === total - 1 ? "결과 보기" : "다음 문장"}</button>`
          : ""
      }
    </div>
  `;

  bindQuitConfirm(root, actions.quit);
  root.querySelectorAll(".chunk:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => actions.tapChunk(Number(btn.dataset.chunk)));
  });
  if (done) {
    root.querySelector("#listenBtn").addEventListener("click", () => speak(sentence.chunks.map((c) => c.en).join(" ")));
    const nextBtn = root.querySelector("#nextBtn");
    nextBtn.addEventListener("click", actions.next);
    nextBtn.focus({ preventScroll: true });
  }
}
