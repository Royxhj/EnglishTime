// 추가 읽기 지문: 초등~고등 단계마다 8개씩. 불러온 뒤 단계 순서대로 다시 정렬한다.
// 문제의 보기는 풀 때 섞이므로 answer는 정답의 번호만 맞으면 된다.
READING_PASSAGES.push(
  // ── 초등 1~2학년 ──
  {
    id: "pencilcase", levelId: "elementary-low", emoji: "✏️", title: "내 필통",
    sentences: [
      { en: "I have a pencil case.", ko: "나는 필통이 하나 있어요." },
      { en: "It is red and yellow.", ko: "필통은 빨간색과 노란색이에요." },
      { en: "There are three pencils in it.", ko: "그 안에 연필이 세 자루 있어요." },
      { en: "There is an eraser too.", ko: "지우개도 하나 있어요." },
      { en: "My pencil case is on my desk.", ko: "내 필통은 책상 위에 있어요." },
    ],
    glossary: [{ w: "pencil case", ko: "필통" }, { w: "three", ko: "셋" }, { w: "eraser", ko: "지우개" }, { w: "desk", ko: "책상" }],
    questions: [
      { q: "필통은 무슨 색인가요?", choices: ["빨간색과 노란색", "파란색과 흰색", "검은색", "초록색과 빨간색"], answer: 0, explain: "It is red and yellow. red는 빨간색, yellow는 노란색이에요." },
      { q: "필통 안에 연필은 몇 자루 있나요?", choices: ["두 자루", "세 자루", "네 자루", "다섯 자루"], answer: 1, explain: "There are three pencils in it. three는 '셋'이에요." },
      { q: "필통은 어디에 있나요?", choices: ["침대 위", "가방 안", "책상 위", "의자 아래"], answer: 2, explain: "on my desk → 책상 위에 있어요." },
    ],
  },
  {
    id: "sportsday", levelId: "elementary-low", emoji: "🏃", title: "운동회",
    sentences: [
      { en: "Today is sports day.", ko: "오늘은 운동회 날이에요." },
      { en: "I am on the blue team.", ko: "나는 파란 팀이에요." },
      { en: "My friend Mina is on the white team.", ko: "내 친구 미나는 하얀 팀이에요." },
      { en: "I run very fast.", ko: "나는 아주 빨리 달려요." },
      { en: "Our team wins the race!", ko: "우리 팀이 달리기 경주에서 이겨요!" },
    ],
    glossary: [{ w: "team", ko: "팀" }, { w: "run", ko: "달리다" }, { w: "fast", ko: "빨리" }, { w: "wins", ko: "이기다" }, { w: "race", ko: "경주" }],
    questions: [
      { q: "나는 어느 팀인가요?", choices: ["하얀 팀", "파란 팀", "빨간 팀", "노란 팀"], answer: 1, explain: "I am on the blue team. blue는 파란색이에요." },
      { q: "미나는 어느 팀인가요?", choices: ["하얀 팀", "파란 팀", "빨간 팀", "노란 팀"], answer: 0, explain: "Mina is on the white team. white는 하얀색이에요." },
      { q: "달리기 경주에서 이긴 팀은?", choices: ["파란 팀", "하얀 팀", "두 팀 다 졌어요", "비겼어요"], answer: 0, explain: "Our team wins the race! 우리 팀은 파란 팀이에요." },
    ],
  },
  {
    id: "beach", levelId: "elementary-low", emoji: "🏖️", title: "바닷가에서",
    sentences: [
      { en: "It is hot today.", ko: "오늘은 더워요." },
      { en: "We go to the beach.", ko: "우리는 바닷가에 가요." },
      { en: "My brother swims in the sea.", ko: "우리 형은 바다에서 수영해요." },
      { en: "I make a big sandcastle.", ko: "나는 커다란 모래성을 만들어요." },
      { en: "Dad eats a watermelon under the umbrella.", ko: "아빠는 파라솔 아래에서 수박을 먹어요." },
    ],
    glossary: [{ w: "hot", ko: "더운" }, { w: "beach", ko: "바닷가" }, { w: "sea", ko: "바다" }, { w: "sandcastle", ko: "모래성" }, { w: "watermelon", ko: "수박" }, { w: "umbrella", ko: "파라솔, 우산" }],
    questions: [
      { q: "오늘 날씨는 어떤가요?", choices: ["추워요", "더워요", "비가 와요", "눈이 와요"], answer: 1, explain: "It is hot today. hot은 '더운'이에요." },
      { q: "내가 만드는 것은?", choices: ["모래성", "눈사람", "연", "종이배"], answer: 0, explain: "I make a big sandcastle. sandcastle은 모래성이에요." },
      { q: "아빠가 먹는 것은?", choices: ["아이스크림", "수박", "핫도그", "사과"], answer: 1, explain: "Dad eats a watermelon. watermelon은 수박이에요." },
    ],
  },
  {
    id: "schoolbus", levelId: "elementary-low", emoji: "🚌", title: "스쿨버스",
    sentences: [
      { en: "I go to school by bus.", ko: "나는 버스를 타고 학교에 가요." },
      { en: "The bus is big and yellow.", ko: "버스는 크고 노란색이에요." },
      { en: "The driver is kind.", ko: "운전기사님은 친절해요." },
      { en: "He says, \"Good morning!\"", ko: "기사님은 \"좋은 아침!\"이라고 말해요." },
      { en: "I sit next to my friend Jiho.", ko: "나는 친구 지호 옆에 앉아요." },
    ],
    glossary: [{ w: "by bus", ko: "버스를 타고" }, { w: "driver", ko: "운전기사" }, { w: "kind", ko: "친절한" }, { w: "next to", ko: "~ 옆에" }],
    questions: [
      { q: "나는 학교에 어떻게 가나요?", choices: ["걸어서", "자전거를 타고", "버스를 타고", "지하철을 타고"], answer: 2, explain: "I go to school by bus. by bus는 '버스를 타고'예요." },
      { q: "버스는 어떤 모습인가요?", choices: ["작고 빨간색", "크고 노란색", "크고 파란색", "작고 노란색"], answer: 1, explain: "The bus is big and yellow." },
      { q: "나는 누구 옆에 앉나요?", choices: ["지호", "운전기사님", "선생님", "동생"], answer: 0, explain: "I sit next to my friend Jiho. next to는 '~ 옆에'예요." },
    ],
  },
  {
    id: "toybox", levelId: "elementary-low", emoji: "🧸", title: "장난감 상자",
    sentences: [
      { en: "This is my toy box.", ko: "이것은 내 장난감 상자예요." },
      { en: "I have a robot and a ball.", ko: "나는 로봇 한 개와 공 한 개가 있어요." },
      { en: "I also have two teddy bears.", ko: "곰 인형도 두 개 있어요." },
      { en: "My favorite toy is the robot.", ko: "내가 가장 좋아하는 장난감은 로봇이에요." },
      { en: "It can walk and talk!", ko: "로봇은 걷고 말할 수 있어요!" },
    ],
    glossary: [{ w: "toy", ko: "장난감" }, { w: "teddy bears", ko: "곰 인형들" }, { w: "favorite", ko: "가장 좋아하는" }, { w: "walk", ko: "걷다" }, { w: "talk", ko: "말하다" }],
    questions: [
      { q: "곰 인형은 몇 개 있나요?", choices: ["한 개", "두 개", "세 개", "없어요"], answer: 1, explain: "I also have two teddy bears. two는 '둘'이에요." },
      { q: "가장 좋아하는 장난감은?", choices: ["공", "곰 인형", "로봇", "자동차"], answer: 2, explain: "My favorite toy is the robot." },
      { q: "로봇이 할 수 있는 것은?", choices: ["걷고 말하기", "날기", "노래하기", "수영하기"], answer: 0, explain: "It can walk and talk! 걷고 말할 수 있어요." },
    ],
  },
  {
    id: "farm", levelId: "elementary-low", emoji: "🐄", title: "할머니의 농장",
    sentences: [
      { en: "My grandma has a farm.", ko: "할머니는 농장을 가지고 계세요." },
      { en: "There are cows and pigs.", ko: "농장에는 소와 돼지가 있어요." },
      { en: "There are many chickens too.", ko: "닭도 많이 있어요." },
      { en: "I feed the chickens in the morning.", ko: "나는 아침에 닭에게 먹이를 줘요." },
      { en: "Then I get eggs for breakfast.", ko: "그리고 아침으로 먹을 달걀을 가져와요." },
    ],
    glossary: [{ w: "farm", ko: "농장" }, { w: "cows", ko: "소들" }, { w: "pigs", ko: "돼지들" }, { w: "chickens", ko: "닭들" }, { w: "feed", ko: "먹이를 주다" }, { w: "eggs", ko: "달걀들" }],
    questions: [
      { q: "농장은 누구의 것인가요?", choices: ["할아버지", "할머니", "삼촌", "이모"], answer: 1, explain: "My grandma has a farm. grandma는 할머니예요." },
      { q: "내가 아침에 하는 일은?", choices: ["소 우유 짜기", "닭에게 먹이 주기", "돼지 씻기기", "밭에 물 주기"], answer: 1, explain: "I feed the chickens in the morning. feed는 '먹이를 주다'예요." },
      { q: "아침 식사로 가져오는 것은?", choices: ["우유", "사과", "달걀", "빵"], answer: 2, explain: "I get eggs for breakfast. eggs는 달걀이에요." },
    ],
  },
  {
    id: "rainbow", levelId: "elementary-low", emoji: "🌈", title: "무지개",
    sentences: [
      { en: "The rain stops.", ko: "비가 그쳐요." },
      { en: "The sun comes out.", ko: "해가 나와요." },
      { en: "Look! There is a rainbow in the sky.", ko: "봐요! 하늘에 무지개가 있어요." },
      { en: "It has seven colors.", ko: "무지개는 일곱 가지 색이에요." },
      { en: "Red, orange, yellow, green, blue, navy, and purple.", ko: "빨강, 주황, 노랑, 초록, 파랑, 남색, 보라예요." },
    ],
    glossary: [{ w: "rain", ko: "비" }, { w: "sun", ko: "해" }, { w: "rainbow", ko: "무지개" }, { w: "sky", ko: "하늘" }, { w: "seven", ko: "일곱" }],
    questions: [
      { q: "무지개는 어디에 있나요?", choices: ["바다", "하늘", "산", "강"], answer: 1, explain: "There is a rainbow in the sky. sky는 하늘이에요." },
      { q: "무지개는 몇 가지 색인가요?", choices: ["다섯 가지", "여섯 가지", "일곱 가지", "여덟 가지"], answer: 2, explain: "It has seven colors. seven은 '일곱'이에요." },
      { q: "무지개가 뜨기 전에 무슨 일이 있었나요?", choices: ["비가 그치고 해가 나왔어요", "눈이 왔어요", "바람이 불었어요", "밤이 되었어요"], answer: 0, explain: "The rain stops. The sun comes out. 비가 그치고 해가 나왔어요." },
    ],
  },
  {
    id: "teeth", levelId: "elementary-low", emoji: "🪥", title: "이 닦기",
    sentences: [
      { en: "I brush my teeth three times a day.", ko: "나는 하루에 세 번 이를 닦아요." },
      { en: "I brush after breakfast, lunch, and dinner.", ko: "아침, 점심, 저녁을 먹고 닦아요." },
      { en: "I don't eat candy before bed.", ko: "나는 자기 전에 사탕을 먹지 않아요." },
      { en: "My teeth are white and strong.", ko: "내 이는 하얗고 튼튼해요." },
      { en: "The dentist says, \"Good job!\"", ko: "치과 선생님이 \"잘했어요!\"라고 말해요." },
    ],
    glossary: [{ w: "brush", ko: "닦다" }, { w: "teeth", ko: "이(치아)" }, { w: "a day", ko: "하루에" }, { w: "candy", ko: "사탕" }, { w: "strong", ko: "튼튼한" }, { w: "dentist", ko: "치과 의사" }],
    questions: [
      { q: "하루에 몇 번 이를 닦나요?", choices: ["한 번", "두 번", "세 번", "네 번"], answer: 2, explain: "three times a day → 하루에 세 번이에요." },
      { q: "자기 전에 하지 않는 것은?", choices: ["사탕 먹기", "이 닦기", "책 읽기", "샤워하기"], answer: 0, explain: "I don't eat candy before bed. 자기 전에 사탕을 먹지 않아요." },
      { q: "치과 선생님이 한 말은?", choices: ["잘했어요!", "조심하세요!", "다시 오세요!", "사탕 먹어요!"], answer: 0, explain: "Good job! → 잘했어요!" },
    ],
  },

  // ── 초등 3~4학년 ──
  {
    id: "camping", levelId: "elementary-mid", emoji: "⛺", title: "가족 캠핑",
    sentences: [
      { en: "Last Saturday, my family went camping.", ko: "지난 토요일, 우리 가족은 캠핑을 갔어요." },
      { en: "We put up a tent near a river.", ko: "우리는 강 근처에 텐트를 쳤어요." },
      { en: "Dad cooked sausages over the fire.", ko: "아빠는 불에 소시지를 구웠어요." },
      { en: "At night, we looked at the stars.", ko: "밤에는 별을 보았어요." },
      { en: "It was the best weekend ever!", ko: "최고의 주말이었어요!" },
    ],
    glossary: [{ w: "went camping", ko: "캠핑을 갔다" }, { w: "put up", ko: "세우다, 치다" }, { w: "near", ko: "~ 근처에" }, { w: "river", ko: "강" }, { w: "stars", ko: "별들" }, { w: "ever", ko: "지금까지" }],
    questions: [
      { q: "캠핑을 간 날은?", choices: ["지난 토요일", "지난 일요일", "어제", "오늘"], answer: 0, explain: "Last Saturday → 지난 토요일이에요." },
      { q: "텐트를 친 곳은?", choices: ["바닷가", "강 근처", "산꼭대기", "마당"], answer: 1, explain: "near a river → 강 근처예요." },
      { q: "밤에 한 일은?", choices: ["별 보기", "수영", "낚시", "영화 보기"], answer: 0, explain: "At night, we looked at the stars." },
    ],
  },
  {
    id: "library", levelId: "elementary-mid", emoji: "📚", title: "도서관에서",
    sentences: [
      { en: "I go to the library every Wednesday.", ko: "나는 수요일마다 도서관에 가요." },
      { en: "The library is quiet and clean.", ko: "도서관은 조용하고 깨끗해요." },
      { en: "Today I borrowed two books about dinosaurs.", ko: "오늘 나는 공룡에 관한 책 두 권을 빌렸어요." },
      { en: "I have to return them in two weeks.", ko: "2주 안에 돌려줘야 해요." },
      { en: "I will read one of them tonight.", ko: "오늘 밤에 그중 한 권을 읽을 거예요." },
    ],
    glossary: [{ w: "library", ko: "도서관" }, { w: "quiet", ko: "조용한" }, { w: "borrowed", ko: "빌렸다" }, { w: "dinosaurs", ko: "공룡들" }, { w: "return", ko: "돌려주다" }],
    questions: [
      { q: "도서관에 가는 날은?", choices: ["월요일마다", "수요일마다", "금요일마다", "주말마다"], answer: 1, explain: "every Wednesday → 수요일마다예요." },
      { q: "무엇에 관한 책을 빌렸나요?", choices: ["우주", "곤충", "공룡", "바다"], answer: 2, explain: "two books about dinosaurs → 공룡에 관한 책이에요." },
      { q: "책은 언제까지 돌려줘야 하나요?", choices: ["1주 안에", "2주 안에", "3주 안에", "한 달 안에"], answer: 1, explain: "I have to return them in two weeks." },
    ],
  },
  {
    id: "twins", levelId: "elementary-mid", emoji: "👯", title: "쌍둥이 동생들",
    sentences: [
      { en: "I have twin sisters.", ko: "나는 쌍둥이 여동생들이 있어요." },
      { en: "Their names are Sora and Sumi.", ko: "이름은 소라와 수미예요." },
      { en: "They look the same, but they are very different.", ko: "둘은 똑같이 생겼지만 아주 달라요." },
      { en: "Sora is taller than Sumi.", ko: "소라는 수미보다 키가 커요." },
      { en: "Sora likes drawing, but Sumi likes singing.", ko: "소라는 그림 그리기를, 수미는 노래하기를 좋아해요." },
    ],
    glossary: [{ w: "twin", ko: "쌍둥이의" }, { w: "look the same", ko: "똑같이 생기다" }, { w: "different", ko: "다른" }, { w: "taller", ko: "키가 더 큰" }, { w: "drawing", ko: "그림 그리기" }],
    questions: [
      { q: "누가 더 키가 큰가요?", choices: ["소라", "수미", "나", "둘이 같아요"], answer: 0, explain: "Sora is taller than Sumi. 소라가 수미보다 커요." },
      { q: "수미가 좋아하는 것은?", choices: ["그림 그리기", "노래하기", "춤추기", "책 읽기"], answer: 1, explain: "Sumi likes singing." },
      { q: "'different'의 뜻은?", choices: ["같은", "다른", "비슷한", "귀여운"], answer: 1, explain: "look the same(똑같이 생겼다)과 반대로 different는 '다른'이에요." },
    ],
  },
  {
    id: "bakery", levelId: "elementary-mid", emoji: "🥐", title: "빵집 심부름",
    sentences: [
      { en: "Mom asked me to buy some bread.", ko: "엄마가 빵을 좀 사 오라고 하셨어요." },
      { en: "I walked to the bakery on the corner.", ko: "나는 모퉁이에 있는 빵집까지 걸어갔어요." },
      { en: "I bought a loaf of bread and four donuts.", ko: "식빵 한 덩이와 도넛 네 개를 샀어요." },
      { en: "It cost twelve thousand won.", ko: "12,000원이었어요." },
      { en: "The baker gave me a free cookie!", ko: "제빵사 아저씨가 쿠키 하나를 공짜로 주셨어요!" },
    ],
    glossary: [{ w: "bakery", ko: "빵집" }, { w: "corner", ko: "모퉁이" }, { w: "a loaf of", ko: "~ 한 덩이" }, { w: "cost", ko: "(값이) ~이다" }, { w: "baker", ko: "제빵사" }, { w: "free", ko: "공짜의" }],
    questions: [
      { q: "빵집에서 산 것은?", choices: ["식빵 한 덩이와 도넛 네 개", "케이크 하나", "쿠키 네 개", "식빵 두 덩이"], answer: 0, explain: "a loaf of bread and four donuts → 식빵 한 덩이와 도넛 네 개예요." },
      { q: "모두 얼마였나요?", choices: ["10,000원", "12,000원", "20,000원", "6,000원"], answer: 1, explain: "twelve thousand won → 12,000원이에요." },
      { q: "공짜로 받은 것은?", choices: ["도넛", "우유", "쿠키", "사탕"], answer: 2, explain: "The baker gave me a free cookie!" },
    ],
  },
  {
    id: "seasons", levelId: "elementary-mid", emoji: "🍂", title: "내가 좋아하는 계절",
    sentences: [
      { en: "There are four seasons in Korea.", ko: "한국에는 사계절이 있어요." },
      { en: "Spring is warm, and summer is hot.", ko: "봄은 따뜻하고 여름은 더워요." },
      { en: "Fall is cool, and winter is cold.", ko: "가을은 시원하고 겨울은 추워요." },
      { en: "My favorite season is winter.", ko: "내가 가장 좋아하는 계절은 겨울이에요." },
      { en: "I can go skiing and make snowmen.", ko: "스키를 타러 가고 눈사람을 만들 수 있거든요." },
    ],
    glossary: [{ w: "seasons", ko: "계절들" }, { w: "warm", ko: "따뜻한" }, { w: "Fall", ko: "가을" }, { w: "cool", ko: "시원한" }, { w: "go skiing", ko: "스키 타러 가다" }],
    questions: [
      { q: "가을 날씨는 어떤가요?", choices: ["따뜻해요", "더워요", "시원해요", "추워요"], answer: 2, explain: "Fall is cool. cool은 '시원한'이에요." },
      { q: "가장 좋아하는 계절은?", choices: ["봄", "여름", "가을", "겨울"], answer: 3, explain: "My favorite season is winter." },
      { q: "겨울을 좋아하는 이유는?", choices: ["스키를 타고 눈사람을 만들 수 있어서", "수영할 수 있어서", "꽃을 볼 수 있어서", "단풍을 볼 수 있어서"], answer: 0, explain: "I can go skiing and make snowmen." },
    ],
  },
  {
    id: "beans", levelId: "elementary-mid", emoji: "🫘", title: "콩 키우기",
    sentences: [
      { en: "In science class, we planted beans in paper cups.", ko: "과학 시간에 우리는 종이컵에 콩을 심었어요." },
      { en: "I put my cup by the window.", ko: "나는 내 컵을 창가에 두었어요." },
      { en: "I watered it every morning.", ko: "매일 아침 물을 주었어요." },
      { en: "After five days, a small green leaf came out.", ko: "5일 뒤에 작은 초록 잎이 나왔어요." },
      { en: "Now my plant is taller than my pencil!", ko: "이제 내 식물은 연필보다 더 커요!" },
    ],
    glossary: [{ w: "planted", ko: "심었다" }, { w: "beans", ko: "콩" }, { w: "window", ko: "창문" }, { w: "watered", ko: "물을 주었다" }, { w: "leaf", ko: "잎" }],
    questions: [
      { q: "컵을 둔 곳은?", choices: ["책상 아래", "창가", "냉장고 안", "사물함 안"], answer: 1, explain: "I put my cup by the window. by the window는 '창가에'예요." },
      { q: "잎이 나온 것은 언제인가요?", choices: ["3일 뒤", "5일 뒤", "일주일 뒤", "열흘 뒤"], answer: 1, explain: "After five days → 5일 뒤예요." },
      { q: "지금 식물의 키는?", choices: ["연필보다 커요", "연필보다 작아요", "연필과 같아요", "아직 싹이 안 났어요"], answer: 0, explain: "taller than my pencil → 연필보다 더 커요." },
    ],
  },
  {
    id: "museum", levelId: "elementary-mid", emoji: "🦖", title: "박물관 견학",
    sentences: [
      { en: "Yesterday our class visited a museum.", ko: "어제 우리 반은 박물관에 갔어요." },
      { en: "We saw a huge dinosaur skeleton.", ko: "우리는 거대한 공룡 뼈를 보았어요." },
      { en: "It was longer than a bus!", ko: "버스보다 더 길었어요!" },
      { en: "We could not touch anything.", ko: "아무것도 만질 수 없었어요." },
      { en: "After the tour, we ate lunch in the garden.", ko: "관람이 끝나고 정원에서 점심을 먹었어요." },
    ],
    glossary: [{ w: "visited", ko: "방문했다" }, { w: "huge", ko: "거대한" }, { w: "skeleton", ko: "뼈대" }, { w: "longer", ko: "더 긴" }, { w: "touch", ko: "만지다" }, { w: "tour", ko: "관람, 견학" }],
    questions: [
      { q: "박물관에서 본 것은?", choices: ["공룡 뼈", "우주선", "옛날 왕관", "그림"], answer: 0, explain: "We saw a huge dinosaur skeleton." },
      { q: "공룡 뼈의 크기는?", choices: ["버스보다 길었어요", "버스보다 짧았어요", "사람만 했어요", "손바닥만 했어요"], answer: 0, explain: "It was longer than a bus! longer than은 '~보다 더 긴'이에요." },
      { q: "박물관에서 할 수 없었던 것은?", choices: ["사진 찍기", "만지기", "말하기", "걷기"], answer: 1, explain: "We could not touch anything. touch는 '만지다'예요." },
    ],
  },
  {
    id: "newbike", levelId: "elementary-mid", emoji: "🚲", title: "새 자전거",
    sentences: [
      { en: "I got a new bike for my birthday.", ko: "생일 선물로 새 자전거를 받았어요." },
      { en: "At first, I fell down many times.", ko: "처음에는 여러 번 넘어졌어요." },
      { en: "My dad held the back of my bike.", ko: "아빠가 자전거 뒤를 잡아 주셨어요." },
      { en: "I practiced every day after school.", ko: "나는 매일 학교가 끝나고 연습했어요." },
      { en: "Now I can ride it without help.", ko: "이제는 도움 없이 탈 수 있어요." },
    ],
    glossary: [{ w: "At first", ko: "처음에는" }, { w: "fell down", ko: "넘어졌다" }, { w: "held", ko: "잡았다" }, { w: "practiced", ko: "연습했다" }, { w: "without", ko: "~ 없이" }],
    questions: [
      { q: "자전거를 받은 때는?", choices: ["어린이날", "생일", "크리스마스", "졸업식"], answer: 1, explain: "for my birthday → 생일 선물로 받았어요." },
      { q: "처음에는 어땠나요?", choices: ["잘 탔어요", "여러 번 넘어졌어요", "무서워서 안 탔어요", "자전거가 고장 났어요"], answer: 1, explain: "At first, I fell down many times." },
      { q: "지금은 어떤가요?", choices: ["도움 없이 탈 수 있어요", "아직 못 타요", "아빠와 함께만 타요", "보조 바퀴로 타요"], answer: 0, explain: "Now I can ride it without help. without은 '~ 없이'예요." },
    ],
  },

  // ── 초등 5~6학년 ──
  {
    id: "recycling", levelId: "elementary-high", emoji: "♻️", title: "분리수거",
    sentences: [
      { en: "Every Tuesday is recycling day at our apartment.", ko: "매주 화요일은 우리 아파트의 분리수거 날이에요." },
      { en: "We sort paper, plastic, cans, and glass into different boxes.", ko: "우리는 종이, 플라스틱, 캔, 유리를 서로 다른 상자에 나눠 담아요." },
      { en: "Before we throw away plastic bottles, we wash them and take off the labels.", ko: "플라스틱 병을 버리기 전에 씻고 라벨을 떼요." },
      { en: "Recycled bottles can become new clothes or bags.", ko: "재활용된 병은 새 옷이나 가방이 될 수 있어요." },
      { en: "Recycling is a small action, but it helps protect the Earth.", ko: "분리수거는 작은 행동이지만 지구를 지키는 데 도움이 돼요." },
    ],
    glossary: [{ w: "recycling", ko: "재활용, 분리수거" }, { w: "sort", ko: "분류하다" }, { w: "throw away", ko: "버리다" }, { w: "labels", ko: "라벨, 상표" }, { w: "become", ko: "~이 되다" }, { w: "protect", ko: "보호하다" }],
    questions: [
      { q: "분리수거 날은?", choices: ["월요일", "화요일", "수요일", "토요일"], answer: 1, explain: "Every Tuesday → 매주 화요일이에요." },
      { q: "플라스틱 병을 버리기 전에 하는 일은?", choices: ["씻고 라벨 떼기", "잘게 부수기", "뚜껑만 모으기", "색칠하기"], answer: 0, explain: "we wash them and take off the labels." },
      { q: "재활용된 병이 될 수 있는 것은?", choices: ["옷이나 가방", "음식", "종이", "유리창"], answer: 0, explain: "Recycled bottles can become new clothes or bags." },
    ],
  },
  {
    id: "octopus", levelId: "elementary-high", emoji: "🐙", title: "똑똑한 문어",
    sentences: [
      { en: "An octopus has eight arms and three hearts.", ko: "문어는 팔이 여덟 개이고 심장이 세 개예요." },
      { en: "It is one of the smartest animals in the sea.", ko: "문어는 바다에서 가장 똑똑한 동물 중 하나예요." },
      { en: "An octopus can open a jar to get the food inside.", ko: "문어는 병을 열어 안에 있는 먹이를 꺼낼 수 있어요." },
      { en: "When it is in danger, it changes its color to hide.", ko: "위험할 때는 몸 색깔을 바꿔 숨어요." },
      { en: "It can also shoot black ink and swim away quickly.", ko: "검은 먹물을 뿜고 재빨리 헤엄쳐 달아날 수도 있어요." },
    ],
    glossary: [{ w: "arms", ko: "팔" }, { w: "hearts", ko: "심장" }, { w: "smartest", ko: "가장 똑똑한" }, { w: "jar", ko: "(뚜껑 있는) 병" }, { w: "danger", ko: "위험" }, { w: "hide", ko: "숨다" }, { w: "ink", ko: "먹물" }],
    questions: [
      { q: "문어의 심장은 몇 개인가요?", choices: ["한 개", "두 개", "세 개", "여덟 개"], answer: 2, explain: "eight arms and three hearts → 심장은 세 개예요." },
      { q: "위험할 때 문어가 하는 일이 아닌 것은?", choices: ["몸 색깔 바꾸기", "먹물 뿜기", "빠르게 헤엄쳐 달아나기", "큰 소리 내기"], answer: 3, explain: "색을 바꾸고(changes its color), 먹물을 뿜고(shoot black ink), 달아나요(swim away). 소리를 낸다는 말은 없어요." },
      { q: "문어가 똑똑하다는 예로 나온 것은?", choices: ["병을 열어 먹이를 꺼낸다", "노래를 부른다", "글자를 읽는다", "길을 안내한다"], answer: 0, explain: "An octopus can open a jar to get the food inside." },
    ],
  },
  {
    id: "kimjang", levelId: "elementary-high", emoji: "🥬", title: "김장하는 날",
    sentences: [
      { en: "Every November, my family makes kimchi together.", ko: "매년 11월, 우리 가족은 함께 김치를 담가요." },
      { en: "This is called kimjang.", ko: "이것을 김장이라고 해요." },
      { en: "First, we salt the cabbages and leave them overnight.", ko: "먼저 배추를 소금에 절여 하룻밤 두어요." },
      { en: "The next day, we mix red pepper powder, garlic, and other vegetables.", ko: "다음 날 고춧가루, 마늘, 다른 채소를 섞어요." },
      { en: "Then we spread the mixture between the cabbage leaves.", ko: "그런 다음 그 양념을 배춧잎 사이사이에 발라요." },
      { en: "We share some kimchi with our neighbors, too.", ko: "김치를 이웃과 나누기도 해요." },
    ],
    glossary: [{ w: "salt", ko: "소금에 절이다" }, { w: "cabbages", ko: "배추" }, { w: "overnight", ko: "하룻밤 동안" }, { w: "garlic", ko: "마늘" }, { w: "spread", ko: "바르다, 펴다" }, { w: "mixture", ko: "섞은 것" }, { w: "neighbors", ko: "이웃들" }],
    questions: [
      { q: "김장은 언제 하나요?", choices: ["매년 3월", "매년 7월", "매년 11월", "매년 1월"], answer: 2, explain: "Every November → 매년 11월이에요." },
      { q: "가장 먼저 하는 일은?", choices: ["배추 절이기", "양념 섞기", "양념 바르기", "이웃과 나누기"], answer: 0, explain: "First, we salt the cabbages. First는 '먼저'예요." },
      { q: "'neighbors'의 뜻은?", choices: ["친척", "이웃", "친구", "선생님"], answer: 1, explain: "neighbors는 이웃이에요." },
    ],
  },
  {
    id: "volcano", levelId: "elementary-high", emoji: "🌋", title: "화산",
    sentences: [
      { en: "A volcano is a mountain with a hole at the top.", ko: "화산은 꼭대기에 구멍이 있는 산이에요." },
      { en: "Deep under the ground, it is so hot that rocks melt.", ko: "땅속 깊은 곳은 너무 뜨거워서 바위가 녹아요." },
      { en: "This melted rock is called magma.", ko: "이 녹은 바위를 마그마라고 해요." },
      { en: "When magma comes out of a volcano, we call it lava.", ko: "마그마가 화산 밖으로 나오면 용암이라고 불러요." },
      { en: "Hallasan on Jeju Island is also a volcano, but it is quiet now.", ko: "제주도의 한라산도 화산이지만 지금은 조용해요." },
    ],
    glossary: [{ w: "volcano", ko: "화산" }, { w: "hole", ko: "구멍" }, { w: "melt", ko: "녹다" }, { w: "magma", ko: "마그마" }, { w: "lava", ko: "용암" }],
    questions: [
      { q: "땅속에서 녹은 바위를 무엇이라고 하나요?", choices: ["용암", "마그마", "화석", "모래"], answer: 1, explain: "This melted rock is called magma." },
      { q: "화산 밖으로 나온 마그마를 무엇이라고 하나요?", choices: ["마그마", "용암", "구름", "바위"], answer: 1, explain: "When magma comes out of a volcano, we call it lava." },
      { q: "한라산에 대한 설명으로 맞는 것은?", choices: ["지금 폭발하고 있다", "화산이지만 지금은 조용하다", "화산이 아니다", "바닷속에 있다"], answer: 1, explain: "Hallasan ~ is also a volcano, but it is quiet now." },
    ],
  },
  {
    id: "umbrella", levelId: "elementary-high", emoji: "☂️", title: "작은 친절",
    sentences: [
      { en: "On a rainy day, I saw an old woman at the bus stop.", ko: "비 오는 날, 버스 정류장에서 할머니 한 분을 보았어요." },
      { en: "She did not have an umbrella, and she looked cold.", ko: "할머니는 우산이 없었고 추워 보였어요." },
      { en: "I shared my umbrella with her until her bus came.", ko: "나는 할머니의 버스가 올 때까지 우산을 같이 썼어요." },
      { en: "She smiled and said, \"You are so kind.\"", ko: "할머니는 웃으며 \"정말 친절하구나.\"라고 하셨어요." },
      { en: "That day, I learned that a small kindness can make people happy.", ko: "그날 나는 작은 친절이 사람들을 행복하게 할 수 있다는 것을 배웠어요." },
    ],
    glossary: [{ w: "bus stop", ko: "버스 정류장" }, { w: "looked", ko: "~해 보였다" }, { w: "shared", ko: "함께 썼다, 나눴다" }, { w: "until", ko: "~할 때까지" }, { w: "kindness", ko: "친절" }],
    questions: [
      { q: "할머니를 만난 곳은?", choices: ["버스 정류장", "지하철역", "공원", "학교 앞"], answer: 0, explain: "at the bus stop → 버스 정류장이에요." },
      { q: "내가 한 일은?", choices: ["우산을 같이 썼다", "버스를 태워 드렸다", "집까지 모셔다 드렸다", "우산을 사 드렸다"], answer: 0, explain: "I shared my umbrella with her until her bus came." },
      { q: "글쓴이가 배운 것은?", choices: ["작은 친절이 사람을 행복하게 한다", "우산을 꼭 챙겨야 한다", "비 오는 날은 위험하다", "버스는 자주 늦는다"], answer: 0, explain: "a small kindness can make people happy." },
    ],
  },
  {
    id: "penguins", levelId: "elementary-high", emoji: "🐧", title: "황제펭귄 아빠",
    sentences: [
      { en: "Emperor penguins live in Antarctica, the coldest place on Earth.", ko: "황제펭귄은 지구에서 가장 추운 곳인 남극에 살아요." },
      { en: "The mother lays one egg and goes to the sea to find food.", ko: "엄마 펭귄은 알 하나를 낳고 먹이를 찾으러 바다로 가요." },
      { en: "The father keeps the egg warm on his feet for about two months.", ko: "아빠 펭귄은 약 두 달 동안 발 위에 알을 올려 따뜻하게 지켜요." },
      { en: "During this time, he does not eat anything.", ko: "이 기간 동안 아빠는 아무것도 먹지 않아요." },
      { en: "The fathers stand close together to stay warm in the strong wind.", ko: "아빠 펭귄들은 강한 바람 속에서 따뜻하게 지내려고 서로 바짝 붙어 서요." },
    ],
    glossary: [{ w: "Antarctica", ko: "남극" }, { w: "coldest", ko: "가장 추운" }, { w: "lays", ko: "(알을) 낳다" }, { w: "about", ko: "약, 대략" }, { w: "During", ko: "~ 동안" }, { w: "close together", ko: "서로 가까이" }],
    questions: [
      { q: "알을 지키는 펭귄은?", choices: ["엄마", "아빠", "할머니", "형"], answer: 1, explain: "The father keeps the egg warm. 아빠가 지켜요." },
      { q: "아빠가 알을 지키는 기간은?", choices: ["약 2주", "약 두 달", "약 반년", "약 1년"], answer: 1, explain: "for about two months → 약 두 달이에요." },
      { q: "아빠 펭귄들이 붙어 서는 이유는?", choices: ["따뜻하게 지내려고", "먹이를 나누려고", "싸우려고", "노래하려고"], answer: 0, explain: "to stay warm in the strong wind → 따뜻하게 지내려고요." },
    ],
  },
  {
    id: "allowance", levelId: "elementary-high", emoji: "💰", title: "용돈 관리",
    sentences: [
      { en: "I get 10,000 won as my allowance every week.", ko: "나는 매주 용돈으로 만 원을 받아요." },
      { en: "I used to spend it all on snacks.", ko: "예전에는 과자 사는 데 다 써 버렸어요." },
      { en: "Now I divide it into three parts: saving, spending, and sharing.", ko: "이제는 저축, 쓰기, 나누기 세 부분으로 나눠요." },
      { en: "I save 5,000 won, spend 4,000 won, and give 1,000 won to a charity.", ko: "5,000원은 저축하고, 4,000원은 쓰고, 1,000원은 기부해요." },
      { en: "Next month, I want to buy a soccer ball with my savings.", ko: "다음 달에 모은 돈으로 축구공을 사고 싶어요." },
    ],
    glossary: [{ w: "allowance", ko: "용돈" }, { w: "used to", ko: "예전에 ~하곤 했다" }, { w: "divide", ko: "나누다" }, { w: "charity", ko: "자선 단체" }, { w: "savings", ko: "모은 돈, 저금" }],
    questions: [
      { q: "매주 저축하는 돈은?", choices: ["1,000원", "4,000원", "5,000원", "10,000원"], answer: 2, explain: "I save 5,000 won." },
      { q: "예전에는 용돈을 어떻게 썼나요?", choices: ["과자 사는 데 다 썼다", "모두 저축했다", "부모님께 드렸다", "책을 샀다"], answer: 0, explain: "I used to spend it all on snacks. used to는 '예전에 ~하곤 했다'예요." },
      { q: "모은 돈으로 사고 싶은 것은?", choices: ["게임기", "축구공", "자전거", "책"], answer: 1, explain: "I want to buy a soccer ball with my savings." },
    ],
  },
  {
    id: "moonshape", levelId: "elementary-high", emoji: "🌙", title: "달의 모양",
    sentences: [
      { en: "The moon does not make its own light.", ko: "달은 스스로 빛을 내지 않아요." },
      { en: "It shines because sunlight hits it.", ko: "햇빛이 비치기 때문에 빛나는 거예요." },
      { en: "As the moon moves around the Earth, we see different parts of its bright side.", ko: "달이 지구 주위를 돌면서 우리는 밝은 면의 서로 다른 부분을 보게 돼요." },
      { en: "That is why its shape seems to change.", ko: "그래서 달의 모양이 바뀌는 것처럼 보여요." },
      { en: "It takes about 29 days to go from one full moon to the next.", ko: "보름달에서 다음 보름달까지는 약 29일이 걸려요." },
    ],
    glossary: [{ w: "own", ko: "자기 자신의" }, { w: "shines", ko: "빛나다" }, { w: "sunlight", ko: "햇빛" }, { w: "shape", ko: "모양" }, { w: "seems to", ko: "~인 것 같다" }, { w: "full moon", ko: "보름달" }],
    questions: [
      { q: "달이 빛나는 이유는?", choices: ["스스로 빛을 내서", "햇빛을 받아서", "별빛을 받아서", "안에 불이 있어서"], answer: 1, explain: "It shines because sunlight hits it." },
      { q: "보름달에서 다음 보름달까지 걸리는 시간은?", choices: ["약 7일", "약 15일", "약 29일", "약 365일"], answer: 2, explain: "It takes about 29 days." },
      { q: "달의 모양이 바뀌어 보이는 이유는?", choices: ["달이 지구 주위를 돌면서 밝은 면이 다르게 보여서", "달이 작아졌다 커져서", "구름이 가려서", "달이 녹아서"], answer: 0, explain: "As the moon moves around the Earth, we see different parts of its bright side. That is why ~." },
    ],
  },

  // ── 중학교 ──
  {
    id: "chocolate", levelId: "middle", emoji: "🍫", title: "초콜릿의 역사",
    sentences: [
      { en: "Chocolate comes from the seeds of the cacao tree.", ko: "초콜릿은 카카오나무의 씨앗에서 나온다." },
      { en: "Long ago, the Maya and Aztec people made a bitter drink from these seeds.", ko: "오래전 마야와 아즈텍 사람들은 이 씨앗으로 쓴 음료를 만들었다." },
      { en: "Cacao seeds were so valuable that people used them as money.", ko: "카카오 씨앗은 매우 귀해서 사람들이 돈으로 사용했다." },
      { en: "In the 1500s, the Spanish brought chocolate to Europe and added sugar to it.", ko: "1500년대에 스페인 사람들이 초콜릿을 유럽으로 가져가 설탕을 넣었다." },
      { en: "Today, chocolate is one of the most popular sweets in the world.", ko: "오늘날 초콜릿은 세계에서 가장 인기 있는 단것 중 하나다." },
    ],
    glossary: [{ w: "seeds", ko: "씨앗" }, { w: "bitter", ko: "쓴" }, { w: "valuable", ko: "귀중한" }, { w: "brought", ko: "가져왔다 (bring의 과거)" }, { w: "added", ko: "더했다" }, { w: "popular", ko: "인기 있는" }],
    questions: [
      { q: "카카오 씨앗이 돈으로 쓰인 이유는?", choices: ["매우 귀해서", "흔해서", "가벼워서", "달아서"], answer: 0, explain: "so valuable that people used them as money. 너무 귀해서 돈으로 썼어요." },
      { q: "초콜릿에 처음 설탕을 넣은 사람들은?", choices: ["마야 사람들", "아즈텍 사람들", "스페인 사람들", "미국 사람들"], answer: 2, explain: "the Spanish brought chocolate to Europe and added sugar to it." },
      { q: "'so ~ that ...'의 의미는?", choices: ["너무 ~해서 …하다", "~하지만 …하다", "~하기 위해 …하다", "~할수록 더 …하다"], answer: 0, explain: "so valuable that ~ : 너무 귀해서 ~했다. 원인과 결과를 나타내요." },
    ],
  },
  {
    id: "mistakes", levelId: "middle", emoji: "🧠", title: "실수해도 괜찮아",
    sentences: [
      { en: "Some students think they are just bad at math.", ko: "어떤 학생들은 자신이 그냥 수학을 못한다고 생각한다." },
      { en: "However, scientists have found that the brain can grow like a muscle.", ko: "하지만 과학자들은 뇌가 근육처럼 자랄 수 있다는 것을 발견했다." },
      { en: "When you struggle with a hard problem, your brain makes new connections.", ko: "어려운 문제와 씨름할 때 뇌는 새로운 연결을 만든다." },
      { en: "In other words, mistakes are part of learning, not a sign of failure.", ko: "다시 말해 실수는 실패의 표시가 아니라 배움의 일부다." },
      { en: "Instead of saying \"I can't do it,\" try saying \"I can't do it yet.\"", ko: "\"나는 못 해\" 대신 \"나는 아직 못 해\"라고 말해 보자." },
    ],
    glossary: [{ w: "However", ko: "하지만" }, { w: "muscle", ko: "근육" }, { w: "struggle", ko: "애쓰다, 씨름하다" }, { w: "connections", ko: "연결" }, { w: "In other words", ko: "다시 말해" }, { w: "failure", ko: "실패" }, { w: "yet", ko: "아직" }],
    questions: [
      { q: "이 글의 주제는?", choices: ["실수는 배움의 일부다", "수학 실력은 타고난다", "뇌는 변하지 않는다", "어려운 문제는 피하는 게 좋다"], answer: 0, explain: "mistakes are part of learning, not a sign of failure." },
      { q: "어려운 문제와 씨름할 때 뇌는?", choices: ["쉰다", "새로운 연결을 만든다", "작아진다", "기억을 지운다"], answer: 1, explain: "your brain makes new connections." },
      { q: "'yet'을 붙여 말하는 의미는?", choices: ["지금은 못 하지만 앞으로 할 수 있다", "절대 할 수 없다", "이미 할 수 있다", "하기 싫다"], answer: 0, explain: "I can't do it yet. → '아직' 못 할 뿐, 앞으로 할 수 있다는 뜻이에요." },
    ],
  },
  {
    id: "hanok", levelId: "middle", emoji: "🏠", title: "한옥의 지혜",
    sentences: [
      { en: "Hanok is a traditional Korean house.", ko: "한옥은 한국의 전통 집이다." },
      { en: "It is built with natural materials such as wood, stone, and clay.", ko: "한옥은 나무, 돌, 흙 같은 자연 재료로 지어진다." },
      { en: "Ondol, a floor heating system, keeps the rooms warm in winter.", ko: "바닥 난방 방식인 온돌은 겨울에 방을 따뜻하게 해 준다." },
      { en: "In summer, the wooden floor called maru stays cool because air flows under it.", ko: "여름에는 마루라고 불리는 나무 바닥 아래로 공기가 흘러 시원하다." },
      { en: "In this way, hanok is designed to be comfortable in every season.", ko: "이렇게 한옥은 모든 계절에 편안하도록 설계되었다." },
    ],
    glossary: [{ w: "traditional", ko: "전통적인" }, { w: "materials", ko: "재료" }, { w: "clay", ko: "흙, 점토" }, { w: "heating", ko: "난방" }, { w: "flows", ko: "흐르다" }, { w: "designed", ko: "설계된" }, { w: "comfortable", ko: "편안한" }],
    questions: [
      { q: "한옥의 재료로 나오지 않은 것은?", choices: ["나무", "돌", "흙", "철"], answer: 3, explain: "wood(나무), stone(돌), clay(흙)만 나와요." },
      { q: "겨울에 방을 따뜻하게 해 주는 것은?", choices: ["마루", "온돌", "창문", "지붕"], answer: 1, explain: "Ondol, a floor heating system, keeps the rooms warm in winter." },
      { q: "마루가 여름에 시원한 이유는?", choices: ["아래로 공기가 흘러서", "물을 뿌려서", "그늘이 져서", "돌로 만들어서"], answer: 0, explain: "maru stays cool because air flows under it." },
    ],
  },
  {
    id: "deepsea", levelId: "middle", emoji: "🐟", title: "깊은 바다의 생물",
    sentences: [
      { en: "More than 80 percent of the ocean has never been explored.", ko: "바다의 80퍼센트 이상은 한 번도 탐사된 적이 없다." },
      { en: "Deep under the sea, there is no sunlight at all.", ko: "깊은 바닷속에는 햇빛이 전혀 없다." },
      { en: "Some fish there make their own light to find food or attract partners.", ko: "그곳의 어떤 물고기들은 먹이를 찾거나 짝을 끌어들이려고 스스로 빛을 낸다." },
      { en: "The anglerfish, for example, has a glowing \"fishing rod\" on its head.", ko: "예를 들어 아귀는 머리에 빛나는 '낚싯대'가 있다." },
      { en: "Scientists believe many more strange creatures are waiting to be discovered.", ko: "과학자들은 훨씬 더 많은 신기한 생물들이 발견되기를 기다리고 있다고 믿는다." },
    ],
    glossary: [{ w: "explored", ko: "탐사된" }, { w: "at all", ko: "전혀" }, { w: "attract", ko: "끌어들이다" }, { w: "glowing", ko: "빛나는" }, { w: "creatures", ko: "생물" }, { w: "discovered", ko: "발견된" }],
    questions: [
      { q: "아직 탐사되지 않은 바다의 비율은?", choices: ["20% 이상", "절반 정도", "80% 이상", "거의 없다"], answer: 2, explain: "More than 80 percent of the ocean has never been explored." },
      { q: "깊은 바다의 물고기가 빛을 내는 이유는?", choices: ["먹이를 찾거나 짝을 끌려고", "몸을 데우려고", "잠을 자려고", "사람에게 길을 알려 주려고"], answer: 0, explain: "to find food or attract partners." },
      { q: "아귀의 특징은?", choices: ["머리에 빛나는 낚싯대가 있다", "몸이 투명하다", "다리가 있다", "하늘을 난다"], answer: 0, explain: "has a glowing \"fishing rod\" on its head." },
    ],
  },
  {
    id: "fakenews", levelId: "middle", emoji: "📰", title: "가짜 뉴스 구별하기",
    sentences: [
      { en: "Not everything we read online is true.", ko: "우리가 온라인에서 읽는 모든 것이 사실은 아니다." },
      { en: "Before you share a news story, ask yourself a few questions.", ko: "뉴스를 공유하기 전에 스스로 몇 가지 질문을 해 보자." },
      { en: "Who wrote it, and is the source reliable?", ko: "누가 썼고, 출처는 믿을 만한가?" },
      { en: "Do other trusted news sites report the same thing?", ko: "다른 믿을 만한 뉴스 사이트도 같은 내용을 보도하는가?" },
      { en: "If a headline makes you very angry or surprised, check the facts carefully first.", ko: "제목이 몹시 화나게 하거나 놀라게 한다면 먼저 사실을 꼼꼼히 확인하자." },
    ],
    glossary: [{ w: "online", ko: "온라인에서" }, { w: "share", ko: "공유하다" }, { w: "source", ko: "출처" }, { w: "reliable", ko: "믿을 만한" }, { w: "trusted", ko: "신뢰받는" }, { w: "headline", ko: "(기사) 제목" }],
    questions: [
      { q: "이 글의 목적은?", choices: ["가짜 뉴스를 구별하는 방법 안내", "뉴스 사이트 광고", "신문 구독 권유", "인터넷 사용 금지"], answer: 0, explain: "뉴스를 공유하기 전에 확인할 질문들을 알려 주고 있어요." },
      { q: "확인할 것으로 나오지 않은 것은?", choices: ["글쓴이와 출처", "다른 뉴스의 보도 여부", "기사 제목의 글자 크기", "사실 여부"], answer: 2, explain: "글쓴이·출처, 다른 뉴스의 보도, 사실 확인이 나오고 글자 크기는 나오지 않아요." },
      { q: "'reliable'과 뜻이 가장 비슷한 단어는?", choices: ["trusted", "angry", "online", "surprised"], answer: 0, explain: "reliable(믿을 만한) ≈ trusted(신뢰받는)" },
    ],
  },
  {
    id: "geese", levelId: "middle", emoji: "🪿", title: "기러기의 협동",
    sentences: [
      { en: "Geese fly south in a V shape every fall.", ko: "기러기는 매년 가을 V자 모양으로 남쪽으로 날아간다." },
      { en: "Flying this way helps each bird save energy.", ko: "이렇게 날면 새들이 저마다 에너지를 아낄 수 있다." },
      { en: "The bird in front works the hardest because it faces the wind.", ko: "맨 앞의 새는 바람을 정면으로 맞기 때문에 가장 힘들다." },
      { en: "When it gets tired, it moves to the back and another bird takes its place.", ko: "지치면 뒤로 가고 다른 새가 그 자리를 맡는다." },
      { en: "The geese behind honk to encourage the ones in front.", ko: "뒤에 있는 기러기들은 앞의 새들을 격려하려고 끼룩끼룩 운다." },
    ],
    glossary: [{ w: "Geese", ko: "기러기들 (goose의 복수)" }, { w: "shape", ko: "모양" }, { w: "save energy", ko: "에너지를 아끼다" }, { w: "faces", ko: "마주하다" }, { w: "takes its place", ko: "그 자리를 대신하다" }, { w: "encourage", ko: "격려하다" }],
    questions: [
      { q: "기러기가 V자로 나는 이유는?", choices: ["에너지를 아끼려고", "빨리 도착하려고", "적을 피하려고", "먹이를 찾으려고"], answer: 0, explain: "Flying this way helps each bird save energy." },
      { q: "맨 앞의 새가 지치면?", choices: ["땅에 내려가 쉰다", "뒤로 가고 다른 새가 앞에 선다", "혼자 천천히 난다", "무리를 떠난다"], answer: 1, explain: "it moves to the back and another bird takes its place." },
      { q: "뒤의 기러기들이 우는 이유는?", choices: ["앞의 새를 격려하려고", "배가 고파서", "길을 잃어서", "싸우려고"], answer: 0, explain: "honk to encourage the ones in front." },
    ],
  },
  {
    id: "emoji", levelId: "middle", emoji: "😀", title: "이모지의 탄생",
    sentences: [
      { en: "Emoji were first created in Japan in 1999.", ko: "이모지는 1999년 일본에서 처음 만들어졌다." },
      { en: "The word \"emoji\" means \"picture character\" in Japanese.", ko: "'이모지'라는 말은 일본어로 '그림 문자'라는 뜻이다." },
      { en: "At first, there were only 176 simple images.", ko: "처음에는 단순한 그림 176개뿐이었다." },
      { en: "Now there are thousands of them, and new ones are added every year.", ko: "지금은 수천 개가 있고, 매년 새로운 것이 추가된다." },
      { en: "Emoji help people show feelings that are hard to express in words.", ko: "이모지는 말로 표현하기 어려운 감정을 보여 주는 데 도움이 된다." },
    ],
    glossary: [{ w: "created", ko: "만들어진" }, { w: "character", ko: "문자" }, { w: "images", ko: "그림, 이미지" }, { w: "thousands", ko: "수천" }, { w: "express", ko: "표현하다" }],
    questions: [
      { q: "이모지가 처음 만들어진 곳과 때는?", choices: ["일본, 1999년", "미국, 1999년", "일본, 2009년", "한국, 1999년"], answer: 0, explain: "first created in Japan in 1999." },
      { q: "처음 이모지는 몇 개였나요?", choices: ["76개", "176개", "1,760개", "수천 개"], answer: 1, explain: "At first, there were only 176 simple images." },
      { q: "글에서 말한 이모지의 장점은?", choices: ["말로 표현하기 어려운 감정을 보여 준다", "맞춤법을 고쳐 준다", "글을 길게 만든다", "외국어를 번역해 준다"], answer: 0, explain: "show feelings that are hard to express in words." },
    ],
  },
  {
    id: "gratitude", levelId: "middle", emoji: "📝", title: "감사 일기",
    sentences: [
      { en: "Keeping a gratitude journal is a simple habit.", ko: "감사 일기를 쓰는 것은 간단한 습관이다." },
      { en: "Every night, you write down three things you are thankful for.", ko: "매일 밤 감사한 일 세 가지를 적는다." },
      { en: "They can be small, like a tasty lunch or a funny joke from a friend.", ko: "맛있는 점심이나 친구의 재미있는 농담처럼 작은 것이어도 된다." },
      { en: "Studies show that people who do this feel happier and sleep better.", ko: "연구에 따르면 이렇게 하는 사람들은 더 행복하고 잠을 더 잘 잔다." },
      { en: "Why don't you try it for two weeks and see what changes?", ko: "2주 동안 해 보고 무엇이 달라지는지 지켜보는 게 어떨까?" },
    ],
    glossary: [{ w: "gratitude", ko: "감사" }, { w: "journal", ko: "일기" }, { w: "habit", ko: "습관" }, { w: "thankful", ko: "감사하는" }, { w: "tasty", ko: "맛있는" }, { w: "Studies", ko: "연구들" }],
    questions: [
      { q: "매일 밤 적는 것은?", choices: ["감사한 일 세 가지", "오늘 배운 단어", "내일 할 일", "고민 세 가지"], answer: 0, explain: "write down three things you are thankful for." },
      { q: "감사 일기의 효과로 나온 것은?", choices: ["더 행복하고 잠을 잘 잔다", "성적이 바로 오른다", "키가 큰다", "친구가 많아진다"], answer: 0, explain: "feel happier and sleep better." },
      { q: "마지막 문장 'Why don't you ~?'의 의도는?", choices: ["제안", "비판", "거절", "사과"], answer: 0, explain: "Why don't you ~? 는 '~하는 게 어때?'라는 제안이에요." },
    ],
  },

  // ── 고등학교 ──
  {
    id: "bystander", levelId: "high", emoji: "👥", title: "방관자 효과",
    sentences: [
      { en: "In an emergency, you might expect that having more witnesses means more help.", ko: "비상 상황에서 목격자가 많을수록 도움도 많을 것이라고 예상할지 모른다." },
      { en: "Surprisingly, research shows the opposite.", ko: "놀랍게도 연구는 그 반대를 보여 준다." },
      { en: "When many people are present, each person feels less responsible to act.", ko: "많은 사람이 있으면 각자가 행동해야 한다는 책임을 덜 느낀다." },
      { en: "Psychologists call this the bystander effect.", ko: "심리학자들은 이것을 방관자 효과라고 부른다." },
      { en: "Simply knowing about it can help you become the one who steps forward.", ko: "이것을 알기만 해도 내가 먼저 나서는 사람이 되는 데 도움이 될 수 있다." },
    ],
    glossary: [{ w: "emergency", ko: "비상 상황" }, { w: "witnesses", ko: "목격자들" }, { w: "opposite", ko: "반대" }, { w: "present", ko: "(그 자리에) 있는" }, { w: "responsible", ko: "책임이 있는" }, { w: "bystander", ko: "방관자" }, { w: "steps forward", ko: "나서다" }],
    questions: [
      { q: "방관자 효과의 내용은?", choices: ["사람이 많을수록 각자 도울 책임을 덜 느낀다", "사람이 많을수록 더 잘 돕는다", "혼자 있으면 절대 돕지 않는다", "비상시에는 모두 도망간다"], answer: 0, explain: "When many people are present, each person feels less responsible to act." },
      { q: "'the opposite'가 뜻하는 것은?", choices: ["목격자가 많을수록 도움이 줄어든다", "목격자가 많을수록 도움이 늘어난다", "목격자 수와 도움은 관계없다", "목격자가 없으면 도움도 없다"], answer: 0, explain: "앞 문장의 '목격자가 많으면 도움도 많다'의 반대예요." },
      { q: "마지막 문장에서 글쓴이가 말하고 싶은 것은?", choices: ["이 효과를 알면 직접 나설 수 있다", "나서지 않는 것이 안전하다", "심리학을 공부해야 한다", "비상 상황을 피해야 한다"], answer: 0, explain: "knowing about it can help you become the one who steps forward." },
    ],
  },
  {
    id: "antibiotics", levelId: "high", emoji: "💊", title: "항생제 내성",
    sentences: [
      { en: "Antibiotics are medicines that kill bacteria.", ko: "항생제는 세균을 죽이는 약이다." },
      { en: "However, they do not work against viruses such as the common cold.", ko: "하지만 감기 같은 바이러스에는 효과가 없다." },
      { en: "When antibiotics are used too often, some bacteria survive and become resistant.", ko: "항생제를 너무 자주 쓰면 일부 세균이 살아남아 내성이 생긴다." },
      { en: "These \"superbugs\" are much harder to treat.", ko: "이런 '슈퍼박테리아'는 치료하기가 훨씬 어렵다." },
      { en: "That is why doctors advise taking antibiotics only when necessary and finishing the full course.", ko: "그래서 의사들은 꼭 필요할 때만 항생제를 먹고, 처방받은 기간을 끝까지 지키라고 조언한다." },
    ],
    glossary: [{ w: "Antibiotics", ko: "항생제" }, { w: "bacteria", ko: "세균" }, { w: "viruses", ko: "바이러스" }, { w: "resistant", ko: "내성이 있는" }, { w: "treat", ko: "치료하다" }, { w: "advise", ko: "조언하다" }, { w: "necessary", ko: "필요한" }],
    questions: [
      { q: "항생제가 효과가 없는 것은?", choices: ["세균 감염", "감기 바이러스", "상처의 세균", "세균성 폐렴"], answer: 1, explain: "they do not work against viruses such as the common cold." },
      { q: "슈퍼박테리아가 생기는 원인은?", choices: ["항생제를 너무 자주 써서", "손을 자주 씻어서", "백신을 맞아서", "비타민을 먹어서"], answer: 0, explain: "When antibiotics are used too often, some bacteria survive and become resistant." },
      { q: "의사들의 조언으로 알맞지 않은 것은?", choices: ["필요할 때만 먹기", "처방 기간을 끝까지 지키기", "감기에 걸리면 바로 먹기", "의사의 처방대로 먹기"], answer: 2, explain: "항생제는 감기(바이러스)에 효과가 없어요. 필요할 때만, 끝까지 먹으라고 했어요." },
    ],
  },
  {
    id: "lossaversion", levelId: "high", emoji: "📉", title: "손실 회피",
    sentences: [
      { en: "Imagine finding 10,000 won on the street, and then imagine losing 10,000 won.", ko: "길에서 만 원을 줍는 상황을 상상해 보고, 이번에는 만 원을 잃어버리는 상황을 상상해 보자." },
      { en: "Most people feel the pain of losing more strongly than the joy of gaining the same amount.", ko: "대부분의 사람은 같은 금액이라도 얻는 기쁨보다 잃는 고통을 더 강하게 느낀다." },
      { en: "Economists call this tendency loss aversion.", ko: "경제학자들은 이런 경향을 손실 회피라고 부른다." },
      { en: "It explains why investors often hold on to failing stocks too long, hoping to avoid a loss.", ko: "이것은 투자자들이 손실을 피하려고 떨어지는 주식을 너무 오래 붙잡고 있는 이유를 설명해 준다." },
      { en: "Stores also use it when they say, \"Don't miss out—only two days left!\"", ko: "상점들도 \"놓치지 마세요, 단 이틀 남았어요!\"라고 할 때 이 심리를 이용한다." },
    ],
    glossary: [{ w: "strongly", ko: "강하게" }, { w: "gaining", ko: "얻는 것" }, { w: "amount", ko: "양, 금액" }, { w: "tendency", ko: "경향" }, { w: "loss aversion", ko: "손실 회피" }, { w: "hold on to", ko: "~을 붙잡고 있다" }, { w: "miss out", ko: "(좋은 기회를) 놓치다" }],
    questions: [
      { q: "손실 회피란?", choices: ["같은 금액이라도 잃는 고통을 얻는 기쁨보다 크게 느끼는 경향", "돈을 모으려는 습관", "위험을 즐기는 성향", "할인 상품을 싫어하는 경향"], answer: 0, explain: "feel the pain of losing more strongly than the joy of gaining the same amount." },
      { q: "투자자들의 행동으로 나온 것은?", choices: ["손실을 피하려고 떨어지는 주식을 오래 붙잡는다", "오르는 주식을 바로 판다", "투자를 아예 하지 않는다", "모든 주식을 한 번에 판다"], answer: 0, explain: "hold on to failing stocks too long, hoping to avoid a loss." },
      { q: "상점이 이 심리를 이용하는 방법은?", choices: ["기회를 놓친다는 느낌을 준다", "가격을 올린다", "무료 배송을 한다", "회원 가입을 받는다"], answer: 0, explain: "\"Don't miss out—only two days left!\" 놓칠까 봐(손실) 사게 만들어요." },
    ],
  },
  {
    id: "circadian", levelId: "high", emoji: "⏰", title: "생체 시계",
    sentences: [
      { en: "Nearly every living thing has an internal clock called the circadian rhythm.", ko: "거의 모든 생물에는 일주기 리듬이라는 몸속 시계가 있다." },
      { en: "This roughly 24-hour cycle controls when we feel sleepy or alert.", ko: "약 24시간 주기의 이 리듬은 우리가 언제 졸리고 언제 정신이 맑은지를 조절한다." },
      { en: "Light is the most powerful signal that resets this clock each day.", ko: "빛은 이 시계를 매일 다시 맞추는 가장 강력한 신호다." },
      { en: "That is why jet lag occurs when you fly across several time zones.", ko: "그래서 여러 시간대를 건너 비행하면 시차증이 생긴다." },
      { en: "Getting morning sunlight can help your body adjust more quickly.", ko: "아침 햇빛을 쬐면 몸이 더 빨리 적응하는 데 도움이 된다." },
    ],
    glossary: [{ w: "internal", ko: "내부의" }, { w: "rhythm", ko: "리듬" }, { w: "roughly", ko: "대략" }, { w: "alert", ko: "정신이 맑은" }, { w: "resets", ko: "다시 맞추다" }, { w: "jet lag", ko: "시차증" }, { w: "adjust", ko: "적응하다" }],
    questions: [
      { q: "생체 시계를 다시 맞추는 가장 강력한 신호는?", choices: ["빛", "음식", "운동", "소리"], answer: 0, explain: "Light is the most powerful signal that resets this clock." },
      { q: "시차증이 생기는 이유는?", choices: ["여러 시간대를 건너 비행해서", "기내식을 먹어서", "비행기가 흔들려서", "잠을 너무 많이 자서"], answer: 0, explain: "jet lag occurs when you fly across several time zones." },
      { q: "시차 적응에 도움이 되는 것은?", choices: ["아침 햇빛 쬐기", "밤새 깨어 있기", "커피 많이 마시기", "어두운 방에 있기"], answer: 0, explain: "Getting morning sunlight can help your body adjust more quickly." },
    ],
  },
  {
    id: "languages", levelId: "high", emoji: "🗣️", title: "사라지는 언어",
    sentences: [
      { en: "About 7,000 languages are spoken in the world today.", ko: "오늘날 세계에서는 약 7,000개의 언어가 사용된다." },
      { en: "However, nearly half of them may disappear by the end of this century.", ko: "그러나 이번 세기가 끝날 때까지 그중 거의 절반이 사라질 수도 있다." },
      { en: "When a language dies, the knowledge and stories it carries can be lost forever.", ko: "언어가 사라지면 그 언어가 담고 있는 지식과 이야기도 영원히 사라질 수 있다." },
      { en: "Many endangered languages are spoken only by a few elderly people.", ko: "사라질 위기의 언어 중 많은 수는 소수의 노인들만 사용한다." },
      { en: "To protect them, some communities record native speakers and teach the language in schools.", ko: "이를 지키기 위해 어떤 지역 사회는 원어민의 말을 녹음하고 학교에서 그 언어를 가르친다." },
    ],
    glossary: [{ w: "disappear", ko: "사라지다" }, { w: "century", ko: "세기, 100년" }, { w: "carries", ko: "담고 있다" }, { w: "endangered", ko: "멸종 위기에 처한" }, { w: "elderly", ko: "나이 든" }, { w: "record", ko: "녹음하다, 기록하다" }, { w: "native speakers", ko: "원어민" }],
    questions: [
      { q: "이번 세기 말까지 사라질 수 있는 언어는?", choices: ["약 10%", "약 4분의 1", "거의 절반", "거의 전부"], answer: 2, explain: "nearly half of them may disappear." },
      { q: "언어를 지키는 방법으로 나온 것은?", choices: ["원어민을 녹음하고 학교에서 가르친다", "다른 언어 사용을 금지한다", "사전을 없앤다", "인터넷을 막는다"], answer: 0, explain: "record native speakers and teach the language in schools." },
      { q: "'endangered'의 뜻은?", choices: ["사라질 위기에 처한", "위험한", "오래된", "유명한"], answer: 0, explain: "endangered = 멸종(소멸) 위기에 처한" },
    ],
  },
  {
    id: "nudge", levelId: "high", emoji: "👉", title: "넛지",
    sentences: [
      { en: "A nudge is a small change that guides people's choices without forcing them.", ko: "넛지는 강요하지 않으면서 사람들의 선택을 이끄는 작은 변화다." },
      { en: "For example, one school cafeteria placed fruit at eye level and put desserts farther away.", ko: "예를 들어 한 학교 식당은 과일을 눈높이에 두고 디저트는 더 멀리 두었다." },
      { en: "As a result, students chose healthier food, even though nothing was banned.", ko: "그 결과 아무것도 금지하지 않았는데도 학생들은 더 건강한 음식을 골랐다." },
      { en: "Governments also use nudges, such as automatically enrolling workers in savings plans.", ko: "정부도 직장인을 저축 제도에 자동으로 가입시키는 것처럼 넛지를 활용한다." },
      { en: "Critics, however, worry that nudges can be used to manipulate people.", ko: "하지만 비판하는 사람들은 넛지가 사람들을 조종하는 데 쓰일 수 있다고 걱정한다." },
    ],
    glossary: [{ w: "nudge", ko: "넛지 (슬쩍 미는 것)" }, { w: "forcing", ko: "강요하는 것" }, { w: "cafeteria", ko: "구내식당" }, { w: "eye level", ko: "눈높이" }, { w: "banned", ko: "금지된" }, { w: "enrolling", ko: "가입시키는 것" }, { w: "manipulate", ko: "조종하다" }],
    questions: [
      { q: "넛지의 특징은?", choices: ["강요하지 않고 선택을 이끈다", "법으로 금지한다", "벌금을 물린다", "큰 상을 준다"], answer: 0, explain: "guides people's choices without forcing them." },
      { q: "학교 식당 사례의 결과는?", choices: ["디저트 판매가 금지됐다", "학생들이 더 건강한 음식을 골랐다", "과일 가격이 올랐다", "학생들이 불만을 가졌다"], answer: 1, explain: "students chose healthier food, even though nothing was banned." },
      { q: "비판하는 사람들의 걱정은?", choices: ["사람을 조종하는 데 쓰일 수 있다", "효과가 전혀 없다", "비용이 많이 든다", "너무 느리다"], answer: 0, explain: "nudges can be used to manipulate people." },
    ],
  },
  {
    id: "marshmallow", levelId: "high", emoji: "🍬", title: "마시멜로 실험",
    sentences: [
      { en: "In the 1960s, researchers offered children a choice: one marshmallow now, or two if they waited fifteen minutes.", ko: "1960년대에 연구자들은 아이들에게 지금 마시멜로 하나를 먹을지, 15분을 기다려 두 개를 먹을지 선택하게 했다." },
      { en: "Years later, the children who had waited tended to have better test scores.", ko: "몇 년 뒤, 기다렸던 아이들은 시험 점수가 더 좋은 경향이 있었다." },
      { en: "Many people concluded that self-control was the key to success.", ko: "많은 사람들은 자제력이 성공의 열쇠라고 결론 내렸다." },
      { en: "However, a later study found that family background also played a big role.", ko: "그러나 이후의 연구는 가정환경도 큰 역할을 한다는 것을 밝혀냈다." },
      { en: "Children from unstable homes may reasonably choose the sure reward now.", ko: "불안정한 가정의 아이들은 지금 확실한 보상을 고르는 것이 합리적일 수 있다." },
    ],
    glossary: [{ w: "researchers", ko: "연구자들" }, { w: "offered", ko: "제안했다" }, { w: "tended to", ko: "~하는 경향이 있었다" }, { w: "concluded", ko: "결론 내렸다" }, { w: "self-control", ko: "자제력" }, { w: "background", ko: "배경, 환경" }, { w: "unstable", ko: "불안정한" }, { w: "reasonably", ko: "합리적으로" }],
    questions: [
      { q: "15분을 기다린 아이가 받는 것은?", choices: ["마시멜로 한 개", "마시멜로 두 개", "마시멜로 세 개", "사탕 한 봉지"], answer: 1, explain: "one marshmallow now, or two if they waited fifteen minutes." },
      { q: "이후의 연구가 밝힌 것은?", choices: ["가정환경도 큰 역할을 했다", "자제력만이 중요하다", "실험이 조작되었다", "마시멜로가 건강에 나쁘다"], answer: 0, explain: "family background also played a big role." },
      { q: "불안정한 가정의 아이가 바로 먹는 것에 대한 글쓴이의 시각은?", choices: ["확실한 보상을 고르는 합리적 선택일 수 있다", "참을성이 없어서다", "배가 고파서다", "규칙을 이해하지 못해서다"], answer: 0, explain: "may reasonably choose the sure reward now. reasonably는 '합리적으로'예요." },
    ],
  },
  {
    id: "musicmemory", levelId: "high", emoji: "🎵", title: "음악과 기억",
    sentences: [
      { en: "Have you ever heard an old song and suddenly remembered a moment from years ago?", ko: "옛 노래를 듣다가 몇 년 전의 한 순간이 갑자기 떠오른 적이 있는가?" },
      { en: "Music activates many parts of the brain at once, including areas linked to emotion and memory.", ko: "음악은 감정과 기억에 관련된 영역을 포함해 뇌의 여러 부분을 한꺼번에 활성화한다." },
      { en: "For this reason, musical memories are often stronger than other memories.", ko: "이런 이유로 음악과 관련된 기억은 다른 기억보다 강한 경우가 많다." },
      { en: "Some patients with memory loss can still sing songs from their youth.", ko: "기억을 잃은 환자들 가운데 일부는 젊은 시절의 노래를 여전히 부를 수 있다." },
      { en: "Doctors now use music therapy to help such patients feel calm and connected.", ko: "의사들은 이제 이런 환자들이 차분하고 연결된 느낌을 갖도록 음악 치료를 활용한다." },
    ],
    glossary: [{ w: "suddenly", ko: "갑자기" }, { w: "activates", ko: "활성화하다" }, { w: "linked to", ko: "~와 관련된" }, { w: "emotion", ko: "감정" }, { w: "For this reason", ko: "이런 이유로" }, { w: "youth", ko: "젊은 시절" }, { w: "therapy", ko: "치료" }],
    questions: [
      { q: "음악과 관련된 기억이 강한 이유는?", choices: ["감정·기억 영역 등 뇌의 여러 부분을 한꺼번에 활성화해서", "반복해서 들어서", "가사가 짧아서", "리듬이 빨라서"], answer: 0, explain: "Music activates many parts of the brain at once ~. For this reason ~." },
      { q: "기억을 잃은 일부 환자도 할 수 있는 것은?", choices: ["젊은 시절의 노래 부르기", "새 노래 외우기", "악기 만들기", "작곡하기"], answer: 0, explain: "can still sing songs from their youth." },
      { q: "음악 치료의 목적은?", choices: ["환자가 차분하고 연결된 느낌을 갖게 하기", "기억을 완전히 되찾게 하기", "노래 실력을 키우기", "잠을 줄이기"], answer: 0, explain: "to help such patients feel calm and connected." },
    ],
  }
);

// 단계 순서대로 정렬 (같은 단계 안에서는 원래 순서 유지) → "다음 지문"이 같은 단계로 이어진다
{
  const order = ["elementary-low", "elementary-mid", "elementary-high", "middle", "high", "adult"];
  const sorted = [...READING_PASSAGES].sort((a, b) => order.indexOf(a.levelId) - order.indexOf(b.levelId));
  READING_PASSAGES.splice(0, READING_PASSAGES.length, ...sorted);
}
