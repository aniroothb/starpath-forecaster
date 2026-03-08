export interface KoreaProvince {
  id: number;
  name_th: string;
  name_en: string;
  name_ko: string;
  lat: string;
  lng: string;
}

export const koreaProvinces: KoreaProvince[] = [
  { id: 1, name_th: "โซล", name_en: "Seoul", name_ko: "서울특별시", lat: "37.5665", lng: "126.9780" },
  { id: 2, name_th: "ปูซาน", name_en: "Busan", name_ko: "부산광역시", lat: "35.1796", lng: "129.0756" },
  { id: 3, name_th: "แทกู", name_en: "Daegu", name_ko: "대구광역시", lat: "35.8714", lng: "128.6014" },
  { id: 4, name_th: "อินชอน", name_en: "Incheon", name_ko: "인천광역시", lat: "37.4563", lng: "126.7052" },
  { id: 5, name_th: "กวางจู", name_en: "Gwangju", name_ko: "광주광역시", lat: "35.1595", lng: "126.8526" },
  { id: 6, name_th: "แทจอน", name_en: "Daejeon", name_ko: "대전광역시", lat: "36.3504", lng: "127.3845" },
  { id: 7, name_th: "อุลซัน", name_en: "Ulsan", name_ko: "울산광역시", lat: "35.5384", lng: "129.3114" },
  { id: 8, name_th: "เซจง", name_en: "Sejong", name_ko: "세종특별자치시", lat: "36.4800", lng: "127.2590" },
  { id: 9, name_th: "คยองกี", name_en: "Gyeonggi", name_ko: "경기도", lat: "37.4138", lng: "127.5183" },
  { id: 10, name_th: "คังวอน", name_en: "Gangwon", name_ko: "강원특별자치도", lat: "37.8228", lng: "128.1555" },
  { id: 11, name_th: "ชุงชองเหนือ", name_en: "North Chungcheong", name_ko: "충청북도", lat: "36.6357", lng: "127.4913" },
  { id: 12, name_th: "ชุงชองใต้", name_en: "South Chungcheong", name_ko: "충청남도", lat: "36.5184", lng: "126.8000" },
  { id: 13, name_th: "ชอลลาเหนือ", name_en: "North Jeolla", name_ko: "전북특별자치도", lat: "35.7175", lng: "127.1530" },
  { id: 14, name_th: "ชอลลาใต้", name_en: "South Jeolla", name_ko: "전라남도", lat: "34.8679", lng: "126.9910" },
  { id: 15, name_th: "คยองซังเหนือ", name_en: "North Gyeongsang", name_ko: "경상북도", lat: "36.4919", lng: "128.8889" },
  { id: 16, name_th: "คยองซังใต้", name_en: "South Gyeongsang", name_ko: "경상남도", lat: "35.4606", lng: "128.2132" },
  { id: 17, name_th: "เชจู", name_en: "Jeju", name_ko: "제주특별자치도", lat: "33.4996", lng: "126.5312" },
];
