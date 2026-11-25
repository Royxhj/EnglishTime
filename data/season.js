// 🎄 크리스마스 이벤트: 어드벤트 달력(12월 1~25일)에 쓰는 크리스마스 단어와 이야기
const XMAS_WORDS = [
  { word: "Christmas", meaningKo: "크리스마스", emoji: "🎄", ex: { en: "Merry Christmas, everyone!", ko: "모두 메리 크리스마스!" } },
  { word: "Santa", meaningKo: "산타", emoji: "🎅", ex: { en: "Santa comes on Christmas Eve.", ko: "산타는 크리스마스이브에 와요." } },
  { word: "gift", meaningKo: "선물", emoji: "🎁", ex: { en: "I wrapped a gift for my sister.", ko: "동생에게 줄 선물을 포장했어요." } },
  { word: "snowman", meaningKo: "눈사람", emoji: "⛄", ex: { en: "We built a big snowman.", ko: "우리는 큰 눈사람을 만들었어요." } },
  { word: "reindeer", meaningKo: "순록", emoji: "🦌", ex: { en: "The reindeer pull Santa's sleigh.", ko: "순록들이 산타의 썰매를 끌어요." } },
  { word: "sleigh", meaningKo: "썰매", emoji: "🛷", ex: { en: "The sleigh flies across the sky.", ko: "썰매가 하늘을 가로질러 날아요." } },
  { word: "stocking", meaningKo: "(선물) 양말", emoji: "🧦", ex: { en: "I hung my stocking by the window.", ko: "창가에 양말을 걸었어요." } },
  { word: "bell", meaningKo: "종", emoji: "🔔", ex: { en: "Can you hear the bells ringing?", ko: "종소리가 들리니?" } },
  { word: "candle", meaningKo: "양초", emoji: "🕯️", ex: { en: "Mom lit a red candle.", ko: "엄마가 빨간 양초에 불을 붙였어요." } },
  { word: "star", meaningKo: "별", emoji: "⭐", ex: { en: "Put the star on top of the tree.", ko: "트리 꼭대기에 별을 달아요." } },
  { word: "snowflake", meaningKo: "눈송이", emoji: "❄️", ex: { en: "No two snowflakes are the same.", ko: "똑같은 눈송이는 하나도 없어요." } },
  { word: "cookie", meaningKo: "쿠키", emoji: "🍪", ex: { en: "We left cookies for Santa.", ko: "산타를 위해 쿠키를 남겨 두었어요." } },
  { word: "candy cane", meaningKo: "지팡이 사탕", emoji: "🍬", ex: { en: "The candy cane is red and white.", ko: "지팡이 사탕은 빨간색과 흰색이에요." } },
  { word: "chimney", meaningKo: "굴뚝", emoji: "🏠", ex: { en: "Santa comes down the chimney.", ko: "산타는 굴뚝으로 내려와요." } },
  { word: "wrap", meaningKo: "포장하다", emoji: "🎀", ex: { en: "Let's wrap the presents together.", ko: "같이 선물을 포장하자." } },
  { word: "decorate", meaningKo: "장식하다", emoji: "✨", ex: { en: "We decorate the tree every year.", ko: "우리는 해마다 트리를 장식해요." } },
  { word: "carol", meaningKo: "캐럴", emoji: "🎶", ex: { en: "The children sang a Christmas carol.", ko: "아이들이 크리스마스 캐럴을 불렀어요." } },
  { word: "mitten", meaningKo: "벙어리장갑", emoji: "🧤", ex: { en: "My mittens keep my hands warm.", ko: "벙어리장갑이 손을 따뜻하게 해 줘요." } },
  { word: "elf", meaningKo: "요정", emoji: "🧝", ex: { en: "The elves make toys all year.", ko: "요정들은 일 년 내내 장난감을 만들어요." } },
  { word: "wish", meaningKo: "소원", emoji: "🌠", ex: { en: "Make a wish under the tree.", ko: "트리 아래에서 소원을 빌어요." } },
];

// 어드벤트 달력 선물: 도장을 n개 모으면 별 상점에서 공짜로 받는 물건
const ADVENT_STARS = 2; // 도장 하나마다 보너스 별

STORY_SERIES.push({
  id: "xmas",
  levelId: "elementary-mid",
  emoji: "🎄",
  title: "산타의 잃어버린 썰매 종",
  summary: "크리스마스이브, 지아와 민준이 산타를 돕는 이야기",
  chapters: [
    {
      emoji: "🔔",
      title: "눈 위의 종",
      sentences: [
        { en: "It was the day before Christmas.", ko: "크리스마스 전날이었어요." },
        { en: "Jia and Minjun were playing in the snow.", ko: "지아와 민준이는 눈 속에서 놀고 있었어요." },
        { en: "Suddenly, Minjun found a small golden bell.", ko: "갑자기 민준이가 작은 황금 종을 찾았어요." },
        { en: "When he shook it, the bell made a magical sound.", ko: "흔들자 종에서 신비한 소리가 났어요." },
        { en: "A tag on the bell said, \"Property of Santa's Sleigh.\"", ko: "종에 달린 꼬리표에는 \"산타 썰매 물건\"이라고 쓰여 있었어요." },
      ],
      glossary: [
        { w: "golden", ko: "황금빛의" },
        { w: "shook", ko: "흔들었다" },
        { w: "magical", ko: "마법 같은" },
        { w: "tag", ko: "꼬리표" },
      ],
      questions: [
        { q: "민준이가 찾은 것은?", choices: ["황금 종", "산타 모자", "선물 상자", "썰매"], answer: 0, explain: "Minjun found a small golden bell. → 황금 종이에요." },
        { q: "꼬리표에 쓰인 내용은?", choices: ["산타 썰매 물건", "민준이 것", "메리 크리스마스", "흔들지 마세요"], answer: 0, explain: "Property of Santa's Sleigh → 산타 썰매의 물건이에요." },
        { q: "이 이야기는 언제 일어났나요?", choices: ["크리스마스 전날", "새해 첫날", "여름 방학", "생일날"], answer: 0, explain: "It was the day before Christmas. → 크리스마스 전날이에요." },
      ],
    },
    {
      emoji: "🦌",
      title: "순록이 찾아왔어요",
      sentences: [
        { en: "That night, they heard a soft knock on the window.", ko: "그날 밤, 창문을 똑똑 두드리는 소리가 들렸어요." },
        { en: "A young reindeer with a red scarf was outside.", ko: "빨간 목도리를 한 어린 순록이 밖에 있었어요." },
        { en: "\"I'm Comet,\" he said. \"Santa lost a bell from his sleigh.\"", ko: "\"나는 코멧이야. 산타 할아버지가 썰매 종을 잃어버리셨어.\"" },
        { en: "\"Without it, the sleigh can't fly!\"", ko: "\"그게 없으면 썰매가 날 수 없어!\"" },
        { en: "Jia held up the golden bell and smiled.", ko: "지아는 황금 종을 들어 보이며 웃었어요." },
      ],
      glossary: [
        { w: "knock", ko: "두드리는 소리" },
        { w: "scarf", ko: "목도리" },
        { w: "Without", ko: "~ 없이" },
        { w: "held up", ko: "들어 올렸다" },
      ],
      questions: [
        { q: "창문 밖에 있던 것은?", choices: ["어린 순록", "산타", "눈사람", "요정"], answer: 0, explain: "A young reindeer with a red scarf was outside. → 어린 순록이에요." },
        { q: "순록의 이름은?", choices: ["코멧", "루돌프", "블리츠", "스노우"], answer: 0, explain: "I'm Comet. → 코멧이에요." },
        { q: "종이 없으면 어떻게 되나요?", choices: ["썰매가 날 수 없다", "선물이 사라진다", "눈이 그친다", "산타가 잠든다"], answer: 0, explain: "Without it, the sleigh can't fly! → 썰매가 못 날아요." },
      ],
    },
    {
      emoji: "🛷",
      title: "하늘을 나는 썰매",
      sentences: [
        { en: "Comet took the children to Santa's sleigh on the hill.", ko: "코멧은 아이들을 언덕 위 산타의 썰매로 데려갔어요." },
        { en: "Santa looked worried, but his face lit up when he saw the bell.", ko: "산타는 걱정스러워 보였지만, 종을 보자 얼굴이 환해졌어요." },
        { en: "Minjun tied the bell back onto the sleigh.", ko: "민준이가 종을 썰매에 다시 묶었어요." },
        { en: "Jingle, jingle! The sleigh rose into the starry sky.", ko: "딸랑딸랑! 썰매가 별이 빛나는 하늘로 떠올랐어요." },
        { en: "\"Ho, ho, ho! Thank you, my brave helpers!\" Santa shouted.", ko: "\"호, 호, 호! 고맙다, 용감한 꼬마 도우미들아!\" 산타가 외쳤어요." },
      ],
      glossary: [
        { w: "worried", ko: "걱정하는" },
        { w: "lit up", ko: "환해졌다" },
        { w: "tied", ko: "묶었다" },
        { w: "starry", ko: "별이 빛나는" },
        { w: "brave", ko: "용감한" },
      ],
      questions: [
        { q: "썰매는 어디에 있었나요?", choices: ["언덕 위", "지붕 위", "숲속", "학교 운동장"], answer: 0, explain: "Santa's sleigh on the hill → 언덕 위예요." },
        { q: "종을 썰매에 다시 단 사람은?", choices: ["민준", "지아", "산타", "코멧"], answer: 0, explain: "Minjun tied the bell back onto the sleigh. → 민준이에요." },
        { q: "산타는 아이들을 뭐라고 불렀나요?", choices: ["용감한 도우미들", "착한 요정들", "작은 순록들", "눈사람 친구들"], answer: 0, explain: "my brave helpers → 용감한 도우미들이에요." },
      ],
    },
    {
      emoji: "🎁",
      title: "크리스마스 아침",
      sentences: [
        { en: "On Christmas morning, the children ran to the living room.", ko: "크리스마스 아침, 아이들은 거실로 달려갔어요." },
        { en: "Under the tree, there was a box with a golden ribbon.", ko: "트리 아래에 황금 리본이 달린 상자가 있었어요." },
        { en: "Inside, they found two tiny bells and a letter.", ko: "안에는 작은 종 두 개와 편지가 들어 있었어요." },
        { en: "The letter said, \"Ring these bells, and I will always hear you. Love, Santa.\"", ko: "편지에는 \"이 종을 울리면 언제나 들을게. 사랑을 담아, 산타가.\"라고 쓰여 있었어요." },
        { en: "Jia and Minjun rang the bells and laughed together.", ko: "지아와 민준이는 종을 울리며 함께 웃었어요." },
      ],
      glossary: [
        { w: "living room", ko: "거실" },
        { w: "ribbon", ko: "리본" },
        { w: "tiny", ko: "아주 작은" },
        { w: "letter", ko: "편지" },
      ],
      questions: [
        { q: "상자에 들어 있던 것은?", choices: ["작은 종 두 개와 편지", "썰매 장난감", "쿠키", "순록 인형"], answer: 0, explain: "two tiny bells and a letter → 종 두 개와 편지예요." },
        { q: "편지에 따르면 종을 울리면?", choices: ["산타가 언제나 들어 준다", "눈이 온다", "선물이 생긴다", "코멧이 온다"], answer: 0, explain: "Ring these bells, and I will always hear you. → 산타가 들어 줘요." },
        { q: "상자는 어디에 있었나요?", choices: ["트리 아래", "굴뚝 안", "침대 위", "현관 앞"], answer: 0, explain: "Under the tree → 트리 아래예요." },
      ],
    },
  ],
});
STORY_SERIES.sort((a, b) => LEVELS.findIndex((lv) => lv.id === a.levelId) - LEVELS.findIndex((lv) => lv.id === b.levelId));
for (const s of STORY_SERIES) s.chapters.forEach((c, i) => Object.assign(c, { id: `story-${s.id}-${i + 1}`, levelId: s.levelId, seriesId: s.id, no: i + 1 }));
