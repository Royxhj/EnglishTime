const SHADOW_PAUSE_PER_WORD_MS = 650;
const SHADOW_MIN_PAUSE_MS = 1800;
const READING_RATES = { normal: 0.9, slow: 0.65 };

function findPassage(id) {
  return READING_PASSAGES.find((p) => p.id === id) || null;
}

// 문장 안에서 단어장 단어의 첫 등장 위치를 찾아 버튼으로 감싼다. 원문 기준으로 잘라 붙여 HTML이 깨지지 않게 한다.
function glossedSentence(en, glossary) {
  const ranges = [];
  glossary.forEach((g, gi) => {
    const m = new RegExp(`\\b${escapeRegExp(g.w)}\\b`, "i").exec(en);
    if (m && !ranges.some((r) => m.index < r.end && m.index + m[0].length > r.start)) {
      ranges.push({ start: m.index, end: m.index + m[0].length, gi });
    }
  });
  ranges.sort((a, b) => a.start - b.start);

  let html = "";
  let pos = 0;
  for (const r of ranges) {
    html += en.slice(pos, r.start) + `<button class="gloss" data-gloss="${r.gi}">${en.slice(r.start, r.end)}</button>`;
    pos = r.end;
  }
  return html + en.slice(pos);
}

// mode: read(읽기 연습) | quiz(독해 문제)
function renderReadingListScreen(root, { profileName, mode, openPassage, startQuiz, backToHome }) {
  const isRead = mode === "read";
  const doneCount = READING_PASSAGES.filter((p) =>
    isRead ? isPassageRead(profileName, p.id) : getSectionBest(profileName, "reading", p.id)
  ).length;

  root.innerHTML = `
    <div class="screen screen-reading-list">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">${isRead ? "📖 읽기 연습" : "📰 독해 문제"}</h1>
      <p class="subtitle">${isRead ? "듣고 따라 읽으며 지문에 익숙해져요" : "글을 읽고 내용을 확인하는 문제를 풀어요"} · ${doneCount} / ${READING_PASSAGES.length} ${isRead ? "읽음" : "완료"}</p>

      ${(() => {
        const levelSection = (level) => {
        const passages = READING_PASSAGES.filter((p) => p.levelId === level.id);
        if (passages.length === 0) return "";
        return `
          <section class="group">
            <h2 class="group-title">${level.emoji} ${shortLevelLabel(level)}</h2>
            <div class="level-grid">
              ${passages
                .map((p) => {
                  const best = getSectionBest(profileName, "reading", p.id);
                  const read = isPassageRead(profileName, p.id);
                  const badge = isRead
                    ? `<span class="level-best${read ? "" : " level-best-empty"}">${read ? "✓ 읽음" : "새 글"}</span>`
                    : `<span class="level-best${best ? "" : " level-best-empty"}">${ratioLabel(best)}</span>`;
                  return `
                  <button class="level-card passage-card" data-id="${p.id}" style="--accent:${level.color}">
                    <span class="level-icon">${p.emoji}</span>
                    <span class="topic-text">
                      <span class="level-label">${p.title}</span>
                      <span class="topic-summary">${p.sentences.length}문장${isRead ? "" : ` · 문제 ${p.questions.length}개`}</span>
                    </span>
                    ${badge}
                  </button>`;
                })
                .join("")}
            </div>
          </section>
        `;
        };
        // 내 단계를 먼저 펼치고, 다른 단계는 접어 둔다
        const { mine, others } = splitByMyLevel(LEVELS, (lv) => [lv.id], myLevelOf(profileName));
        return `${mine.map(levelSection).join("")}${
          others.length ? `<details class="other-levels"><summary class="basic-grade-title">다른 단계 보기 <span class="basic-grade-count">${others.length}단계</span></summary>${others.map(levelSection).join("")}</details>` : ""
        }`;
      })()}
    </div>
  `;

  root.querySelector("#backBtn").addEventListener("click", backToHome);
  root.querySelectorAll(".passage-card").forEach((btn) => {
    btn.addEventListener("click", () => (isRead ? openPassage(btn.dataset.id) : startQuiz(btn.dataset.id)));
  });
}

function renderPassageScreen(root, { profileName, passage, startQuiz, backToList, goHome }) {
  const level = levelById(passage.levelId);
  const read = isPassageRead(profileName, passage.id);
  let slow = getSettings().readingSlow === true;
  const bottomLinks = [
    { label: "📖 지문 목록", onClick: () => { stopPlayback(); backToList(); } },
    { label: "🏠 홈으로", onClick: () => { stopPlayback(); goHome(); } },
  ];

  root.innerHTML = `
    <div class="screen screen-passage"${levelThemeStyle(level)}>
      <button class="back-btn" id="backBtn">← 목록</button>
      <div class="lesson-head">
        <span class="lesson-emoji">${passage.emoji}</span>
        <h1 class="title">${passage.title}</h1>
        <p class="subtitle"><span class="topic-level">${shortLevelLabel(level)}</span>${read ? " · ✓ 읽음" : ""}</p>
      </div>

      <section class="settings-card reading-controls">
        <div class="reading-toolbar">
          <button class="listen-btn" id="listenAllBtn" ${speechSupported ? "" : "disabled"}>▶ 전체 듣기</button>
          <button class="listen-btn" id="shadowBtn" ${speechSupported ? "" : "disabled"}>🗣 따라 읽기</button>
          <button class="listen-btn" id="speedBtn" aria-pressed="${slow}" ${speechSupported ? "" : "disabled"}>${slow ? "🐢 느리게" : "🐇 보통 속도"}</button>
          <button class="listen-btn" id="toggleAllBtn">해석 모두 보기</button>
        </div>
        <p class="settings-help" id="playStatus">밑줄 단어를 누르면 뜻, 문장을 누르면 해석이 나와요. <b>따라 읽기</b>는 한 문장을 들려준 뒤 따라 말할 시간을 줘요.</p>
      </section>

      <article class="passage-card-body">
        ${passage.sentences
          .map(
            (s, i) => `
          <div class="passage-sentence" data-sentence="${i}">
            <button class="speak-btn sentence-speak" data-speak-sentence="${i}" aria-label="${i + 1}번째 문장 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
            <div class="passage-text" tabindex="0" role="button" aria-expanded="false">
              <p class="passage-en">${glossedSentence(s.en, passage.glossary)}</p>
              <p class="passage-ko" hidden>${s.ko}</p>
              <p class="shadow-cue" hidden>🗣 따라 말해 보세요</p>
            </div>
          </div>
        `
          )
          .join("")}
      </article>

      <div class="gloss-bar" id="glossBar" hidden aria-live="polite"></div>

      <div class="sticky-cta passage-actions">
        ${read ? "" : `<button class="secondary-btn" id="markReadBtn">✓ 다 읽었어요</button>`}
        <button class="primary-btn" id="startQuizBtn">✏️ 문제 풀기 (${passage.questions.length})</button>
      </div>

      ${bottomNavHtml(bottomLinks)}
    </div>
  `;

  const sentenceEls = [...root.querySelectorAll(".passage-sentence")];
  const status = root.querySelector("#playStatus");
  const setOpen = (el, open) => {
    el.querySelector(".passage-ko").hidden = !open;
    el.querySelector(".passage-text").setAttribute("aria-expanded", String(open));
    el.classList.toggle("open", open);
  };

  sentenceEls.forEach((el) => {
    const text = el.querySelector(".passage-text");
    const toggle = () => setOpen(el, el.querySelector(".passage-ko").hidden);
    text.addEventListener("click", (e) => {
      if (!e.target.closest(".gloss")) toggle();
    });
    text.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".gloss")) {
        e.preventDefault();
        toggle();
      }
    });
  });

  const toggleAllBtn = root.querySelector("#toggleAllBtn");
  toggleAllBtn.addEventListener("click", () => {
    const openAll = sentenceEls.some((el) => el.querySelector(".passage-ko").hidden);
    sentenceEls.forEach((el) => setOpen(el, openAll));
    toggleAllBtn.textContent = openAll ? "해석 모두 숨기기" : "해석 모두 보기";
  });

  // ── 이어 듣기 · 따라 읽기 ──
  let playToken = 0;
  let pauseTimer = null;
  const listenAllBtn = root.querySelector("#listenAllBtn");
  const shadowBtn = root.querySelector("#shadowBtn");

  const clearPlaying = () => {
    sentenceEls.forEach((el) => {
      el.classList.remove("playing");
      el.querySelector(".shadow-cue").hidden = true;
    });
  };
  const stopPlayback = (message) => {
    playToken += 1;
    clearTimeout(pauseTimer);
    stopSpeaking();
    clearPlaying();
    listenAllBtn.textContent = "▶ 전체 듣기";
    shadowBtn.textContent = "🗣 따라 읽기";
    if (message) status.textContent = message;
  };
  const markRead = () => {
    markPassageRead(profileName, passage.id);
    root.querySelector("#markReadBtn")?.remove();
    announceBadges(checkNewBadges(profileName));
  };

  const play = (index, shadow, token) => {
    if (token !== playToken || !root.contains(sentenceEls[0])) return;
    if (index >= sentenceEls.length) {
      stopPlayback(shadow ? "🎉 끝까지 따라 읽었어요! 한 번 더 하면 더 자연스러워져요." : "끝까지 들었어요.");
      markRead();
      return;
    }
    clearPlaying();
    const el = sentenceEls[index];
    el.classList.add("playing");
    el.scrollIntoView({ block: "center", behavior: "smooth" });
    status.textContent = `${index + 1} / ${sentenceEls.length} 문장 ${shadow ? "듣는 중…" : "재생 중"}`;
    const sentence = passage.sentences[index].en;
    speak(sentence, {
      rate: slow ? READING_RATES.slow : READING_RATES.normal,
      onEnd: () => {
        if (token !== playToken) return;
        if (!shadow) {
          pauseTimer = setTimeout(() => play(index + 1, shadow, token), 350);
          return;
        }
        el.querySelector(".shadow-cue").hidden = false;
        status.textContent = `${index + 1} / ${sentenceEls.length} 문장 · 따라 말해 보세요`;
        const pause = Math.max(SHADOW_MIN_PAUSE_MS, sentence.split(" ").length * SHADOW_PAUSE_PER_WORD_MS * (slow ? 1.3 : 1));
        pauseTimer = setTimeout(() => play(index + 1, shadow, token), pause);
      },
    });
  };

  const startPlayback = (shadow) => {
    const wasPlaying = (shadow ? shadowBtn : listenAllBtn).textContent.startsWith("⏹");
    stopPlayback();
    if (wasPlaying) {
      status.textContent = "멈췄어요.";
      return;
    }
    (shadow ? shadowBtn : listenAllBtn).textContent = "⏹ 멈추기";
    play(0, shadow, playToken);
  };
  listenAllBtn.addEventListener("click", () => startPlayback(false));
  shadowBtn.addEventListener("click", () => startPlayback(true));

  root.querySelectorAll("[data-speak-sentence]").forEach((btn) =>
    btn.addEventListener("click", () => {
      stopPlayback();
      speak(passage.sentences[Number(btn.dataset.speakSentence)].en, { rate: slow ? READING_RATES.slow : READING_RATES.normal });
    })
  );

  const speedBtn = root.querySelector("#speedBtn");
  speedBtn.addEventListener("click", () => {
    slow = !slow;
    updateSettings({ readingSlow: slow });
    speedBtn.textContent = slow ? "🐢 느리게" : "🐇 보통 속도";
    speedBtn.setAttribute("aria-pressed", String(slow));
  });

  // ── 단어 뜻 · 단어장 추가 ──
  const glossBar = root.querySelector("#glossBar");
  root.querySelectorAll(".gloss").forEach((btn) => {
    btn.addEventListener("click", () => {
      const gi = Number(btn.dataset.gloss);
      const g = passage.glossary[gi];
      const saved = isGlossInVocab(profileName, passage, gi);
      root.querySelectorAll(".gloss.active").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      glossBar.hidden = false;
      glossBar.innerHTML = `
        <span class="gloss-word">${g.w}</span>
        <span class="gloss-meaning">${g.ko}</span>
        <button class="speak-btn" id="glossSpeakBtn" aria-label="발음 듣기" ${speechSupported ? "" : "disabled"}>🔊</button>
        <button class="gloss-add" id="glossAddBtn" ${saved ? "disabled" : ""}>${saved ? "✓ 단어장" : "＋ 단어장"}</button>
        <button class="gloss-close" id="glossCloseBtn" aria-label="닫기">✕</button>
      `;
      glossBar.querySelector("#glossSpeakBtn").addEventListener("click", () => speak(g.w));
      glossBar.querySelector("#glossAddBtn").addEventListener("click", (e) => {
        addGlossToVocab(profileName, passage, gi);
        e.currentTarget.disabled = true;
        e.currentTarget.textContent = "✓ 단어장";
        showToast(`<span class="toast-emoji">📇</span><span>단어장에 추가: <b>${g.w}</b></span>`);
      });
      glossBar.querySelector("#glossCloseBtn").addEventListener("click", () => {
        glossBar.hidden = true;
        btn.classList.remove("active");
      });
    });
  });

  root.querySelector("#markReadBtn")?.addEventListener("click", () => {
    markRead();
    showToast(`<span class="toast-emoji">✓</span><span>읽음으로 표시했어요: ${passage.title}</span>`);
  });
  root.querySelector("#backBtn").addEventListener("click", () => {
    stopPlayback();
    backToList();
  });
  root.querySelector("#startQuizBtn").addEventListener("click", () => {
    stopPlayback();
    startQuiz();
  });
  bindBottomNav(root, bottomLinks);
}

function passageContextHtml(passage) {
  return passage.sentences.map((s) => `<p>${s.en}</p>`).join("");
}
