export type CountryCode = "TH" | "JP" | "KR" | "CN" | "VN" | "LA" | "SG" | "ID";

export interface Country {
  code: CountryCode;
  name_en: string;
  flag: string;
  utc: string;
}

export const countries: Country[] = [
  { code: "TH", name_en: "Thailand", flag: "🇹🇭", utc: "+07:00" },
  { code: "JP", name_en: "Japan", flag: "🇯🇵", utc: "+09:00" },
  { code: "KR", name_en: "South Korea", flag: "🇰🇷", utc: "+09:00" },
  { code: "CN", name_en: "China", flag: "🇨🇳", utc: "+08:00" },
  { code: "VN", name_en: "Vietnam", flag: "🇻🇳", utc: "+07:00" },
  { code: "LA", name_en: "Laos", flag: "🇱🇦", utc: "+07:00" },
  { code: "SG", name_en: "Singapore", flag: "🇸🇬", utc: "+08:00" },
  { code: "ID", name_en: "Indonesia", flag: "🇮🇩", utc: "+07:00" },
];
