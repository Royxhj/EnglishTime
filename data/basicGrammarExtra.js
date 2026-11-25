// 추가 초등 문법: 학년마다 3개씩. basicGrammar.js 뒤에 불러와 BASIC_TOPICS에 붙인다.
BASIC_TOPICS.push(
  // ── 초2 ──
  {
    id: "adjective",
    emoji: "🎨",
    title: "a big dog (꾸며 주는 말)",
    subtitle: "크기 · 색깔 · 기분 붙이기",
    grade: "초2",
    slides: [
      {
        emoji: "🐶",
        say: "<b>big</b>(큰), <b>red</b>(빨간), <b>happy</b>(행복한)처럼 모양이나 기분을 알려 주는 말은 <b>이름 앞</b>에 붙여요.",
        pattern: "a + 꾸미는 말 + 이름",
        examples: [
          { en: "a big dog", ko: "큰 개", emoji: "🐕" },
          { en: "a red apple", ko: "빨간 사과", emoji: "🍎" },
          { en: "a small cat", ko: "작은 고양이", emoji: "🐱" },
        ],
      },
      {
        emoji: "🙂",
        say: "am · is · are 뒤에 오면 '~해요'라는 뜻이 돼요.",
        pattern: "It is + 꾸미는 말",
        examples: [
          { en: "The dog is big.", ko: "그 개는 커요.", emoji: "🐕" },
          { en: "I am happy.", ko: "나는 행복해요.", emoji: "😊" },
          { en: "The sky is blue.", ko: "하늘은 파래요.", emoji: "🌤️" },
        ],
      },
      {
        emoji: "🍊",
        say: "꾸미는 말이 아·에·이·오·어 소리로 시작하면 a 대신 <b>an</b>을 써요. 이름이 아니라 <b>바로 뒤의 말</b>을 봐요.",
        pattern: "an old car · a nice egg",
        examples: [
          { en: "an old car", ko: "오래된 자동차", emoji: "🚗" },
          { en: "a nice egg", ko: "좋은 달걀", emoji: "🥚" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 이름 앞에 붙이면 <b>a big dog</b>, am·is·are 뒤에 오면 <b>The dog is big.</b>이에요.",
        pattern: "a big dog · The dog is big.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have a ___ bag.", ko: "나는 파란 가방이 있어요.", choices: ["blue", "blues", "a blue"], answer: 0, hint: "꾸미는 말은 a와 이름 사이에 그대로 넣어요." },
      { type: "choose", q: "The elephant is ___.", ko: "코끼리는 커요.", choices: ["big", "a big", "bigs"], answer: 0, hint: "is 뒤에는 꾸미는 말만 와요." },
      { type: "choose", q: "It is ___ old house.", ko: "그것은 오래된 집이에요.", choices: ["a", "an"], answer: 1, hint: "old가 '오' 소리로 시작해서 an이에요." },
      { type: "choose", q: "She has a ___ cat.", ko: "그녀는 하얀 고양이가 있어요.", choices: ["white", "whites", "an white"], answer: 0, hint: "a white cat — 하얀 고양이" },
      { type: "order", words: ["I", "have", "a", "small", "dog."], ko: "나는 작은 개가 있어요." },
      { type: "order", words: ["The", "flower", "is", "yellow."], ko: "그 꽃은 노란색이에요." },
    ],
  },
  {
    id: "these-those",
    emoji: "👐",
    title: "these와 those",
    subtitle: "여러 개를 가리킬 때",
    grade: "초2",
    slides: [
      {
        emoji: "👇",
        say: "가까이 있는 것 <b>하나</b>는 this, <b>여러 개</b>는 <b>these</b>(이것들)예요.",
        pattern: "this → these",
        examples: [
          { en: "This is a pen.", ko: "이것은 펜이에요.", emoji: "🖊️" },
          { en: "These are pens.", ko: "이것들은 펜이에요.", emoji: "🖊️" },
        ],
      },
      {
        emoji: "👉",
        say: "멀리 있는 것 <b>하나</b>는 that, <b>여러 개</b>는 <b>those</b>(저것들)예요.",
        pattern: "that → those",
        examples: [
          { en: "That is a bird.", ko: "저것은 새예요.", emoji: "🐦" },
          { en: "Those are birds.", ko: "저것들은 새예요.", emoji: "🐦" },
        ],
      },
      {
        emoji: "🔁",
        say: "these와 those는 여러 개라서 <b>are</b>와 짝꿍이고, 이름 끝에 <b>-s</b>가 붙어요.",
        pattern: "These are ___s. · Those are ___s.",
        examples: [
          { en: "These are my shoes.", ko: "이것들은 내 신발이에요.", emoji: "👟" },
          { en: "Are those your books?", ko: "저것들은 네 책이니?", emoji: "📚" },
          { en: "Yes, they are.", ko: "응, 맞아.", emoji: "🙂" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 가까이: <b>this → these</b>, 멀리: <b>that → those</b>. 여러 개면 <b>are</b>!",
        pattern: "this is · these are · that is · those are",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ are my crayons.", ko: "이것들은 내 크레용이에요.", choices: ["These", "This", "That"], answer: 0, hint: "가까이 있는 여러 개는 These예요." },
      { type: "choose", q: "Those ___ cows.", ko: "저것들은 소예요.", choices: ["is", "are", "am"], answer: 1, hint: "those는 여러 개라서 are예요." },
      { type: "choose", q: "___ is my house.", ko: "저것은 우리 집이에요.", choices: ["Those", "These", "That"], answer: 2, hint: "멀리 있는 하나는 That이에요." },
      { type: "choose", q: "These are ___.", ko: "이것들은 사과예요.", choices: ["apple", "apples", "an apple"], answer: 1, hint: "여러 개라서 이름 끝에 -s를 붙여요." },
      { type: "order", words: ["These", "are", "my", "socks."], ko: "이것들은 내 양말이에요." },
      { type: "order", words: ["Are", "those", "your", "toys?"], ko: "저것들은 네 장난감이니?" },
    ],
  },
  {
    id: "me-too",
    emoji: "🙌",
    title: "Me too! I like it, too.",
    subtitle: "'나도'라고 말하기",
    grade: "초2",
    slides: [
      {
        emoji: "🙋",
        say: "친구 말에 '나도!'라고 할 때는 짧게 <b>Me too!</b>라고 해요.",
        pattern: "Me too!",
        examples: [
          { en: "I like pizza.", ko: "나는 피자가 좋아.", emoji: "🍕" },
          { en: "Me too!", ko: "나도!", emoji: "🙋" },
        ],
      },
      {
        emoji: "➕",
        say: "문장으로 말할 때는 맨 끝에 <b>, too</b>를 붙여요. '~도'라는 뜻이에요.",
        pattern: "___, too.",
        examples: [
          { en: "I have a dog, too.", ko: "나도 개가 있어.", emoji: "🐶" },
          { en: "She can swim, too.", ko: "그녀도 수영할 수 있어.", emoji: "🏊" },
        ],
      },
      {
        emoji: "🙅",
        say: "'나도 안 그래'는 <b>Me neither.</b>예요. 친구가 don't, can't처럼 '아니'라고 말할 때 써요.",
        pattern: "I don't ~. — Me neither.",
        examples: [
          { en: "I don't like snakes.", ko: "나는 뱀이 싫어.", emoji: "🐍" },
          { en: "Me neither.", ko: "나도 싫어.", emoji: "🙅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 좋다는 말에는 <b>Me too</b>, 아니라는 말에는 <b>Me neither</b>, 문장 끝에는 <b>, too</b>!",
        pattern: "Me too! · Me neither. · I like it, too.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I love ice cream. — Me ___!", ko: "나는 아이스크림이 정말 좋아. / 나도!", choices: ["too", "neither", "to"], answer: 0, hint: "좋다는 말에 '나도'는 Me too예요." },
      { type: "choose", q: "I can't swim. — Me ___.", ko: "나는 수영 못 해. / 나도 못 해.", choices: ["too", "neither"], answer: 1, hint: "can't(못 해)에 '나도 못 해'는 Me neither예요." },
      { type: "choose", q: "I have a sister, ___.", ko: "나도 언니가 있어.", choices: ["too", "two", "neither"], answer: 0, hint: "문장 끝 '~도'는 , too예요." },
      { type: "choose", q: "I don't like carrots. — Me ___.", ko: "나는 당근이 싫어. / 나도.", choices: ["neither", "too"], answer: 0, hint: "don't에 맞장구칠 때는 Me neither예요." },
      { type: "order", words: ["I", "like", "cats,", "too."], ko: "나도 고양이를 좋아해." },
      { type: "order", words: ["He", "can", "dance,", "too."], ko: "그도 춤출 수 있어." },
    ],
  },

  // ── 초4 ──
  {
    id: "whose-mine",
    emoji: "🎒",
    title: "Whose is it? — It's mine.",
    subtitle: "누구 거예요? 내 거예요",
    grade: "초4",
    slides: [
      {
        emoji: "❓",
        say: "'누구의 ~이에요?'는 <b>Whose</b>로 물어봐요.",
        pattern: "Whose ___ is this?",
        examples: [
          { en: "Whose bag is this?", ko: "이건 누구 가방이야?", emoji: "🎒" },
          { en: "Whose shoes are these?", ko: "이것들은 누구 신발이야?", emoji: "👟" },
        ],
      },
      {
        emoji: "🙋",
        say: "'내 것'은 <b>mine</b>, '너의 것'은 <b>yours</b>예요. my bag을 한 단어로 줄인 말이에요.",
        pattern: "my bag → mine · your bag → yours",
        examples: [
          { en: "It's mine.", ko: "그건 내 거야.", emoji: "🙋" },
          { en: "Is this pencil yours?", ko: "이 연필 네 거니?", emoji: "✏️" },
        ],
      },
      {
        emoji: "👪",
        say: "'그의 것'은 <b>his</b>, '그녀의 것'은 <b>hers</b>, '우리 것'은 <b>ours</b>, '그들의 것'은 <b>theirs</b>예요. 이름이 있으면 <b>Mina's</b>처럼 <b>'s</b>를 붙여요.",
        pattern: "his · hers · ours · theirs · Mina's",
        examples: [
          { en: "The red cap is hers.", ko: "빨간 모자는 그녀의 것이야.", emoji: "🧢" },
          { en: "That ball is Tom's.", ko: "저 공은 Tom의 것이야.", emoji: "⚽" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>Whose</b>로 묻고, <b>mine · yours · his · hers · ours · theirs</b>나 <b>이름's</b>로 대답해요.",
        pattern: "Whose is it? — It's mine.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ umbrella is this?", ko: "이건 누구 우산이야?", choices: ["Whose", "Who", "What"], answer: 0, hint: "'누구의'는 Whose예요." },
      { type: "choose", q: "This book is ___.", ko: "이 책은 내 거야.", choices: ["my", "mine", "me"], answer: 1, hint: "'내 것'은 mine이에요." },
      { type: "choose", q: "Is this cup ___?", ko: "이 컵 네 거니?", choices: ["your", "you", "yours"], answer: 2, hint: "'너의 것'은 yours예요." },
      { type: "choose", q: "The pink scarf is ___.", ko: "분홍 스카프는 그녀의 것이야.", choices: ["her", "hers", "she"], answer: 1, hint: "'그녀의 것'은 hers예요." },
      { type: "order", words: ["Whose", "jacket", "is", "this?"], ko: "이건 누구 재킷이야?" },
      { type: "order", words: ["The", "blue", "bike", "is", "his."], ko: "파란 자전거는 그의 것이야." },
    ],
  },
  {
    id: "would-like",
    emoji: "🍽️",
    title: "I'd like ~ (정중하게 원하기)",
    subtitle: "want보다 부드럽게",
    grade: "초4",
    slides: [
      {
        emoji: "🙂",
        say: "<b>I want</b>는 조금 직접적이에요. 가게나 식당에서는 <b>I'd like</b>(~을 주세요, ~하고 싶어요)가 더 공손해요. I'd는 I would를 줄인 말이에요.",
        pattern: "I want ~ → I'd like ~",
        examples: [
          { en: "I'd like a hamburger, please.", ko: "햄버거 하나 주세요.", emoji: "🍔" },
          { en: "I'd like some water.", ko: "물 좀 주세요.", emoji: "💧" },
        ],
      },
      {
        emoji: "❓",
        say: "'~ 드릴까요?', '~ 할래요?'라고 물을 때는 <b>Would you like ~?</b>예요.",
        pattern: "Would you like ~? — Yes, please. / No, thank you.",
        examples: [
          { en: "Would you like some cookies?", ko: "쿠키 좀 먹을래?", emoji: "🍪" },
          { en: "Yes, please.", ko: "응, 줘.", emoji: "😋" },
          { en: "No, thank you.", ko: "아니, 괜찮아.", emoji: "🙅" },
        ],
      },
      {
        emoji: "🏃",
        say: "하고 싶은 <b>동작</b>을 말할 때는 <b>I'd like to + 동작</b>이에요.",
        pattern: "I'd like to + 동작",
        examples: [
          { en: "I'd like to go home.", ko: "집에 가고 싶어요.", emoji: "🏠" },
          { en: "Would you like to play with us?", ko: "우리랑 같이 놀래?", emoji: "⚽" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 물건은 <b>I'd like + 물건</b>, 동작은 <b>I'd like to + 동작</b>, 권할 때는 <b>Would you like ~?</b>",
        pattern: "I'd like a cake. · I'd like to sing. · Would you like ~?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'd ___ a cheese pizza, please.", ko: "치즈 피자 하나 주세요.", choices: ["like", "likes", "liking"], answer: 0, hint: "I'd like + 물건이에요." },
      { type: "choose", q: "___ you like some juice?", ko: "주스 좀 마실래?", choices: ["Do", "Would", "Are"], answer: 1, hint: "공손하게 권할 때는 Would you like ~?예요." },
      { type: "choose", q: "I'd like ___ visit the zoo.", ko: "동물원에 가 보고 싶어요.", choices: ["to", "for", "a"], answer: 0, hint: "동작 앞에는 to를 붙여요." },
      { type: "choose", q: "Would you like some tea? — No, ___.", ko: "차 좀 드실래요? / 아니요, 괜찮아요.", choices: ["thank you", "please", "I'd like"], answer: 0, hint: "거절할 때는 No, thank you.예요." },
      { type: "order", words: ["I'd", "like", "some", "milk,", "please."], ko: "우유 좀 주세요." },
      { type: "order", words: ["Would", "you", "like", "to", "come?"], ko: "올래?" },
    ],
  },
  {
    id: "time-words",
    emoji: "🗓️",
    title: "yesterday, last week, ago",
    subtitle: "언제인지 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "⏪",
        say: "지난 때를 말하는 말이에요. <b>yesterday</b>(어제), <b>last</b> + 때(지난 ~), 숫자 + <b>ago</b>(~ 전에). 이런 말이 있으면 동작은 <b>지난 모양</b>을 써요.",
        pattern: "yesterday · last week · two days ago",
        examples: [
          { en: "I played soccer yesterday.", ko: "나는 어제 축구를 했어요.", emoji: "⚽" },
          { en: "We went to Busan last summer.", ko: "우리는 지난여름에 부산에 갔어요.", emoji: "🏖️" },
          { en: "She called me two hours ago.", ko: "그녀는 두 시간 전에 나에게 전화했어요.", emoji: "📞" },
        ],
      },
      {
        emoji: "⏩",
        say: "앞으로의 때는 <b>tomorrow</b>(내일), <b>next</b> + 때(다음 ~)예요. 동작은 <b>will</b>이나 <b>be going to</b>와 함께 써요.",
        pattern: "tomorrow · next week · next Monday",
        examples: [
          { en: "I will see you tomorrow.", ko: "내일 보자.", emoji: "👋" },
          { en: "We will have a test next week.", ko: "다음 주에 시험이 있을 거예요.", emoji: "📝" },
        ],
      },
      {
        emoji: "⚠️",
        say: "last와 next 앞에는 <b>on, in</b>을 붙이지 않아요. 'on last Monday'가 아니라 그냥 <b>last Monday</b>예요.",
        pattern: "last Monday (O) · on last Monday (X)",
        examples: [
          { en: "I met him last Friday.", ko: "나는 지난 금요일에 그를 만났어요.", emoji: "🤝" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 지난 때: <b>yesterday · last ~ · ~ ago</b>, 앞으로: <b>tomorrow · next ~</b>",
        pattern: "yesterday ↔ tomorrow · last week ↔ next week",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I watched a movie ___.", ko: "나는 어제 영화를 봤어요.", choices: ["yesterday", "tomorrow", "next week"], answer: 0, hint: "watched(지난 모양)와 어울리는 건 yesterday예요." },
      { type: "choose", q: "We moved here three years ___.", ko: "우리는 3년 전에 여기로 이사 왔어요.", choices: ["ago", "last", "next"], answer: 0, hint: "숫자 + ago = ~ 전에" },
      { type: "choose", q: "I will visit my uncle ___ Sunday.", ko: "나는 다음 일요일에 삼촌 댁에 갈 거예요.", choices: ["last", "next", "ago"], answer: 1, hint: "will(앞으로)과 어울리는 건 next예요." },
      { type: "choose", q: "She ___ to the library last Saturday.", ko: "그녀는 지난 토요일에 도서관에 갔어요.", choices: ["goes", "went", "will go"], answer: 1, hint: "last Saturday는 지난 때라서 went예요." },
      { type: "order", words: ["I", "saw", "him", "two", "days", "ago."], ko: "나는 이틀 전에 그를 봤어요." },
      { type: "order", words: ["See", "you", "next", "week!"], ko: "다음 주에 봐!" },
    ],
  },

  // ── 초6 ──
  {
    id: "something",
    emoji: "🔍",
    title: "something, anything, nothing",
    subtitle: "무언가 · 아무것도 · 하나도",
    grade: "초6",
    slides: [
      {
        emoji: "🎁",
        say: "'무언가'는 <b>something</b>, '누군가'는 <b>someone</b>, '어딘가'는 <b>somewhere</b>예요. 보통 긍정문에 써요.",
        pattern: "something · someone · somewhere",
        examples: [
          { en: "I have something for you.", ko: "너에게 줄 게 있어.", emoji: "🎁" },
          { en: "Someone is at the door.", ko: "누군가 문 앞에 있어.", emoji: "🚪" },
        ],
      },
      {
        emoji: "❓",
        say: "질문이나 not이 있는 문장에서는 <b>anything · anyone · anywhere</b>를 써요.",
        pattern: "Do you have anything? · I don't know anyone.",
        examples: [
          { en: "Do you need anything?", ko: "뭐 필요한 거 있어?", emoji: "🛒" },
          { en: "I didn't see anyone.", ko: "나는 아무도 못 봤어.", emoji: "👀" },
        ],
      },
      {
        emoji: "🚫",
        say: "<b>nothing</b>(아무것도 ~ 않다), <b>no one</b>(아무도 ~ 않다)은 그 자체로 '없다'는 뜻이라 not을 또 쓰지 않아요.",
        pattern: "I know nothing. = I don't know anything.",
        examples: [
          { en: "There is nothing in the box.", ko: "상자 안에 아무것도 없어.", emoji: "📦" },
          { en: "No one was in the classroom.", ko: "교실에 아무도 없었어.", emoji: "🏫" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 긍정문은 <b>some-</b>, 질문·not 문장은 <b>any-</b>, '없다'는 <b>nothing · no one</b>!",
        pattern: "something · anything · nothing",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I want to eat ___ sweet.", ko: "나는 뭔가 단 걸 먹고 싶어.", choices: ["something", "anything", "nothing"], answer: 0, hint: "긍정문의 '무언가'는 something이에요." },
      { type: "choose", q: "Is there ___ in the fridge?", ko: "냉장고에 뭐 있어?", choices: ["something", "anything", "nothing"], answer: 1, hint: "질문에는 보통 anything을 써요." },
      { type: "choose", q: "I don't know ___ here.", ko: "나는 여기서 아는 사람이 아무도 없어.", choices: ["someone", "anyone", "no one"], answer: 1, hint: "don't가 있으니 anyone이에요." },
      { type: "choose", q: "There was ___ on the table.", ko: "탁자 위에 아무것도 없었어.", choices: ["anything", "something", "nothing"], answer: 2, hint: "not이 없으니 '없다'는 nothing으로 말해요." },
      { type: "order", words: ["I", "have", "something", "to", "tell", "you."], ko: "너에게 할 말이 있어." },
      { type: "order", words: ["Did", "you", "buy", "anything?"], ko: "뭐 샀어?" },
    ],
  },
  {
    id: "sequence",
    emoji: "🔢",
    title: "First, Then, Finally",
    subtitle: "순서대로 설명하기",
    grade: "초6",
    slides: [
      {
        emoji: "1️⃣",
        say: "방법이나 순서를 설명할 때는 <b>First</b>(먼저), <b>Second</b>(둘째로), <b>Next</b>·<b>Then</b>(다음에, 그다음), <b>Finally</b>(마지막으로)를 문장 앞에 써요.",
        pattern: "First, ~. Then, ~. Finally, ~.",
        examples: [
          { en: "First, wash your hands.", ko: "먼저 손을 씻어요.", emoji: "🧼" },
          { en: "Then, put the bread on a plate.", ko: "그다음 빵을 접시에 올려요.", emoji: "🍞" },
          { en: "Finally, enjoy your sandwich!", ko: "마지막으로 샌드위치를 맛있게 먹어요!", emoji: "🥪" },
        ],
      },
      {
        emoji: "⏱️",
        say: "<b>before</b>(~ 전에)와 <b>after</b>(~ 후에)로 두 일의 순서를 한 문장에 말할 수도 있어요.",
        pattern: "before + 일 · after + 일",
        examples: [
          { en: "Brush your teeth before bed.", ko: "자기 전에 이를 닦아요.", emoji: "🪥" },
          { en: "After school, I go to the library.", ko: "학교가 끝나고 나는 도서관에 가요.", emoji: "📚" },
        ],
      },
      {
        emoji: "📖",
        say: "지난 일을 이야기할 때도 써요. <b>At first</b>(처음에는)는 나중에 달라졌다는 느낌이에요.",
        pattern: "At first ~. But later ~.",
        examples: [
          { en: "At first, I was nervous.", ko: "처음에는 긴장했어요.", emoji: "😰" },
          { en: "But later, I had a lot of fun.", ko: "하지만 나중에는 아주 재미있었어요.", emoji: "😄" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 순서는 <b>First → Then → Finally</b>, 두 일은 <b>before · after</b>!",
        pattern: "First · Next · Then · Finally · before · after",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___, cut the apple. Then, put it in the bowl.", ko: "먼저 사과를 잘라요. 그다음 그릇에 넣어요.", choices: ["First", "Finally", "After"], answer: 0, hint: "처음 할 일은 First예요." },
      { type: "choose", q: "___, put the cake in the box. That's it!", ko: "마지막으로 케이크를 상자에 넣어요. 끝!", choices: ["First", "Finally", "Before"], answer: 1, hint: "마지막 순서는 Finally예요." },
      { type: "choose", q: "Wash your hands ___ you eat.", ko: "먹기 전에 손을 씻어요.", choices: ["after", "before", "then"], answer: 1, hint: "'~ 전에'는 before예요." },
      { type: "choose", q: "___ dinner, we watched TV.", ko: "저녁을 먹고 나서 우리는 TV를 봤어요.", choices: ["After", "First", "Before"], answer: 0, hint: "'~ 후에'는 After예요." },
      { type: "order", words: ["First,", "open", "the", "box."], ko: "먼저 상자를 열어요." },
      { type: "order", words: ["Then,", "add", "some", "milk."], ko: "그다음 우유를 조금 넣어요." },
    ],
  },
  {
    id: "it-takes",
    emoji: "⏳",
    title: "It takes 10 minutes.",
    subtitle: "시간이 얼마나 걸리는지",
    grade: "초6",
    slides: [
      {
        emoji: "🚶",
        say: "'~이 걸려요'는 <b>It takes + 시간</b>이에요. 무엇을 하는 데 걸리는지는 뒤에 <b>to + 동작</b>으로 붙여요.",
        pattern: "It takes + 시간 + to + 동작",
        examples: [
          { en: "It takes ten minutes.", ko: "10분 걸려요.", emoji: "⏱️" },
          { en: "It takes 20 minutes to walk to school.", ko: "학교까지 걸어가는 데 20분 걸려요.", emoji: "🏫" },
        ],
      },
      {
        emoji: "❓",
        say: "'얼마나 걸려요?'는 <b>How long does it take?</b>예요.",
        pattern: "How long does it take (to ~)?",
        examples: [
          { en: "How long does it take to get there?", ko: "거기까지 가는 데 얼마나 걸려요?", emoji: "🗺️" },
          { en: "It takes about an hour by bus.", ko: "버스로 한 시간쯤 걸려요.", emoji: "🚌" },
        ],
      },
      {
        emoji: "⏪",
        say: "지난 일이면 <b>took</b>, 앞으로의 일이면 <b>will take</b>예요.",
        pattern: "It took ~ · It will take ~",
        examples: [
          { en: "It took two hours to finish my homework.", ko: "숙제를 끝내는 데 두 시간 걸렸어요.", emoji: "📝" },
          { en: "It will take a long time.", ko: "오래 걸릴 거예요.", emoji: "🐢" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 묻기: <b>How long does it take?</b> 대답: <b>It takes + 시간 (+ to 동작)</b>",
        pattern: "How long does it take? — It takes 10 minutes.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "It ___ five minutes to get to the park.", ko: "공원까지 가는 데 5분 걸려요.", choices: ["takes", "take", "taking"], answer: 0, hint: "It 뒤에는 takes예요." },
      { type: "choose", q: "How ___ does it take?", ko: "얼마나 걸려요?", choices: ["long", "many", "much"], answer: 0, hint: "시간이 얼마나 걸리는지는 How long이에요." },
      { type: "choose", q: "It ___ three hours to bake the bread yesterday.", ko: "어제 빵을 굽는 데 세 시간 걸렸어요.", choices: ["takes", "took", "will take"], answer: 1, hint: "yesterday는 지난 일이라 took이에요." },
      { type: "choose", q: "It takes an hour ___ clean my room.", ko: "내 방을 청소하는 데 한 시간 걸려요.", choices: ["to", "for", "and"], answer: 0, hint: "무엇을 하는 데 걸리는지는 to + 동작이에요." },
      { type: "order", words: ["How", "long", "does", "it", "take?"], ko: "얼마나 걸려요?" },
      { type: "order", words: ["It", "takes", "ten", "minutes", "by", "bike."], ko: "자전거로 10분 걸려요." },
    ],
  }
);
