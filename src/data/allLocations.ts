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
import { laosProvinces } from "./laosProvinces";
import { laosDistricts } from "./laosDistricts";
import { singaporeRegions } from "./singaporeRegions";
import { singaporeAreas } from "./singaporeAreas";

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
  // Laos provinces + districts
  ...laosProvinces.map((p) => ({
    id: `LA-P-${p.id}`, name_en: p.name_en, name_local: p.name_lo,
    country: "LA" as CountryCode, countryFlag: "🇱🇦",
    lat: p.lat, lng: p.lng, utc: "+07:00",
  })),
  ...laosDistricts.map((d) => ({
    id: `LA-D-${d.id}`, name_en: d.name_en, name_local: d.name_lo,
    country: "LA" as CountryCode, countryFlag: "🇱🇦",
    lat: d.lat, lng: d.lng, utc: "+07:00",
  })),
  // Singapore regions + areas
  ...singaporeRegions.map((r) => ({
    id: `SG-R-${r.id}`, name_en: r.name_en, name_local: r.name_local,
    country: "SG" as CountryCode, countryFlag: "🇸🇬",
    lat: r.lat, lng: r.lng, utc: "+08:00",
  })),
  ...singaporeAreas.map((a) => ({
    id: `SG-A-${a.id}`, name_en: a.name_en, name_local: a.name_local,
    country: "SG" as CountryCode, countryFlag: "🇸🇬",
    lat: a.lat, lng: a.lng, utc: "+08:00",
  })),
];
