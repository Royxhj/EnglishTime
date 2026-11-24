// 파닉스·대화 표현 목록. 묶음(group)별로 주제 카드를 보여 준다.
function renderLessonListScreen(root, { profileName, title, subtitle, help, groups, topics, openLesson, back }) {
  const done = topics.filter((t) => getSectionBest(profileName, "basics", t.id)).length;
  let number = 0;
  const bottomLinks = [{ label: "🏠 홈으로", onClick: back }];

  root.innerHTML = `
    <div class="screen screen-notes">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">${title}</h1>
      <p class="subtitle">${subtitle} · ${done} / ${topics.length} 완료</p>
      <p class="settings-help">${help}</p>
      ${groups
        .map((g) => {
          const list = topics.filter((t) => t.group === g.id);
          if (list.length === 0) return "";
          return `
        <section class="group">
          <h2 class="lesson-group-title">${g.label}</h2>
          <div class="level-grid">
            ${list
              .map((t) => {
                number += 1;
                const best = getSectionBest(profileName, "basics", t.id);
                const stars = best ? basicStars(best.correct, best.total) : 0;
                return `
              <button class="level-card basic-topic-card" data-lesson="${t.id}" style="--accent:${g.color}">
                <span class="level-icon">${t.emoji}</span>
                <span class="topic-text">
                  <span class="level-label">${number}. ${t.title}</span>
                  <span class="topic-summary">${t.subtitle}</span>
                </span>
                <span class="level-best${best ? "" : " level-best-empty"}">${best ? "⭐".repeat(stars) : "시작"}</span>
              </button>`;
              })
              .join("")}
          </div>
        </section>`;
        })
        .join("")}
      ${bottomNavHtml(bottomLinks)}
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-lesson]").forEach((btn) => btn.addEventListener("click", () => openLesson(btn.dataset.lesson)));
  bindBottomNav(root, bottomLinks);
}
