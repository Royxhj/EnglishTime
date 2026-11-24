// 끊어 읽기 연습. role: S 주어, V 동사, O 목적어, C 보어, M 수식어
const CHUNK_ROLES = {
  S: { label: "주어", color: "#4361ee" },
  V: { label: "동사", color: "#ff5c5c" },
  O: { label: "목적어", color: "#38b26b" },
  C: { label: "보어", color: "#8338ec" },
  M: { label: "수식어", color: "#8a8578" },
};

const CHUNK_SETS = [
  {
    id: "basic", levelId: "elementary-mid", emoji: "🌱", title: "기초", desc: "짧은 문장의 주어와 동사 찾기",
    sentences: [
      { chunks: [{ en: "My sister", ko: "내 여동생은", role: "S" }, { en: "plays", ko: "친다", role: "V" }, { en: "the piano", ko: "피아노를", role: "O" }, { en: "every evening.", ko: "매일 저녁", role: "M" }], ko: "내 여동생은 매일 저녁 피아노를 친다." },
      { chunks: [{ en: "The children", ko: "아이들은", role: "S" }, { en: "are playing", ko: "놀고 있다", role: "V" }, { en: "in the park.", ko: "공원에서", role: "M" }], ko: "아이들은 공원에서 놀고 있다." },
      { chunks: [{ en: "Tom", ko: "Tom은", role: "S" }, { en: "gave", ko: "주었다", role: "V" }, { en: "me", ko: "나에게", role: "O" }, { en: "a nice gift", ko: "멋진 선물을", role: "O" }, { en: "yesterday.", ko: "어제", role: "M" }], ko: "Tom은 어제 나에게 멋진 선물을 주었다." },
      { chunks: [{ en: "This soup", ko: "이 수프는", role: "S" }, { en: "tastes", ko: "맛이 난다", role: "V" }, { en: "very good.", ko: "아주 좋은", role: "C" }], ko: "이 수프는 아주 맛있다." },
      { chunks: [{ en: "We", ko: "우리는", role: "S" }, { en: "went", ko: "갔다", role: "V" }, { en: "to the beach", ko: "해변에", role: "M" }, { en: "last summer.", ko: "지난여름", role: "M" }], ko: "우리는 지난여름 해변에 갔다." },
      { chunks: [{ en: "Birds", ko: "새들은", role: "S" }, { en: "can fly", ko: "날 수 있다", role: "V" }, { en: "high", ko: "높이", role: "M" }, { en: "in the sky.", ko: "하늘에서", role: "M" }], ko: "새들은 하늘 높이 날 수 있다." },
      { chunks: [{ en: "My father", ko: "우리 아빠는", role: "S" }, { en: "is", ko: "~이다", role: "V" }, { en: "a doctor.", ko: "의사", role: "C" }], ko: "우리 아빠는 의사다." },
      { chunks: [{ en: "She", ko: "그녀는", role: "S" }, { en: "made", ko: "만들었다", role: "V" }, { en: "a cake", ko: "케이크를", role: "O" }, { en: "for her mom.", ko: "엄마를 위해", role: "M" }], ko: "그녀는 엄마를 위해 케이크를 만들었다." },
    ],
  },
  {
    id: "middle", levelId: "middle", emoji: "🌿", title: "중급", desc: "꾸밈말이 붙은 주어 찾기",
    sentences: [
      { chunks: [{ en: "The girl", ko: "그 소녀는", role: "S" }, { en: "who lives next door", ko: "옆집에 사는", role: "M" }, { en: "is", ko: "~이다", role: "V" }, { en: "my best friend.", ko: "나의 가장 친한 친구", role: "C" }], ko: "옆집에 사는 소녀는 나의 가장 친한 친구다." },
      { chunks: [{ en: "Reading books", ko: "책을 읽는 것은", role: "S" }, { en: "helps", ko: "돕는다", role: "V" }, { en: "you", ko: "네가", role: "O" }, { en: "think deeply.", ko: "깊이 생각하도록", role: "C" }], ko: "책을 읽는 것은 네가 깊이 생각하도록 돕는다." },
      { chunks: [{ en: "The man", ko: "그 남자는", role: "S" }, { en: "sitting on the bench", ko: "벤치에 앉아 있는", role: "M" }, { en: "looks", ko: "보인다", role: "V" }, { en: "tired.", ko: "피곤해", role: "C" }], ko: "벤치에 앉아 있는 남자는 피곤해 보인다." },
      { chunks: [{ en: "Because it was raining,", ko: "비가 와서", role: "M" }, { en: "we", ko: "우리는", role: "S" }, { en: "stayed", ko: "머물렀다", role: "V" }, { en: "at home.", ko: "집에", role: "M" }], ko: "비가 와서 우리는 집에 있었다." },
      { chunks: [{ en: "The letter", ko: "그 편지는", role: "S" }, { en: "was written", ko: "쓰였다", role: "V" }, { en: "by my grandfather.", ko: "할아버지에 의해", role: "M" }], ko: "그 편지는 할아버지가 쓰셨다." },
      { chunks: [{ en: "To learn a new language", ko: "새 언어를 배우는 것은", role: "S" }, { en: "takes", ko: "필요로 한다", role: "V" }, { en: "a lot of time.", ko: "많은 시간을", role: "O" }], ko: "새 언어를 배우는 데는 많은 시간이 걸린다." },
      { chunks: [{ en: "The students", ko: "학생들은", role: "S" }, { en: "in this class", ko: "이 반의", role: "M" }, { en: "study", ko: "공부한다", role: "V" }, { en: "very hard.", ko: "매우 열심히", role: "M" }], ko: "이 반 학생들은 매우 열심히 공부한다." },
      { chunks: [{ en: "When I arrived,", ko: "내가 도착했을 때", role: "M" }, { en: "the movie", ko: "영화는", role: "S" }, { en: "had already started.", ko: "이미 시작했었다", role: "V" }], ko: "내가 도착했을 때 영화는 이미 시작했었다." },
    ],
  },
  {
    id: "advanced", levelId: "high", emoji: "🌳", title: "고급", desc: "긴 주어와 절이 있는 문장",
    sentences: [
      { chunks: [{ en: "What surprised me most", ko: "나를 가장 놀라게 한 것은", role: "S" }, { en: "was", ko: "~였다", role: "V" }, { en: "his calm voice.", ko: "그의 차분한 목소리", role: "C" }], ko: "나를 가장 놀라게 한 것은 그의 차분한 목소리였다." },
      { chunks: [{ en: "The book", ko: "그 책은", role: "S" }, { en: "that you lent me", ko: "네가 나에게 빌려준", role: "M" }, { en: "was", ko: "~였다", role: "V" }, { en: "really interesting.", ko: "정말 흥미로운", role: "C" }], ko: "네가 빌려준 책은 정말 재미있었다." },
      { chunks: [{ en: "Many scientists", ko: "많은 과학자들은", role: "S" }, { en: "believe", ko: "믿는다", role: "V" }, { en: "that climate change is speeding up.", ko: "기후 변화가 빨라지고 있다는 것을", role: "O" }], ko: "많은 과학자들은 기후 변화가 빨라지고 있다고 믿는다." },
      { chunks: [{ en: "If I had more time,", ko: "내가 시간이 더 있다면", role: "M" }, { en: "I", ko: "나는", role: "S" }, { en: "would learn", ko: "배울 텐데", role: "V" }, { en: "another language.", ko: "다른 언어를", role: "O" }], ko: "시간이 더 있다면 나는 다른 언어를 배울 텐데." },
      { chunks: [{ en: "The city", ko: "그 도시는", role: "S" }, { en: "where I was born", ko: "내가 태어난", role: "M" }, { en: "has changed", ko: "변했다", role: "V" }, { en: "a lot.", ko: "많이", role: "M" }], ko: "내가 태어난 도시는 많이 변했다." },
      { chunks: [{ en: "The fact", ko: "그 사실은", role: "S" }, { en: "that he lied", ko: "그가 거짓말했다는", role: "M" }, { en: "made", ko: "만들었다", role: "V" }, { en: "everyone", ko: "모두를", role: "O" }, { en: "angry.", ko: "화나게", role: "C" }], ko: "그가 거짓말했다는 사실은 모두를 화나게 했다." },
      { chunks: [{ en: "Whether we win or lose", ko: "우리가 이기든 지든", role: "S" }, { en: "does not matter.", ko: "중요하지 않다", role: "V" }], ko: "우리가 이기든 지든 중요하지 않다." },
      { chunks: [{ en: "Having finished his homework,", ko: "숙제를 끝낸 뒤", role: "M" }, { en: "he", ko: "그는", role: "S" }, { en: "went out", ko: "나갔다", role: "V" }, { en: "to play soccer.", ko: "축구를 하러", role: "M" }], ko: "숙제를 끝낸 뒤 그는 축구를 하러 나갔다." },
    ],
  },
];
