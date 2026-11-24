function renderLevelScreen(root, { profileName, wordMode, selectLevel, backToHome, startReview }) {
  const wrongWordCount = getWrongWords(profileName).length;
  const info = WORD_MODES[wordMode];
  const preferred = getPreferredLevel(profileName);

  root.innerHTML = `
    <div class="screen screen-level">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">${info.emoji} ${info.title}</h1>
      <p class="subtitle">${info.desc} · 단계를 고르면 10문제가 나와요</p>

      ${wrongWordCount > 0 ? `
        <button class="review-card" id="reviewBtn">
          <span class="review-emoji">📝</span>
          <span class="review-text">
            <span class="review-title">오답노트 복습</span>
            <span class="review-desc">틀렸던 단어 ${wrongWordCount}개를 ${info.title} 방식으로 다시 풀어봐요</span>
          </span>
        </button>
      ` : ""}

      <div class="level-grid">
        ${LEVELS.map((lv) => {
          const best = getBestScore(profileName, lv.id, wordMode);
          return `
            <button class="level-card" data-id="${lv.id}" style="--accent:${lv.color}">
              <span class="level-icon">${lv.emoji}</span>
              <span class="topic-text">
                <span class="level-label">${lv.label}</span>
                ${lv.id === preferred ? `<span class="topic-level">⭐ 내 단계</span>` : ""}
              </span>
              ${best !== null ? `<span class="level-best">최고 ${best}점</span>` : `<span class="level-best level-best-empty">기록 없음</span>`}
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", backToHome);
  root.querySelector("#reviewBtn")?.addEventListener("click", startReview);
  root.querySelectorAll(".level-card").forEach((btn) => {
    btn.addEventListener("click", () => selectLevel(btn.dataset.id));
  });
}
