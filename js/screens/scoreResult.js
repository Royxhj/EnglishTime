// 문법 · 독해 · 끊어 읽기 · 오늘의 학습이 함께 쓰는 결과 화면.
// ctx: { subtitle, correct, total, level, isNewBest, rows: [{ html, ok }], reviewCta: { label, onClick }?,
//        actions: [{ label, onClick, primary? }] }
function renderScoreResultScreen(root, ctx) {
  const { subtitle, correct, total, level, isNewBest, rows, reviewCta, actions } = ctx;
  const percent = Math.round((correct / total) * 100);
  const grade = gradeMessage(percent);

  root.innerHTML = `
    <div class="screen screen-result"${levelThemeStyle(level)}>
      <h1 class="title">${grade.emoji} ${grade.text}</h1>
      <p class="subtitle">${subtitle}</p>

      <div class="score-circle">
        <span class="score-number">${correct}</span>
        <span class="score-max">/ ${total}문제</span>
      </div>
      <p class="score-breakdown">정답률 ${percent}%</p>
      ${isNewBest ? `<div class="new-best-badge">🌟 최고 기록 경신!</div>` : ""}
      ${reviewCta ? `<button class="review-cta" id="reviewCtaBtn">${reviewCta.label}</button>` : ""}

      <div class="answer-summary">
        ${rows
          .map(
            (row, i) => `
          <div class="summary-row">
            <span class="summary-index">${i + 1}</span>
            <span class="summary-meaning summary-meaning--text">${row.html}</span>
            <span class="summary-mark">${row.ok ? "✅" : "❌"}</span>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="result-actions">
        ${actions
          .map((a, i) => `<button class="${a.primary ? "primary-btn" : "secondary-btn"}" data-action="${i}">${a.label}</button>`)
          .join("")}
      </div>
    </div>
  `;

  root.querySelector("#reviewCtaBtn")?.addEventListener("click", reviewCta.onClick);
  root.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", actions[Number(btn.dataset.action)].onClick);
  });

  if (percent >= 80) burstConfetti(36);
}
