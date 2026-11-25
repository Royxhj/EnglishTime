// 🔗 짝꿍 단어 잇기: [왼쪽, 뜻, 오른쪽, 뜻]
const WORD_PAIR_SETS = [
  {
    id: "opp1", emoji: "↔️", title: "반대말 1", kind: "반대말", levels: ["elementary-low", "elementary-mid"],
    pairs: [["hot", "뜨거운", "cold", "차가운"], ["big", "큰", "small", "작은"], ["up", "위로", "down", "아래로"], ["happy", "행복한", "sad", "슬픈"], ["open", "열다", "close", "닫다"], ["day", "낮", "night", "밤"], ["fast", "빠른", "slow", "느린"], ["tall", "키가 큰", "short", "키가 작은"], ["old", "늙은", "young", "젊은"], ["in", "안에", "out", "밖에"]],
  },
  {
    id: "opp2", emoji: "🔄", title: "반대말 2", kind: "반대말", levels: ["elementary-mid", "elementary-high"],
    pairs: [["easy", "쉬운", "difficult", "어려운"], ["full", "가득 찬", "empty", "텅 빈"], ["heavy", "무거운", "light", "가벼운"], ["early", "이른", "late", "늦은"], ["clean", "깨끗한", "dirty", "더러운"], ["strong", "강한", "weak", "약한"], ["cheap", "싼", "expensive", "비싼"], ["push", "밀다", "pull", "당기다"], ["win", "이기다", "lose", "지다"], ["remember", "기억하다", "forget", "잊다"]],
  },
  {
    id: "opp3", emoji: "⚖️", title: "반대말 3", kind: "반대말", levels: ["middle", "high"],
    pairs: [["accept", "받아들이다", "refuse", "거절하다"], ["increase", "늘다", "decrease", "줄다"], ["ancient", "고대의", "modern", "현대의"], ["borrow", "빌리다", "lend", "빌려주다"], ["victory", "승리", "defeat", "패배"], ["include", "포함하다", "exclude", "제외하다"], ["export", "수출하다", "import", "수입하다"], ["permanent", "영구적인", "temporary", "일시적인"], ["guilty", "유죄의", "innocent", "무죄의"], ["shallow", "얕은", "deep", "깊은"]],
  },
  {
    id: "syn1", emoji: "🟰", title: "비슷한 말 1", kind: "비슷한 말", levels: ["elementary-mid", "elementary-high"],
    pairs: [["big", "큰", "large", "큰, 넓은"], ["small", "작은", "little", "작은"], ["start", "시작하다", "begin", "시작하다"], ["quick", "빠른", "fast", "빠른"], ["glad", "기쁜", "happy", "행복한"], ["shut", "닫다", "close", "닫다"], ["pretty", "예쁜", "beautiful", "아름다운"], ["smart", "똑똑한", "clever", "영리한"], ["talk", "말하다", "speak", "말하다"], ["gift", "선물", "present", "선물"]],
  },
  {
    id: "syn2", emoji: "🧠", title: "비슷한 말 2", kind: "비슷한 말", levels: ["middle", "high", "adult"],
    pairs: [["huge", "거대한", "enormous", "엄청난"], ["choose", "고르다", "select", "선택하다"], ["help", "돕다", "assist", "돕다"], ["buy", "사다", "purchase", "구매하다"], ["answer", "대답하다", "reply", "답하다"], ["finish", "끝내다", "complete", "완료하다"], ["angry", "화난", "furious", "몹시 화난"], ["tired", "피곤한", "exhausted", "기진맥진한"], ["important", "중요한", "significant", "중요한"], ["show", "보여 주다", "reveal", "드러내다"]],
  },
  {
    id: "pair1", emoji: "🤝", title: "짝 단어", kind: "함께 쓰는 말", levels: ["elementary-mid", "elementary-high", "middle"],
    pairs: [["salt", "소금", "pepper", "후추"], ["bread", "빵", "butter", "버터"], ["fish", "생선", "chips", "감자튀김"], ["peanut butter", "땅콩버터", "jelly", "잼"], ["ladies", "숙녀", "gentlemen", "신사"], ["rock", "바위", "roll", "구르다 (로큰롤)"], ["cats", "고양이", "dogs", "개 (비가 억수같이)"], ["ups", "오르막", "downs", "내리막 (기복)"], ["pros", "장점", "cons", "단점"], ["safe", "안전한", "sound", "무사한"]],
  },
];
