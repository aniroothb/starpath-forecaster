import provincesData from "./provinces.json";
import districtsData from "./districts.json";
import subdistrictsData from "./subdistricts.json";

export interface Province {
  id: number;
  name_th: string;
  name_en: string;
}

export interface District {
  id: number;
  name_th: string;
  name_en: string;
  province_id: number;
}

export interface SubDistrict {
  id: number;
  name_th: string;
  name_en: string;
  district_id: number;
  zip_code: number;
}

export const provinces: Province[] = provincesData as Province[];
export const districts: District[] = districtsData as District[];
export const subDistricts: SubDistrict[] = subdistrictsData as SubDistrict[];

export const getDistrictsByProvince = (provinceId: number): District[] =>
  districts.filter((d) => d.province_id === provinceId);

export const getSubDistrictsByDistrict = (districtId: number): SubDistrict[] =>
  subDistricts.filter((s) => s.district_id === districtId);
