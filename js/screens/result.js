
function gradeMessage(score) {
  if (score >= 90) return { emoji: "🏆", text: "최고예요!" };
  if (score >= 70) return { emoji: "🎉", text: "잘했어요!" };
  if (score >= 50) return { emoji: "👍", text: "잘 하고 있어요!" };
  return { emoji: "💪", text: "다음엔 더 잘할 수 있어요!" };
}

function renderResultScreen(root, ctx) {
  const { score, questions, levelLabel, modeTitle, profileName, isNewBest, isReview, nextLevel, levelColor, actions } = ctx;
  const grade = gradeMessage(score);
  const correctCount = questions.filter((q) => q.selectedAnswer === q.correctAnswer).length;
  const wrongCount = questions.length - correctCount;
  const themeStyle = levelColor ? ` style="--primary:${levelColor}"` : "";
  const canPlayAgain = !isReview || getWrongWords(profileName).length > 0;

  root.innerHTML = `
    <div class="screen screen-result"${themeStyle}>
      <h1 class="title">${grade.emoji} ${grade.text}</h1>
      <p class="subtitle">${profileName}님 · ${modeTitle} · ${isReview ? "오답노트 복습" : levelLabel}</p>

      <div class="score-circle">
        <span class="score-number">${score}</span>
        <span class="score-max">/ 100점</span>
      </div>
      <p class="score-breakdown">정답 ${correctCount} · 오답 ${wrongCount}</p>
      ${isNewBest ? `<div class="new-best-badge">🌟 최고 기록 경신!</div>` : ""}

      ${!isReview && nextLevel && score >= 70 ? `
        <button class="next-level-cta" id="nextLevelBtn">
          🚀 다음 단계 "${nextLevel.label}"에 도전해보세요!
        </button>
      ` : ""}
      ${wrongCount > 0 && !isReview ? `
        <button class="review-cta" id="reviewCtaBtn">📝 틀린 단어 바로 복습하기</button>
      ` : ""}

      <div class="answer-summary">
        ${questions
          .map((q, i) => {
            const correct = q.selectedAnswer === q.correctAnswer;
            return `
            <div class="summary-row ${correct ? "correct" : "wrong"}">
              <span class="summary-index">${i + 1}</span>
              <span class="summary-word">${q.data.word}</span>
              <span class="summary-meaning">${q.data.meaningKo}</span>
              <span class="summary-mark">${correct ? "✅" : "❌"}</span>
            </div>
          `;
          })
          .join("")}
      </div>

      ${isReview && !canPlayAgain ? `<div class="new-best-badge">🎉 오답노트를 모두 비웠어요!</div>` : ""}

      <div class="result-actions">
        ${canPlayAgain ? `<button class="primary-btn" id="playAgainBtn">${isReview ? "🔁 남은 오답 다시 풀기" : "🔁 다시 도전하기"}</button>` : ""}
        <button class="${canPlayAgain ? "secondary-btn" : "primary-btn"}" id="changeLevelBtn">단계 다시 선택</button>
        <button class="secondary-btn" id="goHomeBtn">홈으로</button>
      </div>
    </div>
  `;

  root.querySelector("#playAgainBtn")?.addEventListener("click", actions.playAgain);
  root.querySelector("#changeLevelBtn").addEventListener("click", actions.changeLevel);
  root.querySelector("#goHomeBtn").addEventListener("click", actions.goHome);
  root.querySelector("#nextLevelBtn")?.addEventListener("click", () => actions.selectLevel(nextLevel.id));
  root.querySelector("#reviewCtaBtn")?.addEventListener("click", actions.startReview);

  if (score >= 80) burstConfetti(36);
}
