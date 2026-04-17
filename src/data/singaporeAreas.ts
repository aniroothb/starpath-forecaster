export interface SingaporeArea {
  id: number;
  regionId: number;
  name_en: string;
  name_local: string;
  lat: string;
  lng: string;
}

// Singapore planning areas (key urban areas under each region)
export const singaporeAreas: SingaporeArea[] = [
  // Central Region
  { id: 101, regionId: 1, name_en: "Downtown Core", name_local: "市中心", lat: "1.2789", lng: "103.8536" },
  { id: 102, regionId: 1, name_en: "Marina South", name_local: "滨海南", lat: "1.2707", lng: "103.8636" },
  { id: 103, regionId: 1, name_en: "Orchard", name_local: "乌节", lat: "1.3048", lng: "103.8318" },
  { id: 104, regionId: 1, name_en: "Newton", name_local: "纽顿", lat: "1.3128", lng: "103.8388" },
  { id: 105, regionId: 1, name_en: "Novena", name_local: "诺维娜", lat: "1.3203", lng: "103.8438" },
  { id: 106, regionId: 1, name_en: "Toa Payoh", name_local: "大巴窑", lat: "1.3343", lng: "103.8563" },
  { id: 107, regionId: 1, name_en: "Bishan", name_local: "碧山", lat: "1.3526", lng: "103.8352" },
  { id: 108, regionId: 1, name_en: "Bukit Merah", name_local: "红山", lat: "1.2819", lng: "103.8239" },
  { id: 109, regionId: 1, name_en: "Bukit Timah", name_local: "武吉知马", lat: "1.3294", lng: "103.8021" },
  { id: 110, regionId: 1, name_en: "Geylang", name_local: "芽笼", lat: "1.3186", lng: "103.8862" },
  { id: 111, regionId: 1, name_en: "Kallang", name_local: "加冷", lat: "1.3119", lng: "103.8714" },
  { id: 112, regionId: 1, name_en: "Marine Parade", name_local: "马林百列", lat: "1.3020", lng: "103.9067" },
  { id: 113, regionId: 1, name_en: "Queenstown", name_local: "女皇镇", lat: "1.2944", lng: "103.7861" },
  { id: 114, regionId: 1, name_en: "Tanglin", name_local: "东陵", lat: "1.3057", lng: "103.8179" },
  { id: 115, regionId: 1, name_en: "Outram", name_local: "欧南", lat: "1.2812", lng: "103.8398" },
  { id: 116, regionId: 1, name_en: "Rochor", name_local: "梧槽", lat: "1.3037", lng: "103.8528" },
  { id: 117, regionId: 1, name_en: "River Valley", name_local: "里峇峇利", lat: "1.2929", lng: "103.8326" },
  { id: 118, regionId: 1, name_en: "Singapore River", name_local: "新加坡河", lat: "1.2884", lng: "103.8470" },
  { id: 119, regionId: 1, name_en: "Museum", name_local: "博物馆", lat: "1.2966", lng: "103.8485" },

  // North Region
  { id: 201, regionId: 2, name_en: "Woodlands", name_local: "兀兰", lat: "1.4382", lng: "103.7890" },
  { id: 202, regionId: 2, name_en: "Yishun", name_local: "义顺", lat: "1.4304", lng: "103.8354" },
  { id: 203, regionId: 2, name_en: "Sembawang", name_local: "三巴旺", lat: "1.4491", lng: "103.8185" },
  { id: 204, regionId: 2, name_en: "Mandai", name_local: "万礼", lat: "1.4067", lng: "103.7891" },
  { id: 205, regionId: 2, name_en: "Sungei Kadut", name_local: "双溪加株", lat: "1.4129", lng: "103.7475" },
  { id: 206, regionId: 2, name_en: "Lim Chu Kang", name_local: "林厝港", lat: "1.4297", lng: "103.7173" },
  { id: 207, regionId: 2, name_en: "Central Water Catchment", name_local: "中央集水区", lat: "1.3819", lng: "103.8030" },

  // North-East Region
  { id: 301, regionId: 3, name_en: "Ang Mo Kio", name_local: "宏茂桥", lat: "1.3691", lng: "103.8454" },
  { id: 302, regionId: 3, name_en: "Hougang", name_local: "后港", lat: "1.3613", lng: "103.8862" },
  { id: 303, regionId: 3, name_en: "Sengkang", name_local: "盛港", lat: "1.3868", lng: "103.8914" },
  { id: 304, regionId: 3, name_en: "Punggol", name_local: "榜鹅", lat: "1.4043", lng: "103.9020" },
  { id: 305, regionId: 3, name_en: "Serangoon", name_local: "实龙岗", lat: "1.3554", lng: "103.8679" },
  { id: 306, regionId: 3, name_en: "Seletar", name_local: "实里达", lat: "1.4140", lng: "103.8689" },
  { id: 307, regionId: 3, name_en: "North-Eastern Islands", name_local: "东北岛屿", lat: "1.4125", lng: "103.9710" },

  // East Region
  { id: 401, regionId: 4, name_en: "Bedok", name_local: "勿洛", lat: "1.3236", lng: "103.9273" },
  { id: 402, regionId: 4, name_en: "Tampines", name_local: "淡滨尼", lat: "1.3496", lng: "103.9568" },
  { id: 403, regionId: 4, name_en: "Pasir Ris", name_local: "白沙", lat: "1.3721", lng: "103.9474" },
  { id: 404, regionId: 4, name_en: "Changi", name_local: "樟宜", lat: "1.3644", lng: "103.9915" },
  { id: 405, regionId: 4, name_en: "Changi Bay", name_local: "樟宜湾", lat: "1.3338", lng: "104.0090" },
  { id: 406, regionId: 4, name_en: "Paya Lebar", name_local: "巴耶利峇", lat: "1.3187", lng: "103.8929" },
  { id: 407, regionId: 4, name_en: "Pulau Ubin", name_local: "乌敏岛", lat: "1.4036", lng: "103.9561" },
  { id: 408, regionId: 4, name_en: "Pulau Tekong", name_local: "德光岛", lat: "1.4031", lng: "104.0392" },

  // West Region
  { id: 501, regionId: 5, name_en: "Jurong East", name_local: "裕廊东", lat: "1.3329", lng: "103.7436" },
  { id: 502, regionId: 5, name_en: "Jurong West", name_local: "裕廊西", lat: "1.3404", lng: "103.7090" },
  { id: 503, regionId: 5, name_en: "Clementi", name_local: "金文泰", lat: "1.3162", lng: "103.7649" },
  { id: 504, regionId: 5, name_en: "Bukit Batok", name_local: "武吉巴督", lat: "1.3590", lng: "103.7637" },
  { id: 505, regionId: 5, name_en: "Bukit Panjang", name_local: "武吉班让", lat: "1.3774", lng: "103.7719" },
  { id: 506, regionId: 5, name_en: "Choa Chu Kang", name_local: "蔡厝港", lat: "1.3840", lng: "103.7470" },
  { id: 507, regionId: 5, name_en: "Tengah", name_local: "登加", lat: "1.3667", lng: "103.7333" },
  { id: 508, regionId: 5, name_en: "Tuas", name_local: "大士", lat: "1.3214", lng: "103.6361" },
  { id: 509, regionId: 5, name_en: "Pioneer", name_local: "先驱", lat: "1.3375", lng: "103.6970" },
  { id: 510, regionId: 5, name_en: "Boon Lay", name_local: "文礼", lat: "1.3389", lng: "103.7060" },
  { id: 511, regionId: 5, name_en: "Western Islands", name_local: "西部岛屿", lat: "1.2070", lng: "103.7470" },
  { id: 512, regionId: 5, name_en: "Western Water Catchment", name_local: "西部集水区", lat: "1.3854", lng: "103.6885" },
];

export const getSingaporeAreasByRegion = (regionId: number): SingaporeArea[] =>
  singaporeAreas.filter((a) => a.regionId === regionId);
