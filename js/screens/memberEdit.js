const MEMBER_EMOJIS = ["👨", "👩", "🧒", "👦", "👧", "👶", "👴", "👵", "🧑", "🐶", "🐱", "🐰", "🦊", "🐻", "🐼", "🦁"];
const MEMBER_COLORS = ["#4d96ff", "#ff6b81", "#ffb703", "#38b26b", "#8338ec", "#16a3a3", "#ff8b3d", "#3a5a78"];
const MEMBER_NAME_MAX = 8;

// member가 null이면 새 가족 추가
function renderMemberEditScreen(root, { member, onSave, onDelete, onCancel }) {
  const isNew = !member;
  const draft = member ? { ...member } : { name: "", emoji: MEMBER_EMOJIS[4], color: MEMBER_COLORS[4] };
  const canDelete = !isNew;

  root.innerHTML = `
    <div class="screen screen-member">
      <button class="back-btn" id="backBtn">← 돌아가기</button>
      <h1 class="title">${isNew ? "가족 추가" : "프로필 수정"}</h1>

      <div class="member-preview" id="memberPreview"></div>

      <form class="settings-card" id="memberForm" autocomplete="off">
        <label class="field-label" for="memberName">이름</label>
        <input class="text-input" id="memberName" maxlength="${MEMBER_NAME_MAX}" value="${escapeHtml(draft.name)}" placeholder="예: 할머니" />
        <p class="field-error" id="nameError" hidden></p>

        <p class="field-label">아이콘</p>
        <div class="picker-grid" role="radiogroup" aria-label="아이콘">
          ${MEMBER_EMOJIS.map((e) => `<button type="button" class="picker-item${e === draft.emoji ? " active" : ""}" data-emoji="${e}" role="radio" aria-checked="${e === draft.emoji}">${e}</button>`).join("")}
        </div>

        <p class="field-label">색깔</p>
        <div class="picker-grid picker-grid--colors" role="radiogroup" aria-label="색깔">
          ${MEMBER_COLORS.map((c) => `<button type="button" class="color-dot${c === draft.color ? " active" : ""}" data-color="${c}" style="--dot:${c}" role="radio" aria-checked="${c === draft.color}" aria-label="색 ${c}"></button>`).join("")}
        </div>

        <button type="submit" class="primary-btn">${isNew ? "추가하기" : "저장하기"}</button>
      </form>

      ${canDelete ? `<button class="danger-link" id="deleteBtn">이 프로필과 기록 삭제</button>` : ""}
    </div>
  `;

  const nameInput = root.querySelector("#memberName");
  const preview = root.querySelector("#memberPreview");
  const updatePreview = () => {
    preview.style.setProperty("--accent", draft.color);
    preview.innerHTML = `<span class="profile-emoji">${draft.emoji}</span><span class="profile-name">${escapeHtml(nameInput.value.trim() || "이름")}</span>`;
  };
  updatePreview();
  nameInput.addEventListener("input", updatePreview);

  const bindPicker = (selector, key) => {
    const items = root.querySelectorAll(selector);
    items.forEach((btn) =>
      btn.addEventListener("click", () => {
        draft[key] = btn.dataset[key];
        items.forEach((b) => {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-checked", String(b === btn));
        });
        updatePreview();
      })
    );
  };
  bindPicker("[data-emoji]", "emoji");
  bindPicker("[data-color]", "color");

  root.querySelector("#memberForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.replace(/[<>&"'`]/g, "").trim();
    const error = root.querySelector("#nameError");
    const taken = getFamily().some((m) => m.name === name && m.name !== member?.name);
    const message = !name ? "이름을 입력해 주세요." : taken ? "같은 이름이 이미 있어요." : "";
    error.hidden = !message;
    error.textContent = message;
    if (message) {
      nameInput.focus();
      return;
    }
    onSave({ name, emoji: draft.emoji, color: draft.color });
  });

  root.querySelector("#backBtn").addEventListener("click", onCancel);
  root.querySelector("#deleteBtn")?.addEventListener("click", () => {
    showConfirmModal({
      message: `${escapeHtml(member.name)} 프로필과 모든 학습 기록을 삭제할까요? 되돌릴 수 없어요.`,
      confirmText: "삭제",
      cancelText: "취소",
      onConfirm: onDelete,
    });
  });

  if (isNew) nameInput.focus();
}
