function renderGrammarListScreen(root, { profileName, startQuiz, startReview, backToHome }) {
  const wrongCount = getGrammarWrongIds(profileName).length;
  const doneCount = GRAMMAR_TOPICS.filter((t) => getSectionBest(profileName, "grammar", t.id)).length;

  root.innerHTML = `
    <div class="screen screen-grammar-list">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">✏️ 문법 문제</h1>
      <p class="subtitle">주제를 고르면 바로 문제가 나와요. 개념은 📘 문법 노트에서 봐요 · ${doneCount} / ${GRAMMAR_TOPICS.length} 완료</p>

      ${wrongCount > 0 ? `
        <button class="review-card" id="reviewBtn">
          <span class="review-emoji">📝</span>
          <span class="review-text">
            <span class="review-title">문법 오답노트 복습</span>
            <span class="review-desc">틀렸던 문제 ${wrongCount}개를 다시 풀어봐요</span>
          </span>
        </button>
      ` : ""}

      <div class="level-grid">
        ${GRAMMAR_TOPICS.map((topic, i) => {
          const level = levelById(topic.levelId);
          const best = getSectionBest(profileName, "grammar", topic.id);
          const perfect = best && best.correct === best.total;
          return `
            <button class="level-card topic-card" data-id="${topic.id}" style="--accent:${level.color}">
              <span class="level-icon">${topic.emoji}</span>
              <span class="topic-text">
                <span class="level-label">${i + 1}. ${topic.title}</span>
                <span class="topic-summary">${topic.summary}</span>
                <span class="topic-level">${shortLevelLabel(level)}</span>
              </span>
              <span class="level-best${best ? "" : " level-best-empty"}">${perfect ? "⭐ " : ""}${ratioLabel(best)}</span>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", backToHome);
  root.querySelector("#reviewBtn")?.addEventListener("click", startReview);
  root.querySelectorAll(".topic-card").forEach((btn) => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.id));
  });
}
