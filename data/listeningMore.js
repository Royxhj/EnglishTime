// 초등 듣기 대화 2차 추가: 초등 단계마다 10개씩 (단계마다 25개).
{
  const more = {
    "elementary-low": [
      { lines: [["M", "What color is your bike?"], ["W", "It's yellow."]], q: "여자의 자전거 색은?", choices: ["빨간색", "노란색", "파란색", "초록색"], answer: 1, explain: "It's yellow. → 노란색이에요." },
      { lines: [["W", "Can you swim?"], ["M", "Yes, I can. I can swim fast."]], q: "남자가 할 수 있는 것은?", choices: ["수영", "스케이트", "자전거", "춤"], answer: 0, explain: "I can swim fast. → 수영을 할 수 있어요." },
      { lines: [["M", "Where is my cap?"], ["W", "It's under the bed."]], q: "모자는 어디에 있나요?", choices: ["책상 위", "의자 옆", "침대 밑", "상자 안"], answer: 2, explain: "under the bed → 침대 밑이에요." },
      { lines: [["W", "Do you like carrots?"], ["M", "No, I don't. I like corn."]], q: "남자가 좋아하는 것은?", choices: ["당근", "옥수수", "감자", "토마토"], answer: 1, explain: "I like corn. corn은 옥수수예요." },
      { lines: [["M", "How old is your brother?"], ["W", "He is six years old."]], q: "여자의 남동생은 몇 살인가요?", choices: ["5살", "6살", "7살", "8살"], answer: 1, explain: "He is six years old. → 6살이에요." },
      { lines: [["W", "I'm hungry."], ["M", "Here. Have a banana."]], q: "남자가 여자에게 준 것은?", choices: ["사과", "빵", "바나나", "우유"], answer: 2, explain: "Have a banana. → 바나나를 줬어요." },
      { lines: [["M", "What do you see?"], ["W", "I see three ducks on the lake."]], q: "여자가 본 오리는 몇 마리인가요?", choices: ["2마리", "3마리", "4마리", "5마리"], answer: 1, explain: "three ducks → 세 마리예요." },
      { lines: [["W", "Let's play hide-and-seek."], ["M", "Okay! I'll count to ten."]], q: "두 사람이 할 놀이는?", choices: ["숨바꼭질", "줄넘기", "공놀이", "그림 그리기"], answer: 0, explain: "hide-and-seek은 숨바꼭질이에요." },
      { lines: [["M", "Is this your pencil?"], ["W", "No. My pencil is blue. That one is red."]], q: "여자의 연필 색은?", choices: ["빨간색", "검은색", "파란색", "노란색"], answer: 2, explain: "My pencil is blue. → 파란색이에요." },
      { lines: [["W", "Good night, Dad."], ["M", "Good night. Sleep well."]], q: "지금은 언제인가요?", choices: ["아침", "점심", "잠자기 전", "학교 가기 전"], answer: 2, explain: "Good night은 잠자기 전에 하는 인사예요." },
    ],
    "elementary-mid": [
      { lines: [["W", "What did you do yesterday?"], ["M", "I went to the zoo with my uncle."]], q: "남자가 어제 간 곳은?", choices: ["동물원", "박물관", "놀이공원", "수영장"], answer: 0, explain: "I went to the zoo → 동물원에 갔어요." },
      { lines: [["M", "How much is this notebook?"], ["W", "It's two thousand won."]], q: "공책의 가격은?", choices: ["1,000원", "2,000원", "3,000원", "1,500원"], answer: 1, explain: "two thousand won → 2,000원이에요." },
      { lines: [["W", "What's wrong?"], ["M", "I have a headache."], ["W", "You should take some medicine."]], q: "남자는 어디가 아픈가요?", choices: ["배", "이", "머리", "다리"], answer: 2, explain: "headache는 두통, 머리가 아파요." },
      { lines: [["M", "When is your birthday?"], ["W", "It's in July. July 10th."]], q: "여자의 생일은?", choices: ["6월 10일", "7월 10일", "7월 1일", "8월 10일"], answer: 1, explain: "July 10th → 7월 10일이에요." },
      { lines: [["W", "Which season do you like?"], ["M", "I like winter because I can ski."]], q: "남자가 겨울을 좋아하는 이유는?", choices: ["눈사람을 만들 수 있어서", "스키를 탈 수 있어서", "방학이 길어서", "생일이 있어서"], answer: 1, explain: "because I can ski → 스키를 탈 수 있어서예요." },
      { lines: [["M", "Can you help me carry this box?"], ["W", "Sure. It's heavy!"]], q: "남자가 부탁한 것은?", choices: ["상자 옮기기", "창문 닦기", "숙제 돕기", "길 안내"], answer: 0, explain: "help me carry this box → 상자 옮기는 걸 도와 달래요." },
      { lines: [["W", "Is your school far from here?"], ["M", "No. It takes five minutes on foot."]], q: "남자는 학교까지 어떻게, 얼마나 걸리나요?", choices: ["걸어서 5분", "버스로 5분", "걸어서 15분", "자전거로 10분"], answer: 0, explain: "five minutes on foot → 걸어서 5분이에요." },
      { lines: [["M", "Whose turn is it?"], ["W", "It's Jimin's turn. Then it's your turn."]], q: "지금은 누구의 차례인가요?", choices: ["남자", "여자", "지민", "선생님"], answer: 2, explain: "It's Jimin's turn. → 지민이 차례예요." },
      { lines: [["W", "What are you doing?"], ["M", "I'm making a card for my mom. Today is her birthday."]], q: "남자가 카드를 만드는 이유는?", choices: ["엄마 생일이라서", "어버이날이라서", "크리스마스라서", "숙제라서"], answer: 0, explain: "Today is her birthday. → 엄마 생일이에요." },
      { lines: [["M", "I'd like a hamburger and a cola, please."], ["W", "Sorry, we don't have cola. How about orange juice?"], ["M", "Okay, orange juice, please."]], q: "남자가 마실 것은?", choices: ["콜라", "오렌지 주스", "우유", "물"], answer: 1, explain: "콜라가 없어서 orange juice를 주문했어요." },
    ],
    "elementary-high": [
      { lines: [["W", "What are you going to do this weekend?"], ["M", "I'm going to visit my grandparents in Jeonju."]], q: "남자가 이번 주말에 할 일은?", choices: ["조부모님 댁 방문", "전주 여행 계획 세우기", "친구와 캠핑", "도서관 가기"], answer: 0, explain: "I'm going to visit my grandparents → 조부모님 댁에 가요." },
      { lines: [["M", "How often do you practice the piano?"], ["W", "Every day after school, for thirty minutes."]], q: "여자가 피아노를 연습하는 시간은?", choices: ["매일 30분", "매일 1시간", "일주일에 30분", "주말에만 30분"], answer: 0, explain: "Every day ~ for thirty minutes → 매일 30분이에요." },
      { lines: [["W", "Why were you absent yesterday?"], ["M", "I had a bad cold, so I went to the doctor."]], q: "남자가 어제 결석한 이유는?", choices: ["심한 감기", "가족 여행", "늦잠", "다리 부상"], answer: 0, explain: "I had a bad cold → 감기가 심했어요." },
      { lines: [["M", "Excuse me. How can I get to the museum?"], ["W", "Take bus number 15 and get off at the third stop."]], q: "박물관에 가려면 몇 번째 정류장에서 내리나요?", choices: ["첫 번째", "두 번째", "세 번째", "다섯 번째"], answer: 2, explain: "get off at the third stop → 세 번째 정류장이에요." },
      { lines: [["W", "Which is taller, the tower or the building?"], ["M", "The tower is taller. It's the tallest in the city."]], q: "도시에서 가장 높은 것은?", choices: ["건물", "탑", "다리", "산"], answer: 1, explain: "The tower ~ the tallest in the city → 탑이에요." },
      { lines: [["M", "You look worried. What's the matter?"], ["W", "I lost my phone. I think I left it on the bus."], ["M", "Let's call the bus company."]], q: "여자가 휴대폰을 두고 온 곳은?", choices: ["교실", "버스", "식당", "공원"], answer: 1, explain: "I left it on the bus → 버스에 두고 왔어요." },
      { lines: [["W", "What does your cousin look like?"], ["M", "She is tall and has long, straight hair. She wears glasses."]], q: "남자의 사촌에 대해 맞는 것은?", choices: ["키가 작다", "곱슬머리다", "안경을 쓴다", "머리가 짧다"], answer: 2, explain: "She wears glasses. → 안경을 써요." },
      { lines: [["M", "Should we take the subway or a taxi?"], ["W", "The subway. A taxi is too expensive, and the roads are busy now."]], q: "여자가 지하철을 타자고 한 이유는?", choices: ["택시가 비싸고 길이 막혀서", "지하철역이 가까워서", "택시를 잡을 수 없어서", "지하철이 더 깨끗해서"], answer: 0, explain: "A taxi is too expensive(택시는 너무 비싸고), the roads are busy(길이 막혀)라고 했어요." },
      { lines: [["W", "I want to join a club. Any ideas?"], ["M", "How about the science club? You like doing experiments."], ["W", "Good idea!"]], q: "남자가 추천한 동아리는?", choices: ["과학 동아리", "미술 동아리", "독서 동아리", "축구 동아리"], answer: 0, explain: "How about the science club? → 과학 동아리예요." },
      { lines: [["M", "It takes thirty minutes to get there by bike."], ["W", "That's too long. Let's go by bus. It only takes ten minutes."]], q: "버스로 가면 얼마나 걸리나요?", choices: ["10분", "20분", "30분", "40분"], answer: 0, explain: "It only takes ten minutes. → 버스로 10분이에요." },
    ],
  };
  for (const [levelId, items] of Object.entries(more)) LISTENING_SETS.find((s) => s.levelId === levelId).items.push(...items);
}
