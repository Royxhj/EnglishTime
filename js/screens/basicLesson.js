// 같은 "배우기 → 해 보기" 화면을 쓰는 묶음들. 기록은 모두 "basics" 칸에 주제 id로 저장한다.
const LESSON_COLLECTIONS = [
  { kind: "grammar", topics: BASIC_TOPICS, listScreen: "grammarNotes", listLabel: "문법 노트 목록" },
  { kind: "phonics", topics: PHONICS_TOPICS, listScreen: "phonics", listLabel: "파닉스 목록" },
  { kind: "talk", topics: TALK_TOPICS, listScreen: "talk", listLabel: "대화 표현 목록" },
];

function lessonCollectionOf(topicId) {
  return LESSON_COLLECTIONS.find((c) => c.topics.some((t) => t.id === topicId)) || LESSON_COLLECTIONS[0];
}

function findBasicTopic(id) {
  for (const c of LESSON_COLLECTIONS) {
    const topic = c.topics.find((t) => t.id === id);
    if (topic) return topic;
  }
  return null;
}

// 연습 문제 진행 상태 (문제마다 하나)
function newBasicItem(item) {
  return {
    wrongPicks: [],
    solved: false,
    firstTry: undefined,
    pool: item.type === "order" ? shuffleUntilDifferent(item.words.map((_, i) => i)) : [],
    built: [],
    wrongOrder: false,
  };
}

function shuffleUntilDifferent(indexes) {
  if (indexes.length < 2) return indexes;
  let s;
  do s = shuffle(indexes);
  while (s.every((v, i) => v === i));
  return s;
}

function newBasicSession(topicId) {
  const topic = findBasicTopic(topicId);
  return { topicId, phase: "learn", slide: 0, pIndex: 0, items: topic.practice.map(newBasicItem), spokenKey: null };
}

function basicStars(correct, total) {
  const ratio = correct / total;
  return ratio >= 0.9 ? 3 : ratio >= 0.6 ? 2 : 1;
}

function basicSentenceHtml(q, fill) {
  return q.replace("___", fill ? `<span class="basic-blank filled">${fill}</span>` : `<span class="basic-blank">?</span>`);
}

function renderBasicLessonScreen(root, { session, actions }) {
  const topic = findBasicTopic(session.topicId);
  const total = topic.slides.length + topic.practice.length;
  const autoRead = getSettings().basicAutoRead !== false;

  let stepLabel;
  let progress;
  if (session.phase === "learn") {
    stepLabel = `배우기 ${session.slide + 1} / ${topic.slides.length}`;
    progress = session.slide;
  } else if (session.phase === "practice") {
    stepLabel = `해 보기 ${session.pIndex + 1} / ${topic.practice.length}`;
    progress = topic.slides.length + session.pIndex;
  } else {
    stepLabel = "다 했어요!";
    progress = total;
  }

  root.innerHTML = `
    <div class="screen screen-basic">
      <button class="quit-btn" id="quitBtn">✕ 그만하기</button>
      <div class="quiz-topbar">
        <div class="progress">${topic.emoji} ${topic.title}</div>
        <div class="score-live">${stepLabel}</div>
      </div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${(progress / total) * 100}%"></div></div>
      ${session.phase === "learn" ? basicLearnHtml(topic, session, autoRead) : session.phase === "practice" ? basicPracticeHtml(topic, session) : basicDoneHtml(topic, session)}
    </div>
  `;

  root.querySelector("#quitBtn").addEventListener("click", () => {
    stopSpeaking();
    actions.quit();
  });

  if (session.phase === "learn") bindBasicLearn(root, topic, session, actions, autoRead);
  else if (session.phase === "practice") bindBasicPractice(root, topic, session, actions);
  else bindBasicDone(root, actions);
}

// ── 배우기 ──
function basicLearnHtml(topic, session, autoRead) {
  const slide = topic.slides[session.slide];
  const isLast = session.slide === topic.slides.length - 1;
  return `
    <section class="basic-card">
      <div class="basic-emoji" aria-hidden="true">${slide.emoji}</div>
      <p class="basic-say">${slide.say}</p>
      <div class="basic-say-tools">
        <button class="listen-btn" id="sayBtn" ${speechSupported ? "" : "disabled"}>🔈 설명 듣기</button>
        <button class="listen-btn" id="autoReadBtn" aria-pressed="${autoRead}" ${speechSupported ? "" : "disabled"}>${autoRead ? "자동 읽기 켜짐" : "자동 읽기 꺼짐"}</button>
      </div>
      ${slide.pattern ? `<p class="basic-pattern">${slide.pattern}</p>` : ""}
    </section>

    ${
      slide.examples.length > 0
        ? `<div class="basic-examples">
        ${slide.examples
          .map(
            (ex, i) => `
          <button class="basic-example" data-ex="${i}" aria-label="${ex.en} 듣기">
            <span class="basic-example-emoji" aria-hidden="true">${ex.emoji}</span>
            <span class="basic-example-text">
              <span class="basic-example-en">${ex.en} <span aria-hidden="true">🔊</span></span>
              <span class="basic-example-ko">${ex.ko}</span>
            </span>
          </button>`
          )
          .join("")}
      </div>
      <p class="card-hint">예문을 누르면 영어로 들려줘요</p>`
        : ""
    }

    <div class="basic-nav">
      <button class="secondary-btn" id="prevBtn" ${session.slide === 0 ? "disabled" : ""}>◀ 이전</button>
      <button class="primary-btn" id="nextBtn">${isLast ? "✏️ 해 보기 시작" : "다음 ▶"}</button>
    </div>
  `;
}

function bindBasicLearn(root, topic, session, actions, autoRead) {
  const slide = topic.slides[session.slide];
  root.querySelector("#sayBtn").addEventListener("click", () => speakKorean(slide.say));
  root.querySelector("#autoReadBtn").addEventListener("click", (e) => {
    const on = getSettings().basicAutoRead === false;
    updateSettings({ basicAutoRead: on });
    e.currentTarget.textContent = on ? "자동 읽기 켜짐" : "자동 읽기 꺼짐";
    e.currentTarget.setAttribute("aria-pressed", String(on));
    if (on) speakKorean(slide.say);
    else stopSpeaking();
  });
  root.querySelectorAll("[data-ex]").forEach((btn) => btn.addEventListener("click", () => speak(slide.examples[Number(btn.dataset.ex)].en, { rate: 0.8 })));
  root.querySelector("#prevBtn").addEventListener("click", actions.prevSlide);
  root.querySelector("#nextBtn").addEventListener("click", actions.nextSlide);

  // 같은 화면을 다시 그릴 때는 또 읽지 않는다.
  const key = `slide-${session.slide}`;
  if (autoRead && session.spokenKey !== key) {
    session.spokenKey = key;
    speakKorean(slide.say);
  }
  root.querySelector("#nextBtn").focus({ preventScroll: true });
}

// ── 해 보기 ──
function basicPracticeHtml(topic, session) {
  const item = topic.practice[session.pIndex];
  const state = session.items[session.pIndex];
  const isLast = session.pIndex === topic.practice.length - 1;

  const body =
    item.type === "choose"
      ? `
      <p class="question-label">${item.listen ? (item.q === "___" ? "소리를 듣고 알맞은 단어를 골라요" : "소리를 듣고 빈칸을 채워요") : "빈칸에 알맞은 말을 골라요"}</p>
      ${item.listen ? `<button class="listen-btn basic-play" id="playBtn" ${speechSupported ? "" : "disabled"}>🔊 다시 듣기</button>` : ""}
      <p class="basic-sentence">${basicSentenceHtml(item.q, state.solved ? item.choices[item.answer] : null)}</p>
      <p class="basic-ko">${item.ko}</p>
      <div class="basic-choices${item.choices.some((c) => c.length > 10) ? " basic-choices--long" : ""}">
        ${item.choices
          .map((c, i) => {
            const cls = state.solved && i === item.answer ? " correct" : state.wrongPicks.includes(i) ? " wrong" : "";
            const disabled = state.solved || state.wrongPicks.includes(i);
            return `<button class="choice-btn basic-choice${cls}" data-choice="${i}" ${disabled ? "disabled" : ""}>${c}</button>`;
          })
          .join("")}
      </div>`
      : `
      <p class="question-label">단어를 눌러서 문장을 만들어요</p>
      <p class="basic-ko basic-ko--big">${item.ko}</p>
      <div class="order-answer${state.solved ? " solved" : state.wrongOrder ? " wrong" : ""}" aria-label="만든 문장">
        ${state.built.length === 0 ? `<span class="order-placeholder">여기에 단어가 들어가요</span>` : ""}
        ${state.built.map((w) => `<button class="order-tile in-answer" data-built="${w}" ${state.solved ? "disabled" : ""}>${item.words[w]}</button>`).join("")}
      </div>
      <div class="order-pool">
        ${state.pool.map((w) => `<button class="order-tile" data-pool="${w}">${item.words[w]}</button>`).join("")}
      </div>`;

  let feedback = "";
  if (state.solved) {
    feedback = `<div class="basic-feedback correct">🎉 ${state.firstTry ? "한 번에 맞았어요!" : "맞았어요!"}</div>`;
  } else if (item.type === "choose" && state.wrongPicks.length > 0) {
    feedback = `<div class="basic-feedback hint">🤔 다시 골라 볼까요? ${item.hint}</div>`;
  } else if (item.type === "order" && state.wrongOrder) {
    feedback = `<div class="basic-feedback hint">🤔 순서가 조금 달라요. 첫 단어는 <b>${item.words[0]}</b>예요. <button class="listen-btn" id="resetOrderBtn">다시 하기</button></div>`;
  }

  return `
    <section class="question-card basic-practice">${body}</section>
    ${feedback}
    ${
      state.solved
        ? `<div class="basic-nav">
        <button class="listen-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>🔊 문장 듣기</button>
        <button class="primary-btn" id="nextBtn">${isLast ? "결과 보기 ⭐" : "다음 문제 ▶"}</button>
      </div>`
        : ""
    }
  `;
}

function basicAnswerText(item) {
  return item.type === "choose" ? item.q.replace("___", item.choices[item.answer]) : item.words.join(" ");
}

function bindBasicPractice(root, topic, session, actions) {
  const item = topic.practice[session.pIndex];
  const state = session.items[session.pIndex];
  root.querySelectorAll("[data-choice]").forEach((btn) => btn.addEventListener("click", () => actions.choose(Number(btn.dataset.choice))));
  root.querySelectorAll("[data-pool]").forEach((btn) => btn.addEventListener("click", () => actions.tapPool(Number(btn.dataset.pool))));
  root.querySelectorAll("[data-built]").forEach((btn) => btn.addEventListener("click", () => actions.tapBuilt(Number(btn.dataset.built))));
  root.querySelector("#resetOrderBtn")?.addEventListener("click", actions.resetOrder);
  root.querySelector("#listenBtn")?.addEventListener("click", () => speak(basicAnswerText(item), { rate: 0.8 }));
  root.querySelector("#playBtn")?.addEventListener("click", () => speak(item.listen, { rate: 0.7 }));
  // 듣기 문제는 처음 보여 줄 때 한 번 들려준다.
  const key = `practice-${session.pIndex}`;
  if (item.listen && !state.solved && session.spokenKey !== key) {
    session.spokenKey = key;
    speak(item.listen, { rate: 0.7 });
  }
  const nextBtn = root.querySelector("#nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", actions.nextPractice);
    nextBtn.focus({ preventScroll: true });
  }
}

// ── 결과 ──
function basicDoneHtml(topic, session) {
  const correct = session.items.filter((s) => s.firstTry).length;
  const total = topic.practice.length;
  const stars = basicStars(correct, total);
  const message = stars === 3 ? "정말 잘했어요!" : stars === 2 ? "잘했어요! 조금만 더 연습해요" : "괜찮아요, 한 번 더 해 봐요!";
  return `
    <section class="basic-done">
      <div class="basic-stars" aria-label="별 ${stars}개">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <h1 class="title">${message}</h1>
      <p class="subtitle">${total}문제 중 <b>${correct}문제</b>를 한 번에 맞혔어요</p>
    </section>
    <div class="result-actions">
      <button class="primary-btn" id="practiceAgainBtn">✏️ 문제만 다시 풀기</button>
      <button class="secondary-btn" id="restartBtn">📖 처음부터 다시 배우기</button>
      <button class="secondary-btn" id="listBtn">${lessonCollectionOf(topic.id).listLabel}</button>
    </div>
  `;
}

function bindBasicDone(root, actions) {
  root.querySelector("#practiceAgainBtn").addEventListener("click", actions.practiceAgain);
  root.querySelector("#restartBtn").addEventListener("click", actions.restart);
  root.querySelector("#listBtn").addEventListener("click", actions.toList);
}
