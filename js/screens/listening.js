// 듣기 평가: 단계별 대화를 듣고 4지선다로 답한다. 문제 화면은 4지선다(mcQuiz)를 그대로 쓰고 question.dialog로 대화를 들려준다.
function findListeningSet(levelId) {
  return LISTENING_SETS.find((s) => s.levelId === levelId) || null;
}

function dialogScriptHtml(lines) {
  return `<div class="dialog-script">${lines.map(([s, t]) => `<p><span aria-label="${s === "W" ? "여자" : "남자"}">${s === "W" ? "👩" : "👨"}</span> ${t}</p>`).join("")}</div>`;
}

function buildListeningQuestions(levelId) {
  const set = findListeningSet(levelId);
  if (!set) return [];
  return set.items.map((item, i) => ({
    id: `listen|${levelId}|${i}`,
    kind: "listening",
    label: "🎧 대화를 듣고 알맞은 답을 고르세요",
    q: item.q,
    ko: null,
    dialog: item.lines,
    choices: shuffle(item.choices),
    correctAnswer: item.choices[item.answer],
    explain: `${item.explain}${dialogScriptHtml(item.lines)}`,
    summary: item.q,
    listenText: null,
    selectedAnswer: null,
  }));
}

function renderListeningListScreen(root, { profileName, start, back }) {
  const myLevel = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  root.innerHTML = `
    <div class="screen screen-listening">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎧 듣기 평가</h1>
      <p class="subtitle">학교 듣기평가처럼 대화를 듣고 답해요</p>
      <section class="lesson-section">
        <h2 class="section-title">이렇게 풀어요</h2>
        <div class="lesson-point"><span class="lesson-point-num">1</span><p class="lesson-point-text">문제를 먼저 읽고, <b>무엇을 들어야 하는지</b>(시간? 장소? 기분?) 생각해요.</p></div>
        <div class="lesson-point"><span class="lesson-point-num">2</span><p class="lesson-point-text">대화는 문제를 열면 한 번 나와요. ▶로 다시 듣고, 🐢로 천천히 들을 수 있어요.</p></div>
        <div class="lesson-point"><span class="lesson-point-num">3</span><p class="lesson-point-text">답을 고르면 대화 대본과 해설을 볼 수 있어요. 👩 여자, 👨 남자예요.</p></div>
      </section>
      <div class="level-grid">
        ${LISTENING_SETS.map((s) => {
          const level = levelById(s.levelId);
          const best = getSectionBest(profileName, "listening", s.levelId);
          return `
          <button class="level-card" data-level="${s.levelId}" style="--accent:${level.color}">
            <span class="level-icon">${level.emoji}</span>
            <span class="topic-text">
              <span class="level-label">${level.label}${s.levelId === myLevel ? " · 내 단계" : ""}</span>
              <span class="topic-summary">대화 ${s.items.length}개</span>
            </span>
            <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
          </button>`;
        }).join("")}
      </div>
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((btn) => btn.addEventListener("click", () => start(btn.dataset.level)));
}
