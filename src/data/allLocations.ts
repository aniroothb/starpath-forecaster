import type { CountryCode } from "./countries";
import { provinces, provinceCoordinates } from "./thaiProvinces";
import { japanPrefectures } from "./japanPrefectures";
import { japanCities } from "./japanCities";
import { koreaProvinces } from "./koreaProvinces";
import { koreaDistricts } from "./koreaDistricts";
import { chinaProvinces } from "./chinaProvinces";
import { chinaCities } from "./chinaCities";
import { vietnamProvinces } from "./vietnamProvinces";
import { vietnamDistricts } from "./vietnamDistricts";

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
  // Thailand provinces
  ...provinces.map((p) => ({
    id: `TH-P-${p.id}`, name_en: p.name_en, name_local: p.name_th,
    country: "TH" as CountryCode, countryFlag: "🇹🇭",
    lat: provinceCoordinates[p.id]?.lat || "", lng: provinceCoordinates[p.id]?.lng || "", utc: "+07:00",
  })),
  // Japan prefectures + cities
  ...japanPrefectures.map((p) => ({
    id: `JP-P-${p.id}`, name_en: p.name_en, name_local: p.name_ja,
    country: "JP" as CountryCode, countryFlag: "🇯🇵",
    lat: p.lat, lng: p.lng, utc: "+09:00",
  })),
  ...japanCities.map((c) => ({
    id: `JP-C-${c.id}`, name_en: c.name_en, name_local: c.name_ja,
    country: "JP" as CountryCode, countryFlag: "🇯🇵",
    lat: c.lat, lng: c.lng, utc: "+09:00",
  })),
  // Korea provinces + districts
  ...koreaProvinces.map((p) => ({
    id: `KR-P-${p.id}`, name_en: p.name_en, name_local: p.name_ko,
    country: "KR" as CountryCode, countryFlag: "🇰🇷",
    lat: p.lat, lng: p.lng, utc: "+09:00",
  })),
  ...koreaDistricts.map((d) => ({
    id: `KR-D-${d.id}`, name_en: d.name_en, name_local: d.name_ko,
    country: "KR" as CountryCode, countryFlag: "🇰🇷",
    lat: d.lat, lng: d.lng, utc: "+09:00",
  })),
  // China provinces + cities
  ...chinaProvinces.map((p) => ({
    id: `CN-P-${p.id}`, name_en: p.name_en, name_local: p.name_zh,
    country: "CN" as CountryCode, countryFlag: "🇨🇳",
    lat: p.lat, lng: p.lng, utc: "+08:00",
  })),
  ...chinaCities.map((c) => ({
    id: `CN-C-${c.id}`, name_en: c.name_en, name_local: c.name_zh,
    country: "CN" as CountryCode, countryFlag: "🇨🇳",
    lat: c.lat, lng: c.lng, utc: "+08:00",
  })),
  // Vietnam provinces + districts
  ...vietnamProvinces.map((p) => ({
    id: `VN-P-${p.id}`, name_en: p.name_en, name_local: p.name_vi,
    country: "VN" as CountryCode, countryFlag: "🇻🇳",
    lat: p.lat, lng: p.lng, utc: "+07:00",
  })),
  ...vietnamDistricts.map((d) => ({
    id: `VN-D-${d.id}`, name_en: d.name_en, name_local: d.name_vi,
    country: "VN" as CountryCode, countryFlag: "🇻🇳",
    lat: d.lat, lng: d.lng, utc: "+07:00",
  })),
];
