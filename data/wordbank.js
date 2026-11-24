// 레벨(단계) 메타데이터. color/colorDark는 단계별 테마 색상(카드 포인트, 퀴즈 화면 강조색)에 쓰임.
const LEVELS = [
  { id: "elementary-low", label: "초등 저학년 (1~2학년)", emoji: "🐣", color: "#ffb020", colorDark: "#e8960a" },
  { id: "elementary-mid", label: "초등 중학년 (3~4학년)", emoji: "🌼", color: "#6fb92c", colorDark: "#559322" },
  { id: "elementary-high", label: "초등 고학년 (5~6학년)", emoji: "🚀", color: "#16a3a3", colorDark: "#0f8484" },
  { id: "middle", label: "중학교", emoji: "📘", color: "#4361ee", colorDark: "#2f46c2" },
  { id: "high", label: "고등학교", emoji: "🎓", color: "#8338ec", colorDark: "#6423bd" },
  { id: "adult", label: "성인", emoji: "💼", color: "#3a5a78", colorDark: "#2b435c" },
];

// 레벨별 단어 데이터: word, ipa(발음기호), meaningKo(뜻), emoji(그림힌트), desc(설명힌트), examples(예문 3개)
const WORD_BANK = {
  "elementary-low": [
    { id: "el-low-01", word: "cat", ipa: "/kæt/", meaningKo: "고양이", emoji: "🐱", desc: "털이 있고 '야옹' 하고 우는 작은 동물이에요.", examples: [
      { en: "I have a cat.", ko: "나는 고양이가 있어요." },
      { en: "The cat is sleeping.", ko: "고양이가 자고 있어요." },
      { en: "My cat likes milk.", ko: "내 고양이는 우유를 좋아해요." },
    ]},
    { id: "el-low-02", word: "dog", ipa: "/dɒg/", meaningKo: "개", emoji: "🐶", desc: "멍멍 짖고 꼬리를 흔드는 동물이에요.", examples: [
      { en: "I have a dog.", ko: "나는 개가 있어요." },
      { en: "The dog runs fast.", ko: "그 개는 빨리 달려요." },
      { en: "My dog is very friendly.", ko: "내 개는 아주 다정해요." },
    ]},
    { id: "el-low-03", word: "apple", ipa: "/ˈæp.əl/", meaningKo: "사과", emoji: "🍎", desc: "빨갛거나 초록색인, 동그랗고 달콤한 과일이에요.", examples: [
      { en: "I eat an apple every day.", ko: "나는 매일 사과를 먹어요." },
      { en: "The apple is red.", ko: "그 사과는 빨간색이에요." },
      { en: "She picked an apple from the tree.", ko: "그녀는 나무에서 사과를 땄어요." },
    ]},
    { id: "el-low-04", word: "banana", ipa: "/bəˈnɑː.nə/", meaningKo: "바나나", emoji: "🍌", desc: "길고 노란색인, 원숭이가 좋아하는 과일이에요.", examples: [
      { en: "I like bananas.", ko: "나는 바나나를 좋아해요." },
      { en: "The banana is yellow.", ko: "그 바나나는 노란색이에요." },
      { en: "He ate a banana for breakfast.", ko: "그는 아침으로 바나나를 먹었어요." },
    ]},
    { id: "el-low-05", word: "red", ipa: "/red/", meaningKo: "빨간색", emoji: "🔴", desc: "사과나 딸기 같은 색이에요.", examples: [
      { en: "I have a red car.", ko: "나는 빨간 차가 있어요." },
      { en: "Her dress is red.", ko: "그녀의 드레스는 빨간색이에요." },
      { en: "The apple is red.", ko: "그 사과는 빨간색이에요." },
    ]},
    { id: "el-low-06", word: "blue", ipa: "/bluː/", meaningKo: "파란색", emoji: "🔵", desc: "하늘이나 바다 같은 색이에요.", examples: [
      { en: "The sky is blue.", ko: "하늘은 파란색이에요." },
      { en: "I like blue shirts.", ko: "나는 파란 셔츠를 좋아해요." },
      { en: "The ocean is blue.", ko: "바다는 파란색이에요." },
    ]},
    { id: "el-low-07", word: "book", ipa: "/bʊk/", meaningKo: "책", emoji: "📖", desc: "글과 그림이 있어서 읽는 물건이에요.", examples: [
      { en: "I read a book.", ko: "나는 책을 읽어요." },
      { en: "This book is fun.", ko: "이 책은 재미있어요." },
      { en: "She has many books.", ko: "그녀는 책이 많아요." },
    ]},
    { id: "el-low-08", word: "pen", ipa: "/pen/", meaningKo: "펜", emoji: "🖊", desc: "글씨를 쓸 때 쓰는 물건이에요.", examples: [
      { en: "I write with a pen.", ko: "나는 펜으로 글씨를 써요." },
      { en: "This is my pen.", ko: "이것은 내 펜이에요." },
      { en: "Can I borrow your pen?", ko: "네 펜을 빌릴 수 있을까?" },
    ]},
    { id: "el-low-09", word: "school", ipa: "/skuːl/", meaningKo: "학교", emoji: "🏫", desc: "공부하러 가는 곳이에요.", examples: [
      { en: "I go to school.", ko: "나는 학교에 가요." },
      { en: "School starts at nine.", ko: "학교는 9시에 시작해요." },
      { en: "I like my school.", ko: "나는 우리 학교가 좋아요." },
    ]},
    { id: "el-low-10", word: "mom", ipa: "/mɒm/", meaningKo: "엄마", emoji: "👩", desc: "나를 낳아주고 돌봐주는 여자 어른이에요.", examples: [
      { en: "I love my mom.", ko: "나는 엄마를 사랑해요." },
      { en: "My mom is kind.", ko: "우리 엄마는 친절해요." },
      { en: "Mom cooks dinner.", ko: "엄마가 저녁을 요리해요." },
    ]},
    { id: "el-low-11", word: "dad", ipa: "/dæd/", meaningKo: "아빠", emoji: "👨", desc: "나를 돌봐주는 남자 어른이에요.", examples: [
      { en: "My dad is tall.", ko: "우리 아빠는 키가 커요." },
      { en: "I love my dad.", ko: "나는 아빠를 사랑해요." },
      { en: "Dad plays with me.", ko: "아빠는 나와 놀아줘요." },
    ]},
    { id: "el-low-12", word: "big", ipa: "/bɪg/", meaningKo: "큰", emoji: "🐘", desc: "크기가 아주 크다는 뜻이에요.", examples: [
      { en: "The elephant is big.", ko: "코끼리는 커요." },
      { en: "I live in a big house.", ko: "나는 큰 집에 살아요." },
      { en: "That is a big dog.", ko: "저건 큰 개예요." },
    ]},
    { id: "el-low-13", word: "small", ipa: "/smɔːl/", meaningKo: "작은", emoji: "🐭", desc: "크기가 아주 작다는 뜻이에요.", examples: [
      { en: "The mouse is small.", ko: "그 쥐는 작아요." },
      { en: "I have a small bag.", ko: "나는 작은 가방이 있어요." },
      { en: "This is a small room.", ko: "이것은 작은 방이에요." },
    ]},
    { id: "el-low-14", word: "happy", ipa: "/ˈhæp.i/", meaningKo: "행복한", emoji: "😊", desc: "기분이 좋을 때 쓰는 말이에요.", examples: [
      { en: "I am happy today.", ko: "나는 오늘 행복해요." },
      { en: "She looks happy.", ko: "그녀는 행복해 보여요." },
      { en: "We are happy to see you.", ko: "너를 봐서 기뻐." },
    ]},
    { id: "el-low-15", word: "sad", ipa: "/sæd/", meaningKo: "슬픈", emoji: "😢", desc: "기분이 안 좋을 때 쓰는 말이에요.", examples: [
      { en: "I feel sad.", ko: "나는 슬퍼요." },
      { en: "He looks sad.", ko: "그는 슬퍼 보여요." },
      { en: "Don't be sad.", ko: "슬퍼하지 마." },
    ]},
    { id: "el-low-16", word: "sun", ipa: "/sʌn/", meaningKo: "해", emoji: "☀️", desc: "낮에 하늘에서 밝게 빛나요.", examples: [
      { en: "The sun is bright.", ko: "해가 밝아요." },
      { en: "I love sunny days.", ko: "나는 화창한 날이 좋아요." },
      { en: "The sun rises in the morning.", ko: "해는 아침에 떠올라요." },
    ]},
    { id: "el-low-17", word: "water", ipa: "/ˈwɔː.tər/", meaningKo: "물", emoji: "💧", desc: "마시고 씻을 때 쓰는 투명한 액체예요.", examples: [
      { en: "I drink water.", ko: "나는 물을 마셔요." },
      { en: "Water is important.", ko: "물은 중요해요." },
      { en: "The water is cold.", ko: "물이 차가워요." },
    ]},
    { id: "el-low-18", word: "milk", ipa: "/mɪlk/", meaningKo: "우유", emoji: "🥛", desc: "하얀색이고 소에서 나오는 음료예요.", examples: [
      { en: "I drink milk.", ko: "나는 우유를 마셔요." },
      { en: "Milk is good for you.", ko: "우유는 몸에 좋아요." },
      { en: "The cat likes milk.", ko: "고양이는 우유를 좋아해요." },
    ]},
    { id: "el-low-19", word: "cup", ipa: "/kʌp/", meaningKo: "컵", emoji: "🥤", desc: "물이나 음료를 담는 그릇이에요.", examples: [
      { en: "I have a cup.", ko: "나는 컵이 있어요." },
      { en: "This cup is blue.", ko: "이 컵은 파란색이에요." },
      { en: "Fill the cup with water.", ko: "컵에 물을 채워." },
    ]},
    { id: "el-low-20", word: "hat", ipa: "/hæt/", meaningKo: "모자", emoji: "🎩", desc: "머리에 쓰는 물건이에요.", examples: [
      { en: "I wear a hat.", ko: "나는 모자를 써요." },
      { en: "Her hat is pink.", ko: "그녀의 모자는 분홍색이에요." },
      { en: "He has a new hat.", ko: "그는 새 모자가 있어요." },
    ]},
    { id: "el-low-21", word: "bird", ipa: "/bɜːrd/", meaningKo: "새", emoji: "🐦", desc: "하늘을 날 수 있는 동물이에요.", examples: [
      { en: "I see a bird.", ko: "나는 새를 봐요." },
      { en: "The bird can fly.", ko: "새는 날 수 있어요." },
      { en: "The bird is singing.", ko: "새가 노래하고 있어요." },
    ]},
    { id: "el-low-22", word: "fish", ipa: "/fɪʃ/", meaningKo: "물고기", emoji: "🐟", desc: "물속에서 헤엄치는 동물이에요.", examples: [
      { en: "I have a fish.", ko: "나는 물고기가 있어요." },
      { en: "The fish can swim.", ko: "물고기는 헤엄칠 수 있어요." },
      { en: "I like fish.", ko: "나는 물고기를 좋아해요." },
    ]},
    { id: "el-low-23", word: "pig", ipa: "/pɪg/", meaningKo: "돼지", emoji: "🐷", desc: "꿀꿀 소리를 내는 분홍색 동물이에요.", examples: [
      { en: "The pig is pink.", ko: "돼지는 분홍색이에요." },
      { en: "I see a pig.", ko: "나는 돼지를 봐요." },
      { en: "The pig is big.", ko: "돼지는 커요." },
    ]},
    { id: "el-low-24", word: "cow", ipa: "/kaʊ/", meaningKo: "소", emoji: "🐮", desc: "우유를 주는 동물이에요.", examples: [
      { en: "The cow gives milk.", ko: "소는 우유를 줘요." },
      { en: "I see a cow.", ko: "나는 소를 봐요." },
      { en: "The cow is brown.", ko: "소는 갈색이에요." },
    ]},
    { id: "el-low-25", word: "duck", ipa: "/dʌk/", meaningKo: "오리", emoji: "🦆", desc: "꽥꽥 소리를 내는 동물이에요.", examples: [
      { en: "The duck can swim.", ko: "오리는 헤엄칠 수 있어요." },
      { en: "I see a duck.", ko: "나는 오리를 봐요." },
      { en: "The duck is yellow.", ko: "오리는 노란색이에요." },
    ]},
    { id: "el-low-26", word: "lion", ipa: "/ˈlaɪ.ən/", meaningKo: "사자", emoji: "🦁", desc: "동물의 왕이라고 불리는 동물이에요.", examples: [
      { en: "The lion is big.", ko: "사자는 커요." },
      { en: "I see a lion.", ko: "나는 사자를 봐요." },
      { en: "The lion is strong.", ko: "사자는 힘이 세요." },
    ]},
    { id: "el-low-27", word: "tiger", ipa: "/ˈtaɪ.gər/", meaningKo: "호랑이", emoji: "🐯", desc: "줄무늬가 있는 크고 힘센 동물이에요.", examples: [
      { en: "The tiger is big.", ko: "호랑이는 커요." },
      { en: "I see a tiger.", ko: "나는 호랑이를 봐요." },
      { en: "The tiger runs fast.", ko: "호랑이는 빨리 달려요." },
    ]},
    { id: "el-low-28", word: "bear", ipa: "/ber/", meaningKo: "곰", emoji: "🐻", desc: "숲에 사는 크고 털이 많은 동물이에요.", examples: [
      { en: "I see a bear.", ko: "나는 곰을 봐요." },
      { en: "The bear is big.", ko: "곰은 커요." },
      { en: "The bear likes honey.", ko: "곰은 꿀을 좋아해요." },
    ]},
    { id: "el-low-29", word: "rabbit", ipa: "/ˈræb.ɪt/", meaningKo: "토끼", emoji: "🐰", desc: "귀가 길고 깡충깡충 뛰는 동물이에요.", examples: [
      { en: "The rabbit is small.", ko: "토끼는 작아요." },
      { en: "I see a rabbit.", ko: "나는 토끼를 봐요." },
      { en: "The rabbit can jump.", ko: "토끼는 뛸 수 있어요." },
    ]},
    { id: "el-low-30", word: "horse", ipa: "/hɔːrs/", meaningKo: "말", emoji: "🐴", desc: "사람을 태우고 달릴 수 있는 동물이에요.", examples: [
      { en: "I see a horse.", ko: "나는 말을 봐요." },
      { en: "The horse runs fast.", ko: "말은 빨리 달려요." },
      { en: "I like horses.", ko: "나는 말을 좋아해요." },
    ]},
    { id: "el-low-31", word: "monkey", ipa: "/ˈmʌŋ.ki/", meaningKo: "원숭이", emoji: "🐵", desc: "나무를 잘 타고 바나나를 좋아하는 동물이에요.", examples: [
      { en: "The monkey is funny.", ko: "원숭이는 재미있어요." },
      { en: "I see a monkey.", ko: "나는 원숭이를 봐요." },
      { en: "The monkey likes bananas.", ko: "원숭이는 바나나를 좋아해요." },
    ]},
    { id: "el-low-32", word: "elephant", ipa: "/ˈel.ɪ.fənt/", meaningKo: "코끼리", emoji: "🐘", desc: "코가 길고 몸이 아주 큰 동물이에요.", examples: [
      { en: "The elephant is big.", ko: "코끼리는 커요." },
      { en: "I see an elephant.", ko: "나는 코끼리를 봐요." },
      { en: "The elephant has a long nose.", ko: "코끼리는 코가 길어요." },
    ]},
    { id: "el-low-33", word: "frog", ipa: "/frɒg/", meaningKo: "개구리", emoji: "🐸", desc: "폴짝폴짝 뛰고 개굴개굴 우는 동물이에요.", examples: [
      { en: "The frog can jump.", ko: "개구리는 뛸 수 있어요." },
      { en: "I see a frog.", ko: "나는 개구리를 봐요." },
      { en: "The frog is green.", ko: "개구리는 초록색이에요." },
    ]},
    { id: "el-low-34", word: "sheep", ipa: "/ʃiːp/", meaningKo: "양", emoji: "🐑", desc: "털이 복슬복슬한 동물이에요.", examples: [
      { en: "I see a sheep.", ko: "나는 양을 봐요." },
      { en: "The sheep is white.", ko: "양은 하얀색이에요." },
      { en: "The sheep says baa.", ko: "양은 매하고 울어요." },
    ]},
    { id: "el-low-35", word: "chicken", ipa: "/ˈtʃɪk.ɪn/", meaningKo: "닭", emoji: "🐔", desc: "꼬끼오 하고 우는 동물이에요.", examples: [
      { en: "I see a chicken.", ko: "나는 닭을 봐요." },
      { en: "The chicken is small.", ko: "닭은 작아요." },
      { en: "The chicken lays eggs.", ko: "닭은 알을 낳아요." },
    ]},
    { id: "el-low-36", word: "green", ipa: "/griːn/", meaningKo: "초록색", emoji: "🟢", desc: "나뭇잎 같은 색이에요.", examples: [
      { en: "The leaf is green.", ko: "나뭇잎은 초록색이에요." },
      { en: "I like green.", ko: "나는 초록색을 좋아해요." },
      { en: "My bag is green.", ko: "내 가방은 초록색이에요." },
    ]},
    { id: "el-low-37", word: "yellow", ipa: "/ˈjel.oʊ/", meaningKo: "노란색", emoji: "🟡", desc: "바나나 같은 색이에요.", examples: [
      { en: "The banana is yellow.", ko: "바나나는 노란색이에요." },
      { en: "I like yellow.", ko: "나는 노란색을 좋아해요." },
      { en: "The sun is yellow.", ko: "해는 노란색이에요." },
    ]},
    { id: "el-low-38", word: "black", ipa: "/blæk/", meaningKo: "검은색", emoji: "⚫", desc: "밤하늘 같은 어두운 색이에요.", examples: [
      { en: "My cat is black.", ko: "내 고양이는 검은색이에요." },
      { en: "I like black.", ko: "나는 검은색을 좋아해요." },
      { en: "The car is black.", ko: "그 차는 검은색이에요." },
    ]},
    { id: "el-low-39", word: "white", ipa: "/waɪt/", meaningKo: "하얀색", emoji: "⚪", desc: "눈 같은 색이에요.", examples: [
      { en: "The snow is white.", ko: "눈은 하얀색이에요." },
      { en: "I like white.", ko: "나는 하얀색을 좋아해요." },
      { en: "My shirt is white.", ko: "내 셔츠는 하얀색이에요." },
    ]},
    { id: "el-low-40", word: "pink", ipa: "/pɪŋk/", meaningKo: "분홍색", emoji: "🌸", desc: "연한 빨간색이에요.", examples: [
      { en: "Her hat is pink.", ko: "그녀의 모자는 분홍색이에요." },
      { en: "I like pink.", ko: "나는 분홍색을 좋아해요." },
      { en: "The flower is pink.", ko: "그 꽃은 분홍색이에요." },
    ]},
    { id: "el-low-41", word: "purple", ipa: "/ˈpɜːr.pəl/", meaningKo: "보라색", emoji: "🟣", desc: "포도 같은 색이에요.", examples: [
      { en: "The grape is purple.", ko: "포도는 보라색이에요." },
      { en: "I like purple.", ko: "나는 보라색을 좋아해요." },
      { en: "My shoes are purple.", ko: "내 신발은 보라색이에요." },
    ]},
    { id: "el-low-42", word: "brown", ipa: "/braʊn/", meaningKo: "갈색", emoji: "🟤", desc: "나무나 흙 같은 색이에요.", examples: [
      { en: "The dog is brown.", ko: "그 개는 갈색이에요." },
      { en: "I like brown.", ko: "나는 갈색을 좋아해요." },
      { en: "The desk is brown.", ko: "그 책상은 갈색이에요." },
    ]},
    { id: "el-low-43", word: "orange", ipa: "/ˈɒr.ɪndʒ/", meaningKo: "주황색", emoji: "🟠", desc: "오렌지 과일 같은 색이에요.", examples: [
      { en: "The orange is orange.", ko: "그 오렌지는 주황색이에요." },
      { en: "I like orange.", ko: "나는 주황색을 좋아해요." },
      { en: "The sky is orange at sunset.", ko: "노을 질 때 하늘은 주황색이에요." },
    ]},
    { id: "el-low-44", word: "one", ipa: "/wʌn/", meaningKo: "하나(1)", emoji: "1️⃣", desc: "숫자 1을 말해요.", examples: [
      { en: "I have one apple.", ko: "나는 사과가 하나 있어요." },
      { en: "One plus one is two.", ko: "1 더하기 1은 2예요." },
      { en: "I see one bird.", ko: "나는 새 한 마리를 봐요." },
    ]},
    { id: "el-low-45", word: "two", ipa: "/tuː/", meaningKo: "둘(2)", emoji: "2️⃣", desc: "숫자 2를 말해요.", examples: [
      { en: "I have two hands.", ko: "나는 손이 두 개 있어요." },
      { en: "I see two dogs.", ko: "나는 개 두 마리를 봐요." },
      { en: "Two plus two is four.", ko: "2 더하기 2는 4예요." },
    ]},
    { id: "el-low-46", word: "three", ipa: "/θriː/", meaningKo: "셋(3)", emoji: "3️⃣", desc: "숫자 3을 말해요.", examples: [
      { en: "I have three books.", ko: "나는 책이 세 권 있어요." },
      { en: "I see three cats.", ko: "나는 고양이 세 마리를 봐요." },
      { en: "Three is my favorite number.", ko: "3은 내가 가장 좋아하는 숫자예요." },
    ]},
    { id: "el-low-47", word: "four", ipa: "/fɔːr/", meaningKo: "넷(4)", emoji: "4️⃣", desc: "숫자 4를 말해요.", examples: [
      { en: "I have four pens.", ko: "나는 펜이 네 개 있어요." },
      { en: "A table has four legs.", ko: "탁자는 다리가 네 개예요." },
      { en: "I see four birds.", ko: "나는 새 네 마리를 봐요." },
    ]},
    { id: "el-low-48", word: "five", ipa: "/faɪv/", meaningKo: "다섯(5)", emoji: "5️⃣", desc: "숫자 5를 말해요.", examples: [
      { en: "I have five fingers.", ko: "나는 손가락이 다섯 개 있어요." },
      { en: "I see five apples.", ko: "나는 사과 다섯 개를 봐요." },
      { en: "Five plus five is ten.", ko: "5 더하기 5는 10이에요." },
    ]},
    { id: "el-low-49", word: "six", ipa: "/sɪks/", meaningKo: "여섯(6)", emoji: "6️⃣", desc: "숫자 6을 말해요.", examples: [
      { en: "I have six pencils.", ko: "나는 연필이 여섯 개 있어요." },
      { en: "I see six eggs.", ko: "나는 달걀 여섯 개를 봐요." },
      { en: "Six is more than five.", ko: "6은 5보다 커요." },
    ]},
    { id: "el-low-50", word: "seven", ipa: "/ˈsev.ən/", meaningKo: "일곱(7)", emoji: "7️⃣", desc: "숫자 7을 말해요.", examples: [
      { en: "There are seven days in a week.", ko: "일주일은 7일이에요." },
      { en: "I see seven stars.", ko: "나는 별 일곱 개를 봐요." },
      { en: "I have seven candies.", ko: "나는 사탕이 일곱 개 있어요." },
    ]},
    { id: "el-low-51", word: "eight", ipa: "/eɪt/", meaningKo: "여덟(8)", emoji: "8️⃣", desc: "숫자 8을 말해요.", examples: [
      { en: "I have eight crayons.", ko: "나는 크레용이 여덟 개 있어요." },
      { en: "A spider has eight legs.", ko: "거미는 다리가 여덟 개예요." },
      { en: "I see eight books.", ko: "나는 책 여덟 권을 봐요." },
    ]},
    { id: "el-low-52", word: "nine", ipa: "/naɪn/", meaningKo: "아홉(9)", emoji: "9️⃣", desc: "숫자 9를 말해요.", examples: [
      { en: "I have nine coins.", ko: "나는 동전이 아홉 개 있어요." },
      { en: "I see nine flowers.", ko: "나는 꽃 아홉 송이를 봐요." },
      { en: "Nine is next to ten.", ko: "9는 10 바로 앞 숫자예요." },
    ]},
    { id: "el-low-53", word: "ten", ipa: "/ten/", meaningKo: "열(10)", emoji: "🔟", desc: "숫자 10을 말해요.", examples: [
      { en: "I have ten fingers.", ko: "나는 손가락이 열 개 있어요." },
      { en: "I see ten balloons.", ko: "나는 풍선 열 개를 봐요." },
      { en: "Ten is a big number.", ko: "10은 큰 숫자예요." },
    ]},
    { id: "el-low-54", word: "sister", ipa: "/ˈsɪs.tər/", meaningKo: "언니/누나/여동생", emoji: "👧", desc: "나와 부모님이 같은 여자 형제예요.", examples: [
      { en: "I have a sister.", ko: "나는 여자 형제가 있어요." },
      { en: "My sister is kind.", ko: "내 여자 형제는 친절해요." },
      { en: "I play with my sister.", ko: "나는 여자 형제와 놀아요." },
    ]},
    { id: "el-low-55", word: "brother", ipa: "/ˈbrʌð.ər/", meaningKo: "형/오빠/남동생", emoji: "👦", desc: "나와 부모님이 같은 남자 형제예요.", examples: [
      { en: "I have a brother.", ko: "나는 남자 형제가 있어요." },
      { en: "My brother is tall.", ko: "내 남자 형제는 키가 커요." },
      { en: "I play with my brother.", ko: "나는 남자 형제와 놀아요." },
    ]},
    { id: "el-low-56", word: "baby", ipa: "/ˈbeɪ.bi/", meaningKo: "아기", emoji: "👶", desc: "아주 어린 아이예요.", examples: [
      { en: "The baby is cute.", ko: "그 아기는 귀여워요." },
      { en: "The baby is sleeping.", ko: "아기가 자고 있어요." },
      { en: "I love my baby sister.", ko: "나는 내 아기 여동생을 사랑해요." },
    ]},
    { id: "el-low-57", word: "grandma", ipa: "/ˈgræn.mɑː/", meaningKo: "할머니", emoji: "👵", desc: "엄마나 아빠의 엄마예요.", examples: [
      { en: "I love my grandma.", ko: "나는 할머니를 사랑해요." },
      { en: "My grandma is kind.", ko: "우리 할머니는 친절해요." },
      { en: "I visit my grandma.", ko: "나는 할머니를 방문해요." },
    ]},
    { id: "el-low-58", word: "grandpa", ipa: "/ˈgræn.pɑː/", meaningKo: "할아버지", emoji: "👴", desc: "엄마나 아빠의 아빠예요.", examples: [
      { en: "I love my grandpa.", ko: "나는 할아버지를 사랑해요." },
      { en: "My grandpa is funny.", ko: "우리 할아버지는 재미있어요." },
      { en: "I visit my grandpa.", ko: "나는 할아버지를 방문해요." },
    ]},
    { id: "el-low-59", word: "head", ipa: "/hed/", meaningKo: "머리", emoji: "🗣", desc: "몸의 가장 위에 있는 부분이에요.", examples: [
      { en: "I have a head.", ko: "나는 머리가 있어요." },
      { en: "My head hurts.", ko: "머리가 아파요." },
      { en: "Touch your head.", ko: "머리를 만져 봐." },
    ]},
    { id: "el-low-60", word: "hand", ipa: "/hænd/", meaningKo: "손", emoji: "✋", desc: "손가락이 다섯 개 있는 몸의 부분이에요.", examples: [
      { en: "I have two hands.", ko: "나는 손이 두 개 있어요." },
      { en: "Wash your hands.", ko: "손을 씻어." },
      { en: "Raise your hand.", ko: "손을 들어." },
    ]},
    { id: "el-low-61", word: "foot", ipa: "/fʊt/", meaningKo: "발", emoji: "🦶", desc: "걸을 때 쓰는 몸의 부분이에요.", examples: [
      { en: "I have two feet.", ko: "나는 발이 두 개 있어요." },
      { en: "My foot is small.", ko: "내 발은 작아요." },
      { en: "I hurt my foot.", ko: "나는 발을 다쳤어요." },
    ]},
    { id: "el-low-62", word: "eye", ipa: "/aɪ/", meaningKo: "눈", emoji: "👁", desc: "보는 데 쓰는 몸의 부분이에요.", examples: [
      { en: "I have two eyes.", ko: "나는 눈이 두 개 있어요." },
      { en: "Close your eyes.", ko: "눈을 감아." },
      { en: "My eyes are brown.", ko: "내 눈은 갈색이에요." },
    ]},
    { id: "el-low-63", word: "ear", ipa: "/ɪr/", meaningKo: "귀", emoji: "👂", desc: "듣는 데 쓰는 몸의 부분이에요.", examples: [
      { en: "I have two ears.", ko: "나는 귀가 두 개 있어요." },
      { en: "My ears are big.", ko: "내 귀는 커요." },
      { en: "Listen with your ears.", ko: "귀로 잘 들어." },
    ]},
    { id: "el-low-64", word: "nose", ipa: "/noʊz/", meaningKo: "코", emoji: "👃", desc: "냄새를 맡는 몸의 부분이에요.", examples: [
      { en: "I have a nose.", ko: "나는 코가 있어요." },
      { en: "My nose is small.", ko: "내 코는 작아요." },
      { en: "Smell with your nose.", ko: "코로 냄새를 맡아 봐." },
    ]},
    { id: "el-low-65", word: "mouth", ipa: "/maʊθ/", meaningKo: "입", emoji: "👄", desc: "먹고 말하는 몸의 부분이에요.", examples: [
      { en: "Open your mouth.", ko: "입을 벌려." },
      { en: "I have a mouth.", ko: "나는 입이 있어요." },
      { en: "My mouth is small.", ko: "내 입은 작아요." },
    ]},
    { id: "el-low-66", word: "hair", ipa: "/her/", meaningKo: "머리카락", emoji: "💇", desc: "머리 위에 자라는 것이에요.", examples: [
      { en: "My hair is black.", ko: "내 머리카락은 검은색이에요." },
      { en: "I have long hair.", ko: "나는 긴 머리카락을 가지고 있어요." },
      { en: "Brush your hair.", ko: "머리를 빗어." },
    ]},
    { id: "el-low-67", word: "rice", ipa: "/raɪs/", meaningKo: "쌀/밥", emoji: "🍚", desc: "하얀 낱알 모양의 주식 음식이에요.", examples: [
      { en: "I eat rice every day.", ko: "나는 매일 밥을 먹어요." },
      { en: "The rice is hot.", ko: "그 밥은 뜨거워요." },
      { en: "I like rice.", ko: "나는 쌀밥을 좋아해요." },
    ]},
    { id: "el-low-68", word: "bread", ipa: "/bred/", meaningKo: "빵", emoji: "🍞", desc: "밀가루로 만든 부드러운 음식이에요.", examples: [
      { en: "I eat bread for breakfast.", ko: "나는 아침으로 빵을 먹어요." },
      { en: "The bread is soft.", ko: "그 빵은 부드러워요." },
      { en: "I like bread.", ko: "나는 빵을 좋아해요." },
    ]},
    { id: "el-low-69", word: "egg", ipa: "/eg/", meaningKo: "달걀", emoji: "🥚", desc: "닭이 낳는 동그란 음식이에요.", examples: [
      { en: "I eat an egg.", ko: "나는 달걀을 먹어요." },
      { en: "The egg is white.", ko: "그 달걀은 하얀색이에요." },
      { en: "I like eggs.", ko: "나는 달걀을 좋아해요." },
    ]},
    { id: "el-low-70", word: "cheese", ipa: "/tʃiːz/", meaningKo: "치즈", emoji: "🧀", desc: "우유로 만든 노란 음식이에요.", examples: [
      { en: "I like cheese.", ko: "나는 치즈를 좋아해요." },
      { en: "The cheese is yellow.", ko: "그 치즈는 노란색이에요." },
      { en: "I eat cheese with bread.", ko: "나는 빵이랑 치즈를 먹어요." },
    ]},
    { id: "el-low-71", word: "cookie", ipa: "/ˈkʊk.i/", meaningKo: "쿠키", emoji: "🍪", desc: "달콤하고 동그란 과자예요.", examples: [
      { en: "I eat a cookie.", ko: "나는 쿠키를 먹어요." },
      { en: "The cookie is sweet.", ko: "그 쿠키는 달콤해요." },
      { en: "I like cookies.", ko: "나는 쿠키를 좋아해요." },
    ]},
    { id: "el-low-72", word: "candy", ipa: "/ˈkæn.di/", meaningKo: "사탕", emoji: "🍬", desc: "아주 달콤한 간식이에요.", examples: [
      { en: "I like candy.", ko: "나는 사탕을 좋아해요." },
      { en: "The candy is sweet.", ko: "그 사탕은 달콤해요." },
      { en: "She gave me candy.", ko: "그녀는 나에게 사탕을 줬어요." },
    ]},
    { id: "el-low-73", word: "juice", ipa: "/dʒuːs/", meaningKo: "주스", emoji: "🧃", desc: "과일로 만든 달콤한 음료예요.", examples: [
      { en: "I drink juice.", ko: "나는 주스를 마셔요." },
      { en: "The juice is sweet.", ko: "그 주스는 달콤해요." },
      { en: "I like orange juice.", ko: "나는 오렌지 주스를 좋아해요." },
    ]},
    { id: "el-low-74", word: "cake", ipa: "/keɪk/", meaningKo: "케이크", emoji: "🎂", desc: "생일에 먹는 달콤한 음식이에요.", examples: [
      { en: "I eat cake.", ko: "나는 케이크를 먹어요." },
      { en: "The cake is sweet.", ko: "그 케이크는 달콤해요." },
      { en: "We have cake on my birthday.", ko: "우리는 내 생일에 케이크를 먹어요." },
    ]},
    { id: "el-low-75", word: "soup", ipa: "/suːp/", meaningKo: "수프/국", emoji: "🍲", desc: "따뜻하고 국물이 있는 음식이에요.", examples: [
      { en: "I eat soup.", ko: "나는 수프를 먹어요." },
      { en: "The soup is hot.", ko: "그 수프는 뜨거워요." },
      { en: "I like vegetable soup.", ko: "나는 야채 수프를 좋아해요." },
    ]},
    { id: "el-low-76", word: "meat", ipa: "/miːt/", meaningKo: "고기", emoji: "🍖", desc: "동물에서 나오는 음식이에요.", examples: [
      { en: "I eat meat.", ko: "나는 고기를 먹어요." },
      { en: "The meat is hot.", ko: "그 고기는 뜨거워요." },
      { en: "I like meat.", ko: "나는 고기를 좋아해요." },
    ]},
    { id: "el-low-77", word: "desk", ipa: "/desk/", meaningKo: "책상", emoji: "🪑", desc: "공부할 때 쓰는 가구예요.", examples: [
      { en: "I sit at my desk.", ko: "나는 책상에 앉아요." },
      { en: "The desk is big.", ko: "그 책상은 커요." },
      { en: "My books are on the desk.", ko: "내 책들은 책상 위에 있어요." },
    ]},
    { id: "el-low-78", word: "chair", ipa: "/tʃer/", meaningKo: "의자", emoji: "🪑", desc: "앉을 때 쓰는 가구예요.", examples: [
      { en: "I sit on a chair.", ko: "나는 의자에 앉아요." },
      { en: "The chair is blue.", ko: "그 의자는 파란색이에요." },
      { en: "Please sit on the chair.", ko: "의자에 앉아 주세요." },
    ]},
    { id: "el-low-79", word: "door", ipa: "/dɔːr/", meaningKo: "문", emoji: "🚪", desc: "방에 들어가고 나갈 때 쓰는 것이에요.", examples: [
      { en: "Open the door.", ko: "문을 열어." },
      { en: "The door is red.", ko: "그 문은 빨간색이에요." },
      { en: "Close the door, please.", ko: "문 좀 닫아 주세요." },
    ]},
    { id: "el-low-80", word: "window", ipa: "/ˈwɪn.doʊ/", meaningKo: "창문", emoji: "🪟", desc: "밖을 볼 수 있는 유리 문이에요.", examples: [
      { en: "Open the window.", ko: "창문을 열어." },
      { en: "The window is big.", ko: "그 창문은 커요." },
      { en: "I see the sky from the window.", ko: "나는 창문으로 하늘을 봐요." },
    ]},
    { id: "el-low-81", word: "table", ipa: "/ˈteɪ.bəl/", meaningKo: "탁자", emoji: "🍽", desc: "물건을 놓는 평평한 가구예요.", examples: [
      { en: "Put the book on the table.", ko: "책을 탁자 위에 놔." },
      { en: "The table is big.", ko: "그 탁자는 커요." },
      { en: "We eat at the table.", ko: "우리는 탁자에서 밥을 먹어요." },
    ]},
    { id: "el-low-82", word: "bag", ipa: "/bæg/", meaningKo: "가방", emoji: "🎒", desc: "물건을 넣어서 들고 다니는 것이에요.", examples: [
      { en: "I have a bag.", ko: "나는 가방이 있어요." },
      { en: "My bag is blue.", ko: "내 가방은 파란색이에요." },
      { en: "I carry my books in my bag.", ko: "나는 가방에 책을 넣고 다녀요." },
    ]},
    { id: "el-low-83", word: "ball", ipa: "/bɔːl/", meaningKo: "공", emoji: "⚽", desc: "동그랗고 굴러가는 장난감이에요.", examples: [
      { en: "I play with a ball.", ko: "나는 공을 가지고 놀아요." },
      { en: "The ball is round.", ko: "그 공은 동그래요." },
      { en: "Kick the ball.", ko: "공을 차 봐." },
    ]},
    { id: "el-low-84", word: "bed", ipa: "/bed/", meaningKo: "침대", emoji: "🛏", desc: "잠을 자는 가구예요.", examples: [
      { en: "I sleep in my bed.", ko: "나는 침대에서 자요." },
      { en: "The bed is soft.", ko: "그 침대는 부드러워요." },
      { en: "Go to bed.", ko: "침대로 가서 자." },
    ]},
    { id: "el-low-85", word: "hot", ipa: "/hɒt/", meaningKo: "뜨거운", emoji: "🔥", desc: "온도가 아주 높다는 뜻이에요.", examples: [
      { en: "The soup is hot.", ko: "그 수프는 뜨거워요." },
      { en: "It is hot today.", ko: "오늘은 더워요." },
      { en: "Be careful, it's hot.", ko: "조심해, 뜨거워." },
    ]},
    { id: "el-low-86", word: "cold", ipa: "/koʊld/", meaningKo: "차가운", emoji: "❄️", desc: "온도가 아주 낮다는 뜻이에요.", examples: [
      { en: "The water is cold.", ko: "그 물은 차가워요." },
      { en: "It is cold today.", ko: "오늘은 추워요." },
      { en: "I feel cold.", ko: "나는 추워요." },
    ]},
    { id: "el-low-87", word: "new", ipa: "/njuː/", meaningKo: "새로운", emoji: "✨", desc: "만든 지 얼마 안 됐다는 뜻이에요.", examples: [
      { en: "I have a new bag.", ko: "나는 새 가방이 있어요." },
      { en: "This is a new book.", ko: "이것은 새 책이에요." },
      { en: "I like my new shoes.", ko: "나는 내 새 신발이 좋아요." },
    ]},
    { id: "el-low-88", word: "old", ipa: "/oʊld/", meaningKo: "오래된/나이 든", emoji: "🕰", desc: "만든 지 오래됐거나 나이가 많다는 뜻이에요.", examples: [
      { en: "This is an old book.", ko: "이것은 오래된 책이에요." },
      { en: "My grandpa is old.", ko: "우리 할아버지는 연세가 많으세요." },
      { en: "The house is old.", ko: "그 집은 오래됐어요." },
    ]},
    { id: "el-low-89", word: "fast", ipa: "/fæst/", meaningKo: "빠른", emoji: "🏎", desc: "속도가 빠르다는 뜻이에요.", examples: [
      { en: "The car is fast.", ko: "그 차는 빨라요." },
      { en: "He runs fast.", ko: "그는 빨리 달려요." },
      { en: "The cheetah is very fast.", ko: "치타는 아주 빨라요." },
    ]},
    { id: "el-low-90", word: "slow", ipa: "/sloʊ/", meaningKo: "느린", emoji: "🐢", desc: "속도가 느리다는 뜻이에요.", examples: [
      { en: "The turtle is slow.", ko: "그 거북이는 느려요." },
      { en: "He walks slow.", ko: "그는 천천히 걸어요." },
      { en: "The bus is slow today.", ko: "오늘 버스가 느려요." },
    ]},
    { id: "el-low-91", word: "long", ipa: "/lɒŋ/", meaningKo: "긴", emoji: "📏", desc: "길이가 길다는 뜻이에요.", examples: [
      { en: "The snake is long.", ko: "그 뱀은 길어요." },
      { en: "She has long hair.", ko: "그녀는 긴 머리카락을 가지고 있어요." },
      { en: "The road is long.", ko: "그 길은 길어요." },
    ]},
    { id: "el-low-92", word: "short", ipa: "/ʃɔːrt/", meaningKo: "짧은", emoji: "✂️", desc: "길이가 짧다는 뜻이에요.", examples: [
      { en: "My pencil is short.", ko: "내 연필은 짧아요." },
      { en: "He has short hair.", ko: "그는 짧은 머리카락을 가지고 있어요." },
      { en: "The story is short.", ko: "그 이야기는 짧아요." },
    ]},
    { id: "el-low-93", word: "run", ipa: "/rʌn/", meaningKo: "달리다", emoji: "🏃", desc: "빠르게 뛰어가는 것이에요.", examples: [
      { en: "I run every day.", ko: "나는 매일 달려요." },
      { en: "The dog can run fast.", ko: "그 개는 빨리 달릴 수 있어요." },
      { en: "Let's run together.", ko: "같이 달리자." },
    ]},
    { id: "el-low-94", word: "jump", ipa: "/dʒʌmp/", meaningKo: "뛰다/점프하다", emoji: "🤾", desc: "위로 뛰어오르는 것이에요.", examples: [
      { en: "I jump high.", ko: "나는 높이 뛰어요." },
      { en: "The rabbit can jump.", ko: "토끼는 뛸 수 있어요." },
      { en: "Let's jump together.", ko: "같이 뛰자." },
    ]},
    { id: "el-low-95", word: "walk", ipa: "/wɔːk/", meaningKo: "걷다", emoji: "🚶", desc: "천천히 발로 이동하는 것이에요.", examples: [
      { en: "I walk to school.", ko: "나는 걸어서 학교에 가요." },
      { en: "We walk in the park.", ko: "우리는 공원에서 걸어요." },
      { en: "Let's walk together.", ko: "같이 걷자." },
    ]},
    { id: "el-low-96", word: "eat", ipa: "/iːt/", meaningKo: "먹다", emoji: "🍽", desc: "음식을 입에 넣고 씹는 것이에요.", examples: [
      { en: "I eat breakfast.", ko: "나는 아침밥을 먹어요." },
      { en: "I eat an apple.", ko: "나는 사과를 먹어요." },
      { en: "Let's eat together.", ko: "같이 먹자." },
    ]},
    { id: "el-low-97", word: "drink", ipa: "/drɪŋk/", meaningKo: "마시다", emoji: "🥤", desc: "물이나 음료를 마시는 것이에요.", examples: [
      { en: "I drink water.", ko: "나는 물을 마셔요." },
      { en: "I drink milk.", ko: "나는 우유를 마셔요." },
      { en: "Let's drink juice.", ko: "같이 주스 마시자." },
    ]},
    { id: "el-low-98", word: "sleep", ipa: "/sliːp/", meaningKo: "자다", emoji: "😴", desc: "눈을 감고 쉬는 것이에요.", examples: [
      { en: "I sleep at night.", ko: "나는 밤에 자요." },
      { en: "The cat is sleeping.", ko: "고양이가 자고 있어요." },
      { en: "I sleep eight hours.", ko: "나는 여덟 시간 자요." },
    ]},
    { id: "el-low-99", word: "sing", ipa: "/sɪŋ/", meaningKo: "노래하다", emoji: "🎤", desc: "노래를 부르는 것이에요.", examples: [
      { en: "I like to sing.", ko: "나는 노래하는 것을 좋아해요." },
      { en: "She can sing well.", ko: "그녀는 노래를 잘해요." },
      { en: "Let's sing together.", ko: "같이 노래하자." },
    ]},
    { id: "el-low-100", word: "dance", ipa: "/dæns/", meaningKo: "춤추다", emoji: "💃", desc: "몸을 움직이며 춤을 추는 것이에요.", examples: [
      { en: "I like to dance.", ko: "나는 춤추는 것을 좋아해요." },
      { en: "She can dance well.", ko: "그녀는 춤을 잘 춰요." },
      { en: "Let's dance together.", ko: "같이 춤추자." },
    ]},
    { id: "el-low-101", word: "read", ipa: "/riːd/", meaningKo: "읽다", emoji: "📖", desc: "글을 보고 이해하는 것이에요.", examples: [
      { en: "I read a book.", ko: "나는 책을 읽어요." },
      { en: "I like to read.", ko: "나는 읽는 것을 좋아해요." },
      { en: "Let's read together.", ko: "같이 읽자." },
    ]},
    { id: "el-low-102", word: "write", ipa: "/raɪt/", meaningKo: "쓰다", emoji: "✍️", desc: "글씨를 쓰는 것이에요.", examples: [
      { en: "I write my name.", ko: "나는 내 이름을 써요." },
      { en: "I like to write.", ko: "나는 쓰는 것을 좋아해요." },
      { en: "Let's write together.", ko: "같이 쓰자." },
    ]},
    { id: "el-low-103", word: "play", ipa: "/pleɪ/", meaningKo: "놀다", emoji: "🧸", desc: "재미있게 노는 것이에요.", examples: [
      { en: "I play with my friends.", ko: "나는 친구들과 놀아요." },
      { en: "I like to play.", ko: "나는 노는 것을 좋아해요." },
      { en: "Let's play together.", ko: "같이 놀자." },
    ]},
    { id: "el-low-104", word: "swim", ipa: "/swɪm/", meaningKo: "수영하다", emoji: "🏊", desc: "물속에서 헤엄치는 것이에요.", examples: [
      { en: "I can swim.", ko: "나는 수영할 수 있어요." },
      { en: "I like to swim.", ko: "나는 수영하는 것을 좋아해요." },
      { en: "Let's swim together.", ko: "같이 수영하자." },
    ]},
    { id: "el-low-105", word: "fly", ipa: "/flaɪ/", meaningKo: "날다", emoji: "🕊", desc: "하늘을 나는 것이에요.", examples: [
      { en: "Birds can fly.", ko: "새는 날 수 있어요." },
      { en: "I like to fly a kite.", ko: "나는 연 날리는 것을 좋아해요." },
      { en: "The plane can fly.", ko: "비행기는 날 수 있어요." },
    ]},
    { id: "el-low-106", word: "sit", ipa: "/sɪt/", meaningKo: "앉다", emoji: "🪑", desc: "의자나 바닥에 앉는 것이에요.", examples: [
      { en: "Please sit down.", ko: "앉아 주세요." },
      { en: "I sit on the chair.", ko: "나는 의자에 앉아요." },
      { en: "Sit here, please.", ko: "여기 앉아 주세요." },
    ]},
    { id: "el-low-107", word: "stand", ipa: "/stænd/", meaningKo: "서다", emoji: "🧍", desc: "일어서는 것이에요.", examples: [
      { en: "Please stand up.", ko: "일어서 주세요." },
      { en: "I stand here.", ko: "나는 여기 서 있어요." },
      { en: "Stand next to me.", ko: "내 옆에 서." },
    ]},
    { id: "el-low-108", word: "laugh", ipa: "/læf/", meaningKo: "웃다", emoji: "😄", desc: "재미있어서 소리 내어 웃는 것이에요.", examples: [
      { en: "I laugh a lot.", ko: "나는 많이 웃어요." },
      { en: "She makes me laugh.", ko: "그녀는 나를 웃게 해요." },
      { en: "We laugh together.", ko: "우리는 같이 웃어요." },
    ]},
    { id: "el-low-109", word: "look", ipa: "/lʊk/", meaningKo: "보다", emoji: "👀", desc: "눈으로 보는 것이에요.", examples: [
      { en: "Look at this.", ko: "이것 좀 봐." },
      { en: "I look at the sky.", ko: "나는 하늘을 봐요." },
      { en: "Look at me.", ko: "나를 봐." },
    ]},
    { id: "el-low-110", word: "listen", ipa: "/ˈlɪs.ən/", meaningKo: "듣다", emoji: "👂", desc: "귀로 소리를 듣는 것이에요.", examples: [
      { en: "Listen to me.", ko: "내 말을 들어." },
      { en: "I listen to music.", ko: "나는 음악을 들어요." },
      { en: "Please listen carefully.", ko: "잘 들어 주세요." },
    ]},
    { id: "el-low-111", word: "tree", ipa: "/triː/", meaningKo: "나무", emoji: "🌳", desc: "잎과 가지가 있는 큰 식물이에요.", examples: [
      { en: "I see a tree.", ko: "나는 나무를 봐요." },
      { en: "The tree is tall.", ko: "그 나무는 커요." },
      { en: "Birds live in the tree.", ko: "새들은 나무에 살아요." },
    ]},
    { id: "el-low-112", word: "flower", ipa: "/ˈflaʊ.ər/", meaningKo: "꽃", emoji: "🌸", desc: "예쁘고 향기 나는 식물이에요.", examples: [
      { en: "I like flowers.", ko: "나는 꽃을 좋아해요." },
      { en: "The flower is pretty.", ko: "그 꽃은 예뻐요." },
      { en: "I gave her a flower.", ko: "나는 그녀에게 꽃을 줬어요." },
    ]},
    { id: "el-low-113", word: "star", ipa: "/stɑːr/", meaningKo: "별", emoji: "⭐", desc: "밤하늘에서 반짝이는 것이에요.", examples: [
      { en: "I see a star.", ko: "나는 별을 봐요." },
      { en: "The star is bright.", ko: "그 별은 밝아요." },
      { en: "I love the stars.", ko: "나는 별들을 사랑해요." },
    ]},
    { id: "el-low-114", word: "moon", ipa: "/muːn/", meaningKo: "달", emoji: "🌙", desc: "밤하늘에 떠 있는 둥근 것이에요.", examples: [
      { en: "I see the moon.", ko: "나는 달을 봐요." },
      { en: "The moon is bright.", ko: "달은 밝아요." },
      { en: "The moon is round.", ko: "달은 둥글어요." },
    ]},
    { id: "el-low-115", word: "sky", ipa: "/skaɪ/", meaningKo: "하늘", emoji: "🌌", desc: "머리 위에 넓게 펼쳐진 공간이에요.", examples: [
      { en: "The sky is blue.", ko: "하늘은 파란색이에요." },
      { en: "I look at the sky.", ko: "나는 하늘을 봐요." },
      { en: "Birds fly in the sky.", ko: "새들이 하늘을 날아요." },
    ]},
    { id: "el-low-116", word: "cloud", ipa: "/klaʊd/", meaningKo: "구름", emoji: "☁️", desc: "하늘에 떠 있는 하얀 것이에요.", examples: [
      { en: "I see a cloud.", ko: "나는 구름을 봐요." },
      { en: "The cloud is white.", ko: "그 구름은 하얀색이에요." },
      { en: "The sky is full of clouds.", ko: "하늘에 구름이 가득해요." },
    ]},
    { id: "el-low-117", word: "today", ipa: "/təˈdeɪ/", meaningKo: "오늘", emoji: "📅", desc: "지금 이 날을 말해요.", examples: [
      { en: "Today is Monday.", ko: "오늘은 월요일이에요." },
      { en: "I am happy today.", ko: "나는 오늘 행복해요." },
      { en: "What day is today?", ko: "오늘 무슨 요일이에요?" },
    ]},
    { id: "el-low-118", word: "tomorrow", ipa: "/təˈmɒr.oʊ/", meaningKo: "내일", emoji: "📆", desc: "오늘의 다음 날을 말해요.", examples: [
      { en: "See you tomorrow.", ko: "내일 봐." },
      { en: "Tomorrow is Sunday.", ko: "내일은 일요일이에요." },
      { en: "I have school tomorrow.", ko: "나는 내일 학교에 가요." },
    ]},
    { id: "el-low-119", word: "yesterday", ipa: "/ˈjes.tər.deɪ/", meaningKo: "어제", emoji: "🗓", desc: "오늘의 전날을 말해요.", examples: [
      { en: "I saw him yesterday.", ko: "나는 어제 그를 봤어요." },
      { en: "Yesterday was fun.", ko: "어제는 재미있었어요." },
      { en: "It rained yesterday.", ko: "어제 비가 왔어요." },
    ]},
    { id: "el-low-120", word: "night", ipa: "/naɪt/", meaningKo: "밤", emoji: "🌃", desc: "해가 지고 어두워진 시간이에요.", examples: [
      { en: "Good night!", ko: "좋은 밤 되세요!" },
      { en: "I sleep at night.", ko: "나는 밤에 자요." },
      { en: "The stars come out at night.", ko: "밤에는 별이 나와요." },
    ]},
  ],

  "elementary-mid": [
    { id: "el-mid-01", word: "friend", ipa: "/frend/", meaningKo: "친구", emoji: "👫", desc: "나와 사이좋게 지내는 사람이에요.", examples: [
      { en: "She is my best friend.", ko: "그녀는 내 가장 친한 친구예요." },
      { en: "I have many friends.", ko: "나는 친구가 많아요." },
      { en: "Friends help each other.", ko: "친구들은 서로 도와요." },
    ]},
    { id: "el-mid-02", word: "teacher", ipa: "/ˈtiː.tʃər/", meaningKo: "선생님", emoji: "👩‍🏫", desc: "학교에서 공부를 가르쳐주는 사람이에요.", examples: [
      { en: "My teacher is kind.", ko: "우리 선생님은 친절해요." },
      { en: "The teacher explains the lesson.", ko: "선생님이 수업을 설명해요." },
      { en: "I respect my teacher.", ko: "나는 선생님을 존경해요." },
    ]},
    { id: "el-mid-03", word: "garden", ipa: "/ˈgɑːr.dən/", meaningKo: "정원", emoji: "🌷", desc: "꽃과 나무를 기르는 장소예요.", examples: [
      { en: "We planted flowers in the garden.", ko: "우리는 정원에 꽃을 심었어요." },
      { en: "The garden is beautiful.", ko: "그 정원은 아름다워요." },
      { en: "I water the garden every day.", ko: "나는 매일 정원에 물을 줘요." },
    ]},
    { id: "el-mid-04", word: "kitchen", ipa: "/ˈkɪtʃ.ən/", meaningKo: "부엌", emoji: "🍳", desc: "음식을 만드는 방이에요.", examples: [
      { en: "Mom cooks in the kitchen.", ko: "엄마는 부엌에서 요리해요." },
      { en: "The kitchen is clean.", ko: "부엌이 깨끗해요." },
      { en: "I help in the kitchen.", ko: "나는 부엌에서 도와요." },
    ]},
    { id: "el-mid-05", word: "morning", ipa: "/ˈmɔːr.nɪŋ/", meaningKo: "아침", emoji: "🌅", desc: "하루가 시작되는 이른 시간이에요.", examples: [
      { en: "I wake up in the morning.", ko: "나는 아침에 일어나요." },
      { en: "Good morning!", ko: "좋은 아침이에요!" },
      { en: "We eat breakfast in the morning.", ko: "우리는 아침에 아침밥을 먹어요." },
    ]},
    { id: "el-mid-06", word: "evening", ipa: "/ˈiːv.nɪŋ/", meaningKo: "저녁", emoji: "🌆", desc: "해가 질 때쯤의 시간이에요.", examples: [
      { en: "We have dinner in the evening.", ko: "우리는 저녁에 저녁밥을 먹어요." },
      { en: "The evening is calm.", ko: "저녁은 고요해요." },
      { en: "See you this evening.", ko: "오늘 저녁에 봐요." },
    ]},
    { id: "el-mid-07", word: "weather", ipa: "/ˈweð.ər/", meaningKo: "날씨", emoji: "⛅", desc: "오늘 맑은지 흐린지 같은 것을 말해요.", examples: [
      { en: "The weather is nice today.", ko: "오늘 날씨가 좋아요." },
      { en: "What's the weather like?", ko: "날씨가 어때요?" },
      { en: "I like sunny weather.", ko: "나는 맑은 날씨를 좋아해요." },
    ]},
    { id: "el-mid-08", word: "rain", ipa: "/reɪn/", meaningKo: "비", emoji: "🌧", desc: "하늘에서 물방울이 떨어지는 것이에요.", examples: [
      { en: "It is raining outside.", ko: "밖에 비가 오고 있어요." },
      { en: "I love the sound of rain.", ko: "나는 빗소리를 좋아해요." },
      { en: "Bring an umbrella for the rain.", ko: "비 때문에 우산을 챙겨." },
    ]},
    { id: "el-mid-09", word: "snow", ipa: "/snoʊ/", meaningKo: "눈", emoji: "❄️", desc: "겨울에 하늘에서 하얗게 내려요.", examples: [
      { en: "It snowed last night.", ko: "어젯밤에 눈이 왔어요." },
      { en: "We made a snowman.", ko: "우리는 눈사람을 만들었어요." },
      { en: "The snow is white.", ko: "눈은 하얀색이에요." },
    ]},
    { id: "el-mid-10", word: "holiday", ipa: "/ˈhɒl.ə.deɪ/", meaningKo: "휴일", emoji: "🏖", desc: "학교나 회사를 쉬는 날이에요.", examples: [
      { en: "We travel on holidays.", ko: "우리는 휴일에 여행해요." },
      { en: "Today is a holiday.", ko: "오늘은 휴일이에요." },
      { en: "I enjoy my holidays.", ko: "나는 휴일을 즐겨요." },
    ]},
    { id: "el-mid-11", word: "family", ipa: "/ˈfæm.əl.i/", meaningKo: "가족", emoji: "👨‍👩‍👧‍👦", desc: "부모님과 형제자매처럼 함께 사는 사람들이에요.", examples: [
      { en: "I love my family.", ko: "나는 우리 가족을 사랑해요." },
      { en: "My family is big.", ko: "우리 가족은 대가족이에요." },
      { en: "We eat dinner as a family.", ko: "우리는 가족과 함께 저녁을 먹어요." },
    ]},
    { id: "el-mid-12", word: "breakfast", ipa: "/ˈbrek.fəst/", meaningKo: "아침밥", emoji: "🥞", desc: "아침에 먹는 첫 번째 식사예요.", examples: [
      { en: "I eat breakfast every morning.", ko: "나는 매일 아침 아침밥을 먹어요." },
      { en: "Breakfast is ready.", ko: "아침밥이 준비됐어요." },
      { en: "We had eggs for breakfast.", ko: "우리는 아침으로 계란을 먹었어요." },
    ]},
    { id: "el-mid-13", word: "lunch", ipa: "/lʌntʃ/", meaningKo: "점심", emoji: "🍱", desc: "낮에 먹는 식사예요.", examples: [
      { en: "We eat lunch at noon.", ko: "우리는 정오에 점심을 먹어요." },
      { en: "Lunch was delicious.", ko: "점심이 맛있었어요." },
      { en: "Let's have lunch together.", ko: "같이 점심 먹자." },
    ]},
    { id: "el-mid-14", word: "dinner", ipa: "/ˈdɪn.ər/", meaningKo: "저녁밥", emoji: "🍽", desc: "저녁에 먹는 식사예요.", examples: [
      { en: "We eat dinner at seven.", ko: "우리는 7시에 저녁을 먹어요." },
      { en: "Dinner smells great.", ko: "저녁밥 냄새가 좋아요." },
      { en: "What's for dinner?", ko: "저녁 메뉴가 뭐예요?" },
    ]},
    { id: "el-mid-15", word: "bicycle", ipa: "/ˈbaɪ.sɪ.kəl/", meaningKo: "자전거", emoji: "🚲", desc: "두 바퀴로 페달을 밟아 타는 것이에요.", examples: [
      { en: "I ride my bicycle to school.", ko: "나는 자전거를 타고 학교에 가요." },
      { en: "She has a new bicycle.", ko: "그녀는 새 자전거가 있어요." },
      { en: "He fixed his bicycle.", ko: "그는 자전거를 고쳤어요." },
    ]},
    { id: "el-mid-16", word: "airplane", ipa: "/ˈer.pleɪn/", meaningKo: "비행기", emoji: "✈️", desc: "하늘을 날아서 먼 곳으로 가는 큰 탈것이에요.", examples: [
      { en: "We flew on an airplane.", ko: "우리는 비행기를 타고 갔어요." },
      { en: "The airplane is fast.", ko: "비행기는 빨라요." },
      { en: "I want to fly an airplane.", ko: "나는 비행기를 조종하고 싶어요." },
    ]},
    { id: "el-mid-17", word: "hospital", ipa: "/ˈhɒs.pɪ.təl/", meaningKo: "병원", emoji: "🏥", desc: "아프거나 다쳤을 때 가는 곳이에요.", examples: [
      { en: "My mom works at a hospital.", ko: "우리 엄마는 병원에서 일해요." },
      { en: "He went to the hospital.", ko: "그는 병원에 갔어요." },
      { en: "The hospital is near my house.", ko: "병원은 우리 집 근처에 있어요." },
    ]},
    { id: "el-mid-18", word: "restaurant", ipa: "/ˈres.tər.ɒnt/", meaningKo: "식당", emoji: "🍴", desc: "돈을 내고 음식을 사 먹는 곳이에요.", examples: [
      { en: "We ate at a restaurant.", ko: "우리는 식당에서 밥을 먹었어요." },
      { en: "This restaurant is famous.", ko: "이 식당은 유명해요." },
      { en: "Let's go to a new restaurant.", ko: "새로운 식당에 가보자." },
    ]},
    { id: "el-mid-19", word: "weekend", ipa: "/ˈwiːk.end/", meaningKo: "주말", emoji: "📅", desc: "토요일과 일요일이에요.", examples: [
      { en: "I relax on the weekend.", ko: "나는 주말에 쉬어요." },
      { en: "What are your plans for the weekend?", ko: "주말 계획이 뭐예요?" },
      { en: "We went hiking last weekend.", ko: "우리는 지난 주말에 등산을 갔어요." },
    ]},
    { id: "el-mid-20", word: "vacation", ipa: "/veɪˈkeɪ.ʃən/", meaningKo: "방학/휴가", emoji: "🧳", desc: "학교나 일을 오래 쉬는 기간이에요.", examples: [
      { en: "We went to the beach on vacation.", ko: "우리는 휴가에 해변에 갔어요." },
      { en: "Summer vacation is my favorite.", ko: "여름 방학이 제일 좋아요." },
      { en: "I need a vacation.", ko: "나는 휴가가 필요해요." },
    ]},
    { id: "el-mid-21", word: "Monday", ipa: "/ˈmʌn.deɪ/", meaningKo: "월요일", emoji: "📅", desc: "한 주의 첫 번째 요일이에요.", examples: [
      { en: "I go to school on Monday.", ko: "나는 월요일에 학교에 가요." },
      { en: "Monday is busy.", ko: "월요일은 바빠요." },
      { en: "See you on Monday.", ko: "월요일에 봐." },
    ]},
    { id: "el-mid-22", word: "Tuesday", ipa: "/ˈtuːz.deɪ/", meaningKo: "화요일", emoji: "📅", desc: "월요일 다음 요일이에요.", examples: [
      { en: "I have art on Tuesday.", ko: "나는 화요일에 미술 수업이 있어요." },
      { en: "Tuesday is a school day.", ko: "화요일은 등교일이에요." },
      { en: "We meet on Tuesday.", ko: "우리는 화요일에 만나요." },
    ]},
    { id: "el-mid-23", word: "Wednesday", ipa: "/ˈwenz.deɪ/", meaningKo: "수요일", emoji: "📅", desc: "한 주의 가운데 요일이에요.", examples: [
      { en: "I have music on Wednesday.", ko: "나는 수요일에 음악 수업이 있어요." },
      { en: "Wednesday is in the middle of the week.", ko: "수요일은 한 주의 가운데예요." },
      { en: "We play soccer on Wednesday.", ko: "우리는 수요일에 축구를 해요." },
    ]},
    { id: "el-mid-24", word: "Thursday", ipa: "/ˈθɜːrz.deɪ/", meaningKo: "목요일", emoji: "📅", desc: "수요일 다음 요일이에요.", examples: [
      { en: "I have science on Thursday.", ko: "나는 목요일에 과학 수업이 있어요." },
      { en: "Thursday is almost the weekend.", ko: "목요일이면 곧 주말이에요." },
      { en: "We have a test on Thursday.", ko: "우리는 목요일에 시험이 있어요." },
    ]},
    { id: "el-mid-25", word: "Friday", ipa: "/ˈfraɪ.deɪ/", meaningKo: "금요일", emoji: "📅", desc: "한 주의 마지막 학교 요일이에요.", examples: [
      { en: "I love Fridays.", ko: "나는 금요일을 좋아해요." },
      { en: "Friday is before the weekend.", ko: "금요일은 주말 전날이에요." },
      { en: "We have a party on Friday.", ko: "우리는 금요일에 파티를 해요." },
    ]},
    { id: "el-mid-26", word: "Saturday", ipa: "/ˈsæt.ər.deɪ/", meaningKo: "토요일", emoji: "📅", desc: "주말의 첫째 날이에요.", examples: [
      { en: "I play on Saturday.", ko: "나는 토요일에 놀아요." },
      { en: "Saturday is a holiday.", ko: "토요일은 휴일이에요." },
      { en: "We go to the park on Saturday.", ko: "우리는 토요일에 공원에 가요." },
    ]},
    { id: "el-mid-27", word: "Sunday", ipa: "/ˈsʌn.deɪ/", meaningKo: "일요일", emoji: "📅", desc: "한 주의 마지막 날이에요.", examples: [
      { en: "I rest on Sunday.", ko: "나는 일요일에 쉬어요." },
      { en: "Sunday is a family day.", ko: "일요일은 가족의 날이에요." },
      { en: "We eat together on Sunday.", ko: "우리는 일요일에 함께 먹어요." },
    ]},
    { id: "el-mid-28", word: "January", ipa: "/ˈdʒæn.ju.er.i/", meaningKo: "1월", emoji: "❄️", desc: "한 해의 첫 번째 달이에요.", examples: [
      { en: "My birthday is in January.", ko: "내 생일은 1월이에요." },
      { en: "January is cold.", ko: "1월은 추워요." },
      { en: "The new year starts in January.", ko: "새해는 1월에 시작해요." },
    ]},
    { id: "el-mid-29", word: "February", ipa: "/ˈfeb.ru.er.i/", meaningKo: "2월", emoji: "💝", desc: "1월 다음 달이에요.", examples: [
      { en: "February is short.", ko: "2월은 짧아요." },
      { en: "Valentine's Day is in February.", ko: "밸런타인데이는 2월이에요." },
      { en: "It snows in February.", ko: "2월에는 눈이 와요." },
    ]},
    { id: "el-mid-30", word: "March", ipa: "/mɑːrtʃ/", meaningKo: "3월", emoji: "🌱", desc: "봄이 시작되는 달이에요.", examples: [
      { en: "Spring begins in March.", ko: "봄은 3월에 시작해요." },
      { en: "School starts in March in Korea.", ko: "한국에서는 3월에 학교가 시작해요." },
      { en: "March is windy.", ko: "3월은 바람이 많이 불어요." },
    ]},
    { id: "el-mid-31", word: "April", ipa: "/ˈeɪ.prəl/", meaningKo: "4월", emoji: "🌸", desc: "봄의 두 번째 달이에요.", examples: [
      { en: "Flowers bloom in April.", ko: "4월에는 꽃이 펴요." },
      { en: "April is rainy.", ko: "4월은 비가 자주 와요." },
      { en: "My birthday is in April.", ko: "내 생일은 4월이에요." },
    ]},
    { id: "el-mid-32", word: "May", ipa: "/meɪ/", meaningKo: "5월", emoji: "🌼", desc: "따뜻한 봄 달이에요.", examples: [
      { en: "May is warm.", ko: "5월은 따뜻해요." },
      { en: "We have a picnic in May.", ko: "우리는 5월에 소풍을 가요." },
      { en: "Children's Day is in May.", ko: "어린이날은 5월이에요." },
    ]},
    { id: "el-mid-33", word: "June", ipa: "/dʒuːn/", meaningKo: "6월", emoji: "☀️", desc: "여름이 시작되는 달이에요.", examples: [
      { en: "Summer starts in June.", ko: "여름은 6월에 시작해요." },
      { en: "School ends in June.", ko: "6월에 학기가 끝나요." },
      { en: "June is hot.", ko: "6월은 더워요." },
    ]},
    { id: "el-mid-34", word: "July", ipa: "/dʒʊˈlaɪ/", meaningKo: "7월", emoji: "🏖", desc: "여름 방학이 있는 달이에요.", examples: [
      { en: "We swim in July.", ko: "우리는 7월에 수영해요." },
      { en: "July is very hot.", ko: "7월은 아주 더워요." },
      { en: "Summer vacation starts in July.", ko: "여름 방학은 7월에 시작해요." },
    ]},
    { id: "el-mid-35", word: "August", ipa: "/ˈɔː.gəst/", meaningKo: "8월", emoji: "🌻", desc: "여름의 마지막 달이에요.", examples: [
      { en: "August is hot.", ko: "8월은 더워요." },
      { en: "We go to the beach in August.", ko: "우리는 8월에 해변에 가요." },
      { en: "School starts again in late August.", ko: "8월 말에 개학해요." },
    ]},
    { id: "el-mid-36", word: "September", ipa: "/sepˈtem.bər/", meaningKo: "9월", emoji: "🍂", desc: "가을이 시작되는 달이에요.", examples: [
      { en: "Fall begins in September.", ko: "가을은 9월에 시작해요." },
      { en: "School starts in September in many countries.", ko: "많은 나라에서 9월에 학교가 시작해요." },
      { en: "September is cool.", ko: "9월은 선선해요." },
    ]},
    { id: "el-mid-37", word: "October", ipa: "/ɒkˈtoʊ.bər/", meaningKo: "10월", emoji: "🎃", desc: "할로윈이 있는 달이에요.", examples: [
      { en: "We celebrate Halloween in October.", ko: "우리는 10월에 할로윈을 즐겨요." },
      { en: "October is cool.", ko: "10월은 선선해요." },
      { en: "Leaves change color in October.", ko: "10월에는 낙엽이 물들어요." },
    ]},
    { id: "el-mid-38", word: "spring", ipa: "/sprɪŋ/", meaningKo: "봄", emoji: "🌷", desc: "겨울 다음에 오는, 꽃이 피는 계절이에요.", examples: [
      { en: "I like spring.", ko: "나는 봄을 좋아해요." },
      { en: "Flowers bloom in spring.", ko: "봄에는 꽃이 펴요." },
      { en: "Spring is warm.", ko: "봄은 따뜻해요." },
    ]},
    { id: "el-mid-39", word: "summer", ipa: "/ˈsʌm.ər/", meaningKo: "여름", emoji: "☀️", desc: "일 년 중 가장 더운 계절이에요.", examples: [
      { en: "I like summer.", ko: "나는 여름을 좋아해요." },
      { en: "Summer is hot.", ko: "여름은 더워요." },
      { en: "We swim in summer.", ko: "우리는 여름에 수영해요." },
    ]},
    { id: "el-mid-40", word: "fall", ipa: "/fɔːl/", meaningKo: "가을", emoji: "🍁", desc: "나뭇잎이 물드는 계절이에요.", examples: [
      { en: "I like fall.", ko: "나는 가을을 좋아해요." },
      { en: "Leaves change color in fall.", ko: "가을에는 나뭇잎이 물들어요." },
      { en: "Fall is cool.", ko: "가을은 선선해요." },
    ]},
    { id: "el-mid-41", word: "winter", ipa: "/ˈwɪn.tər/", meaningKo: "겨울", emoji: "⛄", desc: "일 년 중 가장 추운 계절이에요.", examples: [
      { en: "I like winter.", ko: "나는 겨울을 좋아해요." },
      { en: "Winter is cold.", ko: "겨울은 추워요." },
      { en: "It snows in winter.", ko: "겨울에는 눈이 와요." },
    ]},
    { id: "el-mid-42", word: "shirt", ipa: "/ʃɜːrt/", meaningKo: "셔츠", emoji: "👕", desc: "위에 입는 옷이에요.", examples: [
      { en: "I wear a shirt.", ko: "나는 셔츠를 입어요." },
      { en: "My shirt is blue.", ko: "내 셔츠는 파란색이에요." },
      { en: "He bought a new shirt.", ko: "그는 새 셔츠를 샀어요." },
    ]},
    { id: "el-mid-43", word: "pants", ipa: "/pænts/", meaningKo: "바지", emoji: "👖", desc: "다리에 입는 옷이에요.", examples: [
      { en: "I wear pants.", ko: "나는 바지를 입어요." },
      { en: "My pants are black.", ko: "내 바지는 검은색이에요." },
      { en: "She likes these pants.", ko: "그녀는 이 바지를 좋아해요." },
    ]},
    { id: "el-mid-44", word: "shoes", ipa: "/ʃuːz/", meaningKo: "신발", emoji: "👟", desc: "발에 신는 것이에요.", examples: [
      { en: "I wear shoes.", ko: "나는 신발을 신어요." },
      { en: "My shoes are new.", ko: "내 신발은 새것이에요." },
      { en: "He runs in his shoes.", ko: "그는 신발을 신고 달려요." },
    ]},
    { id: "el-mid-45", word: "socks", ipa: "/sɒks/", meaningKo: "양말", emoji: "🧦", desc: "발에 신는 얇은 것이에요.", examples: [
      { en: "I wear socks.", ko: "나는 양말을 신어요." },
      { en: "My socks are white.", ko: "내 양말은 하얀색이에요." },
      { en: "She has cute socks.", ko: "그녀는 귀여운 양말이 있어요." },
    ]},
    { id: "el-mid-46", word: "jacket", ipa: "/ˈdʒæk.ɪt/", meaningKo: "재킷", emoji: "🧥", desc: "추울 때 입는 겉옷이에요.", examples: [
      { en: "I wear a jacket.", ko: "나는 재킷을 입어요." },
      { en: "My jacket is warm.", ko: "내 재킷은 따뜻해요." },
      { en: "He put on his jacket.", ko: "그는 재킷을 입었어요." },
    ]},
    { id: "el-mid-47", word: "skirt", ipa: "/skɜːrt/", meaningKo: "치마", emoji: "👗", desc: "여자아이들이 많이 입는 옷이에요.", examples: [
      { en: "She wears a skirt.", ko: "그녀는 치마를 입어요." },
      { en: "Her skirt is pink.", ko: "그녀의 치마는 분홍색이에요." },
      { en: "I like this skirt.", ko: "나는 이 치마가 좋아요." },
    ]},
    { id: "el-mid-48", word: "dress", ipa: "/dres/", meaningKo: "원피스", emoji: "👗", desc: "위아래가 붙은 옷이에요.", examples: [
      { en: "She wears a dress.", ko: "그녀는 원피스를 입어요." },
      { en: "Her dress is red.", ko: "그녀의 원피스는 빨간색이에요." },
      { en: "I like this dress.", ko: "나는 이 원피스가 좋아요." },
    ]},
    { id: "el-mid-49", word: "glasses", ipa: "/ˈglæs.ɪz/", meaningKo: "안경", emoji: "👓", desc: "눈이 잘 안 보일 때 쓰는 것이에요.", examples: [
      { en: "I wear glasses.", ko: "나는 안경을 써요." },
      { en: "My glasses are new.", ko: "내 안경은 새것이에요." },
      { en: "He needs glasses to read.", ko: "그는 책을 읽을 때 안경이 필요해요." },
    ]},
    { id: "el-mid-50", word: "bus", ipa: "/bʌs/", meaningKo: "버스", emoji: "🚌", desc: "많은 사람을 태우는 큰 차예요.", examples: [
      { en: "I take the bus.", ko: "나는 버스를 타요." },
      { en: "The bus is yellow.", ko: "그 버스는 노란색이에요." },
      { en: "We ride the bus to school.", ko: "우리는 버스를 타고 학교에 가요." },
    ]},
    { id: "el-mid-51", word: "train", ipa: "/treɪn/", meaningKo: "기차", emoji: "🚆", desc: "철길 위를 달리는 긴 탈것이에요.", examples: [
      { en: "I take the train.", ko: "나는 기차를 타요." },
      { en: "The train is fast.", ko: "기차는 빨라요." },
      { en: "We travel by train.", ko: "우리는 기차로 여행해요." },
    ]},
    { id: "el-mid-52", word: "car", ipa: "/kɑːr/", meaningKo: "자동차", emoji: "🚗", desc: "도로를 달리는 탈것이에요.", examples: [
      { en: "I have a car.", ko: "나는 자동차가 있어요." },
      { en: "The car is red.", ko: "그 자동차는 빨간색이에요." },
      { en: "We go by car.", ko: "우리는 차로 가요." },
    ]},
    { id: "el-mid-53", word: "ship", ipa: "/ʃɪp/", meaningKo: "배", emoji: "🚢", desc: "바다를 건너는 큰 탈것이에요.", examples: [
      { en: "I see a ship.", ko: "나는 배를 봐요." },
      { en: "The ship is big.", ko: "그 배는 커요." },
      { en: "We travel by ship.", ko: "우리는 배로 여행해요." },
    ]},
    { id: "el-mid-54", word: "subway", ipa: "/ˈsʌb.weɪ/", meaningKo: "지하철", emoji: "🚇", desc: "땅 밑을 달리는 기차예요.", examples: [
      { en: "I take the subway.", ko: "나는 지하철을 타요." },
      { en: "The subway is fast.", ko: "지하철은 빨라요." },
      { en: "We go by subway.", ko: "우리는 지하철로 가요." },
    ]},
    { id: "el-mid-55", word: "taxi", ipa: "/ˈtæk.si/", meaningKo: "택시", emoji: "🚕", desc: "돈을 내고 타는 자동차예요.", examples: [
      { en: "I take a taxi.", ko: "나는 택시를 타요." },
      { en: "The taxi is yellow.", ko: "그 택시는 노란색이에요." },
      { en: "We called a taxi.", ko: "우리는 택시를 불렀어요." },
    ]},
    { id: "el-mid-56", word: "boat", ipa: "/boʊt/", meaningKo: "보트", emoji: "🚤", desc: "작은 배예요.", examples: [
      { en: "I see a boat.", ko: "나는 보트를 봐요." },
      { en: "The boat is small.", ko: "그 보트는 작아요." },
      { en: "We row the boat.", ko: "우리는 보트를 저어요." },
    ]},
    { id: "el-mid-57", word: "doctor", ipa: "/ˈdɒk.tər/", meaningKo: "의사", emoji: "👨‍⚕️", desc: "아픈 사람을 치료하는 사람이에요.", examples: [
      { en: "My mom is a doctor.", ko: "우리 엄마는 의사예요." },
      { en: "The doctor helped me.", ko: "의사 선생님이 나를 도와줬어요." },
      { en: "I want to be a doctor.", ko: "나는 의사가 되고 싶어요." },
    ]},
    { id: "el-mid-58", word: "nurse", ipa: "/nɜːrs/", meaningKo: "간호사", emoji: "👩‍⚕️", desc: "병원에서 환자를 돌보는 사람이에요.", examples: [
      { en: "The nurse is kind.", ko: "그 간호사는 친절해요." },
      { en: "She is a nurse.", ko: "그녀는 간호사예요." },
      { en: "The nurse helped the patient.", ko: "간호사가 환자를 도와줬어요." },
    ]},
    { id: "el-mid-59", word: "police officer", ipa: "/pəˈliːs ˈɒf.ɪ.sər/", meaningKo: "경찰관", emoji: "👮", desc: "사람들을 안전하게 지켜주는 사람이에요.", examples: [
      { en: "The police officer helped us.", ko: "경찰관이 우리를 도와줬어요." },
      { en: "He is a police officer.", ko: "그는 경찰관이에요." },
      { en: "I want to be a police officer.", ko: "나는 경찰관이 되고 싶어요." },
    ]},
    { id: "el-mid-60", word: "firefighter", ipa: "/ˈfaɪər.faɪ.tər/", meaningKo: "소방관", emoji: "👨‍🚒", desc: "불을 끄는 사람이에요.", examples: [
      { en: "The firefighter is brave.", ko: "그 소방관은 용감해요." },
      { en: "She is a firefighter.", ko: "그녀는 소방관이에요." },
      { en: "Firefighters save people.", ko: "소방관들은 사람들을 구해요." },
    ]},
    { id: "el-mid-61", word: "farmer", ipa: "/ˈfɑːr.mər/", meaningKo: "농부", emoji: "👨‍🌾", desc: "농사를 짓는 사람이에요.", examples: [
      { en: "The farmer grows rice.", ko: "그 농부는 쌀을 길러요." },
      { en: "He is a farmer.", ko: "그는 농부예요." },
      { en: "Farmers work hard.", ko: "농부들은 열심히 일해요." },
    ]},
    { id: "el-mid-62", word: "singer", ipa: "/ˈsɪŋ.ər/", meaningKo: "가수", emoji: "🎤", desc: "노래를 부르는 사람이에요.", examples: [
      { en: "She is a singer.", ko: "그녀는 가수예요." },
      { en: "The singer sings well.", ko: "그 가수는 노래를 잘해요." },
      { en: "I want to be a singer.", ko: "나는 가수가 되고 싶어요." },
    ]},
    { id: "el-mid-63", word: "dancer", ipa: "/ˈdæn.sər/", meaningKo: "무용수", emoji: "💃", desc: "춤을 추는 사람이에요.", examples: [
      { en: "She is a dancer.", ko: "그녀는 무용수예요." },
      { en: "The dancer dances well.", ko: "그 무용수는 춤을 잘 춰요." },
      { en: "I want to be a dancer.", ko: "나는 무용수가 되고 싶어요." },
    ]},
    { id: "el-mid-64", word: "cook", ipa: "/kʊk/", meaningKo: "요리사", emoji: "👨‍🍳", desc: "음식을 만드는 사람이에요.", examples: [
      { en: "He is a cook.", ko: "그는 요리사예요." },
      { en: "The cook makes tasty food.", ko: "그 요리사는 맛있는 음식을 만들어요." },
      { en: "I want to be a cook.", ko: "나는 요리사가 되고 싶어요." },
    ]},
    { id: "el-mid-65", word: "driver", ipa: "/ˈdraɪ.vər/", meaningKo: "운전사", emoji: "🚗", desc: "차를 운전하는 사람이에요.", examples: [
      { en: "He is a bus driver.", ko: "그는 버스 운전사예요." },
      { en: "The driver is careful.", ko: "그 운전사는 조심스러워요." },
      { en: "My dad is a driver.", ko: "우리 아빠는 운전사예요." },
    ]},
    { id: "el-mid-66", word: "bank", ipa: "/bæŋk/", meaningKo: "은행", emoji: "🏦", desc: "돈을 맡기고 찾는 곳이에요.", examples: [
      { en: "I go to the bank.", ko: "나는 은행에 가요." },
      { en: "The bank is open.", ko: "은행이 열려 있어요." },
      { en: "My mom works at a bank.", ko: "우리 엄마는 은행에서 일해요." },
    ]},
    { id: "el-mid-67", word: "library", ipa: "/ˈlaɪ.brer.i/", meaningKo: "도서관", emoji: "📚", desc: "책을 빌리는 곳이에요.", examples: [
      { en: "I go to the library.", ko: "나는 도서관에 가요." },
      { en: "The library is quiet.", ko: "도서관은 조용해요." },
      { en: "I borrow books from the library.", ko: "나는 도서관에서 책을 빌려요." },
    ]},
    { id: "el-mid-68", word: "park", ipa: "/pɑːrk/", meaningKo: "공원", emoji: "🌳", desc: "나무와 놀이터가 있는 곳이에요.", examples: [
      { en: "I play at the park.", ko: "나는 공원에서 놀아요." },
      { en: "The park is big.", ko: "그 공원은 커요." },
      { en: "We walk in the park.", ko: "우리는 공원에서 걸어요." },
    ]},
    { id: "el-mid-69", word: "market", ipa: "/ˈmɑːr.kɪt/", meaningKo: "시장", emoji: "🏪", desc: "물건을 사고파는 곳이에요.", examples: [
      { en: "I go to the market.", ko: "나는 시장에 가요." },
      { en: "The market is busy.", ko: "시장은 붐벼요." },
      { en: "We buy vegetables at the market.", ko: "우리는 시장에서 채소를 사요." },
    ]},
    { id: "el-mid-70", word: "bakery", ipa: "/ˈbeɪ.kər.i/", meaningKo: "빵집", emoji: "🥐", desc: "빵을 파는 곳이에요.", examples: [
      { en: "I go to the bakery.", ko: "나는 빵집에 가요." },
      { en: "The bakery smells good.", ko: "빵집은 냄새가 좋아요." },
      { en: "We buy bread at the bakery.", ko: "우리는 빵집에서 빵을 사요." },
    ]},
    { id: "el-mid-71", word: "bookstore", ipa: "/ˈbʊk.stɔːr/", meaningKo: "서점", emoji: "📚", desc: "책을 파는 곳이에요.", examples: [
      { en: "I go to the bookstore.", ko: "나는 서점에 가요." },
      { en: "The bookstore has many books.", ko: "서점에는 책이 많아요." },
      { en: "I bought a book at the bookstore.", ko: "나는 서점에서 책을 샀어요." },
    ]},
    { id: "el-mid-72", word: "post office", ipa: "/poʊst ˈɒf.ɪs/", meaningKo: "우체국", emoji: "📮", desc: "편지와 소포를 보내는 곳이에요.", examples: [
      { en: "I go to the post office.", ko: "나는 우체국에 가요." },
      { en: "The post office is near my house.", ko: "우체국은 우리 집 근처에 있어요." },
      { en: "I sent a letter at the post office.", ko: "나는 우체국에서 편지를 보냈어요." },
    ]},
    { id: "el-mid-73", word: "station", ipa: "/ˈsteɪ.ʃən/", meaningKo: "역", emoji: "🚉", desc: "기차나 버스를 타는 곳이에요.", examples: [
      { en: "I wait at the station.", ko: "나는 역에서 기다려요." },
      { en: "The station is crowded.", ko: "역이 붐벼요." },
      { en: "Meet me at the station.", ko: "역에서 만나자." },
    ]},
    { id: "el-mid-74", word: "church", ipa: "/tʃɜːrtʃ/", meaningKo: "교회", emoji: "⛪", desc: "예배를 드리는 곳이에요.", examples: [
      { en: "I go to church.", ko: "나는 교회에 가요." },
      { en: "The church is old.", ko: "그 교회는 오래됐어요." },
      { en: "We sing at church.", ko: "우리는 교회에서 노래해요." },
    ]},
    { id: "el-mid-75", word: "bridge", ipa: "/brɪdʒ/", meaningKo: "다리", emoji: "🌉", desc: "강 위를 건너는 길이에요.", examples: [
      { en: "I cross the bridge.", ko: "나는 다리를 건너요." },
      { en: "The bridge is long.", ko: "그 다리는 길어요." },
      { en: "We walk over the bridge.", ko: "우리는 다리를 걸어서 건너요." },
    ]},
    { id: "el-mid-76", word: "soccer", ipa: "/ˈsɒk.ər/", meaningKo: "축구", emoji: "⚽", desc: "발로 공을 차는 운동이에요.", examples: [
      { en: "I play soccer.", ko: "나는 축구를 해요." },
      { en: "Soccer is fun.", ko: "축구는 재미있어요." },
      { en: "We watch soccer together.", ko: "우리는 같이 축구를 봐요." },
    ]},
    { id: "el-mid-77", word: "baseball", ipa: "/ˈbeɪs.bɔːl/", meaningKo: "야구", emoji: "⚾", desc: "방망이로 공을 치는 운동이에요.", examples: [
      { en: "I play baseball.", ko: "나는 야구를 해요." },
      { en: "Baseball is exciting.", ko: "야구는 신나요." },
      { en: "We watch baseball together.", ko: "우리는 같이 야구를 봐요." },
    ]},
    { id: "el-mid-78", word: "basketball", ipa: "/ˈbæs.kɪt.bɔːl/", meaningKo: "농구", emoji: "🏀", desc: "공을 바구니에 넣는 운동이에요.", examples: [
      { en: "I play basketball.", ko: "나는 농구를 해요." },
      { en: "Basketball is fun.", ko: "농구는 재미있어요." },
      { en: "We play basketball after school.", ko: "우리는 방과 후에 농구를 해요." },
    ]},
    { id: "el-mid-79", word: "tennis", ipa: "/ˈten.ɪs/", meaningKo: "테니스", emoji: "🎾", desc: "라켓으로 공을 치는 운동이에요.", examples: [
      { en: "I play tennis.", ko: "나는 테니스를 쳐요." },
      { en: "Tennis is fun.", ko: "테니스는 재미있어요." },
      { en: "We play tennis on weekends.", ko: "우리는 주말에 테니스를 쳐요." },
    ]},
    { id: "el-mid-80", word: "badminton", ipa: "/ˈbæd.mɪn.tən/", meaningKo: "배드민턴", emoji: "🏸", desc: "라켓으로 셔틀콕을 치는 운동이에요.", examples: [
      { en: "I play badminton.", ko: "나는 배드민턴을 쳐요." },
      { en: "Badminton is fun.", ko: "배드민턴은 재미있어요." },
      { en: "We play badminton in the park.", ko: "우리는 공원에서 배드민턴을 쳐요." },
    ]},
    { id: "el-mid-81", word: "swimming", ipa: "/ˈswɪm.ɪŋ/", meaningKo: "수영", emoji: "🏊", desc: "물속에서 헤엄치는 운동이에요.", examples: [
      { en: "I like swimming.", ko: "나는 수영을 좋아해요." },
      { en: "Swimming is fun.", ko: "수영은 재미있어요." },
      { en: "We go swimming in summer.", ko: "우리는 여름에 수영하러 가요." },
    ]},
    { id: "el-mid-82", word: "skate", ipa: "/skeɪt/", meaningKo: "스케이트를 타다", emoji: "⛸", desc: "얼음 위나 바퀴로 미끄러지듯 타는 것이에요.", examples: [
      { en: "I can skate.", ko: "나는 스케이트를 탈 수 있어요." },
      { en: "We skate in winter.", ko: "우리는 겨울에 스케이트를 타요." },
      { en: "Let's skate together.", ko: "같이 스케이트 타자." },
    ]},
    { id: "el-mid-83", word: "ski", ipa: "/skiː/", meaningKo: "스키를 타다", emoji: "🎿", desc: "눈 위를 미끄러지듯 타는 것이에요.", examples: [
      { en: "I can ski.", ko: "나는 스키를 탈 수 있어요." },
      { en: "We ski in winter.", ko: "우리는 겨울에 스키를 타요." },
      { en: "Let's ski together.", ko: "같이 스키 타자." },
    ]},
    { id: "el-mid-84", word: "camping", ipa: "/ˈkæm.pɪŋ/", meaningKo: "캠핑", emoji: "⛺", desc: "밖에서 텐트를 치고 지내는 활동이에요.", examples: [
      { en: "I like camping.", ko: "나는 캠핑을 좋아해요." },
      { en: "Camping is fun.", ko: "캠핑은 재미있어요." },
      { en: "We go camping in summer.", ko: "우리는 여름에 캠핑을 가요." },
    ]},
    { id: "el-mid-85", word: "math", ipa: "/mæθ/", meaningKo: "수학", emoji: "➗", desc: "숫자와 계산을 배우는 과목이에요.", examples: [
      { en: "I study math.", ko: "나는 수학을 공부해요." },
      { en: "Math is fun.", ko: "수학은 재미있어요." },
      { en: "I like math class.", ko: "나는 수학 수업이 좋아요." },
    ]},
    { id: "el-mid-86", word: "English", ipa: "/ˈɪŋ.glɪʃ/", meaningKo: "영어", emoji: "🔤", desc: "영어를 배우는 과목이에요.", examples: [
      { en: "I study English.", ko: "나는 영어를 공부해요." },
      { en: "English is fun.", ko: "영어는 재미있어요." },
      { en: "I like English class.", ko: "나는 영어 수업이 좋아요." },
    ]},
    { id: "el-mid-87", word: "art", ipa: "/ɑːrt/", meaningKo: "미술", emoji: "🎨", desc: "그림을 그리는 과목이에요.", examples: [
      { en: "I study art.", ko: "나는 미술을 공부해요." },
      { en: "Art is fun.", ko: "미술은 재미있어요." },
      { en: "I like art class.", ko: "나는 미술 수업이 좋아요." },
    ]},
    { id: "el-mid-88", word: "music", ipa: "/ˈmjuː.zɪk/", meaningKo: "음악", emoji: "🎵", desc: "노래와 악기를 배우는 과목이에요.", examples: [
      { en: "I study music.", ko: "나는 음악을 공부해요." },
      { en: "Music is fun.", ko: "음악은 재미있어요." },
      { en: "I like music class.", ko: "나는 음악 수업이 좋아요." },
    ]},
    { id: "el-mid-89", word: "PE", ipa: "/piː iː/", meaningKo: "체육", emoji: "🏃", desc: "몸을 움직여 운동하는 과목이에요.", examples: [
      { en: "I like PE.", ko: "나는 체육을 좋아해요." },
      { en: "PE is fun.", ko: "체육은 재미있어요." },
      { en: "We run in PE class.", ko: "우리는 체육 시간에 달려요." },
    ]},
    { id: "el-mid-90", word: "social studies", ipa: "/ˈsoʊ.ʃəl ˈstʌd.iz/", meaningKo: "사회", emoji: "🌍", desc: "사회와 세상을 배우는 과목이에요.", examples: [
      { en: "I study social studies.", ko: "나는 사회를 공부해요." },
      { en: "Social studies is interesting.", ko: "사회는 흥미로워요." },
      { en: "I like social studies class.", ko: "나는 사회 수업이 좋아요." },
    ]},
    { id: "el-mid-91", word: "Korean", ipa: "/kəˈriː.ən/", meaningKo: "국어", emoji: "📖", desc: "한국어를 배우는 과목이에요.", examples: [
      { en: "I study Korean.", ko: "나는 국어를 공부해요." },
      { en: "Korean is my favorite subject.", ko: "국어는 내가 가장 좋아하는 과목이에요." },
      { en: "I like Korean class.", ko: "나는 국어 수업이 좋아요." },
    ]},
    { id: "el-mid-92", word: "homework", ipa: "/ˈhoʊm.wɜːrk/", meaningKo: "숙제", emoji: "📝", desc: "학교에서 집으로 내주는 공부예요.", examples: [
      { en: "I do my homework.", ko: "나는 숙제를 해요." },
      { en: "My homework is hard.", ko: "내 숙제는 어려워요." },
      { en: "I finished my homework.", ko: "나는 숙제를 끝냈어요." },
    ]},
    { id: "el-mid-93", word: "angry", ipa: "/ˈæŋ.gri/", meaningKo: "화난", emoji: "😠", desc: "기분이 나쁘고 짜증 날 때예요.", examples: [
      { en: "I am angry.", ko: "나는 화가 나요." },
      { en: "He looks angry.", ko: "그는 화가 나 보여요." },
      { en: "Don't be angry.", ko: "화내지 마." },
    ]},
    { id: "el-mid-94", word: "scared", ipa: "/skerd/", meaningKo: "무서운", emoji: "😨", desc: "겁이 날 때 쓰는 말이에요.", examples: [
      { en: "I am scared.", ko: "나는 무서워요." },
      { en: "She looks scared.", ko: "그녀는 무서워 보여요." },
      { en: "Don't be scared.", ko: "무서워하지 마." },
    ]},
    { id: "el-mid-95", word: "surprised", ipa: "/sərˈpraɪzd/", meaningKo: "놀란", emoji: "😲", desc: "예상하지 못한 일에 놀랐을 때예요.", examples: [
      { en: "I am surprised.", ko: "나는 놀랐어요." },
      { en: "He looks surprised.", ko: "그는 놀란 것 같아요." },
      { en: "We were surprised by the news.", ko: "우리는 그 소식에 놀랐어요." },
    ]},
    { id: "el-mid-96", word: "tired", ipa: "/ˈtaɪərd/", meaningKo: "피곤한", emoji: "😪", desc: "쉬고 싶을 만큼 힘들 때예요.", examples: [
      { en: "I am tired.", ko: "나는 피곤해요." },
      { en: "She looks tired.", ko: "그녀는 피곤해 보여요." },
      { en: "I feel tired today.", ko: "나는 오늘 피곤해요." },
    ]},
    { id: "el-mid-97", word: "bored", ipa: "/bɔːrd/", meaningKo: "지루한", emoji: "🥱", desc: "재미가 없을 때예요.", examples: [
      { en: "I am bored.", ko: "나는 지루해요." },
      { en: "He looks bored.", ko: "그는 지루해 보여요." },
      { en: "I feel bored today.", ko: "나는 오늘 지루해요." },
    ]},
    { id: "el-mid-98", word: "excited", ipa: "/ɪkˈsaɪ.tɪd/", meaningKo: "신난", emoji: "🤩", desc: "아주 기쁘고 기대될 때예요.", examples: [
      { en: "I am excited.", ko: "나는 신나요." },
      { en: "She looks excited.", ko: "그녀는 신나 보여요." },
      { en: "We are excited about the trip.", ko: "우리는 여행이 기대돼요." },
    ]},
    { id: "el-mid-99", word: "nervous", ipa: "/ˈnɜːr.vəs/", meaningKo: "긴장한", emoji: "😬", desc: "떨리고 걱정될 때예요.", examples: [
      { en: "I am nervous.", ko: "나는 긴장돼요." },
      { en: "He looks nervous.", ko: "그는 긴장한 것 같아요." },
      { en: "I feel nervous before the test.", ko: "나는 시험 전에 긴장돼요." },
    ]},
    { id: "el-mid-100", word: "proud", ipa: "/praʊd/", meaningKo: "자랑스러운", emoji: "😌", desc: "뿌듯하고 자랑스러울 때예요.", examples: [
      { en: "I am proud of you.", ko: "나는 네가 자랑스러워." },
      { en: "She looks proud.", ko: "그녀는 자랑스러워 보여요." },
      { en: "My parents are proud of me.", ko: "부모님은 나를 자랑스러워하세요." },
    ]},
    { id: "el-mid-101", word: "in", ipa: "/ɪn/", meaningKo: "~안에", emoji: "📦", desc: "어떤 공간의 안쪽에 있다는 뜻이에요.", examples: [
      { en: "The cat is in the box.", ko: "고양이가 상자 안에 있어요." },
      { en: "I am in my room.", ko: "나는 내 방 안에 있어요." },
      { en: "The book is in my bag.", ko: "책이 내 가방 안에 있어요." },
    ]},
    { id: "el-mid-102", word: "on", ipa: "/ɒn/", meaningKo: "~위에", emoji: "📚", desc: "어떤 것의 표면 위에 있다는 뜻이에요.", examples: [
      { en: "The book is on the table.", ko: "책이 탁자 위에 있어요." },
      { en: "The cat is on the bed.", ko: "고양이가 침대 위에 있어요." },
      { en: "Put it on the desk.", ko: "그것을 책상 위에 놔." },
    ]},
    { id: "el-mid-103", word: "under", ipa: "/ˈʌn.dər/", meaningKo: "~아래에", emoji: "⬇️", desc: "어떤 것의 아래쪽에 있다는 뜻이에요.", examples: [
      { en: "The ball is under the chair.", ko: "공이 의자 아래에 있어요." },
      { en: "The cat is under the table.", ko: "고양이가 탁자 아래에 있어요." },
      { en: "My shoes are under the bed.", ko: "내 신발은 침대 아래에 있어요." },
    ]},
    { id: "el-mid-104", word: "behind", ipa: "/bɪˈhaɪnd/", meaningKo: "~뒤에", emoji: "⬅️", desc: "어떤 것의 뒤쪽에 있다는 뜻이에요.", examples: [
      { en: "The dog is behind the door.", ko: "개가 문 뒤에 있어요." },
      { en: "I sit behind him.", ko: "나는 그의 뒤에 앉아요." },
      { en: "The park is behind my house.", ko: "공원은 우리 집 뒤에 있어요." },
    ]},
    { id: "el-mid-105", word: "between", ipa: "/bɪˈtwiːn/", meaningKo: "~사이에", emoji: "↔️", desc: "두 개의 중간에 있다는 뜻이에요.", examples: [
      { en: "I sit between my friends.", ko: "나는 친구들 사이에 앉아요." },
      { en: "The park is between two houses.", ko: "공원은 두 집 사이에 있어요." },
      { en: "Choose between the two.", ko: "둘 중에서 골라." },
    ]},
    { id: "el-mid-106", word: "through", ipa: "/θruː/", meaningKo: "~을 통해", emoji: "🚪", desc: "어떤 것을 통과해서라는 뜻이에요.", examples: [
      { en: "We walked through the park.", ko: "우리는 공원을 통과해서 걸었어요." },
      { en: "The train goes through the tunnel.", ko: "기차는 터널을 통과해요." },
      { en: "Look through the window.", ko: "창문을 통해 봐." },
    ]},
    { id: "el-mid-107", word: "heavy", ipa: "/ˈhev.i/", meaningKo: "무거운", emoji: "🏋️", desc: "무게가 많이 나간다는 뜻이에요.", examples: [
      { en: "The box is heavy.", ko: "그 상자는 무거워요." },
      { en: "My bag is heavy.", ko: "내 가방은 무거워요." },
      { en: "This book is heavy.", ko: "이 책은 무거워요." },
    ]},
    { id: "el-mid-108", word: "light", ipa: "/laɪt/", meaningKo: "가벼운", emoji: "🪶", desc: "무게가 적게 나간다는 뜻이에요.", examples: [
      { en: "The box is light.", ko: "그 상자는 가벼워요." },
      { en: "My bag is light.", ko: "내 가방은 가벼워요." },
      { en: "This pillow is light.", ko: "이 베개는 가벼워요." },
    ]},
    { id: "el-mid-109", word: "wide", ipa: "/waɪd/", meaningKo: "넓은", emoji: "↔️", desc: "폭이 크다는 뜻이에요.", examples: [
      { en: "The road is wide.", ko: "그 길은 넓어요." },
      { en: "The river is wide.", ko: "그 강은 넓어요." },
      { en: "This desk is wide.", ko: "이 책상은 넓어요." },
    ]},
    { id: "el-mid-110", word: "narrow", ipa: "/ˈnær.oʊ/", meaningKo: "좁은", emoji: "↔️", desc: "폭이 작다는 뜻이에요.", examples: [
      { en: "The road is narrow.", ko: "그 길은 좁아요." },
      { en: "The alley is narrow.", ko: "그 골목은 좁아요." },
      { en: "This room is narrow.", ko: "이 방은 좁아요." },
    ]},
    { id: "el-mid-111", word: "full", ipa: "/fʊl/", meaningKo: "가득 찬", emoji: "🈵", desc: "빈 곳 없이 가득하다는 뜻이에요.", examples: [
      { en: "The cup is full.", ko: "컵이 가득 찼어요." },
      { en: "My stomach is full.", ko: "내 배는 가득 찼어요." },
      { en: "The bus is full.", ko: "버스가 가득 찼어요." },
    ]},
    { id: "el-mid-112", word: "empty", ipa: "/ˈemp.ti/", meaningKo: "빈", emoji: "⬜", desc: "안에 아무것도 없다는 뜻이에요.", examples: [
      { en: "The cup is empty.", ko: "컵이 비어 있어요." },
      { en: "The room is empty.", ko: "방이 비어 있어요." },
      { en: "My bag is empty.", ko: "내 가방은 비어 있어요." },
    ]},
    { id: "el-mid-113", word: "quiet", ipa: "/ˈkwaɪ.ət/", meaningKo: "조용한", emoji: "🤫", desc: "소리가 나지 않는다는 뜻이에요.", examples: [
      { en: "The library is quiet.", ko: "도서관은 조용해요." },
      { en: "Be quiet, please.", ko: "조용히 해 주세요." },
      { en: "The room is quiet.", ko: "방이 조용해요." },
    ]},
    { id: "el-mid-114", word: "loud", ipa: "/laʊd/", meaningKo: "시끄러운", emoji: "📢", desc: "소리가 크다는 뜻이에요.", examples: [
      { en: "The music is loud.", ko: "음악이 시끄러워요." },
      { en: "He has a loud voice.", ko: "그는 목소리가 커요." },
      { en: "The city is loud.", ko: "도시는 시끄러워요." },
    ]},
    { id: "el-mid-115", word: "buy", ipa: "/baɪ/", meaningKo: "사다", emoji: "🛒", desc: "돈을 주고 물건을 얻는 것이에요.", examples: [
      { en: "I buy a book.", ko: "나는 책을 사요." },
      { en: "I want to buy this toy.", ko: "나는 이 장난감을 사고 싶어요." },
      { en: "We buy food at the market.", ko: "우리는 시장에서 음식을 사요." },
    ]},
    { id: "el-mid-116", word: "sell", ipa: "/sel/", meaningKo: "팔다", emoji: "💰", desc: "물건을 주고 돈을 받는 것이에요.", examples: [
      { en: "They sell fruit.", ko: "그들은 과일을 팔아요." },
      { en: "The store sells toys.", ko: "그 가게는 장난감을 팔아요." },
      { en: "He sells vegetables.", ko: "그는 채소를 팔아요." },
    ]},
    { id: "el-mid-117", word: "borrow", ipa: "/ˈbɒr.oʊ/", meaningKo: "빌리다", emoji: "🤲", desc: "남의 물건을 잠깐 가져다 쓰는 것이에요.", examples: [
      { en: "I borrow a book.", ko: "나는 책을 빌려요." },
      { en: "Can I borrow your pen?", ko: "네 펜을 빌릴 수 있을까?" },
      { en: "I borrowed money from my friend.", ko: "나는 친구에게 돈을 빌렸어요." },
    ]},
    { id: "el-mid-118", word: "clean", ipa: "/kliːn/", meaningKo: "청소하다/깨끗한", emoji: "🧹", desc: "더러운 것을 깨끗하게 하는 것이에요.", examples: [
      { en: "I clean my room.", ko: "나는 내 방을 청소해요." },
      { en: "The room is clean.", ko: "그 방은 깨끗해요." },
      { en: "Let's clean together.", ko: "같이 청소하자." },
    ]},
    { id: "el-mid-119", word: "bake", ipa: "/beɪk/", meaningKo: "굽다", emoji: "🥧", desc: "오븐에 넣어 빵이나 과자를 만드는 것이에요.", examples: [
      { en: "I bake cookies.", ko: "나는 쿠키를 구워요." },
      { en: "She bakes bread.", ko: "그녀는 빵을 구워요." },
      { en: "We bake a cake together.", ko: "우리는 같이 케이크를 구워요." },
    ]},
    { id: "el-mid-120", word: "wash", ipa: "/wɒʃ/", meaningKo: "씻다", emoji: "🧼", desc: "물로 깨끗하게 하는 것이에요.", examples: [
      { en: "I wash my hands.", ko: "나는 손을 씻어요." },
      { en: "Wash the dishes.", ko: "설거지를 해." },
      { en: "I wash my face every morning.", ko: "나는 매일 아침 세수를 해요." },
    ]},
  ],

  "elementary-high": [
    { id: "el-high-01", word: "environment", ipa: "/ɪnˈvaɪ.rən.mənt/", meaningKo: "환경", emoji: "🌍", desc: "우리를 둘러싼 자연과 세상을 말해요.", examples: [
      { en: "We should protect the environment.", ko: "우리는 환경을 보호해야 해요." },
      { en: "Pollution harms the environment.", ko: "오염은 환경에 해를 끼쳐요." },
      { en: "A clean environment makes us healthy.", ko: "깨끗한 환경은 우리를 건강하게 해요." },
    ]},
    { id: "el-high-02", word: "festival", ipa: "/ˈfes.tɪ.vəl/", meaningKo: "축제", emoji: "🎉", desc: "여러 사람이 모여 즐기는 행사예요.", examples: [
      { en: "We enjoyed the music festival.", ko: "우리는 음악 축제를 즐겼어요." },
      { en: "The town holds a festival every year.", ko: "그 마을은 매년 축제를 열어요." },
      { en: "The festival was full of fun activities.", ko: "축제에는 재미있는 활동이 가득했어요." },
    ]},
    { id: "el-high-03", word: "invention", ipa: "/ɪnˈven.ʃən/", meaningKo: "발명품", emoji: "💡", desc: "새롭게 만들어낸 물건이나 아이디어예요.", examples: [
      { en: "The light bulb is a famous invention.", ko: "전구는 유명한 발명품이에요." },
      { en: "His invention helped many people.", ko: "그의 발명품은 많은 사람을 도왔어요." },
      { en: "She is working on a new invention.", ko: "그녀는 새로운 발명품을 만들고 있어요." },
    ]},
    { id: "el-high-04", word: "adventure", ipa: "/ədˈven.tʃər/", meaningKo: "모험", emoji: "🗺", desc: "위험하지만 신나는 경험이에요.", examples: [
      { en: "We went on an adventure.", ko: "우리는 모험을 떠났어요." },
      { en: "The movie is full of adventure.", ko: "그 영화는 모험으로 가득해요." },
      { en: "Life is an adventure.", ko: "인생은 모험이에요." },
    ]},
    { id: "el-high-05", word: "discover", ipa: "/dɪˈskʌv.ər/", meaningKo: "발견하다", emoji: "🔍", desc: "몰랐던 것을 새로 찾아내는 것이에요.", examples: [
      { en: "Scientists discover new stars.", ko: "과학자들은 새로운 별을 발견해요." },
      { en: "I discovered a new hobby.", ko: "나는 새로운 취미를 발견했어요." },
      { en: "They discovered an old map.", ko: "그들은 오래된 지도를 발견했어요." },
    ]},
    { id: "el-high-06", word: "community", ipa: "/kəˈmjuː.nə.ti/", meaningKo: "공동체/지역사회", emoji: "🏘", desc: "함께 사는 사람들의 모임이에요.", examples: [
      { en: "Our community is friendly.", ko: "우리 지역사회는 친절해요." },
      { en: "We help our community.", ko: "우리는 지역사회를 도와요." },
      { en: "The community built a new park.", ko: "지역사회가 새 공원을 만들었어요." },
    ]},
    { id: "el-high-07", word: "volunteer", ipa: "/ˌvɒl.ənˈtɪr/", meaningKo: "자원봉사자", emoji: "🙋", desc: "돈을 받지 않고 스스로 돕는 사람이에요.", examples: [
      { en: "She works as a volunteer.", ko: "그녀는 자원봉사자로 일해요." },
      { en: "He volunteered to help clean the park.", ko: "그는 공원 청소를 자원했어요." },
      { en: "Volunteers are important to our community.", ko: "자원봉사자들은 지역사회에 중요해요." },
    ]},
    { id: "el-high-08", word: "exercise", ipa: "/ˈek.sər.saɪz/", meaningKo: "운동", emoji: "🏃", desc: "몸을 튼튼하게 하려고 하는 활동이에요.", examples: [
      { en: "I exercise every morning.", ko: "나는 매일 아침 운동해요." },
      { en: "Exercise keeps you healthy.", ko: "운동은 건강을 유지시켜요." },
      { en: "We did exercise in gym class.", ko: "우리는 체육 시간에 운동을 했어요." },
    ]},
    { id: "el-high-09", word: "healthy", ipa: "/ˈhel.θi/", meaningKo: "건강한", emoji: "🥦", desc: "몸이 튼튼하고 아프지 않은 상태예요.", examples: [
      { en: "Eat healthy food.", ko: "건강한 음식을 먹어." },
      { en: "She is very healthy.", ko: "그녀는 아주 건강해요." },
      { en: "A healthy diet is important.", ko: "건강한 식단은 중요해요." },
    ]},
    { id: "el-high-10", word: "recycle", ipa: "/ˌriːˈsaɪ.kəl/", meaningKo: "재활용하다", emoji: "♻️", desc: "쓰던 물건을 다시 쓸 수 있게 만드는 것이에요.", examples: [
      { en: "We recycle paper and plastic.", ko: "우리는 종이와 플라스틱을 재활용해요." },
      { en: "Please recycle this bottle.", ko: "이 병을 재활용해 주세요." },
      { en: "Recycling helps the environment.", ko: "재활용은 환경에 도움이 돼요." },
    ]},
    { id: "el-high-11", word: "museum", ipa: "/mjuːˈziː.əm/", meaningKo: "박물관", emoji: "🏛", desc: "옛날 물건이나 예술품을 전시하는 곳이에요.", examples: [
      { en: "We visited a museum.", ko: "우리는 박물관을 방문했어요." },
      { en: "The museum has old paintings.", ko: "그 박물관에는 오래된 그림이 있어요." },
      { en: "I learned history at the museum.", ko: "나는 박물관에서 역사를 배웠어요." },
    ]},
    { id: "el-high-12", word: "history", ipa: "/ˈhɪs.tər.i/", meaningKo: "역사", emoji: "📜", desc: "과거에 있었던 일들을 말해요.", examples: [
      { en: "I like studying history.", ko: "나는 역사 공부를 좋아해요." },
      { en: "This building has a long history.", ko: "이 건물은 오랜 역사를 가지고 있어요." },
      { en: "History teaches us many lessons.", ko: "역사는 우리에게 많은 교훈을 줘요." },
    ]},
    { id: "el-high-13", word: "science", ipa: "/ˈsaɪ.əns/", meaningKo: "과학", emoji: "🔬", desc: "자연을 연구하는 학문이에요.", examples: [
      { en: "I enjoy science class.", ko: "나는 과학 수업을 즐겨요." },
      { en: "Science helps us understand the world.", ko: "과학은 세상을 이해하는 데 도움을 줘요." },
      { en: "We did a science experiment.", ko: "우리는 과학 실험을 했어요." },
    ]},
    { id: "el-high-14", word: "experiment", ipa: "/ɪkˈsper.ə.mənt/", meaningKo: "실험", emoji: "🧪", desc: "무언가를 알아보기 위해 시험해보는 것이에요.", examples: [
      { en: "We did an experiment in class.", ko: "우리는 수업에서 실험을 했어요." },
      { en: "The experiment was successful.", ko: "그 실험은 성공적이었어요." },
      { en: "Scientists run many experiments.", ko: "과학자들은 많은 실험을 해요." },
    ]},
    { id: "el-high-15", word: "continent", ipa: "/ˈkɒn.tɪ.nənt/", meaningKo: "대륙", emoji: "🗺", desc: "아주 넓은 땅덩어리예요.", examples: [
      { en: "Asia is the largest continent.", ko: "아시아는 가장 큰 대륙이에요." },
      { en: "There are seven continents.", ko: "대륙은 일곱 개가 있어요." },
      { en: "Africa is a continent.", ko: "아프리카는 대륙이에요." },
    ]},
    { id: "el-high-16", word: "planet", ipa: "/ˈplæn.ɪt/", meaningKo: "행성", emoji: "🪐", desc: "태양 주위를 도는 큰 별 같은 천체예요.", examples: [
      { en: "Earth is our planet.", ko: "지구는 우리의 행성이에요." },
      { en: "Mars is a red planet.", ko: "화성은 붉은 행성이에요." },
      { en: "There are eight planets in our solar system.", ko: "태양계에는 행성이 여덟 개 있어요." },
    ]},
    { id: "el-high-17", word: "ancient", ipa: "/ˈeɪn.ʃənt/", meaningKo: "고대의", emoji: "🏺", desc: "아주 오래된 옛날의 것을 말해요.", examples: [
      { en: "We studied ancient Egypt.", ko: "우리는 고대 이집트를 공부했어요." },
      { en: "The ancient castle is famous.", ko: "그 고대 성은 유명해요." },
      { en: "Ancient people used stone tools.", ko: "고대 사람들은 돌 도구를 사용했어요." },
    ]},
    { id: "el-high-18", word: "traditional", ipa: "/trəˈdɪʃ.ən.əl/", meaningKo: "전통적인", emoji: "🎎", desc: "옛날부터 이어져 온 방식이에요.", examples: [
      { en: "We wear traditional clothes.", ko: "우리는 전통 옷을 입어요." },
      { en: "This is a traditional dance.", ko: "이것은 전통 춤이에요." },
      { en: "My grandmother cooks traditional food.", ko: "할머니는 전통 음식을 요리하세요." },
    ]},
    { id: "el-high-19", word: "curious", ipa: "/ˈkjʊr.i.əs/", meaningKo: "호기심 많은", emoji: "🧐", desc: "궁금한 것이 많은 성격이에요.", examples: [
      { en: "I am curious about space.", ko: "나는 우주가 궁금해요." },
      { en: "She is a curious child.", ko: "그녀는 호기심 많은 아이예요." },
      { en: "He asked a curious question.", ko: "그는 호기심 어린 질문을 했어요." },
    ]},
    { id: "el-high-20", word: "imagine", ipa: "/ɪˈmædʒ.ɪn/", meaningKo: "상상하다", emoji: "💭", desc: "머릿속으로 그려보는 것이에요.", examples: [
      { en: "Imagine a world without cars.", ko: "자동차가 없는 세상을 상상해봐." },
      { en: "I can imagine that.", ko: "나는 그것을 상상할 수 있어요." },
      { en: "Let's imagine a better future.", ko: "더 나은 미래를 상상해보자." },
    ]},
    { id: "el-high-21", word: "ocean", ipa: "/ˈoʊ.ʃən/", meaningKo: "바다/대양", emoji: "🌊", desc: "아주 넓고 큰 바닷물이에요.", examples: [
      { en: "The ocean is deep.", ko: "그 바다는 깊어요." },
      { en: "We swim in the ocean.", ko: "우리는 바다에서 수영해요." },
      { en: "The Pacific is the biggest ocean.", ko: "태평양은 가장 큰 대양이에요." },
    ]},
    { id: "el-high-22", word: "forest", ipa: "/ˈfɒr.ɪst/", meaningKo: "숲", emoji: "🌲", desc: "나무가 많이 있는 넓은 곳이에요.", examples: [
      { en: "We hike in the forest.", ko: "우리는 숲에서 등산해요." },
      { en: "The forest is green.", ko: "그 숲은 초록색이에요." },
      { en: "Animals live in the forest.", ko: "동물들은 숲에 살아요." },
    ]},
    { id: "el-high-23", word: "desert", ipa: "/ˈdez.ərt/", meaningKo: "사막", emoji: "🏜", desc: "모래가 많고 비가 적게 오는 땅이에요.", examples: [
      { en: "The desert is dry.", ko: "그 사막은 건조해요." },
      { en: "It is hot in the desert.", ko: "사막은 더워요." },
      { en: "Camels live in the desert.", ko: "낙타는 사막에 살아요." },
    ]},
    { id: "el-high-24", word: "island", ipa: "/ˈaɪ.lənd/", meaningKo: "섬", emoji: "🏝", desc: "바다로 둘러싸인 땅이에요.", examples: [
      { en: "We visited an island.", ko: "우리는 섬을 방문했어요." },
      { en: "The island is beautiful.", ko: "그 섬은 아름다워요." },
      { en: "Jeju is a famous island.", ko: "제주는 유명한 섬이에요." },
    ]},
    { id: "el-high-25", word: "volcano", ipa: "/vɒlˈkeɪ.noʊ/", meaningKo: "화산", emoji: "🌋", desc: "뜨거운 용암이 나오는 산이에요.", examples: [
      { en: "The volcano erupted.", ko: "화산이 폭발했어요." },
      { en: "The volcano is dangerous.", ko: "그 화산은 위험해요." },
      { en: "We saw a volcano.", ko: "우리는 화산을 봤어요." },
    ]},
    { id: "el-high-26", word: "earthquake", ipa: "/ˈɜːrθ.kweɪk/", meaningKo: "지진", emoji: "🌍", desc: "땅이 흔들리는 자연 현상이에요.", examples: [
      { en: "The earthquake was strong.", ko: "그 지진은 강했어요." },
      { en: "We felt an earthquake.", ko: "우리는 지진을 느꼈어요." },
      { en: "Earthquakes can be dangerous.", ko: "지진은 위험할 수 있어요." },
    ]},
    { id: "el-high-27", word: "gravity", ipa: "/ˈgræv.ə.ti/", meaningKo: "중력", emoji: "🌎", desc: "물건을 아래로 끌어당기는 힘이에요.", examples: [
      { en: "Gravity pulls things down.", ko: "중력은 물건을 아래로 끌어당겨요." },
      { en: "We learned about gravity.", ko: "우리는 중력에 대해 배웠어요." },
      { en: "Gravity keeps us on the ground.", ko: "중력은 우리를 땅에 붙어 있게 해요." },
    ]},
    { id: "el-high-28", word: "energy", ipa: "/ˈen.ər.dʒi/", meaningKo: "에너지", emoji: "⚡", desc: "일을 할 수 있게 하는 힘이에요.", examples: [
      { en: "We need energy.", ko: "우리는 에너지가 필요해요." },
      { en: "Solar energy is clean.", ko: "태양 에너지는 깨끗해요." },
      { en: "I have a lot of energy.", ko: "나는 에너지가 넘쳐요." },
    ]},
    { id: "el-high-29", word: "electricity", ipa: "/ɪˌlekˈtrɪs.ə.ti/", meaningKo: "전기", emoji: "🔌", desc: "기계를 움직이게 하는 힘이에요.", examples: [
      { en: "We use electricity every day.", ko: "우리는 매일 전기를 사용해요." },
      { en: "Electricity powers our home.", ko: "전기는 우리 집에 힘을 줘요." },
      { en: "Save electricity.", ko: "전기를 아끼자." },
    ]},
    { id: "el-high-30", word: "mineral", ipa: "/ˈmɪn.ər.əl/", meaningKo: "광물", emoji: "💎", desc: "땅속에서 나는 단단한 물질이에요.", examples: [
      { en: "Rocks contain minerals.", ko: "바위는 광물을 포함해요." },
      { en: "This mineral is rare.", ko: "이 광물은 희귀해요." },
      { en: "Minerals are useful.", ko: "광물은 유용해요." },
    ]},
    { id: "el-high-31", word: "atmosphere", ipa: "/ˈæt.mə.sfɪr/", meaningKo: "대기", emoji: "🌫", desc: "지구를 둘러싼 공기층이에요.", examples: [
      { en: "The atmosphere protects Earth.", ko: "대기는 지구를 보호해요." },
      { en: "We study the atmosphere.", ko: "우리는 대기를 공부해요." },
      { en: "The atmosphere has many layers.", ko: "대기는 여러 층으로 이루어져 있어요." },
    ]},
    { id: "el-high-32", word: "ecosystem", ipa: "/ˈiː.koʊ.sɪs.təm/", meaningKo: "생태계", emoji: "🌱", desc: "생물과 환경이 함께 이루는 체계예요.", examples: [
      { en: "We protect the ecosystem.", ko: "우리는 생태계를 보호해요." },
      { en: "The ecosystem is balanced.", ko: "그 생태계는 균형이 잡혀 있어요." },
      { en: "Forests are important ecosystems.", ko: "숲은 중요한 생태계예요." },
    ]},
    { id: "el-high-33", word: "temperature", ipa: "/ˈtem.pər.ə.tʃər/", meaningKo: "온도/기온", emoji: "🌡", desc: "얼마나 뜨겁거나 차가운지 나타내는 것이에요.", examples: [
      { en: "The temperature is high.", ko: "기온이 높아요." },
      { en: "Check the temperature.", ko: "온도를 확인해." },
      { en: "The temperature dropped today.", ko: "오늘 기온이 떨어졌어요." },
    ]},
    { id: "el-high-34", word: "climate", ipa: "/ˈklaɪ.mət/", meaningKo: "기후", emoji: "🌦", desc: "한 지역의 오랜 날씨 패턴이에요.", examples: [
      { en: "The climate is changing.", ko: "기후가 변하고 있어요." },
      { en: "Korea has a four-season climate.", ko: "한국은 사계절 기후예요." },
      { en: "We study climate at school.", ko: "우리는 학교에서 기후를 공부해요." },
    ]},
    { id: "el-high-35", word: "humid", ipa: "/ˈhjuː.mɪd/", meaningKo: "습한", emoji: "💦", desc: "공기 중에 물기가 많다는 뜻이에요.", examples: [
      { en: "It is humid today.", ko: "오늘은 습해요." },
      { en: "Summer is humid.", ko: "여름은 습해요." },
      { en: "The weather feels humid.", ko: "날씨가 습하게 느껴져요." },
    ]},
    { id: "el-high-36", word: "storm", ipa: "/stɔːrm/", meaningKo: "폭풍", emoji: "⛈", desc: "강한 바람과 비가 함께 오는 날씨예요.", examples: [
      { en: "A storm is coming.", ko: "폭풍이 오고 있어요." },
      { en: "The storm was strong.", ko: "그 폭풍은 강했어요." },
      { en: "We stayed inside during the storm.", ko: "우리는 폭풍이 부는 동안 안에 있었어요." },
    ]},
    { id: "el-high-37", word: "thunder", ipa: "/ˈθʌn.dər/", meaningKo: "천둥", emoji: "🌩", desc: "번개 뒤에 들리는 큰 소리예요.", examples: [
      { en: "I hear thunder.", ko: "나는 천둥소리를 들어요." },
      { en: "Thunder is loud.", ko: "천둥은 시끄러워요." },
      { en: "The thunder scared me.", ko: "천둥이 나를 놀라게 했어요." },
    ]},
    { id: "el-high-38", word: "lightning", ipa: "/ˈlaɪt.nɪŋ/", meaningKo: "번개", emoji: "⚡", desc: "하늘에서 번쩍이는 빛이에요.", examples: [
      { en: "I see lightning.", ko: "나는 번개를 봐요." },
      { en: "Lightning is bright.", ko: "번개는 밝아요." },
      { en: "Lightning struck the tree.", ko: "번개가 나무에 쳤어요." },
    ]},
    { id: "el-high-39", word: "skeleton", ipa: "/ˈskel.ə.tən/", meaningKo: "뼈대/골격", emoji: "🦴", desc: "몸을 지탱하는 뼈들의 구조예요.", examples: [
      { en: "The skeleton supports our body.", ko: "골격은 몸을 지탱해요." },
      { en: "We studied the human skeleton.", ko: "우리는 인체 골격을 공부했어요." },
      { en: "A skeleton has many bones.", ko: "골격은 많은 뼈로 이루어져 있어요." },
    ]},
    { id: "el-high-40", word: "muscle", ipa: "/ˈmʌs.əl/", meaningKo: "근육", emoji: "💪", desc: "몸을 움직이게 하는 부분이에요.", examples: [
      { en: "I exercise my muscles.", ko: "나는 근육을 운동시켜요." },
      { en: "Muscles help us move.", ko: "근육은 우리가 움직이게 도와줘요." },
      { en: "My muscles are strong.", ko: "내 근육은 강해요." },
    ]},
    { id: "el-high-41", word: "brain", ipa: "/breɪn/", meaningKo: "뇌", emoji: "🧠", desc: "생각하고 기억하는 몸의 기관이에요.", examples: [
      { en: "The brain controls our body.", ko: "뇌는 우리 몸을 조절해요." },
      { en: "We use our brain to think.", ko: "우리는 뇌로 생각해요." },
      { en: "The brain is amazing.", ko: "뇌는 놀라워요." },
    ]},
    { id: "el-high-42", word: "heart", ipa: "/hɑːrt/", meaningKo: "심장", emoji: "❤️", desc: "피를 온몸으로 보내는 기관이에요.", examples: [
      { en: "My heart beats fast.", ko: "내 심장이 빨리 뛰어요." },
      { en: "The heart pumps blood.", ko: "심장은 피를 펌프질해요." },
      { en: "Take care of your heart.", ko: "심장을 잘 돌봐." },
    ]},
    { id: "el-high-43", word: "lungs", ipa: "/lʌŋz/", meaningKo: "폐", emoji: "🫁", desc: "숨을 쉬게 해주는 기관이에요.", examples: [
      { en: "We breathe with our lungs.", ko: "우리는 폐로 숨을 쉬어요." },
      { en: "The lungs need clean air.", ko: "폐는 깨끗한 공기가 필요해요." },
      { en: "My lungs feel healthy.", ko: "내 폐는 건강한 것 같아요." },
    ]},
    { id: "el-high-44", word: "blood", ipa: "/blʌd/", meaningKo: "피", emoji: "🩸", desc: "몸속을 흐르는 빨간 액체예요.", examples: [
      { en: "Blood carries oxygen.", ko: "피는 산소를 운반해요." },
      { en: "I saw blood.", ko: "나는 피를 봤어요." },
      { en: "Blood flows through our body.", ko: "피는 우리 몸속을 흘러요." },
    ]},
    { id: "el-high-45", word: "disease", ipa: "/dɪˈziːz/", meaningKo: "질병", emoji: "🤒", desc: "몸이 아픈 상태예요.", examples: [
      { en: "We prevent disease.", ko: "우리는 질병을 예방해요." },
      { en: "The disease spread quickly.", ko: "그 질병은 빠르게 퍼졌어요." },
      { en: "Doctors treat disease.", ko: "의사는 질병을 치료해요." },
    ]},
    { id: "el-high-46", word: "medicine", ipa: "/ˈmed.ə.sən/", meaningKo: "약", emoji: "💊", desc: "아플 때 먹는 것이에요.", examples: [
      { en: "I take medicine.", ko: "나는 약을 먹어요." },
      { en: "The medicine helped me.", ko: "그 약이 나를 도와줬어요." },
      { en: "This medicine tastes bad.", ko: "이 약은 맛이 나빠요." },
    ]},
    { id: "el-high-47", word: "universe", ipa: "/ˈjuː.nɪ.vɜːrs/", meaningKo: "우주", emoji: "🌌", desc: "모든 별과 행성을 포함하는 공간이에요.", examples: [
      { en: "The universe is huge.", ko: "우주는 아주 커요." },
      { en: "We study the universe.", ko: "우리는 우주를 공부해요." },
      { en: "The universe has many galaxies.", ko: "우주에는 많은 은하가 있어요." },
    ]},
    { id: "el-high-48", word: "galaxy", ipa: "/ˈgæl.ək.si/", meaningKo: "은하", emoji: "🌠", desc: "수많은 별들이 모여 있는 것이에요.", examples: [
      { en: "Our galaxy is the Milky Way.", ko: "우리 은하는 은하수예요." },
      { en: "The galaxy is huge.", ko: "그 은하는 아주 커요." },
      { en: "There are many galaxies.", ko: "은하는 아주 많아요." },
    ]},
    { id: "el-high-49", word: "astronaut", ipa: "/ˈæs.trə.nɔːt/", meaningKo: "우주비행사", emoji: "👨‍🚀", desc: "우주로 가는 사람이에요.", examples: [
      { en: "The astronaut flew to space.", ko: "그 우주비행사는 우주로 날아갔어요." },
      { en: "I want to be an astronaut.", ko: "나는 우주비행사가 되고 싶어요." },
      { en: "Astronauts wear special suits.", ko: "우주비행사는 특별한 옷을 입어요." },
    ]},
    { id: "el-high-50", word: "satellite", ipa: "/ˈsæt.əl.aɪt/", meaningKo: "인공위성", emoji: "🛰", desc: "지구 주위를 도는 기계예요.", examples: [
      { en: "The satellite orbits Earth.", ko: "그 인공위성은 지구 주위를 돌아요." },
      { en: "We use satellites for GPS.", ko: "우리는 GPS에 인공위성을 사용해요." },
      { en: "The satellite sends signals.", ko: "인공위성은 신호를 보내요." },
    ]},
    { id: "el-high-51", word: "telescope", ipa: "/ˈtel.ə.skoʊp/", meaningKo: "망원경", emoji: "🔭", desc: "멀리 있는 것을 크게 보는 도구예요.", examples: [
      { en: "I look through a telescope.", ko: "나는 망원경으로 봐요." },
      { en: "The telescope shows stars.", ko: "망원경은 별을 보여줘요." },
      { en: "We used a telescope.", ko: "우리는 망원경을 사용했어요." },
    ]},
    { id: "el-high-52", word: "orbit", ipa: "/ˈɔːr.bɪt/", meaningKo: "궤도", emoji: "🪐", desc: "행성이 도는 길이에요.", examples: [
      { en: "Earth orbits the sun.", ko: "지구는 태양 궤도를 돌아요." },
      { en: "The moon has an orbit.", ko: "달은 궤도가 있어요." },
      { en: "Satellites orbit Earth.", ko: "인공위성은 지구 궤도를 돌아요." },
    ]},
    { id: "el-high-53", word: "comet", ipa: "/ˈkɒm.ɪt/", meaningKo: "혜성", emoji: "☄️", desc: "긴 꼬리를 가진 우주의 얼음 덩어리예요.", examples: [
      { en: "We saw a comet.", ko: "우리는 혜성을 봤어요." },
      { en: "The comet has a tail.", ko: "그 혜성은 꼬리가 있어요." },
      { en: "Comets travel through space.", ko: "혜성은 우주를 이동해요." },
    ]},
    { id: "el-high-54", word: "spacecraft", ipa: "/ˈspeɪs.kræft/", meaningKo: "우주선", emoji: "🚀", desc: "우주로 가는 탈것이에요.", examples: [
      { en: "The spacecraft launched.", ko: "우주선이 발사됐어요." },
      { en: "We built a spacecraft.", ko: "우리는 우주선을 만들었어요." },
      { en: "The spacecraft reached the moon.", ko: "우주선이 달에 도착했어요." },
    ]},
    { id: "el-high-55", word: "computer", ipa: "/kəmˈpjuː.tər/", meaningKo: "컴퓨터", emoji: "💻", desc: "정보를 처리하는 기계예요.", examples: [
      { en: "I use a computer.", ko: "나는 컴퓨터를 사용해요." },
      { en: "The computer is fast.", ko: "그 컴퓨터는 빨라요." },
      { en: "I do my homework on the computer.", ko: "나는 컴퓨터로 숙제를 해요." },
    ]},
    { id: "el-high-56", word: "internet", ipa: "/ˈɪn.tər.net/", meaningKo: "인터넷", emoji: "🌐", desc: "전 세계를 연결하는 통신망이에요.", examples: [
      { en: "I use the internet.", ko: "나는 인터넷을 사용해요." },
      { en: "The internet is useful.", ko: "인터넷은 유용해요." },
      { en: "I search on the internet.", ko: "나는 인터넷에서 검색해요." },
    ]},
    { id: "el-high-57", word: "robot", ipa: "/ˈroʊ.bɒt/", meaningKo: "로봇", emoji: "🤖", desc: "사람을 대신해 일하는 기계예요.", examples: [
      { en: "The robot can walk.", ko: "그 로봇은 걸을 수 있어요." },
      { en: "I like robots.", ko: "나는 로봇을 좋아해요." },
      { en: "The robot helps us.", ko: "그 로봇은 우리를 도와줘요." },
    ]},
    { id: "el-high-58", word: "software", ipa: "/ˈsɒf.twer/", meaningKo: "소프트웨어", emoji: "🖥", desc: "컴퓨터를 작동시키는 프로그램이에요.", examples: [
      { en: "We use new software.", ko: "우리는 새 소프트웨어를 사용해요." },
      { en: "The software is helpful.", ko: "그 소프트웨어는 유용해요." },
      { en: "This software is free.", ko: "이 소프트웨어는 무료예요." },
    ]},
    { id: "el-high-59", word: "keyboard", ipa: "/ˈkiː.bɔːrd/", meaningKo: "키보드", emoji: "⌨️", desc: "글자를 입력하는 도구예요.", examples: [
      { en: "I type on the keyboard.", ko: "나는 키보드로 타이핑해요." },
      { en: "The keyboard is new.", ko: "그 키보드는 새것이에요." },
      { en: "My keyboard is broken.", ko: "내 키보드가 고장났어요." },
    ]},
    { id: "el-high-60", word: "screen", ipa: "/skriːn/", meaningKo: "화면", emoji: "🖥", desc: "그림이나 글씨가 보이는 판이에요.", examples: [
      { en: "Look at the screen.", ko: "화면을 봐." },
      { en: "The screen is bright.", ko: "화면이 밝아요." },
      { en: "My phone screen is big.", ko: "내 휴대폰 화면은 커요." },
    ]},
    { id: "el-high-61", word: "battery", ipa: "/ˈbæt.ər.i/", meaningKo: "배터리", emoji: "🔋", desc: "전기를 저장하는 것이에요.", examples: [
      { en: "The battery is low.", ko: "배터리가 부족해요." },
      { en: "I need a new battery.", ko: "나는 새 배터리가 필요해요." },
      { en: "Charge the battery.", ko: "배터리를 충전해." },
    ]},
    { id: "el-high-62", word: "device", ipa: "/dɪˈvaɪs/", meaningKo: "기기/장치", emoji: "📱", desc: "특정한 일을 하는 기계예요.", examples: [
      { en: "This is a useful device.", ko: "이것은 유용한 기기예요." },
      { en: "I have many devices.", ko: "나는 기기가 많아요." },
      { en: "The device is small.", ko: "그 기기는 작아요." },
    ]},
    { id: "el-high-63", word: "government", ipa: "/ˈgʌv.ər.mənt/", meaningKo: "정부", emoji: "🏛", desc: "나라를 운영하는 조직이에요.", examples: [
      { en: "The government makes laws.", ko: "정부는 법을 만들어요." },
      { en: "We elect the government.", ko: "우리는 정부를 선출해요." },
      { en: "The government helps people.", ko: "정부는 사람들을 도와요." },
    ]},
    { id: "el-high-64", word: "citizen", ipa: "/ˈsɪt.ə.zən/", meaningKo: "시민", emoji: "🧑‍🤝‍🧑", desc: "한 나라에 속한 사람이에요.", examples: [
      { en: "I am a citizen of Korea.", ko: "나는 한국의 시민이에요." },
      { en: "Citizens follow the law.", ko: "시민들은 법을 따라요." },
      { en: "Every citizen has rights.", ko: "모든 시민은 권리가 있어요." },
    ]},
    { id: "el-high-65", word: "law", ipa: "/lɔː/", meaningKo: "법", emoji: "⚖️", desc: "지켜야 하는 규칙이에요.", examples: [
      { en: "We follow the law.", ko: "우리는 법을 따라요." },
      { en: "The law protects us.", ko: "법은 우리를 보호해요." },
      { en: "Breaking the law is wrong.", ko: "법을 어기는 것은 나빠요." },
    ]},
    { id: "el-high-66", word: "vote", ipa: "/voʊt/", meaningKo: "투표하다", emoji: "🗳", desc: "선택을 위해 표를 주는 것이에요.", examples: [
      { en: "We vote for our leader.", ko: "우리는 지도자를 뽑기 위해 투표해요." },
      { en: "I will vote.", ko: "나는 투표할 거예요." },
      { en: "Every citizen can vote.", ko: "모든 시민은 투표할 수 있어요." },
    ]},
    { id: "el-high-67", word: "president", ipa: "/ˈprez.ɪ.dənt/", meaningKo: "대통령", emoji: "🎩", desc: "나라를 이끄는 사람이에요.", examples: [
      { en: "The president gave a speech.", ko: "대통령이 연설을 했어요." },
      { en: "We elected a new president.", ko: "우리는 새 대통령을 뽑았어요." },
      { en: "The president visited our city.", ko: "대통령이 우리 도시를 방문했어요." },
    ]},
    { id: "el-high-68", word: "country", ipa: "/ˈkʌn.tri/", meaningKo: "나라", emoji: "🗺", desc: "국경으로 나뉜 땅이에요.", examples: [
      { en: "Korea is my country.", ko: "한국은 내 나라예요." },
      { en: "I love my country.", ko: "나는 내 나라를 사랑해요." },
      { en: "We visited another country.", ko: "우리는 다른 나라를 방문했어요." },
    ]},
    { id: "el-high-69", word: "nation", ipa: "/ˈneɪ.ʃən/", meaningKo: "국가", emoji: "🏳", desc: "국민과 정부로 이루어진 나라예요.", examples: [
      { en: "Our nation is peaceful.", ko: "우리 국가는 평화로워요." },
      { en: "The nation has many people.", ko: "그 국가는 사람이 많아요." },
      { en: "We are proud of our nation.", ko: "우리는 우리 국가가 자랑스러워요." },
    ]},
    { id: "el-high-70", word: "freedom", ipa: "/ˈfriː.dəm/", meaningKo: "자유", emoji: "🕊", desc: "원하는 대로 할 수 있는 권리예요.", examples: [
      { en: "We value freedom.", ko: "우리는 자유를 소중히 여겨요." },
      { en: "Freedom is important.", ko: "자유는 중요해요." },
      { en: "They fought for freedom.", ko: "그들은 자유를 위해 싸웠어요." },
    ]},
    { id: "el-high-71", word: "equator", ipa: "/ɪˈkweɪ.tər/", meaningKo: "적도", emoji: "🌐", desc: "지구를 반으로 나누는 가상의 선이에요.", examples: [
      { en: "The equator is hot.", ko: "적도는 더워요." },
      { en: "Brazil is near the equator.", ko: "브라질은 적도 근처에 있어요." },
      { en: "The equator divides the Earth.", ko: "적도는 지구를 반으로 나눠요." },
    ]},
    { id: "el-high-72", word: "hemisphere", ipa: "/ˈhem.ɪ.sfɪr/", meaningKo: "반구", emoji: "🌍", desc: "지구의 절반을 말해요.", examples: [
      { en: "Korea is in the Northern Hemisphere.", ko: "한국은 북반구에 있어요." },
      { en: "We live in the northern hemisphere.", ko: "우리는 북반구에 살아요." },
      { en: "The hemisphere has different seasons.", ko: "반구마다 계절이 달라요." },
    ]},
    { id: "el-high-73", word: "border", ipa: "/ˈbɔːr.dər/", meaningKo: "국경", emoji: "🚧", desc: "두 나라를 나누는 선이에요.", examples: [
      { en: "We crossed the border.", ko: "우리는 국경을 넘었어요." },
      { en: "The border is long.", ko: "그 국경은 길어요." },
      { en: "Guards watch the border.", ko: "경비병들이 국경을 지켜요." },
    ]},
    { id: "el-high-74", word: "capital", ipa: "/ˈkæp.ɪ.təl/", meaningKo: "수도", emoji: "🏙", desc: "한 나라의 중심 도시예요.", examples: [
      { en: "Seoul is the capital of Korea.", ko: "서울은 한국의 수도예요." },
      { en: "The capital is busy.", ko: "그 수도는 붐벼요." },
      { en: "We visited the capital city.", ko: "우리는 수도를 방문했어요." },
    ]},
    { id: "el-high-75", word: "population", ipa: "/ˌpɒp.jəˈleɪ.ʃən/", meaningKo: "인구", emoji: "👥", desc: "한 지역에 사는 사람의 수예요.", examples: [
      { en: "The population is growing.", ko: "인구가 늘고 있어요." },
      { en: "Seoul has a large population.", ko: "서울은 인구가 많아요." },
      { en: "We studied population growth.", ko: "우리는 인구 증가를 공부했어요." },
    ]},
    { id: "el-high-76", word: "region", ipa: "/ˈriː.dʒən/", meaningKo: "지역", emoji: "🗾", desc: "특정한 넓은 땅의 한 부분이에요.", examples: [
      { en: "This region is famous for fruit.", ko: "이 지역은 과일로 유명해요." },
      { en: "We live in a mountain region.", ko: "우리는 산악 지역에 살아요." },
      { en: "The region has good weather.", ko: "그 지역은 날씨가 좋아요." },
    ]},
    { id: "el-high-77", word: "territory", ipa: "/ˈter.ə.tɔːr.i/", meaningKo: "영토", emoji: "🗺", desc: "한 나라가 다스리는 땅이에요.", examples: [
      { en: "This is our territory.", ko: "이곳은 우리 영토예요." },
      { en: "The territory is large.", ko: "그 영토는 넓어요." },
      { en: "They protect their territory.", ko: "그들은 자신들의 영토를 지켜요." },
    ]},
    { id: "el-high-78", word: "landscape", ipa: "/ˈlænd.skeɪp/", meaningKo: "풍경", emoji: "🏞", desc: "넓게 보이는 땅의 모습이에요.", examples: [
      { en: "The landscape is beautiful.", ko: "그 풍경은 아름다워요." },
      { en: "I painted the landscape.", ko: "나는 풍경을 그렸어요." },
      { en: "We enjoyed the mountain landscape.", ko: "우리는 산 풍경을 즐겼어요." },
    ]},
    { id: "el-high-79", word: "create", ipa: "/kriˈeɪt/", meaningKo: "창조하다/만들다", emoji: "🎨", desc: "새로운 것을 만들어내는 것이에요.", examples: [
      { en: "I create art.", ko: "나는 예술 작품을 만들어요." },
      { en: "She created a new game.", ko: "그녀는 새 게임을 만들었어요." },
      { en: "We create new ideas.", ko: "우리는 새로운 아이디어를 만들어요." },
    ]},
    { id: "el-high-80", word: "build", ipa: "/bɪld/", meaningKo: "짓다/만들다", emoji: "🏗", desc: "무언가를 세우거나 만드는 것이에요.", examples: [
      { en: "We build a house.", ko: "우리는 집을 지어요." },
      { en: "They built a bridge.", ko: "그들은 다리를 지었어요." },
      { en: "I like to build things.", ko: "나는 무언가 만드는 것을 좋아해요." },
    ]},
    { id: "el-high-81", word: "protect", ipa: "/prəˈtekt/", meaningKo: "보호하다", emoji: "🛡", desc: "위험으로부터 지키는 것이에요.", examples: [
      { en: "We protect the environment.", ko: "우리는 환경을 보호해요." },
      { en: "Parents protect their children.", ko: "부모는 자녀를 보호해요." },
      { en: "We must protect nature.", ko: "우리는 자연을 보호해야 해요." },
    ]},
    { id: "el-high-82", word: "explore", ipa: "/ɪkˈsplɔːr/", meaningKo: "탐험하다", emoji: "🧭", desc: "새로운 곳을 살펴보는 것이에요.", examples: [
      { en: "We explore the forest.", ko: "우리는 숲을 탐험해요." },
      { en: "I like to explore.", ko: "나는 탐험하는 것을 좋아해요." },
      { en: "Let's explore the cave.", ko: "동굴을 탐험해보자." },
    ]},
    { id: "el-high-83", word: "observe", ipa: "/əbˈzɜːrv/", meaningKo: "관찰하다", emoji: "🔬", desc: "자세히 살펴보는 것이에요.", examples: [
      { en: "We observe the stars.", ko: "우리는 별을 관찰해요." },
      { en: "Scientists observe animals.", ko: "과학자들은 동물을 관찰해요." },
      { en: "Let's observe this carefully.", ko: "이것을 자세히 관찰해보자." },
    ]},
    { id: "el-high-84", word: "measure", ipa: "/ˈmeʒ.ər/", meaningKo: "측정하다", emoji: "📏", desc: "크기나 양을 재는 것이에요.", examples: [
      { en: "We measure the length.", ko: "우리는 길이를 재요." },
      { en: "I measure my height.", ko: "나는 내 키를 재요." },
      { en: "Measure the water carefully.", ko: "물의 양을 조심스럽게 재." },
    ]},
    { id: "el-high-85", word: "examine", ipa: "/ɪgˈzæm.ɪn/", meaningKo: "검사하다/조사하다", emoji: "🔍", desc: "자세히 살펴보고 조사하는 것이에요.", examples: [
      { en: "The doctor examines me.", ko: "의사가 나를 검사해요." },
      { en: "We examine the rock.", ko: "우리는 바위를 조사해요." },
      { en: "Let's examine the evidence.", ko: "증거를 조사해보자." },
    ]},
    { id: "el-high-86", word: "produce", ipa: "/prəˈdjuːs/", meaningKo: "생산하다", emoji: "🏭", desc: "무언가를 만들어내는 것이에요.", examples: [
      { en: "The factory produces cars.", ko: "그 공장은 자동차를 생산해요." },
      { en: "Farmers produce food.", ko: "농부들은 식량을 생산해요." },
      { en: "We produce clean energy.", ko: "우리는 깨끗한 에너지를 생산해요." },
    ]},
    { id: "el-high-87", word: "reduce", ipa: "/rɪˈdjuːs/", meaningKo: "줄이다", emoji: "📉", desc: "양이나 크기를 작게 만드는 것이에요.", examples: [
      { en: "We reduce waste.", ko: "우리는 쓰레기를 줄여요." },
      { en: "Please reduce noise.", ko: "소음을 줄여 주세요." },
      { en: "We must reduce pollution.", ko: "우리는 오염을 줄여야 해요." },
    ]},
    { id: "el-high-88", word: "increase", ipa: "/ɪnˈkriːs/", meaningKo: "늘리다/증가하다", emoji: "📈", desc: "양이나 크기를 크게 만드는 것이에요.", examples: [
      { en: "The population is increasing.", ko: "인구가 증가하고 있어요." },
      { en: "We increase our effort.", ko: "우리는 노력을 늘려요." },
      { en: "Sales increased this year.", ko: "올해 매출이 늘었어요." },
    ]},
    { id: "el-high-89", word: "dangerous", ipa: "/ˈdeɪn.dʒər.əs/", meaningKo: "위험한", emoji: "⚠️", desc: "위험할 수 있다는 뜻이에요.", examples: [
      { en: "The road is dangerous.", ko: "그 길은 위험해요." },
      { en: "Fire is dangerous.", ko: "불은 위험해요." },
      { en: "Be careful, it's dangerous.", ko: "조심해, 위험해." },
    ]},
    { id: "el-high-90", word: "safe", ipa: "/seɪf/", meaningKo: "안전한", emoji: "🦺", desc: "위험하지 않다는 뜻이에요.", examples: [
      { en: "This place is safe.", ko: "이곳은 안전해요." },
      { en: "Drive safely.", ko: "안전하게 운전해." },
      { en: "We feel safe at home.", ko: "우리는 집에서 안전함을 느껴요." },
    ]},
    { id: "el-high-91", word: "powerful", ipa: "/ˈpaʊ.ər.fəl/", meaningKo: "강력한", emoji: "💪", desc: "힘이 세다는 뜻이에요.", examples: [
      { en: "The storm is powerful.", ko: "그 폭풍은 강력해요." },
      { en: "He is a powerful leader.", ko: "그는 강력한 지도자예요." },
      { en: "The engine is powerful.", ko: "그 엔진은 강력해요." },
    ]},
    { id: "el-high-92", word: "fragile", ipa: "/ˈfrædʒ.əl/", meaningKo: "부서지기 쉬운", emoji: "🍃", desc: "쉽게 깨질 수 있다는 뜻이에요.", examples: [
      { en: "The glass is fragile.", ko: "그 유리는 깨지기 쉬워요." },
      { en: "Handle it carefully, it's fragile.", ko: "조심히 다뤄, 깨지기 쉬워." },
      { en: "The vase is fragile.", ko: "그 꽃병은 깨지기 쉬워요." },
    ]},
    { id: "el-high-93", word: "flexible", ipa: "/ˈflek.sə.bəl/", meaningKo: "유연한", emoji: "🤸", desc: "잘 구부러진다는 뜻이에요.", examples: [
      { en: "The rubber is flexible.", ko: "그 고무는 유연해요." },
      { en: "She is flexible.", ko: "그녀는 유연해요." },
      { en: "We need a flexible plan.", ko: "우리는 유연한 계획이 필요해요." },
    ]},
    { id: "el-high-94", word: "durable", ipa: "/ˈdjʊr.ə.bəl/", meaningKo: "튼튼한/내구성 있는", emoji: "🛠", desc: "오래 쓸 수 있다는 뜻이에요.", examples: [
      { en: "This bag is durable.", ko: "이 가방은 튼튼해요." },
      { en: "We need durable materials.", ko: "우리는 튼튼한 재료가 필요해요." },
      { en: "The shoes are durable.", ko: "그 신발은 튼튼해요." },
    ]},
    { id: "el-high-95", word: "efficient", ipa: "/ɪˈfɪʃ.ənt/", meaningKo: "효율적인", emoji: "⚙️", desc: "적은 노력으로 좋은 결과를 낸다는 뜻이에요.", examples: [
      { en: "This machine is efficient.", ko: "이 기계는 효율적이에요." },
      { en: "We need an efficient plan.", ko: "우리는 효율적인 계획이 필요해요." },
      { en: "Solar power is efficient.", ko: "태양광 발전은 효율적이에요." },
    ]},
    { id: "el-high-96", word: "effective", ipa: "/ɪˈfek.tɪv/", meaningKo: "효과적인", emoji: "✅", desc: "원하는 결과를 잘 낸다는 뜻이에요.", examples: [
      { en: "This method is effective.", ko: "이 방법은 효과적이에요." },
      { en: "The medicine is effective.", ko: "그 약은 효과적이에요." },
      { en: "We need an effective solution.", ko: "우리는 효과적인 해결책이 필요해요." },
    ]},
    { id: "el-high-97", word: "complex", ipa: "/kəmˈpleks/", meaningKo: "복잡한", emoji: "🧩", desc: "여러 부분이 얽혀 있다는 뜻이에요.", examples: [
      { en: "This problem is complex.", ko: "이 문제는 복잡해요." },
      { en: "The machine is complex.", ko: "그 기계는 복잡해요." },
      { en: "Life can be complex.", ko: "인생은 복잡할 수 있어요." },
    ]},
    { id: "el-high-98", word: "simple", ipa: "/ˈsɪm.pəl/", meaningKo: "간단한", emoji: "⭕", desc: "이해하기 쉽다는 뜻이에요.", examples: [
      { en: "This is a simple problem.", ko: "이것은 간단한 문제예요." },
      { en: "Keep it simple.", ko: "간단하게 해." },
      { en: "The rule is simple.", ko: "그 규칙은 간단해요." },
    ]},
    { id: "el-high-99", word: "courage", ipa: "/ˈkɜː.rɪdʒ/", meaningKo: "용기", emoji: "🦁", desc: "두려움을 이기는 마음이에요.", examples: [
      { en: "He showed great courage.", ko: "그는 큰 용기를 보였어요." },
      { en: "It takes courage to try.", ko: "시도하려면 용기가 필요해요." },
      { en: "I need courage.", ko: "나는 용기가 필요해요." },
    ]},
    { id: "el-high-100", word: "honesty", ipa: "/ˈɒn.ə.sti/", meaningKo: "정직함", emoji: "🤝", desc: "거짓 없이 진실하게 대하는 것이에요.", examples: [
      { en: "Honesty is important.", ko: "정직함은 중요해요." },
      { en: "I value honesty.", ko: "나는 정직함을 중요하게 여겨요." },
      { en: "She always speaks with honesty.", ko: "그녀는 항상 정직하게 말해요." },
    ]},
    { id: "el-high-101", word: "kindness", ipa: "/ˈkaɪnd.nəs/", meaningKo: "친절함", emoji: "💗", desc: "다른 사람을 배려하는 마음이에요.", examples: [
      { en: "Kindness makes people happy.", ko: "친절함은 사람들을 행복하게 해요." },
      { en: "I appreciate your kindness.", ko: "나는 당신의 친절함에 감사해요." },
      { en: "Show kindness to others.", ko: "다른 사람들에게 친절을 베풀어." },
    ]},
    { id: "el-high-102", word: "patience", ipa: "/ˈpeɪ.ʃəns/", meaningKo: "인내심", emoji: "⏳", desc: "참고 기다리는 힘이에요.", examples: [
      { en: "I need patience.", ko: "나는 인내심이 필요해요." },
      { en: "She has a lot of patience.", ko: "그녀는 인내심이 많아요." },
      { en: "Patience is a virtue.", ko: "인내심은 미덕이에요." },
    ]},
    { id: "el-high-103", word: "wisdom", ipa: "/ˈwɪz.dəm/", meaningKo: "지혜", emoji: "🦉", desc: "옳은 판단을 하는 능력이에요.", examples: [
      { en: "My grandma has wisdom.", ko: "우리 할머니는 지혜로워요." },
      { en: "We learn wisdom from books.", ko: "우리는 책에서 지혜를 배워요." },
      { en: "Wisdom comes with experience.", ko: "지혜는 경험에서 나와요." },
    ]},
    { id: "el-high-104", word: "creativity", ipa: "/ˌkriː.eɪˈtɪv.ə.ti/", meaningKo: "창의성", emoji: "🎨", desc: "새로운 것을 생각해내는 능력이에요.", examples: [
      { en: "Art needs creativity.", ko: "예술은 창의성이 필요해요." },
      { en: "She has great creativity.", ko: "그녀는 창의성이 뛰어나요." },
      { en: "We encourage creativity.", ko: "우리는 창의성을 장려해요." },
    ]},
    { id: "el-high-105", word: "cooperation", ipa: "/koʊˌɒp.əˈreɪ.ʃən/", meaningKo: "협동", emoji: "🤝", desc: "함께 힘을 모으는 것이에요.", examples: [
      { en: "We need cooperation.", ko: "우리는 협동이 필요해요." },
      { en: "Cooperation helps us succeed.", ko: "협동은 우리가 성공하도록 도와요." },
      { en: "Good cooperation makes teamwork easy.", ko: "좋은 협동은 팀워크를 쉽게 만들어요." },
    ]},
    { id: "el-high-106", word: "generosity", ipa: "/ˌdʒen.əˈrɒs.ə.ti/", meaningKo: "관대함/너그러움", emoji: "🎁", desc: "다른 사람에게 아낌없이 주는 마음이에요.", examples: [
      { en: "I admire her generosity.", ko: "나는 그녀의 관대함을 존경해요." },
      { en: "His generosity helped many people.", ko: "그의 관대함은 많은 사람을 도왔어요." },
      { en: "Generosity makes the world better.", ko: "관대함은 세상을 더 나아지게 해요." },
    ]},
    { id: "el-high-107", word: "improve", ipa: "/ɪmˈpruːv/", meaningKo: "향상시키다/나아지다", emoji: "📈", desc: "더 좋게 만드는 것이에요.", examples: [
      { en: "I want to improve my English.", ko: "나는 영어 실력을 향상시키고 싶어요." },
      { en: "My grades improved.", ko: "내 성적이 향상됐어요." },
      { en: "We improve our skills.", ko: "우리는 실력을 향상시켜요." },
    ]},
    { id: "el-high-108", word: "develop", ipa: "/dɪˈvel.əp/", meaningKo: "발전시키다/개발하다", emoji: "🌱", desc: "점점 더 좋게 만들어가는 것이에요.", examples: [
      { en: "We develop new ideas.", ko: "우리는 새로운 아이디어를 개발해요." },
      { en: "The country is developing fast.", ko: "그 나라는 빠르게 발전하고 있어요." },
      { en: "I want to develop my skills.", ko: "나는 내 실력을 발전시키고 싶어요." },
    ]},
    { id: "el-high-109", word: "succeed", ipa: "/səkˈsiːd/", meaningKo: "성공하다", emoji: "🏆", desc: "원하는 것을 이루는 것이에요.", examples: [
      { en: "I want to succeed.", ko: "나는 성공하고 싶어요." },
      { en: "She succeeded in the test.", ko: "그녀는 시험에 성공했어요." },
      { en: "Hard work helps you succeed.", ko: "열심히 하면 성공하는 데 도움이 돼요." },
    ]},
    { id: "el-high-110", word: "fail", ipa: "/feɪl/", meaningKo: "실패하다", emoji: "❌", desc: "원하는 것을 이루지 못하는 것이에요.", examples: [
      { en: "I don't want to fail.", ko: "나는 실패하고 싶지 않아요." },
      { en: "He failed the test.", ko: "그는 시험에 실패했어요." },
      { en: "We learn from failing.", ko: "우리는 실패에서 배워요." },
    ]},
    { id: "el-high-111", word: "struggle", ipa: "/ˈstrʌg.əl/", meaningKo: "애쓰다/고군분투하다", emoji: "😓", desc: "어려움과 싸우며 노력하는 것이에요.", examples: [
      { en: "I struggle with math.", ko: "나는 수학이 힘들어요." },
      { en: "She struggled to finish.", ko: "그녀는 끝내려고 애썼어요." },
      { en: "We struggle sometimes.", ko: "우리는 가끔 힘들어해요." },
    ]},
    { id: "el-high-112", word: "achieve", ipa: "/əˈtʃiːv/", meaningKo: "이루다/달성하다", emoji: "🏅", desc: "노력해서 목표를 얻는 것이에요.", examples: [
      { en: "I achieved my goal.", ko: "나는 목표를 이뤘어요." },
      { en: "She achieved success.", ko: "그녀는 성공을 이뤘어요." },
      { en: "We can achieve anything.", ko: "우리는 무엇이든 이룰 수 있어요." },
    ]},
    { id: "el-high-113", word: "grade", ipa: "/greɪd/", meaningKo: "성적/학년", emoji: "📊", desc: "공부한 결과로 받는 점수나 학년이에요.", examples: [
      { en: "I got a good grade.", ko: "나는 좋은 성적을 받았어요." },
      { en: "What grade are you in?", ko: "너는 몇 학년이니?" },
      { en: "My grades improved.", ko: "내 성적이 올랐어요." },
    ]},
    { id: "el-high-114", word: "certificate", ipa: "/sərˈtɪf.ɪ.kət/", meaningKo: "자격증/수료증", emoji: "📜", desc: "무언가를 완료했다는 증명서예요.", examples: [
      { en: "I got a certificate.", ko: "나는 수료증을 받았어요." },
      { en: "She earned a certificate.", ko: "그녀는 자격증을 땄어요." },
      { en: "The certificate is framed.", ko: "그 자격증은 액자에 걸려 있어요." },
    ]},
    { id: "el-high-115", word: "competition", ipa: "/ˌkɒm.pəˈtɪʃ.ən/", meaningKo: "대회/경쟁", emoji: "🏆", desc: "누가 더 잘하는지 겨루는 것이에요.", examples: [
      { en: "I joined a competition.", ko: "나는 대회에 참가했어요." },
      { en: "The competition was fun.", ko: "그 대회는 재미있었어요." },
      { en: "We won the competition.", ko: "우리는 대회에서 우승했어요." },
    ]},
    { id: "el-high-116", word: "achievement", ipa: "/əˈtʃiːv.mənt/", meaningKo: "성취/업적", emoji: "🏅", desc: "노력해서 이룬 결과예요.", examples: [
      { en: "This is a great achievement.", ko: "이것은 대단한 성취예요." },
      { en: "I am proud of my achievement.", ko: "나는 내 성취가 자랑스러워요." },
      { en: "Her achievement inspired us.", ko: "그녀의 업적은 우리에게 영감을 줬어요." },
    ]},
    { id: "el-high-117", word: "project", ipa: "/ˈprɒdʒ.ekt/", meaningKo: "프로젝트/과제", emoji: "📋", desc: "계획을 세워서 하는 활동이에요.", examples: [
      { en: "We did a group project.", ko: "우리는 조별 과제를 했어요." },
      { en: "The project was fun.", ko: "그 과제는 재미있었어요." },
      { en: "I finished my project.", ko: "나는 내 과제를 끝냈어요." },
    ]},
    { id: "el-high-118", word: "presentation", ipa: "/ˌprez.ənˈteɪ.ʃən/", meaningKo: "발표", emoji: "🎤", desc: "여러 사람 앞에서 설명하는 것이에요.", examples: [
      { en: "I gave a presentation.", ko: "나는 발표를 했어요." },
      { en: "The presentation was great.", ko: "그 발표는 훌륭했어요." },
      { en: "We prepare a presentation.", ko: "우리는 발표를 준비해요." },
    ]},
    { id: "el-high-119", word: "report", ipa: "/rɪˈpɔːrt/", meaningKo: "보고서", emoji: "📄", desc: "조사한 내용을 정리한 글이에요.", examples: [
      { en: "I wrote a report.", ko: "나는 보고서를 썼어요." },
      { en: "The report is long.", ko: "그 보고서는 길어요." },
      { en: "We submit our report.", ko: "우리는 보고서를 제출해요." },
    ]},
    { id: "el-high-120", word: "research", ipa: "/rɪˈsɜːrtʃ/", meaningKo: "연구/조사", emoji: "🔬", desc: "깊이 있게 알아보는 것이에요.", examples: [
      { en: "We did research.", ko: "우리는 연구를 했어요." },
      { en: "The research took a long time.", ko: "그 연구는 오래 걸렸어요." },
      { en: "Scientists do research.", ko: "과학자들은 연구를 해요." },
    ]},
  ],

  "middle": [
    { id: "mid-01", word: "encourage", ipa: "/ɪnˈkɜː.rɪdʒ/", meaningKo: "격려하다", emoji: "📣", desc: "누군가에게 힘을 북돋아 주는 것이에요.", examples: [
      { en: "My parents encourage me to study.", ko: "부모님은 내가 공부하도록 격려해요." },
      { en: "The coach encouraged the team.", ko: "코치는 팀을 격려했어요." },
      { en: "She encouraged him to try again.", ko: "그녀는 그가 다시 시도하도록 격려했어요." },
    ]},
    { id: "mid-02", word: "describe", ipa: "/dɪˈskraɪb/", meaningKo: "묘사하다/설명하다", emoji: "✍️", desc: "어떤 것을 자세히 말로 표현하는 것이에요.", examples: [
      { en: "Can you describe your day?", ko: "오늘 하루를 설명해줄 수 있어?" },
      { en: "She described the picture.", ko: "그녀는 그림을 묘사했어요." },
      { en: "He described the accident to the police.", ko: "그는 경찰에게 사고를 설명했어요." },
    ]},
    { id: "mid-03", word: "compare", ipa: "/kəmˈper/", meaningKo: "비교하다", emoji: "⚖️", desc: "두 가지를 서로 견주어 보는 것이에요.", examples: [
      { en: "Let's compare these two phones.", ko: "이 두 휴대폰을 비교해보자." },
      { en: "She compared the prices.", ko: "그녀는 가격을 비교했어요." },
      { en: "You shouldn't compare yourself to others.", ko: "너 자신을 남과 비교하지 마." },
    ]},
    { id: "mid-04", word: "decision", ipa: "/dɪˈsɪʒ.ən/", meaningKo: "결정", emoji: "🤔", desc: "무엇을 할지 정하는 것이에요.", examples: [
      { en: "I made a decision.", ko: "나는 결정을 내렸어요." },
      { en: "It was a hard decision.", ko: "그것은 어려운 결정이었어요." },
      { en: "We need to make a decision soon.", ko: "우리는 곧 결정을 내려야 해요." },
    ]},
    { id: "mid-05", word: "various", ipa: "/ˈver.i.əs/", meaningKo: "다양한", emoji: "🎨", desc: "여러 가지 종류의라는 뜻이에요.", examples: [
      { en: "There are various reasons.", ko: "다양한 이유가 있어요." },
      { en: "The store sells various items.", ko: "그 가게는 다양한 물건을 팔아요." },
      { en: "We discussed various topics.", ko: "우리는 다양한 주제를 논의했어요." },
    ]},
    { id: "mid-06", word: "essential", ipa: "/ɪˈsen.ʃəl/", meaningKo: "필수적인", emoji: "⭐", desc: "꼭 필요하다는 뜻이에요.", examples: [
      { en: "Water is essential for life.", ko: "물은 생명에 필수적이에요." },
      { en: "Sleep is essential for health.", ko: "잠은 건강에 필수적이에요." },
      { en: "This is an essential rule.", ko: "이것은 필수적인 규칙이에요." },
    ]},
    { id: "mid-07", word: "generation", ipa: "/ˌdʒen.əˈreɪ.ʃən/", meaningKo: "세대", emoji: "👪", desc: "비슷한 시기에 태어난 사람들의 무리예요.", examples: [
      { en: "My generation grew up with smartphones.", ko: "우리 세대는 스마트폰과 함께 자랐어요." },
      { en: "There is a gap between generations.", ko: "세대 간에 차이가 있어요." },
      { en: "Each generation has different ideas.", ko: "각 세대는 다른 생각을 가지고 있어요." },
    ]},
    { id: "mid-08", word: "technology", ipa: "/tekˈnɒl.ə.dʒi/", meaningKo: "기술", emoji: "💻", desc: "과학을 이용해 만든 도구나 방법이에요.", examples: [
      { en: "Technology changes our lives.", ko: "기술은 우리 삶을 바꿔요." },
      { en: "We use technology every day.", ko: "우리는 매일 기술을 사용해요." },
      { en: "New technology helps students learn.", ko: "새로운 기술은 학생들의 학습을 도와요." },
    ]},
    { id: "mid-09", word: "positive", ipa: "/ˈpɒz.ə.tɪv/", meaningKo: "긍정적인", emoji: "👍", desc: "좋은 쪽으로 생각하는 태도예요.", examples: [
      { en: "Stay positive.", ko: "긍정적으로 지내." },
      { en: "She has a positive attitude.", ko: "그녀는 긍정적인 태도를 가지고 있어요." },
      { en: "Think positive thoughts.", ko: "긍정적으로 생각해." },
    ]},
    { id: "mid-10", word: "negative", ipa: "/ˈneg.ə.tɪv/", meaningKo: "부정적인", emoji: "👎", desc: "나쁜 쪽으로 생각하는 태도예요.", examples: [
      { en: "Don't be so negative.", ko: "그렇게 부정적이지 마." },
      { en: "The news had a negative effect.", ko: "그 뉴스는 부정적인 영향을 미쳤어요." },
      { en: "He has a negative opinion.", ko: "그는 부정적인 의견을 가지고 있어요." },
    ]},
    { id: "mid-11", word: "influence", ipa: "/ˈɪn.flu.əns/", meaningKo: "영향", emoji: "🌊", desc: "다른 것에 힘을 미치는 것이에요.", examples: [
      { en: "Friends can influence your choices.", ko: "친구는 너의 선택에 영향을 줄 수 있어요." },
      { en: "Music has a big influence on me.", ko: "음악은 나에게 큰 영향을 줘요." },
      { en: "Parents influence their children.", ko: "부모는 자녀에게 영향을 줘요." },
    ]},
    { id: "mid-12", word: "particular", ipa: "/pərˈtɪk.jə.lər/", meaningKo: "특정한", emoji: "🎯", desc: "특별히 정해진이라는 뜻이에요.", examples: [
      { en: "I have a particular reason.", ko: "나는 특정한 이유가 있어요." },
      { en: "This particular book is my favorite.", ko: "이 특정한 책이 내가 가장 좋아하는 책이에요." },
      { en: "Pay attention to this particular point.", ko: "이 특정한 부분에 주목해." },
    ]},
    { id: "mid-13", word: "individual", ipa: "/ˌɪn.dɪˈvɪdʒ.u.əl/", meaningKo: "개인/개인의", emoji: "🧍", desc: "한 사람 한 사람을 말해요.", examples: [
      { en: "Each individual is different.", ko: "각 개인은 서로 달라요." },
      { en: "We respect individual opinions.", ko: "우리는 개인의 의견을 존중해요." },
      { en: "This plan suits every individual.", ko: "이 계획은 모든 개인에게 맞아요." },
    ]},
    { id: "mid-14", word: "opinion", ipa: "/əˈpɪn.jən/", meaningKo: "의견", emoji: "💬", desc: "어떤 것에 대한 생각이에요.", examples: [
      { en: "What is your opinion?", ko: "네 의견은 뭐야?" },
      { en: "I respect your opinion.", ko: "나는 네 의견을 존중해." },
      { en: "Everyone has a different opinion.", ko: "모두 다른 의견을 가지고 있어요." },
    ]},
    { id: "mid-15", word: "favorite", ipa: "/ˈfeɪ.vər.ɪt/", meaningKo: "가장 좋아하는", emoji: "❤️", desc: "제일 좋아하는 것이라는 뜻이에요.", examples: [
      { en: "Pizza is my favorite food.", ko: "피자는 내가 가장 좋아하는 음식이에요." },
      { en: "What is your favorite color?", ko: "가장 좋아하는 색깔이 뭐예요?" },
      { en: "This is my favorite song.", ko: "이건 내가 가장 좋아하는 노래예요." },
    ]},
    { id: "mid-16", word: "culture", ipa: "/ˈkʌl.tʃər/", meaningKo: "문화", emoji: "🎭", desc: "한 사회의 생활 방식이나 예술을 말해요.", examples: [
      { en: "I love learning about other cultures.", ko: "나는 다른 문화를 배우는 것을 좋아해요." },
      { en: "Korean culture is interesting.", ko: "한국 문화는 흥미로워요." },
      { en: "Music is part of our culture.", ko: "음악은 우리 문화의 일부예요." },
    ]},
    { id: "mid-17", word: "tradition", ipa: "/trəˈdɪʃ.ən/", meaningKo: "전통", emoji: "🏮", desc: "오랫동안 이어져 온 관습이에요.", examples: [
      { en: "This festival is an old tradition.", ko: "이 축제는 오래된 전통이에요." },
      { en: "We follow family traditions.", ko: "우리는 가족의 전통을 따라요." },
      { en: "Tradition is important to our culture.", ko: "전통은 우리 문화에 중요해요." },
    ]},
    { id: "mid-18", word: "benefit", ipa: "/ˈben.ɪ.fɪt/", meaningKo: "이익/혜택", emoji: "🎁", desc: "좋은 점이나 도움이 되는 것이에요.", examples: [
      { en: "Exercise has many benefits.", ko: "운동은 많은 이점이 있어요." },
      { en: "This plan will benefit everyone.", ko: "이 계획은 모두에게 이익이 될 거예요." },
      { en: "What are the benefits of reading?", ko: "독서의 이점은 무엇인가요?" },
    ]},
    { id: "mid-19", word: "disadvantage", ipa: "/ˌdɪs.ədˈvæn.tɪdʒ/", meaningKo: "단점", emoji: "⚠️", desc: "안 좋은 점이에요.", examples: [
      { en: "Every choice has a disadvantage.", ko: "모든 선택에는 단점이 있어요." },
      { en: "The main disadvantage is the cost.", ko: "가장 큰 단점은 비용이에요." },
      { en: "She listed the advantages and disadvantages.", ko: "그녀는 장단점을 나열했어요." },
    ]},
    { id: "mid-20", word: "solution", ipa: "/səˈluː.ʃən/", meaningKo: "해결책", emoji: "🔑", desc: "문제를 해결하는 방법이에요.", examples: [
      { en: "We found a solution.", ko: "우리는 해결책을 찾았어요." },
      { en: "This is a good solution to the problem.", ko: "이것은 그 문제에 좋은 해결책이에요." },
      { en: "There is no easy solution.", ko: "쉬운 해결책은 없어요." },
    ]},
    { id: "mid-21", word: "analyze", ipa: "/ˈæn.ə.laɪz/", meaningKo: "분석하다", emoji: "🔬", desc: "자세히 나누어 살펴보는 것이에요.", examples: [
      { en: "We analyze the data.", ko: "우리는 데이터를 분석해요." },
      { en: "She analyzed the problem.", ko: "그녀는 문제를 분석했어요." },
      { en: "Let's analyze this text.", ko: "이 글을 분석해보자." },
    ]},
    { id: "mid-22", word: "evaluate", ipa: "/ɪˈvæl.ju.eɪt/", meaningKo: "평가하다", emoji: "📊", desc: "가치나 수준을 판단하는 것이에요.", examples: [
      { en: "We evaluate the results.", ko: "우리는 결과를 평가해요." },
      { en: "The teacher evaluates our work.", ko: "선생님은 우리의 과제를 평가해요." },
      { en: "Let's evaluate this plan.", ko: "이 계획을 평가해보자." },
    ]},
    { id: "mid-23", word: "summarize", ipa: "/ˈsʌm.ə.raɪz/", meaningKo: "요약하다", emoji: "📝", desc: "중요한 내용만 짧게 정리하는 것이에요.", examples: [
      { en: "Summarize the story.", ko: "이야기를 요약해." },
      { en: "I summarized the article.", ko: "나는 그 기사를 요약했어요." },
      { en: "Can you summarize this chapter?", ko: "이 챕터를 요약해줄 수 있어?" },
    ]},
    { id: "mid-24", word: "conclude", ipa: "/kənˈkluːd/", meaningKo: "결론을 내리다", emoji: "🏁", desc: "생각을 정리해서 끝맺는 것이에요.", examples: [
      { en: "We conclude the meeting.", ko: "우리는 회의를 마무리해요." },
      { en: "She concluded her speech.", ko: "그녀는 연설을 마무리했어요." },
      { en: "Let's conclude our discussion.", ko: "우리의 토론을 마무리하자." },
    ]},
    { id: "mid-25", word: "define", ipa: "/dɪˈfaɪn/", meaningKo: "정의하다", emoji: "📖", desc: "뜻을 명확히 설명하는 것이에요.", examples: [
      { en: "Define this word.", ko: "이 단어를 정의해." },
      { en: "Can you define success?", ko: "성공을 정의할 수 있어?" },
      { en: "The dictionary defines the term.", ko: "사전이 그 용어를 정의해요." },
    ]},
    { id: "mid-26", word: "identify", ipa: "/aɪˈden.tə.faɪ/", meaningKo: "확인하다/알아보다", emoji: "🔎", desc: "무엇인지 알아내는 것이에요.", examples: [
      { en: "Identify the problem.", ko: "문제를 확인해." },
      { en: "I identified the bird.", ko: "나는 그 새를 알아봤어요." },
      { en: "Can you identify this plant?", ko: "이 식물을 알아볼 수 있어?" },
    ]},
    { id: "mid-27", word: "illustrate", ipa: "/ˈɪl.ə.streɪt/", meaningKo: "설명하다/보여주다", emoji: "🖼", desc: "예를 들어 분명하게 보여주는 것이에요.", examples: [
      { en: "The picture illustrates the idea.", ko: "그 그림은 아이디어를 보여줘요." },
      { en: "Let me illustrate this point.", ko: "이 점을 설명해볼게요." },
      { en: "The graph illustrates the trend.", ko: "그래프가 경향을 보여줘요." },
    ]},
    { id: "mid-28", word: "demonstrate", ipa: "/ˈdem.ən.streɪt/", meaningKo: "보여주다/입증하다", emoji: "🎯", desc: "직접 해 보이며 증명하는 것이에요.", examples: [
      { en: "She demonstrated the experiment.", ko: "그녀는 실험을 보여줬어요." },
      { en: "Let me demonstrate how it works.", ko: "어떻게 작동하는지 보여줄게요." },
      { en: "The study demonstrates a clear result.", ko: "그 연구는 명확한 결과를 보여줘요." },
    ]},
    { id: "mid-29", word: "distinguish", ipa: "/dɪˈstɪŋ.gwɪʃ/", meaningKo: "구별하다", emoji: "🔍", desc: "차이를 알아서 나누는 것이에요.", examples: [
      { en: "Can you distinguish the two?", ko: "그 둘을 구별할 수 있어?" },
      { en: "It's hard to distinguish them.", ko: "그것들을 구별하기 어려워요." },
      { en: "We distinguish right from wrong.", ko: "우리는 옳고 그름을 구별해요." },
    ]},
    { id: "mid-30", word: "classify", ipa: "/ˈklæs.ɪ.faɪ/", meaningKo: "분류하다", emoji: "🗂", desc: "종류별로 나누는 것이에요.", examples: [
      { en: "We classify animals into groups.", ko: "우리는 동물을 그룹으로 분류해요." },
      { en: "Classify these items.", ko: "이 물건들을 분류해." },
      { en: "Scientists classify plants.", ko: "과학자들은 식물을 분류해요." },
    ]},
    { id: "mid-31", word: "predict", ipa: "/prɪˈdɪkt/", meaningKo: "예측하다", emoji: "🔮", desc: "앞으로 일어날 일을 미리 짐작하는 것이에요.", examples: [
      { en: "I predict rain tomorrow.", ko: "나는 내일 비가 올 거라고 예측해요." },
      { en: "She predicted the result.", ko: "그녀는 결과를 예측했어요." },
      { en: "Can you predict the future?", ko: "미래를 예측할 수 있어?" },
    ]},
    { id: "mid-32", word: "interpret", ipa: "/ɪnˈtɜːr.prɪt/", meaningKo: "해석하다", emoji: "💭", desc: "의미를 이해하고 설명하는 것이에요.", examples: [
      { en: "Interpret this poem.", ko: "이 시를 해석해." },
      { en: "She interpreted the data.", ko: "그녀는 데이터를 해석했어요." },
      { en: "How do you interpret this?", ko: "이것을 어떻게 해석하나요?" },
    ]},
    { id: "mid-33", word: "however", ipa: "/haʊˈev.ər/", meaningKo: "하지만", emoji: "🔄", desc: "앞의 내용과 반대되는 내용을 이어줄 때 써요.", examples: [
      { en: "I like tea; however, I prefer coffee.", ko: "나는 차를 좋아하지만 커피를 더 좋아해요." },
      { en: "However, the plan failed.", ko: "하지만 그 계획은 실패했어요." },
      { en: "It rained; however, we went out.", ko: "비가 왔지만 우리는 밖에 나갔어요." },
    ]},
    { id: "mid-34", word: "therefore", ipa: "/ˈðer.fɔːr/", meaningKo: "그러므로", emoji: "➡️", desc: "결과를 이어줄 때 쓰는 말이에요.", examples: [
      { en: "It rained, therefore we stayed home.", ko: "비가 와서 우리는 집에 있었어요." },
      { en: "I studied hard; therefore, I passed.", ko: "나는 열심히 공부해서 합격했어요." },
      { en: "Therefore, we must act now.", ko: "그러므로 우리는 지금 행동해야 해요." },
    ]},
    { id: "mid-35", word: "moreover", ipa: "/mɔːˈroʊ.vər/", meaningKo: "게다가", emoji: "➕", desc: "앞의 내용에 더할 때 쓰는 말이에요.", examples: [
      { en: "The plan is good; moreover, it is cheap.", ko: "그 계획은 좋고, 게다가 저렴해요." },
      { en: "Moreover, we have more time.", ko: "게다가 우리는 시간이 더 있어요." },
      { en: "She is smart; moreover, she is kind.", ko: "그녀는 똑똑하고, 게다가 친절해요." },
    ]},
    { id: "mid-36", word: "although", ipa: "/ɔːlˈðoʊ/", meaningKo: "비록 ~이지만", emoji: "🔀", desc: "반대되는 상황을 나타낼 때 써요.", examples: [
      { en: "Although it rained, we went out.", ko: "비가 왔지만 우리는 밖에 나갔어요." },
      { en: "Although he was tired, he finished.", ko: "그는 피곤했지만 끝냈어요." },
      { en: "Although it was hard, I tried.", ko: "어려웠지만 나는 시도했어요." },
    ]},
    { id: "mid-37", word: "furthermore", ipa: "/ˈfɜːr.ðər.mɔːr/", meaningKo: "게다가/더욱이", emoji: "➕", desc: "앞의 내용에 정보를 더할 때 써요.", examples: [
      { en: "Furthermore, the plan saves money.", ko: "더욱이 그 계획은 돈을 절약해요." },
      { en: "Furthermore, we need more help.", ko: "게다가 우리는 도움이 더 필요해요." },
      { en: "Furthermore, it is easy to use.", ko: "게다가 그것은 사용하기 쉬워요." },
    ]},
    { id: "mid-38", word: "nevertheless", ipa: "/ˌnev.ər.ðəˈles/", meaningKo: "그럼에도 불구하고", emoji: "🔁", desc: "앞의 어려움에도 불구하고라는 뜻이에요.", examples: [
      { en: "It was hard; nevertheless, we finished.", ko: "힘들었지만 그럼에도 우리는 끝냈어요." },
      { en: "Nevertheless, she smiled.", ko: "그럼에도 그녀는 웃었어요." },
      { en: "Nevertheless, we kept trying.", ko: "그럼에도 우리는 계속 시도했어요." },
    ]},
    { id: "mid-39", word: "relationship", ipa: "/rɪˈleɪ.ʃən.ʃɪp/", meaningKo: "관계", emoji: "🤝", desc: "사람들 사이의 연결을 말해요.", examples: [
      { en: "We have a good relationship.", ko: "우리는 좋은 관계를 가지고 있어요." },
      { en: "Their relationship is close.", ko: "그들의 관계는 가까워요." },
      { en: "I value our relationship.", ko: "나는 우리의 관계를 소중히 여겨요." },
    ]},
    { id: "mid-40", word: "neighbor", ipa: "/ˈneɪ.bər/", meaningKo: "이웃", emoji: "🏘", desc: "옆집에 사는 사람이에요.", examples: [
      { en: "My neighbor is kind.", ko: "우리 이웃은 친절해요." },
      { en: "I know my neighbors.", ko: "나는 이웃들을 알아요." },
      { en: "We help our neighbors.", ko: "우리는 이웃을 도와요." },
    ]},
    { id: "mid-41", word: "stranger", ipa: "/ˈstreɪn.dʒər/", meaningKo: "낯선 사람", emoji: "🚶", desc: "잘 모르는 사람이에요.", examples: [
      { en: "Don't talk to strangers.", ko: "낯선 사람과 이야기하지 마." },
      { en: "A stranger helped me.", ko: "낯선 사람이 나를 도와줬어요." },
      { en: "He is a stranger to me.", ko: "그는 나에게 낯선 사람이에요." },
    ]},
    { id: "mid-42", word: "society", ipa: "/səˈsaɪ.ə.ti/", meaningKo: "사회", emoji: "🌆", desc: "함께 사는 사람들의 큰 집단이에요.", examples: [
      { en: "We live in a society.", ko: "우리는 사회 속에서 살아요." },
      { en: "Society is changing.", ko: "사회는 변하고 있어요." },
      { en: "We should help society.", ko: "우리는 사회를 도와야 해요." },
    ]},
    { id: "mid-43", word: "teenager", ipa: "/ˈtiːn.eɪ.dʒər/", meaningKo: "십대/청소년", emoji: "🧑", desc: "13세에서 19세 사이의 사람이에요.", examples: [
      { en: "I am a teenager.", ko: "나는 십대예요." },
      { en: "Teenagers like music.", ko: "십대들은 음악을 좋아해요." },
      { en: "She is a teenager now.", ko: "그녀는 이제 십대예요." },
    ]},
    { id: "mid-44", word: "adult", ipa: "/əˈdʌlt/", meaningKo: "성인", emoji: "🧑‍💼", desc: "다 자란 사람이에요.", examples: [
      { en: "I will be an adult soon.", ko: "나는 곧 성인이 돼요." },
      { en: "Adults work hard.", ko: "성인들은 열심히 일해요." },
      { en: "An adult must be responsible.", ko: "성인은 책임감이 있어야 해요." },
    ]},
    { id: "mid-45", word: "childhood", ipa: "/ˈtʃaɪld.hʊd/", meaningKo: "어린 시절", emoji: "🧒", desc: "어린이였던 시기를 말해요.", examples: [
      { en: "I had a happy childhood.", ko: "나는 행복한 어린 시절을 보냈어요." },
      { en: "She remembers her childhood.", ko: "그녀는 어린 시절을 기억해요." },
      { en: "Childhood memories are precious.", ko: "어린 시절의 추억은 소중해요." },
    ]},
    { id: "mid-46", word: "elderly", ipa: "/ˈel.dər.li/", meaningKo: "나이 든/어르신", emoji: "👴", desc: "나이가 많은 사람을 정중하게 부르는 말이에요.", examples: [
      { en: "We respect the elderly.", ko: "우리는 어르신들을 존중해요." },
      { en: "The elderly need care.", ko: "어르신들은 돌봄이 필요해요." },
      { en: "My grandmother is elderly.", ko: "우리 할머니는 연세가 많으세요." },
    ]},
    { id: "mid-47", word: "peer", ipa: "/pɪr/", meaningKo: "또래", emoji: "👥", desc: "나이나 지위가 비슷한 사람이에요.", examples: [
      { en: "I learn from my peers.", ko: "나는 또래에게서 배워요." },
      { en: "Peer pressure is strong.", ko: "또래 압력은 강해요." },
      { en: "My peers support me.", ko: "내 또래들은 나를 응원해요." },
    ]},
    { id: "mid-48", word: "classmate", ipa: "/ˈklæs.meɪt/", meaningKo: "반 친구", emoji: "🧑‍🎓", desc: "같은 반에서 공부하는 친구예요.", examples: [
      { en: "He is my classmate.", ko: "그는 내 반 친구예요." },
      { en: "My classmates are friendly.", ko: "내 반 친구들은 다정해요." },
      { en: "I study with my classmates.", ko: "나는 반 친구들과 공부해요." },
    ]},
    { id: "mid-49", word: "confident", ipa: "/ˈkɒn.fɪ.dənt/", meaningKo: "자신감 있는", emoji: "😎", desc: "스스로를 믿는 태도예요.", examples: [
      { en: "I am confident.", ko: "나는 자신감이 있어요." },
      { en: "She looks confident.", ko: "그녀는 자신감 있어 보여요." },
      { en: "Be confident in yourself.", ko: "자신을 믿어." },
    ]},
    { id: "mid-50", word: "humble", ipa: "/ˈhʌm.bəl/", meaningKo: "겸손한", emoji: "🙏", desc: "잘난 척하지 않는 태도예요.", examples: [
      { en: "He is humble.", ko: "그는 겸손해요." },
      { en: "She stayed humble.", ko: "그녀는 겸손함을 유지했어요." },
      { en: "Being humble is important.", ko: "겸손한 것은 중요해요." },
    ]},
    { id: "mid-51", word: "stubborn", ipa: "/ˈstʌb.ərn/", meaningKo: "고집 센", emoji: "🐴", desc: "생각을 잘 바꾸지 않는 성격이에요.", examples: [
      { en: "He is stubborn.", ko: "그는 고집이 세요." },
      { en: "My brother is very stubborn.", ko: "내 남동생은 고집이 아주 세요." },
      { en: "Don't be so stubborn.", ko: "그렇게 고집부리지 마." },
    ]},
    { id: "mid-52", word: "generous", ipa: "/ˈdʒen.ər.əs/", meaningKo: "관대한/후한", emoji: "🎁", desc: "아낌없이 나누는 성격이에요.", examples: [
      { en: "She is generous.", ko: "그녀는 관대해요." },
      { en: "He is generous with his time.", ko: "그는 시간을 아낌없이 내줘요." },
      { en: "Thank you for being generous.", ko: "관대하게 대해줘서 고마워요." },
    ]},
    { id: "mid-53", word: "jealous", ipa: "/ˈdʒel.əs/", meaningKo: "질투하는", emoji: "😤", desc: "부러워서 시기하는 감정이에요.", examples: [
      { en: "I am jealous.", ko: "나는 질투가 나요." },
      { en: "He looks jealous.", ko: "그는 질투하는 것 같아요." },
      { en: "Don't be jealous.", ko: "질투하지 마." },
    ]},
    { id: "mid-54", word: "ambitious", ipa: "/æmˈbɪʃ.əs/", meaningKo: "야심 있는", emoji: "🎯", desc: "큰 목표를 이루고 싶어 하는 성격이에요.", examples: [
      { en: "She is ambitious.", ko: "그녀는 야심이 있어요." },
      { en: "He has ambitious goals.", ko: "그는 야심 찬 목표를 가지고 있어요." },
      { en: "Being ambitious is good.", ko: "야심이 있는 것은 좋아요." },
    ]},
    { id: "mid-55", word: "cautious", ipa: "/ˈkɔː.ʃəs/", meaningKo: "조심스러운", emoji: "🚸", desc: "위험을 피하려고 조심하는 태도예요.", examples: [
      { en: "Be cautious.", ko: "조심해." },
      { en: "He is a cautious driver.", ko: "그는 조심스러운 운전자예요." },
      { en: "We should be cautious.", ko: "우리는 조심해야 해요." },
    ]},
    { id: "mid-56", word: "optimistic", ipa: "/ˌɒp.tɪˈmɪs.tɪk/", meaningKo: "낙관적인", emoji: "🌞", desc: "좋은 일이 있을 거라고 믿는 태도예요.", examples: [
      { en: "I am optimistic.", ko: "나는 낙관적이에요." },
      { en: "She is always optimistic.", ko: "그녀는 항상 낙관적이에요." },
      { en: "Stay optimistic.", ko: "낙관적으로 지내." },
    ]},
    { id: "mid-57", word: "pessimistic", ipa: "/ˌpes.ɪˈmɪs.tɪk/", meaningKo: "비관적인", emoji: "🌧", desc: "안 좋은 일이 있을 거라고 믿는 태도예요.", examples: [
      { en: "Don't be pessimistic.", ko: "비관적이지 마." },
      { en: "He is pessimistic about the future.", ko: "그는 미래에 대해 비관적이에요." },
      { en: "She feels pessimistic today.", ko: "그녀는 오늘 비관적인 기분이에요." },
    ]},
    { id: "mid-58", word: "sensitive", ipa: "/ˈsen.sə.tɪv/", meaningKo: "예민한/민감한", emoji: "🌸", desc: "감정이나 자극에 민감하게 반응하는 성격이에요.", examples: [
      { en: "I am sensitive.", ko: "나는 예민해요." },
      { en: "She is sensitive to criticism.", ko: "그녀는 비판에 민감해요." },
      { en: "This is a sensitive topic.", ko: "이것은 민감한 주제예요." },
    ]},
    { id: "mid-59", word: "theory", ipa: "/ˈθɪr.i/", meaningKo: "이론", emoji: "📚", desc: "어떤 현상을 설명하는 체계적인 생각이에요.", examples: [
      { en: "We learned a new theory.", ko: "우리는 새로운 이론을 배웠어요." },
      { en: "The theory makes sense.", ko: "그 이론은 말이 돼요." },
      { en: "Scientists test theories.", ko: "과학자들은 이론을 검증해요." },
    ]},
    { id: "mid-60", word: "formula", ipa: "/ˈfɔːr.mjə.lə/", meaningKo: "공식", emoji: "🧮", desc: "계산이나 원리를 나타내는 식이에요.", examples: [
      { en: "I know the formula.", ko: "나는 그 공식을 알아요." },
      { en: "This formula is useful.", ko: "이 공식은 유용해요." },
      { en: "We use a formula to solve it.", ko: "우리는 공식을 사용해서 그것을 풀어요." },
    ]},
    { id: "mid-61", word: "chemical", ipa: "/ˈkem.ɪ.kəl/", meaningKo: "화학 물질/화학의", emoji: "🧪", desc: "화학 반응과 관련된 물질이에요.", examples: [
      { en: "This is a chemical reaction.", ko: "이것은 화학 반응이에요." },
      { en: "Handle chemicals carefully.", ko: "화학 물질을 조심히 다뤄." },
      { en: "Chemicals can be dangerous.", ko: "화학 물질은 위험할 수 있어요." },
    ]},
    { id: "mid-62", word: "laboratory", ipa: "/ˈlæb.rə.tɔːr.i/", meaningKo: "실험실", emoji: "🔬", desc: "실험을 하는 장소예요.", examples: [
      { en: "We work in the laboratory.", ko: "우리는 실험실에서 일해요." },
      { en: "The laboratory is clean.", ko: "그 실험실은 깨끗해요." },
      { en: "Scientists use a laboratory.", ko: "과학자들은 실험실을 사용해요." },
    ]},
    { id: "mid-63", word: "organism", ipa: "/ˈɔːr.gə.nɪ.zəm/", meaningKo: "생물", emoji: "🦠", desc: "살아 있는 생명체예요.", examples: [
      { en: "A tree is a living organism.", ko: "나무는 살아있는 생물이에요." },
      { en: "We studied tiny organisms.", ko: "우리는 아주 작은 생물을 공부했어요." },
      { en: "Every organism needs energy.", ko: "모든 생물은 에너지가 필요해요." },
    ]},
    { id: "mid-64", word: "species", ipa: "/ˈspiː.ʃiːz/", meaningKo: "종(생물)", emoji: "🐾", desc: "같은 특징을 가진 생물의 무리예요.", examples: [
      { en: "This is a rare species.", ko: "이것은 희귀한 종이에요." },
      { en: "Many species live in the forest.", ko: "많은 종이 숲에 살아요." },
      { en: "We protect endangered species.", ko: "우리는 멸종 위기종을 보호해요." },
    ]},
    { id: "mid-65", word: "evolution", ipa: "/ˌev.əˈluː.ʃən/", meaningKo: "진화", emoji: "🧬", desc: "생물이 오랜 시간 변화하는 과정이에요.", examples: [
      { en: "We study evolution.", ko: "우리는 진화를 공부해요." },
      { en: "Evolution takes a long time.", ko: "진화는 오랜 시간이 걸려요." },
      { en: "Darwin studied evolution.", ko: "다윈은 진화를 연구했어요." },
    ]},
    { id: "mid-66", word: "oxygen", ipa: "/ˈɒk.sɪ.dʒən/", meaningKo: "산소", emoji: "🫧", desc: "우리가 숨 쉬는 데 필요한 기체예요.", examples: [
      { en: "We need oxygen.", ko: "우리는 산소가 필요해요." },
      { en: "Plants produce oxygen.", ko: "식물은 산소를 만들어요." },
      { en: "Oxygen is invisible.", ko: "산소는 눈에 보이지 않아요." },
    ]},
    { id: "mid-67", word: "atom", ipa: "/ˈæt.əm/", meaningKo: "원자", emoji: "⚛️", desc: "물질을 이루는 아주 작은 알갱이예요.", examples: [
      { en: "Everything is made of atoms.", ko: "모든 것은 원자로 이루어져 있어요." },
      { en: "An atom is very small.", ko: "원자는 아주 작아요." },
      { en: "We learned about atoms.", ko: "우리는 원자에 대해 배웠어요." },
    ]},
    { id: "mid-68", word: "molecule", ipa: "/ˈmɒl.ɪ.kjuːl/", meaningKo: "분자", emoji: "🧫", desc: "원자들이 모여 이루어진 것이에요.", examples: [
      { en: "Water is a molecule.", ko: "물은 분자예요." },
      { en: "A molecule has atoms.", ko: "분자는 원자를 가지고 있어요." },
      { en: "We study molecules in science.", ko: "우리는 과학 시간에 분자를 공부해요." },
    ]},
    { id: "mid-69", word: "media", ipa: "/ˈmiː.di.ə/", meaningKo: "매체/미디어", emoji: "📺", desc: "정보를 전달하는 신문, 방송 등을 말해요.", examples: [
      { en: "I watch the media.", ko: "나는 미디어를 봐요." },
      { en: "Social media is popular.", ko: "소셜 미디어는 인기가 많아요." },
      { en: "The media reported the news.", ko: "미디어가 그 뉴스를 보도했어요." },
    ]},
    { id: "mid-70", word: "advertisement", ipa: "/ˌæd.vərˈtaɪz.mənt/", meaningKo: "광고", emoji: "📣", desc: "물건이나 서비스를 알리는 것이에요.", examples: [
      { en: "I saw an advertisement.", ko: "나는 광고를 봤어요." },
      { en: "The advertisement is funny.", ko: "그 광고는 재미있어요." },
      { en: "Companies make advertisements.", ko: "회사들은 광고를 만들어요." },
    ]},
    { id: "mid-71", word: "website", ipa: "/ˈweb.saɪt/", meaningKo: "웹사이트", emoji: "🌐", desc: "인터넷에서 정보를 보여주는 곳이에요.", examples: [
      { en: "I visit this website.", ko: "나는 이 웹사이트를 방문해요." },
      { en: "The website is useful.", ko: "그 웹사이트는 유용해요." },
      { en: "We made a new website.", ko: "우리는 새 웹사이트를 만들었어요." },
    ]},
    { id: "mid-72", word: "application", ipa: "/ˌæp.lɪˈkeɪ.ʃən/", meaningKo: "애플리케이션/신청서", emoji: "📱", desc: "휴대폰에서 쓰는 프로그램이거나 신청서예요.", examples: [
      { en: "I downloaded an application.", ko: "나는 애플리케이션을 다운로드했어요." },
      { en: "This app is fun.", ko: "이 앱은 재미있어요." },
      { en: "I filled out an application.", ko: "나는 신청서를 작성했어요." },
    ]},
    { id: "mid-73", word: "network", ipa: "/ˈnet.wɜːrk/", meaningKo: "네트워크/연결망", emoji: "🌐", desc: "서로 연결된 시스템이에요.", examples: [
      { en: "We use the school network.", ko: "우리는 학교 네트워크를 사용해요." },
      { en: "The network is slow.", ko: "네트워크가 느려요." },
      { en: "A social network connects people.", ko: "소셜 네트워크는 사람들을 연결해요." },
    ]},
    { id: "mid-74", word: "digital", ipa: "/ˈdɪdʒ.ɪ.təl/", meaningKo: "디지털의", emoji: "💾", desc: "컴퓨터로 처리되는 방식을 말해요.", examples: [
      { en: "I use a digital camera.", ko: "나는 디지털 카메라를 사용해요." },
      { en: "Digital devices are common.", ko: "디지털 기기는 흔해요." },
      { en: "We live in a digital world.", ko: "우리는 디지털 세상에 살아요." },
    ]},
    { id: "mid-75", word: "online", ipa: "/ˈɒn.laɪn/", meaningKo: "온라인의", emoji: "💻", desc: "인터넷에 연결된 상태를 말해요.", examples: [
      { en: "I study online.", ko: "나는 온라인으로 공부해요." },
      { en: "We shop online.", ko: "우리는 온라인으로 쇼핑해요." },
      { en: "The class is online today.", ko: "오늘 수업은 온라인이에요." },
    ]},
    { id: "mid-76", word: "virtual", ipa: "/ˈvɜːr.tʃu.əl/", meaningKo: "가상의", emoji: "🕶", desc: "실제가 아닌 컴퓨터로 만든 것이에요.", examples: [
      { en: "We have a virtual meeting.", ko: "우리는 가상 회의를 해요." },
      { en: "Virtual reality is fun.", ko: "가상 현실은 재미있어요." },
      { en: "This is a virtual world.", ko: "이것은 가상 세계예요." },
    ]},
    { id: "mid-77", word: "poverty", ipa: "/ˈpɒv.ər.ti/", meaningKo: "빈곤", emoji: "💸", desc: "돈이 부족해서 어렵게 사는 상태예요.", examples: [
      { en: "We fight poverty.", ko: "우리는 빈곤과 싸워요." },
      { en: "Poverty is a big problem.", ko: "빈곤은 큰 문제예요." },
      { en: "Many people live in poverty.", ko: "많은 사람이 빈곤 속에 살아요." },
    ]},
    { id: "mid-78", word: "pollution", ipa: "/pəˈluː.ʃən/", meaningKo: "오염", emoji: "🏭", desc: "환경이 더러워지는 것이에요.", examples: [
      { en: "We reduce pollution.", ko: "우리는 오염을 줄여요." },
      { en: "Air pollution is bad.", ko: "대기 오염은 나빠요." },
      { en: "Pollution harms nature.", ko: "오염은 자연에 해를 끼쳐요." },
    ]},
    { id: "mid-79", word: "resource", ipa: "/ˈriː.sɔːrs/", meaningKo: "자원", emoji: "🌾", desc: "생활에 필요한 것을 말해요.", examples: [
      { en: "Water is a resource.", ko: "물은 자원이에요." },
      { en: "We save resources.", ko: "우리는 자원을 아껴요." },
      { en: "Natural resources are limited.", ko: "천연자원은 한정되어 있어요." },
    ]},
    { id: "mid-80", word: "renewable", ipa: "/rɪˈnjuː.ə.bəl/", meaningKo: "재생 가능한", emoji: "🔄", desc: "다시 쓸 수 있게 만들어진다는 뜻이에요.", examples: [
      { en: "Solar power is renewable.", ko: "태양 에너지는 재생 가능해요." },
      { en: "We use renewable energy.", ko: "우리는 재생 가능 에너지를 사용해요." },
      { en: "Renewable resources help the planet.", ko: "재생 가능 자원은 지구를 도와요." },
    ]},
    { id: "mid-81", word: "refugee", ipa: "/ˌref.juˈdʒiː/", meaningKo: "난민", emoji: "🏕", desc: "고향을 떠나야 했던 사람이에요.", examples: [
      { en: "We help refugees.", ko: "우리는 난민을 도와요." },
      { en: "The refugee found a new home.", ko: "그 난민은 새 집을 찾았어요." },
      { en: "Refugees need support.", ko: "난민들은 지원이 필요해요." },
    ]},
    { id: "mid-82", word: "charity", ipa: "/ˈtʃær.ə.ti/", meaningKo: "자선 단체/자선", emoji: "❤️", desc: "어려운 사람을 돕는 활동이에요.", examples: [
      { en: "We donate to charity.", ko: "우리는 자선단체에 기부해요." },
      { en: "The charity helps children.", ko: "그 자선단체는 아이들을 도와요." },
      { en: "I volunteer for charity.", ko: "나는 자선활동에 자원봉사를 해요." },
    ]},
    { id: "mid-83", word: "donation", ipa: "/doʊˈneɪ.ʃən/", meaningKo: "기부", emoji: "🎁", desc: "돈이나 물건을 나눠주는 것이에요.", examples: [
      { en: "I made a donation.", ko: "나는 기부를 했어요." },
      { en: "The donation helped many people.", ko: "그 기부는 많은 사람을 도왔어요." },
      { en: "We collect donations.", ko: "우리는 기부를 모아요." },
    ]},
    { id: "mid-84", word: "inequality", ipa: "/ˌɪn.ɪˈkwɒl.ə.ti/", meaningKo: "불평등", emoji: "⚖️", desc: "공평하지 않은 상태예요.", examples: [
      { en: "We fight inequality.", ko: "우리는 불평등과 싸워요." },
      { en: "Inequality is a problem.", ko: "불평등은 문제예요." },
      { en: "We should reduce inequality.", ko: "우리는 불평등을 줄여야 해요." },
    ]},
    { id: "mid-85", word: "globalization", ipa: "/ˌgloʊ.bəl.aɪˈzeɪ.ʃən/", meaningKo: "세계화", emoji: "🌐", desc: "세계가 하나로 연결되는 것이에요.", examples: [
      { en: "Globalization connects countries.", ko: "세계화는 나라들을 연결해요." },
      { en: "We study globalization.", ko: "우리는 세계화를 공부해요." },
      { en: "Globalization changes our lives.", ko: "세계화는 우리의 삶을 바꿔요." },
    ]},
    { id: "mid-86", word: "overpopulation", ipa: "/ˌoʊ.vər.pɒp.jəˈleɪ.ʃən/", meaningKo: "인구 과잉", emoji: "👥", desc: "사람이 너무 많아지는 것이에요.", examples: [
      { en: "Overpopulation is a concern.", ko: "인구 과잉은 걱정거리예요." },
      { en: "Cities face overpopulation.", ko: "도시들은 인구 과잉에 직면해요." },
      { en: "We discuss overpopulation.", ko: "우리는 인구 과잉에 대해 토론해요." },
    ]},
    { id: "mid-87", word: "grammar", ipa: "/ˈgræm.ər/", meaningKo: "문법", emoji: "📘", desc: "언어의 규칙이에요.", examples: [
      { en: "I study grammar.", ko: "나는 문법을 공부해요." },
      { en: "English grammar is tricky.", ko: "영어 문법은 까다로워요." },
      { en: "Grammar helps us speak correctly.", ko: "문법은 우리가 정확하게 말하도록 도와요." },
    ]},
    { id: "mid-88", word: "vocabulary", ipa: "/vəˈkæb.jə.ler.i/", meaningKo: "어휘", emoji: "📚", desc: "알고 있는 단어들이에요.", examples: [
      { en: "I learn new vocabulary.", ko: "나는 새로운 어휘를 배워요." },
      { en: "My vocabulary is growing.", ko: "내 어휘력이 늘고 있어요." },
      { en: "Vocabulary helps you read well.", ko: "어휘력은 읽기에 도움이 돼요." },
    ]},
    { id: "mid-89", word: "pronunciation", ipa: "/prəˌnʌn.siˈeɪ.ʃən/", meaningKo: "발음", emoji: "🗣", desc: "말을 소리 내는 방법이에요.", examples: [
      { en: "My pronunciation is improving.", ko: "내 발음이 좋아지고 있어요." },
      { en: "Practice your pronunciation.", ko: "발음을 연습해." },
      { en: "Good pronunciation helps communication.", ko: "좋은 발음은 의사소통에 도움이 돼요." },
    ]},
    { id: "mid-90", word: "paragraph", ipa: "/ˈpær.ə.græf/", meaningKo: "문단", emoji: "📄", desc: "여러 문장이 모인 글의 단위예요.", examples: [
      { en: "Write a paragraph.", ko: "문단을 써." },
      { en: "This paragraph is clear.", ko: "이 문단은 명확해요." },
      { en: "I read the first paragraph.", ko: "나는 첫 번째 문단을 읽었어요." },
    ]},
    { id: "mid-91", word: "summary", ipa: "/ˈsʌm.ər.i/", meaningKo: "요약", emoji: "📝", desc: "짧게 정리한 내용이에요.", examples: [
      { en: "Write a summary.", ko: "요약을 써." },
      { en: "The summary is short.", ko: "그 요약은 짧아요." },
      { en: "I read a summary of the book.", ko: "나는 그 책의 요약을 읽었어요." },
    ]},
    { id: "mid-92", word: "essay", ipa: "/ˈes.eɪ/", meaningKo: "에세이/수필", emoji: "📝", desc: "생각을 글로 쓴 것이에요.", examples: [
      { en: "I wrote an essay.", ko: "나는 에세이를 썼어요." },
      { en: "The essay is interesting.", ko: "그 에세이는 흥미로워요." },
      { en: "We submit our essays.", ko: "우리는 에세이를 제출해요." },
    ]},
    { id: "mid-93", word: "literature", ipa: "/ˈlɪt.ər.ə.tʃər/", meaningKo: "문학", emoji: "📖", desc: "소설이나 시 같은 예술적인 글이에요.", examples: [
      { en: "I study literature.", ko: "나는 문학을 공부해요." },
      { en: "Literature class is fun.", ko: "문학 수업은 재미있어요." },
      { en: "I love classic literature.", ko: "나는 고전 문학을 좋아해요." },
    ]},
    { id: "mid-94", word: "poem", ipa: "/ˈpoʊ.əm/", meaningKo: "시", emoji: "✒️", desc: "느낌을 짧게 표현한 글이에요.", examples: [
      { en: "I wrote a poem.", ko: "나는 시를 썼어요." },
      { en: "The poem is beautiful.", ko: "그 시는 아름다워요." },
      { en: "We read a poem in class.", ko: "우리는 수업에서 시를 읽었어요." },
    ]},
    { id: "mid-95", word: "economy", ipa: "/ɪˈkɒn.ə.mi/", meaningKo: "경제", emoji: "💹", desc: "돈과 물건이 오가는 사회 시스템이에요.", examples: [
      { en: "The economy is growing.", ko: "경제가 성장하고 있어요." },
      { en: "We study the economy.", ko: "우리는 경제를 공부해요." },
      { en: "A strong economy helps people.", ko: "튼튼한 경제는 사람들을 도와요." },
    ]},
    { id: "mid-96", word: "trade", ipa: "/treɪd/", meaningKo: "무역/거래", emoji: "🚢", desc: "물건을 사고파는 것이에요.", examples: [
      { en: "Countries trade goods.", ko: "나라들은 물건을 거래해요." },
      { en: "Trade is important.", ko: "무역은 중요해요." },
      { en: "We trade with other countries.", ko: "우리는 다른 나라와 무역해요." },
    ]},
    { id: "mid-97", word: "product", ipa: "/ˈprɒd.ʌkt/", meaningKo: "제품", emoji: "📦", desc: "만들어서 파는 물건이에요.", examples: [
      { en: "This is a new product.", ko: "이것은 새 제품이에요." },
      { en: "The product is popular.", ko: "그 제품은 인기가 많아요." },
      { en: "We sell many products.", ko: "우리는 많은 제품을 팔아요." },
    ]},
    { id: "mid-98", word: "customer", ipa: "/ˈkʌs.tə.mər/", meaningKo: "고객", emoji: "🛍", desc: "물건을 사는 사람이에요.", examples: [
      { en: "The customer is happy.", ko: "그 고객은 만족해요." },
      { en: "We help our customers.", ko: "우리는 고객을 도와요." },
      { en: "A new customer came in.", ko: "새로운 고객이 들어왔어요." },
    ]},
    { id: "mid-99", word: "price", ipa: "/praɪs/", meaningKo: "가격", emoji: "💲", desc: "물건의 값이에요.", examples: [
      { en: "The price is high.", ko: "가격이 비싸요." },
      { en: "I checked the price.", ko: "나는 가격을 확인했어요." },
      { en: "The price dropped.", ko: "가격이 떨어졌어요." },
    ]},
    { id: "mid-100", word: "profit", ipa: "/ˈprɒf.ɪt/", meaningKo: "이익", emoji: "💰", desc: "번 돈에서 남는 것이에요.", examples: [
      { en: "The company made a profit.", ko: "그 회사는 이익을 냈어요." },
      { en: "We increased our profit.", ko: "우리는 이익을 늘렸어요." },
      { en: "Profit is important for a business.", ko: "이익은 사업에 중요해요." },
    ]},
    { id: "mid-101", word: "budget", ipa: "/ˈbʌdʒ.ɪt/", meaningKo: "예산", emoji: "💵", desc: "쓸 돈을 미리 계획한 것이에요.", examples: [
      { en: "We have a budget.", ko: "우리는 예산이 있어요." },
      { en: "Stay within your budget.", ko: "예산 안에서 써." },
      { en: "The budget is limited.", ko: "예산이 한정되어 있어요." },
    ]},
    { id: "mid-102", word: "currency", ipa: "/ˈkʌr.ən.si/", meaningKo: "통화/화폐", emoji: "💴", desc: "나라에서 쓰는 돈의 종류예요.", examples: [
      { en: "Korea's currency is the won.", ko: "한국의 화폐는 원이에요." },
      { en: "We exchanged currency.", ko: "우리는 화폐를 환전했어요." },
      { en: "Different countries use different currency.", ko: "나라마다 다른 화폐를 사용해요." },
    ]},
    { id: "mid-103", word: "reliable", ipa: "/rɪˈlaɪ.ə.bəl/", meaningKo: "믿을 수 있는", emoji: "🤝", desc: "믿고 의지할 수 있다는 뜻이에요.", examples: [
      { en: "She is reliable.", ko: "그녀는 믿을 수 있어요." },
      { en: "This car is reliable.", ko: "이 차는 믿을 수 있어요." },
      { en: "We need reliable information.", ko: "우리는 믿을 수 있는 정보가 필요해요." },
    ]},
    { id: "mid-104", word: "creative", ipa: "/kriˈeɪ.tɪv/", meaningKo: "창의적인", emoji: "🎨", desc: "새로운 생각을 잘 해낸다는 뜻이에요.", examples: [
      { en: "He is creative.", ko: "그는 창의적이에요." },
      { en: "She has a creative idea.", ko: "그녀는 창의적인 아이디어가 있어요." },
      { en: "We need creative solutions.", ko: "우리는 창의적인 해결책이 필요해요." },
    ]},
    { id: "mid-105", word: "logical", ipa: "/ˈlɒdʒ.ɪ.kəl/", meaningKo: "논리적인", emoji: "🧠", desc: "이치에 맞는다는 뜻이에요.", examples: [
      { en: "That is logical.", ko: "그것은 논리적이에요." },
      { en: "He gave a logical answer.", ko: "그는 논리적인 대답을 했어요." },
      { en: "We need a logical plan.", ko: "우리는 논리적인 계획이 필요해요." },
    ]},
    { id: "mid-106", word: "practical", ipa: "/ˈpræk.tɪ.kəl/", meaningKo: "실용적인", emoji: "🛠", desc: "실제로 쓸모가 있다는 뜻이에요.", examples: [
      { en: "This idea is practical.", ko: "이 아이디어는 실용적이에요." },
      { en: "She is practical.", ko: "그녀는 실용적이에요." },
      { en: "We need a practical solution.", ko: "우리는 실용적인 해결책이 필요해요." },
    ]},
    { id: "mid-107", word: "realistic", ipa: "/ˌrɪə.lɪˈstɪk/", meaningKo: "현실적인", emoji: "🧐", desc: "실제와 비슷하거나 이룰 수 있다는 뜻이에요.", examples: [
      { en: "Be realistic.", ko: "현실적으로 생각해." },
      { en: "This plan is realistic.", ko: "이 계획은 현실적이에요." },
      { en: "We set realistic goals.", ko: "우리는 현실적인 목표를 세워요." },
    ]},
    { id: "mid-108", word: "typical", ipa: "/ˈtɪp.ɪ.kəl/", meaningKo: "전형적인", emoji: "📋", desc: "보통 그런 특징을 가진다는 뜻이에요.", examples: [
      { en: "This is a typical day.", ko: "이것은 전형적인 하루예요." },
      { en: "It's typical of him.", ko: "그다운 행동이에요." },
      { en: "A typical meal here includes rice.", ko: "이곳의 전형적인 식사에는 밥이 포함돼요." },
    ]},
    { id: "mid-109", word: "unique", ipa: "/juˈniːk/", meaningKo: "독특한/유일한", emoji: "✨", desc: "다른 것과 다르게 특별하다는 뜻이에요.", examples: [
      { en: "This design is unique.", ko: "이 디자인은 독특해요." },
      { en: "She has a unique style.", ko: "그녀는 독특한 스타일을 가지고 있어요." },
      { en: "Everyone is unique.", ko: "모든 사람은 유일해요." },
    ]},
    { id: "mid-110", word: "mutual", ipa: "/ˈmjuː.tʃu.əl/", meaningKo: "상호의", emoji: "🤝", desc: "서로 같이 느끼거나 나눈다는 뜻이에요.", examples: [
      { en: "We have mutual respect.", ko: "우리는 서로 존중해요." },
      { en: "It was a mutual decision.", ko: "그것은 상호 합의된 결정이었어요." },
      { en: "We share a mutual friend.", ko: "우리는 공통의 친구가 있어요." },
    ]},
    { id: "mid-111", word: "superior", ipa: "/suˈpɪr.i.ər/", meaningKo: "우수한/우월한", emoji: "🥇", desc: "다른 것보다 더 뛰어나다는 뜻이에요.", examples: [
      { en: "This product is superior.", ko: "이 제품은 우수해요." },
      { en: "She has superior skills.", ko: "그녀는 뛰어난 실력을 가지고 있어요." },
      { en: "The team showed superior teamwork.", ko: "그 팀은 뛰어난 팀워크를 보여줬어요." },
    ]},
    { id: "mid-112", word: "inferior", ipa: "/ɪnˈfɪr.i.ər/", meaningKo: "열등한", emoji: "🥉", desc: "다른 것보다 못하다는 뜻이에요.", examples: [
      { en: "This is not inferior.", ko: "이것은 열등하지 않아요." },
      { en: "Don't feel inferior.", ko: "열등감을 느끼지 마." },
      { en: "The copy is inferior to the original.", ko: "그 복제품은 원본보다 못해요." },
    ]},
    { id: "mid-113", word: "argue", ipa: "/ˈɑːr.gjuː/", meaningKo: "논쟁하다/주장하다", emoji: "💢", desc: "의견이 달라서 다투거나 주장하는 것이에요.", examples: [
      { en: "They argue a lot.", ko: "그들은 자주 다퉈요." },
      { en: "Don't argue with me.", ko: "나랑 다투지 마." },
      { en: "She argued for her idea.", ko: "그녀는 자신의 생각을 주장했어요." },
    ]},
    { id: "mid-114", word: "persuade", ipa: "/pərˈsweɪd/", meaningKo: "설득하다", emoji: "🗣", desc: "다른 사람의 마음을 바꾸도록 설명하는 것이에요.", examples: [
      { en: "I persuaded him.", ko: "나는 그를 설득했어요." },
      { en: "She tried to persuade me.", ko: "그녀는 나를 설득하려고 했어요." },
      { en: "We need to persuade the team.", ko: "우리는 팀을 설득해야 해요." },
    ]},
    { id: "mid-115", word: "apologize", ipa: "/əˈpɒl.ə.dʒaɪz/", meaningKo: "사과하다", emoji: "🙏", desc: "미안하다고 말하는 것이에요.", examples: [
      { en: "I apologize.", ko: "사과할게요." },
      { en: "He apologized to me.", ko: "그는 나에게 사과했어요." },
      { en: "You should apologize.", ko: "너는 사과해야 해." },
    ]},
    { id: "mid-116", word: "complain", ipa: "/kəmˈpleɪn/", meaningKo: "불평하다", emoji: "😤", desc: "불만을 말하는 것이에요.", examples: [
      { en: "Don't complain.", ko: "불평하지 마." },
      { en: "She complained about the food.", ko: "그녀는 음식에 대해 불평했어요." },
      { en: "We complained to the manager.", ko: "우리는 매니저에게 불평했어요." },
    ]},
    { id: "mid-117", word: "suggest", ipa: "/səˈdʒest/", meaningKo: "제안하다", emoji: "💡", desc: "생각이나 방법을 제시하는 것이에요.", examples: [
      { en: "I suggest a plan.", ko: "나는 계획을 제안해요." },
      { en: "She suggested a new idea.", ko: "그녀는 새로운 아이디어를 제안했어요." },
      { en: "Can you suggest a book?", ko: "책을 추천해줄 수 있어?" },
    ]},
    { id: "mid-118", word: "agree", ipa: "/əˈgriː/", meaningKo: "동의하다", emoji: "👍", desc: "같은 생각이라고 말하는 것이에요.", examples: [
      { en: "I agree with you.", ko: "나는 너에게 동의해." },
      { en: "We agree on the plan.", ko: "우리는 계획에 동의해요." },
      { en: "Do you agree?", ko: "동의하니?" },
    ]},
    { id: "mid-119", word: "disagree", ipa: "/ˌdɪs.əˈgriː/", meaningKo: "반대하다/동의하지 않다", emoji: "👎", desc: "다른 생각이라고 말하는 것이에요.", examples: [
      { en: "I disagree with you.", ko: "나는 너에게 동의하지 않아." },
      { en: "We disagree on this.", ko: "우리는 이것에 대해 의견이 달라요." },
      { en: "It's okay to disagree.", ko: "동의하지 않아도 괜찮아." },
    ]},
    { id: "mid-120", word: "request", ipa: "/rɪˈkwest/", meaningKo: "요청하다/요청", emoji: "🙋", desc: "무언가를 부탁하는 것이에요.", examples: [
      { en: "I have a request.", ko: "나는 요청이 있어요." },
      { en: "She requested help.", ko: "그녀는 도움을 요청했어요." },
      { en: "Please make your request.", ko: "요청 사항을 말씀해 주세요." },
    ]},
  ],

  "high": [
    { id: "high-01", word: "significant", ipa: "/sɪgˈnɪf.ɪ.kənt/", meaningKo: "중요한/상당한", emoji: "📌", desc: "매우 중요하거나 의미가 크다는 뜻이에요.", examples: [
      { en: "This is a significant discovery.", ko: "이것은 중요한 발견이에요." },
      { en: "There was a significant change.", ko: "상당한 변화가 있었어요." },
      { en: "Her contribution was significant.", ko: "그녀의 기여는 상당했어요." },
    ]},
    { id: "high-02", word: "phenomenon", ipa: "/fəˈnɒm.ɪ.nən/", meaningKo: "현상", emoji: "🌈", desc: "관찰되는 특별한 일이나 사건을 말해요.", examples: [
      { en: "A rainbow is a natural phenomenon.", ko: "무지개는 자연 현상이에요." },
      { en: "This is a common phenomenon.", ko: "이것은 흔한 현상이에요." },
      { en: "Scientists study this phenomenon.", ko: "과학자들은 이 현상을 연구해요." },
    ]},
    { id: "high-03", word: "controversy", ipa: "/ˈkɒn.trə.vɜː.si/", meaningKo: "논쟁", emoji: "⚡", desc: "사람들 사이에 의견이 크게 갈리는 문제예요.", examples: [
      { en: "The plan caused controversy.", ko: "그 계획은 논쟁을 일으켰어요." },
      { en: "There is controversy over the new law.", ko: "새 법에 대한 논쟁이 있어요." },
      { en: "The topic sparked much controversy.", ko: "그 주제는 많은 논쟁을 불러일으켰어요." },
    ]},
    { id: "high-04", word: "perspective", ipa: "/pərˈspek.tɪv/", meaningKo: "관점", emoji: "👓", desc: "어떤 일을 바라보는 방식이에요.", examples: [
      { en: "Try to see it from her perspective.", ko: "그녀의 관점에서 보려고 해봐." },
      { en: "Everyone has a different perspective.", ko: "모두 다른 관점을 가지고 있어요." },
      { en: "This book offers a new perspective.", ko: "이 책은 새로운 관점을 제공해요." },
    ]},
    { id: "high-05", word: "sustainable", ipa: "/səˈsteɪ.nə.bəl/", meaningKo: "지속 가능한", emoji: "🌱", desc: "환경을 해치지 않고 오래 유지할 수 있다는 뜻이에요.", examples: [
      { en: "We need sustainable energy.", ko: "우리는 지속 가능한 에너지가 필요해요." },
      { en: "This farm uses sustainable methods.", ko: "이 농장은 지속 가능한 방법을 사용해요." },
      { en: "Sustainable living helps the planet.", ko: "지속 가능한 생활은 지구를 도와요." },
    ]},
    { id: "high-06", word: "ambiguous", ipa: "/æmˈbɪg.ju.əs/", meaningKo: "애매한", emoji: "❓", desc: "뜻이 분명하지 않다는 뜻이에요.", examples: [
      { en: "The instructions were ambiguous.", ko: "그 지시사항은 애매했어요." },
      { en: "His answer was ambiguous.", ko: "그의 대답은 애매했어요." },
      { en: "The sentence has an ambiguous meaning.", ko: "그 문장은 애매한 의미를 가지고 있어요." },
    ]},
    { id: "high-07", word: "inevitable", ipa: "/ɪˈnev.ɪ.tə.bəl/", meaningKo: "피할 수 없는", emoji: "⏳", desc: "반드시 일어날 수밖에 없다는 뜻이에요.", examples: [
      { en: "Change is inevitable.", ko: "변화는 피할 수 없어요." },
      { en: "The result was inevitable.", ko: "그 결과는 피할 수 없었어요." },
      { en: "Some conflicts seem inevitable.", ko: "어떤 갈등은 피할 수 없어 보여요." },
    ]},
    { id: "high-08", word: "consequence", ipa: "/ˈkɒn.sɪ.kwəns/", meaningKo: "결과", emoji: "🔗", desc: "어떤 행동으로 인해 생기는 결과예요.", examples: [
      { en: "Every action has a consequence.", ko: "모든 행동에는 결과가 있어요." },
      { en: "He faced the consequences of his choice.", ko: "그는 자신의 선택의 결과를 마주했어요." },
      { en: "Think about the consequences first.", ko: "먼저 결과에 대해 생각해봐." },
    ]},
    { id: "high-09", word: "hypothesis", ipa: "/haɪˈpɒθ.ə.sɪs/", meaningKo: "가설", emoji: "🧫", desc: "아직 증명되지 않은 이론적인 설명이에요.", examples: [
      { en: "The scientist tested her hypothesis.", ko: "그 과학자는 가설을 검증했어요." },
      { en: "We formed a hypothesis.", ko: "우리는 가설을 세웠어요." },
      { en: "The experiment proved the hypothesis wrong.", ko: "그 실험은 가설이 틀렸음을 증명했어요." },
    ]},
    { id: "high-10", word: "articulate", ipa: "/ɑːrˈtɪk.jə.leɪt/", meaningKo: "명확히 표현하다", emoji: "🗣", desc: "생각을 분명하게 말하는 것이에요.", examples: [
      { en: "She articulated her ideas clearly.", ko: "그녀는 생각을 명확하게 표현했어요." },
      { en: "He is an articulate speaker.", ko: "그는 말을 조리 있게 하는 사람이에요." },
      { en: "Try to articulate your feelings.", ko: "네 감정을 명확히 표현해봐." },
    ]},
    { id: "high-11", word: "collaborate", ipa: "/kəˈlæb.ə.reɪt/", meaningKo: "협력하다", emoji: "🤝", desc: "다른 사람과 함께 일하는 것이에요.", examples: [
      { en: "We collaborated on the project.", ko: "우리는 그 프로젝트에서 협력했어요." },
      { en: "Scientists collaborate across countries.", ko: "과학자들은 국가를 넘어 협력해요." },
      { en: "Let's collaborate on this idea.", ko: "이 아이디어에 대해 협력하자." },
    ]},
    { id: "high-12", word: "empirical", ipa: "/ɪmˈpɪr.ɪ.kəl/", meaningKo: "경험적인/실증적인", emoji: "📊", desc: "실제 관찰이나 실험을 바탕으로 한다는 뜻이에요.", examples: [
      { en: "The study is based on empirical evidence.", ko: "그 연구는 실증적 증거에 기반해요." },
      { en: "We need empirical data.", ko: "우리는 실증적 데이터가 필요해요." },
      { en: "Empirical research supports this theory.", ko: "실증적 연구가 이 이론을 뒷받침해요." },
    ]},
    { id: "high-13", word: "paradox", ipa: "/ˈpær.ə.dɒks/", meaningKo: "역설", emoji: "🔄", desc: "논리적으로 모순되지만 사실인 것처럼 보이는 말이에요.", examples: [
      { en: "It's a paradox that less can be more.", ko: "적은 것이 더 많은 것이라는 건 역설이에요." },
      { en: "This situation is a paradox.", ko: "이 상황은 역설이에요." },
      { en: "The story explores a strange paradox.", ko: "그 이야기는 이상한 역설을 탐구해요." },
    ]},
    { id: "high-14", word: "ethical", ipa: "/ˈeθ.ɪ.kəl/", meaningKo: "윤리적인", emoji: "⚖️", desc: "옳고 그름에 관련된다는 뜻이에요.", examples: [
      { en: "We must make an ethical choice.", ko: "우리는 윤리적인 선택을 해야 해요." },
      { en: "This raises ethical questions.", ko: "이것은 윤리적인 질문을 제기해요." },
      { en: "Doctors follow ethical guidelines.", ko: "의사들은 윤리 지침을 따라요." },
    ]},
    { id: "high-15", word: "cognitive", ipa: "/ˈkɒg.nə.tɪv/", meaningKo: "인지의", emoji: "🧠", desc: "생각하고 이해하는 능력과 관련된다는 뜻이에요.", examples: [
      { en: "Reading improves cognitive skills.", ko: "독서는 인지 능력을 향상시켜요." },
      { en: "The study focuses on cognitive development.", ko: "그 연구는 인지 발달에 초점을 맞춰요." },
      { en: "Cognitive science studies the mind.", ko: "인지 과학은 마음을 연구해요." },
    ]},
    { id: "high-16", word: "arbitrary", ipa: "/ˈɑːr.bɪ.trer.i/", meaningKo: "임의적인", emoji: "🎲", desc: "특별한 이유 없이 정해진다는 뜻이에요.", examples: [
      { en: "The rule seems arbitrary.", ko: "그 규칙은 임의적으로 보여요." },
      { en: "He made an arbitrary decision.", ko: "그는 임의적인 결정을 내렸어요." },
      { en: "The choice of color was arbitrary.", ko: "색상 선택은 임의적이었어요." },
    ]},
    { id: "high-17", word: "rhetorical", ipa: "/rɪˈtɒr.ɪ.kəl/", meaningKo: "수사적인", emoji: "🎤", desc: "설득이나 효과를 위한 말하기 방식과 관련돼요.", examples: [
      { en: "That was a rhetorical question.", ko: "그것은 수사적인 질문이었어요." },
      { en: "She used rhetorical techniques in her speech.", ko: "그녀는 연설에서 수사적 기법을 사용했어요." },
      { en: "The essay analyzes rhetorical strategies.", ko: "그 에세이는 수사적 전략을 분석해요." },
    ]},
    { id: "high-18", word: "pragmatic", ipa: "/prægˈmæt.ɪk/", meaningKo: "실용적인", emoji: "🛠", desc: "이론보다 실제로 효과적인 방법을 중시한다는 뜻이에요.", examples: [
      { en: "We need a pragmatic solution.", ko: "우리는 실용적인 해결책이 필요해요." },
      { en: "He is a pragmatic leader.", ko: "그는 실용적인 리더예요." },
      { en: "Her approach is very pragmatic.", ko: "그녀의 접근법은 매우 실용적이에요." },
    ]},
    { id: "high-19", word: "subjective", ipa: "/səbˈdʒek.tɪv/", meaningKo: "주관적인", emoji: "🎭", desc: "개인의 생각이나 느낌에 따라 다르다는 뜻이에요.", examples: [
      { en: "Beauty is subjective.", ko: "아름다움은 주관적이에요." },
      { en: "That is a subjective opinion.", ko: "그것은 주관적인 의견이에요." },
      { en: "Art criticism can be subjective.", ko: "예술 비평은 주관적일 수 있어요." },
    ]},
    { id: "high-20", word: "objective", ipa: "/əbˈdʒek.tɪv/", meaningKo: "객관적인/목표", emoji: "🎯", desc: "개인적인 감정 없이 사실에 근거한다는 뜻이에요.", examples: [
      { en: "Try to be objective.", ko: "객관적으로 되려고 해봐." },
      { en: "We need an objective analysis.", ko: "우리는 객관적인 분석이 필요해요." },
      { en: "Our main objective is to improve safety.", ko: "우리의 주요 목표는 안전을 개선하는 거예요." },
    ]},
    { id: "high-21", word: "acknowledge", ipa: "/əkˈnɒl.ɪdʒ/", meaningKo: "인정하다", emoji: "✅", desc: "사실이라고 받아들이는 것이에요.", examples: [
      { en: "I acknowledge my mistake.", ko: "나는 내 실수를 인정해요." },
      { en: "She acknowledged the problem.", ko: "그녀는 문제를 인정했어요." },
      { en: "We must acknowledge the risk.", ko: "우리는 위험을 인정해야 해요." },
    ]},
    { id: "high-22", word: "advocate", ipa: "/ˈæd.və.keɪt/", meaningKo: "옹호하다/지지하다", emoji: "📢", desc: "어떤 것을 지지하고 주장하는 것이에요.", examples: [
      { en: "She advocates for equal rights.", ko: "그녀는 평등한 권리를 옹호해요." },
      { en: "We advocate change.", ko: "우리는 변화를 지지해요." },
      { en: "He advocates healthy eating.", ko: "그는 건강한 식습관을 옹호해요." },
    ]},
    { id: "high-23", word: "allocate", ipa: "/ˈæl.ə.keɪt/", meaningKo: "할당하다/배분하다", emoji: "📊", desc: "몫을 나누어 정해주는 것이에요.", examples: [
      { en: "We allocate the budget.", ko: "우리는 예산을 배분해요." },
      { en: "Time was allocated for questions.", ko: "질문을 위한 시간이 할당됐어요." },
      { en: "They allocate resources fairly.", ko: "그들은 자원을 공정하게 배분해요." },
    ]},
    { id: "high-24", word: "anticipate", ipa: "/ænˈtɪs.ə.peɪt/", meaningKo: "예상하다/기대하다", emoji: "🔮", desc: "미리 짐작하거나 기대하는 것이에요.", examples: [
      { en: "I anticipate a good result.", ko: "나는 좋은 결과를 예상해요." },
      { en: "We anticipate changes.", ko: "우리는 변화를 예상해요." },
      { en: "She anticipated his question.", ko: "그녀는 그의 질문을 예상했어요." },
    ]},
    { id: "high-25", word: "assert", ipa: "/əˈsɜːrt/", meaningKo: "주장하다", emoji: "💬", desc: "확실하게 말하는 것이에요.", examples: [
      { en: "He asserts his opinion.", ko: "그는 자신의 의견을 주장해요." },
      { en: "She asserted her rights.", ko: "그녀는 자신의 권리를 주장했어요." },
      { en: "We assert that this is true.", ko: "우리는 이것이 사실이라고 주장해요." },
    ]},
    { id: "high-26", word: "attribute", ipa: "/əˈtrɪb.juːt/", meaningKo: "~탓으로 돌리다/속성", emoji: "🏷", desc: "원인을 어떤 것에 돌리는 것이에요.", examples: [
      { en: "She attributes her success to hard work.", ko: "그녀는 자신의 성공을 노력 덕분이라고 여겨요." },
      { en: "We attribute the delay to weather.", ko: "우리는 지연을 날씨 탓으로 돌려요." },
      { en: "Honesty is a key attribute.", ko: "정직함은 중요한 속성이에요." },
    ]},
    { id: "high-27", word: "comprehend", ipa: "/ˌkɒm.prɪˈhend/", meaningKo: "이해하다", emoji: "🧠", desc: "완전히 이해하는 것이에요.", examples: [
      { en: "I comprehend the lesson.", ko: "나는 그 수업을 이해해요." },
      { en: "It's hard to comprehend.", ko: "이해하기 어려워요." },
      { en: "She comprehends the situation.", ko: "그녀는 상황을 이해해요." },
    ]},
    { id: "high-28", word: "constitute", ipa: "/ˈkɒn.stɪ.tjuːt/", meaningKo: "구성하다/이루다", emoji: "🧩", desc: "부분들이 모여 무언가를 이루는 것이에요.", examples: [
      { en: "These rules constitute the law.", ko: "이 규칙들이 법을 구성해요." },
      { en: "Water constitutes most of our body.", ko: "물은 우리 몸의 대부분을 구성해요." },
      { en: "This constitutes a problem.", ko: "이것은 문제를 이뤄요." },
    ]},
    { id: "high-29", word: "contradict", ipa: "/ˌkɒn.trəˈdɪkt/", meaningKo: "모순되다/반박하다", emoji: "🔄", desc: "서로 맞지 않다는 것이에요.", examples: [
      { en: "His words contradict his actions.", ko: "그의 말은 행동과 모순돼요." },
      { en: "The reports contradict each other.", ko: "그 보고서들은 서로 모순돼요." },
      { en: "Don't contradict yourself.", ko: "스스로 모순되지 마." },
    ]},
    { id: "high-30", word: "derive", ipa: "/dɪˈraɪv/", meaningKo: "유래하다/이끌어내다", emoji: "🌱", desc: "어디에서 비롯되었는지 나타내는 것이에요.", examples: [
      { en: "This word derives from Latin.", ko: "이 단어는 라틴어에서 유래했어요." },
      { en: "We derive energy from food.", ko: "우리는 음식에서 에너지를 얻어요." },
      { en: "She derives joy from music.", ko: "그녀는 음악에서 기쁨을 얻어요." },
    ]},
    { id: "high-31", word: "emphasize", ipa: "/ˈem.fə.saɪz/", meaningKo: "강조하다", emoji: "❗", desc: "중요하다고 특별히 나타내는 것이에요.", examples: [
      { en: "I emphasize the importance of study.", ko: "나는 공부의 중요성을 강조해요." },
      { en: "She emphasized her point.", ko: "그녀는 자신의 요점을 강조했어요." },
      { en: "We emphasize safety.", ko: "우리는 안전을 강조해요." },
    ]},
    { id: "high-32", word: "facilitate", ipa: "/fəˈsɪl.ɪ.teɪt/", meaningKo: "촉진하다/용이하게 하다", emoji: "🤝", desc: "더 쉽게 이루어지도록 돕는 것이에요.", examples: [
      { en: "This tool facilitates learning.", ko: "이 도구는 학습을 촉진해요." },
      { en: "We facilitate communication.", ko: "우리는 소통을 원활하게 해요." },
      { en: "The app facilitates teamwork.", ko: "그 앱은 팀워크를 용이하게 해요." },
    ]},
    { id: "high-33", word: "illuminate", ipa: "/ɪˈluː.mɪ.neɪt/", meaningKo: "밝히다/조명하다", emoji: "💡", desc: "빛을 비추거나 명확하게 설명하는 것이에요.", examples: [
      { en: "The lamp illuminates the room.", ko: "그 램프는 방을 밝혀요." },
      { en: "This example illuminates the idea.", ko: "이 예시는 그 생각을 명확하게 해줘요." },
      { en: "Stars illuminate the sky.", ko: "별들이 하늘을 밝혀요." },
    ]},
    { id: "high-34", word: "inhibit", ipa: "/ɪnˈhɪb.ɪt/", meaningKo: "억제하다/방해하다", emoji: "🚫", desc: "무언가를 막거나 억누르는 것이에요.", examples: [
      { en: "Fear can inhibit action.", ko: "두려움은 행동을 억제할 수 있어요." },
      { en: "The medicine inhibits growth.", ko: "그 약은 성장을 억제해요." },
      { en: "Shyness inhibits communication.", ko: "수줍음은 소통을 방해해요." },
    ]},
    { id: "high-35", word: "integrate", ipa: "/ˈɪn.tɪ.greɪt/", meaningKo: "통합하다", emoji: "🔗", desc: "여러 부분을 하나로 합치는 것이에요.", examples: [
      { en: "We integrate new ideas.", ko: "우리는 새로운 아이디어를 통합해요." },
      { en: "The school integrates technology.", ko: "그 학교는 기술을 통합해요." },
      { en: "They integrated the two teams.", ko: "그들은 두 팀을 통합했어요." },
    ]},
    { id: "high-36", word: "coherent", ipa: "/koʊˈhɪr.ənt/", meaningKo: "일관성 있는", emoji: "🔗", desc: "논리적으로 잘 연결된다는 뜻이에요.", examples: [
      { en: "Her argument is coherent.", ko: "그녀의 주장은 일관성이 있어요." },
      { en: "Write a coherent essay.", ko: "일관성 있는 에세이를 써." },
      { en: "The plan is coherent.", ko: "그 계획은 일관성이 있어요." },
    ]},
    { id: "high-37", word: "comprehensive", ipa: "/ˌkɒm.prɪˈhen.sɪv/", meaningKo: "포괄적인/종합적인", emoji: "📚", desc: "모든 것을 폭넓게 다룬다는 뜻이에요.", examples: [
      { en: "This is a comprehensive guide.", ko: "이것은 포괄적인 안내서예요." },
      { en: "We did a comprehensive study.", ko: "우리는 종합적인 연구를 했어요." },
      { en: "The report is comprehensive.", ko: "그 보고서는 포괄적이에요." },
    ]},
    { id: "high-38", word: "controversial", ipa: "/ˌkɒn.trəˈvɜːr.ʃəl/", meaningKo: "논쟁적인", emoji: "⚡", desc: "많은 논쟁을 일으킨다는 뜻이에요.", examples: [
      { en: "This is a controversial topic.", ko: "이것은 논쟁적인 주제예요." },
      { en: "The decision was controversial.", ko: "그 결정은 논쟁적이었어요." },
      { en: "His opinion is controversial.", ko: "그의 의견은 논쟁적이에요." },
    ]},
    { id: "high-39", word: "credible", ipa: "/ˈkred.ə.bəl/", meaningKo: "신뢰할 수 있는", emoji: "✅", desc: "믿을 만하다는 뜻이에요.", examples: [
      { en: "This is a credible source.", ko: "이것은 신뢰할 수 있는 출처예요." },
      { en: "She is a credible witness.", ko: "그녀는 신뢰할 수 있는 증인이에요." },
      { en: "We need credible evidence.", ko: "우리는 신뢰할 수 있는 증거가 필요해요." },
    ]},
    { id: "high-40", word: "deliberate", ipa: "/dɪˈlɪb.ər.ət/", meaningKo: "의도적인/신중한", emoji: "🤔", desc: "일부러 계획해서 한다는 뜻이에요.", examples: [
      { en: "It was a deliberate choice.", ko: "그것은 의도적인 선택이었어요." },
      { en: "He spoke in a deliberate way.", ko: "그는 신중하게 말했어요." },
      { en: "This was a deliberate mistake.", ko: "이것은 의도적인 실수였어요." },
    ]},
    { id: "high-41", word: "diverse", ipa: "/daɪˈvɜːrs/", meaningKo: "다양한", emoji: "🌈", desc: "여러 가지로 서로 다르다는 뜻이에요.", examples: [
      { en: "Our class is diverse.", ko: "우리 반은 다양해요." },
      { en: "We have diverse opinions.", ko: "우리는 다양한 의견을 가지고 있어요." },
      { en: "The city has a diverse culture.", ko: "그 도시는 다양한 문화를 가지고 있어요." },
    ]},
    { id: "high-42", word: "elaborate", ipa: "/ɪˈlæb.ər.ət/", meaningKo: "정교한/자세한", emoji: "🧵", desc: "복잡하고 자세하게 만들어졌다는 뜻이에요.", examples: [
      { en: "She made an elaborate plan.", ko: "그녀는 정교한 계획을 세웠어요." },
      { en: "The design is elaborate.", ko: "그 디자인은 정교해요." },
      { en: "He gave an elaborate explanation.", ko: "그는 자세한 설명을 했어요." },
    ]},
    { id: "high-43", word: "extensive", ipa: "/ɪkˈsten.sɪv/", meaningKo: "광범위한", emoji: "📏", desc: "범위가 넓다는 뜻이에요.", examples: [
      { en: "We did extensive research.", ko: "우리는 광범위한 연구를 했어요." },
      { en: "The damage is extensive.", ko: "피해가 광범위해요." },
      { en: "She has extensive knowledge.", ko: "그녀는 폭넓은 지식을 가지고 있어요." },
    ]},
    { id: "high-44", word: "implicit", ipa: "/ɪmˈplɪs.ɪt/", meaningKo: "암시적인", emoji: "🤫", desc: "직접 말하지 않지만 담겨 있다는 뜻이에요.", examples: [
      { en: "There was an implicit warning.", ko: "암시적인 경고가 있었어요." },
      { en: "The message is implicit.", ko: "그 메시지는 암시적이에요." },
      { en: "We had an implicit agreement.", ko: "우리는 암묵적인 합의가 있었어요." },
    ]},
    { id: "high-45", word: "explicit", ipa: "/ɪkˈsplɪs.ɪt/", meaningKo: "명시적인", emoji: "📢", desc: "분명하고 직접적으로 말한다는 뜻이에요.", examples: [
      { en: "Give explicit instructions.", ko: "명확한 지시를 해." },
      { en: "The rule is explicit.", ko: "그 규칙은 명시적이에요." },
      { en: "She was explicit about her plans.", ko: "그녀는 계획에 대해 명확하게 말했어요." },
    ]},
    { id: "high-46", word: "inherent", ipa: "/ɪnˈhɪr.ənt/", meaningKo: "본질적인/내재된", emoji: "🌱", desc: "원래부터 가지고 있다는 뜻이에요.", examples: [
      { en: "Curiosity is inherent in children.", ko: "호기심은 아이들에게 내재되어 있어요." },
      { en: "There is an inherent risk.", ko: "본질적인 위험이 있어요." },
      { en: "This is an inherent quality.", ko: "이것은 본질적인 특성이에요." },
    ]},
    { id: "high-47", word: "intricate", ipa: "/ˈɪn.trɪ.kət/", meaningKo: "복잡한/정교한", emoji: "🕸", desc: "매우 복잡하고 세밀하다는 뜻이에요.", examples: [
      { en: "The design is intricate.", ko: "그 디자인은 정교해요." },
      { en: "This is an intricate puzzle.", ko: "이것은 복잡한 퍼즐이에요." },
      { en: "The pattern is intricate.", ko: "그 무늬는 정교해요." },
    ]},
    { id: "high-48", word: "plausible", ipa: "/ˈplɔː.zə.bəl/", meaningKo: "그럴듯한", emoji: "🤷", desc: "믿을 만하고 이치에 맞다는 뜻이에요.", examples: [
      { en: "That is a plausible explanation.", ko: "그것은 그럴듯한 설명이에요." },
      { en: "Her story seems plausible.", ko: "그녀의 이야기는 그럴듯해요." },
      { en: "We need a plausible theory.", ko: "우리는 그럴듯한 이론이 필요해요." },
    ]},
    { id: "high-49", word: "profound", ipa: "/prəˈfaʊnd/", meaningKo: "심오한/깊은", emoji: "🌊", desc: "매우 깊고 중요하다는 뜻이에요.", examples: [
      { en: "This is a profound idea.", ko: "이것은 심오한 생각이에요." },
      { en: "She had a profound impact.", ko: "그녀는 깊은 영향을 미쳤어요." },
      { en: "The book had a profound effect on me.", ko: "그 책은 나에게 깊은 영향을 줬어요." },
    ]},
    { id: "high-50", word: "rigorous", ipa: "/ˈrɪg.ər.əs/", meaningKo: "엄격한/철저한", emoji: "📏", desc: "매우 정확하고 철저하다는 뜻이에요.", examples: [
      { en: "We follow a rigorous process.", ko: "우리는 철저한 과정을 따라요." },
      { en: "The test is rigorous.", ko: "그 시험은 엄격해요." },
      { en: "She has rigorous standards.", ko: "그녀는 엄격한 기준을 가지고 있어요." },
    ]},
    { id: "high-51", word: "dilemma", ipa: "/dɪˈlem.ə/", meaningKo: "딜레마/진퇴양난", emoji: "🤔", desc: "선택하기 어려운 상황이에요.", examples: [
      { en: "I face a dilemma.", ko: "나는 딜레마에 직면했어요." },
      { en: "This is a moral dilemma.", ko: "이것은 도덕적 딜레마예요." },
      { en: "We solved the dilemma.", ko: "우리는 딜레마를 해결했어요." },
    ]},
    { id: "high-52", word: "bias", ipa: "/ˈbaɪ.əs/", meaningKo: "편견", emoji: "⚖️", desc: "한쪽으로 치우친 생각이에요.", examples: [
      { en: "We should avoid bias.", ko: "우리는 편견을 피해야 해요." },
      { en: "The report shows bias.", ko: "그 보고서는 편견을 보여요." },
      { en: "Everyone has some bias.", ko: "모두 어느 정도 편견이 있어요." },
    ]},
    { id: "high-53", word: "integrity", ipa: "/ɪnˈteg.rə.ti/", meaningKo: "진실성/성실", emoji: "🛡", desc: "정직하고 도덕적으로 올바른 성품이에요.", examples: [
      { en: "She has integrity.", ko: "그녀는 진실성이 있어요." },
      { en: "Integrity is important.", ko: "진실성은 중요해요." },
      { en: "He acted with integrity.", ko: "그는 성실하게 행동했어요." },
    ]},
    { id: "high-54", word: "autonomy", ipa: "/ɔːˈtɒn.ə.mi/", meaningKo: "자율성", emoji: "🕊", desc: "스스로 결정하는 능력이에요.", examples: [
      { en: "Teenagers want autonomy.", ko: "십대들은 자율성을 원해요." },
      { en: "We value autonomy.", ko: "우리는 자율성을 중요하게 여겨요." },
      { en: "The team has autonomy.", ko: "그 팀은 자율성이 있어요." },
    ]},
    { id: "high-55", word: "empathy", ipa: "/ˈem.pə.θi/", meaningKo: "공감", emoji: "💗", desc: "다른 사람의 감정을 이해하는 능력이에요.", examples: [
      { en: "Show empathy to others.", ko: "다른 사람들에게 공감을 보여줘." },
      { en: "She has great empathy.", ko: "그녀는 공감 능력이 뛰어나요." },
      { en: "Empathy helps relationships.", ko: "공감은 관계에 도움이 돼요." },
    ]},
    { id: "high-56", word: "morality", ipa: "/məˈræl.ə.ti/", meaningKo: "도덕성", emoji: "⚖️", desc: "옳고 그름에 대한 기준이에요.", examples: [
      { en: "We discuss morality.", ko: "우리는 도덕성에 대해 논의해요." },
      { en: "Morality guides our choices.", ko: "도덕성은 우리의 선택을 이끌어요." },
      { en: "This raises questions of morality.", ko: "이것은 도덕성에 대한 질문을 제기해요." },
    ]},
    { id: "high-57", word: "identity", ipa: "/aɪˈden.tə.ti/", meaningKo: "정체성", emoji: "🪪", desc: "자신이 누구인지에 대한 개념이에요.", examples: [
      { en: "I value my identity.", ko: "나는 내 정체성을 소중히 여겨요." },
      { en: "She found her identity.", ko: "그녀는 자신의 정체성을 찾았어요." },
      { en: "Culture shapes our identity.", ko: "문화는 우리의 정체성을 형성해요." },
    ]},
    { id: "high-58", word: "ideology", ipa: "/ˌaɪ.diˈɒl.ə.dʒi/", meaningKo: "이념", emoji: "📜", desc: "사회나 정치에 대한 신념 체계예요.", examples: [
      { en: "We discuss political ideology.", ko: "우리는 정치 이념에 대해 논의해요." },
      { en: "Their ideology is different.", ko: "그들의 이념은 달라요." },
      { en: "Ideology shapes policy.", ko: "이념은 정책을 형성해요." },
    ]},
    { id: "high-59", word: "philosophy", ipa: "/fəˈlɒs.ə.fi/", meaningKo: "철학", emoji: "🤔", desc: "삶과 존재에 대해 깊이 생각하는 학문이에요.", examples: [
      { en: "I study philosophy.", ko: "나는 철학을 공부해요." },
      { en: "Philosophy asks big questions.", ko: "철학은 큰 질문을 던져요." },
      { en: "His philosophy is simple.", ko: "그의 철학은 단순해요." },
    ]},
    { id: "high-60", word: "legacy", ipa: "/ˈleg.ə.si/", meaningKo: "유산", emoji: "🏛", desc: "후대에 남기는 것이에요.", examples: [
      { en: "He left a great legacy.", ko: "그는 훌륭한 유산을 남겼어요." },
      { en: "Her legacy continues.", ko: "그녀의 유산은 계속돼요." },
      { en: "We value our legacy.", ko: "우리는 우리의 유산을 소중히 여겨요." },
    ]},
    { id: "high-61", word: "heritage", ipa: "/ˈher.ɪ.tɪdʒ/", meaningKo: "유산/전통", emoji: "🏺", desc: "조상으로부터 물려받은 문화예요.", examples: [
      { en: "We protect our heritage.", ko: "우리는 우리의 유산을 보호해요." },
      { en: "This is a cultural heritage site.", ko: "이곳은 문화유산 지역이에요." },
      { en: "I am proud of my heritage.", ko: "나는 내 유산이 자랑스러워요." },
    ]},
    { id: "high-62", word: "diversity", ipa: "/daɪˈvɜː.sə.ti/", meaningKo: "다양성", emoji: "🌍", desc: "여러 가지로 서로 다른 특성이에요.", examples: [
      { en: "We celebrate diversity.", ko: "우리는 다양성을 기념해요." },
      { en: "Diversity makes us stronger.", ko: "다양성은 우리를 더 강하게 해요." },
      { en: "The school values diversity.", ko: "그 학교는 다양성을 중요하게 여겨요." },
    ]},
    { id: "high-63", word: "equity", ipa: "/ˈek.wə.ti/", meaningKo: "공평성", emoji: "⚖️", desc: "공정하게 대우받는 것이에요.", examples: [
      { en: "We promote equity.", ko: "우리는 공평성을 증진해요." },
      { en: "Equity is important in society.", ko: "공평성은 사회에서 중요해요." },
      { en: "We seek equity for all.", ko: "우리는 모두를 위한 공평성을 추구해요." },
    ]},
    { id: "high-64", word: "justice", ipa: "/ˈdʒʌs.tɪs/", meaningKo: "정의", emoji: "⚖️", desc: "옳고 공정한 것이에요.", examples: [
      { en: "We seek justice.", ko: "우리는 정의를 추구해요." },
      { en: "Justice is important.", ko: "정의는 중요해요." },
      { en: "The court delivers justice.", ko: "법원은 정의를 실현해요." },
    ]},
    { id: "high-65", word: "virtue", ipa: "/ˈvɜːr.tʃuː/", meaningKo: "미덕", emoji: "🌟", desc: "좋은 도덕적 성품이에요.", examples: [
      { en: "Honesty is a virtue.", ko: "정직은 미덕이에요." },
      { en: "She has many virtues.", ko: "그녀는 많은 미덕을 가지고 있어요." },
      { en: "Patience is a virtue.", ko: "인내는 미덕이에요." },
    ]},
    { id: "high-66", word: "metaphor", ipa: "/ˈmet.ə.fɔːr/", meaningKo: "은유", emoji: "🎭", desc: "직접 빗대어 표현하는 방법이에요.", examples: [
      { en: "This is a metaphor.", ko: "이것은 은유예요." },
      { en: "The poem uses a metaphor.", ko: "그 시는 은유를 사용해요." },
      { en: "Life is often described with metaphors.", ko: "인생은 종종 은유로 표현돼요." },
    ]},
    { id: "high-67", word: "symbolism", ipa: "/ˈsɪm.bə.lɪ.zəm/", meaningKo: "상징(성)", emoji: "🕊", desc: "어떤 것을 상징으로 나타내는 기법이에요.", examples: [
      { en: "The novel uses symbolism.", ko: "그 소설은 상징을 사용해요." },
      { en: "We study symbolism in art.", ko: "우리는 미술의 상징성을 공부해요." },
      { en: "The color has symbolism.", ko: "그 색깔은 상징적 의미가 있어요." },
    ]},
    { id: "high-68", word: "narrative", ipa: "/ˈnær.ə.tɪv/", meaningKo: "이야기/서사", emoji: "📖", desc: "이야기를 풀어가는 방식이에요.", examples: [
      { en: "The narrative is exciting.", ko: "그 서사는 흥미진진해요." },
      { en: "We wrote a narrative essay.", ko: "우리는 서사 에세이를 썼어요." },
      { en: "The film has a strong narrative.", ko: "그 영화는 탄탄한 서사를 가지고 있어요." },
    ]},
    { id: "high-69", word: "protagonist", ipa: "/proʊˈtæg.ə.nɪst/", meaningKo: "주인공", emoji: "🎬", desc: "이야기의 중심인물이에요.", examples: [
      { en: "The protagonist is brave.", ko: "그 주인공은 용감해요." },
      { en: "I like the protagonist.", ko: "나는 그 주인공이 좋아요." },
      { en: "The story follows the protagonist.", ko: "그 이야기는 주인공을 따라가요." },
    ]},
    { id: "high-70", word: "theme", ipa: "/θiːm/", meaningKo: "주제", emoji: "🎯", desc: "글이나 작품의 중심 생각이에요.", examples: [
      { en: "The theme is friendship.", ko: "그 주제는 우정이에요." },
      { en: "What is the theme of this book?", ko: "이 책의 주제는 뭐예요?" },
      { en: "The movie has a strong theme.", ko: "그 영화는 뚜렷한 주제가 있어요." },
    ]},
    { id: "high-71", word: "tone", ipa: "/toʊn/", meaningKo: "어조/분위기", emoji: "🎵", desc: "글이나 말의 느낌이에요.", examples: [
      { en: "The tone is serious.", ko: "그 어조는 진지해요." },
      { en: "Her tone was kind.", ko: "그녀의 어조는 친절했어요." },
      { en: "The story has a sad tone.", ko: "그 이야기는 슬픈 분위기예요." },
    ]},
    { id: "high-72", word: "irony", ipa: "/ˈaɪ.rə.ni/", meaningKo: "아이러니/반어법", emoji: "🎭", desc: "예상과 반대되는 결과나 표현이에요.", examples: [
      { en: "There is irony in the story.", ko: "그 이야기에는 아이러니가 있어요." },
      { en: "The ending has irony.", ko: "그 결말에는 아이러니가 있어요." },
      { en: "I noticed the irony.", ko: "나는 그 아이러니를 알아챘어요." },
    ]},
    { id: "high-73", word: "allegory", ipa: "/ˈæl.ə.gɔːr.i/", meaningKo: "우화/풍유", emoji: "📚", desc: "숨은 의미를 담은 이야기예요.", examples: [
      { en: "The story is an allegory.", ko: "그 이야기는 우화예요." },
      { en: "We read a classic allegory.", ko: "우리는 고전 우화를 읽었어요." },
      { en: "The novel is an allegory of society.", ko: "그 소설은 사회를 풍유한 이야기예요." },
    ]},
    { id: "high-74", word: "satire", ipa: "/ˈsæt.aɪər/", meaningKo: "풍자", emoji: "😏", desc: "웃음으로 비판하는 기법이에요.", examples: [
      { en: "The show is satire.", ko: "그 쇼는 풍자예요." },
      { en: "We enjoy political satire.", ko: "우리는 정치 풍자를 즐겨요." },
      { en: "The book uses satire.", ko: "그 책은 풍자를 사용해요." },
    ]},
    { id: "high-75", word: "context", ipa: "/ˈkɒn.tekst/", meaningKo: "맥락/문맥", emoji: "🧩", desc: "상황이나 배경을 말해요.", examples: [
      { en: "Read it in context.", ko: "맥락 속에서 읽어." },
      { en: "The context matters.", ko: "맥락이 중요해요." },
      { en: "Understand the historical context.", ko: "역사적 맥락을 이해해." },
    ]},
    { id: "high-76", word: "variable", ipa: "/ˈver.i.ə.bəl/", meaningKo: "변수", emoji: "🔢", desc: "값이 바뀔 수 있는 요소예요.", examples: [
      { en: "We control the variable.", ko: "우리는 변수를 통제해요." },
      { en: "This is an important variable.", ko: "이것은 중요한 변수예요." },
      { en: "Change one variable at a time.", ko: "한 번에 한 변수만 바꿔." },
    ]},
    { id: "high-77", word: "correlation", ipa: "/ˌkɒr.əˈleɪ.ʃən/", meaningKo: "상관관계", emoji: "📈", desc: "두 가지가 서로 관련되는 정도예요.", examples: [
      { en: "There is a correlation.", ko: "상관관계가 있어요." },
      { en: "We found a correlation.", ko: "우리는 상관관계를 발견했어요." },
      { en: "The correlation is strong.", ko: "그 상관관계는 강해요." },
    ]},
    { id: "high-78", word: "methodology", ipa: "/ˌmeθ.əˈdɒl.ə.dʒi/", meaningKo: "방법론", emoji: "🧭", desc: "연구나 작업의 방법이에요.", examples: [
      { en: "We explain our methodology.", ko: "우리는 방법론을 설명해요." },
      { en: "The methodology is clear.", ko: "그 방법론은 명확해요." },
      { en: "Choose the right methodology.", ko: "올바른 방법론을 선택해." },
    ]},
    { id: "high-79", word: "sample", ipa: "/ˈsæm.pəl/", meaningKo: "표본/샘플", emoji: "🧪", desc: "전체를 대표하는 일부예요.", examples: [
      { en: "We collected a sample.", ko: "우리는 표본을 수집했어요." },
      { en: "The sample is small.", ko: "그 표본은 작아요." },
      { en: "Test the sample.", ko: "표본을 검사해." },
    ]},
    { id: "high-80", word: "statistics", ipa: "/stəˈtɪs.tɪks/", meaningKo: "통계(학)", emoji: "📊", desc: "숫자로 정보를 분석하는 학문이에요.", examples: [
      { en: "We study statistics.", ko: "우리는 통계학을 공부해요." },
      { en: "The statistics show growth.", ko: "그 통계는 성장을 보여줘요." },
      { en: "Statistics can be misleading.", ko: "통계는 오해를 불러일으킬 수 있어요." },
    ]},
    { id: "high-81", word: "theorem", ipa: "/ˈθɪr.əm/", meaningKo: "정리(수학)", emoji: "📐", desc: "증명된 수학적 명제예요.", examples: [
      { en: "We proved the theorem.", ko: "우리는 그 정리를 증명했어요." },
      { en: "This is a famous theorem.", ko: "이것은 유명한 정리예요." },
      { en: "The theorem is useful.", ko: "그 정리는 유용해요." },
    ]},
    { id: "high-82", word: "derivative", ipa: "/dɪˈrɪv.ə.tɪv/", meaningKo: "도함수/파생물", emoji: "📉", desc: "미분한 결과나 파생된 것이에요.", examples: [
      { en: "We calculate the derivative.", ko: "우리는 도함수를 계산해요." },
      { en: "This is a derivative work.", ko: "이것은 파생 작품이에요." },
      { en: "The derivative shows the rate of change.", ko: "도함수는 변화율을 보여줘요." },
    ]},
    { id: "high-83", word: "equilibrium", ipa: "/ˌiː.kwɪˈlɪb.ri.əm/", meaningKo: "균형/평형", emoji: "⚖️", desc: "안정된 균형 상태예요.", examples: [
      { en: "We seek equilibrium.", ko: "우리는 균형을 추구해요." },
      { en: "The system is in equilibrium.", ko: "그 시스템은 평형 상태예요." },
      { en: "Nature finds equilibrium.", ko: "자연은 균형을 찾아요." },
    ]},
    { id: "high-84", word: "catalyst", ipa: "/ˈkæt.əl.ɪst/", meaningKo: "촉매", emoji: "⚗️", desc: "변화를 일으키는 계기예요.", examples: [
      { en: "This event was a catalyst for change.", ko: "이 사건은 변화의 촉매였어요." },
      { en: "A catalyst speeds up reactions.", ko: "촉매는 반응을 빠르게 해요." },
      { en: "She was a catalyst for the team.", ko: "그녀는 팀의 촉매 역할을 했어요." },
    ]},
    { id: "high-85", word: "synthesis", ipa: "/ˈsɪn.θə.sɪs/", meaningKo: "종합/합성", emoji: "🧪", desc: "여러 요소를 합쳐 새로운 것을 만드는 것이에요.", examples: [
      { en: "We create a synthesis of ideas.", ko: "우리는 아이디어들을 종합해요." },
      { en: "Photosynthesis is a type of synthesis.", ko: "광합성은 합성의 한 종류예요." },
      { en: "The essay is a synthesis of research.", ko: "그 에세이는 연구를 종합한 것이에요." },
    ]},
    { id: "high-86", word: "perception", ipa: "/pərˈsep.ʃən/", meaningKo: "인식/지각", emoji: "👁", desc: "무언가를 보고 느끼는 방식이에요.", examples: [
      { en: "Perception varies by person.", ko: "인식은 사람마다 달라요." },
      { en: "Our perception can be wrong.", ko: "우리의 인식은 틀릴 수 있어요." },
      { en: "She has a unique perception.", ko: "그녀는 독특한 인식을 가지고 있어요." },
    ]},
    { id: "high-87", word: "cognition", ipa: "/kɒgˈnɪʃ.ən/", meaningKo: "인지", emoji: "🧠", desc: "생각하고 이해하는 정신적 과정이에요.", examples: [
      { en: "We study cognition.", ko: "우리는 인지를 연구해요." },
      { en: "Cognition develops over time.", ko: "인지는 시간이 지나며 발달해요." },
      { en: "This affects cognition.", ko: "이것은 인지에 영향을 줘요." },
    ]},
    { id: "high-88", word: "motivation", ipa: "/ˌmoʊ.tɪˈveɪ.ʃən/", meaningKo: "동기", emoji: "🔥", desc: "행동하게 만드는 이유예요.", examples: [
      { en: "I need motivation.", ko: "나는 동기가 필요해요." },
      { en: "Her motivation is strong.", ko: "그녀의 동기는 강해요." },
      { en: "What is your motivation?", ko: "너의 동기는 뭐야?" },
    ]},
    { id: "high-89", word: "instinct", ipa: "/ˈɪn.stɪŋkt/", meaningKo: "본능", emoji: "🐾", desc: "타고난 자연스러운 반응이에요.", examples: [
      { en: "It was pure instinct.", ko: "그것은 순전히 본능이었어요." },
      { en: "Animals act on instinct.", ko: "동물들은 본능에 따라 행동해요." },
      { en: "Trust your instinct.", ko: "네 본능을 믿어." },
    ]},
    { id: "high-90", word: "temperament", ipa: "/ˈtem.pər.ə.mənt/", meaningKo: "기질/성격", emoji: "😌", desc: "타고난 성격적 특성이에요.", examples: [
      { en: "She has a calm temperament.", ko: "그녀는 차분한 기질을 가지고 있어요." },
      { en: "His temperament is friendly.", ko: "그의 기질은 다정해요." },
      { en: "Temperament affects behavior.", ko: "기질은 행동에 영향을 줘요." },
    ]},
    { id: "high-91", word: "resilience", ipa: "/rɪˈzɪl.i.əns/", meaningKo: "회복력/탄력성", emoji: "💪", desc: "어려움을 이겨내는 힘이에요.", examples: [
      { en: "She showed great resilience.", ko: "그녀는 큰 회복력을 보여줬어요." },
      { en: "Resilience helps us recover.", ko: "회복력은 우리가 회복하도록 도와요." },
      { en: "We build resilience.", ko: "우리는 회복력을 키워요." },
    ]},
    { id: "high-92", word: "trauma", ipa: "/ˈtrɔː.mə/", meaningKo: "트라우마/정신적 충격", emoji: "💔", desc: "큰 충격으로 남는 상처예요.", examples: [
      { en: "He experienced trauma.", ko: "그는 트라우마를 겪었어요." },
      { en: "Trauma affects people differently.", ko: "트라우마는 사람마다 다르게 영향을 줘요." },
      { en: "We help with trauma recovery.", ko: "우리는 트라우마 회복을 도와요." },
    ]},
    { id: "high-93", word: "anxiety", ipa: "/æŋˈzaɪ.ə.ti/", meaningKo: "불안", emoji: "😰", desc: "걱정되고 불안한 감정이에요.", examples: [
      { en: "I feel anxiety.", ko: "나는 불안을 느껴요." },
      { en: "Anxiety is common.", ko: "불안은 흔해요." },
      { en: "She manages her anxiety.", ko: "그녀는 자신의 불안을 다스려요." },
    ]},
    { id: "high-94", word: "introvert", ipa: "/ˈɪn.trə.vɜːrt/", meaningKo: "내향적인 사람", emoji: "🤫", desc: "혼자 있는 것을 편하게 느끼는 사람이에요.", examples: [
      { en: "I am an introvert.", ko: "나는 내향적인 사람이에요." },
      { en: "Introverts need quiet time.", ko: "내향적인 사람들은 조용한 시간이 필요해요." },
      { en: "He is a calm introvert.", ko: "그는 차분한 내향적인 사람이에요." },
    ]},
    { id: "high-95", word: "extrovert", ipa: "/ˈek.strə.vɜːrt/", meaningKo: "외향적인 사람", emoji: "🗣", desc: "사람들과 어울리는 것을 좋아하는 사람이에요.", examples: [
      { en: "She is an extrovert.", ko: "그녀는 외향적인 사람이에요." },
      { en: "Extroverts enjoy parties.", ko: "외향적인 사람들은 파티를 즐겨요." },
      { en: "He is a friendly extrovert.", ko: "그는 다정한 외향적인 사람이에요." },
    ]},
    { id: "high-96", word: "legislation", ipa: "/ˌledʒ.ɪˈsleɪ.ʃən/", meaningKo: "법률/입법", emoji: "📜", desc: "국가가 만든 법이에요.", examples: [
      { en: "New legislation passed.", ko: "새로운 법률이 통과됐어요." },
      { en: "We need better legislation.", ko: "우리는 더 나은 법률이 필요해요." },
      { en: "The legislation protects workers.", ko: "그 법률은 노동자를 보호해요." },
    ]},
    { id: "high-97", word: "jurisdiction", ipa: "/ˌdʒʊr.ɪsˈdɪk.ʃən/", meaningKo: "관할권", emoji: "⚖️", desc: "법적 권한이 미치는 범위예요.", examples: [
      { en: "This is outside our jurisdiction.", ko: "이것은 우리 관할권 밖이에요." },
      { en: "The court has jurisdiction.", ko: "그 법원은 관할권이 있어요." },
      { en: "Jurisdiction varies by country.", ko: "관할권은 나라마다 달라요." },
    ]},
    { id: "high-98", word: "constitution", ipa: "/ˌkɒn.stɪˈtjuː.ʃən/", meaningKo: "헌법", emoji: "📖", desc: "국가의 기본 법이에요.", examples: [
      { en: "We study the constitution.", ko: "우리는 헌법을 공부해요." },
      { en: "The constitution protects rights.", ko: "헌법은 권리를 보호해요." },
      { en: "This follows the constitution.", ko: "이것은 헌법을 따라요." },
    ]},
    { id: "high-99", word: "sovereignty", ipa: "/ˈsɒv.rən.ti/", meaningKo: "주권", emoji: "👑", desc: "국가의 독립적인 권한이에요.", examples: [
      { en: "We respect national sovereignty.", ko: "우리는 국가 주권을 존중해요." },
      { en: "Sovereignty is important.", ko: "주권은 중요해요." },
      { en: "The nation defends its sovereignty.", ko: "그 나라는 주권을 지켜요." },
    ]},
    { id: "high-100", word: "diplomacy", ipa: "/dɪˈploʊ.mə.si/", meaningKo: "외교", emoji: "🤝", desc: "나라 간의 관계를 다루는 활동이에요.", examples: [
      { en: "Diplomacy solves conflicts.", ko: "외교는 갈등을 해결해요." },
      { en: "We value diplomacy.", ko: "우리는 외교를 중요하게 여겨요." },
      { en: "She works in diplomacy.", ko: "그녀는 외교 분야에서 일해요." },
    ]},
    { id: "high-101", word: "bureaucracy", ipa: "/bjʊˈrɒk.rə.si/", meaningKo: "관료제/행정 절차", emoji: "🗂", desc: "복잡한 행정 조직이나 절차예요.", examples: [
      { en: "The bureaucracy is slow.", ko: "그 관료제는 느려요." },
      { en: "We deal with bureaucracy.", ko: "우리는 행정 절차를 처리해요." },
      { en: "Bureaucracy can be frustrating.", ko: "관료제는 답답할 수 있어요." },
    ]},
    { id: "high-102", word: "referendum", ipa: "/ˌref.əˈren.dəm/", meaningKo: "국민투표", emoji: "🗳", desc: "국민이 직접 투표로 결정하는 것이에요.", examples: [
      { en: "We held a referendum.", ko: "우리는 국민투표를 실시했어요." },
      { en: "The referendum passed.", ko: "그 국민투표는 통과됐어요." },
      { en: "People voted in the referendum.", ko: "사람들은 국민투표에서 투표했어요." },
    ]},
    { id: "high-103", word: "advocacy", ipa: "/ˈæd.və.kə.si/", meaningKo: "옹호/지지 활동", emoji: "📣", desc: "어떤 것을 지지하고 알리는 활동이에요.", examples: [
      { en: "She works in advocacy.", ko: "그녀는 옹호 활동을 해요." },
      { en: "Advocacy raises awareness.", ko: "옹호 활동은 인식을 높여요." },
      { en: "We support advocacy groups.", ko: "우리는 옹호 단체를 지원해요." },
    ]},
    { id: "high-104", word: "litigation", ipa: "/ˌlɪt.ɪˈgeɪ.ʃən/", meaningKo: "소송", emoji: "⚖️", desc: "법적으로 다투는 절차예요.", examples: [
      { en: "The case went to litigation.", ko: "그 사건은 소송으로 갔어요." },
      { en: "Litigation takes time.", ko: "소송은 시간이 걸려요." },
      { en: "They avoided litigation.", ko: "그들은 소송을 피했어요." },
    ]},
    { id: "high-105", word: "amendment", ipa: "/əˈmend.mənt/", meaningKo: "개정/수정(안)", emoji: "📝", desc: "법이나 규칙을 고치는 것이에요.", examples: [
      { en: "We proposed an amendment.", ko: "우리는 개정안을 제안했어요." },
      { en: "The amendment passed.", ko: "그 개정안은 통과됐어요." },
      { en: "This is an important amendment.", ko: "이것은 중요한 개정안이에요." },
    ]},
    { id: "high-106", word: "inflation", ipa: "/ɪnˈfleɪ.ʃən/", meaningKo: "인플레이션/물가 상승", emoji: "📈", desc: "물건 가격이 오르는 현상이에요.", examples: [
      { en: "Inflation is rising.", ko: "물가가 오르고 있어요." },
      { en: "We worry about inflation.", ko: "우리는 물가 상승을 걱정해요." },
      { en: "High inflation affects prices.", ko: "높은 인플레이션은 가격에 영향을 줘요." },
    ]},
    { id: "high-107", word: "recession", ipa: "/rɪˈseʃ.ən/", meaningKo: "경기 침체", emoji: "📉", desc: "경제가 나빠지는 시기예요.", examples: [
      { en: "The economy is in a recession.", ko: "경제가 침체기에 있어요." },
      { en: "We faced a recession.", ko: "우리는 경기 침체를 겪었어요." },
      { en: "The recession affected jobs.", ko: "그 경기 침체는 일자리에 영향을 줬어요." },
    ]},
    { id: "high-108", word: "monopoly", ipa: "/məˈnɒp.ə.li/", meaningKo: "독점", emoji: "🏢", desc: "한 회사가 시장을 완전히 지배하는 것이에요.", examples: [
      { en: "The company has a monopoly.", ko: "그 회사는 독점하고 있어요." },
      { en: "Monopoly limits competition.", ko: "독점은 경쟁을 제한해요." },
      { en: "We prevent monopoly.", ko: "우리는 독점을 막아요." },
    ]},
    { id: "high-109", word: "commodity", ipa: "/kəˈmɒd.ə.ti/", meaningKo: "상품/원자재", emoji: "🛢", desc: "사고파는 물건이나 자원이에요.", examples: [
      { en: "Oil is a valuable commodity.", ko: "석유는 귀중한 원자재예요." },
      { en: "We trade commodities.", ko: "우리는 원자재를 거래해요." },
      { en: "The commodity price rose.", ko: "그 원자재 가격이 올랐어요." },
    ]},
    { id: "high-110", word: "asset", ipa: "/ˈæs.et/", meaningKo: "자산", emoji: "💼", desc: "가치 있는 소유물이에요.", examples: [
      { en: "This is a valuable asset.", ko: "이것은 귀중한 자산이에요." },
      { en: "We manage our assets.", ko: "우리는 자산을 관리해요." },
      { en: "Knowledge is a great asset.", ko: "지식은 훌륭한 자산이에요." },
    ]},
    { id: "high-111", word: "investment", ipa: "/ɪnˈvest.mənt/", meaningKo: "투자", emoji: "📈", desc: "미래를 위해 돈을 쓰는 것이에요.", examples: [
      { en: "We made an investment.", ko: "우리는 투자를 했어요." },
      { en: "Education is a good investment.", ko: "교육은 좋은 투자예요." },
      { en: "The investment paid off.", ko: "그 투자는 성과를 냈어요." },
    ]},
    { id: "high-112", word: "tariff", ipa: "/ˈtær.ɪf/", meaningKo: "관세", emoji: "🚢", desc: "수입품에 매기는 세금이에요.", examples: [
      { en: "The government raised tariffs.", ko: "정부는 관세를 올렸어요." },
      { en: "Tariffs affect trade.", ko: "관세는 무역에 영향을 줘요." },
      { en: "We pay tariffs on imports.", ko: "우리는 수입품에 관세를 내요." },
    ]},
    { id: "high-113", word: "subsidy", ipa: "/ˈsʌb.sə.di/", meaningKo: "보조금", emoji: "💵", desc: "정부가 지원해주는 돈이에요.", examples: [
      { en: "Farmers receive a subsidy.", ko: "농부들은 보조금을 받아요." },
      { en: "The subsidy helps businesses.", ko: "그 보조금은 사업을 도와요." },
      { en: "We rely on the subsidy.", ko: "우리는 보조금에 의존해요." },
    ]},
    { id: "high-114", word: "ubiquitous", ipa: "/juːˈbɪk.wɪ.təs/", meaningKo: "어디에나 있는", emoji: "🌐", desc: "어디에서나 흔히 볼 수 있다는 뜻이에요.", examples: [
      { en: "Smartphones are ubiquitous.", ko: "스마트폰은 어디에나 있어요." },
      { en: "The brand is ubiquitous.", ko: "그 브랜드는 어디에서나 볼 수 있어요." },
      { en: "Plastic is ubiquitous today.", ko: "오늘날 플라스틱은 어디에나 있어요." },
    ]},
    { id: "high-115", word: "meticulous", ipa: "/məˈtɪk.jə.ləs/", meaningKo: "꼼꼼한", emoji: "🔍", desc: "아주 세심하고 꼼꼼하다는 뜻이에요.", examples: [
      { en: "She is meticulous.", ko: "그녀는 꼼꼼해요." },
      { en: "He did meticulous work.", ko: "그는 꼼꼼하게 일했어요." },
      { en: "We need a meticulous plan.", ko: "우리는 꼼꼼한 계획이 필요해요." },
    ]},
    { id: "high-116", word: "resilient", ipa: "/rɪˈzɪl.i.ənt/", meaningKo: "회복력 있는", emoji: "💪", desc: "어려움을 잘 이겨낸다는 뜻이에요.", examples: [
      { en: "She is resilient.", ko: "그녀는 회복력이 있어요." },
      { en: "Children can be resilient.", ko: "아이들은 회복력이 있을 수 있어요." },
      { en: "We stay resilient.", ko: "우리는 꿋꿋함을 유지해요." },
    ]},
    { id: "high-117", word: "tenacious", ipa: "/təˈneɪ.ʃəs/", meaningKo: "끈질긴", emoji: "🐾", desc: "포기하지 않고 끈기 있다는 뜻이에요.", examples: [
      { en: "He is tenacious.", ko: "그는 끈질겨요." },
      { en: "She has a tenacious spirit.", ko: "그녀는 끈질긴 정신을 가지고 있어요." },
      { en: "We need a tenacious effort.", ko: "우리는 끈질긴 노력이 필요해요." },
    ]},
    { id: "high-118", word: "prudent", ipa: "/ˈpruː.dənt/", meaningKo: "신중한", emoji: "🧭", desc: "조심스럽고 분별 있다는 뜻이에요.", examples: [
      { en: "It was a prudent choice.", ko: "그것은 신중한 선택이었어요." },
      { en: "She is prudent with money.", ko: "그녀는 돈에 신중해요." },
      { en: "We made a prudent decision.", ko: "우리는 신중한 결정을 내렸어요." },
    ]},
    { id: "high-119", word: "candid", ipa: "/ˈkæn.dɪd/", meaningKo: "솔직한", emoji: "🗣", desc: "숨김없이 솔직하다는 뜻이에요.", examples: [
      { en: "She gave a candid answer.", ko: "그녀는 솔직한 대답을 했어요." },
      { en: "Be candid with me.", ko: "나에게 솔직하게 말해." },
      { en: "His opinion was candid.", ko: "그의 의견은 솔직했어요." },
    ]},
    { id: "high-120", word: "versatile", ipa: "/ˈvɜːr.sə.taɪl/", meaningKo: "다재다능한", emoji: "🎨", desc: "여러 가지에 능숙하다는 뜻이에요.", examples: [
      { en: "She is versatile.", ko: "그녀는 다재다능해요." },
      { en: "This tool is versatile.", ko: "이 도구는 다용도예요." },
      { en: "He has versatile skills.", ko: "그는 다재다능한 능력을 가지고 있어요." },
    ]},
  ],

  "adult": [
    { id: "adult-01", word: "negotiate", ipa: "/nɪˈgoʊ.ʃi.eɪt/", meaningKo: "협상하다", emoji: "🤝", desc: "서로 합의점을 찾기 위해 이야기하는 것이에요.", examples: [
      { en: "They negotiated a new contract.", ko: "그들은 새 계약을 협상했어요." },
      { en: "We need to negotiate the price.", ko: "우리는 가격을 협상해야 해요." },
      { en: "She negotiated a better deal.", ko: "그녀는 더 나은 조건을 협상했어요." },
    ]},
    { id: "adult-02", word: "leverage", ipa: "/ˈlev.ər.ɪdʒ/", meaningKo: "활용하다/지렛대 효과", emoji: "⚙️", desc: "가진 것을 이용해 더 큰 효과를 내는 것이에요.", examples: [
      { en: "We should leverage our resources.", ko: "우리는 자원을 잘 활용해야 해요." },
      { en: "The company leveraged new technology.", ko: "그 회사는 신기술을 활용했어요." },
      { en: "Use your skills as leverage.", ko: "네 기술을 지렛대로 활용해." },
    ]},
    { id: "adult-03", word: "initiative", ipa: "/ɪˈnɪʃ.ə.tɪv/", meaningKo: "주도권/계획", emoji: "🚀", desc: "스스로 앞장서서 시작하는 행동이나 계획이에요.", examples: [
      { en: "She took the initiative to start the project.", ko: "그녀는 그 프로젝트를 주도적으로 시작했어요." },
      { en: "The company launched a new initiative.", ko: "그 회사는 새로운 계획을 시작했어요." },
      { en: "He showed great initiative at work.", ko: "그는 직장에서 큰 주도성을 보였어요." },
    ]},
    { id: "adult-04", word: "stakeholder", ipa: "/ˈsteɪk.hoʊl.dər/", meaningKo: "이해관계자", emoji: "🧑‍💼", desc: "어떤 일에 관련되어 영향을 받는 사람이에요.", examples: [
      { en: "We met with all stakeholders.", ko: "우리는 모든 이해관계자를 만났어요." },
      { en: "Stakeholders approved the plan.", ko: "이해관계자들이 그 계획을 승인했어요." },
      { en: "The company values its stakeholders.", ko: "그 회사는 이해관계자를 중요하게 여겨요." },
    ]},
    { id: "adult-05", word: "entrepreneur", ipa: "/ˌɒn.trə.prəˈnɜːr/", meaningKo: "기업가", emoji: "💼", desc: "새로운 사업을 시작하는 사람이에요.", examples: [
      { en: "She is a successful entrepreneur.", ko: "그녀는 성공한 기업가예요." },
      { en: "Many entrepreneurs start with a small idea.", ko: "많은 기업가들이 작은 아이디어로 시작해요." },
      { en: "He became an entrepreneur at 25.", ko: "그는 25살에 기업가가 되었어요." },
    ]},
    { id: "adult-06", word: "diversify", ipa: "/daɪˈvɜː.sɪ.faɪ/", meaningKo: "다각화하다", emoji: "📈", desc: "종류를 다양하게 넓히는 것이에요.", examples: [
      { en: "The company diversified its products.", ko: "그 회사는 제품을 다각화했어요." },
      { en: "We should diversify our investments.", ko: "우리는 투자를 다각화해야 해요." },
      { en: "They diversified into new markets.", ko: "그들은 새로운 시장으로 다각화했어요." },
    ]},
    { id: "adult-07", word: "mitigate", ipa: "/ˈmɪt.ɪ.geɪt/", meaningKo: "완화하다", emoji: "🛡", desc: "문제나 피해를 줄이는 것이에요.", examples: [
      { en: "We took steps to mitigate the risk.", ko: "우리는 위험을 완화하기 위한 조치를 취했어요." },
      { en: "The plan helps mitigate damage.", ko: "그 계획은 피해를 완화하는 데 도움이 돼요." },
      { en: "Actions were taken to mitigate the loss.", ko: "손실을 완화하기 위한 조치가 취해졌어요." },
    ]},
    { id: "adult-08", word: "strategic", ipa: "/strəˈtiː.dʒɪk/", meaningKo: "전략적인", emoji: "♟", desc: "장기적인 계획에 따른다는 뜻이에요.", examples: [
      { en: "We made a strategic decision.", ko: "우리는 전략적인 결정을 내렸어요." },
      { en: "This is a strategic location.", ko: "이곳은 전략적인 위치예요." },
      { en: "The company has a strategic plan.", ko: "그 회사는 전략적인 계획을 가지고 있어요." },
    ]},
    { id: "adult-09", word: "feasible", ipa: "/ˈfiː.zə.bəl/", meaningKo: "실현 가능한", emoji: "✅", desc: "실제로 할 수 있다는 뜻이에요.", examples: [
      { en: "Is this plan feasible?", ko: "이 계획은 실현 가능한가요?" },
      { en: "The project seems feasible.", ko: "그 프로젝트는 실현 가능해 보여요." },
      { en: "We need a feasible solution.", ko: "우리는 실현 가능한 해결책이 필요해요." },
    ]},
    { id: "adult-10", word: "compliance", ipa: "/kəmˈplaɪ.əns/", meaningKo: "준수", emoji: "📋", desc: "규칙이나 법을 따르는 것이에요.", examples: [
      { en: "The company ensures compliance with the law.", ko: "그 회사는 법 준수를 보장해요." },
      { en: "We check for compliance every year.", ko: "우리는 매년 준수 여부를 확인해요." },
      { en: "Compliance is important in this industry.", ko: "이 업계에서는 준수가 중요해요." },
    ]},
    { id: "adult-11", word: "liability", ipa: "/ˌlaɪ.əˈbɪl.ə.ti/", meaningKo: "책임/부채", emoji: "💸", desc: "법적인 책임이나 빚을 말해요.", examples: [
      { en: "The company faced a large liability.", ko: "그 회사는 큰 부채를 안게 되었어요." },
      { en: "He accepted liability for the damage.", ko: "그는 손해에 대한 책임을 인정했어요." },
      { en: "Insurance covers liability.", ko: "보험이 책임을 보장해요." },
    ]},
    { id: "adult-12", word: "procurement", ipa: "/prəˈkjʊr.mənt/", meaningKo: "조달", emoji: "📦", desc: "물건이나 서비스를 구매하는 과정이에요.", examples: [
      { en: "The procurement team ordered new equipment.", ko: "조달팀이 새 장비를 주문했어요." },
      { en: "Procurement costs increased this year.", ko: "올해 조달 비용이 늘었어요." },
      { en: "She works in procurement.", ko: "그녀는 조달 부서에서 일해요." },
    ]},
    { id: "adult-13", word: "benchmark", ipa: "/ˈbentʃ.mɑːrk/", meaningKo: "기준(점)", emoji: "📏", desc: "비교의 기준이 되는 수준이에요.", examples: [
      { en: "We use this as a benchmark.", ko: "우리는 이것을 기준으로 사용해요." },
      { en: "The company set a new benchmark.", ko: "그 회사는 새로운 기준을 세웠어요." },
      { en: "Compare your results to the benchmark.", ko: "네 결과를 기준과 비교해봐." },
    ]},
    { id: "adult-14", word: "synergy", ipa: "/ˈsɪn.ər.dʒi/", meaningKo: "시너지/상승효과", emoji: "🔗", desc: "함께 일할 때 생기는 더 큰 효과예요.", examples: [
      { en: "The merger created synergy.", ko: "그 합병은 시너지를 만들었어요." },
      { en: "We found synergy between the two teams.", ko: "우리는 두 팀 사이에서 시너지를 찾았어요." },
      { en: "Good synergy leads to better results.", ko: "좋은 시너지는 더 나은 결과로 이어져요." },
    ]},
    { id: "adult-15", word: "portfolio", ipa: "/pɔːrtˈfoʊ.li.oʊ/", meaningKo: "포트폴리오", emoji: "📁", desc: "여러 작품이나 투자 목록을 모은 것이에요.", examples: [
      { en: "She showed her design portfolio.", ko: "그녀는 자신의 디자인 포트폴리오를 보여줬어요." },
      { en: "He manages a large investment portfolio.", ko: "그는 큰 투자 포트폴리오를 관리해요." },
      { en: "Add this project to your portfolio.", ko: "이 프로젝트를 네 포트폴리오에 추가해." },
    ]},
    { id: "adult-16", word: "deadline", ipa: "/ˈded.laɪn/", meaningKo: "마감일", emoji: "⏰", desc: "일을 끝내야 하는 정해진 날짜예요.", examples: [
      { en: "The deadline is next Friday.", ko: "마감일은 다음 주 금요일이에요." },
      { en: "We met the deadline.", ko: "우리는 마감일을 맞췄어요." },
      { en: "Don't miss the deadline.", ko: "마감일을 놓치지 마." },
    ]},
    { id: "adult-17", word: "overhead", ipa: "/ˈoʊ.vər.hed/", meaningKo: "간접비/운영비", emoji: "🏢", desc: "사업을 운영하는 데 드는 기본 비용이에요.", examples: [
      { en: "We need to reduce overhead costs.", ko: "우리는 간접비를 줄여야 해요." },
      { en: "Rent is a major overhead expense.", ko: "임대료는 주요 운영비예요." },
      { en: "The company cut its overhead.", ko: "그 회사는 운영비를 줄였어요." },
    ]},
    { id: "adult-18", word: "outsource", ipa: "/ˈaʊt.sɔːrs/", meaningKo: "외주를 주다", emoji: "📤", desc: "일을 다른 회사나 사람에게 맡기는 것이에요.", examples: [
      { en: "We outsourced the marketing work.", ko: "우리는 마케팅 업무를 외주로 줬어요." },
      { en: "The company outsources customer service.", ko: "그 회사는 고객 서비스를 외주로 운영해요." },
      { en: "Many firms outsource production.", ko: "많은 기업들이 생산을 외주로 맡겨요." },
    ]},
    { id: "adult-19", word: "proactive", ipa: "/ˌproʊˈæk.tɪv/", meaningKo: "적극적인/선제적인", emoji: "🚦", desc: "문제가 생기기 전에 미리 행동한다는 뜻이에요.", examples: [
      { en: "Be proactive about your health.", ko: "건강에 대해 적극적으로 행동해." },
      { en: "She takes a proactive approach.", ko: "그녀는 선제적인 접근을 해요." },
      { en: "Proactive planning prevents problems.", ko: "선제적인 계획은 문제를 예방해요." },
    ]},
    { id: "adult-20", word: "accountability", ipa: "/əˌkaʊn.təˈbɪl.ə.ti/", meaningKo: "책임감", emoji: "🧾", desc: "자신의 행동에 책임을 진다는 뜻이에요.", examples: [
      { en: "We value accountability at work.", ko: "우리는 직장에서 책임감을 중요하게 여겨요." },
      { en: "Leaders must show accountability.", ko: "리더는 책임감을 보여야 해요." },
      { en: "Accountability builds trust.", ko: "책임감은 신뢰를 만들어요." },
    ]},
    { id: "adult-21", word: "revenue", ipa: "/ˈrev.ə.njuː/", meaningKo: "수익/매출", emoji: "💰", desc: "사업으로 벌어들이는 돈이에요.", examples: [
      { en: "The company's revenue grew.", ko: "그 회사의 매출이 늘었어요." },
      { en: "We track monthly revenue.", ko: "우리는 월별 매출을 추적해요." },
      { en: "Revenue increased this quarter.", ko: "이번 분기 매출이 증가했어요." },
    ]},
    { id: "adult-22", word: "expenditure", ipa: "/ɪkˈspen.dɪ.tʃər/", meaningKo: "지출", emoji: "💸", desc: "돈을 쓰는 것이에요.", examples: [
      { en: "We reduced our expenditure.", ko: "우리는 지출을 줄였어요." },
      { en: "Company expenditure rose.", ko: "회사 지출이 늘었어요." },
      { en: "Track your expenditure carefully.", ko: "지출을 꼼꼼히 기록해." },
    ]},
    { id: "adult-23", word: "forecast", ipa: "/ˈfɔːr.kæst/", meaningKo: "예측/전망", emoji: "🔮", desc: "미래를 미리 예상하는 것이에요.", examples: [
      { en: "The sales forecast looks good.", ko: "매출 전망이 좋아 보여요." },
      { en: "We update our forecast.", ko: "우리는 전망을 업데이트해요." },
      { en: "The forecast predicts growth.", ko: "그 전망은 성장을 예측해요." },
    ]},
    { id: "adult-24", word: "quarter", ipa: "/ˈkwɔːr.tər/", meaningKo: "분기", emoji: "📅", desc: "일 년을 넷으로 나눈 기간이에요.", examples: [
      { en: "Sales rose this quarter.", ko: "이번 분기 매출이 올랐어요." },
      { en: "We review every quarter.", ko: "우리는 매 분기 검토해요." },
      { en: "The first quarter was strong.", ko: "1분기는 좋았어요." },
    ]},
    { id: "adult-25", word: "merger", ipa: "/ˈmɜːr.dʒər/", meaningKo: "합병", emoji: "🤝", desc: "두 회사가 하나로 합쳐지는 것이에요.", examples: [
      { en: "The merger was successful.", ko: "그 합병은 성공적이었어요." },
      { en: "We announced a merger.", ko: "우리는 합병을 발표했어요." },
      { en: "The merger created a bigger company.", ko: "그 합병은 더 큰 회사를 만들었어요." },
    ]},
    { id: "adult-26", word: "acquisition", ipa: "/ˌæk.wɪˈzɪʃ.ən/", meaningKo: "인수", emoji: "🏢", desc: "다른 회사를 사들이는 것이에요.", examples: [
      { en: "The acquisition was big news.", ko: "그 인수는 큰 뉴스였어요." },
      { en: "We completed the acquisition.", ko: "우리는 인수를 완료했어요." },
      { en: "The company grew through acquisition.", ko: "그 회사는 인수를 통해 성장했어요." },
    ]},
    { id: "adult-27", word: "headquarters", ipa: "/ˈhed.kwɔːr.tərz/", meaningKo: "본사", emoji: "🏢", desc: "회사의 중심 사무실이에요.", examples: [
      { en: "The headquarters is in Seoul.", ko: "본사는 서울에 있어요." },
      { en: "I work at headquarters.", ko: "나는 본사에서 일해요." },
      { en: "We visited the headquarters.", ko: "우리는 본사를 방문했어요." },
    ]},
    { id: "adult-28", word: "logistics", ipa: "/ləˈdʒɪs.tɪks/", meaningKo: "물류", emoji: "🚚", desc: "물건을 옮기고 관리하는 과정이에요.", examples: [
      { en: "We manage logistics.", ko: "우리는 물류를 관리해요." },
      { en: "Logistics can be complex.", ko: "물류는 복잡할 수 있어요." },
      { en: "The logistics team works hard.", ko: "물류팀은 열심히 일해요." },
    ]},
    { id: "adult-29", word: "workforce", ipa: "/ˈwɜːrk.fɔːrs/", meaningKo: "노동력/직원들", emoji: "👷", desc: "일하는 사람들 전체를 말해요.", examples: [
      { en: "Our workforce is skilled.", ko: "우리 직원들은 숙련되어 있어요." },
      { en: "The workforce is growing.", ko: "노동력이 늘고 있어요." },
      { en: "We train our workforce.", ko: "우리는 직원들을 교육해요." },
    ]},
    { id: "adult-30", word: "turnover", ipa: "/ˈtɜːrn.oʊ.vər/", meaningKo: "이직률/매출액", emoji: "🔄", desc: "직원이 바뀌는 비율이나 총매출을 말해요.", examples: [
      { en: "Employee turnover is high.", ko: "직원 이직률이 높아요." },
      { en: "The company's turnover increased.", ko: "그 회사의 매출액이 늘었어요." },
      { en: "We reduce staff turnover.", ko: "우리는 직원 이직률을 줄여요." },
    ]},
    { id: "adult-31", word: "streamline", ipa: "/ˈstriːm.laɪn/", meaningKo: "간소화하다", emoji: "📉", desc: "과정을 더 효율적으로 만드는 것이에요.", examples: [
      { en: "We streamline our process.", ko: "우리는 과정을 간소화해요." },
      { en: "The system was streamlined.", ko: "그 시스템은 간소화됐어요." },
      { en: "Streamline your workflow.", ko: "업무 흐름을 간소화해." },
    ]},
    { id: "adult-32", word: "delegate", ipa: "/ˈdel.ɪ.geɪt/", meaningKo: "위임하다", emoji: "🤝", desc: "일을 다른 사람에게 맡기는 것이에요.", examples: [
      { en: "I delegate tasks.", ko: "나는 업무를 위임해요." },
      { en: "She delegates well.", ko: "그녀는 위임을 잘해요." },
      { en: "Learn to delegate.", ko: "위임하는 법을 배워." },
    ]},
    { id: "adult-33", word: "prioritize", ipa: "/praɪˈɒr.ə.taɪz/", meaningKo: "우선순위를 정하다", emoji: "🔝", desc: "무엇을 먼저 할지 정하는 것이에요.", examples: [
      { en: "I prioritize my tasks.", ko: "나는 업무의 우선순위를 정해요." },
      { en: "We prioritize safety.", ko: "우리는 안전을 우선시해요." },
      { en: "Prioritize your goals.", ko: "목표의 우선순위를 정해." },
    ]},
    { id: "adult-34", word: "onboarding", ipa: "/ˈɒn.bɔːr.dɪŋ/", meaningKo: "신입 적응 교육", emoji: "🚪", desc: "새 직원이 적응하도록 돕는 과정이에요.", examples: [
      { en: "We have an onboarding program.", ko: "우리는 신입 적응 프로그램이 있어요." },
      { en: "Onboarding takes a week.", ko: "적응 교육은 일주일이 걸려요." },
      { en: "Good onboarding helps new hires.", ko: "좋은 적응 교육은 신입사원에게 도움이 돼요." },
    ]},
    { id: "adult-35", word: "appraisal", ipa: "/əˈpreɪ.zəl/", meaningKo: "평가/인사 고과", emoji: "📋", desc: "직원의 성과를 평가하는 것이에요.", examples: [
      { en: "I have my appraisal tomorrow.", ko: "나는 내일 인사 평가가 있어요." },
      { en: "The appraisal went well.", ko: "그 평가는 잘 진행됐어요." },
      { en: "We do a yearly appraisal.", ko: "우리는 연례 평가를 해요." },
    ]},
    { id: "adult-36", word: "interest", ipa: "/ˈɪn.trəst/", meaningKo: "이자/관심", emoji: "💹", desc: "빌린 돈에 붙는 돈이거나 흥미를 말해요.", examples: [
      { en: "The bank pays interest.", ko: "은행은 이자를 지급해요." },
      { en: "I have an interest in music.", ko: "나는 음악에 관심이 있어요." },
      { en: "Interest rates went up.", ko: "금리가 올랐어요." },
    ]},
    { id: "adult-37", word: "mortgage", ipa: "/ˈmɔːr.gɪdʒ/", meaningKo: "주택담보대출", emoji: "🏠", desc: "집을 살 때 받는 큰 대출이에요.", examples: [
      { en: "We pay our mortgage monthly.", ko: "우리는 매달 주택담보대출을 갚아요." },
      { en: "The mortgage rate is low.", ko: "주택담보대출 금리가 낮아요." },
      { en: "We got a mortgage for our house.", ko: "우리는 집을 위해 대출을 받았어요." },
    ]},
    { id: "adult-38", word: "premium", ipa: "/ˈpriː.mi.əm/", meaningKo: "보험료/할증료", emoji: "💳", desc: "보험에 내는 돈이나 추가 비용이에요.", examples: [
      { en: "We pay an insurance premium.", ko: "우리는 보험료를 내요." },
      { en: "The premium increased.", ko: "보험료가 올랐어요." },
      { en: "This plan has a low premium.", ko: "이 플랜은 보험료가 낮아요." },
    ]},
    { id: "adult-39", word: "pension", ipa: "/ˈpen.ʃən/", meaningKo: "연금", emoji: "👴", desc: "은퇴 후 받는 돈이에요.", examples: [
      { en: "She receives a pension.", ko: "그녀는 연금을 받아요." },
      { en: "We save for our pension.", ko: "우리는 연금을 위해 저축해요." },
      { en: "The pension plan is good.", ko: "그 연금 제도는 좋아요." },
    ]},
    { id: "adult-40", word: "annuity", ipa: "/əˈnjuː.ə.ti/", meaningKo: "연금(정기지급금)", emoji: "💰", desc: "매년 정해진 금액을 받는 것이에요.", examples: [
      { en: "He bought an annuity.", ko: "그는 연금 상품을 샀어요." },
      { en: "The annuity pays monthly.", ko: "그 연금은 매달 지급돼요." },
      { en: "An annuity provides steady income.", ko: "연금은 꾸준한 소득을 제공해요." },
    ]},
    { id: "adult-41", word: "collateral", ipa: "/kəˈlæt.ər.əl/", meaningKo: "담보", emoji: "🏦", desc: "대출을 위해 맡기는 재산이에요.", examples: [
      { en: "The house is collateral.", ko: "그 집은 담보예요." },
      { en: "We need collateral for the loan.", ko: "우리는 대출을 위한 담보가 필요해요." },
      { en: "They used the car as collateral.", ko: "그들은 차를 담보로 썼어요." },
    ]},
    { id: "adult-42", word: "deficit", ipa: "/ˈdef.ɪ.sɪt/", meaningKo: "적자", emoji: "📉", desc: "돈이 부족한 상태예요.", examples: [
      { en: "The company has a deficit.", ko: "그 회사는 적자예요." },
      { en: "We reduce the deficit.", ko: "우리는 적자를 줄여요." },
      { en: "The budget deficit grew.", ko: "예산 적자가 늘었어요." },
    ]},
    { id: "adult-43", word: "surplus", ipa: "/ˈsɜːr.pləs/", meaningKo: "흑자/잉여", emoji: "📈", desc: "돈이나 물건이 남는 상태예요.", examples: [
      { en: "We have a surplus this year.", ko: "우리는 올해 흑자예요." },
      { en: "The surplus was saved.", ko: "그 잉여금은 저축됐어요." },
      { en: "A budget surplus is good news.", ko: "예산 흑자는 좋은 소식이에요." },
    ]},
    { id: "adult-44", word: "investor", ipa: "/ɪnˈves.tər/", meaningKo: "투자자", emoji: "💵", desc: "돈을 대고 이익을 기대하는 사람이에요.", examples: [
      { en: "The startup found a new investor.", ko: "그 스타트업은 새 투자자를 찾았어요." },
      { en: "Investors were worried about the market.", ko: "투자자들은 시장을 걱정했어요." },
      { en: "She is a careful investor.", ko: "그녀는 신중한 투자자예요." },
    ]},
    { id: "adult-45", word: "dividend", ipa: "/ˈdɪv.ɪ.dend/", meaningKo: "배당금", emoji: "💴", desc: "회사가 주주에게 나눠주는 돈이에요.", examples: [
      { en: "The company paid a dividend.", ko: "그 회사는 배당금을 지급했어요." },
      { en: "We received a dividend.", ko: "우리는 배당금을 받았어요." },
      { en: "Dividends reward investors.", ko: "배당금은 투자자들에게 보상이 돼요." },
    ]},
    { id: "adult-46", word: "credit", ipa: "/ˈkred.ɪt/", meaningKo: "신용/외상", emoji: "💳", desc: "믿고 빌려주는 돈이나 신뢰예요.", examples: [
      { en: "I have good credit.", ko: "나는 신용이 좋아요." },
      { en: "We bought it on credit.", ko: "우리는 그것을 외상으로 샀어요." },
      { en: "Check your credit score.", ko: "신용 점수를 확인해." },
    ]},
    { id: "adult-47", word: "debt", ipa: "/det/", meaningKo: "빚", emoji: "💳", desc: "갚아야 할 돈이에요.", examples: [
      { en: "I paid off my debt.", ko: "나는 빚을 다 갚았어요." },
      { en: "The company has debt.", ko: "그 회사는 빚이 있어요." },
      { en: "Avoid too much debt.", ko: "빚을 너무 많이 지지 마." },
    ]},
    { id: "adult-48", word: "contract", ipa: "/ˈkɒn.trækt/", meaningKo: "계약(서)", emoji: "📄", desc: "약속을 문서로 정한 것이에요.", examples: [
      { en: "We signed a contract.", ko: "우리는 계약서에 서명했어요." },
      { en: "The contract is clear.", ko: "그 계약서는 명확해요." },
      { en: "Read the contract carefully.", ko: "계약서를 꼼꼼히 읽어." },
    ]},
    { id: "adult-49", word: "clause", ipa: "/klɔːz/", meaningKo: "조항", emoji: "📜", desc: "계약서의 한 부분이에요.", examples: [
      { en: "This clause is important.", ko: "이 조항은 중요해요." },
      { en: "We added a new clause.", ko: "우리는 새로운 조항을 추가했어요." },
      { en: "Read every clause carefully.", ko: "모든 조항을 꼼꼼히 읽어." },
    ]},
    { id: "adult-50", word: "agreement", ipa: "/əˈgriː.mənt/", meaningKo: "합의/계약", emoji: "🤝", desc: "서로 동의한 내용이에요.", examples: [
      { en: "We reached an agreement.", ko: "우리는 합의에 도달했어요." },
      { en: "The agreement was signed.", ko: "그 계약서는 서명됐어요." },
      { en: "Both sides agreed.", ko: "양측이 동의했어요." },
    ]},
    { id: "adult-51", word: "warranty", ipa: "/ˈwɒr.ən.ti/", meaningKo: "보증(서)", emoji: "🛡", desc: "제품이 고장나면 고쳐주겠다는 약속이에요.", examples: [
      { en: "The product has a warranty.", ko: "그 제품은 보증서가 있어요." },
      { en: "My warranty expired.", ko: "내 보증 기간이 만료됐어요." },
      { en: "Check the warranty period.", ko: "보증 기간을 확인해." },
    ]},
    { id: "adult-52", word: "lawsuit", ipa: "/ˈlɔː.suːt/", meaningKo: "소송", emoji: "⚖️", desc: "법원에서 다투는 사건이에요.", examples: [
      { en: "They filed a lawsuit.", ko: "그들은 소송을 제기했어요." },
      { en: "The lawsuit was settled.", ko: "그 소송은 합의로 끝났어요." },
      { en: "We avoided a lawsuit.", ko: "우리는 소송을 피했어요." },
    ]},
    { id: "adult-53", word: "arbitration", ipa: "/ˌɑːr.bɪˈtreɪ.ʃən/", meaningKo: "중재", emoji: "⚖️", desc: "제3자가 분쟁을 해결해주는 절차예요.", examples: [
      { en: "We chose arbitration.", ko: "우리는 중재를 선택했어요." },
      { en: "Arbitration is faster than court.", ko: "중재는 법원보다 빨라요." },
      { en: "The dispute went to arbitration.", ko: "그 분쟁은 중재로 넘어갔어요." },
    ]},
    { id: "adult-54", word: "breach", ipa: "/briːtʃ/", meaningKo: "위반", emoji: "🚫", desc: "약속이나 규칙을 어기는 것이에요.", examples: [
      { en: "This is a breach of contract.", ko: "이것은 계약 위반이에요." },
      { en: "They reported the breach.", ko: "그들은 위반 사실을 신고했어요." },
      { en: "A breach of trust hurt them.", ko: "신뢰 위반이 그들에게 상처를 줬어요." },
    ]},
    { id: "adult-55", word: "terminate", ipa: "/ˈtɜːr.mɪ.neɪt/", meaningKo: "종료하다/해지하다", emoji: "❌", desc: "계약이나 일을 끝내는 것이에요.", examples: [
      { en: "We terminated the contract.", ko: "우리는 계약을 해지했어요." },
      { en: "The company terminated the deal.", ko: "그 회사는 거래를 종료했어요." },
      { en: "He was terminated from the job.", ko: "그는 해고됐어요." },
    ]},
    { id: "adult-56", word: "obligation", ipa: "/ˌɒb.lɪˈgeɪ.ʃən/", meaningKo: "의무", emoji: "📋", desc: "반드시 해야 하는 일이에요.", examples: [
      { en: "We have an obligation.", ko: "우리는 의무가 있어요." },
      { en: "It's my obligation to help.", ko: "돕는 것은 내 의무예요." },
      { en: "The contract creates an obligation.", ko: "그 계약은 의무를 만들어요." },
    ]},
    { id: "adult-57", word: "consent", ipa: "/kənˈsent/", meaningKo: "동의", emoji: "✅", desc: "허락하는 것이에요.", examples: [
      { en: "We need your consent.", ko: "우리는 당신의 동의가 필요해요." },
      { en: "She gave her consent.", ko: "그녀는 동의했어요." },
      { en: "Consent is required.", ko: "동의가 필요해요." },
    ]},
    { id: "adult-58", word: "insurance", ipa: "/ɪnˈʃʊr.əns/", meaningKo: "보험", emoji: "🛡", desc: "위험에 대비해 미리 내는 돈이에요.", examples: [
      { en: "I have health insurance.", ko: "나는 건강 보험이 있어요." },
      { en: "Insurance covers the cost.", ko: "보험이 비용을 보장해요." },
      { en: "We buy car insurance.", ko: "우리는 자동차 보험에 가입해요." },
    ]},
    { id: "adult-59", word: "claim", ipa: "/kleɪm/", meaningKo: "청구/주장", emoji: "📋", desc: "보험금을 요청하거나 무언가를 주장하는 것이에요.", examples: [
      { en: "I filed a claim.", ko: "나는 청구를 했어요." },
      { en: "The claim was approved.", ko: "그 청구는 승인됐어요." },
      { en: "She made a claim.", ko: "그녀는 주장을 했어요." },
    ]},
    { id: "adult-60", word: "coverage", ipa: "/ˈkʌv.ər.ɪdʒ/", meaningKo: "보장 범위", emoji: "🛡", desc: "보험이 책임지는 범위예요.", examples: [
      { en: "My coverage is good.", ko: "내 보장 범위는 좋아요." },
      { en: "We increased our coverage.", ko: "우리는 보장 범위를 늘렸어요." },
      { en: "Check your insurance coverage.", ko: "보험 보장 범위를 확인해." },
    ]},
    { id: "adult-61", word: "diagnosis", ipa: "/ˌdaɪ.əgˈnoʊ.sɪs/", meaningKo: "진단", emoji: "🩺", desc: "병을 판단하는 것이에요.", examples: [
      { en: "The doctor gave a diagnosis.", ko: "의사가 진단을 내렸어요." },
      { en: "We got the diagnosis.", ko: "우리는 진단 결과를 받았어요." },
      { en: "An early diagnosis helps.", ko: "조기 진단은 도움이 돼요." },
    ]},
    { id: "adult-62", word: "prescription", ipa: "/prɪˈskrɪp.ʃən/", meaningKo: "처방전", emoji: "💊", desc: "약을 받기 위한 의사의 지시서예요.", examples: [
      { en: "I have a prescription.", ko: "나는 처방전이 있어요." },
      { en: "The doctor wrote a prescription.", ko: "의사가 처방전을 써줬어요." },
      { en: "Fill the prescription at the pharmacy.", ko: "약국에서 처방전대로 약을 받아." },
    ]},
    { id: "adult-63", word: "checkup", ipa: "/ˈtʃek.ʌp/", meaningKo: "건강검진", emoji: "🩺", desc: "건강 상태를 확인하는 검사예요.", examples: [
      { en: "I have a checkup today.", ko: "나는 오늘 건강검진이 있어요." },
      { en: "Regular checkups are important.", ko: "정기 건강검진은 중요해요." },
      { en: "We do a yearly checkup.", ko: "우리는 연례 건강검진을 해요." },
    ]},
    { id: "adult-64", word: "therapy", ipa: "/ˈθer.ə.pi/", meaningKo: "치료", emoji: "🧘", desc: "몸이나 마음을 치료하는 과정이에요.", examples: [
      { en: "She goes to therapy.", ko: "그녀는 치료를 받으러 가요." },
      { en: "Therapy helped him.", ko: "치료가 그에게 도움이 됐어요." },
      { en: "Physical therapy is useful.", ko: "물리치료는 유용해요." },
    ]},
    { id: "adult-65", word: "wellness", ipa: "/ˈwel.nəs/", meaningKo: "건강/웰빙", emoji: "🌿", desc: "몸과 마음이 건강한 상태예요.", examples: [
      { en: "We focus on wellness.", ko: "우리는 웰빙에 집중해요." },
      { en: "Wellness programs help employees.", ko: "웰빙 프로그램은 직원들에게 도움이 돼요." },
      { en: "Wellness is important.", ko: "웰빙은 중요해요." },
    ]},
    { id: "adult-66", word: "rent", ipa: "/rent/", meaningKo: "집세/임대하다", emoji: "🏠", desc: "집을 빌리는 대가로 내는 돈이에요.", examples: [
      { en: "I pay rent monthly.", ko: "나는 매달 집세를 내요." },
      { en: "We rent an apartment.", ko: "우리는 아파트를 임대해요." },
      { en: "The rent is expensive.", ko: "집세가 비싸요." },
    ]},
    { id: "adult-67", word: "tenant", ipa: "/ˈten.ənt/", meaningKo: "세입자", emoji: "🏠", desc: "집을 빌려서 사는 사람이에요.", examples: [
      { en: "I am a tenant.", ko: "나는 세입자예요." },
      { en: "The tenant pays rent.", ko: "그 세입자는 집세를 내요." },
      { en: "We have a good tenant.", ko: "우리는 좋은 세입자가 있어요." },
    ]},
    { id: "adult-68", word: "landlord", ipa: "/ˈlænd.lɔːrd/", meaningKo: "집주인", emoji: "🏠", desc: "집을 빌려주는 사람이에요.", examples: [
      { en: "My landlord is kind.", ko: "우리 집주인은 친절해요." },
      { en: "The landlord fixed the sink.", ko: "집주인이 싱크대를 고쳐줬어요." },
      { en: "We talked to the landlord.", ko: "우리는 집주인과 이야기했어요." },
    ]},
    { id: "adult-69", word: "utility", ipa: "/juːˈtɪl.ə.ti/", meaningKo: "공공요금/설비", emoji: "💡", desc: "전기, 물 같은 생활 서비스예요.", examples: [
      { en: "We pay utility bills.", ko: "우리는 공공요금을 내요." },
      { en: "Utility costs rose.", ko: "공공요금이 올랐어요." },
      { en: "Check the utility charges.", ko: "공공요금 청구서를 확인해." },
    ]},
    { id: "adult-70", word: "renovation", ipa: "/ˌren.əˈveɪ.ʃən/", meaningKo: "리모델링/수리", emoji: "🛠", desc: "집이나 건물을 고치는 것이에요.", examples: [
      { en: "We did a renovation.", ko: "우리는 리모델링을 했어요." },
      { en: "The renovation took a month.", ko: "그 리모델링은 한 달이 걸렸어요." },
      { en: "The kitchen renovation is done.", ko: "부엌 리모델링이 끝났어요." },
    ]},
    { id: "adult-71", word: "maintenance", ipa: "/ˈmeɪn.tən.əns/", meaningKo: "유지보수", emoji: "🔧", desc: "잘 관리하고 고치는 일이에요.", examples: [
      { en: "We do regular maintenance.", ko: "우리는 정기적으로 유지보수를 해요." },
      { en: "Maintenance costs money.", ko: "유지보수는 돈이 들어요." },
      { en: "The car needs maintenance.", ko: "그 차는 정비가 필요해요." },
    ]},
    { id: "adult-72", word: "appliance", ipa: "/əˈplaɪ.əns/", meaningKo: "가전제품", emoji: "🔌", desc: "집에서 쓰는 전자 기기예요.", examples: [
      { en: "We bought a new appliance.", ko: "우리는 새 가전제품을 샀어요." },
      { en: "The appliance broke.", ko: "그 가전제품이 고장났어요." },
      { en: "Home appliances make life easier.", ko: "가전제품은 생활을 편하게 해줘요." },
    ]},
    { id: "adult-73", word: "relocate", ipa: "/ˌriː.loʊˈkeɪt/", meaningKo: "이전하다/이사하다", emoji: "📦", desc: "다른 곳으로 옮기는 것이에요.", examples: [
      { en: "We relocated to Seoul.", ko: "우리는 서울로 이사했어요." },
      { en: "The company relocated.", ko: "그 회사는 이전했어요." },
      { en: "They relocated for work.", ko: "그들은 일 때문에 이사했어요." },
    ]},
    { id: "adult-74", word: "commute", ipa: "/kəˈmjuːt/", meaningKo: "통근하다/통근", emoji: "🚗", desc: "직장까지 오가는 것이에요.", examples: [
      { en: "I commute by train.", ko: "나는 기차로 통근해요." },
      { en: "My commute is long.", ko: "내 통근 거리는 길어요." },
      { en: "We commute every day.", ko: "우리는 매일 통근해요." },
    ]},
    { id: "adult-75", word: "household", ipa: "/ˈhaʊs.hoʊld/", meaningKo: "가정/가구", emoji: "🏠", desc: "한 집에 사는 사람들이에요.", examples: [
      { en: "Our household is busy.", ko: "우리 가정은 바빠요." },
      { en: "The household budget is tight.", ko: "가계 예산이 빠듯해요." },
      { en: "Every household needs a plan.", ko: "모든 가정에는 계획이 필요해요." },
    ]},
    { id: "adult-76", word: "consensus", ipa: "/kənˈsen.səs/", meaningKo: "합의/의견 일치", emoji: "🤝", desc: "모두가 동의하는 의견이에요.", examples: [
      { en: "We reached a consensus.", ko: "우리는 합의에 도달했어요." },
      { en: "The consensus was clear.", ko: "그 합의는 명확했어요." },
      { en: "We need a group consensus.", ko: "우리는 그룹의 의견 일치가 필요해요." },
    ]},
    { id: "adult-77", word: "compromise", ipa: "/ˈkɒm.prə.maɪz/", meaningKo: "타협", emoji: "🤝", desc: "서로 양보해서 합의하는 것이에요.", examples: [
      { en: "We made a compromise.", ko: "우리는 타협했어요." },
      { en: "Compromise is important.", ko: "타협은 중요해요." },
      { en: "They found a compromise.", ko: "그들은 타협점을 찾았어요." },
    ]},
    { id: "adult-78", word: "feedback", ipa: "/ˈfiːd.bæk/", meaningKo: "피드백/의견", emoji: "💬", desc: "결과에 대한 반응이나 의견이에요.", examples: [
      { en: "I got good feedback.", ko: "나는 좋은 피드백을 받았어요." },
      { en: "Please give me feedback.", ko: "피드백을 주세요." },
      { en: "We use feedback to improve.", ko: "우리는 피드백을 활용해 개선해요." },
    ]},
    { id: "adult-79", word: "clarify", ipa: "/ˈklær.ɪ.faɪ/", meaningKo: "명확히 하다", emoji: "🔍", desc: "더 분명하게 설명하는 것이에요.", examples: [
      { en: "Can you clarify this?", ko: "이것을 명확히 해줄 수 있어?" },
      { en: "Let me clarify my point.", ko: "제 요점을 명확히 할게요." },
      { en: "We need to clarify the rules.", ko: "우리는 규칙을 명확히 해야 해요." },
    ]},
    { id: "adult-80", word: "mediate", ipa: "/ˈmiː.di.eɪt/", meaningKo: "중재하다", emoji: "🤝", desc: "다툼을 해결하도록 돕는 것이에요.", examples: [
      { en: "She mediated the conflict.", ko: "그녀는 갈등을 중재했어요." },
      { en: "We need someone to mediate.", ko: "우리는 중재할 사람이 필요해요." },
      { en: "He mediated between the two sides.", ko: "그는 양측 사이를 중재했어요." },
    ]},
    { id: "adult-81", word: "escalate", ipa: "/ˈes.kə.leɪt/", meaningKo: "확대되다/상부에 보고하다", emoji: "📈", desc: "문제가 커지거나 윗선에 알리는 것이에요.", examples: [
      { en: "The issue escalated.", ko: "그 문제가 커졌어요." },
      { en: "We escalated the problem.", ko: "우리는 그 문제를 상부에 보고했어요." },
      { en: "Don't let this escalate.", ko: "이것이 커지지 않게 해." },
    ]},
    { id: "adult-82", word: "consult", ipa: "/kənˈsʌlt/", meaningKo: "상담하다/자문을 구하다", emoji: "💬", desc: "전문가의 의견을 구하는 것이에요.", examples: [
      { en: "I consult a doctor.", ko: "나는 의사와 상담해요." },
      { en: "We consult an expert.", ko: "우리는 전문가에게 자문을 구해요." },
      { en: "Please consult the manual.", ko: "설명서를 참고해 주세요." },
    ]},
    { id: "adult-83", word: "brief", ipa: "/briːf/", meaningKo: "요약해서 알려주다/간단한", emoji: "📋", desc: "짧게 핵심 정보를 전달하는 것이에요.", examples: [
      { en: "Let me brief you.", ko: "제가 간단히 설명해 드릴게요." },
      { en: "The manager briefed the team.", ko: "매니저가 팀에게 브리핑했어요." },
      { en: "We had a brief meeting.", ko: "우리는 짧은 회의를 했어요." },
    ]},
    { id: "adult-84", word: "debrief", ipa: "/diːˈbriːf/", meaningKo: "사후 보고하다", emoji: "📝", desc: "일이 끝난 뒤 결과를 보고하는 것이에요.", examples: [
      { en: "We debrief after each project.", ko: "우리는 프로젝트가 끝나면 사후 보고를 해요." },
      { en: "The team was debriefed.", ko: "그 팀은 사후 보고를 받았어요." },
      { en: "Let's debrief tomorrow.", ko: "내일 사후 보고를 하자." },
    ]},
    { id: "adult-85", word: "rapport", ipa: "/ræˈpɔːr/", meaningKo: "친밀한 관계/공감대", emoji: "🤝", desc: "서로 편안하고 신뢰하는 관계예요.", examples: [
      { en: "We built good rapport.", ko: "우리는 좋은 친밀감을 쌓았어요." },
      { en: "She has rapport with clients.", ko: "그녀는 고객들과 친밀한 관계를 맺고 있어요." },
      { en: "Rapport helps teamwork.", ko: "공감대는 팀워크에 도움이 돼요." },
    ]},
    { id: "adult-86", word: "automation", ipa: "/ˌɔː.təˈmeɪ.ʃən/", meaningKo: "자동화", emoji: "🤖", desc: "기계가 스스로 일하게 만드는 것이에요.", examples: [
      { en: "We use automation.", ko: "우리는 자동화를 사용해요." },
      { en: "Automation saves time.", ko: "자동화는 시간을 절약해줘요." },
      { en: "The factory uses automation.", ko: "그 공장은 자동화를 사용해요." },
    ]},
    { id: "adult-87", word: "algorithm", ipa: "/ˈæl.gə.rɪ.ðəm/", meaningKo: "알고리즘", emoji: "💻", desc: "문제를 푸는 단계적 절차예요.", examples: [
      { en: "This algorithm is fast.", ko: "이 알고리즘은 빨라요." },
      { en: "We wrote an algorithm.", ko: "우리는 알고리즘을 작성했어요." },
      { en: "The app uses a smart algorithm.", ko: "그 앱은 똑똑한 알고리즘을 사용해요." },
    ]},
    { id: "adult-88", word: "encryption", ipa: "/ɪnˈkrɪp.ʃən/", meaningKo: "암호화", emoji: "🔒", desc: "정보를 안전하게 숨기는 기술이에요.", examples: [
      { en: "We use encryption.", ko: "우리는 암호화를 사용해요." },
      { en: "Encryption protects data.", ko: "암호화는 데이터를 보호해요." },
      { en: "The message has encryption.", ko: "그 메시지는 암호화되어 있어요." },
    ]},
    { id: "adult-89", word: "firewall", ipa: "/ˈfaɪər.wɔːl/", meaningKo: "방화벽", emoji: "🧱", desc: "컴퓨터를 보호하는 보안 시스템이에요.", examples: [
      { en: "We have a firewall.", ko: "우리는 방화벽이 있어요." },
      { en: "The firewall blocks attacks.", ko: "방화벽은 공격을 막아요." },
      { en: "Update the firewall settings.", ko: "방화벽 설정을 업데이트해." },
    ]},
    { id: "adult-90", word: "bandwidth", ipa: "/ˈbænd.wɪdθ/", meaningKo: "대역폭/처리 용량", emoji: "📶", desc: "인터넷이 데이터를 처리하는 능력이에요.", examples: [
      { en: "We need more bandwidth.", ko: "우리는 대역폭이 더 필요해요." },
      { en: "The bandwidth is limited.", ko: "대역폭이 제한적이에요." },
      { en: "High bandwidth improves speed.", ko: "높은 대역폭은 속도를 향상시켜요." },
    ]},
    { id: "adult-91", word: "interface", ipa: "/ˈɪn.tər.feɪs/", meaningKo: "인터페이스/화면 구성", emoji: "🖥", desc: "사람과 기계가 만나는 화면이에요.", examples: [
      { en: "The interface is simple.", ko: "그 인터페이스는 단순해요." },
      { en: "We designed a new interface.", ko: "우리는 새로운 인터페이스를 디자인했어요." },
      { en: "The user interface is friendly.", ko: "사용자 인터페이스가 친숙해요." },
    ]},
    { id: "adult-92", word: "database", ipa: "/ˈdeɪ.tə.beɪs/", meaningKo: "데이터베이스", emoji: "🗄", desc: "정보를 모아둔 저장소예요.", examples: [
      { en: "We store data in a database.", ko: "우리는 데이터베이스에 자료를 저장해요." },
      { en: "The database is large.", ko: "그 데이터베이스는 커요." },
      { en: "We update the database daily.", ko: "우리는 매일 데이터베이스를 업데이트해요." },
    ]},
    { id: "adult-93", word: "cybersecurity", ipa: "/ˌsaɪ.bər.sɪˈkjʊr.ə.ti/", meaningKo: "사이버 보안", emoji: "🔐", desc: "컴퓨터와 정보를 지키는 보안이에요.", examples: [
      { en: "We invest in cybersecurity.", ko: "우리는 사이버 보안에 투자해요." },
      { en: "Cybersecurity is important.", ko: "사이버 보안은 중요해요." },
      { en: "The company improved cybersecurity.", ko: "그 회사는 사이버 보안을 개선했어요." },
    ]},
    { id: "adult-94", word: "competent", ipa: "/ˈkɒm.pɪ.tənt/", meaningKo: "유능한", emoji: "💪", desc: "일을 잘 해낼 능력이 있다는 뜻이에요.", examples: [
      { en: "She is competent.", ko: "그녀는 유능해요." },
      { en: "He is a competent leader.", ko: "그는 유능한 리더예요." },
      { en: "We hired a competent team.", ko: "우리는 유능한 팀을 채용했어요." },
    ]},
    { id: "adult-95", word: "diligent", ipa: "/ˈdɪl.ɪ.dʒənt/", meaningKo: "근면한/성실한", emoji: "📚", desc: "꾸준히 열심히 노력한다는 뜻이에요.", examples: [
      { en: "He is diligent.", ko: "그는 근면해요." },
      { en: "She works in a diligent way.", ko: "그녀는 성실하게 일해요." },
      { en: "Diligent students succeed.", ko: "성실한 학생들은 성공해요." },
    ]},
    { id: "adult-96", word: "punctual", ipa: "/ˈpʌŋk.tʃu.əl/", meaningKo: "시간을 잘 지키는", emoji: "⏰", desc: "정해진 시간을 잘 지킨다는 뜻이에요.", examples: [
      { en: "Be punctual.", ko: "시간을 잘 지켜." },
      { en: "She is always punctual.", ko: "그녀는 항상 시간을 잘 지켜요." },
      { en: "Punctual employees are valued.", ko: "시간을 잘 지키는 직원은 귀하게 여겨져요." },
    ]},
    { id: "adult-97", word: "adaptable", ipa: "/əˈdæp.tə.bəl/", meaningKo: "적응력 있는", emoji: "🔄", desc: "새로운 상황에 잘 적응한다는 뜻이에요.", examples: [
      { en: "He is adaptable.", ko: "그는 적응력이 있어요." },
      { en: "We need adaptable workers.", ko: "우리는 적응력 있는 직원이 필요해요." },
      { en: "She is adaptable to change.", ko: "그녀는 변화에 잘 적응해요." },
    ]},
    { id: "adult-98", word: "assertive", ipa: "/əˈsɜːr.tɪv/", meaningKo: "단호한/적극적인", emoji: "💬", desc: "자신의 생각을 확실하게 표현한다는 뜻이에요.", examples: [
      { en: "Be assertive.", ko: "단호하게 행동해." },
      { en: "She is assertive at work.", ko: "그녀는 직장에서 적극적이에요." },
      { en: "An assertive leader speaks clearly.", ko: "단호한 리더는 명확하게 말해요." },
    ]},
    { id: "adult-99", word: "decisive", ipa: "/dɪˈsaɪ.sɪv/", meaningKo: "결단력 있는", emoji: "🎯", desc: "빠르고 확실하게 결정을 내린다는 뜻이에요.", examples: [
      { en: "He is decisive.", ko: "그는 결단력이 있어요." },
      { en: "A decisive leader acts fast.", ko: "결단력 있는 리더는 빠르게 행동해요." },
      { en: "Be decisive when needed.", ko: "필요할 때는 결단력 있게 행동해." },
    ]},
    { id: "adult-100", word: "innovative", ipa: "/ˈɪn.ə.veɪ.tɪv/", meaningKo: "혁신적인", emoji: "💡", desc: "새롭고 창의적인 방법을 쓴다는 뜻이에요.", examples: [
      { en: "This is an innovative idea.", ko: "이것은 혁신적인 아이디어예요." },
      { en: "The company is innovative.", ko: "그 회사는 혁신적이에요." },
      { en: "We need innovative solutions.", ko: "우리는 혁신적인 해결책이 필요해요." },
    ]},
    { id: "adult-101", word: "resourceful", ipa: "/rɪˈzɔːrs.fəl/", meaningKo: "자원이 풍부한/수완 있는", emoji: "🧠", desc: "어려운 상황에서도 방법을 잘 찾는다는 뜻이에요.", examples: [
      { en: "She is resourceful.", ko: "그녀는 수완이 있어요." },
      { en: "He found a resourceful solution.", ko: "그는 수완 있는 해결책을 찾았어요." },
      { en: "Resourceful people adapt quickly.", ko: "수완 있는 사람들은 빠르게 적응해요." },
    ]},
    { id: "adult-102", word: "tactful", ipa: "/ˈtækt.fəl/", meaningKo: "눈치 있는/요령 있는", emoji: "🤝", desc: "다른 사람의 기분을 배려하며 말한다는 뜻이에요.", examples: [
      { en: "Be tactful.", ko: "요령 있게 행동해." },
      { en: "She gave tactful feedback.", ko: "그녀는 요령 있게 피드백을 줬어요." },
      { en: "A tactful manager handles conflict well.", ko: "요령 있는 매니저는 갈등을 잘 다뤄요." },
    ]},
    { id: "adult-103", word: "thorough", ipa: "/ˈθɜːr.oʊ/", meaningKo: "철저한", emoji: "🔍", desc: "빠짐없이 꼼꼼하다는 뜻이에요.", examples: [
      { en: "He did a thorough job.", ko: "그는 철저하게 일했어요." },
      { en: "We need a thorough review.", ko: "우리는 철저한 검토가 필요해요." },
      { en: "Her research is thorough.", ko: "그녀의 연구는 철저해요." },
    ]},
    { id: "adult-104", word: "resume", ipa: "/ˈrez.ʊ.meɪ/", meaningKo: "이력서", emoji: "📄", desc: "경력을 정리한 문서예요.", examples: [
      { en: "I updated my resume.", ko: "나는 이력서를 업데이트했어요." },
      { en: "Send your resume.", ko: "이력서를 보내." },
      { en: "The resume looks great.", ko: "그 이력서는 훌륭해 보여요." },
    ]},
    { id: "adult-105", word: "qualification", ipa: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", meaningKo: "자격(요건)", emoji: "🎓", desc: "일을 하기 위해 필요한 능력이나 조건이에요.", examples: [
      { en: "She has the right qualification.", ko: "그녀는 적합한 자격을 가지고 있어요." },
      { en: "What are the qualifications?", ko: "자격 요건이 뭐예요?" },
      { en: "He meets the qualifications.", ko: "그는 자격 요건을 충족해요." },
    ]},
    { id: "adult-106", word: "promotion", ipa: "/prəˈmoʊ.ʃən/", meaningKo: "승진", emoji: "📈", desc: "더 높은 자리로 올라가는 것이에요.", examples: [
      { en: "I got a promotion.", ko: "나는 승진했어요." },
      { en: "She earned a promotion.", ko: "그녀는 승진을 얻어냈어요." },
      { en: "The promotion made her happy.", ko: "그 승진은 그녀를 행복하게 했어요." },
    ]},
    { id: "adult-107", word: "retirement", ipa: "/rɪˈtaɪər.mənt/", meaningKo: "은퇴", emoji: "🏖", desc: "일을 그만두고 쉬는 시기예요.", examples: [
      { en: "He is planning retirement.", ko: "그는 은퇴를 계획하고 있어요." },
      { en: "She enjoys her retirement.", ko: "그녀는 은퇴 생활을 즐겨요." },
      { en: "Retirement comes after years of work.", ko: "은퇴는 오랜 세월 일한 후에 와요." },
    ]},
    { id: "adult-108", word: "internship", ipa: "/ˈɪn.tɜːrn.ʃɪp/", meaningKo: "인턴십", emoji: "🧑‍💼", desc: "일을 배우기 위해 잠깐 일하는 것이에요.", examples: [
      { en: "I did an internship.", ko: "나는 인턴십을 했어요." },
      { en: "The internship was useful.", ko: "그 인턴십은 유용했어요." },
      { en: "She applied for an internship.", ko: "그녀는 인턴십에 지원했어요." },
    ]},
    { id: "adult-109", word: "mentor", ipa: "/ˈmen.tɔːr/", meaningKo: "멘토/조언자", emoji: "🧑‍🏫", desc: "경험을 나누며 이끌어주는 사람이에요.", examples: [
      { en: "I have a great mentor.", ko: "나는 훌륭한 멘토가 있어요." },
      { en: "She is my mentor.", ko: "그녀는 내 멘토예요." },
      { en: "A good mentor gives advice.", ko: "좋은 멘토는 조언을 해줘요." },
    ]},
    { id: "adult-110", word: "networking", ipa: "/ˈnet.wɜːr.kɪŋ/", meaningKo: "인맥 형성", emoji: "🤝", desc: "사람들과 관계를 만드는 활동이에요.", examples: [
      { en: "Networking helps your career.", ko: "인맥 형성은 경력에 도움이 돼요." },
      { en: "I go to networking events.", ko: "나는 네트워킹 행사에 가요." },
      { en: "She is good at networking.", ko: "그녀는 인맥 형성을 잘해요." },
    ]},
    { id: "adult-111", word: "schedule", ipa: "/ˈskedʒ.uːl/", meaningKo: "일정", emoji: "📅", desc: "해야 할 일의 시간표예요.", examples: [
      { en: "Check my schedule.", ko: "내 일정을 확인해." },
      { en: "The schedule is busy.", ko: "일정이 바빠요." },
      { en: "We follow a schedule.", ko: "우리는 일정을 따라요." },
    ]},
    { id: "adult-112", word: "workload", ipa: "/ˈwɜːrk.loʊd/", meaningKo: "업무량", emoji: "📚", desc: "해야 할 일의 양이에요.", examples: [
      { en: "My workload is heavy.", ko: "내 업무량은 많아요." },
      { en: "We manage our workload.", ko: "우리는 업무량을 관리해요." },
      { en: "The workload increased this month.", ko: "이번 달 업무량이 늘었어요." },
    ]},
    { id: "adult-113", word: "multitask", ipa: "/ˈmʌl.ti.tæsk/", meaningKo: "동시에 여러 일을 하다", emoji: "🤹", desc: "여러 가지 일을 동시에 하는 것이에요.", examples: [
      { en: "I can multitask.", ko: "나는 여러 일을 동시에 할 수 있어요." },
      { en: "She multitasks well.", ko: "그녀는 멀티태스킹을 잘해요." },
      { en: "Multitasking can be hard.", ko: "멀티태스킹은 힘들 수 있어요." },
    ]},
    { id: "adult-114", word: "procrastinate", ipa: "/proʊˈkræs.tɪ.neɪt/", meaningKo: "미루다", emoji: "🕰", desc: "할 일을 나중으로 미루는 것이에요.", examples: [
      { en: "Don't procrastinate.", ko: "미루지 마." },
      { en: "He procrastinates often.", ko: "그는 자주 미뤄요." },
      { en: "I try not to procrastinate.", ko: "나는 미루지 않으려고 노력해요." },
    ]},
    { id: "adult-115", word: "productivity", ipa: "/ˌproʊ.dʌkˈtɪv.ə.ti/", meaningKo: "생산성", emoji: "📈", desc: "일을 얼마나 잘 해내는지를 말해요.", examples: [
      { en: "We improve productivity.", ko: "우리는 생산성을 향상시켜요." },
      { en: "Productivity increased.", ko: "생산성이 늘었어요." },
      { en: "Good sleep boosts productivity.", ko: "좋은 수면은 생산성을 높여요." },
    ]},
    { id: "adult-116", word: "routine", ipa: "/ruːˈtiːn/", meaningKo: "일상/루틴", emoji: "🔄", desc: "매일 반복하는 일이에요.", examples: [
      { en: "I have a morning routine.", ko: "나는 아침 루틴이 있어요." },
      { en: "Our routine is simple.", ko: "우리의 일상은 단순해요." },
      { en: "She follows a strict routine.", ko: "그녀는 엄격한 루틴을 따라요." },
    ]},
    { id: "adult-117", word: "overtime", ipa: "/ˈoʊ.vər.taɪm/", meaningKo: "초과근무", emoji: "⏰", desc: "정해진 시간보다 더 일하는 것이에요.", examples: [
      { en: "I worked overtime.", ko: "나는 초과근무를 했어요." },
      { en: "Overtime pay is higher.", ko: "초과근무 수당은 더 높아요." },
      { en: "We avoid too much overtime.", ko: "우리는 초과근무를 너무 많이 하지 않으려고 해요." },
    ]},
    { id: "adult-118", word: "workflow", ipa: "/ˈwɜːrk.floʊ/", meaningKo: "업무 흐름", emoji: "🔄", desc: "일이 진행되는 순서예요.", examples: [
      { en: "We improved our workflow.", ko: "우리는 업무 흐름을 개선했어요." },
      { en: "The workflow is efficient.", ko: "그 업무 흐름은 효율적이에요." },
      { en: "A clear workflow saves time.", ko: "명확한 업무 흐름은 시간을 절약해요." },
    ]},
    { id: "adult-119", word: "agenda", ipa: "/əˈdʒen.də/", meaningKo: "안건/의제", emoji: "📋", desc: "회의에서 다룰 내용 목록이에요.", examples: [
      { en: "Check the meeting agenda.", ko: "회의 안건을 확인해." },
      { en: "We have a full agenda.", ko: "우리는 안건이 가득해요." },
      { en: "The agenda includes three topics.", ko: "그 안건에는 세 가지 주제가 포함돼요." },
    ]},
    { id: "adult-120", word: "milestone", ipa: "/ˈmaɪl.stoʊn/", meaningKo: "이정표/중요한 단계", emoji: "🚩", desc: "중요한 성과나 단계예요.", examples: [
      { en: "We reached a milestone.", ko: "우리는 이정표에 도달했어요." },
      { en: "This is a big milestone.", ko: "이것은 큰 이정표예요." },
      { en: "The project has many milestones.", ko: "그 프로젝트에는 많은 단계가 있어요." },
    ]},
  ],
};
