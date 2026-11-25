// 추가 끊어 읽기 세트. 문장마다 주어(S)와 동사(V) 덩어리가 하나씩 있어야 한다. 불러온 뒤 단계 순서대로 정렬한다.
CHUNK_SETS.push(
  {
    id: "starter", levelId: "elementary-low", emoji: "🌰", title: "첫걸음", desc: "아주 짧은 문장의 주어와 동사",
    sentences: [
      { chunks: [{ en: "I", ko: "나는", role: "S" }, { en: "like", ko: "좋아한다", role: "V" }, { en: "apples.", ko: "사과를", role: "O" }], ko: "나는 사과를 좋아한다." },
      { chunks: [{ en: "The cat", ko: "그 고양이는", role: "S" }, { en: "is", ko: "~이다", role: "V" }, { en: "small.", ko: "작은", role: "C" }], ko: "그 고양이는 작다." },
      { chunks: [{ en: "My mom", ko: "우리 엄마는", role: "S" }, { en: "cooks", ko: "요리한다", role: "V" }, { en: "every day.", ko: "매일", role: "M" }], ko: "우리 엄마는 매일 요리한다." },
      { chunks: [{ en: "We", ko: "우리는", role: "S" }, { en: "play", ko: "한다", role: "V" }, { en: "soccer", ko: "축구를", role: "O" }, { en: "after school.", ko: "방과 후에", role: "M" }], ko: "우리는 방과 후에 축구를 한다." },
      { chunks: [{ en: "The dog", ko: "그 개는", role: "S" }, { en: "can run", ko: "달릴 수 있다", role: "V" }, { en: "fast.", ko: "빨리", role: "M" }], ko: "그 개는 빨리 달릴 수 있다." },
      { chunks: [{ en: "Tom", ko: "Tom은", role: "S" }, { en: "has", ko: "가지고 있다", role: "V" }, { en: "a red bike.", ko: "빨간 자전거를", role: "O" }], ko: "Tom은 빨간 자전거를 가지고 있다." },
      { chunks: [{ en: "The birds", ko: "새들이", role: "S" }, { en: "sing", ko: "노래한다", role: "V" }, { en: "in the tree.", ko: "나무에서", role: "M" }], ko: "새들이 나무에서 노래한다." },
      { chunks: [{ en: "My sister", ko: "우리 언니는", role: "S" }, { en: "is", ko: "~이다", role: "V" }, { en: "a student.", ko: "학생", role: "C" }], ko: "우리 언니는 학생이다." },
    ],
  },
  {
    id: "basic2", levelId: "elementary-high", emoji: "🌱", title: "기초 ②", desc: "꾸밈말이 조금 붙은 문장",
    sentences: [
      { chunks: [{ en: "Every morning,", ko: "매일 아침", role: "M" }, { en: "my dad", ko: "우리 아빠는", role: "S" }, { en: "drinks", ko: "마신다", role: "V" }, { en: "a cup of coffee.", ko: "커피 한 잔을", role: "O" }], ko: "매일 아침 우리 아빠는 커피 한 잔을 마신다." },
      { chunks: [{ en: "The boy", ko: "그 소년은", role: "S" }, { en: "with a blue cap", ko: "파란 모자를 쓴", role: "M" }, { en: "is", ko: "~이다", role: "V" }, { en: "my cousin.", ko: "내 사촌", role: "C" }], ko: "파란 모자를 쓴 소년은 내 사촌이다." },
      { chunks: [{ en: "Many people", ko: "많은 사람들이", role: "S" }, { en: "visit", ko: "방문한다", role: "V" }, { en: "Jeju Island", ko: "제주도를", role: "O" }, { en: "every year.", ko: "매년", role: "M" }], ko: "많은 사람들이 매년 제주도를 방문한다." },
      { chunks: [{ en: "After dinner,", ko: "저녁 식사 후에", role: "M" }, { en: "we", ko: "우리는", role: "S" }, { en: "took", ko: "했다", role: "V" }, { en: "a walk", ko: "산책을", role: "O" }, { en: "in the park.", ko: "공원에서", role: "M" }], ko: "저녁 식사 후에 우리는 공원에서 산책을 했다." },
      { chunks: [{ en: "The books", ko: "그 책들은", role: "S" }, { en: "on the shelf", ko: "선반 위의", role: "M" }, { en: "are", ko: "~이다", role: "V" }, { en: "very old.", ko: "아주 오래된", role: "C" }], ko: "선반 위의 책들은 아주 오래되었다." },
      { chunks: [{ en: "My grandma", ko: "우리 할머니는", role: "S" }, { en: "told", ko: "들려주셨다", role: "V" }, { en: "us", ko: "우리에게", role: "O" }, { en: "a funny story.", ko: "재미있는 이야기를", role: "O" }], ko: "할머니는 우리에게 재미있는 이야기를 들려주셨다." },
      { chunks: [{ en: "The weather", ko: "날씨가", role: "S" }, { en: "became", ko: "되었다", role: "V" }, { en: "cold", ko: "추운", role: "C" }, { en: "in November.", ko: "11월에", role: "M" }], ko: "11월에 날씨가 추워졌다." },
      { chunks: [{ en: "Some students", ko: "몇몇 학생들은", role: "S" }, { en: "in my class", ko: "우리 반의", role: "M" }, { en: "want to be", ko: "되고 싶어 한다", role: "V" }, { en: "YouTubers.", ko: "유튜버가", role: "C" }], ko: "우리 반의 몇몇 학생들은 유튜버가 되고 싶어 한다." },
    ],
  },
  {
    id: "middle2", levelId: "middle", emoji: "🍀", title: "중급 ②", desc: "to부정사 · 동명사 · 관계사가 붙은 주어",
    sentences: [
      { chunks: [{ en: "To learn a new language", ko: "새 언어를 배우는 것은", role: "S" }, { en: "takes", ko: "필요로 한다", role: "V" }, { en: "a lot of time.", ko: "많은 시간을", role: "O" }], ko: "새 언어를 배우는 것은 많은 시간이 걸린다." },
      { chunks: [{ en: "The students", ko: "그 학생들은", role: "S" }, { en: "who joined the club", ko: "동아리에 가입한", role: "M" }, { en: "practice", ko: "연습한다", role: "V" }, { en: "every Friday.", ko: "매주 금요일에", role: "M" }], ko: "동아리에 가입한 학생들은 매주 금요일에 연습한다." },
      { chunks: [{ en: "Eating too much sugar", ko: "설탕을 너무 많이 먹는 것은", role: "S" }, { en: "is", ko: "~이다", role: "V" }, { en: "bad for your teeth.", ko: "이에 나쁜", role: "C" }], ko: "설탕을 너무 많이 먹는 것은 이에 나쁘다." },
      { chunks: [{ en: "The phone", ko: "그 휴대폰은", role: "S" }, { en: "that I bought last week", ko: "내가 지난주에 산", role: "M" }, { en: "stopped", ko: "멈췄다", role: "V" }, { en: "working.", ko: "작동하는 것을", role: "O" }], ko: "내가 지난주에 산 휴대폰이 작동을 멈췄다." },
      { chunks: [{ en: "My teacher", ko: "우리 선생님은", role: "S" }, { en: "made", ko: "만들었다", role: "V" }, { en: "us", ko: "우리가", role: "O" }, { en: "clean the classroom.", ko: "교실을 청소하게", role: "C" }], ko: "선생님은 우리에게 교실을 청소하게 하셨다." },
      { chunks: [{ en: "The girl", ko: "그 소녀는", role: "S" }, { en: "dancing on the stage", ko: "무대에서 춤추고 있는", role: "M" }, { en: "is", ko: "~이다", role: "V" }, { en: "my classmate.", ko: "우리 반 친구", role: "C" }], ko: "무대에서 춤추고 있는 소녀는 우리 반 친구다." },
      { chunks: [{ en: "This bridge", ko: "이 다리는", role: "S" }, { en: "was built", ko: "지어졌다", role: "V" }, { en: "about 100 years ago.", ko: "약 100년 전에", role: "M" }], ko: "이 다리는 약 100년 전에 지어졌다." },
      { chunks: [{ en: "Because it rained,", ko: "비가 왔기 때문에", role: "M" }, { en: "the game", ko: "그 경기는", role: "S" }, { en: "was canceled.", ko: "취소되었다", role: "V" }], ko: "비가 와서 경기가 취소되었다." },
    ],
  },
  {
    id: "advanced2", levelId: "high", emoji: "🌲", title: "고급 ②", desc: "명사절 주어와 긴 수식어",
    sentences: [
      { chunks: [{ en: "What matters most", ko: "가장 중요한 것은", role: "S" }, { en: "is", ko: "~이다", role: "V" }, { en: "not the result but the process.", ko: "결과가 아니라 과정", role: "C" }], ko: "가장 중요한 것은 결과가 아니라 과정이다." },
      { chunks: [{ en: "Whether we succeed or not", ko: "우리가 성공하든 못 하든", role: "S" }, { en: "depends", ko: "달려 있다", role: "V" }, { en: "on our effort.", ko: "우리의 노력에", role: "M" }], ko: "우리가 성공하느냐는 우리의 노력에 달려 있다." },
      { chunks: [{ en: "The number of people", ko: "사람들의 수는", role: "S" }, { en: "living alone", ko: "혼자 사는", role: "M" }, { en: "has increased", ko: "증가해 왔다", role: "V" }, { en: "rapidly.", ko: "빠르게", role: "M" }], ko: "혼자 사는 사람들의 수가 빠르게 증가해 왔다." },
      { chunks: [{ en: "One of the biggest problems", ko: "가장 큰 문제 중 하나는", role: "S" }, { en: "that cities face today", ko: "오늘날 도시들이 직면한", role: "M" }, { en: "is", ko: "~이다", role: "V" }, { en: "air pollution.", ko: "대기 오염", role: "C" }], ko: "오늘날 도시들이 직면한 가장 큰 문제 중 하나는 대기 오염이다." },
      { chunks: [{ en: "Students", ko: "학생들은", role: "S" }, { en: "who get enough sleep", ko: "잠을 충분히 자는", role: "M" }, { en: "tend to perform", ko: "수행하는 경향이 있다", role: "V" }, { en: "better on tests.", ko: "시험에서 더 잘", role: "M" }], ko: "잠을 충분히 자는 학생들은 시험을 더 잘 보는 경향이 있다." },
      { chunks: [{ en: "Having finished his homework,", ko: "숙제를 끝낸 뒤", role: "M" }, { en: "Jake", ko: "Jake는", role: "S" }, { en: "went out", ko: "나갔다", role: "V" }, { en: "to play basketball.", ko: "농구를 하러", role: "M" }], ko: "숙제를 끝낸 뒤 Jake는 농구를 하러 나갔다." },
      { chunks: [{ en: "The fact", ko: "그 사실은", role: "S" }, { en: "that he lied to us", ko: "그가 우리에게 거짓말을 했다는", role: "M" }, { en: "made", ko: "만들었다", role: "V" }, { en: "everyone", ko: "모두를", role: "O" }, { en: "angry.", ko: "화나게", role: "C" }], ko: "그가 우리에게 거짓말을 했다는 사실이 모두를 화나게 했다." },
      { chunks: [{ en: "Most of the information", ko: "정보의 대부분은", role: "S" }, { en: "on the internet", ko: "인터넷에 있는", role: "M" }, { en: "has not been checked", ko: "확인되지 않았다", role: "V" }, { en: "by experts.", ko: "전문가들에 의해", role: "M" }], ko: "인터넷에 있는 정보의 대부분은 전문가의 확인을 거치지 않았다." },
    ],
  },
  {
    id: "adult", levelId: "adult", emoji: "💼", title: "실전", desc: "뉴스 · 업무 문장 빠르게 읽기",
    sentences: [
      { chunks: [{ en: "The company", ko: "그 회사는", role: "S" }, { en: "announced", ko: "발표했다", role: "V" }, { en: "plans", ko: "계획을", role: "O" }, { en: "to hire 500 new employees", ko: "신입 직원 500명을 채용할", role: "M" }, { en: "next year.", ko: "내년에", role: "M" }], ko: "그 회사는 내년에 신입 직원 500명을 채용할 계획을 발표했다." },
      { chunks: [{ en: "Customers", ko: "고객들은", role: "S" }, { en: "who ordered before Friday", ko: "금요일 전에 주문한", role: "M" }, { en: "will receive", ko: "받을 것이다", role: "V" }, { en: "a 10% discount.", ko: "10% 할인을", role: "O" }], ko: "금요일 전에 주문한 고객은 10% 할인을 받는다." },
      { chunks: [{ en: "Due to heavy snow,", ko: "폭설로 인해", role: "M" }, { en: "all flights", ko: "모든 항공편이", role: "S" }, { en: "have been delayed.", ko: "지연되었다", role: "V" }], ko: "폭설로 모든 항공편이 지연되었다." },
      { chunks: [{ en: "The report", ko: "그 보고서는", role: "S" }, { en: "you sent yesterday", ko: "당신이 어제 보낸", role: "M" }, { en: "needs", ko: "필요로 한다", role: "V" }, { en: "a few changes.", ko: "몇 가지 수정을", role: "O" }], ko: "어제 보내 주신 보고서는 몇 군데 수정이 필요합니다." },
      { chunks: [{ en: "Rising housing prices", ko: "오르는 집값은", role: "S" }, { en: "have made", ko: "만들었다", role: "V" }, { en: "buying a home", ko: "집을 사는 것을", role: "O" }, { en: "difficult", ko: "어렵게", role: "C" }, { en: "for young people.", ko: "젊은 사람들에게", role: "M" }], ko: "오르는 집값 때문에 젊은 사람들이 집을 사기가 어려워졌다." },
      { chunks: [{ en: "According to the survey,", ko: "설문 조사에 따르면", role: "M" }, { en: "most workers", ko: "대부분의 직장인들은", role: "S" }, { en: "prefer", ko: "선호한다", role: "V" }, { en: "flexible working hours.", ko: "유연한 근무 시간을", role: "O" }], ko: "설문 조사에 따르면 대부분의 직장인은 유연 근무를 선호한다." },
      { chunks: [{ en: "The new policy,", ko: "새 정책은", role: "S" }, { en: "which takes effect in March,", ko: "3월부터 시행되는", role: "M" }, { en: "applies", ko: "적용된다", role: "V" }, { en: "to all employees.", ko: "모든 직원에게", role: "M" }], ko: "3월부터 시행되는 새 정책은 모든 직원에게 적용된다." },
      { chunks: [{ en: "Anyone", ko: "누구든", role: "S" }, { en: "interested in the position", ko: "그 자리에 관심 있는", role: "M" }, { en: "should submit", ko: "제출해야 한다", role: "V" }, { en: "a résumé", ko: "이력서를", role: "O" }, { en: "by June 30.", ko: "6월 30일까지", role: "M" }], ko: "그 자리에 관심 있는 분은 6월 30일까지 이력서를 제출하세요." },
    ],
  }
);

{
  const order = ["elementary-low", "elementary-mid", "elementary-high", "middle", "high", "adult"];
  const sorted = [...CHUNK_SETS].sort((a, b) => order.indexOf(a.levelId) - order.indexOf(b.levelId));
  CHUNK_SETS.splice(0, CHUNK_SETS.length, ...sorted);
}
