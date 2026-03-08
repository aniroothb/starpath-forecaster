import type { CountryCode } from "./countries";
import { provinces, provinceCoordinates } from "./thaiProvinces";
import { japanPrefectures } from "./japanPrefectures";
import { koreaProvinces } from "./koreaProvinces";
import { chinaProvinces } from "./chinaProvinces";

export interface LocationEntry {
  id: string;
  name_en: string;
  name_local: string;
  country: CountryCode;
  countryFlag: string;
  lat: string;
  lng: string;
  utc: string;
}

export const allLocations: LocationEntry[] = [
  // Thailand
  ...provinces.map((p) => ({
    id: `TH-${p.id}`,
    name_en: p.name_en,
    name_local: p.name_th,
    country: "TH" as CountryCode,
    countryFlag: "🇹🇭",
    lat: provinceCoordinates[p.id]?.lat || "",
    lng: provinceCoordinates[p.id]?.lng || "",
    utc: "+07:00",
  })),
  // Japan
  ...japanPrefectures.map((p) => ({
    id: `JP-${p.id}`,
    name_en: p.name_en,
    name_local: p.name_ja,
    country: "JP" as CountryCode,
    countryFlag: "🇯🇵",
    lat: p.lat,
    lng: p.lng,
    utc: "+09:00",
  })),
  // Korea
  ...koreaProvinces.map((p) => ({
    id: `KR-${p.id}`,
    name_en: p.name_en,
    name_local: p.name_ko,
    country: "KR" as CountryCode,
    countryFlag: "🇰🇷",
    lat: p.lat,
    lng: p.lng,
    utc: "+09:00",
  })),
  // China
  ...chinaProvinces.map((p) => ({
    id: `CN-${p.id}`,
    name_en: p.name_en,
    name_local: p.name_zh,
    country: "CN" as CountryCode,
    countryFlag: "🇨🇳",
    lat: p.lat,
    lng: p.lng,
    utc: "+08:00",
  })),
];
