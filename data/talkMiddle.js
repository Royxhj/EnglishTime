// 중학교 교과서 의사소통 기능. talk.js 뒤에 불러와 TALK_GROUPS·TALK_TOPICS에 붙인다.
TALK_GROUPS.push({ id: "middle", label: "🎓 중학교 의사소통", color: "#4361ee" });

TALK_TOPICS.push(
  {
    id: "talk-opinion",
    group: "middle",
    emoji: "💭",
    title: "의견 묻고 말하기",
    subtitle: "What do you think about ~?",
    slides: [
      {
        emoji: "💭",
        say: "상대의 생각을 물을 때는 <b>What do you think about ~?</b>(~에 대해 어떻게 생각해?)나 <b>How do you feel about ~?</b>라고 해요.",
        pattern: "What do you think about ___?",
        examples: [
          { en: "What do you think about school uniforms?", ko: "교복에 대해 어떻게 생각해?", emoji: "🧒" },
          { en: "How do you feel about online classes?", ko: "온라인 수업에 대해 어떻게 생각해?", emoji: "💻" },
        ],
      },
      {
        emoji: "🗣️",
        say: "내 생각을 말할 때는 <b>I think (that) ~</b>, <b>In my opinion, ~</b>(내 생각에는), <b>I believe ~</b>를 써요.",
        pattern: "I think ___ · In my opinion, ___",
        examples: [
          { en: "I think they are useful.", ko: "나는 그것들이 유용하다고 생각해.", emoji: "👍" },
          { en: "In my opinion, we need more PE classes.", ko: "내 생각에는 체육 수업이 더 필요해.", emoji: "🏃" },
          { en: "I believe reading is important.", ko: "나는 독서가 중요하다고 믿어.", emoji: "📚" },
        ],
      },
      {
        emoji: "🔍",
        say: "이유를 덧붙이면 더 설득력 있어요. <b>because ~</b>나 <b>That's because ~</b>, 예시는 <b>For example, ~</b>",
        pattern: "I think ___ because ___. For example, ___.",
        examples: [
          { en: "I think so because it saves time.", ko: "시간을 아껴 주니까 나는 그렇게 생각해.", emoji: "⏱️" },
          { en: "For example, we can study at home.", ko: "예를 들어, 집에서 공부할 수 있어.", emoji: "🏠" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 물을 땐 <b>What do you think about ~?</b>, 말할 땐 <b>I think ~ / In my opinion</b>, 이유는 <b>because</b>!",
        pattern: "What do you think? — I think ___ because ___.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "What do you ___ about this movie?", ko: "이 영화에 대해 어떻게 생각해?", choices: ["think", "like", "know"], answer: 0, hint: "'어떻게 생각해?'는 What do you think about ~?예요." },
      { type: "choose", q: "In my ___, the plan is good.", ko: "내 생각에는 그 계획이 좋아.", choices: ["opinion", "idea"], answer: 0, hint: "'내 생각에는'은 In my opinion이에요." },
      { type: "choose", q: "I think it's useful ___ it saves time.", ko: "시간을 아껴 주니까 유용하다고 생각해.", choices: ["because", "but"], answer: 0, hint: "이유는 because예요." },
      { type: "choose", q: "How do you ___ about the new rule?", ko: "새 규칙에 대해 어떻게 생각해?", choices: ["feel", "think of"], answer: 0, hint: "How do you feel about ~?예요." },
      { type: "order", words: ["What", "do", "you", "think", "about", "it?"], ko: "그것에 대해 어떻게 생각해?" },
      { type: "order", words: ["In", "my", "opinion,", "it's", "a", "good", "idea."], ko: "내 생각에는 좋은 생각이야." },
    ],
  },
  {
    id: "talk-agree",
    group: "middle",
    emoji: "👍",
    title: "동의하기, 반대하기",
    subtitle: "I agree. / I don't think so.",
    slides: [
      {
        emoji: "👍",
        say: "같은 생각일 때는 <b>I agree (with you).</b>, <b>You're right.</b>, <b>Me too.</b>, 아주 강하게는 <b>You can say that again.</b>(정말 그래)",
        pattern: "I agree. · You're right. · You can say that again.",
        examples: [
          { en: "I think we should recycle more.", ko: "우리가 재활용을 더 해야 한다고 생각해.", emoji: "♻️" },
          { en: "I agree with you.", ko: "네 말에 동의해.", emoji: "👍" },
          { en: "You can say that again.", ko: "정말 그래.", emoji: "💯" },
        ],
      },
      {
        emoji: "👎",
        say: "생각이 다를 때는 <b>I don't agree.</b>, <b>I disagree.</b>, 부드럽게는 <b>I don't think so.</b>나 <b>I'm not sure about that.</b>",
        pattern: "I don't agree. · I don't think so.",
        examples: [
          { en: "Homework is useless.", ko: "숙제는 쓸모없어.", emoji: "📒" },
          { en: "I don't think so. It helps us review.", ko: "나는 그렇게 생각하지 않아. 복습에 도움이 돼.", emoji: "🙅" },
        ],
      },
      {
        emoji: "🤝",
        say: "예의 바르게 반대하려면 먼저 상대 말을 인정해요. <b>That's a good point, but ~</b>(좋은 지적이지만 ~)",
        pattern: "That's a good point, but ___.",
        examples: [
          { en: "That's a good point, but it costs too much.", ko: "좋은 지적이지만 돈이 너무 많이 들어.", emoji: "💸" },
          { en: "I see what you mean, but I disagree.", ko: "무슨 말인지 알지만 나는 반대야.", emoji: "🤔" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 동의는 <b>I agree / You're right</b>, 반대는 <b>I don't agree / I don't think so</b>, 예의 있게는 <b>That's a good point, but ~</b>",
        pattern: "I agree. · I don't think so.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ with you.", ko: "네 말에 동의해.", choices: ["agree", "think"], answer: 0, hint: "'동의하다'는 agree예요." },
      { type: "choose", q: "Math is fun. — I don't think ___.", ko: "수학은 재미있어. / 나는 그렇게 생각 안 해.", choices: ["so", "it"], answer: 0, hint: "I don't think so.예요." },
      { type: "choose", q: "That's a good ___, but I disagree.", ko: "좋은 지적이지만 나는 반대야.", choices: ["point", "idea"], answer: 0, hint: "'좋은 지적'은 a good point예요." },
      { type: "choose", q: "We need more trees in our city. — You can say that ___.", ko: "우리 도시에 나무가 더 필요해. / 정말 그래.", choices: ["again", "too"], answer: 0, hint: "You can say that again.이에요." },
      { type: "order", words: ["You're", "right."], ko: "네 말이 맞아." },
      { type: "order", words: ["I", "don't", "agree", "with", "you."], ko: "나는 네 말에 동의하지 않아." },
    ],
  },
  {
    id: "talk-advice",
    group: "middle",
    emoji: "🧭",
    title: "충고 구하고 하기",
    subtitle: "What should I do?",
    slides: [
      {
        emoji: "🙋",
        say: "충고를 구할 때는 <b>What should I do?</b>(어떻게 해야 할까?)나 <b>Can you give me some advice?</b>라고 해요.",
        pattern: "What should I do? · Can you give me some advice?",
        examples: [
          { en: "I always forget new words. What should I do?", ko: "나는 새 단어를 자꾸 잊어버려. 어떻게 해야 할까?", emoji: "🤯" },
          { en: "Can you give me some advice?", ko: "조언 좀 해 줄래?", emoji: "🙏" },
        ],
      },
      {
        emoji: "💡",
        say: "충고할 때는 <b>You should ~</b>, <b>Why don't you ~?</b>(~하는 게 어때?), <b>How about -ing?</b>, 강하게는 <b>You'd better ~</b>(~하는 게 좋을 거야)",
        pattern: "You should ___ · Why don't you ___? · You'd better ___",
        examples: [
          { en: "You should review them every day.", ko: "매일 복습해야 해.", emoji: "📅" },
          { en: "Why don't you use flashcards?", ko: "플래시카드를 써 보는 게 어때?", emoji: "📇" },
          { en: "You'd better go to bed early.", ko: "일찍 자는 게 좋을 거야.", emoji: "🛌" },
        ],
      },
      {
        emoji: "🙌",
        say: "충고를 받으면 <b>That's a good idea. / Thanks for the advice. / I'll try that.</b>라고 대답해요.",
        pattern: "That's a good idea. · I'll try that.",
        examples: [
          { en: "That's a good idea. I'll try that.", ko: "좋은 생각이야. 그렇게 해 볼게.", emoji: "👍" },
          { en: "Thanks for the advice.", ko: "조언 고마워.", emoji: "🙏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 물을 땐 <b>What should I do?</b>, 충고는 <b>You should / Why don't you ~?</b>, 대답은 <b>That's a good idea.</b>",
        pattern: "What should I do? — Why don't you ___?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have a cold. What ___ I do?", ko: "감기에 걸렸어. 어떻게 해야 할까?", choices: ["should", "am"], answer: 0, hint: "What should I do?예요." },
      { type: "choose", q: "___ don't you drink some warm tea?", ko: "따뜻한 차를 마셔 보는 게 어때?", choices: ["Why", "How"], answer: 0, hint: "Why don't you ~?는 제안이에요." },
      { type: "choose", q: "You'd better ___ a doctor.", ko: "병원에 가 보는 게 좋겠어.", choices: ["see", "to see", "seeing"], answer: 0, hint: "had better 뒤에는 동사원형이에요." },
      { type: "choose", q: "Thanks for the ___.", ko: "조언 고마워.", choices: ["advice", "advise"], answer: 0, hint: "명사 '조언'은 advice예요." },
      { type: "order", words: ["Can", "you", "give", "me", "some", "advice?"], ko: "조언 좀 해 줄래?" },
      { type: "order", words: ["Why", "don't", "you", "use", "flashcards?"], ko: "플래시카드를 써 보는 게 어때?" },
    ],
  },
  {
    id: "talk-worry",
    group: "middle",
    emoji: "😟",
    title: "걱정 말하고 위로하기",
    subtitle: "I'm worried about ~",
    slides: [
      {
        emoji: "😟",
        say: "걱정을 말할 때는 <b>I'm worried about ~</b>나 <b>I'm nervous about ~</b>(~가 긴장돼)라고 해요.",
        pattern: "I'm worried about ___.",
        examples: [
          { en: "You look worried. What's wrong?", ko: "걱정 있어 보여. 무슨 일이야?", emoji: "🧒" },
          { en: "I'm worried about the math test.", ko: "수학 시험이 걱정돼.", emoji: "📝" },
          { en: "I'm nervous about my speech.", ko: "발표가 긴장돼.", emoji: "🎤" },
        ],
      },
      {
        emoji: "🤗",
        say: "위로할 때는 <b>Don't worry.</b>, <b>Cheer up!</b>, <b>I'm sure you'll do well.</b>(분명 잘할 거야), <b>Everything will be fine.</b>",
        pattern: "Don't worry. I'm sure you'll ___.",
        examples: [
          { en: "Don't worry. You studied hard.", ko: "걱정 마. 너 열심히 공부했잖아.", emoji: "📚" },
          { en: "I'm sure you'll do well.", ko: "분명 잘할 거야.", emoji: "💪" },
          { en: "Everything will be fine.", ko: "다 잘될 거야.", emoji: "🌈" },
        ],
      },
      {
        emoji: "🍀",
        say: "응원할 때는 <b>Good luck!</b>(행운을 빌어), <b>I'll keep my fingers crossed.</b>(잘되길 빌게)라고 해요.",
        pattern: "Good luck! · I'll keep my fingers crossed.",
        examples: [
          { en: "Good luck on your test!", ko: "시험 잘 봐!", emoji: "🍀" },
          { en: "I'll keep my fingers crossed for you.", ko: "너를 위해 행운을 빌게.", emoji: "🤞" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 걱정은 <b>I'm worried about ~</b>, 위로는 <b>Don't worry. I'm sure ~</b>, 응원은 <b>Good luck!</b>",
        pattern: "I'm worried about ~ — Don't worry. Good luck!",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm worried ___ the contest.", ko: "대회가 걱정돼.", choices: ["about", "for"], answer: 0, hint: "be worried about ~예요." },
      { type: "choose", q: "Don't worry. I'm ___ you'll do well.", ko: "걱정 마. 분명 잘할 거야.", choices: ["sure", "sorry"], answer: 0, hint: "'분명 ~할 거야'는 I'm sure ~예요." },
      { type: "choose", q: "Good ___ on your test!", ko: "시험 잘 봐!", choices: ["luck", "job"], answer: 0, hint: "응원은 Good luck!이에요." },
      { type: "choose", q: "You look ___. What's wrong?", ko: "걱정 있어 보여. 무슨 일이야?", choices: ["worried", "worry"], answer: 0, hint: "look 뒤에는 형용사 worried예요." },
      { type: "order", words: ["Everything", "will", "be", "fine."], ko: "다 잘될 거야." },
      { type: "order", words: ["I'm", "nervous", "about", "my", "speech."], ko: "발표가 긴장돼." },
    ],
  },
  {
    id: "talk-expect",
    group: "middle",
    emoji: "🤩",
    title: "기대 표현하기",
    subtitle: "I'm looking forward to ~",
    slides: [
      {
        emoji: "🤩",
        say: "기대될 때는 <b>I'm looking forward to ~</b>(~가 기대돼)라고 해요. 여기서 to는 전치사라서 뒤에 <b>명사나 -ing</b>가 와요!",
        pattern: "I'm looking forward to + 명사 / -ing",
        examples: [
          { en: "I'm looking forward to the trip.", ko: "여행이 기대돼.", emoji: "✈️" },
          { en: "I'm looking forward to seeing you.", ko: "너를 만나는 게 기대돼.", emoji: "👋" },
        ],
      },
      {
        emoji: "⏳",
        say: "'빨리 ~하고 싶어'는 <b>I can't wait to + 동사원형</b>(또는 I can't wait for + 명사)이에요.",
        pattern: "I can't wait to ___. · I can't wait for ___.",
        examples: [
          { en: "I can't wait to go to the beach.", ko: "빨리 바닷가에 가고 싶어.", emoji: "🏖️" },
          { en: "I can't wait for summer vacation.", ko: "여름방학이 너무 기다려져.", emoji: "☀️" },
        ],
      },
      {
        emoji: "🎉",
        say: "신난다고 할 때는 <b>I'm excited about ~</b>나 <b>I'm so excited!</b>를 써요.",
        pattern: "I'm excited about ___.",
        examples: [
          { en: "I'm excited about the school festival.", ko: "학교 축제가 정말 기대돼.", emoji: "🎪" },
          { en: "Me too! It'll be fun.", ko: "나도! 재미있을 거야.", emoji: "😆" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>looking forward to + -ing</b>, <b>can't wait to + 동사원형</b>, <b>excited about ~</b>",
        pattern: "looking forward to meeting · can't wait to meet",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm looking forward to ___ you.", ko: "너를 만나는 게 기대돼.", choices: ["see", "seeing"], answer: 1, hint: "looking forward to 뒤에는 -ing예요." },
      { type: "choose", q: "I can't wait to ___ the movie.", ko: "빨리 그 영화를 보고 싶어.", choices: ["watch", "watching"], answer: 0, hint: "can't wait to 뒤에는 동사원형이에요." },
      { type: "choose", q: "I'm excited ___ the trip.", ko: "여행이 정말 기대돼.", choices: ["about", "to"], answer: 0, hint: "excited about ~예요." },
      { type: "choose", q: "I can't wait ___ the weekend.", ko: "주말이 너무 기다려져.", choices: ["for", "to"], answer: 0, hint: "명사 앞에서는 can't wait for예요." },
      { type: "order", words: ["I'm", "looking", "forward", "to", "the", "trip."], ko: "여행이 기대돼." },
      { type: "order", words: ["I", "can't", "wait", "to", "go."], ko: "빨리 가고 싶어." },
    ],
  },
  {
    id: "talk-prefer",
    group: "middle",
    emoji: "⚖️",
    title: "더 좋아하는 것 말하기",
    subtitle: "Which do you prefer?",
    slides: [
      {
        emoji: "⚖️",
        say: "둘 중 무엇이 더 좋은지 물을 때는 <b>Which do you prefer, A or B?</b>나 <b>Which do you like better, A or B?</b>라고 해요.",
        pattern: "Which do you prefer, ___ or ___?",
        examples: [
          { en: "Which do you prefer, cats or dogs?", ko: "고양이와 개 중에 뭐가 더 좋아?", emoji: "🐱" },
          { en: "Which do you like better, summer or winter?", ko: "여름과 겨울 중에 뭐가 더 좋아?", emoji: "☀️" },
        ],
      },
      {
        emoji: "❤️",
        say: "대답은 <b>I prefer A (to B).</b>(B보다 A가 더 좋아) 또는 <b>I like A better (than B).</b>예요. prefer 뒤 비교 대상 앞에는 than이 아니라 <b>to</b>예요!",
        pattern: "I prefer A to B. · I like A better than B.",
        examples: [
          { en: "I prefer dogs to cats.", ko: "나는 고양이보다 개가 더 좋아.", emoji: "🐶" },
          { en: "I like winter better than summer.", ko: "나는 여름보다 겨울이 더 좋아.", emoji: "⛄" },
        ],
      },
      {
        emoji: "🔍",
        say: "이유도 말해 봐요. 그리고 상대에게 <b>How about you?</b>(너는?)라고 되물어요.",
        pattern: "Because ___. How about you?",
        examples: [
          { en: "Because dogs are friendly. How about you?", ko: "개가 다정하니까. 너는?", emoji: "🤗" },
          { en: "I prefer reading books to watching TV.", ko: "나는 TV 보는 것보다 책 읽는 게 더 좋아.", emoji: "📖" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 물을 땐 <b>Which do you prefer, A or B?</b>, 대답은 <b>I prefer A to B / I like A better than B</b>",
        pattern: "prefer A to B · like A better than B",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ do you prefer, tea or juice?", ko: "차와 주스 중에 뭐가 더 좋아?", choices: ["Which", "What", "Who"], answer: 0, hint: "둘 중 고를 때는 Which예요." },
      { type: "choose", q: "I prefer soccer ___ baseball.", ko: "나는 야구보다 축구가 더 좋아.", choices: ["to", "than"], answer: 0, hint: "prefer A to B예요." },
      { type: "choose", q: "I like math better ___ science.", ko: "나는 과학보다 수학이 더 좋아.", choices: ["than", "to"], answer: 0, hint: "like A better than B예요." },
      { type: "choose", q: "I prefer cats. How ___ you?", ko: "나는 고양이가 더 좋아. 너는?", choices: ["about", "are"], answer: 0, hint: "되물을 때는 How about you?예요." },
      { type: "order", words: ["I", "prefer", "dogs", "to", "cats."], ko: "나는 고양이보다 개가 더 좋아." },
      { type: "order", words: ["Which", "do", "you", "like", "better?"], ko: "어떤 게 더 좋아?" },
    ],
  },
  {
    id: "talk-sure",
    group: "middle",
    emoji: "🎯",
    title: "확신하기, 추측하기",
    subtitle: "I'm sure ~ / Maybe ~",
    slides: [
      {
        emoji: "🎯",
        say: "확신할 때는 <b>I'm sure (that) ~</b>(틀림없이 ~야), <b>I'm certain ~</b>, <b>I have no doubt ~</b>를 써요.",
        pattern: "I'm sure that ___.",
        examples: [
          { en: "I'm sure that she will win.", ko: "틀림없이 그녀가 이길 거야.", emoji: "🏆" },
          { en: "I have no doubt that he is honest.", ko: "그가 정직하다는 건 의심할 여지가 없어.", emoji: "😇" },
        ],
      },
      {
        emoji: "🤷",
        say: "확실하지 않을 때는 <b>I'm not sure.</b>, <b>Maybe ~</b>(아마), <b>It might ~</b>(~일지도 몰라)라고 해요.",
        pattern: "I'm not sure. · Maybe ___. · It might ___.",
        examples: [
          { en: "Will it rain tomorrow? — I'm not sure.", ko: "내일 비 올까? / 잘 모르겠어.", emoji: "🌦️" },
          { en: "Maybe he is at the library.", ko: "아마 그는 도서관에 있을 거야.", emoji: "📚" },
          { en: "It might be true.", ko: "그게 사실일지도 몰라.", emoji: "🤔" },
        ],
      },
      {
        emoji: "🔎",
        say: "강한 추측은 <b>must be</b>(~임에 틀림없다), 강한 부정 추측은 <b>can't be</b>(~일 리가 없다)예요.",
        pattern: "must be ___ · can't be ___",
        examples: [
          { en: "He didn't sleep at all. He must be tired.", ko: "그는 한숨도 안 잤어. 피곤한 게 틀림없어.", emoji: "😴" },
          { en: "That can't be Jiho. He's in Busan.", ko: "저게 지호일 리 없어. 걔는 부산에 있어.", emoji: "🙅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 확신은 <b>I'm sure ~ / must be</b>, 불확실은 <b>I'm not sure / Maybe / might</b>, 부정 확신은 <b>can't be</b>!",
        pattern: "I'm sure · maybe · must be · can't be",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm ___ that you'll like it.", ko: "틀림없이 네가 좋아할 거야.", choices: ["sure", "worried"], answer: 0, hint: "확신은 I'm sure예요." },
      { type: "choose", q: "Where is Mina? — I'm not ___.", ko: "미나 어디 있어? / 잘 모르겠어.", choices: ["sure", "certain of"], answer: 0, hint: "I'm not sure.예요." },
      { type: "choose", q: "She ran 10 km. She ___ be tired.", ko: "그녀는 10km를 달렸어. 피곤한 게 틀림없어.", choices: ["must", "can't"], answer: 0, hint: "강한 추측은 must be예요." },
      { type: "choose", q: "That ___ be true. I saw him an hour ago.", ko: "그게 사실일 리 없어. 한 시간 전에 그를 봤어.", choices: ["must", "can't"], answer: 1, hint: "'~일 리 없다'는 can't be예요." },
      { type: "choose", q: "It ___ snow tonight.", ko: "오늘 밤 눈이 올지도 몰라.", choices: ["might", "must"], answer: 0, hint: "약한 추측은 might예요." },
      { type: "order", words: ["Maybe", "he", "is", "at", "home."], ko: "아마 그는 집에 있을 거야." },
    ],
  },
  {
    id: "talk-sorry-surprise",
    group: "middle",
    emoji: "😮",
    title: "유감과 놀라움 표현하기",
    subtitle: "I'm sorry to hear that.",
    slides: [
      {
        emoji: "😢",
        say: "안 좋은 소식을 들으면 <b>I'm sorry to hear that.</b>(그 말을 들으니 유감이야), <b>That's too bad.</b>, <b>What a pity!</b>(안타깝다!)라고 해요.",
        pattern: "I'm sorry to hear that. · What a pity!",
        examples: [
          { en: "My grandma is in the hospital.", ko: "할머니가 입원하셨어.", emoji: "🏥" },
          { en: "I'm sorry to hear that.", ko: "그 말을 들으니 마음이 아프다.", emoji: "😢" },
          { en: "We lost the final game. — What a pity!", ko: "결승전에서 졌어. / 안타깝다!", emoji: "⚽" },
        ],
      },
      {
        emoji: "😮",
        say: "놀랐을 때는 <b>Really?</b>, <b>No way!</b>(말도 안 돼!), <b>That's surprising!</b>, <b>I can't believe it!</b>라고 해요.",
        pattern: "Really? · No way! · I can't believe it!",
        examples: [
          { en: "I won first prize!", ko: "나 1등 했어!", emoji: "🏆" },
          { en: "No way! That's amazing!", ko: "말도 안 돼! 대단하다!", emoji: "🤩" },
          { en: "I can't believe it!", ko: "믿을 수가 없어!", emoji: "😲" },
        ],
      },
      {
        emoji: "🎊",
        say: "좋은 소식에는 <b>I'm glad to hear that.</b>(그 말을 들으니 기뻐), <b>That's great news!</b>라고 해요.",
        pattern: "I'm glad to hear that.",
        examples: [
          { en: "My dog came back home.", ko: "우리 강아지가 집에 돌아왔어.", emoji: "🐕" },
          { en: "I'm glad to hear that.", ko: "그 말을 들으니 기쁘다.", emoji: "😊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 안 좋은 소식엔 <b>I'm sorry to hear that.</b>, 좋은 소식엔 <b>I'm glad to hear that.</b>, 놀라면 <b>No way! / Really?</b>",
        pattern: "sorry to hear · glad to hear · No way!",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "My cat is sick. — I'm ___ to hear that.", ko: "고양이가 아파. / 마음이 아프다.", choices: ["sorry", "glad"], answer: 0, hint: "안 좋은 소식에는 sorry예요." },
      { type: "choose", q: "I passed the test! — I'm ___ to hear that.", ko: "나 시험 통과했어! / 그 말을 들으니 기뻐.", choices: ["sorry", "glad"], answer: 1, hint: "좋은 소식에는 glad예요." },
      { type: "choose", q: "What a ___!", ko: "안타깝다!", choices: ["pity", "pretty"], answer: 0, hint: "What a pity!예요." },
      { type: "choose", q: "I met a famous singer! — No ___!", ko: "나 유명한 가수 만났어! / 말도 안 돼!", choices: ["way", "problem"], answer: 0, hint: "놀람은 No way!예요." },
      { type: "order", words: ["I", "can't", "believe", "it!"], ko: "믿을 수가 없어!" },
      { type: "order", words: ["I'm", "sorry", "to", "hear", "that."], ko: "그 말을 들으니 유감이야." },
    ],
  },
);
