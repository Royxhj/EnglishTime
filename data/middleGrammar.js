// 중학교 문법: 기초 문법(BASIC_TOPICS)과 같은 형식으로 중1~중3 과정을 이어 붙인다.
// basicGrammar.js 뒤에 불러온다. id는 "m-"로 시작한다.
BASIC_TOPICS.push(
  // ── 중1 ──
  {
    id: "m-past-prog",
    emoji: "📸",
    title: "was / were + -ing",
    subtitle: "과거진행: 그때 ~하는 중이었다",
    grade: "중1",
    slides: [
      {
        emoji: "📸",
        say: "과거의 어느 한 순간에 <b>하고 있던 일</b>을 말할 때는 <b>was / were + 동사ing</b>를 써요. 사진을 찍은 것처럼 그 순간을 보여 주는 표현이에요.",
        pattern: "주어 + was / were + 동사ing",
        examples: [
          { en: "I was sleeping at 10 last night.", ko: "나는 어젯밤 10시에 자고 있었다.", emoji: "😴" },
          { en: "They were playing soccer.", ko: "그들은 축구를 하고 있었다.", emoji: "⚽" },
          { en: "She was reading a book then.", ko: "그녀는 그때 책을 읽고 있었다.", emoji: "📖" },
        ],
      },
      {
        emoji: "🔀",
        say: "I, he, she, it처럼 하나면 <b>was</b>, you, we, they처럼 여럿(또는 you)이면 <b>were</b>예요. 현재진행형의 am·is → was, are → were로 바꾸면 돼요.",
        pattern: "I am eating → I was eating · We are eating → We were eating",
        examples: [
          { en: "He was cooking dinner.", ko: "그는 저녁을 요리하고 있었다.", emoji: "🍳" },
          { en: "We were watching TV.", ko: "우리는 TV를 보고 있었다.", emoji: "📺" },
        ],
      },
      {
        emoji: "⚡",
        say: "<b>when</b>과 함께 자주 써요. 길게 하고 있던 일은 과거진행형, 그 사이에 갑자기 일어난 일은 과거형이에요.",
        pattern: "I was ___ing when ___ed.",
        examples: [
          { en: "I was taking a shower when the phone rang.", ko: "전화가 울렸을 때 나는 샤워하고 있었다.", emoji: "📞" },
          { en: "It was raining when we left.", ko: "우리가 떠날 때 비가 오고 있었다.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "🙋",
        say: "부정문은 was·were 뒤에 <b>not</b>, 의문문은 was·were를 <b>맨 앞</b>으로 옮겨요.",
        pattern: "I wasn't ___ing. · Were you ___ing?",
        examples: [
          { en: "I wasn't listening.", ko: "나는 듣고 있지 않았어.", emoji: "🙉" },
          { en: "What were you doing at 7?", ko: "너 7시에 뭐 하고 있었어?", emoji: "⏰" },
          { en: "I was doing my homework.", ko: "숙제하고 있었어.", emoji: "📒" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 과거의 그 순간 하던 일은 <b>was / were + ing</b>. 하나면 was, 여럿이면 were!",
        pattern: "was / were + 동사ing",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ sleeping when you called.", ko: "네가 전화했을 때 나는 자고 있었어.", choices: ["was", "were", "am"], answer: 0, hint: "I는 was예요." },
      { type: "choose", q: "They ___ playing games at that time.", ko: "그들은 그때 게임을 하고 있었다.", choices: ["was", "were"], answer: 1, hint: "They는 were예요." },
      { type: "choose", q: "She was ___ a letter.", ko: "그녀는 편지를 쓰고 있었다.", choices: ["write", "writing", "wrote"], answer: 1, hint: "was 뒤에는 동사ing가 와요." },
      { type: "choose", q: "What ___ you doing last night?", ko: "어젯밤에 뭐 하고 있었어?", choices: ["was", "were", "did"], answer: 1, hint: "you는 were예요." },
      { type: "choose", q: "I was walking home when it ___ to rain.", ko: "비가 오기 시작했을 때 나는 집에 걸어가고 있었다.", choices: ["started", "was starting"], answer: 0, hint: "갑자기 일어난 일은 과거형이에요." },
      { type: "order", words: ["We", "were", "watching", "a", "movie."], ko: "우리는 영화를 보고 있었다." },
    ],
  },
  {
    id: "m-sense",
    emoji: "👃",
    title: "look happy, smell good",
    subtitle: "감각동사 + 형용사",
    grade: "중1",
    slides: [
      {
        emoji: "👀",
        say: "'~해 보인다, ~하게 들린다'처럼 느낌을 말하는 동사를 <b>감각동사</b>라고 해요. look(보이다), sound(들리다), smell(냄새가 나다), taste(맛이 나다), feel(느껴지다)이 있어요.",
        pattern: "look · sound · smell · taste · feel",
        examples: [
          { en: "You look happy.", ko: "너 행복해 보여.", emoji: "😊" },
          { en: "That sounds great!", ko: "그거 좋게 들린다!", emoji: "👂" },
          { en: "This soup tastes good.", ko: "이 수프는 맛이 좋다.", emoji: "🍲" },
        ],
      },
      {
        emoji: "⚠️",
        say: "감각동사 뒤에는 <b>형용사</b>가 와요. 우리말로 '~하게'라고 해석되어도 부사(-ly)를 쓰면 안 돼요! look happily(✗) → look happy(○)",
        pattern: "감각동사 + 형용사 (부사 ✗)",
        examples: [
          { en: "The flower smells sweet.", ko: "그 꽃은 달콤한 냄새가 난다.", emoji: "🌸" },
          { en: "I feel tired.", ko: "나는 피곤하다.", emoji: "😩" },
          { en: "Her voice sounds beautiful.", ko: "그녀의 목소리는 아름답게 들린다.", emoji: "🎤" },
        ],
      },
      {
        emoji: "🐱",
        say: "뒤에 명사가 오려면 <b>like</b>를 붙여요. look like + 명사는 '~처럼 보이다'예요.",
        pattern: "look like + 명사",
        examples: [
          { en: "That cloud looks like a cat.", ko: "저 구름은 고양이처럼 보인다.", emoji: "☁️" },
          { en: "It sounds like a good idea.", ko: "좋은 생각인 것 같아.", emoji: "💡" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>감각동사 + 형용사</b>, 명사가 오면 <b>감각동사 + like + 명사</b>!",
        pattern: "look happy · look like a cat",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "You look ___ today.", ko: "너 오늘 피곤해 보여.", choices: ["tired", "tiredly"], answer: 0, hint: "감각동사 뒤에는 형용사가 와요." },
      { type: "choose", q: "This cake tastes ___.", ko: "이 케이크는 맛있다.", choices: ["well", "good"], answer: 1, hint: "good은 형용사, well은 부사예요." },
      { type: "choose", q: "The music sounds ___.", ko: "그 음악은 아름답게 들린다.", choices: ["beautiful", "beautifully"], answer: 0, hint: "sound 뒤에는 형용사예요." },
      { type: "choose", q: "He looks ___ a movie star.", ko: "그는 영화배우처럼 보인다.", choices: ["like", "as"], answer: 0, hint: "명사 앞에는 look like예요." },
      { type: "choose", q: "The blanket feels ___.", ko: "그 담요는 부드럽게 느껴진다.", choices: ["soft", "softly"], answer: 0, hint: "feel 뒤에는 형용사예요." },
      { type: "order", words: ["That", "sounds", "like", "fun."], ko: "그거 재미있겠다." },
    ],
  },
  {
    id: "m-dative",
    emoji: "🎁",
    title: "give me a gift",
    subtitle: "수여동사: ~에게 ~을 주다",
    grade: "중1",
    slides: [
      {
        emoji: "🎁",
        say: "give, send, show, tell처럼 '<b>누구에게 무엇을</b> 주다'라는 동사를 <b>수여동사</b>라고 해요. 동사 뒤에 '사람'을 먼저, '물건'을 나중에 써요.",
        pattern: "주어 + 동사 + 사람(~에게) + 물건(~을)",
        examples: [
          { en: "She gave me a gift.", ko: "그녀는 나에게 선물을 주었다.", emoji: "🎁" },
          { en: "I'll show you my room.", ko: "내 방을 보여 줄게.", emoji: "🚪" },
          { en: "Dad told us a story.", ko: "아빠가 우리에게 이야기를 해 주셨다.", emoji: "📖" },
        ],
      },
      {
        emoji: "🔄",
        say: "순서를 바꿔서 '물건'을 먼저 쓸 수도 있어요. 그때는 사람 앞에 <b>to</b>를 붙여요.",
        pattern: "동사 + 물건 + to + 사람",
        examples: [
          { en: "She gave a gift to me.", ko: "그녀는 선물을 나에게 주었다.", emoji: "🎁" },
          { en: "I sent a letter to my grandma.", ko: "나는 할머니께 편지를 보냈다.", emoji: "✉️" },
        ],
      },
      {
        emoji: "🍳",
        say: "make(만들어 주다), buy(사 주다), cook(요리해 주다)은 <b>to</b> 대신 <b>for</b>를 써요. 상대를 '위해서' 해 주는 일이라서요.",
        pattern: "make · buy · cook + 물건 + for + 사람",
        examples: [
          { en: "Mom made a cake for me.", ko: "엄마가 나를 위해 케이크를 만들어 주셨다.", emoji: "🎂" },
          { en: "He bought flowers for her.", ko: "그는 그녀에게 꽃을 사 주었다.", emoji: "💐" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>사람 + 물건</b> 순서, 또는 <b>물건 + to/for + 사람</b>. give·send·show·tell은 to, make·buy·cook은 for!",
        pattern: "give me a book = give a book to me",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "He gave ___ a pen.", ko: "그는 나에게 펜을 주었다.", choices: ["me", "I", "my"], answer: 0, hint: "'나에게'는 me예요." },
      { type: "choose", q: "I sent an email ___ my teacher.", ko: "나는 선생님께 이메일을 보냈다.", choices: ["to", "for"], answer: 0, hint: "send는 to를 써요." },
      { type: "choose", q: "Dad cooked dinner ___ us.", ko: "아빠가 우리를 위해 저녁을 요리해 주셨다.", choices: ["to", "for"], answer: 1, hint: "cook은 for를 써요." },
      { type: "choose", q: "Can you show ___ your picture?", ko: "네 그림 보여 줄래?", choices: ["me", "to me"], answer: 0, hint: "사람이 먼저 오면 to가 필요 없어요." },
      { type: "choose", q: "She bought a bag ___ her sister.", ko: "그녀는 여동생에게 가방을 사 주었다.", choices: ["to", "for"], answer: 1, hint: "buy는 for를 써요." },
      { type: "order", words: ["She", "told", "us", "a", "funny", "story."], ko: "그녀는 우리에게 재미있는 이야기를 해 주었다." },
    ],
  },
  {
    id: "m-exclaim",
    emoji: "😲",
    title: "What a ~! How ~!",
    subtitle: "감탄문: 정말 ~하구나!",
    grade: "중1",
    slides: [
      {
        emoji: "😲",
        say: "놀랍거나 감동했을 때 '정말 ~하구나!'라고 말하는 문장을 <b>감탄문</b>이라고 해요. <b>What</b>이나 <b>How</b>로 시작하고 끝에 느낌표(!)를 붙여요.",
        pattern: "What ~! · How ~!",
        examples: [
          { en: "What a beautiful day!", ko: "정말 아름다운 날이구나!", emoji: "🌞" },
          { en: "How cute!", ko: "정말 귀엽다!", emoji: "🐶" },
        ],
      },
      {
        emoji: "🌸",
        say: "<b>What</b> 감탄문은 명사를 강조해요. <b>What + a(n) + 형용사 + 명사 + (주어 + 동사)!</b>",
        pattern: "What a(n) + 형용사 + 명사 (+ 주어 + 동사)!",
        examples: [
          { en: "What a smart boy he is!", ko: "그는 정말 똑똑한 소년이구나!", emoji: "🧠" },
          { en: "What an interesting story!", ko: "정말 흥미로운 이야기다!", emoji: "📚" },
          { en: "What nice shoes!", ko: "정말 멋진 신발이다!", emoji: "👟" },
        ],
      },
      {
        emoji: "🚀",
        say: "<b>How</b> 감탄문은 형용사나 부사를 강조해요. <b>How + 형용사/부사 + (주어 + 동사)!</b> 명사가 없어요.",
        pattern: "How + 형용사/부사 (+ 주어 + 동사)!",
        examples: [
          { en: "How fast he runs!", ko: "그는 정말 빨리 달리는구나!", emoji: "🏃" },
          { en: "How tall you are!", ko: "너 정말 키가 크구나!", emoji: "📏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 명사가 있으면 <b>What a ~!</b>, 형용사·부사만 있으면 <b>How ~!</b> 여러 개(nice shoes)나 셀 수 없는 것에는 a를 빼요.",
        pattern: "What a nice car! · How nice!",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ a big house!", ko: "정말 큰 집이다!", choices: ["What", "How"], answer: 0, hint: "명사(house)가 있으면 What이에요." },
      { type: "choose", q: "___ beautiful!", ko: "정말 아름답다!", choices: ["What", "How"], answer: 1, hint: "형용사만 있으면 How예요." },
      { type: "choose", q: "What ___ old tree!", ko: "정말 오래된 나무다!", choices: ["a", "an"], answer: 1, hint: "old는 모음 소리로 시작해서 an이에요." },
      { type: "choose", q: "How fast ___!", ko: "그녀는 정말 빨리 수영하는구나!", choices: ["she swims", "does she swim"], answer: 0, hint: "감탄문은 주어 + 동사 순서예요." },
      { type: "choose", q: "What ___ shoes!", ko: "정말 예쁜 신발이다!", choices: ["a pretty", "pretty"], answer: 1, hint: "shoes는 여러 개라서 a를 빼요." },
      { type: "order", words: ["What", "a", "smart", "dog", "it", "is!"], ko: "그건 정말 똑똑한 개구나!" },
    ],
  },
  {
    id: "m-tag",
    emoji: "🤝",
    title: "isn't it? don't you?",
    subtitle: "부가의문문: 그렇지?",
    grade: "중1",
    slides: [
      {
        emoji: "🤝",
        say: "말끝에 '<b>그렇지?</b>', '<b>그렇지 않니?</b>'를 붙여 확인하는 짧은 질문을 <b>부가의문문</b>이라고 해요.",
        pattern: "문장, + 짧은 질문?",
        examples: [
          { en: "It's cold, isn't it?", ko: "춥다, 그렇지?", emoji: "🥶" },
          { en: "You like pizza, don't you?", ko: "너 피자 좋아하지, 그렇지?", emoji: "🍕" },
        ],
      },
      {
        emoji: "🔁",
        say: "만드는 법: 앞이 <b>긍정이면 부정</b>, 앞이 <b>부정이면 긍정</b>으로 바꿔요. 주어는 <b>대명사</b>로 써요.",
        pattern: "긍정, 부정? · 부정, 긍정?",
        examples: [
          { en: "Mina is kind, isn't she?", ko: "미나는 친절해, 그렇지?", emoji: "👧" },
          { en: "You aren't tired, are you?", ko: "너 안 피곤하지, 그렇지?", emoji: "🙂" },
        ],
      },
      {
        emoji: "🧩",
        say: "앞 문장의 동사에 맞춰요. be동사는 be동사로, 일반동사는 <b>do / does / did</b>로, can·will은 그대로 써요.",
        pattern: "is → isn't · likes → doesn't · went → didn't · can → can't",
        examples: [
          { en: "He plays the piano, doesn't he?", ko: "그는 피아노를 치지, 그렇지?", emoji: "🎹" },
          { en: "You went there, didn't you?", ko: "너 거기 갔었지, 그렇지?", emoji: "🚶" },
          { en: "She can swim, can't she?", ko: "그녀는 수영할 줄 알지, 그렇지?", emoji: "🏊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>긍정이면 부정, 부정이면 긍정</b>, 동사 종류를 맞추고, 주어는 대명사로!",
        pattern: "It's nice, isn't it? · You don't know, do you?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "It's hot today, ___ it?", ko: "오늘 덥다, 그렇지?", choices: ["isn't", "is", "doesn't"], answer: 0, hint: "긍정(is)이니까 부정(isn't)이에요." },
      { type: "choose", q: "You like music, ___ you?", ko: "너 음악 좋아하지, 그렇지?", choices: ["aren't", "don't", "do"], answer: 1, hint: "일반동사 like는 do로, 긍정이니까 don't예요." },
      { type: "choose", q: "Tom can't swim, ___ he?", ko: "톰은 수영 못 하지, 그렇지?", choices: ["can", "can't"], answer: 0, hint: "부정이니까 긍정 can이에요." },
      { type: "choose", q: "She went to Busan, ___ she?", ko: "그녀는 부산에 갔지, 그렇지?", choices: ["didn't", "doesn't", "wasn't"], answer: 0, hint: "과거(went)니까 didn't예요." },
      { type: "choose", q: "Your sister is a student, isn't ___?", ko: "네 언니는 학생이지, 그렇지?", choices: ["she", "your sister"], answer: 0, hint: "부가의문문의 주어는 대명사예요." },
      { type: "order", words: ["You", "aren't", "busy,", "are", "you?"], ko: "너 안 바쁘지, 그렇지?" },
    ],
  },
  {
    id: "m-time-prep",
    emoji: "🗓️",
    title: "at, on, in (시간)",
    subtitle: "때를 나타내는 전치사",
    grade: "중1",
    slides: [
      {
        emoji: "⏰",
        say: "<b>at</b>은 시각처럼 '<b>콕 찍은 한 점</b>'에 써요.",
        pattern: "at + 시각 · at noon · at night",
        examples: [
          { en: "School starts at 9.", ko: "학교는 9시에 시작한다.", emoji: "🏫" },
          { en: "Let's meet at noon.", ko: "정오에 만나자.", emoji: "🕛" },
          { en: "Owls hunt at night.", ko: "부엉이는 밤에 사냥한다.", emoji: "🦉" },
        ],
      },
      {
        emoji: "📅",
        say: "<b>on</b>은 '<b>하루</b>'에 써요. 요일, 날짜, 특정한 날이에요.",
        pattern: "on + 요일 · 날짜 · 특별한 날",
        examples: [
          { en: "I go swimming on Sundays.", ko: "나는 일요일마다 수영하러 간다.", emoji: "🏊" },
          { en: "My birthday is on May 5th.", ko: "내 생일은 5월 5일이다.", emoji: "🎂" },
          { en: "We eat cake on Christmas Day.", ko: "우리는 크리스마스 날에 케이크를 먹는다.", emoji: "🎄" },
        ],
      },
      {
        emoji: "🗓️",
        say: "<b>in</b>은 하루보다 <b>긴 기간</b>에 써요. 월, 계절, 연도, 그리고 아침·오후·저녁이에요.",
        pattern: "in + 월 · 계절 · 연도 · the morning",
        examples: [
          { en: "It snows in winter.", ko: "겨울에는 눈이 온다.", emoji: "❄️" },
          { en: "I was born in 2014.", ko: "나는 2014년에 태어났다.", emoji: "👶" },
          { en: "I study in the morning.", ko: "나는 아침에 공부한다.", emoji: "🌅" },
        ],
      },
      {
        emoji: "⏳",
        say: "'~ 동안'은 두 가지예요. <b>for + 숫자 기간</b>(for 3 hours), <b>during + 일의 이름</b>(during the vacation).",
        pattern: "for + 숫자 기간 · during + 특정 기간",
        examples: [
          { en: "I slept for 8 hours.", ko: "나는 8시간 동안 잤다.", emoji: "😴" },
          { en: "We went camping during the vacation.", ko: "우리는 방학 동안 캠핑을 갔다.", emoji: "🏕️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 좁은 점은 <b>at</b>, 하루는 <b>on</b>, 긴 기간은 <b>in</b>. 작은 것에서 큰 것으로 at → on → in!",
        pattern: "at 7 · on Monday · in July",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I get up ___ 7 o'clock.", ko: "나는 7시에 일어난다.", choices: ["at", "on", "in"], answer: 0, hint: "시각은 at이에요." },
      { type: "choose", q: "We have PE ___ Friday.", ko: "우리는 금요일에 체육이 있다.", choices: ["at", "on", "in"], answer: 1, hint: "요일은 on이에요." },
      { type: "choose", q: "Leaves fall ___ autumn.", ko: "가을에 나뭇잎이 떨어진다.", choices: ["at", "on", "in"], answer: 2, hint: "계절은 in이에요." },
      { type: "choose", q: "He was born ___ March 3rd.", ko: "그는 3월 3일에 태어났다.", choices: ["on", "in"], answer: 0, hint: "날짜(하루)는 on이에요." },
      { type: "choose", q: "I watched TV ___ two hours.", ko: "나는 두 시간 동안 TV를 봤다.", choices: ["for", "during"], answer: 0, hint: "숫자 기간 앞에는 for예요." },
      { type: "choose", q: "Don't talk ___ the movie.", ko: "영화 보는 동안 말하지 마.", choices: ["for", "during"], answer: 1, hint: "일의 이름 앞에는 during이에요." },
    ],
  },
  {
    id: "m-to-noun",
    emoji: "🎯",
    title: "to부정사: ~하는 것",
    subtitle: "to + 동사원형이 명사처럼",
    grade: "중1",
    slides: [
      {
        emoji: "🎯",
        say: "<b>to + 동사원형</b>을 <b>to부정사</b>라고 해요. 동사를 명사처럼 바꿔서 '<b>~하는 것</b>'이라는 뜻이 돼요.",
        pattern: "to + 동사원형 = ~하는 것",
        examples: [
          { en: "to read", ko: "읽는 것", emoji: "📖" },
          { en: "to swim", ko: "수영하는 것", emoji: "🏊" },
        ],
      },
      {
        emoji: "💭",
        say: "동사 뒤에 와서 '<b>~하는 것을</b>'이 돼요. want, hope, decide, plan, need 뒤에 자주 와요.",
        pattern: "want / hope / decide + to 동사원형",
        examples: [
          { en: "I want to learn Chinese.", ko: "나는 중국어 배우기를 원한다.", emoji: "🀄" },
          { en: "She decided to join the club.", ko: "그녀는 동아리에 들어가기로 결심했다.", emoji: "🙋" },
          { en: "We hope to see you again.", ko: "우리는 너를 다시 보기를 바란다.", emoji: "👋" },
        ],
      },
      {
        emoji: "🌟",
        say: "be동사 뒤에서 '<b>~하는 것이다</b>'가 되기도 해요. 꿈이나 계획을 말할 때 많이 써요.",
        pattern: "My dream is to ___.",
        examples: [
          { en: "My dream is to be a doctor.", ko: "내 꿈은 의사가 되는 것이다.", emoji: "👩‍⚕️" },
          { en: "My plan is to visit Jeju.", ko: "내 계획은 제주도에 가는 것이다.", emoji: "🍊" },
        ],
      },
      {
        emoji: "🎈",
        say: "문장 맨 앞 주어로 쓸 때는 보통 <b>It</b>을 앞에 두고 to부정사를 뒤로 보내요. 이 It은 '그것'이라고 해석하지 않아요.",
        pattern: "To learn English is fun. → It is fun to learn English.",
        examples: [
          { en: "It is fun to play soccer.", ko: "축구하는 것은 재미있다.", emoji: "⚽" },
          { en: "It is important to sleep well.", ko: "잘 자는 것은 중요하다.", emoji: "🛌" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>to + 동사원형</b>은 '~하는 것'. 동사 뒤(want to), be동사 뒤(is to), 주어(It is ~ to)로 쓸 수 있어요.",
        pattern: "want to · My dream is to · It is ~ to",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I want ___ a new phone.", ko: "나는 새 휴대폰을 사고 싶다.", choices: ["buy", "to buy", "buying"], answer: 1, hint: "want 뒤에는 to + 동사원형이에요." },
      { type: "choose", q: "My dream is ___ a singer.", ko: "내 꿈은 가수가 되는 것이다.", choices: ["to be", "be"], answer: 0, hint: "'~하는 것'은 to + 동사원형이에요." },
      { type: "choose", q: "___ is fun to ride a bike.", ko: "자전거 타는 것은 재미있다.", choices: ["It", "This", "That"], answer: 0, hint: "가짜 주어 It을 써요." },
      { type: "choose", q: "She decided to ___ harder.", ko: "그녀는 더 열심히 공부하기로 했다.", choices: ["study", "studies", "studying"], answer: 0, hint: "to 뒤에는 동사원형이에요." },
      { type: "choose", q: "We need ___ now.", ko: "우리는 지금 떠나야 한다.", choices: ["leave", "to leave"], answer: 1, hint: "need 뒤에는 to + 동사원형이에요." },
      { type: "order", words: ["It", "is", "important", "to", "sleep", "well."], ko: "잘 자는 것은 중요하다." },
    ],
  },
  {
    id: "m-gerund",
    emoji: "🏃",
    title: "동명사: ~하는 것 (-ing)",
    subtitle: "Swimming is fun.",
    grade: "중1",
    slides: [
      {
        emoji: "🏃",
        say: "동사에 <b>-ing</b>를 붙여서 '<b>~하는 것</b>'이라는 명사로 쓸 수 있어요. 이것을 <b>동명사</b>라고 해요. 진행형의 -ing와 모양은 같지만 역할이 달라요.",
        pattern: "동사 + ing = ~하는 것",
        examples: [
          { en: "Swimming is good exercise.", ko: "수영하는 것은 좋은 운동이다.", emoji: "🏊" },
          { en: "Reading books makes me happy.", ko: "책 읽는 것은 나를 행복하게 한다.", emoji: "📚" },
        ],
      },
      {
        emoji: "🎮",
        say: "<b>enjoy, finish, mind, stop, give up</b> 뒤에는 꼭 <b>-ing</b>가 와요. to부정사는 안 돼요!",
        pattern: "enjoy / finish / mind / give up + -ing",
        examples: [
          { en: "I enjoy playing games.", ko: "나는 게임하는 것을 즐긴다.", emoji: "🎮" },
          { en: "Did you finish cleaning?", ko: "청소 다 했니?", emoji: "🧹" },
          { en: "Don't give up trying.", ko: "노력하는 것을 포기하지 마.", emoji: "💪" },
        ],
      },
      {
        emoji: "🎨",
        say: "<b>전치사 뒤</b>에도 동명사가 와요. good at(~을 잘하는), interested in(~에 관심 있는), How about ~?(~하는 게 어때?)",
        pattern: "전치사 + -ing",
        examples: [
          { en: "She is good at drawing.", ko: "그녀는 그림을 잘 그린다.", emoji: "🎨" },
          { en: "How about going to the park?", ko: "공원에 가는 게 어때?", emoji: "🏞️" },
          { en: "Thank you for helping me.", ko: "도와줘서 고마워.", emoji: "🙏" },
        ],
      },
      {
        emoji: "⚖️",
        say: "like, love, start, begin 뒤에는 <b>-ing와 to 둘 다</b> 쓸 수 있어요. want, decide 뒤에는 to만, enjoy, finish 뒤에는 -ing만!",
        pattern: "like -ing = like to · want to · enjoy -ing",
        examples: [
          { en: "I like dancing. = I like to dance.", ko: "나는 춤추는 것을 좋아한다.", emoji: "💃" },
          { en: "It started raining.", ko: "비가 오기 시작했다.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 동명사는 <b>-ing = ~하는 것</b>. enjoy·finish·give up 뒤, 그리고 전치사 뒤에는 꼭 -ing!",
        pattern: "enjoy -ing · good at -ing · How about -ing?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I enjoy ___ music.", ko: "나는 음악 듣는 것을 즐긴다.", choices: ["to listen to", "listening to"], answer: 1, hint: "enjoy 뒤에는 -ing예요." },
      { type: "choose", q: "He is good at ___.", ko: "그는 노래를 잘한다.", choices: ["sing", "singing"], answer: 1, hint: "전치사 at 뒤에는 -ing예요." },
      { type: "choose", q: "___ English is fun.", ko: "영어를 배우는 것은 재미있다.", choices: ["Learn", "Learning"], answer: 1, hint: "주어 자리에는 동명사를 써요." },
      { type: "choose", q: "How about ___ a movie?", ko: "영화 보는 게 어때?", choices: ["watch", "watching"], answer: 1, hint: "How about 뒤에는 -ing예요." },
      { type: "choose", q: "I finished ___ my homework.", ko: "나는 숙제를 끝냈다.", choices: ["to do", "doing"], answer: 1, hint: "finish 뒤에는 -ing예요." },
      { type: "order", words: ["Thank", "you", "for", "helping", "me."], ko: "도와줘서 고마워." },
    ],
  },

  // ── 중2 ──
  {
    id: "m-perfect",
    emoji: "🌉",
    title: "have + p.p. (현재완료)",
    subtitle: "과거부터 지금까지 이어진 일",
    grade: "중2",
    slides: [
      {
        emoji: "🌉",
        say: "<b>현재완료</b>는 과거에 시작된 일이 <b>지금까지 이어지거나 지금과 연결</b>되어 있을 때 써요. 과거와 현재를 잇는 다리라고 생각하면 돼요.",
        pattern: "have / has + 과거분사(p.p.)",
        examples: [
          { en: "I have lived here for 5 years.", ko: "나는 5년 동안 여기 살아 왔다. (지금도 산다)", emoji: "🏠" },
          { en: "She has lost her key.", ko: "그녀는 열쇠를 잃어버렸다. (지금도 없다)", emoji: "🔑" },
        ],
      },
      {
        emoji: "📝",
        say: "<b>과거분사(p.p.)</b>는 보통 -ed를 붙여요(played). 모양이 바뀌는 것도 있어요: go → <b>gone</b>, see → <b>seen</b>, eat → <b>eaten</b>, do → <b>done</b>, be → <b>been</b>. he·she·it이면 <b>has</b>를 써요.",
        pattern: "play-played-played · go-went-gone · see-saw-seen",
        examples: [
          { en: "I have finished my homework.", ko: "나는 숙제를 (방금) 끝냈다.", emoji: "✅" },
          { en: "He has gone to London.", ko: "그는 런던에 가 버렸다. (지금 여기 없다)", emoji: "✈️" },
        ],
      },
      {
        emoji: "🧭",
        say: "현재완료는 네 가지 뜻이 있어요. <b>경험</b>(~해 본 적 있다), <b>계속</b>(~해 왔다), <b>완료</b>(막 ~했다), <b>결과</b>(~해 버렸다).",
        pattern: "경험 · 계속 · 완료 · 결과",
        examples: [
          { en: "I have been to Japan twice.", ko: "나는 일본에 두 번 가 본 적이 있다. (경험)", emoji: "🗾" },
          { en: "We have known each other since 2020.", ko: "우리는 2020년부터 서로 알고 지냈다. (계속)", emoji: "🤝" },
          { en: "The movie has just started.", ko: "영화가 막 시작했다. (완료)", emoji: "🎬" },
        ],
      },
      {
        emoji: "⚠️",
        say: "주의! <b>yesterday, last week, ago</b>처럼 과거의 정확한 때를 말하는 말과는 현재완료를 함께 쓰지 않아요. 그때는 그냥 과거형이에요.",
        pattern: "I saw him yesterday. (○) · I have seen him yesterday. (✗)",
        examples: [
          { en: "I finished it two hours ago.", ko: "나는 그걸 두 시간 전에 끝냈다.", emoji: "⏱️" },
          { en: "I have finished it.", ko: "나는 그걸 다 끝냈다.", emoji: "✅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>have / has + p.p.</b>는 과거와 지금을 잇는 시제. 경험·계속·완료·결과, 그리고 yesterday·ago와는 같이 쓰지 않기!",
        pattern: "I have seen · She has gone",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have ___ this movie before.", ko: "나는 전에 이 영화를 본 적이 있다.", choices: ["saw", "seen", "see"], answer: 1, hint: "have 뒤에는 과거분사(seen)예요." },
      { type: "choose", q: "She ___ lived in Seoul for ten years.", ko: "그녀는 10년 동안 서울에 살아 왔다.", choices: ["have", "has"], answer: 1, hint: "She는 has예요." },
      { type: "choose", q: "I ___ my bag yesterday.", ko: "나는 어제 가방을 잃어버렸다.", choices: ["lost", "have lost"], answer: 0, hint: "yesterday가 있으면 과거형이에요." },
      { type: "choose", q: "Have you ever ___ to Busan?", ko: "부산에 가 본 적 있어?", choices: ["been", "gone", "went"], answer: 0, hint: "'가 본 적 있다'는 have been to예요." },
      { type: "choose", q: "The train has just ___.", ko: "기차가 막 떠났다.", choices: ["left", "leave", "leaving"], answer: 0, hint: "leave의 과거분사는 left예요." },
      { type: "order", words: ["I", "have", "finished", "my", "homework."], ko: "나는 숙제를 다 끝냈다." },
    ],
  },
  {
    id: "m-perfect-word",
    emoji: "⏳",
    title: "ever, never, since, for",
    subtitle: "현재완료와 짝꿍 단어",
    grade: "중2",
    slides: [
      {
        emoji: "❓",
        say: "경험을 물을 때는 <b>Have you ever + p.p.?</b>(~해 본 적 있니?)라고 해요. 대답은 Yes, I have. / No, I haven't.",
        pattern: "Have you ever ___? — Yes, I have. / No, I haven't.",
        examples: [
          { en: "Have you ever eaten Thai food?", ko: "태국 음식 먹어 본 적 있어?", emoji: "🍜" },
          { en: "Yes, I have.", ko: "응, 먹어 봤어.", emoji: "👍" },
          { en: "I have never seen snow.", ko: "나는 눈을 한 번도 본 적이 없다.", emoji: "❄️" },
        ],
      },
      {
        emoji: "📏",
        say: "'~ 동안'은 <b>for + 기간</b>, '~ 이후로'는 <b>since + 시작한 때</b>예요.",
        pattern: "for 3 years (기간) · since 2020 (시작점)",
        examples: [
          { en: "I have played the piano for six years.", ko: "나는 6년 동안 피아노를 쳐 왔다.", emoji: "🎹" },
          { en: "He has been sick since Monday.", ko: "그는 월요일부터 아팠다.", emoji: "🤒" },
        ],
      },
      {
        emoji: "✅",
        say: "<b>already</b>(이미)는 긍정문, <b>yet</b>은 부정문(아직)과 의문문(벌써)에 써요. <b>just</b>는 '막, 방금'이에요.",
        pattern: "already · yet · just",
        examples: [
          { en: "I have already eaten.", ko: "나는 이미 먹었다.", emoji: "🍽️" },
          { en: "She hasn't arrived yet.", ko: "그녀는 아직 도착하지 않았다.", emoji: "⌛" },
          { en: "Have you finished yet?", ko: "벌써 끝냈어?", emoji: "🤔" },
        ],
      },
      {
        emoji: "🕰️",
        say: "'얼마나 오래 ~했니?'는 <b>How long have you + p.p.?</b>라고 물어요.",
        pattern: "How long have you ___?",
        examples: [
          { en: "How long have you lived here?", ko: "여기에 얼마나 오래 살았어?", emoji: "🏡" },
          { en: "For three years.", ko: "3년 동안.", emoji: "3️⃣" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 경험은 <b>ever / never</b>, 기간은 <b>for</b>, 시작점은 <b>since</b>, 완료는 <b>already / yet / just</b>!",
        pattern: "ever · never · for · since · already · yet · just",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Have you ___ been to Jeju?", ko: "제주도에 가 본 적 있어?", choices: ["ever", "yet"], answer: 0, hint: "경험을 물을 때는 ever예요." },
      { type: "choose", q: "I have lived here ___ 2019.", ko: "나는 2019년부터 여기 살았다.", choices: ["for", "since"], answer: 1, hint: "시작한 때 앞에는 since예요." },
      { type: "choose", q: "We have known him ___ five years.", ko: "우리는 5년 동안 그를 알아 왔다.", choices: ["for", "since"], answer: 0, hint: "기간 앞에는 for예요." },
      { type: "choose", q: "I haven't finished it ___.", ko: "나는 아직 그걸 못 끝냈다.", choices: ["already", "yet"], answer: 1, hint: "부정문의 '아직'은 yet이에요." },
      { type: "choose", q: "Have you ever ridden a horse? — No, I ___.", ko: "말 타 본 적 있어? / 아니, 없어.", choices: ["haven't", "didn't", "don't"], answer: 0, hint: "Have로 물으면 have로 대답해요." },
      { type: "order", words: ["How", "long", "have", "you", "lived", "here?"], ko: "여기에 얼마나 오래 살았어?" },
    ],
  },
  {
    id: "m-passive",
    emoji: "🏗️",
    title: "be + p.p. (수동태)",
    subtitle: "~되다, ~받다",
    grade: "중2",
    slides: [
      {
        emoji: "🏗️",
        say: "누가 했는지보다 <b>무엇이 당했는지</b>가 중요할 때 <b>수동태</b>를 써요. '~되다, ~받다, ~당하다'라는 뜻이에요.",
        pattern: "주어 + be동사 + 과거분사(p.p.) (+ by 행위자)",
        examples: [
          { en: "This bridge was built in 1990.", ko: "이 다리는 1990년에 지어졌다.", emoji: "🌉" },
          { en: "English is spoken all over the world.", ko: "영어는 전 세계에서 쓰인다.", emoji: "🌍" },
        ],
      },
      {
        emoji: "🔄",
        say: "능동태를 수동태로 바꾸는 법: ① 목적어를 주어로 ② 동사를 be + p.p.로 ③ 원래 주어는 <b>by + 목적격</b>으로 뒤에!",
        pattern: "Tom broke the window. → The window was broken by Tom.",
        examples: [
          { en: "Many people love this song.", ko: "많은 사람들이 이 노래를 사랑한다.", emoji: "❤️" },
          { en: "This song is loved by many people.", ko: "이 노래는 많은 사람들에게 사랑받는다.", emoji: "🎵" },
        ],
      },
      {
        emoji: "⏰",
        say: "시제는 be동사로 나타내요. 현재는 <b>is / are p.p.</b>, 과거는 <b>was / were p.p.</b>, 미래는 <b>will be p.p.</b>",
        pattern: "is made · was made · will be made",
        examples: [
          { en: "Cheese is made from milk.", ko: "치즈는 우유로 만들어진다.", emoji: "🧀" },
          { en: "The letter was written by Sejong.", ko: "그 편지는 세종이 썼다.", emoji: "📜" },
          { en: "The results will be announced tomorrow.", ko: "결과는 내일 발표될 것이다.", emoji: "📢" },
        ],
      },
      {
        emoji: "🙅",
        say: "누가 했는지 모르거나 중요하지 않으면 <b>by ~</b>를 빼요. 부정문은 be동사 뒤에 not, 의문문은 be동사를 앞으로!",
        pattern: "It wasn't made ~ · Was it made ~?",
        examples: [
          { en: "My bike was stolen.", ko: "내 자전거를 도둑맞았다.", emoji: "🚲" },
          { en: "Was this picture painted by you?", ko: "이 그림 네가 그렸어?", emoji: "🖼️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 수동태는 <b>be + p.p.</b>, 행동한 사람은 <b>by ~</b>, 시제는 be동사로!",
        pattern: "The cake was made by Mom.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "This book was ___ by a famous writer.", ko: "이 책은 유명한 작가가 썼다.", choices: ["wrote", "written", "writing"], answer: 1, hint: "be 뒤에는 과거분사예요." },
      { type: "choose", q: "Rice ___ grown in Korea.", ko: "쌀은 한국에서 재배된다.", choices: ["is", "are", "was"], answer: 0, hint: "현재 사실이고 rice는 하나로 셉니다(is)." },
      { type: "choose", q: "The windows ___ cleaned yesterday.", ko: "창문은 어제 청소되었다.", choices: ["was", "were"], answer: 1, hint: "과거이고 windows는 여럿이라 were예요." },
      { type: "choose", q: "The cake was made ___ my sister.", ko: "그 케이크는 내 여동생이 만들었다.", choices: ["by", "to", "for"], answer: 0, hint: "행동한 사람은 by로 나타내요." },
      { type: "choose", q: "The concert will ___ held next week.", ko: "콘서트는 다음 주에 열릴 것이다.", choices: ["is", "be", "been"], answer: 1, hint: "will 뒤에는 be가 와요." },
      { type: "order", words: ["English", "is", "spoken", "in", "many", "countries."], ko: "영어는 많은 나라에서 쓰인다." },
    ],
  },
  {
    id: "m-relative",
    emoji: "🔗",
    title: "who, which, that",
    subtitle: "관계대명사: 명사를 뒤에서 꾸미기",
    grade: "중2",
    slides: [
      {
        emoji: "🔗",
        say: "<b>관계대명사</b>는 두 문장을 하나로 이어서 <b>앞의 명사를 뒤에서 설명</b>해 줘요. 우리말과 순서가 반대예요.",
        pattern: "명사 + who / which / that + 설명",
        examples: [
          { en: "I have a friend. + She lives in Canada.", ko: "나는 친구가 있다. + 그녀는 캐나다에 산다.", emoji: "🧩" },
          { en: "I have a friend who lives in Canada.", ko: "나는 캐나다에 사는 친구가 있다.", emoji: "🇨🇦" },
        ],
      },
      {
        emoji: "👤",
        say: "앞의 명사가 <b>사람</b>이면 <b>who</b>, <b>사물이나 동물</b>이면 <b>which</b>를 써요. <b>that</b>은 둘 다 돼요.",
        pattern: "사람 + who · 사물/동물 + which · 둘 다 that",
        examples: [
          { en: "The boy who is singing is my brother.", ko: "노래하고 있는 소년은 내 남동생이다.", emoji: "🎤" },
          { en: "I like the bag which has many pockets.", ko: "나는 주머니가 많은 그 가방이 좋다.", emoji: "🎒" },
          { en: "This is the dog that bit me.", ko: "이게 나를 문 개야.", emoji: "🐕" },
        ],
      },
      {
        emoji: "🔎",
        say: "읽는 요령: 명사 뒤에 who·which·that이 보이면 '<b>~하는 (명사)</b>'로 묶어서 읽어요. 진짜 동사는 그 묶음 뒤에 나와요!",
        pattern: "[The girl who won the prize] is my cousin.",
        examples: [
          { en: "The girl who won the prize is my cousin.", ko: "상을 받은 그 소녀는 내 사촌이다.", emoji: "🏆" },
          { en: "The phone which I bought broke.", ko: "내가 산 휴대폰이 고장 났다.", emoji: "📱" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 사람은 <b>who</b>, 사물·동물은 <b>which</b>, 둘 다 <b>that</b>. 명사를 뒤에서 '~하는'으로 꾸며요.",
        pattern: "a friend who ~ · a book which ~",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I know a girl ___ can speak French.", ko: "나는 프랑스어를 할 수 있는 소녀를 안다.", choices: ["who", "which"], answer: 0, hint: "사람(girl)은 who예요." },
      { type: "choose", q: "This is the book ___ changed my life.", ko: "이것은 내 인생을 바꾼 책이다.", choices: ["who", "which"], answer: 1, hint: "사물(book)은 which예요." },
      { type: "choose", q: "The man ___ lives next door is a pilot.", ko: "옆집에 사는 남자는 조종사다.", choices: ["that", "which"], answer: 0, hint: "사람에게는 who나 that을 써요." },
      { type: "choose", q: "I have a cat ___ has blue eyes.", ko: "나는 파란 눈을 가진 고양이가 있다.", choices: ["who", "which"], answer: 1, hint: "동물은 which예요." },
      { type: "choose", q: "The students who ___ in the gym are noisy.", ko: "체육관에 있는 학생들은 시끄럽다.", choices: ["is", "are"], answer: 1, hint: "who 앞의 명사 students가 여럿이라 are예요." },
      { type: "order", words: ["I", "have", "a", "friend", "who", "lives", "in", "Canada."], ko: "나는 캐나다에 사는 친구가 있다." },
    ],
  },
  {
    id: "m-relative-obj",
    emoji: "🧷",
    title: "목적격 관계대명사, whose",
    subtitle: "the book (that) I read",
    grade: "중2",
    slides: [
      {
        emoji: "🧷",
        say: "관계대명사 뒤에 <b>주어 + 동사</b>가 오면, 관계대명사는 '~을'의 역할(목적격)을 해요. 사람이면 <b>who(m)</b>, 사물이면 <b>which</b>, 둘 다 <b>that</b>.",
        pattern: "명사 + who(m) / which / that + 주어 + 동사",
        examples: [
          { en: "This is the cake that my mom made.", ko: "이것은 엄마가 만든 케이크다.", emoji: "🎂" },
          { en: "She is the singer whom I like most.", ko: "그녀는 내가 제일 좋아하는 가수다.", emoji: "🎤" },
        ],
      },
      {
        emoji: "✂️",
        say: "목적격 관계대명사는 <b>생략</b>할 수 있어요. 그래서 명사 바로 뒤에 '주어 + 동사'가 붙어 있으면 그 사이에 관계대명사가 숨어 있는 거예요.",
        pattern: "the movie (that) I saw",
        examples: [
          { en: "The movie I saw yesterday was great.", ko: "내가 어제 본 영화는 훌륭했다.", emoji: "🎬" },
          { en: "Is this the pen you lost?", ko: "이게 네가 잃어버린 펜이야?", emoji: "🖊️" },
        ],
      },
      {
        emoji: "🏷️",
        say: "<b>whose</b>는 '<b>그 사람(것)의</b>'라는 뜻이에요. whose 뒤에는 바로 명사가 와요.",
        pattern: "명사 + whose + 명사",
        examples: [
          { en: "I have a friend whose father is a chef.", ko: "나는 아버지가 요리사인 친구가 있다.", emoji: "👨‍🍳" },
          { en: "Look at the house whose roof is red.", ko: "지붕이 빨간 저 집을 봐.", emoji: "🏠" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 뒤에 <b>주어 + 동사</b>가 오면 목적격(생략 가능), 뒤에 <b>명사</b>가 바로 오면 <b>whose</b>!",
        pattern: "the book (that) I read · a boy whose dog is big",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "This is the bike ___ I bought last week.", ko: "이것은 내가 지난주에 산 자전거다.", choices: ["which", "who"], answer: 0, hint: "사물(bike)은 which예요." },
      { type: "choose", q: "I met a boy ___ sister is a singer.", ko: "나는 누나가 가수인 소년을 만났다.", choices: ["who", "whose"], answer: 1, hint: "뒤에 명사(sister)가 바로 오면 whose예요." },
      { type: "choose", q: "The man ___ we met was kind.", ko: "우리가 만난 그 남자는 친절했다.", choices: ["whom", "which"], answer: 0, hint: "사람이 '~을'의 역할이면 whom이에요." },
      { type: "choose", q: "The pizza ___ ate was delicious.", ko: "우리가 먹은 피자는 맛있었다.", choices: ["we", "which"], answer: 0, hint: "목적격 관계대명사가 생략되고 주어(we)만 남은 문장이에요." },
      { type: "choose", q: "She has a dog ___ name is Max.", ko: "그녀는 이름이 맥스인 개가 있다.", choices: ["which", "whose"], answer: 1, hint: "'그 개의 이름'이니까 whose예요." },
      { type: "order", words: ["The", "movie", "I", "saw", "was", "great."], ko: "내가 본 영화는 훌륭했다." },
    ],
  },
  {
    id: "m-to-adj-adv",
    emoji: "🎒",
    title: "to부정사: ~할, ~하기 위해",
    subtitle: "형용사적 · 부사적 용법",
    grade: "중2",
    slides: [
      {
        emoji: "🍪",
        say: "to부정사가 <b>명사 뒤</b>에 오면 '<b>~할</b>'이라는 뜻으로 명사를 꾸며요. (형용사적 용법)",
        pattern: "명사 + to 동사원형 = ~할 (명사)",
        examples: [
          { en: "I need something to eat.", ko: "나는 먹을 것이 필요하다.", emoji: "🍪" },
          { en: "I have a lot of homework to do.", ko: "나는 해야 할 숙제가 많다.", emoji: "📚" },
          { en: "It's time to go to bed.", ko: "잘 시간이다.", emoji: "🛌" },
        ],
      },
      {
        emoji: "🎯",
        say: "'<b>~하기 위해</b>'라는 목적을 나타낼 때도 to부정사를 써요. (부사적 용법) 더 분명하게 in order to라고도 해요.",
        pattern: "to 동사원형 = ~하기 위해",
        examples: [
          { en: "I went to the library to borrow books.", ko: "나는 책을 빌리기 위해 도서관에 갔다.", emoji: "📚" },
          { en: "She studies hard to be a doctor.", ko: "그녀는 의사가 되기 위해 열심히 공부한다.", emoji: "👩‍⚕️" },
        ],
      },
      {
        emoji: "😊",
        say: "감정 형용사 뒤에서는 '<b>~해서</b>'(감정의 이유)라는 뜻이에요.",
        pattern: "happy / glad / sad / sorry + to 동사원형",
        examples: [
          { en: "I'm happy to see you.", ko: "너를 만나서 기뻐.", emoji: "😊" },
          { en: "I was sad to hear the news.", ko: "그 소식을 들어서 슬펐다.", emoji: "😢" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 명사 뒤면 <b>~할</b>, 동작의 이유면 <b>~하기 위해</b>, 감정 뒤면 <b>~해서</b>. 위치를 보고 뜻을 골라요!",
        pattern: "something to eat · went there to meet · glad to see",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Give me something ___.", ko: "마실 것 좀 줘.", choices: ["to drink", "drinking"], answer: 0, hint: "'~할 (것)'은 명사 뒤 to부정사예요." },
      { type: "choose", q: "I got up early ___ the first bus.", ko: "나는 첫 버스를 타기 위해 일찍 일어났다.", choices: ["catch", "to catch"], answer: 1, hint: "'~하기 위해'는 to + 동사원형이에요." },
      { type: "choose", q: "I'm glad ___ you again.", ko: "다시 만나서 반가워.", choices: ["to meet", "meeting"], answer: 0, hint: "감정 뒤의 '~해서'는 to부정사예요." },
      { type: "choose", q: "I have no time ___.", ko: "나는 쉴 시간이 없다.", choices: ["to rest", "rest"], answer: 0, hint: "'쉴 시간'은 time to rest예요." },
      { type: "choose", q: "He went to Paris to ___ art.", ko: "그는 미술을 공부하기 위해 파리에 갔다.", choices: ["study", "studying"], answer: 0, hint: "to 뒤에는 동사원형이에요." },
      { type: "order", words: ["I", "need", "something", "to", "eat."], ko: "나는 먹을 것이 필요하다." },
    ],
  },
  {
    id: "m-object-comp",
    emoji: "🎈",
    title: "make me happy, want him to",
    subtitle: "5형식: 목적어를 설명하는 말",
    grade: "중2",
    slides: [
      {
        emoji: "🎈",
        say: "어떤 동사는 <b>목적어 뒤에 목적어를 설명하는 말</b>(목적격 보어)이 하나 더 와요. '목적어를 ~하게 만들다/부르다'라는 뜻이에요.",
        pattern: "주어 + 동사 + 목적어 + 보어",
        examples: [
          { en: "The movie made me sad.", ko: "그 영화는 나를 슬프게 만들었다.", emoji: "😢" },
          { en: "We call him Captain.", ko: "우리는 그를 캡틴이라고 부른다.", emoji: "🧢" },
          { en: "Keep your room clean.", ko: "방을 깨끗하게 유지해라.", emoji: "🧹" },
        ],
      },
      {
        emoji: "🙏",
        say: "want, ask, tell, expect 뒤에는 <b>목적어 + to 동사원형</b>이 와요. '(목적어)가 ~하기를 원하다 / 부탁하다 / 말하다'예요.",
        pattern: "want / ask / tell + 사람 + to 동사원형",
        examples: [
          { en: "I want you to come to my party.", ko: "나는 네가 내 파티에 오기를 원해.", emoji: "🎉" },
          { en: "Mom told me to clean my room.", ko: "엄마가 나에게 방을 청소하라고 하셨다.", emoji: "🧹" },
          { en: "He asked me to help him.", ko: "그는 나에게 도와 달라고 부탁했다.", emoji: "🤝" },
        ],
      },
      {
        emoji: "⚠️",
        say: "make·keep·find 뒤의 보어는 <b>형용사</b>예요. 부사(-ly)가 아니에요! make me happily(✗) → make me happy(○)",
        pattern: "make + 목적어 + 형용사",
        examples: [
          { en: "I found the book interesting.", ko: "나는 그 책이 흥미롭다는 것을 알았다.", emoji: "📖" },
          { en: "The news made everyone excited.", ko: "그 소식에 모두가 신이 났다.", emoji: "🥳" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>make / keep + 목적어 + 형용사</b>, <b>call + 목적어 + 이름</b>, <b>want / tell / ask + 목적어 + to 동사원형</b>!",
        pattern: "make me happy · want me to go",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The song makes me ___.", ko: "그 노래는 나를 행복하게 한다.", choices: ["happy", "happily"], answer: 0, hint: "make + 목적어 뒤에는 형용사예요." },
      { type: "choose", q: "I want you ___ me.", ko: "나는 네가 나를 도와주기를 원해.", choices: ["help", "to help"], answer: 1, hint: "want + 사람 + to 동사원형이에요." },
      { type: "choose", q: "The teacher told us ___ quiet.", ko: "선생님이 우리에게 조용히 하라고 하셨다.", choices: ["be", "to be"], answer: 1, hint: "tell + 사람 + to 동사원형이에요." },
      { type: "choose", q: "Please keep the door ___.", ko: "문을 닫아 두세요.", choices: ["closed", "closely"], answer: 0, hint: "keep + 목적어 뒤에는 형용사(상태)예요." },
      { type: "choose", q: "People call ___ Mr. Smile.", ko: "사람들은 그를 미스터 스마일이라고 부른다.", choices: ["he", "him"], answer: 1, hint: "동사 뒤 목적어 자리니까 him이에요." },
      { type: "order", words: ["Mom", "told", "me", "to", "clean", "my", "room."], ko: "엄마가 나에게 방을 청소하라고 하셨다." },
    ],
  },
  {
    id: "m-causative",
    emoji: "🧑‍🍳",
    title: "make / let / have + 동사원형",
    subtitle: "사역동사, 지각동사",
    grade: "중2",
    slides: [
      {
        emoji: "🧑‍🍳",
        say: "'(남)에게 ~하게 시키다'라는 동사를 <b>사역동사</b>라고 해요. <b>make</b>(억지로 시키다), <b>let</b>(하게 허락하다), <b>have</b>(하도록 하다). 뒤에 <b>목적어 + 동사원형</b>이 와요. to가 없어요!",
        pattern: "make / let / have + 목적어 + 동사원형",
        examples: [
          { en: "My mom made me eat vegetables.", ko: "엄마는 내가 채소를 먹게 하셨다.", emoji: "🥦" },
          { en: "Let me go!", ko: "나 가게 해 줘!", emoji: "🚪" },
          { en: "I had my brother wash the dishes.", ko: "나는 동생에게 설거지를 하게 했다.", emoji: "🍽️" },
        ],
      },
      {
        emoji: "🆚",
        say: "비교해 봐요. want·tell·ask는 <b>to</b>가 필요하지만, make·let·have는 <b>to 없이</b> 동사원형이에요.",
        pattern: "tell him to go · make him go",
        examples: [
          { en: "She told me to wait.", ko: "그녀는 나에게 기다리라고 말했다.", emoji: "⏳" },
          { en: "She made me wait.", ko: "그녀는 나를 기다리게 했다.", emoji: "😤" },
        ],
      },
      {
        emoji: "👀",
        say: "see, watch, hear, feel처럼 감각으로 느끼는 동사(<b>지각동사</b>)도 <b>목적어 + 동사원형</b>(또는 -ing)을 써요.",
        pattern: "see / hear + 목적어 + 동사원형(-ing)",
        examples: [
          { en: "I saw him run.", ko: "나는 그가 달리는 것을 보았다.", emoji: "🏃" },
          { en: "I heard someone singing.", ko: "나는 누군가 노래하고 있는 것을 들었다.", emoji: "🎶" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>make·let·have</b>와 <b>see·hear·watch·feel</b> 뒤에는 목적어 + <b>동사원형</b>. to를 넣지 않기!",
        pattern: "let me know · saw her dance",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "My dad let me ___ the game.", ko: "아빠는 내가 게임을 하게 해 주셨다.", choices: ["play", "to play"], answer: 0, hint: "let 뒤에는 동사원형이에요." },
      { type: "choose", q: "The teacher made us ___ again.", ko: "선생님은 우리에게 다시 쓰게 하셨다.", choices: ["write", "to write"], answer: 0, hint: "make 뒤에는 동사원형이에요." },
      { type: "choose", q: "She asked me ___ the door.", ko: "그녀는 나에게 문을 열어 달라고 부탁했다.", choices: ["open", "to open"], answer: 1, hint: "ask는 to가 필요해요." },
      { type: "choose", q: "I saw a cat ___ the street.", ko: "나는 고양이가 길을 건너는 것을 보았다.", choices: ["cross", "to cross"], answer: 0, hint: "지각동사 see 뒤에는 동사원형이에요." },
      { type: "choose", q: "Please let me ___.", ko: "제게 알려 주세요.", choices: ["know", "knowing", "to know"], answer: 0, hint: "let me know는 통째로 외워 두면 좋아요." },
      { type: "order", words: ["I", "heard", "someone", "call", "my", "name."], ko: "나는 누군가 내 이름을 부르는 것을 들었다." },
    ],
  },
  {
    id: "m-as-as",
    emoji: "⚖️",
    title: "as ~ as, one of the -est",
    subtitle: "비교 더 알아보기",
    grade: "중2",
    slides: [
      {
        emoji: "⚖️",
        say: "'~만큼 ~한'은 <b>as + 원래 모양 + as</b>예요. 둘이 똑같을 때 써요.",
        pattern: "A is as ___ as B.",
        examples: [
          { en: "He is as tall as his father.", ko: "그는 아버지만큼 키가 크다.", emoji: "📏" },
          { en: "This box is as heavy as that one.", ko: "이 상자는 저것만큼 무겁다.", emoji: "📦" },
        ],
      },
      {
        emoji: "🙅",
        say: "부정하면 <b>not as ~ as</b>, '~만큼 ~하지 않다'예요. 결국 '더 ~하다'의 반대 뜻이에요.",
        pattern: "A is not as ___ as B. (= B가 더 ~하다)",
        examples: [
          { en: "I'm not as fast as my brother.", ko: "나는 형만큼 빠르지 않다.", emoji: "🏃" },
          { en: "Math is not as easy as English for me.", ko: "나에게 수학은 영어만큼 쉽지 않다.", emoji: "➗" },
        ],
      },
      {
        emoji: "💪",
        say: "비교급을 강조할 때는 <b>much, even, far</b>를 앞에 써요. '훨씬 더 ~한'이에요. very는 안 돼요!",
        pattern: "much / even / far + 비교급",
        examples: [
          { en: "Your bag is much bigger than mine.", ko: "네 가방이 내 것보다 훨씬 크다.", emoji: "👜" },
          { en: "Today is even colder than yesterday.", ko: "오늘은 어제보다 훨씬 더 춥다.", emoji: "🥶" },
        ],
      },
      {
        emoji: "🏆",
        say: "'가장 ~한 것들 중 하나'는 <b>one of the + 최상급 + 복수명사</b>예요. 명사가 여럿(-s)인 것에 주의!",
        pattern: "one of the ___est ___s",
        examples: [
          { en: "Seoul is one of the biggest cities in Asia.", ko: "서울은 아시아에서 가장 큰 도시 중 하나다.", emoji: "🏙️" },
          { en: "She is one of the best players on the team.", ko: "그녀는 팀에서 가장 뛰어난 선수 중 한 명이다.", emoji: "⭐" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 같으면 <b>as ~ as</b>, 강조는 <b>much + 비교급</b>, '가장 ~한 것 중 하나'는 <b>one of the -est + 복수</b>!",
        pattern: "as tall as · much taller · one of the tallest boys",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "She is as ___ as her mother.", ko: "그녀는 엄마만큼 키가 크다.", choices: ["tall", "taller", "tallest"], answer: 0, hint: "as와 as 사이에는 원래 모양이에요." },
      { type: "choose", q: "This phone is ___ cheaper than that one.", ko: "이 휴대폰이 저것보다 훨씬 싸다.", choices: ["very", "much"], answer: 1, hint: "비교급 강조는 much예요." },
      { type: "choose", q: "He is one of the best ___ in Korea.", ko: "그는 한국에서 가장 뛰어난 가수 중 한 명이다.", choices: ["singer", "singers"], answer: 1, hint: "one of the 뒤에는 복수명사예요." },
      { type: "choose", q: "My room is not as ___ as yours.", ko: "내 방은 네 방만큼 크지 않다.", choices: ["big", "bigger"], answer: 0, hint: "not as ~ as 사이에도 원래 모양이에요." },
      { type: "choose", q: "Today is ___ hotter than yesterday.", ko: "오늘은 어제보다 훨씬 더 덥다.", choices: ["even", "very"], answer: 0, hint: "비교급 강조는 even도 돼요." },
      { type: "order", words: ["He", "is", "as", "tall", "as", "his", "father."], ko: "그는 아버지만큼 키가 크다." },
    ],
  },

  // ── 중3 ──
  {
    id: "m-what",
    emoji: "📦",
    title: "관계대명사 what",
    subtitle: "~하는 것 (= the thing that)",
    grade: "중3",
    slides: [
      {
        emoji: "📦",
        say: "<b>what</b>은 질문의 '무엇' 말고도, 문장 안에서 '<b>~하는 것</b>'이라는 뜻으로 쓰여요. <b>the thing(s) that</b>과 같은 뜻이에요.",
        pattern: "what = the thing that = ~하는 것",
        examples: [
          { en: "What I want is a new bike.", ko: "내가 원하는 것은 새 자전거다.", emoji: "🚲" },
          { en: "This is what I made.", ko: "이것이 내가 만든 것이다.", emoji: "🛠️" },
        ],
      },
      {
        emoji: "🆚",
        say: "<b>that / which</b>는 앞에 꾸밀 명사가 있어야 하지만, <b>what</b>은 앞에 명사가 <b>없어요</b>. 명사를 이미 품고 있기 때문이에요.",
        pattern: "the thing that I said = what I said",
        examples: [
          { en: "I believe what you said.", ko: "나는 네가 말한 것을 믿는다.", emoji: "🤞" },
          { en: "I believe the story that you told.", ko: "나는 네가 한 이야기를 믿는다.", emoji: "📖" },
        ],
      },
      {
        emoji: "🔎",
        say: "what이 이끄는 덩어리는 문장에서 주어, 목적어, 보어가 돼요. 덩어리를 하나로 묶어서 '~하는 것'으로 읽어요.",
        pattern: "[What he said] was true.",
        examples: [
          { en: "What he said was true.", ko: "그가 말한 것은 사실이었다.", emoji: "✅" },
          { en: "Show me what you have.", ko: "네가 가진 것을 보여 줘.", emoji: "👐" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 앞에 명사가 없고 '~하는 것'이면 <b>what</b>, 앞에 명사가 있으면 <b>that / which</b>!",
        pattern: "what I need · the book that I need",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ I need is your help.", ko: "내가 필요한 것은 너의 도움이야.", choices: ["What", "That"], answer: 0, hint: "앞에 명사가 없고 '~하는 것'이면 what이에요." },
      { type: "choose", q: "This is the bag ___ I bought.", ko: "이것이 내가 산 가방이다.", choices: ["what", "that"], answer: 1, hint: "앞에 명사(bag)가 있으면 that이에요." },
      { type: "choose", q: "Tell me ___ happened.", ko: "무슨 일이 일어났는지 말해 줘.", choices: ["what", "which"], answer: 0, hint: "앞에 명사가 없어요." },
      { type: "choose", q: "Don't believe everything ___ you read online.", ko: "온라인에서 읽는 모든 것을 믿지 마.", choices: ["what", "that"], answer: 1, hint: "앞에 명사(everything)가 있으면 that이에요." },
      { type: "choose", q: "___ she cooked was delicious.", ko: "그녀가 요리한 것은 맛있었다.", choices: ["What", "Which"], answer: 0, hint: "'~한 것'이 주어니까 What이에요." },
      { type: "order", words: ["This", "is", "what", "I", "made."], ko: "이것이 내가 만든 것이다." },
    ],
  },
  {
    id: "m-rel-adverb",
    emoji: "📍",
    title: "where, when, why, how",
    subtitle: "관계부사: 장소·때·이유·방법",
    grade: "중3",
    slides: [
      {
        emoji: "📍",
        say: "<b>관계부사</b>는 장소, 때, 이유, 방법을 나타내는 명사를 뒤에서 꾸며요. 장소는 <b>where</b>, 때는 <b>when</b>.",
        pattern: "장소 + where · 때 + when",
        examples: [
          { en: "This is the house where I was born.", ko: "이곳이 내가 태어난 집이다.", emoji: "🏠" },
          { en: "I remember the day when we first met.", ko: "나는 우리가 처음 만난 날을 기억한다.", emoji: "📅" },
        ],
      },
      {
        emoji: "❓",
        say: "이유는 <b>the reason why</b>, 방법은 <b>how</b>를 써요. 단, <b>the way how</b>는 함께 쓰지 않아요. the way 또는 how 중 하나만!",
        pattern: "the reason why · the way (= how)",
        examples: [
          { en: "Tell me the reason why you were late.", ko: "네가 늦은 이유를 말해 줘.", emoji: "⏰" },
          { en: "This is how I solved the problem.", ko: "이렇게 해서 나는 그 문제를 풀었다.", emoji: "🧩" },
        ],
      },
      {
        emoji: "🆚",
        say: "관계부사 뒤에는 <b>빠진 것 없는 완전한 문장</b>이 와요. 관계대명사(which, that) 뒤에는 주어나 목적어가 하나 빠져 있어요.",
        pattern: "the park where we played (완전) · the park which we visited (목적어 빠짐)",
        examples: [
          { en: "This is the park where we played.", ko: "이곳이 우리가 놀던 공원이다.", emoji: "🛝" },
          { en: "This is the park which we visited.", ko: "이곳이 우리가 방문한 공원이다.", emoji: "🏞️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 장소 <b>where</b>, 때 <b>when</b>, 이유 <b>why</b>, 방법 <b>how</b>(the way와 같이 쓰지 않기)!",
        pattern: "the place where · the time when · the reason why · how",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "This is the town ___ I grew up.", ko: "이곳이 내가 자란 마을이다.", choices: ["where", "when"], answer: 0, hint: "장소(town)는 where예요." },
      { type: "choose", q: "Do you remember the year ___ we moved here?", ko: "우리가 여기로 이사 온 해를 기억하니?", choices: ["where", "when"], answer: 1, hint: "때(year)는 when이에요." },
      { type: "choose", q: "I don't know the reason ___ she cried.", ko: "나는 그녀가 운 이유를 모른다.", choices: ["why", "how"], answer: 0, hint: "이유는 why예요." },
      { type: "choose", q: "This is ___ I make kimchi.", ko: "이게 내가 김치를 만드는 방법이야.", choices: ["how", "the way how"], answer: 0, hint: "the way how는 함께 쓰지 않아요." },
      { type: "choose", q: "That's the museum ___ we visited last year.", ko: "저곳이 우리가 작년에 방문한 박물관이다.", choices: ["where", "which"], answer: 1, hint: "visited 뒤에 목적어가 빠져 있으니 관계대명사 which예요." },
      { type: "order", words: ["This", "is", "the", "house", "where", "I", "was", "born."], ko: "이곳이 내가 태어난 집이다." },
    ],
  },
  {
    id: "m-participle",
    emoji: "👶",
    title: "a sleeping baby, a broken cup",
    subtitle: "분사: -ing와 p.p.로 꾸미기",
    grade: "중3",
    slides: [
      {
        emoji: "👶",
        say: "동사를 <b>-ing</b>나 <b>p.p.</b>로 바꿔서 명사를 꾸밀 수 있어요. 이것을 <b>분사</b>라고 해요. <b>-ing</b>는 '<b>~하는, ~하고 있는</b>'(스스로 함)이에요.",
        pattern: "현재분사(-ing) = ~하는, ~하고 있는",
        examples: [
          { en: "Look at the sleeping baby.", ko: "자고 있는 아기를 봐.", emoji: "👶" },
          { en: "a running dog", ko: "달리고 있는 개", emoji: "🐕" },
        ],
      },
      {
        emoji: "🍵",
        say: "<b>p.p.</b>는 '<b>~된, ~당한</b>'(당함)이에요.",
        pattern: "과거분사(p.p.) = ~된, ~당한",
        examples: [
          { en: "Don't touch the broken cup.", ko: "깨진 컵을 만지지 마.", emoji: "🍵" },
          { en: "I like fried chicken.", ko: "나는 튀긴 닭(프라이드치킨)을 좋아한다.", emoji: "🍗" },
        ],
      },
      {
        emoji: "↩️",
        say: "분사에 다른 말이 붙어 길어지면 <b>명사 뒤</b>로 가요.",
        pattern: "명사 + 분사 + 다른 말",
        examples: [
          { en: "The boy playing the guitar is Jun.", ko: "기타를 치고 있는 소년은 준이다.", emoji: "🎸" },
          { en: "This is a book written in English.", ko: "이것은 영어로 쓰인 책이다.", emoji: "📕" },
        ],
      },
      {
        emoji: "😴",
        say: "감정 분사: 감정을 <b>일으키는</b> 것은 <b>-ing</b>(boring 지루하게 하는), 감정을 <b>느끼는</b> 사람은 <b>-ed</b>(bored 지루함을 느끼는)예요.",
        pattern: "The movie was boring. · I was bored.",
        examples: [
          { en: "The game was exciting.", ko: "그 경기는 흥미진진했다.", emoji: "⚽" },
          { en: "We were excited.", ko: "우리는 신이 났다.", emoji: "🥳" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 스스로 하면 <b>-ing</b>, 당하면 <b>p.p.</b>. 감정은 주는 쪽이 -ing, 느끼는 쪽이 -ed!",
        pattern: "a crying baby · a stolen bike · bored / boring",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Look at the ___ birds.", ko: "날고 있는 새들을 봐.", choices: ["flying", "flown"], answer: 0, hint: "스스로 날고 있으니 -ing예요." },
      { type: "choose", q: "I found my ___ wallet.", ko: "나는 잃어버린 지갑을 찾았다.", choices: ["losing", "lost"], answer: 1, hint: "잃어버려진 것이니 p.p.예요." },
      { type: "choose", q: "The movie was very ___.", ko: "그 영화는 아주 지루했다.", choices: ["boring", "bored"], answer: 0, hint: "영화가 지루함을 주니까 -ing예요." },
      { type: "choose", q: "I was ___ at the news.", ko: "나는 그 소식에 놀랐다.", choices: ["surprising", "surprised"], answer: 1, hint: "내가 놀람을 느끼니까 -ed예요." },
      { type: "choose", q: "The girl ___ a red hat is my sister.", ko: "빨간 모자를 쓰고 있는 소녀는 내 여동생이다.", choices: ["wearing", "worn"], answer: 0, hint: "소녀가 스스로 쓰고 있으니 -ing예요." },
      { type: "order", words: ["This", "is", "a", "book", "written", "in", "English."], ko: "이것은 영어로 쓰인 책이다." },
    ],
  },
  {
    id: "m-participle-clause",
    emoji: "✂️",
    title: "분사구문",
    subtitle: "Walking home, I met him.",
    grade: "중3",
    slides: [
      {
        emoji: "✂️",
        say: "<b>분사구문</b>은 when, because 같은 접속사가 있는 부분을 <b>-ing로 짧게 줄인</b> 거예요. 글에서 자주 나와요.",
        pattern: "When I walked home, I met him. → Walking home, I met him.",
        examples: [
          { en: "Walking home, I met my teacher.", ko: "집에 걸어가다가 나는 선생님을 만났다.", emoji: "🚶" },
          { en: "Feeling tired, she went to bed early.", ko: "피곤해서 그녀는 일찍 잤다.", emoji: "😴" },
        ],
      },
      {
        emoji: "🛠️",
        say: "만드는 법: ① 접속사를 지워요 ② 앞뒤 주어가 같으면 주어도 지워요 ③ 동사를 <b>-ing</b>로 바꿔요.",
        pattern: "Because she was sick, she stayed home. → Being sick, she stayed home.",
        examples: [
          { en: "Being sick, she stayed home.", ko: "아파서 그녀는 집에 있었다.", emoji: "🤒" },
          { en: "Hearing the news, he cried.", ko: "그 소식을 듣고 그는 울었다.", emoji: "😢" },
        ],
      },
      {
        emoji: "🔎",
        say: "해석은 문맥에 맞게 해요. '<b>~할 때, ~해서, ~하면서, ~하면</b>' 중에서 자연스러운 것을 골라요.",
        pattern: "~할 때 · ~해서 · ~하면서 · ~하면",
        examples: [
          { en: "Listening to music, I did my homework.", ko: "음악을 들으면서 나는 숙제를 했다.", emoji: "🎧" },
          { en: "Turning left, you will see the bank.", ko: "왼쪽으로 돌면 은행이 보일 거예요.", emoji: "⬅️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 분사구문은 <b>접속사 + 주어</b>를 빼고 <b>동사ing</b>로 시작해요. 뜻은 문맥으로 '~할 때, ~해서, ~하면서'!",
        pattern: "Seeing me, she smiled. (나를 보자 그녀는 웃었다)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ the door, I saw a cat.", ko: "문을 열었을 때 고양이 한 마리가 보였다.", choices: ["Opening", "Opened"], answer: 0, hint: "내가 스스로 문을 연 것이니 -ing예요." },
      { type: "choose", q: "___ hungry, he ate two bowls of rice.", ko: "배가 고파서 그는 밥을 두 그릇 먹었다.", choices: ["Being", "Be"], answer: 0, hint: "was를 분사구문으로 바꾸면 Being이에요." },
      { type: "choose", q: "Smiling brightly, she ___ hello.", ko: "환하게 웃으면서 그녀는 인사했다.", choices: ["said", "saying"], answer: 0, hint: "분사구문 뒤의 진짜 문장에는 보통 동사가 필요해요." },
      { type: "choose", q: "Walking to school, ___.", ko: "학교에 걸어가다가 나는 친구를 만났다.", choices: ["I met a friend", "a friend met"], answer: 0, hint: "걸어간 사람(I)이 뒤 문장의 주어여야 해요." },
      { type: "choose", q: "___ the news, I was shocked.", ko: "그 소식을 들었을 때 나는 충격을 받았다. (When I heard를 줄이면?)", choices: ["Hearing", "Heard"], answer: 0, hint: "접속사와 주어를 빼고 동사를 -ing로 바꿔요." },
      { type: "order", words: ["Feeling", "tired,", "she", "went", "to", "bed."], ko: "피곤해서 그녀는 잠자리에 들었다." },
    ],
  },
  {
    id: "m-if",
    emoji: "🧞",
    title: "If I were a bird",
    subtitle: "가정법 과거: 사실과 반대 상상",
    grade: "중3",
    slides: [
      {
        emoji: "🌦️",
        say: "<b>If</b>(만약 ~하면) 문장은 두 종류예요. 실제로 일어날 수 있는 일은 그냥 현재형으로 써요. (조건문)",
        pattern: "If it rains tomorrow, I will stay home.",
        examples: [
          { en: "If it rains tomorrow, I will stay home.", ko: "내일 비가 오면 나는 집에 있을 것이다.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "🧞",
        say: "지금 <b>사실이 아닌 일을 상상</b>할 때는 시제를 한 칸 뒤로(과거로) 써요. 이것을 <b>가정법 과거</b>라고 해요. 뜻은 '(지금) ~라면 ~할 텐데'예요.",
        pattern: "If + 주어 + 과거동사, 주어 + would / could + 동사원형",
        examples: [
          { en: "If I had wings, I could fly.", ko: "나에게 날개가 있다면 날 수 있을 텐데. (실제로는 없다)", emoji: "🪽" },
          { en: "If I knew her number, I would call her.", ko: "그녀 번호를 안다면 전화할 텐데. (실제로는 모른다)", emoji: "📞" },
        ],
      },
      {
        emoji: "🐦",
        say: "가정법에서 be동사는 주어가 무엇이든 <b>were</b>를 써요. If I were you(내가 너라면)는 충고할 때 자주 써요.",
        pattern: "If I were ___, I would ___.",
        examples: [
          { en: "If I were a bird, I would fly to you.", ko: "내가 새라면 너에게 날아갈 텐데.", emoji: "🐦" },
          { en: "If I were you, I would say sorry.", ko: "내가 너라면 사과할 거야.", emoji: "🙇" },
        ],
      },
      {
        emoji: "🌠",
        say: "'~라면 좋을 텐데'는 <b>I wish + 과거동사</b>예요. 지금 이루어지지 않은 바람이에요.",
        pattern: "I wish I ___ed. · I wish I were ___.",
        examples: [
          { en: "I wish I had a dog.", ko: "강아지가 있으면 좋을 텐데.", emoji: "🐶" },
          { en: "I wish I were taller.", ko: "키가 더 크면 좋을 텐데.", emoji: "📏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 진짜 상상은 <b>If + 과거, would + 동사원형</b>. be동사는 <b>were</b>. 바람은 <b>I wish + 과거</b>!",
        pattern: "If I were rich, I would travel.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "If I ___ a lot of money, I would buy a house.", ko: "돈이 많다면 집을 살 텐데.", choices: ["have", "had"], answer: 1, hint: "사실과 반대인 상상은 과거형이에요." },
      { type: "choose", q: "If I ___ you, I would study harder.", ko: "내가 너라면 더 열심히 공부할 거야.", choices: ["am", "was", "were"], answer: 2, hint: "가정법에서는 were를 써요." },
      { type: "choose", q: "If she knew the answer, she ___ tell us.", ko: "그녀가 답을 안다면 우리에게 말해 줄 텐데.", choices: ["will", "would"], answer: 1, hint: "가정법 과거는 would예요." },
      { type: "choose", q: "If it ___ tomorrow, we will cancel the picnic.", ko: "내일 비가 오면 우리는 소풍을 취소할 것이다.", choices: ["rains", "rained"], answer: 0, hint: "실제로 일어날 수 있는 일은 현재형이에요." },
      { type: "choose", q: "I wish I ___ fly.", ko: "날 수 있으면 좋을 텐데.", choices: ["can", "could"], answer: 1, hint: "I wish 뒤에는 과거형(could)이에요." },
      { type: "order", words: ["If", "I", "were", "a", "bird,", "I", "would", "fly."], ko: "내가 새라면 날아갈 텐데." },
    ],
  },
  {
    id: "m-past-perfect",
    emoji: "⏪",
    title: "had + p.p. (과거완료)",
    subtitle: "과거보다 더 이전의 일",
    grade: "중3",
    slides: [
      {
        emoji: "⏪",
        say: "과거의 어느 때보다 <b>더 먼저 일어난 일</b>은 <b>had + p.p.</b>로 써요. 이것을 <b>과거완료</b>라고 해요.",
        pattern: "had + 과거분사",
        examples: [
          { en: "When I arrived, the movie had already started.", ko: "내가 도착했을 때 영화는 이미 시작했었다.", emoji: "🎬" },
          { en: "I lost the pen that my dad had given me.", ko: "나는 아빠가 (전에) 주셨던 펜을 잃어버렸다.", emoji: "🖊️" },
        ],
      },
      {
        emoji: "📏",
        say: "시간 순서를 그려 보면 쉬워요. 먼저 일어난 일 → <b>had p.p.</b>, 나중 일 → <b>과거형</b>.",
        pattern: "먼저: had p.p. → 나중: 과거형",
        examples: [
          { en: "The train had left before we got to the station.", ko: "우리가 역에 도착하기 전에 기차는 떠났었다.", emoji: "🚆" },
          { en: "She said that she had seen the movie.", ko: "그녀는 그 영화를 봤었다고 말했다.", emoji: "💬" },
        ],
      },
      {
        emoji: "🌉",
        say: "현재완료(have p.p.)가 과거와 '지금'을 잇는다면, 과거완료(had p.p.)는 더 옛날과 '과거의 그때'를 이어요.",
        pattern: "have p.p. (~지금) · had p.p. (~그때)",
        examples: [
          { en: "I have lived here for 3 years.", ko: "나는 (지금까지) 3년간 여기 살았다.", emoji: "🏠" },
          { en: "I had lived there for 3 years before I moved.", ko: "나는 이사하기 전까지 3년간 그곳에 살았었다.", emoji: "📦" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 과거의 그때보다 <b>더 먼저</b>면 <b>had + p.p.</b>!",
        pattern: "When I got there, he had left.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "When I got home, my brother ___ already eaten dinner.", ko: "내가 집에 왔을 때 동생은 이미 저녁을 먹었었다.", choices: ["has", "had"], answer: 1, hint: "과거(got)보다 먼저니까 had예요." },
      { type: "choose", q: "I couldn't enter because I had ___ my key.", ko: "열쇠를 잃어버렸었기 때문에 들어갈 수 없었다.", choices: ["lost", "lose"], answer: 0, hint: "had 뒤에는 과거분사예요." },
      { type: "choose", q: "The game had ___ before we arrived.", ko: "우리가 도착하기 전에 경기는 끝났었다.", choices: ["finish", "finished"], answer: 1, hint: "had + 과거분사예요." },
      { type: "choose", q: "She showed me the picture she ___ painted.", ko: "그녀는 (전에) 그렸던 그림을 내게 보여 주었다.", choices: ["had", "has"], answer: 0, hint: "보여 준 것보다 먼저 그렸으니 had예요." },
      { type: "choose", q: "I ___ lived here for 3 years.", ko: "나는 3년 동안 여기 살아 왔다. (지금도 산다)", choices: ["have", "had"], answer: 0, hint: "지금까지 이어지면 현재완료 have예요." },
      { type: "order", words: ["The", "train", "had", "already", "left."], ko: "기차는 이미 떠났었다." },
    ],
  },
  {
    id: "m-indirect-q",
    emoji: "🗨️",
    title: "Do you know where he is?",
    subtitle: "간접의문문",
    grade: "중3",
    slides: [
      {
        emoji: "🗨️",
        say: "질문이 다른 문장 안에 들어가면 <b>간접의문문</b>이 돼요. 이때 순서가 <b>의문사 + 주어 + 동사</b>로 바뀌어요!",
        pattern: "Where is he? → Do you know where he is?",
        examples: [
          { en: "Do you know where he is?", ko: "그가 어디 있는지 아니?", emoji: "📍" },
          { en: "I don't know what she wants.", ko: "나는 그녀가 무엇을 원하는지 모른다.", emoji: "🤷" },
        ],
      },
      {
        emoji: "🔧",
        say: "do / does / did가 있던 질문은 그것을 빼고 동사 모양을 바꿔요.",
        pattern: "What does she like? → I know what she likes.",
        examples: [
          { en: "Can you tell me when the store opens?", ko: "가게가 언제 여는지 알려 줄래요?", emoji: "🏪" },
          { en: "I wonder why he left early.", ko: "그가 왜 일찍 떠났는지 궁금하다.", emoji: "🤔" },
        ],
      },
      {
        emoji: "❔",
        say: "의문사가 없는 질문(Yes/No 질문)은 <b>if</b>나 <b>whether</b>(~인지 아닌지)를 써요.",
        pattern: "Is he home? → I don't know if he is home.",
        examples: [
          { en: "I don't know if he is home.", ko: "나는 그가 집에 있는지 모른다.", emoji: "🏠" },
          { en: "Ask her whether she can come.", ko: "그녀에게 올 수 있는지 물어봐.", emoji: "📲" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 간접의문문은 <b>의문사 + 주어 + 동사</b>, 의문사가 없으면 <b>if / whether + 주어 + 동사</b>!",
        pattern: "where he is · what she likes · if he is home",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Do you know where ___?", ko: "그녀가 어디 사는지 아니?", choices: ["she lives", "does she live"], answer: 0, hint: "간접의문문은 주어 + 동사 순서예요." },
      { type: "choose", q: "I don't know what ___.", ko: "나는 그의 이름이 뭔지 모른다.", choices: ["his name is", "is his name"], answer: 0, hint: "의문사 + 주어 + 동사예요." },
      { type: "choose", q: "Can you tell me when ___?", ko: "기차가 언제 출발하는지 알려 줄래요?", choices: ["the train leaves", "does the train leave"], answer: 0, hint: "does를 빼고 동사에 -s를 붙여요." },
      { type: "choose", q: "I wonder ___ it will rain tomorrow.", ko: "내일 비가 올지 궁금하다.", choices: ["if", "what"], answer: 0, hint: "의문사 없는 질문은 if예요." },
      { type: "choose", q: "Please tell me why ___ late.", ko: "네가 왜 늦었는지 말해 줘.", choices: ["you were", "were you"], answer: 0, hint: "주어 + 동사 순서예요." },
      { type: "order", words: ["Do", "you", "know", "where", "he", "is?"], ko: "그가 어디 있는지 아니?" },
    ],
  },
  {
    id: "m-too-enough",
    emoji: "🎢",
    title: "too ~ to, enough to, so ~ that",
    subtitle: "정도를 나타내는 표현",
    grade: "중3",
    slides: [
      {
        emoji: "🎢",
        say: "<b>too + 형용사 + to 동사원형</b>은 '<b>너무 ~해서 …할 수 없다</b>'예요. not이 없어도 부정의 뜻이에요!",
        pattern: "too ___ to ___ = 너무 ~해서 …할 수 없다",
        examples: [
          { en: "I'm too tired to walk.", ko: "나는 너무 피곤해서 걸을 수 없다.", emoji: "😩" },
          { en: "The box is too heavy to lift.", ko: "그 상자는 너무 무거워서 들 수 없다.", emoji: "📦" },
        ],
      },
      {
        emoji: "✅",
        say: "<b>형용사 + enough + to 동사원형</b>은 '<b>…할 만큼 충분히 ~하다</b>'예요. enough가 형용사 <b>뒤</b>에 오는 것에 주의!",
        pattern: "___ enough to ___",
        examples: [
          { en: "She is old enough to drive.", ko: "그녀는 운전할 만큼 나이가 들었다.", emoji: "🚗" },
          { en: "He was brave enough to say sorry.", ko: "그는 사과할 만큼 용감했다.", emoji: "🙇" },
        ],
      },
      {
        emoji: "🔗",
        say: "<b>so + 형용사 + that + 주어 + 동사</b>는 '<b>너무 ~해서 …하다</b>'예요. too ~ to는 so ~ that ... can't로 바꿀 수 있어요.",
        pattern: "so ___ that ___ · too ~ to = so ~ that ... can't",
        examples: [
          { en: "It was so cold that we stayed inside.", ko: "너무 추워서 우리는 안에 있었다.", emoji: "🥶" },
          { en: "I'm so tired that I can't walk.", ko: "나는 너무 피곤해서 걸을 수 없다.", emoji: "😩" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>too ~ to</b>(너무 ~해서 못 한다), <b>~ enough to</b>(…할 만큼 충분히), <b>so ~ that</b>(너무 ~해서 …하다)!",
        pattern: "too hot to eat · old enough to go · so hot that ~",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The soup is ___ hot to eat.", ko: "수프가 너무 뜨거워서 먹을 수 없다.", choices: ["too", "so", "enough"], answer: 0, hint: "'너무 ~해서 못 한다'는 too ~ to예요." },
      { type: "choose", q: "He is tall ___ to reach the shelf.", ko: "그는 선반에 닿을 만큼 키가 크다.", choices: ["too", "enough"], answer: 1, hint: "형용사 뒤의 enough예요." },
      { type: "choose", q: "It was ___ funny that everyone laughed.", ko: "너무 웃겨서 모두가 웃었다.", choices: ["so", "too"], answer: 0, hint: "that이 뒤에 오면 so예요." },
      { type: "choose", q: "I'm too sleepy ___ study.", ko: "나는 너무 졸려서 공부할 수 없다.", choices: ["to", "that"], answer: 0, hint: "too ~ to 예요." },
      { type: "choose", q: "She is ___ to join the team.", ko: "그녀는 그 팀에 들어갈 만큼 나이가 들었다.", choices: ["enough old", "old enough"], answer: 1, hint: "enough는 형용사 뒤에 와요." },
      { type: "order", words: ["The", "box", "is", "too", "heavy", "to", "lift."], ko: "그 상자는 너무 무거워서 들 수 없다." },
    ],
  },
  {
    id: "m-conj",
    emoji: "🧵",
    title: "although, unless, so that",
    subtitle: "더 많은 접속사",
    grade: "중3",
    slides: [
      {
        emoji: "🌂",
        say: "<b>although</b>(= though)는 '<b>비록 ~이지만</b>'이에요. 예상과 반대되는 일을 이어 줘요.",
        pattern: "Although ___, ___.",
        examples: [
          { en: "Although it was raining, we played soccer.", ko: "비가 오고 있었지만 우리는 축구를 했다.", emoji: "⚽" },
          { en: "Though he is young, he is wise.", ko: "그는 어리지만 지혜롭다.", emoji: "🦉" },
        ],
      },
      {
        emoji: "🚫",
        say: "<b>unless</b>는 '<b>~하지 않으면</b>'(= if ~ not)이에요.",
        pattern: "unless = if ~ not",
        examples: [
          { en: "You will be late unless you hurry.", ko: "서두르지 않으면 늦을 거야.", emoji: "🏃" },
          { en: "Unless you study, you won't pass.", ko: "공부하지 않으면 통과하지 못할 거야.", emoji: "📚" },
        ],
      },
      {
        emoji: "🎯",
        say: "<b>so that + 주어 + can</b>은 '<b>~할 수 있도록</b>'(목적)이에요. 그냥 so(그래서)와 달라요.",
        pattern: "___ so that 주어 can ___",
        examples: [
          { en: "Speak louder so that everyone can hear.", ko: "모두가 들을 수 있도록 더 크게 말해.", emoji: "📢" },
          { en: "I saved money so that I could buy a bike.", ko: "나는 자전거를 살 수 있도록 돈을 모았다.", emoji: "🚲" },
        ],
      },
      {
        emoji: "⏱️",
        say: "<b>while</b>은 '<b>~하는 동안</b>' 또는 '<b>반면에</b>'예요. <b>since</b>는 '~ 이후로' 말고 '~ 때문에'라는 뜻도 있어요.",
        pattern: "while (~하는 동안 / 반면에) · since (~때문에)",
        examples: [
          { en: "While I was cooking, the phone rang.", ko: "내가 요리하는 동안 전화가 울렸다.", emoji: "📞" },
          { en: "I like summer, while my sister likes winter.", ko: "나는 여름을 좋아하는 반면, 언니는 겨울을 좋아한다.", emoji: "☀️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 비록 ~지만 <b>although</b>, ~하지 않으면 <b>unless</b>, ~할 수 있도록 <b>so that</b>, ~하는 동안 <b>while</b>!",
        pattern: "although · unless · so that · while",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ he was sick, he went to school.", ko: "그는 아팠지만 학교에 갔다.", choices: ["Although", "Because"], answer: 0, hint: "예상과 반대면 although예요." },
      { type: "choose", q: "You can't go out ___ you finish your homework.", ko: "숙제를 끝내지 않으면 나갈 수 없어.", choices: ["unless", "if"], answer: 0, hint: "'~하지 않으면'은 unless예요." },
      { type: "choose", q: "Turn on the light so ___ I can read.", ko: "내가 읽을 수 있도록 불 좀 켜 줘.", choices: ["that", "what"], answer: 0, hint: "'~할 수 있도록'은 so that이에요." },
      { type: "choose", q: "___ I was sleeping, someone knocked on the door.", ko: "내가 자는 동안 누군가 문을 두드렸다.", choices: ["While", "Unless"], answer: 0, hint: "'~하는 동안'은 while이에요." },
      { type: "choose", q: "Unless it rains, we ___ go hiking.", ko: "비가 오지 않으면 우리는 등산을 갈 것이다.", choices: ["will", "won't"], answer: 0, hint: "unless 자체가 '~하지 않으면'이라 뒤는 긍정이에요." },
      { type: "order", words: ["Although", "it", "was", "cold,", "we", "went", "out."], ko: "추웠지만 우리는 밖에 나갔다." },
    ],
  },
);
