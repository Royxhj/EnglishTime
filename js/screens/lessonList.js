// 파닉스·대화 표현 목록. 묶음(group)별로 주제 카드를 보여 준다.
// groupLevels가 있으면 내 단계 묶음을 먼저 펼치고 나머지는 "다른 단계 보기"로 접는다.
function renderLessonListScreen(root, { profileName, title, subtitle, help, groups, topics, openLesson, back, groupLevels }) {
  const done = topics.filter((t) => getSectionBest(profileName, "basics", t.id)).length;
  const bottomLinks = [{ label: "🏠 홈으로", onClick: back }];
  const { mine, others } = groupLevels ? splitByMyLevel(groups, (g) => groupLevels[g.id] || [], myLevelOf(profileName)) : { mine: groups, others: [] };
  // 번호는 접어 둔 묶음과 상관없이 원래 순서대로 매긴다
  const numberOf = new Map(topics.map((t, i) => [t.id, i + 1]));

  const groupHtml = (list) =>
    list
      .map((g) => {
        const items = topics.filter((t) => t.group === g.id);
        if (items.length === 0) return "";
        return `
        <section class="group">
          <h2 class="lesson-group-title">${g.label}</h2>
          <div class="level-grid">
            ${items
              .map((t) => {
                const best = getSectionBest(profileName, "basics", t.id);
                const stars = best ? basicStars(best.correct, best.total) : 0;
                return `
              <button class="level-card basic-topic-card" data-lesson="${t.id}" style="--accent:${g.color}">
                <span class="level-icon">${t.emoji}</span>
                <span class="topic-text">
                  <span class="level-label">${numberOf.get(t.id)}. ${t.title}</span>
                  <span class="topic-summary">${t.subtitle}</span>
                </span>
                <span class="level-best${best ? "" : " level-best-empty"}">${best ? "⭐".repeat(stars) : "시작"}</span>
              </button>`;
              })
              .join("")}
          </div>
        </section>`;
      })
      .join("");

  root.innerHTML = `
    <div class="screen screen-notes">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">${title}</h1>
      <p class="subtitle">${subtitle} · ${done} / ${topics.length} 완료</p>
      <p class="settings-help">${help}</p>
      ${groupHtml(mine)}
      ${
        others.length
          ? `<details class="other-levels"><summary class="basic-grade-title">다른 단계 보기 <span class="basic-grade-count">${others.length}묶음</span></summary>${groupHtml(others)}</details>`
          : ""
      }
      ${bottomNavHtml(bottomLinks)}
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-lesson]").forEach((btn) => btn.addEventListener("click", () => openLesson(btn.dataset.lesson)));
  bindBottomNav(root, bottomLinks);
}
