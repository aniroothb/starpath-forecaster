export interface IndonesiaProvince {
  id: number;
  name_en: string;
  name_id: string;
  lat: string;
  lng: string;
}

// Indonesia: 38 provinces
export const indonesiaProvinces: IndonesiaProvince[] = [
  { id: 1, name_en: "Aceh", name_id: "Aceh", lat: "4.6951", lng: "96.7494" },
  { id: 2, name_en: "North Sumatra", name_id: "Sumatera Utara", lat: "2.1154", lng: "99.5451" },
  { id: 3, name_en: "West Sumatra", name_id: "Sumatera Barat", lat: "-0.7399", lng: "100.8000" },
  { id: 4, name_en: "Riau", name_id: "Riau", lat: "0.2933", lng: "101.7068" },
  { id: 5, name_en: "Riau Islands", name_id: "Kepulauan Riau", lat: "3.9457", lng: "108.1429" },
  { id: 6, name_en: "Jambi", name_id: "Jambi", lat: "-1.4852", lng: "102.4381" },
  { id: 7, name_en: "South Sumatra", name_id: "Sumatera Selatan", lat: "-3.3194", lng: "103.9145" },
  { id: 8, name_en: "Bangka Belitung Islands", name_id: "Kepulauan Bangka Belitung", lat: "-2.7411", lng: "106.4406" },
  { id: 9, name_en: "Bengkulu", name_id: "Bengkulu", lat: "-3.5778", lng: "102.3464" },
  { id: 10, name_en: "Lampung", name_id: "Lampung", lat: "-4.5586", lng: "105.4068" },
  { id: 11, name_en: "Jakarta", name_id: "DKI Jakarta", lat: "-6.2088", lng: "106.8456" },
  { id: 12, name_en: "Banten", name_id: "Banten", lat: "-6.4058", lng: "106.0640" },
  { id: 13, name_en: "West Java", name_id: "Jawa Barat", lat: "-6.9147", lng: "107.6098" },
  { id: 14, name_en: "Central Java", name_id: "Jawa Tengah", lat: "-7.1500", lng: "110.1403" },
  { id: 15, name_en: "Yogyakarta", name_id: "DI Yogyakarta", lat: "-7.7956", lng: "110.3695" },
  { id: 16, name_en: "East Java", name_id: "Jawa Timur", lat: "-7.5361", lng: "112.2384" },
  { id: 17, name_en: "Bali", name_id: "Bali", lat: "-8.4095", lng: "115.1889" },
  { id: 18, name_en: "West Nusa Tenggara", name_id: "Nusa Tenggara Barat", lat: "-8.6529", lng: "117.3616" },
  { id: 19, name_en: "East Nusa Tenggara", name_id: "Nusa Tenggara Timur", lat: "-8.6574", lng: "121.0794" },
  { id: 20, name_en: "West Kalimantan", name_id: "Kalimantan Barat", lat: "-0.2787", lng: "111.4753" },
  { id: 21, name_en: "Central Kalimantan", name_id: "Kalimantan Tengah", lat: "-1.6815", lng: "113.3824" },
  { id: 22, name_en: "South Kalimantan", name_id: "Kalimantan Selatan", lat: "-3.0926", lng: "115.2838" },
  { id: 23, name_en: "East Kalimantan", name_id: "Kalimantan Timur", lat: "1.6406", lng: "116.4194" },
  { id: 24, name_en: "North Kalimantan", name_id: "Kalimantan Utara", lat: "3.0731", lng: "116.0413" },
  { id: 25, name_en: "North Sulawesi", name_id: "Sulawesi Utara", lat: "0.6247", lng: "123.9750" },
  { id: 26, name_en: "Gorontalo", name_id: "Gorontalo", lat: "0.6999", lng: "122.4467" },
  { id: 27, name_en: "Central Sulawesi", name_id: "Sulawesi Tengah", lat: "-1.4300", lng: "121.4456" },
  { id: 28, name_en: "West Sulawesi", name_id: "Sulawesi Barat", lat: "-2.8441", lng: "119.2321" },
  { id: 29, name_en: "South Sulawesi", name_id: "Sulawesi Selatan", lat: "-3.6688", lng: "119.9741" },
  { id: 30, name_en: "Southeast Sulawesi", name_id: "Sulawesi Tenggara", lat: "-4.1450", lng: "122.1746" },
  { id: 31, name_en: "Maluku", name_id: "Maluku", lat: "-3.2385", lng: "130.1453" },
  { id: 32, name_en: "North Maluku", name_id: "Maluku Utara", lat: "1.5710", lng: "127.8088" },
  { id: 33, name_en: "Papua", name_id: "Papua", lat: "-2.5916", lng: "140.6690" },
  { id: 34, name_en: "West Papua", name_id: "Papua Barat", lat: "-1.3361", lng: "133.1747" },
  { id: 35, name_en: "South Papua", name_id: "Papua Selatan", lat: "-7.6736", lng: "139.7167" },
  { id: 36, name_en: "Central Papua", name_id: "Papua Tengah", lat: "-3.7777", lng: "136.2329" },
  { id: 37, name_en: "Highland Papua", name_id: "Papua Pegunungan", lat: "-4.0793", lng: "138.9514" },
  { id: 38, name_en: "Southwest Papua", name_id: "Papua Barat Daya", lat: "-0.8651", lng: "131.2558" },
];

// UTC by province (WIB +07, WITA +08, WIT +09)
export const indonesiaProvinceUtc: Record<number, string> = {
  1: "+07:00", 2: "+07:00", 3: "+07:00", 4: "+07:00", 5: "+07:00", 6: "+07:00", 7: "+07:00",
  8: "+07:00", 9: "+07:00", 10: "+07:00", 11: "+07:00", 12: "+07:00", 13: "+07:00", 14: "+07:00",
  15: "+07:00", 16: "+07:00",
  17: "+08:00", 18: "+08:00", 19: "+08:00", 20: "+07:00", 21: "+07:00", 22: "+08:00",
  23: "+08:00", 24: "+08:00", 25: "+08:00", 26: "+08:00", 27: "+08:00", 28: "+08:00",
  29: "+08:00", 30: "+08:00",
  31: "+09:00", 32: "+09:00", 33: "+09:00", 34: "+09:00", 35: "+09:00", 36: "+09:00",
  37: "+09:00", 38: "+09:00",
};
