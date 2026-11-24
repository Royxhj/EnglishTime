const MC_REVEAL_DELAY_MS = 700;
const LONG_CHOICE_LENGTH = 16;

// ctx: { question, index, total, correctCount, label, level, contextHtml, actions: { select, next, quit } }
function renderMcQuizScreen(root, ctx) {
  if (ctx.question.selectedAnswer === null) renderMcQuestionPhase(root, ctx);
  else renderMcDetailPhase(root, ctx);
}

function mcTopbar(ctx, progressCount) {
  return quizTopbarHtml({
    label: ctx.label,
    index: ctx.index,
    total: ctx.total,
    scoreText: `맞힘 ${ctx.correctCount}`,
    progressCount,
  });
}

function mcContext(ctx, open) {
  if (!ctx.contextHtml) return "";
  return `
    <details class="context-card"${open ? " open" : ""}>
      <summary>📄 지문 ${open ? "" : "다시 "}보기</summary>
      <div class="context-body">${ctx.contextHtml}</div>
    </details>
  `;
}

function renderMcQuestionPhase(root, ctx) {
  const { question, index, level, actions } = ctx;
  const isLong = !question.bigChoices && question.choices.some((c) => c.length > LONG_CHOICE_LENGTH);

  root.innerHTML = `
    <div class="screen screen-quiz"${levelThemeStyle(level)}>
      ${mcTopbar(ctx, index)}
      ${mcContext(ctx, true)}
      <div class="question-card">
        <p class="question-label">${question.label}</p>
        <p class="${question.bigEmoji ? "question-emoji" : question.big ? "question-meaning" : "grammar-question"}">${withBlank(question.q)}</p>
        ${question.ko ? `<p class="grammar-question-ko">${question.ko}</p>` : ""}
        ${
          question.speakText
            ? `<div class="listen-row">
          <button class="listen-btn" id="wordSayBtn" ${speechSupported ? "" : "disabled"}>🔊 다시 듣기</button>
          <button class="listen-btn" id="wordSlowBtn" ${speechSupported ? "" : "disabled"}>🐢 천천히</button>
        </div>`
            : ""
        }
        ${
          question.dialog
            ? `<div class="listen-row">
          <button class="listen-btn" id="dialogBtn" ${speechSupported ? "" : "disabled"}>▶ 대화 듣기</button>
          <button class="listen-btn" id="dialogSlowBtn" ${speechSupported ? "" : "disabled"}>🐢 천천히</button>
        </div>`
            : ""
        }
      </div>
      <div class="choice-grid${question.bigChoices ? " choice-grid--emoji" : isLong ? " choice-grid--list" : ""}">
        ${question.choices
          .map((c, i) => `<button class="choice-btn${isLong ? " choice-btn--long" : ""}" data-index="${i}">${c}</button>`)
          .join("")}
      </div>
    </div>
  `;

  bindQuitConfirm(root, () => {
    stopSpeaking();
    actions.quit();
  });
  if (question.speakText) {
    root.querySelector("#wordSayBtn").addEventListener("click", () => speak(question.speakText, { rate: 0.85 }));
    root.querySelector("#wordSlowBtn").addEventListener("click", () => speak(question.speakText, { rate: 0.55 }));
    // 문제를 열면 한 번 자동으로 들려준다
    if (!question.autoPlayed) {
      question.autoPlayed = true;
      setTimeout(() => speak(question.speakText, { rate: 0.85 }), 300);
    }
  }
  if (question.dialog) {
    root.querySelector("#dialogBtn").addEventListener("click", () => playDialog(question.dialog));
    root.querySelector("#dialogSlowBtn").addEventListener("click", () => playDialog(question.dialog, { rate: 0.65 }));
    // 문제를 열면 한 번 자동으로 들려준다
    if (!question.autoPlayed) {
      question.autoPlayed = true;
      setTimeout(() => playDialog(question.dialog), 400);
    }
  }

  let answered = false;
  root.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const choice = question.choices[Number(btn.dataset.index)];

      root.querySelectorAll(".choice-btn").forEach((b) => {
        b.disabled = true;
        const c = question.choices[Number(b.dataset.index)];
        if (c === question.correctAnswer) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });

      answerFeedback(choice === question.correctAnswer, btn);

      setTimeout(() => actions.select(choice), MC_REVEAL_DELAY_MS);
    });
  });
}

function renderMcDetailPhase(root, ctx) {
  const { question, index, total, level, actions } = ctx;
  const isCorrect = question.selectedAnswer === question.correctAnswer;
  const isLast = index === total - 1;

  root.innerHTML = `
    <div class="screen screen-quiz"${levelThemeStyle(level)}>
      ${mcTopbar(ctx, index + 1)}
      <div class="result-banner ${isCorrect ? "correct" : "wrong"}" role="status">
        ${isCorrect ? "🎉 정답이에요!" : `❌ 아쉬워요! 정답은 "${question.correctAnswer}"`}
      </div>

      <div class="explain-card">
        <p class="${question.bigEmoji ? "question-emoji" : "grammar-question"}">${question.speakText ? `${question.correctAnswer} <b>${question.speakText}</b>` : question.big ? question.q : withBlank(question.q, question.correctAnswer)}</p>
        ${question.ko ? `<p class="grammar-question-ko">${question.ko}</p>` : ""}
        ${!isCorrect ? `<p class="explain-mine">내가 고른 답: <b>${question.selectedAnswer}</b></p>` : ""}
        <div class="explain-body">
          <span class="explain-icon">💡</span>
          <p>${question.explain}</p>
        </div>
        ${question.dialog ? `<button class="listen-btn" id="dialogBtn" ${speechSupported ? "" : "disabled"}>🔊 대화 다시 듣기</button>` : ""}
        ${question.listenText ? `<button class="listen-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>🔊 ${question.kind === "word" ? "발음 듣기" : "문장 듣기"}</button>` : ""}
      </div>
      ${mcContext(ctx, false)}

      <button class="primary-btn" id="nextBtn">${isLast ? "결과 보기" : "다음 문제"}</button>
    </div>
  `;

  bindQuitConfirm(root, actions.quit);
  root.querySelector("#listenBtn")?.addEventListener("click", () => speak(question.listenText));
  root.querySelector("#dialogBtn")?.addEventListener("click", () => playDialog(question.dialog));
  const nextBtn = root.querySelector("#nextBtn");
  nextBtn.addEventListener("click", actions.next);
  nextBtn.focus({ preventScroll: true });
}
