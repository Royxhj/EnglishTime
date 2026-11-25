// 📚 이어지는 이야기책 · 📓 영어 일기 · ⭐ 별 상점

// ── 📚 이야기책 ──
const STORY_PASS = 2; // 이 개수 이상 맞히면 다음 장이 열린다

function findStoryChapter(id) {
  for (const s of STORY_SERIES) {
    const c = s.chapters.find((x) => x.id === id);
    if (c) return { series: s, chapter: c };
  }
  return null;
}

function storyChapterPassed(profileName, chapterId) {
  const best = getSectionBest(profileName, "story", chapterId);
  return !!best && best.correct >= STORY_PASS;
}

function storyChapterOpen(profileName, series, i) {
  return i === 0 || storyChapterPassed(profileName, series.chapters[i - 1].id);
}

function renderStoryListScreen(root, { profileName, open, back }) {
  const myLevel = myLevelOf(profileName);
  const sorted = [...STORY_SERIES].sort((a, b) => (b.levelId === myLevel) - (a.levelId === myLevel));
  root.innerHTML = `
    <div class="screen screen-stories">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📚 이어지는 이야기책</h1>
      <p class="subtitle">한 장씩 읽고 문제를 ${STORY_PASS}개 이상 맞히면 다음 장이 열려요</p>
      ${sorted
        .map((s) => {
          const lv = levelById(s.levelId);
          const done = s.chapters.filter((c) => storyChapterPassed(profileName, c.id)).length;
          return `
          <section class="story-series" style="--accent:${lv.color}">
            <div class="story-head">
              <span class="story-cover">${s.emoji}</span>
              <div><b>${s.title}</b><small>${shortLevelLabel(lv)} · ${s.summary}</small></div>
              <span class="level-best${done ? "" : " level-best-empty"}">${done} / ${s.chapters.length}장</span>
            </div>
            <ol class="story-chapters">
              ${s.chapters
                .map((c, i) => {
                  const openable = storyChapterOpen(profileName, s, i);
                  const passed = storyChapterPassed(profileName, c.id);
                  return `<li><button class="story-chapter${passed ? " done" : ""}" data-chapter="${c.id}" ${openable ? "" : "disabled"}>
                    <span class="story-ch-no">${i + 1}장</span>
                    <span class="story-ch-title">${openable ? `${c.emoji} ${c.title}` : "🔒 앞 장을 먼저 읽어요"}</span>
                    <span class="story-ch-mark">${passed ? "✅" : openable ? "›" : ""}</span>
                  </button></li>`;
                })
                .join("")}
            </ol>
          </section>`;
        })
        .join("")}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-chapter]").forEach((b) => b.addEventListener("click", () => open(b.dataset.chapter)));
}

// ── 📓 영어 일기 ──
const DIARY_KEEP = 60;

function findDiaryTemplate(id) {
  return DIARY_TEMPLATES.find((t) => t.id === id) || null;
}

// 고른 표현 번호(picks)로 일기 문장을 만든다
function diaryLines(tpl, picks) {
  return tpl.lines.map((line, i) => {
    const opt = line.options[picks[i]];
    return opt ? { en: line.en.replace("{}", opt[0]), ko: line.ko.replace("{}", opt[1]) } : null;
  });
}

function diaryDateLabel(key) {
  const [, m, d] = key.split("-").map(Number);
  return `${m}월 ${d}일`;
}

function renderDiaryListScreen(root, { profileName, write, back }) {
  const entries = getDiaryEntries(profileName);
  root.innerHTML = `
    <div class="screen screen-diary">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">📓 영어 일기</h1>
      <p class="subtitle">문장 틀에 알맞은 표현을 골라 영어 일기를 완성해요</p>
      <h2 class="section-title">✏️ 새 일기 쓰기</h2>
      <div class="level-grid">
        ${DIARY_TEMPLATES.map(
          (t) => `
          <button class="level-card" data-tpl="${t.id}">
            <span class="level-icon">${t.emoji}</span>
            <span class="topic-text"><span class="level-label">${t.title}</span><span class="topic-summary">${t.lines.length}줄 · ${t.lines[0].en.replace("{}", "___")}</span></span>
          </button>`
        ).join("")}
      </div>
      <h2 class="section-title">📔 내 일기장 <small>${entries.length}편</small></h2>
      ${
        entries.length
          ? entries
              .map((e, k) => {
                const tpl = findDiaryTemplate(e.t);
                const lines = diaryLines(tpl, e.p);
                return `
            <article class="diary-entry">
              <div class="diary-entry-head"><span>${tpl.emoji} ${diaryDateLabel(e.d)} · ${tpl.title}</span><button class="speak-btn" data-read="${k}" aria-label="일기 듣기" ${speechSupported ? "" : "disabled"}>🔊</button></div>
              ${lines.map((l) => `<p class="diary-en">${l.en}</p><p class="diary-ko">${l.ko}</p>`).join("")}
            </article>`;
              })
              .join("")
          : `<p class="settings-help">아직 쓴 일기가 없어요. 위에서 주제를 골라 첫 일기를 써 봐요!</p>`
      }
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-tpl]").forEach((b) => b.addEventListener("click", () => write(b.dataset.tpl)));
  root.querySelectorAll("[data-read]").forEach((b) =>
    b.addEventListener("click", () => {
      const e = entries[Number(b.dataset.read)];
      speak(diaryLines(findDiaryTemplate(e.t), e.p).map((l) => l.en).join(" "), { rate: 0.85 });
    })
  );
}

function renderDiaryWriteScreen(root, { draft, actions }) {
  const tpl = findDiaryTemplate(draft.tplId);
  const lines = diaryLines(tpl, draft.picks);
  const complete = lines.every(Boolean);
  root.innerHTML = `
    <div class="screen screen-diary">
      <button class="back-btn" id="backBtn">← 일기장</button>
      <h1 class="title">${tpl.emoji} ${tpl.title}</h1>
      <p class="subtitle">줄마다 마음에 드는 표현을 하나씩 골라요 · ${lines.filter(Boolean).length} / ${tpl.lines.length}</p>
      ${tpl.lines
        .map((line, i) => {
          const filled = lines[i];
          const [before, after] = line.en.split("{}");
          return `
          <section class="diary-line${filled ? " filled" : ""}">
            <p class="diary-en">${before}<span class="blank${filled ? " blank-filled" : ""}">${filled ? line.options[draft.picks[i]][0] : ""}</span>${after}</p>
            <p class="diary-ko">${filled ? filled.ko : line.ko.replace("{}", "___")}</p>
            <div class="diary-options">
              ${line.options.map((o, k) => `<button class="chip-btn${draft.picks[i] === k ? " on" : ""}" data-line="${i}" data-opt="${k}">${o[0]} <small>${o[1]}</small></button>`).join("")}
            </div>
          </section>`;
        })
        .join("")}
      <div class="sticky-cta diary-actions">
        <button class="secondary-btn" id="readBtn" ${complete && speechSupported ? "" : "disabled"}>🔊 읽어 주기</button>
        <button class="primary-btn" id="saveBtn" ${complete ? "" : "disabled"}>💾 일기장에 저장</button>
      </div>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelector("#saveBtn").addEventListener("click", actions.save);
  root.querySelector("#readBtn").addEventListener("click", () => speak(lines.map((l) => l.en).join(" "), { rate: 0.85 }));
  root.querySelectorAll("[data-opt]").forEach((b) =>
    b.addEventListener("click", () => {
      const line = tpl.lines[Number(b.dataset.line)];
      speak(line.en.replace("{}", line.options[Number(b.dataset.opt)][0]), { rate: 0.85 });
      actions.pick(Number(b.dataset.line), Number(b.dataset.opt));
    })
  );
}

// ── ⭐ 별 상점: 문제를 풀어 모은 별로 캐릭터를 꾸민다 ──
const STAR_EVERY = 5; // 문제 5개마다 별 1개
const SHOP_CATS = [
  { id: "hat", title: "🎩 모자" },
  { id: "bg", title: "🖼️ 배경" },
  { id: "pal", title: "🐾 함께 다니는 친구" },
];
const SHOP_ITEMS = [
  { id: "hat-cap", cat: "hat", emoji: "🧢", name: "야구 모자", price: 20 },
  { id: "hat-ribbon", cat: "hat", emoji: "🎀", name: "리본", price: 20 },
  { id: "hat-flower", cat: "hat", emoji: "🌸", name: "꽃 핀", price: 25 },
  { id: "hat-top", cat: "hat", emoji: "🎩", name: "신사 모자", price: 40 },
  { id: "hat-grad", cat: "hat", emoji: "🎓", name: "학사모", price: 50 },
  { id: "hat-crown", cat: "hat", emoji: "👑", name: "왕관", price: 80 },
  { id: "bg-sky", cat: "bg", emoji: "☁️", name: "하늘", price: 15, bg: "linear-gradient(135deg, #cfe8ff, #f2f9ff)" },
  { id: "bg-forest", cat: "bg", emoji: "🌲", name: "숲", price: 25, bg: "linear-gradient(135deg, #c7f0d2, #f0fff4)" },
  { id: "bg-sunset", cat: "bg", emoji: "🌇", name: "노을", price: 35, bg: "linear-gradient(135deg, #ffd1a8, #ffe9f0)" },
  { id: "bg-candy", cat: "bg", emoji: "🍭", name: "사탕 나라", price: 45, bg: "linear-gradient(135deg, #ffd6f0, #e6dcff)" },
  { id: "bg-rainbow", cat: "bg", emoji: "🌈", name: "무지개", price: 70, bg: "linear-gradient(135deg, #ffd6d6, #fff3c4, #d6f5d6, #d6e9ff, #ecd6ff)" },
  { id: "bg-gold", cat: "bg", emoji: "✨", name: "황금빛", price: 0, perfect: 2, bg: "linear-gradient(135deg, #ffe58a, #fff6cf, #ffd34d)" },
  { id: "pal-dog", cat: "pal", emoji: "🐶", name: "강아지", price: 30 },
  { id: "pal-cat", cat: "pal", emoji: "🐱", name: "고양이", price: 30 },
  { id: "pal-frog", cat: "pal", emoji: "🐸", name: "개구리", price: 30 },
  { id: "pal-rabbit", cat: "pal", emoji: "🐰", name: "토끼", price: 40 },
  { id: "pal-panda", cat: "pal", emoji: "🐼", name: "판다", price: 50 },
  { id: "pal-dragon", cat: "pal", emoji: "🐲", name: "아기 용", price: 100 },
  { id: "pal-trophy", cat: "pal", emoji: "🏆", name: "개근 트로피", price: 0, perfect: 1 },
  { id: "hat-santa", cat: "hat", emoji: "🎅", name: "산타 모자", price: 0, advent: 5 },
  { id: "pal-snowman", cat: "pal", emoji: "⛄", name: "눈사람 친구", price: 0, advent: 12 },
  { id: "bg-snow", cat: "bg", emoji: "❄️", name: "눈 내리는 밤", price: 0, advent: 20, bg: "linear-gradient(135deg, #c3d9f5, #eef5ff, #dfe9f7)" },
  { id: "pal-tree", cat: "pal", emoji: "🎄", name: "크리스마스트리", price: 0, advent: 25 },
];

// 개근 선물: 한 달 개근을 perfect번 하면 공짜로 받는다
// 어드벤트 선물: 크리스마스 도장을 advent개 모으면 공짜로 받는다
function shopItemUnlocked(profileName, item) {
  const p = getProfileData(profileName);
  if (item.advent) return p.advent.length >= item.advent;
  return !item.perfect || p.perfectMonths.length >= item.perfect;
}

function shopItem(id) {
  return SHOP_ITEMS.find((it) => it.id === id) || null;
}

function shopStatus(profileName) {
  const p = getProfileData(profileName);
  const earned = Math.floor(p.totalAnswered / STAR_EVERY) + p.bonusStars;
  return { earned, stars: Math.max(0, earned - p.shop.spent), owned: p.shop.owned, equip: p.shop.equip, toNext: STAR_EVERY - (p.totalAnswered % STAR_EVERY) };
}

// 꾸민 캐릭터: 모자 + 캐릭터 + 친구
function dressedPetHtml(profileName, petEmoji, big, scale = 1) {
  const { equip } = shopStatus(profileName);
  const hat = shopItem(equip.hat);
  const pal = shopItem(equip.pal);
  return `<span class="pet-avatar${big ? " big" : ""}">${hat ? `<span class="pet-hat" aria-hidden="true">${hat.emoji}</span>` : ""}<span class="pet-emoji" aria-hidden="true"${scale !== 1 ? ` style="display:inline-block;transform:scale(${scale});transform-origin:bottom center"` : ""}>${petEmoji}</span>${pal ? `<span class="pet-pal" aria-hidden="true">${pal.emoji}</span>` : ""}</span>`;
}

function petBackgroundStyle(profileName) {
  const bg = shopItem(shopStatus(profileName).equip.bg);
  return bg ? { cls: " pet-themed", style: ` style="background:${bg.bg}"` } : { cls: "", style: "" };
}

function renderShopScreen(root, { profileName, actions }) {
  const s = shopStatus(profileName);
  const pet = petStatus(profileName);
  const theme = petBackgroundStyle(profileName);
  root.innerHTML = `
    <div class="screen screen-shop">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">⭐ 별 상점</h1>
      <p class="subtitle">문제를 ${STAR_EVERY}개 풀 때마다 ⭐ 1개 · 다음 별까지 ${s.toNext}문제</p>
      <section class="pet-big${theme.cls}"${theme.style}>
        ${dressedPetHtml(profileName, pet.stage.emoji, true, pet.stage.scale)}
        <p class="shop-stars">⭐ <b>${s.stars}</b>개 있어요</p>
      </section>
      ${SHOP_CATS.map(
        (cat) => `
        <h2 class="section-title">${cat.title}</h2>
        <div class="shop-grid">
          ${SHOP_ITEMS.filter((it) => it.cat === cat.id)
            .map((it) => {
              const owned = s.owned.includes(it.id);
              const on = s.equip[cat.id] === it.id;
              const unlocked = shopItemUnlocked(profileName, it);
              const label = on ? "벗기" : owned ? "꾸미기" : !unlocked ? (it.advent ? `🎄 도장 ${it.advent}개` : `📆 개근 ${it.perfect}번`) : it.price ? `⭐ ${it.price}` : "🎁 받기";
              return `<button class="shop-item${on ? " on" : ""}${owned ? " owned" : ""}" data-item="${it.id}" ${!owned && (!unlocked || s.stars < it.price) ? "disabled" : ""}>
                <span class="shop-emoji"${it.bg ? ` style="background:${it.bg}"` : ""}>${it.emoji}</span>
                <b>${it.name}</b>
                <small>${label}</small>
              </button>`;
            })
            .join("")}
        </div>`
      ).join("")}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelectorAll("[data-item]").forEach((b) => b.addEventListener("click", () => actions.tap(b.dataset.item)));
}
