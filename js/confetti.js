const COLORS = ["#ff8b3d", "#38b26b", "#4361ee", "#f4a300", "#8338ec", "#ff5c5c"];

function burstConfetti(count = 24) {
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  document.body.appendChild(layer);

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${30 + Math.random() * 40}%`;
    piece.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 200}px`);
    piece.style.setProperty("--rotate", `${Math.random() * 720 - 360}deg`);
    piece.style.animationDelay = `${Math.random() * 150}ms`;
    layer.appendChild(piece);
  }

  setTimeout(() => layer.remove(), 1300);
}
