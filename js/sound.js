// 효과음은 파일 없이 Web Audio로 짧은 음을 만들어 낸다.
const SOUND_NOTES = {
  correct: { type: "triangle", notes: [660, 880], step: 0.09 },
  wrong: { type: "sine", notes: [262, 196], step: 0.13 },
  badge: { type: "triangle", notes: [523, 659, 784, 1047], step: 0.11 },
};

let audioContext = null;

function playSound(name) {
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
