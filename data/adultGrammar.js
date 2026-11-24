// 성인 문법: 학교 문법을 마친 어른이 실제로 쓰면서 헷갈리는 것과 자연스럽고 정중한 영어.
// highGrammar.js 뒤에 불러온다. id는 "a-"로 시작한다.
BASIC_TOPICS.push(
  // ── 성인 ①: 헷갈리는 기본기 바로잡기 ──
  {
    id: "a-perfect-past",
    emoji: "🕰️",
    title: "I lost vs I have lost",
    subtitle: "과거와 현재완료, 언제 무엇을 쓸까",
    grade: "성인1",
    slides: [
      {
        emoji: "📅",
        say: "<b>과거</b>는 끝난 때가 분명한 일이에요. yesterday, last week, in 2020, ago처럼 <b>지나간 때</b>를 말하는 말이 있으면 반드시 과거를 써요.",
        pattern: "yesterday / last ~ / ~ ago / in 2020 → 과거",
        examples: [
          { en: "I met him yesterday.", ko: "나는 어제 그를 만났다.", emoji: "🤝" },
          { en: "She joined the company two years ago.", ko: "그녀는 2년 전에 회사에 들어왔다.", emoji: "🏢" },
        ],
      },
      {
        emoji: "🔗",
        say: "<b>현재완료</b>는 과거의 일이 <b>지금과 이어져 있을 때</b> 써요. 언제인지는 중요하지 않고 '그래서 지금 어떤지'가 중요해요. I have lost my key는 '열쇠를 잃어버려서 지금 없다'는 뜻이에요.",
        pattern: "have / has p.p. = 과거 일 + 지금 상태",
        examples: [
          { en: "I have lost my key.", ko: "열쇠를 잃어버렸어. (그래서 지금 없어)", emoji: "🔑" },
          { en: "I lost my key last night.", ko: "어젯밤에 열쇠를 잃어버렸어. (때가 중요)", emoji: "🌙" },
          { en: "Have you ever been to Japan?", ko: "일본에 가 본 적 있어요?", emoji: "🗾" },
        ],
      },
      {
        emoji: "⚠️",
        say: "한국어로는 둘 다 '~했다'라서 헷갈려요. <b>When</b>으로 묻는 질문에도 현재완료를 쓸 수 없어요. When did you ~?로 물어요. 반대로 just, already, yet, so far, recently는 현재완료와 잘 어울려요.",
        pattern: "When did you ~? (O) · When have you ~? (X)",
        examples: [
          { en: "When did you arrive?", ko: "언제 도착했어요?", emoji: "🛬" },
          { en: "I have already sent the email.", ko: "이메일은 이미 보냈어요.", emoji: "📧" },
          { en: "We haven't decided yet.", ko: "아직 정하지 않았어요.", emoji: "🤔" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 때가 분명하면 <b>과거</b>, 지금과 이어진 결과·경험이면 <b>현재완료</b>. ago, yesterday, When 질문에는 현재완료를 쓰지 않아요!",
        pattern: "과거 = 끝난 때 · 현재완료 = 지금과 연결",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ her at the conference last month.", ko: "나는 지난달 학회에서 그녀를 만났다.", choices: ["met", "have met"], answer: 0, hint: "last month처럼 지난 때가 있으면 과거예요." },
      { type: "choose", q: "I ___ my wallet. Can you lend me some money?", ko: "지갑을 잃어버렸어. 돈 좀 빌려줄래?", choices: ["have lost", "lose"], answer: 0, hint: "잃어버려서 지금 없으니 현재완료예요." },
      { type: "choose", q: "When ___ you move to Seoul?", ko: "서울로 언제 이사 왔어요?", choices: ["did", "have"], answer: 0, hint: "When 질문은 과거로 물어요." },
      { type: "choose", q: "We ___ finished the report yet.", ko: "우리는 아직 보고서를 끝내지 못했다.", choices: ["haven't", "didn't"], answer: 0, hint: "yet은 현재완료와 잘 어울려요." },
      { type: "choose", q: "She ___ here since 2019.", ko: "그녀는 2019년부터 여기서 일하고 있다.", choices: ["has worked", "worked"], answer: 0, hint: "since는 지금까지 이어지는 일이라 현재완료예요." },
      { type: "order", words: ["Have", "you", "ever", "been", "to", "London?"], ko: "런던에 가 본 적 있어요?" },
    ],
  },
  {
    id: "a-future",
    emoji: "🔮",
    title: "will · be going to · be -ing",
    subtitle: "미래를 말하는 세 가지 방법",
    grade: "성인1",
    slides: [
      {
        emoji: "💡",
        say: "<b>will</b>은 말하는 순간 <b>그 자리에서 정한 일</b>이나 약속, 단순한 예측에 써요. 전화가 울리면 \"I'll get it.\"(내가 받을게)이라고 하죠.",
        pattern: "will + 동사원형 = 즉석 결정 · 약속 · 예측",
        examples: [
          { en: "I'll get it.", ko: "제가 받을게요.", emoji: "📞" },
          { en: "I'll send you the file tonight.", ko: "오늘 밤에 파일 보내 드릴게요.", emoji: "📎" },
          { en: "I think it will rain.", ko: "비가 올 것 같아요.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "🗓️",
        say: "<b>be going to</b>는 <b>미리 마음먹은 계획</b>이나, 지금 보이는 증거로 하는 예측이에요. <b>be -ing</b>(현재진행)는 날짜·장소까지 <b>정해 둔 약속·일정</b>에 써요.",
        pattern: "be going to = 계획 · be -ing = 확정된 약속",
        examples: [
          { en: "I'm going to learn Spanish this year.", ko: "올해는 스페인어를 배울 거예요.", emoji: "🇪🇸" },
          { en: "Look at those clouds. It's going to rain.", ko: "저 구름 좀 봐. 비가 오겠어.", emoji: "☁️" },
          { en: "I'm meeting the client at three.", ko: "3시에 고객을 만나기로 했어요.", emoji: "🤝" },
        ],
      },
      {
        emoji: "⏱️",
        say: "<b>be about to</b>는 '<b>막 ~하려는 참이다</b>'예요. 그리고 시간·조건을 말하는 when, if, as soon as 뒤에서는 미래라도 <b>현재형</b>을 써요.",
        pattern: "be about to ~ · When I arrive (O) / When I will arrive (X)",
        examples: [
          { en: "The meeting is about to start.", ko: "회의가 막 시작하려고 해요.", emoji: "🔔" },
          { en: "I'll call you when I arrive.", ko: "도착하면 전화할게요.", emoji: "📲" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 지금 정하면 <b>will</b>, 미리 계획했으면 <b>be going to</b>, 약속이 잡혀 있으면 <b>be -ing</b>. when·if 뒤에는 현재형!",
        pattern: "will · be going to · be -ing · be about to",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "The phone is ringing. I ___ answer it.", ko: "전화 울리네요. 제가 받을게요.", choices: ["will", "am going to"], answer: 0, hint: "그 자리에서 정한 일은 will이에요." },
      { type: "choose", q: "I'm ___ visit my parents this weekend. I bought the tickets.", ko: "이번 주말에 부모님 댁에 갈 거야. 표도 샀어.", choices: ["going to", "about to"], answer: 0, hint: "미리 계획한 일이에요." },
      { type: "choose", q: "I ___ dinner with Mina tomorrow at 7.", ko: "내일 7시에 미나랑 저녁 먹기로 했어.", choices: ["am having", "have had"], answer: 0, hint: "날짜와 시간까지 정한 약속은 be -ing예요." },
      { type: "choose", q: "Hurry! The train is about ___ leave.", ko: "서둘러! 기차가 막 떠나려고 해.", choices: ["to", "for"], answer: 0, hint: "be about to + 동사원형이에요." },
      { type: "choose", q: "I'll let you know as soon as I ___ the results.", ko: "결과를 받는 대로 알려 드릴게요.", choices: ["get", "will get"], answer: 0, hint: "as soon as 뒤에는 미래라도 현재형이에요." },
      { type: "order", words: ["I'll", "call", "you", "when", "I", "arrive."], ko: "도착하면 전화할게요." },
    ],
  },
  {
    id: "a-used-to",
    emoji: "🔄",
    title: "used to · be used to -ing",
    subtitle: "예전에 ~했다 / ~에 익숙하다",
    grade: "성인1",
    slides: [
      {
        emoji: "📼",
        say: "<b>used to + 동사원형</b>은 '<b>예전에는 ~했다</b> (지금은 안 한다)'예요. 지난 습관이나 상태를 말해요.",
        pattern: "used to + 동사원형 = 예전에는 ~했다",
        examples: [
          { en: "I used to smoke, but I quit.", ko: "예전엔 담배를 피웠는데 끊었어요.", emoji: "🚭" },
          { en: "There used to be a bakery here.", ko: "여기에 예전엔 빵집이 있었어요.", emoji: "🥐" },
          { en: "Did you use to play the piano?", ko: "예전에 피아노 쳤어요?", emoji: "🎹" },
        ],
      },
      {
        emoji: "🛋️",
        say: "<b>be used to + 명사/-ing</b>는 '<b>~에 익숙하다</b>'예요. 여기서 to는 전치사라서 뒤에 동명사(-ing)가 와요. 익숙해지는 과정은 <b>get used to -ing</b>예요.",
        pattern: "be used to -ing = 익숙하다 · get used to -ing = 익숙해지다",
        examples: [
          { en: "I'm used to working late.", ko: "나는 늦게까지 일하는 데 익숙해요.", emoji: "🌙" },
          { en: "You'll get used to driving on the left.", ko: "왼쪽으로 운전하는 데 곧 익숙해질 거예요.", emoji: "🚗" },
        ],
      },
      {
        emoji: "🧪",
        say: "모양이 비슷한 <b>be used to + 동사원형</b>은 '<b>~하는 데 쓰이다</b>'라는 수동태예요. 앞에 사람이 오는지 물건이 오는지 보면 구별돼요.",
        pattern: "This knife is used to cut bread. = 빵 자르는 데 쓰인다",
        examples: [
          { en: "This app is used to track expenses.", ko: "이 앱은 지출을 기록하는 데 쓰여요.", emoji: "📱" },
          { en: "She is used to speaking in public.", ko: "그녀는 사람들 앞에서 말하는 데 익숙해요.", emoji: "🎤" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>used to 동사</b> = 예전엔 ~했다, <b>be used to -ing</b> = ~에 익숙하다, <b>get used to -ing</b> = ~에 익숙해지다!",
        pattern: "used to do · be used to doing · get used to doing",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I used to ___ in Busan when I was a child.", ko: "어릴 때 부산에 살았었어요.", choices: ["live", "living"], answer: 0, hint: "used to + 동사원형 = 예전에는 ~했다." },
      { type: "choose", q: "I'm used to ___ up early.", ko: "나는 일찍 일어나는 데 익숙해요.", choices: ["getting", "get"], answer: 0, hint: "be used to의 to는 전치사라 -ing가 와요." },
      { type: "choose", q: "It took me a month to ___ used to the new system.", ko: "새 시스템에 익숙해지는 데 한 달 걸렸어요.", choices: ["get", "use"], answer: 0, hint: "익숙해지는 과정은 get used to예요." },
      { type: "choose", q: "There ___ to be a park near my office.", ko: "회사 근처에 예전엔 공원이 있었어요.", choices: ["used", "was used"], answer: 0, hint: "There used to be ~ = 예전엔 ~이 있었다." },
      { type: "choose", q: "This software is used ___ customer data.", ko: "이 소프트웨어는 고객 데이터를 관리하는 데 쓰인다.", choices: ["to manage", "to managing"], answer: 0, hint: "물건 + be used to 동사원형 = ~하는 데 쓰이다." },
      { type: "order", words: ["I'm", "not", "used", "to", "working", "from", "home."], ko: "나는 재택근무가 익숙하지 않아요." },
    ],
  },
  {
    id: "a-articles",
    emoji: "🅰️",
    title: "a · the · 아무것도 없이",
    subtitle: "관사 실전: 언제 the를 붙일까",
    grade: "성인1",
    slides: [
      {
        emoji: "👆",
        say: "처음 말하는 <b>셀 수 있는 것 하나</b>에는 <b>a / an</b>, 듣는 사람도 <b>어느 것인지 아는 것</b>에는 <b>the</b>를 써요. 한 번 말한 것을 다시 말할 때도 the예요.",
        pattern: "a + 처음 나온 하나 → the + 이미 아는 그것",
        examples: [
          { en: "I bought a laptop. The laptop is very light.", ko: "노트북을 하나 샀어요. 그 노트북은 아주 가벼워요.", emoji: "💻" },
          { en: "Could you close the door?", ko: "문 좀 닫아 줄래요? (지금 열린 그 문)", emoji: "🚪" },
        ],
      },
      {
        emoji: "🌍",
        say: "<b>하나뿐인 것</b>(the sun, the internet), <b>최상급</b>(the best), <b>서수</b>(the first), <b>the same</b>, 악기 연주(play the piano)에는 the를 써요.",
        pattern: "the sun · the best · the first · the same · play the guitar",
        examples: [
          { en: "This is the best restaurant in town.", ko: "여기가 동네에서 제일 좋은 식당이에요.", emoji: "🍽️" },
          { en: "We have the same opinion.", ko: "우리는 의견이 같아요.", emoji: "🤝" },
        ],
      },
      {
        emoji: "🚫",
        say: "<b>일반적인 것</b>을 말할 때는 복수형이나 셀 수 없는 명사에 관사를 붙이지 않아요. 식사(breakfast), 운동 경기(play soccer), 교통수단(by bus), 원래 목적으로 가는 장소(go to school, go to bed)도 관사가 없어요.",
        pattern: "I like dogs. · by bus · have lunch · go to work",
        examples: [
          { en: "Coffee keeps me awake.", ko: "커피는 나를 깨어 있게 해요. (커피 전반)", emoji: "☕" },
          { en: "I go to work by subway.", ko: "나는 지하철로 출근해요.", emoji: "🚇" },
          { en: "Let's have lunch together.", ko: "같이 점심 먹어요.", emoji: "🥗" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 처음 나온 하나는 <b>a</b>, 서로 아는 그것·하나뿐인 것은 <b>the</b>, 일반적인 것·식사·교통수단은 <b>관사 없이</b>!",
        pattern: "a 하나 · the 그것 · 관사 없음 = 일반적인 것",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I saw ___ interesting movie last night.", ko: "어젯밤 재미있는 영화를 한 편 봤어요.", choices: ["an", "the", "a"], answer: 0, hint: "처음 나온 하나이고 interesting이 모음 소리로 시작해요." },
      { type: "choose", q: "Can you turn off ___ lights, please?", ko: "(이 방의) 불 좀 꺼 줄래요?", choices: ["the", "a"], answer: 0, hint: "서로 아는 그 불이에요." },
      { type: "choose", q: "She is ___ smartest person on our team.", ko: "그녀는 우리 팀에서 가장 똑똑한 사람이에요.", choices: ["the", "a"], answer: 0, hint: "최상급 앞에는 the예요." },
      { type: "choose", q: "I usually go to work ___ bus.", ko: "나는 보통 버스로 출근해요.", choices: ["by", "by the"], answer: 0, hint: "by + 교통수단에는 관사가 없어요." },
      { type: "choose", q: "___ are loyal animals.", ko: "개는 충성스러운 동물이다. (개 전반)", choices: ["Dogs", "The dog's"], answer: 0, hint: "일반적인 것은 관사 없이 복수형으로 말해요." },
      { type: "order", words: ["I", "play", "the", "guitar", "on", "weekends."], ko: "나는 주말마다 기타를 쳐요." },
    ],
  },
  {
    id: "a-few-little",
    emoji: "🧮",
    title: "few · a few · little · a little",
    subtitle: "수와 양을 정확하게 말하기",
    grade: "성인1",
    slides: [
      {
        emoji: "🔢",
        say: "셀 수 있는 복수 명사에는 <b>few / a few</b>, 셀 수 없는 명사에는 <b>little / a little</b>을 써요. <b>a가 있으면 '조금 있다'</b>(긍정), <b>a가 없으면 '거의 없다'</b>(부정)예요.",
        pattern: "a few / a little = 조금 있다 · few / little = 거의 없다",
        examples: [
          { en: "I have a few questions.", ko: "질문이 몇 가지 있어요.", emoji: "🙋" },
          { en: "Few people came to the meeting.", ko: "회의에 온 사람이 거의 없었어요.", emoji: "🪑" },
          { en: "There is little time left.", ko: "남은 시간이 거의 없어요.", emoji: "⏳" },
        ],
      },
      {
        emoji: "⚖️",
        say: "셀 수 있는 것은 <b>many, a number of, fewer</b>, 셀 수 없는 것은 <b>much, an amount of, less</b>와 어울려요. 정확한 글에서는 'less people'이 아니라 <b>fewer people</b>이에요.",
        pattern: "many / fewer + 복수 명사 · much / less + 셀 수 없는 명사",
        examples: [
          { en: "We need fewer meetings and less paperwork.", ko: "회의는 줄이고 서류 작업도 줄여야 해요.", emoji: "📄" },
          { en: "A large number of customers complained.", ko: "많은 고객이 불만을 제기했어요.", emoji: "📢" },
        ],
      },
      {
        emoji: "💡",
        say: "information, advice, furniture, equipment, news는 한국어로는 셀 것 같지만 영어에서는 <b>셀 수 없는 명사</b>예요. -s를 붙이지 않고, 셀 때는 a piece of를 써요.",
        pattern: "much information · a piece of advice · (X) advices",
        examples: [
          { en: "Can I give you a piece of advice?", ko: "조언 하나 해도 될까요?", emoji: "🗣️" },
          { en: "We don't have much information yet.", ko: "아직 정보가 많지 않아요.", emoji: "📊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 셀 수 있으면 <b>few · many · fewer</b>, 셀 수 없으면 <b>little · much · less</b>. a가 붙으면 '조금 있다', 없으면 '거의 없다'!",
        pattern: "a few / a little (있다) ↔ few / little (거의 없다)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Don't worry. We still have ___ time.", ko: "걱정 마요. 아직 시간이 조금 있어요.", choices: ["a little", "a few", "few"], answer: 0, hint: "time은 셀 수 없고, '조금 있다'예요." },
      { type: "choose", q: "Very ___ people know about this plan.", ko: "이 계획을 아는 사람은 거의 없어요.", choices: ["few", "little"], answer: 0, hint: "people은 셀 수 있고 '거의 없다'예요." },
      { type: "choose", q: "There were ___ cars on the road than usual.", ko: "길에 차가 평소보다 적었다.", choices: ["fewer", "less"], answer: 0, hint: "셀 수 있는 복수 명사에는 fewer예요." },
      { type: "choose", q: "She gave me some useful ___.", ko: "그녀가 유용한 조언을 해 줬어요.", choices: ["advice", "advices"], answer: 0, hint: "advice는 셀 수 없는 명사예요." },
      { type: "choose", q: "How ___ information do you need?", ko: "정보가 얼마나 필요해요?", choices: ["much", "many"], answer: 0, hint: "information은 셀 수 없어요." },
      { type: "order", words: ["I", "have", "a", "few", "questions", "for", "you."], ko: "몇 가지 여쭤볼 게 있어요." },
    ],
  },
  {
    id: "a-have-done",
    emoji: "💇",
    title: "have my hair cut",
    subtitle: "have / get + 목적어 + p.p.: 남에게 시켜서 ~하다",
    grade: "성인1",
    slides: [
      {
        emoji: "✂️",
        say: "미용실에서 머리를 자르면, 내가 자른 게 아니라 <b>남이 잘라 준 것</b>이죠. 이럴 때 <b>have + 물건 + p.p.</b>를 써요. 'I cut my hair'라고 하면 직접 잘랐다는 뜻이 돼요.",
        pattern: "have + 목적어 + p.p. = (남을 시켜) ~하게 하다",
        examples: [
          { en: "I had my hair cut yesterday.", ko: "어제 머리를 잘랐어요. (미용실에서)", emoji: "💇" },
          { en: "We're having the kitchen painted.", ko: "부엌 페인트칠을 맡겨서 하는 중이에요.", emoji: "🎨" },
        ],
      },
      {
        emoji: "🔧",
        say: "<b>get + 목적어 + p.p.</b>도 같은 뜻이고, 말할 때 더 자주 써요. 수리, 배달, 검사처럼 <b>서비스를 받는 일</b>에 잘 어울려요.",
        pattern: "get + 목적어 + p.p. = ~을 맡겨서 하다",
        examples: [
          { en: "I need to get my car fixed.", ko: "차를 고쳐야 해요. (정비소에 맡겨서)", emoji: "🚗" },
          { en: "Where can I get my phone repaired?", ko: "휴대폰은 어디서 수리 받을 수 있어요?", emoji: "📱" },
        ],
      },
      {
        emoji: "😣",
        say: "같은 모양이 <b>원하지 않은 일을 당했을 때</b>도 쓰여요. I had my bag stolen. = 가방을 도둑맞았어요.",
        pattern: "have + 목적어 + p.p. = ~을 당하다",
        examples: [
          { en: "He had his wallet stolen on the subway.", ko: "그는 지하철에서 지갑을 도둑맞았어요.", emoji: "👛" },
          { en: "Have your documents checked before you submit them.", ko: "제출하기 전에 서류를 검토받으세요.", emoji: "📑" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 남이 해 주면 <b>have / get + 물건 + p.p.</b>! 물건은 '되는' 쪽이라 p.p.예요.",
        pattern: "have my car washed · get my eyes checked",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I'm going to have my hair ___ tomorrow.", ko: "내일 머리 자르러 갈 거예요.", choices: ["cut", "cutting", "to cut"], answer: 0, hint: "머리는 잘리는 쪽이라 p.p.예요. cut의 p.p.는 cut." },
      { type: "choose", q: "You should get your eyes ___.", ko: "눈 검사를 받아 보는 게 좋겠어요.", choices: ["checked", "check"], answer: 0, hint: "get + 목적어 + p.p.예요." },
      { type: "choose", q: "We had the documents ___ into English.", ko: "우리는 서류를 영어로 번역 맡겼어요.", choices: ["translated", "translate"], answer: 0, hint: "서류는 번역되는 쪽이에요." },
      { type: "choose", q: "She ___ her bike stolen last week.", ko: "그녀는 지난주에 자전거를 도둑맞았다.", choices: ["had", "made"], answer: 0, hint: "당한 일도 have + 목적어 + p.p.예요." },
      { type: "choose", q: "Where can I get this jacket ___?", ko: "이 재킷은 어디서 드라이클리닝 맡길 수 있어요?", choices: ["dry-cleaned", "dry-clean"], answer: 0, hint: "재킷은 세탁되는 쪽이에요." },
      { type: "order", words: ["I", "need", "to", "get", "my", "car", "fixed."], ko: "차를 고치러 맡겨야 해요." },
    ],
  },
  {
    id: "a-reported",
    emoji: "🗨️",
    title: "He said that ~",
    subtitle: "간접화법: 남의 말을 전하기",
    grade: "성인1",
    slides: [
      {
        emoji: "📣",
        say: "남이 한 말을 전할 때는 <b>said (that) + 문장</b>을 써요. 전하는 시점이 과거라서 보통 <b>시제를 한 칸 과거로</b> 옮겨요. is → was, will → would, can → could.",
        pattern: "\"I am busy.\" → He said (that) he was busy.",
        examples: [
          { en: "She said she was tired.", ko: "그녀는 피곤하다고 말했어요.", emoji: "😩" },
          { en: "He said he would call me later.", ko: "그는 나중에 전화하겠다고 했어요.", emoji: "📞" },
        ],
      },
      {
        emoji: "👂",
        say: "듣는 사람을 넣으려면 <b>told + 사람 + that</b>이에요. said 뒤에는 사람이 바로 오지 않아요. 부탁·지시는 <b>asked / told + 사람 + to 동사</b>로 전해요.",
        pattern: "told me that ~ · told me to ~ · asked me to ~",
        examples: [
          { en: "My boss told me that the deadline had changed.", ko: "상사가 마감이 바뀌었다고 말해 줬어요.", emoji: "📅" },
          { en: "She asked me to send the file again.", ko: "그녀가 파일을 다시 보내 달라고 했어요.", emoji: "📎" },
        ],
      },
      {
        emoji: "❓",
        say: "질문을 전할 때는 <b>asked + if / whether</b>(예·아니요 질문)나 <b>asked + 의문사</b>를 쓰고, 뒤는 <b>평서문 순서</b>(주어 + 동사)로 써요.",
        pattern: "\"Are you free?\" → He asked if I was free.",
        examples: [
          { en: "He asked if I was free on Friday.", ko: "그가 금요일에 시간 있냐고 물었어요.", emoji: "📆" },
          { en: "She asked where the station was.", ko: "그녀는 역이 어디냐고 물었어요.", emoji: "🚉" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 말 전하기는 <b>said that</b>, 사람에게 말하면 <b>told 사람 that</b>, 부탁은 <b>asked 사람 to</b>, 질문은 <b>asked if + 주어 + 동사</b>!",
        pattern: "said / told / asked + 시제 한 칸 과거로",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "He ___ me that he was leaving the company.", ko: "그는 회사를 그만둔다고 나에게 말했다.", choices: ["told", "said"], answer: 0, hint: "사람이 바로 오면 told예요." },
      { type: "choose", q: "She said she ___ come to the party.", ko: "그녀는 파티에 오겠다고 했다.", choices: ["would", "will be"], answer: 0, hint: "will → would로 한 칸 과거로 옮겨요." },
      { type: "choose", q: "The manager asked us ___ the report by Friday.", ko: "매니저가 금요일까지 보고서를 끝내라고 했다.", choices: ["to finish", "finish", "finished"], answer: 0, hint: "asked + 사람 + to 동사원형이에요." },
      { type: "choose", q: "He asked me ___ I had eaten lunch.", ko: "그가 나에게 점심 먹었냐고 물었다.", choices: ["if", "that"], answer: 0, hint: "예·아니요 질문을 전할 때는 if예요." },
      { type: "choose", q: "She asked me where ___.", ko: "그녀는 내가 어디 사는지 물었다.", choices: ["I lived", "did I live"], answer: 0, hint: "전하는 질문은 주어 + 동사 순서예요." },
      { type: "order", words: ["She", "told", "me", "to", "wait", "outside."], ko: "그녀는 나에게 밖에서 기다리라고 했다." },
    ],
  },
  {
    id: "a-prep-time",
    emoji: "⏰",
    title: "by vs until · for vs during",
    subtitle: "헷갈리는 시간 전치사",
    grade: "성인1",
    slides: [
      {
        emoji: "🏁",
        say: "<b>by</b>는 '<b>~까지 (끝내라)</b>'라는 마감이고, <b>until</b>은 '<b>~까지 (계속)</b>'이에요. 한국어로는 둘 다 '~까지'라서 자주 틀려요.",
        pattern: "by Friday = 금요일까지 끝 · until Friday = 금요일까지 계속",
        examples: [
          { en: "Please submit the report by Friday.", ko: "금요일까지 보고서를 내 주세요.", emoji: "📄" },
          { en: "I'll be in Busan until Friday.", ko: "금요일까지 부산에 있을 거예요.", emoji: "🏖️" },
        ],
      },
      {
        emoji: "⌛",
        say: "<b>for + 기간(숫자)</b>은 '얼마 동안', <b>during + 사건·기간 이름</b>은 '~하는 동안에'예요. for three days, during the meeting처럼 써요.",
        pattern: "for two hours · during the vacation",
        examples: [
          { en: "I waited for twenty minutes.", ko: "20분 동안 기다렸어요.", emoji: "⏱️" },
          { en: "Please turn off your phone during the meeting.", ko: "회의 중에는 휴대폰을 꺼 주세요.", emoji: "📵" },
        ],
      },
      {
        emoji: "📆",
        say: "<b>in + 기간</b>은 '<b>~ 후에</b>'(지금부터), <b>within + 기간</b>은 '<b>~ 이내에</b>'예요. I'll be back in ten minutes = 10분 뒤에 올게요.",
        pattern: "in 10 minutes = 10분 뒤 · within 10 minutes = 10분 안에",
        examples: [
          { en: "The train leaves in five minutes.", ko: "기차가 5분 뒤에 떠나요.", emoji: "🚆" },
          { en: "We will reply within 24 hours.", ko: "24시간 이내에 답변드릴게요.", emoji: "📧" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 마감은 <b>by</b>, 계속은 <b>until</b>. 숫자 기간은 <b>for</b>, 사건 이름은 <b>during</b>. ~ 뒤는 <b>in</b>, ~ 안에는 <b>within</b>!",
        pattern: "by · until · for · during · in · within",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "Please let me know ___ tomorrow morning.", ko: "내일 아침까지 알려 주세요.", choices: ["by", "until"], answer: 0, hint: "그때까지 끝내야 하는 마감은 by예요." },
      { type: "choose", q: "The store is open ___ 10 p.m.", ko: "가게는 밤 10시까지 문을 열어요.", choices: ["until", "by"], answer: 0, hint: "그때까지 계속되는 일은 until이에요." },
      { type: "choose", q: "I lived in Canada ___ three years.", ko: "나는 캐나다에서 3년 동안 살았어요.", choices: ["for", "during"], answer: 0, hint: "숫자 기간 앞에는 for예요." },
      { type: "choose", q: "He fell asleep ___ the movie.", ko: "그는 영화 보는 동안 잠들었어요.", choices: ["during", "for"], answer: 0, hint: "사건 이름 앞에는 during이에요." },
      { type: "choose", q: "The doctor will see you ___ ten minutes.", ko: "의사 선생님이 10분 뒤에 진료하실 거예요.", choices: ["in", "within"], answer: 0, hint: "'~ 뒤에'는 in이에요." },
      { type: "order", words: ["Please", "pay", "within", "seven", "days."], ko: "7일 이내에 결제해 주세요." },
    ],
  },

  // ── 성인 ②: 자연스럽고 정중한 영어 ──
  {
    id: "a-polite-past",
    emoji: "🎩",
    title: "I was wondering if ~",
    subtitle: "과거형과 would로 공손하게 말하기",
    grade: "성인2",
    slides: [
      {
        emoji: "🙇",
        say: "영어는 <b>과거형이나 would, could를 쓰면 더 공손</b>해져요. 시간이 과거라서가 아니라, 한 걸음 물러나서 말하는 느낌이에요.",
        pattern: "I want → I'd like · Can you → Could you · I wonder → I was wondering",
        examples: [
          { en: "I'd like to book a table for two.", ko: "두 명 자리 예약하고 싶어요.", emoji: "🍽️" },
          { en: "Could you send me the details?", ko: "자세한 내용을 보내 주실 수 있을까요?", emoji: "📧" },
        ],
      },
      {
        emoji: "🤲",
        say: "부탁을 아주 부드럽게 꺼낼 때는 <b>I was wondering if you could ~</b>, <b>I'd appreciate it if you could ~</b>(~해 주시면 감사하겠습니다)를 써요. 업무 이메일에서 자주 써요.",
        pattern: "I was wondering if you could ~ · I'd appreciate it if you could ~",
        examples: [
          { en: "I was wondering if you could help me with this.", ko: "이것 좀 도와주실 수 있을까 해서요.", emoji: "🙏" },
          { en: "I'd appreciate it if you could reply by Monday.", ko: "월요일까지 답장 주시면 감사하겠습니다.", emoji: "📅" },
        ],
      },
      {
        emoji: "🪶",
        say: "의견이나 제안도 <b>would</b>를 넣으면 부드러워져요. I would say ~(제 생각엔 ~), It would be better to ~(~하는 게 더 좋을 것 같아요), Would it be possible to ~?(~할 수 있을까요?)",
        pattern: "I'd say ~ · It would be better to ~ · Would it be possible to ~?",
        examples: [
          { en: "Would it be possible to change the date?", ko: "날짜를 바꿀 수 있을까요?", emoji: "🗓️" },
          { en: "It would be better to wait until next week.", ko: "다음 주까지 기다리는 게 나을 것 같아요.", emoji: "⏳" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 공손하게 말하려면 한 걸음 물러나서 <b>would · could · 과거형</b>! I was wondering if ~, I'd appreciate it if ~를 기억해요.",
        pattern: "would / could / was wondering = 공손함",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I ___ like to make a reservation.", ko: "예약을 하고 싶습니다.", choices: ["would", "will"], answer: 0, hint: "I'd like = I would like예요." },
      { type: "choose", q: "I was ___ if you could join the meeting.", ko: "회의에 참석해 주실 수 있을까 해서요.", choices: ["wondering", "wonder"], answer: 0, hint: "I was wondering if ~예요." },
      { type: "choose", q: "I'd appreciate ___ if you could call me back.", ko: "다시 전화 주시면 감사하겠습니다.", choices: ["it", "that", "you"], answer: 0, hint: "I'd appreciate it if ~예요." },
      { type: "choose", q: "Would it be ___ to get a discount?", ko: "할인을 받을 수 있을까요?", choices: ["possible", "possibly"], answer: 0, hint: "Would it be possible to ~?예요." },
      { type: "choose", q: "___ you tell me where the restroom is?", ko: "화장실이 어디인지 알려 주실 수 있을까요?", choices: ["Could", "Will"], answer: 0, hint: "Could가 더 공손해요." },
      { type: "order", words: ["Would", "it", "be", "possible", "to", "change", "the", "date?"], ko: "날짜를 바꿀 수 있을까요?" },
    ],
  },
  {
    id: "a-hedging",
    emoji: "🌫️",
    title: "seem to · tend to · be likely to",
    subtitle: "단정하지 않고 부드럽게 말하기",
    grade: "성인2",
    slides: [
      {
        emoji: "🤔",
        say: "확실하지 않은 일을 단정하지 않을 때 <b>seem to</b>(~인 것 같다), <b>appear to</b>(~인 것으로 보인다)를 써요. It seems that ~으로도 말해요.",
        pattern: "주어 + seem(s) to + 동사 = It seems that + 문장",
        examples: [
          { en: "There seems to be a problem with the system.", ko: "시스템에 문제가 있는 것 같아요.", emoji: "💻" },
          { en: "It seems that he misunderstood the plan.", ko: "그가 계획을 오해한 것 같아요.", emoji: "😕" },
        ],
      },
      {
        emoji: "📈",
        say: "<b>tend to</b>는 '<b>~하는 경향이 있다</b>', <b>be likely to</b>는 '<b>~할 가능성이 높다</b>', <b>be unlikely to</b>는 '~할 것 같지 않다'예요. 뉴스와 보고서에 아주 자주 나와요.",
        pattern: "tend to ~ · be likely to ~ · be unlikely to ~",
        examples: [
          { en: "People tend to spend more on weekends.", ko: "사람들은 주말에 돈을 더 쓰는 경향이 있어요.", emoji: "🛍️" },
          { en: "Prices are likely to rise next year.", ko: "내년에 물가가 오를 가능성이 높아요.", emoji: "💹" },
        ],
      },
      {
        emoji: "🧷",
        say: "말을 부드럽게 해 주는 말도 있어요. <b>probably, perhaps, a bit, kind of, I'm not sure, but ~</b>. 반대 의견을 말하기 전에 쓰면 덜 공격적으로 들려요.",
        pattern: "I'm not sure, but ~ · It might be a bit ~",
        examples: [
          { en: "I'm not sure, but I think we need more time.", ko: "확실하진 않지만 시간이 더 필요한 것 같아요.", emoji: "⏳" },
          { en: "The price might be a bit high for us.", ko: "가격이 우리한테는 조금 비쌀 수도 있어요.", emoji: "💰" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 추측은 <b>seem to</b>, 경향은 <b>tend to</b>, 가능성은 <b>be likely to</b>. 단정하지 않으면 더 어른스럽게 들려요!",
        pattern: "seem to · tend to · be likely to",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "She ___ to be upset about something.", ko: "그녀는 뭔가에 속상한 것 같아요.", choices: ["seems", "seem"], answer: 0, hint: "주어가 She라 seems예요." },
      { type: "choose", q: "It ___ that the flight has been delayed.", ko: "비행기가 지연된 것 같아요.", choices: ["seems", "is likely"], answer: 0, hint: "It seems that + 문장이에요." },
      { type: "choose", q: "Older people tend ___ up earlier.", ko: "나이 든 사람들은 더 일찍 일어나는 경향이 있다.", choices: ["to get", "getting"], answer: 0, hint: "tend to + 동사원형이에요." },
      { type: "choose", q: "It is ___ to rain this afternoon.", ko: "오늘 오후에 비가 올 가능성이 높다.", choices: ["likely", "like"], answer: 0, hint: "be likely to = ~할 가능성이 높다." },
      { type: "choose", q: "The project is ___ to finish on time. We're too far behind.", ko: "프로젝트가 제때 끝날 것 같지 않아요. 너무 뒤처졌어요.", choices: ["unlikely", "likely"], answer: 0, hint: "뒤처져서 가능성이 낮아요." },
      { type: "order", words: ["There", "seems", "to", "be", "a", "mistake."], ko: "실수가 있는 것 같아요." },
    ],
  },
  {
    id: "a-condition",
    emoji: "🔀",
    title: "as long as · in case · otherwise",
    subtitle: "조건을 정확하게 말하기",
    grade: "성인2",
    slides: [
      {
        emoji: "✅",
        say: "<b>as long as / provided that</b>은 '<b>~하기만 하면</b>'이라는 조건이에요. if보다 '그 조건만 지키면 괜찮다'는 느낌이 강해요.",
        pattern: "as long as + 문장 = ~하기만 하면",
        examples: [
          { en: "You can borrow my car as long as you drive carefully.", ko: "조심히 운전하기만 하면 내 차 빌려 가도 돼.", emoji: "🚗" },
          { en: "We'll finish on time provided that nothing goes wrong.", ko: "별문제만 없으면 제때 끝낼 거예요.", emoji: "🗓️" },
        ],
      },
      {
        emoji: "☂️",
        say: "<b>in case</b>는 '<b>~할 경우에 대비해서</b>'예요. if(~하면)와 달라요. Take an umbrella in case it rains = 비가 올지도 모르니 우산 가져가.",
        pattern: "in case + 문장 = ~할 경우에 대비해서 · in case of + 명사",
        examples: [
          { en: "Take an umbrella in case it rains.", ko: "비가 올지 모르니 우산 가져가.", emoji: "☂️" },
          { en: "In case of fire, use the stairs.", ko: "화재 시에는 계단을 이용하세요.", emoji: "🔥" },
        ],
      },
      {
        emoji: "↩️",
        say: "<b>otherwise</b>는 '<b>그렇지 않으면</b>', <b>unless</b>는 '<b>~하지 않으면</b>'이에요. unless 뒤에는 not을 또 쓰지 않아요.",
        pattern: "~. Otherwise, ... · unless + 긍정문 = if ~ not",
        examples: [
          { en: "Save your work. Otherwise, you might lose it.", ko: "작업을 저장하세요. 그렇지 않으면 날아갈 수도 있어요.", emoji: "💾" },
          { en: "We'll start at nine unless you object.", ko: "반대하지 않으시면 9시에 시작할게요.", emoji: "🕘" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! ~하기만 하면 <b>as long as</b>, 대비해서 <b>in case</b>, 그렇지 않으면 <b>otherwise</b>, ~하지 않으면 <b>unless</b>!",
        pattern: "as long as · in case · otherwise · unless",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "You can stay ___ you keep quiet.", ko: "조용히만 있으면 있어도 돼요.", choices: ["as long as", "in case"], answer: 0, hint: "'~하기만 하면'은 as long as예요." },
      { type: "choose", q: "Bring a jacket ___ it gets cold.", ko: "추워질지 모르니 재킷 챙겨.", choices: ["in case", "unless"], answer: 0, hint: "대비해서는 in case예요." },
      { type: "choose", q: "Hurry up. ___, we'll miss the train.", ko: "서둘러. 그렇지 않으면 기차 놓쳐.", choices: ["Otherwise", "As long as"], answer: 0, hint: "'그렇지 않으면'은 otherwise예요." },
      { type: "choose", q: "I won't go ___ you come with me.", ko: "네가 같이 가지 않으면 나도 안 갈래.", choices: ["unless", "in case"], answer: 0, hint: "'~하지 않으면'은 unless예요." },
      { type: "choose", q: "In case ___ emergency, call this number.", ko: "비상시에는 이 번호로 전화하세요.", choices: ["of", "that"], answer: 0, hint: "명사 앞에서는 in case of예요." },
      { type: "order", words: ["I'll", "take", "my", "laptop", "in", "case", "I", "need", "it."], ko: "필요할지 모르니 노트북을 가져갈게요." },
    ],
  },
  {
    id: "a-linkers",
    emoji: "🔗",
    title: "however · therefore · despite",
    subtitle: "글과 발표를 매끄럽게 잇는 말",
    grade: "성인2",
    slides: [
      {
        emoji: "↔️",
        say: "<b>however</b>(그러나)와 <b>therefore</b>(그러므로)는 접속사가 아니라 <b>부사</b>예요. 두 문장을 마침표나 세미콜론으로 나누고, 뒤에 쉼표를 찍어요.",
        pattern: "문장. However, 문장. · 문장. Therefore, 문장.",
        examples: [
          { en: "The plan is good. However, it is too expensive.", ko: "계획은 좋아요. 하지만 너무 비싸요.", emoji: "💸" },
          { en: "Sales dropped. Therefore, we changed our strategy.", ko: "매출이 떨어졌어요. 그래서 전략을 바꿨어요.", emoji: "📉" },
        ],
      },
      {
        emoji: "🧱",
        say: "'~에도 불구하고'는 뒤에 무엇이 오는지 보고 골라요. <b>although / even though + 문장</b>, <b>despite / in spite of + 명사·-ing</b>예요. despite of는 틀린 말이에요.",
        pattern: "although + 주어 + 동사 · despite + 명사 / -ing",
        examples: [
          { en: "Although it was raining, we went hiking.", ko: "비가 오는데도 우리는 등산을 갔어요.", emoji: "🥾" },
          { en: "Despite the rain, we went hiking.", ko: "비에도 불구하고 우리는 등산을 갔어요.", emoji: "🌧️" },
        ],
      },
      {
        emoji: "⚖️",
        say: "두 가지를 대조할 때는 <b>whereas / while</b>(~인 반면에), 덧붙일 때는 <b>in addition / moreover</b>(게다가), 예를 들 때는 <b>for example / such as</b>를 써요.",
        pattern: "whereas · in addition · for example",
        examples: [
          { en: "I prefer coffee, whereas my wife prefers tea.", ko: "나는 커피를 좋아하는 반면 아내는 차를 좋아해요.", emoji: "☕" },
          { en: "The hotel is cheap. In addition, it's near the beach.", ko: "그 호텔은 싸요. 게다가 해변과도 가까워요.", emoji: "🏨" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 반대는 <b>however</b>, 결과는 <b>therefore</b>, 문장 앞 양보는 <b>although</b>, 명사 앞 양보는 <b>despite</b>, 대조는 <b>whereas</b>!",
        pattern: "however · therefore · although / despite · whereas",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ the traffic, we arrived on time.", ko: "교통 체증에도 불구하고 우리는 제때 도착했다.", choices: ["Despite", "Although"], answer: 0, hint: "명사 앞에는 despite예요." },
      { type: "choose", q: "___ he was tired, he kept working.", ko: "피곤했지만 그는 계속 일했다.", choices: ["Although", "Despite"], answer: 0, hint: "주어 + 동사 앞에는 although예요." },
      { type: "choose", q: "The test was difficult. ___, most students passed.", ko: "시험은 어려웠다. 하지만 대부분의 학생이 통과했다.", choices: ["However", "Therefore"], answer: 0, hint: "앞과 반대되는 내용이에요." },
      { type: "choose", q: "It was late. ___, we decided to take a taxi.", ko: "늦었다. 그래서 우리는 택시를 타기로 했다.", choices: ["Therefore", "However"], answer: 0, hint: "앞 내용의 결과예요." },
      { type: "choose", q: "Some people love winter, ___ others hate it.", ko: "어떤 사람은 겨울을 좋아하는 반면 어떤 사람은 싫어한다.", choices: ["whereas", "despite"], answer: 0, hint: "두 가지를 대조하는 whereas예요." },
      { type: "order", words: ["Despite", "the", "rain,", "the", "event", "was", "a", "success."], ko: "비에도 불구하고 행사는 성공적이었다." },
    ],
  },
  {
    id: "a-cleft-what",
    emoji: "🎯",
    title: "What I need is ~",
    subtitle: "핵심을 앞세워 강조하기",
    grade: "성인2",
    slides: [
      {
        emoji: "📌",
        say: "<b>What + 주어 + 동사 + is ~</b>는 '<b>내가 ~하는 것은 바로 …이다</b>'라는 강조예요. 말하고 싶은 핵심이 is 뒤에 와서 귀에 쏙 들어와요.",
        pattern: "What I need is ~ · What I mean is ~",
        examples: [
          { en: "What I need is a good night's sleep.", ko: "내게 필요한 건 푹 자는 거예요.", emoji: "😴" },
          { en: "What I mean is that we need more time.", ko: "제 말은 시간이 더 필요하다는 거예요.", emoji: "⏳" },
        ],
      },
      {
        emoji: "🧩",
        say: "<b>All I want is ~</b>(내가 원하는 건 ~뿐이에요), <b>The thing is, ~</b>(문제는 말이죠, ~), <b>The point is ~</b>(요점은 ~)도 대화에서 자주 써요.",
        pattern: "All I want is ~ · The thing is, ~ · The point is ~",
        examples: [
          { en: "All I want is a quiet weekend.", ko: "내가 원하는 건 조용한 주말뿐이에요.", emoji: "🛋️" },
          { en: "The thing is, I don't have enough money.", ko: "문제는요, 제가 돈이 충분하지 않다는 거예요.", emoji: "💸" },
        ],
      },
      {
        emoji: "🎬",
        say: "동작을 강조할 때는 <b>What + 주어 + did was (to) + 동사원형</b>이에요. What we did was call the manager. = 우리가 한 일은 매니저에게 전화한 거였어요.",
        pattern: "What I did was + 동사원형",
        examples: [
          { en: "What we did was call the manager.", ko: "우리가 한 건 매니저에게 전화한 거였어요.", emoji: "📞" },
          { en: "What surprised me was his honesty.", ko: "나를 놀라게 한 건 그의 솔직함이었어요.", emoji: "😮" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 핵심을 강조하려면 <b>What ~ is ...</b>, <b>All I want is ...</b>, <b>The thing is, ...</b>!",
        pattern: "What I need is · All I want is · The thing is",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "___ I need right now is a cup of coffee.", ko: "지금 나한테 필요한 건 커피 한 잔이야.", choices: ["What", "That", "Which"], answer: 0, hint: "'~하는 것'은 What이에요." },
      { type: "choose", q: "What I want to say ___ that you did a great job.", ko: "제가 하고 싶은 말은 정말 잘했다는 거예요.", choices: ["is", "are"], answer: 0, hint: "What 절은 단수 취급이라 is예요." },
      { type: "choose", q: "___ I want is some peace and quiet.", ko: "내가 원하는 건 조용함뿐이야.", choices: ["All", "Every"], answer: 0, hint: "All I want is ~ = 내가 원하는 건 ~뿐." },
      { type: "choose", q: "The ___ is, I forgot to book the hotel.", ko: "문제는요, 제가 호텔 예약을 깜빡했어요.", choices: ["thing", "what"], answer: 0, hint: "The thing is, ~ = 문제는요, ~" },
      { type: "choose", q: "What we did was ___ the meeting.", ko: "우리가 한 건 회의를 취소한 거였어요.", choices: ["cancel", "canceling"], answer: 0, hint: "What ~ did was 뒤에는 동사원형이에요." },
      { type: "order", words: ["What", "I", "need", "is", "more", "time."], ko: "내게 필요한 건 더 많은 시간이에요." },
    ],
  },
  {
    id: "a-said-to",
    emoji: "📰",
    title: "It is said that ~",
    subtitle: "뉴스에 나오는 전달 수동태",
    grade: "성인2",
    slides: [
      {
        emoji: "🗞️",
        say: "누가 말했는지보다 <b>그런 말이 있다는 것</b>이 중요할 때 <b>It is said / believed / reported that ~</b>을 써요. 뉴스와 기사에 정말 많이 나와요.",
        pattern: "It is said / believed / reported / expected that + 문장",
        examples: [
          { en: "It is said that he is the richest man in the city.", ko: "그가 이 도시에서 가장 부자라고들 한다.", emoji: "💰" },
          { en: "It is expected that prices will rise.", ko: "물가가 오를 것으로 예상된다.", emoji: "📈" },
        ],
      },
      {
        emoji: "🔁",
        say: "같은 내용을 <b>사람을 주어로</b> 바꿀 수도 있어요. <b>주어 + is said to + 동사원형</b>. 기사 문장에서 자주 보여요.",
        pattern: "He is said to be ~ · The company is expected to ~",
        examples: [
          { en: "He is said to be the richest man in the city.", ko: "그는 이 도시에서 가장 부자라고 한다.", emoji: "🏙️" },
          { en: "The company is expected to hire 500 people.", ko: "그 회사는 500명을 채용할 것으로 예상된다.", emoji: "🏢" },
        ],
      },
      {
        emoji: "⏪",
        say: "말한 시점보다 <b>이전의 일</b>이면 <b>to have p.p.</b>를 써요. The fire is believed to have started in the kitchen = 불은 부엌에서 시작된 것으로 추정된다.",
        pattern: "be said / believed to have p.p. = ~했다고 한다",
        examples: [
          { en: "The fire is believed to have started in the kitchen.", ko: "불은 부엌에서 시작된 것으로 추정된다.", emoji: "🔥" },
          { en: "The painting is thought to have been stolen.", ko: "그 그림은 도난당한 것으로 여겨진다.", emoji: "🖼️" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 뉴스체는 <b>It is said that ~</b> 또는 <b>주어 + is said to ~</b>. 더 이전 일이면 <b>to have p.p.</b>!",
        pattern: "It is said that ~ = 주어 is said to ~",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "It ___ said that the hotel is haunted.", ko: "그 호텔에는 유령이 나온다고들 한다.", choices: ["is", "says"], answer: 0, hint: "It is said that ~이에요." },
      { type: "choose", q: "She is said ___ fluent in five languages.", ko: "그녀는 5개 국어를 유창하게 한다고 한다.", choices: ["to be", "being", "that"], answer: 0, hint: "사람 주어 + is said to + 동사원형이에요." },
      { type: "choose", q: "The new model is expected ___ next month.", ko: "새 모델은 다음 달에 출시될 것으로 예상된다.", choices: ["to be released", "releasing"], answer: 0, hint: "모델은 출시되는 쪽이라 to be p.p.예요." },
      { type: "choose", q: "It is ___ that about 200 people were injured.", ko: "약 200명이 부상당한 것으로 보도되었다.", choices: ["reported", "reporting"], answer: 0, hint: "It is reported that ~이에요." },
      { type: "choose", q: "The thief is believed to have ___ the country.", ko: "도둑은 이미 출국한 것으로 추정된다.", choices: ["left", "leave"], answer: 0, hint: "to have + p.p.예요." },
      { type: "order", words: ["It", "is", "believed", "that", "he", "is", "innocent."], ko: "그는 무죄라고 여겨진다." },
    ],
  },
  {
    id: "a-phrasal",
    emoji: "🧰",
    title: "turn it off, look into it",
    subtitle: "구동사와 목적어의 자리",
    grade: "성인2",
    slides: [
      {
        emoji: "🔌",
        say: "<b>turn off, put off, figure out</b>처럼 동사 + 부사로 된 말을 <b>구동사</b>라고 해요. 회화에서는 어려운 한 단어보다 구동사를 훨씬 많이 써요. postpone → put off, cancel → call off.",
        pattern: "put off(미루다) · call off(취소하다) · figure out(알아내다) · carry out(실행하다)",
        examples: [
          { en: "They called off the game because of the rain.", ko: "비 때문에 경기를 취소했어요.", emoji: "🌧️" },
          { en: "I can't figure out how this works.", ko: "이게 어떻게 작동하는지 모르겠어요.", emoji: "🧩" },
        ],
      },
      {
        emoji: "📦",
        say: "목적어가 <b>명사</b>면 부사 앞뒤 어디에 와도 되지만, <b>대명사(it, them)</b>면 반드시 <b>가운데</b>에 넣어요. turn it off (O), turn off it (X).",
        pattern: "turn off the TV = turn the TV off = turn it off",
        examples: [
          { en: "Please turn the TV off. / Please turn it off.", ko: "TV 좀 꺼 줘. / 그거 좀 꺼 줘.", emoji: "📺" },
          { en: "Can you pick me up at six?", ko: "6시에 나 좀 데리러 와 줄래?", emoji: "🚗" },
        ],
      },
      {
        emoji: "🔍",
        say: "단, <b>look into</b>(조사하다), <b>look after</b>(돌보다), <b>get over</b>(극복하다)처럼 <b>동사 + 전치사</b>인 말은 떼어 놓지 않아요. look into it (O).",
        pattern: "look into it · look after them · get over it",
        examples: [
          { en: "We will look into the problem.", ko: "그 문제를 살펴보겠습니다.", emoji: "🔍" },
          { en: "Who will look after the kids?", ko: "누가 아이들을 돌봐요?", emoji: "👶" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! 구동사는 회화의 핵심! 대명사는 <b>turn it off</b>처럼 가운데, look into·look after는 <b>떼지 않아요</b>!",
        pattern: "turn it off (O) · turn off it (X) · look into it (O)",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "It's too loud. Please turn ___.", ko: "너무 시끄러워요. 그것 좀 줄여 주세요.", choices: ["it down", "down it"], answer: 0, hint: "대명사는 가운데에 넣어요." },
      { type: "choose", q: "We had to ___ the meeting until next week.", ko: "회의를 다음 주로 미뤄야 했어요.", choices: ["put off", "put on"], answer: 0, hint: "미루다 = put off." },
      { type: "choose", q: "Don't worry. I'll ___ it.", ko: "걱정 마세요. 제가 알아볼게요.", choices: ["look into", "look it into"], answer: 0, hint: "look into는 떼지 않아요." },
      { type: "choose", q: "I finally figured ___ the answer.", ko: "드디어 답을 알아냈어요.", choices: ["out", "up"], answer: 0, hint: "알아내다 = figure out." },
      { type: "choose", q: "These shoes are new. Let me try ___.", ko: "이 신발 새거예요. 신어 볼게요.", choices: ["them on", "on them"], answer: 0, hint: "대명사 them은 가운데에 와요." },
      { type: "order", words: ["Can", "you", "pick", "me", "up", "at", "six?"], ko: "6시에 데리러 와 줄 수 있어요?" },
    ],
  },
  {
    id: "a-to-ing",
    emoji: "🎁",
    title: "look forward to -ing",
    subtitle: "to 뒤에 -ing가 오는 표현",
    grade: "성인2",
    slides: [
      {
        emoji: "📨",
        say: "이메일 끝에 자주 쓰는 <b>I look forward to hearing from you.</b>(답장 기다리겠습니다). 여기서 to는 to부정사가 아니라 <b>전치사</b>라서 뒤에 <b>-ing</b>가 와요.",
        pattern: "look forward to + -ing = ~을 기대하다",
        examples: [
          { en: "I look forward to hearing from you.", ko: "답장 기다리겠습니다.", emoji: "📧" },
          { en: "We look forward to working with you.", ko: "함께 일하게 되기를 기대합니다.", emoji: "🤝" },
        ],
      },
      {
        emoji: "🧲",
        say: "이런 표현이 몇 개 더 있어요. <b>be used to -ing</b>(익숙하다), <b>be committed to -ing</b>(전념하다), <b>object to -ing</b>(반대하다), <b>when it comes to -ing</b>(~에 관해서라면).",
        pattern: "be committed to -ing · object to -ing · when it comes to -ing",
        examples: [
          { en: "We are committed to protecting your privacy.", ko: "저희는 고객님의 개인정보 보호에 최선을 다합니다.", emoji: "🔒" },
          { en: "When it comes to cooking, she's the best.", ko: "요리에 관해서라면 그녀가 최고예요.", emoji: "👩‍🍳" },
        ],
      },
      {
        emoji: "🔎",
        say: "구별하는 방법: to 뒤에 <b>명사를 넣어 봐요</b>. look forward to the trip처럼 명사가 자연스러우면 그 to는 전치사라서 동사는 -ing로 써요.",
        pattern: "to + 명사가 되면 → to + -ing",
        examples: [
          { en: "I look forward to the weekend.", ko: "주말이 기다려져요.", emoji: "🗓️" },
          { en: "I'm looking forward to seeing you.", ko: "만나기를 고대하고 있어요.", emoji: "😊" },
        ],
      },
      {
        emoji: "✨",
        say: "정리해요! <b>look forward to · be used to · be committed to · object to · when it comes to</b> 뒤에는 <b>-ing</b>!",
        pattern: "전치사 to + -ing",
        examples: [],
      },
    ],
    practice: [
      { type: "choose", q: "I look forward to ___ you soon.", ko: "곧 뵙기를 기대합니다.", choices: ["seeing", "see"], answer: 0, hint: "look forward to + -ing예요." },
      { type: "choose", q: "We are committed to ___ the best service.", ko: "저희는 최고의 서비스를 제공하는 데 전념합니다.", choices: ["providing", "provide"], answer: 0, hint: "be committed to + -ing예요." },
      { type: "choose", q: "Many residents object to ___ a new airport.", ko: "많은 주민이 새 공항 건설에 반대한다.", choices: ["building", "build"], answer: 0, hint: "object to + -ing예요." },
      { type: "choose", q: "When it comes to ___ money, he is very careful.", ko: "돈을 쓰는 일에 관해서라면 그는 아주 신중해요.", choices: ["spending", "spend"], answer: 0, hint: "when it comes to + -ing예요." },
      { type: "choose", q: "I want to ___ a new language this year.", ko: "올해는 새 언어를 배우고 싶어요.", choices: ["learn", "learning"], answer: 0, hint: "want to의 to는 to부정사라 동사원형이에요." },
      { type: "order", words: ["I", "look", "forward", "to", "hearing", "from", "you."], ko: "답장 기다리겠습니다." },
    ],
  }
);
