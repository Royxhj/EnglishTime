// 고등학교 의사소통 기능. talkMiddle.js 뒤에 불러와 TALK_GROUPS·TALK_TOPICS에 붙인다.
TALK_GROUPS.push({ id: "high", label: "🎓 고등학교 의사소통", color: "#8338ec" });

TALK_TOPICS.push(
  {
    id: "talk-polite-request",
    group: "high",
    emoji: "🙇",
    title: "정중하게 부탁하기",
    subtitle: "Would you mind ~ing?",
    slides: [
      {
        emoji: "🙇",
        say: "어른이나 처음 보는 사람에게 부탁할 때는 더 정중하게 말해요. <b>Would you mind ~ing?</b>는 '~해 주실 수 있을까요?'예요. 문자 그대로는 '~하는 게 싫으세요?'라서, 들어줄 때는 <b>No</b>로 대답해요.",
        pattern: "Would you mind ___ing? — No, not at all. / Of course not.",
        examples: [
          { en: "Would you mind closing the window?", ko: "창문 좀 닫아 주실 수 있을까요?", emoji: "🪟" },
          { en: "No, not at all.", ko: "네, 그럼요. (전혀 싫지 않아요)", emoji: "🙂" },
        ],
      },
      {
        emoji: "🤔",
        say: "더 공손하게는 <b>I was wondering if you could ~</b>(~해 주실 수 있을지 궁금해서요)나 <b>Could you possibly ~?</b>라고 해요.",
        pattern: "I was wondering if you could ___. · Could you possibly ___?",
        examples: [
          { en: "I was wondering if you could help me with my essay.", ko: "제 에세이를 좀 도와주실 수 있을까 해서요.", emoji: "📝" },
          { en: "Could you possibly lend me your notes?", ko: "혹시 필기 좀 빌려주실 수 있을까요?", emoji: "📒" },
        ],
      },
      {
        emoji: "🙅",
        say: "거절할 때는 이유를 붙여 부드럽게 말해요. <b>I'm afraid I can't. ~</b>, <b>I'd love to, but ~</b>",
        pattern: "I'm afraid I can't. · I'd love to, but ___.",
        examples: [
          { en: "I'm afraid I can't. I'm busy right now.", ko: "죄송하지만 안 될 것 같아요. 지금 바빠서요.", emoji: "⏳" },
          { en: "I'd love to, but I have plans.", ko: "그러고 싶지만 약속이 있어요.", emoji: "📅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 정중한 부탁은 <b>Would you mind ~ing?</b>, <b>I was wondering if you could ~</b>. 들어줄 때는 <b>Not at all</b>!",
        pattern: "Would you mind ___ing? — Not at all.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Would you mind ___ the door?", ko: "문 좀 열어 주실 수 있을까요?", choices: ["opening", "to open", "open"], answer: 0, hint: "mind 뒤에는 -ing예요." },
      { type: "choose", q: "Would you mind turning down the music? — ___", ko: "음악 소리 좀 줄여 주실래요? — 네, 그럼요.", choices: ["Not at all.", "Yes, I do."], answer: 0, hint: "들어줄 때는 '전혀 싫지 않다'는 Not at all이에요." },
      { type: "choose", q: "I was ___ if you could help me.", ko: "저를 도와주실 수 있을까 해서요.", choices: ["wondering", "wanting", "asking"], answer: 0, hint: "I was wondering if ~예요." },
      { type: "choose", q: "I'm ___ I can't come tomorrow.", ko: "죄송하지만 내일은 못 갈 것 같아요.", choices: ["afraid", "scared"], answer: 0, hint: "부드러운 거절은 I'm afraid ~예요." },
      { type: "choose", q: "Could you ___ give me a ride?", ko: "혹시 저를 좀 태워 주실 수 있을까요?", choices: ["possibly", "possible"], answer: 0, hint: "Could you possibly ~?예요." },
      { type: "order", words: ["Would", "you", "mind", "waiting", "a", "minute?"], ko: "잠깐만 기다려 주실 수 있을까요?" },
    ],
  },
  {
    id: "talk-permission",
    group: "high",
    emoji: "🔓",
    title: "허락 구하기",
    subtitle: "Do you mind if I ~?",
    slides: [
      {
        emoji: "🔓",
        say: "내가 해도 되는지 물을 때는 <b>Do you mind if I ~?</b>(제가 ~해도 될까요?), <b>Is it okay if I ~?</b>, <b>May I ~?</b>라고 해요.",
        pattern: "Do you mind if I ___? · Is it okay if I ___? · May I ___?",
        examples: [
          { en: "Do you mind if I sit here?", ko: "여기 앉아도 될까요?", emoji: "🪑" },
          { en: "Is it okay if I use your phone?", ko: "휴대폰 좀 써도 될까?", emoji: "📱" },
          { en: "May I ask you a question?", ko: "질문 하나 해도 될까요?", emoji: "🙋" },
        ],
      },
      {
        emoji: "👌",
        say: "허락할 때 Do you mind ~?에는 <b>No, go ahead.</b>(아니요, 그렇게 하세요), 나머지에는 <b>Sure. / Of course.</b>라고 해요. 안 될 때는 <b>I'd rather you didn't.</b>(안 하시면 좋겠어요)예요.",
        pattern: "No, go ahead. · Sure. · I'd rather you didn't.",
        examples: [
          { en: "No, go ahead.", ko: "그럼요, 그렇게 하세요.", emoji: "👍" },
          { en: "I'd rather you didn't. Someone is sitting there.", ko: "안 하셨으면 해요. 거기 누가 앉아 있어요.", emoji: "🙏" },
        ],
      },
      {
        emoji: "🚫",
        say: "규칙으로 금지할 때는 <b>You're not allowed to ~</b>(~하면 안 돼요), <b>You're not supposed to ~</b>(~하면 안 되게 되어 있어요)라고 해요.",
        pattern: "You're not allowed to ___. · You're not supposed to ___.",
        examples: [
          { en: "You're not allowed to take photos here.", ko: "여기서는 사진을 찍으면 안 돼요.", emoji: "📷" },
          { en: "You're not supposed to eat in the library.", ko: "도서관에서는 음식을 먹으면 안 돼요.", emoji: "📚" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 허락 구하기는 <b>Do you mind if I ~?</b>, 허락은 <b>Go ahead</b>, 금지는 <b>You're not allowed to ~</b>!",
        pattern: "Do you mind if I ___? — No, go ahead.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Do you mind ___ I open the window?", ko: "창문 열어도 될까요?", choices: ["if", "that", "what"], answer: 0, hint: "Do you mind if I ~?예요." },
      { type: "choose", q: "Do you mind if I use this? — No, ___.", ko: "이거 써도 될까요? — 그럼요, 쓰세요.", choices: ["go ahead", "I mind"], answer: 0, hint: "허락은 No, go ahead예요." },
      { type: "choose", q: "Is it ___ if I leave early?", ko: "일찍 가도 괜찮을까요?", choices: ["okay", "good at"], answer: 0, hint: "Is it okay if I ~?예요." },
      { type: "choose", q: "You're not ___ to run in the hallway.", ko: "복도에서 뛰면 안 돼요.", choices: ["allowed", "allow", "allowing"], answer: 0, hint: "be allowed to예요." },
      { type: "choose", q: "I'd rather you ___. It's my seat.", ko: "안 하셨으면 해요. 제 자리라서요.", choices: ["didn't", "don't"], answer: 0, hint: "I'd rather you didn't예요." },
      { type: "order", words: ["Do", "you", "mind", "if", "I", "sit", "here?"], ko: "여기 앉아도 될까요?" },
    ],
  },
  {
    id: "talk-regret",
    group: "high",
    emoji: "😔",
    title: "후회 표현하기",
    subtitle: "I should have ~",
    slides: [
      {
        emoji: "😔",
        say: "지난 일을 후회할 때는 <b>I should have p.p.</b>(~했어야 했는데), <b>I shouldn't have p.p.</b>(~하지 말았어야 했는데)라고 해요.",
        pattern: "I should have ___. · I shouldn't have ___.",
        examples: [
          { en: "I should have brought an umbrella.", ko: "우산을 가져왔어야 했는데.", emoji: "☂️" },
          { en: "I shouldn't have stayed up so late.", ko: "그렇게 늦게까지 깨어 있지 말았어야 했는데.", emoji: "🌙" },
        ],
      },
      {
        emoji: "💭",
        say: "<b>I regret ~ing</b>(~한 것을 후회해), <b>I wish I had p.p.</b>(~했더라면 좋았을 텐데), <b>If only I had p.p.</b>(~하기만 했더라면)도 후회 표현이에요.",
        pattern: "I regret ___ing. · I wish I had ___. · If only I had ___.",
        examples: [
          { en: "I regret not telling her the truth.", ko: "그녀에게 진실을 말하지 않은 것을 후회해.", emoji: "🤐" },
          { en: "I wish I had practiced more.", ko: "더 연습했더라면 좋았을 텐데.", emoji: "🎻" },
        ],
      },
      {
        emoji: "🤗",
        say: "후회하는 친구에게는 <b>Don't be too hard on yourself.</b>(너무 자책하지 마), <b>You can do better next time.</b>이라고 말해 줘요.",
        pattern: "Don't be too hard on yourself.",
        examples: [
          { en: "Don't be too hard on yourself.", ko: "너무 자책하지 마.", emoji: "🫂" },
          { en: "Learn from it and move on.", ko: "거기서 배우고 털어 버려.", emoji: "🚶" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 후회는 <b>I should have p.p.</b>, <b>I regret ~ing</b>, 위로는 <b>Don't be too hard on yourself</b>!",
        pattern: "I should have ___. — Don't be too hard on yourself.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I should have ___ harder.", ko: "더 열심히 공부했어야 했는데.", choices: ["studied", "study", "studying"], answer: 0, hint: "should have + p.p.예요." },
      { type: "choose", q: "I ___ have eaten so much. My stomach hurts.", ko: "그렇게 많이 먹지 말았어야 했는데. 배가 아파.", choices: ["shouldn't", "should"], answer: 0, hint: "하지 말았어야 한 일은 shouldn't have예요." },
      { type: "choose", q: "I regret ___ my friend.", ko: "친구에게 소리 지른 걸 후회해.", choices: ["shouting at", "to shout at"], answer: 0, hint: "지난 일 후회는 regret -ing예요." },
      { type: "choose", q: "I wish I ___ left earlier.", ko: "더 일찍 출발했더라면 좋았을 텐데.", choices: ["had", "have"], answer: 0, hint: "I wish I had p.p.예요." },
      { type: "choose", q: "Don't be too ___ on yourself.", ko: "너무 자책하지 마.", choices: ["hard", "hardly"], answer: 0, hint: "be hard on ~ = ~에게 모질게 굴다." },
      { type: "order", words: ["I", "should", "have", "told", "you", "earlier."], ko: "너에게 더 일찍 말했어야 했는데." },
    ],
  },
  {
    id: "talk-plan",
    group: "high",
    emoji: "🗓️",
    title: "의도와 계획 말하기",
    subtitle: "I'm planning to ~",
    slides: [
      {
        emoji: "🗓️",
        say: "앞으로의 계획은 <b>I'm planning to ~</b>, <b>I'm going to ~</b>, 굳게 마음먹었으면 <b>I'm determined to ~</b>, 의도는 <b>I intend to ~</b>라고 해요.",
        pattern: "I'm planning to ___. · I intend to ___. · I'm determined to ___.",
        examples: [
          { en: "I'm planning to travel abroad next year.", ko: "내년에 해외여행을 할 계획이야.", emoji: "✈️" },
          { en: "I intend to apply for the program.", ko: "나는 그 프로그램에 지원할 생각이다.", emoji: "📄" },
          { en: "I'm determined to finish the marathon.", ko: "나는 꼭 마라톤을 완주할 거야.", emoji: "🏃" },
        ],
      },
      {
        emoji: "❓",
        say: "계획을 물을 때는 <b>What are you going to do ~?</b>, <b>Do you have any plans for ~?</b>, <b>What do you plan to do after ~?</b>",
        pattern: "Do you have any plans for ___?",
        examples: [
          { en: "Do you have any plans for the vacation?", ko: "방학에 무슨 계획 있어?", emoji: "🏖️" },
          { en: "What do you plan to do after graduation?", ko: "졸업 후에 뭐 할 계획이야?", emoji: "🎓" },
        ],
      },
      {
        emoji: "🤷",
        say: "아직 정하지 못했으면 <b>I'm thinking of ~ing</b>(~할까 생각 중이야), <b>I haven't decided yet.</b>이라고 해요.",
        pattern: "I'm thinking of ___ing. · I haven't decided yet.",
        examples: [
          { en: "I'm thinking of learning Spanish.", ko: "스페인어를 배울까 생각 중이야.", emoji: "🇪🇸" },
          { en: "I haven't decided yet.", ko: "아직 정하지 못했어.", emoji: "🤔" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 계획은 <b>I'm planning to ~</b>, 굳은 결심은 <b>I'm determined to ~</b>, 고민 중이면 <b>I'm thinking of ~ing</b>!",
        pattern: "Do you have any plans? — I'm planning to ___.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm planning ___ a new club.", ko: "나는 새 동아리를 만들 계획이야.", choices: ["to start", "starting", "start"], answer: 0, hint: "plan to + 동사원형이에요." },
      { type: "choose", q: "I'm thinking of ___ my hair short.", ko: "머리를 짧게 자를까 생각 중이야.", choices: ["cutting", "to cut"], answer: 0, hint: "of 뒤에는 -ing예요." },
      { type: "choose", q: "Do you have any ___ for the weekend?", ko: "주말에 무슨 계획 있어?", choices: ["plans", "plan to"], answer: 0, hint: "Do you have any plans for ~?예요." },
      { type: "choose", q: "I'm ___ to pass the exam this time.", ko: "이번에는 꼭 시험에 합격할 거야.", choices: ["determined", "determining"], answer: 0, hint: "굳은 결심은 be determined to예요." },
      { type: "choose", q: "I haven't ___ yet.", ko: "아직 정하지 못했어.", choices: ["decided", "decide"], answer: 0, hint: "현재완료 have + p.p.예요." },
      { type: "order", words: ["What", "do", "you", "plan", "to", "do", "next?"], ko: "다음에 뭐 할 계획이야?" },
    ],
  },
  {
    id: "talk-clarify",
    group: "high",
    emoji: "🔍",
    title: "설명 요청하고 확인하기",
    subtitle: "What do you mean by ~?",
    slides: [
      {
        emoji: "🔍",
        say: "상대의 말이 이해되지 않으면 <b>What do you mean by ~?</b>(~가 무슨 뜻이야?), <b>Could you explain that in more detail?</b>(더 자세히 설명해 줄래?)라고 물어요.",
        pattern: "What do you mean by ___? · Could you explain ___?",
        examples: [
          { en: "What do you mean by \"smart farming\"?", ko: "'스마트 농업'이 무슨 뜻이야?", emoji: "🌾" },
          { en: "Could you explain that in more detail?", ko: "그걸 더 자세히 설명해 줄 수 있어?", emoji: "🧾" },
        ],
      },
      {
        emoji: "🔁",
        say: "잘 못 들었을 때는 <b>Could you say that again?</b>, <b>Sorry, I didn't catch that.</b>(미안, 잘 못 알아들었어)라고 해요.",
        pattern: "Sorry, I didn't catch that. · Could you say that again?",
        examples: [
          { en: "Sorry, I didn't catch that.", ko: "미안, 잘 못 알아들었어.", emoji: "👂" },
          { en: "Could you speak more slowly?", ko: "좀 더 천천히 말해 줄래?", emoji: "🐢" },
        ],
      },
      {
        emoji: "✅",
        say: "내가 맞게 이해했는지 확인할 때는 <b>You mean ~?</b>, <b>So what you're saying is ~</b>(그러니까 네 말은 ~라는 거지), <b>Are you saying that ~?</b>",
        pattern: "So what you're saying is ___. · Are you saying that ___?",
        examples: [
          { en: "So what you're saying is we need more time.", ko: "그러니까 네 말은 우리가 시간이 더 필요하다는 거지.", emoji: "⏳" },
          { en: "Are you saying that the plan won't work?", ko: "그 계획이 안 될 거라는 말이야?", emoji: "🧐" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 뜻을 물을 땐 <b>What do you mean by ~?</b>, 못 들었으면 <b>I didn't catch that</b>, 확인은 <b>So what you're saying is ~</b>!",
        pattern: "What do you mean by ___?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "What do you ___ by that?", ko: "그게 무슨 뜻이야?", choices: ["mean", "say", "think"], answer: 0, hint: "What do you mean by ~?예요." },
      { type: "choose", q: "Sorry, I didn't ___ that.", ko: "미안, 잘 못 알아들었어.", choices: ["catch", "take", "hold"], answer: 0, hint: "I didn't catch that예요." },
      { type: "choose", q: "Could you explain it in more ___?", ko: "그걸 더 자세히 설명해 줄 수 있어?", choices: ["detail", "details of"], answer: 0, hint: "in more detail이에요." },
      { type: "choose", q: "So what you're ___ is that we should wait?", ko: "그러니까 네 말은 우리가 기다려야 한다는 거지?", choices: ["saying", "telling"], answer: 0, hint: "what you're saying is ~예요." },
      { type: "choose", q: "Could you speak more ___?", ko: "좀 더 천천히 말해 줄래?", choices: ["slowly", "slow"], answer: 0, hint: "동사를 꾸미니 부사 slowly예요." },
      { type: "order", words: ["Could", "you", "say", "that", "again?"], ko: "다시 말해 줄래?" },
    ],
  },
  {
    id: "talk-complain",
    group: "high",
    emoji: "😠",
    title: "불만 말하고 해결 요청하기",
    subtitle: "I'm not satisfied with ~",
    slides: [
      {
        emoji: "😠",
        say: "불만을 말할 때는 <b>I'm not satisfied with ~</b>(~가 만족스럽지 않아요), <b>I'd like to complain about ~</b>(~에 대해 항의하고 싶어요)라고 해요.",
        pattern: "I'm not satisfied with ___. · I'd like to complain about ___.",
        examples: [
          { en: "I'm not satisfied with this service.", ko: "이 서비스가 만족스럽지 않아요.", emoji: "🙁" },
          { en: "I'd like to complain about the noise.", ko: "소음에 대해 항의하고 싶어요.", emoji: "🔊" },
        ],
      },
      {
        emoji: "🛠️",
        say: "문제를 설명하고 해결을 요청해요. <b>There's a problem with ~</b>, <b>I'd like a refund / an exchange.</b>(환불 / 교환하고 싶어요)",
        pattern: "There's a problem with ___. · I'd like a refund.",
        examples: [
          { en: "There's a problem with my order.", ko: "제 주문에 문제가 있어요.", emoji: "📦" },
          { en: "This shirt has a hole. I'd like an exchange.", ko: "이 셔츠에 구멍이 있어요. 교환하고 싶어요.", emoji: "👕" },
          { en: "Can I get a refund?", ko: "환불받을 수 있을까요?", emoji: "💳" },
        ],
      },
      {
        emoji: "🙏",
        say: "불만을 들은 쪽은 <b>I'm sorry for the inconvenience.</b>(불편을 드려 죄송합니다), <b>I'll take care of it right away.</b>(바로 처리해 드릴게요)라고 대답해요.",
        pattern: "I'm sorry for the inconvenience.",
        examples: [
          { en: "I'm sorry for the inconvenience.", ko: "불편을 드려 죄송합니다.", emoji: "🙇" },
          { en: "I'll take care of it right away.", ko: "바로 처리해 드릴게요.", emoji: "⚡" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 불만은 <b>I'm not satisfied with ~</b>, 요청은 <b>I'd like a refund</b>, 대답은 <b>Sorry for the inconvenience</b>!",
        pattern: "There's a problem with ___. — I'm sorry for the inconvenience.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm not ___ with the result.", ko: "그 결과가 만족스럽지 않아요.", choices: ["satisfied", "satisfying"], answer: 0, hint: "내가 만족하는 거라 satisfied예요." },
      { type: "choose", q: "I'd like to complain ___ the food.", ko: "음식에 대해 항의하고 싶어요.", choices: ["about", "with", "for"], answer: 0, hint: "complain about이에요." },
      { type: "choose", q: "There's a problem ___ my phone.", ko: "제 휴대폰에 문제가 있어요.", choices: ["with", "in to"], answer: 0, hint: "a problem with ~예요." },
      { type: "choose", q: "It's broken. Can I get a ___?", ko: "고장 났어요. 환불받을 수 있을까요?", choices: ["refund", "return back"], answer: 0, hint: "환불은 refund예요." },
      { type: "choose", q: "I'm sorry for the ___.", ko: "불편을 드려 죄송합니다.", choices: ["inconvenience", "convenient"], answer: 0, hint: "불편은 inconvenience예요." },
      { type: "order", words: ["I'd", "like", "to", "exchange", "this", "shirt."], ko: "이 셔츠를 교환하고 싶어요." },
    ],
  },
  {
    id: "talk-pros-cons",
    group: "high",
    emoji: "⚖️",
    title: "장단점 말하기",
    subtitle: "On the one hand ~, on the other hand ~",
    slides: [
      {
        emoji: "➕",
        say: "장점은 <b>One advantage of ~ is that ~</b>(~의 한 가지 장점은 ~이다), <b>The good thing about ~ is ~</b>라고 말해요.",
        pattern: "One advantage of ___ is that ___.",
        examples: [
          { en: "One advantage of online classes is that you can study anywhere.", ko: "온라인 수업의 한 가지 장점은 어디서든 공부할 수 있다는 것이다.", emoji: "💻" },
          { en: "The good thing about living in a city is convenience.", ko: "도시에 사는 것의 좋은 점은 편리함이다.", emoji: "🏙️" },
        ],
      },
      {
        emoji: "➖",
        say: "단점은 <b>One disadvantage is that ~</b>, <b>The problem with ~ is that ~</b>(~의 문제는 ~라는 것이다)라고 해요.",
        pattern: "One disadvantage is that ___. · The problem with ___ is that ___.",
        examples: [
          { en: "One disadvantage is that you can feel lonely.", ko: "한 가지 단점은 외로움을 느낄 수 있다는 것이다.", emoji: "😶" },
          { en: "The problem with fast food is that it's unhealthy.", ko: "패스트푸드의 문제는 건강에 좋지 않다는 것이다.", emoji: "🍟" },
        ],
      },
      {
        emoji: "⚖️",
        say: "양쪽을 비교할 때는 <b>On the one hand, ~. On the other hand, ~.</b>(한편으로는 ~. 다른 한편으로는 ~.) 결론은 <b>All things considered, ~</b>(모든 것을 고려하면)라고 해요.",
        pattern: "On the one hand, ___. On the other hand, ___.",
        examples: [
          { en: "On the one hand, smartphones are useful.", ko: "한편으로는 스마트폰이 유용하다.", emoji: "📱" },
          { en: "On the other hand, they can be addictive.", ko: "다른 한편으로는 중독될 수 있다.", emoji: "🔁" },
          { en: "All things considered, I think the benefits are bigger.", ko: "모든 것을 고려하면, 나는 이점이 더 크다고 생각한다.", emoji: "🧮" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 장점 <b>One advantage is ~</b>, 단점 <b>The problem with ~ is ~</b>, 비교 <b>On the one hand / On the other hand</b>!",
        pattern: "advantage · disadvantage · on the other hand",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "One ___ of cycling is that it's good for your health.", ko: "자전거 타기의 한 가지 장점은 건강에 좋다는 것이다.", choices: ["advantage", "disadvantage"], answer: 0, hint: "좋은 점은 advantage예요." },
      { type: "choose", q: "The problem ___ this plan is that it costs too much.", ko: "이 계획의 문제는 비용이 너무 많이 든다는 것이다.", choices: ["with", "for", "at"], answer: 0, hint: "The problem with ~예요." },
      { type: "choose", q: "On the one hand, it's cheap. On the ___ hand, it's slow.", ko: "한편으로는 싸다. 다른 한편으로는 느리다.", choices: ["other", "another", "second"], answer: 0, hint: "On the other hand예요." },
      { type: "choose", q: "All things ___, it was a good choice.", ko: "모든 것을 고려하면, 그건 좋은 선택이었다.", choices: ["considered", "considering"], answer: 0, hint: "All things considered예요." },
      { type: "choose", q: "One disadvantage is ___ it takes a lot of time.", ko: "한 가지 단점은 시간이 많이 걸린다는 것이다.", choices: ["that", "what"], answer: 0, hint: "is that + 문장이에요." },
      { type: "order", words: ["On", "the", "other", "hand,", "it", "is", "expensive."], ko: "다른 한편으로는 비싸다." },
    ],
  },
  {
    id: "talk-encourage",
    group: "high",
    emoji: "🎖️",
    title: "칭찬하고 격려하기",
    subtitle: "I'm proud of you. Keep it up!",
    slides: [
      {
        emoji: "🎖️",
        say: "칭찬할 때는 <b>You did a great job!</b>, <b>I'm proud of you.</b>(네가 자랑스러워), <b>I'm impressed by ~</b>(~에 감동받았어)라고 해요.",
        pattern: "You did a great job! · I'm impressed by ___.",
        examples: [
          { en: "You did a great job on the presentation!", ko: "발표 정말 잘했어!", emoji: "🎤" },
          { en: "I'm impressed by your hard work.", ko: "너의 노력에 감동받았어.", emoji: "💪" },
        ],
      },
      {
        emoji: "🔥",
        say: "계속 힘내라고 할 때는 <b>Keep it up!</b>(계속 그렇게 해!), <b>Hang in there.</b>(조금만 버텨), <b>Don't give up.</b>이라고 해요.",
        pattern: "Keep it up! · Hang in there. · Don't give up.",
        examples: [
          { en: "Your English is getting better. Keep it up!", ko: "영어 실력이 늘고 있어. 계속 그렇게 해!", emoji: "📈" },
          { en: "Hang in there. Exams are almost over.", ko: "조금만 버텨. 시험이 거의 끝났어.", emoji: "🧗" },
        ],
      },
      {
        emoji: "🙌",
        say: "자신감을 줄 때는 <b>I believe in you.</b>(난 너를 믿어), <b>You've got this!</b>(넌 할 수 있어!)라고 해요. 칭찬을 들으면 <b>Thanks, that means a lot.</b>(고마워, 큰 힘이 돼)이라고 답해요.",
        pattern: "I believe in you. · You've got this! — Thanks, that means a lot.",
        examples: [
          { en: "I believe in you. You've got this!", ko: "난 너를 믿어. 넌 할 수 있어!", emoji: "✊" },
          { en: "Thanks, that means a lot.", ko: "고마워, 큰 힘이 돼.", emoji: "🥹" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 칭찬은 <b>You did a great job</b>, 격려는 <b>Keep it up / Hang in there</b>, 대답은 <b>That means a lot</b>!",
        pattern: "Keep it up! — Thanks, that means a lot.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "You did a great ___!", ko: "정말 잘했어!", choices: ["job", "work", "jobs"], answer: 0, hint: "You did a great job이에요." },
      { type: "choose", q: "You're doing well. Keep it ___!", ko: "잘하고 있어. 계속 그렇게 해!", choices: ["up", "on", "out"], answer: 0, hint: "Keep it up이에요." },
      { type: "choose", q: "Hang ___ there. You're almost done.", ko: "조금만 버텨. 거의 다 했어.", choices: ["in", "on", "at"], answer: 0, hint: "Hang in there예요." },
      { type: "choose", q: "I believe ___ you.", ko: "난 너를 믿어.", choices: ["in", "on", "to"], answer: 0, hint: "believe in = ~를 믿어 주다." },
      { type: "choose", q: "Thanks, that ___ a lot.", ko: "고마워, 큰 힘이 돼.", choices: ["means", "makes"], answer: 0, hint: "That means a lot이에요." },
      { type: "order", words: ["I'm", "really", "proud", "of", "you."], ko: "네가 정말 자랑스러워." },
    ],
  },
);
