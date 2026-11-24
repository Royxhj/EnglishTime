// 성인 실전 영어: 일터와 여행에서 바로 쓰는 표현. talkHigh.js 뒤에 불러와 TALK_GROUPS·TALK_TOPICS에 붙인다.
TALK_GROUPS.push({ id: "adult", label: "💼 성인 실전 영어", color: "#3a5a78" });

TALK_TOPICS.push(
  {
    id: "talk-smalltalk",
    group: "adult",
    emoji: "☕",
    title: "스몰토크",
    subtitle: "How's it going?",
    slides: [
      {
        emoji: "👋",
        say: "처음 만난 사람이나 동료와 가볍게 이야기를 시작할 때는 <b>How's it going?</b>, <b>How have you been?</b>(그동안 어떻게 지냈어요?)이라고 해요. 대답은 짧게 하고 <b>And you?</b>로 되물어요.",
        pattern: "How's it going? — Pretty good. And you?",
        examples: [
          { en: "How's it going?", ko: "잘 지내요?", emoji: "🙂" },
          { en: "Pretty good, thanks. How about you?", ko: "꽤 좋아요, 고마워요. 당신은요?", emoji: "😊" },
          { en: "How have you been?", ko: "그동안 어떻게 지냈어요?", emoji: "🤗" },
        ],
      },
      {
        emoji: "🌤️",
        say: "날씨, 주말, 하는 일처럼 <b>부담 없는 주제</b>로 이어 가요. <b>Nice weather today, isn't it?</b>, <b>Did you have a good weekend?</b>, <b>What do you do?</b>(무슨 일 하세요?)",
        pattern: "Nice weather, isn't it? · Any plans for the weekend? · What do you do?",
        examples: [
          { en: "Did you have a good weekend?", ko: "주말 잘 보냈어요?", emoji: "🏕️" },
          { en: "Any plans for the holidays?", ko: "휴가 때 계획 있어요?", emoji: "🎄" },
          { en: "What do you do? — I work in marketing.", ko: "무슨 일 하세요? — 마케팅 일을 해요.", emoji: "💼" },
        ],
      },
      {
        emoji: "🚪",
        say: "대화를 자연스럽게 끝낼 때는 <b>It was nice talking to you.</b>, <b>I should get going.</b>(이제 가 봐야겠어요), <b>Let's catch up soon.</b>(조만간 또 얘기해요)이라고 해요.",
        pattern: "It was nice talking to you. · I should get going.",
        examples: [
          { en: "It was nice talking to you.", ko: "얘기 나눠서 즐거웠어요.", emoji: "😄" },
          { en: "I should get going. Let's catch up soon.", ko: "이제 가 봐야겠어요. 조만간 또 얘기해요.", emoji: "👋" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>How's it going?</b>으로 시작해서, 날씨·주말 얘기를 하고, <b>It was nice talking to you</b>로 마무리!",
        pattern: "How's it going? → 가벼운 주제 → Nice talking to you.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "How's it ___? — Not bad, thanks.", ko: "잘 지내요? — 나쁘지 않아요, 고마워요.", choices: ["going", "doing", "go"], answer: 0, hint: "How's it going?이에요." },
      { type: "choose", q: "How have you ___? — Great! I just got back from a trip.", ko: "그동안 어떻게 지냈어요? — 좋아요! 여행에서 막 돌아왔어요.", choices: ["been", "done"], answer: 0, hint: "How have you been?이에요." },
      { type: "choose", q: "What do you ___? — I'm a nurse.", ko: "무슨 일 하세요? — 간호사예요.", choices: ["do", "work"], answer: 0, hint: "직업은 What do you do?로 물어요." },
      { type: "choose", q: "It was nice ___ to you.", ko: "얘기 나눠서 즐거웠어요.", choices: ["talking", "talk"], answer: 0, hint: "It was nice talking to you.예요." },
      { type: "choose", q: "I should get ___. See you later!", ko: "이제 가 봐야겠어요. 다음에 봐요!", choices: ["going", "go"], answer: 0, hint: "get going = 가다, 출발하다." },
      { type: "order", words: ["Did", "you", "have", "a", "good", "weekend?"], ko: "주말 잘 보냈어요?" },
    ],
  },
  {
    id: "talk-meeting",
    group: "adult",
    emoji: "🗂️",
    title: "회의하기",
    subtitle: "Let's get started.",
    slides: [
      {
        emoji: "🔔",
        say: "회의를 시작할 때는 <b>Let's get started.</b>, 목적을 말할 때는 <b>The purpose of this meeting is to ~</b>, 순서대로 진행할 때는 <b>Let's move on to the next item.</b>이라고 해요.",
        pattern: "Let's get started. · The purpose of this meeting is to ___.",
        examples: [
          { en: "Shall we get started?", ko: "시작할까요?", emoji: "▶️" },
          { en: "The purpose of this meeting is to review our budget.", ko: "이번 회의의 목적은 예산 검토예요.", emoji: "💰" },
          { en: "Let's move on to the next item.", ko: "다음 안건으로 넘어가죠.", emoji: "➡️" },
        ],
      },
      {
        emoji: "🙋",
        say: "의견을 말하거나 끼어들 때는 <b>Can I add something?</b>, <b>Sorry to interrupt, but ~</b>, <b>From my point of view, ~</b>를 써요. 반대할 때는 <b>I see your point, but ~</b>로 부드럽게 시작해요.",
        pattern: "Sorry to interrupt, but ___. · I see your point, but ___.",
        examples: [
          { en: "Sorry to interrupt, but I have a quick question.", ko: "끼어들어 죄송한데, 짧은 질문이 있어요.", emoji: "✋" },
          { en: "I see your point, but I think it's too risky.", ko: "무슨 말씀인지 알겠지만, 너무 위험한 것 같아요.", emoji: "⚠️" },
        ],
      },
      {
        emoji: "📝",
        say: "마무리할 때는 <b>Let's wrap up.</b>(마무리하죠), <b>To sum up, ~</b>(요약하면), 할 일을 정할 때는 <b>Who will take care of this?</b>라고 해요.",
        pattern: "Let's wrap up. · To sum up, ___. · Who will take care of ___?",
        examples: [
          { en: "To sum up, we'll launch the product in May.", ko: "요약하면, 5월에 제품을 출시합니다.", emoji: "🚀" },
          { en: "Who will take care of the report?", ko: "보고서는 누가 맡을까요?", emoji: "📄" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 시작은 <b>Let's get started</b>, 끼어들 땐 <b>Sorry to interrupt</b>, 반대는 <b>I see your point, but</b>, 마무리는 <b>Let's wrap up</b>!",
        pattern: "get started → move on → wrap up",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Okay, everyone. Let's get ___.", ko: "자, 여러분. 시작하죠.", choices: ["started", "starting", "start"], answer: 0, hint: "Let's get started.예요." },
      { type: "choose", q: "Let's move ___ to the next item.", ko: "다음 안건으로 넘어가죠.", choices: ["on", "in"], answer: 0, hint: "move on = 넘어가다." },
      { type: "choose", q: "Sorry to ___, but can I ask something?", ko: "끼어들어 죄송한데, 뭐 좀 여쭤봐도 될까요?", choices: ["interrupt", "interrupting"], answer: 0, hint: "Sorry to + 동사원형이에요." },
      { type: "choose", q: "I see your ___, but I disagree.", ko: "무슨 말씀인지 알지만 저는 생각이 달라요.", choices: ["point", "mind"], answer: 0, hint: "I see your point.예요." },
      { type: "choose", q: "We're almost out of time. Let's wrap ___.", ko: "시간이 거의 다 됐어요. 마무리하죠.", choices: ["up", "out"], answer: 0, hint: "wrap up = 마무리하다." },
      { type: "order", words: ["Who", "will", "take", "care", "of", "this?"], ko: "이건 누가 맡을까요?" },
    ],
  },
  {
    id: "talk-phone",
    group: "adult",
    emoji: "☎️",
    title: "전화 통화",
    subtitle: "May I speak to ~?",
    slides: [
      {
        emoji: "📞",
        say: "전화를 걸면 <b>Hello, this is ~.</b>(저는 ~입니다)로 나를 밝혀요. 'I am ~'이라고 하지 않아요. 바꿔 달라고 할 때는 <b>May I speak to ~?</b>, <b>Is ~ available?</b>이에요.",
        pattern: "Hello, this is ___. · May I speak to ___?",
        examples: [
          { en: "Hello, this is Minsu Kim from ABC Company.", ko: "안녕하세요, ABC 회사의 김민수입니다.", emoji: "🏢" },
          { en: "May I speak to Ms. Lee?", ko: "이 선생님과 통화할 수 있을까요?", emoji: "🙋" },
        ],
      },
      {
        emoji: "⏸️",
        say: "전화를 받는 쪽은 <b>Speaking.</b>(전데요), <b>Hold on, please.</b>(잠시만요), <b>She's not available right now.</b>(지금 자리에 없어요), <b>Can I take a message?</b>(메모 남겨 드릴까요?)라고 해요.",
        pattern: "Hold on, please. · Can I take a message?",
        examples: [
          { en: "Hold on, please. I'll put you through.", ko: "잠시만요. 연결해 드릴게요.", emoji: "🔀" },
          { en: "He's in a meeting. Can I take a message?", ko: "회의 중이세요. 메모 남겨 드릴까요?", emoji: "📝" },
        ],
      },
      {
        emoji: "📶",
        say: "잘 안 들리면 <b>Sorry, you're breaking up.</b>(소리가 끊겨요), <b>Could you speak a little louder?</b>, 다시 걸게 할 때는 <b>I'll call you back.</b>이에요.",
        pattern: "You're breaking up. · I'll call you back.",
        examples: [
          { en: "Sorry, you're breaking up.", ko: "죄송한데 소리가 끊겨요.", emoji: "📵" },
          { en: "Could you ask him to call me back?", ko: "저한테 다시 전화 달라고 전해 주시겠어요?", emoji: "🔁" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 걸 때는 <b>This is ~</b>, 바꿔 달라고 할 땐 <b>May I speak to ~?</b>, 받을 땐 <b>Hold on</b>, <b>Can I take a message?</b>",
        pattern: "This is ___. · May I speak to ___? · Can I take a message?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Hello, ___ is Jiwon from the sales team.", ko: "안녕하세요, 영업팀 지원입니다.", choices: ["this", "I", "here"], answer: 0, hint: "전화에서는 This is ~로 나를 밝혀요." },
      { type: "choose", q: "May I ___ to Mr. Park?", ko: "박 선생님과 통화할 수 있을까요?", choices: ["speak", "tell"], answer: 0, hint: "May I speak to ~?예요." },
      { type: "choose", q: "Hold ___, please.", ko: "잠시만 기다려 주세요.", choices: ["on", "up"], answer: 0, hint: "Hold on = 잠시 기다리다." },
      { type: "choose", q: "She's out right now. Can I take a ___?", ko: "지금 외출 중이세요. 메모 남겨 드릴까요?", choices: ["message", "memo"], answer: 0, hint: "take a message예요." },
      { type: "choose", q: "Sorry, you're breaking ___. I'll call you back.", ko: "죄송한데 소리가 끊겨요. 다시 걸게요.", choices: ["up", "down"], answer: 0, hint: "break up = (통화가) 끊기다." },
      { type: "order", words: ["Could", "you", "ask", "her", "to", "call", "me", "back?"], ko: "저한테 다시 전화 달라고 전해 주시겠어요?" },
    ],
  },
  {
    id: "talk-email",
    group: "adult",
    emoji: "📧",
    title: "업무 이메일",
    subtitle: "I'm writing to ~",
    slides: [
      {
        emoji: "✍️",
        say: "이메일은 <b>Dear ~,</b> 또는 <b>Hi ~,</b>로 시작하고, 첫 문장에 목적을 밝혀요. <b>I'm writing to ~</b>(~하려고 메일 드립니다), 답장이면 <b>Thank you for your email.</b>",
        pattern: "I'm writing to ___. · Thank you for your email.",
        examples: [
          { en: "I'm writing to ask about your prices.", ko: "가격 문의차 메일 드립니다.", emoji: "💲" },
          { en: "Thank you for your quick reply.", ko: "빠른 답장 감사합니다.", emoji: "⚡" },
        ],
      },
      {
        emoji: "📎",
        say: "파일을 보낼 때는 <b>Please find attached ~</b>(~을 첨부합니다), <b>I've attached ~</b>. 확인을 부탁할 때는 <b>Could you please confirm ~?</b>예요.",
        pattern: "Please find attached ___. · Could you please confirm ___?",
        examples: [
          { en: "Please find attached the meeting notes.", ko: "회의록을 첨부합니다.", emoji: "📄" },
          { en: "Could you please confirm the delivery date?", ko: "배송일을 확인해 주시겠어요?", emoji: "🚚" },
        ],
      },
      {
        emoji: "🔚",
        say: "끝맺을 때는 <b>Please let me know if you have any questions.</b>, <b>I look forward to hearing from you.</b>를 쓰고, <b>Best regards,</b> 다음 줄에 이름을 써요.",
        pattern: "Please let me know if ___. · I look forward to hearing from you.",
        examples: [
          { en: "Please let me know if you have any questions.", ko: "궁금한 점이 있으면 알려 주세요.", emoji: "❓" },
          { en: "I look forward to hearing from you. Best regards,", ko: "회신 기다리겠습니다. 감사합니다.", emoji: "🙏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 시작은 <b>I'm writing to ~</b>, 첨부는 <b>Please find attached</b>, 끝은 <b>I look forward to hearing from you</b>!",
        pattern: "I'm writing to → Please find attached → Best regards",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm writing ___ confirm our meeting on Monday.", ko: "월요일 회의를 확인하려고 메일 드립니다.", choices: ["to", "for"], answer: 0, hint: "I'm writing to + 동사원형이에요." },
      { type: "choose", q: "Please find ___ the invoice.", ko: "청구서를 첨부합니다.", choices: ["attached", "attach"], answer: 0, hint: "Please find attached ~예요." },
      { type: "choose", q: "Thank you for your ___ reply.", ko: "빠른 답장 감사합니다.", choices: ["quick", "quickly"], answer: 0, hint: "명사 reply 앞에는 형용사예요." },
      { type: "choose", q: "Please let me ___ if you need anything else.", ko: "더 필요한 게 있으면 알려 주세요.", choices: ["know", "knowing"], answer: 0, hint: "let me know예요." },
      { type: "choose", q: "I look forward to ___ from you.", ko: "회신 기다리겠습니다.", choices: ["hearing", "hear"], answer: 0, hint: "look forward to + -ing예요." },
      { type: "order", words: ["Could", "you", "please", "confirm", "the", "date?"], ko: "날짜를 확인해 주시겠어요?" },
    ],
  },
  {
    id: "talk-schedule",
    group: "adult",
    emoji: "📆",
    title: "일정 잡기",
    subtitle: "Does Tuesday work for you?",
    slides: [
      {
        emoji: "🗓️",
        say: "시간을 제안할 때는 <b>Are you available on ~?</b>, <b>Does Tuesday work for you?</b>(화요일 괜찮으세요?), <b>How about 3 o'clock?</b>이라고 해요.",
        pattern: "Are you available ___? · Does ___ work for you?",
        examples: [
          { en: "Are you available on Thursday afternoon?", ko: "목요일 오후에 시간 되세요?", emoji: "🕑" },
          { en: "Does 10 a.m. work for you?", ko: "오전 10시 괜찮으세요?", emoji: "🕙" },
        ],
      },
      {
        emoji: "👍",
        say: "괜찮으면 <b>That works for me.</b>, <b>Sounds good.</b> 안 되면 <b>I'm afraid I'm busy then. How about ~?</b>처럼 이유 없이 짧게 거절하고 다른 시간을 제안해요.",
        pattern: "That works for me. · I'm afraid I can't make it. How about ___?",
        examples: [
          { en: "That works for me. See you then.", ko: "저는 좋아요. 그때 봬요.", emoji: "✅" },
          { en: "I'm afraid I can't make it on Monday. How about Wednesday?", ko: "월요일은 어렵겠어요. 수요일은 어떠세요?", emoji: "🔁" },
        ],
      },
      {
        emoji: "🔄",
        say: "일정을 바꿀 때는 <b>Can we reschedule?</b>, <b>Could we push it back to ~?</b>(~로 미룰 수 있을까요?), <b>Could we move it up?</b>(앞당길 수 있을까요?)",
        pattern: "Can we reschedule? · push it back · move it up",
        examples: [
          { en: "Something came up. Can we reschedule?", ko: "일이 생겼어요. 일정을 다시 잡을 수 있을까요?", emoji: "⚡" },
          { en: "Could we push it back to next week?", ko: "다음 주로 미룰 수 있을까요?", emoji: "⏩" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 제안은 <b>Does ~ work for you?</b>, 수락은 <b>That works for me</b>, 거절은 <b>I can't make it</b>, 변경은 <b>reschedule</b>!",
        pattern: "work for you · can't make it · reschedule",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Does Friday ___ for you?", ko: "금요일 괜찮으세요?", choices: ["work", "fit", "do"], answer: 0, hint: "Does ~ work for you?예요." },
      { type: "choose", q: "Are you ___ tomorrow morning?", ko: "내일 아침에 시간 되세요?", choices: ["available", "possible"], answer: 0, hint: "사람이 시간이 되면 available이에요." },
      { type: "choose", q: "Sorry, I can't make ___ at 2.", ko: "죄송한데 2시는 안 되겠어요.", choices: ["it", "that time"], answer: 0, hint: "make it = (약속에) 가다, 시간 맞추다." },
      { type: "choose", q: "Something came ___. Can we reschedule?", ko: "일이 생겼어요. 일정을 다시 잡을 수 있을까요?", choices: ["up", "out"], answer: 0, hint: "come up = (일이) 생기다." },
      { type: "choose", q: "Could we push the meeting ___ to Thursday?", ko: "회의를 목요일로 미룰 수 있을까요?", choices: ["back", "up"], answer: 0, hint: "미루다 = push back." },
      { type: "order", words: ["That", "works", "for", "me."], ko: "저는 괜찮아요." },
    ],
  },
  {
    id: "talk-interview",
    group: "adult",
    emoji: "🧑‍💼",
    title: "면접과 자기소개",
    subtitle: "Tell me about yourself.",
    slides: [
      {
        emoji: "🪪",
        say: "면접은 거의 <b>Tell me about yourself.</b>로 시작해요. 이름보다 <b>지금 하는 일 → 경력 → 지원 이유</b> 순서로 말해요. <b>I have five years of experience in ~</b>",
        pattern: "I'm currently ___. · I have ___ years of experience in ___.",
        examples: [
          { en: "I'm currently working as a software engineer.", ko: "현재 소프트웨어 엔지니어로 일하고 있어요.", emoji: "💻" },
          { en: "I have five years of experience in sales.", ko: "영업 분야에서 5년 경력이 있어요.", emoji: "📈" },
        ],
      },
      {
        emoji: "💪",
        say: "강점은 <b>My strength is ~</b>, <b>I'm good at ~ing</b>로 말하고 <b>For example, ~</b>로 근거를 붙여요. 지원 이유는 <b>I'm interested in this position because ~</b>예요.",
        pattern: "My strength is ___. · I'm interested in this position because ___.",
        examples: [
          { en: "My strength is solving problems under pressure.", ko: "제 강점은 압박 속에서 문제를 해결하는 거예요.", emoji: "🧠" },
          { en: "I'm interested in this position because I want new challenges.", ko: "새로운 도전을 원해서 이 자리에 관심이 있어요.", emoji: "🎯" },
        ],
      },
      {
        emoji: "❓",
        say: "마지막에 <b>Do you have any questions?</b>라고 물으면 질문을 하나 하는 게 좋아요. <b>What does a typical day look like?</b>(보통 하루가 어떤가요?) 끝인사는 <b>Thank you for your time.</b>이에요.",
        pattern: "What does a typical day look like? · Thank you for your time.",
        examples: [
          { en: "What does a typical day look like in this role?", ko: "이 직무는 보통 하루가 어떻게 되나요?", emoji: "🗓️" },
          { en: "Thank you for your time.", ko: "시간 내 주셔서 감사합니다.", emoji: "🙏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>I'm currently ~ → I have ~ years of experience → My strength is ~</b>, 끝에는 <b>Thank you for your time</b>!",
        pattern: "현재 → 경력 → 강점 → 지원 이유",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Tell me ___ yourself.", ko: "자기소개 해 주세요.", choices: ["about", "for"], answer: 0, hint: "Tell me about yourself.예요." },
      { type: "choose", q: "I have three years of ___ in design.", ko: "디자인 분야에서 3년 경력이 있어요.", choices: ["experience", "experiences"], answer: 0, hint: "경력이라는 뜻일 때 experience는 셀 수 없어요." },
      { type: "choose", q: "I'm good at ___ with people.", ko: "저는 사람들과 일을 잘해요.", choices: ["working", "work"], answer: 0, hint: "good at + -ing예요." },
      { type: "choose", q: "I'm interested ___ this position.", ko: "이 자리에 관심이 있어요.", choices: ["in", "on"], answer: 0, hint: "interested in이에요." },
      { type: "choose", q: "Thank you for your ___.", ko: "시간 내 주셔서 감사합니다.", choices: ["time", "times"], answer: 0, hint: "Thank you for your time.예요." },
      { type: "order", words: ["I'm", "currently", "working", "as", "a", "teacher."], ko: "현재 교사로 일하고 있어요." },
    ],
  },
  {
    id: "talk-airport",
    group: "adult",
    emoji: "🛫",
    title: "공항과 입국 심사",
    subtitle: "I'm here on vacation.",
    slides: [
      {
        emoji: "🧳",
        say: "체크인할 때는 <b>I'd like to check in.</b>, 좌석은 <b>Could I have a window seat / an aisle seat?</b>, 짐은 <b>I have one bag to check.</b>라고 해요.",
        pattern: "I'd like to check in. · Could I have an aisle seat?",
        examples: [
          { en: "Could I have a window seat, please?", ko: "창가 자리로 주시겠어요?", emoji: "🪟" },
          { en: "I have one bag to check.", ko: "부칠 가방이 하나 있어요.", emoji: "🧳" },
        ],
      },
      {
        emoji: "🛂",
        say: "입국 심사에서는 목적, 기간, 숙소를 물어요. <b>I'm here on vacation / on business.</b>, <b>I'm staying for a week.</b>, <b>I'm staying at the ~ Hotel.</b>로 짧게 답해요.",
        pattern: "I'm here on vacation. · I'm staying for ___. · I'm staying at ___.",
        examples: [
          { en: "What's the purpose of your visit? — I'm here on vacation.", ko: "방문 목적이 뭔가요? — 휴가 왔어요.", emoji: "🏖️" },
          { en: "How long are you staying? — For ten days.", ko: "얼마나 머무르세요? — 열흘이요.", emoji: "📅" },
        ],
      },
      {
        emoji: "🧭",
        say: "공항에서 길을 찾을 때는 <b>Where is the baggage claim?</b>(짐 찾는 곳), <b>Which gate does this flight leave from?</b>, 비행기가 늦으면 <b>My flight was delayed.</b>예요.",
        pattern: "Where is the ___? · My flight was delayed / canceled.",
        examples: [
          { en: "Where is the baggage claim?", ko: "짐 찾는 곳이 어디예요?", emoji: "🛄" },
          { en: "My flight was canceled. What should I do?", ko: "비행기가 결항됐어요. 어떻게 해야 하나요?", emoji: "❌" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 체크인 <b>I'd like to check in</b>, 입국 심사 <b>I'm here on vacation</b>, <b>I'm staying for ~</b>, 짐 찾기 <b>baggage claim</b>!",
        pattern: "check in · on vacation · staying for · baggage claim",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'd like to check ___, please.", ko: "체크인하려고요.", choices: ["in", "on"], answer: 0, hint: "check in이에요." },
      { type: "choose", q: "Could I have an ___ seat?", ko: "통로 쪽 자리로 주시겠어요?", choices: ["aisle", "window"], answer: 0, hint: "통로 = aisle. an이 있어서 모음 소리로 시작해요." },
      { type: "choose", q: "I'm here ___ business.", ko: "출장 왔어요.", choices: ["on", "for a"], answer: 0, hint: "on business, on vacation이에요." },
      { type: "choose", q: "How long are you staying? — ___ two weeks.", ko: "얼마나 머무르세요? — 2주요.", choices: ["For", "During"], answer: 0, hint: "숫자 기간은 for예요." },
      { type: "choose", q: "Excuse me. Where is the baggage ___?", ko: "실례합니다. 짐 찾는 곳이 어디예요?", choices: ["claim", "check"], answer: 0, hint: "짐 찾는 곳 = baggage claim." },
      { type: "order", words: ["My", "flight", "was", "delayed", "by", "two", "hours."], ko: "비행기가 2시간 지연됐어요." },
    ],
  },
  {
    id: "talk-hotel",
    group: "adult",
    emoji: "🏨",
    title: "호텔에서",
    subtitle: "I have a reservation.",
    slides: [
      {
        emoji: "🛎️",
        say: "도착하면 <b>I have a reservation under the name ~.</b>(~ 이름으로 예약했어요)라고 해요. 체크인·체크아웃 시간은 <b>What time is check-out?</b>으로 물어요.",
        pattern: "I have a reservation under ___. · What time is check-out?",
        examples: [
          { en: "Hi, I have a reservation under Kim.", ko: "안녕하세요, 김 이름으로 예약했어요.", emoji: "📋" },
          { en: "What time is check-out?", ko: "체크아웃은 몇 시예요?", emoji: "🕚" },
          { en: "Is breakfast included?", ko: "조식 포함인가요?", emoji: "🥐" },
        ],
      },
      {
        emoji: "🧺",
        say: "필요한 것을 부탁할 때는 <b>Could I get some extra towels?</b>, <b>Could you recommend a good restaurant nearby?</b>, 짐을 맡길 때는 <b>Can I leave my bags here?</b>예요.",
        pattern: "Could I get ___? · Can I leave my bags here?",
        examples: [
          { en: "Could I get some extra towels?", ko: "수건 좀 더 받을 수 있을까요?", emoji: "🧺" },
          { en: "Can I leave my luggage here until 3?", ko: "3시까지 짐을 여기 맡겨도 될까요?", emoji: "🧳" },
        ],
      },
      {
        emoji: "🔧",
        say: "문제가 생기면 <b>The air conditioner isn't working.</b>, <b>There's no hot water.</b>, <b>Could I change rooms?</b>라고 말해요. <b>isn't working</b>은 '고장 났다'는 뜻으로 많이 써요.",
        pattern: "The ___ isn't working. · Could I change rooms?",
        examples: [
          { en: "The Wi-Fi isn't working in my room.", ko: "제 방 와이파이가 안 돼요.", emoji: "📶" },
          { en: "It's too noisy. Could I change rooms?", ko: "너무 시끄러워요. 방을 바꿀 수 있을까요?", emoji: "🔊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 도착하면 <b>I have a reservation</b>, 부탁은 <b>Could I get ~?</b>, 고장은 <b>~ isn't working</b>!",
        pattern: "reservation · Could I get ___? · isn't working",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have a reservation ___ the name Lee.", ko: "이 이름으로 예약했어요.", choices: ["under", "on"], answer: 0, hint: "under the name ~이에요." },
      { type: "choose", q: "Is breakfast ___?", ko: "조식 포함인가요?", choices: ["included", "including"], answer: 0, hint: "포함된 = included." },
      { type: "choose", q: "Could I ___ some extra pillows?", ko: "베개를 좀 더 받을 수 있을까요?", choices: ["get", "give"], answer: 0, hint: "Could I get ~?이에요." },
      { type: "choose", q: "The heater isn't ___.", ko: "히터가 고장 났어요.", choices: ["working", "work"], answer: 0, hint: "isn't working = 작동하지 않는다." },
      { type: "choose", q: "Can I ___ my bags here after check-out?", ko: "체크아웃 후에 짐을 여기 맡겨도 될까요?", choices: ["leave", "stay"], answer: 0, hint: "맡기다 = leave." },
      { type: "order", words: ["What", "time", "is", "check-out?"], ko: "체크아웃은 몇 시예요?" },
    ],
  }
);
