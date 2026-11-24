// 초등 기초 문법: 화면 하나에 개념 하나, 그림 예문, 바로 해 보기.
// slides: { emoji, say(설명), pattern(큰 글씨 패턴, 선택), examples: [{ en, ko, emoji }] }
// practice: { type: "choose", q(___ 빈칸), ko, choices, answer, hint } | { type: "order", words(정답 순서), ko }
const BASIC_TOPICS = [
  {
    id: "be",
    emoji: "🙋",
    title: "I am, You are, He is",
    subtitle: "'나는 ~예요' 말하기",
    grade: "초2",
    slides: [
      {
        emoji: "🙋",
        say: "영어로 '나는 ~예요'라고 말할 때는 <b>I am</b>을 써요. I는 '나', am은 '~예요'라는 뜻이에요.",
        pattern: "I am ___",
        examples: [
          { en: "I am Minji.", ko: "나는 민지예요.", emoji: "🙋‍♀️" },
          { en: "I am happy.", ko: "나는 행복해요.", emoji: "😊" },
          { en: "I am nine.", ko: "나는 아홉 살이에요.", emoji: "9️⃣" },
        ],
      },
      {
        emoji: "👉",
        say: "앞에 있는 친구, 즉 '너'에게 말할 때는 <b>You are</b>를 써요.",
        pattern: "You are ___",
        examples: [
          { en: "You are my friend.", ko: "너는 내 친구야.", emoji: "🤝" },
          { en: "You are kind.", ko: "너는 친절해.", emoji: "💖" },
          { en: "You are tall.", ko: "너는 키가 커.", emoji: "📏" },
        ],
      },
      {
        emoji: "👨",
        say: "다른 한 사람을 말할 때는 남자면 <b>He is</b>, 여자면 <b>She is</b>를 써요.",
        pattern: "He is ___ / She is ___",
        examples: [
          { en: "He is my dad.", ko: "그는 우리 아빠예요.", emoji: "👨" },
          { en: "She is my mom.", ko: "그녀는 우리 엄마예요.", emoji: "👩" },
          { en: "She is a teacher.", ko: "그녀는 선생님이에요.", emoji: "👩‍🏫" },
        ],
      },
      {
        emoji: "🐶",
        say: "사람이 아닌 것 하나를 말할 때는 <b>It is</b>를 써요. 동물이나 물건, 날씨에도 써요.",
        pattern: "It is ___",
        examples: [
          { en: "It is a dog.", ko: "그것은 강아지예요.", emoji: "🐶" },
          { en: "It is big.", ko: "그것은 커요.", emoji: "🐘" },
          { en: "It is hot.", ko: "더워요.", emoji: "☀️" },
        ],
      },
      {
        emoji: "👫",
        say: "여러 명일 때는 <b>We are</b>(우리는)와 <b>They are</b>(그들은)를 써요.",
        pattern: "We are ___ / They are ___",
        examples: [
          { en: "We are friends.", ko: "우리는 친구예요.", emoji: "👫" },
          { en: "They are students.", ko: "그들은 학생이에요.", emoji: "🎒" },
        ],
      },
      {
        emoji: "✨",
        say: "짝꿍을 기억해요! <b>I는 am</b>, <b>You·We·They는 are</b>, <b>He·She·It은 is</b>예요.",
        pattern: "I am · You are · He is · She is · It is · We are · They are",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ happy.", ko: "나는 행복해요.", choices: ["am", "is", "are"], answer: 0, hint: "I는 am과 짝꿍이에요." },
      { type: "choose", q: "She ___ my sister.", ko: "그녀는 우리 언니예요.", choices: ["am", "is", "are"], answer: 1, hint: "She는 is와 짝꿍이에요." },
      { type: "choose", q: "You ___ kind.", ko: "너는 친절해.", choices: ["am", "is", "are"], answer: 2, hint: "You는 are와 짝꿍이에요." },
      { type: "choose", q: "It ___ a cat.", ko: "그것은 고양이예요.", choices: ["is", "are", "am"], answer: 0, hint: "사람이 아닌 것 하나(It)는 is와 짝꿍이에요." },
      { type: "order", words: ["We", "are", "friends."], ko: "우리는 친구예요." },
      { type: "order", words: ["He", "is", "my", "dad."], ko: "그는 우리 아빠예요." },
    ],
  },
  {
    id: "article",
    emoji: "🍎",
    title: "a와 an",
    subtitle: "'하나'를 말할 때",
    grade: "초2",
    slides: [
      {
        emoji: "🍌",
        say: "물건이 하나일 때는 이름 앞에 <b>a</b>를 붙여요. '하나'라는 뜻이에요.",
        pattern: "a + 이름",
        examples: [
          { en: "a banana", ko: "바나나 하나", emoji: "🍌" },
          { en: "a dog", ko: "강아지 한 마리", emoji: "🐶" },
          { en: "a book", ko: "책 한 권", emoji: "📘" },
        ],
      },
      {
        emoji: "🍎",
        say: "그런데 이름이 <b>아, 에, 이, 오, 어</b> 같은 소리로 시작하면 a 대신 <b>an</b>을 써요. 'a apple'은 말하기 불편해서 'an apple'이라고 해요.",
        pattern: "an + 아·에·이·오·어 소리",
        examples: [
          { en: "an apple", ko: "사과 하나", emoji: "🍎" },
          { en: "an egg", ko: "달걀 하나", emoji: "🥚" },
          { en: "an orange", ko: "오렌지 하나", emoji: "🍊" },
        ],
      },
      {
        emoji: "🐘",
        say: "하나 더 볼까요? 코끼리(elephant), 우산(umbrella), 아이스크림(ice cream)도 그런 소리로 시작해서 an을 써요.",
        pattern: "an elephant · an umbrella",
        examples: [
          { en: "an elephant", ko: "코끼리 한 마리", emoji: "🐘" },
          { en: "an umbrella", ko: "우산 하나", emoji: "☂️" },
          { en: "an ice cream", ko: "아이스크림 하나", emoji: "🍦" },
        ],
      },
      {
        emoji: "🗣️",
        say: "문장 안에서는 이렇게 써요. a와 an은 <b>하나일 때만</b> 붙여요.",
        examples: [
          { en: "I have a cat.", ko: "나는 고양이 한 마리가 있어요.", emoji: "🐱" },
          { en: "This is an egg.", ko: "이것은 달걀이에요.", emoji: "🥚" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 보통은 <b>a</b>, 아·에·이·오·어 소리로 시작하면 <b>an</b>이에요.",
        pattern: "a dog · an apple",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ apple", ko: "사과 하나", choices: ["a", "an"], answer: 1, hint: "apple은 '애' 소리로 시작해요. 그럴 땐 an!" },
      { type: "choose", q: "___ cat", ko: "고양이 한 마리", choices: ["a", "an"], answer: 0, hint: "cat은 '캣' 소리로 시작해요. 보통은 a!" },
      { type: "choose", q: "___ egg", ko: "달걀 하나", choices: ["a", "an"], answer: 1, hint: "egg는 '에' 소리로 시작해요. 그럴 땐 an!" },
      { type: "choose", q: "___ ball", ko: "공 하나", choices: ["a", "an"], answer: 0, hint: "ball은 '볼' 소리로 시작해요. 보통은 a!" },
      { type: "choose", q: "___ umbrella", ko: "우산 하나", choices: ["a", "an"], answer: 1, hint: "umbrella는 '엄' 소리로 시작해요. 그럴 땐 an!" },
      { type: "order", words: ["I", "have", "a", "dog."], ko: "나는 강아지 한 마리가 있어요." },
    ],
  },
  {
    id: "plural",
    emoji: "🍪",
    title: "하나와 여럿 (-s)",
    subtitle: "두 개 이상일 때",
    grade: "초2",
    slides: [
      {
        emoji: "🍪",
        say: "두 개 이상일 때는 이름 끝에 <b>-s</b>를 붙여요. cookie가 하나면 cookie, 여러 개면 cookies예요.",
        pattern: "이름 + s",
        examples: [
          { en: "two cats", ko: "고양이 두 마리", emoji: "🐱🐱" },
          { en: "three books", ko: "책 세 권", emoji: "📚" },
          { en: "five apples", ko: "사과 다섯 개", emoji: "🍎🍎🍎" },
        ],
      },
      {
        emoji: "📦",
        say: "s, x, ch, sh로 끝나는 이름은 <b>-es</b>를 붙여요. 그래야 말하기가 편해요.",
        pattern: "box → boxes",
        examples: [
          { en: "two boxes", ko: "상자 두 개", emoji: "📦📦" },
          { en: "three foxes", ko: "여우 세 마리", emoji: "🦊" },
          { en: "four dishes", ko: "접시 네 개", emoji: "🍽️" },
        ],
      },
      {
        emoji: "🧒",
        say: "모양이 확 바뀌는 단어도 있어요. 자주 나오니까 외워 두면 좋아요.",
        pattern: "child → children · man → men · foot → feet",
        examples: [
          { en: "two children", ko: "아이 두 명", emoji: "🧒🧒" },
          { en: "three men", ko: "남자 세 명", emoji: "👨👨👨" },
          { en: "two feet", ko: "발 두 개", emoji: "🦶🦶" },
        ],
      },
      {
        emoji: "🔢",
        say: "문장에서 써 봐요. 하나일 때는 <b>a</b>, 둘 이상일 때는 <b>-s</b>!",
        examples: [
          { en: "I have a pencil.", ko: "나는 연필이 하나 있어요.", emoji: "✏️" },
          { en: "I have two pencils.", ko: "나는 연필이 두 자루 있어요.", emoji: "✏️✏️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 하나면 <b>a cat</b>, 여럿이면 <b>cats</b>. -es를 붙이거나 모양이 바뀌는 단어도 있어요.",
        pattern: "a cat → cats · a box → boxes · a child → children",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "two ___", ko: "강아지 두 마리", choices: ["dog", "dogs"], answer: 1, hint: "둘 이상이면 끝에 -s를 붙여요." },
      { type: "choose", q: "three ___", ko: "상자 세 개", choices: ["box", "boxs", "boxes"], answer: 2, hint: "x로 끝나는 단어는 -es를 붙여요." },
      { type: "choose", q: "an ___", ko: "사과 하나", choices: ["apple", "apples"], answer: 0, hint: "an은 '하나'라는 뜻이라 -s를 붙이지 않아요." },
      { type: "choose", q: "four ___", ko: "아이 네 명", choices: ["child", "childs", "children"], answer: 2, hint: "child는 모양이 바뀌어서 children이 돼요." },
      { type: "choose", q: "one ___", ko: "책 한 권", choices: ["book", "books"], answer: 0, hint: "하나(one)일 때는 -s를 붙이지 않아요." },
      { type: "order", words: ["I", "have", "two", "cats."], ko: "나는 고양이가 두 마리 있어요." },
    ],
  },
  {
    id: "this-that",
    emoji: "👉",
    title: "this와 that",
    subtitle: "'이것'과 '저것'",
    grade: "초2",
    slides: [
      {
        emoji: "👇",
        say: "가까이 있는 것을 가리킬 때는 <b>this</b>(이것)를 써요.",
        pattern: "This is ___",
        examples: [
          { en: "This is my bag.", ko: "이것은 내 가방이에요.", emoji: "🎒" },
          { en: "This is a pen.", ko: "이것은 펜이에요.", emoji: "🖊️" },
        ],
      },
      {
        emoji: "👉",
        say: "멀리 있는 것을 가리킬 때는 <b>that</b>(저것)을 써요.",
        pattern: "That is ___",
        examples: [
          { en: "That is the moon.", ko: "저것은 달이에요.", emoji: "🌙" },
          { en: "That is a bird.", ko: "저것은 새예요.", emoji: "🐦" },
        ],
      },
      {
        emoji: "🧑",
        say: "사람을 소개할 때도 써요. 'This is ~'는 '이쪽은 ~예요'라는 뜻이에요.",
        examples: [
          { en: "This is my friend, Tom.", ko: "이쪽은 내 친구 Tom이에요.", emoji: "🧑" },
          { en: "That is my teacher.", ko: "저분은 우리 선생님이에요.", emoji: "👩‍🏫" },
        ],
      },
      {
        emoji: "❓",
        say: "물어볼 때는 순서를 바꿔서 <b>Is this ~?</b>(이거 ~예요?)라고 해요. 대답은 'Yes, it is.'(네, 맞아요)예요.",
        pattern: "Is this ___?",
        examples: [
          { en: "Is this your cup?", ko: "이거 네 컵이야?", emoji: "🥤" },
          { en: "Yes, it is.", ko: "응, 맞아.", emoji: "🙆" },
          { en: "What is that?", ko: "저건 뭐야?", emoji: "🤔" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 가까이 있으면 <b>this</b>, 멀리 있으면 <b>that</b>!",
        pattern: "this 👇 가까이 · that 👉 멀리",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ is an apple.", ko: "(손에 든 사과를 보며) 이것은 사과예요.", choices: ["This", "That"], answer: 0, hint: "손에 들고 있으면 가까이 있는 거예요. 가까이는 this!" },
      { type: "choose", q: "___ is a mountain.", ko: "(멀리 보이는 산을 보며) 저것은 산이에요.", choices: ["This", "That"], answer: 1, hint: "멀리 보이는 건 that이에요." },
      { type: "choose", q: "This ___ my book.", ko: "이것은 내 책이에요.", choices: ["is", "are", "am"], answer: 0, hint: "this(이것 하나)는 is와 짝꿍이에요." },
      { type: "choose", q: "___ this your pen?", ko: "이거 네 펜이야?", choices: ["Is", "Are"], answer: 0, hint: "물어볼 때는 Is를 맨 앞에 써요." },
      { type: "order", words: ["That", "is", "a", "star."], ko: "저것은 별이에요." },
      { type: "order", words: ["This", "is", "my", "mom."], ko: "이쪽은 우리 엄마예요." },
    ],
  },
  {
    id: "can",
    emoji: "💪",
    title: "can (할 수 있어요)",
    subtitle: "할 수 있는 것 말하기",
    grade: "초2",
    slides: [
      {
        emoji: "💪",
        say: "'~할 수 있어요'라고 말할 때는 동작 앞에 <b>can</b>을 붙여요.",
        pattern: "I can + 동작",
        examples: [
          { en: "I can swim.", ko: "나는 수영할 수 있어요.", emoji: "🏊" },
          { en: "I can jump.", ko: "나는 점프할 수 있어요.", emoji: "🦘" },
          { en: "She can sing.", ko: "그녀는 노래할 수 있어요.", emoji: "🎤" },
        ],
      },
      {
        emoji: "🙅",
        say: "할 수 없을 때는 <b>can't</b>를 써요. cannot을 줄인 말이에요.",
        pattern: "I can't + 동작",
        examples: [
          { en: "I can't fly.", ko: "나는 날 수 없어요.", emoji: "🕊️" },
          { en: "A fish can't walk.", ko: "물고기는 걸을 수 없어요.", emoji: "🐟" },
        ],
      },
      {
        emoji: "❓",
        say: "물어볼 때는 can을 맨 앞으로 보내요. <b>Can you ~?</b>는 '너는 ~할 수 있니?'예요.",
        pattern: "Can you + 동작?",
        examples: [
          { en: "Can you swim?", ko: "너는 수영할 수 있니?", emoji: "🏊" },
          { en: "Yes, I can.", ko: "응, 할 수 있어.", emoji: "🙆" },
          { en: "No, I can't.", ko: "아니, 못 해.", emoji: "🙅" },
        ],
      },
      {
        emoji: "⚠️",
        say: "can 뒤의 동작은 모양이 그대로예요. She can swims가 아니라 <b>She can swim</b>이에요!",
        pattern: "can + 동작 (그대로)",
        examples: [
          { en: "He can run fast.", ko: "그는 빨리 달릴 수 있어요.", emoji: "🏃" },
          { en: "My dog can catch a ball.", ko: "우리 강아지는 공을 잡을 수 있어요.", emoji: "🐶" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 할 수 있으면 <b>can</b>, 못 하면 <b>can't</b>, 물어볼 땐 <b>Can you ~?</b>",
        pattern: "I can · I can't · Can you ~?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ swim.", ko: "나는 수영할 수 있어요.", choices: ["can", "can't"], answer: 0, hint: "할 수 있으면 can이에요." },
      { type: "choose", q: "A cat ___ fly.", ko: "고양이는 날 수 없어요.", choices: ["can", "can't"], answer: 1, hint: "못 하면 can't예요." },
      { type: "choose", q: "She can ___.", ko: "그녀는 노래할 수 있어요.", choices: ["sing", "sings"], answer: 0, hint: "can 뒤의 동작은 모양이 그대로예요." },
      { type: "choose", q: "___ you jump?", ko: "너는 점프할 수 있니?", choices: ["Can", "Are"], answer: 0, hint: "'~할 수 있니?'는 Can으로 시작해요." },
      { type: "order", words: ["I", "can", "ride", "a", "bike."], ko: "나는 자전거를 탈 수 있어요." },
      { type: "order", words: ["Can", "you", "swim?"], ko: "너는 수영할 수 있니?" },
    ],
  },
  {
    id: "imperative",
    emoji: "👋",
    title: "Sit down! Let's go!",
    subtitle: "'~해요', '~하자' 말하기",
    grade: "초2",
    slides: [
      {
        emoji: "🪑",
        say: "누군가에게 '~해요'라고 할 때는 주인공 없이 <b>동작으로 바로 시작</b>해요.",
        pattern: "동작 + ~ !",
        examples: [
          { en: "Sit down.", ko: "앉아요.", emoji: "🪑" },
          { en: "Stand up.", ko: "일어나요.", emoji: "🧍" },
          { en: "Open the door.", ko: "문을 열어요.", emoji: "🚪" },
        ],
      },
      {
        emoji: "🙏",
        say: "앞이나 뒤에 <b>please</b>를 붙이면 공손한 말이 돼요.",
        pattern: "Please + 동작",
        examples: [
          { en: "Please come in.", ko: "들어오세요.", emoji: "🚪" },
          { en: "Help me, please.", ko: "도와주세요.", emoji: "🙏" },
        ],
      },
      {
        emoji: "✋",
        say: "'~하지 마요'는 앞에 <b>Don't</b>를 붙여요.",
        pattern: "Don't + 동작",
        examples: [
          { en: "Don't run.", ko: "뛰지 마요.", emoji: "🏃" },
          { en: "Don't touch it.", ko: "그거 만지지 마요.", emoji: "✋" },
        ],
      },
      {
        emoji: "🤝",
        say: "'우리 같이 ~하자'는 <b>Let's</b>로 시작해요.",
        pattern: "Let's + 동작",
        examples: [
          { en: "Let's play!", ko: "같이 놀자!", emoji: "⚽" },
          { en: "Let's go home.", ko: "집에 가자.", emoji: "🏠" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 시킬 땐 <b>동작부터</b>, 하지 말라고 할 땐 <b>Don't</b>, 같이 하자고 할 땐 <b>Let's</b>!",
        pattern: "Sit down. · Don't run. · Let's go.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ down, please.", ko: "앉아 주세요.", choices: ["Sit", "Sits"], answer: 0, hint: "시킬 때는 동작의 기본 모양으로 시작해요." },
      { type: "choose", q: "___ run in the room.", ko: "방에서 뛰지 마요.", choices: ["Don't", "Let's"], answer: 0, hint: "'~하지 마요'는 Don't예요." },
      { type: "choose", q: "___ play soccer!", ko: "같이 축구하자!", choices: ["Let's", "Don't"], answer: 0, hint: "'같이 ~하자'는 Let's예요." },
      { type: "choose", q: "___ the window.", ko: "창문을 열어요.", choices: ["Open", "Opens"], answer: 0, hint: "시킬 때는 동작의 기본 모양으로 시작해요." },
      { type: "order", words: ["Let's", "go", "home."], ko: "집에 가자." },
      { type: "order", words: ["Don't", "touch", "it."], ko: "그거 만지지 마요." },
    ],
  },
  {
    id: "possessive",
    emoji: "🎒",
    title: "my, your, his, her",
    subtitle: "누구의 것인지 말하기",
    grade: "초2",
    slides: [
      {
        emoji: "🎒",
        say: "'나의'는 <b>my</b>, '너의'는 <b>your</b>예요. 물건 이름 앞에 붙여요.",
        pattern: "my + 이름 · your + 이름",
        examples: [
          { en: "my bag", ko: "내 가방", emoji: "🎒" },
          { en: "your book", ko: "너의 책", emoji: "📘" },
          { en: "This is my cat.", ko: "이것은 내 고양이예요.", emoji: "🐱" },
        ],
      },
      {
        emoji: "👦",
        say: "'그의'(남자)는 <b>his</b>, '그녀의'(여자)는 <b>her</b>예요.",
        pattern: "his + 이름 · her + 이름",
        examples: [
          { en: "his cap", ko: "그의 모자", emoji: "🧢" },
          { en: "her dress", ko: "그녀의 원피스", emoji: "👗" },
          { en: "His name is Tom.", ko: "그의 이름은 Tom이에요.", emoji: "👦" },
        ],
      },
      {
        emoji: "🏫",
        say: "'우리의'는 <b>our</b>, '그들의'는 <b>their</b>, 동물이나 물건의 것은 <b>its</b>예요.",
        pattern: "our · their · its",
        examples: [
          { en: "our school", ko: "우리 학교", emoji: "🏫" },
          { en: "their house", ko: "그들의 집", emoji: "🏠" },
          { en: "The dog wags its tail.", ko: "강아지가 꼬리를 흔들어요.", emoji: "🐕" },
        ],
      },
      {
        emoji: "✨",
        say: "짝꿍으로 외워요! <b>I는 my</b>, <b>you는 your</b>, <b>he는 his</b>, <b>she는 her</b>, <b>we는 our</b>, <b>they는 their</b>, <b>it은 its</b>예요.",
        pattern: "I→my · you→your · he→his · she→her · we→our · they→their",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "This is ___ bag.", ko: "이것은 내 가방이에요.", choices: ["my", "your", "her"], answer: 0, hint: "'나의'는 my예요." },
      { type: "choose", q: "Is this ___ pen?", ko: "이거 너의 펜이니?", choices: ["my", "your", "his"], answer: 1, hint: "'너의'는 your예요." },
      { type: "choose", q: "Tom has a dog. ___ dog is big.", ko: "Tom은 강아지가 있어요. 그의 강아지는 커요.", choices: ["His", "Her"], answer: 0, hint: "Tom은 남자니까 his예요." },
      { type: "choose", q: "Mina has a cat. ___ cat is white.", ko: "미나는 고양이가 있어요. 그녀의 고양이는 하얘요.", choices: ["His", "Her"], answer: 1, hint: "미나는 여자니까 her예요." },
      { type: "choose", q: "We love ___ school.", ko: "우리는 우리 학교를 좋아해요.", choices: ["our", "their"], answer: 0, hint: "'우리의'는 our예요." },
      { type: "order", words: ["Her", "name", "is", "Mina."], ko: "그녀의 이름은 미나예요." },
    ],
  },
  {
    id: "have",
    emoji: "🎁",
    title: "I have, She has",
    subtitle: "'~을 가지고 있어요' 말하기",
    grade: "초2",
    slides: [
      {
        emoji: "🎁",
        say: "'나는 ~이 있어요', '~을 가지고 있어요'라고 할 때는 <b>I have</b>를 써요.",
        pattern: "I have ___",
        examples: [
          { en: "I have a pencil.", ko: "나는 연필이 있어요.", emoji: "✏️" },
          { en: "I have a dog.", ko: "나는 강아지가 있어요.", emoji: "🐶" },
          { en: "I have two sisters.", ko: "나는 언니가 두 명 있어요.", emoji: "👭" },
        ],
      },
      {
        emoji: "👫",
        say: "You, We, They도 똑같이 <b>have</b>를 써요.",
        pattern: "You have · We have · They have",
        examples: [
          { en: "You have a nice bag.", ko: "너는 멋진 가방이 있구나.", emoji: "👜" },
          { en: "We have a cat.", ko: "우리는 고양이가 있어요.", emoji: "🐱" },
          { en: "They have a big house.", ko: "그들은 큰 집이 있어요.", emoji: "🏠" },
        ],
      },
      {
        emoji: "👧",
        say: "He, She, It처럼 한 사람(하나)일 때는 have가 <b>has</b>로 바뀌어요!",
        pattern: "He has · She has · It has",
        examples: [
          { en: "She has a red hat.", ko: "그녀는 빨간 모자가 있어요.", emoji: "👒" },
          { en: "He has a ball.", ko: "그는 공이 있어요.", emoji: "⚽" },
          { en: "It has long ears.", ko: "그것은 귀가 길어요.", emoji: "🐰" },
        ],
      },
      {
        emoji: "🤧",
        say: "아픈 곳을 말할 때도 have를 써요. <b>I have a cold.</b>는 '나는 감기에 걸렸어요'예요.",
        pattern: "I have a ___ (아픈 곳)",
        examples: [
          { en: "I have a cold.", ko: "나는 감기에 걸렸어요.", emoji: "🤧" },
          { en: "I have a headache.", ko: "나는 머리가 아파요.", emoji: "🤕" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>I·You·We·They는 have</b>, <b>He·She·It은 has</b>!",
        pattern: "I have · She has",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ a pencil.", ko: "나는 연필이 있어요.", choices: ["have", "has"], answer: 0, hint: "I는 have와 짝꿍이에요." },
      { type: "choose", q: "She ___ a cat.", ko: "그녀는 고양이가 있어요.", choices: ["have", "has"], answer: 1, hint: "She는 has와 짝꿍이에요." },
      { type: "choose", q: "We ___ a new car.", ko: "우리는 새 차가 있어요.", choices: ["have", "has"], answer: 0, hint: "We는 have와 짝꿍이에요." },
      { type: "choose", q: "My dad ___ a big bag.", ko: "우리 아빠는 큰 가방이 있어요.", choices: ["have", "has"], answer: 1, hint: "아빠는 한 사람(he)이니까 has예요." },
      { type: "order", words: ["I", "have", "a", "cold."], ko: "나는 감기에 걸렸어요." },
      { type: "order", words: ["He", "has", "a", "ball."], ko: "그는 공이 있어요." },
    ],
  },
  {
    id: "like-want",
    emoji: "💖",
    title: "I like, I want",
    subtitle: "좋아하는 것, 갖고 싶은 것",
    grade: "초2",
    slides: [
      {
        emoji: "💖",
        say: "'나는 ~을 좋아해요'는 <b>I like</b>를 써요. 좋아하는 것을 뒤에 붙이면 돼요.",
        pattern: "I like ___",
        examples: [
          { en: "I like pizza.", ko: "나는 피자를 좋아해요.", emoji: "🍕" },
          { en: "I like dogs.", ko: "나는 강아지를 좋아해요.", emoji: "🐶" },
          { en: "I like soccer.", ko: "나는 축구를 좋아해요.", emoji: "⚽" },
        ],
      },
      {
        emoji: "🐾",
        say: "동물이나 과일처럼 셀 수 있는 것을 좋아한다고 할 때는 보통 <b>여러 개(-s)</b>로 말해요.",
        pattern: "I like cats. · I like apples.",
        examples: [
          { en: "I like cats.", ko: "나는 고양이를 좋아해요.", emoji: "🐱" },
          { en: "I like apples.", ko: "나는 사과를 좋아해요.", emoji: "🍎" },
        ],
      },
      {
        emoji: "🎁",
        say: "'나는 ~을 원해요', '~을 갖고 싶어요'는 <b>I want</b>를 써요.",
        pattern: "I want ___",
        examples: [
          { en: "I want a new bike.", ko: "나는 새 자전거를 갖고 싶어요.", emoji: "🚲" },
          { en: "I want some water.", ko: "나는 물을 좀 마시고 싶어요.", emoji: "💧" },
          { en: "I want ice cream.", ko: "나는 아이스크림을 원해요.", emoji: "🍦" },
        ],
      },
      {
        emoji: "🙋",
        say: "물어볼 때는 <b>Do you like ~?</b>라고 해요. 대답은 <b>Yes, I do.</b> 또는 <b>No, I don't.</b>예요.",
        pattern: "Do you like ___?",
        examples: [
          { en: "Do you like milk?", ko: "너는 우유를 좋아하니?", emoji: "🥛" },
          { en: "Yes, I do.", ko: "응, 좋아해.", emoji: "👍" },
          { en: "No, I don't.", ko: "아니, 안 좋아해.", emoji: "👎" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 좋아하면 <b>I like</b>, 갖고 싶으면 <b>I want</b>, 물어볼 땐 <b>Do you like ~?</b>",
        pattern: "I like ___ · I want ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ pizza.", ko: "나는 피자를 좋아해요.", choices: ["like", "want"], answer: 0, hint: "'좋아해요'는 like예요." },
      { type: "choose", q: "I ___ a new bike.", ko: "나는 새 자전거를 갖고 싶어요.", choices: ["like", "want"], answer: 1, hint: "'갖고 싶어요'는 want예요." },
      { type: "choose", q: "I like ___.", ko: "나는 고양이를 좋아해요.", choices: ["cat", "cats"], answer: 1, hint: "좋아하는 동물은 여러 개(-s)로 말해요." },
      { type: "choose", q: "___ you like milk?", ko: "너는 우유를 좋아하니?", choices: ["Do", "Are"], answer: 0, hint: "like 같은 동작을 물을 때는 Do를 앞에 써요." },
      { type: "choose", q: "Do you like apples? — Yes, I ___.", ko: "사과 좋아하니? 응, 좋아해.", choices: ["do", "am", "like"], answer: 0, hint: "Do로 물으면 do로 대답해요." },
      { type: "order", words: ["I", "want", "some", "water."], ko: "나는 물을 좀 마시고 싶어요." },
    ],
  },
  {
    id: "what-is",
    emoji: "❓",
    title: "What is this?",
    subtitle: "'이건 뭐예요?' 묻고 답하기",
    grade: "초2",
    slides: [
      {
        emoji: "❓",
        say: "<b>What</b>은 '무엇'이에요. '이건 뭐예요?'는 <b>What is this?</b>라고 해요.",
        pattern: "What is this?",
        examples: [
          { en: "What is this?", ko: "이건 뭐예요?", emoji: "❓" },
          { en: "It is a pencil.", ko: "그건 연필이에요.", emoji: "✏️" },
          { en: "It's an egg.", ko: "그건 달걀이에요.", emoji: "🥚" },
        ],
      },
      {
        emoji: "👉",
        say: "멀리 있는 것은 <b>What is that?</b>(저건 뭐예요?)이라고 물어요. 대답은 똑같이 <b>It is ~</b>예요.",
        pattern: "What is that? — It is ___",
        examples: [
          { en: "What is that?", ko: "저건 뭐예요?", emoji: "👉" },
          { en: "It is a bird.", ko: "그건 새예요.", emoji: "🐦" },
        ],
      },
      {
        emoji: "🎨",
        say: "<b>What color</b>는 '무슨 색'이에요. 색깔을 물어볼 때 써요.",
        pattern: "What color is it? — It's ___",
        examples: [
          { en: "What color is it?", ko: "그건 무슨 색이에요?", emoji: "🎨" },
          { en: "It's blue.", ko: "파란색이에요.", emoji: "🔵" },
          { en: "It's yellow.", ko: "노란색이에요.", emoji: "🟡" },
        ],
      },
      {
        emoji: "📛",
        say: "이름을 물어볼 때는 <b>What's your name?</b>이라고 해요. What's는 What is를 줄인 말이에요.",
        pattern: "What's your name? — My name is ___",
        examples: [
          { en: "What's your name?", ko: "너는 이름이 뭐니?", emoji: "📛" },
          { en: "My name is Jiho.", ko: "내 이름은 지호야.", emoji: "🙋‍♂️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! '무엇'은 <b>What</b>, 대답은 <b>It is ~</b>(줄이면 It's)!",
        pattern: "What is this? — It is ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ is this?", ko: "이건 뭐예요?", choices: ["What", "Who"], answer: 0, hint: "'무엇'은 What이에요." },
      { type: "choose", q: "What is this? — ___ is a cup.", ko: "이건 뭐예요? 그건 컵이에요.", choices: ["It", "This", "He"], answer: 0, hint: "대답할 때는 It is ~로 말해요." },
      { type: "choose", q: "What ___ is it? — It's red.", ko: "무슨 색이에요? 빨간색이에요.", choices: ["color", "name"], answer: 0, hint: "'무슨 색'은 What color예요." },
      { type: "choose", q: "What's your ___? — My name is Jiho.", ko: "이름이 뭐니? 내 이름은 지호야.", choices: ["name", "color"], answer: 0, hint: "이름은 name이에요." },
      { type: "order", words: ["What", "is", "that?"], ko: "저건 뭐예요?" },
      { type: "order", words: ["My", "name", "is", "Jiho."], ko: "내 이름은 지호야." },
    ],
  },

  // ── 초4 ──
  {
    id: "present-s",
    emoji: "⚽",
    title: "I play, She plays",
    subtitle: "매일 하는 일 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "⚽",
        say: "매일 하는 일을 말할 때는 동작을 그대로 써요. 이때는 am, is, are가 필요 없어요!",
        pattern: "I + 동작",
        examples: [
          { en: "I play soccer.", ko: "나는 축구를 해요.", emoji: "⚽" },
          { en: "I like milk.", ko: "나는 우유를 좋아해요.", emoji: "🥛" },
          { en: "We eat lunch at noon.", ko: "우리는 12시에 점심을 먹어요.", emoji: "🍱" },
        ],
      },
      {
        emoji: "🎹",
        say: "주인공이 <b>he, she, it</b>이나 Tom처럼 한 명(하나)이면 동작 끝에 <b>-s</b>를 붙여요.",
        pattern: "He / She + 동작s",
        examples: [
          { en: "She plays the piano.", ko: "그녀는 피아노를 쳐요.", emoji: "🎹" },
          { en: "Tom likes pizza.", ko: "Tom은 피자를 좋아해요.", emoji: "🍕" },
          { en: "My dog runs fast.", ko: "우리 개는 빨리 달려요.", emoji: "🐕" },
        ],
      },
      {
        emoji: "📝",
        say: "-s 붙이는 방법이 조금씩 달라요. go는 <b>goes</b>, watch는 <b>watches</b>, study는 y를 i로 바꿔 <b>studies</b>, have는 <b>has</b>가 돼요.",
        pattern: "go→goes · study→studies · have→has",
        examples: [
          { en: "He goes to school.", ko: "그는 학교에 가요.", emoji: "🏫" },
          { en: "She studies English.", ko: "그녀는 영어를 공부해요.", emoji: "📖" },
          { en: "It has a long tail.", ko: "그것은 꼬리가 길어요.", emoji: "🐒" },
        ],
      },
      {
        emoji: "🚫",
        say: "주의! <b>I, you, we, they</b>일 때는 -s를 붙이지 않아요.",
        examples: [
          { en: "They play games.", ko: "그들은 게임을 해요.", emoji: "🎮" },
          { en: "You like cats.", ko: "너는 고양이를 좋아해.", emoji: "🐱" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>he·she·it·한 명</b>이면 -s, 나머지는 그대로!",
        pattern: "I play · You play · She plays",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "She ___ tennis.", ko: "그녀는 테니스를 쳐요.", choices: ["play", "plays"], answer: 1, hint: "She는 한 명이라 -s를 붙여요." },
      { type: "choose", q: "I ___ apples.", ko: "나는 사과를 좋아해요.", choices: ["like", "likes"], answer: 0, hint: "I 뒤에서는 -s를 붙이지 않아요." },
      { type: "choose", q: "He ___ to school.", ko: "그는 학교에 가요.", choices: ["go", "gos", "goes"], answer: 2, hint: "go는 -es를 붙여 goes가 돼요." },
      { type: "choose", q: "My cat ___ a lot.", ko: "우리 고양이는 많이 자요.", choices: ["sleep", "sleeps"], answer: 1, hint: "My cat은 하나라서 -s를 붙여요." },
      { type: "choose", q: "Mina ___ a bike.", ko: "미나는 자전거가 있어요.", choices: ["have", "has"], answer: 1, hint: "have는 has로 바뀌어요." },
      { type: "order", words: ["Tom", "likes", "pizza."], ko: "Tom은 피자를 좋아해요." },
    ],
  },
  {
    id: "negative",
    emoji: "🙅",
    title: "~하지 않아요",
    subtitle: "not, don't, doesn't",
    grade: "초4",
    slides: [
      {
        emoji: "🙅",
        say: "am, is, are가 있는 문장은 그 뒤에 <b>not</b>을 붙이면 '~가 아니에요'가 돼요. is not은 <b>isn't</b>로 줄여 쓰기도 해요.",
        pattern: "am / is / are + not",
        examples: [
          { en: "I am not tired.", ko: "나는 피곤하지 않아요.", emoji: "😀" },
          { en: "She is not my sister.", ko: "그녀는 우리 언니가 아니에요.", emoji: "👧" },
          { en: "It isn't cold.", ko: "춥지 않아요.", emoji: "☀️" },
        ],
      },
      {
        emoji: "🥕",
        say: "일반 동작을 '안 해요'라고 할 때는 동작 앞에 <b>don't</b>를 붙여요. do not을 줄인 말이에요.",
        pattern: "I / You / We / They + don't + 동작",
        examples: [
          { en: "I don't like carrots.", ko: "나는 당근을 안 좋아해요.", emoji: "🥕" },
          { en: "We don't have homework.", ko: "우리는 숙제가 없어요.", emoji: "📚" },
        ],
      },
      {
        emoji: "🐟",
        say: "주인공이 he, she, it이면 <b>doesn't</b>를 써요. 이때 동작에 붙던 -s는 빠져요!",
        pattern: "He / She + doesn't + 동작",
        examples: [
          { en: "He doesn't eat fish.", ko: "그는 생선을 안 먹어요.", emoji: "🐟" },
          { en: "She doesn't like rain.", ko: "그녀는 비를 안 좋아해요.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! am·is·are가 있으면 <b>not</b>, 동작이면 <b>don't</b>, he·she·it이면 <b>doesn't</b>!",
        pattern: "I am not · I don't like · She doesn't like",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ hungry.", ko: "나는 배고프지 않아요.", choices: ["am not", "don't"], answer: 0, hint: "hungry(배고픈)는 상태라서 am not을 써요." },
      { type: "choose", q: "I ___ like milk.", ko: "나는 우유를 안 좋아해요.", choices: ["don't", "doesn't"], answer: 0, hint: "I는 don't예요." },
      { type: "choose", q: "He ___ play soccer.", ko: "그는 축구를 안 해요.", choices: ["don't", "doesn't"], answer: 1, hint: "He는 doesn't예요." },
      { type: "choose", q: "She doesn't ___ cats.", ko: "그녀는 고양이를 안 좋아해요.", choices: ["like", "likes"], answer: 0, hint: "doesn't 뒤에서는 -s를 빼요." },
      { type: "choose", q: "It ___ big.", ko: "그것은 크지 않아요.", choices: ["isn't", "don't"], answer: 0, hint: "big(큰)은 상태라서 isn't를 써요." },
      { type: "order", words: ["We", "don't", "have", "a", "dog."], ko: "우리는 강아지가 없어요." },
    ],
  },
  {
    id: "question",
    emoji: "❓",
    title: "Are you ~? Do you ~?",
    subtitle: "물어보기",
    grade: "초4",
    slides: [
      {
        emoji: "😊",
        say: "am, is, are가 있는 문장은 그 말을 <b>맨 앞으로</b> 옮기면 질문이 돼요.",
        pattern: "You are happy. → Are you happy?",
        examples: [
          { en: "Are you happy?", ko: "너는 행복하니?", emoji: "😊" },
          { en: "Is she your sister?", ko: "그녀는 너의 언니니?", emoji: "👧" },
          { en: "Yes, she is.", ko: "응, 맞아.", emoji: "🙆" },
        ],
      },
      {
        emoji: "🍕",
        say: "일반 동작을 물어볼 때는 맨 앞에 <b>Do</b>를 붙여요.",
        pattern: "Do you + 동작?",
        examples: [
          { en: "Do you like pizza?", ko: "너는 피자를 좋아하니?", emoji: "🍕" },
          { en: "Yes, I do.", ko: "응, 좋아해.", emoji: "🙆" },
          { en: "No, I don't.", ko: "아니, 안 좋아해.", emoji: "🙅" },
        ],
      },
      {
        emoji: "⚽",
        say: "주인공이 he, she, it이면 <b>Does</b>를 써요. 이때 동작에서 -s는 빠져요.",
        pattern: "Does he / she + 동작?",
        examples: [
          { en: "Does he play soccer?", ko: "그는 축구를 하니?", emoji: "⚽" },
          { en: "Yes, he does.", ko: "응, 해.", emoji: "🙆" },
        ],
      },
      {
        emoji: "🔎",
        say: "'무엇', '어디', '언제'를 물을 때는 <b>What, Where, When</b>을 맨 앞에 써요.",
        pattern: "What · Where · When",
        examples: [
          { en: "What is this?", ko: "이것은 뭐예요?", emoji: "🤔" },
          { en: "Where do you live?", ko: "너는 어디에 사니?", emoji: "🏠" },
          { en: "When is your birthday?", ko: "네 생일은 언제야?", emoji: "🎂" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! am·is·are는 <b>앞으로</b>, 동작은 <b>Do / Does</b>를 앞에!",
        pattern: "Are you ~? · Do you ~? · Does she ~?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ you hungry?", ko: "너 배고프니?", choices: ["Are", "Do"], answer: 0, hint: "hungry(배고픈)는 상태라서 Are로 물어요." },
      { type: "choose", q: "___ you like dogs?", ko: "너는 개를 좋아하니?", choices: ["Are", "Do"], answer: 1, hint: "like(좋아하다)는 동작이라 Do로 물어요." },
      { type: "choose", q: "___ she play the piano?", ko: "그녀는 피아노를 치니?", choices: ["Do", "Does"], answer: 1, hint: "she는 Does예요." },
      { type: "choose", q: "Does he ___ milk?", ko: "그는 우유를 마시니?", choices: ["drink", "drinks"], answer: 0, hint: "Does 뒤에서는 -s를 빼요." },
      { type: "choose", q: "___ is your name?", ko: "너의 이름은 뭐니?", choices: ["What", "Where"], answer: 0, hint: "'무엇'은 What이에요." },
      { type: "order", words: ["Do", "you", "like", "cats?"], ko: "너는 고양이를 좋아하니?" },
    ],
  },
  {
    id: "past",
    emoji: "📅",
    title: "어제 한 일 (-ed)",
    subtitle: "played, went",
    grade: "초4",
    slides: [
      {
        emoji: "📅",
        say: "이미 지난 일을 말할 때는 동작 끝에 <b>-ed</b>를 붙여요.",
        pattern: "동작 + ed",
        examples: [
          { en: "I played soccer yesterday.", ko: "나는 어제 축구를 했어요.", emoji: "⚽" },
          { en: "She watched TV.", ko: "그녀는 TV를 봤어요.", emoji: "📺" },
          { en: "We walked to school.", ko: "우리는 학교에 걸어갔어요.", emoji: "🚶" },
        ],
      },
      {
        emoji: "💃",
        say: "e로 끝나는 동작은 <b>-d</b>만 붙여요(like → liked). 지난 일은 주인공이 누구든 -s 없이 모양이 똑같아요.",
        pattern: "like → liked · dance → danced",
        examples: [
          { en: "I liked the movie.", ko: "나는 그 영화가 좋았어요.", emoji: "🎬" },
          { en: "He danced at the party.", ko: "그는 파티에서 춤췄어요.", emoji: "💃" },
        ],
      },
      {
        emoji: "🔀",
        say: "모양이 확 바뀌는 동작도 있어요. 자주 쓰니까 외워 두면 좋아요!",
        pattern: "go→went · eat→ate · see→saw · have→had",
        examples: [
          { en: "I went to the zoo.", ko: "나는 동물원에 갔어요.", emoji: "🦁" },
          { en: "We ate pizza.", ko: "우리는 피자를 먹었어요.", emoji: "🍕" },
          { en: "I saw a rainbow.", ko: "나는 무지개를 봤어요.", emoji: "🌈" },
        ],
      },
      {
        emoji: "🤒",
        say: "am과 is는 <b>was</b>로, are는 <b>were</b>로 바뀌어요.",
        pattern: "am / is → was · are → were",
        examples: [
          { en: "I was sick yesterday.", ko: "나는 어제 아팠어요.", emoji: "🤒" },
          { en: "They were happy.", ko: "그들은 행복했어요.", emoji: "😊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 지난 일은 <b>-ed</b>, 모양이 바뀌는 단어는 외우기, am·is는 <b>was</b>, are는 <b>were</b>!",
        pattern: "play → played · go → went · is → was",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ soccer yesterday.", ko: "나는 어제 축구를 했어요.", choices: ["play", "played"], answer: 1, hint: "yesterday(어제)는 지난 일이라 -ed를 붙여요." },
      { type: "choose", q: "We ___ to the park.", ko: "우리는 공원에 갔어요.", choices: ["goed", "went"], answer: 1, hint: "go는 went로 바뀌어요." },
      { type: "choose", q: "She ___ a cake.", ko: "그녀는 케이크를 먹었어요.", choices: ["eated", "ate"], answer: 1, hint: "eat은 ate로 바뀌어요." },
      { type: "choose", q: "I ___ tired yesterday.", ko: "나는 어제 피곤했어요.", choices: ["am", "was"], answer: 1, hint: "am의 지난 모양은 was예요." },
      { type: "choose", q: "They ___ in the pool.", ko: "그들은 수영장에 있었어요.", choices: ["was", "were"], answer: 1, hint: "they는 are → were예요." },
      { type: "order", words: ["I", "saw", "a", "big", "dog."], ko: "나는 큰 개를 봤어요." },
    ],
  },
  {
    id: "progressive",
    emoji: "🏃",
    title: "지금 ~하는 중 (-ing)",
    subtitle: "I am eating",
    grade: "초4",
    slides: [
      {
        emoji: "🍽️",
        say: "'지금 ~하는 중이에요'는 <b>am / is / are + 동작ing</b>로 말해요.",
        pattern: "I am + 동작ing",
        examples: [
          { en: "I am eating.", ko: "나는 먹는 중이에요.", emoji: "🍽️" },
          { en: "She is reading.", ko: "그녀는 읽는 중이에요.", emoji: "📖" },
          { en: "They are playing.", ko: "그들은 노는 중이에요.", emoji: "⚽" },
        ],
      },
      {
        emoji: "🔤",
        say: "-ing 붙이기: 보통은 그냥 붙이고(read → reading), e로 끝나면 e를 빼고(make → making), run이나 swim처럼 짧은 단어는 마지막 글자를 한 번 더 써요(running, swimming).",
        pattern: "make → making · run → running",
        examples: [
          { en: "He is making a cake.", ko: "그는 케이크를 만드는 중이에요.", emoji: "🎂" },
          { en: "The dog is running.", ko: "개가 달리고 있어요.", emoji: "🐕" },
          { en: "We are swimming.", ko: "우리는 수영하는 중이에요.", emoji: "🏊" },
        ],
      },
      {
        emoji: "👀",
        say: "<b>Look!</b>(봐!)이나 <b>now</b>(지금)가 보이면 진행형이 잘 어울려요.",
        examples: [
          { en: "Look! It is snowing.", ko: "봐! 눈이 오고 있어.", emoji: "❄️" },
          { en: "I am doing my homework now.", ko: "나는 지금 숙제하는 중이에요.", emoji: "✏️" },
        ],
      },
      {
        emoji: "🎨",
        say: "물어볼 때는 am, is, are를 맨 앞으로! '뭐 하는 중이야?'는 <b>What are you doing?</b>이에요.",
        pattern: "What are you doing?",
        examples: [
          { en: "What are you doing?", ko: "너 뭐 하는 중이야?", emoji: "🤔" },
          { en: "I am drawing a picture.", ko: "그림 그리는 중이야.", emoji: "🎨" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 지금 하는 중이면 <b>am / is / are + ing</b>!",
        pattern: "I am eating · She is reading · They are playing",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I am ___ now.", ko: "나는 지금 먹는 중이에요.", choices: ["eat", "eating"], answer: 1, hint: "하는 중이면 동작에 -ing를 붙여요." },
      { type: "choose", q: "She ___ sleeping.", ko: "그녀는 자는 중이에요.", choices: ["is", "are"], answer: 0, hint: "She는 is와 짝꿍이에요." },
      { type: "choose", q: "They are ___.", ko: "그들은 달리는 중이에요.", choices: ["runing", "running"], answer: 1, hint: "run은 n을 한 번 더 써서 running이에요." },
      { type: "choose", q: "He is ___ a kite.", ko: "그는 연을 만드는 중이에요.", choices: ["makeing", "making"], answer: 1, hint: "make는 e를 빼고 making이에요." },
      { type: "choose", q: "What ___ you doing?", ko: "너 뭐 하는 중이야?", choices: ["are", "do"], answer: 0, hint: "하는 중인지 물을 때는 are를 써요." },
      { type: "order", words: ["We", "are", "playing", "soccer."], ko: "우리는 축구를 하는 중이에요." },
    ],
  },
  {
    id: "there",
    emoji: "🏠",
    title: "There is, There are",
    subtitle: "'~이 있어요' 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "🐱",
        say: "'~이 있어요'라고 말할 때는 <b>There is</b>를 써요. 하나가 있을 때예요.",
        pattern: "There is + 하나",
        examples: [
          { en: "There is a cat.", ko: "고양이가 한 마리 있어요.", emoji: "🐱" },
          { en: "There is a book on the desk.", ko: "책상 위에 책이 한 권 있어요.", emoji: "📘" },
        ],
      },
      {
        emoji: "✨",
        say: "여러 개가 있으면 <b>There are</b>를 써요.",
        pattern: "There are + 여러 개",
        examples: [
          { en: "There are two cats.", ko: "고양이가 두 마리 있어요.", emoji: "🐱🐱" },
          { en: "There are many stars.", ko: "별이 많이 있어요.", emoji: "🌟" },
        ],
      },
      {
        emoji: "🔎",
        say: "어디에 있는지 덧붙이면 더 자세해져요.",
        examples: [
          { en: "There is a ball under the chair.", ko: "의자 아래에 공이 있어요.", emoji: "⚽" },
          { en: "There are fish in the pond.", ko: "연못에 물고기가 있어요.", emoji: "🐟" },
        ],
      },
      {
        emoji: "❓",
        say: "물어볼 때는 순서를 바꿔서 <b>Is there ~?</b>, <b>Are there ~?</b>라고 해요.",
        pattern: "Is there ~? · Are there ~?",
        examples: [
          { en: "Is there a park near here?", ko: "이 근처에 공원이 있나요?", emoji: "🌳" },
          { en: "Yes, there is.", ko: "네, 있어요.", emoji: "🙆" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 하나면 <b>There is</b>, 여러 개면 <b>There are</b>!",
        pattern: "There is a cat. · There are two cats.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "There ___ a dog.", ko: "개가 한 마리 있어요.", choices: ["is", "are"], answer: 0, hint: "하나면 There is예요." },
      { type: "choose", q: "There ___ three apples.", ko: "사과가 세 개 있어요.", choices: ["is", "are"], answer: 1, hint: "여러 개면 There are예요." },
      { type: "choose", q: "There is a ___.", ko: "펜이 하나 있어요.", choices: ["pen", "pens"], answer: 0, hint: "There is 뒤에는 하나만 와요." },
      { type: "choose", q: "There are many ___.", ko: "꽃이 많이 있어요.", choices: ["flower", "flowers"], answer: 1, hint: "There are 뒤에는 여러 개(-s)가 와요." },
      { type: "choose", q: "___ there a cat?", ko: "고양이가 있나요?", choices: ["Is", "Are"], answer: 0, hint: "a cat은 하나라서 Is there로 물어요." },
      { type: "order", words: ["There", "is", "a", "cake."], ko: "케이크가 하나 있어요." },
    ],
  },
  {
    id: "place",
    emoji: "📦",
    title: "in, on, under",
    subtitle: "어디에 있어요?",
    grade: "초4",
    slides: [
      {
        emoji: "📦",
        say: "<b>in</b>은 '~ 안에'예요.",
        pattern: "in the box",
        examples: [
          { en: "The cat is in the box.", ko: "고양이가 상자 안에 있어요.", emoji: "📦" },
          { en: "The fish is in the water.", ko: "물고기가 물속에 있어요.", emoji: "🐟" },
        ],
      },
      {
        emoji: "🛏️",
        say: "<b>on</b>은 '~ 위에'예요. 위에 닿아 있을 때 써요.",
        pattern: "on the desk",
        examples: [
          { en: "The book is on the desk.", ko: "책이 책상 위에 있어요.", emoji: "📘" },
          { en: "The cat is on the bed.", ko: "고양이가 침대 위에 있어요.", emoji: "🛏️" },
        ],
      },
      {
        emoji: "🪑",
        say: "<b>under</b>는 '~ 아래에'예요.",
        pattern: "under the chair",
        examples: [
          { en: "The ball is under the chair.", ko: "공이 의자 아래에 있어요.", emoji: "⚽" },
          { en: "The dog is under the table.", ko: "개가 탁자 아래에 있어요.", emoji: "🐕" },
        ],
      },
      {
        emoji: "🚪",
        say: "<b>next to</b>는 '~ 옆에', <b>behind</b>는 '~ 뒤에'예요.",
        pattern: "next to · behind",
        examples: [
          { en: "The bank is next to the school.", ko: "은행은 학교 옆에 있어요.", emoji: "🏦" },
          { en: "The cat is behind the door.", ko: "고양이가 문 뒤에 있어요.", emoji: "🚪" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 안에 <b>in</b>, 위에 <b>on</b>, 아래에 <b>under</b>, 옆에 <b>next to</b>, 뒤에 <b>behind</b>!",
        pattern: "in · on · under · next to · behind",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The cat is ___ the box.", ko: "고양이가 상자 안에 있어요.", choices: ["in", "on", "under"], answer: 0, hint: "'안에'는 in이에요." },
      { type: "choose", q: "The cup is ___ the table.", ko: "컵이 탁자 위에 있어요.", choices: ["in", "on", "under"], answer: 1, hint: "'위에'는 on이에요." },
      { type: "choose", q: "The shoes are ___ the bed.", ko: "신발이 침대 아래에 있어요.", choices: ["in", "on", "under"], answer: 2, hint: "'아래에'는 under예요." },
      { type: "choose", q: "Sit ___ me.", ko: "내 옆에 앉아.", choices: ["next to", "under"], answer: 0, hint: "'옆에'는 next to예요." },
      { type: "choose", q: "The dog is ___ the tree.", ko: "개가 나무 뒤에 있어요.", choices: ["behind", "in"], answer: 0, hint: "'뒤에'는 behind예요." },
      { type: "order", words: ["The", "pen", "is", "on", "the", "desk."], ko: "펜이 책상 위에 있어요." },
    ],
  },
  {
    id: "compare",
    emoji: "📏",
    title: "bigger, the biggest",
    subtitle: "'더 ~한', '가장 ~한'",
    grade: "초4",
    slides: [
      {
        emoji: "🐘",
        say: "둘을 비교해서 '더 ~해요'라고 할 때는 끝에 <b>-er</b>을 붙이고, 뒤에 <b>than</b>(~보다)을 써요.",
        pattern: "A is + ~er + than B",
        examples: [
          { en: "An elephant is bigger than a dog.", ko: "코끼리는 개보다 더 커요.", emoji: "🐘" },
          { en: "I am taller than my sister.", ko: "나는 여동생보다 키가 더 커요.", emoji: "📏" },
        ],
      },
      {
        emoji: "🏆",
        say: "여럿 중에서 '가장 ~해요'라고 할 때는 <b>the + ~est</b>를 써요.",
        pattern: "the + ~est",
        examples: [
          { en: "He is the tallest in my class.", ko: "그는 우리 반에서 가장 키가 커요.", emoji: "🏆" },
          { en: "This is the biggest cake.", ko: "이것이 가장 큰 케이크예요.", emoji: "🎂" },
        ],
      },
      {
        emoji: "🔤",
        say: "붙이는 방법: 보통은 -er/-est(tall → taller), big이나 hot은 마지막 글자를 한 번 더(bigger, hotter), y로 끝나면 i로 바꿔요(happy → happier).",
        pattern: "big → bigger · happy → happier",
        examples: [
          { en: "Today is hotter than yesterday.", ko: "오늘은 어제보다 더 더워요.", emoji: "☀️" },
          { en: "I am happier now.", ko: "나는 지금 더 행복해요.", emoji: "😊" },
        ],
      },
      {
        emoji: "🌸",
        say: "긴 단어는 앞에 <b>more, most</b>를 써요. good은 특별해서 <b>better, best</b>로 바뀌어요.",
        pattern: "more beautiful · good → better → best",
        examples: [
          { en: "This flower is more beautiful.", ko: "이 꽃이 더 아름다워요.", emoji: "🌸" },
          { en: "You are my best friend.", ko: "너는 내 가장 친한 친구야.", emoji: "🤝" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 둘이면 <b>-er + than</b>, 여럿 중 1등은 <b>the -est</b>!",
        pattern: "taller than · the tallest",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "A lion is ___ than a cat.", ko: "사자는 고양이보다 더 커요.", choices: ["big", "bigger", "biggest"], answer: 1, hint: "than이 있으면 -er이에요." },
      { type: "choose", q: "He is the ___ boy in my class.", ko: "그는 우리 반에서 가장 빠른 소년이에요.", choices: ["faster", "fastest"], answer: 1, hint: "'가장'은 the -est예요." },
      { type: "choose", q: "Today is ___ than yesterday.", ko: "오늘은 어제보다 더 더워요.", choices: ["hoter", "hotter"], answer: 1, hint: "hot은 t를 한 번 더 써서 hotter예요." },
      { type: "choose", q: "This book is ___ than that one.", ko: "이 책이 저 책보다 더 재미있어요.", choices: ["interestinger", "more interesting"], answer: 1, hint: "긴 단어는 앞에 more를 써요." },
      { type: "choose", q: "You are my ___ friend.", ko: "너는 내 가장 친한 친구야.", choices: ["goodest", "best"], answer: 1, hint: "good은 better, best로 바뀌어요." },
      { type: "order", words: ["I", "am", "taller", "than", "you."], ko: "나는 너보다 키가 커요." },
    ],
  },
  {
    id: "wh-questions",
    emoji: "🕵️",
    title: "Who, Where, When, How",
    subtitle: "누가, 어디서, 언제, 어떻게",
    grade: "초4",
    slides: [
      {
        emoji: "🕵️",
        say: "궁금한 것을 물어보는 단어를 <b>의문사</b>라고 해요. 의문사는 항상 질문의 <b>맨 앞</b>에 와요.",
        pattern: "What 무엇 · Who 누구 · Where 어디 · When 언제 · How 어떻게 · Why 왜",
        examples: [],
      },
      {
        emoji: "🙋",
        say: "<b>Who</b>는 '누구', <b>Where</b>는 '어디'예요.",
        pattern: "Who is ___? · Where is ___?",
        examples: [
          { en: "Who is she?", ko: "그녀는 누구예요?", emoji: "👩" },
          { en: "She is my aunt.", ko: "우리 이모예요.", emoji: "😊" },
          { en: "Where is my bag?", ko: "내 가방 어디 있어요?", emoji: "🎒" },
          { en: "It's on the desk.", ko: "책상 위에 있어요.", emoji: "🪑" },
        ],
      },
      {
        emoji: "⏰",
        say: "<b>When</b>은 '언제', <b>Why</b>는 '왜'예요. Why로 물으면 <b>Because</b>(왜냐하면)로 대답해요.",
        pattern: "When is ___? · Why ___? — Because ___",
        examples: [
          { en: "When is your birthday?", ko: "네 생일은 언제야?", emoji: "🎂" },
          { en: "It's in May.", ko: "5월이야.", emoji: "📅" },
          { en: "Why are you sad?", ko: "왜 슬퍼?", emoji: "😢" },
          { en: "Because I lost my toy.", ko: "장난감을 잃어버렸거든.", emoji: "🧸" },
        ],
      },
      {
        emoji: "🙂",
        say: "<b>How</b>는 '어떻게, 어때'예요. 기분이나 날씨, 가는 방법을 물을 때 써요.",
        pattern: "How are you? · How do you go to school?",
        examples: [
          { en: "How are you?", ko: "어떻게 지내?", emoji: "🙂" },
          { en: "I'm fine, thank you.", ko: "잘 지내, 고마워.", emoji: "👍" },
          { en: "How do you go to school?", ko: "학교에 어떻게 가?", emoji: "🏫" },
          { en: "I walk to school.", ko: "걸어서 가.", emoji: "🚶" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 궁금한 게 무엇이냐에 따라 <b>What · Who · Where · When · How · Why</b> 중 하나를 맨 앞에 써요. 의문사로 물으면 Yes/No가 아니라 내용으로 대답해요.",
        pattern: "의문사 + is / are / do ... ?",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ is he? — He is my uncle.", ko: "그는 누구예요? 우리 삼촌이에요.", choices: ["Who", "Where", "When"], answer: 0, hint: "'누구'는 Who예요." },
      { type: "choose", q: "___ is the cat? — It's under the bed.", ko: "고양이 어디 있어요? 침대 아래에 있어요.", choices: ["What", "Where", "Why"], answer: 1, hint: "'어디'는 Where예요." },
      { type: "choose", q: "___ is your birthday? — It's in June.", ko: "생일이 언제야? 6월이야.", choices: ["When", "Who", "How"], answer: 0, hint: "'언제'는 When이에요." },
      { type: "choose", q: "___ are you? — I'm fine.", ko: "어떻게 지내? 잘 지내.", choices: ["Who", "How", "Where"], answer: 1, hint: "기분을 물을 때는 How예요." },
      { type: "choose", q: "Why are you happy? — ___ it's my birthday.", ko: "왜 기뻐? 내 생일이거든.", choices: ["Because", "When", "So"], answer: 0, hint: "Why로 물으면 Because로 대답해요." },
      { type: "order", words: ["Where", "is", "my", "bag?"], ko: "내 가방 어디 있어요?" },
    ],
  },
  {
    id: "how-many",
    emoji: "🔢",
    title: "How many? How much?",
    subtitle: "몇 개, 얼마, 몇 살",
    grade: "초4",
    slides: [
      {
        emoji: "🔢",
        say: "'몇 개예요?'는 <b>How many</b>를 써요. 뒤에는 <b>여러 개(-s)</b> 모양이 와요.",
        pattern: "How many ___s?",
        examples: [
          { en: "How many apples?", ko: "사과가 몇 개예요?", emoji: "🍎" },
          { en: "Five apples.", ko: "다섯 개요.", emoji: "5️⃣" },
          { en: "How many cats do you have?", ko: "고양이를 몇 마리 키워?", emoji: "🐱" },
        ],
      },
      {
        emoji: "💰",
        say: "'얼마예요?'(가격)는 <b>How much</b>를 써요. 가게에서 많이 써요.",
        pattern: "How much is it? — It's ___ won.",
        examples: [
          { en: "How much is it?", ko: "이거 얼마예요?", emoji: "🏷️" },
          { en: "It's 1,000 won.", ko: "천 원이에요.", emoji: "💵" },
          { en: "How much is this cap?", ko: "이 모자는 얼마예요?", emoji: "🧢" },
        ],
      },
      {
        emoji: "🎂",
        say: "'몇 살이에요?'는 <b>How old</b>, '키가 얼마예요?'는 <b>How tall</b>이에요. How 뒤에 궁금한 말을 붙이면 돼요.",
        pattern: "How old are you? — I'm ___ years old.",
        examples: [
          { en: "How old are you?", ko: "너는 몇 살이니?", emoji: "🎂" },
          { en: "I'm ten years old.", ko: "나는 열 살이야.", emoji: "🔟" },
          { en: "How tall are you?", ko: "너는 키가 얼마니?", emoji: "📏" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 몇 개는 <b>How many</b>, 얼마는 <b>How much</b>, 몇 살은 <b>How old</b>!",
        pattern: "How many · How much · How old",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "How ___ pencils do you have?", ko: "연필이 몇 자루 있어?", choices: ["many", "much", "old"], answer: 0, hint: "'몇 개'는 How many예요." },
      { type: "choose", q: "How ___ is it? — It's 2,000 won.", ko: "얼마예요? 2천 원이에요.", choices: ["many", "much", "old"], answer: 1, hint: "가격은 How much예요." },
      { type: "choose", q: "How ___ are you? — I'm nine.", ko: "몇 살이니? 아홉 살이야.", choices: ["many", "much", "old"], answer: 2, hint: "나이는 How old예요." },
      { type: "choose", q: "How many ___ are there?", ko: "새가 몇 마리 있어요?", choices: ["bird", "birds"], answer: 1, hint: "How many 뒤에는 여러 개(-s)가 와요." },
      { type: "order", words: ["How", "old", "are", "you?"], ko: "너는 몇 살이니?" },
      { type: "order", words: ["How", "much", "is", "it?"], ko: "이거 얼마예요?" },
    ],
  },
  {
    id: "it-time",
    emoji: "🕒",
    title: "It's 3 o'clock. It's sunny.",
    subtitle: "시간, 요일, 날씨 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "🕒",
        say: "시간을 말할 때는 <b>It's</b>로 시작해요. 이때 It은 '그것'이라는 뜻이 없어요. 그냥 자리를 채우는 말이에요.",
        pattern: "What time is it? — It's ___ o'clock.",
        examples: [
          { en: "What time is it?", ko: "몇 시예요?", emoji: "⏰" },
          { en: "It's three o'clock.", ko: "3시예요.", emoji: "🕒" },
          { en: "It's seven thirty.", ko: "7시 30분이에요.", emoji: "🕢" },
        ],
      },
      {
        emoji: "📅",
        say: "요일과 날짜도 <b>It's</b>로 말해요.",
        pattern: "What day is it? — It's ___day.",
        examples: [
          { en: "What day is it today?", ko: "오늘 무슨 요일이에요?", emoji: "📅" },
          { en: "It's Monday.", ko: "월요일이에요.", emoji: "1️⃣" },
          { en: "It's May 5th.", ko: "5월 5일이에요.", emoji: "🎈" },
        ],
      },
      {
        emoji: "🌤️",
        say: "날씨도 <b>It's</b>로 말해요. '날씨 어때요?'는 <b>How's the weather?</b>예요.",
        pattern: "How's the weather? — It's ___.",
        examples: [
          { en: "It's sunny.", ko: "맑아요.", emoji: "☀️" },
          { en: "It's rainy.", ko: "비가 와요.", emoji: "🌧️" },
          { en: "It's snowy and cold.", ko: "눈이 오고 추워요.", emoji: "❄️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 시간·요일·날씨를 말할 때는 <b>It's</b>로 시작해요. 이 It은 해석하지 않아요.",
        pattern: "It's 3 o'clock. · It's Monday. · It's sunny.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "What time is it? — ___ four o'clock.", ko: "몇 시예요? 4시예요.", choices: ["It's", "I'm", "This is"], answer: 0, hint: "시간은 It's로 말해요." },
      { type: "choose", q: "___ the weather? — It's sunny.", ko: "날씨 어때요? 맑아요.", choices: ["How's", "What's"], answer: 0, hint: "날씨는 How's the weather?라고 물어요." },
      { type: "choose", q: "What ___ is it today? — It's Friday.", ko: "오늘 무슨 요일이에요? 금요일이에요.", choices: ["time", "day"], answer: 1, hint: "요일은 day예요." },
      { type: "choose", q: "It's ___. Take your umbrella.", ko: "비가 와요. 우산 챙겨요.", choices: ["sunny", "rainy"], answer: 1, hint: "rain(비)이 오니까 rainy예요." },
      { type: "order", words: ["What", "time", "is", "it?"], ko: "몇 시예요?" },
      { type: "order", words: ["It's", "cold", "today."], ko: "오늘은 추워요." },
    ],
  },
  {
    id: "past-question",
    emoji: "🤔",
    title: "Did you ~? I didn't ~",
    subtitle: "지난 일 묻기, 안 했다고 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "🤔",
        say: "지난 일을 물어볼 때는 맨 앞에 <b>Did</b>를 써요. 이때 동작은 <b>원래 모양</b>으로 돌아가요!",
        pattern: "Did you + 원래 모양 ___?",
        examples: [
          { en: "Did you eat lunch?", ko: "점심 먹었어?", emoji: "🍱" },
          { en: "Did she go to school?", ko: "그녀는 학교에 갔어?", emoji: "🏫" },
          { en: "Did you play soccer?", ko: "축구 했어?", emoji: "⚽" },
        ],
      },
      {
        emoji: "👍",
        say: "대답은 <b>Yes, I did.</b>(응, 했어) 또는 <b>No, I didn't.</b>(아니, 안 했어)예요.",
        pattern: "Yes, I did. · No, I didn't.",
        examples: [
          { en: "Did you finish your homework?", ko: "숙제 다 했어?", emoji: "📒" },
          { en: "Yes, I did.", ko: "응, 했어.", emoji: "👍" },
          { en: "No, I didn't.", ko: "아니, 안 했어.", emoji: "👎" },
        ],
      },
      {
        emoji: "🙅",
        say: "'~하지 않았어요'는 동작 앞에 <b>didn't</b>를 붙여요. 여기서도 동작은 원래 모양이에요. went가 아니라 go!",
        pattern: "I didn't + 원래 모양 ___",
        examples: [
          { en: "I didn't go to the park.", ko: "나는 공원에 가지 않았어요.", emoji: "🌳" },
          { en: "He didn't eat breakfast.", ko: "그는 아침을 안 먹었어요.", emoji: "🍳" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 지난 일을 물을 땐 <b>Did</b>, 안 했으면 <b>didn't</b>, 그리고 동작은 항상 <b>원래 모양</b>!",
        pattern: "Did you go? · I didn't go.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ you eat lunch?", ko: "점심 먹었어?", choices: ["Do", "Did", "Are"], answer: 1, hint: "지난 일을 물을 때는 Did예요." },
      { type: "choose", q: "Did you ___ to the zoo?", ko: "동물원에 갔어?", choices: ["go", "went"], answer: 0, hint: "Did 뒤에는 원래 모양(go)이 와요." },
      { type: "choose", q: "Did she call you? — Yes, she ___.", ko: "그녀가 전화했어? 응, 했어.", choices: ["did", "does", "is"], answer: 0, hint: "Did로 물으면 did로 대답해요." },
      { type: "choose", q: "I ___ watch TV yesterday.", ko: "나는 어제 TV를 안 봤어요.", choices: ["don't", "didn't"], answer: 1, hint: "어제(지난 일)니까 didn't예요." },
      { type: "choose", q: "He didn't ___ his room.", ko: "그는 방을 청소하지 않았어요.", choices: ["clean", "cleaned"], answer: 0, hint: "didn't 뒤에는 원래 모양이 와요." },
      { type: "order", words: ["Did", "you", "play", "soccer?"], ko: "축구 했어?" },
    ],
  },
  {
    id: "object",
    emoji: "💌",
    title: "me, him, her, them",
    subtitle: "'나를, 그를' 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "💌",
        say: "동작을 받는 사람(~를, ~에게)은 모양이 바뀌어요. I는 <b>me</b>, you는 그대로 <b>you</b>예요.",
        pattern: "I → me · you → you",
        examples: [
          { en: "Help me!", ko: "나를 도와줘!", emoji: "🆘" },
          { en: "I love you.", ko: "나는 너를 사랑해.", emoji: "❤️" },
          { en: "Mom calls me.", ko: "엄마가 나를 불러요.", emoji: "📣" },
        ],
      },
      {
        emoji: "👦",
        say: "he는 <b>him</b>, she는 <b>her</b>, it은 그대로 <b>it</b>이에요.",
        pattern: "he → him · she → her · it → it",
        examples: [
          { en: "I know him.", ko: "나는 그를 알아요.", emoji: "👦" },
          { en: "I like her.", ko: "나는 그녀가 좋아요.", emoji: "👧" },
          { en: "I want it.", ko: "나는 그걸 갖고 싶어요.", emoji: "🎁" },
        ],
      },
      {
        emoji: "👨‍👩‍👧",
        say: "we는 <b>us</b>, they는 <b>them</b>이에요.",
        pattern: "we → us · they → them",
        examples: [
          { en: "Come with us.", ko: "우리랑 같이 가자.", emoji: "🚶" },
          { en: "I miss them.", ko: "나는 그들이 보고 싶어요.", emoji: "🥺" },
        ],
      },
      {
        emoji: "📍",
        say: "문장 <b>앞</b>(누가)에는 I, he, she를, 동작 <b>뒤</b>(누구를)에는 me, him, her를 써요.",
        pattern: "He likes her. · She likes him.",
        examples: [
          { en: "He helps her.", ko: "그는 그녀를 도와줘요.", emoji: "🤝" },
          { en: "She helps him.", ko: "그녀는 그를 도와줘요.", emoji: "🤗" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>I→me</b>, <b>he→him</b>, <b>she→her</b>, <b>we→us</b>, <b>they→them</b>, you와 it은 그대로!",
        pattern: "me · you · him · her · it · us · them",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Please help ___.", ko: "저를 도와주세요.", choices: ["I", "me", "my"], answer: 1, hint: "동작 뒤의 '나를'은 me예요." },
      { type: "choose", q: "Tom is my friend. I like ___.", ko: "Tom은 내 친구예요. 나는 그를 좋아해요.", choices: ["he", "him", "his"], answer: 1, hint: "동작 뒤의 '그를'은 him이에요." },
      { type: "choose", q: "Mina is kind. Everyone loves ___.", ko: "미나는 친절해요. 모두가 그녀를 좋아해요.", choices: ["she", "her"], answer: 1, hint: "동작 뒤의 '그녀를'은 her예요." },
      { type: "choose", q: "My cousins are coming. I miss ___.", ko: "사촌들이 와요. 나는 그들이 보고 싶었어요.", choices: ["they", "them"], answer: 1, hint: "동작 뒤의 '그들을'은 them이에요." },
      { type: "choose", q: "Come with ___!", ko: "우리랑 같이 가자!", choices: ["we", "us"], answer: 1, hint: "with 뒤의 '우리'는 us예요." },
      { type: "order", words: ["I", "love", "you."], ko: "나는 너를 사랑해." },
    ],
  },
  {
    id: "will",
    emoji: "🔮",
    title: "I will ~",
    subtitle: "앞으로 할 일 말하기",
    grade: "초4",
    slides: [
      {
        emoji: "🔮",
        say: "앞으로 할 일(미래)을 말할 때는 동작 앞에 <b>will</b>을 써요. '~할 거예요'라는 뜻이에요.",
        pattern: "I will + 원래 모양 ___",
        examples: [
          { en: "I will go to the beach.", ko: "나는 바닷가에 갈 거예요.", emoji: "🏖️" },
          { en: "I will help you.", ko: "내가 도와줄게.", emoji: "🤝" },
          { en: "It will rain tomorrow.", ko: "내일 비가 올 거예요.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "👧",
        say: "will 뒤에는 주인공이 누구든 <b>원래 모양</b>이 와요. She will play (plays ✗)!",
        pattern: "She will play. · He will come.",
        examples: [
          { en: "She will play the piano.", ko: "그녀는 피아노를 칠 거예요.", emoji: "🎹" },
          { en: "He will come soon.", ko: "그는 곧 올 거예요.", emoji: "🏃" },
        ],
      },
      {
        emoji: "✂️",
        say: "줄여서 <b>I'll</b>, <b>You'll</b>이라고도 해요. 안 할 거라면 <b>won't</b>(will not)를 써요.",
        pattern: "I'll ___ · I won't ___",
        examples: [
          { en: "I'll call you.", ko: "내가 전화할게.", emoji: "📞" },
          { en: "I won't be late.", ko: "늦지 않을게요.", emoji: "⏰" },
        ],
      },
      {
        emoji: "🙋",
        say: "물어볼 때는 <b>Will you ~?</b>라고 해요. '~해 줄래?'라고 부탁할 때도 써요.",
        pattern: "Will you ___? — Yes, I will. / No, I won't.",
        examples: [
          { en: "Will you come to my party?", ko: "내 파티에 올 거야?", emoji: "🎉" },
          { en: "Yes, I will.", ko: "응, 갈게.", emoji: "👍" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 미래는 <b>will + 원래 모양</b>, 안 할 거면 <b>won't</b>!",
        pattern: "I will go. · I won't go.",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ visit my grandma tomorrow.", ko: "나는 내일 할머니 댁에 갈 거예요.", choices: ["will", "did"], answer: 0, hint: "내일(미래)은 will이에요." },
      { type: "choose", q: "She will ___ the piano.", ko: "그녀는 피아노를 칠 거예요.", choices: ["play", "plays", "played"], answer: 0, hint: "will 뒤에는 원래 모양이 와요." },
      { type: "choose", q: "I ___ be late. I promise!", ko: "늦지 않을게요. 약속해요!", choices: ["won't", "don't"], answer: 0, hint: "안 할 거면 won't예요." },
      { type: "choose", q: "Will you come? — Yes, I ___.", ko: "올 거야? 응, 갈게.", choices: ["will", "do", "am"], answer: 0, hint: "Will로 물으면 will로 대답해요." },
      { type: "order", words: ["It", "will", "rain", "tomorrow."], ko: "내일 비가 올 거예요." },
      { type: "order", words: ["I'll", "help", "you."], ko: "내가 도와줄게." },
    ],
  },

  // ── 초6 ──
  {
    id: "going-to",
    emoji: "🗓️",
    title: "be going to",
    subtitle: "계획한 일 말하기",
    grade: "초6",
    slides: [
      {
        emoji: "🗓️",
        say: "미리 계획해 둔 일을 말할 때는 <b>am / is / are going to + 원래 모양</b>을 써요. '~할 예정이에요'라는 뜻이에요.",
        pattern: "I am going to ___",
        examples: [
          { en: "I'm going to visit Jeju.", ko: "나는 제주도에 갈 예정이에요.", emoji: "✈️" },
          { en: "She is going to learn swimming.", ko: "그녀는 수영을 배울 예정이에요.", emoji: "🏊" },
          { en: "We are going to have a party.", ko: "우리는 파티를 열 거예요.", emoji: "🎉" },
        ],
      },
      {
        emoji: "🤔",
        say: "will은 '지금 막 정한 일', be going to는 '미리 정해 둔 일'에 잘 어울려요. 뜻은 둘 다 '~할 거예요'예요.",
        pattern: "will (지금 정함) · be going to (미리 정함)",
        examples: [
          { en: "The phone is ringing. I'll get it.", ko: "전화 온다. 내가 받을게.", emoji: "📞" },
          { en: "I'm going to see a movie this Saturday.", ko: "이번 토요일에 영화 볼 거야.", emoji: "🎬" },
        ],
      },
      {
        emoji: "🙋",
        say: "물어볼 때는 am·is·are를 맨 앞으로! <b>What are you going to do?</b>는 '뭐 할 거야?'예요.",
        pattern: "Are you going to ___? · What are you going to do?",
        examples: [
          { en: "What are you going to do this weekend?", ko: "이번 주말에 뭐 할 거야?", emoji: "🗓️" },
          { en: "I'm going to go camping.", ko: "캠핑 갈 거야.", emoji: "🏕️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 계획은 <b>am / is / are + going to + 원래 모양</b>!",
        pattern: "I'm going to ___ · She's going to ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ going to visit my uncle.", ko: "나는 삼촌 댁에 갈 예정이에요.", choices: ["am", "is", "are"], answer: 0, hint: "I는 am이에요." },
      { type: "choose", q: "She is going to ___ a cake.", ko: "그녀는 케이크를 만들 거예요.", choices: ["make", "makes", "making"], answer: 0, hint: "going to 뒤에는 원래 모양이 와요." },
      { type: "choose", q: "What are you going to ___ this weekend?", ko: "이번 주말에 뭐 할 거야?", choices: ["do", "doing"], answer: 0, hint: "going to 뒤에는 원래 모양이 와요." },
      { type: "choose", q: "They ___ going to play baseball.", ko: "그들은 야구를 할 거예요.", choices: ["is", "are"], answer: 1, hint: "They는 are예요." },
      { type: "order", words: ["I'm", "going", "to", "go", "camping."], ko: "나는 캠핑 갈 거야." },
      { type: "order", words: ["We", "are", "going", "to", "have", "a", "party."], ko: "우리는 파티를 열 거예요." },
    ],
  },
  {
    id: "should-must",
    emoji: "🚦",
    title: "should, must, have to",
    subtitle: "해야 하는 일, 하면 좋은 일",
    grade: "초6",
    slides: [
      {
        emoji: "💡",
        say: "<b>should</b>는 '~하는 게 좋아요'예요. 충고나 조언을 할 때 써요.",
        pattern: "You should ___",
        examples: [
          { en: "You should go to bed early.", ko: "일찍 자는 게 좋아.", emoji: "🛌" },
          { en: "You should see a doctor.", ko: "병원에 가 보는 게 좋겠어.", emoji: "🏥" },
          { en: "You shouldn't eat too much candy.", ko: "사탕을 너무 많이 먹지 않는 게 좋아.", emoji: "🍬" },
        ],
      },
      {
        emoji: "🚦",
        say: "<b>must</b>는 '반드시 ~해야 해요'예요. 규칙처럼 꼭 지켜야 할 때 써요. <b>must not</b>은 '절대 ~하면 안 돼요'예요.",
        pattern: "You must ___ · You must not ___",
        examples: [
          { en: "You must wear a seat belt.", ko: "안전벨트를 꼭 매야 해요.", emoji: "🚗" },
          { en: "You must not run here.", ko: "여기서 뛰면 안 돼요.", emoji: "🚫" },
        ],
      },
      {
        emoji: "📒",
        say: "<b>have to</b>도 '~해야 해요'예요. he·she·it이면 <b>has to</b>가 돼요.",
        pattern: "I have to ___ · She has to ___",
        examples: [
          { en: "I have to do my homework.", ko: "나는 숙제를 해야 해요.", emoji: "📒" },
          { en: "She has to get up early.", ko: "그녀는 일찍 일어나야 해요.", emoji: "⏰" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 조언은 <b>should</b>, 규칙은 <b>must</b>, 해야 할 일은 <b>have to</b>. 셋 다 뒤에는 <b>원래 모양</b>!",
        pattern: "should · must · have to + 원래 모양",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "You have a cold. You ___ rest.", ko: "감기에 걸렸구나. 쉬는 게 좋아.", choices: ["should", "shouldn't"], answer: 0, hint: "쉬는 게 좋다는 조언이니까 should예요." },
      { type: "choose", q: "You ___ run in the library.", ko: "도서관에서 뛰면 안 돼요.", choices: ["must", "must not"], answer: 1, hint: "'절대 ~하면 안 돼요'는 must not이에요." },
      { type: "choose", q: "She ___ to clean her room.", ko: "그녀는 방을 청소해야 해요.", choices: ["have", "has"], answer: 1, hint: "she는 has to예요." },
      { type: "choose", q: "You must ___ your hands.", ko: "손을 꼭 씻어야 해요.", choices: ["wash", "washes", "washing"], answer: 0, hint: "must 뒤에는 원래 모양이 와요." },
      { type: "order", words: ["You", "should", "go", "to", "bed", "early."], ko: "일찍 자는 게 좋아." },
      { type: "order", words: ["I", "have", "to", "do", "my", "homework."], ko: "나는 숙제를 해야 해요." },
    ],
  },
  {
    id: "frequency",
    emoji: "📊",
    title: "always, usually, never",
    subtitle: "얼마나 자주 하는지",
    grade: "초6",
    slides: [
      {
        emoji: "📊",
        say: "얼마나 자주 하는지 말하는 단어예요. 위에서 아래로 갈수록 덜 자주 해요.",
        pattern: "always 항상 › usually 보통 › often 자주 › sometimes 가끔 › never 절대 안",
        examples: [
          { en: "I always brush my teeth.", ko: "나는 항상 이를 닦아요.", emoji: "🪥" },
          { en: "I usually walk to school.", ko: "나는 보통 걸어서 학교에 가요.", emoji: "🚶" },
          { en: "I sometimes eat ramen.", ko: "나는 가끔 라면을 먹어요.", emoji: "🍜" },
          { en: "I never eat bugs.", ko: "나는 절대 벌레를 먹지 않아요.", emoji: "🐛" },
        ],
      },
      {
        emoji: "📍",
        say: "자리가 중요해요! 일반 동작은 <b>동작 앞</b>에, am·is·are는 <b>그 뒤</b>에 와요.",
        pattern: "I always play ___ · I am always ___",
        examples: [
          { en: "She often reads books.", ko: "그녀는 자주 책을 읽어요.", emoji: "📚" },
          { en: "He is always happy.", ko: "그는 항상 행복해요.", emoji: "😄" },
          { en: "I am never late.", ko: "나는 절대 늦지 않아요.", emoji: "⏰" },
        ],
      },
      {
        emoji: "🙋",
        say: "'얼마나 자주 ~해?'는 <b>How often</b>으로 물어요. <b>once a week</b>(일주일에 한 번)처럼 대답해도 돼요.",
        pattern: "How often do you ___?",
        examples: [
          { en: "How often do you swim?", ko: "수영 얼마나 자주 해?", emoji: "🏊" },
          { en: "Twice a week.", ko: "일주일에 두 번.", emoji: "2️⃣" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>always › usually › often › sometimes › never</b>. 동작 앞, am·is·are 뒤!",
        pattern: "I always ___ · He is always ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ brush my teeth.", ko: "나는 항상 이를 닦아요.", choices: ["always", "never"], answer: 0, hint: "'항상'은 always예요." },
      { type: "choose", q: "I ___ eat bugs!", ko: "나는 절대 벌레를 먹지 않아요!", choices: ["sometimes", "never"], answer: 1, hint: "'절대 안'은 never예요." },
      { type: "choose", q: "How ___ do you swim? — Twice a week.", ko: "수영 얼마나 자주 해? 일주일에 두 번.", choices: ["often", "many"], answer: 0, hint: "'얼마나 자주'는 How often이에요." },
      { type: "order", words: ["He", "is", "always", "happy."], ko: "그는 항상 행복해요." },
      { type: "order", words: ["I", "usually", "walk", "to", "school."], ko: "나는 보통 걸어서 학교에 가요." },
      { type: "order", words: ["She", "is", "never", "late."], ko: "그녀는 절대 늦지 않아요." },
    ],
  },
  {
    id: "to-ing",
    emoji: "🎯",
    title: "want to, like -ing",
    subtitle: "'~하고 싶어요', '~하는 걸 좋아해요'",
    grade: "초6",
    slides: [
      {
        emoji: "🎯",
        say: "'~하고 싶어요'는 <b>want to + 원래 모양</b>이에요. want 뒤에 동작을 붙이려면 to가 필요해요.",
        pattern: "I want to ___",
        examples: [
          { en: "I want to be a doctor.", ko: "나는 의사가 되고 싶어요.", emoji: "👩‍⚕️" },
          { en: "I want to eat pizza.", ko: "나는 피자를 먹고 싶어요.", emoji: "🍕" },
          { en: "Do you want to play?", ko: "너 놀고 싶어?", emoji: "🎮" },
        ],
      },
      {
        emoji: "🎨",
        say: "'~하는 걸 좋아해요'는 <b>like -ing</b>로 말해요. like to도 같은 뜻이에요.",
        pattern: "I like ___ing (= I like to ___)",
        examples: [
          { en: "I like drawing.", ko: "나는 그림 그리는 걸 좋아해요.", emoji: "🎨" },
          { en: "She likes to sing.", ko: "그녀는 노래하는 걸 좋아해요.", emoji: "🎤" },
        ],
      },
      {
        emoji: "🏁",
        say: "<b>enjoy</b>(즐기다)와 <b>finish</b>(끝내다) 뒤에는 꼭 <b>-ing</b>만 와요. to는 안 돼요!",
        pattern: "enjoy ___ing · finish ___ing",
        examples: [
          { en: "I enjoy swimming.", ko: "나는 수영을 즐겨요.", emoji: "🏊" },
          { en: "I finished reading the book.", ko: "나는 그 책을 다 읽었어요.", emoji: "📖" },
        ],
      },
      {
        emoji: "🎓",
        say: "꿈을 말할 때는 <b>I want to be ~</b>를 써요. '나는 ~가 되고 싶어요'예요.",
        pattern: "I want to be a ___",
        examples: [
          { en: "I want to be a scientist.", ko: "나는 과학자가 되고 싶어요.", emoji: "🔬" },
          { en: "He wants to be a singer.", ko: "그는 가수가 되고 싶어 해요.", emoji: "🎤" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 하고 싶으면 <b>want to</b>, 좋아하면 <b>like -ing / like to</b>, 즐기면 <b>enjoy -ing</b>!",
        pattern: "want to · like -ing · enjoy -ing",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I want ___ a doctor.", ko: "나는 의사가 되고 싶어요.", choices: ["to be", "being", "be"], answer: 0, hint: "want 뒤에는 to + 원래 모양이에요." },
      { type: "choose", q: "I enjoy ___.", ko: "나는 수영을 즐겨요.", choices: ["to swim", "swimming"], answer: 1, hint: "enjoy 뒤에는 -ing만 와요." },
      { type: "choose", q: "She likes ___.", ko: "그녀는 그림 그리는 걸 좋아해요.", choices: ["draw", "drawing"], answer: 1, hint: "like 뒤에는 -ing나 to를 써요." },
      { type: "choose", q: "Do you want to ___ with me?", ko: "나랑 같이 놀래?", choices: ["play", "playing"], answer: 0, hint: "want to 뒤에는 원래 모양이에요." },
      { type: "choose", q: "I finished ___ my homework.", ko: "나는 숙제를 다 했어요.", choices: ["to do", "doing"], answer: 1, hint: "finish 뒤에는 -ing만 와요." },
      { type: "order", words: ["I", "want", "to", "be", "a", "scientist."], ko: "나는 과학자가 되고 싶어요." },
    ],
  },
  {
    id: "conjunction",
    emoji: "🔗",
    title: "and, but, or, so, because",
    subtitle: "두 문장 이어 주기",
    grade: "초6",
    slides: [
      {
        emoji: "🔗",
        say: "<b>and</b>는 '그리고', <b>but</b>은 '하지만'이에요. 두 말을 이어 줘요.",
        pattern: "___ and ___ · ___ but ___",
        examples: [
          { en: "I like apples and bananas.", ko: "나는 사과와 바나나를 좋아해요.", emoji: "🍎" },
          { en: "It's small but strong.", ko: "그건 작지만 튼튼해요.", emoji: "💪" },
          { en: "I was tired, but I finished it.", ko: "피곤했지만 끝냈어요.", emoji: "😮‍💨" },
        ],
      },
      {
        emoji: "🔀",
        say: "<b>or</b>는 '또는', 둘 중 하나를 고를 때 써요.",
        pattern: "A or B?",
        examples: [
          { en: "Do you want milk or juice?", ko: "우유 마실래, 주스 마실래?", emoji: "🥛" },
          { en: "Cats or dogs?", ko: "고양이 아니면 강아지?", emoji: "🐱" },
        ],
      },
      {
        emoji: "➡️",
        say: "<b>so</b>는 '그래서'(결과), <b>because</b>는 '왜냐하면'(이유)이에요. 순서가 반대예요!",
        pattern: "이유, so 결과 · 결과 because 이유",
        examples: [
          { en: "It was raining, so I stayed home.", ko: "비가 와서 집에 있었어요.", emoji: "🌧️" },
          { en: "I stayed home because it was raining.", ko: "비가 왔기 때문에 집에 있었어요.", emoji: "🏠" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 그리고 <b>and</b>, 하지만 <b>but</b>, 또는 <b>or</b>, 그래서 <b>so</b>, 왜냐하면 <b>because</b>!",
        pattern: "and · but · or · so · because",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have a cat ___ a dog.", ko: "나는 고양이와 강아지가 있어요.", choices: ["and", "but", "or"], answer: 0, hint: "'그리고, ~와'는 and예요." },
      { type: "choose", q: "The bag is old ___ nice.", ko: "그 가방은 낡았지만 멋져요.", choices: ["and", "but", "so"], answer: 1, hint: "'하지만'은 but이에요." },
      { type: "choose", q: "Do you want tea ___ coffee?", ko: "차 마실래, 커피 마실래?", choices: ["or", "so"], answer: 0, hint: "둘 중 하나를 고를 때는 or예요." },
      { type: "choose", q: "I was hungry, ___ I ate a sandwich.", ko: "배가 고파서 샌드위치를 먹었어요.", choices: ["so", "because"], answer: 0, hint: "이유 다음에 결과가 오면 so예요." },
      { type: "choose", q: "I'm happy ___ it's my birthday.", ko: "내 생일이라서 기뻐요.", choices: ["so", "because"], answer: 1, hint: "결과 다음에 이유가 오면 because예요." },
      { type: "order", words: ["I", "like", "apples", "and", "bananas."], ko: "나는 사과와 바나나를 좋아해요." },
    ],
  },
  {
    id: "when-if",
    emoji: "🌈",
    title: "when, if",
    subtitle: "'~할 때', '만약 ~하면'",
    grade: "초6",
    slides: [
      {
        emoji: "🕰️",
        say: "<b>when</b>은 질문할 때 '언제'였지만, 문장 중간에서는 <b>'~할 때'</b>라는 뜻이에요.",
        pattern: "When I ___, I ___. · I ___ when I ___.",
        examples: [
          { en: "When I was young, I lived in Busan.", ko: "어렸을 때 나는 부산에 살았어요.", emoji: "👶" },
          { en: "I feel happy when I sing.", ko: "나는 노래할 때 행복해요.", emoji: "🎤" },
        ],
      },
      {
        emoji: "🌈",
        say: "<b>if</b>는 '만약 ~하면'이에요. 조건을 말할 때 써요.",
        pattern: "If ___, ___.",
        examples: [
          { en: "If it rains, we will stay home.", ko: "비가 오면 우리는 집에 있을 거예요.", emoji: "🌧️" },
          { en: "If you are tired, take a rest.", ko: "피곤하면 쉬어.", emoji: "😴" },
        ],
      },
      {
        emoji: "⚠️",
        say: "조심! when이나 if 뒤에서는 미래 일이라도 <b>will을 쓰지 않아요</b>. If it rains(○), If it will rain(✗)!",
        pattern: "If it rains, ... (will ✗)",
        examples: [
          { en: "If it is sunny tomorrow, I will go hiking.", ko: "내일 맑으면 등산 갈 거예요.", emoji: "⛰️" },
          { en: "Call me when you get home.", ko: "집에 도착하면 전화해.", emoji: "📞" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! '~할 때'는 <b>when</b>, '만약 ~하면'은 <b>if</b>. 쉼표(,)는 when·if가 앞에 올 때 붙여요.",
        pattern: "When ___, ___ · If ___, ___",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ I was five, I lived in Seoul.", ko: "다섯 살 때 나는 서울에 살았어요.", choices: ["When", "If"], answer: 0, hint: "'~할 때'는 when이에요." },
      { type: "choose", q: "___ you are hungry, eat this.", ko: "배고프면 이거 먹어.", choices: ["When", "If"], answer: 1, hint: "'만약 ~하면'은 if예요." },
      { type: "choose", q: "If it ___ tomorrow, I will stay home.", ko: "내일 비가 오면 집에 있을 거예요.", choices: ["rains", "will rain"], answer: 0, hint: "if 뒤에서는 will을 쓰지 않아요." },
      { type: "choose", q: "I feel happy ___ I play with my dog.", ko: "강아지와 놀 때 나는 행복해요.", choices: ["when", "but"], answer: 0, hint: "'~할 때'는 when이에요." },
      { type: "order", words: ["If", "it", "rains,", "we", "will", "stay", "home."], ko: "비가 오면 우리는 집에 있을 거예요." },
      { type: "order", words: ["Call", "me", "when", "you", "get", "home."], ko: "집에 도착하면 전화해." },
    ],
  },
  {
    id: "adverb",
    emoji: "🐢",
    title: "slow → slowly",
    subtitle: "어떻게 하는지 꾸며 주기",
    grade: "초6",
    slides: [
      {
        emoji: "🐢",
        say: "<b>slow</b>(느린)는 사람이나 물건을 꾸며요. 동작을 '어떻게' 하는지 꾸밀 때는 끝에 <b>-ly</b>를 붙여요.",
        pattern: "slow → slowly · quick → quickly",
        examples: [
          { en: "A turtle is slow.", ko: "거북이는 느려요.", emoji: "🐢" },
          { en: "A turtle walks slowly.", ko: "거북이는 느리게 걸어요.", emoji: "🐾" },
          { en: "Please speak quietly.", ko: "조용히 말해 주세요.", emoji: "🤫" },
        ],
      },
      {
        emoji: "✏️",
        say: "y로 끝나면 i로 바꾸고 -ly를 붙여요. happy → <b>happily</b>, easy → <b>easily</b>.",
        pattern: "happy → happily · easy → easily",
        examples: [
          { en: "The kids played happily.", ko: "아이들은 즐겁게 놀았어요.", emoji: "🧒" },
          { en: "She solved it easily.", ko: "그녀는 그걸 쉽게 풀었어요.", emoji: "🧩" },
        ],
      },
      {
        emoji: "⭐",
        say: "특별한 단어도 있어요! good(좋은)은 <b>well</b>(잘)로 바뀌고, fast·hard는 모양이 그대로예요.",
        pattern: "good → well · fast → fast · hard → hard",
        examples: [
          { en: "She is a good singer. She sings well.", ko: "그녀는 노래를 잘하는 사람이에요. 노래를 잘 불러요.", emoji: "🎤" },
          { en: "He runs fast.", ko: "그는 빨리 달려요.", emoji: "🏃" },
          { en: "I study hard.", ko: "나는 열심히 공부해요.", emoji: "📚" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 누가 어떤지는 <b>slow</b>, 어떻게 하는지는 <b>slowly</b>. good은 <b>well</b>!",
        pattern: "형용사 + ly = 어떻게",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The turtle walks ___.", ko: "거북이는 느리게 걸어요.", choices: ["slow", "slowly"], answer: 1, hint: "걷는 동작을 꾸미니까 slowly예요." },
      { type: "choose", q: "She sings very ___.", ko: "그녀는 노래를 아주 잘 불러요.", choices: ["good", "well"], answer: 1, hint: "동작을 '잘'은 well이에요." },
      { type: "choose", q: "The kids played ___.", ko: "아이들은 즐겁게 놀았어요.", choices: ["happyly", "happily"], answer: 1, hint: "y는 i로 바꾸고 -ly예요." },
      { type: "choose", q: "He runs ___.", ko: "그는 빨리 달려요.", choices: ["fast", "fastly"], answer: 0, hint: "fast는 모양이 그대로예요." },
      { type: "choose", q: "This is an ___ question.", ko: "이건 쉬운 문제예요.", choices: ["easy", "easily"], answer: 0, hint: "문제(물건)를 꾸미니까 easy예요." },
      { type: "order", words: ["Please", "speak", "quietly."], ko: "조용히 말해 주세요." },
    ],
  },
  {
    id: "quantity",
    emoji: "🍪",
    title: "some, any, many, much",
    subtitle: "양과 개수 말하기",
    grade: "초6",
    slides: [
      {
        emoji: "🍪",
        say: "<b>some</b>은 '조금, 몇몇'이에요. 보통 '있어요'라고 말하는 문장에 써요.",
        pattern: "I have some ___.",
        examples: [
          { en: "I have some cookies.", ko: "나는 쿠키가 몇 개 있어요.", emoji: "🍪" },
          { en: "I want some water.", ko: "물을 좀 마시고 싶어요.", emoji: "💧" },
        ],
      },
      {
        emoji: "❓",
        say: "<b>any</b>는 질문이나 '없어요'라고 말하는 문장에 써요. not ~ any는 '하나도 없어요'예요.",
        pattern: "Do you have any ___? · I don't have any ___.",
        examples: [
          { en: "Do you have any pets?", ko: "애완동물 있어?", emoji: "🐹" },
          { en: "I don't have any money.", ko: "나는 돈이 하나도 없어요.", emoji: "👛" },
        ],
      },
      {
        emoji: "🧮",
        say: "셀 수 있는 것(사과, 책)이 많으면 <b>many</b>, 셀 수 없는 것(물, 시간, 돈)이 많으면 <b>much</b>를 써요. <b>a lot of</b>는 둘 다 돼요.",
        pattern: "many books · much water · a lot of ___",
        examples: [
          { en: "There are many books.", ko: "책이 많이 있어요.", emoji: "📚" },
          { en: "I don't have much time.", ko: "나는 시간이 별로 없어요.", emoji: "⏳" },
          { en: "She has a lot of friends.", ko: "그녀는 친구가 많아요.", emoji: "👭" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 있을 땐 <b>some</b>, 질문·없을 땐 <b>any</b>. 셀 수 있으면 <b>many</b>, 셀 수 없으면 <b>much</b>!",
        pattern: "some / any · many / much",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I have ___ candies.", ko: "나는 사탕이 몇 개 있어요.", choices: ["some", "any"], answer: 0, hint: "'있어요' 문장에는 some이에요." },
      { type: "choose", q: "Do you have ___ brothers?", ko: "남자 형제 있어?", choices: ["some", "any"], answer: 1, hint: "질문에는 any예요." },
      { type: "choose", q: "There are ___ people in the park.", ko: "공원에 사람이 많아요.", choices: ["many", "much"], answer: 0, hint: "사람은 셀 수 있으니까 many예요." },
      { type: "choose", q: "Don't drink too ___ soda.", ko: "탄산음료를 너무 많이 마시지 마.", choices: ["many", "much"], answer: 1, hint: "음료는 셀 수 없으니까 much예요." },
      { type: "choose", q: "I don't have ___ money.", ko: "나는 돈이 하나도 없어요.", choices: ["some", "any"], answer: 1, hint: "'없어요' 문장에는 any예요." },
      { type: "order", words: ["She", "has", "a", "lot", "of", "friends."], ko: "그녀는 친구가 많아요." },
    ],
  },
  {
    id: "request",
    emoji: "🙏",
    title: "Can I ~? Could you ~?",
    subtitle: "허락 구하기, 부탁하기",
    grade: "초6",
    slides: [
      {
        emoji: "🙋",
        say: "'~해도 돼요?'라고 허락을 구할 때는 <b>Can I ~?</b>나 더 공손한 <b>May I ~?</b>를 써요.",
        pattern: "Can I ___? · May I ___?",
        examples: [
          { en: "Can I go to the bathroom?", ko: "화장실 가도 돼요?", emoji: "🚻" },
          { en: "May I come in?", ko: "들어가도 될까요?", emoji: "🚪" },
          { en: "Can I use your pen?", ko: "펜 좀 써도 돼?", emoji: "🖊️" },
        ],
      },
      {
        emoji: "🙏",
        say: "'~해 줄래요?'라고 부탁할 때는 <b>Can you ~?</b>, 더 공손하게는 <b>Could you ~?</b>를 써요.",
        pattern: "Can you ___? · Could you ___?",
        examples: [
          { en: "Can you help me?", ko: "나 좀 도와줄래?", emoji: "🤝" },
          { en: "Could you open the window, please?", ko: "창문 좀 열어 주시겠어요?", emoji: "🪟" },
        ],
      },
      {
        emoji: "👍",
        say: "좋다고 할 때는 <b>Sure.</b>, <b>Of course.</b>, <b>No problem.</b>, 거절할 때는 <b>Sorry, you can't.</b>나 <b>I'm sorry, I can't.</b>라고 해요.",
        pattern: "Sure! · Sorry, ...",
        examples: [
          { en: "Sure. Here you are.", ko: "물론이지. 여기 있어.", emoji: "🎁" },
          { en: "Sorry, you can't.", ko: "미안하지만 안 돼.", emoji: "🙅" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 내가 해도 되는지는 <b>Can I / May I</b>, 상대에게 부탁은 <b>Can you / Could you</b>. 끝에 <b>please</b>를 붙이면 더 공손해요.",
        pattern: "Can I ~? (허락) · Could you ~? (부탁)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ I use your eraser?", ko: "지우개 써도 돼?", choices: ["Can", "Do"], answer: 0, hint: "허락을 구할 때는 Can I ~?예요." },
      { type: "choose", q: "___ you help me, please?", ko: "저 좀 도와주시겠어요?", choices: ["Could", "May"], answer: 0, hint: "상대에게 공손하게 부탁할 때는 Could you ~?예요." },
      { type: "choose", q: "May I come in? — ___", ko: "들어가도 될까요? 물론이죠.", choices: ["Sure.", "No, I'm not."], answer: 0, hint: "좋다고 할 때는 Sure.예요." },
      { type: "choose", q: "Can ___ go to the bathroom?", ko: "(제가) 화장실 가도 돼요?", choices: ["I", "you"], answer: 0, hint: "내가 해도 되는지 물을 때는 Can I예요." },
      { type: "order", words: ["Can", "you", "help", "me?"], ko: "나 좀 도와줄래?" },
      { type: "order", words: ["May", "I", "come", "in?"], ko: "들어가도 될까요?" },
    ],
  },
];
