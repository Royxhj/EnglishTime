// 따라 말하기: 대화 표현 예문을 듣고 따라 말하면 음성 인식으로 단어가 얼마나 맞았는지 보여 준다.
// 음성 인식이 안 되는 기기(아이폰 일부 등)에서는 듣고 따라 말한 뒤 스스로 체크한다.
const SpeechRecognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const SPEAKING_SIZE = 8;
const SPEAKING_PASS = 0.8;

function speakingSentences(groupId) {
  return TALK_TOPICS.filter((t) => t.group === groupId)
    .flatMap((t) => t.slides.flatMap((s) => s.examples))
    .filter((ex) => ex.en.split(" ").length <= 14 && !ex.en.includes("—"));
}

function buildSpeakingSession(groupId) {
  const seen = new Set();
  const items = shuffle(speakingSentences(groupId))
    .filter((ex) => !seen.has(ex.en) && seen.add(ex.en))
    .slice(0, SPEAKING_SIZE)
    .map((ex) => ({ ...ex, best: 0, heard: "", tries: 0 }));
  return { groupId, items, index: 0 };
}

const CONTRACTIONS = { "i'm": "i am", "you're": "you are", "it's": "it is", "that's": "that is", "don't": "do not", "can't": "can not", "cannot": "can not", "i'll": "i will", "we'll": "we will", "i'd": "i would", "let's": "let us", "isn't": "is not", "doesn't": "does not", "didn't": "did not", "won't": "will not", "what's": "what is", "there's": "there is", "we're": "we are", "they're": "they are", "he's": "he is", "she's": "she is", "i've": "i have", "you'll": "you will", "how's": "how is", "where's": "where is" };

// 인식기는 숫자를 "10"으로도 "ten"으로도 돌려줘서 숫자로 맞춘다.
const NUMBER_WORDS = Object.fromEntries("zero one two three four five six seven eight nine ten eleven twelve".split(" ").map((w, i) => [w, String(i)]));

function speakingWords(text) {
  return text
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/\b([ap])\.\s?m\.?/g, "$1m")
    .replace(/[^a-z0-9' ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((w) => (CONTRACTIONS[w] || NUMBER_WORDS[w] || w).split(" "));
}

// 목표 문장의 단어 중 순서대로 들린 단어 표시(LCS)
function speakingMatch(target, heard) {
  const a = speakingWords(target);
  const b = speakingWords(heard);
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(a.length).fill(false);
  for (let i = 0, j = 0; i < a.length && j < b.length; ) {
    if (a[i] === b[j]) {
      hit[i] = true;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  return { words: a, hit, score: a.length ? dp[0][0] / a.length : 0 };
}

function renderSpeakingListScreen(root, { profileName, start, back }) {
  root.innerHTML = `
    <div class="screen screen-speaking">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🎙️ 따라 말하기</h1>
      <p class="subtitle">듣고, 따라 말하고, 확인해요</p>
      <section class="lesson-section">
        <h2 class="section-title">이렇게 해요</h2>
        <div class="lesson-point"><span class="lesson-point-num">1</span><p class="lesson-point-text">🔊로 원어민 발음을 들어요. 🐢로 천천히 들을 수도 있어요.</p></div>
        <div class="lesson-point"><span class="lesson-point-num">2</span><p class="lesson-point-text">🎙️를 누르고 문장을 소리 내어 말해요.</p></div>
        <div class="lesson-point"><span class="lesson-point-num">3</span><p class="lesson-point-text">알아들은 단어는 초록색, 놓친 단어는 빨간색으로 보여요. <b>80% 이상</b>이면 통과!</p></div>
        ${SpeechRecognitionApi ? "" : `<p class="vp-tip">📱 이 기기·브라우저에서는 음성 인식이 되지 않아요. 듣고 따라 말한 뒤 스스로 ✅를 눌러 체크해요. (안드로이드 크롬, PC 크롬·엣지에서는 자동 채점이 돼요)</p>`}
      </section>
      ${(() => {
        const card = (g) => {
          const best = getSectionBest(profileName, "speaking", g.id);
          const count = new Set(speakingSentences(g.id).map((s) => s.en)).size;
          return `
          <button class="level-card" data-group="${g.id}" style="--accent:${g.color}">
            <span class="level-icon">🎙️</span>
            <span class="topic-text">
              <span class="level-label">${g.label}</span>
              <span class="topic-summary">문장 ${count}개 중 ${Math.min(SPEAKING_SIZE, count)}개</span>
            </span>
            <span class="level-best${best ? "" : " level-best-empty"}">${best ? `${best.correct}/${best.total}` : "시작"}</span>
          </button>`;
        };
        const { mine, others } = splitByMyLevel(TALK_GROUPS, (g) => TALK_GROUP_LEVELS[g.id] || [], myLevelOf(profileName));
        return levelSplitHtml(mine.map(card).join(""), others.map(card).join(""), others.length);
      })()}
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-group]").forEach((btn) => btn.addEventListener("click", () => start(btn.dataset.group)));
}

let activeRecognition = null;
// 마이크가 막히면(권한 거부 · 지원 안 함) 이번 실행 동안은 스스로 체크 버튼도 같이 보여 준다
let micBlocked = false;

// 마이크 권한을 켜는 방법 (기기별)
function micHelpHtml() {
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia?.("(display-mode: standalone)").matches || navigator.standalone;
  const how = ios
    ? "아이폰: <b>설정 → Safari → 마이크 → 허용</b>으로 바꾼 뒤 앱을 다시 열어요." + (standalone ? " 홈 화면 앱에서 계속 안 되면 Safari로 이 사이트를 열어서 해 보세요." : "")
    : /Android/.test(ua)
      ? standalone
        ? "안드로이드 앱: <b>휴대폰 설정 → 애플리케이션 → Chrome → 권한 → 마이크 → 허용</b> 후 다시 눌러요."
        : "안드로이드 크롬: 주소창 왼쪽 <b>🔒(또는 ⚙) → 권한 → 마이크 → 허용</b> 후 다시 눌러요."
      : "PC: 주소창 왼쪽 <b>🔒 → 마이크 → 허용</b> 후 페이지를 새로 고쳐요.";
  return `<p class="speak-heard">🎤 마이크를 쓸 수 없어요. ${how}<br>지금은 아래 <b>✅ 잘 말했어요</b>로 스스로 체크하며 계속할 수 있어요.</p>`;
}

function recognitionErrorHtml(error) {
  if (["not-allowed", "service-not-allowed", "audio-capture"].includes(error)) return micHelpHtml();
  if (error === "no-speech") return `<p class="speak-heard">🤫 소리가 들리지 않았어요. 다시 눌러 말해 보세요.</p>`;
  if (error === "network") return `<p class="speak-heard">📶 음성 인식은 인터넷이 필요해요. 연결을 확인하고 다시 해 보세요.</p>`;
  return `<p class="speak-heard">😥 음성 인식이 잠깐 안 됐어요. 다시 해 보세요.</p>`;
}

function stopRecognition() {
  if (activeRecognition) {
    try {
      activeRecognition.abort();
    } catch {}
    activeRecognition = null;
  }
}

function speakingResultHtml(item) {
  if (!item.tries) return "";
  if (!SpeechRecognitionApi || item.self) return `<p class="speak-score ${item.best >= SPEAKING_PASS ? "ok" : ""}">${item.best >= SPEAKING_PASS ? "✅ 잘 말했어요!" : "🔁 한 번 더 해 봐요"}</p>`;
  const m = speakingMatch(item.en, item.heard);
  const pct = Math.round(m.score * 100);
  return `
    <p class="speak-words">${m.words.map((w, i) => `<span class="${m.hit[i] ? "hit" : "miss"}">${w}</span>`).join(" ")}</p>
    <p class="speak-heard">들린 말: ${item.heard ? `"${item.heard}"` : "(아무 말도 듣지 못했어요)"}</p>
    <p class="speak-score ${m.score >= SPEAKING_PASS ? "ok" : ""}">${m.score >= SPEAKING_PASS ? "🎉" : "💪"} ${pct}%${item.best >= SPEAKING_PASS ? " · 통과!" : " · 80% 넘으면 통과"}</p>`;
}

function renderSpeakingSessionScreen(root, { session, group, actions }) {
  const item = session.items[session.index];
  const isLast = session.index === session.items.length - 1;
  const passed = session.items.filter((it) => it.best >= SPEAKING_PASS).length;

  root.innerHTML = `
    <div class="screen screen-quiz" style="--accent:${group.color}">
      ${quizTopbarHtml({ label: `🎙️ ${group.label}`, index: session.index, total: session.items.length, scoreText: `통과 ${passed}`, progressCount: session.index })}
      <div class="question-card speak-card">
        <p class="question-label">듣고 따라 말해 보세요</p>
        <p class="speak-emoji">${item.emoji || "💬"}</p>
        <p class="speak-target">${item.en}</p>
        <p class="grammar-question-ko">${item.ko}</p>
        <div class="listen-row">
          <button class="listen-btn" id="listenBtn" ${speechSupported ? "" : "disabled"}>🔊 듣기</button>
          <button class="listen-btn" id="slowBtn" ${speechSupported ? "" : "disabled"}>🐢 천천히</button>
        </div>
        ${recorderHtml("s:" + item.en)}
      </div>
      <div id="speakResult" class="speak-result" aria-live="polite">${speakingResultHtml(item)}</div>
      ${SpeechRecognitionApi ? `<button class="${micBlocked ? "secondary-btn" : "primary-btn"} speak-mic" id="micBtn">🎙️ ${micBlocked ? "마이크 다시 시도" : item.tries ? "다시 말하기" : "말하기"}</button>` : ""}
      ${!SpeechRecognitionApi || micBlocked ? `<div class="settings-actions"><button class="primary-btn" id="selfOkBtn">✅ 잘 말했어요</button><button class="secondary-btn" id="selfRetryBtn">🔁 다시 해 볼래요</button></div>` : ""}
      <button class="secondary-btn" id="nextBtn">${isLast ? "결과 보기" : item.tries ? "다음 문장 ▶" : "건너뛰기 ▶"}</button>
    </div>
  `;

  bindQuitConfirm(root, () => {
    stopRecognition();
    stopRecording();
    actions.quit();
  });
  bindRecorders(root);
  root.querySelector("#listenBtn").addEventListener("click", () => speak(item.en, { rate: 0.9 }));
  root.querySelector("#slowBtn").addEventListener("click", () => speak(item.en, { rate: 0.6 }));
  root.querySelector("#nextBtn").addEventListener("click", () => {
    stopRecognition();
    stopRecording();
    actions.next();
  });
  root.querySelector("#selfOkBtn")?.addEventListener("click", () => actions.selfCheck(true));
  root.querySelector("#selfRetryBtn")?.addEventListener("click", () => actions.selfCheck(false));

  const mic = root.querySelector("#micBtn");
  mic?.addEventListener("click", () => {
    if (activeRecognition) {
      stopRecognition();
      return;
    }
    stopSpeaking();
    const rec = new SpeechRecognitionApi();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    activeRecognition = rec;
    mic.textContent = "👂 듣고 있어요… (누르면 멈춤)";
    mic.classList.add("listening");
    let got = false;
    rec.onresult = (e) => {
      got = true;
      // 후보 중 가장 잘 맞는 것을 고른다
      const alts = [...e.results[0]].map((r) => r.transcript);
      const heard = alts.sort((x, y) => speakingMatch(item.en, y).score - speakingMatch(item.en, x).score)[0];
      actions.heard(heard, speakingMatch(item.en, heard).score);
    };
    rec.onerror = (e) => {
      activeRecognition = null;
      mic.classList.remove("listening");
      if (["not-allowed", "service-not-allowed", "audio-capture"].includes(e.error) && !micBlocked) {
        // 스스로 체크 버튼이 보이게 다시 그린 뒤 안내를 띄운다
        micBlocked = true;
        actions.refresh();
        document.querySelector("#speakResult")?.insertAdjacentHTML("afterbegin", micHelpHtml());
        return;
      }
      root.querySelector("#speakResult").innerHTML = recognitionErrorHtml(e.error);
      mic.textContent = micBlocked ? "🎙️ 마이크 다시 시도" : "🎙️ 다시 말하기";
    };
    rec.onend = () => {
      activeRecognition = null;
      if (!got && mic.isConnected && mic.classList.contains("listening")) {
        mic.textContent = "🎙️ 다시 말하기";
        mic.classList.remove("listening");
      }
    };
    try {
      rec.start();
    } catch {
      activeRecognition = null;
      mic.classList.remove("listening");
      mic.textContent = "🎙️ 다시 말하기";
      root.querySelector("#speakResult").innerHTML = recognitionErrorHtml("");
    }
  });
}
