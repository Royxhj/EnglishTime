// 추가 중학교 · 고등학교 대화 표현. talkExtra.js 뒤에 불러와 TALK_TOPICS에 붙이고, 그룹 순서대로 정렬한다.
TALK_TOPICS.push(
  // ── 🎓 중학교 의사소통 ──
  {
    id: "talk-mid-experience",
    group: "middle",
    emoji: "🧳",
    title: "경험 묻고 답하기",
    subtitle: "Have you ever ~?",
    slides: [
      {
        emoji: "❓",
        say: "해 본 적이 있는지 물을 때는 <b>Have you ever + 과거분사 ~?</b>(~해 본 적 있니?)라고 해요.",
        pattern: "Have you ever ___ ?",
        examples: [
          { en: "Have you ever been to Jeju Island?", ko: "제주도에 가 본 적 있니?", emoji: "🏝️" },
          { en: "Have you ever eaten Thai food?", ko: "태국 음식 먹어 본 적 있어?", emoji: "🍜" },
        ],
      },
      {
        emoji: "🙋",
        say: "있으면 <b>Yes, I have.</b>, 없으면 <b>No, I haven't.</b>예요. 한 번도 없으면 <b>I've never ~</b>라고 말해요.",
        pattern: "Yes, I have. / No, I've never ___.",
        examples: [
          { en: "Yes, I have. I went there last summer.", ko: "응, 있어. 작년 여름에 갔었어.", emoji: "☀️" },
          { en: "No, I've never tried it.", ko: "아니, 한 번도 먹어 본 적 없어.", emoji: "🙅" },
        ],
      },
      {
        emoji: "💬",
        say: "경험을 들으면 <b>How was it?</b>(어땠어?)로 더 물어보세요. 대답은 <b>It was ~</b>예요.",
        pattern: "How was it? — It was ___.",
        examples: [
          { en: "How was it?", ko: "어땠어?", emoji: "🧑" },
          { en: "It was amazing. The sea was so blue.", ko: "정말 멋졌어. 바다가 정말 파랬어.", emoji: "🌊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 경험 묻기는 <b>Have you ever ~?</b>, 대답은 <b>Yes, I have. / No, I've never ~.</b>",
        pattern: "Have you ever seen snow? — No, I've never seen it.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Have you ever ___ a horse?", ko: "말 타 본 적 있니?", choices: ["ridden", "ride", "rode"], answer: 0, hint: "Have you ever 뒤에는 과거분사(ridden)가 와요." },
      { type: "choose", q: "Have you ever been to Busan? — Yes, I ___.", ko: "부산에 가 본 적 있어? / 응, 있어.", choices: ["have", "do", "am"], answer: 0, hint: "Have로 물으면 have로 대답해요." },
      { type: "choose", q: "I've ___ seen a whale.", ko: "나는 고래를 한 번도 본 적이 없어.", choices: ["never", "ever", "already"], answer: 0, hint: "'한 번도 ~않다'는 never예요." },
      { type: "choose", q: "___ was it? — It was fun.", ko: "어땠어? / 재미있었어.", choices: ["How", "What", "Who"], answer: 0, hint: "'어땠어?'는 How was it?이에요." },
      { type: "order", words: ["Have", "you", "ever", "made", "kimchi?"], ko: "김치를 담가 본 적 있니?" },
      { type: "order", words: ["I've", "never", "been", "abroad."], ko: "나는 외국에 한 번도 가 본 적 없어." },
    ],
  },
  {
    id: "talk-mid-interest",
    group: "middle",
    emoji: "🎯",
    title: "관심 표현하기",
    subtitle: "I'm interested in ~",
    slides: [
      {
        emoji: "🔭",
        say: "무엇에 관심이 있는지 말할 때는 <b>I'm interested in ~</b>이라고 해요. 뒤에 동사가 오면 <b>-ing</b>를 붙여요.",
        pattern: "I'm interested in ___.",
        examples: [
          { en: "I'm interested in space.", ko: "나는 우주에 관심이 있어.", emoji: "🚀" },
          { en: "I'm interested in making videos.", ko: "나는 영상 만드는 데 관심이 있어.", emoji: "🎬" },
        ],
      },
      {
        emoji: "❓",
        say: "상대의 관심사는 <b>What are you interested in?</b>으로 물어요. <b>Are you interested in ~?</b>로 콕 집어 물을 수도 있어요.",
        pattern: "What are you interested in?",
        examples: [
          { en: "What are you interested in?", ko: "너는 무엇에 관심이 있니?", emoji: "🧑" },
          { en: "Are you interested in cooking?", ko: "요리에 관심 있어?", emoji: "🍳" },
        ],
      },
      {
        emoji: "💡",
        say: "비슷한 표현으로 <b>I'm into ~</b>(~에 빠져 있어), <b>I'm curious about ~</b>(~이 궁금해)도 있어요.",
        pattern: "I'm into ___. / I'm curious about ___.",
        examples: [
          { en: "I'm into K-pop these days.", ko: "요즘 K팝에 빠져 있어.", emoji: "🎤" },
          { en: "I'm curious about dinosaurs.", ko: "나는 공룡이 궁금해.", emoji: "🦖" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 관심 말하기는 <b>I'm interested in ~</b>, 묻기는 <b>What are you interested in?</b>",
        pattern: "I'm interested in drawing. · I'm into soccer.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm interested ___ history.", ko: "나는 역사에 관심이 있어.", choices: ["in", "on", "at"], answer: 0, hint: "be interested in이에요." },
      { type: "choose", q: "I'm interested in ___ songs.", ko: "나는 노래 만드는 데 관심이 있어.", choices: ["writing", "write", "wrote"], answer: 0, hint: "전치사 in 뒤에는 -ing가 와요." },
      { type: "choose", q: "What are you interested ___?", ko: "너는 무엇에 관심이 있니?", choices: ["in", "for", "to"], answer: 0, hint: "의문문 끝에도 in이 남아요." },
      { type: "choose", q: "I'm curious ___ the ocean.", ko: "나는 바다가 궁금해.", choices: ["about", "in", "with"], answer: 0, hint: "be curious about이에요." },
      { type: "order", words: ["Are", "you", "interested", "in", "music?"], ko: "음악에 관심 있니?" },
      { type: "order", words: ["I'm", "into", "board", "games", "these", "days."], ko: "요즘 보드게임에 빠져 있어." },
    ],
  },
  {
    id: "talk-mid-reason",
    group: "middle",
    emoji: "🧐",
    title: "이유 묻고 답하기",
    subtitle: "Why ~? — Because ~",
    slides: [
      {
        emoji: "❓",
        say: "이유를 물을 때는 <b>Why ~?</b>라고 해요. 대답은 <b>Because + 문장</b>이에요.",
        pattern: "Why ___? — Because ___.",
        examples: [
          { en: "Why are you late?", ko: "왜 늦었어?", emoji: "⏰" },
          { en: "Because I missed the bus.", ko: "버스를 놓쳤기 때문이야.", emoji: "🚌" },
        ],
      },
      {
        emoji: "🤔",
        say: "좀 더 부드럽게는 <b>What's the reason?</b>이나 <b>How come ~?</b>(어째서 ~?)도 써요. How come 뒤에는 <b>평서문 순서</b>가 와요.",
        pattern: "How come you ___?",
        examples: [
          { en: "How come you look so happy?", ko: "어째서 그렇게 기분이 좋아 보여?", emoji: "😄" },
          { en: "I got a good grade on my test.", ko: "시험에서 좋은 점수를 받았거든.", emoji: "💯" },
        ],
      },
      {
        emoji: "🔗",
        say: "이유를 말하는 다른 방법: <b>because of + 명사</b>(~ 때문에), <b>That's why ~</b>(그래서 ~한 거야).",
        pattern: "because of ___ · That's why ___.",
        examples: [
          { en: "The game was canceled because of the snow.", ko: "눈 때문에 경기가 취소됐어.", emoji: "❄️" },
          { en: "I stayed up late. That's why I'm tired.", ko: "늦게까지 안 잤어. 그래서 피곤한 거야.", emoji: "😪" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 이유 묻기는 <b>Why ~? / How come ~?</b>, 대답은 <b>Because ~ / because of ~ / That's why ~</b>",
        pattern: "Why do you like it? — Because it's fun.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ do you want to be a vet? — Because I love animals.", ko: "왜 수의사가 되고 싶니? / 동물을 좋아하기 때문이야.", choices: ["Why", "What", "Where"], answer: 0, hint: "이유를 물을 때는 Why예요." },
      { type: "choose", q: "I'm happy ___ it's Friday.", ko: "금요일이라서 기뻐.", choices: ["because", "because of", "so"], answer: 0, hint: "뒤에 문장(it's Friday)이 오면 because예요." },
      { type: "choose", q: "We stayed inside ___ the rain.", ko: "비 때문에 우리는 안에 있었어.", choices: ["because of", "because", "why"], answer: 0, hint: "뒤에 명사(the rain)가 오면 because of예요." },
      { type: "choose", q: "How come you ___ so early?", ko: "어째서 이렇게 일찍 왔어?", choices: ["came", "did come", "do came"], answer: 0, hint: "How come 뒤에는 평서문 순서예요." },
      { type: "order", words: ["Why", "are", "you", "so", "sad?"], ko: "왜 그렇게 슬퍼?" },
      { type: "order", words: ["That's", "why", "I", "was", "late."], ko: "그래서 내가 늦었던 거야." },
    ],
  },
  {
    id: "talk-mid-howto",
    group: "middle",
    emoji: "🛠️",
    title: "방법 묻고 설명하기",
    subtitle: "Can you tell me how to ~?",
    slides: [
      {
        emoji: "❓",
        say: "방법을 물을 때는 <b>Can you tell me how to ~?</b>(~하는 법 좀 알려 줄래?)나 <b>Do you know how to ~?</b>라고 해요.",
        pattern: "Can you tell me how to ___?",
        examples: [
          { en: "Can you tell me how to make ramyeon?", ko: "라면 끓이는 법 좀 알려 줄래?", emoji: "🍜" },
          { en: "Do you know how to use this machine?", ko: "이 기계 쓰는 법 알아?", emoji: "🖨️" },
        ],
      },
      {
        emoji: "1️⃣",
        say: "순서대로 설명할 때는 <b>First</b>(먼저), <b>Then / Next</b>(그다음에), <b>Finally</b>(마지막으로)를 써요.",
        pattern: "First, ___. Then, ___. Finally, ___.",
        examples: [
          { en: "First, boil the water.", ko: "먼저, 물을 끓여.", emoji: "♨️" },
          { en: "Then, put in the noodles.", ko: "그다음에, 면을 넣어.", emoji: "🍜" },
          { en: "Finally, add an egg.", ko: "마지막으로, 달걀을 넣어.", emoji: "🥚" },
        ],
      },
      {
        emoji: "👍",
        say: "설명을 들으면 <b>I see.</b>(알겠어), <b>That sounds easy.</b>(쉽네)로 반응해요. 놓친 부분은 <b>What's next?</b>로 물어요.",
        pattern: "I see. What's next?",
        examples: [
          { en: "I see. What's next?", ko: "알겠어. 그다음은?", emoji: "🧑" },
          { en: "Thanks. That sounds easy.", ko: "고마워. 쉽네.", emoji: "😊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 방법 묻기는 <b>Can you tell me how to ~?</b>, 설명은 <b>First → Then → Finally</b>",
        pattern: "How do I plant a seed? — First, dig a hole. Then, ...",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Can you tell me how ___ fold a paper crane?", ko: "종이학 접는 법 좀 알려 줄래?", choices: ["to", "for", "do"], answer: 0, hint: "how to + 동사원형이에요." },
      { type: "choose", q: "___, wash the rice.", ko: "먼저, 쌀을 씻어.", choices: ["First", "Finally", "Last"], answer: 0, hint: "맨 처음 순서는 First예요." },
      { type: "choose", q: "___, put the rice in the cooker.", ko: "그다음에, 쌀을 밥솥에 넣어.", choices: ["Then", "First", "Before"], answer: 0, hint: "'그다음에'는 Then이에요." },
      { type: "choose", q: "I see. What's ___?", ko: "알겠어. 그다음은 뭐야?", choices: ["next", "last", "first"], answer: 0, hint: "'다음은?'은 What's next?예요." },
      { type: "order", words: ["Do", "you", "know", "how", "to", "swim?"], ko: "수영하는 법 알아?" },
      { type: "order", words: ["Finally,", "turn", "off", "the", "stove."], ko: "마지막으로, 불을 꺼." },
    ],
  },

  // ── 🏫 고등학교 의사소통 ──
  {
    id: "talk-high-if",
    group: "high",
    emoji: "🌈",
    title: "가정해서 말하기",
    subtitle: "If I were you, I'd ~",
    slides: [
      {
        emoji: "🤔",
        say: "지금 사실과 다른 일을 상상할 때는 <b>If + 과거형, would + 동사원형</b>을 써요. be동사는 주어와 상관없이 <b>were</b>가 자연스러워요.",
        pattern: "If I ___ (과거), I would ___.",
        examples: [
          { en: "If I had wings, I would fly to the moon.", ko: "날개가 있다면 달까지 날아갈 텐데.", emoji: "🪽" },
          { en: "If I were rich, I would travel around the world.", ko: "내가 부자라면 세계 여행을 할 텐데.", emoji: "🌍" },
        ],
      },
      {
        emoji: "💡",
        say: "충고할 때 많이 쓰는 표현: <b>If I were you, I'd ~</b>(내가 너라면 ~할 거야).",
        pattern: "If I were you, I'd ___.",
        examples: [
          { en: "If I were you, I'd apologize first.", ko: "내가 너라면 먼저 사과할 거야.", emoji: "🙏" },
          { en: "If I were you, I wouldn't skip breakfast.", ko: "내가 너라면 아침을 거르지 않을 거야.", emoji: "🍳" },
        ],
      },
      {
        emoji: "❓",
        say: "상대의 생각을 물을 때는 <b>What would you do if ~?</b>(만약 ~라면 넌 어떻게 할 거야?)라고 해요.",
        pattern: "What would you do if ___?",
        examples: [
          { en: "What would you do if you won the lottery?", ko: "복권에 당첨되면 뭐 할 거야?", emoji: "🎟️" },
          { en: "I would buy a house for my parents.", ko: "부모님께 집을 사 드릴 거야.", emoji: "🏡" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 상상은 <b>If + 과거, would + 동사원형</b>, 충고는 <b>If I were you, I'd ~</b>",
        pattern: "If I were you, I'd take a rest.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "If I ___ you, I'd tell the truth.", ko: "내가 너라면 사실대로 말할 거야.", choices: ["were", "am", "be"], answer: 0, hint: "가정법에서는 If I were you예요." },
      { type: "choose", q: "If I had more time, I ___ learn the guitar.", ko: "시간이 더 있다면 기타를 배울 텐데.", choices: ["would", "will", "am"], answer: 0, hint: "If + 과거형이면 뒤에는 would예요." },
      { type: "choose", q: "What would you do if you ___ invisible?", ko: "투명 인간이 된다면 뭐 할 거야?", choices: ["were", "are", "will be"], answer: 0, hint: "현재 사실과 반대니까 were예요." },
      { type: "choose", q: "If I knew her number, I ___ call her.", ko: "그녀 번호를 안다면 전화할 텐데.", choices: ["would", "will", "can"], answer: 0, hint: "If + 과거형(knew) → would예요." },
      { type: "order", words: ["If", "I", "were", "you,", "I'd", "see", "a", "doctor."], ko: "내가 너라면 병원에 가 볼 거야." },
      { type: "order", words: ["What", "would", "you", "do", "if", "you", "were", "me?"], ko: "네가 나라면 어떻게 하겠어?" },
    ],
  },
  {
    id: "talk-high-argue",
    group: "high",
    emoji: "📣",
    title: "근거 들어 주장하기",
    subtitle: "The main reason is ~",
    slides: [
      {
        emoji: "🗣️",
        say: "주장을 밝힐 때는 <b>I strongly believe that ~</b>(~라고 굳게 믿어), <b>I'm convinced that ~</b>(~라고 확신해)으로 시작해요.",
        pattern: "I strongly believe that ___.",
        examples: [
          { en: "I strongly believe that school should start later.", ko: "학교는 더 늦게 시작해야 한다고 굳게 믿어.", emoji: "🏫" },
          { en: "I'm convinced that reading makes us smarter.", ko: "독서가 우리를 더 똑똑하게 만든다고 확신해.", emoji: "📚" },
        ],
      },
      {
        emoji: "🧱",
        say: "근거를 댈 때는 <b>The main reason is that ~</b>, 덧붙일 때는 <b>Another reason is ~</b>, 예를 들 때는 <b>For instance, ~</b>",
        pattern: "The main reason is that ___. For instance, ___.",
        examples: [
          { en: "The main reason is that teenagers need more sleep.", ko: "가장 큰 이유는 십 대에게 잠이 더 필요하다는 거야.", emoji: "😴" },
          { en: "For instance, many students fall asleep in class.", ko: "예를 들어, 많은 학생이 수업 중에 졸아.", emoji: "💤" },
        ],
      },
      {
        emoji: "⚖️",
        say: "반대 의견을 인정하면서 받아칠 때는 <b>Some people say ~, but ~</b>나 <b>That may be true, but ~</b>를 써요.",
        pattern: "That may be true, but ___.",
        examples: [
          { en: "Some people say it's too expensive, but it saves money later.", ko: "너무 비싸다는 사람도 있지만, 나중에 돈을 아껴 줘.", emoji: "💰" },
          { en: "That may be true, but safety comes first.", ko: "그럴 수도 있지만, 안전이 먼저야.", emoji: "🦺" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>주장</b>(I strongly believe) → <b>근거</b>(The main reason is) → <b>예시</b>(For instance) → <b>반론 대응</b>(That may be true, but)",
        pattern: "I believe ~. The main reason is ~. For instance, ~.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I strongly ___ that we should save energy.", ko: "우리가 에너지를 아껴야 한다고 굳게 믿어.", choices: ["believe", "believing", "belief"], answer: 0, hint: "I strongly believe that ~이에요." },
      { type: "choose", q: "The main ___ is that it's good for our health.", ko: "가장 큰 이유는 그것이 건강에 좋다는 거야.", choices: ["reason", "because", "why"], answer: 0, hint: "The main reason is that ~이에요." },
      { type: "choose", q: "For ___, walking to school is good exercise.", ko: "예를 들어, 걸어서 등교하는 건 좋은 운동이야.", choices: ["instance", "example of", "sure"], answer: 0, hint: "'예를 들어'는 For instance예요." },
      { type: "choose", q: "That may be true, ___ it's not fair.", ko: "그럴 수도 있지만, 공평하지 않아.", choices: ["but", "so", "and"], answer: 0, hint: "반대 내용을 이을 때는 but이에요." },
      { type: "order", words: ["Another", "reason", "is", "that", "it's", "cheap."], ko: "또 다른 이유는 그것이 싸다는 거야." },
      { type: "order", words: ["I'm", "convinced", "that", "we", "can", "win."], ko: "나는 우리가 이길 수 있다고 확신해." },
    ],
  },
  {
    id: "talk-high-likely",
    group: "high",
    emoji: "🎲",
    title: "가능성 말하기",
    subtitle: "It's likely that ~",
    slides: [
      {
        emoji: "📈",
        say: "일어날 가능성이 높을 때는 <b>It's likely that ~</b>이나 <b>주어 + be likely to + 동사원형</b>을 써요.",
        pattern: "It's likely that ___. / ___ is likely to ___.",
        examples: [
          { en: "It's likely that it will snow tonight.", ko: "오늘 밤 눈이 올 것 같아.", emoji: "❄️" },
          { en: "Prices are likely to go up next year.", ko: "내년에는 물가가 오를 가능성이 커.", emoji: "💸" },
        ],
      },
      {
        emoji: "🎯",
        say: "가능성이 꽤 있으면 <b>There's a good chance (that) ~</b>, 낮으면 <b>It's unlikely that ~</b>이에요.",
        pattern: "There's a good chance ___. / It's unlikely that ___.",
        examples: [
          { en: "There's a good chance we'll win the game.", ko: "우리가 경기에서 이길 가능성이 커.", emoji: "🏆" },
          { en: "It's unlikely that he'll come on time.", ko: "그가 제시간에 올 것 같지 않아.", emoji: "⌛" },
        ],
      },
      {
        emoji: "🤷",
        say: "확실하지 않을 때는 <b>I doubt (that) ~</b>(~일지 의문이야), <b>There's no way ~</b>(~할 리가 없어)도 써요.",
        pattern: "I doubt ___. / There's no way ___.",
        examples: [
          { en: "I doubt the store is open this late.", ko: "가게가 이렇게 늦게까지 열었을지 모르겠어.", emoji: "🏪" },
          { en: "There's no way I can finish this today.", ko: "오늘 이걸 끝낼 수 있을 리가 없어.", emoji: "📚" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 높음 <b>likely · a good chance</b> → 낮음 <b>unlikely · I doubt</b> → 없음 <b>There's no way</b>",
        pattern: "It's likely to rain. · I doubt it.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "It's ___ that the train will be late.", ko: "기차가 늦을 가능성이 높아.", choices: ["likely", "like", "liking"], answer: 0, hint: "It's likely that ~이에요." },
      { type: "choose", q: "She is likely ___ pass the exam.", ko: "그녀는 시험에 붙을 것 같아.", choices: ["to", "that", "for"], answer: 0, hint: "be likely to + 동사원형이에요." },
      { type: "choose", q: "There's a good ___ that it will be sunny.", ko: "날씨가 맑을 가능성이 커.", choices: ["chance", "change", "choice"], answer: 0, hint: "There's a good chance ~예요." },
      { type: "choose", q: "It's ___ that he forgot. He never forgets.", ko: "그가 잊었을 리 없어. 그는 절대 안 잊어.", choices: ["unlikely", "likely", "sure"], answer: 0, hint: "가능성이 낮으면 unlikely예요." },
      { type: "order", words: ["I", "doubt", "he", "will", "agree."], ko: "그가 동의할지 의문이야." },
      { type: "order", words: ["There's", "no", "way", "I", "can", "eat", "all", "this."], ko: "이걸 다 먹을 수 있을 리가 없어." },
    ],
  },
  {
    id: "talk-high-sum",
    group: "high",
    emoji: "📝",
    title: "요약하고 마무리하기",
    subtitle: "To sum up ~ / In short ~",
    slides: [
      {
        emoji: "📌",
        say: "말이나 발표를 정리할 때는 <b>To sum up</b>(요약하면), <b>In short</b>(간단히 말해), <b>In conclusion</b>(결론적으로)으로 시작해요.",
        pattern: "To sum up, ___. / In short, ___.",
        examples: [
          { en: "To sum up, exercise helps both body and mind.", ko: "요약하면, 운동은 몸과 마음 모두에 도움이 돼요.", emoji: "🏃" },
          { en: "In short, we need more time.", ko: "간단히 말해, 시간이 더 필요해요.", emoji: "⏳" },
        ],
      },
      {
        emoji: "🔁",
        say: "앞에서 한 말을 다시 짚을 때는 <b>As I mentioned earlier, ~</b>(앞서 말했듯이), 가장 중요한 점은 <b>The key point is ~</b>예요.",
        pattern: "As I mentioned earlier, ___. The key point is ___.",
        examples: [
          { en: "As I mentioned earlier, the plan has two parts.", ko: "앞서 말했듯이, 계획은 두 부분으로 되어 있어요.", emoji: "📋" },
          { en: "The key point is that we must work together.", ko: "핵심은 우리가 함께 일해야 한다는 거예요.", emoji: "🤝" },
        ],
      },
      {
        emoji: "🙇",
        say: "발표 끝인사로는 <b>Thank you for listening.</b>, 질문을 받을 때는 <b>Do you have any questions?</b>라고 해요.",
        pattern: "Thank you for listening. Do you have any questions?",
        examples: [
          { en: "That's all for my presentation.", ko: "제 발표는 여기까지입니다.", emoji: "🎤" },
          { en: "Thank you for listening. Any questions?", ko: "들어 주셔서 감사합니다. 질문 있으신가요?", emoji: "🙋" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>To sum up · In short · In conclusion</b>으로 요약하고, <b>The key point is ~</b>로 핵심을 강조해요.",
        pattern: "In conclusion, ~. Thank you for listening.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "To sum ___, the project was a success.", ko: "요약하면, 그 프로젝트는 성공이었어요.", choices: ["up", "on", "down"], answer: 0, hint: "To sum up이에요." },
      { type: "choose", q: "In ___, we should start now.", ko: "간단히 말해, 우리는 지금 시작해야 해요.", choices: ["short", "shortly", "shorts"], answer: 0, hint: "'간단히 말해'는 In short예요." },
      { type: "choose", q: "As I ___ earlier, the cost is low.", ko: "앞서 말했듯이, 비용은 낮아요.", choices: ["mentioned", "mention", "mentioning"], answer: 0, hint: "이미 말한 것이니까 과거형 mentioned예요." },
      { type: "choose", q: "The key ___ is that everyone can join.", ko: "핵심은 누구나 참여할 수 있다는 거예요.", choices: ["point", "pointing", "pointed"], answer: 0, hint: "'핵심'은 The key point예요." },
      { type: "order", words: ["Thank", "you", "for", "listening."], ko: "들어 주셔서 감사합니다." },
      { type: "order", words: ["In", "conclusion,", "reading", "is", "important."], ko: "결론적으로, 독서는 중요해요." },
    ],
  }
);

// 그룹 순서대로 정렬 (같은 그룹 안에서는 원래 순서 유지)
{
  const order = TALK_GROUPS.map((g) => g.id);
  const sorted = [...TALK_TOPICS].sort((a, b) => order.indexOf(a.group) - order.indexOf(b.group));
  TALK_TOPICS.splice(0, TALK_TOPICS.length, ...sorted);
}
