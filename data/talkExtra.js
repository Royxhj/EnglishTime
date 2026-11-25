// 추가 초등 대화 표현. talk.js 뒤에 불러와 TALK_TOPICS에 붙이고, 그룹 순서대로 정렬한다.
TALK_TOPICS.push(
  // ── 👋 인사와 소개 ──
  {
    id: "talk-family",
    group: "hello",
    emoji: "👨‍👩‍👧",
    title: "가족 소개하기",
    subtitle: "This is my mom.",
    slides: [
      {
        emoji: "👩",
        say: "다른 사람을 소개할 때는 <b>This is ~</b>(이쪽은 ~야)라고 해요. 소개받으면 <b>Nice to meet you.</b>라고 인사해요.",
        pattern: "This is my ___. — Nice to meet you.",
        examples: [
          { en: "Mom, this is my friend Jiho.", ko: "엄마, 이쪽은 내 친구 지호예요.", emoji: "👧" },
          { en: "Nice to meet you, Jiho.", ko: "만나서 반가워, 지호야.", emoji: "👩" },
          { en: "Nice to meet you, too.", ko: "저도 만나서 반가워요.", emoji: "🧒" },
        ],
      },
      {
        emoji: "👪",
        say: "가족이 몇 명인지는 <b>How many people are there in your family?</b>로 묻고, <b>There are four people in my family.</b>로 대답해요.",
        pattern: "There are ___ people in my family.",
        examples: [
          { en: "How many people are there in your family?", ko: "너희 가족은 몇 명이야?", emoji: "🧒" },
          { en: "There are four: my dad, my mom, my brother, and me.", ko: "네 명이야. 아빠, 엄마, 남동생, 그리고 나.", emoji: "👧" },
        ],
      },
      {
        emoji: "💬",
        say: "가족에 대해 한마디 덧붙여 보세요. <b>He is ~</b>, <b>She likes ~</b>처럼 말하면 돼요.",
        pattern: "My dad is ___. My sister likes ___.",
        examples: [
          { en: "My dad is a cook.", ko: "우리 아빠는 요리사야.", emoji: "👨‍🍳" },
          { en: "My sister likes drawing.", ko: "우리 언니는 그림 그리기를 좋아해.", emoji: "🎨" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 소개는 <b>This is ~</b>, 가족 수는 <b>There are ~ people in my family.</b>",
        pattern: "This is my mom. · There are four people in my family.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Dad, ___ is my friend Sora.", ko: "아빠, 이쪽은 제 친구 소라예요.", choices: ["this", "these", "it"], answer: 0, hint: "사람을 소개할 때는 This is ~예요." },
      { type: "choose", q: "Nice to meet you. — Nice to meet you, ___.", ko: "만나서 반가워. / 나도 만나서 반가워.", choices: ["too", "two", "to"], answer: 0, hint: "'나도'는 too예요." },
      { type: "choose", q: "How many people are there in your ___?", ko: "너희 가족은 몇 명이야?", choices: ["family", "friend", "house"], answer: 0, hint: "가족은 family예요." },
      { type: "choose", q: "There ___ five people in my family.", ko: "우리 가족은 다섯 명이야.", choices: ["is", "are", "am"], answer: 1, hint: "여러 명이니까 There are예요." },
      { type: "order", words: ["This", "is", "my", "grandma."], ko: "이쪽은 우리 할머니야." },
      { type: "order", words: ["My", "brother", "likes", "soccer."], ko: "우리 형은 축구를 좋아해." },
    ],
  },
  {
    id: "talk-weather",
    group: "hello",
    emoji: "🌦️",
    title: "날씨 묻고 답하기",
    subtitle: "How's the weather?",
    slides: [
      {
        emoji: "☀️",
        say: "날씨는 <b>How's the weather?</b>나 <b>What's the weather like?</b>로 물어요. 대답은 <b>It's ~</b>예요.",
        pattern: "How's the weather? — It's sunny.",
        examples: [
          { en: "How's the weather today?", ko: "오늘 날씨 어때?", emoji: "🧒" },
          { en: "It's sunny and warm.", ko: "맑고 따뜻해.", emoji: "☀️" },
        ],
      },
      {
        emoji: "🌧️",
        say: "날씨 낱말: <b>sunny</b>(맑은), <b>cloudy</b>(흐린), <b>rainy</b>(비 오는), <b>snowy</b>(눈 오는), <b>windy</b>(바람 부는), <b>hot · cold · warm · cool</b>",
        pattern: "It's cloudy. · It's raining. · It's snowing.",
        examples: [
          { en: "It's cloudy and windy.", ko: "흐리고 바람이 불어.", emoji: "🌬️" },
          { en: "It's raining outside.", ko: "밖에 비가 오고 있어.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "☂️",
        say: "날씨에 맞게 한마디 덧붙여 보세요. <b>Take your umbrella.</b>(우산 챙겨), <b>Wear your coat.</b>(코트 입어)",
        pattern: "Take your umbrella. · Wear your coat.",
        examples: [
          { en: "It's going to rain this afternoon.", ko: "오늘 오후에 비가 올 거래.", emoji: "👩" },
          { en: "Okay, I'll take my umbrella.", ko: "알았어요, 우산 가져갈게요.", emoji: "🧒" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>How's the weather?</b> — <b>It's sunny / cloudy / rainy / snowy / windy.</b>",
        pattern: "How's the weather? — It's ___.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "How's the ___ today?", ko: "오늘 날씨 어때?", choices: ["weather", "time", "day"], answer: 0, hint: "날씨는 weather예요." },
      { type: "choose", q: "It's ___. Let's go swimming!", ko: "더워. 수영하러 가자!", choices: ["hot", "cold", "snowy"], answer: 0, hint: "수영하러 가기 좋은 날씨는 hot이에요." },
      { type: "choose", q: "It's ___. Take your umbrella.", ko: "비가 와. 우산 챙겨.", choices: ["sunny", "rainy", "windy"], answer: 1, hint: "우산이 필요한 날씨는 rainy예요." },
      { type: "choose", q: "What's the weather ___ in Seoul?", ko: "서울 날씨는 어때?", choices: ["like", "likes", "how"], answer: 0, hint: "What's the weather like?로 물어요." },
      { type: "order", words: ["It's", "cold", "and", "snowy."], ko: "춥고 눈이 와." },
      { type: "order", words: ["Wear", "your", "coat."], ko: "코트 입어." },
    ],
  },
  {
    id: "talk-time",
    group: "hello",
    emoji: "⏰",
    title: "시간과 날짜 묻기",
    subtitle: "What time is it?",
    slides: [
      {
        emoji: "🕒",
        say: "몇 시인지는 <b>What time is it?</b>으로 묻고, <b>It's + 시 + 분</b>으로 대답해요. 정각은 <b>o'clock</b>이에요.",
        pattern: "What time is it? — It's three o'clock.",
        examples: [
          { en: "What time is it?", ko: "몇 시야?", emoji: "🧒" },
          { en: "It's three thirty.", ko: "3시 30분이야.", emoji: "🕞" },
        ],
      },
      {
        emoji: "📅",
        say: "무슨 요일인지는 <b>What day is it today?</b>, 날짜는 <b>What's the date today?</b>예요.",
        pattern: "What day is it? — It's Monday.",
        examples: [
          { en: "What day is it today?", ko: "오늘 무슨 요일이야?", emoji: "👧" },
          { en: "It's Friday.", ko: "금요일이야.", emoji: "🎉" },
          { en: "What's the date today? — It's May 5th.", ko: "오늘 며칠이야? — 5월 5일이야.", emoji: "📆" },
        ],
      },
      {
        emoji: "⏳",
        say: "'~할 시간이야'는 <b>It's time for + 이름</b>이나 <b>It's time to + 동작</b>이에요.",
        pattern: "It's time for lunch. · It's time to go.",
        examples: [
          { en: "It's time for bed.", ko: "잘 시간이야.", emoji: "🛏️" },
          { en: "It's time to go to school.", ko: "학교 갈 시간이야.", emoji: "🎒" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 시간 <b>What time is it?</b>, 요일 <b>What day is it?</b>, '~할 시간' <b>It's time for/to ~</b>",
        pattern: "What time is it? · What day is it? · It's time to ~.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "What ___ is it? — It's seven o'clock.", ko: "몇 시야? / 7시야.", choices: ["time", "day", "date"], answer: 0, hint: "시각은 What time이에요." },
      { type: "choose", q: "What ___ is it today? — It's Sunday.", ko: "오늘 무슨 요일이야? / 일요일이야.", choices: ["time", "day", "weather"], answer: 1, hint: "요일은 What day예요." },
      { type: "choose", q: "It's time ___ lunch.", ko: "점심 먹을 시간이야.", choices: ["for", "to", "at"], answer: 0, hint: "이름(lunch) 앞에는 for예요." },
      { type: "choose", q: "It's time ___ get up!", ko: "일어날 시간이야!", choices: ["for", "to", "on"], answer: 1, hint: "동작(get up) 앞에는 to예요." },
      { type: "order", words: ["It's", "two", "o'clock."], ko: "2시 정각이야." },
      { type: "order", words: ["It's", "time", "for", "bed."], ko: "잘 시간이야." },
    ],
  },

  // ── 🏫 학교와 생활 ──
  {
    id: "talk-weekend",
    group: "daily",
    emoji: "🎡",
    title: "주말에 한 일 말하기",
    subtitle: "What did you do last weekend?",
    slides: [
      {
        emoji: "❓",
        say: "지난 일은 <b>What did you do ~?</b>로 묻고, 대답은 동작의 <b>지난 모양</b>으로 해요.",
        pattern: "What did you do last weekend? — I went to ~.",
        examples: [
          { en: "What did you do last weekend?", ko: "지난 주말에 뭐 했어?", emoji: "🧒" },
          { en: "I went to the zoo with my family.", ko: "가족이랑 동물원에 갔어.", emoji: "🦁" },
        ],
      },
      {
        emoji: "😄",
        say: "어땠는지는 <b>How was it?</b>으로 묻고, <b>It was fun / great / boring.</b>으로 대답해요.",
        pattern: "How was it? — It was great!",
        examples: [
          { en: "How was it?", ko: "어땠어?", emoji: "🧒" },
          { en: "It was great! I saw a baby panda.", ko: "최고였어! 아기 판다를 봤어.", emoji: "🐼" },
        ],
      },
      {
        emoji: "🔜",
        say: "앞으로의 계획은 <b>What are you going to do this weekend?</b>로 물어요.",
        pattern: "I'm going to + 동작",
        examples: [
          { en: "What are you going to do this weekend?", ko: "이번 주말에 뭐 할 거야?", emoji: "👧" },
          { en: "I'm going to visit my grandma.", ko: "할머니 댁에 갈 거야.", emoji: "👵" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 지난 일 <b>What did you do?</b> → <b>I went / played / saw ~</b>, 느낌 <b>How was it?</b> → <b>It was fun.</b>",
        pattern: "What did you do? · How was it? · It was fun.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "What ___ you do yesterday?", ko: "어제 뭐 했어?", choices: ["did", "do", "are"], answer: 0, hint: "지난 일을 물을 때는 did예요." },
      { type: "choose", q: "I ___ soccer with my friends.", ko: "친구들이랑 축구를 했어.", choices: ["play", "played", "playing"], answer: 1, hint: "지난 일이라 played예요." },
      { type: "choose", q: "How ___ it? — It was fun.", ko: "어땠어? / 재미있었어.", choices: ["was", "is", "did"], answer: 0, hint: "지난 일의 느낌은 How was it?이에요." },
      { type: "choose", q: "What are you going to do ___ weekend?", ko: "이번 주말에 뭐 할 거야?", choices: ["this", "last", "ago"], answer: 0, hint: "앞으로의 주말은 this weekend예요." },
      { type: "order", words: ["I", "went", "to", "the", "beach."], ko: "나는 바닷가에 갔어." },
      { type: "order", words: ["It", "was", "really", "fun."], ko: "정말 재미있었어." },
    ],
  },
  {
    id: "talk-may-i",
    group: "daily",
    emoji: "🙋",
    title: "허락 구하기",
    subtitle: "May I ~? Can I ~?",
    slides: [
      {
        emoji: "🙋",
        say: "'~해도 돼요?'는 <b>Can I ~?</b>예요. 선생님이나 어른께는 더 공손한 <b>May I ~?</b>를 써요.",
        pattern: "Can I ~? · May I ~?",
        examples: [
          { en: "May I go to the bathroom?", ko: "화장실에 가도 될까요?", emoji: "🚻" },
          { en: "Can I use your eraser?", ko: "네 지우개 써도 돼?", emoji: "✏️" },
        ],
      },
      {
        emoji: "👍",
        say: "허락할 때는 <b>Sure.</b>, <b>Of course.</b>, <b>Go ahead.</b>(그렇게 해)라고 해요.",
        pattern: "Sure. · Of course. · Go ahead.",
        examples: [
          { en: "Can I open the window?", ko: "창문 열어도 돼?", emoji: "🪟" },
          { en: "Sure, go ahead.", ko: "그럼, 열어.", emoji: "👍" },
        ],
      },
      {
        emoji: "🙅",
        say: "안 될 때는 <b>Sorry, you can't.</b>라고 하고 이유를 덧붙이면 좋아요.",
        pattern: "Sorry, you can't. ~",
        examples: [
          { en: "Can I play games now?", ko: "지금 게임해도 돼요?", emoji: "🎮" },
          { en: "Sorry, you can't. Do your homework first.", ko: "미안하지만 안 돼. 숙제 먼저 하렴.", emoji: "👩" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 묻기 <b>Can I ~? / May I ~?</b>, 허락 <b>Sure.</b>, 거절 <b>Sorry, you can't.</b>",
        pattern: "May I ~? — Sure. / Sorry, you can't.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ I come in?", ko: "들어가도 될까요?", choices: ["May", "Do", "Am"], answer: 0, hint: "공손하게 허락을 구할 때는 May I ~?예요." },
      { type: "choose", q: "Can I borrow your pen? — ___", ko: "펜 빌려도 돼? / 그럼.", choices: ["Sure.", "You're welcome.", "Me too."], answer: 0, hint: "허락할 때는 Sure.예요." },
      { type: "choose", q: "Can I watch TV? — Sorry, you ___.", ko: "TV 봐도 돼요? / 미안하지만 안 돼.", choices: ["can", "can't", "may"], answer: 1, hint: "거절은 Sorry, you can't.예요." },
      { type: "choose", q: "Can I ___ your phone?", ko: "네 휴대폰 써도 돼?", choices: ["use", "uses", "using"], answer: 0, hint: "Can I 뒤에는 동작 원래 모양이에요." },
      { type: "order", words: ["May", "I", "ask", "a", "question?"], ko: "질문 하나 해도 될까요?" },
      { type: "order", words: ["Sure,", "go", "ahead."], ko: "그럼, 그렇게 해." },
    ],
  },

  // ── 🛍️ 밖에서 ──
  {
    id: "talk-help",
    group: "out",
    emoji: "🤝",
    title: "도움 주고받기",
    subtitle: "Can you help me? Let me help you.",
    slides: [
      {
        emoji: "🆘",
        say: "도움이 필요할 때는 <b>Can you help me?</b>나 <b>Could you ~?</b>(~해 주실 수 있어요?)라고 해요.",
        pattern: "Can you help me? · Could you ~?",
        examples: [
          { en: "Can you help me with this box?", ko: "이 상자 좀 도와줄래?", emoji: "📦" },
          { en: "Could you open the door for me?", ko: "문 좀 열어 주실 수 있어요?", emoji: "🚪" },
        ],
      },
      {
        emoji: "🙌",
        say: "먼저 도와주겠다고 할 때는 <b>Let me help you.</b>나 <b>Do you need help?</b>라고 해요.",
        pattern: "Let me help you. · Do you need help?",
        examples: [
          { en: "Your bag looks heavy. Let me help you.", ko: "가방이 무거워 보여. 내가 도와줄게.", emoji: "🎒" },
          { en: "Thanks. That's very kind of you.", ko: "고마워. 정말 친절하구나.", emoji: "😊" },
        ],
      },
      {
        emoji: "🙏",
        say: "괜찮을 때는 <b>No, thanks. I'm okay.</b>라고 해요. 도움을 받은 뒤에는 꼭 <b>Thank you for your help.</b>라고 말해요.",
        pattern: "No, thanks. · Thank you for your help.",
        examples: [
          { en: "Do you need help?", ko: "도움이 필요하니?", emoji: "🧑" },
          { en: "No, thanks. I'm okay.", ko: "아니요, 괜찮아요.", emoji: "🧒" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 부탁 <b>Can you help me?</b>, 도와주기 <b>Let me help you.</b>, 고마움 <b>Thank you for your help.</b>",
        pattern: "Can you help me? · Let me help you.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Can you ___ me?", ko: "나 좀 도와줄래?", choices: ["help", "helps", "helping"], answer: 0, hint: "Can you 뒤에는 동작 원래 모양이에요." },
      { type: "choose", q: "___ me help you.", ko: "내가 도와줄게.", choices: ["Let", "Can", "Do"], answer: 0, hint: "도와주겠다고 할 때는 Let me help you.예요." },
      { type: "choose", q: "Thank you ___ your help.", ko: "도와줘서 고마워.", choices: ["for", "to", "with"], answer: 0, hint: "Thank you for ~ 는 '~해 줘서 고마워'예요." },
      { type: "choose", q: "Do you need help? — No, ___. I'm okay.", ko: "도움 필요해? / 아니, 괜찮아.", choices: ["thanks", "please", "sorry"], answer: 0, hint: "거절할 때는 No, thanks.예요." },
      { type: "order", words: ["Could", "you", "close", "the", "window?"], ko: "창문 좀 닫아 주실 수 있어요?" },
      { type: "order", words: ["That's", "very", "kind", "of", "you."], ko: "정말 친절하시네요." },
    ],
  },
  {
    id: "talk-call",
    group: "out",
    emoji: "📞",
    title: "전화하기",
    subtitle: "Hello? May I speak to ~?",
    slides: [
      {
        emoji: "☎️",
        say: "전화를 받을 때도 <b>Hello?</b>예요. 걸 때는 <b>This is ~</b>(저는 ~예요)로 나를 밝혀요.",
        pattern: "Hello? This is ___.",
        examples: [
          { en: "Hello?", ko: "여보세요?", emoji: "👩" },
          { en: "Hello. This is Minho.", ko: "안녕하세요. 저는 민호예요.", emoji: "🧒" },
        ],
      },
      {
        emoji: "🙋",
        say: "누구를 바꿔 달라고 할 때는 <b>May I speak to ~?</b>예요. 받는 사람은 <b>Hold on, please.</b>(잠깐 기다려)라고 해요.",
        pattern: "May I speak to ___? — Hold on, please.",
        examples: [
          { en: "May I speak to Jisu?", ko: "지수랑 통화할 수 있을까요?", emoji: "🧒" },
          { en: "Hold on, please.", ko: "잠깐만 기다리렴.", emoji: "👩" },
        ],
      },
      {
        emoji: "📝",
        say: "그 사람이 없으면 <b>She's not here right now.</b>, 메모를 남길지는 <b>Can I take a message?</b>로 물어요.",
        pattern: "Can I take a message?",
        examples: [
          { en: "Sorry, she's not home right now.", ko: "미안하지만 지금 집에 없단다.", emoji: "👩" },
          { en: "Can you tell her to call me back?", ko: "저한테 다시 전화해 달라고 전해 주실래요?", emoji: "🧒" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>This is ~</b>, <b>May I speak to ~?</b>, <b>Hold on, please.</b>, <b>Can I take a message?</b>",
        pattern: "This is Minho. May I speak to Jisu?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Hello. ___ is Sora.", ko: "여보세요. 저는 소라예요.", choices: ["This", "I", "It"], answer: 0, hint: "전화에서 나를 밝힐 때는 This is ~예요." },
      { type: "choose", q: "May I ___ to Tom?", ko: "Tom이랑 통화할 수 있을까요?", choices: ["speak", "say", "tell"], answer: 0, hint: "May I speak to ~?예요." },
      { type: "choose", q: "Hold ___, please.", ko: "잠깐만 기다려 주세요.", choices: ["on", "in", "up"], answer: 0, hint: "Hold on은 '기다리다'예요." },
      { type: "choose", q: "Can I take a ___?", ko: "메모 남겨 드릴까요?", choices: ["message", "phone", "call"], answer: 0, hint: "take a message는 '메모를 받아 두다'예요." },
      { type: "order", words: ["May", "I", "speak", "to", "Mina?"], ko: "미나랑 통화할 수 있을까요?" },
      { type: "order", words: ["Please", "call", "me", "back."], ko: "다시 전화해 줘." },
    ],
  },
  {
    id: "talk-meet",
    group: "out",
    emoji: "🗓️",
    title: "약속 정하기",
    subtitle: "What time shall we meet?",
    slides: [
      {
        emoji: "🤔",
        say: "시간이 되는지는 <b>Are you free ~?</b>(~에 시간 있어?)로 물어요.",
        pattern: "Are you free this Saturday?",
        examples: [
          { en: "Are you free this Saturday?", ko: "이번 토요일에 시간 있어?", emoji: "🧒" },
          { en: "Yes, I am. Why?", ko: "응, 있어. 왜?", emoji: "👧" },
          { en: "Let's go to the movies.", ko: "영화 보러 가자.", emoji: "🎬" },
        ],
      },
      {
        emoji: "⏰",
        say: "언제·어디서 만날지는 <b>What time shall we meet?</b>, <b>Where shall we meet?</b>로 물어요.",
        pattern: "What time / Where shall we meet?",
        examples: [
          { en: "What time shall we meet?", ko: "몇 시에 만날까?", emoji: "👧" },
          { en: "How about two o'clock?", ko: "2시 어때?", emoji: "🧒" },
          { en: "Where shall we meet? — At the bus stop.", ko: "어디서 만날까? — 버스 정류장에서.", emoji: "🚏" },
        ],
      },
      {
        emoji: "🙅",
        say: "안 될 때는 <b>Sorry, I can't. I have ~.</b>로 이유를 말하고, <b>How about ~?</b>로 다른 때를 제안해요.",
        pattern: "Sorry, I can't. How about ~?",
        examples: [
          { en: "Sorry, I can't. I have a piano lesson.", ko: "미안, 안 돼. 피아노 수업이 있어.", emoji: "🎹" },
          { en: "How about Sunday?", ko: "일요일은 어때?", emoji: "📅" },
          { en: "Sounds good. See you then!", ko: "좋아. 그때 보자!", emoji: "👋" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>Are you free?</b> → <b>What time shall we meet?</b> → <b>How about ~?</b> → <b>See you then!</b>",
        pattern: "Are you free? · What time shall we meet? · See you then!",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Are you ___ tomorrow?", ko: "내일 시간 있어?", choices: ["free", "busy", "fine"], answer: 0, hint: "'시간 있는'은 free예요." },
      { type: "choose", q: "What time ___ we meet?", ko: "몇 시에 만날까?", choices: ["shall", "do", "are"], answer: 0, hint: "What time shall we meet?" },
      { type: "choose", q: "___ about three o'clock?", ko: "3시 어때?", choices: ["How", "What", "Where"], answer: 0, hint: "제안할 때는 How about ~?예요." },
      { type: "choose", q: "Sorry, I ___. I have a dentist appointment.", ko: "미안, 안 돼. 치과 예약이 있어.", choices: ["can't", "can", "do"], answer: 0, hint: "거절은 Sorry, I can't.예요." },
      { type: "order", words: ["Where", "shall", "we", "meet?"], ko: "어디서 만날까?" },
      { type: "order", words: ["See", "you", "then!"], ko: "그때 보자!" },
    ],
  }
);

// 그룹 순서대로 정렬 (같은 그룹 안에서는 원래 순서 유지)
{
  const order = TALK_GROUPS.map((g) => g.id);
  const sorted = [...TALK_TOPICS].sort((a, b) => order.indexOf(a.group) - order.indexOf(b.group));
  TALK_TOPICS.splice(0, TALK_TOPICS.length, ...sorted);
}
