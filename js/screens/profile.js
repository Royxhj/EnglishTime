function renderProfileScreen(root, { selectProfile, addMember }) {
  const family = getFamily();
  const isFirstRun = family.length === 0;

  root.innerHTML = `
    <div class="screen screen-profile">
      <div class="screen-toolbar">${textSizeControlHtml()}</div>
      <h1 class="title">${isFirstRun ? "👋 반가워요!" : "누가 공부할까요?"}</h1>
      <p class="subtitle">${isFirstRun ? "함께 공부할 가족을 먼저 추가해 주세요. 이름은 이 기기에만 저장돼요." : "이름을 눌러서 시작해요"}</p>
      <div class="profile-grid">
        ${family
          .map((p) => {
            const { streak, today } = getStats(p.name);
            return `
            <button class="profile-card" data-name="${escapeHtml(p.name)}" style="--accent:${p.color}">
              <span class="profile-emoji">${p.emoji}</span>
              <span class="profile-name">${escapeHtml(p.name)}</span>
              <span class="profile-best">${streak > 0 ? `🔥 ${streak}일 연속` : "새로 시작해요"}${today > 0 ? " · 오늘 ✓" : ""}</span>
            </button>
          `;
          })
          .join("")}
        <button class="profile-card profile-card--add" id="addMemberBtn">
          <span class="profile-emoji">➕</span>
          <span class="profile-name">가족 추가</span>
        </button>
      </div>
      <div class="install-banner" id="installBanner" hidden></div>
    </div>
  `;

  bindTextSizeControl(root);
  mountInstallGuide(root.querySelector("#installBanner"), { onlyWhenOffered: true });
  root.querySelector("#addMemberBtn").addEventListener("click", addMember);
  root.querySelectorAll(".profile-card[data-name]").forEach((btn) => {
    btn.addEventListener("click", () => selectProfile(btn.dataset.name));
  });
}
