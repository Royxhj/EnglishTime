// 독해 지문: 단계(levelId)별로 모아 둔다(단계마다 7개). glossary는 지문에서 눌러 뜻을 볼 수 있는 단어.
const READING_PASSAGES = [
  {
    id: "dog", levelId: "elementary-low", emoji: "🐶", title: "나의 강아지",
    sentences: [
      { en: "I have a dog.", ko: "나는 개가 한 마리 있어요." },
      { en: "His name is Coco.", ko: "그의 이름은 코코예요." },
      { en: "Coco is small and white.", ko: "코코는 작고 하얀색이에요." },
      { en: "He likes to run in the park.", ko: "코코는 공원에서 달리는 것을 좋아해요." },
      { en: "I love Coco very much.", ko: "나는 코코를 정말 사랑해요." },
    ],
    glossary: [
      { w: "small", ko: "작은" }, { w: "white", ko: "하얀" }, { w: "park", ko: "공원" }, { w: "love", ko: "사랑하다" },
    ],
    questions: [
      { q: "개의 이름은 무엇인가요?", choices: ["Coco", "Max", "Toby", "Lucy"], answer: 0, explain: "His name is Coco.라고 했어요." },
      { q: "코코는 어떤 모습인가요?", choices: ["크고 검은색", "작고 하얀색", "작고 갈색", "크고 하얀색"], answer: 1, explain: "Coco is small and white. small은 '작은', white는 '하얀'이에요." },
      { q: "코코가 좋아하는 것은?", choices: ["공원에서 달리기", "잠자기", "수영하기", "밥 먹기"], answer: 0, explain: "He likes to run in the park. 공원에서 달리는 것을 좋아해요." },
    ],
  },
  {
    id: "breakfast", levelId: "elementary-low", emoji: "🍳", title: "나의 아침 식사",
    sentences: [
      { en: "I wake up at seven.", ko: "나는 7시에 일어나요." },
      { en: "I eat bread and an egg.", ko: "나는 빵과 달걀을 먹어요." },
      { en: "My mom gives me milk.", ko: "엄마가 나에게 우유를 주세요." },
      { en: "Breakfast is my favorite meal.", ko: "아침은 내가 가장 좋아하는 식사예요." },
    ],
    glossary: [
      { w: "wake up", ko: "일어나다" }, { w: "bread", ko: "빵" }, { w: "favorite", ko: "가장 좋아하는" }, { w: "meal", ko: "식사" },
    ],
    questions: [
      { q: "몇 시에 일어나나요?", choices: ["6시", "7시", "8시", "9시"], answer: 1, explain: "I wake up at seven. seven은 7이에요." },
      { q: "아침에 먹는 것이 아닌 것은?", choices: ["빵", "달걀", "우유", "사과"], answer: 3, explain: "bread(빵), egg(달걀), milk(우유)는 나오지만 사과는 나오지 않아요." },
      { q: "우유를 주는 사람은?", choices: ["아빠", "엄마", "선생님", "친구"], answer: 1, explain: "My mom gives me milk. 엄마가 우유를 주세요." },
    ],
  },
  {
    id: "family", levelId: "elementary-low", emoji: "👨‍👩‍👦", title: "우리 가족",
    sentences: [
      { en: "There are four people in my family.", ko: "우리 가족은 네 명이에요." },
      { en: "My dad is tall.", ko: "아빠는 키가 커요." },
      { en: "My mom is kind.", ko: "엄마는 친절해요." },
      { en: "I have a little brother.", ko: "나는 남동생이 한 명 있어요." },
      { en: "We eat dinner together every night.", ko: "우리는 매일 밤 함께 저녁을 먹어요." },
    ],
    glossary: [
      { w: "family", ko: "가족" }, { w: "tall", ko: "키가 큰" }, { w: "kind", ko: "친절한" }, { w: "together", ko: "함께" },
    ],
    questions: [
      { q: "가족은 모두 몇 명인가요?", choices: ["3명", "4명", "5명", "6명"], answer: 1, explain: "There are four people in my family. four는 4예요." },
      { q: "엄마는 어떤 사람인가요?", choices: ["친절하다", "키가 크다", "화가 났다", "바쁘다"], answer: 0, explain: "My mom is kind. kind는 '친절한'이에요. 키가 큰 사람은 아빠예요." },
      { q: "가족이 매일 밤 함께 하는 일은?", choices: ["저녁 먹기", "TV 보기", "산책하기", "책 읽기"], answer: 0, explain: "We eat dinner together every night." },
    ],
  },
  {
    id: "zoo", levelId: "elementary-low", emoji: "🦁", title: "동물원에서",
    sentences: [
      { en: "I am at the zoo with my dad.", ko: "나는 아빠와 동물원에 있어요." },
      { en: "I see a big lion.", ko: "커다란 사자가 보여요." },
      { en: "The monkeys are funny.", ko: "원숭이들은 웃겨요." },
      { en: "The elephant has a long nose.", ko: "코끼리는 코가 길어요." },
      { en: "I like the zoo!", ko: "나는 동물원이 좋아요!" },
    ],
    glossary: [
      { w: "zoo", ko: "동물원" }, { w: "lion", ko: "사자" }, { w: "funny", ko: "웃긴" }, { w: "long", ko: "긴" },
    ],
    questions: [
      { q: "누구와 동물원에 갔나요?", choices: ["엄마", "아빠", "친구", "선생님"], answer: 1, explain: "I am at the zoo with my dad. dad는 '아빠'예요." },
      { q: "원숭이는 어떤가요?", choices: ["무서워요", "졸려요", "웃겨요", "작아요"], answer: 2, explain: "The monkeys are funny. funny는 '웃긴'이에요." },
      { q: "코가 긴 동물은?", choices: ["사자", "원숭이", "기린", "코끼리"], answer: 3, explain: "The elephant has a long nose." },
    ],
  },
  {
    id: "snowman", levelId: "elementary-low", emoji: "⛄", title: "눈사람 만들기",
    sentences: [
      { en: "It is snowing today.", ko: "오늘 눈이 와요." },
      { en: "My sister and I make a snowman.", ko: "언니와 나는 눈사람을 만들어요." },
      { en: "He has two black eyes and a red hat.", ko: "눈사람은 까만 눈 두 개와 빨간 모자가 있어요." },
      { en: "His nose is a carrot.", ko: "눈사람의 코는 당근이에요." },
      { en: "We are cold, but we are happy.", ko: "우리는 춥지만 행복해요." },
    ],
    glossary: [
      { w: "snowing", ko: "눈이 오는" }, { w: "snowman", ko: "눈사람" }, { w: "carrot", ko: "당근" }, { w: "cold", ko: "추운" },
    ],
    questions: [
      { q: "오늘 날씨는?", choices: ["비가 와요", "눈이 와요", "맑아요", "바람이 불어요"], answer: 1, explain: "It is snowing today. snow는 '눈'이에요." },
      { q: "눈사람의 모자는 무슨 색인가요?", choices: ["빨간색", "까만색", "파란색", "노란색"], answer: 0, explain: "a red hat. red는 '빨간색'이에요." },
      { q: "눈사람의 코는 무엇으로 만들었나요?", choices: ["돌", "나뭇가지", "당근", "단추"], answer: 2, explain: "His nose is a carrot." },
    ],
  },
  {
    id: "myroom", levelId: "elementary-low", emoji: "🛏️", title: "내 방",
    sentences: [
      { en: "This is my room.", ko: "여기는 내 방이에요." },
      { en: "There is a bed by the window.", ko: "창문 옆에 침대가 있어요." },
      { en: "There are many books on my desk.", ko: "내 책상 위에는 책이 많이 있어요." },
      { en: "My teddy bear is on the bed.", ko: "내 곰 인형은 침대 위에 있어요." },
      { en: "I love my room.", ko: "나는 내 방이 정말 좋아요." },
    ],
    glossary: [
      { w: "room", ko: "방" }, { w: "window", ko: "창문" }, { w: "desk", ko: "책상" }, { w: "teddy bear", ko: "곰 인형" },
    ],
    questions: [
      { q: "침대는 어디에 있나요?", choices: ["문 옆", "창문 옆", "책상 밑", "부엌"], answer: 1, explain: "There is a bed by the window. by는 '~ 옆에'예요." },
      { q: "책상 위에 있는 것은?", choices: ["곰 인형", "가방", "책", "컵"], answer: 2, explain: "There are many books on my desk." },
      { q: "곰 인형은 어디에 있나요?", choices: ["침대 위", "책상 위", "의자 밑", "상자 안"], answer: 0, explain: "My teddy bear is on the bed. on은 '~ 위에'예요." },
    ],
  },
  {
    id: "birthday", levelId: "elementary-low", emoji: "🎂", title: "생일 파티",
    sentences: [
      { en: "Today is my birthday.", ko: "오늘은 내 생일이에요." },
      { en: "I am eight years old.", ko: "나는 여덟 살이 되었어요." },
      { en: "My friends come to my house.", ko: "친구들이 우리 집에 와요." },
      { en: "We eat a chocolate cake.", ko: "우리는 초콜릿 케이크를 먹어요." },
      { en: "Mom gives me a new bike.", ko: "엄마가 나에게 새 자전거를 주세요." },
    ],
    glossary: [
      { w: "birthday", ko: "생일" }, { w: "friends", ko: "친구들" }, { w: "chocolate", ko: "초콜릿" }, { w: "bike", ko: "자전거" },
    ],
    questions: [
      { q: "나는 몇 살이 되었나요?", choices: ["여섯 살", "일곱 살", "여덟 살", "아홉 살"], answer: 2, explain: "I am eight years old. eight는 8이에요." },
      { q: "어떤 케이크를 먹나요?", choices: ["딸기 케이크", "초콜릿 케이크", "치즈 케이크", "당근 케이크"], answer: 1, explain: "We eat a chocolate cake." },
      { q: "엄마가 준 선물은?", choices: ["새 자전거", "인형", "책", "공"], answer: 0, explain: "Mom gives me a new bike. bike는 '자전거'예요." },
    ],
  },
  {
    id: "rainy", levelId: "elementary-mid", emoji: "☔", title: "비 오는 날",
    sentences: [
      { en: "It was raining all day on Saturday.", ko: "토요일에 하루 종일 비가 내렸어요." },
      { en: "Mina could not play outside.", ko: "미나는 밖에서 놀 수 없었어요." },
      { en: "So she read books with her brother.", ko: "그래서 미나는 남동생과 책을 읽었어요." },
      { en: "In the evening, the rain stopped.", ko: "저녁에 비가 그쳤어요." },
      { en: "They saw a rainbow in the sky.", ko: "그들은 하늘에서 무지개를 보았어요." },
    ],
    glossary: [
      { w: "outside", ko: "밖에서" }, { w: "evening", ko: "저녁" }, { w: "stopped", ko: "멈췄다, 그쳤다" }, { w: "rainbow", ko: "무지개" },
    ],
    questions: [
      { q: "미나가 밖에서 놀지 못한 이유는?", choices: ["비가 와서", "아파서", "숙제 때문에", "너무 더워서"], answer: 0, explain: "토요일에 하루 종일 비가 왔기 때문이에요. So(그래서)가 결과를 이어 줘요." },
      { q: "미나는 누구와 책을 읽었나요?", choices: ["엄마", "남동생", "친구", "선생님"], answer: 1, explain: "with her brother. brother는 남자 형제예요." },
      { q: "저녁에 무엇을 보았나요?", choices: ["달", "무지개", "별", "눈"], answer: 1, explain: "They saw a rainbow in the sky. rainbow는 무지개예요." },
    ],
  },
  {
    id: "hamster", levelId: "elementary-mid", emoji: "🐹", title: "우리 반 햄스터",
    sentences: [
      { en: "Our class has a pet hamster.", ko: "우리 반에는 햄스터 한 마리가 있어요." },
      { en: "Every week, two students take care of it.", ko: "매주 학생 두 명이 햄스터를 돌봐요." },
      { en: "They give it food and fresh water.", ko: "그들은 햄스터에게 먹이와 신선한 물을 줘요." },
      { en: "This week, it is my turn.", ko: "이번 주는 내 차례예요." },
      { en: "I am excited but a little nervous.", ko: "나는 신나지만 조금 긴장돼요." },
    ],
    glossary: [
      { w: "pet", ko: "애완동물" }, { w: "take care of", ko: "~을 돌보다" }, { w: "fresh", ko: "신선한" }, { w: "turn", ko: "차례" }, { w: "nervous", ko: "긴장한" },
    ],
    questions: [
      { q: "매주 햄스터를 돌보는 학생은 몇 명인가요?", choices: ["1명", "2명", "3명", "4명"], answer: 1, explain: "Every week, two students take care of it. two는 2예요." },
      { q: "햄스터에게 주는 것은?", choices: ["먹이와 물", "장난감", "책", "옷"], answer: 0, explain: "They give it food and fresh water." },
      { q: "글쓴이의 기분은?", choices: ["신나지만 조금 긴장된다", "슬프고 화난다", "지루하다", "무섭기만 하다"], answer: 0, explain: "I am excited but a little nervous. excited는 신난, nervous는 긴장한이에요." },
    ],
  },
  {
    id: "lostcat", levelId: "elementary-mid", emoji: "🐈", title: "사라진 고양이",
    sentences: [
      { en: "Yesterday, my cat Nabi did not come home.", ko: "어제 우리 고양이 나비가 집에 오지 않았어요." },
      { en: "I was very worried, so I looked for her everywhere.", ko: "나는 너무 걱정돼서 여기저기 나비를 찾아다녔어요." },
      { en: "Finally, I found her under a car next door.", ko: "마침내 옆집 차 밑에서 나비를 찾았어요." },
      { en: "She was scared and hungry.", ko: "나비는 겁에 질리고 배가 고팠어요." },
      { en: "I gave her some food and held her tight.", ko: "나는 나비에게 먹이를 주고 꼭 안아 주었어요." },
    ],
    glossary: [
      { w: "worried", ko: "걱정하는" }, { w: "looked for", ko: "~을 찾았다" }, { w: "everywhere", ko: "모든 곳에서" }, { w: "Finally", ko: "마침내" }, { w: "scared", ko: "겁먹은" }, { w: "held", ko: "안았다 (hold의 과거)" },
    ],
    questions: [
      { q: "나비는 어디에 있었나요?", choices: ["옆집 차 밑", "나무 위", "학교", "공원"], answer: 0, explain: "I found her under a car next door. under는 '~ 밑에'예요." },
      { q: "찾았을 때 나비는 어떤 상태였나요?", choices: ["겁먹고 배가 고팠다", "졸렸다", "신이 났다", "다리를 다쳤다"], answer: 0, explain: "She was scared and hungry." },
      { q: "'Finally'의 뜻은?", choices: ["마침내", "처음에", "그래서", "갑자기"], answer: 0, explain: "오래 찾아다닌 끝에 결국 찾았다는 뜻이에요." },
    ],
  },
  {
    id: "picnic", levelId: "elementary-mid", emoji: "🧺", title: "가족 소풍",
    sentences: [
      { en: "Last Sunday, my family went on a picnic.", ko: "지난 일요일에 우리 가족은 소풍을 갔어요." },
      { en: "We went to a park near the river.", ko: "우리는 강 근처에 있는 공원에 갔어요." },
      { en: "Mom made gimbap and Dad brought some fruit.", ko: "엄마는 김밥을 만들고 아빠는 과일을 가져왔어요." },
      { en: "After lunch, my brother and I flew a kite.", ko: "점심을 먹은 뒤 형과 나는 연을 날렸어요." },
      { en: "It was a sunny and wonderful day.", ko: "맑고 정말 멋진 날이었어요." },
    ],
    glossary: [
      { w: "picnic", ko: "소풍" }, { w: "near", ko: "~ 근처에" }, { w: "river", ko: "강" }, { w: "brought", ko: "가져왔다 (bring의 과거)" }, { w: "flew", ko: "날렸다 (fly의 과거)" }, { w: "wonderful", ko: "멋진" },
    ],
    questions: [
      { q: "소풍을 간 날은?", choices: ["지난 토요일", "지난 일요일", "오늘", "내일"], answer: 1, explain: "Last Sunday. last는 '지난'이에요." },
      { q: "김밥을 만든 사람은?", choices: ["아빠", "형", "엄마", "나"], answer: 2, explain: "Mom made gimbap." },
      { q: "점심을 먹은 뒤에 한 일은?", choices: ["수영하기", "연 날리기", "자전거 타기", "낮잠 자기"], answer: 1, explain: "After lunch, my brother and I flew a kite. flew는 fly(날리다)의 과거예요." },
    ],
  },
  {
    id: "market", levelId: "elementary-mid", emoji: "🍎", title: "시장 심부름",
    sentences: [
      { en: "Mom asked me to go to the market.", ko: "엄마가 나에게 시장에 다녀오라고 하셨어요." },
      { en: "She gave me 10,000 won.", ko: "엄마는 나에게 만 원을 주셨어요." },
      { en: "I bought five apples and a bag of carrots.", ko: "나는 사과 다섯 개와 당근 한 봉지를 샀어요." },
      { en: "The apples were 6,000 won and the carrots were 3,000 won.", ko: "사과는 6천 원, 당근은 3천 원이었어요." },
      { en: "I gave the change to Mom, and she smiled.", ko: "엄마께 거스름돈을 드렸더니 엄마가 웃으셨어요." },
    ],
    glossary: [
      { w: "asked", ko: "부탁했다" }, { w: "market", ko: "시장" }, { w: "bought", ko: "샀다 (buy의 과거)" }, { w: "change", ko: "거스름돈" }, { w: "smiled", ko: "웃었다" },
    ],
    questions: [
      { q: "산 사과는 몇 개인가요?", choices: ["세 개", "네 개", "다섯 개", "여섯 개"], answer: 2, explain: "I bought five apples. five는 5예요." },
      { q: "거스름돈은 얼마였을까요?", choices: ["1,000원", "3,000원", "4,000원", "6,000원"], answer: 0, explain: "10,000원 - 사과 6,000원 - 당근 3,000원 = 1,000원이에요." },
      { q: "'change'는 이 글에서 무슨 뜻인가요?", choices: ["바꾸다", "거스름돈", "옷", "기회"], answer: 1, explain: "물건을 사고 남은 돈이라서 '거스름돈'이에요. change는 '바꾸다'라는 뜻도 있어요." },
    ],
  },
  {
    id: "newfriend", levelId: "elementary-mid", emoji: "🤝", title: "새로 온 친구",
    sentences: [
      { en: "A new student came to our class today.", ko: "오늘 우리 반에 새 친구가 왔어요." },
      { en: "His name is Leo, and he is from Canada.", ko: "그의 이름은 레오이고, 캐나다에서 왔어요." },
      { en: "He could not speak Korean well, so he looked shy.", ko: "그는 한국어를 잘 못해서 수줍어 보였어요." },
      { en: "At lunch, I sat next to him and said, \"Hi!\"", ko: "점심시간에 나는 그의 옆에 앉아서 \"안녕!\"이라고 말했어요." },
      { en: "We talked about soccer, and now we are good friends.", ko: "우리는 축구 이야기를 했고, 이제 우리는 좋은 친구예요." },
    ],
    glossary: [
      { w: "student", ko: "학생" }, { w: "Canada", ko: "캐나다" }, { w: "shy", ko: "수줍은" }, { w: "next to", ko: "~ 옆에" }, { w: "talked about", ko: "~에 대해 이야기했다" },
    ],
    questions: [
      { q: "레오는 어느 나라에서 왔나요?", choices: ["미국", "영국", "캐나다", "호주"], answer: 2, explain: "he is from Canada." },
      { q: "레오가 수줍어 보인 이유는?", choices: ["배가 고파서", "한국어를 잘 못해서", "아파서", "지각해서"], answer: 1, explain: "He could not speak Korean well, so he looked shy. so 앞이 이유예요." },
      { q: "두 친구가 이야기한 것은?", choices: ["축구", "음식", "게임", "숙제"], answer: 0, explain: "We talked about soccer." },
    ],
  },
  {
    id: "garden", levelId: "elementary-mid", emoji: "🌱", title: "방울토마토 키우기",
    sentences: [
      { en: "In spring, I planted a small tomato seed.", ko: "봄에 나는 작은 토마토 씨앗을 심었어요." },
      { en: "I watered it every morning.", ko: "나는 매일 아침 물을 주었어요." },
      { en: "After two weeks, a tiny green leaf came out.", ko: "2주 뒤에 아주 작은 초록 잎이 나왔어요." },
      { en: "In summer, the plant grew taller than me.", ko: "여름에 그 식물은 나보다 키가 더 커졌어요." },
      { en: "Now I can pick red cherry tomatoes every day!", ko: "이제 나는 매일 빨간 방울토마토를 딸 수 있어요!" },
    ],
    glossary: [
      { w: "planted", ko: "심었다" }, { w: "seed", ko: "씨앗" }, { w: "watered", ko: "물을 주었다" }, { w: "tiny", ko: "아주 작은" }, { w: "leaf", ko: "잎" }, { w: "pick", ko: "따다" },
    ],
    questions: [
      { q: "씨앗을 심은 계절은?", choices: ["봄", "여름", "가을", "겨울"], answer: 0, explain: "In spring, I planted a small tomato seed. spring은 '봄'이에요." },
      { q: "잎이 나온 것은 언제인가요?", choices: ["다음 날", "1주 뒤", "2주 뒤", "한 달 뒤"], answer: 2, explain: "After two weeks, a tiny green leaf came out." },
      { q: "여름에 식물은 어떻게 되었나요?", choices: ["시들었다", "나보다 커졌다", "꽃만 피었다", "그대로였다"], answer: 1, explain: "the plant grew taller than me. taller than은 '~보다 더 큰'이에요." },
    ],
  },
  {
    id: "sciencefair", levelId: "elementary-high", emoji: "🔬", title: "과학 박람회",
    sentences: [
      { en: "Last month, our school held a science fair.", ko: "지난달 우리 학교에서 과학 박람회가 열렸다." },
      { en: "Jisu made a small robot that could pick up trash.", ko: "지수는 쓰레기를 주울 수 있는 작은 로봇을 만들었다." },
      { en: "She worked on it for three weeks.", ko: "그녀는 3주 동안 그것을 만들었다." },
      { en: "At first, the robot kept falling over.", ko: "처음에는 로봇이 계속 넘어졌다." },
      { en: "But she did not give up, and she won second prize.", ko: "하지만 그녀는 포기하지 않았고, 2등 상을 받았다." },
    ],
    glossary: [
      { w: "held", ko: "열었다, 개최했다" }, { w: "trash", ko: "쓰레기" }, { w: "falling over", ko: "넘어지는" }, { w: "give up", ko: "포기하다" }, { w: "prize", ko: "상" },
    ],
    questions: [
      { q: "지수의 로봇은 무엇을 할 수 있나요?", choices: ["쓰레기 줍기", "노래하기", "요리하기", "그림 그리기"], answer: 0, explain: "a small robot that could pick up trash. that 이하가 로봇을 설명해요." },
      { q: "로봇을 만드는 데 걸린 시간은?", choices: ["1주", "2주", "3주", "한 달"], answer: 2, explain: "She worked on it for three weeks." },
      { q: "이 글에서 알 수 있는 지수의 성격은?", choices: ["포기하지 않는다", "게으르다", "수줍음이 많다", "화를 잘 낸다"], answer: 0, explain: "로봇이 계속 넘어졌지만 she did not give up(포기하지 않았다)." },
    ],
  },
  {
    id: "water", levelId: "elementary-high", emoji: "💧", title: "물을 아껴요",
    sentences: [
      { en: "Water is very important for all living things.", ko: "물은 모든 생물에게 매우 중요하다." },
      { en: "However, clean water is not unlimited.", ko: "하지만 깨끗한 물은 무한하지 않다." },
      { en: "We can save water in simple ways.", ko: "우리는 간단한 방법으로 물을 아낄 수 있다." },
      { en: "For example, turn off the tap while you brush your teeth.", ko: "예를 들어, 양치하는 동안 수도꼭지를 잠가라." },
      { en: "Taking shorter showers also helps.", ko: "샤워를 짧게 하는 것도 도움이 된다." },
    ],
    glossary: [
      { w: "important", ko: "중요한" }, { w: "living things", ko: "생물" }, { w: "However", ko: "하지만" }, { w: "unlimited", ko: "무한한" }, { w: "save", ko: "아끼다" }, { w: "tap", ko: "수도꼭지" },
    ],
    questions: [
      { q: "이 글의 주제는?", choices: ["물을 아끼는 방법", "물고기의 종류", "비가 오는 이유", "수영을 잘하는 법"], answer: 0, explain: "We can save water in simple ways. 다음에 구체적인 방법이 이어져요." },
      { q: "양치할 때 해야 할 일은?", choices: ["수도꼭지를 잠근다", "물을 계속 틀어 둔다", "뜨거운 물을 쓴다", "컵을 쓰지 않는다"], answer: 0, explain: "turn off the tap while you brush your teeth." },
      { q: "'unlimited'와 뜻이 가장 가까운 것은?", choices: ["끝이 없는", "깨끗한", "작은", "차가운"], answer: 0, explain: "un-(아닌) + limited(제한된) = 제한이 없는, 무한한." },
    ],
  },
  {
    id: "letter", levelId: "elementary-high", emoji: "✉️", title: "선생님께 쓴 편지",
    sentences: [
      { en: "Dear Ms. Park,", ko: "박 선생님께," },
      { en: "Thank you for teaching us this year.", ko: "올해 저희를 가르쳐 주셔서 감사합니다." },
      { en: "Your science classes were always fun and interesting.", ko: "선생님의 과학 수업은 언제나 재미있고 흥미로웠어요." },
      { en: "I especially remember the day we made a volcano.", ko: "특히 화산을 만들었던 날이 기억에 남아요." },
      { en: "I will miss you a lot next year.", ko: "내년에 선생님이 많이 보고 싶을 거예요." },
      { en: "Love, Minji", ko: "민지 올림" },
    ],
    glossary: [
      { w: "especially", ko: "특히" }, { w: "remember", ko: "기억하다" }, { w: "volcano", ko: "화산" }, { w: "miss", ko: "그리워하다, 보고 싶어 하다" },
    ],
    questions: [
      { q: "이 글은 어떤 종류의 글인가요?", choices: ["감사 편지", "일기", "광고", "뉴스 기사"], answer: 0, explain: "Dear ~로 시작해 Thank you for ~로 감사를 전하는 편지예요." },
      { q: "민지가 특히 기억하는 일은?", choices: ["화산을 만든 날", "운동회", "소풍", "시험 본 날"], answer: 0, explain: "I especially remember the day we made a volcano." },
      { q: "'I will miss you'의 뜻은?", choices: ["보고 싶을 거예요", "놓칠 거예요", "기다릴 거예요", "잊을 거예요"], answer: 0, explain: "miss는 '놓치다' 말고도 '그리워하다'라는 뜻이 있어요. 문맥으로 뜻을 골라요." },
    ],
  },
  {
    id: "sejong", levelId: "elementary-high", emoji: "📜", title: "세종대왕과 한글",
    sentences: [
      { en: "Long ago, Koreans used Chinese characters to write.", ko: "오래전 한국 사람들은 글을 쓸 때 한자를 썼다." },
      { en: "Chinese characters were very difficult to learn.", ko: "한자는 배우기가 매우 어려웠다." },
      { en: "Many people could not read or write.", ko: "많은 사람들이 읽거나 쓰지 못했다." },
      { en: "King Sejong wanted to help them, so he created Hangeul in 1443.", ko: "세종대왕은 그들을 돕고 싶어서 1443년에 한글을 만들었다." },
      { en: "Hangeul is easy to learn because it has only 24 basic letters.", ko: "한글은 기본 글자가 24개뿐이라서 배우기 쉽다." },
      { en: "Today, we celebrate Hangeul Day on October 9th.", ko: "오늘날 우리는 10월 9일에 한글날을 기념한다." },
    ],
    glossary: [
      { w: "characters", ko: "글자, 문자" }, { w: "difficult", ko: "어려운" }, { w: "created", ko: "만들었다" }, { w: "basic", ko: "기본의" }, { w: "letters", ko: "글자" }, { w: "celebrate", ko: "기념하다, 축하하다" },
    ],
    questions: [
      { q: "세종대왕이 한글을 만든 이유는?", choices: ["사람들을 돕고 싶어서", "중국과 싸우려고", "책을 팔려고", "놀이를 만들려고"], answer: 0, explain: "King Sejong wanted to help them, so he created Hangeul. so 앞이 이유예요." },
      { q: "한글이 배우기 쉬운 이유는?", choices: ["그림이 많아서", "기본 글자가 24개뿐이라서", "한자와 같아서", "소리가 없어서"], answer: 1, explain: "because it has only 24 basic letters. because 뒤가 이유예요." },
      { q: "한글날은 언제인가요?", choices: ["3월 1일", "8월 15일", "10월 3일", "10월 9일"], answer: 3, explain: "on October 9th. October는 10월이에요." },
    ],
  },
  {
    id: "dreamjob", levelId: "elementary-high", emoji: "🧑‍🚀", title: "나의 꿈",
    sentences: [
      { en: "My dream is to become an astronaut.", ko: "내 꿈은 우주비행사가 되는 것이다." },
      { en: "When I was seven, I saw the moon through a telescope.", ko: "일곱 살 때 나는 망원경으로 달을 보았다." },
      { en: "Since then, I have been curious about space.", ko: "그때부터 나는 우주에 대해 궁금해졌다." },
      { en: "To become an astronaut, I need to be healthy and study science hard.", ko: "우주비행사가 되려면 건강하고 과학을 열심히 공부해야 한다." },
      { en: "So I exercise every day and read science books.", ko: "그래서 나는 매일 운동하고 과학책을 읽는다." },
      { en: "Someday, I want to walk on the moon.", ko: "언젠가 나는 달 위를 걷고 싶다." },
    ],
    glossary: [
      { w: "astronaut", ko: "우주비행사" }, { w: "telescope", ko: "망원경" }, { w: "curious", ko: "궁금한, 호기심 많은" }, { w: "healthy", ko: "건강한" }, { w: "exercise", ko: "운동하다" }, { w: "Someday", ko: "언젠가" },
    ],
    questions: [
      { q: "글쓴이의 꿈은?", choices: ["과학 선생님", "우주비행사", "의사", "운동선수"], answer: 1, explain: "My dream is to become an astronaut." },
      { q: "우주에 관심을 갖게 된 계기는?", choices: ["영화를 봐서", "망원경으로 달을 봐서", "책을 읽어서", "박물관에 가서"], answer: 1, explain: "I saw the moon through a telescope. Since then(그때부터) 궁금해졌어요." },
      { q: "꿈을 위해 매일 하는 일은?", choices: ["운동과 과학책 읽기", "그림 그리기", "피아노 치기", "요리하기"], answer: 0, explain: "So I exercise every day and read science books." },
    ],
  },
  {
    id: "volunteer", levelId: "elementary-high", emoji: "🧤", title: "공원 청소 봉사",
    sentences: [
      { en: "Last Saturday, our class volunteered at a park.", ko: "지난 토요일, 우리 반은 공원에서 봉사 활동을 했다." },
      { en: "We picked up cans, bottles, and plastic bags.", ko: "우리는 캔, 병, 비닐봉지를 주웠다." },
      { en: "We also separated the trash for recycling.", ko: "또 재활용을 위해 쓰레기를 분리했다." },
      { en: "It was hard work, but the park looked much cleaner.", ko: "힘든 일이었지만 공원이 훨씬 깨끗해 보였다." },
      { en: "An old man thanked us with a big smile.", ko: "한 할아버지께서 환하게 웃으며 고맙다고 하셨다." },
      { en: "I felt proud because I helped my community.", ko: "우리 동네를 도와서 뿌듯했다." },
    ],
    glossary: [
      { w: "volunteered", ko: "봉사 활동을 했다" }, { w: "bottles", ko: "병" }, { w: "separated", ko: "분리했다" }, { w: "recycling", ko: "재활용" }, { w: "proud", ko: "자랑스러운, 뿌듯한" }, { w: "community", ko: "지역 사회, 동네" },
    ],
    questions: [
      { q: "봉사 활동을 한 장소는?", choices: ["학교", "도서관", "공원", "바닷가"], answer: 2, explain: "our class volunteered at a park." },
      { q: "쓰레기를 분리한 이유는?", choices: ["재활용하려고", "팔려고", "놀이를 하려고", "숙제라서"], answer: 0, explain: "We also separated the trash for recycling. for는 '~을 위해'예요." },
      { q: "글쓴이가 뿌듯했던 이유는?", choices: ["상을 받아서", "동네를 도와서", "일찍 끝나서", "간식을 먹어서"], answer: 1, explain: "I felt proud because I helped my community." },
    ],
  },
  {
    id: "space", levelId: "elementary-high", emoji: "🪐", title: "태양계 이야기",
    sentences: [
      { en: "Our solar system has eight planets.", ko: "우리 태양계에는 행성이 8개 있다." },
      { en: "Mercury is the closest planet to the Sun.", ko: "수성은 태양에서 가장 가까운 행성이다." },
      { en: "Jupiter is the biggest planet of all.", ko: "목성은 모든 행성 중에서 가장 크다." },
      { en: "Saturn has beautiful rings around it.", ko: "토성은 주위에 아름다운 고리가 있다." },
      { en: "Earth is the only planet with liquid water on its surface.", ko: "지구는 표면에 액체 상태의 물이 있는 유일한 행성이다." },
      { en: "That is why living things can live here.", ko: "그래서 생물이 이곳에 살 수 있다." },
    ],
    glossary: [
      { w: "solar system", ko: "태양계" }, { w: "planets", ko: "행성들" }, { w: "closest", ko: "가장 가까운" }, { w: "rings", ko: "고리" }, { w: "liquid", ko: "액체의" }, { w: "surface", ko: "표면" },
    ],
    questions: [
      { q: "가장 큰 행성은?", choices: ["수성", "지구", "목성", "토성"], answer: 2, explain: "Jupiter is the biggest planet of all. the biggest는 '가장 큰'이에요." },
      { q: "고리가 있는 행성은?", choices: ["토성", "수성", "지구", "목성"], answer: 0, explain: "Saturn has beautiful rings around it." },
      { q: "지구에 생물이 살 수 있는 이유는?", choices: ["가장 커서", "태양에서 가장 가까워서", "표면에 액체 물이 있어서", "고리가 있어서"], answer: 2, explain: "Earth is the only planet with liquid water ~. That is why(그래서) 생물이 살 수 있어요." },
    ],
  },
  {
    id: "smartphone", levelId: "middle", emoji: "📱", title: "스마트폰과 잠",
    sentences: [
      { en: "Many teenagers use their smartphones late at night.", ko: "많은 십대들이 밤늦게 스마트폰을 사용한다." },
      { en: "The blue light from the screen can make it harder to fall asleep.", ko: "화면에서 나오는 블루라이트는 잠들기 어렵게 만들 수 있다." },
      { en: "As a result, they often feel tired the next morning.", ko: "그 결과 그들은 다음 날 아침 자주 피곤함을 느낀다." },
      { en: "Experts suggest putting phones away an hour before bed.", ko: "전문가들은 자기 한 시간 전에 휴대폰을 치워 둘 것을 제안한다." },
      { en: "Reading a paper book instead can help you relax.", ko: "대신 종이책을 읽으면 긴장을 푸는 데 도움이 될 수 있다." },
    ],
    glossary: [
      { w: "teenagers", ko: "십대들" }, { w: "fall asleep", ko: "잠들다" }, { w: "As a result", ko: "그 결과" }, { w: "Experts", ko: "전문가들" }, { w: "suggest", ko: "제안하다" }, { w: "instead", ko: "대신에" }, { w: "relax", ko: "긴장을 풀다" },
    ],
    questions: [
      { q: "블루라이트가 잠에 미치는 영향은?", choices: ["잠들기 어렵게 만든다", "꿈을 많이 꾸게 한다", "일찍 일어나게 한다", "키가 크게 한다"], answer: 0, explain: "can make it harder to fall asleep. 잠들기 더 어렵게 만들어요." },
      { q: "전문가들의 조언은?", choices: ["자기 1시간 전에 휴대폰 치우기", "밤에 운동하기", "아침을 거르기", "밝은 조명 켜기"], answer: 0, explain: "Experts suggest putting phones away an hour before bed." },
      { q: "'As a result'가 이어 주는 관계는?", choices: ["원인과 결과", "대조", "예시", "시간 순서"], answer: 0, explain: "잠들기 어려움(원인) → 아침에 피곤함(결과). As a result는 결과를 이끌어요." },
    ],
  },
  {
    id: "honest", levelId: "middle", emoji: "👛", title: "정직한 소년",
    sentences: [
      { en: "One day, a boy found a wallet on the street.", ko: "어느 날 한 소년이 길에서 지갑을 발견했다." },
      { en: "There was a lot of money in it, but he did not keep it.", ko: "그 안에는 돈이 많이 들어 있었지만 그는 그것을 갖지 않았다." },
      { en: "Instead, he took it to the police station.", ko: "대신 그는 그것을 경찰서에 가져갔다." },
      { en: "The owner, an old woman, was so thankful that she visited his school.", ko: "주인인 할머니는 너무 고마워서 그의 학교를 찾아왔다." },
      { en: "She told everyone that honesty is the best gift.", ko: "그녀는 모두에게 정직이 가장 좋은 선물이라고 말했다." },
    ],
    glossary: [
      { w: "wallet", ko: "지갑" }, { w: "keep", ko: "가지다, 보관하다" }, { w: "police station", ko: "경찰서" }, { w: "owner", ko: "주인" }, { w: "thankful", ko: "고마워하는" }, { w: "honesty", ko: "정직" },
    ],
    questions: [
      { q: "소년은 지갑을 어떻게 했나요?", choices: ["경찰서에 가져갔다", "자기가 가졌다", "버렸다", "친구에게 줬다"], answer: 0, explain: "Instead, he took it to the police station." },
      { q: "지갑의 주인은 누구였나요?", choices: ["할머니", "선생님", "경찰관", "소년의 엄마"], answer: 0, explain: "The owner, an old woman ~. 콤마 사이의 an old woman이 owner를 설명하는 동격이에요." },
      { q: "'so thankful that she visited his school'의 뜻은?", choices: ["너무 고마워서 학교를 찾아왔다", "고마웠지만 학교에 가지 않았다", "학교에 가기 위해 고마워했다", "학교에 올 만큼 고맙지 않았다"], answer: 0, explain: "so ~ that ...은 '너무 ~해서 …하다'라는 뜻이에요." },
    ],
  },
  {
    id: "marathon", levelId: "middle", emoji: "🏃", title: "최초의 마라톤",
    sentences: [
      { en: "The marathon race comes from an old Greek story.", ko: "마라톤 경주는 고대 그리스의 이야기에서 유래했다." },
      { en: "In 490 BC, a messenger ran about 40 kilometers from Marathon to Athens.", ko: "기원전 490년, 한 전령이 마라톤에서 아테네까지 약 40킬로미터를 달렸다." },
      { en: "He wanted to tell people that their army had won the battle.", ko: "그는 사람들에게 자신들의 군대가 전투에서 이겼다는 것을 알리고 싶었다." },
      { en: "After he delivered the news, he fell down and died.", ko: "소식을 전한 뒤 그는 쓰러져 숨졌다." },
      { en: "Today, people run the marathon to remember his effort.", ko: "오늘날 사람들은 그의 노력을 기억하기 위해 마라톤을 달린다." },
    ],
    glossary: [
      { w: "comes from", ko: "~에서 유래하다" }, { w: "messenger", ko: "전령, 소식을 전하는 사람" }, { w: "army", ko: "군대" }, { w: "battle", ko: "전투" }, { w: "delivered", ko: "전달했다" }, { w: "effort", ko: "노력" },
    ],
    questions: [
      { q: "전령이 달린 이유는?", choices: ["전투에서 이긴 소식을 알리려고", "상을 받으려고", "적에게서 도망치려고", "운동을 하려고"], answer: 0, explain: "He wanted to tell people that their army had won the battle." },
      { q: "전령은 어디에서 어디로 달렸나요?", choices: ["마라톤 → 아테네", "아테네 → 마라톤", "로마 → 아테네", "아테네 → 로마"], answer: 0, explain: "from Marathon to Athens. from A to B는 'A에서 B까지'예요." },
      { q: "'their army had won the battle'에서 had won이 나타내는 것은?", choices: ["알리기 전에 이미 이긴 일", "앞으로 이길 일", "지금 이기고 있는 일", "이길 수도 있는 일"], answer: 0, explain: "had + p.p.(과거완료)는 과거의 어떤 때보다 더 먼저 일어난 일을 나타내요." },
    ],
  },
  {
    id: "foodwaste", levelId: "middle", emoji: "🍱", title: "음식물 쓰레기 줄이기",
    sentences: [
      { en: "Every day, a lot of food is thrown away in school cafeterias.", ko: "매일 학교 급식실에서 많은 음식이 버려진다." },
      { en: "Our class decided to find out how much food we waste.", ko: "우리 반은 음식을 얼마나 낭비하는지 알아보기로 했다." },
      { en: "For one week, we measured the leftovers after lunch.", ko: "일주일 동안 우리는 점심 후 남은 음식의 양을 쟀다." },
      { en: "We were surprised that we threw away about 5 kg every day.", ko: "우리는 매일 약 5kg을 버린다는 사실에 놀랐다." },
      { en: "So we made a rule: take only as much as you can eat.", ko: "그래서 우리는 규칙을 만들었다. 먹을 수 있는 만큼만 가져가기." },
      { en: "A month later, our food waste had dropped by half.", ko: "한 달 뒤, 우리의 음식물 쓰레기는 절반으로 줄어 있었다." },
      { en: "Small changes can make a big difference.", ko: "작은 변화가 큰 차이를 만들 수 있다." },
    ],
    glossary: [
      { w: "thrown away", ko: "버려진" }, { w: "cafeterias", ko: "급식실, 구내식당" }, { w: "waste", ko: "낭비하다" }, { w: "measured", ko: "측정했다" }, { w: "leftovers", ko: "남은 음식" }, { w: "dropped", ko: "줄었다" }, { w: "difference", ko: "차이" },
    ],
    questions: [
      { q: "반 친구들이 처음에 한 일은?", choices: ["급식 메뉴를 바꿨다", "남은 음식의 양을 쟀다", "급식실을 청소했다", "식당에 편지를 썼다"], answer: 1, explain: "For one week, we measured the leftovers after lunch." },
      { q: "반에서 만든 규칙은?", choices: ["급식을 남기지 않으면 상을 준다", "먹을 수 있는 만큼만 가져간다", "간식을 먹지 않는다", "점심을 빨리 먹는다"], answer: 1, explain: "take only as much as you can eat. as much as는 '~만큼'이에요." },
      { q: "한 달 뒤 음식물 쓰레기는?", choices: ["두 배로 늘었다", "그대로였다", "절반으로 줄었다", "완전히 사라졌다"], answer: 2, explain: "had dropped by half. by half는 '절반만큼'이에요. 과거완료(had p.p.)로 그 시점까지 이미 줄어 있었다는 뜻이에요." },
    ],
  },
  {
    id: "jangyeongsil", levelId: "middle", emoji: "🌧️", title: "장영실과 측우기",
    sentences: [
      { en: "Jang Yeong-sil was born into a low-class family in the Joseon Dynasty.", ko: "장영실은 조선 시대에 낮은 신분의 집안에서 태어났다." },
      { en: "However, he was so talented that King Sejong invited him to the palace.", ko: "하지만 그는 재능이 매우 뛰어나서 세종대왕이 그를 궁궐로 불렀다." },
      { en: "At that time, farmers needed to know how much rain fell.", ko: "그 당시 농부들은 비가 얼마나 내렸는지 알아야 했다." },
      { en: "So Jang Yeong-sil helped make the rain gauge, called Cheugugi.", ko: "그래서 장영실은 측우기라고 불리는 강우량 측정기를 만드는 데 도왔다." },
      { en: "It was used to measure rainfall in every region of the country.", ko: "그것은 전국 모든 지역의 강우량을 재는 데 쓰였다." },
      { en: "This was about 200 years earlier than similar tools in Europe.", ko: "이는 유럽의 비슷한 도구보다 약 200년이나 앞선 것이었다." },
    ],
    glossary: [
      { w: "Dynasty", ko: "왕조" }, { w: "talented", ko: "재능 있는" }, { w: "palace", ko: "궁궐" }, { w: "rain gauge", ko: "우량계" }, { w: "measure", ko: "측정하다" }, { w: "rainfall", ko: "강우량" }, { w: "similar", ko: "비슷한" },
    ],
    questions: [
      { q: "세종대왕이 장영실을 궁궐로 부른 이유는?", choices: ["부자여서", "재능이 뛰어나서", "왕의 친척이어서", "농부여서"], answer: 1, explain: "he was so talented that King Sejong invited him. so ~ that은 '너무 ~해서 …하다'예요." },
      { q: "측우기는 무엇을 재는 도구인가요?", choices: ["시간", "온도", "강우량", "바람의 세기"], answer: 2, explain: "It was used to measure rainfall. be used to + 동사원형은 '~하는 데 쓰이다'예요." },
      { q: "글의 내용과 맞는 것은?", choices: ["장영실은 귀족 출신이다", "측우기는 한 지역에서만 쓰였다", "측우기는 유럽의 비슷한 도구보다 앞섰다", "농부들은 비의 양에 관심이 없었다"], answer: 2, explain: "about 200 years earlier than similar tools in Europe." },
    ],
  },
  {
    id: "fairtrade", levelId: "middle", emoji: "🍫", title: "공정 무역 초콜릿",
    sentences: [
      { en: "Most of the world's cocoa is grown in West Africa.", ko: "세계 코코아의 대부분은 서아프리카에서 재배된다." },
      { en: "Many cocoa farmers there are very poor, even though chocolate is popular everywhere.", ko: "초콜릿은 어디서나 인기 있지만, 그곳의 많은 코코아 농부들은 매우 가난하다." },
      { en: "This is because they receive only a small part of the price.", ko: "이는 그들이 가격의 아주 적은 부분만 받기 때문이다." },
      { en: "Fair trade is a system that pays farmers a fair price.", ko: "공정 무역은 농부들에게 공정한 가격을 지불하는 제도이다." },
      { en: "It also helps farmers build schools and protect the environment.", ko: "그것은 또한 농부들이 학교를 짓고 환경을 보호하도록 돕는다." },
      { en: "When you buy chocolate, look for the fair trade mark.", ko: "초콜릿을 살 때 공정 무역 마크를 찾아보자." },
    ],
    glossary: [
      { w: "cocoa", ko: "코코아" }, { w: "even though", ko: "~임에도 불구하고" }, { w: "receive", ko: "받다" }, { w: "Fair trade", ko: "공정 무역" }, { w: "system", ko: "제도, 체계" }, { w: "mark", ko: "표시, 마크" },
    ],
    questions: [
      { q: "코코아 농부들이 가난한 이유는?", choices: ["코코아가 인기가 없어서", "가격의 적은 부분만 받아서", "날씨가 나빠서", "학교가 없어서"], answer: 1, explain: "This is because they receive only a small part of the price." },
      { q: "공정 무역이란?", choices: ["초콜릿을 싸게 파는 것", "농부에게 공정한 가격을 주는 제도", "코코아 수입을 막는 것", "초콜릿을 직접 만드는 것"], answer: 1, explain: "a system that pays farmers a fair price. that은 system을 꾸미는 관계대명사예요." },
      { q: "글쓴이가 독자에게 권하는 것은?", choices: ["초콜릿을 먹지 않기", "공정 무역 마크 찾아보기", "서아프리카 여행하기", "코코아 농사짓기"], answer: 1, explain: "look for the fair trade mark. 마지막 문장이 글쓴이의 제안이에요." },
    ],
  },
  {
    id: "misunderstanding", levelId: "middle", emoji: "💬", title: "메시지 오해",
    sentences: [
      { en: "Last Friday, I sent a message to my best friend, Yuna.", ko: "지난 금요일, 나는 가장 친한 친구 유나에게 메시지를 보냈다." },
      { en: "I wrote, \"I can't go to your party. Sorry.\"", ko: "나는 \"네 파티에 못 가. 미안.\"이라고 썼다." },
      { en: "She didn't reply, and she avoided me at school the next day.", ko: "그녀는 답장하지 않았고, 다음 날 학교에서 나를 피했다." },
      { en: "I felt confused because I didn't know what I had done wrong.", ko: "내가 뭘 잘못했는지 몰라서 나는 혼란스러웠다." },
      { en: "Finally, I asked her, and she said my message sounded cold.", ko: "마침내 내가 물어보자, 그녀는 내 메시지가 차갑게 들렸다고 말했다." },
      { en: "I explained that I had to visit my sick grandfather.", ko: "나는 아프신 할아버지를 뵈러 가야 했다고 설명했다." },
      { en: "Now I know that talking face to face is often better than texting.", ko: "이제 나는 문자보다 직접 얼굴을 보고 이야기하는 것이 더 나을 때가 많다는 것을 안다." },
    ],
    glossary: [
      { w: "reply", ko: "답장하다" }, { w: "avoided", ko: "피했다" }, { w: "confused", ko: "혼란스러운" }, { w: "sounded", ko: "~하게 들렸다" }, { w: "explained", ko: "설명했다" }, { w: "face to face", ko: "얼굴을 마주 보고" }, { w: "texting", ko: "문자 보내기" },
    ],
    questions: [
      { q: "유나가 화가 난 이유는?", choices: ["파티에 늦어서", "메시지가 차갑게 느껴져서", "선물을 안 줘서", "비밀을 말해서"], answer: 1, explain: "she said my message sounded cold. 감각동사 sound + 형용사(cold)예요." },
      { q: "글쓴이가 파티에 못 간 진짜 이유는?", choices: ["숙제가 많아서", "아파서", "할아버지를 뵈러 가야 해서", "가족 여행 때문에"], answer: 2, explain: "I had to visit my sick grandfather." },
      { q: "글쓴이가 깨달은 것은?", choices: ["메시지를 자주 보내야 한다", "직접 만나서 이야기하는 게 더 나을 때가 많다", "파티에 꼭 가야 한다", "친구를 피해야 한다"], answer: 1, explain: "talking face to face is often better than texting. 동명사(talking)가 주어예요." },
    ],
  },
  {
    id: "habits", levelId: "high", emoji: "🔁", title: "습관의 힘",
    sentences: [
      { en: "Habits are actions that we repeat until they become automatic.", ko: "습관은 자동으로 될 때까지 우리가 반복하는 행동이다." },
      { en: "Researchers have found that about 40 percent of our daily actions are habits.", ko: "연구자들은 우리 일상 행동의 약 40퍼센트가 습관이라는 것을 발견했다." },
      { en: "This means that small changes in habits can greatly affect our lives.", ko: "이는 습관의 작은 변화가 우리 삶에 크게 영향을 줄 수 있다는 뜻이다." },
      { en: "To build a new habit, it is helpful to start with a tiny step.", ko: "새 습관을 만들려면 아주 작은 단계부터 시작하는 것이 도움이 된다." },
      { en: "For instance, reading just one page a day is easier than reading a whole chapter.", ko: "예를 들어, 하루에 한 쪽만 읽는 것이 한 장 전체를 읽는 것보다 쉽다." },
    ],
    glossary: [
      { w: "repeat", ko: "반복하다" }, { w: "automatic", ko: "자동적인" }, { w: "Researchers", ko: "연구자들" }, { w: "affect", ko: "영향을 미치다" }, { w: "tiny", ko: "아주 작은" }, { w: "For instance", ko: "예를 들어" }, { w: "chapter", ko: "(책의) 장" },
    ],
    questions: [
      { q: "이 글의 요지는?", choices: ["작은 습관의 변화가 삶을 바꿀 수 있다", "습관은 바꿀 수 없다", "독서는 시간 낭비다", "연구자들은 습관이 없다"], answer: 0, explain: "This means that small changes in habits can greatly affect our lives. 글의 핵심 문장이에요." },
      { q: "일상 행동 중 습관의 비율은?", choices: ["약 4%", "약 14%", "약 40%", "약 80%"], answer: 2, explain: "about 40 percent of our daily actions are habits." },
      { q: "새 습관을 만드는 방법으로 글에서 제안한 것은?", choices: ["아주 작은 단계부터 시작하기", "한 번에 크게 바꾸기", "다른 사람에게 맡기기", "매일 쉬기"], answer: 0, explain: "it is helpful to start with a tiny step. it은 가주어, to start ~가 진주어예요." },
    ],
  },
  {
    id: "bees", levelId: "high", emoji: "🐝", title: "벌과 우리의 음식",
    sentences: [
      { en: "Bees do much more than make honey.", ko: "벌은 꿀을 만드는 것보다 훨씬 많은 일을 한다." },
      { en: "As they fly from flower to flower, they carry pollen, which helps plants produce fruit and seeds.", ko: "벌은 꽃에서 꽃으로 날아다니며 꽃가루를 옮기는데, 이것이 식물이 열매와 씨앗을 맺도록 돕는다." },
      { en: "In fact, about one third of the food we eat depends on this process.", ko: "실제로 우리가 먹는 음식의 약 3분의 1이 이 과정에 달려 있다." },
      { en: "Sadly, bee populations have been decreasing because of pesticides and habitat loss.", ko: "안타깝게도 살충제와 서식지 감소 때문에 벌의 개체 수가 줄어들고 있다." },
      { en: "If bees disappeared, many fruits and vegetables would become rare and expensive.", ko: "만약 벌이 사라진다면, 많은 과일과 채소가 귀해지고 비싸질 것이다." },
    ],
    glossary: [
      { w: "pollen", ko: "꽃가루" }, { w: "produce", ko: "생산하다, 맺다" }, { w: "depends on", ko: "~에 달려 있다" }, { w: "process", ko: "과정" }, { w: "populations", ko: "개체 수" }, { w: "pesticides", ko: "살충제" }, { w: "habitat", ko: "서식지" }, { w: "rare", ko: "드문, 귀한" },
    ],
    questions: [
      { q: "벌이 식물을 돕는 방법은?", choices: ["꽃가루를 옮긴다", "해충을 잡아먹는다", "땅을 판다", "물을 준다"], answer: 0, explain: "they carry pollen, which helps plants produce fruit and seeds. which는 앞 내용 전체를 받아요." },
      { q: "벌의 수가 줄어드는 이유로 언급된 것은?", choices: ["살충제와 서식지 감소", "추운 날씨", "꿀을 너무 많이 먹어서", "새들이 잡아먹어서"], answer: 0, explain: "because of pesticides and habitat loss." },
      { q: "마지막 문장에 쓰인 문법은?", choices: ["가정법 과거", "수동태", "현재완료", "비교급"], answer: 0, explain: "If + 과거(disappeared), would + 동사원형. 현재 사실과 반대되는 가정이에요." },
    ],
  },
  {
    id: "microplastics", levelId: "high", emoji: "🌊", title: "미세 플라스틱",
    sentences: [
      { en: "Microplastics are tiny pieces of plastic smaller than five millimeters.", ko: "미세 플라스틱은 5밀리미터보다 작은 아주 작은 플라스틱 조각이다." },
      { en: "They come from larger plastic items that break down over time, as well as from products like face scrubs.", ko: "이것들은 시간이 지나며 잘게 부서지는 더 큰 플라스틱 제품뿐 아니라, 세안 스크럽 같은 제품에서도 나온다." },
      { en: "Because they are so small, they easily enter rivers and oceans.", ko: "매우 작기 때문에 강과 바다로 쉽게 흘러 들어간다." },
      { en: "Fish and other sea animals often mistake them for food.", ko: "물고기와 다른 바다 동물들은 종종 그것을 먹이로 착각한다." },
      { en: "As a result, microplastics can end up in the seafood that people eat.", ko: "그 결과 미세 플라스틱은 결국 사람이 먹는 해산물에 들어갈 수 있다." },
    ],
    glossary: [
      { w: "tiny", ko: "아주 작은" }, { w: "break down", ko: "분해되다, 잘게 부서지다" }, { w: "as well as", ko: "~뿐만 아니라" }, { w: "mistake", ko: "(mistake A for B) A를 B로 착각하다" }, { w: "end up", ko: "결국 ~하게 되다" },
    ],
    questions: [
      { q: "미세 플라스틱의 크기 기준은?", choices: ["5mm보다 작다", "5cm보다 작다", "1m보다 작다", "눈에 전혀 보이지 않는다"], answer: 0, explain: "smaller than five millimeters. 5밀리미터보다 작은 조각이에요." },
      { q: "바다 동물이 미세 플라스틱을 먹는 이유는?", choices: ["먹이로 착각해서", "맛이 좋아서", "일부러 골라 먹어서", "사람이 줘서"], answer: 0, explain: "mistake them for food. 먹이로 착각한다는 뜻이에요." },
      { q: "이 글의 흐름으로 알맞은 것은?", choices: ["정의 → 생기는 원인 → 생물과 사람에게 미치는 영향", "문제 → 해결책 → 결론", "과거 → 현재 → 미래", "장점 → 단점 → 비교"], answer: 0, explain: "무엇인지(정의) → 어디서 오는지(원인) → 바다 동물과 사람에게 미치는 영향 순서예요." },
    ],
  },
  {
    id: "teensleep", levelId: "high", emoji: "😴", title: "십대의 잠",
    sentences: [
      { en: "Many teenagers find it hard to fall asleep before midnight.", ko: "많은 십대들은 자정 전에 잠드는 것을 어려워한다." },
      { en: "This is not simply because they are lazy or use their phones too much.", ko: "이것은 단순히 그들이 게으르거나 휴대폰을 너무 많이 쓰기 때문만은 아니다." },
      { en: "During the teenage years, the body releases the sleep hormone later at night than it does in childhood.", ko: "십대 시기에는 몸이 어린 시절보다 밤늦게 수면 호르몬을 분비한다." },
      { en: "As a result, teenagers naturally feel sleepy later, yet they still have to wake up early for school.", ko: "그 결과 십대들은 자연스럽게 더 늦게 졸리지만, 여전히 학교 때문에 일찍 일어나야 한다." },
      { en: "Not getting enough sleep can make it difficult to concentrate and remember what they have learned.", ko: "잠을 충분히 자지 못하면 집중하고 배운 것을 기억하기가 어려워질 수 있다." },
      { en: "For this reason, some schools have decided to start classes later in the morning.", ko: "이런 이유로 일부 학교는 아침 수업을 더 늦게 시작하기로 했다." },
    ],
    glossary: [
      { w: "fall asleep", ko: "잠들다" }, { w: "simply", ko: "단순히" }, { w: "releases", ko: "분비하다, 내보내다" }, { w: "hormone", ko: "호르몬" }, { w: "naturally", ko: "자연스럽게" }, { w: "concentrate", ko: "집중하다" }, { w: "For this reason", ko: "이런 이유로" },
    ],
    questions: [
      { q: "십대가 늦게 잠드는 주된 이유로 글에서 설명한 것은?", choices: ["수면 호르몬이 더 늦게 분비되어서", "게을러서", "숙제가 많아서", "밤에 배가 고파서"], answer: 0, explain: "the body releases the sleep hormone later at night. 'not simply because ~'는 '단순히 ~ 때문만은 아니다'라는 부분부정이에요." },
      { q: "잠이 부족할 때 생길 수 있는 문제는?", choices: ["집중과 기억이 어려워진다", "키가 더 큰다", "아침에 일찍 깬다", "배가 고프지 않다"], answer: 0, explain: "can make it difficult to concentrate. it은 가목적어, to concentrate가 진목적어예요." },
      { q: "일부 학교가 내린 결정은?", choices: ["수업을 더 늦게 시작한다", "휴대폰을 금지한다", "숙제를 없앤다", "방학을 늘린다"], answer: 0, explain: "some schools have decided to start classes later. 현재완료(have decided)예요." },
    ],
  },
  {
    id: "placebo", levelId: "high", emoji: "💊", title: "플라시보 효과",
    sentences: [
      { en: "Imagine that a doctor gives you a sugar pill but tells you it is a strong medicine.", ko: "의사가 당신에게 설탕 알약을 주면서 그것이 강한 약이라고 말한다고 상상해 보라." },
      { en: "Surprisingly, you may actually start to feel better.", ko: "놀랍게도 당신은 실제로 나아지기 시작할 수도 있다." },
      { en: "This is called the placebo effect, and it shows how powerful our beliefs can be.", ko: "이것을 플라시보 효과라고 부르며, 이는 우리의 믿음이 얼마나 강력할 수 있는지 보여 준다." },
      { en: "Scientists think that expecting to get better causes the brain to release chemicals that reduce pain.", ko: "과학자들은 나아질 것이라고 기대하는 것이 뇌가 통증을 줄이는 화학 물질을 내보내게 한다고 생각한다." },
      { en: "Because of this effect, new medicines are always compared with placebos in tests.", ko: "이 효과 때문에 새로운 약은 실험에서 항상 가짜 약과 비교된다." },
      { en: "Only if a medicine works better than a placebo is it considered truly effective.", ko: "약이 가짜 약보다 더 잘 들을 때에만 그것은 정말 효과가 있다고 여겨진다." },
    ],
    glossary: [
      { w: "pill", ko: "알약" }, { w: "Surprisingly", ko: "놀랍게도" }, { w: "placebo", ko: "플라시보, 가짜 약" }, { w: "beliefs", ko: "믿음" }, { w: "expecting", ko: "기대하는 것" }, { w: "chemicals", ko: "화학 물질" }, { w: "compared with", ko: "~와 비교되는" }, { w: "effective", ko: "효과적인" },
    ],
    questions: [
      { q: "플라시보 효과가 보여 주는 것은?", choices: ["믿음이 몸에 강한 영향을 줄 수 있다", "설탕은 몸에 해롭다", "의사는 거짓말을 자주 한다", "모든 약은 효과가 없다"], answer: 0, explain: "it shows how powerful our beliefs can be. how + 형용사 + 주어 + 동사의 간접의문문이에요." },
      { q: "새로운 약이 효과가 있다고 인정받으려면?", choices: ["가짜 약보다 더 잘 들어야 한다", "설탕이 들어 있어야 한다", "값이 비싸야 한다", "의사가 추천해야 한다"], answer: 0, explain: "Only if a medicine works better than a placebo is it considered truly effective. Only if ~가 앞에 와서 is it으로 도치되었어요." },
      { q: "'expecting to get better'의 문장 속 역할은?", choices: ["주어(동명사)", "목적어", "형용사", "부사"], answer: 0, explain: "expecting to get better가 주어이고 causes가 동사예요. 동명사 주어는 단수 취급이라 causes예요." },
    ],
  },
  {
    id: "citytrees", levelId: "high", emoji: "🌳", title: "도시의 나무",
    sentences: [
      { en: "In summer, cities are often several degrees hotter than the surrounding countryside.", ko: "여름에 도시는 주변 시골보다 몇 도 더 더운 경우가 많다." },
      { en: "This happens because concrete and asphalt absorb heat during the day and release it at night.", ko: "이는 콘크리트와 아스팔트가 낮 동안 열을 흡수했다가 밤에 내보내기 때문이다." },
      { en: "One simple way to cool a city is to plant more trees.", ko: "도시를 식히는 간단한 방법 하나는 나무를 더 심는 것이다." },
      { en: "Trees not only provide shade but also release water into the air through their leaves.", ko: "나무는 그늘을 줄 뿐 아니라 잎을 통해 공기 중으로 수분을 내보낸다." },
      { en: "Studies show that streets with many trees can be up to ten degrees cooler than streets without them.", ko: "연구에 따르면 나무가 많은 거리는 나무가 없는 거리보다 최대 10도까지 더 시원할 수 있다." },
      { en: "The more trees a city has, the more comfortable life becomes for the people living there.", ko: "도시에 나무가 많을수록 그곳에 사는 사람들의 삶은 더 쾌적해진다." },
    ],
    glossary: [
      { w: "degrees", ko: "(온도의) 도" }, { w: "surrounding", ko: "주변의" }, { w: "countryside", ko: "시골" }, { w: "concrete", ko: "콘크리트" }, { w: "absorb", ko: "흡수하다" }, { w: "shade", ko: "그늘" }, { w: "up to", ko: "최대 ~까지" }, { w: "comfortable", ko: "쾌적한, 편안한" },
    ],
    questions: [
      { q: "도시가 시골보다 더운 이유는?", choices: ["콘크리트와 아스팔트가 열을 흡수했다가 내보내서", "사람이 많이 살아서", "바람이 많이 불어서", "나무가 너무 많아서"], answer: 0, explain: "concrete and asphalt absorb heat during the day and release it at night." },
      { q: "나무가 도시를 시원하게 하는 방법 두 가지는?", choices: ["그늘을 주고 잎으로 수분을 내보낸다", "바람을 막고 비를 내린다", "땅을 덮고 빛을 반사한다", "열을 흡수하고 밤에 내보낸다"], answer: 0, explain: "not only provide shade but also release water. not only A but also B 구문이에요." },
      { q: "마지막 문장에 쓰인 문법은?", choices: ["the 비교급, the 비교급", "가정법 과거", "수동태", "관계부사"], answer: 0, explain: "The more trees ~, the more comfortable ~ : '~할수록 더 …하다'예요." },
    ],
  },
  {
    id: "snscompare", levelId: "high", emoji: "📱", title: "SNS와 비교",
    sentences: [
      { en: "On social media, people usually share only the best moments of their lives.", ko: "소셜 미디어에서 사람들은 보통 삶의 가장 좋은 순간만 공유한다." },
      { en: "We see friends traveling abroad, eating at nice restaurants, and winning awards.", ko: "우리는 친구들이 해외여행을 하고, 멋진 식당에서 식사하고, 상을 받는 모습을 본다." },
      { en: "It is easy to forget that these posts are not the whole picture.", ko: "이런 게시물이 전체 모습이 아니라는 것을 잊기 쉽다." },
      { en: "When we compare our ordinary days with others' highlights, we may feel that our own lives are boring.", ko: "우리의 평범한 하루를 다른 사람들의 하이라이트와 비교하면 우리 삶이 지루하다고 느낄 수 있다." },
      { en: "Experts suggest that we limit our time online and focus on what we are grateful for.", ko: "전문가들은 온라인에서 보내는 시간을 제한하고 감사한 것에 집중하라고 제안한다." },
      { en: "After all, a life that looks perfect on a screen is not necessarily a happy one.", ko: "결국 화면에서 완벽해 보이는 삶이 반드시 행복한 삶인 것은 아니다." },
    ],
    glossary: [
      { w: "social media", ko: "소셜 미디어(SNS)" }, { w: "moments", ko: "순간들" }, { w: "posts", ko: "게시물" }, { w: "the whole picture", ko: "전체 모습" }, { w: "highlights", ko: "가장 좋은 부분, 하이라이트" }, { w: "Experts", ko: "전문가들" }, { w: "grateful", ko: "감사하는" }, { w: "After all", ko: "결국" },
    ],
    questions: [
      { q: "이 글의 요지는?", choices: ["SNS 속 남의 좋은 순간과 내 삶을 비교하지 말자", "SNS를 더 많이 하자", "해외여행을 자주 가자", "상을 많이 받아야 행복하다"], answer: 0, explain: "남의 하이라이트와 나의 평범한 하루를 비교하면 내 삶이 지루하게 느껴진다는 내용이에요." },
      { q: "전문가들이 제안한 것은?", choices: ["온라인 시간을 줄이고 감사한 것에 집중하기", "친구를 더 많이 만들기", "게시물을 매일 올리기", "휴대폰을 바꾸기"], answer: 0, explain: "Experts suggest that we limit ~ and focus ~. 제안 동사 suggest 뒤 that절에 (should) + 동사원형이 왔어요." },
      { q: "'not necessarily'의 뜻은?", choices: ["반드시 ~인 것은 아니다", "절대 ~ 아니다", "항상 ~이다", "거의 ~ 않다"], answer: 0, explain: "not necessarily는 부분부정이에요. 완벽해 보이는 삶이 꼭 행복한 것은 아니라는 뜻이에요." },
    ],
  },
  {
    id: "remote", levelId: "adult", emoji: "💻", title: "재택근무의 명암",
    sentences: [
      { en: "Since 2020, remote work has shifted from a rare benefit to a common arrangement.", ko: "2020년 이후 재택근무는 드문 혜택에서 흔한 근무 형태로 바뀌었다." },
      { en: "Supporters argue that it saves commuting time and gives employees more flexibility.", ko: "지지자들은 재택근무가 출퇴근 시간을 아껴 주고 직원들에게 더 많은 유연성을 준다고 주장한다." },
      { en: "Critics, however, point out that it can weaken teamwork and blur the line between work and personal life.", ko: "그러나 비판하는 사람들은 그것이 팀워크를 약하게 하고 일과 개인 생활의 경계를 흐릴 수 있다고 지적한다." },
      { en: "As a result, many companies are now adopting a hybrid model that combines office and home work.", ko: "그 결과 많은 회사들이 이제 사무실 근무와 재택근무를 결합한 하이브리드 방식을 도입하고 있다." },
    ],
    glossary: [
      { w: "remote work", ko: "재택근무, 원격 근무" }, { w: "shifted", ko: "바뀌었다" }, { w: "arrangement", ko: "방식, 형태" }, { w: "argue", ko: "주장하다" }, { w: "commuting", ko: "통근" }, { w: "flexibility", ko: "유연성" }, { w: "Critics", ko: "비판하는 사람들" }, { w: "blur", ko: "흐리게 하다" }, { w: "adopting", ko: "도입하는" },
    ],
    questions: [
      { q: "재택근무의 장점으로 언급된 것은?", choices: ["통근 시간 절약과 유연성", "팀워크 강화", "사무실 비용 증가", "회의 증가"], answer: 0, explain: "it saves commuting time and gives employees more flexibility." },
      { q: "'however'가 나타내는 흐름은?", choices: ["앞 내용과 반대되는 의견", "앞 내용의 예시", "앞 내용의 결과", "앞 내용의 반복"], answer: 0, explain: "지지자들의 의견(장점) 다음에 비판하는 사람들의 의견(단점)이 이어져요." },
      { q: "글에 따르면 많은 회사들이 택하고 있는 방식은?", choices: ["사무실 근무와 재택근무를 섞는 방식", "완전 재택근무", "완전 사무실 근무", "주 4일 근무"], answer: 0, explain: "a hybrid model that combines office and home work." },
    ],
  },
  {
    id: "procrastinate", levelId: "adult", emoji: "⏳", title: "우리는 왜 미룰까",
    sentences: [
      { en: "Procrastination is often seen as a problem of laziness, but psychologists say it is more about emotions.", ko: "미루기는 흔히 게으름의 문제로 여겨지지만, 심리학자들은 감정의 문제에 더 가깝다고 말한다." },
      { en: "When a task makes us feel anxious or bored, we delay it to escape those feelings.", ko: "어떤 일이 우리를 불안하거나 지루하게 만들면, 우리는 그 감정에서 벗어나려고 일을 미룬다." },
      { en: "Ironically, putting it off only increases our stress later.", ko: "아이러니하게도 일을 미루면 나중에 스트레스만 커진다." },
      { en: "Breaking a task into smaller parts and forgiving yourself for past delays can reduce the urge to procrastinate.", ko: "일을 더 작게 나누고 지난번에 미룬 자신을 용서하면 미루고 싶은 충동을 줄일 수 있다." },
    ],
    glossary: [
      { w: "Procrastination", ko: "미루기" }, { w: "laziness", ko: "게으름" }, { w: "psychologists", ko: "심리학자들" }, { w: "anxious", ko: "불안한" }, { w: "delay", ko: "미루다" }, { w: "escape", ko: "벗어나다" }, { w: "Ironically", ko: "아이러니하게도" }, { w: "putting it off", ko: "그것을 미루는 것" }, { w: "urge", ko: "충동" },
    ],
    questions: [
      { q: "심리학자들이 보는 미루기의 주된 원인은?", choices: ["감정", "게으름", "시간 부족", "체력 부족"], answer: 0, explain: "psychologists say it is more about emotions." },
      { q: "일을 미루는 이유로 글에서 말한 것은?", choices: ["불안하거나 지루한 감정을 피하려고", "일이 너무 쉬워서", "다른 사람이 시켜서", "시간이 남아서"], answer: 0, explain: "we delay it to escape those feelings. to escape는 목적(~하려고)을 나타내요." },
      { q: "'put off'과 뜻이 같은 단어는?", choices: ["delay", "escape", "increase", "forgive"], answer: 0, explain: "put off는 '미루다'로, 둘째 문장의 delay와 같은 뜻이에요." },
    ],
  },
  {
    id: "ai", levelId: "adult", emoji: "🤖", title: "일터의 인공지능",
    sentences: [
      { en: "Artificial intelligence is rapidly changing the way people work.", ko: "인공지능은 사람들이 일하는 방식을 빠르게 바꾸고 있다." },
      { en: "Many routine tasks, such as sorting emails or summarizing reports, can now be automated.", ko: "이메일 분류나 보고서 요약 같은 많은 반복 업무가 이제 자동화될 수 있다." },
      { en: "Some workers fear that they will be replaced, while others see AI as a tool that frees them to focus on creative work.", ko: "어떤 사람들은 자신이 대체될까 두려워하는 반면, 다른 사람들은 AI를 창의적인 일에 집중할 수 있게 해 주는 도구로 본다." },
      { en: "Experts agree that the most valuable skills will be those that machines cannot easily copy, such as empathy and critical thinking.", ko: "전문가들은 공감이나 비판적 사고처럼 기계가 쉽게 흉내 낼 수 없는 능력이 가장 가치 있을 것이라는 데 동의한다." },
    ],
    glossary: [
      { w: "rapidly", ko: "빠르게" }, { w: "routine", ko: "반복적인, 일상적인" }, { w: "automated", ko: "자동화된" }, { w: "replaced", ko: "대체된" }, { w: "while", ko: "~인 반면에" }, { w: "valuable", ko: "가치 있는" }, { w: "empathy", ko: "공감" }, { w: "critical thinking", ko: "비판적 사고" },
    ],
    questions: [
      { q: "자동화될 수 있는 일의 예로 나온 것은?", choices: ["이메일 분류와 보고서 요약", "창의적인 기획", "다른 사람과 공감하기", "팀 이끌기"], answer: 0, explain: "such as sorting emails or summarizing reports. such as 뒤에 예시가 나와요." },
      { q: "셋째 문장에서 'while'이 나타내는 관계는?", choices: ["대조", "시간", "원인", "조건"], answer: 0, explain: "두려워하는 사람들 ↔ 도구로 보는 사람들. 여기서 while은 '~인 반면에'라는 대조예요." },
      { q: "앞으로 가장 가치 있을 능력으로 꼽힌 것은?", choices: ["기계가 흉내 내기 어려운 공감과 비판적 사고", "빠른 타자 속도", "많은 정보를 외우는 능력", "반복 업무를 빨리 처리하는 능력"], answer: 0, explain: "skills ... that machines cannot easily copy, such as empathy and critical thinking." },
    ],
  },
  {
    id: "burnout", levelId: "adult", emoji: "🔋", title: "번아웃",
    sentences: [
      { en: "Burnout is a state of physical and emotional exhaustion caused by long-term stress at work.", ko: "번아웃은 직장에서 오랫동안 받은 스트레스로 생기는 몸과 마음의 탈진 상태다." },
      { en: "People who are burned out often feel tired no matter how much they rest.", ko: "번아웃을 겪는 사람들은 아무리 쉬어도 피곤하다고 느끼는 경우가 많다." },
      { en: "They also tend to lose interest in work they once enjoyed.", ko: "또 한때 즐기던 일에 흥미를 잃는 경향이 있다." },
      { en: "Although many blame themselves, experts point out that heavy workloads and a lack of control are the main causes.", ko: "많은 사람들이 자신을 탓하지만, 전문가들은 과도한 업무량과 통제권 부족이 주된 원인이라고 지적한다." },
      { en: "Setting clear boundaries, such as not checking emails after work, can help prevent it.", ko: "퇴근 후에는 이메일을 확인하지 않는 것처럼 분명한 경계를 정하면 번아웃을 막는 데 도움이 된다." },
    ],
    glossary: [
      { w: "exhaustion", ko: "탈진, 기진맥진" }, { w: "long-term", ko: "장기적인" }, { w: "burned out", ko: "완전히 지친" }, { w: "no matter how", ko: "아무리 ~해도" }, { w: "tend to", ko: "~하는 경향이 있다" }, { w: "blame", ko: "탓하다" }, { w: "workloads", ko: "업무량" }, { w: "a lack of", ko: "~의 부족" }, { w: "boundaries", ko: "경계, 선" },
    ],
    questions: [
      { q: "전문가들이 말하는 번아웃의 주된 원인은?", choices: ["과도한 업무량과 통제권 부족", "개인의 게으름", "운동 부족", "취미가 없는 것"], answer: 0, explain: "experts point out that heavy workloads and a lack of control are the main causes. Although(~이지만) 뒤의 '자신을 탓한다'와 대조돼요." },
      { q: "'no matter how much they rest'의 뜻은?", choices: ["아무리 많이 쉬어도", "쉬는 것이 중요하지 않아서", "얼마나 쉬었는지 몰라서", "충분히 쉬었기 때문에"], answer: 0, explain: "no matter how + 형용사/부사 = 아무리 ~해도 (= however much)." },
      { q: "번아웃을 막는 방법으로 제시된 것은?", choices: ["퇴근 후 이메일을 확인하지 않는 등 경계 정하기", "일을 더 많이 맡기", "휴가를 줄이기", "혼자서 모든 일을 해결하기"], answer: 0, explain: "Setting clear boundaries, such as not checking emails after work. 동명사 Setting이 문장의 주어예요." },
    ],
  },
  {
    id: "inflation", levelId: "adult", emoji: "💹", title: "물가와 금리",
    sentences: [
      { en: "When prices rise across the economy, we call it inflation.", ko: "경제 전반에서 물가가 오르는 것을 인플레이션이라고 부른다." },
      { en: "A little inflation is considered normal, but when it rises too quickly, the money in our wallets buys less.", ko: "약간의 인플레이션은 정상으로 여겨지지만, 너무 빨리 오르면 지갑 속 돈으로 살 수 있는 것이 줄어든다." },
      { en: "To slow it down, central banks usually raise interest rates.", ko: "인플레이션을 늦추기 위해 중앙은행은 보통 금리를 올린다." },
      { en: "Higher rates make borrowing more expensive, so people and companies spend less.", ko: "금리가 오르면 돈을 빌리는 비용이 커져서 사람들과 기업이 지출을 줄인다." },
      { en: "As demand falls, prices are expected to rise more slowly.", ko: "수요가 줄어들면서 물가 상승 속도도 느려질 것으로 예상된다." },
    ],
    glossary: [
      { w: "economy", ko: "경제" }, { w: "inflation", ko: "인플레이션, 물가 상승" }, { w: "is considered", ko: "~로 여겨진다" }, { w: "central banks", ko: "중앙은행들" }, { w: "interest rates", ko: "금리, 이자율" }, { w: "borrowing", ko: "돈을 빌리는 것" }, { w: "demand", ko: "수요" }, { w: "are expected to", ko: "~할 것으로 예상된다" },
    ],
    questions: [
      { q: "중앙은행이 인플레이션을 늦추려고 하는 일은?", choices: ["금리를 올린다", "돈을 더 찍어 낸다", "세금을 없앤다", "물건 값을 정한다"], answer: 0, explain: "To slow it down, central banks usually raise interest rates. To slow는 '~하기 위해'(목적)예요." },
      { q: "금리가 오르면 일어나는 일로 글에 나온 것은?", choices: ["돈을 빌리기 비싸져 지출이 줄어든다", "물건이 더 많이 팔린다", "월급이 바로 오른다", "수요가 늘어난다"], answer: 0, explain: "Higher rates make borrowing more expensive. make + 목적어 + 형용사(5형식) 구조예요." },
      { q: "마지막 문장의 'As'와 같은 뜻으로 쓰인 것은?", choices: ["~하면서, ~함에 따라", "~처럼", "~ 때문에만", "~만큼"], answer: 0, explain: "As demand falls = 수요가 줄어듦에 따라. 두 변화가 함께 일어날 때 쓰는 as예요." },
    ],
  },
  {
    id: "fastfashion", levelId: "adult", emoji: "👕", title: "패스트패션의 대가",
    sentences: [
      { en: "Fast fashion brands release new styles every few weeks at very low prices.", ko: "패스트패션 브랜드는 몇 주마다 아주 싼 가격에 새 스타일을 내놓는다." },
      { en: "This allows consumers to follow trends cheaply, but it comes at a hidden cost.", ko: "이 덕분에 소비자는 유행을 싸게 따라갈 수 있지만, 여기에는 숨은 대가가 따른다." },
      { en: "Producing a single cotton T-shirt is estimated to use about 2,700 liters of water.", ko: "면 티셔츠 한 장을 만드는 데 약 2,700리터의 물이 쓰이는 것으로 추산된다." },
      { en: "What is more, many cheap clothes are thrown away after being worn only a few times.", ko: "게다가 많은 싼 옷이 몇 번 입히고 나서 버려진다." },
      { en: "Buying fewer but better items, and wearing them longer, is one simple way to reduce this waste.", ko: "더 적게, 그러나 더 좋은 옷을 사서 더 오래 입는 것이 이런 낭비를 줄이는 간단한 방법이다." },
    ],
    glossary: [
      { w: "release", ko: "출시하다, 내놓다" }, { w: "consumers", ko: "소비자들" }, { w: "trends", ko: "유행" }, { w: "a hidden cost", ko: "숨은 대가, 숨은 비용" }, { w: "is estimated to", ko: "~하는 것으로 추산된다" }, { w: "What is more", ko: "게다가" }, { w: "thrown away", ko: "버려진" }, { w: "waste", ko: "낭비, 쓰레기" },
    ],
    questions: [
      { q: "이 글의 요지는?", choices: ["싼 옷을 자주 사는 습관에는 환경적 대가가 있다", "패스트패션은 품질이 가장 좋다", "면 티셔츠는 물이 필요 없다", "유행을 빨리 따라가야 한다"], answer: 0, explain: "it comes at a hidden cost 뒤로 물 사용과 버려지는 옷 이야기가 이어져요." },
      { q: "'is estimated to use'에 쓰인 문법은?", choices: ["추정을 나타내는 수동태 + to부정사", "현재완료", "가정법", "관계부사"], answer: 0, explain: "주어 + is estimated / said / expected to ~ = ~하는 것으로 추산된다(전해진다). 뉴스에 자주 나오는 표현이에요." },
      { q: "글쓴이가 권하는 것은?", choices: ["적게 사되 좋은 옷을 사서 오래 입기", "옷을 매주 새로 사기", "면 대신 플라스틱 옷 입기", "옷을 한 번만 입고 기부하기"], answer: 0, explain: "Buying fewer but better items, and wearing them longer, is ~. 동명사 두 개가 주어라서 동사는 is예요." },
    ],
  },
  {
    id: "lifelong", levelId: "adult", emoji: "🧠", title: "어른의 외국어 공부",
    sentences: [
      { en: "Many adults believe it is too late for them to learn a new language.", ko: "많은 어른들은 새 언어를 배우기에는 자신이 너무 늦었다고 믿는다." },
      { en: "It is true that children usually develop better pronunciation.", ko: "아이들이 보통 발음을 더 잘 익히는 것은 사실이다." },
      { en: "However, adults have advantages of their own, such as a larger vocabulary in their first language and better study habits.", ko: "하지만 어른에게는 모국어 어휘가 더 많고 공부 습관이 더 좋다는 나름의 장점이 있다." },
      { en: "Research suggests that what matters most is not age but regular practice.", ko: "연구에 따르면 가장 중요한 것은 나이가 아니라 꾸준한 연습이다." },
      { en: "Studying for fifteen minutes every day is more effective than cramming for three hours once a week.", ko: "매일 15분씩 공부하는 것이 일주일에 한 번 세 시간 몰아서 공부하는 것보다 더 효과적이다." },
    ],
    glossary: [
      { w: "too late", ko: "너무 늦은" }, { w: "pronunciation", ko: "발음" }, { w: "advantages", ko: "장점들" }, { w: "of their own", ko: "그들 나름의" }, { w: "vocabulary", ko: "어휘" }, { w: "what matters most", ko: "가장 중요한 것" }, { w: "regular", ko: "규칙적인, 꾸준한" }, { w: "effective", ko: "효과적인" }, { w: "cramming", ko: "벼락치기 하는 것" },
    ],
    questions: [
      { q: "연구에 따르면 외국어 학습에서 가장 중요한 것은?", choices: ["꾸준한 연습", "어린 나이", "비싼 학원", "타고난 재능"], answer: 0, explain: "what matters most is not age but regular practice. not A but B = A가 아니라 B." },
      { q: "어른이 가진 장점으로 언급된 것은?", choices: ["모국어 어휘가 많고 공부 습관이 좋다", "발음이 더 좋다", "시간이 더 많다", "기억력이 더 좋다"], answer: 0, explain: "such as a larger vocabulary in their first language and better study habits. 발음은 아이들이 더 잘한다고 했어요." },
      { q: "글쓴이가 권하는 공부 방법은?", choices: ["매일 조금씩 공부하기", "일주일에 한 번 몰아서 공부하기", "시험 직전에 벼락치기 하기", "어릴 때만 공부하기"], answer: 0, explain: "Studying for fifteen minutes every day is more effective than cramming ~. 비교급 more effective than이 쓰였어요." },
    ],
  },
];
