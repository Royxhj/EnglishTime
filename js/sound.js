// 효과음은 파일 없이 Web Audio로 짧은 음을 만들어 낸다.
const SOUND_NOTES = {
  correct: { type: "triangle", notes: [660, 880], step: 0.09 },
  wrong: { type: "sine", notes: [262, 196], step: 0.13 },
  badge: { type: "triangle", notes: [523, 659, 784, 1047], step: 0.11 },
};

let audioContext = null;

// 휴대폰 진동: 정답은 짧게 한 번, 오답은 두 번. 기본은 꺼져 있고 설정에서 켠다.
const VIBRATE_PATTERNS = { correct: [30], wrong: [50, 60, 50], badge: [20, 40, 20, 40, 60] };

function vibrate(name) {
  if (!getSettings().vibrate || !navigator.vibrate) return;
  try {
    navigator.vibrate(VIBRATE_PATTERNS[name] || 0);
  } catch {
    // 진동을 못 해도 학습에는 영향 없음
  }
}

function playSound(name) {
  vibrate(name);
  if (!getSettings().sound) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  try {
    audioContext ||= new AudioCtx();
    if (audioContext.state === "suspended") audioContext.resume();
    const { type, notes, step } = SOUND_NOTES[name];
    const start = audioContext.currentTime;
    notes.forEach((freq, i) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const t = start + i * step;
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.12, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + step + 0.08);
      osc.connect(gain).connect(audioContext.destination);
      osc.start(t);
      osc.stop(t + step + 0.1);
    });
  } catch {
    // 소리를 못 내도 학습에는 영향 없음
  }
}
