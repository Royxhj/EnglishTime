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

// 설정의 말하기 속도 (느리게 · 보통 · 빠르게)
const SPEECH_RATE_SCALE = { slow: 0.8, normal: 1, fast: 1.15 };
function speechRateScale() {
  return SPEECH_RATE_SCALE[getSettings().speechRate] || 1;
}

// 설정의 영어 목소리: 자동이면 기본 목소리, 여자 · 남자를 고르면 그 목소리(없으면 기본)
function preferredEnglishVoice() {
  const pref = getSettings().voice;
  if (pref === "female") return dialogVoice("W");
  if (pref === "male") return dialogVoice("M");
  return null;
}

// 안드로이드 크롬은 cancel() 직후 바로 speak()하면 소리 없이 버려지는 경우가 있고,
// 읽는 중인 문장 객체가 메모리에서 치워지면 소리가 끊기기도 한다. 그래서 읽던 게 있으면 잠깐 쉬었다가 읽고, 객체를 붙잡아 둔다.
let currentUtterance = null;
function startUtterance(utter) {
  const synth = window.speechSynthesis;
  const busy = synth.speaking || synth.pending;
  synth.cancel();
  currentUtterance = utter;
  const go = () => {
    if (currentUtterance !== utter) return; // 그사이 다른 소리를 눌렀으면 건너뛴다
    synth.resume(); // 멈춘 상태로 남아 있는 브라우저가 있어서 풀어 준다
    synth.speak(utter);
  };
  if (busy) setTimeout(go, 120);
  else go();
}

// onEnd는 끝까지 읽었을 때만 부른다 (중간에 다른 소리로 끊기면 부르지 않음). 읽을 문장 객체를 돌려준다.
function speak(text, { rate = 0.9, onEnd, lang = "en-US" } = {}) {
  if (!speechSupported || !text) return null;
  dialogToken += 1; // 대화를 읽던 중이면 멈춘다
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = Math.min(2, rate * (lang.startsWith("en") ? speechRateScale() : 1));
  const voice = (lang.startsWith("en") && preferredEnglishVoice()) || pickVoice(lang);
  if (voice) utter.voice = voice;
  if (onEnd) utter.onend = onEnd;
  startUtterance(utter);
  return utter;
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
  const token = ++dialogToken;
  const sayLine = (i) => {
    if (i >= lines.length || token !== dialogToken) return;
    const [speaker, text] = lines[i];
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = Math.min(2, rate * speechRateScale());
    const voice = dialogVoice(speaker) || pickVoice("en-US");
    if (voice) utter.voice = voice;
    const sameVoice = !dialogVoice("W") || !dialogVoice("M");
    utter.pitch = sameVoice ? (speaker === "W" ? 1.25 : 0.75) : 1;
    utter.onend = () => setTimeout(() => sayLine(i + 1), 350);
    startUtterance(utter);
  };
  sayLine(0);
}

// 한국어 설명 읽어 주기 (HTML 태그는 빼고 읽는다)
function speakKorean(html, options = {}) {
  speak(html.replace(/<[^>]+>/g, ""), { rate: 1, ...options, lang: "ko-KR" });
}

function stopSpeaking() {
  dialogToken += 1;
  currentUtterance = null;
  if (speechSupported) window.speechSynthesis.cancel();
}
