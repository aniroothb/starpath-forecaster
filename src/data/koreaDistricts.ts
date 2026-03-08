export interface KoreaDistrict {
  id: number;
  province_id: number;
  name_en: string;
  name_ko: string;
  lat: string;
  lng: string;
}

export const koreaDistricts: KoreaDistrict[] = [
  // Seoul (1) - 25 gu
  { id: 101, province_id: 1, name_en: "Jongno-gu", name_ko: "종로구", lat: "37.5735", lng: "126.9790" },
  { id: 102, province_id: 1, name_en: "Jung-gu", name_ko: "중구", lat: "37.5641", lng: "126.9979" },
  { id: 103, province_id: 1, name_en: "Yongsan-gu", name_ko: "용산구", lat: "37.5326", lng: "126.9906" },
  { id: 104, province_id: 1, name_en: "Seongdong-gu", name_ko: "성동구", lat: "37.5633", lng: "127.0371" },
  { id: 105, province_id: 1, name_en: "Gwangjin-gu", name_ko: "광진구", lat: "37.5385", lng: "127.0823" },
  { id: 106, province_id: 1, name_en: "Dongdaemun-gu", name_ko: "동대문구", lat: "37.5744", lng: "127.0396" },
  { id: 107, province_id: 1, name_en: "Jungnang-gu", name_ko: "중랑구", lat: "37.6066", lng: "127.0927" },
  { id: 108, province_id: 1, name_en: "Seongbuk-gu", name_ko: "성북구", lat: "37.5894", lng: "127.0167" },
  { id: 109, province_id: 1, name_en: "Gangbuk-gu", name_ko: "강북구", lat: "37.6396", lng: "127.0253" },
  { id: 110, province_id: 1, name_en: "Dobong-gu", name_ko: "도봉구", lat: "37.6688", lng: "127.0471" },
  { id: 111, province_id: 1, name_en: "Nowon-gu", name_ko: "노원구", lat: "37.6542", lng: "127.0568" },
  { id: 112, province_id: 1, name_en: "Eunpyeong-gu", name_ko: "은평구", lat: "37.6027", lng: "126.9291" },
  { id: 113, province_id: 1, name_en: "Seodaemun-gu", name_ko: "서대문구", lat: "37.5791", lng: "126.9368" },
  { id: 114, province_id: 1, name_en: "Mapo-gu", name_ko: "마포구", lat: "37.5663", lng: "126.9014" },
  { id: 115, province_id: 1, name_en: "Yangcheon-gu", name_ko: "양천구", lat: "37.5170", lng: "126.8665" },
  { id: 116, province_id: 1, name_en: "Gangseo-gu", name_ko: "강서구", lat: "37.5510", lng: "126.8495" },
  { id: 117, province_id: 1, name_en: "Guro-gu", name_ko: "구로구", lat: "37.4955", lng: "126.8878" },
  { id: 118, province_id: 1, name_en: "Geumcheon-gu", name_ko: "금천구", lat: "37.4569", lng: "126.8955" },
  { id: 119, province_id: 1, name_en: "Yeongdeungpo-gu", name_ko: "영등포구", lat: "37.5264", lng: "126.8963" },
  { id: 120, province_id: 1, name_en: "Dongjak-gu", name_ko: "동작구", lat: "37.5124", lng: "126.9396" },
  { id: 121, province_id: 1, name_en: "Gwanak-gu", name_ko: "관악구", lat: "37.4784", lng: "126.9516" },
  { id: 122, province_id: 1, name_en: "Seocho-gu", name_ko: "서초구", lat: "37.4837", lng: "127.0324" },
  { id: 123, province_id: 1, name_en: "Gangnam-gu", name_ko: "강남구", lat: "37.5172", lng: "127.0473" },
  { id: 124, province_id: 1, name_en: "Songpa-gu", name_ko: "송파구", lat: "37.5146", lng: "127.1066" },
  { id: 125, province_id: 1, name_en: "Gangdong-gu", name_ko: "강동구", lat: "37.5301", lng: "127.1238" },
  // Busan (2)
  { id: 201, province_id: 2, name_en: "Jung-gu", name_ko: "중구", lat: "35.1064", lng: "129.0327" },
  { id: 202, province_id: 2, name_en: "Seo-gu", name_ko: "서구", lat: "35.0978", lng: "129.0243" },
  { id: 203, province_id: 2, name_en: "Dong-gu", name_ko: "동구", lat: "35.1294", lng: "129.0453" },
  { id: 204, province_id: 2, name_en: "Yeongdo-gu", name_ko: "영도구", lat: "35.0912", lng: "129.0681" },
  { id: 205, province_id: 2, name_en: "Busanjin-gu", name_ko: "부산진구", lat: "35.1631", lng: "129.0533" },
  { id: 206, province_id: 2, name_en: "Dongnae-gu", name_ko: "동래구", lat: "35.1959", lng: "129.0856" },
  { id: 207, province_id: 2, name_en: "Nam-gu", name_ko: "남구", lat: "35.1365", lng: "129.0846" },
  { id: 208, province_id: 2, name_en: "Buk-gu", name_ko: "북구", lat: "35.1974", lng: "129.0294" },
  { id: 209, province_id: 2, name_en: "Haeundae-gu", name_ko: "해운대구", lat: "35.1631", lng: "129.1635" },
  { id: 210, province_id: 2, name_en: "Saha-gu", name_ko: "사하구", lat: "35.1046", lng: "128.9747" },
  { id: 211, province_id: 2, name_en: "Geumjeong-gu", name_ko: "금정구", lat: "35.2431", lng: "129.0924" },
  { id: 212, province_id: 2, name_en: "Gangseo-gu", name_ko: "강서구", lat: "35.2122", lng: "128.9803" },
  { id: 213, province_id: 2, name_en: "Yeonje-gu", name_ko: "연제구", lat: "35.1762", lng: "129.0799" },
  { id: 214, province_id: 2, name_en: "Suyeong-gu", name_ko: "수영구", lat: "35.1454", lng: "129.1134" },
  { id: 215, province_id: 2, name_en: "Sasang-gu", name_ko: "사상구", lat: "35.1526", lng: "128.9913" },
  { id: 216, province_id: 2, name_en: "Gijang-gun", name_ko: "기장군", lat: "35.2445", lng: "129.2222" },
  // Daegu (3)
  { id: 301, province_id: 3, name_en: "Jung-gu", name_ko: "중구", lat: "35.8694", lng: "128.6062" },
  { id: 302, province_id: 3, name_en: "Dong-gu", name_ko: "동구", lat: "35.8864", lng: "128.6357" },
  { id: 303, province_id: 3, name_en: "Seo-gu", name_ko: "서구", lat: "35.8718", lng: "128.5592" },
  { id: 304, province_id: 3, name_en: "Nam-gu", name_ko: "남구", lat: "35.8462", lng: "128.5975" },
  { id: 305, province_id: 3, name_en: "Buk-gu", name_ko: "북구", lat: "35.8858", lng: "128.5828" },
  { id: 306, province_id: 3, name_en: "Suseong-gu", name_ko: "수성구", lat: "35.8583", lng: "128.6315" },
  { id: 307, province_id: 3, name_en: "Dalseo-gu", name_ko: "달서구", lat: "35.8298", lng: "128.5327" },
  { id: 308, province_id: 3, name_en: "Dalseong-gun", name_ko: "달성군", lat: "35.7745", lng: "128.4314" },
  // Incheon (4)
  { id: 401, province_id: 4, name_en: "Jung-gu", name_ko: "중구", lat: "37.4736", lng: "126.6214" },
  { id: 402, province_id: 4, name_en: "Dong-gu", name_ko: "동구", lat: "37.4736", lng: "126.6431" },
  { id: 403, province_id: 4, name_en: "Michuhol-gu", name_ko: "미추홀구", lat: "37.4420", lng: "126.6500" },
  { id: 404, province_id: 4, name_en: "Yeonsu-gu", name_ko: "연수구", lat: "37.4102", lng: "126.6783" },
  { id: 405, province_id: 4, name_en: "Namdong-gu", name_ko: "남동구", lat: "37.4487", lng: "126.7315" },
  { id: 406, province_id: 4, name_en: "Bupyeong-gu", name_ko: "부평구", lat: "37.5078", lng: "126.7219" },
  { id: 407, province_id: 4, name_en: "Gyeyang-gu", name_ko: "계양구", lat: "37.5372", lng: "126.7377" },
  { id: 408, province_id: 4, name_en: "Seo-gu", name_ko: "서구", lat: "37.5456", lng: "126.6760" },
  // Gwangju (5)
  { id: 501, province_id: 5, name_en: "Dong-gu", name_ko: "동구", lat: "35.1460", lng: "126.9231" },
  { id: 502, province_id: 5, name_en: "Seo-gu", name_ko: "서구", lat: "35.1520", lng: "126.8895" },
  { id: 503, province_id: 5, name_en: "Nam-gu", name_ko: "남구", lat: "35.1328", lng: "126.9025" },
  { id: 504, province_id: 5, name_en: "Buk-gu", name_ko: "북구", lat: "35.1744", lng: "126.9120" },
  { id: 505, province_id: 5, name_en: "Gwangsan-gu", name_ko: "광산구", lat: "35.1396", lng: "126.7937" },
  // Daejeon (6)
  { id: 601, province_id: 6, name_en: "Dong-gu", name_ko: "동구", lat: "36.3121", lng: "127.4559" },
  { id: 602, province_id: 6, name_en: "Jung-gu", name_ko: "중구", lat: "36.3256", lng: "127.4213" },
  { id: 603, province_id: 6, name_en: "Seo-gu", name_ko: "서구", lat: "36.3555", lng: "127.3838" },
  { id: 604, province_id: 6, name_en: "Yuseong-gu", name_ko: "유성구", lat: "36.3622", lng: "127.3562" },
  { id: 605, province_id: 6, name_en: "Daedeok-gu", name_ko: "대덕구", lat: "36.3465", lng: "127.4159" },
  // Ulsan (7)
  { id: 701, province_id: 7, name_en: "Jung-gu", name_ko: "중구", lat: "35.5693", lng: "129.3323" },
  { id: 702, province_id: 7, name_en: "Nam-gu", name_ko: "남구", lat: "35.5444", lng: "129.3305" },
  { id: 703, province_id: 7, name_en: "Dong-gu", name_ko: "동구", lat: "35.5050", lng: "129.4166" },
  { id: 704, province_id: 7, name_en: "Buk-gu", name_ko: "북구", lat: "35.5826", lng: "129.3611" },
  { id: 705, province_id: 7, name_en: "Ulju-gun", name_ko: "울주군", lat: "35.5224", lng: "129.2432" },
  // Sejong (8) - single city
  { id: 801, province_id: 8, name_en: "Sejong City", name_ko: "세종시", lat: "36.4800", lng: "127.2590" },
  // Gyeonggi (9)
  { id: 901, province_id: 9, name_en: "Suwon", name_ko: "수원시", lat: "37.2636", lng: "127.0286" },
  { id: 902, province_id: 9, name_en: "Seongnam", name_ko: "성남시", lat: "37.4201", lng: "127.1266" },
  { id: 903, province_id: 9, name_en: "Goyang", name_ko: "고양시", lat: "37.6584", lng: "126.8320" },
  { id: 904, province_id: 9, name_en: "Yongin", name_ko: "용인시", lat: "37.2411", lng: "127.1775" },
  { id: 905, province_id: 9, name_en: "Bucheon", name_ko: "부천시", lat: "37.5034", lng: "126.7660" },
  { id: 906, province_id: 9, name_en: "Ansan", name_ko: "안산시", lat: "37.3219", lng: "126.8309" },
  { id: 907, province_id: 9, name_en: "Anyang", name_ko: "안양시", lat: "37.3944", lng: "126.9568" },
  { id: 908, province_id: 9, name_en: "Namyangju", name_ko: "남양주시", lat: "37.6359", lng: "127.2163" },
  { id: 909, province_id: 9, name_en: "Hwaseong", name_ko: "화성시", lat: "37.1996", lng: "126.8312" },
  { id: 910, province_id: 9, name_en: "Uijeongbu", name_ko: "의정부시", lat: "37.7381", lng: "127.0338" },
  { id: 911, province_id: 9, name_en: "Pyeongtaek", name_ko: "평택시", lat: "36.9921", lng: "127.0856" },
  { id: 912, province_id: 9, name_en: "Paju", name_ko: "파주시", lat: "37.7590", lng: "126.7802" },
  { id: 913, province_id: 9, name_en: "Gimpo", name_ko: "김포시", lat: "37.6152", lng: "126.7156" },
  // Gangwon (10)
  { id: 1001, province_id: 10, name_en: "Chuncheon", name_ko: "춘천시", lat: "37.8813", lng: "127.7298" },
  { id: 1002, province_id: 10, name_en: "Wonju", name_ko: "원주시", lat: "37.3423", lng: "127.9202" },
  { id: 1003, province_id: 10, name_en: "Gangneung", name_ko: "강릉시", lat: "37.7519", lng: "128.8761" },
  { id: 1004, province_id: 10, name_en: "Sokcho", name_ko: "속초시", lat: "38.2070", lng: "128.5918" },
  // North Chungcheong (11)
  { id: 1101, province_id: 11, name_en: "Cheongju", name_ko: "청주시", lat: "36.6424", lng: "127.4890" },
  { id: 1102, province_id: 11, name_en: "Chungju", name_ko: "충주시", lat: "36.9910", lng: "127.9259" },
  // South Chungcheong (12)
  { id: 1201, province_id: 12, name_en: "Cheonan", name_ko: "천안시", lat: "36.8151", lng: "127.1139" },
  { id: 1202, province_id: 12, name_en: "Asan", name_ko: "아산시", lat: "36.7898", lng: "127.0018" },
  // North Jeolla (13)
  { id: 1301, province_id: 13, name_en: "Jeonju", name_ko: "전주시", lat: "35.8242", lng: "127.1480" },
  { id: 1302, province_id: 13, name_en: "Gunsan", name_ko: "군산시", lat: "35.9676", lng: "126.7369" },
  { id: 1303, province_id: 13, name_en: "Iksan", name_ko: "익산시", lat: "35.9483", lng: "126.9577" },
  // South Jeolla (14)
  { id: 1401, province_id: 14, name_en: "Mokpo", name_ko: "목포시", lat: "34.8118", lng: "126.3922" },
  { id: 1402, province_id: 14, name_en: "Yeosu", name_ko: "여수시", lat: "34.7604", lng: "127.6622" },
  { id: 1403, province_id: 14, name_en: "Suncheon", name_ko: "순천시", lat: "34.9506", lng: "127.4872" },
  // North Gyeongsang (15)
  { id: 1501, province_id: 15, name_en: "Pohang", name_ko: "포항시", lat: "36.0190", lng: "129.3435" },
  { id: 1502, province_id: 15, name_en: "Gumi", name_ko: "구미시", lat: "36.1195", lng: "128.3444" },
  { id: 1503, province_id: 15, name_en: "Gyeongju", name_ko: "경주시", lat: "35.8562", lng: "129.2247" },
  { id: 1504, province_id: 15, name_en: "Andong", name_ko: "안동시", lat: "36.5684", lng: "128.7229" },
  // South Gyeongsang (16)
  { id: 1601, province_id: 16, name_en: "Changwon", name_ko: "창원시", lat: "35.2280", lng: "128.6811" },
  { id: 1602, province_id: 16, name_en: "Jinju", name_ko: "진주시", lat: "35.1800", lng: "128.1076" },
  { id: 1603, province_id: 16, name_en: "Gimhae", name_ko: "김해시", lat: "35.2284", lng: "128.8890" },
  { id: 1604, province_id: 16, name_en: "Geoje", name_ko: "거제시", lat: "34.8806", lng: "128.6211" },
  // Jeju (17)
  { id: 1701, province_id: 17, name_en: "Jeju City", name_ko: "제주시", lat: "33.4996", lng: "126.5312" },
  { id: 1702, province_id: 17, name_en: "Seogwipo", name_ko: "서귀포시", lat: "33.2541", lng: "126.5600" },
];

export const getKoreaDistrictsByProvince = (provinceId: number): KoreaDistrict[] =>
  koreaDistricts.filter((d) => d.province_id === provinceId);
