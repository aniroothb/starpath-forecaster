export interface JapanCity {
  id: number;
  prefecture_id: number;
  name_en: string;
  name_ja: string;
  lat: string;
  lng: string;
}

export const japanCities: JapanCity[] = [
  // Hokkaido (1)
  { id: 101, prefecture_id: 1, name_en: "Sapporo", name_ja: "札幌市", lat: "43.0618", lng: "141.3545" },
  { id: 102, prefecture_id: 1, name_en: "Asahikawa", name_ja: "旭川市", lat: "43.7707", lng: "142.3650" },
  { id: 103, prefecture_id: 1, name_en: "Hakodate", name_ja: "函館市", lat: "41.7687", lng: "140.7288" },
  { id: 104, prefecture_id: 1, name_en: "Kushiro", name_ja: "釧路市", lat: "42.9849", lng: "144.3820" },
  { id: 105, prefecture_id: 1, name_en: "Obihiro", name_ja: "帯広市", lat: "42.9236", lng: "143.1966" },
  // Aomori (2)
  { id: 201, prefecture_id: 2, name_en: "Aomori", name_ja: "青森市", lat: "40.8244", lng: "140.7400" },
  { id: 202, prefecture_id: 2, name_en: "Hachinohe", name_ja: "八戸市", lat: "40.5124", lng: "141.4883" },
  { id: 203, prefecture_id: 2, name_en: "Hirosaki", name_ja: "弘前市", lat: "40.6031", lng: "140.4641" },
  // Iwate (3)
  { id: 301, prefecture_id: 3, name_en: "Morioka", name_ja: "盛岡市", lat: "39.7036", lng: "141.1527" },
  { id: 302, prefecture_id: 3, name_en: "Ichinoseki", name_ja: "一関市", lat: "38.9346", lng: "141.1287" },
  // Miyagi (4)
  { id: 401, prefecture_id: 4, name_en: "Sendai", name_ja: "仙台市", lat: "38.2682", lng: "140.8694" },
  { id: 402, prefecture_id: 4, name_en: "Ishinomaki", name_ja: "石巻市", lat: "38.4346", lng: "141.3029" },
  // Akita (5)
  { id: 501, prefecture_id: 5, name_en: "Akita", name_ja: "秋田市", lat: "39.7200", lng: "140.1026" },
  { id: 502, prefecture_id: 5, name_en: "Yokote", name_ja: "横手市", lat: "39.3114", lng: "140.5531" },
  // Yamagata (6)
  { id: 601, prefecture_id: 6, name_en: "Yamagata", name_ja: "山形市", lat: "38.2405", lng: "140.3634" },
  { id: 602, prefecture_id: 6, name_en: "Tsuruoka", name_ja: "鶴岡市", lat: "38.7272", lng: "139.8267" },
  // Fukushima (7)
  { id: 701, prefecture_id: 7, name_en: "Fukushima", name_ja: "福島市", lat: "37.7608", lng: "140.4748" },
  { id: 702, prefecture_id: 7, name_en: "Koriyama", name_ja: "郡山市", lat: "37.4005", lng: "140.3594" },
  { id: 703, prefecture_id: 7, name_en: "Iwaki", name_ja: "いわき市", lat: "37.0504", lng: "140.8882" },
  // Ibaraki (8)
  { id: 801, prefecture_id: 8, name_en: "Mito", name_ja: "水戸市", lat: "36.3418", lng: "140.4468" },
  { id: 802, prefecture_id: 8, name_en: "Tsukuba", name_ja: "つくば市", lat: "36.0835", lng: "140.0766" },
  // Tochigi (9)
  { id: 901, prefecture_id: 9, name_en: "Utsunomiya", name_ja: "宇都宮市", lat: "36.5551", lng: "139.8836" },
  { id: 902, prefecture_id: 9, name_en: "Oyama", name_ja: "小山市", lat: "36.3146", lng: "139.8001" },
  // Gunma (10)
  { id: 1001, prefecture_id: 10, name_en: "Maebashi", name_ja: "前橋市", lat: "36.3895", lng: "139.0634" },
  { id: 1002, prefecture_id: 10, name_en: "Takasaki", name_ja: "高崎市", lat: "36.3219", lng: "139.0032" },
  // Saitama (11)
  { id: 1101, prefecture_id: 11, name_en: "Saitama", name_ja: "さいたま市", lat: "35.8617", lng: "139.6455" },
  { id: 1102, prefecture_id: 11, name_en: "Kawaguchi", name_ja: "川口市", lat: "35.8078", lng: "139.7241" },
  { id: 1103, prefecture_id: 11, name_en: "Kawagoe", name_ja: "川越市", lat: "35.9251", lng: "139.4857" },
  // Chiba (12)
  { id: 1201, prefecture_id: 12, name_en: "Chiba", name_ja: "千葉市", lat: "35.6073", lng: "140.1063" },
  { id: 1202, prefecture_id: 12, name_en: "Funabashi", name_ja: "船橋市", lat: "35.6946", lng: "139.9828" },
  { id: 1203, prefecture_id: 12, name_en: "Kashiwa", name_ja: "柏市", lat: "35.8676", lng: "139.9756" },
  // Tokyo (13)
  { id: 1301, prefecture_id: 13, name_en: "Shinjuku", name_ja: "新宿区", lat: "35.6938", lng: "139.7036" },
  { id: 1302, prefecture_id: 13, name_en: "Shibuya", name_ja: "渋谷区", lat: "35.6640", lng: "139.6982" },
  { id: 1303, prefecture_id: 13, name_en: "Minato", name_ja: "港区", lat: "35.6581", lng: "139.7514" },
  { id: 1304, prefecture_id: 13, name_en: "Chiyoda", name_ja: "千代田区", lat: "35.6940", lng: "139.7536" },
  { id: 1305, prefecture_id: 13, name_en: "Chuo", name_ja: "中央区", lat: "35.6707", lng: "139.7726" },
  { id: 1306, prefecture_id: 13, name_en: "Taito", name_ja: "台東区", lat: "35.7126", lng: "139.7800" },
  { id: 1307, prefecture_id: 13, name_en: "Sumida", name_ja: "墨田区", lat: "35.7107", lng: "139.8013" },
  { id: 1308, prefecture_id: 13, name_en: "Koto", name_ja: "江東区", lat: "35.6727", lng: "139.8171" },
  { id: 1309, prefecture_id: 13, name_en: "Shinagawa", name_ja: "品川区", lat: "35.6092", lng: "139.7302" },
  { id: 1310, prefecture_id: 13, name_en: "Meguro", name_ja: "目黒区", lat: "35.6413", lng: "139.6980" },
  { id: 1311, prefecture_id: 13, name_en: "Ota", name_ja: "大田区", lat: "35.5613", lng: "139.7160" },
  { id: 1312, prefecture_id: 13, name_en: "Setagaya", name_ja: "世田谷区", lat: "35.6462", lng: "139.6532" },
  { id: 1313, prefecture_id: 13, name_en: "Nakano", name_ja: "中野区", lat: "35.7078", lng: "139.6638" },
  { id: 1314, prefecture_id: 13, name_en: "Suginami", name_ja: "杉並区", lat: "35.6995", lng: "139.6365" },
  { id: 1315, prefecture_id: 13, name_en: "Toshima", name_ja: "豊島区", lat: "35.7263", lng: "139.7168" },
  { id: 1316, prefecture_id: 13, name_en: "Kita", name_ja: "北区", lat: "35.7528", lng: "139.7343" },
  { id: 1317, prefecture_id: 13, name_en: "Arakawa", name_ja: "荒川区", lat: "35.7360", lng: "139.7833" },
  { id: 1318, prefecture_id: 13, name_en: "Itabashi", name_ja: "板橋区", lat: "35.7514", lng: "139.7094" },
  { id: 1319, prefecture_id: 13, name_en: "Nerima", name_ja: "練馬区", lat: "35.7356", lng: "139.6516" },
  { id: 1320, prefecture_id: 13, name_en: "Adachi", name_ja: "足立区", lat: "35.7753", lng: "139.8045" },
  { id: 1321, prefecture_id: 13, name_en: "Katsushika", name_ja: "葛飾区", lat: "35.7436", lng: "139.8474" },
  { id: 1322, prefecture_id: 13, name_en: "Edogawa", name_ja: "江戸川区", lat: "35.7067", lng: "139.8684" },
  { id: 1323, prefecture_id: 13, name_en: "Hachioji", name_ja: "八王子市", lat: "35.6664", lng: "139.3160" },
  // Kanagawa (14)
  { id: 1401, prefecture_id: 14, name_en: "Yokohama", name_ja: "横浜市", lat: "35.4437", lng: "139.6380" },
  { id: 1402, prefecture_id: 14, name_en: "Kawasaki", name_ja: "川崎市", lat: "35.5309", lng: "139.7029" },
  { id: 1403, prefecture_id: 14, name_en: "Sagamihara", name_ja: "相模原市", lat: "35.5714", lng: "139.3735" },
  { id: 1404, prefecture_id: 14, name_en: "Fujisawa", name_ja: "藤沢市", lat: "35.3390", lng: "139.4907" },
  // Niigata (15)
  { id: 1501, prefecture_id: 15, name_en: "Niigata", name_ja: "新潟市", lat: "37.9026", lng: "139.0232" },
  { id: 1502, prefecture_id: 15, name_en: "Nagaoka", name_ja: "長岡市", lat: "37.4468", lng: "138.8511" },
  // Toyama (16)
  { id: 1601, prefecture_id: 16, name_en: "Toyama", name_ja: "富山市", lat: "36.6953", lng: "137.2114" },
  { id: 1602, prefecture_id: 16, name_en: "Takaoka", name_ja: "高岡市", lat: "36.7540", lng: "137.0257" },
  // Ishikawa (17)
  { id: 1701, prefecture_id: 17, name_en: "Kanazawa", name_ja: "金沢市", lat: "36.5613", lng: "136.6562" },
  // Fukui (18)
  { id: 1801, prefecture_id: 18, name_en: "Fukui", name_ja: "福井市", lat: "36.0652", lng: "136.2217" },
  // Yamanashi (19)
  { id: 1901, prefecture_id: 19, name_en: "Kofu", name_ja: "甲府市", lat: "35.6636", lng: "138.5684" },
  // Nagano (20)
  { id: 2001, prefecture_id: 20, name_en: "Nagano", name_ja: "長野市", lat: "36.6485", lng: "138.1949" },
  { id: 2002, prefecture_id: 20, name_en: "Matsumoto", name_ja: "松本市", lat: "36.2378", lng: "137.9720" },
  // Gifu (21)
  { id: 2101, prefecture_id: 21, name_en: "Gifu", name_ja: "岐阜市", lat: "35.4232", lng: "136.7606" },
  { id: 2102, prefecture_id: 21, name_en: "Ogaki", name_ja: "大垣市", lat: "35.3594", lng: "136.6130" },
  // Shizuoka (22)
  { id: 2201, prefecture_id: 22, name_en: "Shizuoka", name_ja: "静岡市", lat: "34.9756", lng: "138.3828" },
  { id: 2202, prefecture_id: 22, name_en: "Hamamatsu", name_ja: "浜松市", lat: "34.7108", lng: "137.7262" },
  // Aichi (23)
  { id: 2301, prefecture_id: 23, name_en: "Nagoya", name_ja: "名古屋市", lat: "35.1815", lng: "136.9066" },
  { id: 2302, prefecture_id: 23, name_en: "Toyota", name_ja: "豊田市", lat: "35.0834", lng: "137.1567" },
  { id: 2303, prefecture_id: 23, name_en: "Okazaki", name_ja: "岡崎市", lat: "34.9551", lng: "137.1748" },
  // Mie (24)
  { id: 2401, prefecture_id: 24, name_en: "Tsu", name_ja: "津市", lat: "34.7303", lng: "136.5086" },
  { id: 2402, prefecture_id: 24, name_en: "Yokkaichi", name_ja: "四日市市", lat: "34.9649", lng: "136.6249" },
  // Shiga (25)
  { id: 2501, prefecture_id: 25, name_en: "Otsu", name_ja: "大津市", lat: "35.0045", lng: "135.8686" },
  // Kyoto (26)
  { id: 2601, prefecture_id: 26, name_en: "Kyoto", name_ja: "京都市", lat: "35.0116", lng: "135.7681" },
  { id: 2602, prefecture_id: 26, name_en: "Uji", name_ja: "宇治市", lat: "34.8842", lng: "135.8000" },
  // Osaka (27)
  { id: 2701, prefecture_id: 27, name_en: "Osaka", name_ja: "大阪市", lat: "34.6937", lng: "135.5023" },
  { id: 2702, prefecture_id: 27, name_en: "Sakai", name_ja: "堺市", lat: "34.5733", lng: "135.4830" },
  { id: 2703, prefecture_id: 27, name_en: "Higashiosaka", name_ja: "東大阪市", lat: "34.6794", lng: "135.6009" },
  { id: 2704, prefecture_id: 27, name_en: "Toyonaka", name_ja: "豊中市", lat: "34.7814", lng: "135.4695" },
  // Hyogo (28)
  { id: 2801, prefecture_id: 28, name_en: "Kobe", name_ja: "神戸市", lat: "34.6901", lng: "135.1956" },
  { id: 2802, prefecture_id: 28, name_en: "Himeji", name_ja: "姫路市", lat: "34.8153", lng: "134.6854" },
  { id: 2803, prefecture_id: 28, name_en: "Nishinomiya", name_ja: "西宮市", lat: "34.7382", lng: "135.3414" },
  // Nara (29)
  { id: 2901, prefecture_id: 29, name_en: "Nara", name_ja: "奈良市", lat: "34.6851", lng: "135.8048" },
  // Wakayama (30)
  { id: 3001, prefecture_id: 30, name_en: "Wakayama", name_ja: "和歌山市", lat: "34.2306", lng: "135.1707" },
  // Tottori (31)
  { id: 3101, prefecture_id: 31, name_en: "Tottori", name_ja: "鳥取市", lat: "35.5011", lng: "134.2351" },
  // Shimane (32)
  { id: 3201, prefecture_id: 32, name_en: "Matsue", name_ja: "松江市", lat: "35.4723", lng: "133.0505" },
  // Okayama (33)
  { id: 3301, prefecture_id: 33, name_en: "Okayama", name_ja: "岡山市", lat: "34.6618", lng: "133.9344" },
  { id: 3302, prefecture_id: 33, name_en: "Kurashiki", name_ja: "倉敷市", lat: "34.5850", lng: "133.7722" },
  // Hiroshima (34)
  { id: 3401, prefecture_id: 34, name_en: "Hiroshima", name_ja: "広島市", lat: "34.3853", lng: "132.4553" },
  { id: 3402, prefecture_id: 34, name_en: "Fukuyama", name_ja: "福山市", lat: "34.4860", lng: "133.3625" },
  // Yamaguchi (35)
  { id: 3501, prefecture_id: 35, name_en: "Shimonoseki", name_ja: "下関市", lat: "33.9508", lng: "130.9265" },
  { id: 3502, prefecture_id: 35, name_en: "Yamaguchi", name_ja: "山口市", lat: "34.1781", lng: "131.4746" },
  // Tokushima (36)
  { id: 3601, prefecture_id: 36, name_en: "Tokushima", name_ja: "徳島市", lat: "34.0658", lng: "134.5593" },
  // Kagawa (37)
  { id: 3701, prefecture_id: 37, name_en: "Takamatsu", name_ja: "高松市", lat: "34.3401", lng: "134.0434" },
  // Ehime (38)
  { id: 3801, prefecture_id: 38, name_en: "Matsuyama", name_ja: "松山市", lat: "33.8416", lng: "132.7657" },
  // Kochi (39)
  { id: 3901, prefecture_id: 39, name_en: "Kochi", name_ja: "高知市", lat: "33.5597", lng: "133.5311" },
  // Fukuoka (40)
  { id: 4001, prefecture_id: 40, name_en: "Fukuoka", name_ja: "福岡市", lat: "33.5904", lng: "130.4017" },
  { id: 4002, prefecture_id: 40, name_en: "Kitakyushu", name_ja: "北九州市", lat: "33.8834", lng: "130.8752" },
  { id: 4003, prefecture_id: 40, name_en: "Kurume", name_ja: "久留米市", lat: "33.3191", lng: "130.5088" },
  // Saga (41)
  { id: 4101, prefecture_id: 41, name_en: "Saga", name_ja: "佐賀市", lat: "33.2494", lng: "130.2988" },
  // Nagasaki (42)
  { id: 4201, prefecture_id: 42, name_en: "Nagasaki", name_ja: "長崎市", lat: "32.7503", lng: "129.8779" },
  { id: 4202, prefecture_id: 42, name_en: "Sasebo", name_ja: "佐世保市", lat: "33.1593", lng: "129.7234" },
  // Kumamoto (43)
  { id: 4301, prefecture_id: 43, name_en: "Kumamoto", name_ja: "熊本市", lat: "32.8032", lng: "130.7079" },
  // Oita (44)
  { id: 4401, prefecture_id: 44, name_en: "Oita", name_ja: "大分市", lat: "33.2382", lng: "131.6126" },
  { id: 4402, prefecture_id: 44, name_en: "Beppu", name_ja: "別府市", lat: "33.2846", lng: "131.4913" },
  // Miyazaki (45)
  { id: 4501, prefecture_id: 45, name_en: "Miyazaki", name_ja: "宮崎市", lat: "31.9111", lng: "131.4239" },
  // Kagoshima (46)
  { id: 4601, prefecture_id: 46, name_en: "Kagoshima", name_ja: "鹿児島市", lat: "31.5966", lng: "130.5571" },
  // Okinawa (47)
  { id: 4701, prefecture_id: 47, name_en: "Naha", name_ja: "那覇市", lat: "26.2124", lng: "127.6809" },
  { id: 4702, prefecture_id: 47, name_en: "Okinawa City", name_ja: "沖縄市", lat: "26.3344", lng: "127.8056" },
];

export const getJapanCitiesByPrefecture = (prefectureId: number): JapanCity[] =>
  japanCities.filter((c) => c.prefecture_id === prefectureId);
