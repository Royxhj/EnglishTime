// 문법 노트의 '아이 눈높이' 설명.
// 예문 표시 규칙: [[말]] = 핵심 부분 강조, [S|말] [V|말] [O|말] [C|말] [M|말] = 주어·동사·목적어·보어·수식어 색 표시
const GRAMMAR_LESSONS = {
  parts: {
    hook: "단어에도 '직업'이 있어요. 이름을 맡은 단어, 움직임을 맡은 단어, 꾸미는 일을 맡은 단어… 단어가 맡은 이 직업을 <b>품사</b>라고 불러요.",
    terms: [
      { term: "품사", meaning: "단어가 문장에서 맡는 일의 종류예요." },
      { term: "꾸미다", meaning: "다른 말에 정보를 덧붙여서 더 자세하게 만드는 거예요. '강아지' → '작은 강아지'" },
    ],
    steps: [
      {
        title: "이름을 맡은 말: 명사",
        body: "눈에 보이거나 부를 수 있는 것의 이름이에요. 사람(mom), 동물(cat), 물건(book), 장소(school)처럼요. '이게 뭐야?'라고 물었을 때 대답이 되는 말이 명사예요.",
        examples: [
          { en: "I have a [[cat]].", ko: "나는 고양이가 있어요." },
          { en: "We go to [[school]].", ko: "우리는 학교에 가요." },
        ],
      },
      {
        title: "움직임과 상태를 맡은 말: 동사",
        body: "'~하다', '~이다'에 해당하는 말이에요. run(달리다), eat(먹다)처럼 움직임을 나타내기도 하고, is(~이다)처럼 상태를 나타내기도 해요. <b>영어 문장에는 동사가 꼭 하나 있어야 해요!</b>",
        examples: [
          { en: "Birds [[fly]].", ko: "새들은 날아요." },
          { en: "She [[is]] happy.", ko: "그녀는 행복해요." },
        ],
      },
      {
        title: "꾸미는 말 ①: 형용사",
        body: "명사를 더 자세하게 꾸며 줘요. '어떤?'에 대한 대답이에요. 어떤 강아지? → <b>작은</b> 강아지(a small dog). 형용사는 명사 바로 앞에 오거나, is 뒤에 와서 주인공을 설명해요.",
        examples: [
          { en: "a [[small]] dog", ko: "작은 강아지" },
          { en: "The dog is [[small]].", ko: "그 강아지는 작아요." },
        ],
      },
      {
        title: "꾸미는 말 ②: 부사",
        body: "움직임(동사)을 꾸며 줘요. '어떻게?', '얼마나?'에 대한 대답이에요. 어떻게 달려? → <b>빠르게</b>(quickly). 형용사 뒤에 -ly를 붙이면 부사가 되는 경우가 많아요. quick → quickly, slow → slowly",
        examples: [
          { en: "He runs [[quickly]].", ko: "그는 빠르게 달려요." },
          { en: "It is [[very]] cold.", ko: "아주 추워요. (very가 cold를 꾸며요)" },
        ],
      },
      {
        title: "위치를 알려 주고, 이어 주는 말: 전치사 · 접속사",
        body: "<b>전치사</b>는 명사 앞에 붙어서 '어디에', '언제'를 알려 줘요(in the box 상자 안에). <b>접속사</b>는 단어나 문장을 이어 주는 풀 같은 말이에요(and 그리고, but 그런데).",
        examples: [
          { en: "The cat is [[in]] the box.", ko: "고양이가 상자 안에 있어요." },
          { en: "I like milk [[and]] bread.", ko: "나는 우유와 빵을 좋아해요." },
        ],
      },
    ],
    checks: [
      { q: "'She sings beautifully.'에서 beautifully는 무엇을 꾸밀까요?", choices: ["She", "sings", "아무것도 안 꾸며요"], answer: 1, explain: "'어떻게 노래해?' → 아름답게! 동사 sings를 꾸미는 부사예요." },
      { q: "'a big tree'에서 big은 어떤 품사일까요?", choices: ["명사", "형용사", "동사"], answer: 1, explain: "'어떤 나무?' → 큰 나무. 명사 tree를 꾸미는 형용사예요." },
    ],
  },

  patterns: {
    hook: "영어 문장은 레고처럼 <b>꼭 필요한 블록</b>과 <b>꾸미는 블록</b>으로 만들어져요. 꼭 필요한 블록이 어떻게 놓이는지에 따라 문장 모양이 5가지(5형식)로 나뉘어요.",
    terms: [
      { term: "주어", meaning: "문장의 주인공이에요. '누가', '무엇이'에 해당해요." },
      { term: "동사", meaning: "주인공이 하는 일이나 상태예요. '한다', '이다'에 해당해요." },
      { term: "목적어", meaning: "동작을 받는 대상이에요. '무엇을', '누구를'에 해당해요." },
      { term: "보어", meaning: "주인공(또는 목적어)이 '어떤지', '무엇인지'를 채워 주는 말이에요." },
      { term: "수식어", meaning: "꾸며 주는 말이에요. 빼도 문장이 완성돼요." },
    ],
    steps: [
      {
        title: "한국어와 순서가 달라요",
        body: "한국어는 '나는 사과를 먹는다'처럼 동사가 맨 끝에 와요. 영어는 <b>주인공 바로 뒤에 동사</b>가 와요. 그래서 영어는 '누가 → 한다 → 무엇을' 순서로 읽으면 쉬워요.",
        examples: [{ en: "[S|I] [V|eat] [O|an apple].", ko: "나는 / 먹는다 / 사과를" }],
      },
      {
        title: "1형식 · 2형식: '무엇을'이 없는 문장",
        body: "1형식은 '누가 + 한다'만으로 끝나요. 2형식은 동사 뒤에 주인공을 설명하는 말(보어)이 와요. She looks happy에서 happy는 She가 '어떤지' 알려 줘요. is(~이다), look(~해 보이다), become(~이 되다) 같은 동사가 2형식을 만들어요.",
        examples: [
          { en: "[S|Birds] [V|fly].", ko: "새들이 / 난다 (1형식)" },
          { en: "[S|She] [V|looks] [C|happy].", ko: "그녀는 / 보인다 / 행복해 (2형식)" },
        ],
      },
      {
        title: "3형식: 무엇을?",
        body: "가장 많이 쓰는 모양이에요. 동사 뒤에 '무엇을/누구를'에 해당하는 목적어가 와요. 동사를 보고 '무엇을?' 하고 물었을 때 대답이 있으면 3형식이에요.",
        examples: [{ en: "[S|Tom] [V|kicked] [O|the ball].", ko: "Tom이 / 찼다 / 공을" }],
      },
      {
        title: "4형식: 누구에게 무엇을",
        body: "give(주다), send(보내다), show(보여 주다), tell(말해 주다)처럼 '주는' 동사는 목적어를 두 개 가질 수 있어요. 순서는 꼭 <b>누구에게 → 무엇을</b>이에요.",
        examples: [{ en: "[S|Mom] [V|gave] [O|me] [O|a cookie].", ko: "엄마가 / 주셨다 / 나에게 / 쿠키를" }],
      },
      {
        title: "5형식: 목적어를 한 번 더 설명",
        body: "목적어 뒤에, 목적어가 '어떻게 되는지/무엇인지' 설명하는 말이 하나 더 와요. We call the dog Max는 '그 개 = Max'라는 뜻이에요. make(만들다), call(부르다) 같은 동사가 자주 써요.",
        examples: [{ en: "[S|The song] [V|makes] [O|me] [C|happy].", ko: "그 노래는 / 만든다 / 나를 / 행복하게" }],
      },
    ],
    checks: [
      { q: "'My cat sleeps on the sofa.'에서 꼭 필요한 블록만 남기면?", choices: ["My cat sleeps", "on the sofa", "My cat on the sofa"], answer: 0, explain: "on the sofa(소파 위에서)는 꾸미는 블록이에요. 빼도 '내 고양이가 잔다'로 문장이 완성돼요. 1형식!" },
      { q: "'He showed me a picture.'에서 '누구에게'에 해당하는 말은?", choices: ["He", "me", "a picture"], answer: 1, explain: "showed(보여 줬다) 뒤에 me(나에게) → a picture(사진을) 순서예요. 4형식!" },
    ],
  },

  tense: {
    hook: "영어 동사는 모양을 바꿔서 일이 <b>언제</b> 일어났는지 알려 줘요. 동사의 모양이 '시간 표지판'인 셈이에요.",
    terms: [
      { term: "시제", meaning: "일이 일어난 때(과거·현재·미래)를 동사 모양으로 나타내는 거예요." },
      { term: "동사원형", meaning: "동사의 기본 모양이에요. play, go, eat처럼 아무것도 붙지 않은 모양." },
      { term: "과거분사 (p.p.)", meaning: "동사의 세 번째 모양이에요. go-went-gone의 gone, eat-ate-eaten의 eaten." },
    ],
    steps: [
      {
        title: "현재: 늘 하는 일, 원래 그런 사실",
        body: "'매일', '항상' 하는 일이나 원래 그런 사실은 현재로 말해요. <b>주의!</b> 주인공이 he, she, it, Tom처럼 '나도 너도 아닌 한 명/하나'면 동사 뒤에 -s를 붙여요.",
        examples: [
          { en: "I [[play]] soccer every day.", ko: "나는 매일 축구를 해요." },
          { en: "She [[plays]] the piano.", ko: "그녀는 피아노를 쳐요. (She니까 -s!)" },
        ],
      },
      {
        title: "과거: 이미 끝난 일",
        body: "어제, 지난주처럼 이미 끝난 일은 동사 뒤에 -ed를 붙여요(play → played). 그런데 go → went, eat → ate처럼 모양이 확 바뀌는 동사도 있어요. 이런 동사는 하나씩 외워야 해요.",
        examples: [
          { en: "I [[played]] soccer yesterday.", ko: "나는 어제 축구를 했어요." },
          { en: "We [[went]] to the zoo.", ko: "우리는 동물원에 갔어요." },
        ],
      },
      {
        title: "미래: 앞으로 할 일",
        body: "동사 앞에 will을 붙이면 '~할 거예요'가 돼요. will 뒤에는 항상 동사의 기본 모양이 와요. (will plays ✗ → will play ✓)",
        examples: [{ en: "I [[will visit]] Grandma tomorrow.", ko: "나는 내일 할머니 댁에 갈 거예요." }],
      },
      {
        title: "진행형: 지금 하는 중",
        body: "'~하는 중이에요'는 am/is/are + 동사-ing로 말해요. 지금 눈앞에서 일어나는 일이에요. 과거에 하던 중이었던 일은 was/were + -ing예요.",
        examples: [
          { en: "Look! The baby [[is sleeping]].", ko: "봐! 아기가 자고 있어." },
          { en: "I [[was reading]] when you called.", ko: "네가 전화했을 때 나는 책을 읽고 있었어." },
        ],
      },
      {
        title: "현재완료: 과거부터 지금까지",
        body: "have/has + 과거분사예요. 한국어에는 딱 맞는 모양이 없어서 어려운데, <b>과거에 일어난 일이 지금과 이어져 있다</b>고 생각하면 돼요. ① 해 본 적 있다 ② 막 끝냈다 ③ 계속 ~해 왔다, 이 세 가지 뜻으로 많이 써요.",
        examples: [
          { en: "I [[have seen]] a whale.", ko: "나는 고래를 본 적이 있어요. (경험)" },
          { en: "She [[has lived]] here for 3 years.", ko: "그녀는 3년 동안 여기 살아 왔어요. (계속)" },
        ],
      },
    ],
    checks: [
      { q: "'He ___ to school every day.' 빈칸에 알맞은 것은?", choices: ["go", "goes", "going"], answer: 1, explain: "every day(매일)는 현재. He는 한 사람이니 -es를 붙인 goes!" },
      { q: "'I have finished my homework.'의 뜻은?", choices: ["숙제를 끝낼 거예요", "숙제를 다 끝냈어요", "숙제를 하는 중이에요"], answer: 1, explain: "have + 과거분사(finished)는 현재완료. 끝낸 결과가 지금까지 이어져요 → '다 끝냈어!'" },
    ],
  },

  modal: {
    hook: "can, must, should 같은 말은 동사 앞에 붙는 <b>'마음 스티커'</b>예요. 같은 '간다'도 '갈 수 있다', '가야 한다', '가는 게 좋겠다'처럼 말하는 사람의 생각을 더해 줘요.",
    terms: [
      { term: "조동사", meaning: "동사를 도와서 뜻을 더해 주는 말이에요. can, must, should, will 등" },
      { term: "추측", meaning: "확실하지 않은 일을 짐작해서 말하는 거예요. '~일지도 몰라', '~가 틀림없어'" },
    ],
    steps: [
      {
        title: "규칙은 딱 두 가지",
        body: "① 조동사 뒤에는 항상 <b>동사의 기본 모양</b>! (can swims ✗ → can swim ✓)<br>② 주인공이 누구든 <b>조동사 모양은 그대로</b>! (she cans ✗ → she can ✓)",
        examples: [{ en: "She [[can swim]].", ko: "그녀는 수영할 수 있어요." }],
      },
      {
        title: "can: 할 수 있다 / 해도 된다",
        body: "할 수 있는 능력과, 해도 된다는 허락, 두 가지 뜻이 있어요. Can I ~?는 '~해도 돼요?' 하고 물을 때 써요.",
        examples: [
          { en: "I [[can]] ride a bike.", ko: "나는 자전거를 탈 수 있어요." },
          { en: "[[Can]] I use your pen?", ko: "네 펜 써도 돼?" },
        ],
      },
      {
        title: "must · have to: 꼭 해야 한다",
        body: "규칙처럼 꼭 해야 하는 일에 써요. <b>주의!</b> must not은 '하면 안 된다', don't have to는 '안 해도 된다'예요. 둘은 뜻이 완전히 달라요.",
        examples: [
          { en: "You [[must]] stop at a red light.", ko: "빨간불에는 멈춰야 해요." },
          { en: "You [[must not]] run here.", ko: "여기서 뛰면 안 돼요." },
          { en: "You [[don't have to]] hurry.", ko: "서두를 필요 없어요." },
        ],
      },
      {
        title: "should: ~하는 게 좋아",
        body: "친구에게 조언할 때 써요. must보다 훨씬 부드러운 말이에요.",
        examples: [{ en: "You [[should]] drink more water.", ko: "물을 더 마시는 게 좋아." }],
      },
      {
        title: "짐작할 때: must be, may be, can't be",
        body: "얼마나 확신하는지에 따라 골라 써요. must be(틀림없이 ~야) → may be(~일지도 몰라) → can't be(~일 리가 없어) 순으로 확신이 약해져요.",
        examples: [{ en: "He [[must be]] hungry. He didn't eat lunch.", ko: "그는 배고픈 게 틀림없어. 점심을 안 먹었거든." }],
      },
    ],
    checks: [
      { q: "'여기서 사진을 찍으면 안 돼요'를 영어로 하면?", choices: ["You must not take photos here.", "You don't have to take photos here.", "You can take photos here."], answer: 0, explain: "'하면 안 된다'(금지)는 must not이에요. don't have to는 '안 해도 된다'예요." },
      { q: "'She ___ dance very well.' 빈칸에 알맞은 것은?", choices: ["cans", "can", "can to"], answer: 1, explain: "조동사는 모양이 바뀌지 않고(cans ✗), 뒤에 to도 붙지 않아요(can to ✗)." },
    ],
  },

  passive: {
    hook: "같은 일도 누구를 주인공으로 하느냐에 따라 다르게 말할 수 있어요. '민수가 창문을 깼다'를 <b>창문</b>을 주인공으로 바꾸면 '창문이 (민수에 의해) 깨졌다'가 돼요. 이게 <b>수동태</b>예요.",
    terms: [
      { term: "능동태", meaning: "행동한 사람이 주인공인 문장이에요. '민수가 창문을 깼다'" },
      { term: "수동태", meaning: "행동을 받은 것이 주인공인 문장이에요. '창문이 깨졌다' (~되다, ~당하다)" },
      { term: "과거분사 (p.p.)", meaning: "동사의 세 번째 모양이에요. break-broke-broken의 broken" },
    ],
    steps: [
      {
        title: "주인공 바꾸기 3단계",
        body: "① 행동을 받은 것을 맨 앞으로 보내 주인공으로!<br>② 동사를 <b>be동사 + 과거분사</b>로 바꾸기!<br>③ 원래 행동한 사람은 <b>by</b> 뒤에 붙이기 (생략해도 돼요)",
        examples: [
          { en: "Minsu [[broke]] the window.", ko: "민수가 창문을 깼어요. (능동태)" },
          { en: "The window [[was broken]] by Minsu.", ko: "창문이 민수에 의해 깨졌어요. (수동태)" },
        ],
      },
      {
        title: "be동사가 '언제'를 알려 줘요",
        body: "수동태에서 시간은 be동사가 알려 줘요. 지금이면 is/are, 과거면 was/were, 미래면 will be예요.",
        examples: [
          { en: "English [[is spoken]] here.", ko: "여기서는 영어가 쓰여요." },
          { en: "The cake [[was made]] by Dad.", ko: "케이크는 아빠가 만드셨어요." },
          { en: "The game [[will be played]] tomorrow.", ko: "경기는 내일 열릴 거예요." },
        ],
      },
      {
        title: "언제 수동태를 쓸까?",
        body: "누가 했는지 모르거나, 별로 중요하지 않을 때 많이 써요. 내 자전거를 누가 훔쳤는지 모르니까 by ~가 없어요.",
        examples: [{ en: "My bike [[was stolen]].", ko: "내 자전거를 도둑맞았어요." }],
      },
      {
        title: "수동태가 안 되는 동사",
        body: "happen(일어나다), arrive(도착하다)처럼 '무엇을'이 필요 없는 동사는 받을 대상이 없어서 수동태로 만들 수 없어요.",
        examples: [{ en: "The accident [[happened]] yesterday.", ko: "사고는 어제 일어났어요. (was happened ✗)" }],
      },
    ],
    checks: [
      { q: "'People love this song.'을 수동태로 바꾸면?", choices: ["This song is loved by people.", "This song loves people.", "This song is loving people."], answer: 0, explain: "노래(this song)가 주인공 → is + loved(과거분사) → by people." },
      { q: "'The letter was written by Amy.'에서 편지를 쓴 사람은?", choices: ["the letter", "Amy", "알 수 없어요"], answer: 1, explain: "by 뒤가 실제로 행동한 사람이에요. 에이미가 썼어요." },
    ],
  },

  verbals: {
    hook: "동사는 변신할 수 있어요! 앞에 <b>to</b>를 붙이거나 뒤에 <b>-ing</b>를 붙이면 '~하는 것', '~할', '~하기 위해'처럼 다른 일을 해요.",
    terms: [
      { term: "to부정사", meaning: "to + 동사 기본 모양이에요. to eat, to go" },
      { term: "동명사", meaning: "동사에 -ing를 붙여서 '~하는 것'이라는 뜻으로 쓰는 거예요. eating(먹는 것)" },
      { term: "목적", meaning: "'~하려고', '~하기 위해'처럼 어떤 일을 하는 이유예요." },
    ],
    steps: [
      {
        title: "'~하는 것'으로 변신",
        body: "동사는 원래 주인공 자리에 올 수 없어요(Swim is fun ✗). 그런데 -ing나 to를 붙이면 '수영하는 것'이 되어 주인공도 되고 목적어도 될 수 있어요.",
        examples: [
          { en: "[[Swimming]] is fun.", ko: "수영하는 것은 재미있어요." },
          { en: "I like [[to draw]].", ko: "나는 그림 그리는 것을 좋아해요." },
        ],
      },
      {
        title: "'~할'로 변신해서 명사 꾸미기",
        body: "to + 동사가 명사 뒤에 오면 '~할'이라는 뜻으로 명사를 꾸며 줘요. something to eat = 먹을 것",
        examples: [
          { en: "I want something [[to eat]].", ko: "나는 먹을 것을 원해요." },
          { en: "I have homework [[to do]].", ko: "나는 해야 할 숙제가 있어요." },
        ],
      },
      {
        title: "'~하기 위해'로 변신",
        body: "to + 동사가 이유(목적)를 알려 주기도 해요. '왜?'라고 물었을 때 대답이 되는 부분이에요.",
        examples: [{ en: "She went to the store [[to buy]] milk.", ko: "그녀는 우유를 사러 가게에 갔어요. (왜 갔어? → 우유 사려고!)" }],
      },
      {
        title: "어떤 동사 뒤에 무엇이 올까?",
        body: "want(원하다), hope(바라다), decide(결정하다) 뒤에는 <b>to</b>가 와요. 아직 안 한, 앞으로 할 일이라서요. enjoy(즐기다), finish(끝내다) 뒤에는 <b>-ing</b>가 와요. 하고 있거나 이미 하던 일이라서요.",
        examples: [
          { en: "I want [[to go]] home.", ko: "집에 가고 싶어요." },
          { en: "I finished [[reading]] the book.", ko: "그 책을 다 읽었어요." },
        ],
      },
    ],
    checks: [
      { q: "'I enjoy ___ games.' 빈칸에 알맞은 것은?", choices: ["to play", "playing", "play"], answer: 1, explain: "enjoy(즐기다) 뒤에는 -ing가 와요." },
      { q: "'He studies hard to pass the test.'에서 to pass의 뜻은?", choices: ["통과하는 것", "통과할", "통과하기 위해"], answer: 2, explain: "왜 열심히 공부해? → 시험에 통과하기 위해! 목적을 나타내요." },
    ],
  },

  participle: {
    hook: "동사에 <b>-ing</b>를 붙이거나 <b>과거분사</b> 모양으로 바꾸면, 형용사처럼 명사를 꾸밀 수 있어요. '자고 있는 아기', '깨진 창문'처럼요.",
    terms: [
      { term: "현재분사", meaning: "동사-ing예요. '~하고 있는', '~하게 만드는'이라는 뜻으로 명사를 꾸며요." },
      { term: "과거분사", meaning: "동사의 세 번째 모양(broken, used)이에요. '~된', '~해진'이라는 뜻으로 명사를 꾸며요." },
      { term: "분사구문", meaning: "'~하면서', '~해서'를 짧게 줄여서 분사로 시작하는 표현이에요." },
    ],
    steps: [
      {
        title: "-ing: 스스로 ~하고 있는",
        body: "명사가 <b>직접</b> 그 행동을 하고 있을 때 -ing를 써요. a sleeping baby → 아기가 스스로 '자고 있는' 거예요.",
        examples: [
          { en: "a [[sleeping]] baby", ko: "자고 있는 아기" },
          { en: "the [[running]] boy", ko: "달리고 있는 소년" },
        ],
      },
      {
        title: "과거분사: ~된, ~당한",
        body: "명사가 그 행동을 <b>받았을</b> 때 과거분사를 써요. a broken window → 누군가가 깨서 창문이 '깨진' 거예요.",
        examples: [
          { en: "a [[broken]] window", ko: "깨진 창문" },
          { en: "a [[used]] car", ko: "사용된 차 (중고차)" },
        ],
      },
      {
        title: "감정 단어: boring vs bored",
        body: "가장 헷갈리는 부분이에요! <b>-ing는 감정을 '주는' 쪽</b>, <b>-ed는 감정을 '느끼는' 쪽</b>이에요. 영화가 나를 지루하게 만들면 영화는 boring, 지루함을 느끼는 나는 bored예요.",
        examples: [
          { en: "The movie was [[boring]].", ko: "그 영화는 지루했어요. (영화 → 지루함을 줘요)" },
          { en: "I was [[bored]].", ko: "나는 지루했어요. (나 → 지루함을 느껴요)" },
        ],
      },
      {
        title: "길어지면 명사 뒤에서 꾸며요",
        body: "꾸미는 말이 두 단어 이상이면 명사 뒤로 가요. 한국어는 '벤치에 앉아 있는 남자'처럼 앞에서 꾸미지만, 영어는 'the man sitting on the bench'처럼 뒤에서 꾸며요.",
        examples: [{ en: "The man [[sitting on the bench]] is my uncle.", ko: "벤치에 앉아 있는 남자는 우리 삼촌이에요." }],
      },
    ],
    checks: [
      { q: "선물을 받고 깜짝 놀란 나를 표현하면?", choices: ["I was surprising.", "I was surprised."], answer: 1, explain: "나는 놀라움을 '느끼는' 쪽이니 surprised예요. I was surprising은 '나는 남을 놀라게 하는 사람이었다'가 돼요." },
      { q: "'a ___ cup' (깨진 컵) 빈칸에 알맞은 것은?", choices: ["breaking", "broken"], answer: 1, explain: "컵은 누군가에 의해 '깨진' 것이니 과거분사 broken이에요." },
    ],
  },

  clauses: {
    hook: "접속사는 문장과 문장을 잇는 <b>다리</b>예요. 어떤 다리를 놓느냐에 따라 두 문장이 '그래서'인지, '그런데'인지, '만약'인지가 정해져요.",
    terms: [
      { term: "접속사", meaning: "단어나 문장을 이어 주는 말이에요. and, but, because 등" },
      { term: "절", meaning: "주어와 동사가 들어 있는 문장 덩어리예요." },
      { term: "양보", meaning: "'비록 ~이지만'처럼 예상과 반대되는 내용을 잇는 거예요." },
    ],
    steps: [
      {
        title: "똑같은 무게로 잇기: and, but, or, so",
        body: "and는 '그리고'(더하기), but은 '그런데/하지만'(반대), or는 '또는'(고르기), so는 '그래서'(결과)예요.",
        examples: [
          { en: "I was hungry, [[so]] I ate bread.", ko: "배가 고파서 빵을 먹었어요." },
          { en: "I like cats, [[but]] my sister likes dogs.", ko: "나는 고양이를 좋아하지만 언니는 개를 좋아해요." },
        ],
      },
      {
        title: "이유와 시간: because, when",
        body: "because는 '왜냐하면/~해서'(이유), when은 '~할 때'예요. 이런 접속사가 붙은 문장은 혼자 쓸 수 없고 꼭 다른 문장과 함께 써요.",
        examples: [
          { en: "I stayed home [[because]] it was cold.", ko: "추워서 집에 있었어요." },
          { en: "[[When]] I got home, Mom was cooking.", ko: "내가 집에 왔을 때 엄마는 요리 중이셨어요." },
        ],
      },
      {
        title: "조건과 양보: if, although",
        body: "if는 '만약 ~라면', although는 '비록 ~이지만'이에요. although 뒤에는 예상과 반대되는 일이 와요.",
        examples: [
          { en: "[[If]] it rains, we will stay inside.", ko: "비가 오면 우리는 안에 있을 거예요." },
          { en: "[[Although]] he was tired, he kept running.", ko: "그는 피곤했지만 계속 달렸어요." },
        ],
      },
      {
        title: "'~라는 것'으로 묶는 that",
        body: "I think, I know 뒤에 that을 쓰면 뒤에 오는 문장 전체가 '~라는 것'이 돼요. 말할 때는 that을 빼기도 해요.",
        examples: [
          { en: "I think [[that]] she is right.", ko: "나는 그녀가 옳다고 생각해요." },
          { en: "I know you are busy.", ko: "네가 바쁘다는 거 알아. (that을 뺐어요)" },
        ],
      },
    ],
    checks: [
      { q: "'I studied hard, ___ I passed the test.' 빈칸에 알맞은 것은?", choices: ["but", "so", "because"], answer: 1, explain: "열심히 공부했다 → 그래서 → 시험에 붙었다. 결과를 잇는 so!" },
      { q: "'Although it was sunny, it was cold.'의 뜻은?", choices: ["맑아서 추웠다", "맑았지만 추웠다", "맑으면 추울 것이다"], answer: 1, explain: "although는 '비록 ~이지만'. 맑으면 따뜻할 줄 알았는데 추웠다는 뜻이에요." },
    ],
  },

  relatives: {
    hook: "관계대명사는 명사 뒤에 <b>설명 꼬리표</b>를 붙이는 말이에요. 한국어는 '옆집에 사는 소녀'처럼 설명을 <b>앞</b>에 붙이지만, 영어는 'the girl who lives next door'처럼 <b>뒤</b>에 붙여요.",
    terms: [
      { term: "선행사", meaning: "설명을 듣는 명사예요. who, which 바로 앞에 있어요." },
      { term: "관계대명사", meaning: "명사 뒤에 설명을 이어 붙이는 연결 고리예요. who, which, that" },
      { term: "관계부사", meaning: "장소나 시간을 설명할 때 쓰는 연결 고리예요. where, when" },
    ],
    steps: [
      {
        title: "두 문장을 하나로 합치기",
        body: "'I have a friend.' + 'The friend lives in Busan.' 두 문장에 같은 사람(친구)이 나오죠? 두 번째 문장의 The friend를 who로 바꿔서 붙이면 한 문장이 돼요.",
        examples: [{ en: "I have a friend [[who lives in Busan]].", ko: "나는 부산에 사는 친구가 있어요." }],
      },
      {
        title: "사람이면 who, 사람이 아니면 which",
        body: "꼬리표를 받는 명사가 사람이면 who, 물건이나 동물이면 which를 써요. that은 둘 다에 쓸 수 있는 만능 연결 고리예요.",
        examples: [
          { en: "the boy [[who]] won the race", ko: "경주에서 이긴 소년" },
          { en: "the book [[which]] I read", ko: "내가 읽은 책" },
          { en: "the dog [[that]] barks a lot", ko: "많이 짖는 개" },
        ],
      },
      {
        title: "'~의'로 이을 때: whose",
        body: "'그 사람의 ~'라고 연결할 때는 whose를 써요.",
        examples: [{ en: "I know a girl [[whose]] mom is a pilot.", ko: "나는 엄마가 비행기 조종사인 소녀를 알아요. (그 소녀의 엄마)" }],
      },
      {
        title: "장소와 시간: where, when",
        body: "꼬리표가 장소를 설명하면 where, 시간을 설명하면 when을 써요.",
        examples: [
          { en: "This is the park [[where]] we played.", ko: "여기가 우리가 놀던 공원이에요." },
          { en: "I remember the day [[when]] we met.", ko: "우리가 만난 날을 기억해요." },
        ],
      },
      {
        title: "독해 비법: 괄호로 묶기",
        body: "긴 문장에서 who/which/that부터 그 설명이 끝나는 곳까지 괄호로 묶어 보세요. 괄호 밖만 읽으면 '주인공 + 동사'가 바로 보여요.",
        examples: [{ en: "The girl (who lives next door) [[is]] my best friend.", ko: "그 소녀는 (옆집에 사는) 내 단짝이에요. → 핵심: The girl is my best friend." }],
      },
    ],
    checks: [
      { q: "'the cake ___ Mom made' 빈칸에 알맞은 것은?", choices: ["who", "which", "where"], answer: 1, explain: "케이크는 사람이 아니니 which(또는 that)예요." },
      { q: "'The man who helped me was kind.'의 핵심 문장은?", choices: ["The man was kind.", "who helped me", "The man helped me."], answer: 0, explain: "(who helped me)를 괄호로 묶으면 The man was kind(그 남자는 친절했다)가 남아요." },
    ],
  },

  comparison: {
    hook: "키 재기처럼 둘을 비교할 땐 '<b>더</b> ~한', 여럿 중 1등을 말할 땐 '<b>가장</b> ~한'을 써요. 영어에서는 단어 끝에 -er, -est를 붙이거나 앞에 more, most를 붙여요.",
    terms: [
      { term: "원급", meaning: "형용사의 기본 모양이에요. tall(키가 큰)" },
      { term: "비교급", meaning: "'더 ~한'이에요. taller(더 키가 큰)" },
      { term: "최상급", meaning: "'가장 ~한'이에요. the tallest(가장 키가 큰)" },
    ],
    steps: [
      {
        title: "짧은 단어: -er, -est",
        body: "tall, fast처럼 짧은 단어는 끝에 -er(더), -est(가장)를 붙여요. 비교급 뒤에는 than(~보다), 최상급 앞에는 the가 와요.",
        examples: [
          { en: "Tom is [[taller]] than me.", ko: "Tom은 나보다 키가 커요." },
          { en: "Tom is [[the tallest]] in our class.", ko: "Tom은 우리 반에서 가장 키가 커요." },
        ],
      },
      {
        title: "긴 단어: more, most",
        body: "beautiful, interesting처럼 긴 단어는 -er을 붙이지 않고 앞에 more(더), most(가장)를 써요.",
        examples: [{ en: "This book is [[more interesting]] than that one.", ko: "이 책이 저 책보다 더 재미있어요." }],
      },
      {
        title: "모양이 확 바뀌는 단어",
        body: "good → better → best, bad → worse → worst처럼 완전히 다른 모양이 되는 단어는 외워야 해요.",
        examples: [
          { en: "Your drawing is [[better]] than mine.", ko: "네 그림이 내 것보다 나아." },
          { en: "Today is [[the best]] day ever!", ko: "오늘은 최고의 날이야!" },
        ],
      },
      {
        title: "똑같을 때: as ~ as",
        body: "두 개가 똑같을 때는 as + 기본 모양 + as를 써요. not as ~ as는 '~만큼 ~하지 않다'예요.",
        examples: [
          { en: "I am [[as tall as]] my brother.", ko: "나는 형만큼 키가 커요." },
          { en: "This box is [[not as heavy as]] that one.", ko: "이 상자는 저것만큼 무겁지 않아요." },
        ],
      },
    ],
    checks: [
      { q: "'This bag is ___ than that one.' (더 싼) 빈칸에 알맞은 것은?", choices: ["cheaper", "cheapest", "more cheap"], answer: 0, explain: "than이 있으니 비교급! cheap은 짧은 단어라 -er을 붙여요." },
      { q: "good의 최상급은?", choices: ["goodest", "best", "most good"], answer: 1, explain: "good-better-best는 모양이 바뀌는 단어예요." },
    ],
  },

  subjunctive: {
    hook: "'내가 새라면 좋을 텐데!'처럼 사실이 아닌 상상을 말할 때, 영어는 <b>상상 모드 스위치</b>를 켜요. 스위치를 켜는 방법은 동사를 <b>한 칸 더 과거로</b> 보내는 거예요.",
    terms: [
      { term: "가정법", meaning: "사실과 반대되는 상상을 말하는 방법이에요." },
      { term: "직설법", meaning: "실제로 일어날 수 있는 일을 그대로 말하는 방법이에요." },
    ],
    steps: [
      {
        title: "진짜 가능한 일 vs 상상",
        body: "'내일 비가 오면 집에 있을 거야'는 진짜로 일어날 수 있는 일이에요(현재형 + will). '내가 새라면 날아갈 텐데'는 일어날 수 없는 상상이에요. <b>상상일 때만</b> 가정법을 써요.",
        examples: [
          { en: "If it [[rains]] tomorrow, I [[will]] stay home.", ko: "내일 비가 오면 집에 있을 거야. (진짜 가능)" },
          { en: "If I [[were]] a bird, I [[would]] fly.", ko: "내가 새라면 날아갈 텐데. (상상)" },
        ],
      },
      {
        title: "지금에 대한 상상: 한 칸 과거로",
        body: "지금 사실과 반대되는 상상은 동사를 과거로 바꿔요. 지금 이야기인데 과거형을 쓰니까 '이건 진짜가 아니야!'라는 신호가 돼요. be동사는 주인공이 누구든 were를 쓰고, 뒤 문장에는 would(~할 텐데)를 써요.",
        examples: [{ en: "If I [[had]] a dog, I [[would]] walk it every day.", ko: "강아지가 있다면 매일 산책시킬 텐데. (사실: 강아지가 없어요)" }],
      },
      {
        title: "과거에 대한 상상: had + 과거분사",
        body: "이미 지나간 일을 '그때 ~했더라면' 하고 아쉬워할 때는 한 칸 더 과거인 had + 과거분사를 써요. 뒤 문장은 would have + 과거분사(~했을 텐데)예요.",
        examples: [{ en: "If I [[had studied]], I [[would have passed]].", ko: "공부했더라면 합격했을 텐데. (사실: 공부를 안 해서 떨어졌어요)" }],
      },
      {
        title: "I wish: ~라면 좋을 텐데",
        body: "I wish 뒤에서도 상상 모드가 켜져요. 지금 이룰 수 없는 소망은 과거형으로 말해요.",
        examples: [
          { en: "I wish I [[could]] fly.", ko: "내가 날 수 있으면 좋을 텐데." },
          { en: "I wish I [[were]] taller.", ko: "키가 더 크면 좋을 텐데." },
        ],
      },
    ],
    checks: [
      { q: "'If I were you, I would say sorry.'는 어떤 뜻일까요?", choices: ["나는 너야", "내가 너라면 사과할 텐데", "나는 사과했어"], answer: 1, explain: "If I were you는 '내가 너라면'이라는 상상이에요. 친구에게 조언할 때 자주 써요." },
      { q: "진짜로 일어날 수 있는 일을 말한 문장은?", choices: ["If I had wings, I would fly.", "If it snows, we will make a snowman."], answer: 1, explain: "눈은 정말 올 수 있으니 현재형 + will. 날개는 상상이라 가정법이에요." },
    ],
  },

  special: {
    hook: "영어는 보통 '주인공 → 동사' 순서지만, 무언가를 특별히 <b>강조</b>하고 싶을 때는 순서를 바꾸거나 특별한 틀을 써요. 어려워 보여도 <b>원래 순서로 되돌려 읽으면</b> 쉬워요.",
    terms: [
      { term: "도치", meaning: "주어와 동사(조동사)의 순서가 바뀌는 거예요." },
      { term: "강조", meaning: "어떤 말을 특별히 힘주어 말하는 거예요." },
      { term: "동격", meaning: "같은 것을 다른 말로 한 번 더 설명하는 거예요." },
      { term: "생략", meaning: "없어도 뜻이 통하는 말을 빼는 거예요." },
    ],
    steps: [
      {
        title: "강조 틀: It is ~ that",
        body: "'바로 ~이야!'라고 강조하고 싶은 말을 It is(It was)와 that 사이에 넣어요. 나머지는 that 뒤에 그대로 써요.",
        examples: [
          { en: "Tom broke the window.", ko: "Tom이 창문을 깼어요." },
          { en: "[[It was Tom that]] broke the window.", ko: "창문을 깬 건 바로 Tom이었어요!" },
        ],
      },
      {
        title: "부정어가 앞에 오면 순서가 바뀌어요",
        body: "Never(절대 ~않다) 같은 말을 강조하려고 문장 맨 앞에 두면, 주어와 조동사 순서가 질문처럼 바뀌어요. 원래 순서로 되돌려 읽으면 쉬워요.",
        examples: [
          { en: "I have never seen such a big fish.", ko: "나는 그렇게 큰 물고기를 본 적이 없어요." },
          { en: "[[Never have I]] seen such a big fish.", ko: "(위와 같은 뜻, 더 강조한 말)" },
        ],
      },
      {
        title: "동격: 한 번 더 설명하기",
        body: "콤마(,) 사이에 있는 말이 바로 앞의 명사를 다시 설명할 때가 있어요. 괄호처럼 빼고 읽어도 문장이 완성돼요.",
        examples: [{ en: "Mr. Lee, [[our teacher]], is very funny.", ko: "우리 선생님이신 이 선생님은 아주 재미있어요." }],
      },
      {
        title: "생략: 없어도 아는 말 빼기",
        body: "반복되거나 당연한 말은 빼기도 해요. When you are ready에서 you are를 빼고 When ready라고 해도 뜻이 통해요.",
        examples: [{ en: "[[When ready]], raise your hand.", ko: "준비되면 손을 드세요. (= When you are ready)" }],
      },
    ],
    checks: [
      { q: "'It was my mom that made this cake.'에서 강조된 말은?", choices: ["this cake", "my mom", "made"], answer: 1, explain: "It was와 that 사이에 있는 my mom이 강조됐어요. '이 케이크를 만든 건 바로 우리 엄마야!'" },
      { q: "'Never did I think he would win.'을 원래 순서로 바꾸면?", choices: ["I never thought he would win.", "He never thought I would win."], answer: 0, explain: "Never did I think → I never thought. '그가 이길 거라고는 전혀 생각 못 했다'는 뜻이에요." },
    ],
  },
};
