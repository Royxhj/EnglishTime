const speechSupported = "speechSynthesis" in window;

const cachedVoices = {};

function pickVoice(lang) {
  if (cachedVoices[lang] !== undefined) return cachedVoices[lang];
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  const base = lang.slice(0, 2);
  cachedVoices[lang] =
    (lang === "en-US" && voices.find((v) => v.lang === "en-US" && /female/i.test(v.name))) ||
    voices.find((v) => v.lang === lang) ||
    voices.find((v) => v.lang && v.lang.startsWith(base)) ||
    null;
  return cachedVoices[lang];
}

if (speechSupported) {
  window.speechSynthesis.onvoiceschanged = () => {
    for (const key of Object.keys(cachedVoices)) delete cachedVoices[key];
  };
}

// onEnd는 끝까지 읽었을 때만 부른다 (중간에 다른 소리로 끊기면 부르지 않음).
function speak(text, { rate = 0.9, onEnd, lang = "en-US" } = {}) {
  if (!speechSupported || !text) return;
  dialogToken += 1; // 대화를 읽던 중이면 멈춘다
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = rate;
  const voice = pickVoice(lang);
  if (voice) utter.voice = voice;
  if (onEnd) utter.onend = onEnd;
  window.speechSynthesis.speak(utter);
}

// 대화 읽기: 여자(W) · 남자(M)를 다른 목소리(없으면 다른 높이)로 차례로 읽는다.
function dialogVoice(speaker) {
  const en = window.speechSynthesis.getVoices().filter((v) => v.lang && v.lang.startsWith("en"));
  const female = /female|samantha|zira|aria|jenny|susan|karen|victoria|google us english/i;
  const male = /\bmale\b|david|guy|mark|daniel|alex|fred|george|ryan|google uk english male/i;
  if (speaker === "W") return en.find((v) => female.test(v.name)) || null;
  return en.find((v) => male.test(v.name) && !/female/i.test(v.name)) || null;
}

let dialogToken = 0;

function playDialog(lines, { rate = 0.9 } = {}) {
  if (!speechSupported || !lines?.length) return;
  window.speechSynthesis.cancel();
  const token = ++dialogToken;
  const sayLine = (i) => {
    if (i >= lines.length || token !== dialogToken) return;
    const [speaker, text] = lines[i];
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = rate;
    const voice = dialogVoice(speaker) || pickVoice("en-US");
    if (voice) utter.voice = voice;
    const sameVoice = !dialogVoice("W") || !dialogVoice("M");
    utter.pitch = sameVoice ? (speaker === "W" ? 1.25 : 0.75) : 1;
    utter.onend = () => setTimeout(() => sayLine(i + 1), 350);
    window.speechSynthesis.speak(utter);
  };
  sayLine(0);
}

// 한국어 설명 읽어 주기 (HTML 태그는 빼고 읽는다)
function speakKorean(html, options = {}) {
  speak(html.replace(/<[^>]+>/g, ""), { rate: 1, ...options, lang: "ko-KR" });
}

function stopSpeaking() {
  dialogToken += 1;
  if (speechSupported) window.speechSynthesis.cancel();
}
