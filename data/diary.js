// 📓 영어 일기: 문장 틀의 빈칸({})에 알맞은 표현을 골라 3~4줄 일기를 완성한다.
// 줄마다 en · ko에 {}가 하나씩 있고, 고른 표현의 영어 · 한국어가 그 자리에 들어간다.
const DIARY_TEMPLATES = [
  {
    id: "myday",
    emoji: "☀️",
    title: "오늘 한 일",
    lines: [
      {
        en: "Today I {}.",
        ko: "오늘 나는 {}.",
        options: [["played soccer", "축구를 했어요"], ["went to the library", "도서관에 갔어요"], ["visited my grandma", "할머니 댁에 갔어요"], ["made cookies", "쿠키를 만들었어요"], ["watched a movie", "영화를 봤어요"], ["rode my bike", "자전거를 탔어요"], ["cleaned my room", "방을 청소했어요"], ["read a fun book", "재미있는 책을 읽었어요"]],
      },
      {
        en: "I was with {}.",
        ko: "{} 함께였어요.",
        options: [["my family", "가족과"], ["my friends", "친구들과"], ["my mom", "엄마와"], ["my dad", "아빠와"], ["my brother", "형제와"], ["my sister", "자매와"], ["my dog", "강아지와"]],
      },
      {
        en: "It was {}.",
        ko: "정말 {}.",
        options: [["fun", "재미있었어요"], ["great", "최고였어요"], ["exciting", "신났어요"], ["interesting", "흥미로웠어요"], ["boring", "지루했어요"], ["tiring", "힘들었어요"]],
      },
      {
        en: "Tomorrow I want to {}.",
        ko: "내일은 {} 싶어요.",
        options: [["play again", "또 놀고"], ["read more books", "책을 더 읽고"], ["go to the park", "공원에 가고"], ["sleep late", "늦잠 자고"], ["help my mom", "엄마를 돕고"], ["eat pizza", "피자를 먹고"]],
      },
    ],
  },
  {
    id: "feelings",
    emoji: "🌦️",
    title: "날씨와 기분",
    lines: [
      {
        en: "Today it was {}.",
        ko: "오늘은 {}.",
        options: [["sunny", "맑았어요"], ["rainy", "비가 왔어요"], ["cloudy", "흐렸어요"], ["snowy", "눈이 왔어요"], ["windy", "바람이 불었어요"], ["very hot", "아주 더웠어요"], ["very cold", "아주 추웠어요"]],
      },
      {
        en: "I felt {}.",
        ko: "나는 {}.",
        options: [["happy", "기분이 좋았어요"], ["sad", "슬펐어요"], ["tired", "피곤했어요"], ["excited", "신났어요"], ["angry", "화가 났어요"], ["bored", "심심했어요"], ["proud", "뿌듯했어요"]],
      },
      {
        en: "That's because {}.",
        ko: "왜냐하면 {}.",
        options: [["I got a good score", "좋은 점수를 받았기 때문이에요"], ["I lost a game", "게임에서 졌기 때문이에요"], ["my friend helped me", "친구가 도와줬기 때문이에요"], ["I had a lot of homework", "숙제가 많았기 때문이에요"], ["we had pizza for dinner", "저녁으로 피자를 먹었기 때문이에요"], ["I couldn't play outside", "밖에서 놀 수 없었기 때문이에요"]],
      },
      {
        en: "Tomorrow will be {}.",
        ko: "내일은 {}.",
        options: [["a better day", "더 좋은 날일 거예요"], ["a fun day", "재미있는 날일 거예요"], ["a busy day", "바쁜 날일 거예요"], ["a great day", "멋진 날일 거예요"]],
      },
    ],
  },
  {
    id: "weekend",
    emoji: "🎡",
    title: "주말 이야기",
    lines: [
      {
        en: "Last weekend, I went to {}.",
        ko: "지난 주말에 나는 {} 갔어요.",
        options: [["the beach", "바닷가에"], ["the zoo", "동물원에"], ["the mountains", "산에"], ["a museum", "박물관에"], ["my cousin's house", "사촌 집에"], ["an amusement park", "놀이공원에"], ["a water park", "워터파크에"]],
      },
      {
        en: "There, I {}.",
        ko: "그곳에서 나는 {}.",
        options: [["saw many animals", "동물을 많이 봤어요"], ["swam in the sea", "바다에서 수영했어요"], ["ate delicious food", "맛있는 음식을 먹었어요"], ["took a lot of pictures", "사진을 많이 찍었어요"], ["rode a roller coaster", "롤러코스터를 탔어요"], ["played with my cousin", "사촌이랑 놀았어요"]],
      },
      {
        en: "The best part was {}.",
        ko: "가장 좋았던 건 {}.",
        options: [["the food", "음식이었어요"], ["the animals", "동물들이었어요"], ["the view", "경치였어요"], ["the rides", "놀이 기구였어요"], ["playing together", "함께 논 것이었어요"]],
      },
      {
        en: "I want to go there {}.",
        ko: "나는 거기에 {} 가고 싶어요.",
        options: [["again", "또"], ["next month", "다음 달에"], ["with my friends", "친구들이랑"], ["every weekend", "주말마다"]],
      },
    ],
  },
  {
    id: "favorite",
    emoji: "💖",
    title: "내가 좋아하는 것",
    lines: [
      {
        en: "My favorite food is {}.",
        ko: "내가 제일 좋아하는 음식은 {}.",
        options: [["pizza", "피자예요"], ["kimchi fried rice", "김치볶음밥이에요"], ["fried chicken", "치킨이에요"], ["ice cream", "아이스크림이에요"], ["tteokbokki", "떡볶이예요"], ["spaghetti", "스파게티예요"], ["dumplings", "만두예요"]],
      },
      {
        en: "My favorite animal is {}.",
        ko: "내가 제일 좋아하는 동물은 {}.",
        options: [["a dog", "강아지예요"], ["a cat", "고양이예요"], ["a panda", "판다예요"], ["a rabbit", "토끼예요"], ["a dolphin", "돌고래예요"], ["a tiger", "호랑이예요"], ["a frog", "개구리예요"]],
      },
      {
        en: "I like it because it is {}.",
        ko: "왜냐하면 {}.",
        options: [["cute", "귀엽기 때문이에요"], ["cool", "멋지기 때문이에요"], ["smart", "똑똑하기 때문이에요"], ["funny", "웃기기 때문이에요"], ["strong", "힘이 세기 때문이에요"]],
      },
      {
        en: "In my free time, I like to {}.",
        ko: "쉬는 시간에 나는 {} 좋아해요.",
        options: [["draw pictures", "그림 그리는 것을"], ["play games", "게임하는 것을"], ["read comics", "만화책 읽는 것을"], ["build with blocks", "블록 쌓는 것을"], ["dance", "춤추는 것을"], ["sing songs", "노래 부르는 것을"]],
      },
    ],
  },
  {
    id: "family",
    emoji: "👨‍👩‍👧",
    title: "우리 가족",
    lines: [
      {
        en: "There are {} people in my family.",
        ko: "우리 가족은 {}이에요.",
        options: [["three", "세 명"], ["four", "네 명"], ["five", "다섯 명"], ["six", "여섯 명"]],
      },
      {
        en: "My {} is very kind.",
        ko: "우리 {} 아주 다정해요.",
        options: [["mom", "엄마는"], ["dad", "아빠는"], ["grandma", "할머니는"], ["grandpa", "할아버지는"], ["brother", "형제는"], ["sister", "자매는"]],
      },
      {
        en: "We like to {} together.",
        ko: "우리는 함께 {} 좋아해요.",
        options: [["eat dinner", "저녁 먹는 것을"], ["watch movies", "영화 보는 것을"], ["go camping", "캠핑 가는 것을"], ["play board games", "보드게임 하는 것을"], ["take walks", "산책하는 것을"], ["cook", "요리하는 것을"]],
      },
      {
        en: "I love my family {}.",
        ko: "나는 우리 가족을 {} 사랑해요.",
        options: [["very much", "정말 많이"], ["so much", "너무너무"], ["more than anything", "세상에서 제일"]],
      },
    ],
  },
  {
    id: "dream",
    emoji: "🌠",
    title: "나의 꿈",
    lines: [
      {
        en: "I want to be {} in the future.",
        ko: "나는 커서 {} 되고 싶어요.",
        options: [["a doctor", "의사가"], ["a teacher", "선생님이"], ["a scientist", "과학자가"], ["a soccer player", "축구 선수가"], ["a singer", "가수가"], ["a cook", "요리사가"], ["a YouTuber", "유튜버가"], ["an astronaut", "우주 비행사가"], ["a game designer", "게임 개발자가"]],
      },
      {
        en: "That's because I want to {}.",
        ko: "왜냐하면 {} 싶기 때문이에요.",
        options: [["help people", "사람들을 돕고"], ["make new things", "새로운 것을 만들고"], ["travel around the world", "세계를 여행하고"], ["make people happy", "사람들을 행복하게 하고"], ["learn more", "더 많이 배우고"]],
      },
      {
        en: "So I will {} every day.",
        ko: "그래서 나는 매일 {} 거예요.",
        options: [["study hard", "열심히 공부할"], ["practice", "연습할"], ["read books", "책을 읽을"], ["exercise", "운동할"], ["learn English", "영어를 배울"]],
      },
    ],
  },
];
