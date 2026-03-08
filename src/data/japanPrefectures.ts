export interface JapanPrefecture {
  id: number;
  name_th: string;
  name_en: string;
  name_ja: string;
  lat: string;
  lng: string;
}

export const japanPrefectures: JapanPrefecture[] = [
  { id: 1, name_th: "ฮอกไกโด", name_en: "Hokkaido", name_ja: "北海道", lat: "43.0642", lng: "141.3469" },
  { id: 2, name_th: "อาโอโมริ", name_en: "Aomori", name_ja: "青森県", lat: "40.8244", lng: "140.7400" },
  { id: 3, name_th: "อิวาเตะ", name_en: "Iwate", name_ja: "岩手県", lat: "39.7036", lng: "141.1527" },
  { id: 4, name_th: "มิยางิ", name_en: "Miyagi", name_ja: "宮城県", lat: "38.2688", lng: "140.8721" },
  { id: 5, name_th: "อาคิตะ", name_en: "Akita", name_ja: "秋田県", lat: "39.7186", lng: "140.1024" },
  { id: 6, name_th: "ยามางาตะ", name_en: "Yamagata", name_ja: "山形県", lat: "38.2404", lng: "140.3633" },
  { id: 7, name_th: "ฟุกุชิมะ", name_en: "Fukushima", name_ja: "福島県", lat: "37.7500", lng: "140.4678" },
  { id: 8, name_th: "อิบารากิ", name_en: "Ibaraki", name_ja: "茨城県", lat: "36.3419", lng: "140.4468" },
  { id: 9, name_th: "โทชิงิ", name_en: "Tochigi", name_ja: "栃木県", lat: "36.5658", lng: "139.8836" },
  { id: 10, name_th: "กุนมะ", name_en: "Gunma", name_ja: "群馬県", lat: "36.3912", lng: "139.0609" },
  { id: 11, name_th: "ไซตามะ", name_en: "Saitama", name_ja: "埼玉県", lat: "35.8569", lng: "139.6489" },
  { id: 12, name_th: "ชิบะ", name_en: "Chiba", name_ja: "千葉県", lat: "35.6047", lng: "140.1233" },
  { id: 13, name_th: "โตเกียว", name_en: "Tokyo", name_ja: "東京都", lat: "35.6762", lng: "139.6503" },
  { id: 14, name_th: "คานางาวะ", name_en: "Kanagawa", name_ja: "神奈川県", lat: "35.4478", lng: "139.6425" },
  { id: 15, name_th: "นีงาตะ", name_en: "Niigata", name_ja: "新潟県", lat: "37.9026", lng: "139.0236" },
  { id: 16, name_th: "โทยามะ", name_en: "Toyama", name_ja: "富山県", lat: "36.6953", lng: "137.2114" },
  { id: 17, name_th: "อิชิกาวะ", name_en: "Ishikawa", name_ja: "石川県", lat: "36.5947", lng: "136.6256" },
  { id: 18, name_th: "ฟุกุอิ", name_en: "Fukui", name_ja: "福井県", lat: "36.0652", lng: "136.2219" },
  { id: 19, name_th: "ยามานาชิ", name_en: "Yamanashi", name_ja: "山梨県", lat: "35.6635", lng: "138.5684" },
  { id: 20, name_th: "นางาโนะ", name_en: "Nagano", name_ja: "長野県", lat: "36.2324", lng: "138.1810" },
  { id: 21, name_th: "กิฟุ", name_en: "Gifu", name_ja: "岐阜県", lat: "35.3912", lng: "136.7223" },
  { id: 22, name_th: "ชิซึโอกะ", name_en: "Shizuoka", name_ja: "静岡県", lat: "34.9769", lng: "138.3831" },
  { id: 23, name_th: "ไอจิ", name_en: "Aichi", name_ja: "愛知県", lat: "35.1802", lng: "136.9066" },
  { id: 24, name_th: "มิเอะ", name_en: "Mie", name_ja: "三重県", lat: "34.7303", lng: "136.5086" },
  { id: 25, name_th: "ชิงะ", name_en: "Shiga", name_ja: "滋賀県", lat: "35.0045", lng: "135.8686" },
  { id: 26, name_th: "เกียวโต", name_en: "Kyoto", name_ja: "京都府", lat: "35.0116", lng: "135.7681" },
  { id: 27, name_th: "โอซากา", name_en: "Osaka", name_ja: "大阪府", lat: "34.6937", lng: "135.5023" },
  { id: 28, name_th: "เฮียวโงะ", name_en: "Hyogo", name_ja: "兵庫県", lat: "34.6913", lng: "135.1830" },
  { id: 29, name_th: "นาระ", name_en: "Nara", name_ja: "奈良県", lat: "34.6851", lng: "135.8049" },
  { id: 30, name_th: "วากายามะ", name_en: "Wakayama", name_ja: "和歌山県", lat: "34.2260", lng: "135.1675" },
  { id: 31, name_th: "ทตโตริ", name_en: "Tottori", name_ja: "鳥取県", lat: "35.5039", lng: "134.2378" },
  { id: 32, name_th: "ชิมาเนะ", name_en: "Shimane", name_ja: "島根県", lat: "35.4723", lng: "133.0505" },
  { id: 33, name_th: "โอคายามะ", name_en: "Okayama", name_ja: "岡山県", lat: "34.6618", lng: "133.9344" },
  { id: 34, name_th: "ฮิโรชิมะ", name_en: "Hiroshima", name_ja: "広島県", lat: "34.3966", lng: "132.4596" },
  { id: 35, name_th: "ยามากุจิ", name_en: "Yamaguchi", name_ja: "山口県", lat: "34.1861", lng: "131.4706" },
  { id: 36, name_th: "โทกุชิมะ", name_en: "Tokushima", name_ja: "徳島県", lat: "34.0658", lng: "134.5593" },
  { id: 37, name_th: "คางาวะ", name_en: "Kagawa", name_ja: "香川県", lat: "34.3401", lng: "134.0434" },
  { id: 38, name_th: "เอฮิเมะ", name_en: "Ehime", name_ja: "愛媛県", lat: "33.8416", lng: "132.7657" },
  { id: 39, name_th: "โคจิ", name_en: "Kochi", name_ja: "高知県", lat: "33.5597", lng: "133.5311" },
  { id: 40, name_th: "ฟุกุโอกะ", name_en: "Fukuoka", name_ja: "福岡県", lat: "33.5904", lng: "130.4017" },
  { id: 41, name_th: "ซางะ", name_en: "Saga", name_ja: "佐賀県", lat: "33.2494", lng: "130.2988" },
  { id: 42, name_th: "นางาซากิ", name_en: "Nagasaki", name_ja: "長崎県", lat: "32.7448", lng: "129.8737" },
  { id: 43, name_th: "คุมาโมโตะ", name_en: "Kumamoto", name_ja: "熊本県", lat: "32.7898", lng: "130.7417" },
  { id: 44, name_th: "โออิตะ", name_en: "Oita", name_ja: "大分県", lat: "33.2382", lng: "131.6126" },
  { id: 45, name_th: "มิยาซากิ", name_en: "Miyazaki", name_ja: "宮崎県", lat: "31.9111", lng: "131.4239" },
  { id: 46, name_th: "คาโกชิมะ", name_en: "Kagoshima", name_ja: "鹿児島県", lat: "31.5602", lng: "130.5581" },
  { id: 47, name_th: "โอกินาวะ", name_en: "Okinawa", name_ja: "沖縄県", lat: "26.2124", lng: "127.6809" },
];
