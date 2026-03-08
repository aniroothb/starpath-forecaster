export type CountryCode = "TH" | "JP" | "KR";

export interface Country {
  code: CountryCode;
  name_th: string;
  name_en: string;
  flag: string;
  utc: string;
}

export const countries: Country[] = [
  { code: "TH", name_th: "ประเทศไทย", name_en: "Thailand", flag: "🇹🇭", utc: "+07:00" },
  { code: "JP", name_th: "ญี่ปุ่น", name_en: "Japan", flag: "🇯🇵", utc: "+09:00" },
  { code: "KR", name_th: "เกาหลีใต้", name_en: "South Korea", flag: "🇰🇷", utc: "+09:00" },
];
