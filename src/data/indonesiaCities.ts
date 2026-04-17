export interface IndonesiaCity {
  id: number;
  provinceId: number;
  name_en: string;
  name_id: string;
  lat: string;
  lng: string;
}

// Indonesia: major cities/regencies for key provinces
export const indonesiaCities: IndonesiaCity[] = [
  // Jakarta (11) — 5 administrative cities + 1 regency
  { id: 1101, provinceId: 11, name_en: "Central Jakarta", name_id: "Jakarta Pusat", lat: "-6.1862", lng: "106.8340" },
  { id: 1102, provinceId: 11, name_en: "North Jakarta", name_id: "Jakarta Utara", lat: "-6.1214", lng: "106.8848" },
  { id: 1103, provinceId: 11, name_en: "West Jakarta", name_id: "Jakarta Barat", lat: "-6.1683", lng: "106.7588" },
  { id: 1104, provinceId: 11, name_en: "South Jakarta", name_id: "Jakarta Selatan", lat: "-6.2615", lng: "106.8106" },
  { id: 1105, provinceId: 11, name_en: "East Jakarta", name_id: "Jakarta Timur", lat: "-6.2250", lng: "106.9004" },
  { id: 1106, provinceId: 11, name_en: "Thousand Islands", name_id: "Kepulauan Seribu", lat: "-5.6167", lng: "106.5500" },

  // West Java (13)
  { id: 1301, provinceId: 13, name_en: "Bandung", name_id: "Bandung", lat: "-6.9175", lng: "107.6191" },
  { id: 1302, provinceId: 13, name_en: "Bekasi", name_id: "Bekasi", lat: "-6.2349", lng: "106.9896" },
  { id: 1303, provinceId: 13, name_en: "Bogor", name_id: "Bogor", lat: "-6.5950", lng: "106.8166" },
  { id: 1304, provinceId: 13, name_en: "Depok", name_id: "Depok", lat: "-6.4025", lng: "106.7942" },
  { id: 1305, provinceId: 13, name_en: "Cimahi", name_id: "Cimahi", lat: "-6.8721", lng: "107.5424" },
  { id: 1306, provinceId: 13, name_en: "Cirebon", name_id: "Cirebon", lat: "-6.7320", lng: "108.5523" },
  { id: 1307, provinceId: 13, name_en: "Sukabumi", name_id: "Sukabumi", lat: "-6.9277", lng: "106.9300" },
  { id: 1308, provinceId: 13, name_en: "Tasikmalaya", name_id: "Tasikmalaya", lat: "-7.3274", lng: "108.2207" },
  { id: 1309, provinceId: 13, name_en: "Banjar", name_id: "Banjar", lat: "-7.3700", lng: "108.5340" },

  // Banten (12)
  { id: 1201, provinceId: 12, name_en: "Tangerang", name_id: "Tangerang", lat: "-6.1783", lng: "106.6319" },
  { id: 1202, provinceId: 12, name_en: "South Tangerang", name_id: "Tangerang Selatan", lat: "-6.2884", lng: "106.7178" },
  { id: 1203, provinceId: 12, name_en: "Serang", name_id: "Serang", lat: "-6.1104", lng: "106.1640" },
  { id: 1204, provinceId: 12, name_en: "Cilegon", name_id: "Cilegon", lat: "-6.0025", lng: "106.0111" },

  // Central Java (14)
  { id: 1401, provinceId: 14, name_en: "Semarang", name_id: "Semarang", lat: "-6.9667", lng: "110.4167" },
  { id: 1402, provinceId: 14, name_en: "Solo (Surakarta)", name_id: "Surakarta", lat: "-7.5755", lng: "110.8243" },
  { id: 1403, provinceId: 14, name_en: "Magelang", name_id: "Magelang", lat: "-7.4797", lng: "110.2177" },
  { id: 1404, provinceId: 14, name_en: "Pekalongan", name_id: "Pekalongan", lat: "-6.8898", lng: "109.6753" },
  { id: 1405, provinceId: 14, name_en: "Tegal", name_id: "Tegal", lat: "-6.8694", lng: "109.1402" },
  { id: 1406, provinceId: 14, name_en: "Salatiga", name_id: "Salatiga", lat: "-7.3305", lng: "110.5084" },

  // Yogyakarta (15)
  { id: 1501, provinceId: 15, name_en: "Yogyakarta City", name_id: "Kota Yogyakarta", lat: "-7.7956", lng: "110.3695" },
  { id: 1502, provinceId: 15, name_en: "Sleman", name_id: "Sleman", lat: "-7.7164", lng: "110.3556" },
  { id: 1503, provinceId: 15, name_en: "Bantul", name_id: "Bantul", lat: "-7.8881", lng: "110.3289" },
  { id: 1504, provinceId: 15, name_en: "Kulon Progo", name_id: "Kulon Progo", lat: "-7.8267", lng: "110.1644" },
  { id: 1505, provinceId: 15, name_en: "Gunung Kidul", name_id: "Gunung Kidul", lat: "-7.9836", lng: "110.6166" },

  // East Java (16)
  { id: 1601, provinceId: 16, name_en: "Surabaya", name_id: "Surabaya", lat: "-7.2575", lng: "112.7521" },
  { id: 1602, provinceId: 16, name_en: "Malang", name_id: "Malang", lat: "-7.9666", lng: "112.6326" },
  { id: 1603, provinceId: 16, name_en: "Kediri", name_id: "Kediri", lat: "-7.8166", lng: "112.0114" },
  { id: 1604, provinceId: 16, name_en: "Madiun", name_id: "Madiun", lat: "-7.6298", lng: "111.5300" },
  { id: 1605, provinceId: 16, name_en: "Probolinggo", name_id: "Probolinggo", lat: "-7.7544", lng: "113.2120" },
  { id: 1606, provinceId: 16, name_en: "Pasuruan", name_id: "Pasuruan", lat: "-7.6452", lng: "112.9075" },
  { id: 1607, provinceId: 16, name_en: "Mojokerto", name_id: "Mojokerto", lat: "-7.4664", lng: "112.4338" },
  { id: 1608, provinceId: 16, name_en: "Blitar", name_id: "Blitar", lat: "-8.0958", lng: "112.1610" },
  { id: 1609, provinceId: 16, name_en: "Batu", name_id: "Batu", lat: "-7.8717", lng: "112.5239" },

  // Bali (17)
  { id: 1701, provinceId: 17, name_en: "Denpasar", name_id: "Denpasar", lat: "-8.6705", lng: "115.2126" },
  { id: 1702, provinceId: 17, name_en: "Badung", name_id: "Badung", lat: "-8.5800", lng: "115.1800" },
  { id: 1703, provinceId: 17, name_en: "Gianyar", name_id: "Gianyar", lat: "-8.5375", lng: "115.3258" },
  { id: 1704, provinceId: 17, name_en: "Tabanan", name_id: "Tabanan", lat: "-8.5450", lng: "115.1230" },
  { id: 1705, provinceId: 17, name_en: "Buleleng (Singaraja)", name_id: "Buleleng", lat: "-8.1120", lng: "115.0883" },
  { id: 1706, provinceId: 17, name_en: "Klungkung", name_id: "Klungkung", lat: "-8.5365", lng: "115.4061" },
  { id: 1707, provinceId: 17, name_en: "Karangasem", name_id: "Karangasem", lat: "-8.4490", lng: "115.6151" },
  { id: 1708, provinceId: 17, name_en: "Bangli", name_id: "Bangli", lat: "-8.4500", lng: "115.3500" },
  { id: 1709, provinceId: 17, name_en: "Jembrana (Negara)", name_id: "Jembrana", lat: "-8.3640", lng: "114.6256" },

  // North Sumatra (2)
  { id: 201, provinceId: 2, name_en: "Medan", name_id: "Medan", lat: "3.5952", lng: "98.6722" },
  { id: 202, provinceId: 2, name_en: "Binjai", name_id: "Binjai", lat: "3.6001", lng: "98.4854" },
  { id: 203, provinceId: 2, name_en: "Tebing Tinggi", name_id: "Tebing Tinggi", lat: "3.3285", lng: "99.1625" },
  { id: 204, provinceId: 2, name_en: "Pematang Siantar", name_id: "Pematang Siantar", lat: "2.9595", lng: "99.0687" },
  { id: 205, provinceId: 2, name_en: "Sibolga", name_id: "Sibolga", lat: "1.7427", lng: "98.7792" },
  { id: 206, provinceId: 2, name_en: "Padang Sidempuan", name_id: "Padang Sidempuan", lat: "1.3789", lng: "99.2715" },
  { id: 207, provinceId: 2, name_en: "Gunungsitoli", name_id: "Gunungsitoli", lat: "1.2789", lng: "97.6166" },

  // West Sumatra (3)
  { id: 301, provinceId: 3, name_en: "Padang", name_id: "Padang", lat: "-0.9471", lng: "100.4172" },
  { id: 302, provinceId: 3, name_en: "Bukittinggi", name_id: "Bukittinggi", lat: "-0.3050", lng: "100.3691" },
  { id: 303, provinceId: 3, name_en: "Padang Panjang", name_id: "Padang Panjang", lat: "-0.4500", lng: "100.4167" },
  { id: 304, provinceId: 3, name_en: "Payakumbuh", name_id: "Payakumbuh", lat: "-0.2245", lng: "100.6336" },
  { id: 305, provinceId: 3, name_en: "Sawahlunto", name_id: "Sawahlunto", lat: "-0.6816", lng: "100.7770" },
  { id: 306, provinceId: 3, name_en: "Solok", name_id: "Solok", lat: "-0.7944", lng: "100.6543" },
  { id: 307, provinceId: 3, name_en: "Pariaman", name_id: "Pariaman", lat: "-0.6276", lng: "100.1199" },

  // Riau (4)
  { id: 401, provinceId: 4, name_en: "Pekanbaru", name_id: "Pekanbaru", lat: "0.5071", lng: "101.4478" },
  { id: 402, provinceId: 4, name_en: "Dumai", name_id: "Dumai", lat: "1.6663", lng: "101.4068" },

  // Riau Islands (5)
  { id: 501, provinceId: 5, name_en: "Batam", name_id: "Batam", lat: "1.0456", lng: "104.0305" },
  { id: 502, provinceId: 5, name_en: "Tanjung Pinang", name_id: "Tanjung Pinang", lat: "0.9183", lng: "104.4581" },

  // South Sumatra (7)
  { id: 701, provinceId: 7, name_en: "Palembang", name_id: "Palembang", lat: "-2.9909", lng: "104.7566" },
  { id: 702, provinceId: 7, name_en: "Prabumulih", name_id: "Prabumulih", lat: "-3.4338", lng: "104.2362" },
  { id: 703, provinceId: 7, name_en: "Lubuklinggau", name_id: "Lubuklinggau", lat: "-3.2945", lng: "102.8607" },
  { id: 704, provinceId: 7, name_en: "Pagar Alam", name_id: "Pagar Alam", lat: "-4.0226", lng: "103.2519" },

  // Lampung (10)
  { id: 1001, provinceId: 10, name_en: "Bandar Lampung", name_id: "Bandar Lampung", lat: "-5.4295", lng: "105.2610" },
  { id: 1002, provinceId: 10, name_en: "Metro", name_id: "Metro", lat: "-5.1131", lng: "105.3068" },

  // South Sulawesi (29)
  { id: 2901, provinceId: 29, name_en: "Makassar", name_id: "Makassar", lat: "-5.1477", lng: "119.4327" },
  { id: 2902, provinceId: 29, name_en: "Parepare", name_id: "Parepare", lat: "-4.0135", lng: "119.6255" },
  { id: 2903, provinceId: 29, name_en: "Palopo", name_id: "Palopo", lat: "-2.9925", lng: "120.1969" },

  // North Sulawesi (25)
  { id: 2501, provinceId: 25, name_en: "Manado", name_id: "Manado", lat: "1.4748", lng: "124.8421" },
  { id: 2502, provinceId: 25, name_en: "Bitung", name_id: "Bitung", lat: "1.4404", lng: "125.1213" },
  { id: 2503, provinceId: 25, name_en: "Tomohon", name_id: "Tomohon", lat: "1.3248", lng: "124.8369" },
  { id: 2504, provinceId: 25, name_en: "Kotamobagu", name_id: "Kotamobagu", lat: "0.7335", lng: "124.3146" },

  // East Kalimantan (23)
  { id: 2301, provinceId: 23, name_en: "Samarinda", name_id: "Samarinda", lat: "-0.5022", lng: "117.1536" },
  { id: 2302, provinceId: 23, name_en: "Balikpapan", name_id: "Balikpapan", lat: "-1.2379", lng: "116.8529" },
  { id: 2303, provinceId: 23, name_en: "Bontang", name_id: "Bontang", lat: "0.1375", lng: "117.4938" },

  // South Kalimantan (22)
  { id: 2201, provinceId: 22, name_en: "Banjarmasin", name_id: "Banjarmasin", lat: "-3.3194", lng: "114.5908" },
  { id: 2202, provinceId: 22, name_en: "Banjarbaru", name_id: "Banjarbaru", lat: "-3.4422", lng: "114.8312" },

  // West Kalimantan (20)
  { id: 2001, provinceId: 20, name_en: "Pontianak", name_id: "Pontianak", lat: "-0.0263", lng: "109.3425" },
  { id: 2002, provinceId: 20, name_en: "Singkawang", name_id: "Singkawang", lat: "0.9077", lng: "108.9853" },

  // Aceh (1)
  { id: 101, provinceId: 1, name_en: "Banda Aceh", name_id: "Banda Aceh", lat: "5.5483", lng: "95.3238" },
  { id: 102, provinceId: 1, name_en: "Lhokseumawe", name_id: "Lhokseumawe", lat: "5.1801", lng: "97.1507" },
  { id: 103, provinceId: 1, name_en: "Langsa", name_id: "Langsa", lat: "4.4683", lng: "97.9683" },
  { id: 104, provinceId: 1, name_en: "Sabang", name_id: "Sabang", lat: "5.8941", lng: "95.3238" },
  { id: 105, provinceId: 1, name_en: "Subulussalam", name_id: "Subulussalam", lat: "2.6500", lng: "97.9333" },

  // Papua (33)
  { id: 3301, provinceId: 33, name_en: "Jayapura", name_id: "Jayapura", lat: "-2.5337", lng: "140.7181" },

  // West Papua (34)
  { id: 3401, provinceId: 34, name_en: "Manokwari", name_id: "Manokwari", lat: "-0.8615", lng: "134.0620" },
  { id: 3402, provinceId: 34, name_en: "Sorong", name_id: "Sorong", lat: "-0.8762", lng: "131.2558" },

  // West Nusa Tenggara (18)
  { id: 1801, provinceId: 18, name_en: "Mataram", name_id: "Mataram", lat: "-8.5833", lng: "116.1167" },
  { id: 1802, provinceId: 18, name_en: "Bima", name_id: "Bima", lat: "-8.4604", lng: "118.7271" },

  // East Nusa Tenggara (19)
  { id: 1901, provinceId: 19, name_en: "Kupang", name_id: "Kupang", lat: "-10.1772", lng: "123.6070" },

  // Maluku (31)
  { id: 3101, provinceId: 31, name_en: "Ambon", name_id: "Ambon", lat: "-3.6954", lng: "128.1814" },
  { id: 3102, provinceId: 31, name_en: "Tual", name_id: "Tual", lat: "-5.6360", lng: "132.7470" },

  // North Maluku (32)
  { id: 3201, provinceId: 32, name_en: "Ternate", name_id: "Ternate", lat: "0.7900", lng: "127.3650" },
  { id: 3202, provinceId: 32, name_en: "Tidore Kepulauan", name_id: "Tidore Kepulauan", lat: "0.7868", lng: "127.4350" },

  // Bengkulu (9)
  { id: 901, provinceId: 9, name_en: "Bengkulu City", name_id: "Kota Bengkulu", lat: "-3.7928", lng: "102.2608" },

  // Jambi (6)
  { id: 601, provinceId: 6, name_en: "Jambi City", name_id: "Kota Jambi", lat: "-1.6101", lng: "103.6131" },
  { id: 602, provinceId: 6, name_en: "Sungai Penuh", name_id: "Sungai Penuh", lat: "-2.0667", lng: "101.4000" },

  // Bangka Belitung (8)
  { id: 801, provinceId: 8, name_en: "Pangkal Pinang", name_id: "Pangkal Pinang", lat: "-2.1316", lng: "106.1169" },

  // Gorontalo (26)
  { id: 2601, provinceId: 26, name_en: "Gorontalo City", name_id: "Kota Gorontalo", lat: "0.5435", lng: "123.0568" },

  // Central Sulawesi (27)
  { id: 2701, provinceId: 27, name_en: "Palu", name_id: "Palu", lat: "-0.9003", lng: "119.8779" },

  // Southeast Sulawesi (30)
  { id: 3001, provinceId: 30, name_en: "Kendari", name_id: "Kendari", lat: "-3.9985", lng: "122.5127" },
  { id: 3002, provinceId: 30, name_en: "Bau-Bau", name_id: "Bau-Bau", lat: "-5.4775", lng: "122.6128" },

  // Central Kalimantan (21)
  { id: 2101, provinceId: 21, name_en: "Palangka Raya", name_id: "Palangka Raya", lat: "-2.2161", lng: "113.9135" },

  // North Kalimantan (24)
  { id: 2401, provinceId: 24, name_en: "Tarakan", name_id: "Tarakan", lat: "3.3274", lng: "117.5827" },
];

export const getIndonesiaCitiesByProvince = (provinceId: number): IndonesiaCity[] =>
  indonesiaCities.filter((c) => c.provinceId === provinceId);
