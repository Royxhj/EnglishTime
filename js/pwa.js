let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.dispatchEvent(new Event("pwa-install-change"));
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  document.dispatchEvent(new Event("pwa-install-change"));
  showToast(`<span class="toast-emoji">📲</span><span>홈 화면에 앱을 설치했어요</span>`);
});

// 새 버전의 서비스 워커가 이 페이지를 넘겨받으면 true. app.js가 안전한 화면에서 새로고침한다.
let appUpdateReady = false;

function registerServiceWorker() {
  // 서비스 워커는 http(s)에서만 동작한다. 파일로 연 경우(file://)는 건너뛴다.
  if (!("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return;
  const hadController = !!navigator.serviceWorker.controller;

  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => {
      // 휴대폰 앱은 닫아도 메모리에 남아 이어서 열리므로, 다시 볼 때마다 새 버전을 확인한다.
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") reg.update().catch(() => {});
      });
    })
    .catch(() => {});

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    // 처음 설치할 때도 이 이벤트가 오지만, 그때는 이미 최신이라 새로고침할 필요가 없다.
    if (!hadController || appUpdateReady) return;
    appUpdateReady = true;
    document.dispatchEvent(new Event("pwa-update-ready"));
  });
}

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

// installed | prompt | ios | file | manual
function installState() {
  if (isStandalone()) return "installed";
  if (!location.protocol.startsWith("http")) return "file";
  if (deferredInstallPrompt) return "prompt";
  if (isIos()) return "ios";
  return "manual";
}

function installGuideHtml() {
  switch (installState()) {
    case "installed":
      return `<p class="settings-help">✅ 지금 앱으로 실행 중이에요.</p>`;
    case "prompt":
      return `<button class="primary-btn" data-install>📲 홈 화면에 앱 설치</button>`;
    case "ios":
      return `<p class="settings-help install-steps">Safari 아래쪽의 <b>공유 버튼(⬆️)</b>을 누르고 <b>'홈 화면에 추가'</b>를 고르세요.</p>`;
    case "file":
      return `<p class="settings-help">파일로 열면 설치할 수 없어요. 웹 주소(https://…)로 열면 설치할 수 있어요.</p>`;
    default:
      return `<p class="settings-help">브라우저 메뉴(⋮)에서 <b>'앱 설치'</b> 또는 <b>'홈 화면에 추가'</b>를 고르세요.</p>`;
  }
}

// container 안의 설치 안내를 그리고, 설치 가능 상태가 바뀌면 다시 그린다.
// onlyWhenOffered면 바로 설치할 수 있을 때(설치 버튼·아이폰 안내)만 보여 준다.
function mountInstallGuide(container, { onlyWhenOffered = false } = {}) {
  const draw = () => {
    if (!container.isConnected) {
      document.removeEventListener("pwa-install-change", draw);
      return;
    }
    const show = !onlyWhenOffered || canOfferInstall();
    container.hidden = !show;
    container.innerHTML = show ? installGuideHtml() : "";
    container.querySelector("[data-install]")?.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      draw();
    });
  };
  document.addEventListener("pwa-install-change", draw);
  draw();
}

function canOfferInstall() {
  const state = installState();
  return state === "prompt" || state === "ios";
}
