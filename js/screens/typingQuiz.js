const TYPING_REVEAL_DELAY_MS = 600;

const WORD_MODES = {
  choice: { emoji: "📚", title: "뜻 보고 고르기", desc: "뜻을 보고 알맞은 단어 고르기" },
  spelling: { emoji: "⌨️", title: "철자 쓰기", desc: "뜻을 보고 영어 단어를 직접 쓰기" },
  dictation: { emoji: "🎧", title: "받아쓰기", desc: "발음을 듣고 영어 단어를 쓰기" },
};

// ctx: { mode, question, index, total, score, level, actions: { submit, next, quit } }
function renderTypingQuizScreen(root, ctx) {
  if (ctx.question.selectedAnswer === null) renderTypingQuestionPhase(root, ctx);
  else renderTypingDetailPhase(root, ctx);
}

function typingTopbar(ctx, progressCount) {
  return quizTopbarHtml({
    label: WORD_MODES[ctx.mode].title,
    index: ctx.index,
    total: ctx.total,
    scoreText: `점수 ${ctx.score}점`,
    progressCount,
  });
}

function typingHintHtml(type, data) {
  if (type === "picture") return `<div class="hint-item hint-picture">${data.emoji}</div>`;
  if (type === "desc") return `<div class="hint-item hint-desc">${data.desc}</div>`;
  if (type === "meaning") return `<div class="hint-item hint-desc">뜻: <b>${data.meaningKo}</b></div>`;
  return `<div class="hint-item hint-letter">${letterHintPattern(data.word)}</div>`;
}

function renderTypingQuestionPhase(root, ctx) {
  const { mode, question, index, level, actions } = ctx;
  const { data } = question;
  const isDictation = mode === "dictation";
  const hints = isDictation
    ? [["meaning", "💬 뜻 보기"], ["letter", "🔤 글자 수"]]
    : [["picture", "🖼 그림"], ["desc", "💬 설명"], ["letter", "🔤 글자 수"]];
  question.hintsUsed ||= {};

  root.innerHTML = `
    <div class="screen screen-quiz"${levelThemeStyle(level)}>
      ${typingTopbar(ctx, index)}
      <div class="question-card">
        ${
          isDictation
            ? `
          <p class="question-label">잘 듣고 영어 단어를 써 보세요</p>
          <div class="listen-row">
            <button class="big-listen-btn" id="playBtn" aria-label="다시 듣기">🔊</button>
            <button class="listen-btn" id="slowBtn">🐢 천천히</button>
          </div>`
            : `
          <p class="question-label">이 뜻을 가진 영어 단어를 써 보세요</p>
          <p class="question-meaning">${data.meaningKo}</p>`
        }
      </div>

      <div class="hint-row" style="grid-template-columns:repeat(${hints.length}, 1fr)">
        ${hints
          .map(([type, label]) => `<button class="hint-btn" data-hint="${type}" ${question.hintsUsed[type] ? "disabled" : ""}>${label}${question.hintsUsed[type] ? " ✓" : ""}</button>`)
          .join("")}
      </div>
      <div class="hint-reveal" id="hintReveal">${hints.filter(([t]) => question.hintsUsed[t]).map(([t]) => typingHintHtml(t, data)).join("")}</div>

      <form class="typing-form" id="typingForm" autocomplete="off">
        <input class="typing-input" id="typingInput" type="text" placeholder="영어로 입력하세요"
          autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="정답 입력" />
        <div class="typing-actions">
          <button type="button" class="secondary-btn" id="skipBtn">모르겠어요</button>
          <button type="submit" class="primary-btn">확인</button>
        </div>
      </form>
    </div>
  `;

  bindQuitConfirm(root, actions.quit);

  const input = root.querySelector("#typingInput");
  const reveal = root.querySelector("#hintReveal");
  root.querySelectorAll("[data-hint]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.hint;
      if (question.hintsUsed[type]) return;
      question.hintsUsed[type] = true;
      btn.disabled = true;
      btn.textContent += " ✓";
      reveal.insertAdjacentHTML("beforeend", typingHintHtml(type, data));
      input.focus();
    });
  });

  if (isDictation) {
    root.querySelector("#playBtn").addEventListener("click", () => speak(data.word, { rate: 0.85 }));
    root.querySelector("#slowBtn").addEventListener("click", () => speak(data.word, { rate: 0.55 }));
    if (!question.autoPlayed) {
      question.autoPlayed = true;
      speak(data.word, { rate: 0.85 });
    }
  }

  let done = false;
  const finish = (typed) => {
    if (done) return;
    done = true;
    const isCorrect = typed !== "" && normalizeTyped(typed) === normalizeTyped(data.word);
    input.disabled = true;
    input.classList.add(isCorrect ? "correct" : "wrong");
    answerFeedback(isCorrect, input);
    setTimeout(() => actions.submit(typed, isCorrect), TYPING_REVEAL_DELAY_MS);
  };

  root.querySelector("#typingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
      input.focus();
      return;
    }
    finish(input.value);
  });
  root.querySelector("#skipBtn").addEventListener("click", () => finish(""));
  input.focus({ preventScroll: true });
}

function renderTypingDetailPhase(root, ctx) {
  const { question, index, total, level, actions } = ctx;
  const { data } = question;
  const isCorrect = question.selectedAnswer === question.correctAnswer;
  const typed = question.typedAnswer || "";
  const nearMiss = !isCorrect && typed !== "" && editDistance(normalizeTyped(typed), normalizeTyped(data.word)) === 1;
  const ex = data.examples[0];

  root.innerHTML = `
    <div class="screen screen-quiz"${levelThemeStyle(level)}>
      ${typingTopbar(ctx, index + 1)}
      <div class="result-banner ${isCorrect ? "correct" : "wrong"}" role="status">
        ${isCorrect ? "🎉 정답이에요!" : nearMiss ? "😮 아깝다! 한 글자만 달라요" : "❌ 아쉬워요!"}
      </div>

      ${
        !isCorrect
          ? `
        <div class="typed-compare">
          <div><span class="typed-label">내가 쓴 답</span><span class="typed-value typed-mine">${typed ? escapeHtml(typed) : "(모르겠어요)"}</span></div>
          <div><span class="typed-label">정답</span><span class="typed-value typed-answer">${data.word}</span></div>
        </div>`
          : ""
      }

      <div class="word-detail-card">
        <div class="word-line">
          <span class="word-text">${data.word}</span>
          <button class="speak-btn" id="speakWordBtn" aria-label="발음 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
          <span class="ipa-text">${data.ipa}</span>
        </div>
        <div class="meaning-text">${data.meaningKo}</div>
        <div class="example-item">
          <div class="example-en">
            <button class="speak-btn" id="speakExampleBtn" aria-label="예문 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
            <span>${ex.en}</span>
          </div>
          <div class="example-ko example-ko--always">${ex.ko}</div>
        </div>
      </div>

      <button class="primary-btn" id="nextBtn">${index === total - 1 ? "결과 보기" : "다음 문제"}</button>
    </div>
  `;

  bindQuitConfirm(root, actions.quit);
  root.querySelector("#speakWordBtn").addEventListener("click", () => speak(data.word));
  root.querySelector("#speakExampleBtn").addEventListener("click", () => speak(ex.en));
  const nextBtn = root.querySelector("#nextBtn");
  nextBtn.addEventListener("click", actions.next);
  nextBtn.focus({ preventScroll: true });
}
