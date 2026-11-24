// 가족 한눈에 보기: 가족 모두의 이번 주 공부, 목표, 오답과 약한 부분을 한 화면에 보여 준다.
function familyMemberSummary(name) {
  const p = getProfileData(name);
  const stats = getStats(name);
  const week = getWeekProgress(name);
  const goal = goalSummary(name);
  const level = getPreferredLevel(name);
  const lastActive = Object.keys(p.activity).filter((k) => p.activity[k] > 0).sort().pop() || null;
  const weakGrammar = GRAMMAR_TOPICS.filter((t) => {
    const b = p.grammar.best[t.id];
    return b && b.correct / b.total < WEAK_RATIO;
  });
  const weakDrill = [...new Set(getDrillWrongEntries(name).map((e) => drillSourceLabel(e.id)))].slice(0, 3);
  return {
    stats,
    week,
    goal,
    level: level ? levelById(level) : null,
    lastActive,
    wrong: getWrongWords(name).length + getGrammarWrongIds(name).length + getDrillWrongEntries(name).length,
    basicsDone: Object.keys(p.basics.best).length,
    weak: [...weakGrammar.map((t) => `${t.emoji} ${t.title}`), ...weakDrill].slice(0, 4),
  };
}

function lastActiveLabel(key) {
  if (!key) return "아직 기록 없음";
  if (key === dateKey()) return "오늘";
  if (key === daysAgoKey(1)) return "어제";
  const days = Math.round((new Date(dateKey()) - new Date(key)) / 86400000);
  return `${days}일 전`;
}

function renderFamilyScreen(root, { openMember, back }) {
  const members = getFamily();
  root.innerHTML = `
    <div class="screen screen-family">
      <button class="back-btn" id="backBtn">← 홈</button>
      <h1 class="title">👨‍👩‍👧 가족 한눈에 보기</h1>
      <p class="subtitle">이번 주(월요일부터) 가족 모두의 공부</p>
      ${members
        .map((m) => {
          const s = familyMemberSummary(m.name);
          return `
        <section class="settings-card family-card" style="--accent:${m.color}">
          <div class="family-head">
            <span class="home-avatar">${m.emoji}</span>
            <div class="family-name">
              <b>${m.name}</b>
              <small>${s.level ? `${s.level.emoji} ${shortLevelLabel(s.level)}` : "단계 미정"} · 마지막 공부 ${lastActiveLabel(s.lastActive)}</small>
            </div>
            ${s.stats.streak > 0 ? `<span class="chip chip-fire">🔥 ${s.stats.streak}일</span>` : ""}
          </div>
          <div class="family-stats">
            <div><b>${s.week.answers}</b><small>이번 주 문제</small></div>
            <div><b>${s.week.days}일</b><small>공부한 날</small></div>
            <div><b>${s.week.daily}번</b><small>오늘의 학습</small></div>
            <div><b>${s.goal.total ? `${s.goal.done}/${s.goal.total}` : "–"}</b><small>이번 주 목표</small></div>
          </div>
          <p class="family-line">📘 끝낸 단계별 주제 <b>${s.basicsDone}</b> · 📝 오답노트 <b>${s.wrong}</b></p>
          ${s.weak.length ? `<p class="family-line">💪 더 연습할 곳: ${s.weak.join(", ")}</p>` : ""}
          <button class="secondary-btn small-btn" data-member="${encodeURIComponent(m.name)}">${m.name}님으로 공부하기</button>
        </section>`;
        })
        .join("")}
      <p class="settings-help">목표는 각자 홈의 🎯 이번 주 목표에서 정해요. 기록은 이 기기에 저장된 것만 보여요.</p>
    </div>
  `;
  root.querySelector("#backBtn").addEventListener("click", back);
  root.querySelectorAll("[data-member]").forEach((btn) => btn.addEventListener("click", () => openMember(decodeURIComponent(btn.dataset.member))));
}
