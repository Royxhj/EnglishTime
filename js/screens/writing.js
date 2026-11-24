// 영작 연습: 단계별 문법 예문의 한국어 뜻을 보고 영어 문장 만들기.
// 🧩 단어 카드 배열(쉬움) 또는 ⌨️ 직접 쓰기(어려움). 학년(BASIC_GRADES)마다 8문장씩.
const WRITING_SIZE = 8;
let writingMode = "order";

function writingSentences(gradeId) {
  const seen = new Set();
  return BASIC_TOPICS.filter((t) => t.grade === gradeId).flatMap((t) =>
    t.slides
      .flatMap((s) => s.examples)
      .filter((ex) => {
        const n = ex.en.split(" ").length;
        const ok = n >= 3 && n <= 12 && !/[—/_()]|\.\.\.|…/.test(ex.en) && !seen.has(ex.en);
        if (ok) seen.add(ex.en);
        return ok;
      })
      .map((ex) => ({ en: ex.en, ko: ex.ko, emoji: ex.emoji, topic: `${t.emoji} ${t.title}` }))
  );
}

function buildWritingSession(gradeId, mode) {
  const items = shuffle(writingSentences(gradeId))
    .slice(0, WRITING_SIZE)
    .map((s) => {
      const words = s.en.split(" ");
      let order = shuffle(words.map((_, i) => i));
      // 섞었는데 그대로면 한 번 더 섞는다
      if (order.every((v, i) => v === i) && words.length > 1) order = [...order.slice(1), order[0]];
      return { ...s, words, pool: order, built: [], solved: false, firstTry: undefined, wrong: false, typed: "", revealed: false };
    });
  return { gradeId, mode, items, index: 0 };
}

function writingNormalize(text) {
  return text
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// 직접 쓰기 채점: 대소문자와 문장부호는 보지 않는다. 틀리면 내가 쓴 단어 중 맞은 자리(초록)와 다른 자리(빨강)만 보여 준다.
function writingDiffHtml(target, typed) {
  const a = writingNormalize(target).split(" ");
  const b = writingNormalize(typed).split(" ");
  const words = b.map((w, i) => `<span class="${a[i] === w ? "hit" : "miss"}">${w}</span>`).join(" ");
  const gap = a.length - b.length;
  return `${words}${gap > 0 ? ` <small>(단어 ${gap}개가 더 필요해요)</small>` : gap < 0 ? ` <small>(단어가 ${-gap}개 많아요)</small>` : ""}`;
}

function renderWritingListScreen(root, { profileName, start, back }) {
  const myLevel = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  root.innerHTML = `
    <div class="screen screen-writing">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">✍️ 영작 연습</h1>
      <p class="subtitle">한국어 뜻을 보고 영어 문장 만들기</p>
      <section class="lesson-section">
        <p class="lesson-point-text">단계별 문법에서 배운 예문으로 연습해요. 먼저 <b>🧩 단어 배열</b>로 익히고, 자신 있으면 <b>⌨️ 직접 쓰기</b>에 도전해요. 직접 쓰기는 대소문자와 문장부호를 따지지 않아요.</p>
        <div class="segmented segmented--wide" role="tablist">
          <button class="segmented-btn${writingMode === "order" ? " active" : ""}" data-mode="order" role="tab" aria-selected="${writingMode === "order"}">🧩 단어 배열</button>
          <button class="segmented-btn${writingMode === "type" ? " active" : ""}" data-mode="type" role="tab" aria-selected="${writingMode === "type"}">⌨️ 직접 쓰기</button>
        </div>
      </section>
      ${(() => {
        const card = (g) => {
          const count = writingSentences(g.id).length;
          if (!count) return "";
          const best = getSectionBest(profileName, "writing", `${writingMode}:${g.id}`);
          return `
          <button class="level-card" data-grade="${g.id}" style="--accent:${g.color}">
            <span class="level-icon">✍️</span>
            <span class="topic-text">
              <span class="level-label">${g.label}${g.levelId === myLevel ? " · 내 단계" : ""}</span>
              <span class="topic-summary">예문 ${count}개 중 ${Math.min(WRITING_SIZE, count)}개</span>
            </span>
            <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
          </button>`;
        };
        const { mine, others } = splitByMyLevel(BASIC_GRADES, (g) => [g.levelId], myLevel);
        return levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length);
      })()}
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-mode]").forEach((btn) =>
    btn.addEventListener("click", () => {
      writingMode = btn.dataset.mode;
      renderWritingListScreen(root, { profileName, start, back });
    })
  );
  root.querySelectorAll("[data-grade]").forEach((btn) => btn.addEventListener("click", () => start(btn.dataset.grade, writingMode)));
}

function renderWritingSessionScreen(root, { session, grade, actions }) {
  const item = session.items[session.index];
  const isLast = session.index === session.items.length - 1;
  const correct = session.items.filter((it) => it.firstTry).length;
  const done = item.solved || item.revealed;

  const orderHtml = `
    <div class="order-answer${item.solved ? " solved" : item.wrong ? " wrong" : ""}" aria-label="만든 문장">
      ${item.built.length ? item.built.map((w) => `<button class="order-tile in-answer" data-built="${w}" ${done ? "disabled" : ""}>${item.words[w]}</button>`).join("") : `<span class="order-placeholder">아래 단어를 차례로 눌러요</span>`}
    </div>
    <div class="order-pool">
      ${item.pool.map((w) => `<button class="order-tile" data-pool="${w}" ${done ? "disabled" : ""}>${item.words[w]}</button>`).join("")}
    </div>
    ${item.wrong ? `<p class="writing-feedback wrong">🤔 순서가 달라요. 단어를 눌러 빼고 다시 해 봐요.</p>` : ""}`;

  const typeHtml = `
    <input class="text-input writing-input" id="typeInput" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="영어 문장을 써 보세요" value="${item.typed.replace(/"/g, "&quot;")}" ${done ? "disabled" : ""} />
    ${item.wrong && !done ? `<p class="writing-feedback wrong">🤔 다른 곳이 있어요: ${writingDiffHtml(item.en, item.typed)}</p>` : ""}
    ${done ? "" : `<div class="settings-actions"><button class="primary-btn" id="checkBtn">확인</button><button class="secondary-btn" id="hintBtn">💡 첫 단어 보기</button></div>`}`;

  root.innerHTML = `
    <div class="screen screen-quiz" style="--accent:${grade.color}">
      ${quizTopbarHtml({ label: `✍️ ${grade.label}`, index: session.index, total: session.items.length, scoreText: `맞힘 ${correct}`, progressCount: session.index })}
      <div class="question-card">
        <p class="question-label">${item.topic}</p>
        <p class="writing-ko">${item.emoji || ""} ${item.ko}</p>
        ${item.hint ? `<p class="writing-hint">💡 ${item.words[0]} …</p>` : ""}
      </div>
      ${session.mode === "order" ? orderHtml : typeHtml}
      ${
        done
          ? `<div class="result-banner ${item.solved ? "correct" : "wrong"}" role="status">${item.solved ? "🎉 맞았어요!" : "📖 정답을 확인해요"}</div>
             <div class="explain-card"><p class="grammar-question">${item.en}</p>
             <button class="listen-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>🔊 문장 듣기</button></div>
             <button class="primary-btn" id="nextBtn">${isLast ? "결과 보기" : "다음 문장"}</button>`
          : `<button class="secondary-btn" id="giveUpBtn">정답 보기</button>`
      }
    </div>
  `;

  bindQuitConfirm(root, actions.quit);
  root.querySelectorAll("[data-pool]").forEach((b) => b.addEventListener("click", () => actions.tapPool(Number(b.dataset.pool))));
  root.querySelectorAll("[data-built]").forEach((b) => b.addEventListener("click", () => actions.tapBuilt(Number(b.dataset.built))));
  const input = root.querySelector("#typeInput");
  if (input && !done) {
    input.focus({ preventScroll: true });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") actions.checkTyped(input.value);
    });
  }
  root.querySelector("#checkBtn")?.addEventListener("click", () => actions.checkTyped(input.value));
  root.querySelector("#hintBtn")?.addEventListener("click", () => actions.hint(input.value));
  root.querySelector("#giveUpBtn")?.addEventListener("click", actions.reveal);
  root.querySelector("#listenBtn")?.addEventListener("click", () => speak(item.en));
  const next = root.querySelector("#nextBtn");
  next?.addEventListener("click", actions.next);
  next?.focus({ preventScroll: true });
}
