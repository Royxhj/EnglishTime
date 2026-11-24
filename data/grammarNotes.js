// 문법 노트 보강 내용: 정리표, 추가 예문, 자주 하는 실수(✗ → ✓), 독해 팁.
const GRAMMAR_NOTES = {
  parts: {
    table: {
      caption: "품사 한눈에 보기",
      head: ["품사", "하는 일", "예"],
      rows: [
        ["명사", "사람·사물·장소의 이름", "book, Mina, school"],
        ["대명사", "명사를 대신함", "I, you, it, they"],
        ["동사", "동작·상태", "run, eat, is"],
        ["형용사", "명사를 꾸밈", "big, happy, red"],
        ["부사", "동사·형용사를 꾸밈", "quickly, very, often"],
        ["전치사", "명사 앞에서 때·장소", "in, on, at, with"],
        ["접속사", "말과 문장을 연결", "and, but, because"],
      ],
    },
    examples: [
      { en: "My brother always eats breakfast quickly.", ko: "내 남동생은 항상 아침을 빨리 먹는다. (always, quickly=부사)" },
      { en: "The red bag on the chair is mine.", ko: "의자 위의 빨간 가방은 내 것이다. (red=형용사, on=전치사)" },
      { en: "She was tired, but she finished her homework.", ko: "그녀는 피곤했지만 숙제를 끝냈다. (but=접속사)" },
    ],
    mistakes: [
      { wrong: "He runs quick.", right: "He runs quickly.", why: "동사 runs를 꾸미는 말은 부사(quickly)여야 해요." },
      { wrong: "She is a beautifully girl.", right: "She is a beautiful girl.", why: "명사 girl을 꾸미는 말은 형용사(beautiful)예요." },
      { wrong: "I was born in May 5.", right: "I was born on May 5.", why: "날짜 앞에는 on, 달·연도 앞에는 in을 써요." },
    ],
    tip: "모르는 단어가 나와도 품사를 알면 뜻을 짐작할 수 있어요. -ly로 끝나면 부사, a/the 바로 뒤에 오면 명사일 가능성이 높아요.",
  },
  patterns: {
    table: {
      caption: "5형식 정리",
      head: ["형식", "구조", "예"],
      rows: [
        ["1형식", "주어 + 동사", "Birds fly."],
        ["2형식", "주어 + 동사 + 보어", "She is a nurse. / He looks tired."],
        ["3형식", "주어 + 동사 + 목적어", "I like pizza."],
        ["4형식", "주어 + 동사 + ~에게 + ~을", "He told me a story."],
        ["5형식", "주어 + 동사 + 목적어 + 보어", "They named the baby Joy."],
      ],
    },
    examples: [
      { en: "The leaves turned yellow.", ko: "나뭇잎이 노랗게 변했다. (2형식: turn + 형용사)" },
      { en: "My uncle sent me a postcard.", ko: "삼촌이 나에게 엽서를 보냈다. (4형식)" },
      { en: "I found the movie boring.", ko: "나는 그 영화가 지루하다고 느꼈다. (5형식)" },
    ],
    mistakes: [
      { wrong: "She looks happily.", right: "She looks happy.", why: "look, seem, become 같은 2형식 동사 뒤에는 형용사 보어가 와요." },
      { wrong: "He gave to me a book.", right: "He gave me a book. / He gave a book to me.", why: "4형식은 '~에게'에 to를 쓰지 않아요. to를 쓰면 3형식 순서로 바뀌어요." },
      { wrong: "The news made me sadly.", right: "The news made me sad.", why: "5형식의 목적격 보어 자리에는 부사가 아니라 형용사가 와요." },
    ],
    tip: "긴 문장은 먼저 동사를 찾고, 동사 뒤에 무엇이 몇 개 오는지 보세요. '누구에게 무엇을'이 보이면 4형식, '무엇을 어떻게'면 5형식이에요.",
  },
  tense: {
    table: {
      caption: "시제 한눈에 보기",
      head: ["시제", "모양", "예"],
      rows: [
        ["현재", "동사(-s)", "She plays tennis."],
        ["과거", "동사-ed / 불규칙", "She played tennis."],
        ["미래", "will + 동사원형", "She will play tennis."],
        ["현재진행", "am/is/are + -ing", "She is playing tennis."],
        ["과거진행", "was/were + -ing", "She was playing tennis."],
        ["현재완료", "have/has + p.p.", "She has played tennis for 3 years."],
      ],
    },
    examples: [
      { en: "The sun rises in the east.", ko: "해는 동쪽에서 뜬다. (변하지 않는 사실 → 현재)" },
      { en: "I was reading when you called.", ko: "네가 전화했을 때 나는 책을 읽고 있었다. (과거진행)" },
      { en: "Have you ever been to Busan?", ko: "부산에 가 본 적 있니? (현재완료-경험)" },
    ],
    mistakes: [
      { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", why: "yesterday, ago, last week처럼 과거의 때를 콕 집는 말은 현재완료와 함께 쓰지 않아요." },
      { wrong: "She live in Seoul.", right: "She lives in Seoul.", why: "주어가 3인칭 단수(she, he, it)면 현재시제 동사에 -s를 붙여요." },
      { wrong: "I am knowing the answer.", right: "I know the answer.", why: "know, like, want 같은 상태 동사는 보통 진행형으로 쓰지 않아요." },
    ],
    tip: "시제는 '언제' 일어난 일인지 알려 줘요. 이야기 글은 보통 과거시제로 흘러가고, 현재완료가 나오면 '지금까지 이어지는 일'이라는 신호예요.",
  },
  modal: {
    table: {
      caption: "조동사의 뜻",
      head: ["조동사", "뜻", "예"],
      rows: [
        ["can", "~할 수 있다 / ~해도 된다", "I can swim."],
        ["may / might", "~해도 된다 / ~일지도 모른다", "It may rain."],
        ["must", "~해야 한다 / ~임에 틀림없다", "You must stop."],
        ["have to", "~해야 한다", "I have to go."],
        ["should", "~하는 게 좋다", "You should rest."],
        ["will / would", "~할 것이다 / ~할 텐데", "I will help you."],
      ],
    },
    examples: [
      { en: "You don't have to bring anything.", ko: "아무것도 가져올 필요 없어. (don't have to = ~할 필요 없다)" },
      { en: "She must be tired after the long trip.", ko: "긴 여행 뒤라 그녀는 피곤한 게 틀림없다. (강한 추측)" },
      { en: "Could you help me with this box?", ko: "이 상자 좀 도와주실 수 있나요? (공손한 부탁)" },
    ],
    mistakes: [
      { wrong: "She cans swim.", right: "She can swim.", why: "조동사에는 -s를 붙이지 않아요." },
      { wrong: "You must to wear a helmet.", right: "You must wear a helmet.", why: "조동사 뒤에는 to 없이 동사원형이 와요. (have to는 예외)" },
      { wrong: "You must not finish it today. (오늘 안 끝내도 돼)", right: "You don't have to finish it today.", why: "must not은 '하면 안 된다'(금지), don't have to는 '할 필요 없다'예요. 뜻이 완전히 달라요." },
    ],
    tip: "조동사는 글쓴이가 얼마나 확신하는지 보여 줘요. must be(틀림없다) → may/might be(~일지도) 순으로 확신이 약해져요. 주장하는 글에서 should가 나오면 글쓴이의 의견이에요.",
  },
  passive: {
    table: {
      caption: "시제별 수동태 모양",
      head: ["시제", "모양", "예"],
      rows: [
        ["현재", "am/is/are + p.p.", "Cars are made here."],
        ["과거", "was/were + p.p.", "The car was made in 2020."],
        ["미래", "will be + p.p.", "It will be made soon."],
        ["현재완료", "have/has been + p.p.", "It has been made."],
        ["조동사", "can/must be + p.p.", "It can be made easily."],
      ],
    },
    examples: [
      { en: "This song is loved by many people.", ko: "이 노래는 많은 사람에게 사랑받는다." },
      { en: "The road was closed because of snow.", ko: "눈 때문에 길이 폐쇄되었다." },
      { en: "The results will be announced tomorrow.", ko: "결과는 내일 발표될 것이다." },
    ],
    mistakes: [
      { wrong: "The window was broke.", right: "The window was broken.", why: "수동태는 be동사 + 과거분사예요. break의 과거분사는 broken이에요." },
      { wrong: "The accident was happened yesterday.", right: "The accident happened yesterday.", why: "happen, arrive, appear처럼 목적어를 갖지 않는 동사는 수동태로 쓸 수 없어요." },
      { wrong: "English is speaking in many countries.", right: "English is spoken in many countries.", why: "be + -ing는 진행형이에요. '쓰인다'는 수동이니 be + p.p.예요." },
    ],
    tip: "수동태 문장은 '무엇이 어떻게 되었는지'가 중심이에요. by ~가 없으면 누가 했는지는 중요하지 않다는 뜻이에요. 뉴스와 설명문에서 특히 자주 나와요.",
  },
  verbals: {
    table: {
      caption: "뒤에 오는 말이 정해진 동사",
      head: ["동사", "뒤에 오는 말", "예"],
      rows: [
        ["want, hope, decide, plan", "to + 동사원형", "I decided to study."],
        ["enjoy, finish, mind, avoid", "동사-ing", "She enjoys reading."],
        ["like, love, start, begin", "둘 다 가능", "It started to rain / raining."],
        ["remember, forget, stop", "둘 다 되지만 뜻이 다름", "stop smoking ↔ stop to smoke"],
      ],
    },
    examples: [
      { en: "My dream is to become a pilot.", ko: "내 꿈은 비행기 조종사가 되는 것이다. (명사 역할 to부정사)" },
      { en: "I have no time to waste.", ko: "나는 낭비할 시간이 없다. (형용사 역할: ~할)" },
      { en: "Remember to lock the door.", ko: "문 잠그는 거 잊지 마. (remember to V: 앞으로 할 일)" },
    ],
    mistakes: [
      { wrong: "I enjoy to swim.", right: "I enjoy swimming.", why: "enjoy는 동명사(-ing)만 목적어로 받아요." },
      { wrong: "He decided going home.", right: "He decided to go home.", why: "decide는 to부정사를 목적어로 받아요." },
      { wrong: "I'm used to get up early.", right: "I'm used to getting up early.", why: "be used to(~에 익숙하다)의 to는 전치사라서 뒤에 -ing가 와요." },
    ],
    tip: "to + 동사가 보이면 '~하는 것', '~할', '~하기 위해' 중 어떤 뜻인지 문맥으로 골라 보세요. 문장 맨 앞의 To ~는 '~하기 위해'인 경우가 많아요.",
  },
  participle: {
    table: {
      caption: "감정을 나타내는 분사 짝꿍",
      head: ["-ing (감정을 일으킴)", "-ed (감정을 느낌)"],
      rows: [
        ["boring 지루하게 하는", "bored 지루한"],
        ["interesting 흥미로운", "interested 흥미를 느끼는"],
        ["exciting 신나게 하는", "excited 신난"],
        ["surprising 놀라운", "surprised 놀란"],
        ["tiring 피곤하게 하는", "tired 피곤한"],
      ],
    },
    examples: [
      { en: "Look at the dancing girls.", ko: "춤추고 있는 소녀들을 봐. (현재분사: ~하고 있는)" },
      { en: "I bought a used car.", ko: "나는 중고차(사용된 차)를 샀다. (과거분사: ~된)" },
      { en: "Feeling tired, she went to bed early.", ko: "피곤해서 그녀는 일찍 잤다. (분사구문)" },
    ],
    mistakes: [
      { wrong: "I am boring in class.", right: "I am bored in class.", why: "내가 지루함을 '느끼는' 거면 bored예요. I am boring은 '나는 지루한 사람이다'가 돼요." },
      { wrong: "The movie was excited.", right: "The movie was exciting.", why: "영화는 신나게 '만드는' 쪽이라 exciting이에요." },
      { wrong: "There is a broke window.", right: "There is a broken window.", why: "명사를 꾸미는 과거분사는 broken이에요. broke는 과거형이에요." },
    ],
    tip: "명사 뒤에 -ing나 p.p. 덩어리가 붙으면 앞 명사를 꾸미는 말이에요. (the man sitting there = 거기 앉아 있는 남자) 이 덩어리를 괄호로 묶으면 진짜 동사가 보여요.",
  },
  clauses: {
    table: {
      caption: "접속사 뜻 정리",
      head: ["관계", "접속사"],
      rows: [
        ["원인·이유", "because, since, as"],
        ["결과", "so, so ~ that"],
        ["대조·양보", "but, although, though, while"],
        ["조건", "if, unless"],
        ["시간", "when, while, before, after, until"],
        ["명사절", "that(~라는 것), if/whether(~인지)"],
      ],
    },
    examples: [
      { en: "I'll wait here until you come back.", ko: "네가 돌아올 때까지 여기서 기다릴게. (until: ~할 때까지)" },
      { en: "Since it was late, we took a taxi.", ko: "늦었기 때문에 우리는 택시를 탔다. (since: ~ 때문에)" },
      { en: "The problem is that we have no time.", ko: "문제는 우리에게 시간이 없다는 것이다. (명사절 that)" },
    ],
    mistakes: [
      { wrong: "Because I was sick. I stayed home.", right: "Because I was sick, I stayed home.", why: "Because 절만으로는 문장이 끝나지 않아요. 주절과 이어 써야 해요." },
      { wrong: "Although it rained, but we played.", right: "Although it rained, we played.", why: "although와 but은 둘 다 '그러나'의 뜻이라 함께 쓰지 않아요." },
      { wrong: "If it will rain tomorrow, I'll stay home.", right: "If it rains tomorrow, I'll stay home.", why: "조건(if)·시간(when) 부사절에서는 미래 일도 현재시제로 써요." },
    ],
    tip: "but, however, although가 나오면 그 뒤에 글쓴이가 진짜 하고 싶은 말이 오는 경우가 많아요. 대조 신호를 놓치지 마세요.",
  },
  relatives: {
    table: {
      caption: "관계사 고르는 법",
      head: ["앞 명사(선행사)", "뒤 문장에서 역할", "관계사"],
      rows: [
        ["사람", "주어", "who (that)"],
        ["사람", "목적어", "whom / who (that, 생략 가능)"],
        ["사물·동물", "주어·목적어", "which (that)"],
        ["사람·사물", "~의", "whose"],
        ["장소 / 시간 / 이유", "뒤 문장이 완전함", "where / when / why"],
        ["(없음)", "~하는 것", "what"],
      ],
    },
    examples: [
      { en: "The cake (that) my mom made was delicious.", ko: "엄마가 만든 케이크는 맛있었다. (목적격 that은 생략 가능)" },
      { en: "I met a girl whose dog can dance.", ko: "나는 개가 춤을 출 수 있는 소녀를 만났다. (whose: ~의)" },
      { en: "This is the reason why I came.", ko: "이것이 내가 온 이유다. (why: 이유)" },
    ],
    mistakes: [
      { wrong: "The man which lives here is kind.", right: "The man who lives here is kind.", why: "사람을 꾸밀 때는 which가 아니라 who(that)를 써요." },
      { wrong: "This is the house where I bought.", right: "This is the house (that) I bought.", why: "bought의 목적어가 빠진 불완전한 문장이라 관계대명사가 와야 해요. where는 뒤 문장이 완전할 때만 써요." },
      { wrong: "I like the book what you gave me.", right: "I like the book (that) you gave me.", why: "what은 선행사를 품고 있어서 앞에 명사(the book)가 있으면 쓸 수 없어요." },
    ],
    tip: "명사 바로 뒤에 who/which/that이 보이면 그 명사를 설명하는 긴 꾸밈말이 시작된 거예요. 관계사절을 괄호로 묶으면 '주어 … 동사'가 한눈에 보여요.",
  },
  comparison: {
    table: {
      caption: "불규칙 비교급·최상급",
      head: ["원급", "비교급", "최상급"],
      rows: [
        ["good / well", "better", "best"],
        ["bad", "worse", "worst"],
        ["many / much", "more", "most"],
        ["little", "less", "least"],
        ["far", "farther / further", "farthest / furthest"],
      ],
    },
    examples: [
      { en: "This box is three times heavier than that one.", ko: "이 상자는 저것보다 세 배 무겁다. (배수 비교)" },
      { en: "He is not as tall as his brother.", ko: "그는 형만큼 키가 크지 않다. (not as ~ as)" },
      { en: "It is getting colder and colder.", ko: "날씨가 점점 더 추워지고 있다. (비교급 and 비교급)" },
    ],
    mistakes: [
      { wrong: "She is more taller than me.", right: "She is taller than me.", why: "-er과 more를 함께 쓰지 않아요." },
      { wrong: "This is the most good movie.", right: "This is the best movie.", why: "good의 최상급은 불규칙 변화 best예요." },
      { wrong: "He is very taller than me.", right: "He is much taller than me.", why: "비교급을 강조할 때는 very가 아니라 much, far, even을 써요." },
    ],
    tip: "비교 표현은 '무엇과 무엇을' 비교하는지 찾는 게 핵심이에요. than 뒤에 비교 대상이 나와요. 최상급이 나오면 글에서 강조하는 핵심 정보일 때가 많아요.",
  },
  subjunctive: {
    table: {
      caption: "가정법 정리",
      head: ["종류", "모양", "뜻"],
      rows: [
        ["직설법 조건", "If + 현재, will + 동사원형", "실제로 일어날 수 있는 일"],
        ["가정법 과거", "If + 과거, would + 동사원형", "지금 사실과 반대"],
        ["가정법 과거완료", "If + had p.p., would have p.p.", "과거 사실과 반대"],
        ["I wish", "I wish + 과거 / had p.p.", "지금 / 과거의 아쉬움"],
        ["as if", "as if + 과거", "마치 ~인 것처럼"],
      ],
    },
    examples: [
      { en: "If I had wings, I would fly to you.", ko: "나에게 날개가 있다면 너에게 날아갈 텐데." },
      { en: "If you had told me, I would have helped you.", ko: "네가 말해 줬더라면 내가 도와줬을 텐데." },
      { en: "He talks as if he were a teacher.", ko: "그는 마치 선생님인 것처럼 말한다." },
    ],
    mistakes: [
      { wrong: "If I am you, I would go.", right: "If I were you, I would go.", why: "지금 사실과 반대인 가정은 과거형(were)을 써요." },
      { wrong: "If I had known, I would tell you.", right: "If I had known, I would have told you.", why: "과거 사실을 반대로 가정했으면 주절도 would have p.p.로 맞춰요." },
      { wrong: "I wish I can fly.", right: "I wish I could fly.", why: "I wish 뒤에는 과거형(could)을 써서 이룰 수 없는 소망을 나타내요." },
    ],
    tip: "If 문장의 동사가 '한 시제 더 과거'로 쓰였으면 사실이 아니라는 뜻이에요. If he were rich는 '그는 부자가 아니다'를 거꾸로 말하는 거예요.",
  },
  special: {
    table: {
      caption: "특수구문 알아보기",
      head: ["구문", "신호", "예"],
      rows: [
        ["부정어 도치", "Never, Rarely, Little, Not only가 맨 앞", "Never have I seen it."],
        ["Only 도치", "Only + 부사(구)가 맨 앞", "Only then did I understand."],
        ["강조", "It is/was ~ that …", "It was Tom that called."],
        ["동격", "명사, 명사 / the fact that ~", "Seoul, the capital of Korea"],
        ["생략", "when/if/while 뒤 주어+be 생략", "When (you are) ready, call me."],
      ],
    },
    examples: [
      { en: "Little did I know what would happen.", ko: "무슨 일이 일어날지 나는 전혀 몰랐다. (Little 도치)" },
      { en: "It was in the library that I found the book.", ko: "내가 그 책을 찾은 곳은 바로 도서관이었다. (장소 강조)" },
      { en: "The idea that we can live on Mars is exciting.", ko: "우리가 화성에서 살 수 있다는 생각은 흥미롭다. (동격 that)" },
    ],
    mistakes: [
      { wrong: "Never I have seen such a thing.", right: "Never have I seen such a thing.", why: "부정어가 문장 앞에 오면 조동사가 주어 앞으로 가요." },
      { wrong: "Only then I understood.", right: "Only then did I understand.", why: "Only + 부사가 앞에 오면 도치되고, 일반동사는 did를 써서 바꿔요." },
      { wrong: "It was Tom who he broke the window.", right: "It was Tom who broke the window.", why: "강조 구문에서 강조한 말(Tom)을 who/that 뒤에 다시 쓰지 않아요." },
    ],
    tip: "문장이 Never, Not only, Only로 시작하고 조동사가 주어보다 먼저 나오면 도치예요. 원래 순서(I have never seen)로 바꿔 읽으면 쉽게 이해돼요.",
  },
};
