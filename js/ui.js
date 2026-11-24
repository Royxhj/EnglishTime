// ── 글자 크기 (기기별 설정) ──
const TEXT_SCALE_KEY = "englishword:textScale";
const TEXT_SCALES = [
  { scale: 1, label: "보통" },
  { scale: 1.25, label: "크게" },
  { scale: 1.5, label: "아주 크게" },
];

function defaultTextScale() {
  return window.matchMedia("(min-width: 1024px)").matches ? 1.25 : 1;
}

function getTextScale() {
  try {
    const saved = Number(localStorage.getItem(TEXT_SCALE_KEY));
    if (TEXT_SCALES.some((t) => t.scale === saved)) return saved;
  } catch {
    // 저장소를 못 쓰면 기본값
  }
  return defaultTextScale();
}

function applyTextScale(scale) {
  document.documentElement.style.setProperty("--ui-scale", String(scale));
}

function textSizeControlHtml() {
  const current = getTextScale();
  return `
    <div class="text-size" role="group" aria-label="글자 크기">
      <span class="text-size-label">글자</span>
      ${TEXT_SCALES.map(
        (t, i) => `<button class="text-size-btn${t.scale === current ? " active" : ""}" data-scale="${t.scale}"
          aria-pressed="${t.scale === current}" aria-label="글자 ${t.label}" title="${t.label}" style="font-size:${13 + i * 4}px">가</button>`
      ).join("")}
    </div>
  `;
}

function bindTextSizeControl(root) {
  const buttons = root.querySelectorAll("[data-scale]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const scale = Number(btn.dataset.scale);
      try {
        localStorage.setItem(TEXT_SCALE_KEY, String(scale));
      } catch {
        // 저장 실패해도 이번 화면에는 적용
      }
      applyTextScale(scale);
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });
    });
  });
}

// ── 테마 (auto | light | dark) ──
function applyTheme(theme) {
  if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
  else delete document.documentElement.dataset.theme;
}

// ── 알림 토스트 ──
function showToast(html) {
  let stack = document.querySelector(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    stack.setAttribute("aria-live", "polite");
    document.body.appendChild(stack);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = html;
  stack.appendChild(toast);
  setTimeout(() => toast.classList.add("toast--out"), 3200);
  setTimeout(() => toast.remove(), 3600);
}

function announceBadges(badges) {
  if (badges.length === 0) return;
  playSound("badge");
  badges.forEach((b) => showToast(`<span class="toast-emoji">${b.emoji}</span><span><b>새 배지!</b> ${b.title}<br><small>${b.desc}</small></span>`));
}

// 정답이면 컨페티와 효과음, 오답이면 흔들기와 효과음.
function answerFeedback(isCorrect, wrongEl) {
  if (isCorrect) {
    burstConfetti();
    playSound("correct");
  } else {
    wrongEl?.classList.add("shake");
    playSound("wrong");
  }
}

// 긴 화면 맨 아래의 돌아가기 버튼. links: [{ label, onClick }]
function bottomNavHtml(links) {
  return `<nav class="bottom-nav" aria-label="돌아가기">${links.map((l, i) => `<button class="quick-link" data-bottom-nav="${i}">${l.label}</button>`).join("")}</nav>`;
}

function bindBottomNav(root, links) {
  root.querySelectorAll("[data-bottom-nav]").forEach((btn) => btn.addEventListener("click", links[Number(btn.dataset.bottomNav)].onClick));
}

// 여러 개 중 하나를 고르는 버튼 묶음 (data-<name> 속성으로 값 구분)
function segmentedHtml(name, options, current) {
  return `
    <div class="segmented" role="radiogroup">
      ${options.map((o) => `<button class="segmented-btn${o.id === current ? " active" : ""}" data-${name}="${o.id}" role="radio" aria-checked="${o.id === current}">${o.label}</button>`).join("")}
    </div>
  `;
}

function bindSegmented(root, name, onChange) {
  const buttons = root.querySelectorAll(`[data-${name}]`);
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-checked", String(b === btn));
      });
      onChange(btn.dataset[name]);
    })
  );
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function levelById(levelId) {
  return LEVELS.find((lv) => lv.id === levelId) || null;
}

function levelThemeStyle(level) {
  return level ? ` style="--primary:${level.color}; --primary-dark:${level.colorDark}"` : "";
}

function shortLevelLabel(level) {
  return level.label.split(" (")[0];
}

function withBlank(text, fill) {
  if (!text.includes("___")) return text;
  const inner = fill ? `<span class="blank blank-filled">${fill}</span>` : `<span class="blank"></span>`;
  return text.replace("___", inner);
}

function ratioLabel(best) {
  return best ? `${best.correct} / ${best.total}` : "도전 전";
}

function quizTopbarHtml({ label, index, total, scoreText, progressCount }) {
  return `
    <button class="quit-btn" id="quitQuizBtn">✕ 그만하기</button>
    <div class="quiz-topbar">
      <div class="progress">${label ? `${label} · ` : ""}${index + 1} / ${total}</div>
      <div class="score-live">${scoreText}</div>
    </div>
    <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${progressCount}">
      <div class="progress-bar-fill" style="width:${(progressCount / total) * 100}%"></div>
    </div>
  `;
}

function bindQuitConfirm(root, onConfirm) {
  root.querySelector("#quitQuizBtn")?.addEventListener("click", () => {
    showConfirmModal({
      message: "지금 그만두면 이번 기록은 저장되지 않아요. 그만할까요?",
      confirmText: "그만하기",
      cancelText: "계속 풀기",
      onConfirm,
    });
  });
}
