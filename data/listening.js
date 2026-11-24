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
      { lines: [["W", "Did you finish the sales report?"], ["M", "Almost. I just need to add the charts. I'll send it to you by three."], ["W", "Great, thanks."]], q: "남자는 보고서를 언제까지 보내나요?", choices: ["3시까지", "오늘 밤까지", "내일 아침까지", "이미 보냈다"], answer: 0, explain: "I'll send it to you by three. by = ~까지(마감)예요." },
      { lines: [["M", "Excuse me, is this seat taken?"], ["W", "No, go ahead."], ["M", "Thanks. Is this the train to Busan?"], ["W", "Actually, this one goes to Daejeon. The Busan train is on platform 5."]], q: "부산행 기차는 어디에 있나요?", choices: ["5번 승강장", "지금 이 기차", "3번 승강장", "대전역"], answer: 0, explain: "The Busan train is on platform 5. 남자는 잘못된 기차에 탈 뻔했어요." },
      { lines: [["W", "I'd like to open a savings account."], ["M", "Sure. Do you have your ID with you?"], ["W", "Yes, here's my passport."], ["M", "Thank you. It'll take about ten minutes."]], q: "여자가 은행에 온 목적은?", choices: ["적금 계좌를 만들려고", "돈을 인출하려고", "대출을 받으려고", "카드를 해지하려고"], answer: 0, explain: "I'd like to open a savings account. savings account = 적금(저축) 계좌." },
      { lines: [["M", "Doctor, I've had a sore throat for three days."], ["W", "Do you have a fever?"], ["M", "A little, yes."], ["W", "I'll give you some medicine. Drink plenty of water and get some rest."]], q: "의사가 한 조언이 아닌 것은?", choices: ["운동을 많이 하라", "물을 많이 마시라", "쉬라", "약을 먹으라"], answer: 0, explain: "Drink plenty of water and get some rest. + medicine. 운동하라는 말은 없었어요." },
      { lines: [["W", "Hi, I'm calling about the job posting for a graphic designer."], ["M", "Thanks for calling. Could you email us your resume and portfolio?"], ["W", "Sure. What's the deadline?"], ["M", "This Friday."]], q: "여자가 보내야 하는 것은?", choices: ["이력서와 포트폴리오", "사진과 신분증", "추천서", "작품 원본"], answer: 0, explain: "Could you email us your resume and portfolio? 마감은 이번 주 금요일이에요." },
      { lines: [["M", "I think I left my umbrella on the bus."], ["W", "Which bus number was it?"], ["M", "Number 402, around eight this morning."], ["W", "Let me check our lost and found."]], q: "남자가 잃어버린 물건은?", choices: ["우산", "지갑", "휴대폰", "가방"], answer: 0, explain: "I left my umbrella on the bus. lost and found = 분실물 센터." },
      { lines: [["W", "Our flight has been delayed by two hours."], ["M", "Oh no. We'll miss our connecting flight."], ["W", "Let's ask the airline to rebook us."]], q: "두 사람이 하려는 일은?", choices: ["항공사에 다른 항공편 예약 요청", "호텔 예약", "택시 타기", "환불 받기"], answer: 0, explain: "Let's ask the airline to rebook us. rebook = 다시 예약하다. 연결 항공편을 놓칠까 걱정하고 있어요." },
      { lines: [["M", "Can you recommend a good place for dinner around here?"], ["W", "There's a great Italian restaurant two blocks away. It's a bit pricey, though."], ["M", "That's okay. It's a special occasion."]], q: "식당에 대해 여자가 한 말은?", choices: ["좀 비싸다", "아주 싸다", "오늘 문을 닫았다", "예약이 꽉 찼다"], answer: 0, explain: "It's a bit pricey, though. pricey = 값이 비싼. though는 말끝에서 '그래도, ~이긴 하지만'이에요." },
      { lines: [["W", "Have you signed up for the yoga class?"], ["M", "Not yet. Is it still open?"], ["W", "Yes, but there are only two spots left."], ["M", "Then I'd better sign up today."]], q: "남자가 오늘 하려는 일은?", choices: ["요가 수업 등록", "요가 수업 취소", "자리 양보", "운동복 사기"], answer: 0, explain: "I'd better sign up today. had better = ~하는 게 좋겠다. 자리가 두 개밖에 안 남았어요." },
      { lines: [["M", "How was your vacation?"], ["W", "It was wonderful, but it rained for the first two days."], ["M", "That's too bad. What did you do?"], ["W", "We visited museums and caught up on sleep."]], q: "비가 온 기간은?", choices: ["처음 이틀", "휴가 내내", "마지막 날", "하루도 안 왔다"], answer: 0, explain: "it rained for the first two days. 그동안 박물관에 가고 밀린 잠을 잤어요(caught up on sleep)." },
    ],
  },
];
