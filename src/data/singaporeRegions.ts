export interface SingaporeRegion {
  id: number;
  name_en: string;
  name_local: string;
  lat: string;
  lng: string;
}

// Singapore: 5 CDC regions
export const singaporeRegions: SingaporeRegion[] = [
  { id: 1, name_en: "Central Region", name_local: "中区", lat: "1.3521", lng: "103.8198" },
  { id: 2, name_en: "North Region", name_local: "北区", lat: "1.4382", lng: "103.7890" },
  { id: 3, name_en: "North-East Region", name_local: "东北区", lat: "1.3870", lng: "103.8910" },
  { id: 4, name_en: "East Region", name_local: "东区", lat: "1.3236", lng: "103.9273" },
  { id: 5, name_en: "West Region", name_local: "西区", lat: "1.3404", lng: "103.7090" },
];
