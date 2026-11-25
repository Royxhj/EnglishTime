// 🎵 챈트로 외우기: 리듬에 맞춰 한 줄씩 따라 부르는 노래 글 (새로 지은 가사)
const CHANTS = [
  {
    id: "days", emoji: "📅", title: "요일 챈트", levels: ["elementary-low", "elementary-mid"],
    lines: [
      { en: "Monday, Tuesday, clap, clap, clap!", ko: "월요일, 화요일, 짝짝짝!" },
      { en: "Wednesday, Thursday, tap, tap, tap!", ko: "수요일, 목요일, 톡톡톡!" },
      { en: "Friday, Saturday, jump up high!", ko: "금요일, 토요일, 높이 뛰어!" },
      { en: "Sunday, Sunday, wave goodbye!", ko: "일요일, 일요일, 손 흔들어 안녕!" },
      { en: "Seven days make one whole week.", ko: "일곱 날이 모이면 일주일." },
      { en: "Say them all, and take a peek!", ko: "다 말해 보고, 살짝 다시 봐!" },
    ],
  },
  {
    id: "months", emoji: "🗓️", title: "열두 달 챈트", levels: ["elementary-low", "elementary-mid", "elementary-high"],
    lines: [
      { en: "January, February, cold and white.", ko: "1월, 2월, 춥고 하얘요." },
      { en: "March and April, flowers bright.", ko: "3월과 4월, 꽃이 활짝." },
      { en: "May and June, the sun is warm.", ko: "5월과 6월, 햇살이 따뜻해." },
      { en: "July, August, summer storm!", ko: "7월, 8월, 여름 소나기!" },
      { en: "September, October, leaves fall down.", ko: "9월, 10월, 낙엽이 떨어져." },
      { en: "November, December, snow in town!", ko: "11월, 12월, 마을에 눈이 와!" },
    ],
  },
  {
    id: "seasons", emoji: "🌸", title: "계절 챈트", levels: ["elementary-low", "elementary-mid"],
    lines: [
      { en: "Spring, spring, the flowers grow.", ko: "봄, 봄, 꽃이 자라요." },
      { en: "Summer, summer, off we go!", ko: "여름, 여름, 놀러 가자!" },
      { en: "Fall, fall, the leaves turn red.", ko: "가을, 가을, 잎이 빨개져요." },
      { en: "Winter, winter, snow on my head!", ko: "겨울, 겨울, 머리 위에 눈!" },
    ],
  },
  {
    id: "body", emoji: "🙆", title: "몸 챈트", levels: ["elementary-low", "elementary-mid"],
    lines: [
      { en: "Touch your head and touch your nose.", ko: "머리를 만지고 코를 만져요." },
      { en: "Touch your knees and touch your toes.", ko: "무릎을 만지고 발가락을 만져요." },
      { en: "Shake your hands and stamp your feet.", ko: "손을 흔들고 발을 굴러요." },
      { en: "Turn around and take a seat!", ko: "한 바퀴 돌고 자리에 앉아요!" },
    ],
  },
  {
    id: "opposites", emoji: "↔️", title: "반대말 챈트", levels: ["elementary-mid", "elementary-high"],
    lines: [
      { en: "Up and down, up and down.", ko: "위로 아래로, 위로 아래로." },
      { en: "Smile and frown, smile and frown.", ko: "웃고 찡그리고, 웃고 찡그리고." },
      { en: "Fast and slow, fast and slow.", ko: "빠르게 느리게, 빠르게 느리게." },
      { en: "Stop and go, stop and go.", ko: "멈추고 가고, 멈추고 가고." },
      { en: "Big and small, short and tall.", ko: "크고 작고, 키 작고 키 크고." },
      { en: "I know opposites, I know them all!", ko: "나는 반대말을 다 알아요!" },
    ],
  },
  {
    id: "weather", emoji: "🌦️", title: "날씨 챈트", levels: ["elementary-low", "elementary-mid"],
    lines: [
      { en: "How's the weather? Look outside!", ko: "날씨가 어때? 밖을 봐!" },
      { en: "It's sunny, so let's go for a ride.", ko: "맑아, 그러니 자전거 타러 가자." },
      { en: "It's rainy, take your yellow coat.", ko: "비가 와, 노란 우비를 챙겨." },
      { en: "It's windy, hold on to your boat!", ko: "바람이 불어, 배를 꽉 잡아!" },
      { en: "It's snowy, build a snowman tall.", ko: "눈이 와, 키 큰 눈사람을 만들자." },
      { en: "I like the weather, one and all!", ko: "나는 모든 날씨가 좋아!" },
    ],
  },
  {
    id: "tens", emoji: "🔟", title: "십 단위 챈트", levels: ["elementary-mid", "elementary-high"],
    lines: [
      { en: "Ten, twenty, thirty, count with me.", ko: "10, 20, 30, 나랑 같이 세어 봐." },
      { en: "Forty, fifty, easy as can be.", ko: "40, 50, 정말 쉬워." },
      { en: "Sixty, seventy, keep it going.", ko: "60, 70, 계속 가자." },
      { en: "Eighty, ninety, my numbers are growing.", ko: "80, 90, 숫자가 커져요." },
      { en: "One hundred! Give me a high five!", ko: "100! 하이 파이브!" },
    ],
  },
  {
    id: "feelings", emoji: "😊", title: "기분 챈트", levels: ["elementary-mid", "elementary-high"],
    lines: [
      { en: "When I'm happy, I smile like this.", ko: "행복할 때 나는 이렇게 웃어요." },
      { en: "When I'm sad, I need a hug and a kiss.", ko: "슬플 때 나는 안아 주고 뽀뽀해 줘야 해요." },
      { en: "When I'm angry, I count to ten.", ko: "화날 때 나는 열까지 세요." },
      { en: "When I'm sleepy, I yawn again.", ko: "졸릴 때 나는 또 하품해요." },
      { en: "When I'm scared, I hold your hand.", ko: "무서울 때 나는 네 손을 잡아요." },
      { en: "Feelings change, and that's just grand!", ko: "기분은 바뀌어요, 그래도 괜찮아요!" },
    ],
  },
];
