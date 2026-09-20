/* MONSTER CARDS Deck Maker
 * Source: supplied XLSX + official MONSTER CARDS compatibility page.
 * Limits: 20 cards / 200 total COST.
 */
"use strict";

const DATA = {
  "deckLimits": {
    "cards": 20,
    "cost": 200
  },
  "rarity": [
    {
      "ko": "C",
      "code": 1,
      "cost": 5
    },
    {
      "ko": "R",
      "code": 2,
      "cost": 6
    },
    {
      "ko": "SR",
      "code": 3,
      "cost": 8
    },
    {
      "ko": "UR",
      "code": 4,
      "cost": 12
    }
  ],
  "atk": [
    1,
    2,
    3,
    4,
    5
  ],
  "skills": [
    {
      "ko": "없음",
      "en": "None",
      "type": "None",
      "pack": "None",
      "cost": 0
    },
    {
      "ko": "보호",
      "en": "Protection",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "파멸",
      "en": "Ruin",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "압박",
      "en": "Pressure",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "차기",
      "en": "Kick Out",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "우정",
      "en": "Friendship",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "자이언트 킬링",
      "en": "Giant Killing",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "양날의 검",
      "en": "Double Edged",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "회복",
      "en": "Heal",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "전격",
      "en": "Lightning",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "마술",
      "en": "Trick",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "회귀",
      "en": "Return",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "파동",
      "en": "Surge",
      "type": "Standard",
      "pack": "Basic",
      "cost": 2
    },
    {
      "ko": "역행",
      "en": "Reverse",
      "type": "Discard",
      "pack": "Basic",
      "cost": 1
    },
    {
      "ko": "저격",
      "en": "Snipe",
      "type": "Discard",
      "pack": "Basic",
      "cost": 1
    },
    {
      "ko": "회피",
      "en": "Dodge",
      "type": "Discard",
      "pack": "Basic",
      "cost": 1
    },
    {
      "ko": "원소의 급류",
      "en": "Elemental Torrent",
      "type": "GameChanger",
      "pack": "Basic",
      "cost": 4
    },
    {
      "ko": "혁명",
      "en": "Revolution",
      "type": "GameChanger",
      "pack": "Basic",
      "cost": 4
    },
    {
      "ko": "종족의 자부심",
      "en": "Species Pride",
      "type": "GameChanger",
      "pack": "Basic",
      "cost": 4
    },
    {
      "ko": "독술사",
      "en": "Poisoner",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "도전",
      "en": "Challenge",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "진화",
      "en": "Evolve",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "매혹",
      "en": "Fascinate",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "야생 요소",
      "en": "Wild Element",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "함정사",
      "en": "Trapper",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "막기",
      "en": "Parry",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "선택",
      "en": "Choice",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "회심",
      "en": "Critical",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "지휘관",
      "en": "Commander",
      "type": "Standard",
      "pack": "Advanced",
      "cost": 2
    },
    {
      "ko": "부활",
      "en": "Revival",
      "type": "Discard",
      "pack": "Advanced",
      "cost": 1
    },
    {
      "ko": "탐욕",
      "en": "Greed",
      "type": "Discard",
      "pack": "Advanced",
      "cost": 1
    },
    {
      "ko": "암흑 소환",
      "en": "Dark Summon",
      "type": "Discard",
      "pack": "Advanced",
      "cost": 1
    },
    {
      "ko": "망각",
      "en": "Oblivion",
      "type": "Discard",
      "pack": "Advanced",
      "cost": 1
    },
    {
      "ko": "융합",
      "en": "Fusion",
      "type": "Discard",
      "pack": "Advanced",
      "cost": 1
    },
    {
      "ko": "인과율 조작",
      "en": "Causality Manipulation",
      "type": "GameChanger",
      "pack": "Advanced",
      "cost": 4
    },
    {
      "ko": "황제",
      "en": "Emperor",
      "type": "GameChanger",
      "pack": "Advanced",
      "cost": 4
    },
    {
      "ko": "라이브 온 스테이지",
      "en": "Live On Stage",
      "type": "GameChanger",
      "pack": "Advanced",
      "cost": 4
    },
    {
      "ko": "무사도",
      "en": "Bushido",
      "type": "Standard",
      "pack": "Sunrise",
      "cost": 2
    },
    {
      "ko": "진압",
      "en": "Suppression",
      "type": "Standard",
      "pack": "Sunrise",
      "cost": 2
    },
    {
      "ko": "마음의 눈",
      "en": "mindseye",
      "type": "Standard",
      "pack": "Sunrise",
      "cost": 2
    },
    {
      "ko": "명상",
      "en": "Meditation",
      "type": "Discard",
      "pack": "Sunrise",
      "cost": 1
    },
    {
      "ko": "암살",
      "en": "Assassin",
      "type": "Discard",
      "pack": "Sunrise",
      "cost": 1
    },
    {
      "ko": "결계",
      "en": "Divine Nullification",
      "type": "GameChanger",
      "pack": "Sunrise",
      "cost": 4
    },
    {
      "ko": "복수자",
      "en": "Revenger",
      "type": "Standard",
      "pack": "Named",
      "cost": 2
    },
    {
      "ko": "스카이 하이",
      "en": "Sky High",
      "type": "Standard",
      "pack": "Named",
      "cost": 2
    },
    {
      "ko": "음양",
      "en": "Ying Yang",
      "type": "Standard",
      "pack": "Named",
      "cost": 2
    },
    {
      "ko": "트릭 오어 트릿",
      "en": "Trick Or Treat",
      "type": "Standard",
      "pack": "Named",
      "cost": 2
    },
    {
      "ko": "응원",
      "en": "Cheer",
      "type": "Discard",
      "pack": "Named",
      "cost": 1
    },
    {
      "ko": "청천벽력",
      "en": "Bolt From The Blue",
      "type": "GameChanger",
      "pack": "Named",
      "cost": 4
    },
    {
      "ko": "추적자",
      "en": "Chaser",
      "type": "Standard",
      "pack": "Horror",
      "cost": 2
    },
    {
      "ko": "원한",
      "en": "Grudge",
      "type": "Standard",
      "pack": "Horror",
      "cost": 2
    },
    {
      "ko": "단절",
      "en": "Severance",
      "type": "Standard",
      "pack": "Horror",
      "cost": 2
    },
    {
      "ko": "점프 스케어",
      "en": "Jumpscare",
      "type": "Discard",
      "pack": "Horror",
      "cost": 1
    },
    {
      "ko": "어둠 속에서",
      "en": "In The Dark",
      "type": "GameChanger",
      "pack": "Horror",
      "cost": 4
    },
    {
      "ko": "두려움",
      "en": "Petrifying Fear",
      "type": "GameChanger",
      "pack": "Horror",
      "cost": 4
    },
    {
      "ko": "과감",
      "en": "Bravery",
      "type": "Standard",
      "pack": "Inspiration",
      "cost": 2
    },
    {
      "ko": "라이벌",
      "en": "Rival",
      "type": "Standard",
      "pack": "Inspiration",
      "cost": 2
    },
    {
      "ko": "도둑",
      "en": "Thief",
      "type": "Standard",
      "pack": "Inspiration",
      "cost": 2
    },
    {
      "ko": "계약자",
      "en": "Covenanter",
      "type": "Discard",
      "pack": "Inspiration",
      "cost": 1
    },
    {
      "ko": "운명",
      "en": "Destiny",
      "type": "Discard",
      "pack": "Inspiration",
      "cost": 1
    },
    {
      "ko": "충성",
      "en": "Fealty",
      "type": "Discard",
      "pack": "Inspiration",
      "cost": 1
    },
    {
      "ko": "풍요",
      "en": "Abundance",
      "type": "GameChanger",
      "pack": "Inspiration",
      "cost": 4
    },
    {
      "ko": "생산",
      "en": "Manufacture",
      "type": "GameChanger",
      "pack": "Inspiration",
      "cost": 4
    },
    {
      "ko": "이상한 나라",
      "en": "Wonderland",
      "type": "GameChanger",
      "pack": "Inspiration",
      "cost": 4
    }
  ],
  "elements": [
    {
      "ko": "무",
      "en": "normal"
    },
    {
      "ko": "화",
      "en": "fire"
    },
    {
      "ko": "수",
      "en": "water"
    },
    {
      "ko": "목",
      "en": "wood"
    },
    {
      "ko": "광",
      "en": "light"
    },
    {
      "ko": "암",
      "en": "dark"
    }
  ],
  "species": [
    {
      "ko": "인간",
      "en": "human"
    },
    {
      "ko": "짐승",
      "en": "beast"
    },
    {
      "ko": "바다",
      "en": "sea"
    },
    {
      "ko": "정령",
      "en": "elemental"
    },
    {
      "ko": "용",
      "en": "dragon"
    },
    {
      "ko": "신",
      "en": "god"
    },
    {
      "ko": "악마",
      "en": "devil"
    },
    {
      "ko": "기계",
      "en": "machine"
    },
    {
      "ko": "벌레",
      "en": "insect"
    },
    {
      "ko": "유령",
      "en": "ghost"
    }
  ],
  "means": [
    {
      "ko": "근접",
      "en": "close"
    },
    {
      "ko": "원거리",
      "en": "range"
    },
    {
      "ko": "마법",
      "en": "magic"
    },
    {
      "ko": "특수",
      "en": "special"
    },
    {
      "ko": "방어",
      "en": "guard"
    }
  ],
  "sizes": [
    {
      "ko": "소",
      "en": "small"
    },
    {
      "ko": "중",
      "en": "medium"
    },
    {
      "ko": "대",
      "en": "large"
    }
  ],
  "skillCostByType": {
    "None": 0,
    "Standard": 2,
    "Discard": 1,
    "GameChanger": 4
  },
  "officialCompatibilityImages": {
    "element": "https://s3.ap-northeast-1.amazonaws.com/wraptas-prod/gasaipages/647adb25-1ed0-43ea-8b54-3110fd22eb84/2b52daca270bf22971ad4059d3cfef61.png",
    "species": "https://s3.ap-northeast-1.amazonaws.com/wraptas-prod/gasaipages/998f761c-5ebe-4112-9084-8b3b8bdc1a3a/706add2faf9b620471d501bd25e46a96.png",
    "means": "https://s3.ap-northeast-1.amazonaws.com/wraptas-prod/gasaipages/4b308199-7134-48ee-ab82-955b9a063601/c2d78015a479378275e96af4feeb3330.png",
    "size": "https://s3.ap-northeast-1.amazonaws.com/wraptas-prod/gasaipages/9e861ac6-229a-4230-b54d-793f7e0b91f9/6996945380d9998596e4029c3372ceeb.png"
  },
  "compatibilityNotes": {
    "element": "일반(normal) 속성은 같은 일반 속성끼리만 상성이 적용되며, 방어 측이 유리합니다. 불 > 물 > 목 > 불의 가위바위보 관계입니다. 빛과 어둠은 서로 공격할 때 유리하고, 같은 속성끼리는 방어 측이 유리합니다.",
    "species": "공식 상성표의 종족 행렬을 사용.",
    "means": "근거리 > 원거리 > 마법 > 근거리의 가위바위보 관계입니다. 특수는 공격에 특화된 타입으로, 방어를 관통할 수 있습니다. 방어는 방어에 특화된 타입으로, 공격할 때는 항상 불리합니다.",
    "size": "소 < 중 < 대 < 소의 가위바위보 관계입니다."
  }
};

const LIMIT = DATA.deckLimits;
const STORAGE_KEY = "monsterCardsDeckMakerV1";

const state = {
  deck: [],
  selected: -1,
  dragging: -1
};
let autoUndo = null;   // 덱 맞춤 직전 상태(되돌리기용). 다른 편집이 생기면 null 로 초기화된다.

const SKILL_DETAILS = [
  {
    "ko": "없음",
    "en": "",
    "type": "",
    "pack": "",
    "cost": 0,
    "category": "스킬 없음",
    "description": "스킬 효과가 없습니다.",
    "related": ""
  },
  {
    "ko": "보호",
    "en": "Protection",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "방어/대미지 감소",
    "description": "이 카드는 방어를 수행하는 턴에 플레이어가 받는 피해를 3 줄인다.",
    "related": ""
  },
  {
    "ko": "파멸",
    "en": "Ruin",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "핸드 파괴",
    "description": "이 카드의 공격을 받은 플레이어는 손패를 모두 버린다.",
    "related": ""
  },
  {
    "ko": "압박",
    "en": "Pressure",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "덱 피해/견제",
    "description": "이 카드가 필드에 나올 때 공격 구역의 카드 소유자는 1 피해를 받는다.",
    "related": ""
  },
  {
    "ko": "차기",
    "en": "Kick Out",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "제거/바운스",
    "description": "이 카드를 공격 존으로 교체할 때 즉시 공격 존의 카드를 해당 소유자의 손으로 돌린다. 대상 카드가 차기 스킬을 가지고 있는 경우 발동할 수 없다.",
    "related": ""
  },
  {
    "ko": "우정",
    "en": "Friendship",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "전투 리셋/제거",
    "description": "이 카드를 방어 구역에 놓았을 때 공격 구역의 카드와 희귀도가 일치하면 두 카드를 폐허로 이동시키고 턴을 다시 진행한다.",
    "related": ""
  },
  {
    "ko": "자이언트 킬링",
    "en": "Giant Killing",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "전투 보정",
    "description": "이 카드보다 공격력이 높다면 자신이 바늘을 움직일 때 한 칸 더 움직인다.",
    "related": ""
  },
  {
    "ko": "양날의 검",
    "en": "Double Edged",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "전투/리스크",
    "description": "전투중 장침이 유리한 부분으로 움직일 때마다 상대에게 1 피해를 주고, 불리한 방향으로 움직일 때마다 자신이 1 피해를 받습니다. 단, 각 경우는 최대 2회까지만 발생할 수 있습니다.",
    "related": ""
  },
  {
    "ko": "회복",
    "en": "Heal",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "회복",
    "description": "체력을 1 회복한다.",
    "related": ""
  },
  {
    "ko": "전격",
    "en": "Lightning",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "지속 피해",
    "description": "이 카드가 공격 존에 놓일 때, 턴을 맞이한 플레이어에게 1의 피해를 줍니다.",
    "related": ""
  },
  {
    "ko": "마술",
    "en": "Trick",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "손패 교환/교란",
    "description": "이 카드가 필드에 놓일때 대치한 카드의 소유자와 손패의 카드 1장을 무작위로 교체합니다.",
    "related": ""
  },
  {
    "ko": "회귀",
    "en": "Return",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "재사용/회수",
    "description": "이 카드가 공격에 성공했을 때, 이 카드를 덱의 맨 아래로 돌려보낸다.",
    "related": ""
  },
  {
    "ko": "파동",
    "en": "Surge",
    "type": "Standard",
    "pack": "Basic",
    "cost": 2,
    "category": "광역 덱 피해",
    "description": "카드가 필드에 나올때, 자신을 포함한 모든 사람이 1의 피해를 받습니다.",
    "related": ""
  },
  {
    "ko": "역행",
    "en": "Reverse",
    "type": "Discard",
    "pack": "Basic",
    "cost": 1,
    "category": "턴 순서 변경",
    "description": "카드를 냈을 때 플레이어의 턴 순서를 역순으로 바꾼다.",
    "related": ""
  },
  {
    "ko": "저격",
    "en": "Snipe",
    "type": "Discard",
    "pack": "Basic",
    "cost": 1,
    "category": "직접 피해",
    "description": "플레이어를 지정하고 1의 피해를 준다.",
    "related": ""
  },
  {
    "ko": "회피",
    "en": "Dodge",
    "type": "Discard",
    "pack": "Basic",
    "cost": 1,
    "category": "회피/방어",
    "description": "즉시 턴을 종료하고 공격력이 2 이하인 카드의 공격을 회피한다.",
    "related": ""
  },
  {
    "ko": "원소의 급류",
    "en": "Elemental Torrent",
    "type": "GameChanger",
    "pack": "Basic",
    "cost": 4,
    "category": "속성 강화/규칙 변경",
    "description": "이 카드와 같은 속성의 카드는 대전 시 최강 속성이 된다.",
    "related": ""
  },
  {
    "ko": "혁명",
    "en": "Revolution",
    "type": "GameChanger",
    "pack": "Basic",
    "cost": 4,
    "category": "레어도/규칙 변경",
    "description": "대전 중 희귀도의 강약이 반전된다.",
    "related": ""
  },
  {
    "ko": "종족의 자부심",
    "en": "Species Pride",
    "type": "GameChanger",
    "pack": "Basic",
    "cost": 4,
    "category": "종족 강화",
    "description": "이 카드와 같은 종족의 카드는 대전시 단침 유리 (+1)을 얻는다.",
    "related": ""
  },
  {
    "ko": "독술사",
    "en": "Poisoner",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "상태이상/지속 피해",
    "description": "이 카드가 공격에 성공했을 때, 상대에게 독 카드 【독】을 2장 준다.",
    "related": "독"
  },
  {
    "ko": "도전",
    "en": "Challenge",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "성장/조건부 강화",
    "description": "턴 시작시 공격 존을 잠그지만, 대전시 단침 불리(-1)을 얻는다. 다음 소유자의 턴까지 공격 존에 남아있는다면 이 카드는 손으로 돌아가 최종 예술로 변한다. UR등급 공격력 20 능력치 변하지 않음",
    "related": "오의"
  },
  {
    "ko": "진화",
    "en": "Evolve",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "성장/변신",
    "description": "이 카드는 대전시 단침 불리(-1)을 얻는다. 그러나 전투에서 승리할 경우 완전체【완전체】로 진화한다. 완전체는 희귀도가 1단계 상승하고, 공격력이 2 상승하며, 속성을 변경할 수 있다.",
    "related": "완전체"
  },
  {
    "ko": "매혹",
    "en": "Fascinate",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "손패 탈취/교란",
    "description": "이 카드가 필드에 나올 때 공격 존에 있는 카드의 소유자는 주사위를 굴린다. 1이 나오면 그 플레이어의 손패에서 무작위로 카드 1장을 빼앗습니다.",
    "related": ""
  },
  {
    "ko": "야생 요소",
    "en": "Wild Element",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "속성 변경",
    "description": "필드에 나올때 원하는 속성으로 변화한다.",
    "related": "무/화/수/목/광/암 속성 EX"
  },
  {
    "ko": "함정사",
    "en": "Trapper",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "함정/카운터",
    "description": "이 카드가 필드에 나올때 함정 카드 【함정】을 덱에 넣고 섞는다.",
    "related": "함정"
  },
  {
    "ko": "막기",
    "en": "Parry",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "방어/판정 변경",
    "description": "이 카드가 방어로 사용될 경우, 단침은 중앙에 고정된다. 그러나 본래 무승부가 되는 위치만을 승리로 간주하며, 다른 위치는 모두 패배로 간주한다.",
    "related": ""
  },
  {
    "ko": "선택",
    "en": "Choice",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "분기/파생 효과",
    "description": "방어존에서 공격 존으로 이동할 때 미래를 선택한다.",
    "related": "미래 / 미래(얼터너티브)"
  },
  {
    "ko": "회심",
    "en": "Critical",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "확률/대미지 증폭",
    "description": "공격하기 전에 주사위를 굴려, 1이 나올 경우 피해가 2배로 증가한다.",
    "related": ""
  },
  {
    "ko": "지휘관",
    "en": "Commander",
    "type": "Standard",
    "pack": "Advanced",
    "cost": 2,
    "category": "토큰/전개",
    "description": "병사【병사】을 2장 손으로 추가한다. 병사는 희귀도 C, 공격력 1입니다.",
    "related": "병사"
  },
  {
    "ko": "부활",
    "en": "Revival",
    "type": "Discard",
    "pack": "Advanced",
    "cost": 1,
    "category": "회복/드로우",
    "description": "선택한 플레이어의 체력을 1회복시키고 카드를 1장 뽑게 한다.",
    "related": ""
  },
  {
    "ko": "탐욕",
    "en": "Greed",
    "type": "Discard",
    "pack": "Advanced",
    "cost": 1,
    "category": "드로우",
    "description": "카드를 1장 뽑습니다.",
    "related": ""
  },
  {
    "ko": "암흑 소환",
    "en": "Dark Summon",
    "type": "Discard",
    "pack": "Advanced",
    "cost": 1,
    "category": "묘지 활용/소환",
    "description": "선택한 플레이어의 맨 위 카드를 방어구역으로 내놓습니다.",
    "related": ""
  },
  {
    "ko": "망각",
    "en": "Oblivion",
    "type": "Discard",
    "pack": "Advanced",
    "cost": 1,
    "category": "광역 핸드 파괴",
    "description": "자신을 포함한 모든 플레이어는 손패에서 가장 낮은 등급의 카드를 한장 무덤으로 버립니다.",
    "related": ""
  },
  {
    "ko": "융합",
    "en": "Fusion",
    "type": "Discard",
    "pack": "Advanced",
    "cost": 1,
    "category": "융합/전개",
    "description": "손패의 융합 소재 2장을 융합하여 융합체를 만들어냅니다.",
    "related": "융합체"
  },
  {
    "ko": "인과율 조작",
    "en": "Causality Manipulation",
    "type": "GameChanger",
    "pack": "Advanced",
    "cost": 4,
    "category": "주사위/규칙 변경",
    "description": "주사위를 굴릴 때 2를 1로 간주합니다.",
    "related": ""
  },
  {
    "ko": "황제",
    "en": "Emperor",
    "type": "GameChanger",
    "pack": "Advanced",
    "cost": 4,
    "category": "공격력/규칙 변경",
    "description": "대전시 공격력의 상대성 판정이 추가됩니다. 이 상대성 판정에서 긴 바늘이 공격력이 더 높은 쪽으로 움직입니다.",
    "related": ""
  },
  {
    "ko": "라이브 온 스테이지",
    "en": "Live On Stage",
    "type": "GameChanger",
    "pack": "Advanced",
    "cost": 4,
    "category": "무스킬 강화/상성 변경",
    "description": "스킬이 없는 카드는 스킬이 있는 카드와 대결할 때, 상성 판정에서 상성이 없음을 상성이 유리로 바꿉니다.",
    "related": ""
  },
  {
    "ko": "무사도",
    "en": "Bushido",
    "type": "Standard",
    "pack": "Sunrise",
    "cost": 2,
    "category": "존 잠금/지속",
    "description": "이 카드가 공격존에 있는 동안, 턴 시작시 공격 존을 잠근다. 단, 소유자의 턴이 오면 이 카드는 폐허로 이동한다.",
    "related": ""
  },
  {
    "ko": "진압",
    "en": "Suppression",
    "type": "Standard",
    "pack": "Sunrise",
    "cost": 2,
    "category": "GameChanger 제거",
    "description": "이 카드보다 희귀도가 낮은 게임체인저를 퇴장시킵니다.",
    "related": ""
  },
  {
    "ko": "마음의 눈",
    "en": "mindseye",
    "type": "Standard",
    "pack": "Sunrise",
    "cost": 2,
    "category": "효과 무효/전투",
    "description": "대치한 카드의 단침 유/불리, 필승/필패 효과를 무효화합니다.",
    "related": ""
  },
  {
    "ko": "명상",
    "en": "Meditation",
    "type": "Discard",
    "pack": "Sunrise",
    "cost": 1,
    "category": "손패 순환",
    "description": "손패를 모두 반환하고 섞은 다음 덱에 반환한 손패 수 만큼 카드를 뽑습니다.",
    "related": ""
  },
  {
    "ko": "암살",
    "en": "Assassin",
    "type": "Discard",
    "pack": "Sunrise",
    "cost": 1,
    "category": "핸드 제거",
    "description": "선택한 플레이어의 손패에서 비용이 가장 낮은 카드 1장을 유적으로 버립니다.",
    "related": ""
  },
  {
    "ko": "결계",
    "en": "Divine Nullification",
    "type": "GameChanger",
    "pack": "Sunrise",
    "cost": 4,
    "category": "스킬 봉쇄",
    "description": "게임체인져 구역을 제외한 모든 스킬 효과가 발동하지 않습니다.",
    "related": ""
  },
  {
    "ko": "복수자",
    "en": "Revenger",
    "type": "Standard",
    "pack": "Named",
    "cost": 2,
    "category": "묘지 활용/전투 보정",
    "description": "상대방의 카드 소유자보다 이 카드의 소유자의 묘지의 카드 수가 많다면 단침 유리(+1)를 획득한다. 모든 플레이어 중에서 묘지의 카드 수가 가장 많다면 추가로 단침 유리(+1)를 획득한다.",
    "related": ""
  },
  {
    "ko": "스카이 하이",
    "en": "Sky High",
    "type": "Standard",
    "pack": "Named",
    "cost": 2,
    "category": "회수/공격",
    "description": "공격시 무승부는 이 카드를 덱의 제일 맨 위로 돌아간다.",
    "related": ""
  },
  {
    "ko": "음양",
    "en": "Ying Yang",
    "type": "Standard",
    "pack": "Named",
    "cost": 2,
    "category": "판정 변경",
    "description": "무승부는 이 카드의 승리로 간주한다.",
    "related": ""
  },
  {
    "ko": "트릭 오어 트릿",
    "en": "Trick Or Treat",
    "type": "Standard",
    "pack": "Named",
    "cost": 2,
    "category": "선택 강요/손패",
    "description": "턴 시작시 상대가 손에 카드를 갖고 있다면 트릭 오어 트리트의 선택을 강요한다. 트릭!:1데미지를 받는다. 트리트!:손의 임의의 카드를 건네준다.",
    "related": ""
  },
  {
    "ko": "응원",
    "en": "Cheer",
    "type": "Discard",
    "pack": "Named",
    "cost": 1,
    "category": "방어 지원",
    "description": "이번 턴, 방어 존의 카드가 대전 시 단침 유리(+1)를 얻습니다.",
    "related": ""
  },
  {
    "ko": "청천벽력",
    "en": "Bolt From The Blue",
    "type": "GameChanger",
    "pack": "Named",
    "cost": 4,
    "category": "상성 반전/규칙 변경",
    "description": "모든 상성이 유리/불리가 반전 된다.",
    "related": ""
  },
  {
    "ko": "추적자",
    "en": "Chaser",
    "type": "Standard",
    "pack": "Horror",
    "cost": 2,
    "category": "턴 순서 조작",
    "description": "이 카드가 플레이된 턴의 종료 시, 턴 순서를 선택한 플레이어의 앞쪽에 위치하도록 교환한다.",
    "related": ""
  },
  {
    "ko": "원한",
    "en": "Grudge",
    "type": "Standard",
    "pack": "Horror",
    "cost": 2,
    "category": "저주/보복",
    "description": "이 카드를 처치한 플레이어에게 저주【저주】를 1장 줍니다.",
    "related": "저주"
  },
  {
    "ko": "단절",
    "en": "Severance",
    "type": "Standard",
    "pack": "Horror",
    "cost": 2,
    "category": "묘지 차단/제외",
    "description": "이 카드에서 받은 공격 피해는 덱에서 유적지로 카드를 이동시킵니다.",
    "related": ""
  },
  {
    "ko": "점프 스케어",
    "en": "Jumpscare",
    "type": "Discard",
    "pack": "Horror",
    "cost": 1,
    "category": "광역 핸드 파괴",
    "description": "모든 플레이어는 손패에서 희귀도 C인 카드를 묘지로 버립니다.",
    "related": ""
  },
  {
    "ko": "어둠 속에서",
    "en": "In The Dark",
    "type": "GameChanger",
    "pack": "Horror",
    "cost": 4,
    "category": "정보 은폐",
    "description": "필드에 나온 카드는 한 번 전투를 하거나 공격할 때 까지 정보가 보이지 않게 한다.",
    "related": ""
  },
  {
    "ko": "두려움",
    "en": "Petrifying Fear",
    "type": "GameChanger",
    "pack": "Horror",
    "cost": 4,
    "category": "드로우 억제",
    "description": "턴 개시시에 실시하는 패 보충의 규정 매수가 1장 줄어듭니다. (최소 손패가 2장으로 변경됨)",
    "related": ""
  },
  {
    "ko": "과감",
    "en": "Bravery",
    "type": "Standard",
    "pack": "Inspiration",
    "cost": 2,
    "category": "크기/전투 보정",
    "description": "대치한 카드의 크기가 자신보다 큰 경우, 단침 유리(+1)를 획득합니다. 자신보다 작은 경우, 단침 불리(-1)를 획득합니다.",
    "related": ""
  },
  {
    "ko": "라이벌",
    "en": "Rival",
    "type": "Standard",
    "pack": "Inspiration",
    "cost": 2,
    "category": "상성/전투 보정",
    "description": "대치하는 카드가 가지는 궁합 가운데, 동일한 궁합이 1개 이상 있는 경우 공격 성공시에 1 데미지를 줍니다. 2개 이상 있는 경우는 짧은 바늘 유리(+1), 4개 이상 있는 경우는 짧은 바늘 유리(+2)를 획득합니다.",
    "related": ""
  },
  {
    "ko": "도둑",
    "en": "Thief",
    "type": "Standard",
    "pack": "Inspiration",
    "cost": 2,
    "category": "스킬 복제/흡수",
    "description": "대전에서 승리했을 때, 쓰러트린 카드가 스탠다드라면 최대 1장까지 이 카드 아래에 놓고 그 카드의 효과를 받습니다.",
    "related": ""
  },
  {
    "ko": "계약자",
    "en": "Covenanter",
    "type": "Discard",
    "pack": "Inspiration",
    "cost": 1,
    "category": "소환/방어",
    "description": "방어존에 【권속】을 소환한다. 대상은 동일한 공격력과 희귀도를 가지며 타입 변경이 가능하다.",
    "related": "권속"
  },
  {
    "ko": "운명",
    "en": "Destiny",
    "type": "Discard",
    "pack": "Inspiration",
    "cost": 1,
    "category": "덱 전개/방어",
    "description": "덱을 섞고, 맨 위의 카드를 방어존에 냅니다. 방어에 성공했을 때 방어존의 카드를 손패로 되돌립니다.",
    "related": ""
  },
  {
    "ko": "충성",
    "en": "Fealty",
    "type": "Discard",
    "pack": "Inspiration",
    "cost": 1,
    "category": "회복/탈취 방지",
    "description": "1 회복합니다. 이 카드가 다른 플레이어에 의해 빼앗길 때 그 효과를 무효화합니다.",
    "related": ""
  },
  {
    "ko": "풍요",
    "en": "Abundance",
    "type": "GameChanger",
    "pack": "Inspiration",
    "cost": 4,
    "category": "드로우 증가",
    "description": "턴 개시시에 실시하는 패 보충의 규정 매수가 1장 늘어납니다. (최소 손패가 4장으로 변경됨)",
    "related": ""
  },
  {
    "ko": "생산",
    "en": "Manufacture",
    "type": "GameChanger",
    "pack": "Inspiration",
    "cost": 4,
    "category": "생산/토큰",
    "description": "턴을 맞은 플레이어는 주사위를 굴려 1이 나오면 제품을 손패에 추가합니다. 게임 체인저 존에 나왔을 때 플레이어도 주사위를 굴립니다.",
    "related": "제품"
  },
  {
    "ko": "이상한 나라",
    "en": "Wonderland",
    "type": "GameChanger",
    "pack": "Inspiration",
    "cost": 4,
    "category": "크기/규칙 변경",
    "description": "대전시, 사이즈의 궁합 판정을 진행하지 않습니다.",
    "related": ""
  }
];
const EX_SKILL_DETAILS = [
  {
    "ko": "저주",
    "en": "Curse",
    "type": "Discard",
    "origin": "원한",
    "description": "이 카드의 공격력 만큼 피해를 받습니다."
  },
  {
    "ko": "암속성",
    "en": "Dark Element",
    "type": "Standard",
    "origin": "야생 요소",
    "description": "이 카드는 암속성으로 취급된다."
  },
  {
    "ko": "권속",
    "en": "Familiar",
    "type": "Standard",
    "origin": "계약자",
    "description": "계약에 의해 소환되었다."
  },
  {
    "ko": "오의",
    "en": "Final Art",
    "type": "Standard",
    "origin": "도전",
    "description": "모든것을 건 혼신의 일격. 공격 시 상대를 즉사시킨다."
  },
  {
    "ko": "완전체",
    "en": "Final Form",
    "type": "Standard",
    "origin": "진화",
    "description": "진화를 거쳐 압도적인 힘을 얻었다."
  },
  {
    "ko": "화속성",
    "en": "Fire Element",
    "type": "Standard",
    "origin": "야생 요소",
    "description": "이 카드는 화속성으로 취급된다."
  },
  {
    "ko": "융합체",
    "en": "Fusion Form",
    "type": "Standard",
    "origin": "융합",
    "description": "두 융합 소재가 하나가 되어 생성되는 파생 카드."
  },
  {
    "ko": "광속성",
    "en": "Light Element",
    "type": "Standard",
    "origin": "야생 요소",
    "description": "이 카드는 광속성으로 취급된다."
  },
  {
    "ko": "무속성",
    "en": "Normal Element",
    "type": "Standard",
    "origin": "야생 요소",
    "description": "이 카드는 무속성으로 취급된다."
  },
  {
    "ko": "독",
    "en": "Poison",
    "type": "Discard",
    "origin": "독술사",
    "description": "1의 피해를 입고 카드를 뽑는다. 폐허의 가장 위 카드가 독이라면 입는 피해는 2배가 된다."
  },
  {
    "ko": "병사",
    "en": "Soldier",
    "type": "Standard",
    "origin": "지휘관",
    "description": "주인을 위해 싸운다. 대전에서 무승부는 패배로 취급된다. 이 카드는 공격 존에 직접 놓을 수 없다."
  },
  {
    "ko": "미래(얼터너티브)",
    "en": "The Alternative Future",
    "type": "Standard",
    "origin": "선택",
    "description": "선택된 또다른 미래. 공격 시 추가로 1 피해를 준다."
  },
  {
    "ko": "미래",
    "en": "The Future",
    "type": "Standard",
    "origin": "선택",
    "description": "선택된 미래. 공격 후 1 회복한다."
  },
  {
    "ko": "함정",
    "en": "Trap",
    "type": "Discard",
    "origin": "함정사",
    "description": "다른 플레이어에게서 받는 피해로 인해 이 카드가 덱에서 묘지로 보내질 때, 대신 이 카드를 버리고 상대에게 1의 피해를 준다. 단, 손패에서 직접 버렸을 경우에는 자신이 피해를 받는다."
  },
  {
    "ko": "수속성",
    "en": "Water Element",
    "type": "Standard",
    "origin": "야생 요소",
    "description": "이 카드는 수속성으로 취급된다."
  },
  {
    "ko": "목속성",
    "en": "Wood Element",
    "type": "Standard",
    "origin": "야생 요소",
    "description": "이 카드는 목속성으로 취급된다."
  }
];

const $ = (id) => document.getElementById(id);

/* ============================================================
 * UI bootstrap: styles.css 적용 + 화면 구성
 * - styles.css 를 <link> 로 불러오고,
 * - styles.css 의 클래스(card, row, subCard, appTab, pill ...)로 DOM 을 구성하며,
 * - 덱 전용 컴포넌트(슬롯/카드 페이스 등)는 같은 색상 변수(--accent 등)를 쓰는
 *   보충 CSS 로 스타일링합니다.
 * 아래 로직이 사용하는 모든 id 는 그대로 유지됩니다.
 * ============================================================ */
const STYLESHEET_HREF = "styles.css";

const DECK_EXTRA_CSS = `
.hidden { display: none !important; }

/* 상단 통계 */
.deckStats { display: flex; gap: 10px; flex-wrap: wrap; align-self: flex-start; }
.statPill { min-width: 130px; }
.statPill span { font-size: 18px; font-weight: 800; font-variant-numeric: tabular-nums; }
.statPill .over { color: var(--danger); }

/* 페이지 레이아웃
 * - 기본(좁은 폭): 왼쪽 열에 에디터+상성을 세로로, 오른쪽에 덱
 * - 컨테이너 폭 1180px 이상: 에디터 | 상성 | 덱 3열
 * - 960px 이하(모바일): 1열 (에디터 → 상성 → 덱)
 * 덱 페이지는 창 폭 전체를 사용하고, 덱 그리드는 남는 폭을 꽉 채우도록 카드 크기가 자동 조정된다. */
#deckPage { container-type: inline-size; container-name: deckpage; width: 100%; max-width: none; box-sizing: border-box; }
.deckLayout {
  display: grid;
  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "editor deck"
    "matchup deck";
  gap: 20px;
  align-items: start;
}
.editorCard { grid-area: editor; }
.matchupCard { grid-area: matchup; min-width: 0; box-sizing: border-box; }
.deckCard { grid-area: deck; min-width: 0; }
@container deckpage (min-width: 1180px) {
  .deckLayout {
    grid-template-columns: minmax(280px, 340px) minmax(240px, 280px) minmax(0, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "editor matchup deck";
  }
}
/* 에디터 sticky 는 상성 패널이 옆 칸에 있는 3열 배치에서만 적용
 * (2열/1열에서는 에디터 아래에 상성 패널이 쌓이므로, sticky 면 스크롤 시 패널을 덮는다) */
.editorCard { position: static; }
@container deckpage (min-width: 1180px) {
  .editorCard { position: sticky; top: 20px; }
}
.editorCard { min-width: 0; }
.editorCard .row { grid-template-columns: 90px minmax(0, 1fr); }
.editorCard .row > * { min-width: 0; }
.editorCard select, .editorCard input[type="text"] {
  min-width: 0; max-width: 100%;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.sectionHeading > div:first-child { min-width: 0; }
#editorTitle { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.selectWithLogo { display: flex; align-items: center; gap: 10px; min-width: 0; }
.selectWithLogo select { flex: 1; min-width: 0; }
.selectWithLogo > span { flex: 0 0 36px; width: 36px; height: 36px; display: block; }
input[type="number"] {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 16px;
  background: #2c2c2e;
  color: var(--ink);
  font: inherit;
}
input[type="number"]:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(212,255,0,.15); }
.mc-editor-logo, .mc-logo-chip, .mc-skill-logo-chip {
  display: inline-flex; align-items: center; gap: 6px; flex: 0 0 auto;
}
.mc-editor-logo { width: 100%; height: 100%; }
.mc-editor-logo img { width: 100%; height: 100%; object-fit: contain; display: block; }
.mc-editor-logo span { display: none; }
.costGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 10px; }
.costGrid .infoField { padding: 10px; min-width: 0; }
.costGrid .infoLabel { flex-wrap: nowrap; white-space: nowrap; }
.costGrid .infoField:not(.costField) .infoLabel span { display: none; }
.costGrid .infoValue { min-height: 38px; justify-content: center; }
.costGrid .costField { grid-column: 1 / -1; }
.costGrid .costValue { justify-content: center; }
button.danger { background: var(--danger); color: #fff; }

.deckCardHead { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; }
.deckGrid {
  --deck-gap: 10px;
  --deck-min: 96px;   /* 카드 한 장의 최소 폭. 이보다 좁아지면 열 수를 줄인다 */
  display: grid;
  /* 5열이 되도록 (전체폭 - 간격) / 5 를 최소 폭으로 잡고, 남는 폭은 1fr 로 꽉 채운다.
     -4px 는 반올림 오차로 열이 4개로 줄어드는 것을 막는 여유값 */
  grid-template-columns: repeat(auto-fill, minmax(max(var(--deck-min), calc((100% - 4 * var(--deck-gap) - 4px) / 5)), 1fr));
  gap: var(--deck-gap);
  margin-top: 18px;
}

/* 덱 슬롯 */
.mc-slot {
  position: relative;
  aspect-ratio: 340 / 465;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 8.2% / 6%;
  background: transparent;
  color: var(--ink);
  font-weight: 600;
  display: block;
  text-align: left;
}
.mc-slot:hover { filter: none; transform: translateY(-2px); }
.mc-slot.is-empty {
  border: 1.5px dashed #3a3a3c;
  color: var(--muted);
  font-size: 26px;
  display: grid; place-items: center;
}
.mc-slot.is-empty:hover { color: var(--accent); border-color: var(--accent); }
.mc-slot.is-selected { box-shadow: 0 0 0 2px var(--accent), 0 8px 24px rgba(212,255,0,.18); }
.mc-slot.is-dragging { opacity: .4; }
.mc-slot.is-over { box-shadow: 0 0 0 3px var(--accent2); }
/* 카드 사이 삽입 표시 */
.mc-slot.is-insert-before::before,
.mc-slot.is-insert-after::after {
  content: ""; position: absolute; top: -2px; bottom: -2px; width: 4px; border-radius: 2px;
  background: var(--accent); box-shadow: 0 0 8px var(--accent); z-index: 2; pointer-events: none;
}
.mc-slot.is-insert-before::before { left: calc(var(--deck-gap, 10px) / -2 - 2px); }
.mc-slot.is-insert-after::after { right: calc(var(--deck-gap, 10px) / -2 - 2px); }

/* 입력창 지우기(×) 버튼 */
.mc-clearable { position: relative; display: block; min-width: 0; }
.mc-clearable > input { width: 100%; padding-right: 38px; }
.mc-clear {
  position: absolute; top: 50%; right: 8px; transform: translateY(-50%);
  width: 24px; height: 24px; padding: 0; margin: 0;
  display: none; align-items: center; justify-content: center;
  border: 0; border-radius: 50%; background: #3a3a3c; color: #e5e5ea;
  font-size: 16px; line-height: 1; cursor: pointer;
}
.mc-clear:hover { background: #55555a; color: #fff; }
.mc-clear:focus-visible { outline: 2px solid var(--accent, #d4ff00); outline-offset: 2px; }
.mc-clearable > input:not(:placeholder-shown) ~ .mc-clear { display: flex; }
.mc-card-draggable { cursor: grab; }

/* 덱 맞춤으로 자동 추가된 카드: 색을 약간 다르게(청록 계열) 표시 */
.mc-slot.is-auto .mc-card-face { --frame: #7dd3fc; --face: #1a2a35; --rarity-bg: #38bdf8; }
.mc-auto-badge {
  position: absolute; left: 50%; bottom: 3%; transform: translateX(-50%);
  padding: 1px 7px; border-radius: 9999px; background: #38bdf8; color: #04222f;
  font-size: 9px; font-weight: 800; letter-spacing: .04em; line-height: 1.4; pointer-events: none;
}
.mc-auto-info { margin: 12px 0 0; }

/* 덱 구성 버튼: 두 줄(새 덱·내보내기·불러오기 / 덱 맞춤·되돌리기), 오른쪽 정렬 */
.deckActions { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; margin-left: auto; }
.deckActions .buttonRow { margin-top: 0; justify-content: flex-end; }

/* 스킬 유형(카드군)별 포인트 컬러: GameChanger #9532FF / Discard #0000B3
 * 카드 앞면의 레어도 탭·테두리, 스킬 목록/상세의 유형 표시에 사용 */
.mc-slot[data-skilltype="GameChanger"], .mc-skill-item[data-type="GameChanger"], .mc-skill-tags span[data-type="GameChanger"] { --point: #9532FF; }
.mc-slot[data-skilltype="Discard"],     .mc-skill-item[data-type="Discard"],     .mc-skill-tags span[data-type="Discard"]     { --point: #0000B3; }
.mc-slot[data-skilltype] .mc-card-face { --rarity-bg: var(--point); --rarity-text: #FFFFFF; }
.mc-slot[data-skilltype]:not(.is-auto) .mc-card-face { --frame: var(--point); }
.mc-skill-item[data-type="GameChanger"], .mc-skill-item[data-type="Discard"] { border-left: 4px solid var(--point); }
.mc-skill-tags span[data-type="GameChanger"], .mc-skill-tags span[data-type="Discard"] { background: var(--point); color: #FFFFFF; }
.buttonRow button:disabled { opacity: .4; cursor: not-allowed; }
.mc-card-face, .mc-card-face * { pointer-events: none; }

/* 카드 앞면: 레어도 탭 / 5개의 다이아몬드 / 가운데 cost */
.mc-card-face {
  position: relative;
  width: 100%; height: 100%;
  container-type: inline-size;
  --frame: #e5e5ea;
  --face: #232326;
  --rarity-bg: #D4FF00;    /* 레어도 탭 배경 */
  --rarity-text: #000000;  /* 레어도 글자 */
  --name-color: #FFFFFF;   /* 카드 이름 */
  color: #FFFFFF;
}
.mc-card-frame { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.mc-frame-body { fill: var(--face); stroke: var(--frame); stroke-width: 2.2px; vector-effect: non-scaling-stroke; }
.mc-frame-tab { fill: var(--rarity-bg); stroke: var(--rarity-bg); stroke-width: 2px; vector-effect: non-scaling-stroke; }
.mc-frame-line { fill: none; stroke: var(--frame); stroke-width: 2px; vector-effect: non-scaling-stroke; }

.mc-card-rarity {
  position: absolute; left: 0; top: 0; width: 24%; height: 17.2%;
  display: grid; place-items: center;
  font-weight: 800; color: var(--rarity-text);
  font-size: 12px; font-size: 13cqw;
  padding-right: 2%;
}
.mc-card-rarity.long { font-size: 10px; font-size: 9.5cqw; letter-spacing: -0.02em; }
.mc-card-name {
  position: absolute; left: 27%; right: 5%; top: 2%; height: 10%;
  display: flex; align-items: center;
  font-size: 9px; font-size: 8cqw; font-weight: 700;
  color: var(--name-color);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.mc-card-costBox {
  position: absolute; left: 20%; right: 20%; top: 19%; height: 60%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  line-height: 1;
}
.mc-card-costBox small { font-size: 10px; font-size: 12cqw; font-weight: 700; color: var(--ink); }
.mc-card-costBox strong { font-size: 26px; font-size: 32cqw; font-weight: 800; color: var(--accent); margin-top: 2cqw; }

/* 아이콘/ATK 칸: 마름모가 아닌 정사각형 (기존 좌표 유지) */
.mc-card-diamond {
  position: absolute;
  width: 23%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  background: var(--face);          /* 뒤로 지나가는 테두리선을 가려 줌 */
  border-radius: 16%;
}
.mc-diamond-content { position: absolute; inset: 0; display: grid; place-items: center; }
.mc-card-attribute { left: 13.8%; top: 28.4%; }
.mc-card-means     { left: 13.8%; top: 47.3%; }
.mc-card-skill     { left: 87.6%; top: 28.4%; }
.mc-card-species   { left: 87.6%; top: 47.3%; }
.mc-card-atk       { left: 50%;   top: 87.5%; width: 25%; background: var(--accent); border-radius: 24%; }
.mc-atk-num { color: #000000; font-weight: 800; font-size: 13px; font-size: 11cqw; line-height: 1;
  font-style: normal; transform: none; rotate: none; display: block; }

.mc-card-face .mc-diamond-content, .mc-card-face .mc-atk-num, .mc-card-face .mc-face-placeholder, .mc-card-face .mc-face-fallback {
  transform: none; rotate: none; font-style: normal;
}
/* resources 이미지: 정사각형 칸 안에 비율 유지하며 꽉 차게 */
.mc-face-logo {
  position: absolute; left: 50%; top: 50%;
  width: 90%; height: 90%;
  transform: translate(-50%, -50%);
  object-fit: contain;
}
.mc-face-fallback, .mc-face-placeholder { color: var(--ink); font-weight: 800; font-size: 9px; font-size: 7.5cqw; line-height: 1; }
.mc-face-placeholder { display: block; width: 36%; height: 2px; border-radius: 2px; background: #636366; font-size: 0; }

/* 상성표 */
.mc-chart-tabs { display: flex; gap: 6px; flex-wrap: wrap; margin: 14px 0 6px; }
.mc-chart-tabs button { background: #3a3a3c; color: var(--ink); }
.mc-chart-tabs button.active { background: var(--accent); color: var(--accent-text); }
.compatImgWrap { background: #000; border-radius: 16px; padding: 12px; margin-top: 12px; text-align: center; overflow: auto; }
.compatImgWrap img { max-width: 100%; height: auto; border-radius: 8px; }

/* 스킬 페이지 */
.skillFilters { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; margin-top: 16px; }
.skillLayout { display: grid; grid-template-columns: minmax(260px, 360px) minmax(0, 1fr); gap: 20px; margin-top: 18px; align-items: start; }
.mc-skill-list-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
.mc-skill-list-head span { color: var(--muted); font-size: 13px; }
#skillList { min-width: 0; }
.mc-skill-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px;
  max-height: 640px;
  overflow-y: auto; overflow-x: hidden;
  padding-right: 6px;
  scrollbar-width: thin;
}
.mc-skill-item {
  display: grid; gap: 4px; width: 100%; min-width: 0; margin: 0; text-align: left;
  justify-content: stretch; overflow-wrap: anywhere; border-radius: 14px; padding: 12px 14px;
  background: #1c1c1e; color: var(--ink); border: 1px solid var(--line); font-weight: 600;
}
.mc-skill-item:hover { filter: none; border-color: #48484a; transform: none; }
.mc-skill-item.active { border-color: var(--accent); background: rgba(212,255,0,.08); }
.mc-skill-item-name { font-size: 15px; font-weight: 700; }
.mc-skill-item-meta { font-size: 12px; color: var(--muted); font-weight: 500; }
.mc-skill-detail-title { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.mc-skill-detail-art { flex: 0 0 auto; width: 72px; height: 72px; object-fit: contain; }
.mc-skill-detail-name { flex: 1; min-width: 0; }
.mc-skill-detail-title h2 { margin-bottom: 4px; }
.mc-skill-detail-title p { margin: 0; color: var(--muted); }
.mc-skill-detail-title strong { font-size: 30px; font-weight: 800; color: var(--accent); white-space: nowrap; }
.mc-skill-detail-title small { font-size: 12px; color: var(--muted); font-weight: 600; }
.mc-skill-tags { display: flex; gap: 8px; flex-wrap: wrap; margin: 12px 0; }
.mc-skill-tags span { padding: 5px 12px; border-radius: 9999px; background: #2c2c2e; font-size: 12px; font-weight: 700; }
.mc-skill-section { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); }
.mc-skill-section h3 { font-size: 14px; color: var(--accent); }
.mc-skill-section p { margin: 0; }
.mc-ex-row { display: grid; gap: 4px; padding: 10px 12px; margin-top: 8px; border-radius: 12px; background: #09090b; border: 1px solid var(--line); }
.mc-ex-tiers { display: grid; gap: 6px; margin-top: 6px; padding-top: 8px; border-top: 1px dashed var(--line, #3a3a3c); }
.mc-ex-tier { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 10px; align-items: start; }
.mc-ex-tier b { display: inline-block; padding: 2px 0; border-radius: 9999px; background: #2c2c2e; font-size: 11px; font-weight: 800; text-align: center; color: var(--ink, #f5f5f7); }
.mc-ex-tier[data-tier="SR"] b { color: #5ac8fa; }
.mc-ex-tier[data-tier="UR"] b { color: var(--accent, #d4ff00); }
.mc-ex-tier[data-tier="EXT"] b { color: #ff9f0a; }
.mc-ex-tier[data-tier="Fatal"] b { color: #ff453a; }
.mc-ex-row .mc-ex-tier span { color: var(--ink, #f5f5f7); font-size: 13px; line-height: 1.5; }
.mc-ex-row .mc-ex-tier span.is-none { color: var(--muted, #98989d); }
.mc-ex-row span { color: var(--muted); font-size: 13px; line-height: 1.5; }

/* 레어도별 스킬 변경 */
.mc-rarity-list { display: grid; gap: 8px; }
.mc-rarity-row { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 12px; align-items: start; padding: 10px 12px; border-radius: 12px; background: #09090b; border: 1px solid var(--line); }
.mc-rarity-tag { display: inline-block; padding: 3px 0; border-radius: 9999px; background: #2c2c2e; font-size: 12px; font-weight: 800; text-align: center; letter-spacing: .02em; }
.mc-rarity-row[data-tier="SR"]  .mc-rarity-tag { color: #5ac8fa; }
.mc-rarity-row[data-tier="UR"]  .mc-rarity-tag { color: var(--accent, #d4ff00); }
.mc-rarity-row[data-tier="EXT"] .mc-rarity-tag { color: #ff9f0a; }
.mc-rarity-text { font-size: 14px; line-height: 1.55; padding-top: 2px; }
.mc-rarity-empty { color: var(--muted, #98989d); }
.mc-rarity-common { margin-left: 6px; padding: 1px 7px; border-radius: 9999px; background: #2c2c2e; color: var(--muted, #98989d); font-size: 11px; font-weight: 700; white-space: nowrap; }
.mc-rarity-note { margin: 10px 2px 0; color: var(--muted, #98989d); font-size: 12px; line-height: 1.6; }

/* 클립보드 알림 */
.mc-clipboard-notice {
  position: fixed; left: 50%; bottom: 28px; z-index: 50;
  transform: translate(-50%, 16px);
  padding: 12px 22px; border-radius: 9999px;
  background: var(--accent); color: var(--accent-text);
  font-weight: 700; font-size: 14px;
  opacity: 0; pointer-events: none;
  transition: opacity .2s ease, transform .2s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,.5);
}
.mc-clipboard-notice.show { opacity: 1; transform: translate(-50%, 0); }

/* 상성 조합 패널 (에디터 하단) */
.mc-mu { --mu-good: var(--accent, #d4ff00); --mu-bad: var(--danger, #ff6b6b); --mu-flat: var(--muted, #98989d); }
.mc-mu-tabs { display: flex; gap: 6px; margin: 6px 0 8px; }
.mc-mu-tabs button {
  flex: 1; margin: 0; padding: 8px 10px; border-radius: 10px;
  border: 1px solid var(--line, #3a3a3c); background: #2c2c2e; color: var(--ink, #f5f5f7);
  font: inherit; font-size: 13px; font-weight: 700; cursor: pointer;
}
.mc-mu-tabs button.active { background: var(--accent, #d4ff00); color: var(--accent-text, #111); border-color: transparent; }
.mc-mu-tabs button:focus-visible { outline: 2px solid var(--accent, #d4ff00); outline-offset: 2px; }
.mc-mu-desc { margin: 0 2px 10px; font-size: 12px; line-height: 1.5; }
.mc-mu-block { margin-top: 8px; border: 1px solid var(--line, #3a3a3c); border-radius: 12px; overflow: hidden; background: #1c1c1e; }
.mc-mu-block-head {
  display: flex; justify-content: space-between; align-items: baseline; gap: 8px; flex-wrap: wrap;
  padding: 8px 12px; background: #2c2c2e; font-size: 13px;
}
.mc-mu-block[data-kind="best"] .mc-mu-block-head { box-shadow: inset 3px 0 0 var(--mu-good); }
.mc-mu-block[data-kind="worst"] .mc-mu-block-head { box-shadow: inset 3px 0 0 var(--mu-bad); }
.mc-mu-count { display: flex; gap: 10px; font-size: 12px; font-weight: 700; }
.mc-mu-count span, .mc-mu-axis em, .mc-mu-line em { color: var(--mu-flat); }
.mc-mu-count span[data-s="1"], .mc-mu-row[data-s="1"] .mc-mu-axis em, .mc-mu-line[data-s="1"] em { color: var(--mu-good); }
.mc-mu-count span[data-s="-1"], .mc-mu-row[data-s="-1"] .mc-mu-axis em, .mc-mu-line[data-s="-1"] em { color: var(--mu-bad); }
.mc-mu-row { display: grid; grid-template-columns: 44px minmax(0, 1fr); gap: 8px; align-items: start; padding: 8px 12px; border-top: 1px solid var(--line, #3a3a3c); }
.mc-mu-axis { display: flex; flex-direction: column; gap: 3px; font-size: 13px; }
.mc-mu-axis b { font-weight: 700; }
.mc-mu-axis em, .mc-mu-line em { font-style: normal; font-size: 11px; font-weight: 800; }
.mc-mu-chips { display: flex; flex-wrap: wrap; gap: 6px; min-width: 0; }
.mc-mu-chip {
  display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px 3px 4px; border-radius: 9999px;
  background: #2c2c2e; border: 1px solid var(--line, #3a3a3c); color: var(--ink, #f5f5f7);
  font-size: 12px; font-weight: 600; line-height: 1;
}
.mc-mu-chip img { width: 20px; height: 20px; object-fit: contain; display: block; }
.mc-mu-row[data-s="1"] .mc-mu-chip, .mc-mu-line[data-s="1"] .mc-mu-chip { border-color: rgba(212,255,0,.45); }
.mc-mu-row[data-s="-1"] .mc-mu-chip, .mc-mu-line[data-s="-1"] .mc-mu-chip { border-color: rgba(255,107,107,.55); }
.mc-mu-none { color: var(--mu-flat); }
.mc-mu-details { margin-top: 10px; }
.mc-mu-details summary { cursor: pointer; padding: 6px 2px; font-size: 13px; font-weight: 700; color: var(--muted, #98989d); }
.mc-mu-details summary:focus-visible { outline: 2px solid var(--accent, #d4ff00); outline-offset: 2px; }
.mc-mu-axisgroup { padding: 8px 0; border-top: 1px solid var(--line, #3a3a3c); }
.mc-mu-axisgroup h4 { display: flex; align-items: center; gap: 8px; margin: 0 0 6px; font-size: 13px; }
.mc-mu-line { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 8px; align-items: start; padding: 3px 0; }
.mc-mu-line em { padding-top: 5px; }

@media (max-width: 960px) {
  .deckLayout {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "editor" "matchup" "deck";
  }
  .editorCard { position: static; }
}
@media (max-width: 820px) {
  .skillLayout { grid-template-columns: 1fr; }
  .mc-skill-cards { max-height: 320px; }
}
@media (max-width: 680px) {
  .deckGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
  .skillFilters { grid-template-columns: 1fr; }
  .editorCard .row { grid-template-columns: 1fr; }
  .deckStats { width: 100%; }
  .statPill { flex: 1; }
}
`;

function buildUI() {
  const doc = document;
  doc.documentElement.lang = "ko";
  const head = doc.head || doc.documentElement.appendChild(doc.createElement("head"));

  if (!head.querySelector('meta[name="viewport"]')) {
    const m = doc.createElement("meta");
    m.name = "viewport";
    m.content = "width=device-width, initial-scale=1";
    head.appendChild(m);
  }
  if (!head.querySelector('link[rel="stylesheet"][href*="styles.css"]')) {
    const link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLESHEET_HREF;
    head.appendChild(link);
  }
  if (!doc.getElementById("deckmakerExtraCss")) {
    const style = doc.createElement("style");
    style.id = "deckmakerExtraCss";
    style.textContent = DECK_EXTRA_CSS;
    head.appendChild(style); // styles.css 뒤에 위치해 덱 전용 스타일이 우선 적용됨
  }

  const costBox = (id, title, sub) => `
    <div class="infoField">
      <div class="infoLabel"><strong>${title}</strong><span>${sub}</span></div>
      <div class="infoValue" id="${id}">0</div>
    </div>`;

  const html = `
  <header>
    <div class="topBar">
      <div class="titleBlock">
        <h1>MONSTER CARDS 덱 메이커</h1>
        <p class="muted">최대 20장 · 총 200 COST · 변경 내용은 브라우저에 자동 저장됩니다.</p>
      </div>
      <div class="deckStats">
        <div class="pill statPill"><b>카드 수</b><span id="cardCount">0 / 20장</span></div>
        <div class="pill statPill"><b>총 COST</b><span id="costCount">0 / 200 COST</span></div>
      </div>
    </div>
  </header>

  <nav class="appTabs" role="tablist">
    <button type="button" id="deckPageBtn" class="appTab active" role="tab">덱 메이커</button>
    <button type="button" id="skillPageBtn" class="appTab" role="tab">스킬 설명</button>
  </nav>

  <main id="deckPage" class="tabPanel">
    <div class="deckLayout">
      <section class="card editorCard">
        <div class="sectionHeading">
          <div>
            <span class="eyebrow">Card Editor</span>
            <h2 id="editorTitle">카드를 선택하세요</h2>
          </div>
          <div class="pill"><b>COST</b><span id="selectedCost">—</span></div>
        </div>

        <p id="editorEmpty" class="muted">오른쪽 덱에서 카드를 선택하거나 빈 슬롯(＋)을 눌러 새 카드를 추가하세요.</p>

        <div id="editorForm" class="hidden">
          <div class="row"><label for="fName">이름</label><span class="mc-clearable"><input type="text" id="fName" maxlength="40" placeholder="카드 이름"><button type="button" class="mc-clear" data-clear="fName" aria-label="이름 지우기" title="지우기">×</button></span></div>
          <div class="row"><label for="fRarity">레어도</label><select id="fRarity"></select></div>
          <div class="row"><label for="fSkill">스킬</label>
            <div class="selectWithLogo"><select id="fSkill"></select><span id="skillLogoPreview"></span></div></div>
          <div class="row"><label for="fElement">속성</label>
            <div class="selectWithLogo"><select id="fElement"></select><span id="elementLogoPreview"></span></div></div>
          <div class="row"><label for="fSpecies">종족</label>
            <div class="selectWithLogo"><select id="fSpecies"></select><span id="speciesLogoPreview"></span></div></div>
          <div class="row"><label for="fMeans">수단</label>
            <div class="selectWithLogo"><select id="fMeans"></select><span id="meansLogoPreview"></span></div></div>
          <div class="row"><label for="fSize">크기</label>
            <div class="selectWithLogo"><select id="fSize"></select><span id="sizeLogoPreview"></span></div></div>
          <div class="row"><label for="fAtk">ATK</label><select id="fAtk"></select></div>

          <div class="subCard">
            <h3>COST 계산</h3>
            <div class="costGrid">
              ${costBox("costRarity", "레어도", "Rarity")}
              ${costBox("costAtk", "ATK", "Attack")}
              ${costBox("costSkill", "스킬", "Skill")}
              <div class="infoField costField">
                <div class="infoLabel"><strong>카드 COST</strong><span>합계</span></div>
                <div class="infoValue costValue" id="costTotal">0</div>
              </div>
            </div>
          </div>

          <p class="muted" style="margin:14px 2px 0">단축키 · Ctrl+C 복사 · Ctrl+V 붙여넣기 · Delete/Backspace 삭제</p>
        </div>
      </section>

      <section class="card matchupCard mc-mu" id="matchupPanel">
        <div class="sectionHeading">
          <div>
            <span class="eyebrow">Matchup</span>
            <h2>상성 조합</h2>
          </div>
        </div>

        <p id="matchupEmpty" class="muted">카드를 선택하면 상성 조합이 표시됩니다.</p>

        <div id="matchupContent" class="hidden">
          <div class="mc-mu-tabs">
            <button type="button" class="mc-mu-tab active" data-mode="attack" aria-pressed="true">공격할 때</button>
            <button type="button" class="mc-mu-tab" data-mode="defend" aria-pressed="false">방어할 때</button>
          </div>
          <p class="muted mc-mu-desc" id="matchupDesc"></p>
          <div id="matchupBody"></div>
        </div>
      </section>

      <section class="card deckCard">
        <div class="deckCardHead">
          <div>
            <span class="eyebrow">Deck</span>
            <h2>덱 구성</h2>
            <p class="sectionDescription muted">클릭: 선택 · 드래그: 순서 변경 · <b>Ctrl+드래그: 복제</b> · <b>Delete / Backspace: 삭제</b> · <b>덱 맞춤</b>: 빈 슬롯을 남은 COST·상성에 맞춰 자동 채우기</p>
          </div>
          <div class="deckActions">
            <div class="buttonRow">
              <button type="button" id="newDeckBtn" class="secondary">새 덱</button>
              <button type="button" id="exportBtn">JSON 내보내기</button>
              <label class="buttonLike secondary">JSON 불러오기
                <input type="file" id="importInput" accept=".json,application/json" hidden>
              </label>
            </div>
            <div class="buttonRow">
              <button type="button" id="autoFillBtn" title="현재 배치한 카드의 COST·상성을 계산해 빈 슬롯을 자동으로 채웁니다">덱 맞춤</button>
              <button type="button" id="undoAutoBtn" class="secondary" title="직전 덱 맞춤을 되돌립니다" disabled>되돌리기</button>
            </div>
          </div>
        </div>
        <p id="autoFillInfo" class="sectionDescription muted mc-auto-info hidden"></p>
        <div id="deckGrid" class="deckGrid"></div>
      </section>
    </div>

    <section class="card" style="margin-top:20px">
      <span class="eyebrow">Compatibility</span>
      <h2>상성표</h2>
      <div class="mc-chart-tabs">
        <button type="button" data-chart="element" class="active">속성</button>
        <button type="button" data-chart="species">종족</button>
        <button type="button" data-chart="means">수단</button>
        <button type="button" data-chart="size">크기</button>
      </div>
      <p id="compatibilityNote" class="muted"></p>
      <div class="compatImgWrap"><img id="compatibilityImage" alt="공식 상성표"></div>
    </section>
  </main>

  <main id="skillPage" class="tabPanel hidden">
    <section class="card">
      <span class="eyebrow">Skills</span>
      <h2>스킬 설명</h2>
      <div class="skillFilters">
        <span class="mc-clearable"><input type="text" id="skillSearch" placeholder="스킬명·효과 검색"><button type="button" class="mc-clear" data-clear="skillSearch" aria-label="검색어 지우기" title="지우기">×</button></span>
        <select id="skillPackFilter"></select>
        <select id="skillTypeFilter"></select>
      </div>
      <div class="skillLayout">
        <div id="skillList"></div>
        <div id="skillDetail" class="subCard"><p class="muted">왼쪽 목록에서 스킬을 선택하세요.</p></div>
      </div>
    </section>
  </main>`;

  // 기존 HTML 의 본문 요소는 제거하고(스크립트 제외) 새 UI 로 교체
  Array.from(doc.body.children).forEach(el => { if (el.tagName !== "SCRIPT") el.remove(); });
  doc.body.insertAdjacentHTML("afterbegin", html);
}

buildUI();

function uid() {
  return "card-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2,8);
}

function makeBlankCard() {
  return {
    id: uid(),
    name: "",
    rarity: "C",
    skill: "None",
    element: "normal",
    species: "human",
    means: "close",
    size: "small",
    atk: 1
  };
}

function skillInfo(code) {
  return DATA.skills.find(s => s.en.toLowerCase().replace(/[^a-z0-9]/g,"") === String(code).toLowerCase().replace(/[^a-z0-9]/g,""))
      || DATA.skills.find(s => s.ko === code)
      || DATA.skills[0];
}

function rarityInfo(code) {
  return DATA.rarity.find(r => r.ko === code || String(r.code) === String(code)) || DATA.rarity[0];
}

function costOf(card) {
  const rarity = rarityInfo(card.rarity);
  const skill = skillInfo(card.skill);
  const atkCost = Math.max(0, Math.min(4, Number(card.atk || 1) - 1));
  return Number(rarity.cost || 0) + atkCost + Number(skill.cost || 0);
}

function totalCards() {
  return state.deck.filter(Boolean).length;
}

function totalCost() {
  return state.deck.reduce((n,c) => n + (c ? costOf(c) : 0), 0);
}

function label(list, code) {
  const x = list.find(v => v.en === code);
  return x ? x.ko : code;
}

function setOptions(select, list, value, valueKey="en") {
  select.innerHTML = "";
  for (const item of list) {
    const o = document.createElement("option");
    o.value = item[valueKey];
    o.textContent = item.ko + " (" + item[valueKey] + ")";
    if (String(item[valueKey]) === String(value)) o.selected = true;
    select.appendChild(o);
  }
}

function populateForm(card) {
  $("fName").value = card.name || "";
  setOptions($("fRarity"), DATA.rarity.map(r => ({...r, en:r.ko})), card.rarity);
  $("fRarity").querySelectorAll("option").forEach((o,i) => {
    const r = DATA.rarity[i]; if (r) o.textContent = r.ko + " (+" + r.cost + ")";
  });
  setOptions($("fSkill"), DATA.skills.map(s => ({ko:s.ko,en:s.en})), card.skill);
  updateEditorLogos(card);
  setOptions($("fElement"), DATA.elements, card.element);
  setOptions($("fSpecies"), DATA.species, card.species);
  setOptions($("fMeans"), DATA.means, card.means);
  setOptions($("fSize"), DATA.sizes, card.size);
  $("fAtk").innerHTML = DATA.atk.map(v => `<option value="${v}" ${Number(card.atk)===v?"selected":""}>${v} (ATK COST +${v-1})</option>`).join("");
  updateCostBreakdown(card);
  renderMatchup(card);
}

function selectedCard() {
  return state.deck[state.selected] || null;
}

function updateCostBreakdown(card) {
  if (!card) return;
  const r = rarityInfo(card.rarity), s = skillInfo(card.skill);
  const atkCost = Math.max(0, Math.min(4, Number(card.atk || 1)-1));
  $("costRarity").textContent = r.cost;
  $("costAtk").textContent = atkCost;
  $("costSkill").textContent = s.cost;
  $("costTotal").textContent = costOf(card);
  $("selectedCost").textContent = costOf(card);
}

function renderHeader() {
  const cards = totalCards(), cost = totalCost();
  $("cardCount").textContent = `${cards} / ${LIMIT.cards}장`;
  $("costCount").textContent = `${cost} / ${LIMIT.cost} COST`;
  $("cardCount").classList.toggle("over", cards > LIMIT.cards);
  $("costCount").classList.toggle("over", cost > LIMIT.cost);
}

const RESOURCE_BASE = "resources/";

// resources 파일명 규칙: 영문명(en)에서 공백을 제거한 이름 (예: "Species Pride" → SpeciesPride.png)
// 영문명과 실제 파일명이 공백 제거만으로 일치하지 않는 항목은 여기에 예외로 등록
const RESOURCE_NAME_OVERRIDES = {
  mindseye: "Mind\u2019sEye"   // 실제 파일: Mind’sEye.png (U+2019 어포스트로피)
};

function resourceFile(category, value) {
  if (!value) return "";
  const item = Array.isArray(DATA[category]) ? DATA[category].find(x => x.en === value || x.ko === value) : null;
  const en = item ? item.en : value;
  const folderMap = {
    skills: item ? `skill【${item.pack || "Basic"}】` : "skill【Basic】",
    species: "species",
    means: "means",
    sizes: "size",
    element: "element",
    elements: "element"
  };
  const folder = folderMap[category] || category;
  const fileName = RESOURCE_NAME_OVERRIDES[en] || String(en).replace(/\s+/g, "");
  return `${RESOURCE_BASE}${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}.png`;
}

function logoTag(category, value, className="mc-logo-chip") {
  const item = Array.isArray(DATA[category]) ? DATA[category].find(x => x.en === value || x.ko === value) : null;
  if (!item || !value || value === "None") return "";
  const src = resourceFile(category, value);
  return `<span class="${className}"><img src="${src}" alt="" aria-hidden="true" onerror="this.style.display='none'"><span>${escapeHtml(item.ko)}</span></span>`;
}

function skillLogoTag(value, className="mc-skill-logo-chip") {
  const skill = skillInfo(value);
  if (!skill || !value || skill.en === "None") return "";
  const src = resourceFile("skills", skill.en);
  return `<span class="${className}"><img src="${src}" alt="" aria-hidden="true" onerror="this.style.display='none'"><span>${escapeHtml(skill.ko)}</span></span>`;
}


function attributeMark(value) {
  const marks = {
    normal: "무",
    fire: "화",
    water: "수",
    wood: "목",
    light: "광",
    dark: "암"
  };
  return marks[value] || label(DATA.elements, value) || "?";
}

function faceImgError(img) {
  const span = document.createElement("span");
  span.className = "mc-face-fallback";
  span.textContent = img.dataset.fallback || "?";
  img.replaceWith(span);
}

function faceLogo(category, value, extraClass="") {
  const item = Array.isArray(DATA[category]) ? DATA[category].find(x => x.en === value || x.ko === value) : null;
  if (!item || !value || value === "None") return "";
  if (category === "skills" && skillInfo(value).en === "None") return "";
  const src = resourceFile(category, value);
  const fallback = category === "elements" ? attributeMark(item.en) : String(item.ko || "").slice(0, 2);
  return `<img class="mc-face-logo ${extraClass}" src="${src}" alt="${escapeHtml(item.ko)}" data-fallback="${escapeHtml(fallback)}" onerror="faceImgError(this)">`;
}

function faceDiamond(cls, title, inner) {
  return `<div class="mc-card-diamond ${cls}" title="${title}"><span class="mc-diamond-content">${inner}</span></div>`;
}

/* ============================================================
 * 상성 조합 (Compatibility)
 * 출처: 공식 「相性一覧」 상성표 이미지 (Element / Species / Means / Size)
 * 표기: 행 = 공격 카드, 열 = 방어 카드
 *   A : 공격측 유리 (빨간 검)   D : 방어측 유리 (파란 방패)   - : 무승부
 * order 는 행/열 순서이며, 각 rows[i] 문자열의 j번째 글자가 (order[i] 공격 → order[j] 방어) 결과.
 * ============================================================ */
const MATCHUP_TABLE = {
  element: {
    order: ["normal", "fire", "water", "wood", "light", "dark"],
    rows: [
      "D-----", // normal
      "--DA--", // fire
      "-A-D--", // water
      "-DA---", // wood
      "----DA", // light
      "----AD"  // dark
    ]
  },
  species: {
    order: ["human", "beast", "sea", "elemental", "dragon", "god", "devil", "machine", "insect", "ghost"],
    rows: [
      "-AADAADDAD", // human
      "D-A-AD-DA-", // beast
      "DD-DA-AAA-", // sea
      "DD-D-DDDDA", // elemental
      "A-A-A-ADA-", // dragon
      "AA--A-D-DA", // god
      "A-DDADA-A-", // devil
      "AAD-A---AD", // machine
      "DDDADADA--", // insect
      "A--D-D-A-A"  // ghost
    ]
  },
  means: {
    order: ["close", "range", "magic", "special", "guard"],
    rows: [
      "-DAAD", // close
      "A-DAD", // range
      "DA-AD", // magic
      "----A", // special
      "DDDD-"  // guard
    ]
  },
  size: {
    order: ["small", "medium", "large"],
    rows: [
      "-DA", // small
      "A-D", // medium
      "DA-"  // large
    ]
  }
};

// 에디터에 표시할 축 (카드 필드 / DATA 카테고리 / 표 키)
const MATCHUP_AXES = [
  { key: "element", field: "element", category: "elements", label: "속성" },
  { key: "species", field: "species", category: "species",  label: "종족" },
  { key: "means",   field: "means",   category: "means",    label: "수단" },
  { key: "size",    field: "size",    category: "sizes",    label: "크기" }
];

const MATCHUP_STATUS = { "1": "유리", "0": "무", "-1": "불리" };
const MATCHUP_DESC = {
  attack: "이 카드가 공격할 때, 방어하는 상대 카드의 조합입니다.",
  defend: "이 카드가 방어할 때, 공격해 오는 상대 카드의 조합입니다."
};

let matchupMode = "attack"; // "attack" | "defend"
let matchupKey = "";        // 마지막으로 그린 상태(불필요한 재렌더 방지)

/* 한 축에서, 현재 카드 유형(type)과 상대 유형별 결과를 계산한다.
 * score: +1 = 현재 카드 유리 / 0 = 무승부 / -1 = 현재 카드 불리
 * attack: 내가 공격(행) · 상대가 방어(열),  defend: 상대가 공격(행) · 내가 방어(열) */
function matchupByAxis(axis, type, mode) {
  const t = MATCHUP_TABLE[axis.key];
  const me = t.order.indexOf(type);
  if (me < 0) return null;
  return t.order.map((opp, i) => {
    const cell = mode === "attack" ? t.rows[me][i] : t.rows[i][me];
    const score = cell === "-" ? 0 : ((cell === "A") === (mode === "attack") ? 1 : -1);
    return { en: opp, score };
  });
}

/* 한 축의 가장 유리한(best) / 불리한(worst) 상대 유형 묶음.
 * 유리(불리)한 유형이 없으면 무승부 유형으로 대체한다. */
function matchupPick(results, kind) {
  const prefer = kind === "best" ? [1, 0, -1] : [-1, 0, 1];
  for (const s of prefer) {
    const pick = results.filter(r => r.score === s);
    if (pick.length) return { score: s, pick };
  }
  return { score: 0, pick: [] };
}

function matchupChip(axis, en) {
  const ko = label(DATA[axis.category], en);
  const src = resourceFile(axis.category, en);
  return `<span class="mc-mu-chip"><img src="${src}" alt="" aria-hidden="true" onerror="this.style.display='none'"><span>${escapeHtml(ko)}</span></span>`;
}

function matchupBlock(title, kind, rows) {
  const counts = { "1": 0, "0": 0, "-1": 0 };
  const body = rows.map(({ axis, res }) => {
    if (!res) {
      return `<div class="mc-mu-row"><div class="mc-mu-axis"><b>${axis.label}</b></div><div class="mc-mu-chips"><span class="mc-mu-none">—</span></div></div>`;
    }
    const { score, pick } = matchupPick(res, kind);
    counts[score]++;
    return `<div class="mc-mu-row" data-s="${score}">
      <div class="mc-mu-axis"><b>${axis.label}</b><em>${MATCHUP_STATUS[score]}</em></div>
      <div class="mc-mu-chips">${pick.map(r => matchupChip(axis, r.en)).join("")}</div>
    </div>`;
  }).join("");
  const summary = ["1", "0", "-1"]
    .filter(s => counts[s] > 0)
    .map(s => `<span data-s="${s}">${MATCHUP_STATUS[s]} ${counts[s]}</span>`)
    .join("");
  return `<div class="mc-mu-block" data-kind="${kind}">
    <div class="mc-mu-block-head"><strong>${title}</strong><div class="mc-mu-count">${summary}</div></div>
    ${body}
  </div>`;
}

function matchupDetail(card, rows) {
  const groups = rows.map(({ axis, res }) => {
    if (!res) return "";
    const lines = [1, 0, -1].map(s => {
      const list = res.filter(r => r.score === s);
      if (!list.length) return "";
      return `<div class="mc-mu-line" data-s="${s}"><em>${MATCHUP_STATUS[s]}</em><div class="mc-mu-chips">${list.map(r => matchupChip(axis, r.en)).join("")}</div></div>`;
    }).join("");
    return `<div class="mc-mu-axisgroup"><h4>${axis.label}${matchupChip(axis, card[axis.field])}</h4>${lines}</div>`;
  }).join("");
  return `<details class="mc-mu-details"><summary>전체 상성 보기</summary>${groups}</details>`;
}

function renderMatchup(card, force) {
  const body = $("matchupBody");
  if (!body || !card) return;
  const key = [matchupMode, card.element, card.species, card.means, card.size].join("|");
  if (!force && key === matchupKey) return;
  matchupKey = key;

  const prev = body.querySelector("details");
  const wasOpen = !!(prev && prev.open);

  $("matchupDesc").textContent = MATCHUP_DESC[matchupMode];
  const rows = MATCHUP_AXES.map(axis => ({
    axis,
    res: matchupByAxis(axis, card[axis.field], matchupMode)
  }));
  body.innerHTML =
    matchupBlock("유리한 조합", "best", rows) +
    matchupBlock("불리한 조합", "worst", rows) +
    matchupDetail(card, rows);
  if (wasOpen) body.querySelector("details").open = true;
}

function renderGrid() {
  const grid = $("deckGrid");
  grid.innerHTML = "";
  const isCopy = (e) => e.ctrlKey || e.metaKey; // Ctrl(Mac은 Cmd) + 드래그 = 복제
  const dash = `<span class="mc-face-placeholder">—</span>`;

  const ZONE_CLASSES = ["is-over", "is-insert-before", "is-insert-after"];
  function clearZone(slot) { slot.classList.remove(...ZONE_CLASSES); }

  // 카드 위에 놓을 때: 가운데 = 위치 교환, 좌/우 가장자리 = 그 카드 앞/뒤에 끼워 넣기
  function dropZone(e, slot, i) {
    if (!state.deck[i]) return "swap";
    const r = slot.getBoundingClientRect();
    const rel = (e.clientX - r.left) / Math.max(1, r.width);
    if (rel < 0.25) return "before";
    if (rel > 0.75) return "after";
    return "swap";
  }
  function insertIndexFor(from, i, zone) {
    const gap = zone === "before" ? i : i + 1;
    return gap > from ? gap - 1 : gap;
  }

  function attachDropHandlers(slot, i) {
    slot.addEventListener("dragover", (e) => {
      if (state.dragging < 0 || state.dragging === i) return;
      if (isCopy(e) && state.deck[i]) return; // 복제는 빈 슬롯에만 놓을 수 있음
      const zone = isCopy(e) ? "swap" : dropZone(e, slot, i);
      if ((zone === "before" || zone === "after") && insertIndexFor(state.dragging, i, zone) === state.dragging) {
        clearZone(slot);   // 제자리로 돌아가는 삽입 – 표시하지 않음
        return;
      }
      e.preventDefault();
      e.dataTransfer.dropEffect = isCopy(e) ? "copy" : "move";
      clearZone(slot);
      slot.classList.add(zone === "before" ? "is-insert-before" : zone === "after" ? "is-insert-after" : "is-over");
    });
    slot.addEventListener("dragleave", () => clearZone(slot));
    slot.addEventListener("drop", (e) => {
      e.preventDefault();
      const zone = isCopy(e) ? "swap" : dropZone(e, slot, i);
      clearZone(slot);
      const from = state.dragging >= 0 ? state.dragging : Number(e.dataTransfer.getData("text/plain"));
      if (isCopy(e)) copyCard(from, i);
      else if (zone === "swap") moveCard(from, i);
      else insertCard(from, insertIndexFor(from, i, zone));
    });
  }

  for (let i=0; i<LIMIT.cards; i++) {
    const card = state.deck[i];
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "mc-slot" + (i === state.selected ? " is-selected" : "") + (!card ? " is-empty" : "");

    if (!card) {
      slot.innerHTML = "＋";
      slot.title = "카드 추가";
      slot.addEventListener("click", () => addCard(i));
      attachDropHandlers(slot, i);
    } else {
      const r = rarityInfo(card.rarity);
      slot.classList.add("mc-card-draggable");
      slot.draggable = true;
      slot.innerHTML = `
        <div class="mc-card-face">
          <svg class="mc-card-frame" viewBox="0 0 340 465" preserveAspectRatio="none" aria-hidden="true">
            <rect class="mc-frame-body" x="1.5" y="1.5" width="337" height="462" rx="28"/>
            <path class="mc-frame-tab" d="M1.5 80 V29.5 Q1.5 1.5 29.5 1.5 H82 V48 Q82 80 50 80 Z"/>
            <path class="mc-frame-line" d="M82 62 H278 Q298 62 298 82 V380 Q298 400 278 400 H68 Q48 400 48 380 V80"/>
          </svg>
          <span class="mc-card-rarity${String(r.ko).length > 1 ? " long" : ""}">${escapeHtml(r.ko)}</span>
          <div class="mc-card-name">${escapeHtml(card.name || "이름 없음")}</div>
          <div class="mc-card-costBox"><small>cost</small><strong>${costOf(card)}</strong></div>
          ${faceDiamond("mc-card-attribute", "속성", faceLogo("elements", card.element, "mc-element-face-logo") || dash)}
          ${faceDiamond("mc-card-means",     "수단", faceLogo("means",    card.means,   "mc-means-face-logo")   || dash)}
          ${faceDiamond("mc-card-skill",     "스킬", faceLogo("skills",   card.skill,   "mc-skill-face-logo")   || dash)}
          ${faceDiamond("mc-card-species",   "종족", faceLogo("species",  card.species, "mc-species-face-logo") || dash)}
          ${faceDiamond("mc-card-atk",       "ATK",  `<span class="mc-atk-num">${Number(card.atk || 1)}</span>`)}
        </div>${card.auto ? '<span class="mc-auto-badge">AUTO</span>' : ""}`;
      if (card.auto) slot.classList.add("is-auto");
      const skillType = skillInfo(card.skill).type;
      if (skillType === "GameChanger" || skillType === "Discard") slot.dataset.skilltype = skillType;
      slot.title = (card.auto ? "덱 맞춤으로 추가된 카드 (수정하면 고정됩니다)\n" : "") + "클릭: 선택 · 드래그: 카드 위에 놓으면 위치 교환, 카드 사이에 놓으면 순서 이동 · Ctrl+드래그: 복제 · Delete/Backspace: 삭제";

      slot.addEventListener("click", () => {
        // A drag should not accidentally select a different card.
        if (slot.dataset.wasDragged === "1") {
          slot.dataset.wasDragged = "0";
          return;
        }
        selectCard(i);
      });

      slot.addEventListener("dragstart", (e) => {
        state.dragging = i;
        slot.classList.add("is-dragging");
        slot.dataset.wasDragged = "1";
        e.dataTransfer.effectAllowed = "copyMove";
        e.dataTransfer.setData("text/plain", String(i));
      });

      slot.addEventListener("dragend", () => {
        state.dragging = -1;
        slot.classList.remove("is-dragging");
        document.querySelectorAll(".mc-slot.is-over, .mc-slot.is-insert-before, .mc-slot.is-insert-after").forEach(el => el.classList.remove("is-over", "is-insert-before", "is-insert-after"));
        setTimeout(() => { slot.dataset.wasDragged = "0"; }, 0);
      });

      attachDropHandlers(slot, i);
    }

    grid.appendChild(slot);
  }
  renderHeader();
}

function copyCard(fromIndex, toIndex) {
  const src = state.deck[fromIndex];
  if (!src || fromIndex === toIndex) return;
  if (state.deck[toIndex]) return showNotice("복제는 빈 슬롯에만 놓을 수 있습니다.");
  if (toIndex < 0 || toIndex >= LIMIT.cards || totalCards() >= LIMIT.cards) return alert("덱은 최대 20장입니다.");
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = uid();
  delete copy.auto;
  state.deck[toIndex] = copy;
  state.selected = toIndex;
  state.dragging = -1;
  save();
  renderGrid();
  renderEditor();
  showNotice("카드가 복제되었습니다.");
}

// 카드를 빼서 toIndex 위치에 끼워 넣는다(사이의 카드들은 한 칸씩 밀린다).
function insertCard(fromIndex, toIndex) {
  if (fromIndex < 0 || toIndex < 0 || fromIndex >= LIMIT.cards || toIndex >= LIMIT.cards) return;
  if (fromIndex === toIndex || !state.deck[fromIndex]) return;
  const arr = Array.from({ length: LIMIT.cards }, (_, k) => state.deck[k] || null);
  const [card] = arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, card);
  while (arr.length && !arr[arr.length - 1]) arr.pop();
  state.deck = arr;
  state.selected = toIndex;
  state.dragging = -1;
  save();
  renderGrid();
  renderEditor();
}

function moveCard(fromIndex, toIndex) {
  if (fromIndex < 0 || toIndex < 0 || fromIndex >= state.deck.length || toIndex >= LIMIT.cards) return;
  if (fromIndex === toIndex) return;

  const card = state.deck[fromIndex];
  if (!card) return;

  // Dropping on an empty slot moves the card there.
  // Dropping on another card swaps their positions, which makes
  // changing a card's number predictable and keeps all other cards intact.
  if (!state.deck[toIndex]) {
    state.deck[toIndex] = card;
    state.deck[fromIndex] = null;
  } else {
    const target = state.deck[toIndex];
    state.deck[toIndex] = card;
    state.deck[fromIndex] = target;
  }

  state.selected = toIndex;
  state.dragging = -1;
  save();
  renderGrid();
  renderEditor();
}

function renderEditor() {
  const card = selectedCard();
  $("editorEmpty").classList.toggle("hidden", !!card);
  $("editorForm").classList.toggle("hidden", !card);
  $("matchupEmpty").classList.toggle("hidden", !!card);
  $("matchupContent").classList.toggle("hidden", !card);
  if (!card) {
    $("editorTitle").textContent = "카드를 선택하세요";
    $("selectedCost").textContent = "—";
    return;
  }
  $("editorTitle").textContent = card.name || `CARD #${state.selected+1}`;
  populateForm(card);
}

function selectCard(index) {
  state.selected = index;
  renderGrid();
  renderEditor();
}

function addCard(preferredIndex = -1) {
  if (totalCards() >= LIMIT.cards) return alert("덱은 최대 20장입니다.");
  let index = preferredIndex;
  if (index < 0 || state.deck[index]) {
    index = state.deck.findIndex(x => !x);
    if (index < 0) index = state.deck.length;
  }
  if (index >= LIMIT.cards) return;
  const card = makeBlankCard();
  state.deck[index] = card;
  state.selected = index;
  renderGrid(); renderEditor(); save();
}

async function copySelectedCard() {
  const card = selectedCard();
  if (!card) return alert("먼저 복사할 카드를 선택하세요.");

  // A small custom wrapper lets this work independently from deck JSON files.
  const payload = {
    format: "MONSTER_CARDS_CARD_CLIPBOARD_V1",
    card: JSON.parse(JSON.stringify(card))
  };

  try {
    await navigator.clipboard.writeText(JSON.stringify(payload));
    showNotice("카드가 클립보드에 복사되었습니다.");
  } catch (_) {
    // Clipboard API may be unavailable when the file is opened directly.
    // Fall back to a temporary textarea.
    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(payload);
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showNotice("카드가 클립보드에 복사되었습니다.");
    } catch (err) {
      alert("카드 복사에 실패했습니다. 브라우저의 클립보드 권한을 확인해주세요.");
    }
    textarea.remove();
  }
}

async function pasteCard() {
  if (totalCards() >= LIMIT.cards) return alert("덱은 최대 20장입니다.");

  let text = "";
  try {
    text = await navigator.clipboard.readText();
  } catch (_) {
    alert("클립보드 읽기 권한이 필요합니다. 브라우저에서 클립보드 권한을 허용해주세요.");
    return;
  }

  try {
    const data = JSON.parse(text);
    const pasted = data && data.format === "MONSTER_CARDS_CARD_CLIPBOARD_V1"
      ? data.card
      : (data && data.card && typeof data.card === "object" ? data.card : data);

    if (!pasted || typeof pasted !== "object" || Array.isArray(pasted)) {
      throw new Error("카드 데이터가 아닙니다.");
    }

    const card = makeBlankCard();
    Object.assign(card, pasted);
    card.id = uid();
    delete card.quantity;

    // Paste after the selected card when possible; otherwise use the first empty slot.
    let index = state.selected >= 0 ? state.selected + 1 : -1;
    if (index < 0 || index > state.deck.length || (index < state.deck.length && state.deck[index])) {
      index = state.deck.findIndex(x => !x);
      if (index < 0) index = state.deck.length;
    }

    if (index >= LIMIT.cards) return alert("덱에 카드를 넣을 빈 슬롯이 없습니다.");

    state.deck[index] = card;
    state.selected = index;
    save();
    renderGrid();
    renderEditor();
    showNotice("카드가 붙여넣어졌습니다.");
  } catch (err) {
    alert("카드 붙여넣기 실패: 클립보드에 MONSTER CARDS 카드 데이터가 없습니다.");
  }
}

function showNotice(message) {
  let notice = $("clipboardNotice");
  if (!notice) {
    notice = document.createElement("div");
    notice.id = "clipboardNotice";
    notice.className = "mc-clipboard-notice";
    document.body.appendChild(notice);
  }
  notice.textContent = message;
  notice.classList.add("show");
  clearTimeout(showNotice.timer);
  showNotice.timer = setTimeout(() => notice.classList.remove("show"), 1500);
}

function deleteSelected() {
  if (state.selected < 0 || !state.deck[state.selected]) return;
  // 다른 카드의 번호(위치)가 밀리지 않도록 해당 슬롯만 비웁니다.
  state.deck[state.selected] = null;
  while (state.deck.length && !state.deck[state.deck.length - 1]) state.deck.pop();
  state.selected = -1;
  renderGrid(); renderEditor(); save();
}

function updateEditorLogos(card) {
  const skillPreview = $("skillLogoPreview");
  if (skillPreview) skillPreview.innerHTML = skillLogoTag(card.skill, "mc-editor-logo");
  const elementPreview = $("elementLogoPreview");
  if (elementPreview) elementPreview.innerHTML = logoTag("elements", card.element, "mc-editor-logo");
  const speciesPreview = $("speciesLogoPreview");
  if (speciesPreview) speciesPreview.innerHTML = logoTag("species", card.species, "mc-editor-logo");
  const meansPreview = $("meansLogoPreview");
  if (meansPreview) meansPreview.innerHTML = logoTag("means", card.means, "mc-editor-logo");
  const sizePreview = $("sizeLogoPreview");
  if (sizePreview) sizePreview.innerHTML = logoTag("sizes", card.size, "mc-editor-logo");
}

function updateSelectedFromForm() {
  const card = selectedCard();
  if (!card) return;
  delete card.auto;   // 직접 수정한 카드는 자동 추가 표시를 해제(고정)
  card.name = $("fName").value.trim();
  card.rarity = $("fRarity").value;
  card.skill = $("fSkill").value;
  card.element = $("fElement").value;
  card.species = $("fSpecies").value;
  card.means = $("fMeans").value;
  card.size = $("fSize").value;
  card.atk = Number($("fAtk").value);
  updateEditorLogos(card);
  $("editorTitle").textContent = card.name || `CARD #${state.selected+1}`;
  updateCostBreakdown(card);
  renderMatchup(card); // 속성/종족/수단/크기가 바뀐 경우에만 다시 그림
  renderGrid(); save();
}

["fName","fRarity","fSkill","fElement","fSpecies","fMeans","fSize","fAtk"].forEach(id => {
  $(id).addEventListener("input", updateSelectedFromForm);
  $(id).addEventListener("change", updateSelectedFromForm);
});

// 상성 패널: 공격/방어 탭 전환
document.querySelectorAll(".mc-mu-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    matchupMode = btn.dataset.mode;
    document.querySelectorAll(".mc-mu-tab").forEach(b => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    const card = selectedCard();
    if (card) renderMatchup(card, true);
  });
});

document.addEventListener("keydown", (e) => {
  // Do not intercept normal copy/paste while typing in form fields.
  const tag = document.activeElement && document.activeElement.tagName;
  const editing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  if (editing) return;
  if ($("deckPage").classList.contains("hidden")) return; // 스킬 페이지에서는 무시

  // Delete / Backspace: 선택한 카드 삭제
  if ((e.key === "Delete" || e.key === "Backspace") && !e.ctrlKey && !e.metaKey && !e.altKey && selectedCard()) {
    e.preventDefault();
    deleteSelected();
    return;
  }

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
    if (selectedCard()) {
      e.preventDefault();
      copySelectedCard();
    }
  }

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "v") {
    e.preventDefault();
    pasteCard();
  }
});

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function normalizeDeck(arr) {
  const deck = (Array.isArray(arr) ? arr : []).slice(0, LIMIT.cards).map(c => {
    if (!c || typeof c !== "object") return null;
    const copy = { ...c };
    delete copy.quantity; // 수량 개념 제거
    if (!copy.id) copy.id = uid();
    return copy;
  });
  while (deck.length && !deck[deck.length - 1]) deck.pop();
  return deck;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.deck));
  if (!save.keepUndo) autoUndo = null;   // 덱 맞춤 이후 다른 변경이 생기면 되돌리기 불가
  updateAutoUi();
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) state.deck = normalizeDeck(parsed);
    }
  } catch (_) {}
}

function exportJson() {
  const payload = {
    format: "MONSTER_CARDS_DECK_MAKER_V1",
    limits: LIMIT,
    cards: state.deck,
    totalCards: totalCards(),
    totalCost: totalCost()
  };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "monster_cards_deck.json"; a.click();
  URL.revokeObjectURL(url);
}

$("exportBtn").addEventListener("click", exportJson);
$("importInput").addEventListener("change", async (e) => {
  const file = e.target.files[0]; if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const cards = Array.isArray(data) ? data : data.cards;
    if (!Array.isArray(cards)) throw new Error("cards 배열이 없습니다.");
    state.deck = normalizeDeck(cards);
    state.selected = state.deck.findIndex(Boolean);
    save(); renderGrid(); renderEditor();
  } catch (err) {
    alert("JSON 불러오기 실패: " + err.message);
  }
  e.target.value = "";
});

/* ============================================================
 * 덱 맞춤 (자동 채우기)
 * - 직접 배치한(=auto 표시가 없는) 카드는 그대로 두고, 빈 슬롯을 채운다.
 * - 남은 COST 를 남은 장수에 나눠 카드별 목표 COST 를 정하고, 스킬을 먼저 배정한 뒤
 *   남은 COST 로 레어도/ATK 를 정한다. (스킬은 미사용 > 효과 분류 다양 > 유형 다양 순)
 * - 이미 배치한 카드의 값이 우선이다: 그 카드들은 절대 바꾸지 않고, COST·상성·레어도/ATK 경향·
 *   자주 쓴 속성/종족/수단/크기를 기준으로 나머지를 맞춘다.
 * - 속성/종족/수단/크기는 현재 덱이 약한 상대 유형을 보완하도록 고른다.
 *   (공격·방어 상성 점수를 합산해, 덱이 가장 불리한 유형을 우선 보완)
 * - 덱에 게임 체인저 스킬 카드가 있으면 그 효과에 맞춰 구성을 조정한다. (AUTO_GC_RULES)
 * - 완전히 같은 카드는 최대 AUTO_MAX_COPIES 장까지 허용한다.
 * ============================================================ */
const AUTO_SKILL_COSTS = [...new Set(DATA.skills.map(s => Number(s.cost || 0)))].sort((a, b) => a - b);
const AUTO_MAX_COPIES = 3;
const AUTO_AFFINITY = 0.6;   // 이미 배치한 카드가 많이 쓰는 값(속성/종족/수단/크기)에 주는 가산점(비율 × 가중치)

/* 게임 체인저별 덱 구성 규칙 (스킬 한글명 기준)
 *  unify: 해당 GC 카드의 값으로 통일할 필드   invert: 상성 반전(유리↔불리)
 *  forceSpecies: 상성 계산상 가장 불리한 종족으로 통일   lowRarity/highAtk: 레어도 낮게/ATK 높게
 *  noSkill: 새 카드는 스킬 없음   diceSkill: 주사위 스킬 우대   ignoreAxis: 상성 계산에서 제외할 축 */
const AUTO_GC_RULES = {
  "원소의 급류":       { unify: "element",  note: "속성 통일" },
  "종족의 자부심":     { unify: "species",  note: "종족 통일" },
  "혁명":              { lowRarity: true, highAtk: true, note: "레어도 낮게·ATK 높게" },
  "라이브 온 스테이지": { noSkill: true,   note: "스킬 없는 카드 위주" },
  "청천벽력":          { invert: true, forceSpecies: true, note: "상성 반전 → 가장 불리한 종족으로 통일" },
  "황제":              { highAtk: true,    note: "ATK 높게" },
  "결계":              { noSkill: true,    note: "스킬 없는 카드 위주(스킬 봉인)" },
  "이상한 나라":       { ignoreAxis: "size", note: "크기 상성 무시" },
  "인과율 조작":       { diceSkill: true,  note: "주사위 스킬 우대" }
};

const _autoVecCache = {};
function autoRawVec(axis, value) {
  const key = axis.key + "|" + value;
  if (key in _autoVecCache) return _autoVecCache[key];
  const a = matchupByAxis(axis, value, "attack");
  const d = matchupByAxis(axis, value, "defend");
  return (_autoVecCache[key] = (a && d) ? a.map((r, i) => r.score + d[i].score) : null);
}
// 계획(plan)을 반영한 상성 벡터: 반전(청천벽력)·축 무시(이상한 나라)
function autoVec(axis, value, plan) {
  const v = autoRawVec(axis, value);
  if (!v) return null;
  if (plan && plan.ignoreAxes[axis.key]) return v.map(() => 0);
  return plan && plan.invert ? v.map(x => -x) : v;
}

// 덱 전체의 축별 상대 유형 커버리지(높을수록 유리)
function autoCoverage(cards, plan) {
  const cov = {};
  MATCHUP_AXES.forEach(axis => {
    const c = MATCHUP_TABLE[axis.key].order.map(() => 0);
    cards.forEach(card => {
      const v = autoVec(axis, card[axis.field], plan);
      if (v) v.forEach((sc, i) => { c[i] += sc; });
    });
    cov[axis.key] = c;
  });
  return cov;
}

// 덱에 있는 게임 체인저 카드를 읽어 구성 계획을 만든다 (슬롯 순서가 앞선 카드가 우선)
function autoBuildPlan(fixed) {
  const plan = { force: {}, invert: false, lowRarity: false, highAtk: false, noSkill: false, diceSkill: false, ignoreAxes: {}, hasGC: false, notes: [] };
  fixed.forEach(card => {
    const sk = skillInfo(card.skill);
    if (!sk || sk.type !== "GameChanger") return;
    plan.hasGC = true;
    const rule = AUTO_GC_RULES[sk.ko];
    if (!rule) return;
    let detail = "";
    if (rule.unify && !plan.force[rule.unify]) {
      plan.force[rule.unify] = card[rule.unify];
      detail = ` (${label(DATA[rule.unify === "element" ? "elements" : "species"], card[rule.unify])})`;
    }
    if (rule.invert) plan.invert = true;
    if (rule.lowRarity) plan.lowRarity = true;
    if (rule.highAtk) plan.highAtk = true;
    if (rule.noSkill) plan.noSkill = true;
    if (rule.diceSkill) plan.diceSkill = true;
    if (rule.ignoreAxis) plan.ignoreAxes[rule.ignoreAxis] = true;
    plan.notes.push(`${sk.ko}: ${rule.note}${detail}`);
    plan._forceSpecies = plan._forceSpecies || !!rule.forceSpecies;
  });
  if (plan._forceSpecies && !plan.force.species) {
    // 상성이 반전되므로, 전체 상성 점수 합이 가장 낮은(=반전 시 가장 유리한) 종족으로 통일
    const axis = MATCHUP_AXES.find(a => a.key === "species");
    let worst = null;
    MATCHUP_TABLE.species.order.forEach(v => {
      const total = autoRawVec(axis, v).reduce((n, x) => n + x, 0);
      if (!worst || total < worst.total) worst = { v, total };
    });
    plan.force.species = worst.v;
    const last = plan.notes.findIndex(n => n.startsWith("청천벽력"));
    if (last >= 0) plan.notes[last] += ` (${label(DATA.species, worst.v)})`;
  }
  return plan;
}

// 축별 후보 값과 이득(덱이 약한 유형일수록 큰 가중치로 보완 점수). 통일 필드는 후보가 1개.
function autoAxisCandidates(axis, cov, used, plan, share) {
  const c = cov[axis.key];
  const forced = plan.force[axis.field];
  const list = [];
  MATCHUP_TABLE[axis.key].order.forEach(v => {
    if (forced && v !== forced) return;
    const vec = autoVec(axis, v, plan);
    let gain = 0;
    vec.forEach((sc, i) => { gain += Math.exp(-c[i] / 2) * sc + 0.01 * Math.abs(sc); });
    gain += AUTO_AFFINITY * ((share && share[axis.key][v]) || 0);   // 이미 배치한 카드의 값을 우선
    gain -= 0.02 * (used[axis.key][v] || 0);   // 자동 추가 카드끼리 같은 값만 반복되지 않도록 약한 분산
    list.push({ v, gain });
  });
  return list;
}

// 목표 COST 이하에서 가장 가까운 (레어도, ATK, 스킬 COST) 조합. 스킬이 정해져 있으면(fixedSc) 남은 COST 로 레어도/ATK 를 정한다
function autoPickStats(target, fixedSc, plan, profile) {
  const cands = [];
  DATA.rarity.forEach(r => {
    DATA.atk.forEach(atk => {
      AUTO_SKILL_COSTS.forEach(sc => {
        if (fixedSc != null && sc !== fixedSc) return;
        const total = Number(r.cost) + Math.max(0, Math.min(4, atk - 1)) + sc;
        if (total <= target) cands.push({ r, atk, sc, total });
      });
    });
  });
  const cmp = plan && plan.lowRarity
    ? (a, b) => (a.r.code - b.r.code) || (b.atk - a.atk) || (b.total - a.total)          // 레어도 낮게 → ATK 높게
    : plan && plan.highAtk
      ? (a, b) => (b.atk - a.atk) || (b.total - a.total) || (b.r.code - a.r.code)        // ATK 높게
      : (a, b) => (b.total - a.total)
          || (profile ? autoProfileDist(a, profile) - autoProfileDist(b, profile) : 0)   // 배치한 카드의 레어도/ATK 경향에 가깝게
          || (b.r.code - a.r.code) || (a.sc - b.sc) || (b.atk - a.atk);
  return cands.sort(cmp)[0];
}

// 이미 배치한 카드들의 평균 레어도/ATK 와의 거리
function autoProfileDist(c, p) {
  return Math.abs(c.r.code - p.rarity) + 0.7 * Math.abs(c.atk - p.atk);
}
function autoBuildProfile(fixed) {
  if (!fixed.length) return null;
  const avg = f => fixed.reduce((n, c) => n + f(c), 0) / fixed.length;
  return { rarity: avg(c => rarityInfo(c.rarity).code), atk: avg(c => Number(c.atk || 1)) };
}

// 스킬을 우선 배정한다: 목표 COST 안에서 (미사용 > 효과 분류 다양 > 유형 다양) 순으로 고른다.
// 게임 체인저는 자동으로 넣지 않는다(직접 배치한 게임 체인저에 맞춰 덱을 구성).
const AUTO_SKILL_CATEGORY = Object.fromEntries(SKILL_DETAILS.map(d => [d.en, d.category || ""]));
const AUTO_SKILL_TEXT = Object.fromEntries(SKILL_DETAILS.map(d => [d.en, d.description || ""]));
function autoPickSkill(target, usage, plan) {
  if (plan.noSkill) return { en: "None", cost: 0 };
  const minRarity = Math.min(...DATA.rarity.map(r => Number(r.cost)));
  // ATK 를 높게 가져가는 구성은 ATK 5(+4)에 필요한 COST 를 먼저 남겨 둔다
  const reserve = (plan.lowRarity || plan.highAtk) ? 4 : 0;
  const pool = DATA.skills.filter(s => s.en !== "None" && s.type !== "GameChanger" && Number(s.cost || 0) > 0
    && minRarity + reserve + Number(s.cost) <= target);
  if (!pool.length) return { en: "None", cost: 0 };
  let best = null;
  pool.forEach(s => {
    const cat = AUTO_SKILL_CATEGORY[s.en] || "";
    const score = -3 * (usage.skills[s.en] || 0)
                - 1 * (cat ? (usage.cats[cat] || 0) : 0)
                - 0.5 * (usage.types[s.type] || 0)
                + (plan.diceSkill && /주사위/.test(AUTO_SKILL_TEXT[s.en] || "") ? 2 : 0);
    if (!best || score > best.score + 1e-9) best = { s, score };
  });
  return { en: best.s.en, cost: Number(best.s.cost || 0) };
}

function autoUseSkill(usage, en) {
  const sk = skillInfo(en);
  if (!sk || sk.en === "None") return;
  usage.skills[sk.en] = (usage.skills[sk.en] || 0) + 1;
  const cat = AUTO_SKILL_CATEGORY[sk.en];
  if (cat) usage.cats[cat] = (usage.cats[cat] || 0) + 1;
  usage.types[sk.type] = (usage.types[sk.type] || 0) + 1;
}

function autoSignature(c) {
  return [c.rarity, skillInfo(c.skill).en, c.element, c.species, c.means, c.size, Number(c.atk || 1)].join("|");
}

// 축별 후보의 합이 가장 큰 조합 중, 같은 카드가 AUTO_MAX_COPIES 장을 넘지 않는 것을 고른다
function autoPickAttributes(axisLists, base, sigCount) {
  let best = null;
  const walk = (k, picked, gain) => {
    if (k === axisLists.length) {
      const sig = autoSignature({ ...base, ...picked });
      if ((sigCount[sig] || 0) >= AUTO_MAX_COPIES) return;
      if (!best || gain > best.gain + 1e-9) best = { picked: { ...picked }, gain };
      return;
    }
    axisLists[k].list.forEach(({ v, gain: g }) => {
      picked[axisLists[k].axis.field] = v;
      walk(k + 1, picked, gain + g);
    });
  };
  walk(0, {}, 0);
  return best && best.picked;
}

function autoFillDeck() {
  const snapshot = Array.from({ length: LIMIT.cards }, (_, k) => state.deck[k] ? JSON.parse(JSON.stringify(state.deck[k])) : null);
  const hadAuto = snapshot.some(c => c && c.auto);

  // 직접 배치한 카드는 고정, 이전 자동 추가 카드는 다시 계산
  const slots = snapshot.map(c => (c && !c.auto) ? c : null);
  const fixed = slots.filter(Boolean);
  const fixedCost = fixed.reduce((n, c) => n + costOf(c), 0);
  const budget = LIMIT.cost - fixedCost;
  const emptyIdx = slots.map((c, i) => c ? -1 : i).filter(i => i >= 0);

  if (!emptyIdx.length) return showNotice("빈 슬롯이 없습니다.");
  const minCost = Math.min(...DATA.rarity.map(r => Number(r.cost)));
  const n = Math.min(emptyIdx.length, Math.floor(budget / minCost));
  if (n <= 0) return showNotice("남은 COST가 부족해 카드를 추가할 수 없습니다.");

  const plan = autoBuildPlan(fixed);

  const maxCard = Math.max(...DATA.rarity.map(r => Number(r.cost))) + 4 + Math.max(...AUTO_SKILL_COSTS);
  const base = Math.min(maxCard, Math.floor(budget / n));
  let rem = base >= maxCard ? 0 : budget - base * n;

  const profile = autoBuildProfile(fixed);
  const cov = autoCoverage(fixed, plan);
  const used = {};        // 자동 추가 카드가 쓴 값(분산용)
  const share = {};       // 배치한 카드가 쓴 값의 비율(우선 반영용)
  MATCHUP_AXES.forEach(a => { used[a.key] = {}; share[a.key] = {}; });
  const usage = { skills: {}, cats: {}, types: {} };
  const sigCount = {};
  fixed.forEach(c => {
    MATCHUP_AXES.forEach(a => { share[a.key][c[a.field]] = (share[a.key][c[a.field]] || 0) + 1 / fixed.length; });
    autoUseSkill(usage, c.skill);
    const sig = autoSignature(c);
    sigCount[sig] = (sigCount[sig] || 0) + 1;
  });

  let addedCost = 0, added = 0;
  for (let k = 0; k < n; k++) {
    const target = base + (rem > 0 ? 1 : 0);
    if (rem > 0) rem--;
    const sk = autoPickSkill(target, usage, plan);          // 1) 스킬 우선 배정
    const st = autoPickStats(target, sk.cost, plan, profile);        // 2) 남은 COST 로 레어도/ATK
    const card = makeBlankCard();
    card.name = `자동 ${added + 1}`;
    card.rarity = st.r.ko;
    card.atk = st.atk;
    card.skill = sk.en;

    // 3) 상성 보완 + 게임 체인저 통일 조건 + 동일 카드 최대 3장
    const axisLists = MATCHUP_AXES.map(axis => ({ axis, list: autoAxisCandidates(axis, cov, used, plan, share) }));
    const picked = autoPickAttributes(axisLists, card, sigCount);
    if (!picked) continue;   // 허용되는 조합이 없으면 이 슬롯은 비워 둔다
    Object.assign(card, picked);

    autoUseSkill(usage, card.skill);
    MATCHUP_AXES.forEach(axis => {
      const v = card[axis.field];
      used[axis.key][v] = (used[axis.key][v] || 0) + 1;
      autoVec(axis, v, plan).forEach((sc, i) => { cov[axis.key][i] += sc; });
    });
    const sig = autoSignature(card);
    sigCount[sig] = (sigCount[sig] || 0) + 1;

    card.auto = true;
    slots[emptyIdx[added]] = card;
    addedCost += costOf(card);
    added++;
  }
  if (!added) return showNotice("조건에 맞는 카드를 만들 수 없습니다.");

  const wasSelected = state.selected >= 0 && state.deck[state.selected] && !state.deck[state.selected].auto;
  const keepSelected = wasSelected ? state.selected : -1;
  const trimmed = slots.slice();
  while (trimmed.length && !trimmed[trimmed.length - 1]) trimmed.pop();
  autoUndo = { deck: snapshot, selected: state.selected };
  state.deck = trimmed;
  state.selected = keepSelected;

  save.keepUndo = true; save(); save.keepUndo = false;
  renderGrid(); renderEditor();

  const info = $("autoFillInfo");
  const gcText = plan.notes.length ? ` 게임 체인저 반영 — ${plan.notes.join(" / ")}.` : "";
  info.textContent = `덱 맞춤: ${added}장 추가 (+${addedCost} COST) · 총 ${totalCards()}장 / ${totalCost()} COST.${gcText} 청록색 AUTO 카드가 자동 추가된 카드이며, 수정하면 고정됩니다.`;
  info.classList.remove("hidden");
  updateAutoUi();
  showNotice(hadAuto ? "덱 맞춤을 다시 계산했습니다." : `카드 ${added}장을 추가했습니다.`);
}

function undoAutoFill() {
  if (!autoUndo) return;
  const snap = autoUndo;
  const deck = snap.deck.slice();
  while (deck.length && !deck[deck.length - 1]) deck.pop();
  state.deck = deck;
  state.selected = state.deck[snap.selected] ? snap.selected : -1;
  autoUndo = null;
  save();
  renderGrid(); renderEditor();
  showNotice("덱 맞춤을 되돌렸습니다.");
}

function updateAutoUi() {
  const undoBtn = $("undoAutoBtn");
  if (undoBtn) undoBtn.disabled = !autoUndo;
  const info = $("autoFillInfo");
  if (info && !autoUndo) info.classList.add("hidden");
}

$("autoFillBtn").addEventListener("click", autoFillDeck);
$("undoAutoBtn").addEventListener("click", undoAutoFill);

$("newDeckBtn").addEventListener("click", () => {
  if (!confirm("현재 덱을 비우고 새 덱을 만들까요?")) return;
  state.deck = []; state.selected = -1; save(); renderGrid(); renderEditor();
});

const notes = DATA.compatibilityNotes;
const images = DATA.officialCompatibilityImages;
document.querySelectorAll(".mc-chart-tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mc-chart-tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.chart;
    $("compatibilityImage").src = images[key];
    $("compatibilityNote").textContent = notes[key];
  });
});
$("compatibilityImage").src = images.element;
$("compatibilityNote").textContent = notes.element;


let selectedSkillKo = null;

function populateSkillFilters() {
  const packs = [...new Set(SKILL_DETAILS.map(s => s.pack).filter(Boolean))];
  const types = [...new Set(SKILL_DETAILS.map(s => s.type).filter(Boolean))];
  $("skillPackFilter").innerHTML = '<option value="">전체 팩</option>' + packs.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
  $("skillTypeFilter").innerHTML = '<option value="">전체 유형</option>' + types.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
}

function renderSkillList() {
  const q = $("skillSearch").value.trim().toLowerCase();
  const pack = $("skillPackFilter").value;
  const type = $("skillTypeFilter").value;
  const filtered = SKILL_DETAILS.filter(s => {
    const hay = [s.ko,s.en,s.category,s.description,s.pack,s.type,s.related].join(" ").toLowerCase();
    return (!q || hay.includes(q)) && (!pack || s.pack === pack) && (!type || s.type === type);
  });

  $("skillList").innerHTML = `
    <div class="mc-skill-list-head">
      <b>스킬 목록</b><span>${filtered.length}개</span>
    </div>
    <div class="mc-skill-cards">
      ${filtered.map(s => `
        <button type="button" class="mc-skill-item ${selectedSkillKo === s.ko ? "active" : ""}" data-skill="${escapeHtml(s.ko)}" data-type="${escapeHtml(s.type || "")}">
          <span class="mc-skill-item-name">${escapeHtml(s.ko)}</span>
          <span class="mc-skill-item-meta">${escapeHtml(s.pack || "—")} · ${escapeHtml(s.type || "—")} · ${s.cost} COST</span>
        </button>`).join("")}
    </div>`;
  document.querySelectorAll(".mc-skill-item").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSkillKo = btn.dataset.skill;
      // 목록 전체를 다시 그리면 스크롤이 맨 위로 돌아가므로, 활성 표시만 바꿉니다.
      document.querySelectorAll("#skillList .mc-skill-item").forEach(b => b.classList.toggle("active", b === btn));
      renderSkillDetail();
    });
  });
}

/* ============================================================
 * 레어도별 스킬 변경 (SR / UR / EXT)
 *
 * - 스킬별 등급 효과는 SKILL_RARITY_EFFECTS 에 { SR, UR, EXT } 로 저장한다.
 *   (스킬명(ko) 기준이며, 유형 공통 규칙(RARITY_COMMON_EFFECTS)보다 우선 표시된다)
 * - 줄바꿈("\n")은 화면에서 줄바꿈으로 표시된다.
 * ============================================================ */

const RARITY_TIERS = ["SR", "UR", "EXT"];

const RARITY_COMMON_EFFECTS = {
  Standard:    { SR: "결계에 의한 스킬 봉인을 받지 않는다." },
  GameChanger: {
    SR:  "사용 후 1턴 동안 게임 체인저 존이 잠긴다.",
    UR:  "사용 후 3턴 동안 게임 체인저 존이 잠긴다.",
    EXT: "사용 후 99턴 동안 게임 체인저 존이 잠긴다."
  }
};

const SKILL_RARITY_EFFECTS = {
  "보호": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "턴이 끝날 때까지 모든 피해를 막아낼 수 있고, 공격 구역에 있을 때는 턴 시작 시 발동한다.",
    "EXT": "턴 종료 시까지 받는 모든 피해를 무효화하고 반사한다.\n이 카드가 공격 존에 있을 때는 턴 시작 시에도 발동한다."
  },
  "파멸": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "패를 3장 이상 가진 플레이어를 공격할 때 단침 유리(+1)을 얻는다.",
    "EXT": "이제 패에서 카드를 무덤이 아닌 폐허로 버리게 된다.\n이 카드가 공격 존에 있을 때 턴을 맞이한 플레이어는 카드를 2장 추가로 뽑아야 한다.\n상대가 패를 3장 이상(하위 카드 제외) 가지고 있을 때 공격하면 단침 유리(+1)를 획득한다."
  },
  "압박": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "게임 체인저의 소유자에게도 피해를 주며 각각의 카드 공격력이 1 이하일 경우 폐허로 보낸다.",
    "EXT": "공격 존의 카드 소유자가 아닌 모든 플레이어에게 1의 피해를 준다.\n더불어 필드에 있는 공격력 3 이하의 카드를 폐허로 이동시키고, 모든 플레이어의 손패에 있는 공격력 1 이하의 카드를 각각 무덤으로 이동시킨다."
  },
  "차기": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "반환된 플레이어에게 1의 피해를 준다.\n반환된 카드가 UR인 경우 2의 피해가 된다.",
    "EXT": "패가 아니라 무덤으로 반환하며, 추가로 3의 피해를 더 준다."
  },
  "우정": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "랭크와 구역 잠금에 상관없이 발동한다.",
    "EXT": "레어리티와 존 락에 상관없이 발동한다.\n유적지로 이동하는 대신 강제로 자신의 패로 추가한다.\n게임 체인져에도 발동한다."
  },
  "자이언트 킬링": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "이 카드보다 공격력이 2 이상 높다면 필승이다.",
    "EXT": "자신의 공격력과 상관없이 2 이상일 때 발동된다.\n상대의 공격력이 3 이상이라면 승리가 보장된다."
  },
  "양날의 검": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "발동 횟수의 제한이 없어진다.",
    "EXT": "상대가 받는 피해에는 제한이 없어지지만, 자신은 최대 2회까지만 피해를 받는다.\n또한 장침 이동량이 1 증가한다."
  },
  "회복": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "회복량이 2가 된다.",
    "EXT": "회복량이 6이 되며, 모든 아군이 회복합니다."
  },
  "전격": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "카드를 낼 때 공격 존에 있는 카드의 소유자에게도 피해를 준다.",
    "EXT": "피해량이 주사위 눈금과 같아진다.\n등장 시, 공격 존에 있는 카드의 소유자에게도 피해를 입힙니다."
  },
  "마술": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "교환할 카드가 상대의 가장 강력한 카드와 자신의 가장 약한 카드가 된다.",
    "EXT": "교환 상대를 선택할 수 있습니다\n게다가 손패의 한장이 아니라 손패 전체를 교환합니다."
  },
  "회귀": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "공격 시 주는 대미지가 1 증가합니다.\n플레이어를 쓰러트린 경우 손패로 되돌아간다.",
    "EXT": "덱의 맨 아래가 아니라 손패로 돌아간다.\n공격시 주는 피해가 1 증가한다."
  },
  "파동": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "주문 피해가 2로 증가한다.",
    "EXT": "피해량이 4가 된다.\n자신의 패에 있는 카드 1장으로 이 대미지를 견딜 수 있다."
  },
  "역행": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "모든 플레이어의 체력을 1 회복시킨다.\n그리고 방어 존의 구역 잠금을 무시하고 소유자의 손패로 되돌린 후 즉시 턴을 종료한다.",
    "EXT": "가능한 한 모든 것을 원래대로 돌린다."
  },
  "저격": {
    "SR": "카드를 1장 더 뽑는다.",
    "UR": "대상을 2번 선택할 수 있다.",
    "EXT": "주사위를 굴려 헤드샷을 겨냥한다.\n상대의 덱에 카드가 3장 이하라면 항상, 6장 이하일 경우 3 이하의 눈금이 나올 때, 그 외에는 1의 눈금이 나올 때 성공한다.\n실패한 경우 이 카드를 손패로 되돌린다. 헤드샷은 한 턴에 한 번만 겨냥할 수 있다."
  },
  "회피": {
    "SR": "공격력이 2 이하가 아니라 공격력이 4 이상일 때 발동된다.",
    "UR": "공격력에 상관없이 모든 카드의 공격을 회피한다.",
    "EXT": "공격력에 상관없이 모든 공격을 회피한다.\n주사위를 던지고 결과가 3 이하이면 손패로 돌아간다."
  },
  "원소의 급류": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "혁명": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "종족의 자부심": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "독술사": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "공격에 실패하더라도 독 카드를 1장 준다.",
    "EXT": "독이 치명적인 독으로 변하여 공격에 실패하더라도 1의 피해을 입힌다.\n추가로, 이 카드가 필드에 나왔을 때 다른 모든 플레이어게게 치명적인 독을 1장 준다."
  },
  "도전": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "수단이 절기로 바뀐다.",
    "EXT": "대전시 단침 불리가 제거된다.\n필살기로 변화하며 비할 데 없는 힘이 깃든다."
  },
  "진화": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "완전체는 추가로 1개의 절대 특성 또는 공격력 +2를 획득한다.",
    "EXT": "완전체는 추가로 2개의 절대 특성 또는 공격력 +2(최대 4)를 획득한다.\n대전에서 승리했을 때, 진화 직전에 다른 모든 플레이어에게 1의 피해를 준다."
  },
  "매혹": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "다른 모든 플레이어도 주사위를 굴린다.",
    "EXT": "다른 모든 플레이어를 대상으로 하여 주사위를 3개 굴리게 한다."
  },
  "야생 요소": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2.\n선택하지 않은 속성은 손에 추가한다."
  },
  "함정사": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "추가할 함정의 수를 2개로 늘린다.\n셔플하기 전에 손패에 있는 함정 카드를 덱에 되돌린다.",
    "EXT": "셔플하기 전에 손패에 있는 함정 카드를 덱에 되돌린다.\n추가되는 함정은 더욱 강력해지며 수량은 5장으로 증가한다."
  },
  "막기": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "방어에 성공하면 상대에게 3의 피해를 준다.",
    "EXT": "원래 무승부가 되는 위치만을 승리로 간주하며 그 외는 모두 무승부로 처리한다.\n방어에 성공하면 상대의 공격력만큼 피해를 입히고 공격 존으로 이동하는 대신 손패로 돌아간다."
  },
  "선택": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "미래를 선택할 때 각각 다른 효과가 발동한다.",
    "EXT": "미래의 공격력이 2 강화되어 강력한 효과를 발휘한다."
  },
  "회심": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "1이 나올 경우 피해가 3배로 증가한다.",
    "EXT": "3 이하의 눈으로 발동하지만, 4이상의 눈이 나올 경우 공격은 실패한다.\n발동에 성공했을 때 공격력은 4배가 되며 피해를 무효화하는 효과나 피해에 반응하는 스킬 효과를 관통한다."
  },
  "지휘관": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "병사는 희귀도 R, 공격력 2가 된다.",
    "EXT": "병사는 희귀도 SR, 공격력 3이 된다."
  },
  "부활": {
    "SR": "선택한 플레이어의 묘지가 3장 이상이면 추가로 1 회복한다.\n부활 가능하며 부활할 경우 카드를 뽑지 않는다.",
    "UR": "선택한 플레이어의 묘지에 있는 카드 3장마다 1을 더 회복한다.\n부활 가능하며 부활할 경우 카드를 뽑지 않는다.",
    "EXT": "선택한 플레이어를 부활시키며 완전히 회복시킨다.\n부활할 경우 카드를 뽑지 않는다."
  },
  "탐욕": {
    "SR": "추가로 카드를 1장 뽑습니다.",
    "UR": "카드를 1장 뽑는것이 아니라 주사위 눈과 같은 수만큼 카드를 뽑습니다.",
    "EXT": "또한 모든 플레이어는 자신의 덱에서 1장 카드를 뽑습니다."
  },
  "암흑 소환": {
    "SR": "선택한 플레이어의 무덤에서 맨 위 2장의 카드를 보고 1장을 선택할 수 있습니다.",
    "UR": "선택한 플레이어의 무덤에서 맨 위 3장의 카드를 보고 1장을 선택할 수 있습니다.",
    "EXT": "무덤의 가장 위가 아닌 무덤의 상단에서 최대 10장의 카드 중 3장을 선택할 수 있습니다\n선택한 카드는 방어구역에 놓이지 않고 손패에 추가합니다."
  },
  "망각": {
    "SR": "가장 비용이 높은 카드를 버리고 가장 비용이 낮은 카드를 버리지 않습니다.",
    "UR": "모든 카드를 버립니다.",
    "EXT": "모든 카드를 버려야 하며 필드에 있는 모든 카드를 구역 잠금을 무시하고 유적지로 이동시킵니다."
  },
  "융합": {
    "SR": "융합체의 희귀도가 한단계 상승합니다.",
    "UR": "희귀도가 달라도 합성 가능합니다.\n두 재료의 희귀도가 같을 경우 희귀도가 한단게 상승합니다.\n만약 스킬이 같고 희귀도가 UR로 같다면 융합체의 희귀도가 EXT가 됩니다.",
    "EXT": "융합 스킬은 융합하는 것이 불가능하다."
  },
  "인과율 조작": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "황제": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "라이브 온 스테이지": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "무사도": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "소유자의 턴이 오면 이 카드는 폐허가 아닌 묘지로 이동한다.",
    "EXT": "추가로 게임 체인져 존과 폐허도 잠근다. 소유자의 턴이 오면 이 카드는 폐허가 아닌 묘지로 이동한다."
  },
  "진압": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "희귀도와 관계없이 발동되며 구역 잠금과 신성 무효의 영향을 받지 않습니다.",
    "EXT": "희귀도와 상관없이 이 스킬은 발동되며 존 락과 신성 무효의 영향을 받지 않습니다\n또한 99턴 동안 게임 체인져 존을 잠급니다.\n잠겨진 공격 존에 있는 상대와 대치할 때는 승리가 보장됩니다."
  },
  "마음의 눈": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "이 카드가 받는 단침 유/불리 효과를 2배로 증폭시킵니다.",
    "EXT": "UR의 효과를 계승합니다.\n이 카드의 공격은 회피와 무효화가 불가능합니다.\n이 카드의 소유자 자신이 주사위를 굴릴때는 눈을 1로 고정, 타인이 굴려줄때는 6으로 고정합니다."
  },
  "명상": {
    "SR": "손패에서 반환한 만큼이 아니라 3장을 뽑습니다.",
    "UR": "손패에서 반환한 만큼이 아니라 5장을 뽑습니다.",
    "EXT": "손패를 되돌린 후 덱에 카드가 1장이 되도록 카드를 뽑습니다."
  },
  "암살": {
    "SR": "최소 비용이 아닌 임의로 버립니다.",
    "UR": "상대방의 손패에서 버릴 카드를 1장 선택할 수 있습니다.",
    "EXT": "최소 비용이 아니라 모두입니다\n선택한 플레이어의 손패가 이미 0장인 경우 그 플레이어의 목을 취합니다(첫 턴이 아닐 때 손패가 없는 상태에서 EXT 암살을 맞으면 즉사한다.)\n단 선택한 플레이어가 아직 턴을 맞지 못한 경우에는 발동하지 않습니다."
  },
  "결계": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "복수자": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "죽음에 가까운 상태이고 공격 구역에 있다면 공격 구역을 잠굽니다.",
    "EXT": "이 카드가 등장할 때 덱에 1장의 카드가 남을 때 까지 피해를 받지만 공격 성공 후 1 회복한다\n턴 시작 시 당신이 필사적인 상태에 있거나 이 카드의 소유자 보다 묘지가 적은 플레이어의 턴이라면 공격 구역을 잠근다."
  },
  "스카이 하이": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "이 카드가 피해로 인해 덱에서 묘지로 보내질 때 이 카드를 공개하고 손으로 가져옵니다.",
    "EXT": "무승부 범위가 각각 1칸 벌어진다\n이 카드가 피해로 인해 덱에서 묘지로 보내질 때 이 카드를 공개하고 손에 추가합니다\n이 카드가 어떤 효과로 덱이나 손으로 돌아갈 때 다른 모든 플레이어에게 1의 피해를 줍니다."
  },
  "음양": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "상성 판단에서 상성이 없는 경우가 사라진다. 크기와 수단의 판정에서 상성이 없는 경우에는 방어 유리로 간주되지만 그 외 판정에서는 공격 유리로 판정된다.",
    "EXT": "상성이 없으면 이 카드에 유리하다."
  },
  "트릭 오어 트릿": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "턴 시작시 상대가 패를 가지고 있지 않으면 트릭을 강제로 발동시킨다.\n이 카드 공격에 성공했을 때 턴 시작시 선택하지 않은 효과를 발동시킨다.",
    "EXT": "턴 시작 시 상대가 손패를 가지고 있지 않으면 트릭을 강제로 발동시킨다\n이 카드를 공격에 성공시킬경우 턴 시작 시 선택하지 않은 다른 효과를 발동시킨다\n더욱이 선택지가 더 까다로운 효과가 된다.\n트릭!:피해를 주는 대신 덱에서 카드를 1장 빼앗긴다.\n트리트!:손패에 있는 모든 카드를 넘긴다."
  },
  "응원": {
    "SR": "또한 이 카드의 소유자는 1 회복합니다. 이 카드는 자신의 턴이 아닐때도 버릴수 있습니다.",
    "UR": "단침 유리(+2)가 됩니다. 또한 이 카드의 소유자는 1 회복합니다. 이 카드는 자신 이외의 사람의 턴에도 버릴 수 있습니다.",
    "EXT": "짧은 바늘 유리(+2)를 얻는다.\n또한 이 카드의 소유자는 1 회복합니다.\n이 카드는 자신의 턴이 아닐때 버릴 수 있다\n효과가 발동한 대전 종료 후 이 카드를 손에 되돌린다."
  },
  "청천벽력": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "추적자": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "매 턴 종료 시 발동합니다.",
    "EXT": "선택한 플레이어에게 1의 피해를 주며, 효과는 매 턴 종료 시 발동된다. 또한, 동일한 플레이어를 연속으로 지정할 수도 있다."
  },
  "원한": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "저주 위력이 4가 됩니다.",
    "EXT": "공격존에서 이 카드를 교체하더라도 발동합니다\n주는 저주가 치명적으로 바뀝니다."
  },
  "단절": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "이 카드의 공격은 피해를 무효화하는 효과나 피해에 반응하는 스킬의 효과 등을 끊어낸다.\n또한 공격이 성공할 때, 상대의 묘지 맨 위에서 카드 3장을 유적지로 보낸다.",
    "EXT": "이 카드의 공격은 피해를 무효화하는 효과나 피해에 반응하는 스킬의 효과 등을 끊어낸다.\n또한 묘지의 카드를 모두 폐허로 보낸다."
  },
  "점프 스케어": {
    "SR": "필드에 있는 모든 C 카드를 폐허로 이동시킵니다.",
    "UR": "희귀도가 R인 카드도 대상이 된다. 추가로 필드에 있는 C·R 카드를 유적지로 이동시킨다.",
    "EXT": "희귀도가 R인 카드도 대상이 되어, 대상이 된 손패 카드 수만큼 각각 대미지를 입힙니다. 또한, 필드에 나와 있는 C 및 R 카드를 유적지로 이동시킵니다."
  },
  "어둠 속에서": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "두려움": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "과감": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "크기가 같은 경우에도 단침 유리를 획득합니다.",
    "EXT": "사이즈가 같아도 단침 우위를 획득하며, 사이즈가 자신보다 작을 때 단침 불리를 획득하지 않습니다.\n자신의 패, 덱, 혹은 묘지에 있는 \"\"이상한 나라\"\"를 선택하여 게임 체인저 존에 놓을 수 있습니다.\n선택 후 덱을 섞습니다."
  },
  "라이벌": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "단침 유리와 데미지 효과가 2배가 됩니다.",
    "EXT": "상성 일치 수에 따른 추가 효과를 얻지 않습니다.\n대신 항상 단침 유리(+2)를 얻으며, 공격 성공 시 2데미지를 줍니다.\n이 카드가 공격 존에 있을 때 턴을 맞은 플레이어는 덱 위에서 6장 중 1장을 손패로 추가하고, 덱을 섞습니다."
  },
  "도둑": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "최대 3장의 카드를 아래에 놓을 수 있으며 그리했을때 카드가 필드에 나왔을때의 효과를 발동합니다.",
    "EXT": "스탠다드가 아닌 카드를 포함하여 최대 5장의 카드를 아래에 놓을 수 있으며 해당 카드의 소환 시 능력이 발동됩니다.\n이 카드가 필드를 떠날때 아래의 카드를 자신의 패로 전부 회수합니다."
  },
  "계약자": {
    "SR": "권속의 공격력 +1",
    "UR": "권속의 공격력 +2",
    "EXT": "권속의 공격력이 +2 증가하고, 추가로 절대 특성을 얻거나 공격력을 +2 할 수 있습니다."
  },
  "운명": {
    "SR": "덱 위에서 2장을 보고 1장을 선택합니다. 선택하지 않은 카드는 덱 맨 아래로 되돌립니다.",
    "UR": "덱 위에서 3장을 보고 1장을 선택합니다. 선택하지 않은 카드는 덱 맨 아래로 되돌립니다.",
    "EXT": "덱의 위에서 3장을 공개한다. \"\"운명\"\"을 공개한 경우 그것을 유적지로 이동시키고\n비용 합계가 13/26/39를 초과할 때마다 주사위를 굴립니다.\n다른 모든 플레이어에게 주사위 눈금 합계만큼 피해를 줍니다.\n그 후, 공개된 다른 모든 카드의 필드 진입 및 버림 효과를 발동하고\n1장을 선택하여 방어 구역에 배치한다.\n선택되지 않은 카드는 덱 맨 아래로 되돌립니다."
  },
  "충성": {
    "SR": "다른 플레이어의 교환 대상이 되면 그 효과를 무효화합니다.",
    "UR": "SR의 효과를 계승합니다\n이 카드가 손패에 있는동안 다른 카드가 스킬의 대상이 되어도 효과를 무효화 합니다.",
    "EXT": "UR의 효과를 계승합니다.\n강탈뿐만 아니라 손패, 묘지, 덱에 직접 간섭하는 효과도 무효화합니다\n무효화했을 경우 간섭한 플레이어에게 1의 피해를 줍니다."
  },
  "풍요": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "생산": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  },
  "이상한 나라": {
    "SR": "다음 1턴동안 게임 체인저 존을 잠근다.",
    "UR": "다음 3턴동안 게임 체인저 존을 잠근다.",
    "EXT": "다음 99턴동안 게임 체인저 존을 잠근다."
  }
};

// 파생(EX) 카드의 레어도별 효과. 키는 EX_SKILL_DETAILS 의 카드명(ko)
const EX_RARITY_EFFECTS = {
  "저주": {
    "Disturbed": "없음.",
    "Fatal": "데미지에 관계없이 즉사시킵니다."
  },
  "권속": {
    "SR": "없음.",
    "UR": "방어 시, 단침 유리 (+1)을 획득한다.",
    "EXT": "방어 시, 단침 유리 (+1)을 획득한다.\n또한, 공격에 성공할 시 1 회복한다."
  },
  "오의": {
    "SR": "없음.",
    "UR": "이 카드는 절대로 지지 않는다.",
    "EXT": "이 카드는 필승입니다."
  },
  "완전체": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "없음.",
    "EXT": "이 카드의 공격을 받은 플레이어는 손패를 모두 버려야 한다."
  },
  "독": {
    "Disturbed": "없음."
  },
  "병사": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "자신의 의지로 싸운다.\n이 카드가 등장할 때 공격 존의 카드 소유자에게 1의 피해를 준다.\n이 카드가 등장한 턴 동안 플레이어가 받는 공격 피해를 3 감소시킨다.\n이 카드가 공격 존에 있을 때 턴을 맞은 플레이어에게 1의 피해를 준다.",
    "EXT": "세계의 운명은 이 자에게 맡겨졌다.\n필드에 나올 때 1 회복하고, 공격 존에 있는 카드의 소유자에게 1의 피해를 준다.\n그리고 모든 플레이어는 손패에서 빼앗긴 것을 되찾는다.\n출현한 턴에 플레이어가 받는 공격 대미지를 3 감소시킨다.\n이 카드가 공격 존에 배치되어 있을 때, 턴을 맞이한 플레이어에게 1의 피해를 주고 공격존을 잠근다.\n이 카드는 절대 지지 않는다.\n혁명은 이 카드에 단침 유리 (+4)를 부여한다.\n결계로 인해 스킬이 봉인되지 않는다."
  },
  "미래": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "모든 플레이어의 체력을 1 회복시킨다.",
    "EXT": "모든 상대 플레이어의 체력을 1 회복시킨다.\n매 턴 시작 시 다시 발동한다."
  },
  "미래(얼터너티브)": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "모든 플레이어에게 1 피해를 준다.",
    "EXT": "모든 상대 플레이어에게 1의 피해를 준다.\n매 턴 시작시 다시 발동한다."
  },
  "함정": {
    "Disturbed": "없음.",
    "Fatal": "상대방의 손패에서 무작위로 카드를 1장 버리게 한다.\n이 카드가 손패에서 버려졌을 경우 공격존에 있는 카드의 소유자에게 효과를 적용한다."
  },
  "암속성": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2."
  },
  "화속성": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2."
  },
  "광속성": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2."
  },
  "무속성": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2."
  },
  "수속성": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2."
  },
  "목속성": {
    "SR": "결계에 의해 스킬이 봉인되지 않는다.",
    "UR": "속성 상성에 의한 장침 이동량 +1.",
    "EXT": "속성 상성에 의한 장침 이동량 +2."
  }
};

function exRarityHtml(card) {
  const t = EX_RARITY_EFFECTS[card.ko];
  if (!t) return "";
  const keys = Object.keys(t);
  // 모든 등급이 "없음" 이면 표시할 내용이 없다
  if (keys.every(k => /^없음\.?$/.test(t[k].trim()))) return "";
  return `<div class="mc-ex-tiers">${keys.map(k => {
    const none = /^없음\.?$/.test(t[k].trim());
    return `<div class="mc-ex-tier" data-tier="${escapeHtml(k)}"><b>${escapeHtml(k)}</b><span${none ? ' class="is-none"' : ""}>${escapeHtml(t[k]).replace(/\n/g, "<br>")}</span></div>`;
  }).join("")}</div>`;
}

function rarityEffectFor(skill, tier) {
  const own = SKILL_RARITY_EFFECTS[skill.ko];
  if (own && own[tier]) return { text: own[tier], source: "skill" };
  const common = RARITY_COMMON_EFFECTS[skill.type];
  if (common && common[tier]) return { text: common[tier], source: "common" };
  return null;
}

function rarityEffectsHtml(skill) {
  if (!skill || !skill.type) return "";               // '없음' 등 유형이 없는 스킬은 표시하지 않음
  const rows = RARITY_TIERS.map(tier => {
    const eff = rarityEffectFor(skill, tier);
    const body = eff
      ? `<span class="mc-rarity-text">${escapeHtml(eff.text).replace(/\n/g, "<br>")}${eff.source === "common" ? ' <small class="mc-rarity-common">유형 공통</small>' : ""}</span>`
      : `<span class="mc-rarity-text mc-rarity-empty">등록된 등급별 효과가 없습니다.</span>`;
    return `<div class="mc-rarity-row" data-tier="${tier}"><b class="mc-rarity-tag">${tier}</b>${body}</div>`;
  }).join("");
  return `
    <div class="mc-skill-section" id="skillRarity">
      <h3>레어도별 변경</h3>
      <div class="mc-rarity-list">${rows}</div>
      <p class="mc-rarity-note">등급별 추가 효과는 원칙적으로 이전 등급에서 이월되지 않습니다. EXT는 UR 융합 등으로 얻는 등급이라 덱 메이커의 레어도 선택지(C/R/SR/UR)에는 없습니다.</p>
    </div>`;
}

function renderSkillDetail() {
  const s = SKILL_DETAILS.find(x => x.ko === selectedSkillKo);
  if (!s) return;
  const related = EX_SKILL_DETAILS.filter(x => s.related && s.related.split(/\s+/).some(k => k && x.ko.includes(k)));
  $("skillDetail").innerHTML = `
    <div class="eyebrow">${escapeHtml(s.pack || "SKILL")}</div>
    <div class="mc-skill-detail-title">
      ${s.en ? `<img class="mc-skill-detail-art" src="${resourceFile("skills", s.en)}" alt="${escapeHtml(s.ko)} 스킬 이미지" onerror="this.style.display='none'">` : ""}
      <div class="mc-skill-detail-name">
        <h2>${escapeHtml(s.ko)}</h2>
        <p>${escapeHtml(s.en || "—")}</p>
      </div>
      <strong>${s.cost} <small>COST</small></strong>
    </div>
    <div class="mc-skill-tags">
      <span data-type="${escapeHtml(s.type || "")}">${escapeHtml(s.type || "—")}</span>
      <span>${escapeHtml(s.category || "기타")}</span>
    </div>
    <div class="mc-skill-section">
      <h3>효과</h3>
      <p>${escapeHtml(s.description || "등록된 효과 설명이 없습니다.")}</p>
    </div>
    ${rarityEffectsHtml(s)}
    ${s.related ? `<div class="mc-skill-section"><h3>연관 EX·파생 스킬</h3><p>${escapeHtml(s.related)}</p></div>` : ""}
    ${related.length ? `<div class="mc-skill-section"><h3>관련 카드/파생 효과</h3>${related.map(x => `<div class="mc-ex-row"><b>${escapeHtml(x.ko)}</b><span>${escapeHtml(x.description)}</span>${exRarityHtml(x)}</div>`).join("")}</div>` : ""}
  `;
}

function initSkillPage() {
  populateSkillFilters();
  $("skillSearch").addEventListener("input", renderSkillList);
  $("skillPackFilter").addEventListener("change", renderSkillList);
  $("skillTypeFilter").addEventListener("change", renderSkillList);
  renderSkillList();
}

function switchPage(page) {
  const deck = page === "deck";
  $("deckPage").classList.toggle("hidden", !deck);
  $("skillPage").classList.toggle("hidden", deck);
  $("deckPageBtn").classList.toggle("active", deck);
  $("skillPageBtn").classList.toggle("active", !deck);
  document.title = deck ? "MONSTER CARDS 덱 메이커" : "MONSTER CARDS 스킬 설명";
}

document.querySelectorAll(".mc-clear").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = $(btn.dataset.clear);
    if (!input) return;
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
  });
});

$("deckPageBtn").addEventListener("click", () => switchPage("deck"));
$("skillPageBtn").addEventListener("click", () => switchPage("skill"));
initSkillPage();

load();
renderGrid();
renderEditor();