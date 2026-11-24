// 접두사 · 접미사: 단어 조각의 뜻을 알면 처음 보는 단어도 짐작할 수 있다.
// 행: [접사, 뜻, 설명, [[원래 단어, 만든 단어, 만든 단어 뜻], ...]]. 만든 단어는 전체에서 겹치지 않는다.
const AFFIX_SETS = [
  {
    id: "prefix",
    levelId: "middle",
    emoji: "⬅️",
    title: "접두사: 단어 앞에 붙는 조각",
    desc: "뜻을 바꾸는 앞 조각 10개",
    intro: "<b>접두사</b>는 단어 <b>앞</b>에 붙어서 <b>뜻을 바꿔요</b>. 품사는 그대로예요. happy(행복한) 앞에 un-(아닌)이 붙으면 unhappy(불행한)가 되죠. 처음 보는 긴 단어는 <b>앞 조각 + 뿌리 단어</b>로 나누어 보면 뜻이 보여요.",
    rows: [
      ["un-", "아닌, 반대", "형용사 앞에서 '~하지 않은'이 돼요.", [["happy", "unhappy", "불행한"], ["kind", "unkind", "불친절한"], ["lock", "unlock", "(잠긴 것을) 열다"]]],
      ["dis-", "아닌, 반대로", "동사 · 형용사의 반대 뜻을 만들어요.", [["agree", "disagree", "동의하지 않다"], ["appear", "disappear", "사라지다"], ["honest", "dishonest", "정직하지 않은"]]],
      ["in- / im-", "아닌", "b · m · p 앞에서는 im-이 돼요.", [["possible", "impossible", "불가능한"], ["correct", "incorrect", "틀린"], ["polite", "impolite", "무례한"]]],
      ["re-", "다시", "동작을 한 번 더 하는 거예요.", [["write", "rewrite", "다시 쓰다"], ["use", "reuse", "재사용하다"], ["build", "rebuild", "다시 짓다"]]],
      ["pre-", "미리, 전에", "때가 앞선다는 뜻이에요.", [["view", "preview", "미리 보기"], ["school", "preschool", "유치원, 취학 전"], ["heat", "preheat", "미리 데우다"]]],
      ["mis-", "잘못", "잘못 · 틀리게 했다는 뜻이에요.", [["understand", "misunderstand", "오해하다"], ["spell", "misspell", "철자를 틀리다"], ["lead", "mislead", "잘못 이끌다, 속이다"]]],
      ["over-", "너무, 지나치게", "정도가 넘친다는 뜻이에요.", [["eat", "overeat", "과식하다"], ["sleep", "oversleep", "늦잠 자다"], ["work", "overwork", "과로하다"]]],
      ["inter-", "사이, 서로", "둘 이상 사이에서 일어나는 거예요.", [["national", "international", "국제적인"], ["act", "interact", "상호 작용하다"], ["view", "interview", "면접, 인터뷰"]]],
      ["sub-", "아래", "아래에 있거나 아래 단계라는 뜻이에요.", [["way", "subway", "지하철"], ["marine", "submarine", "잠수함"], ["title", "subtitle", "자막, 부제"]]],
      ["co-", "함께", "같이 한다는 뜻이에요.", [["worker", "coworker", "동료"], ["operate", "cooperate", "협력하다"], ["exist", "coexist", "공존하다"]]],
    ],
  },
  {
    id: "suffix",
    levelId: "middle",
    emoji: "➡️",
    title: "접미사: 단어 뒤에 붙는 조각",
    desc: "품사를 바꾸는 뒤 조각 10개",
    intro: "<b>접미사</b>는 단어 <b>뒤</b>에 붙어서 주로 <b>품사를 바꿔요</b>. -ful이 붙으면 형용사, -tion · -ment · -ness가 붙으면 명사, -ly가 붙으면 부사가 돼요. 그래서 접미사만 봐도 <b>문장에서 어떤 역할인지</b> 짐작할 수 있어요.",
    rows: [
      ["-ful", "~이 가득한 (형용사)", "명사 뒤에 붙어 형용사가 돼요.", [["help", "helpful", "도움이 되는"], ["color", "colorful", "다채로운"], ["care", "careful", "조심하는"]]],
      ["-less", "~이 없는 (형용사)", "-ful의 반대예요.", [["home", "homeless", "집이 없는"], ["hope", "hopeless", "희망이 없는"], ["end", "endless", "끝없는"]]],
      ["-able / -ible", "~할 수 있는 (형용사)", "동사 뒤에 붙어 '~할 수 있는'이 돼요.", [["read", "readable", "읽을 수 있는"], ["wash", "washable", "물빨래할 수 있는"], ["enjoy", "enjoyable", "즐거운"]]],
      ["-tion / -sion", "~하는 것 (명사)", "동사를 명사로 바꿔요.", [["invent", "invention", "발명(품)"], ["decide", "decision", "결정"], ["educate", "education", "교육"]]],
      ["-ment", "~하는 것 (명사)", "동사를 명사로 바꿔요.", [["move", "movement", "움직임, 운동"], ["agree", "agreement", "동의, 합의"], ["enjoy", "enjoyment", "즐거움"]]],
      ["-ness", "~함 (명사)", "형용사를 명사로 바꿔요.", [["kind", "kindness", "친절"], ["dark", "darkness", "어둠"], ["sad", "sadness", "슬픔"]]],
      ["-er / -or", "~하는 사람 · 물건 (명사)", "동사 뒤에 붙어 하는 사람이 돼요.", [["teach", "teacher", "선생님"], ["visit", "visitor", "방문객"], ["act", "actor", "배우"]]],
      ["-ly", "~하게 (부사)", "형용사 뒤에 붙어 부사가 돼요.", [["quick", "quickly", "빨리"], ["careful", "carefully", "조심스럽게"], ["real", "really", "정말로"]]],
      ["-ize", "~으로 만들다 (동사)", "명사 · 형용사를 동사로 바꿔요.", [["modern", "modernize", "현대화하다"], ["real", "realize", "깨닫다"], ["organ", "organize", "정리하다, 조직하다"]]],
      ["-ous", "~의 성질이 있는 (형용사)", "명사 뒤에 붙어 형용사가 돼요.", [["danger", "dangerous", "위험한"], ["fame", "famous", "유명한"], ["mystery", "mysterious", "신비한"]]],
    ],
  },
].map((set) => ({ ...set, items: set.rows.map(([a, ko, note, words]) => ({ a, ko, note, words: words.map(([base, word, meaning]) => ({ base, word, meaning })) })) }));
