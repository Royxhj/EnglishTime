// 성인 실전 연습: 회화 롤플레이(상대 말을 듣고 내 대답 고르기)와 업무 이메일 문장 고르기.
// choices의 answer가 정답 번호이고, 풀 때는 섞어서 보여 준다.
const ROLEPLAYS = [
  {
    id: "rp-cafe",
    emoji: "☕",
    title: "카페에서 주문하기",
    setting: "카페 계산대 앞이에요. 직원이 먼저 말을 걸어요.",
    turns: [
      { them: "Hi there! What can I get for you?", ko: "안녕하세요! 뭘 드릴까요?", choices: ["Can I get a medium latte, please?", "I'm fine, thank you.", "Yes, I can."], answer: 0, why: "주문할 때는 Can I get ~, please? / I'd like ~가 자연스러워요." },
      { them: "Sure. Would you like that hot or iced?", ko: "네. 따뜻한 걸로 드릴까요, 아이스로 드릴까요?", choices: ["Iced, please.", "Yes, I would.", "It's very hot today."], answer: 0, why: "A or B 질문에는 Yes/No가 아니라 둘 중 하나로 대답해요." },
      { them: "Is that for here or to go?", ko: "드시고 가세요, 가져가세요?", choices: ["To go, please.", "I'm going home.", "Here you are."], answer: 0, why: "for here(매장) / to go(포장) 중 하나로 대답해요." },
      { them: "That'll be five fifty.", ko: "5달러 50센트입니다.", choices: ["Can I pay by card?", "That's too bad.", "Nice to meet you."], answer: 0, why: "결제 방법을 물을 때 Can I pay by card / in cash?라고 해요." },
    ],
  },
  {
    id: "rp-hotel",
    emoji: "🏨",
    title: "호텔 방에 문제가 있을 때",
    setting: "호텔 방 에어컨이 고장 나서 프런트에 전화했어요.",
    turns: [
      { them: "Front desk. How may I help you?", ko: "프런트입니다. 무엇을 도와드릴까요?", choices: ["Hi, the air conditioner in my room isn't working.", "I'm a guest. Goodbye.", "Help me now!"], answer: 0, why: "문제를 말할 때는 ~ isn't working.이 가장 자연스러워요. 명령조(Help me now!)는 무례하게 들려요." },
      { them: "I'm sorry about that. What's your room number?", ko: "죄송합니다. 방 번호가 어떻게 되세요?", choices: ["It's room 1204.", "My number is 010-1234.", "I'm in the room."], answer: 0, why: "방 번호는 It's room ~이라고 해요." },
      { them: "I'll send someone up right away. Is there anything else?", ko: "바로 사람을 올려 보낼게요. 다른 건 없으세요?", choices: ["Could I also get some extra towels?", "No, I'm not.", "Yes, it is."], answer: 0, why: "추가로 부탁할 때 Could I also get ~?이라고 해요." },
      { them: "No problem. They'll be there in ten minutes.", ko: "알겠습니다. 10분 안에 갖다 드릴게요.", choices: ["Great, thank you so much.", "You're welcome.", "See you tomorrow."], answer: 0, why: "도움을 받았으니 Thank you로 마무리해요. You're welcome은 고맙다는 말에 대한 대답이에요." },
    ],
  },
  {
    id: "rp-meeting",
    emoji: "📅",
    title: "회의 일정 잡기",
    setting: "거래처 담당자와 다음 회의 날짜를 정하고 있어요.",
    turns: [
      { them: "We'd like to set up a follow-up meeting. When are you available?", ko: "후속 회의를 잡고 싶은데요. 언제 시간 되세요?", choices: ["How about Tuesday afternoon?", "I'm available.", "Yes, we would."], answer: 0, why: "구체적인 시간을 How about ~?으로 제안해요." },
      { them: "Tuesday doesn't work for me, unfortunately. What about Wednesday?", ko: "아쉽게도 화요일은 안 돼요. 수요일은 어떠세요?", choices: ["Wednesday works for me. Would 2 p.m. be okay?", "No, I don't.", "I'm sorry to hear that."], answer: 0, why: "수락하면서 시간까지 제안하면 대화가 앞으로 나가요. ~ works for me = ~ 괜찮아요." },
      { them: "2 p.m. is perfect. Shall we meet online?", ko: "2시 좋아요. 온라인으로 할까요?", choices: ["Sure. I'll send you a meeting link.", "Yes, I shall.", "I'm online now."], answer: 0, why: "제안을 받아들이고 다음 행동(링크 보내기)을 말해요." },
      { them: "Great. Talk to you then.", ko: "좋아요. 그때 얘기해요.", choices: ["Looking forward to it.", "Talk to you yesterday.", "Same to you, sir."], answer: 0, why: "Looking forward to it. = 그때 뵙겠습니다(기대할게요)." },
    ],
  },
  {
    id: "rp-smalltalk",
    emoji: "🙂",
    title: "새 동료와 스몰토크",
    setting: "엘리베이터에서 처음 보는 옆 팀 동료를 만났어요.",
    turns: [
      { them: "Hi, I don't think we've met. I'm Alex from marketing.", ko: "안녕하세요, 처음 뵙는 것 같네요. 마케팅팀 알렉스예요.", choices: ["Nice to meet you, Alex. I'm Jiwon from sales.", "Yes, we didn't.", "I'm fine, and you?"], answer: 0, why: "인사하며 내 이름과 팀을 함께 소개해요." },
      { them: "How long have you been with the company?", ko: "회사에 다닌 지 얼마나 되셨어요?", choices: ["About two years now.", "Since two years.", "I'm with my company."], answer: 0, why: "기간은 (For) about two years.라고 해요. since 뒤에는 시작 시점이 와요." },
      { them: "Nice. Any plans for the weekend?", ko: "그렇군요. 주말에 계획 있으세요?", choices: ["I'm going hiking with my family. How about you?", "Yes, I have.", "The weekend is Saturday."], answer: 0, why: "대답한 뒤 How about you?로 되물으면 대화가 이어져요." },
      { them: "This is my floor. It was nice talking to you!", ko: "저 여기서 내려요. 얘기 즐거웠어요!", choices: ["You too. See you around!", "Me too, I'm nice.", "Goodbye forever."], answer: 0, why: "You too. See you around! = 저도요. 또 봬요!" },
    ],
  },
  {
    id: "rp-complaint",
    emoji: "📦",
    title: "주문한 물건이 잘못 왔을 때",
    setting: "온라인 쇼핑몰 고객센터에 전화했어요. 다른 색 셔츠가 왔어요.",
    turns: [
      { them: "Thank you for calling. How can I help you today?", ko: "전화 주셔서 감사합니다. 무엇을 도와드릴까요?", choices: ["I ordered a blue shirt, but I received a red one.", "Your shop is terrible!", "I want something."], answer: 0, why: "무엇을 주문했고 무엇이 왔는지 차분하게 설명해요." },
      { them: "I'm so sorry about that. Could I have your order number?", ko: "정말 죄송합니다. 주문 번호를 알려 주시겠어요?", choices: ["Sure, it's 4 5 8 2 1.", "No, you couldn't.", "Order number is nice."], answer: 0, why: "요청에 Sure, it's ~로 바로 답해요." },
      { them: "Would you like an exchange or a refund?", ko: "교환을 원하세요, 환불을 원하세요?", choices: ["I'd like to exchange it for the blue one.", "Yes, I would like.", "Both are fine for me, thank you."], answer: 0, why: "A or B 질문에는 하나를 골라 I'd like to ~로 대답해요." },
      { them: "We'll send the blue shirt today. You can keep the red one.", ko: "파란 셔츠는 오늘 보내 드릴게요. 빨간 건 가지셔도 돼요.", choices: ["That's very kind of you. Thank you.", "That's too bad.", "You're welcome."], answer: 0, why: "That's very kind of you. = 정말 친절하시네요(감사 표현)." },
    ],
  },
  {
    id: "rp-restaurant",
    emoji: "🍽️",
    title: "식당 예약 전화",
    setting: "저녁 식사를 예약하려고 식당에 전화했어요.",
    turns: [
      { them: "Good evening, Bella Kitchen. How can I help you?", ko: "안녕하세요, 벨라 키친입니다. 무엇을 도와드릴까요?", choices: ["I'd like to make a reservation for Friday night.", "I'm hungry now.", "Is this Bella Kitchen?"], answer: 0, why: "예약은 I'd like to make a reservation for ~예요." },
      { them: "Certainly. For how many people?", ko: "네. 몇 분이세요?", choices: ["For four, please.", "Four o'clock.", "Many people."], answer: 0, why: "인원은 For four.처럼 for + 숫자로 말해요. Four o'clock은 시간이에요." },
      { them: "What time would you like?", ko: "몇 시로 하시겠어요?", choices: ["Around seven, if possible.", "For seven people.", "I like time."], answer: 0, why: "시간은 at / around + 시각. if possible을 붙이면 부드러워요." },
      { them: "Seven o'clock is available. Could I have your name, please?", ko: "7시 가능합니다. 성함을 알려 주시겠어요?", choices: ["It's Kim. K-I-M.", "My name is good.", "Yes, you could."], answer: 0, why: "이름은 It's ~로 말하고, 철자를 불러 주면 친절해요." },
    ],
  },
];

const EMAIL_TASKS = [
  { situation: "처음 연락하는 거래처에 가격을 문의하는 이메일의 첫 문장", choices: ["I'm writing to ask about the prices of your products.", "Tell me your prices.", "Hello, what is price?"], answer: 0, why: "I'm writing to ~ 로 메일을 쓴 목적을 먼저 밝혀요." },
  { situation: "받은 메일에 답장할 때 첫 문장", choices: ["Thank you for your email.", "I got your email, okay.", "Why did you send this?"], answer: 0, why: "답장은 Thank you for your email / quick reply.로 시작해요." },
  { situation: "파일을 첨부했다고 알릴 때", choices: ["Please find attached the updated schedule.", "Look at the file I gave.", "File is here, check it."], answer: 0, why: "Please find attached ~ / I've attached ~가 업무 메일 표현이에요." },
  { situation: "금요일까지 답을 달라고 정중하게 부탁할 때", choices: ["I'd appreciate it if you could reply by Friday.", "Reply by Friday.", "You must answer me on Friday."], answer: 0, why: "I'd appreciate it if you could ~ = ~해 주시면 감사하겠습니다." },
  { situation: "답장이 늦은 것을 사과할 때", choices: ["Sorry for the late reply.", "I was busy, so whatever.", "Late reply is sorry."], answer: 0, why: "Sorry for the late reply. / Apologies for the delay.를 써요." },
  { situation: "회의 날짜를 바꿔 달라고 부탁할 때", choices: ["Would it be possible to move the meeting to Thursday?", "Change the meeting to Thursday.", "Thursday meeting, okay?"], answer: 0, why: "Would it be possible to ~? = ~할 수 있을까요? (정중한 부탁)" },
  { situation: "상대의 제안을 부드럽게 거절할 때", choices: ["Unfortunately, we are unable to accept your offer at this time.", "No. We don't want it.", "Your offer is bad."], answer: 0, why: "Unfortunately와 unable to로 부드럽게 거절하고, at this time을 붙여 여지를 남겨요." },
  { situation: "궁금한 점이 있으면 연락 달라고 할 때", choices: ["Please let me know if you have any questions.", "Ask me if you don't understand.", "Questions? Tell me."], answer: 0, why: "Please let me know if ~ 는 메일 끝에 자주 쓰는 표현이에요." },
  { situation: "메일을 마무리하며 답장을 기다린다고 할 때", choices: ["I look forward to hearing from you.", "I look forward to hear from you.", "Waiting your answer."], answer: 0, why: "look forward to 뒤에는 -ing예요. hear가 아니라 hearing." },
  { situation: "확인을 부탁할 때", choices: ["Could you please confirm the delivery date?", "Confirm the delivery date.", "Is the delivery date confirm?"], answer: 0, why: "Could you please confirm ~? 이 가장 정중해요." },
  { situation: "다음 문장을 정중하게 고쳐 쓰면? — 'Send me the report now.'", choices: ["Could you send me the report when you have a moment?", "Send me the report now, please now.", "You will send the report."], answer: 0, why: "Could you ~ when you have a moment? 로 명령을 부탁으로 바꿔요." },
  { situation: "다음 문장을 정중하게 고쳐 쓰면? — 'You made a mistake in the invoice.'", choices: ["It seems there might be an error in the invoice.", "Your invoice is wrong again.", "You are wrong."], answer: 0, why: "It seems there might be ~ 로 단정하지 않고 부드럽게 지적해요." },
  { situation: "다음 문장을 정중하게 고쳐 쓰면? — 'I want a discount.'", choices: ["Would it be possible to get a discount?", "Give me a discount.", "I want discount now."], answer: 0, why: "I want ~ 대신 Would it be possible to ~? / I'd like ~를 써요." },
  { situation: "상대가 도와줘서 고맙다고 할 때", choices: ["Thank you for your help with this.", "Thanks for helping, it was your job.", "Help was good."], answer: 0, why: "Thank you for your help with ~ / I really appreciate your help.를 써요." },
  { situation: "메일의 맺음말", choices: ["Best regards,", "Bye bye,", "See you soon my friend,"], answer: 0, why: "업무 메일은 Best regards, / Kind regards, 다음 줄에 이름을 써요." },
];
