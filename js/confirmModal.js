function showConfirmModal({ message, confirmText = "확인", cancelText = "취소", onConfirm }) {
  document.querySelector(".modal-overlay")?.remove();
  const previousFocus = document.activeElement;

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalMessage">
      <p class="modal-message" id="modalMessage">${message}</p>
      <div class="modal-actions">
        <button class="secondary-btn" id="modalCancelBtn">${cancelText}</button>
        <button class="primary-btn modal-confirm-btn" id="modalConfirmBtn">${confirmText}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKey);
    previousFocus?.focus?.({ preventScroll: true });
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  overlay.querySelector("#modalCancelBtn").addEventListener("click", close);
  overlay.querySelector("#modalConfirmBtn").addEventListener("click", () => {
    close();
    onConfirm();
  });
  overlay.querySelector("#modalCancelBtn").focus();
}
