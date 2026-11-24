// 듣기 평가: 단계마다 대화 5개. lines의 화자 "W"(여자) · "M"(남자)는 다른 목소리로 읽는다.
// 보기는 answer가 정답 번호이고, 풀 때는 섞어서 보여 준다.
const LISTENING_SETS = [
  {
    levelId: "elementary-low",
    items: [
      { lines: [["W", "What color is your bag?"], ["M", "It's blue."]], q: "남자의 가방은 무슨 색인가요?", choices: ["파란색", "빨간색", "노란색", "초록색"], answer: 0, explain: "It's blue. → 파란색이에요." },
      { lines: [["M", "How old are you?"], ["W", "I'm eight years old."]], q: "여자는 몇 살인가요?", choices: ["8살", "7살", "9살", "10살"], answer: 0, explain: "I'm eight years old. → 8살이에요." },
      { lines: [["W", "Do you like apples?"], ["M", "No, I don't. I like bananas."]], q: "남자가 좋아하는 과일은?", choices: ["바나나", "사과", "포도", "딸기"], answer: 0, explain: "사과는 싫고 I like bananas. → 바나나를 좋아해요." },
      { lines: [["M", "Where is my cat?"], ["W", "It's under the table."]], q: "고양이는 어디에 있나요?", choices: ["탁자 아래", "탁자 위", "침대 위", "상자 안"], answer: 0, explain: "under the table → 탁자 아래예요." },
      { lines: [["W", "Can you swim?"], ["M", "Yes, I can. I can swim very well."]], q: "남자가 할 수 있는 것은?", choices: ["수영", "스케이트", "자전거 타기", "피아노 치기"], answer: 0, explain: "I can swim very well. → 수영을 잘해요." },
    ],
  },
  {
    levelId: "elementary-mid",
    items: [
      { lines: [["M", "What time is it?"], ["W", "It's four thirty."], ["M", "Oh no, I'm late for my piano lesson!"]], q: "지금 몇 시인가요?", choices: ["4시 30분", "4시", "3시 30분", "5시"], answer: 0, explain: "It's four thirty. → 4시 30분이에요." },
      { lines: [["W", "What's the weather like today?"], ["M", "It's rainy. Take your umbrella."]], q: "오늘 날씨는?", choices: ["비가 온다", "맑다", "눈이 온다", "바람이 분다"], answer: 0, explain: "It's rainy. 그래서 우산을 챙기라고 해요." },
      { lines: [["M", "What did you do last weekend?"], ["W", "I went to the zoo with my family. I saw a big elephant."]], q: "여자가 지난 주말에 간 곳은?", choices: ["동물원", "수영장", "도서관", "공원"], answer: 0, explain: "I went to the zoo → 동물원에 갔어요." },
      { lines: [["W", "How much is this cap?"], ["M", "It's ten dollars."], ["W", "Okay, I'll take it."]], q: "모자는 얼마인가요?", choices: ["10달러", "2달러", "12달러", "20달러"], answer: 0, explain: "It's ten dollars. → 10달러예요." },
      { lines: [["M", "What's your favorite subject?"], ["W", "I like science. I love doing experiments."]], q: "여자가 좋아하는 과목은?", choices: ["과학", "수학", "음악", "체육"], answer: 0, explain: "I like science. → 과학을 좋아해요." },
    ],
  },
  {
    levelId: "elementary-high",
    items: [
      { lines: [["W", "Excuse me. Where is the post office?"], ["M", "Go straight two blocks and turn left. It's next to the bank."]], q: "우체국은 어디에 있나요?", choices: ["은행 옆", "학교 앞", "병원 뒤", "공원 안"], answer: 0, explain: "It's next to the bank. → 은행 옆이에요." },
      { lines: [["M", "You look tired. What's wrong?"], ["W", "I have a bad cold. I have a fever."], ["M", "You should see a doctor."]], q: "남자가 여자에게 한 조언은?", choices: ["병원에 가 보라고", "일찍 자라고", "물을 많이 마시라고", "운동을 하라고"], answer: 0, explain: "You should see a doctor. → 의사에게 가 보라는 충고예요." },
      { lines: [["W", "What do you want to be in the future?"], ["M", "I want to be a pilot. I want to fly around the world."]], q: "남자의 장래 희망은?", choices: ["비행기 조종사", "의사", "요리사", "선생님"], answer: 0, explain: "I want to be a pilot. → 조종사가 되고 싶어 해요." },
      { lines: [["M", "Let's play soccer after school."], ["W", "Sorry, I can't. I have to help my mom."], ["M", "How about tomorrow?"], ["W", "Sounds good!"]], q: "두 사람은 언제 축구를 할까요?", choices: ["내일", "오늘 방과 후", "주말", "다음 주"], answer: 0, explain: "오늘은 안 되고 How about tomorrow? — Sounds good! → 내일이에요." },
      { lines: [["W", "When is your birthday?"], ["M", "It's May fifth. It's also Children's Day."]], q: "남자의 생일은?", choices: ["5월 5일", "5월 15일", "3월 5일", "4월 5일"], answer: 0, explain: "May fifth → 5월 5일이에요." },
    ],
  },
  {
    levelId: "middle",
    items: [
      { lines: [["M", "Have you finished your science project?"], ["W", "Not yet. I'm worried I can't finish it by Friday."], ["M", "Don't worry. I'll help you."]], q: "여자의 기분으로 알맞은 것은?", choices: ["걱정스럽다", "신난다", "화가 난다", "지루하다"], answer: 0, explain: "I'm worried ~ → 금요일까지 못 끝낼까 걱정하고 있어요." },
      { lines: [["W", "Which do you prefer, cats or dogs?"], ["M", "I prefer dogs. They are friendly and fun to play with."]], q: "남자가 개를 더 좋아하는 이유는?", choices: ["친근하고 같이 놀기 재미있어서", "조용해서", "키우기 쉬워서", "털이 적어서"], answer: 0, explain: "They are friendly and fun to play with. 선호는 I prefer A로 말해요." },
      { lines: [["M", "How often do you exercise?"], ["W", "I jog three times a week."], ["M", "Wow, that's great."]], q: "여자는 일주일에 몇 번 운동하나요?", choices: ["세 번", "한 번", "두 번", "매일"], answer: 0, explain: "three times a week → 일주일에 세 번이에요." },
      { lines: [["W", "I'm going to visit Jeju this summer."], ["M", "Sounds fun! What are you going to do there?"], ["W", "I'm going to climb Hallasan."]], q: "여자가 제주에서 할 일은?", choices: ["한라산 등반", "수영", "낚시", "쇼핑"], answer: 0, explain: "I'm going to climb Hallasan. 계획은 be going to로 말해요." },
      { lines: [["M", "I can't find my phone anywhere."], ["W", "Did you check your backpack?"], ["M", "Oh, here it is! Thanks."]], q: "남자의 휴대폰은 어디에 있었나요?", choices: ["가방 안", "책상 위", "주머니 안", "교실"], answer: 0, explain: "Did you check your backpack? — Oh, here it is! → 가방에 있었어요." },
    ],
  },
  {
    levelId: "high",
    items: [
      { lines: [["W", "I should have studied harder for the test."], ["M", "Don't be too hard on yourself. There's always next time."]], q: "여자의 심정으로 알맞은 것은?", choices: ["후회스럽다", "자랑스럽다", "안심된다", "질투 난다"], answer: 0, explain: "I should have studied harder. → '더 열심히 했어야 했는데'라는 후회예요." },
      { lines: [["M", "Would you mind turning down the music? I'm trying to study."], ["W", "Oh, sorry. Not at all."]], q: "남자가 부탁한 것은?", choices: ["음악 소리 줄이기", "음악 끄고 나가기", "공부 도와주기", "창문 닫기"], answer: 0, explain: "turn down = 소리를 줄이다. Not at all은 '그럼요'라는 수락이에요." },
      { lines: [["W", "What do you think about school uniforms?"], ["M", "On the one hand, they save time in the morning. On the other hand, they limit our freedom."]], q: "남자가 말한 교복의 단점은?", choices: ["자유를 제한한다", "비싸다", "불편하다", "아침 시간이 오래 걸린다"], answer: 0, explain: "On the other hand, they limit our freedom. 장점은 아침 시간 절약이에요." },
      { lines: [["M", "I'd like to return this jacket. It's too small."], ["W", "Do you want a refund or an exchange?"], ["M", "I'll exchange it for a larger size."]], q: "남자가 원하는 것은?", choices: ["더 큰 치수로 교환", "전액 환불", "다른 색으로 교환", "수선"], answer: 0, explain: "I'll exchange it for a larger size. → 큰 치수로 교환해요." },
      { lines: [["W", "Sorry, I didn't catch that. Could you say it again?"], ["M", "Sure. The meeting has been moved to Thursday at three."]], q: "회의는 언제로 바뀌었나요?", choices: ["목요일 3시", "화요일 3시", "목요일 2시", "금요일 3시"], answer: 0, explain: "moved to Thursday at three → 목요일 3시예요." },
    ],
  },
  {
    levelId: "adult",
    items: [
      { lines: [["M", "Hello, this is David from Green Office Supplies. May I speak to Ms. Han?"], ["W", "I'm sorry, she's in a meeting. Can I take a message?"], ["M", "Yes, please ask her to call me back this afternoon."]], q: "남자가 남긴 메시지는?", choices: ["오늘 오후에 다시 전화해 달라", "내일 회의에 와 달라", "주문을 취소해 달라", "이메일을 확인해 달라"], answer: 0, explain: "ask her to call me back this afternoon → 오후에 다시 전화 달라는 메시지예요." },
      { lines: [["W", "Does Tuesday at ten work for you?"], ["M", "I'm afraid I have a client meeting then. How about Wednesday morning?"], ["W", "That works for me."]], q: "두 사람은 언제 만나나요?", choices: ["수요일 오전", "화요일 10시", "화요일 오후", "목요일 오전"], answer: 0, explain: "화요일은 안 되고 Wednesday morning에 That works for me. → 수요일 오전이에요." },
      { lines: [["M", "What's the purpose of your visit?"], ["W", "I'm here on business."], ["M", "How long will you be staying?"], ["W", "For five days."]], q: "여자는 얼마나 머무르나요?", choices: ["5일", "5주", "15일", "2일"], answer: 0, explain: "For five days. → 5일이에요. 방문 목적은 출장(on business)이에요." },
      { lines: [["W", "Hi, I have a reservation under Park."], ["M", "Yes, a double room for two nights. Breakfast is included."], ["W", "Great. What time is check-out?"], ["M", "It's at eleven."]], q: "체크아웃 시간은?", choices: ["11시", "12시", "10시", "7시"], answer: 0, explain: "It's at eleven. → 11시예요." },
      { lines: [["M", "The air conditioner in my room isn't working."], ["W", "I'm so sorry for the inconvenience. I'll send someone right away."]], q: "남자가 겪는 문제는?", choices: ["에어컨이 고장 났다", "방이 시끄럽다", "수건이 없다", "와이파이가 안 된다"], answer: 0, explain: "isn't working = 고장 나서 작동하지 않는다." },
    ],
  },
];
