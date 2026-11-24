// 성인 실전 연습: 💬 회화 롤플레이(채팅처럼 상대 말을 듣고 내 대답 고르기)와 📧 업무 이메일 문장 고르기.
const EMAIL_TEST_SIZE = 10;

function buildEmailQuestions() {
  return shuffle(EMAIL_TASKS)
    .slice(0, EMAIL_TEST_SIZE)
    .map((t, i) => ({
      id: `email|${i}`,
      kind: "email",
      label: "📧 이 상황에 가장 알맞은 문장은?",
      q: t.situation,
      ko: null,
      choices: shuffle(t.choices),
      correctAnswer: t.choices[t.answer],
      explain: t.why,
      summary: t.choices[t.answer],
      listenText: t.choices[t.answer],
      selectedAnswer: null,
    }));
}

function findRoleplay(id) {
  return ROLEPLAYS.find((r) => r.id === id) || null;
}

function buildRoleplaySession(id) {
  const rp = findRoleplay(id);
  return {
    id,
    turn: 0,
    items: rp.turns.map((t) => ({ order: shuffle(t.choices.map((_, i) => i)), wrong: [], solved: false, firstTry: undefined })),
    spokenTurn: -1,
  };
}

function renderPracticeListScreen(root, { profileName, startRoleplay, startEmail, back }) {
  const emailBest = getSectionBest(profileName, "email", "all");
  root.innerHTML = `
    <div class="screen screen-practice">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">💼 실전 연습</h1>
      <p class="subtitle">일터와 여행에서 바로 쓰는 영어</p>

      <section class="group">
        <h2 class="group-title">💬 회화 롤플레이</h2>
        <p class="settings-help">상대의 말을 듣고 가장 자연스러운 내 대답을 골라요. 대화가 채팅처럼 이어져요. 틀리면 이유를 보고 다시 고를 수 있어요.</p>
        <div class="level-grid">
          ${ROLEPLAYS.map((r) => {
            const best = getSectionBest(profileName, "roleplay", r.id);
            return `
            <button class="level-card" data-rp="${r.id}" style="--accent:#3a5a78">
              <span class="level-icon">${r.emoji}</span>
              <span class="topic-text">
                <span class="level-label">${r.title}</span>
                <span class="topic-summary">${r.setting}</span>
              </span>
              <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
            </button>`;
          }).join("")}
        </div>
      </section>

      <section class="group">
        <h2 class="group-title">📧 업무 이메일</h2>
        <p class="settings-help">상황에 맞는 정중한 문장을 고르고, 무례한 문장을 부드럽게 고쳐 써요. ${EMAIL_TASKS.length}문제 중 ${EMAIL_TEST_SIZE}문제가 나와요.</p>
        <button class="level-card" id="emailBtn" style="--accent:#2b6f8f">
          <span class="level-icon">📧</span>
          <span class="topic-text">
            <span class="level-label">이메일 문장 고르기</span>
            <span class="topic-summary">시작 · 부탁 · 첨부 · 사과 · 거절 · 마무리 · 고쳐 쓰기</span>
          </span>
          <span class="level-best${emailBest ? "" : " level-best-empty"}">${ratioLabel(emailBest)}</span>
        </button>
      </section>
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-rp]").forEach((b) => b.addEventListener("click", () => startRoleplay(b.dataset.rp)));
  root.querySelector("#emailBtn").addEventListener("click", startEmail);
}

function renderRoleplayScreen(root, { session, actions }) {
  const rp = findRoleplay(session.id);
  const turn = rp.turns[session.turn];
  const item = session.items[session.turn];
  const correct = session.items.filter((it) => it.firstTry).length;
  const bubble = (who, text, ko) => `
    <div class="chat-row chat-row--${who}">
      <div class="chat-bubble">
        <p>${text}</p>
        ${ko ? `<small>${ko}</small>` : ""}
      </div>
    </div>`;

  const history = rp.turns
    .slice(0, session.turn)
    .map((t) => bubble("them", t.them, t.ko) + bubble("me", t.choices[t.answer]))
    .join("");
  const lastWrong = item.wrong[item.wrong.length - 1];

  root.innerHTML = `
    <div class="screen screen-quiz" style="--accent:#3a5a78">
      ${quizTopbarHtml({ label: `${rp.emoji} ${rp.title}`, index: session.turn, total: rp.turns.length, scoreText: `한 번에 ${correct}`, progressCount: session.turn })}
      <p class="settings-help">📍 ${rp.setting}</p>
      <div class="chat-log" id="chatLog">
        ${history}
        <div class="chat-row chat-row--them">
          <div class="chat-bubble">
            <p>${turn.them}</p>
            <details class="chat-ko"><summary>해석 보기</summary><small>${turn.ko}</small></details>
          </div>
          <button class="speak-btn" id="sayAgainBtn" aria-label="다시 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
        </div>
        ${item.solved ? bubble("me", turn.choices[turn.answer]) : ""}
      </div>
      ${
        item.solved
          ? `<div class="result-banner correct" role="status">${item.firstTry ? "🎉 자연스러워요!" : "👍 이제 맞았어요"}</div>
             <div class="explain-card"><div class="explain-body"><span class="explain-icon">💡</span><p>${turn.why}</p></div></div>
             <button class="primary-btn" id="nextTurnBtn">${session.turn === rp.turns.length - 1 ? "결과 보기" : "대화 이어 가기 ▶"}</button>`
          : `<p class="question-label">내 대답을 골라요</p>
             <div class="choice-grid choice-grid--list">
               ${item.order.map((i) => `<button class="choice-btn choice-btn--long${item.wrong.includes(i) ? " wrong" : ""}" data-choice="${i}" ${item.wrong.includes(i) ? "disabled" : ""}>${turn.choices[i]}</button>`).join("")}
             </div>
             ${lastWrong !== undefined ? `<p class="writing-feedback wrong">🤔 어색해요. ${turn.why}</p>` : ""}`
      }
    </div>
  `;

  bindQuitConfirm(root, () => {
    stopSpeaking();
    actions.quit();
  });
  const log = root.querySelector("#chatLog");
  log.scrollTop = log.scrollHeight;
  root.querySelector("#sayAgainBtn").addEventListener("click", () => speak(turn.them));
  if (session.spokenTurn !== session.turn) {
    session.spokenTurn = session.turn;
    setTimeout(() => speak(turn.them), 300);
  }
  root.querySelectorAll("[data-choice]").forEach((b) => b.addEventListener("click", () => actions.choose(Number(b.dataset.choice))));
  const next = root.querySelector("#nextTurnBtn");
  next?.addEventListener("click", actions.next);
  next?.focus({ preventScroll: true });
}
