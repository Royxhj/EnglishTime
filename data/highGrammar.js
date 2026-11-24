// 고등학교 문법: 기초 문법(BASIC_TOPICS)과 같은 형식으로 고1~고3 과정을 이어 붙인다.
// middleGrammar.js 뒤에 불러온다. id는 "h-"로 시작한다.
BASIC_TOPICS.push(
  // ── 고1 ──
  {
    id: "h-perfect-prog",
    emoji: "⏳",
    title: "have been -ing",
    subtitle: "현재완료진행: 지금까지 계속 ~하고 있다",
    grade: "고1",
    slides: [
      {
        emoji: "⏳",
        say: "과거에 시작한 일이 <b>지금까지 계속되고 있고, 아직 하는 중</b>일 때는 <b>have / has been + 동사ing</b>를 써요. 현재완료(계속)에 진행형의 '하는 중'이 더해진 거예요.",
        pattern: "주어 + have / has been + 동사ing",
        examples: [
          { en: "I have been studying for three hours.", ko: "나는 세 시간째 공부하고 있다.", emoji: "📚" },
          { en: "It has been raining since morning.", ko: "아침부터 계속 비가 오고 있다.", emoji: "🌧️" },
          { en: "She has been waiting for you.", ko: "그녀는 계속 너를 기다리고 있었어.", emoji: "⌛" },
        ],
      },
      {
        emoji: "🔍",
        say: "현재완료와 비교해 봐요. <b>I have read the book</b>은 '다 읽었다'(완료), <b>I have been reading the book</b>은 '계속 읽는 중이다'(아직 진행)예요.",
        pattern: "have p.p. (결과) ↔ have been -ing (계속 진행)",
        examples: [
          { en: "I have painted the room.", ko: "나는 방을 다 칠했다.", emoji: "🎨" },
          { en: "I have been painting the room all day.", ko: "나는 하루 종일 방을 칠하고 있다.", emoji: "🖌️" },
        ],
      },
      {
        emoji: "🚫",
        say: "know, have(가지다), like, believe처럼 <b>상태</b>를 나타내는 동사는 진행형으로 쓰지 않아요. 이때는 그냥 현재완료를 써요.",
        pattern: "I have known him for years. (O) · I have been knowing (X)",
        examples: [
          { en: "I have known her since childhood.", ko: "나는 어릴 때부터 그녀를 알아 왔다.", emoji: "👭" },
          { en: "How long have you been learning English?", ko: "영어를 배운 지 얼마나 됐니?", emoji: "🔤" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 과거부터 지금까지 <b>계속 하는 중</b>이면 <b>have been + ing</b>. 기간은 for, 시작점은 since!",
        pattern: "have / has been + 동사ing + for / since",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have been ___ for you for an hour.", ko: "나는 한 시간째 너를 기다리고 있어.", choices: ["waiting", "waited", "wait"], answer: 0, hint: "have been 뒤에는 동사ing가 와요." },
      { type: "choose", q: "It ___ been snowing since last night.", ko: "어젯밤부터 계속 눈이 오고 있다.", choices: ["has", "have", "is"], answer: 0, hint: "It은 has예요." },
      { type: "choose", q: "How long have you ___ playing the piano?", ko: "피아노를 친 지 얼마나 됐어?", choices: ["been", "being", "be"], answer: 0, hint: "have been + ing의 의문문이에요." },
      { type: "choose", q: "I have ___ him for ten years.", ko: "나는 그를 10년 동안 알아 왔다.", choices: ["known", "been knowing"], answer: 0, hint: "know는 상태동사라 진행형으로 쓰지 않아요." },
      { type: "choose", q: "They have been working here ___ 2020.", ko: "그들은 2020년부터 여기서 일하고 있다.", choices: ["since", "for"], answer: 0, hint: "시작한 때 앞에는 since예요." },
      { type: "order", words: ["She", "has", "been", "studying", "all", "day."], ko: "그녀는 하루 종일 공부하고 있다." },
    ],
  },
  {
    id: "h-modal-perfect",
    emoji: "🤔",
    title: "should have p.p.",
    subtitle: "조동사 + have p.p.: 과거에 대한 후회·추측",
    grade: "고1",
    slides: [
      {
        emoji: "😔",
        say: "<b>should have p.p.</b>는 '<b>~했어야 했는데</b> (안 했다)'라는 후회예요. 반대로 <b>shouldn't have p.p.</b>는 '~하지 말았어야 했는데 (했다)'예요.",
        pattern: "should have p.p. · shouldn't have p.p.",
        examples: [
          { en: "I should have studied harder.", ko: "나는 더 열심히 공부했어야 했는데.", emoji: "📚" },
          { en: "You shouldn't have eaten so much.", ko: "너는 그렇게 많이 먹지 말았어야 했어.", emoji: "🍔" },
        ],
      },
      {
        emoji: "🕵️",
        say: "과거 일을 추측할 때도 써요. <b>must have p.p.</b>는 '~했음이 틀림없다', <b>can't have p.p.</b>는 '~했을 리가 없다', <b>may / might have p.p.</b>는 '~했을지도 모른다'예요.",
        pattern: "must have p.p. > may have p.p. > can't have p.p.",
        examples: [
          { en: "He must have been tired.", ko: "그는 피곤했던 게 틀림없다.", emoji: "😴" },
          { en: "She can't have said that.", ko: "그녀가 그런 말을 했을 리가 없다.", emoji: "🙅" },
          { en: "I may have left my phone at school.", ko: "학교에 휴대폰을 두고 왔을지도 몰라.", emoji: "📱" },
        ],
      },
      {
        emoji: "🔁",
        say: "<b>could have p.p.</b>는 '<b>~할 수도 있었는데</b> (안 했다)'라는 뜻이에요. 지나간 기회를 말할 때 써요.",
        pattern: "could have p.p. = ~할 수도 있었다",
        examples: [
          { en: "You could have called me.", ko: "나한테 전화할 수도 있었잖아.", emoji: "📞" },
          { en: "We could have won the game.", ko: "우리는 그 경기를 이길 수도 있었다.", emoji: "🏆" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 후회는 <b>should have p.p.</b>, 강한 추측은 <b>must have</b>, 부정 추측은 <b>can't have</b>, 약한 추측은 <b>may have</b>!",
        pattern: "조동사 + have + p.p. = 과거에 대한 말",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm so late. I ___ left earlier.", ko: "너무 늦었어. 더 일찍 출발했어야 했는데.", choices: ["should have", "must have", "can't have"], answer: 0, hint: "후회는 should have p.p.예요." },
      { type: "choose", q: "The ground is wet. It ___ rained last night.", ko: "땅이 젖었네. 어젯밤에 비가 온 게 틀림없어.", choices: ["must have", "should have"], answer: 0, hint: "강한 추측은 must have p.p.예요." },
      { type: "choose", q: "He was with me all day. He ___ broken the window.", ko: "그는 하루 종일 나랑 있었어. 그가 창문을 깼을 리가 없어.", choices: ["can't have", "must have"], answer: 0, hint: "'~했을 리가 없다'는 can't have p.p.예요." },
      { type: "choose", q: "I'm not sure. She may have ___ the bus.", ko: "잘 모르겠어. 그녀가 버스를 놓쳤을지도 몰라.", choices: ["missed", "miss", "missing"], answer: 0, hint: "have 뒤에는 과거분사예요." },
      { type: "choose", q: "You ___ have told me. I would have helped you.", ko: "나한테 말할 수도 있었잖아. 도와줬을 텐데.", choices: ["could", "can't"], answer: 0, hint: "'~할 수도 있었다'는 could have p.p.예요." },
      { type: "order", words: ["I", "should", "have", "listened", "to", "you."], ko: "네 말을 들었어야 했는데." },
    ],
  },
  {
    id: "h-passive-adv",
    emoji: "🏗️",
    title: "can be done, is being built",
    subtitle: "수동태 심화: 조동사·진행·완료 수동태",
    grade: "고1",
    slides: [
      {
        emoji: "🔧",
        say: "조동사가 있으면 <b>조동사 + be + p.p.</b>예요. be는 언제나 원형이에요.",
        pattern: "can / will / must / should + be + p.p.",
        examples: [
          { en: "This problem can be solved easily.", ko: "이 문제는 쉽게 해결될 수 있다.", emoji: "🧩" },
          { en: "The work must be finished by Friday.", ko: "그 일은 금요일까지 끝내져야 한다.", emoji: "📅" },
        ],
      },
      {
        emoji: "🏗️",
        say: "지금 <b>~되고 있는 중</b>이면 진행 수동태 <b>be being p.p.</b>, 지금까지 <b>~되어 왔다</b>면 완료 수동태 <b>have been p.p.</b>예요.",
        pattern: "is being p.p. (진행) · has been p.p. (완료)",
        examples: [
          { en: "A new bridge is being built.", ko: "새 다리가 지어지고 있다.", emoji: "🌉" },
          { en: "The book has been translated into 30 languages.", ko: "그 책은 30개 언어로 번역되어 왔다.", emoji: "🌍" },
        ],
      },
      {
        emoji: "🧲",
        say: "구동사는 한 덩어리로 움직여요. <b>look after</b>(돌보다)의 수동태는 <b>be looked after</b>예요. 또 by 말고 다른 전치사를 쓰는 표현도 있어요: be interested <b>in</b>, be covered <b>with</b>, be known <b>for</b>.",
        pattern: "be looked after by · be interested in · be known for",
        examples: [
          { en: "The baby was looked after by her aunt.", ko: "그 아기는 이모가 돌봤다.", emoji: "👶" },
          { en: "The mountain is covered with snow.", ko: "그 산은 눈으로 덮여 있다.", emoji: "🏔️" },
          { en: "Jeonju is known for bibimbap.", ko: "전주는 비빔밥으로 유명하다.", emoji: "🍲" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 조동사는 <b>can be p.p.</b>, 진행은 <b>is being p.p.</b>, 완료는 <b>has been p.p.</b>. 구동사는 한 덩어리로!",
        pattern: "be + p.p.의 여러 모습",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The rules must ___ followed.", ko: "규칙은 지켜져야 한다.", choices: ["be", "being", "been"], answer: 0, hint: "조동사 뒤에는 be 원형이에요." },
      { type: "choose", q: "The road is ___ repaired now.", ko: "그 도로는 지금 수리되고 있다.", choices: ["being", "been", "be"], answer: 0, hint: "진행 수동태는 be being p.p.예요." },
      { type: "choose", q: "The house has ___ sold.", ko: "그 집은 팔렸다.", choices: ["been", "being", "be"], answer: 0, hint: "완료 수동태는 have been p.p.예요." },
      { type: "choose", q: "The dog was taken care ___ by my brother.", ko: "그 개는 형이 돌봤다.", choices: ["of by", "of"], answer: 1, hint: "take care of가 한 덩어리예요. 뒤에 이미 by가 있어요." },
      { type: "choose", q: "I'm interested ___ science.", ko: "나는 과학에 관심이 있다.", choices: ["in", "by", "with"], answer: 0, hint: "be interested in이에요." },
      { type: "order", words: ["The", "letter", "will", "be", "sent", "tomorrow."], ko: "그 편지는 내일 보내질 것이다." },
    ],
  },
  {
    id: "h-it-to",
    emoji: "🎁",
    title: "It is hard for me to ~",
    subtitle: "가주어 it과 to부정사의 의미상 주어",
    grade: "고1",
    slides: [
      {
        emoji: "🎁",
        say: "to부정사 주어가 길면 앞에 <b>it</b>을 세워 두고 진짜 주어는 뒤로 보내요. 이 it은 '그것'이라고 해석하지 않아요. <b>가주어</b>라고 해요.",
        pattern: "It is + 형용사 + to 동사원형",
        examples: [
          { en: "It is important to sleep well.", ko: "잘 자는 것은 중요하다.", emoji: "😴" },
          { en: "It is not easy to learn a language.", ko: "언어를 배우는 것은 쉽지 않다.", emoji: "🗣️" },
        ],
      },
      {
        emoji: "👤",
        say: "누가 하는지 밝히려면 to 앞에 <b>for + 사람</b>을 넣어요. 이걸 <b>의미상 주어</b>라고 해요.",
        pattern: "It is ___ for 사람 to ___",
        examples: [
          { en: "It is hard for me to wake up early.", ko: "나는 일찍 일어나는 것이 어렵다.", emoji: "⏰" },
          { en: "It is necessary for us to save water.", ko: "우리는 물을 아껴야 한다.", emoji: "💧" },
        ],
      },
      {
        emoji: "💗",
        say: "kind, nice, smart, rude, careless처럼 <b>사람의 성격</b>을 말하는 형용사 뒤에는 for 대신 <b>of + 사람</b>을 써요.",
        pattern: "It is kind / smart / rude of 사람 to ___",
        examples: [
          { en: "It is kind of you to help me.", ko: "나를 도와주다니 너는 친절하구나.", emoji: "🤝" },
          { en: "It was careless of him to lose the key.", ko: "열쇠를 잃어버리다니 그는 부주의했다.", emoji: "🔑" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 진짜 주어는 뒤로 보내고 <b>It</b>. 의미상 주어는 보통 <b>for</b>, 성격 형용사면 <b>of</b>!",
        pattern: "It is ___ for / of 사람 to ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ is fun to travel with friends.", ko: "친구들과 여행하는 것은 재미있다.", choices: ["It", "That", "This"], answer: 0, hint: "가주어는 It이에요." },
      { type: "choose", q: "It is difficult ___ me to speak in public.", ko: "나는 사람들 앞에서 말하는 것이 어렵다.", choices: ["for", "of"], answer: 0, hint: "difficult는 성격이 아니라서 for예요." },
      { type: "choose", q: "It is very nice ___ you to say so.", ko: "그렇게 말해 주다니 너는 참 친절하구나.", choices: ["of", "for"], answer: 0, hint: "nice는 사람의 성격이라 of예요." },
      { type: "choose", q: "It is important ___ exercise every day.", ko: "매일 운동하는 것은 중요하다.", choices: ["to", "for"], answer: 0, hint: "진주어는 to부정사예요." },
      { type: "choose", q: "It was rude ___ him to ignore her.", ko: "그녀를 무시하다니 그는 무례했다.", choices: ["of", "for"], answer: 0, hint: "rude는 성격 형용사예요." },
      { type: "order", words: ["It", "is", "hard", "for", "me", "to", "get", "up."], ko: "나는 일어나는 것이 힘들다." },
    ],
  },
  {
    id: "h-inf-ger",
    emoji: "🔀",
    title: "remember to / remember -ing",
    subtitle: "to부정사와 동명사에 따라 뜻이 바뀌는 동사",
    grade: "고1",
    slides: [
      {
        emoji: "🧭",
        say: "to부정사는 '<b>앞으로 할 일</b>', 동명사는 '<b>이미 한 일</b>'의 느낌이 있어요. 그래서 remember와 forget은 뒤에 무엇이 오느냐에 따라 뜻이 달라져요.",
        pattern: "remember to ___ (할 것을 기억하다) · remember ___ing (한 것을 기억하다)",
        examples: [
          { en: "Remember to lock the door.", ko: "문 잠그는 거 잊지 마.", emoji: "🔒" },
          { en: "I remember meeting her before.", ko: "나는 전에 그녀를 만났던 것을 기억한다.", emoji: "🤝" },
          { en: "Don't forget to bring your lunch.", ko: "점심 가져오는 거 잊지 마.", emoji: "🍱" },
        ],
      },
      {
        emoji: "🛑",
        say: "<b>stop + ing</b>는 '~하던 것을 멈추다', <b>stop + to</b>는 '~하기 위해 (가던 길을) 멈추다'예요.",
        pattern: "stop ___ing (그만두다) · stop to ___ (~하려고 멈추다)",
        examples: [
          { en: "He stopped smoking.", ko: "그는 담배를 끊었다.", emoji: "🚭" },
          { en: "He stopped to take a picture.", ko: "그는 사진을 찍으려고 멈춰 섰다.", emoji: "📷" },
        ],
      },
      {
        emoji: "🧪",
        say: "<b>try to</b>는 '~하려고 애쓰다', <b>try + ing</b>는 '(시험 삼아) ~해 보다'예요. <b>regret to</b>는 '~하게 되어 유감이다', <b>regret + ing</b>는 '~한 것을 후회하다'예요.",
        pattern: "try to · try ___ing · regret to · regret ___ing",
        examples: [
          { en: "I tried to open the window, but it was stuck.", ko: "창문을 열려고 애썼지만 꽉 끼어 있었다.", emoji: "🪟" },
          { en: "Try adding some salt.", ko: "소금을 좀 넣어 봐.", emoji: "🧂" },
          { en: "I regret telling him the secret.", ko: "그에게 비밀을 말한 것을 후회한다.", emoji: "🤐" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>to = 앞으로 할 일</b>, <b>ing = 이미 한 일</b>. remember, forget, stop, try, regret은 뜻이 달라져요!",
        pattern: "to (미래) ↔ -ing (과거·시도)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Remember ___ your homework tomorrow.", ko: "내일 숙제 가져오는 거 기억해.", choices: ["to bring", "bringing"], answer: 0, hint: "앞으로 할 일은 to예요." },
      { type: "choose", q: "I remember ___ this movie as a child.", ko: "어릴 때 이 영화를 봤던 게 기억나.", choices: ["watching", "to watch"], answer: 0, hint: "이미 한 일은 -ing예요." },
      { type: "choose", q: "Please stop ___. I'm trying to sleep.", ko: "그만 좀 떠들어. 자려고 하는 중이야.", choices: ["talking", "to talk"], answer: 0, hint: "하던 걸 멈추면 stop -ing예요." },
      { type: "choose", q: "On the way home, I stopped ___ some milk.", ko: "집에 가는 길에 우유를 사려고 멈췄다.", choices: ["to buy", "buying"], answer: 0, hint: "'~하기 위해 멈추다'는 stop to예요." },
      { type: "choose", q: "I'll never forget ___ the ocean for the first time.", ko: "바다를 처음 봤던 걸 절대 잊지 못할 거야.", choices: ["seeing", "to see"], answer: 0, hint: "이미 한 일은 -ing예요." },
      { type: "order", words: ["Don't", "forget", "to", "call", "me."], ko: "나한테 전화하는 거 잊지 마." },
    ],
  },
  {
    id: "h-rel-comma",
    emoji: "📎",
    title: ", which / , who",
    subtitle: "관계대명사의 계속적 용법",
    grade: "고1",
    slides: [
      {
        emoji: "📎",
        say: "관계대명사 앞에 <b>쉼표(,)</b>가 있으면 앞말을 꾸미는 게 아니라 <b>덧붙여 설명</b>해요. 앞에서부터 '그리고 그 사람은 / 그런데 그것은'처럼 이어서 해석해요.",
        pattern: "명사, who / which ___ (그리고 그 ~는)",
        examples: [
          { en: "I have a brother, who lives in Busan.", ko: "나는 형이 하나 있는데, 그는 부산에 산다.", emoji: "🏙️" },
          { en: "She gave me a book, which was very boring.", ko: "그녀가 내게 책을 줬는데, 그것은 아주 지루했다.", emoji: "📕" },
        ],
      },
      {
        emoji: "🌐",
        say: "<b>, which</b>는 앞의 명사뿐 아니라 <b>앞 문장 전체</b>를 받을 수도 있어요.",
        pattern: "문장, which ___ (그런데 그 일은 ~)",
        examples: [
          { en: "He passed the test, which surprised everyone.", ko: "그는 시험에 합격했는데, 그것은 모두를 놀라게 했다.", emoji: "😲" },
          { en: "It rained all day, which made us stay home.", ko: "하루 종일 비가 왔고, 그 때문에 우리는 집에 있었다.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "🚫",
        say: "계속적 용법에서는 <b>that을 쓸 수 없고</b>, 관계대명사를 생략할 수도 없어요.",
        pattern: ", that (X) · , which / , who (O)",
        examples: [
          { en: "I met Mr. Kim, who is my teacher.", ko: "나는 김 선생님을 만났는데, 그분은 우리 선생님이다.", emoji: "🧑‍🏫" },
          { en: "We visited Seoul, which is the capital of Korea.", ko: "우리는 서울을 방문했는데, 그곳은 한국의 수도이다.", emoji: "🇰🇷" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 쉼표 + <b>who / which</b>는 덧붙여 설명. <b>, which</b>는 앞 문장 전체도 받고, <b>, that</b>은 안 돼요!",
        pattern: ", who / , which = 그리고 그 ~",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have an uncle, ___ is a doctor.", ko: "나는 삼촌이 한 분 있는데, 그분은 의사다.", choices: ["who", "that", "which"], answer: 0, hint: "사람이고 쉼표 뒤라 who예요." },
      { type: "choose", q: "He lost his wallet, ___ made him upset.", ko: "그는 지갑을 잃어버렸는데, 그 일로 속상해했다.", choices: ["which", "that", "what"], answer: 0, hint: "앞 문장 전체를 받는 건 , which예요." },
      { type: "choose", q: "We went to Jeju, ___ is famous for its beaches.", ko: "우리는 제주에 갔는데, 그곳은 해변으로 유명하다.", choices: ["which", "that"], answer: 0, hint: "쉼표 뒤에는 that을 쓸 수 없어요." },
      { type: "choose", q: "She smiled at me, ___ made me happy.", ko: "그녀가 나에게 웃어 주었고, 그것이 나를 행복하게 했다.", choices: ["which", "who"], answer: 0, hint: "앞 문장 내용(웃어 준 일)을 받아요." },
      { type: "choose", q: "My best friend, ___ lives next door, is a singer.", ko: "내 가장 친한 친구는 옆집에 사는데, 가수다.", choices: ["who", "which"], answer: 0, hint: "사람은 who예요." },
      { type: "order", words: ["He", "said", "nothing,", "which", "made", "me", "angry."], ko: "그는 아무 말도 하지 않았고, 그것이 나를 화나게 했다." },
    ],
  },
  {
    id: "h-prep-rel",
    emoji: "🏠",
    title: "the house in which",
    subtitle: "전치사 + 관계대명사",
    grade: "고1",
    slides: [
      {
        emoji: "🏠",
        say: "두 문장을 이을 때 전치사가 딸려 있으면 <b>전치사 + which / whom</b>으로 함께 앞으로 보낼 수 있어요.",
        pattern: "This is the house. + I live in it. → This is the house in which I live.",
        examples: [
          { en: "This is the house in which I was born.", ko: "이곳이 내가 태어난 집이다.", emoji: "👶" },
          { en: "She is the girl with whom I went to the concert.", ko: "그녀가 내가 함께 콘서트에 갔던 소녀다.", emoji: "🎤" },
        ],
      },
      {
        emoji: "↔️",
        say: "전치사를 맨 뒤에 남겨 둘 수도 있어요. 이때는 which, whom, that 모두 되고 생략도 돼요. 하지만 <b>전치사 바로 뒤에는 that을 쓸 수 없어요.</b>",
        pattern: "the house (which) I live in · in which (O) · in that (X)",
        examples: [
          { en: "This is the house I live in.", ko: "이곳이 내가 사는 집이다.", emoji: "🏡" },
          { en: "The topic about which we talked was interesting.", ko: "우리가 이야기한 주제는 흥미로웠다.", emoji: "💬" },
        ],
      },
      {
        emoji: "📍",
        say: "<b>in which</b>, <b>at which</b>처럼 장소나 때를 나타내는 '전치사 + which'는 관계부사 <b>where, when</b>으로 바꿀 수 있어요.",
        pattern: "in which = where · on which = when",
        examples: [
          { en: "This is the park where we first met.", ko: "이곳이 우리가 처음 만난 공원이다.", emoji: "🌳" },
          { en: "I remember the day on which he left.", ko: "나는 그가 떠난 날을 기억한다.", emoji: "📅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 전치사는 <b>which / whom 앞</b>으로 옮기거나 맨 뒤에 둬요. 전치사 바로 뒤에 <b>that은 안 돼요!</b>",
        pattern: "전치사 + which / whom + 주어 + 동사",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "This is the room in ___ I sleep.", ko: "이곳이 내가 자는 방이다.", choices: ["which", "that", "where"], answer: 0, hint: "전치사 뒤에는 which예요." },
      { type: "choose", q: "He is the man with ___ I work.", ko: "그는 내가 함께 일하는 사람이다.", choices: ["whom", "who", "that"], answer: 0, hint: "전치사 뒤에 사람은 whom이에요." },
      { type: "choose", q: "This is the town ___ I grew up.", ko: "이곳이 내가 자란 마을이다.", choices: ["where", "which"], answer: 0, hint: "뒤에 전치사가 없으니 장소의 관계부사 where예요." },
      { type: "choose", q: "The chair ___ you are sitting on is old.", ko: "네가 앉아 있는 의자는 오래되었다.", choices: ["which", "where"], answer: 0, hint: "on이 뒤에 남아 있으니 관계대명사예요." },
      { type: "choose", q: "The music to ___ we listened was beautiful.", ko: "우리가 들은 음악은 아름다웠다.", choices: ["which", "that"], answer: 0, hint: "전치사 바로 뒤에 that은 쓸 수 없어요." },
      { type: "order", words: ["This", "is", "the", "pen", "with", "which", "I", "write."], ko: "이것이 내가 글을 쓰는 펜이다." },
    ],
  },
  {
    id: "h-ever",
    emoji: "♾️",
    title: "whoever, whatever, however",
    subtitle: "복합관계사: 누구든지, 무엇이든지, 아무리 ~해도",
    grade: "고1",
    slides: [
      {
        emoji: "🙋",
        say: "<b>whoever</b>는 '~하는 사람은 누구든지', <b>whatever</b>는 '~하는 것은 무엇이든지'예요. 명사 덩어리를 만들어요.",
        pattern: "whoever ___ · whatever ___",
        examples: [
          { en: "Whoever comes first will get a prize.", ko: "먼저 오는 사람은 누구든지 상을 받을 것이다.", emoji: "🏅" },
          { en: "You can eat whatever you want.", ko: "원하는 것은 무엇이든 먹어도 돼.", emoji: "🍽️" },
        ],
      },
      {
        emoji: "🕰️",
        say: "<b>whenever</b>는 '~할 때마다 / 언제든지', <b>wherever</b>는 '~하는 곳 어디든지'예요.",
        pattern: "whenever ___ · wherever ___",
        examples: [
          { en: "Call me whenever you need help.", ko: "도움이 필요할 때는 언제든지 전화해.", emoji: "📞" },
          { en: "My dog follows me wherever I go.", ko: "내 개는 내가 가는 곳 어디든지 따라온다.", emoji: "🐕" },
        ],
      },
      {
        emoji: "💪",
        say: "'아무리 ~해도'라는 양보의 뜻도 있어요. <b>however + 형용사 / 부사 + 주어 + 동사</b>는 '아무리 ~해도'예요. <b>no matter how</b>와 같아요.",
        pattern: "However ___ 주어 + 동사 = No matter how ___",
        examples: [
          { en: "However hard I try, I can't sing well.", ko: "아무리 열심히 해도 나는 노래를 잘 못한다.", emoji: "🎤" },
          { en: "Whatever happens, I'll be on your side.", ko: "무슨 일이 일어나도 나는 네 편이야.", emoji: "🤝" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>-ever</b>가 붙으면 '<b>~든지</b>' 또는 '<b>아무리 ~해도</b>'예요. however 뒤에는 형용사·부사가 바로 와요!",
        pattern: "whoever · whatever · whenever · wherever · however",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ wants to join is welcome.", ko: "함께하고 싶은 사람은 누구든지 환영이다.", choices: ["Whoever", "Whatever", "However"], answer: 0, hint: "'누구든지'는 whoever예요." },
      { type: "choose", q: "I'll believe ___ you say.", ko: "네가 하는 말은 무엇이든 믿을게.", choices: ["whatever", "whoever"], answer: 0, hint: "'무엇이든지'는 whatever예요." },
      { type: "choose", q: "___ I see him, he is smiling.", ko: "내가 그를 볼 때마다 그는 웃고 있다.", choices: ["Whenever", "Wherever"], answer: 0, hint: "'~할 때마다'는 whenever예요." },
      { type: "choose", q: "However ___ you are, you must finish this.", ko: "아무리 피곤해도 이건 끝내야 해.", choices: ["tired", "tiredly", "you tired"], answer: 0, hint: "however 바로 뒤에 형용사가 와요." },
      { type: "choose", q: "Sit ___ you like.", ko: "원하는 곳 어디든 앉아.", choices: ["wherever", "whoever"], answer: 0, hint: "'어디든지'는 wherever예요." },
      { type: "order", words: ["Whatever", "happens,", "don't", "give", "up."], ko: "무슨 일이 있어도 포기하지 마." },
    ],
  },

  // ── 고2 ──
  {
    id: "h-if-pp",
    emoji: "🕰️",
    title: "If I had known, I would have ~",
    subtitle: "가정법 과거완료: 과거 사실과 반대되는 가정",
    grade: "고2",
    slides: [
      {
        emoji: "🕰️",
        say: "가정법 과거는 '지금' 사실과 반대였죠. <b>과거</b>에 실제로 일어난 일과 반대로 상상할 때는 <b>If + had p.p., would have p.p.</b>를 써요. '(그때) ~했다면, ~했을 텐데'라는 뜻이에요.",
        pattern: "If 주어 + had p.p., 주어 + would / could have p.p.",
        examples: [
          { en: "If I had known, I would have helped you.", ko: "내가 알았더라면 너를 도와줬을 텐데.", emoji: "🤝" },
          { en: "If she had studied, she could have passed.", ko: "그녀가 공부했더라면 합격할 수 있었을 텐데.", emoji: "📝" },
        ],
      },
      {
        emoji: "🔁",
        say: "실제 사실로 바꾸면 <b>긍정과 부정이 뒤집히고 시제는 과거</b>예요.",
        pattern: "If I had had time, I would have gone. → I didn't have time, so I didn't go.",
        examples: [
          { en: "If it hadn't rained, we would have gone camping.", ko: "비가 오지 않았더라면 우리는 캠핑을 갔을 텐데.", emoji: "⛺" },
          { en: "→ It rained, so we didn't go camping.", ko: "→ 비가 와서 우리는 캠핑을 가지 않았다.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "⚖️",
        say: "가정법 과거와 비교해 봐요. <b>If I were</b> → 지금 반대, <b>If I had been</b> → 그때 반대!",
        pattern: "If + 과거 → would + 원형 (지금) · If + had p.p. → would have p.p. (그때)",
        examples: [
          { en: "If I were rich, I would buy it.", ko: "내가 부자라면 그것을 살 텐데. (지금)", emoji: "💰" },
          { en: "If I had been rich, I would have bought it.", ko: "내가 부자였다면 그것을 샀을 텐데. (그때)", emoji: "🛍️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 과거 사실과 반대로 상상할 때는 <b>If + had p.p., would have p.p.</b>!",
        pattern: "If had p.p., would have p.p.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "If I ___ the answer, I would have told you.", ko: "내가 답을 알았더라면 너에게 말해 줬을 텐데.", choices: ["had known", "knew", "have known"], answer: 0, hint: "과거 사실 반대는 If + had p.p.예요." },
      { type: "choose", q: "If he had left earlier, he would ___ the train.", ko: "그가 더 일찍 떠났더라면 기차를 탔을 텐데.", choices: ["have caught", "catch", "caught"], answer: 0, hint: "would 뒤에 have p.p.예요." },
      { type: "choose", q: "If you had asked me, I ___ have said yes.", ko: "네가 물어봤더라면 나는 좋다고 했을 텐데.", choices: ["would", "will"], answer: 0, hint: "가정법은 would예요." },
      { type: "choose", q: "If it ___ so cold, we would have gone out.", ko: "그렇게 춥지 않았더라면 우리는 나갔을 텐데.", choices: ["hadn't been", "wasn't", "isn't"], answer: 0, hint: "과거 사실 반대예요." },
      { type: "choose", q: "If I were you, I ___ tell her the truth.", ko: "내가 너라면 그녀에게 사실대로 말할 거야.", choices: ["would", "would have"], answer: 0, hint: "If I were는 지금에 대한 가정이라 would + 원형이에요." },
      { type: "order", words: ["If", "I", "had", "known,", "I", "would", "have", "come."], ko: "내가 알았더라면 왔을 텐데." },
    ],
  },
  {
    id: "h-mixed-if",
    emoji: "🔀",
    title: "If I had ~, I would be ~ now",
    subtitle: "혼합 가정법: 과거의 일이 지금에 영향을 줄 때",
    grade: "고2",
    slides: [
      {
        emoji: "🔀",
        say: "<b>과거</b>에 어떤 일을 했다면 <b>지금</b> 달라져 있을 거라고 말할 때는 두 가정법을 섞어요. 앞은 <b>had p.p.</b>, 뒤는 <b>would + 동사원형</b>이에요.",
        pattern: "If 주어 + had p.p. (그때), 주어 + would + 원형 (now)",
        examples: [
          { en: "If I had slept well, I wouldn't be tired now.", ko: "내가 (어젯밤) 잘 잤더라면 지금 피곤하지 않을 텐데.", emoji: "😴" },
          { en: "If she had taken the medicine, she would feel better now.", ko: "그녀가 (그때) 약을 먹었더라면 지금 나을 텐데.", emoji: "💊" },
        ],
      },
      {
        emoji: "🔑",
        say: "뒤 문장에 <b>now, today</b> 같은 말이 있으면 혼합 가정법일 가능성이 커요.",
        pattern: "If ___ had p.p., ___ would ___ now / today.",
        examples: [
          { en: "If I had saved money, I could buy a laptop now.", ko: "내가 돈을 모았더라면 지금 노트북을 살 수 있을 텐데.", emoji: "💻" },
          { en: "→ I didn't save money, so I can't buy a laptop now.", ko: "→ 돈을 안 모아서 지금 노트북을 못 산다.", emoji: "💸" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 그때(had p.p.) 했다면 지금(would + 원형)! <b>now</b>를 보면 혼합 가정법을 떠올려요.",
        pattern: "If had p.p., would + 원형 + now",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "If I had eaten breakfast, I ___ hungry now.", ko: "아침을 먹었더라면 지금 배고프지 않을 텐데.", choices: ["wouldn't be", "wouldn't have been"], answer: 0, hint: "now가 있으니 would + 원형이에요." },
      { type: "choose", q: "If he ___ harder, he would be a doctor now.", ko: "그가 더 열심히 공부했더라면 지금 의사일 텐데.", choices: ["had studied", "studied", "studies"], answer: 0, hint: "과거 일은 had p.p.예요." },
      { type: "choose", q: "If we had taken a taxi, we ___ be there now.", ko: "택시를 탔더라면 지금 거기 있을 텐데.", choices: ["would", "will"], answer: 0, hint: "가정법은 would예요." },
      { type: "choose", q: "If I had brought my umbrella, I ___ wet now.", ko: "우산을 가져왔더라면 지금 젖어 있지 않을 텐데.", choices: ["wouldn't be", "won't be"], answer: 0, hint: "지금 사실의 반대예요." },
      { type: "choose", q: "If you had listened, you ___ know the answer now.", ko: "네가 들었더라면 지금 답을 알 텐데.", choices: ["would", "would have"], answer: 0, hint: "now가 있으니 would + 원형이에요." },
      { type: "order", words: ["If", "I", "had", "slept,", "I", "wouldn't", "be", "tired", "now."], ko: "잤더라면 지금 피곤하지 않을 텐데." },
    ],
  },
  {
    id: "h-wish-asif",
    emoji: "🌠",
    title: "I wish ~, as if ~",
    subtitle: "I wish 가정법과 as if 가정법",
    grade: "고2",
    slides: [
      {
        emoji: "🌠",
        say: "<b>I wish + 과거형</b>은 '(지금) ~라면 좋을 텐데', <b>I wish + had p.p.</b>는 '(그때) ~했더라면 좋았을 텐데'예요. 이룰 수 없는 소망이에요.",
        pattern: "I wish + 과거 (지금) · I wish + had p.p. (그때)",
        examples: [
          { en: "I wish I could fly.", ko: "내가 날 수 있으면 좋을 텐데.", emoji: "🕊️" },
          { en: "I wish I were taller.", ko: "내가 키가 더 크면 좋을 텐데.", emoji: "📏" },
          { en: "I wish I had studied harder.", ko: "내가 더 열심히 공부했더라면 좋았을 텐데.", emoji: "📚" },
        ],
      },
      {
        emoji: "🎭",
        say: "<b>as if + 과거형</b>은 '마치 ~인 것처럼', <b>as if + had p.p.</b>는 '마치 ~했던 것처럼'이에요. 사실은 그렇지 않을 때 써요.",
        pattern: "as if + 과거 · as if + had p.p.",
        examples: [
          { en: "He talks as if he knew everything.", ko: "그는 마치 모든 것을 아는 것처럼 말한다.", emoji: "🧐" },
          { en: "She looks as if she had seen a ghost.", ko: "그녀는 마치 유령을 본 것 같은 표정이다.", emoji: "👻" },
        ],
      },
      {
        emoji: "🔁",
        say: "실제 사실로 바꾸면 긍정·부정이 바뀌어요. <b>I wish I were rich</b> = I'm sorry I'm not rich.",
        pattern: "I wish I had a dog. = I'm sorry I don't have a dog.",
        examples: [
          { en: "I wish I had a sister.", ko: "나에게 여동생이 있으면 좋을 텐데.", emoji: "👧" },
          { en: "→ I'm sorry I don't have a sister.", ko: "→ 여동생이 없어서 아쉽다.", emoji: "😢" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>I wish</b>와 <b>as if</b> 뒤에 과거형이면 지금, <b>had p.p.</b>면 그때의 반대예요!",
        pattern: "I wish / as if + 과거 / had p.p.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I wish I ___ a car.", ko: "나에게 차가 있으면 좋을 텐데.", choices: ["had", "have", "will have"], answer: 0, hint: "지금 이룰 수 없는 소망은 과거형이에요." },
      { type: "choose", q: "I wish I ___ to the party last night.", ko: "어젯밤 파티에 갔더라면 좋았을 텐데.", choices: ["had gone", "went", "go"], answer: 0, hint: "지난 일에 대한 소망은 had p.p.예요." },
      { type: "choose", q: "He acts as if he ___ the boss.", ko: "그는 마치 자기가 사장인 것처럼 행동한다.", choices: ["were", "is being", "be"], answer: 0, hint: "as if + 과거형(were)이에요." },
      { type: "choose", q: "She talks as if she ___ there before.", ko: "그녀는 마치 전에 거기 가 봤던 것처럼 말한다.", choices: ["had been", "is"], answer: 0, hint: "과거 일은 as if + had p.p.예요." },
      { type: "choose", q: "I wish I ___ speak French.", ko: "내가 프랑스어를 할 수 있으면 좋을 텐데.", choices: ["could", "can"], answer: 0, hint: "can의 과거형 could예요." },
      { type: "order", words: ["I", "wish", "I", "were", "a", "bird."], ko: "내가 새라면 좋을 텐데." },
    ],
  },
  {
    id: "h-without",
    emoji: "🫗",
    title: "Without ~, Had I known ~",
    subtitle: "if 없는 가정법: without, but for, 도치",
    grade: "고2",
    slides: [
      {
        emoji: "🫗",
        say: "<b>Without ~</b>이나 <b>But for ~</b>는 '<b>~이 없다면 / 없었다면</b>'이에요. 뒤 문장이 would + 원형이면 지금, would have p.p.면 그때예요.",
        pattern: "Without ___, 주어 would ___ = If it were not for ___",
        examples: [
          { en: "Without water, we couldn't live.", ko: "물이 없다면 우리는 살 수 없을 것이다.", emoji: "💧" },
          { en: "Without your help, I would have failed.", ko: "네 도움이 없었다면 나는 실패했을 것이다.", emoji: "🤝" },
        ],
      },
      {
        emoji: "🔄",
        say: "같은 뜻을 <b>If it were not for</b>(지금)와 <b>If it had not been for</b>(그때)로도 써요.",
        pattern: "If it were not for ___ · If it had not been for ___",
        examples: [
          { en: "If it were not for the sun, nothing could grow.", ko: "태양이 없다면 아무것도 자랄 수 없을 것이다.", emoji: "☀️" },
          { en: "If it had not been for the map, we would have gotten lost.", ko: "지도가 없었다면 우리는 길을 잃었을 것이다.", emoji: "🗺️" },
        ],
      },
      {
        emoji: "🔃",
        say: "가정법에서 <b>if를 빼고</b> were, had, should를 <b>맨 앞</b>으로 보낼 수 있어요. 글에서 자주 나와요.",
        pattern: "If I had known → Had I known · If I were → Were I",
        examples: [
          { en: "Had I known the truth, I would have told you.", ko: "내가 진실을 알았더라면 너에게 말했을 텐데.", emoji: "🔍" },
          { en: "Were I you, I would accept the offer.", ko: "내가 너라면 그 제안을 받아들일 거야.", emoji: "🤔" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>Without / But for</b> = ~이 없다면. if를 빼면 <b>Had I ~ / Were I ~</b>처럼 순서가 바뀌어요!",
        pattern: "Without ___ · If it were not for ___ · Had I p.p.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ music, life would be boring.", ko: "음악이 없다면 삶은 지루할 것이다.", choices: ["Without", "With", "Unless"], answer: 0, hint: "'~이 없다면'은 Without이에요." },
      { type: "choose", q: "If it ___ not for your advice, I would give up.", ko: "네 조언이 없다면 나는 포기할 거야.", choices: ["were", "is", "had"], answer: 0, hint: "지금 가정은 If it were not for예요." },
      { type: "choose", q: "___ I known, I would have come.", ko: "내가 알았더라면 왔을 텐데.", choices: ["Had", "If", "Have"], answer: 0, hint: "If I had known에서 if를 빼고 Had를 앞으로!" },
      { type: "choose", q: "Without his help, we ___ have finished.", ko: "그의 도움이 없었다면 우리는 끝내지 못했을 것이다.", choices: ["couldn't", "can't"], answer: 0, hint: "가정법이니 couldn't have p.p.예요." },
      { type: "choose", q: "But ___ the rain, we would have won.", ko: "비만 아니었다면 우리가 이겼을 것이다.", choices: ["for", "without"], answer: 0, hint: "But for = Without이에요." },
      { type: "order", words: ["Without", "you,", "I", "would", "be", "lonely."], ko: "네가 없다면 나는 외로울 거야." },
    ],
  },
  {
    id: "h-inversion",
    emoji: "🙃",
    title: "Never have I ~",
    subtitle: "부정어 도치: 강조하려고 순서를 바꾸기",
    grade: "고2",
    slides: [
      {
        emoji: "🙃",
        say: "<b>never, rarely, little, hardly</b> 같은 부정어를 강조하려고 문장 맨 앞에 두면, 뒤는 <b>의문문 순서</b>(조동사 + 주어)로 바뀌어요. 이것을 <b>도치</b>라고 해요.",
        pattern: "Never + 조동사 + 주어 + 동사",
        examples: [
          { en: "Never have I seen such a big dog.", ko: "나는 그렇게 큰 개를 본 적이 없다.", emoji: "🐕" },
          { en: "Rarely does he eat breakfast.", ko: "그는 아침을 거의 먹지 않는다.", emoji: "🍳" },
        ],
      },
      {
        emoji: "🔧",
        say: "일반동사 문장은 <b>do / does / did</b>를 꺼내 앞에 써요. 동사는 원형으로 돌아가요.",
        pattern: "I little knew → Little did I know",
        examples: [
          { en: "Little did I know that he was a famous actor.", ko: "그가 유명한 배우라는 것을 나는 전혀 몰랐다.", emoji: "🎬" },
          { en: "Not only did she sing, but she also danced.", ko: "그녀는 노래했을 뿐만 아니라 춤도 췄다.", emoji: "💃" },
        ],
      },
      {
        emoji: "⏱️",
        say: "<b>Only + 때·방법</b>이 맨 앞에 와도 도치돼요. 또 '나도 그래'라는 <b>So do I / Neither do I</b>도 도치 표현이에요.",
        pattern: "Only then did ___ · So + 동사 + 주어 · Neither + 동사 + 주어",
        examples: [
          { en: "Only then did I understand her words.", ko: "그제서야 나는 그녀의 말을 이해했다.", emoji: "💡" },
          { en: "I love pizza. — So do I.", ko: "나 피자 좋아해. — 나도.", emoji: "🍕" },
          { en: "I can't swim. — Neither can I.", ko: "나 수영 못 해. — 나도 못 해.", emoji: "🏊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 부정어나 Only ~가 맨 앞이면 <b>조동사 + 주어</b> 순서. 일반동사는 <b>do / does / did</b>를 꺼내요!",
        pattern: "Never / Little / Rarely / Only ~ + 조동사 + 주어",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Never ___ I been so happy.", ko: "나는 이렇게 행복했던 적이 없다.", choices: ["have", "I have", "had I"], answer: 0, hint: "Never + 조동사 + 주어 순서예요." },
      { type: "choose", q: "Little ___ he know about the surprise party.", ko: "그는 깜짝 파티에 대해 전혀 몰랐다.", choices: ["did", "does he", "he did"], answer: 0, hint: "일반동사 과거는 did를 꺼내요." },
      { type: "choose", q: "Rarely ___ she complain.", ko: "그녀는 좀처럼 불평하지 않는다.", choices: ["does", "she does", "do"], answer: 0, hint: "she 현재는 does예요." },
      { type: "choose", q: "I'm hungry. — So ___ I.", ko: "나 배고파. — 나도.", choices: ["am", "do", "is"], answer: 0, hint: "be동사 문장이라 So am I예요." },
      { type: "choose", q: "Only after the test ___ I realize my mistake.", ko: "시험이 끝난 뒤에야 나는 실수를 깨달았다.", choices: ["did", "I did"], answer: 0, hint: "Only ~ 뒤는 도치돼요." },
      { type: "order", words: ["Never", "have", "I", "seen", "the", "sea."], ko: "나는 바다를 본 적이 없다." },
    ],
  },
  {
    id: "h-emphasis",
    emoji: "📢",
    title: "It is ~ that ...",
    subtitle: "강조 구문과 do 강조",
    grade: "고2",
    slides: [
      {
        emoji: "🔦",
        say: "문장의 한 부분을 콕 집어 강조할 때는 <b>It is / was ___ that ...</b> 사이에 넣어요. '…한 것은 바로 ___이다'라고 해석해요.",
        pattern: "It was ___ that ...",
        examples: [
          { en: "Tom broke the window yesterday.", ko: "Tom이 어제 창문을 깼다.", emoji: "🪟" },
          { en: "It was Tom that broke the window yesterday.", ko: "어제 창문을 깬 것은 바로 Tom이었다.", emoji: "👦" },
          { en: "It was yesterday that Tom broke the window.", ko: "Tom이 창문을 깬 것은 바로 어제였다.", emoji: "📅" },
        ],
      },
      {
        emoji: "🔀",
        say: "가주어 it과 헷갈리면 <b>It is와 that을 지워 봐요</b>. 남은 말로 완전한 문장이 되면 강조 구문이에요.",
        pattern: "It is (you) that I love. → I love you. ✔",
        examples: [
          { en: "It is my mom that I respect most.", ko: "내가 가장 존경하는 사람은 바로 엄마다.", emoji: "👩" },
          { en: "It was in Paris that they met.", ko: "그들이 만난 곳은 바로 파리였다.", emoji: "🗼" },
        ],
      },
      {
        emoji: "💥",
        say: "동사를 강조하려면 동사 앞에 <b>do / does / did</b>를 넣어요. '정말 ~하다'라는 뜻이고 동사는 원형이에요.",
        pattern: "I do like it. · She does know. · He did come.",
        examples: [
          { en: "I do love you.", ko: "나는 너를 정말 사랑해.", emoji: "❤️" },
          { en: "He did finish his homework.", ko: "그는 정말로 숙제를 끝냈다.", emoji: "✅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 한 부분 강조는 <b>It is ___ that</b>, 동사 강조는 <b>do / does / did + 원형</b>!",
        pattern: "It is ___ that ... · do + 동사원형",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "It was my brother ___ ate the cake.", ko: "케이크를 먹은 것은 바로 내 동생이었다.", choices: ["that", "what", "which"], answer: 0, hint: "It was ___ that 강조 구문이에요." },
      { type: "choose", q: "___ was in 2010 that I moved here.", ko: "내가 여기로 이사 온 것은 바로 2010년이었다.", choices: ["It", "This", "There"], answer: 0, hint: "강조 구문은 It으로 시작해요." },
      { type: "choose", q: "She ___ look happy today.", ko: "그녀는 오늘 정말 행복해 보인다.", choices: ["does", "do", "is"], answer: 0, hint: "She의 동사 강조는 does예요." },
      { type: "choose", q: "I did ___ the door.", ko: "나는 정말로 문을 잠갔어.", choices: ["lock", "locked"], answer: 0, hint: "did 뒤에는 동사원형이에요." },
      { type: "choose", q: "It is you ___ I want to see.", ko: "내가 보고 싶은 사람은 바로 너야.", choices: ["that", "what"], answer: 0, hint: "It is ___ that이에요." },
      { type: "order", words: ["It", "was", "Mina", "that", "won", "the", "race."], ko: "경주에서 이긴 것은 바로 미나였다." },
    ],
  },
  {
    id: "h-the-more",
    emoji: "📈",
    title: "The more ~, the better",
    subtitle: "비교 구문 심화",
    grade: "고2",
    slides: [
      {
        emoji: "📈",
        say: "<b>The 비교급 ~, the 비교급 …</b>은 '<b>~하면 할수록 더 …하다</b>'예요.",
        pattern: "The 비교급 + 주어 + 동사, the 비교급 + 주어 + 동사",
        examples: [
          { en: "The more you practice, the better you get.", ko: "연습하면 할수록 더 잘하게 된다.", emoji: "🎹" },
          { en: "The older he gets, the wiser he becomes.", ko: "그는 나이가 들수록 더 현명해진다.", emoji: "🧓" },
          { en: "The sooner, the better.", ko: "빠르면 빠를수록 좋다.", emoji: "⚡" },
        ],
      },
      {
        emoji: "🔼",
        say: "<b>비교급 and 비교급</b>은 '<b>점점 더 ~한</b>'이에요. more가 붙는 말은 more and more ___로 써요.",
        pattern: "bigger and bigger · more and more ___",
        examples: [
          { en: "It is getting colder and colder.", ko: "날씨가 점점 더 추워지고 있다.", emoji: "🥶" },
          { en: "English is becoming more and more important.", ko: "영어는 점점 더 중요해지고 있다.", emoji: "🌐" },
        ],
      },
      {
        emoji: "✖️",
        say: "몇 배인지 말할 때는 <b>twice / three times + as ~ as</b>예요. 비교급을 강조할 때는 very가 아니라 <b>much, even, far, still, a lot</b>을 써요.",
        pattern: "three times as big as · much bigger",
        examples: [
          { en: "This room is twice as big as mine.", ko: "이 방은 내 방보다 두 배 크다.", emoji: "🏠" },
          { en: "She is much taller than me.", ko: "그녀는 나보다 훨씬 키가 크다.", emoji: "📏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>The 비교급, the 비교급</b> = ~할수록 더. <b>비교급 and 비교급</b> = 점점 더. 비교급 강조는 <b>much</b>!",
        pattern: "The more, the better · more and more · much + 비교급",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The more you read, the ___ you learn.", ko: "많이 읽을수록 더 많이 배운다.", choices: ["more", "most", "much"], answer: 0, hint: "The 비교급, the 비교급이에요." },
      { type: "choose", q: "The ___ you get up, the more time you have.", ko: "일찍 일어날수록 시간이 더 많다.", choices: ["earlier", "early", "earliest"], answer: 0, hint: "The 뒤에 비교급이 와요." },
      { type: "choose", q: "The balloon got ___ and bigger.", ko: "풍선이 점점 더 커졌다.", choices: ["bigger", "big", "biggest"], answer: 0, hint: "비교급 and 비교급이에요." },
      { type: "choose", q: "My bag is three times as heavy ___ yours.", ko: "내 가방은 네 것보다 세 배 무겁다.", choices: ["as", "than"], answer: 0, hint: "배수 + as ~ as예요." },
      { type: "choose", q: "This movie is ___ better than that one.", ko: "이 영화가 저것보다 훨씬 낫다.", choices: ["much", "very"], answer: 0, hint: "비교급 강조는 much예요." },
      { type: "order", words: ["The", "harder", "you", "try,", "the", "better", "you", "do."], ko: "열심히 노력할수록 더 잘하게 된다." },
    ],
  },
  {
    id: "h-parallel",
    emoji: "🟰",
    title: "not only A but also B",
    subtitle: "상관접속사와 병렬 구조",
    grade: "고2",
    slides: [
      {
        emoji: "🔗",
        say: "두 말이 짝을 이루는 접속사가 있어요. <b>both A and B</b>(A와 B 둘 다), <b>either A or B</b>(A나 B 중 하나), <b>neither A nor B</b>(A도 B도 아닌), <b>not A but B</b>(A가 아니라 B)예요.",
        pattern: "both A and B · either A or B · neither A nor B · not A but B",
        examples: [
          { en: "Both my mom and my dad are teachers.", ko: "엄마와 아빠 둘 다 선생님이다.", emoji: "🧑‍🏫" },
          { en: "You can either stay or leave.", ko: "너는 머물거나 떠날 수 있다.", emoji: "🚪" },
          { en: "He is neither rich nor famous.", ko: "그는 부자도 유명하지도 않다.", emoji: "🙂" },
        ],
      },
      {
        emoji: "➕",
        say: "<b>not only A but also B</b>는 'A뿐만 아니라 B도'예요. <b>B as well as A</b>와 같은 뜻이에요. 동사는 <b>B에 맞춰요</b>.",
        pattern: "not only A but also B = B as well as A",
        examples: [
          { en: "She is not only smart but also kind.", ko: "그녀는 똑똑할 뿐만 아니라 친절하다.", emoji: "😊" },
          { en: "Not only I but also my sister likes cats.", ko: "나뿐만 아니라 내 여동생도 고양이를 좋아한다.", emoji: "🐱" },
        ],
      },
      {
        emoji: "🟰",
        say: "and, or, but으로 연결되는 말은 <b>같은 모양</b>이어야 해요. 이것을 <b>병렬 구조</b>라고 해요. 동사ing면 동사ing끼리, to부정사면 to부정사끼리!",
        pattern: "I like reading, swimming, and cooking.",
        examples: [
          { en: "I like to read and to write.", ko: "나는 읽고 쓰는 것을 좋아한다.", emoji: "✍️" },
          { en: "He came in, sat down, and opened the book.", ko: "그는 들어와서 앉고 책을 펼쳤다.", emoji: "📖" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 짝꿍 접속사 <b>both-and, either-or, neither-nor, not only-but also</b>. 연결되는 말은 <b>같은 모양</b>으로!",
        pattern: "A와 B는 같은 모양 (병렬)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Both Jane ___ Tom are my friends.", ko: "Jane과 Tom 둘 다 내 친구다.", choices: ["and", "or", "nor"], answer: 0, hint: "both A and B예요." },
      { type: "choose", q: "Neither he ___ I was there.", ko: "그도 나도 거기 없었다.", choices: ["nor", "or", "and"], answer: 0, hint: "neither A nor B예요." },
      { type: "choose", q: "She speaks not only English ___ also Chinese.", ko: "그녀는 영어뿐 아니라 중국어도 한다.", choices: ["but", "and"], answer: 0, hint: "not only A but also B예요." },
      { type: "choose", q: "Not only you but also he ___ wrong.", ko: "너뿐만 아니라 그도 틀렸다.", choices: ["is", "are"], answer: 0, hint: "동사는 B(he)에 맞춰요." },
      { type: "choose", q: "I enjoy hiking, fishing, and ___.", ko: "나는 등산, 낚시, 캠핑을 즐긴다.", choices: ["camping", "to camp", "camp"], answer: 0, hint: "앞의 -ing와 같은 모양이어야 해요." },
      { type: "order", words: ["You", "can", "either", "walk", "or", "take", "a", "bus."], ko: "너는 걸어가거나 버스를 탈 수 있다." },
    ],
  },

  // ── 고3 ──
  {
    id: "h-participle-adv",
    emoji: "🎬",
    title: "Having finished ~, With ~ing",
    subtitle: "분사구문 심화: 완료·수동·독립·with",
    grade: "고3",
    slides: [
      {
        emoji: "⏮️",
        say: "분사구문의 일이 주절보다 <b>먼저</b> 일어났으면 <b>Having p.p.</b>를 써요.",
        pattern: "After I had finished ~ → Having finished ~",
        examples: [
          { en: "Having finished my homework, I went out.", ko: "숙제를 끝낸 뒤 나는 밖에 나갔다.", emoji: "✅" },
          { en: "Having lived in Japan, she speaks Japanese well.", ko: "일본에 살았었기 때문에 그녀는 일본어를 잘한다.", emoji: "🗾" },
        ],
      },
      {
        emoji: "📦",
        say: "수동의 뜻이면 <b>(Being) p.p.</b>로 시작해요. Being은 보통 생략해서 <b>p.p.로 시작</b>해요.",
        pattern: "As it was written in English → (Being) Written in English",
        examples: [
          { en: "Written in easy English, the book is popular.", ko: "쉬운 영어로 쓰여 있어서 그 책은 인기가 있다.", emoji: "📘" },
          { en: "Seen from the sky, the island looks like a heart.", ko: "하늘에서 보면 그 섬은 하트처럼 보인다.", emoji: "💗" },
        ],
      },
      {
        emoji: "🌤️",
        say: "부사절과 주절의 주어가 다르면 <b>주어를 남겨 둬요</b>. 이것을 <b>독립분사구문</b>이라고 해요.",
        pattern: "As the weather was fine → The weather being fine",
        examples: [
          { en: "The weather being fine, we went on a picnic.", ko: "날씨가 좋아서 우리는 소풍을 갔다.", emoji: "🧺" },
          { en: "Generally speaking, boys are taller than girls.", ko: "일반적으로 말해서 남자아이들이 여자아이들보다 키가 크다.", emoji: "🗣️" },
        ],
      },
      {
        emoji: "🤲",
        say: "<b>with + 명사 + 분사</b>는 '<b>~가 …한 채로</b>'예요. 명사가 스스로 하면 -ing, 당하면 p.p.예요.",
        pattern: "with + 명사 + -ing / p.p.",
        examples: [
          { en: "He listened with his eyes closed.", ko: "그는 눈을 감은 채로 들었다.", emoji: "😌" },
          { en: "She ran with her dog following her.", ko: "그녀는 개가 뒤따르는 채로 달렸다.", emoji: "🐕" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 먼저 일어난 일은 <b>Having p.p.</b>, 수동은 <b>p.p.</b>로 시작, 주어가 다르면 <b>주어를 남기고</b>, '~한 채로'는 <b>with + 명사 + 분사</b>!",
        pattern: "Having p.p. · p.p. ~ · 주어 + -ing · with + 명사 + 분사",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ dinner, we watched a movie.", ko: "저녁을 먹은 뒤 우리는 영화를 봤다.", choices: ["Having eaten", "Eaten", "Having been eaten"], answer: 0, hint: "먼저 한 일이고 능동이에요." },
      { type: "choose", q: "___ by many people, the song became a hit.", ko: "많은 사람들에게 사랑받아서 그 노래는 히트했다.", choices: ["Loved", "Loving"], answer: 0, hint: "노래는 사랑을 받는 거라 p.p.예요." },
      { type: "choose", q: "It ___ cold, we stayed inside.", ko: "날씨가 추워서 우리는 안에 있었다.", choices: ["being", "was being", "been"], answer: 0, hint: "주어(It)를 남긴 독립분사구문이에요." },
      { type: "choose", q: "He sat with his arms ___.", ko: "그는 팔짱을 낀 채로 앉아 있었다.", choices: ["folded", "folding"], answer: 0, hint: "팔은 접히는 거라 p.p.예요." },
      { type: "choose", q: "She was reading with music ___.", ko: "그녀는 음악을 틀어 놓은 채로 책을 읽고 있었다.", choices: ["playing", "played"], answer: 0, hint: "음악이 스스로 연주되는(흘러나오는) 것이라 -ing예요." },
      { type: "order", words: ["Having", "finished", "the", "test,", "he", "left."], ko: "시험을 끝낸 뒤 그는 떠났다." },
    ],
  },
  {
    id: "h-perfect-inf",
    emoji: "🧭",
    title: "seem to have p.p.",
    subtitle: "완료부정사·완료동명사: 한 시점 앞선 일",
    grade: "고3",
    slides: [
      {
        emoji: "🧭",
        say: "<b>to + 동사원형</b>은 본동사와 같은 때, <b>to have p.p.</b>는 본동사보다 <b>앞선 때</b>의 일이에요.",
        pattern: "seem to ___ (지금 ~인 것 같다) · seem to have p.p. (전에 ~했던 것 같다)",
        examples: [
          { en: "He seems to be sick.", ko: "그는 (지금) 아픈 것 같다.", emoji: "🤒" },
          { en: "He seems to have been sick.", ko: "그는 (전에) 아팠던 것 같다.", emoji: "🛌" },
        ],
      },
      {
        emoji: "🔁",
        say: "It seems that ~ 문장으로 바꿔 보면 시제 차이가 잘 보여요.",
        pattern: "She seems to have lost weight. = It seems that she lost (has lost) weight.",
        examples: [
          { en: "She seems to have lost weight.", ko: "그녀는 살이 빠진 것 같다.", emoji: "⚖️" },
          { en: "It seems that she has lost weight.", ko: "그녀는 살이 빠진 것 같다.", emoji: "🥗" },
        ],
      },
      {
        emoji: "⏮️",
        say: "동명사도 같아요. <b>having p.p.</b>는 본동사보다 먼저 한 일이에요.",
        pattern: "I'm proud of having won. (이긴 것이 먼저)",
        examples: [
          { en: "He is proud of having won the prize.", ko: "그는 그 상을 탔던 것을 자랑스러워한다.", emoji: "🏆" },
          { en: "She denied having taken the money.", ko: "그녀는 그 돈을 가져간 것을 부인했다.", emoji: "💵" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 본동사보다 <b>앞선 일</b>은 <b>to have p.p.</b>, <b>having p.p.</b>!",
        pattern: "to have p.p. · having p.p. = 한 시점 앞",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "He seems ___ a lot yesterday.", ko: "그는 어제 많이 운 것 같다.", choices: ["to have cried", "to cry"], answer: 0, hint: "어제 일이라 to have p.p.예요." },
      { type: "choose", q: "She seems ___ happy now.", ko: "그녀는 지금 행복한 것 같다.", choices: ["to be", "to have been"], answer: 0, hint: "지금 상태는 to + 원형이에요." },
      { type: "choose", q: "The car seems to have ___ repaired.", ko: "그 차는 수리된 것 같다.", choices: ["been", "being"], answer: 0, hint: "to have been p.p.(완료 수동)이에요." },
      { type: "choose", q: "I regret not ___ harder last year.", ko: "작년에 더 열심히 공부하지 않은 것을 후회한다.", choices: ["having studied", "to study"], answer: 0, hint: "지난 일 후회는 having p.p.도 돼요." },
      { type: "choose", q: "He is said ___ rich when he was young.", ko: "그는 젊었을 때 부자였다고 한다.", choices: ["to have been", "to be"], answer: 0, hint: "말하는 시점보다 앞선 과거예요." },
      { type: "order", words: ["She", "seems", "to", "have", "missed", "the", "bus."], ko: "그녀는 버스를 놓친 것 같다." },
    ],
  },
  {
    id: "h-should-that",
    emoji: "📜",
    title: "suggest that he (should) go",
    subtitle: "주장·요구·제안 + that + (should) 동사원형",
    grade: "고3",
    slides: [
      {
        emoji: "📜",
        say: "<b>suggest, insist, demand, recommend, require</b>처럼 '~해야 한다'고 주장·요구·제안하는 동사 뒤 that절에는 <b>(should) + 동사원형</b>을 써요. should는 자주 생략돼요.",
        pattern: "suggest / insist / demand + that + 주어 + (should) 동사원형",
        examples: [
          { en: "The doctor suggested that he (should) rest.", ko: "의사는 그가 쉬어야 한다고 제안했다.", emoji: "🛏️" },
          { en: "She insisted that we be on time.", ko: "그녀는 우리가 시간을 지켜야 한다고 주장했다.", emoji: "⏰" },
        ],
      },
      {
        emoji: "⚠️",
        say: "주의! 주어가 he여도 <b>rests가 아니라 rest</b>, 과거 문장이어도 <b>동사원형</b>이에요. should가 숨어 있기 때문이에요.",
        pattern: "He demanded that she pay. (O) · she paid / pays (X)",
        examples: [
          { en: "They demanded that the company pay them.", ko: "그들은 회사가 돈을 지불해야 한다고 요구했다.", emoji: "💰" },
          { en: "It is important that everyone wear a helmet.", ko: "모두가 헬멧을 쓰는 것이 중요하다.", emoji: "⛑️" },
        ],
      },
      {
        emoji: "🔍",
        say: "하지만 '~해야 한다'가 아니라 <b>이미 일어난 사실</b>을 말하면 보통 시제대로 써요. suggest가 '암시하다', insist가 '(사실이라고) 우기다'일 때예요.",
        pattern: "He insisted that he had seen a UFO. (사실 주장)",
        examples: [
          { en: "He insisted that he had seen a UFO.", ko: "그는 UFO를 봤다고 우겼다.", emoji: "🛸" },
          { en: "Her smile suggested that she was happy.", ko: "그녀의 미소는 그녀가 행복하다는 것을 암시했다.", emoji: "😊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! '~해야 한다'고 주장·요구·제안하면 that 뒤에 <b>(should) + 동사원형</b>. 이미 있었던 사실이면 시제대로!",
        pattern: "suggest that 주어 (should) 동사원형",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The teacher suggested that he ___ more.", ko: "선생님은 그가 책을 더 읽어야 한다고 제안했다.", choices: ["read", "reads", "reading"], answer: 0, hint: "(should) + 동사원형이에요." },
      { type: "choose", q: "Mom insisted that I ___ to bed early.", ko: "엄마는 내가 일찍 자야 한다고 주장하셨다.", choices: ["go", "went", "goes"], answer: 0, hint: "과거 문장이어도 동사원형이에요." },
      { type: "choose", q: "They demanded that the meeting ___ delayed.", ko: "그들은 회의를 연기해야 한다고 요구했다.", choices: ["be", "was", "is"], answer: 0, hint: "수동이면 (should) be p.p.예요." },
      { type: "choose", q: "I recommend that she ___ a doctor.", ko: "나는 그녀가 병원에 가 보기를 권한다.", choices: ["see", "sees"], answer: 0, hint: "주어가 she여도 동사원형이에요." },
      { type: "choose", q: "He insisted that he ___ the money already.", ko: "그는 이미 돈을 냈다고 우겼다.", choices: ["had paid", "pay"], answer: 0, hint: "이미 있었던 사실을 주장할 때는 시제대로예요." },
      { type: "order", words: ["I", "suggest", "that", "you", "take", "a", "break."], ko: "잠깐 쉬기를 제안할게." },
    ],
  },
  {
    id: "h-object-it",
    emoji: "🎯",
    title: "make it possible to ~",
    subtitle: "가목적어 it",
    grade: "고3",
    slides: [
      {
        emoji: "🎯",
        say: "5형식(make, find, think, consider) 문장에서 목적어가 to부정사나 that절로 길어지면, 그 자리에 <b>it</b>을 두고 진짜 목적어는 뒤로 보내요. 이것을 <b>가목적어</b>라고 해요.",
        pattern: "주어 + make / find / think + it + 형용사 + to ___",
        examples: [
          { en: "The internet makes it easy to find information.", ko: "인터넷은 정보를 찾는 것을 쉽게 만든다.", emoji: "🌐" },
          { en: "I found it hard to sleep last night.", ko: "나는 어젯밤 잠들기가 어려웠다.", emoji: "😵" },
        ],
      },
      {
        emoji: "👤",
        say: "의미상 주어도 넣을 수 있어요. <b>it + 형용사 + for 사람 + to ___</b>",
        pattern: "make it possible for 사람 to ___",
        examples: [
          { en: "The new bridge makes it possible for us to go there quickly.", ko: "새 다리 덕분에 우리는 그곳에 빨리 갈 수 있다.", emoji: "🌉" },
          { en: "He thought it strange that she didn't call.", ko: "그는 그녀가 전화하지 않은 것을 이상하게 여겼다.", emoji: "📵" },
        ],
      },
      {
        emoji: "🚫",
        say: "이 자리에 <b>it을 빼면 틀린 문장</b>이에요. make easy to ~ (X) → make <b>it</b> easy to ~ (O)",
        pattern: "makes easy to (X) · makes it easy to (O)",
        examples: [
          { en: "Smartphones make it convenient to take photos.", ko: "스마트폰은 사진 찍는 것을 편리하게 해 준다.", emoji: "📱" },
          { en: "I consider it my duty to help them.", ko: "나는 그들을 돕는 것을 내 의무로 여긴다.", emoji: "🙌" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! make / find / think + <b>it</b> + 형용사 + <b>to ~ / that ~</b>. it은 해석하지 않아요!",
        pattern: "make it ___ to ~",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Technology makes ___ easy to learn.", ko: "기술은 배우는 것을 쉽게 만든다.", choices: ["it", "that", "this"], answer: 0, hint: "가목적어는 it이에요." },
      { type: "choose", q: "I found it difficult ___ the question.", ko: "나는 그 질문에 답하기가 어려웠다.", choices: ["to answer", "answer", "answered"], answer: 0, hint: "진목적어는 to부정사예요." },
      { type: "choose", q: "The rain made it impossible ___ us to play.", ko: "비 때문에 우리는 경기를 할 수 없었다.", choices: ["for", "of"], answer: 0, hint: "의미상 주어 for예요." },
      { type: "choose", q: "She thinks ___ wrong to lie.", ko: "그녀는 거짓말하는 것이 잘못이라고 생각한다.", choices: ["it", "that"], answer: 0, hint: "think it + 형용사 + to예요." },
      { type: "choose", q: "We found it strange ___ he left early.", ko: "우리는 그가 일찍 떠난 것을 이상하게 여겼다.", choices: ["that", "what"], answer: 0, hint: "진목적어로 that절도 와요." },
      { type: "order", words: ["I", "find", "it", "hard", "to", "say", "no."], ko: "나는 거절하는 것이 어렵다." },
    ],
  },
  {
    id: "h-noun-clause",
    emoji: "📦",
    title: "whether, the fact that",
    subtitle: "명사절: whether / if와 동격의 that",
    grade: "고3",
    slides: [
      {
        emoji: "❓",
        say: "<b>whether / if</b>가 명사절을 이끌면 '<b>~인지 (아닌지)</b>'예요. 주어 자리나 전치사 뒤에는 <b>whether만</b> 쓸 수 있어요.",
        pattern: "I don't know whether / if ___ · Whether ___ is important.",
        examples: [
          { en: "I don't know if he will come.", ko: "나는 그가 올지 모르겠다.", emoji: "🤷" },
          { en: "Whether we win or lose doesn't matter.", ko: "우리가 이기느냐 지느냐는 중요하지 않다.", emoji: "⚽" },
        ],
      },
      {
        emoji: "🧾",
        say: "that절이 주어일 때는 보통 가주어 it을 써요. <b>That he lied is clear.</b> → <b>It is clear that he lied.</b>",
        pattern: "That ___ is ___. = It is ___ that ___.",
        examples: [
          { en: "It is true that the earth is round.", ko: "지구가 둥글다는 것은 사실이다.", emoji: "🌍" },
          { en: "It is surprising that she said no.", ko: "그녀가 거절했다는 것은 놀랍다.", emoji: "😮" },
        ],
      },
      {
        emoji: "🟰",
        say: "<b>the fact, the news, the idea, the belief + that ~</b>은 '<b>~라는 사실 / 소식 / 생각</b>'이에요. that절이 앞 명사의 내용을 설명해요. 이것을 <b>동격의 that</b>이라고 해요.",
        pattern: "the fact that ___ = ___라는 사실",
        examples: [
          { en: "I was shocked by the news that he moved away.", ko: "나는 그가 이사 갔다는 소식에 충격을 받았다.", emoji: "📰" },
          { en: "The fact that she is honest is important.", ko: "그녀가 정직하다는 사실이 중요하다.", emoji: "🙌" },
        ],
      },
      {
        emoji: "🔍",
        say: "관계대명사 that과 구별해요. <b>동격의 that 뒤는 완전한 문장</b>, 관계대명사 that 뒤는 빠진 말이 있는 문장이에요.",
        pattern: "the news that he won (완전) · the news that I heard ___ (불완전)",
        examples: [
          { en: "The news that I heard yesterday was false.", ko: "내가 어제 들은 소식은 거짓이었다.", emoji: "🗞️" },
          { en: "The news that our team won made us happy.", ko: "우리 팀이 이겼다는 소식이 우리를 기쁘게 했다.", emoji: "🎉" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! '~인지'는 <b>whether / if</b>(주어 자리는 whether). '~라는 사실'은 <b>the fact that + 완전한 문장</b>!",
        pattern: "whether ___ · It is ___ that ___ · the fact that ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I wonder ___ it will rain tomorrow.", ko: "내일 비가 올지 궁금하다.", choices: ["if", "that", "what"], answer: 0, hint: "'~인지'는 if / whether예요." },
      { type: "choose", q: "___ he will join us is not certain.", ko: "그가 우리와 함께할지는 확실하지 않다.", choices: ["Whether", "If"], answer: 0, hint: "주어 자리에는 whether만 써요." },
      { type: "choose", q: "___ is clear that he made a mistake.", ko: "그가 실수했다는 것은 분명하다.", choices: ["It", "That", "This"], answer: 0, hint: "가주어 it이에요." },
      { type: "choose", q: "I like the idea ___ we work together.", ko: "나는 우리가 함께 일한다는 생각이 좋다.", choices: ["that", "which"], answer: 0, hint: "뒤가 완전한 문장이니 동격의 that이에요." },
      { type: "choose", q: "It depends on ___ you agree or not.", ko: "그것은 네가 동의하느냐 아니냐에 달려 있다.", choices: ["whether", "if"], answer: 0, hint: "전치사 뒤에는 whether만 써요." },
      { type: "order", words: ["I", "don't", "know", "whether", "she", "is", "home."], ko: "나는 그녀가 집에 있는지 모른다." },
    ],
  },
  {
    id: "h-no-sooner",
    emoji: "⚡",
    title: "No sooner had I ~ than",
    subtitle: "~하자마자 / ~하고 나서야 비로소",
    grade: "고3",
    slides: [
      {
        emoji: "⚡",
        say: "'<b>~하자마자 …했다</b>'는 <b>No sooner had + 주어 + p.p. than</b> 또는 <b>Hardly had + 주어 + p.p. when</b>으로 써요. 부정어가 앞에 와서 도치돼요.",
        pattern: "No sooner had 주어 p.p. than 과거 · Hardly had 주어 p.p. when 과거",
        examples: [
          { en: "No sooner had I arrived than it started to rain.", ko: "내가 도착하자마자 비가 오기 시작했다.", emoji: "🌧️" },
          { en: "Hardly had she sat down when the phone rang.", ko: "그녀가 앉자마자 전화가 울렸다.", emoji: "📞" },
        ],
      },
      {
        emoji: "🏃",
        say: "더 쉽게는 <b>As soon as</b>나 <b>On + ~ing</b>로도 말해요.",
        pattern: "As soon as I arrived, ___ · On arriving, ___",
        examples: [
          { en: "As soon as he saw me, he ran away.", ko: "그는 나를 보자마자 도망쳤다.", emoji: "💨" },
          { en: "On hearing the news, she cried.", ko: "그 소식을 듣자마자 그녀는 울었다.", emoji: "😭" },
        ],
      },
      {
        emoji: "⏳",
        say: "<b>It was not until ~ that …</b>은 '<b>~하고 나서야 비로소 …했다</b>'예요. <b>Not until ~ did 주어 …</b>로 도치해서도 써요.",
        pattern: "It was not until ___ that ___ · Not until ___ did 주어 ___",
        examples: [
          { en: "It was not until I lost my health that I knew its value.", ko: "건강을 잃고 나서야 비로소 그 소중함을 알았다.", emoji: "❤️‍🩹" },
          { en: "Not until midnight did he come home.", ko: "자정이 되어서야 그는 집에 왔다.", emoji: "🌙" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! ~하자마자는 <b>No sooner had ~ than / Hardly had ~ when</b>, ~하고서야 비로소는 <b>It was not until ~ that</b>!",
        pattern: "No sooner ~ than · Hardly ~ when · not until ~ that",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "No sooner had I left ___ it began to snow.", ko: "내가 떠나자마자 눈이 오기 시작했다.", choices: ["than", "when", "that"], answer: 0, hint: "No sooner ~ than이에요." },
      { type: "choose", q: "Hardly had he finished ___ the bell rang.", ko: "그가 끝내자마자 종이 울렸다.", choices: ["when", "than"], answer: 0, hint: "Hardly ~ when이에요." },
      { type: "choose", q: "No sooner ___ she seen me than she smiled.", ko: "그녀는 나를 보자마자 웃었다.", choices: ["had", "has", "did"], answer: 0, hint: "No sooner had + 주어 + p.p.예요." },
      { type: "choose", q: "It was not until ten ___ he woke up.", ko: "10시가 되어서야 그는 일어났다.", choices: ["that", "when", "than"], answer: 0, hint: "It was not until ~ that이에요." },
      { type: "choose", q: "On ___ home, I took a shower.", ko: "집에 도착하자마자 나는 샤워를 했다.", choices: ["arriving", "arrive", "arrived"], answer: 0, hint: "On + ~ing예요." },
      { type: "order", words: ["As", "soon", "as", "he", "saw", "me,", "he", "smiled."], ko: "그는 나를 보자마자 웃었다." },
    ],
  },
  {
    id: "h-partial-neg",
    emoji: "🌓",
    title: "not all, not always",
    subtitle: "부분부정과 전체부정",
    grade: "고3",
    slides: [
      {
        emoji: "🌓",
        say: "<b>not + all / every / always / necessarily</b>는 '<b>모두 ~인 것은 아니다</b>'라는 <b>부분부정</b>이에요. 일부는 그렇다는 뜻이에요.",
        pattern: "not all · not every · not always · not necessarily",
        examples: [
          { en: "Not all students like math.", ko: "모든 학생이 수학을 좋아하는 것은 아니다.", emoji: "➗" },
          { en: "The rich are not always happy.", ko: "부자가 항상 행복한 것은 아니다.", emoji: "💰" },
          { en: "Expensive things are not necessarily good.", ko: "비싼 것이 반드시 좋은 것은 아니다.", emoji: "🏷️" },
        ],
      },
      {
        emoji: "🌑",
        say: "'<b>아무도 / 전혀 ~ 않다</b>'는 <b>전체부정</b>이에요. <b>no, none, nobody, nothing, never, neither</b>를 써요.",
        pattern: "None of ___ · Nobody ___ · never ___",
        examples: [
          { en: "None of my friends came.", ko: "내 친구 중 아무도 오지 않았다.", emoji: "🙅" },
          { en: "Neither of the answers is correct.", ko: "두 답 모두 맞지 않다.", emoji: "❌" },
        ],
      },
      {
        emoji: "🔄",
        say: "<b>never ~ without -ing</b>는 '<b>~하면 반드시 …한다</b>'라는 이중부정이에요. 부정 두 개가 만나 강한 긍정이 돼요.",
        pattern: "never A without B-ing = A하면 반드시 B한다",
        examples: [
          { en: "They never meet without arguing.", ko: "그들은 만나기만 하면 반드시 다툰다.", emoji: "😤" },
          { en: "I never see this photo without thinking of you.", ko: "이 사진을 볼 때마다 나는 반드시 네 생각이 난다.", emoji: "🖼️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>not + all / always</b>는 '모두 ~은 아니다'(부분부정), <b>none / never</b>는 '전혀 아니다'(전체부정)!",
        pattern: "not all (일부) ↔ none (전부)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ birds can fly.", ko: "모든 새가 날 수 있는 것은 아니다.", choices: ["Not all", "No", "None"], answer: 0, hint: "부분부정은 not all이에요." },
      { type: "choose", q: "___ of the students knew the answer.", ko: "학생들 중 아무도 답을 몰랐다.", choices: ["None", "Not all"], answer: 0, hint: "'아무도 ~않다'는 none이에요." },
      { type: "choose", q: "I'm not ___ busy on weekends.", ko: "내가 주말에 항상 바쁜 것은 아니다.", choices: ["always", "never"], answer: 0, hint: "not always는 부분부정이에요." },
      { type: "choose", q: "A big house is not ___ a happy house.", ko: "큰 집이 반드시 행복한 집은 아니다.", choices: ["necessarily", "never"], answer: 0, hint: "'반드시 ~은 아니다'는 not necessarily예요." },
      { type: "choose", q: "He never eats pizza ___ getting a stomachache.", ko: "그는 피자를 먹으면 반드시 배탈이 난다.", choices: ["without", "with"], answer: 0, hint: "never A without B-ing예요." },
      { type: "order", words: ["Not", "everyone", "likes", "spicy", "food."], ko: "모두가 매운 음식을 좋아하는 것은 아니다." },
    ],
  },
  {
    id: "h-agreement",
    emoji: "⚖️",
    title: "주어와 동사의 수 일치",
    subtitle: "진짜 주어를 찾아 동사를 맞추기",
    grade: "고3",
    slides: [
      {
        emoji: "🔎",
        say: "주어가 길어지면 동사 바로 앞의 명사에 속기 쉬워요. 꾸미는 말(전치사구, 관계절)을 걷어 내고 <b>진짜 주어</b>를 찾아요.",
        pattern: "The key (to the doors) is ___. · The people (who live here) are ___.",
        examples: [
          { en: "The key to the doors is on the table.", ko: "그 문들의 열쇠는 탁자 위에 있다.", emoji: "🔑" },
          { en: "The students who live near the school walk.", ko: "학교 근처에 사는 학생들은 걸어 다닌다.", emoji: "🚶" },
        ],
      },
      {
        emoji: "🔢",
        say: "<b>The number of + 복수명사</b>는 '~의 수'라서 <b>단수</b>, <b>A number of + 복수명사</b>는 '많은 ~'이라서 <b>복수</b>예요.",
        pattern: "The number of ___ is · A number of ___ are",
        examples: [
          { en: "The number of tourists is increasing.", ko: "관광객의 수가 늘고 있다.", emoji: "📈" },
          { en: "A number of tourists are visiting Seoul.", ko: "많은 관광객들이 서울을 방문하고 있다.", emoji: "🧳" },
        ],
      },
      {
        emoji: "1️⃣",
        say: "<b>each, every, one of ~, 동명사·to부정사 주어</b>는 <b>단수</b>예요. one of the 뒤에는 복수명사가 오지만 동사는 단수예요.",
        pattern: "Each student has · One of my friends is · Reading books is",
        examples: [
          { en: "One of my friends lives in Canada.", ko: "내 친구 중 한 명은 캐나다에 산다.", emoji: "🍁" },
          { en: "Reading books is good for you.", ko: "책을 읽는 것은 너에게 좋다.", emoji: "📚" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 꾸미는 말을 걷어 내고 <b>진짜 주어</b>를 찾아요. the number of, each, one of, 동명사 주어는 <b>단수</b>!",
        pattern: "진짜 주어 ↔ 동사",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The books on the shelf ___ mine.", ko: "선반 위의 책들은 내 것이다.", choices: ["are", "is"], answer: 0, hint: "진짜 주어는 The books예요." },
      { type: "choose", q: "The number of students ___ decreasing.", ko: "학생 수가 줄고 있다.", choices: ["is", "are"], answer: 0, hint: "The number of는 단수예요." },
      { type: "choose", q: "A number of people ___ waiting outside.", ko: "많은 사람들이 밖에서 기다리고 있다.", choices: ["are", "is"], answer: 0, hint: "A number of는 '많은'이라 복수예요." },
      { type: "choose", q: "One of the boys ___ my cousin.", ko: "그 소년들 중 한 명은 내 사촌이다.", choices: ["is", "are"], answer: 0, hint: "주어는 One이라 단수예요." },
      { type: "choose", q: "Learning languages ___ fun.", ko: "언어를 배우는 것은 재미있다.", choices: ["is", "are"], answer: 0, hint: "동명사 주어는 단수예요." },
      { type: "order", words: ["Each", "student", "has", "a", "laptop."], ko: "학생마다 노트북이 있다." },
    ],
  },
);
