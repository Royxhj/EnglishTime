// 🎯 단계 진단 테스트 · 🗺️ 학습 지도 · 🌧️ 단어 비 · 📜 이달의 상장 · 🔒 부모님 잠금 · 💾 백업 알림

// ── 🎯 단계 진단 테스트: 단계마다 4문제씩, 쉬운 단계부터 ──
const DIAG_PER_LEVEL = 4;
const DIAG_PASS = 3;

function newDiagnosis() {
  const items = LEVELS.flatMap((lv) =>
    shuffle((WORD_BANK[lv.id] || []).filter((w) => /^[a-z]+$/i.test(w.word)))
      .slice(0, DIAG_PER_LEVEL)
      .map((w) => {
        const others = shuffle((WORD_BANK[lv.id] || []).filter((x) => x.meaningKo !== w.meaningKo)).slice(0, 3).map((x) => x.meaningKo);
        return { w, levelId: lv.id, choices: shuffle([w.meaningKo, ...others]), picked: null };
      })
  );
  return { items, index: 0, done: false, scores: {}, recommend: null };
}

// 연달아 두 단계에서 1개 이하로 맞히면 일찍 끝낸다
function diagShouldStop(game) {
  const done = LEVELS.filter((lv) => game.items.filter((it) => it.levelId === lv.id).every((it) => it.picked !== null));
  if (done.length < 2) return false;
  const [a, b] = done.slice(-2).map((lv) => game.scores[lv.id] || 0);
  return a <= 1 && b <= 1;
}

// 연속으로 3/4 이상 맞힌 단계의 다음 단계를 추천한다 (맨 위면 그 단계)
function diagRecommend(scores) {
  let i = 0;
  while (i < LEVELS.length && (scores[LEVELS[i].id] || 0) >= DIAG_PASS) i++;
  return LEVELS[Math.min(i, LEVELS.length - 1)].id;
}

function renderDiagnosisScreen(root, { profileName, game, actions }) {
  if (!game) {
    const last = getProfileData(profileName).diag;
    root.innerHTML = `
      <div class="screen screen-diag">
        <button class="back-btn" id="backBtn">← 홈</button>
        <h1 class="title">🎯 단계 진단 테스트</h1>
        <p class="subtitle">단어 뜻을 골라서 나에게 맞는 단계를 찾아요</p>
        <section class="lesson-section"><p class="lesson-point-text">쉬운 단계부터 ${DIAG_PER_LEVEL}문제씩 나와요(최대 ${LEVELS.length * DIAG_PER_LEVEL}문제). 모르면 찍지 말고 <b>🤷 몰라요</b>를 눌러야 정확해요. 어려워지면 일찍 끝나요. 여기서 틀린 단어는 오답노트에 들어가지 않아요.</p></section>
        ${last ? `<section class="settings-card"><p class="settings-help">지난 진단 (${last.date}): <b>${levelById(last.levelId)?.label || ""}</b> 추천</p></section>` : ""}
        <button class="primary-btn" id="startBtn">시작하기</button>
      </div>`;
    root.querySelector("#backBtn").addEventListener("click", actions.back);
    root.querySelector("#startBtn").addEventListener("click", actions.start);
    return;
  }
  if (game.done) {
    const rec = levelById(game.recommend);
    const cur = getPreferredLevel(profileName);
    root.innerHTML = `
      <div class="screen screen-diag">
        <h1 class="title">🎯 진단 결과</h1>
        <section class="progress-card" style="--accent:${rec.color}">
          <p class="diag-rec">추천 단계<br><b>${rec.emoji} ${rec.label}</b></p>
          <p class="settings-help">${cur === rec.id ? "지금 단계와 같아요. 딱 맞게 공부하고 있어요! 👍" : "아는 단어와 모르는 단어가 섞인 단계가 공부하기 가장 좋아요."}</p>
        </section>
        <ul class="bar-list">
          ${LEVELS.map((lv) => {
            const tried = game.items.some((it) => it.levelId === lv.id && it.picked !== null);
            const s = game.scores[lv.id] || 0;
            return `<li><span class="bar-name">${lv.emoji} ${shortLevelLabel(lv)}</span>${barHtml(tried ? (s / DIAG_PER_LEVEL) * 100 : null, lv.color)}<span class="bar-value">${tried ? `${s}/${DIAG_PER_LEVEL}` : "–"}</span></li>`;
          }).join("")}
        </ul>
        <div class="result-actions">
          ${cur !== rec.id ? `<button class="primary-btn" id="applyBtn">✅ ${shortLevelLabel(rec)} 단계로 바꾸기</button>` : ""}
          <button class="secondary-btn" id="againBtn">🔁 다시 진단하기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelector("#applyBtn")?.addEventListener("click", () => actions.apply(rec.id));
    root.querySelector("#againBtn").addEventListener("click", actions.start);
    root.querySelector("#homeBtn").addEventListener("click", actions.back);
    return;
  }
  const it = game.items[game.index];
  const level = levelById(it.levelId);
  const total = game.items.length;
  root.innerHTML = `
    <div class="screen screen-diag no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress">${level.emoji} ${shortLevelLabel(level)} · ${game.index + 1} / ${total}</span>
      </div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${(game.index / total) * 100}%"></div></div>
      <div class="question-card">
        <p class="question-label">이 단어의 뜻은?</p>
        <p class="question-meaning">${it.w.word} <button class="speak-btn" id="sayBtn" aria-label="듣기" ${speechSupported ? "" : "disabled"}>🔊</button></p>
      </div>
      <div class="choice-grid">
        ${it.choices.map((c, i) => `<button class="choice-btn" data-c="${i}">${c}</button>`).join("")}
      </div>
      <button class="secondary-btn" id="skipBtn">🤷 몰라요</button>
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.back);
  root.querySelector("#sayBtn").addEventListener("click", () => speak(it.w.word, { rate: 0.85 }));
  root.querySelectorAll("[data-c]").forEach((b) => b.addEventListener("click", () => actions.pick(Number(b.dataset.c))));
  root.querySelector("#skipBtn").addEventListener("click", () => actions.pick(-1));
}

const diagnosisActions = {
  start: () => set({ diag: newDiagnosis(), screen: "diagnosis" }),
  pick: (i) => {
    const { diag: game } = store.getState();
    const it = game.items[game.index];
    if (!it || it.picked !== null) return;
    it.picked = i;
    if (i >= 0 && it.choices[i] === it.w.meaningKo) game.scores[it.levelId] = (game.scores[it.levelId] || 0) + 1;
    recordActivity(currentProfile());
    if (game.index + 1 >= game.items.length || diagShouldStop(game)) {
      game.done = true;
      game.recommend = diagRecommend(game.scores);
      saveDiagnosis(currentProfile(), game.recommend, game.scores);
      playSound("badge");
      announceBadges(checkNewBadges(currentProfile()));
    } else game.index += 1;
    set({});
  },
  apply: (levelId) => {
    setPreferredLevel(currentProfile(), levelId);
    showToast(`<span class="toast-emoji">✅</span><span>${levelById(levelId).label} 단계로 바꿨어요</span>`);
    goHome();
  },
  back: () => set({ diag: null, screen: "home" }),
};

// ── 🗺️ 학습 지도: 내 단계의 공부를 정거장처럼 이어 보여 준다 ──
function roadmapStations(profileName) {
  const level = getPreferredLevel(profileName);
  if (!level) return null;
  const best = (s, id) => getSectionBest(profileName, s, id);
  const passed = (s, id) => {
    const b = best(s, id);
    return !!b && b.correct / b.total >= 0.8;
  };
  const groups = [];
  const grades = BASIC_GRADES.filter((g) => g.levelId === level).map((g) => g.id);
  const basics = BASIC_TOPICS.filter((t) => grades.includes(t.grade));
  if (basics.length) groups.push({ title: "📘 문법", items: basics.map((t) => ({ emoji: t.emoji, title: t.title, done: !!best("basics", t.id), step: { type: "lesson", id: t.id } })) });
  const talks = TALK_TOPICS.filter((t) => TALK_GROUP_LEVELS[t.group]?.includes(level));
  if (talks.length) groups.push({ title: "💬 대화 표현", items: talks.map((t) => ({ emoji: t.emoji, title: t.title, done: !!best("basics", t.id), step: { type: "lesson", id: t.id } })) });
  const passages = READING_PASSAGES.filter((p) => p.levelId === level);
  if (passages.length) groups.push({ title: "📖 읽기", items: passages.map((p) => ({ emoji: p.emoji, title: p.title, done: !!best("reading", p.id) || isPassageRead(profileName, p.id), step: { type: "passage", id: p.id } })) });
  const chapters = STORY_SERIES.filter((s) => s.levelId === level).flatMap((s) => s.chapters.map((c, i) => ({ s, c, i })));
  if (chapters.length) groups.push({ title: "📚 이야기책", items: chapters.map(({ s, c, i }) => ({ emoji: c.emoji, title: `${s.title} ${c.no}장`, done: storyChapterPassed(profileName, c.id), locked: !storyChapterOpen(profileName, s, i), step: { type: "story", id: c.id } })) });
  const extra = [];
  for (const s of IRREGULAR_SETS.filter((x) => x.levelId === level)) extra.push({ emoji: "🔁", title: `불규칙 동사 ${s.title.split(":")[0]}`, done: passed("irregular", s.id), step: { type: "screen", screen: "irregular" } });
  if (LISTENING_SETS.some((s) => s.levelId === level)) extra.push({ emoji: "🎧", title: "듣기 평가", done: passed("listening", level), step: { type: "listening", id: level } });
  for (const g of BASIC_GRADES.filter((x) => x.levelId === level)) extra.push({ emoji: "📋", title: `${g.label.replace(/^\S+\s/, "")} 모의고사`, done: passed("exam", g.id), step: { type: "exam", id: g.id } });
  if (extra.length) groups.push({ title: "🏁 마무리 테스트", items: extra });
  return { level: levelById(level), groups };
}

function renderRoadmapScreen(root, { profileName, actions }) {
  const map = roadmapStations(profileName);
  if (!map) {
    root.innerHTML = `
      <div class="screen screen-roadmap">
        <button class="back-btn" id="backBtn">← 홈</button>
        <h1 class="title">🗺️ 학습 지도</h1>
        <section class="lesson-section"><p class="lesson-point-text">먼저 내 단계를 정해야 지도가 생겨요. <b>🎯 단계 진단 테스트</b>로 알맞은 단계를 찾아보세요.</p></section>
        <button class="primary-btn" id="diagBtn">🎯 단계 진단하러 가기</button>
      </div>`;
    root.querySelector("#backBtn").addEventListener("click", actions.back);
    root.querySelector("#diagBtn").addEventListener("click", actions.diagnose);
    return;
  }
  const all = map.groups.flatMap((g) => g.items);
  const done = all.filter((x) => x.done).length;
  const nowItem = all.find((x) => !x.done && !x.locked);
  let n = 0;
  root.innerHTML = `
    <div class="screen screen-roadmap" style="--accent:${map.level.color}">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🗺️ ${map.level.emoji} ${shortLevelLabel(map.level)} 학습 지도</h1>
      <p class="subtitle">정거장 ${done} / ${all.length} · ${Math.round((done / all.length) * 100)}% ${done === all.length ? "· 🏆 다 왔어요!" : ""}</p>
      <div class="progress-track"><span class="progress-fill" style="width:${(done / all.length) * 100}%"></span></div>
      ${map.groups
        .map(
          (g) => `
        <h2 class="section-title">${g.title} <small>${g.items.filter((x) => x.done).length}/${g.items.length}</small></h2>
        <ol class="road">
          ${g.items
            .map((x) => {
              const i = n++;
              const state = x.done ? "done" : x === nowItem ? "now" : x.locked ? "locked" : "";
              return `<li class="road-stop ${state} ${i % 2 ? "right" : "left"}"><button class="road-btn" data-i="${i}" ${x.locked ? "disabled" : ""}><span class="road-dot">${x.done ? "🚩" : x === nowItem ? "🐸" : x.locked ? "🔒" : x.emoji}</span><span class="road-title">${x.title}${x === nowItem ? "<small>지금 할 차례!</small>" : ""}</span></button></li>`;
            })
            .join("")}
        </ol>`
        )
        .join("")}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", actions.back);
  root.querySelectorAll(".road-btn").forEach((b) => b.addEventListener("click", () => actions.open(all[Number(b.dataset.i)].step)));
  root.querySelector(".road-stop.now")?.scrollIntoView({ block: "center" });
}

// ── 🌧️ 단어 비: 떨어지는 단어의 뜻을 땅에 닿기 전에 고른다 ──
const RAIN_LIVES = 3;
const RAIN_START_MS = 7000;
const RAIN_MIN_MS = 2600;
const RAIN_STEP_MS = 280;
let rainFrame = null;

function rainPool(levelId) {
  const list = (WORD_BANK[levelId] || []).filter((w) => /^[a-z]+$/i.test(w.word) && w.word.length <= 12);
  return list.filter((w, i) => list.findIndex((x) => x.meaningKo === w.meaningKo) === i);
}

function newWordRain(levelId) {
  return { levelId, pool: shuffle(rainPool(levelId)), next: 0, score: 0, lives: RAIN_LIVES, fallMs: RAIN_START_MS, done: false, isNewBest: false, misses: [] };
}

function rainNextWord(game) {
  if (game.next >= game.pool.length) {
    game.pool = shuffle(game.pool);
    game.next = 0;
  }
  const w = game.pool[game.next++];
  const others = shuffle(game.pool.filter((x) => x !== w)).slice(0, 3).map((x) => x.meaningKo);
  return { w, choices: shuffle([w.meaningKo, ...others]) };
}

function renderWordRainListScreen(root, { profileName, start, back }) {
  const myLevel = myLevelOf(profileName) || "elementary-low";
  const card = (lv) => {
    const best = getSectionBest(profileName, "wordrain", lv.id);
    return `
      <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
        <span class="level-icon">${lv.emoji}</span>
        <span class="topic-text"><span class="level-label">${lv.label}</span><span class="topic-summary">❤️ ${RAIN_LIVES}개 · 점점 빨라져요</span></span>
        <span class="level-best${best ? "" : " level-best-empty"}">${best ? `최고 ${best.correct}점` : "도전 전"}</span>
      </button>`;
  };
  const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevel);
  root.innerHTML = `
    <div class="screen screen-rain">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🌧️ 단어 비</h1>
      <p class="subtitle">떨어지는 단어의 뜻을 골라 땅에 닿기 전에 터뜨려요!</p>
      <section class="lesson-section"><p class="lesson-point-text">맞히면 💥 펑! 하나 맞힐 때마다 조금씩 빨라져요. 땅에 닿거나 틀리면 ❤️가 하나 줄어요.</p></section>
      ${levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length)}
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => start(b.dataset.level)));
}

function stopWordRain() {
  if (rainFrame) cancelAnimationFrame(rainFrame);
  rainFrame = null;
}

function renderWordRainScreen(root, { game, actions }) {
  stopWordRain();
  const level = levelById(game.levelId);
  if (game.done) {
    root.innerHTML = `
      <div class="screen screen-rain"${levelThemeStyle(level)}>
        <h1 class="title">🌧️ 단어 비 결과</h1>
        <div class="result-banner correct" role="status">💥 ${game.score}개 터뜨렸어요!${game.isNewBest ? " · 🏆 최고 기록!" : ""}</div>
        ${game.misses.length ? `<h2 class="section-title">놓친 단어</h2><ul class="guess-results">${game.misses.map((w) => `<li>${w.emoji} <b>${w.word}</b> <small>${w.meaningKo}</small><button class="chip-btn" data-say="${w.word}">🔊</button></li>`).join("")}</ul>` : ""}
        <div class="result-actions">
          <button class="primary-btn" id="againBtn">🔁 다시 하기</button>
          <button class="secondary-btn" id="listBtn">단계 고르기</button>
          <button class="secondary-btn" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>`;
    root.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => speak(b.dataset.say, { rate: 0.85 })));
    root.querySelector("#againBtn").addEventListener("click", actions.again);
    root.querySelector("#listBtn").addEventListener("click", actions.list);
    root.querySelector("#homeBtn").addEventListener("click", actions.home);
    return;
  }
  root.innerHTML = `
    <div class="screen screen-rain no-anim"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress"><span id="rainLives">${"❤️".repeat(game.lives)}</span> · 💥 <b id="rainScore">${game.score}</b></span>
      </div>
      <div class="rain-sky" id="rainSky"><div class="rain-drop" id="rainDrop"></div><div class="rain-ground"></div></div>
      <div class="choice-grid" id="rainChoices"></div>
    </div>`;
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);
  const sky = root.querySelector("#rainSky");
  const drop = root.querySelector("#rainDrop");
  const choicesEl = root.querySelector("#rainChoices");
  let cur = null;
  let started = 0;
  let locked = false;

  const lose = (reason) => {
    game.lives -= 1;
    game.misses.push(cur.w);
    playSound("wrong");
    root.querySelector("#rainLives").textContent = "❤️".repeat(Math.max(0, game.lives));
    drop.classList.add(reason === "ground" ? "splash" : "wrong");
    drop.innerHTML = `${cur.w.emoji} <b>${cur.w.word}</b><small>${cur.w.meaningKo}</small>`;
    if (game.lives <= 0) {
      stopWordRain();
      setTimeout(() => actions.finish(), 900);
      return;
    }
    setTimeout(spawn, 900);
  };

  const spawn = () => {
    if (!drop.isConnected) return;
    cur = rainNextWord(game);
    locked = false;
    drop.className = "rain-drop";
    drop.style.left = `${8 + Math.random() * 50}%`;
    drop.innerHTML = `<b>${cur.w.word}</b>`;
    choicesEl.innerHTML = cur.choices.map((c, i) => `<button class="choice-btn" data-c="${i}">${c}</button>`).join("");
    choicesEl.querySelectorAll("[data-c]").forEach((b) =>
      b.addEventListener("click", () => {
        if (locked) return;
        locked = true;
        const ok = cur.choices[Number(b.dataset.c)] === cur.w.meaningKo;
        recordActivity(currentProfile());
        if (ok) {
          game.score += 1;
          game.fallMs = Math.max(RAIN_MIN_MS, game.fallMs - RAIN_STEP_MS);
          root.querySelector("#rainScore").textContent = game.score;
          b.classList.add("correct");
          drop.classList.add("pop");
          drop.innerHTML = `💥 <b>${cur.w.word}</b>`;
          playSound("correct");
          stopWordRain();
          setTimeout(spawn, 450);
        } else {
          b.classList.add("wrong");
          stopWordRain();
          lose("wrong");
        }
      })
    );
    speak(cur.w.word, { rate: 0.9 });
    started = performance.now();
    const height = sky.clientHeight - 44;
    const tick = (t) => {
      if (!drop.isConnected) return stopWordRain();
      const p = (t - started) / game.fallMs;
      drop.style.transform = `translateY(${Math.min(1, p) * height}px)`;
      if (p >= 1) {
        locked = true;
        stopWordRain();
        lose("ground");
        return;
      }
      rainFrame = requestAnimationFrame(tick);
    };
    rainFrame = requestAnimationFrame(tick);
  };
  spawn();
}

const wordRainActions = {
  finish: () => {
    const { wordrain: game } = store.getState();
    if (!game || game.done) return;
    game.done = true;
    game.misses = [...new Set(game.misses)].slice(-8);
    game.isNewBest = recordBestCount(currentProfile(), "wordrain", game.levelId, game.score, game.score);
    if (game.isNewBest) burstConfetti(50);
    announceBadges(checkNewBadges(currentProfile()));
    set({});
  },
  again: () => set({ wordrain: newWordRain(store.getState().wordrain.levelId) }),
  list: () => set({ screen: "wordRainList" }),
  home: () => goHome(),
  quit: () => {
    stopWordRain();
    set({ screen: "wordRainList" });
  },
};

// ── 📜 이달의 상장 · 성적표 ──
function monthStats(profileName, offset) {
  const p = getProfileData(profileName);
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const prefix = `${first.getFullYear()}-${String(first.getMonth() + 1).padStart(2, "0")}`;
  const days = Object.entries(p.activity).filter(([k, n]) => k.startsWith(prefix) && n > 0);
  const answers = days.reduce((a, [, n]) => a + n, 0);
  const badges = Object.entries(p.badges).filter(([, d]) => typeof d === "string" && d.startsWith(prefix)).map(([id]) => BADGES.find((b) => b.id === id)).filter(Boolean);
  const perfect = p.perfectMonths.includes(prefix);
  const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const award = perfect
    ? { title: "개근상", emoji: "🏆", line: "한 달 동안 하루도 빠짐없이" }
    : days.length >= 15
      ? { title: "꾸준상", emoji: "🌟", line: "한 달 동안 꾸준히" }
      : answers >= 500
        ? { title: "열공상", emoji: "🔥", line: "한 달 동안 열심히" }
        : badges.length >= 3
          ? { title: "도전상", emoji: "🚀", line: "새로운 공부에 씩씩하게 도전하며" }
          : { title: "노력상", emoji: "🌱", line: "한 달 동안 성실하게" };
  return { year: first.getFullYear(), month: first.getMonth() + 1, days: days.length, daysInMonth, answers, badges, award };
}

function renderCertificateScreen(root, { profileName, offset, setOffset, back }) {
  const s = monthStats(profileName, offset);
  const member = findMember(profileName);
  const today = new Date();
  root.innerHTML = `
    <div class="screen screen-cert">
      <div class="print-toolbar no-print">
        <button class="back-btn" id="backBtn">← 돌아가기</button>
        <div class="segmented"><button class="segmented-btn${offset === -1 ? " active" : ""}" id="prevBtn">지난달</button><button class="segmented-btn${offset === 0 ? " active" : ""}" id="thisBtn">이번 달</button></div>
        <button class="primary-btn" id="printBtn">🖨️ 인쇄하기</button>
      </div>
      ${s.days === 0 ? `<p class="settings-help no-print">이 달에는 아직 공부한 기록이 없어요. 공부하면 상장이 만들어져요.</p>` : ""}
      <article class="cert">
        <p class="cert-no">제 ${s.year}-${String(s.month).padStart(2, "0")} 호</p>
        <h1 class="cert-title">상 장</h1>
        <p class="cert-award">${s.award.emoji} ${s.award.title}</p>
        <p class="cert-name">${member?.emoji || ""} ${escapeHtml(profileName)}</p>
        <p class="cert-body">위 사람은 ${s.year}년 ${s.month}월 ${s.award.line} 영어 공부를 하여<br><b>${s.days}일</b> 동안 <b>${s.answers}문제</b>를 풀었으므로 이 상장을 드립니다.</p>
        <div class="cert-stats">
          <div><b>${s.days}<small>/${s.daysInMonth}일</small></b><span>공부한 날</span></div>
          <div><b>${s.answers}</b><span>푼 문제</span></div>
          <div><b>${s.badges.length}</b><span>새 배지</span></div>
        </div>
        ${s.badges.length ? `<p class="cert-badges">${s.badges.slice(0, 8).map((b) => `${b.emoji} ${b.title}`).join(" · ")}</p>` : ""}
        <p class="cert-date">${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일</p>
        <p class="cert-from">우리 가족 영어 공부방 🐸</p>
      </article>
    </div>`;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelector("#prevBtn").addEventListener("click", () => setOffset(-1));
  root.querySelector("#thisBtn").addEventListener("click", () => setOffset(0));
  root.querySelector("#printBtn").addEventListener("click", () => window.print());
}

// ── 🔒 부모님 잠금: 4자리 비밀번호 (아이들이 실수로 기록을 지우지 않게) ──
const LOCKED_SCREENS = ["settings", "memberEdit", "wordListEdit"];
const PARENT_UNLOCK_MS = 5 * 60 * 1000;
let parentUnlockedUntil = 0;

function pinHash(pin) {
  let h = 2166136261;
  for (const ch of `englishword:${pin}`) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return h.toString(36);
}
const parentLockOn = () => !!getSettings().pinHash;
const parentUnlocked = () => !parentLockOn() || Date.now() < parentUnlockedUntil;

function renderParentLockScreen(root, { onUnlock, onCancel }) {
  let entered = "";
  let forgot = null;
  const draw = () => {
    root.innerHTML = `
      <div class="screen screen-lock no-anim">
        <h1 class="title">🔒 부모님 확인</h1>
        ${
          forgot
            ? `<p class="subtitle">비밀번호를 잊었다면 이 문제를 풀어 잠금을 풀어요</p>
               <p class="question-meaning">${forgot.a} × ${forgot.b} = ?</p>
               <form class="chain-type" id="forgotForm"><input id="forgotInput" type="number" inputmode="numeric" aria-label="답"><button class="secondary-btn" type="submit">✔</button></form>
               <button class="link-btn" id="backPinBtn">← 비밀번호 입력으로</button>`
            : `<p class="subtitle">이 화면은 부모님 비밀번호 4자리가 필요해요</p>
               <div class="pin-dots">${[0, 1, 2, 3].map((i) => `<span class="${i < entered.length ? "on" : ""}"></span>`).join("")}</div>
               <div class="pin-pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "⌫"].map((k) => (k === "" ? "<span></span>" : `<button class="pin-key" data-k="${k}">${k}</button>`)).join("")}</div>
               <button class="link-btn" id="forgotBtn">비밀번호를 잊었어요</button>`
        }
        <button class="secondary-btn" id="cancelBtn">취소</button>
      </div>`;
    root.querySelector("#cancelBtn").addEventListener("click", onCancel);
    root.querySelectorAll("[data-k]").forEach((b) =>
      b.addEventListener("click", () => {
        const k = b.dataset.k;
        entered = k === "⌫" ? entered.slice(0, -1) : (entered + k).slice(0, 4);
        if (entered.length === 4) {
          if (pinHash(entered) === getSettings().pinHash) {
            parentUnlockedUntil = Date.now() + PARENT_UNLOCK_MS;
            onUnlock();
            return;
          }
          entered = "";
          playSound("wrong");
          draw();
          root.querySelector(".pin-dots").classList.add("shake");
          return;
        }
        draw();
      })
    );
    root.querySelector("#forgotBtn")?.addEventListener("click", () => {
      forgot = { a: 100 + Math.floor(Math.random() * 900), b: 10 + Math.floor(Math.random() * 90) };
      draw();
    });
    root.querySelector("#backPinBtn")?.addEventListener("click", () => {
      forgot = null;
      draw();
    });
    root.querySelector("#forgotForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (Number(root.querySelector("#forgotInput").value) === forgot.a * forgot.b) {
        updateSettings({ pinHash: "" });
        showToast(`<span class="toast-emoji">🔓</span><span>잠금을 풀었어요. 설정에서 새 비밀번호를 정할 수 있어요.</span>`);
        onUnlock();
      } else {
        playSound("wrong");
        showToast(`<span class="toast-emoji">❌</span><span>답이 틀렸어요</span>`);
      }
    });
  };
  draw();
}

// 설정 화면의 잠금 칸
function parentLockSettingsHtml() {
  return `
    <section class="settings-card">
      <h2 class="section-title">🔒 부모님 잠금</h2>
      <p class="settings-help">설정 · 가족 수정 · 우리 집 단어장 고치기를 4자리 비밀번호로 잠가요. 한 번 풀면 5분 동안 열려 있어요. ${parentLockOn() ? "<b>지금 잠금이 켜져 있어요.</b>" : ""}</p>
      <div class="settings-actions">
        <input class="text-input pin-input" id="pinNew" type="password" inputmode="numeric" maxlength="4" placeholder="새 비밀번호 4자리" autocomplete="new-password">
        <button class="secondary-btn" id="pinSaveBtn">${parentLockOn() ? "비밀번호 바꾸기" : "잠금 켜기"}</button>
        ${parentLockOn() ? `<button class="secondary-btn" id="pinOffBtn">잠금 끄기</button>` : ""}
      </div>
    </section>`;
}

function bindParentLockSettings(root, refresh) {
  root.querySelector("#pinSaveBtn")?.addEventListener("click", () => {
    const pin = root.querySelector("#pinNew").value.trim();
    if (!/^\d{4}$/.test(pin)) {
      showToast(`<span class="toast-emoji">✋</span><span>숫자 4자리를 넣어 주세요</span>`);
      return;
    }
    updateSettings({ pinHash: pinHash(pin) });
    parentUnlockedUntil = Date.now() + PARENT_UNLOCK_MS;
    showToast(`<span class="toast-emoji">🔒</span><span>부모님 잠금을 켰어요. 비밀번호를 꼭 기억해 두세요!</span>`);
    refresh();
  });
  root.querySelector("#pinOffBtn")?.addEventListener("click", () => {
    updateSettings({ pinHash: "" });
    showToast(`<span class="toast-emoji">🔓</span><span>잠금을 껐어요</span>`);
    refresh();
  });
}

// ── 💾 백업 알림: 오래 백업하지 않았으면 홈에 알려 준다 ──
const BACKUP_REMIND_DAYS = 30;
const BACKUP_SNOOZE_DAYS = 7;
const daysSince = (key) => (key ? Math.floor((new Date(dateKey()) - new Date(key)) / 86400000) : Infinity);

function backupReminder() {
  const s = getSettings();
  if (daysSince(s.backupSnooze) < BACKUP_SNOOZE_DAYS) return null;
  const studyDays = new Set(getFamily().flatMap((m) => Object.keys(getProfileData(m.name).activity))).size;
  if (!s.lastBackup) return studyDays >= 7 ? { never: true, studyDays } : null;
  const ago = daysSince(s.lastBackup);
  return ago >= BACKUP_REMIND_DAYS ? { never: false, ago } : null;
}

function backupReminderHtml() {
  const r = backupReminder();
  if (!r) return "";
  return `
    <section class="backup-card">
      <p><b>💾 기록을 백업해 두세요</b><small>${r.never ? `${r.studyDays}일 동안 공부한 기록이 이 기기에만 있어요. 휴대폰을 바꾸거나 데이터를 지우면 사라져요.` : `마지막 백업이 ${r.ago}일 전이에요.`}</small></p>
      <div class="backup-btns"><button class="primary-btn" id="backupNowBtn">💾 지금 백업</button><button class="secondary-btn" id="backupLaterBtn">나중에</button></div>
    </section>`;
}

function bindBackupReminder(root) {
  root.querySelector("#backupNowBtn")?.addEventListener("click", () => {
    downloadBackup();
    showToast(`<span class="toast-emoji">💾</span><span>백업 파일을 저장했어요. 카톡 '나에게 보내기'나 클라우드에 올려 두면 더 안전해요.</span>`);
    set({});
  });
  root.querySelector("#backupLaterBtn")?.addEventListener("click", () => {
    updateSettings({ backupSnooze: dateKey() });
    set({});
  });
}
