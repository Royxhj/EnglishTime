// 가로세로 낱말 퀴즈: 열 때마다 내 단계 단어장에서 단어를 무작위로 뽑아 새 퍼즐을 만든다.
// 힌트는 한국어 뜻, 칸에는 영어 철자를 쓴다.
const CROSSWORD_MAX = 11; // 가로 · 세로 최대 칸 수 (휴대폰 화면에 맞춤)
const CROSSWORD_TARGET = 10; // 목표 단어 수
const CROSSWORD_MIN = 6;

function crosswordPool(levelId) {
  const maxLen = levelId === "elementary-low" ? 6 : 9;
  return (WORD_BANK[levelId] || []).filter((w) => /^[a-z]+$/.test(w.word) && w.word.length >= 3 && w.word.length <= maxLen);
}

function tryCrossword(words) {
  const cells = new Map(); // "r,c" → { ch, dirs:Set }
  const placed = [];
  const key = (r, c) => `${r},${c}`;
  let bounds = null;

  const fits = (word, r, c, dir) => {
    const [dr, dc] = dir === "across" ? [0, 1] : [1, 0];
    const before = cells.get(key(r - dr, c - dc));
    const after = cells.get(key(r + dr * word.length, c + dc * word.length));
    if (before || after) return -1;
    let cross = 0;
    for (let i = 0; i < word.length; i++) {
      const rr = r + dr * i;
      const cc = c + dc * i;
      const cell = cells.get(key(rr, cc));
      if (cell) {
        if (cell.ch !== word[i] || cell.dirs.has(dir)) return -1;
        cross += 1;
      } else {
        // 옆 칸이 비어 있어야 엉뚱한 단어가 붙지 않는다
        if (cells.get(key(rr + dc, cc + dr)) || cells.get(key(rr - dc, cc - dr))) return -1;
      }
    }
    if (bounds) {
      const minR = Math.min(bounds.minR, r);
      const minC = Math.min(bounds.minC, c);
      const maxR = Math.max(bounds.maxR, r + dr * (word.length - 1));
      const maxC = Math.max(bounds.maxC, c + dc * (word.length - 1));
      if (maxR - minR + 1 > CROSSWORD_MAX || maxC - minC + 1 > CROSSWORD_MAX) return -1;
    }
    return cross;
  };

  const put = (w, r, c, dir) => {
    const [dr, dc] = dir === "across" ? [0, 1] : [1, 0];
    for (let i = 0; i < w.word.length; i++) {
      const k = key(r + dr * i, c + dc * i);
      const cell = cells.get(k) || { ch: w.word[i], dirs: new Set() };
      cell.dirs.add(dir);
      cells.set(k, cell);
    }
    const endR = r + dr * (w.word.length - 1);
    const endC = c + dc * (w.word.length - 1);
    bounds = bounds
      ? { minR: Math.min(bounds.minR, r), minC: Math.min(bounds.minC, c), maxR: Math.max(bounds.maxR, endR), maxC: Math.max(bounds.maxC, endC) }
      : { minR: r, minC: c, maxR: endR, maxC: endC };
    placed.push({ data: w, word: w.word, r, c, dir });
  };

  const [first, ...rest] = words;
  put(first, 0, 0, Math.random() < 0.5 ? "across" : "down");
  for (const w of rest) {
    if (placed.length >= CROSSWORD_TARGET) break;
    const options = [];
    for (const [k, cell] of cells) {
      const [cr, cc] = k.split(",").map(Number);
      for (let i = 0; i < w.word.length; i++) {
        if (w.word[i] !== cell.ch) continue;
        for (const dir of ["across", "down"]) {
          if (cell.dirs.has(dir)) continue;
          const r = dir === "down" ? cr - i : cr;
          const c = dir === "across" ? cc - i : cc;
          const cross = fits(w.word, r, c, dir);
          if (cross > 0) options.push({ r, c, dir, cross });
        }
      }
    }
    if (!options.length) continue;
    const best = Math.max(...options.map((o) => o.cross));
    const pick = shuffle(options.filter((o) => o.cross === best))[0];
    put(w, pick.r, pick.c, pick.dir);
  }
  return { placed, bounds };
}

function buildCrossword(levelId) {
  const pool = crosswordPool(levelId);
  let best = null;
  for (let attempt = 0; attempt < 30; attempt++) {
    // 긴 단어를 먼저 놓으면 잘 엮인다
    const words = shuffle(pool).slice(0, 40).sort((a, b) => b.word.length - a.word.length + (Math.random() - 0.5) * 3);
    const result = tryCrossword(words);
    const area = (result.bounds.maxR - result.bounds.minR + 1) * (result.bounds.maxC - result.bounds.minC + 1);
    const score = result.placed.length * 100 - area;
    if (!best || score > best.score) best = { ...result, score };
    if (result.placed.length >= CROSSWORD_TARGET && area <= 100) break;
  }
  if (best.placed.length < CROSSWORD_MIN) return null;

  const { minR, minC, maxR, maxC } = best.bounds;
  const rows = maxR - minR + 1;
  const cols = maxC - minC + 1;
  const grid = Array.from({ length: rows }, () => new Array(cols).fill(null));
  const entries = best.placed.map((p) => ({ ...p, r: p.r - minR, c: p.c - minC }));
  for (const e of entries) {
    for (let i = 0; i < e.word.length; i++) {
      const r = e.r + (e.dir === "down" ? i : 0);
      const c = e.c + (e.dir === "across" ? i : 0);
      grid[r][c] = { ch: e.word[i], value: "", hinted: false };
    }
  }
  // 번호: 위에서 아래, 왼쪽에서 오른쪽 순서. 같은 칸에서 시작하면 번호를 같이 쓴다.
  const starts = [...new Set(entries.map((e) => `${e.r},${e.c}`))].map((k) => k.split(",").map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  starts.forEach(([r, c], i) => (grid[r][c].num = i + 1));
  for (const e of entries) e.num = grid[e.r][e.c].num;
  entries.sort((a, b) => a.num - b.num);
  return { levelId, rows, cols, grid, entries, done: false, revealed: false };
}

function entryCells(e) {
  return Array.from({ length: e.word.length }, (_, i) => [e.r + (e.dir === "down" ? i : 0), e.c + (e.dir === "across" ? i : 0)]);
}

function entrySolved(puzzle, e) {
  return entryCells(e).every(([r, c]) => puzzle.grid[r][c].value === puzzle.grid[r][c].ch);
}

function renderCrosswordListScreen(root, { profileName, start, back }) {
  const myLevel = getPreferredLevel(profileName) || getLastWordLevel(profileName);
  root.innerHTML = `
    <div class="screen screen-crossword">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">🧩 가로세로 낱말 퀴즈</h1>
      <p class="subtitle">할 때마다 새로운 퍼즐이 만들어져요</p>
      <section class="lesson-section">
        <p class="lesson-point-text">단계를 고르면 그 단계 단어장에서 단어를 무작위로 뽑아 퍼즐을 만들어요. 힌트(한국어 뜻)를 보고 영어 철자를 칸에 써요. 칸이나 힌트를 누르면 그 단어가 선택되고, 같은 칸을 한 번 더 누르면 가로 ↔ 세로가 바뀌어요.</p>
      </section>
      <div class="level-grid">
        ${LEVELS.map((lv) => {
          const best = getSectionBest(profileName, "crossword", lv.id);
          return `
          <button class="level-card" data-level="${lv.id}" style="--accent:${lv.color}">
            <span class="level-icon">${lv.emoji}</span>
            <span class="topic-text">
              <span class="level-label">${lv.label}${lv.id === myLevel ? " · 내 단계" : ""}</span>
              <span class="topic-summary">단어 ${crosswordPool(lv.id).length}개 중에서 무작위</span>
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

function renderCrosswordScreen(root, { puzzle, actions }) {
  const level = levelById(puzzle.levelId);
  let sel = puzzle.sel || { r: puzzle.entries[0].r, c: puzzle.entries[0].c, dir: puzzle.entries[0].dir };
  const solvedCount = () => puzzle.entries.filter((e) => entrySolved(puzzle, e)).length;
  const cellSize = `min(38px, calc((100vw - 48px) / ${puzzle.cols}))`;

  const entryAt = (r, c, dir) => puzzle.entries.find((e) => e.dir === dir && entryCells(e).some(([rr, cc]) => rr === r && cc === c));
  const currentEntry = () => entryAt(sel.r, sel.c, sel.dir) || entryAt(sel.r, sel.c, sel.dir === "across" ? "down" : "across");

  root.innerHTML = `
    <div class="screen screen-crossword-play"${levelThemeStyle(level)}>
      <div class="cw-top">
        <button class="back-btn" id="quitBtn">× 그만하기</button>
        <span class="cw-progress" id="cwProgress"></span>
      </div>
      <div class="cw-clue-bar" id="clueBar" aria-live="polite"></div>
      <div class="cw-grid" style="grid-template-columns:repeat(${puzzle.cols}, ${cellSize});grid-auto-rows:${cellSize}">
        ${puzzle.grid
          .map((row, r) =>
            row
              .map((cell, c) =>
                cell
                  ? `<div class="cw-cell" data-r="${r}" data-c="${c}">${cell.num ? `<span class="cw-num">${cell.num}</span>` : ""}<input class="cw-input" data-r="${r}" data-c="${c}" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="text" lang="en" aria-label="${r + 1}행 ${c + 1}열" value="${cell.value.toUpperCase()}" ${puzzle.done ? "disabled" : ""}/></div>`
                  : `<div class="cw-empty"></div>`
              )
              .join("")
          )
          .join("")}
      </div>
      <div class="cw-actions">
        ${puzzle.done ? "" : `<button class="secondary-btn" id="hintBtn">💡 한 글자</button><button class="secondary-btn" id="revealBtn">🏳️ 정답 보기</button>`}
        <button class="primary-btn" id="newBtn">🔄 새 퍼즐</button>
      </div>
      <div class="cw-clues">
        ${["across", "down"]
          .map(
            (dir) => `
          <section>
            <h2 class="section-title">${dir === "across" ? "가로 →" : "세로 ↓"}</h2>
            <ol class="cw-clue-list">
              ${puzzle.entries
                .filter((e) => e.dir === dir)
                .map((e) => `<li><button class="cw-clue" data-num="${e.num}" data-dir="${dir}"><b>${e.num}</b> ${e.data.emoji || ""} ${e.data.meaningKo} <small>(${e.word.length}글자)</small></button></li>`)
                .join("")}
            </ol>
          </section>`
          )
          .join("")}
      </div>
    </div>
  `;

  const input = (r, c) => root.querySelector(`.cw-input[data-r="${r}"][data-c="${c}"]`);

  const paint = () => {
    const cur = currentEntry();
    const curCells = new Set(cur ? entryCells(cur).map(([r, c]) => `${r},${c}`) : []);
    const solvedCells = new Set(puzzle.entries.filter((e) => entrySolved(puzzle, e)).flatMap((e) => entryCells(e).map(([r, c]) => `${r},${c}`)));
    root.querySelectorAll(".cw-cell").forEach((el) => {
      const k = `${el.dataset.r},${el.dataset.c}`;
      const cell = puzzle.grid[el.dataset.r][el.dataset.c];
      el.classList.toggle("in-word", curCells.has(k));
      el.classList.toggle("active", k === `${sel.r},${sel.c}`);
      el.classList.toggle("solved", solvedCells.has(k));
      el.classList.toggle("hinted", cell.hinted);
      el.classList.toggle("wrong", puzzle.revealed && cell.value !== cell.ch);
    });
    root.querySelectorAll(".cw-clue").forEach((b) => {
      const e = puzzle.entries.find((x) => x.num === Number(b.dataset.num) && x.dir === b.dataset.dir);
      b.classList.toggle("current", e === cur);
      b.classList.toggle("solved", entrySolved(puzzle, e));
    });
    root.querySelector("#clueBar").innerHTML = puzzle.done
      ? puzzle.revealed
        ? "📖 정답을 확인하고 새 퍼즐에 도전해요!"
        : "🎉 퍼즐 완성!"
      : cur
        ? `<b>${cur.num} ${cur.dir === "across" ? "가로" : "세로"}</b> · ${cur.data.meaningKo} <small>(${cur.word.length}글자)</small>`
        : "";
    root.querySelector("#cwProgress").textContent = `${solvedCount()} / ${puzzle.entries.length} 단어`;
  };

  const select = (r, c, dir, focus = true) => {
    sel = { r, c, dir };
    if (!entryAt(r, c, dir)) sel.dir = dir === "across" ? "down" : "across";
    puzzle.sel = sel;
    paint();
    if (focus && !puzzle.done) input(r, c)?.focus({ preventScroll: false });
  };

  const step = (delta) => {
    const cur = currentEntry();
    if (!cur) return;
    const cells = entryCells(cur);
    const i = cells.findIndex(([r, c]) => r === sel.r && c === sel.c);
    const next = cells[i + delta];
    if (next) select(next[0], next[1], cur.dir);
  };

  const checkDone = () => {
    if (puzzle.grid.every((row) => row.every((cell) => !cell || cell.value === cell.ch))) {
      puzzle.done = true;
      actions.finish(puzzle);
    }
  };

  root.querySelectorAll(".cw-input").forEach((el) => {
    const r = Number(el.dataset.r);
    const c = Number(el.dataset.c);
    el.addEventListener("pointerdown", () => {
      if (sel.r === r && sel.c === c) select(r, c, sel.dir === "across" ? "down" : "across", false);
      else select(r, c, sel.dir, false);
    });
    el.addEventListener("focus", () => {
      if (sel.r !== r || sel.c !== c) select(r, c, sel.dir, false);
      // 이미 글자가 있어도 새로 치면 바뀌도록 전체 선택
      setTimeout(() => el.select(), 0);
    });
    el.addEventListener("input", () => {
      // 입력이 들어온 칸에서 시작한다 (선택 상태가 어긋나 있어도)
      if (sel.r !== r || sel.c !== c) {
        sel = { r, c, dir: entryAt(r, c, sel.dir) ? sel.dir : sel.dir === "across" ? "down" : "across" };
        puzzle.sel = sel;
      }
      const old = puzzle.grid[r][c].value;
      let letters = (el.value.match(/[a-z]/gi) || []).map((x) => x.toLowerCase());
      // 선택이 풀린 채로 덧붙여 친 경우(예: "a" 뒤에 "b")에는 새 글자만 쓴다
      if (letters.length === 2 && letters[0] === old) letters = letters.slice(1);
      if (!letters.length) {
        el.value = "";
        puzzle.grid[r][c].value = "";
        paint();
        return;
      }
      // 여러 글자가 한꺼번에 들어오면(붙여넣기 · 빠른 입력) 다음 칸으로 차례로 채운다
      for (const ch of letters) {
        const target = input(sel.r, sel.c);
        if (!target || target.disabled) break;
        target.value = ch.toUpperCase();
        puzzle.grid[sel.r][sel.c].value = ch;
        recordActivityThrottled();
        const before = `${sel.r},${sel.c}`;
        step(1);
        if (`${sel.r},${sel.c}` === before) break; // 단어 끝
      }
      paint();
      checkDone();
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !el.value) {
        e.preventDefault();
        if (sel.r !== r || sel.c !== c) sel = { r, c, dir: sel.dir };
        step(-1);
        const prev = input(sel.r, sel.c);
        if (prev) {
          prev.value = "";
          puzzle.grid[sel.r][sel.c].value = "";
          paint();
        }
      } else if (e.key.startsWith("Arrow")) {
        e.preventDefault();
        const d = { ArrowRight: [0, 1, "across"], ArrowLeft: [0, -1, "across"], ArrowDown: [1, 0, "down"], ArrowUp: [-1, 0, "down"] }[e.key];
        const nr = r + d[0];
        const nc = c + d[1];
        if (puzzle.grid[nr]?.[nc]) select(nr, nc, d[2]);
      }
    });
  });

  root.querySelectorAll(".cw-clue").forEach((b) =>
    b.addEventListener("click", () => {
      const e = puzzle.entries.find((x) => x.num === Number(b.dataset.num) && x.dir === b.dataset.dir);
      const firstEmpty = entryCells(e).find(([r, c]) => puzzle.grid[r][c].value !== puzzle.grid[r][c].ch) || [e.r, e.c];
      select(firstEmpty[0], firstEmpty[1], e.dir);
      root.querySelector(".cw-grid").scrollIntoView({ behavior: "smooth", block: "nearest" });
    })
  );

  root.querySelector("#hintBtn")?.addEventListener("click", () => {
    const cur = currentEntry();
    const target = cur && entryCells(cur).find(([r, c]) => puzzle.grid[r][c].value !== puzzle.grid[r][c].ch);
    if (!target) return;
    const [r, c] = target;
    const cell = puzzle.grid[r][c];
    cell.value = cell.ch;
    cell.hinted = true;
    input(r, c).value = cell.ch.toUpperCase();
    select(r, c, cur.dir);
    step(1);
    checkDone();
  });
  root.querySelector("#revealBtn")?.addEventListener("click", () =>
    showConfirmModal({
      message: "정답을 모두 보여 줄까요? 이번 퍼즐은 여기서 끝나요.",
      confirmText: "정답 보기",
      cancelText: "계속 풀기",
      onConfirm: () => {
        puzzle.revealed = true;
        puzzle.done = true;
        actions.finish(puzzle);
      },
    })
  );
  root.querySelector("#newBtn").addEventListener("click", () => actions.newPuzzle(puzzle.levelId));
  root.querySelector("#quitBtn").addEventListener("click", actions.quit);

  paint();
  if (puzzle.done) {
    puzzle.grid.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell && puzzle.revealed) input(r, c).value = cell.ch.toUpperCase();
      })
    );
    paint();
  }
}

// 글자를 쓸 때마다 기록하면 너무 많아서, 단어 하나쯤(5글자)에 한 번 학습 기록을 남긴다.
let crosswordTyped = 0;
function recordActivityThrottled() {
  crosswordTyped += 1;
  if (crosswordTyped % 5 === 0) recordActivity(store.getState().profileName);
}
