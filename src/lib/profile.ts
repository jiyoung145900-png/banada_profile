export const CARD_TEMPLATES = ["noir", "ivory", "stripe"] as const;
export type CardTemplate = (typeof CARD_TEMPLATES)[number];

export type Profile = {
  name: string;
  age: string;
  height: string;
  cupSize: string;
  weight: string;
  charm: string;
  job: string;
  bio: string;
  hobbies: string;
  photo: string | null;
  photoPos: number;
  logo: string | null;
  brandName: string;
  template: CardTemplate;
};

export const DEFAULT_PROFILE: Profile = {
  name: "이아름",
  age: "28",
  height: "165",
  cupSize: "C컵",
  weight: "50",
  charm: "밝은 미소, 섬세한 마음",
  job: "아티스트",
  bio: "아름다운 순간들을 소중히 여기며, 진정한 인연을 기다립니다.",
  hobbies: "아트 갤러리, 요가, 와인, 클래식",
  photo: null,
  photoPos: 28,
  logo: null,
  brandName: "BANADA",
  template: "noir",
};

export const TEMPLATE_META: Record<
  CardTemplate,
  { label: string; hint: string }
> = {
  noir: { label: "Noir", hint: "풀블리드 · 다크" },
  ivory: { label: "Ivory", hint: "매거진 · 크림" },
  stripe: { label: "Stripe", hint: "바나나 밴드" },
};

export function parseHobbies(raw: string): string[] {
  return raw
    .split(/[,，]/)
    .map((h) => h.trim())
    .filter(Boolean)
    .slice(0, 8);
}

export function downloadName(name: string, brand: string = "BANADA"): string {
  const safeBrand = brand.replace(/[^\w가-힣]+/g, "_").replace(/^_|_$/g, "") || "BANADA";
  const safe = name.replace(/[^\w가-힣]+/g, "_").replace(/^_|_$/g, "");
  return `${safeBrand}_${safe || "profile"}.png`;
}

// 매력 포인트 프리셋 (60개)
export const CHARM_PRESETS: string[] = [
  "밝은 미소, 섬세한 마음",
  "청순한 매력, 도도한 눈빛",
  "부드러운 목소리, 사랑스러운 웃음",
  "긴 생머리, 우아한 몸매",
  "순수한 눈빛, 요염한 분위기",
  "깨끗한 피부, 슬림한 라인",
  "귀여운 얼굴, 반전 볼륨감",
  "청초한 이미지, 지적인 매력",
  "달콤한 목소리, 애교 넘치는 말투",
  "고양이상 눈매, 시크한 매력",
  "강아지상, 사랑스러운 미소",
  "동안 외모, 성숙한 분위기",
  "슬림한 몸매, 볼륨감 있는 라인",
  "화려한 이목구비, 매혹적인 눈빛",
  "청순 글래머, 반전 매력",
  "다정한 성격, 세련된 스타일",
  "지적인 매력, 유쾌한 성격",
  "차분한 목소리, 우아한 몸짓",
  "밝은 에너지, 긍정적인 마인드",
  "센스 있는 대화, 배려 깊은 마음",
  "청순한 얼굴, 볼륨감 있는 몸매",
  "여리여리한 몸매, 강한 인상",
  "고급스러운 분위기, 우아한 매너",
  "상큼한 미소, 발랄한 성격",
  "몽환적인 눈빛, 신비로운 분위기",
  "섬세한 손길, 따뜻한 마음",
  "명품 라인, 시선 강탈",
  "화이트 피부, 인형 같은 비주얼",
  "오똑한 콧날, 도톰한 입술",
  "긴 다리, 잘록한 허리",
  "부드러운 곡선, 완벽한 비율",
  "청량한 미소, 시원한 인상",
  "깊은 눈빛, 매혹적인 아우라",
  "청순 도발, 반전 섹시",
  "귀엽고 사랑스러운, 애교 만점",
  "차분하고 세련된, 지적인 여성",
  "발랄하고 유쾌한, 밝은 에너지",
  "우아하고 고급스러운, 여신 비주얼",
  "청순하고 순수한, 첫사랑 느낌",
  "성숙하고 매혹적인, 어른의 매력",
  "동안 미모, 볼륨 라인",
  "청순한 미소, 관능적인 몸매",
  "지적이고 세련된, 매너 있는 성격",
  "다정하고 배려 깊은, 따뜻한 여성",
  "밝고 긍정적인, 활기찬 매력",
  "차분하고 우아한, 클래식한 아름다움",
  "청량하고 시원한, 상쾌한 매력",
  "몽환적이고 신비한, 예술가 감성",
  "섬세하고 감성적인, 로맨틱한 여성",
  "고급스럽고 세련된, 럭셔리한 분위기",
  "청순하고 사랑스러운, 첫인상 만점",
  "지적이고 유머러스한, 대화가 즐거운",
  "부드럽고 다정한, 편안한 매력",
  "화려하고 매혹적인, 시선 집중",
  "청초하고 순수한, 맑은 눈빛",
  "성숙하고 우아한, 여성스러운 매력",
  "발랄하고 상큼한, 청춘의 매력",
  "차분하고 지적인, 신뢰감 있는 여성",
  "매혹적이고 도도한, 팜므파탈",
  "따뜻하고 포근한, 힐링되는 매력",
];

// 한 줄 소개 프리셋 (60개)
export const BIO_PRESETS: string[] = [
  "아름다운 순간들을 소중히 여기며, 진정한 인연을 기다립니다.",
  "함께하는 시간이 특별해지는 만남을 원해요.",
  "서로에게 좋은 추억이 되는 만남을 만들어가고 싶어요.",
  "진심으로 대화하고 편안하게 즐길 수 있는 분을 찾아요.",
  "매너 있고 다정하신 분과 좋은 시간 보내고 싶습니다.",
  "특별한 하루를 함께 만들어갈 인연을 기다리고 있어요.",
  "부담 없이 편안한 만남을 선호합니다.",
  "즐거운 대화와 진솔한 마음이 있는 만남을 원해요.",
  "품격 있는 분위기 속에서 함께 즐길 수 있길 바라요.",
  "센스 있는 분과의 대화가 가장 큰 즐거움입니다.",
  "오늘 하루가 특별해질 인연을 기다리고 있어요.",
  "매너 좋으신 분과 부담 없이 만나고 싶어요.",
  "서로 예의를 지키며 즐거운 시간을 보내요.",
  "진심으로 저를 봐주시는 분을 만나고 싶습니다.",
  "짧은 만남도 소중하게 기억되길 바라요.",
  "밝고 유쾌한 분위기로 시간을 채우고 싶어요.",
  "특별한 대화, 특별한 감정을 나누고 싶어요.",
  "잠깐이라도 진심으로 통하는 만남을 원합니다.",
  "센스와 매너를 갖춘 분과의 만남을 선호해요.",
  "편안한 분위기에서 서로를 알아가고 싶어요.",
  "즐거운 시간, 좋은 기억으로 남는 만남을 원해요.",
  "서로에게 힐링이 되는 만남을 꿈꿔요.",
  "품위 있고 여유로운 만남을 선호합니다.",
  "함께 있으면 시간이 빨리 가는 그런 분을 찾아요.",
  "가벼운 웃음과 진심 어린 대화를 나눌 수 있길.",
  "부담 없이 서로를 존중하며 즐거운 만남 원해요.",
  "매너와 센스를 갖추신 분이면 더 좋겠어요.",
  "특별한 밤을 함께 만들어갈 분을 기다립니다.",
  "진심 어린 대화가 오가는 만남을 좋아해요.",
  "서로에게 편안함을 주는 관계를 원해요.",
  "예의 바르고 다정하신 분 환영합니다.",
  "잊지 못할 순간을 함께 만들어봐요.",
  "달콤한 대화와 로맨틱한 분위기를 좋아해요.",
  "서로에게 좋은 기억으로 남기를 바라요.",
  "여유롭고 품격 있는 만남을 지향해요.",
  "따뜻한 마음을 나눌 수 있는 분을 찾습니다.",
  "센스 넘치는 대화와 편안한 스킨십을 즐겨요.",
  "은은한 분위기 속에서 서로를 알아가고 싶어요.",
  "진지하지도, 가볍지도 않은 딱 좋은 만남을.",
  "저를 아껴주실 분과의 시간을 소중히 여겨요.",
  "즐거움과 설렘이 있는 만남을 원합니다.",
  "특별한 하루의 주인공이 되고 싶으신 분 환영.",
  "서로 매너를 지키며 즐거운 시간 보내요.",
  "달콤하고 부드러운 분위기를 좋아해요.",
  "품격 있는 신사분과의 만남을 선호합니다.",
  "진심으로 대해주시는 만큼 저도 최선을 다해요.",
  "편안하고 자연스러운 만남이 가장 좋아요.",
  "따뜻하게 저를 안아주실 분을 기다립니다.",
  "매너 지키시는 분이라면 언제든 환영이에요.",
  "함께 있는 시간이 즐거운 만남을 원해요.",
  "은근한 매력에 빠져드는 만남을 만들어봐요.",
  "저와 좋은 케미가 통하는 분을 만나고 싶어요.",
  "짧은 시간도 알차게 채워가는 만남을 선호해요.",
  "설렘 가득한 첫 만남을 기대하고 있어요.",
  "부드럽고 다정한 분위기를 사랑해요.",
  "저를 여왕처럼 대해주실 분과 함께하고 싶어요.",
  "특별한 감정이 오가는 만남을 원합니다.",
  "센스 있는 리드가 있는 분을 좋아해요.",
  "진솔하고 따뜻한 시간을 함께 나눠요.",
  "오늘 밤, 특별한 인연이 되어주세요.",
];

// 관심사 프리셋 (60개)
export const HOBBY_PRESETS: string[] = [
  "아트 갤러리, 요가, 와인, 클래식",
  "카페 투어, 산책, 재즈, 독서",
  "브런치, 필라테스, 샴페인, 여행",
  "전시회, 러닝, 칵테일, 영화",
  "미술관, 요가, 홈 파티, 사진",
  "쇼핑, 스파, 디저트, 뮤지컬",
  "북 카페, 명상, 티 타임, 향수",
  "패션, 헬스, 파인 다이닝, 음악",
  "메이크업, 필라테스, 브런치, 넷플릭스",
  "인테리어, 요리, 와인 바, 콘서트",
  "드라이브, 카페, 캔들, 재즈 바",
  "발레, 클래식, 티 소믈리에, 향초",
  "골프, 리조트, 스파, 오마카세",
  "테니스, 브런치, 샴페인, 별장",
  "요트, 다이빙, 리조트, 파티",
  "승마, 와이너리, 미슐랭, 여행",
  "필라테스, 마사지, 뷰티, 쇼핑",
  "요가, 명상, 오가닉, 힐링",
  "사진, 여행, 카페, 소품",
  "그림, 전시, 아트북, 재즈",
  "글쓰기, 시, 문학, 클래식",
  "영화, 드라마, 팝콘, 홈시어터",
  "게임, 만화, 애니, 굿즈",
  "홈 카페, 베이킹, 원두, 라떼아트",
  "쿠킹, 파스타, 와인, 티라미수",
  "칵테일, 위스키, 재즈 바, 야경",
  "루프탑, 스카이라운지, 샴페인, 도시",
  "호캉스, 스파, 룸서비스, 뷰",
  "여행, 리조트, 비치, 선셋",
  "겨울 스포츠, 스키, 온천, 코트",
  "축제, 파티, 클럽, 드레스업",
  "패션위크, 명품, 편집숍, 트렌드",
  "뷰티, 스킨케어, 향수, 셀프케어",
  "K팝, 콘서트, 팬미팅, 굿즈",
  "발레, 오페라, 클래식, 앤티크",
  "미술관, 조각, 현대미술, 큐레이션",
  "재즈, LP, 바이닐, 오디오",
  "브런치, 아메리카노, 크루아상, 신문",
  "산책, 반려동물, 공원, 힐링",
  "홈트, 필라테스, 프로틴, 다이어트",
  "명상, 요가, 아쉬탕가, 사트비카",
  "타로, 사주, 별자리, 점성술",
  "위스키, 시가, 재즈, 바",
  "샴페인, 마카롱, 애프터눈 티, 우아",
  "와인, 치즈, 살라미, 유러피안",
  "카페, 라떼, 크루아상, 유럽 감성",
  "브런치, 에그 베네딕트, 미모사, 주말",
  "쇼핑, 청담, 편집숍, 브랜드",
  "핫플, SNS, 인스타, 감성",
  "여행, 도쿄, 파리, 뉴욕",
  "제주, 발리, 몰디브, 파타야",
  "댄스, 클럽, EDM, 리듬",
  "카페 투어, 로스터리, 원두, 드립",
  "북클럽, 소설, 에세이, 문학상",
  "홈 무비, 넷플릭스, 왓챠, 팝콘",
  "베이킹, 스콘, 마들렌, 홈 카페",
  "플라워, 꽃꽂이, 프리저브드, 감성",
  "캔들, 디퓨저, 향수, 무드",
  "홈 파티, 소셜, 와인, 대화",
  "럭셔리, 파인 다이닝, 오마카세, 미슐랭",
];

// 소개 3종 세트 랜덤 생성
export function randomIntro(): {
  charm: string;
  bio: string;
  hobbies: string;
} {
  const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  return {
    charm: pick(CHARM_PRESETS),
    bio: pick(BIO_PRESETS),
    hobbies: pick(HOBBY_PRESETS),
  };
}

export async function readLogoFile(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 올릴 수 있어요.");
  }
  const bitmap = await createImageBitmap(file);
  const max = 400;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("로고를 처리할 수 없어요.");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  return canvas.toDataURL("image/png");
}

export async function readPhotoFile(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 올릴 수 있어요.");
  }
  const bitmap = await createImageBitmap(file);
  const max = 1600;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("사진을 처리할 수 없어요.");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.9);
}