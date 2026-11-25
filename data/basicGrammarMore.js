// 초6 문법 5주제 추가. basicGrammarExtra.js 뒤에 불러와 BASIC_TOPICS에 붙인다.
// 중학교 단원(과거진행, 감탄문, as ~ as)과 겹치지 않는 초등 고학년 교과서 표현이다.
BASIC_TOPICS.push(
  {
    id: "look-like",
    emoji: "🧑‍🎨",
    title: "What does he look like?",
    subtitle: "생김새와 성격 묻기",
    grade: "초6",
    slides: [
      {
        emoji: "👀",
        say: "생김새를 물을 때는 <b>What does he/she look like?</b>(그는 어떻게 생겼어?)라고 해요. 대답은 <b>He is tall.</b> 또는 <b>She has long hair.</b>예요.",
        pattern: "What does ___ look like? — He is ___. / She has ___.",
        examples: [
          { en: "What does your brother look like?", ko: "네 형은 어떻게 생겼어?", emoji: "🧒" },
          { en: "He is tall and has short hair.", ko: "키가 크고 머리가 짧아.", emoji: "🧑" },
          { en: "She has big eyes and curly hair.", ko: "그녀는 눈이 크고 곱슬머리야.", emoji: "👩‍🦱" },
        ],
      },
      {
        emoji: "💭",
        say: "성격을 물을 때는 look을 빼고 <b>What is he/she like?</b>(그는 어떤 사람이야?)라고 해요.",
        pattern: "What is ___ like? — She is ___.",
        examples: [
          { en: "What is your teacher like?", ko: "너희 선생님은 어떤 분이야?", emoji: "🧑‍🏫" },
          { en: "She is kind and funny.", ko: "친절하고 재미있으셔.", emoji: "😄" },
        ],
      },
      {
        emoji: "🪞",
        say: "누구를 닮았는지는 <b>look like + 사람</b>으로 말해요. <b>I look like my mom.</b>(나는 엄마를 닮았어.)",
        pattern: "I look like ___.",
        examples: [
          { en: "I look like my dad.", ko: "나는 아빠를 닮았어.", emoji: "👨" },
          { en: "The cloud looks like a rabbit.", ko: "그 구름은 토끼처럼 생겼어.", emoji: "☁️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 생김새는 <b>What does ~ look like?</b>, 성격은 <b>What is ~ like?</b>, 닮았다는 <b>look like</b>예요.",
        pattern: "What does she look like? · What is she like?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "What does your sister ___ like?", ko: "네 여동생은 어떻게 생겼어?", choices: ["look", "looks", "is"], answer: 0, hint: "does가 있으면 동사는 원래 모양 look이에요." },
      { type: "choose", q: "He ___ short hair.", ko: "그는 머리가 짧아.", choices: ["has", "is", "have"], answer: 0, hint: "머리 · 눈처럼 가진 것은 has예요." },
      { type: "choose", q: "What ___ your friend like? — He is very kind.", ko: "네 친구는 어떤 사람이야? / 아주 친절해.", choices: ["is", "does", "do"], answer: 0, hint: "성격을 물을 때는 What is ~ like?예요." },
      { type: "choose", q: "I look ___ my grandpa.", ko: "나는 할아버지를 닮았어.", choices: ["like", "at", "for"], answer: 0, hint: "닮았다는 look like예요." },
      { type: "order", words: ["What", "does", "he", "look", "like?"], ko: "그는 어떻게 생겼어?" },
      { type: "order", words: ["She", "is", "tall", "and", "smart."], ko: "그녀는 키가 크고 똑똑해." },
    ],
  },
  {
    id: "how-long",
    emoji: "📏",
    title: "How long? How far? How often?",
    subtitle: "How + 형용사 · 부사로 묻기",
    grade: "초6",
    slides: [
      {
        emoji: "⏱️",
        say: "<b>How</b> 뒤에 낱말을 붙이면 여러 가지를 물을 수 있어요. <b>How long</b>은 '얼마나 오래 · 얼마나 긴', <b>How far</b>는 '얼마나 멀리'예요.",
        pattern: "How long ~? · How far ~?",
        examples: [
          { en: "How long is the movie? — It's two hours long.", ko: "영화는 얼마나 길어? / 두 시간이야.", emoji: "🎬" },
          { en: "How far is the school? — It's about 1 km.", ko: "학교는 얼마나 멀어? / 1킬로미터쯤이야.", emoji: "🏫" },
        ],
      },
      {
        emoji: "🔁",
        say: "<b>How often</b>은 '얼마나 자주'예요. 대답은 <b>once a week</b>(일주일에 한 번), <b>twice a month</b>(한 달에 두 번), <b>every day</b>처럼 해요.",
        pattern: "How often ~? — ___ times a week.",
        examples: [
          { en: "How often do you play soccer?", ko: "축구를 얼마나 자주 해?", emoji: "⚽" },
          { en: "Twice a week.", ko: "일주일에 두 번.", emoji: "📅" },
        ],
      },
      {
        emoji: "📐",
        say: "키는 <b>How tall</b>, 나이는 <b>How old</b>, 무게는 <b>How heavy</b>예요. 모두 <b>How + 형용사</b> 모양이에요.",
        pattern: "How tall ~? · How heavy ~?",
        examples: [
          { en: "How tall are you? — I'm 145 cm tall.", ko: "키가 몇이야? / 145센티미터야.", emoji: "🧍" },
          { en: "How heavy is the bag?", ko: "가방이 얼마나 무거워?", emoji: "🎒" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 시간 · 길이 <b>How long</b>, 거리 <b>How far</b>, 횟수 <b>How often</b>, 키 <b>How tall</b>",
        pattern: "How long · How far · How often · How tall",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "How ___ is it to the station? — It's 500 meters.", ko: "역까지 얼마나 멀어? / 500미터야.", choices: ["far", "long", "often"], answer: 0, hint: "거리는 How far예요." },
      { type: "choose", q: "How ___ do you brush your teeth? — Three times a day.", ko: "얼마나 자주 이를 닦니? / 하루에 세 번.", choices: ["often", "far", "tall"], answer: 0, hint: "횟수는 How often이에요." },
      { type: "choose", q: "How ___ is the class? — It's 40 minutes long.", ko: "수업은 얼마나 길어? / 40분이야.", choices: ["long", "far", "many"], answer: 0, hint: "시간의 길이는 How long이에요." },
      { type: "choose", q: "I go swimming ___ a week.", ko: "나는 일주일에 한 번 수영하러 가.", choices: ["once", "one", "first"], answer: 0, hint: "'한 번'은 once예요." },
      { type: "order", words: ["How", "tall", "is", "your", "brother?"], ko: "네 형은 키가 몇이야?" },
      { type: "order", words: ["How", "often", "do", "you", "read", "books?"], ko: "책을 얼마나 자주 읽니?" },
    ],
  },
  {
    id: "ordinal",
    emoji: "🥇",
    title: "first, second, third",
    subtitle: "순서와 날짜 말하기",
    grade: "초6",
    slides: [
      {
        emoji: "🏅",
        say: "순서를 말할 때는 <b>first</b>(첫 번째), <b>second</b>(두 번째), <b>third</b>(세 번째)를 써요. 넷째부터는 대부분 <b>-th</b>를 붙여요(fourth, fifth, sixth).",
        pattern: "first · second · third · fourth · fifth",
        examples: [
          { en: "I won first prize!", ko: "내가 1등 했어!", emoji: "🥇" },
          { en: "My room is on the second floor.", ko: "내 방은 2층에 있어.", emoji: "🏠" },
          { en: "I'm in the fifth grade.", ko: "나는 5학년이야.", emoji: "🎒" },
        ],
      },
      {
        emoji: "📅",
        say: "날짜는 <b>달 + 순서 숫자</b>로 말해요. 5월 5일은 <b>May 5th</b>(May fifth)라고 읽어요.",
        pattern: "When is ___? — It's May 5th.",
        examples: [
          { en: "When is your birthday? — It's March 3rd.", ko: "생일이 언제야? / 3월 3일이야.", emoji: "🎂" },
          { en: "Children's Day is May 5th.", ko: "어린이날은 5월 5일이야.", emoji: "🎈" },
        ],
      },
      {
        emoji: "⚠️",
        say: "모양이 바뀌는 것에 주의해요: five → <b>fifth</b>, nine → <b>ninth</b>, twelve → <b>twelfth</b>, twenty → <b>twentieth</b>",
        pattern: "fifth · ninth · twelfth · twentieth",
        examples: [
          { en: "the ninth day", ko: "아홉 번째 날", emoji: "9️⃣" },
          { en: "December 25th — Christmas!", ko: "12월 25일 — 크리스마스!", emoji: "🎄" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 순서는 <b>first · second · third · -th</b>, 날짜는 <b>달 + 순서 숫자</b>예요.",
        pattern: "the third floor · July 4th",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm in the ___ grade.", ko: "나는 6학년이야.", choices: ["sixth", "six", "sixty"], answer: 0, hint: "학년은 순서 숫자 sixth예요." },
      { type: "choose", q: "The library is on the ___ floor.", ko: "도서관은 3층에 있어.", choices: ["third", "three", "threeth"], answer: 0, hint: "셋째는 third예요." },
      { type: "choose", q: "My birthday is October ___.", ko: "내 생일은 10월 2일이야.", choices: ["2nd", "2th", "two"], answer: 0, hint: "둘째는 second라서 2nd로 써요." },
      { type: "choose", q: "She came in ___ place in the race.", ko: "그녀는 달리기에서 1등을 했어.", choices: ["first", "one", "once"], answer: 0, hint: "1등은 first place예요." },
      { type: "order", words: ["When", "is", "your", "birthday?"], ko: "네 생일은 언제야?" },
      { type: "order", words: ["It's", "the", "fifth", "of", "May."], ko: "5월 5일이야." },
    ],
  },
  {
    id: "one-ones",
    emoji: "🧢",
    title: "the red one, the big ones",
    subtitle: "같은 말 대신 one",
    grade: "초6",
    slides: [
      {
        emoji: "🔁",
        say: "앞에 나온 물건을 또 말할 때는 같은 낱말을 되풀이하지 않고 <b>one</b>(하나는 one, 여럿은 <b>ones</b>)으로 바꿔 말해요.",
        pattern: "this cap → this one · red shoes → red ones",
        examples: [
          { en: "I don't like this cap. I like that one.", ko: "이 모자는 별로야. 저게 좋아.", emoji: "🧢" },
          { en: "These shoes are small. I need bigger ones.", ko: "이 신발은 작아. 더 큰 게 필요해.", emoji: "👟" },
        ],
      },
      {
        emoji: "🛍️",
        say: "가게에서 고를 때 많이 써요. <b>Which one?</b>(어느 거?) — <b>The blue one.</b>(파란 거.)",
        pattern: "Which one? — The ___ one.",
        examples: [
          { en: "Which one do you want?", ko: "어느 걸 원해?", emoji: "🤔" },
          { en: "The blue one, please.", ko: "파란 걸로 주세요.", emoji: "💙" },
        ],
      },
      {
        emoji: "🆚",
        say: "<b>it</b>은 '바로 그 물건', <b>one</b>은 '같은 종류의 다른 하나'예요. I lost my pen. Can I borrow <b>one</b>?(펜 하나 빌릴 수 있어?)",
        pattern: "I lost my pen. Can I borrow one?",
        examples: [
          { en: "I lost my eraser. Do you have one?", ko: "지우개를 잃어버렸어. 너 하나 있어?", emoji: "🧽" },
          { en: "I found my eraser! Here it is.", ko: "지우개 찾았다! 여기 있네.", emoji: "😊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 같은 종류 하나는 <b>one</b>, 여러 개는 <b>ones</b>, 바로 그것은 <b>it</b>이에요.",
        pattern: "the red one · the big ones · Which one?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I don't want this apple. I want that ___.", ko: "이 사과 말고 저걸 원해.", choices: ["one", "ones", "it"], answer: 0, hint: "사과 하나니까 one이에요." },
      { type: "choose", q: "These socks are dirty. Give me clean ___.", ko: "이 양말은 더러워. 깨끗한 걸로 줘.", choices: ["ones", "one", "it"], answer: 0, hint: "양말은 여럿이라 ones예요." },
      { type: "choose", q: "Which ___ is yours? — The yellow one.", ko: "어느 게 네 거야? / 노란 거.", choices: ["one", "it", "ones"], answer: 0, hint: "'어느 거?'는 Which one?이에요." },
      { type: "choose", q: "I need a pencil. Do you have ___?", ko: "연필이 필요해. 너 하나 있어?", choices: ["one", "it", "this"], answer: 0, hint: "아무 연필 하나니까 one이에요." },
      { type: "order", words: ["I", "like", "the", "big", "one."], ko: "나는 큰 게 좋아." },
      { type: "order", words: ["Which", "one", "do", "you", "want?"], ko: "어느 걸 원해?" },
    ],
  },
  {
    id: "move-prep",
    emoji: "🧭",
    title: "across, along, into, out of",
    subtitle: "움직임을 나타내는 말",
    grade: "초6",
    slides: [
      {
        emoji: "🚶",
        say: "어디로 움직이는지 말할 때는 동사 뒤에 <b>across</b>(가로질러), <b>along</b>(~을 따라), <b>through</b>(~을 통과해)를 붙여요.",
        pattern: "walk across · run along · go through",
        examples: [
          { en: "Walk across the street.", ko: "길을 건너가.", emoji: "🚸" },
          { en: "We ran along the river.", ko: "우리는 강을 따라 달렸어.", emoji: "🏃" },
          { en: "The train went through a tunnel.", ko: "기차가 터널을 통과했어.", emoji: "🚆" },
        ],
      },
      {
        emoji: "🚪",
        say: "안으로 들어가면 <b>into</b>, 밖으로 나오면 <b>out of</b>예요.",
        pattern: "go into ___ · come out of ___",
        examples: [
          { en: "The cat jumped into the box.", ko: "고양이가 상자 안으로 뛰어들었어.", emoji: "📦" },
          { en: "A rabbit came out of the hat.", ko: "모자에서 토끼가 나왔어.", emoji: "🎩" },
        ],
      },
      {
        emoji: "⬆️",
        say: "위아래로는 <b>up</b>(위로), <b>down</b>(아래로), 둘레는 <b>around</b>(주위를 돌아)예요.",
        pattern: "climb up · go down · walk around",
        examples: [
          { en: "We climbed up the hill.", ko: "우리는 언덕을 올라갔어.", emoji: "⛰️" },
          { en: "The moon goes around the Earth.", ko: "달은 지구 둘레를 돌아.", emoji: "🌙" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>across</b> 가로질러 · <b>along</b> 따라 · <b>through</b> 통과 · <b>into</b> 안으로 · <b>out of</b> 밖으로 · <b>around</b> 둘레",
        pattern: "across · along · through · into · out of · around",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The duck swam ___ the lake.", ko: "오리가 호수를 가로질러 헤엄쳤어.", choices: ["across", "into", "out of"], answer: 0, hint: "가로질러는 across예요." },
      { type: "choose", q: "She jumped ___ the pool.", ko: "그녀는 수영장 안으로 뛰어들었어.", choices: ["into", "out of", "along"], answer: 0, hint: "안으로 들어가면 into예요." },
      { type: "choose", q: "He took a cookie ___ the jar.", ko: "그는 병에서 쿠키를 꺼냈어.", choices: ["out of", "into", "across"], answer: 0, hint: "밖으로 꺼내면 out of예요." },
      { type: "choose", q: "Let's walk ___ the beach.", ko: "해변을 따라 걷자.", choices: ["along", "into", "through"], answer: 0, hint: "~을 따라는 along이에요." },
      { type: "order", words: ["The", "bus", "went", "through", "the", "tunnel."], ko: "버스가 터널을 통과했어." },
      { type: "order", words: ["We", "walked", "around", "the", "park."], ko: "우리는 공원을 한 바퀴 걸었어." },
    ],
  }
);
