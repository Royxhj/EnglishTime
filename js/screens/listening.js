// 듣기 평가: 단계별 대화를 듣고 4지선다로 답한다. 문제 화면은 4지선다(mcQuiz)를 그대로 쓰고 question.dialog로 대화를 들려준다.
function findListeningSet(levelId) {
  return LISTENING_SETS.find((s) => s.levelId === levelId) || null;
}

function dialogScriptHtml(lines) {
  return `<div class="dialog-script">${lines.map(([s, t]) => `<p><span aria-label="${s === "W" ? "여자" : "남자"}">${s === "W" ? "👩" : "👨"}</span> ${t}</p>`).join("")}</div>`;
}

const LISTENING_TEST_SIZE = 5;

// 대화가 5개보다 많은 단계는 풀 때마다 5개를 무작위로 고른다
function buildListeningQuestions(levelId) {
  const set = findListeningSet(levelId);
  if (!set) return [];
  const picked = shuffle(set.items.map((item, i) => ({ item, i }))).slice(0, LISTENING_TEST_SIZE);
  return picked.map(({ item, i }) => ({
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
      ${(() => {
        const card = (s) => {
          const level = levelById(s.levelId);
          const best = getSectionBest(profileName, "listening", s.levelId);
          return `
          <button class="level-card" data-level="${s.levelId}" style="--accent:${level.color}">
            <span class="level-icon">${level.emoji}</span>
            <span class="topic-text">
              <span class="level-label">${level.label}${s.levelId === myLevel ? " · 내 단계" : ""}</span>
              <span class="topic-summary">${s.items.length > LISTENING_TEST_SIZE ? `대화 ${s.items.length}개 중 ${LISTENING_TEST_SIZE}개` : `대화 ${s.items.length}개`}</span>
            </span>
            <span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>
          </button>`;
        };
        const { mine, others } = splitByMyLevel(LISTENING_SETS, (s) => [s.levelId], myLevel);
        return levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length);
      })()}
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-level]").forEach((btn) => btn.addEventListener("click", () => start(btn.dataset.level)));
}
