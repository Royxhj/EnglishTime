// 오프라인 캐시. 캐시에 있으면 바로 보여 주고, 뒤에서 새 버전을 받아 다음 실행 때 반영한다.
// 앱 파일을 추가·삭제하면 아래 목록을 고친다. Netlify 배포 때는 캐시 이름 뒤에 커밋 번호가 자동으로 붙는다.
const CACHE = "englishword-2c9f48d";

const APP_FILES = [
  "./",
  "index.html",
  "app.js",
  "manifest.webmanifest",
  "css/style.css",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
];

self.addEventListener("install", (event) => {
  // 브라우저의 HTTP 캐시에 남은 예전 파일을 받지 않도록 항상 서버에서 새로 받는다.
  const fresh = APP_FILES.map((url) => new Request(url, { cache: "reload" }));
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(fresh)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request, { ignoreSearch: true });
      const network = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => null);

      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      const response = await network;
      if (response) return response;
      // 오프라인에서 처음 보는 주소로 들어오면 앱 첫 화면을 보여 준다.
      return request.mode === "navigate" ? cache.match("index.html") : Response.error();
    })
  );
});
