
const ANSWER_REVEAL_DELAY_MS = 700;

function themeStyle(ctx) {
  if (!ctx.levelColor) return "";
  return ` style="--primary:${ctx.levelColor}; --primary-dark:${ctx.levelColorDark || ctx.levelColor}"`;
}

function bindQuitButton(root, actions) {
  bindQuitConfirm(root, actions.quitQuiz);
}

function choiceTopbar(ctx, progressCount) {
  return quizTopbarHtml({ label: "📚 단어 퀴즈", index: ctx.index, total: ctx.total, scoreText: `점수 ${ctx.score}점`, progressCount });
}

function renderQuestionPhase(root, ctx) {
  const { question, index, actions } = ctx;
  const { data } = question;

  root.innerHTML = `
    <div class="screen screen-quiz"${themeStyle(ctx)}>
      ${choiceTopbar(ctx, index)}

      <div class="question-card">
        <p class="question-label">이 뜻을 가진 영어 단어는 무엇일까요?</p>
        <p class="question-meaning">${data.meaningKo}</p>
      </div>

      <div class="hint-row">
        <button class="hint-btn" id="pictureHintBtn" ${question.pictureHintUsed ? "disabled" : ""}>
          🖼 그림${question.pictureHintUsed ? " ✓" : ""}
        </button>
        <button class="hint-btn" id="descHintBtn" ${question.descHintUsed ? "disabled" : ""}>
          💬 설명${question.descHintUsed ? " ✓" : ""}
        </button>
        <button class="hint-btn" id="letterHintBtn" ${question.letterHintUsed ? "disabled" : ""}>
          🔤 글자${question.letterHintUsed ? " ✓" : ""}
        </button>
      </div>
      <div class="hint-reveal" id="hintReveal">
        ${question.pictureHintUsed ? `<div class="hint-item hint-picture">${data.emoji}</div>` : ""}
        ${question.descHintUsed ? `<div class="hint-item hint-desc">${data.desc}</div>` : ""}
        ${question.letterHintUsed ? `<div class="hint-item hint-letter">${letterHintPattern(data.word)}</div>` : ""}
      </div>

      <div class="choice-grid">
        ${question.choices
          .map((choice) => `<button class="choice-btn" data-choice="${choice}">${choice}</button>`)
          .join("")}
      </div>
    </div>
  `;

  bindQuitButton(root, actions);
  root.querySelector("#pictureHintBtn").addEventListener("click", () => actions.useHint("picture"));
  root.querySelector("#descHintBtn").addEventListener("click", () => actions.useHint("desc"));
  root.querySelector("#letterHintBtn").addEventListener("click", () => actions.useHint("letter"));

  let answered = false;
  root.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const choice = btn.dataset.choice;
      const isCorrect = choice === question.correctAnswer;

      root.querySelectorAll(".choice-btn").forEach((b) => {
        b.disabled = true;
        if (b.dataset.choice === question.correctAnswer) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });

      answerFeedback(isCorrect, btn);

      setTimeout(() => actions.selectAnswer(choice), ANSWER_REVEAL_DELAY_MS);
    });
  });
}

function renderDetailPhase(root, ctx) {
  const { question, index, total, actions } = ctx;
  const { data } = question;
  const isCorrect = question.selectedAnswer === question.correctAnswer;
  const isLast = index === total - 1;

  root.innerHTML = `
    <div class="screen screen-quiz"${themeStyle(ctx)}>
      ${choiceTopbar(ctx, index + 1)}

      <div class="result-banner ${isCorrect ? "correct" : "wrong"}" role="status">
        ${isCorrect ? "🎉 정답이에요!" : `❌ 아쉬워요! 정답은 ${data.word} 였어요`}
      </div>

      <div class="choice-explain">
        <p class="choice-explain-title">왜 정답/오답일까요?</p>
        ${question.choiceMeta
          .map((c) => {
            const wasMyPick = c.word === question.selectedAnswer;
            return `
            <div class="choice-explain-row ${c.isCorrect ? "correct" : "wrong"}${wasMyPick ? " mine" : ""}">
              <span class="choice-explain-mark">${c.isCorrect ? "✅" : "❌"}</span>
              <span class="choice-explain-word">${c.word}</span>
              <span class="choice-explain-meaning">${c.meaningKo}</span>
              ${c.isCorrect ? `<span class="choice-explain-tag">정답</span>` : wasMyPick ? `<span class="choice-explain-tag choice-explain-tag--mine">내가 고른 답</span>` : ""}
            </div>
          `;
          })
          .join("")}
      </div>

      <div class="word-detail-card">
        <div class="word-line">
          <span class="word-text">${data.word}</span>
          <button class="speak-btn" id="speakWordBtn" ${speechSupported ? "" : "disabled"}>🔊</button>
          <span class="ipa-text">${data.ipa}</span>
        </div>
        <div class="meaning-text">${data.meaningKo}</div>

        <div class="examples">
          <p class="examples-title">예문으로 익혀봐요</p>
          ${data.examples
            .map(
              (ex, i) => `
            <div class="example-item">
              <div class="example-en">
                <button class="speak-btn" data-example-index="${i}" ${speechSupported ? "" : "disabled"}>🔊</button>
                <span>${ex.en}</span>
              </div>
              <button class="example-toggle" data-toggle-index="${i}">뜻 보기</button>
              <div class="example-ko" id="exampleKo${i}" hidden>${ex.ko}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <button class="primary-btn" id="nextBtn">${isLast ? "결과 보기" : "다음 문제"}</button>
    </div>
  `;

  bindQuitButton(root, actions);
  root.querySelector("#speakWordBtn")?.addEventListener("click", () => speak(data.word));
  root.querySelectorAll("[data-example-index]").forEach((btn) => {
    btn.addEventListener("click", () => speak(data.examples[Number(btn.dataset.exampleIndex)].en));
  });
  root.querySelectorAll("[data-toggle-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const el = root.querySelector(`#exampleKo${btn.dataset.toggleIndex}`);
      el.hidden = !el.hidden;
      btn.textContent = el.hidden ? "뜻 보기" : "뜻 숨기기";
    });
  });
  const nextBtn = root.querySelector("#nextBtn");
  nextBtn.addEventListener("click", actions.nextQuestion);
  nextBtn.focus({ preventScroll: true });
}

function renderQuizScreen(root, ctx) {
  if (ctx.question.selectedAnswer === null) {
    renderQuestionPhase(root, ctx);
  } else {
    renderDetailPhase(root, ctx);
  }
}
