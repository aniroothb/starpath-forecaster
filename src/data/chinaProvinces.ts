export interface ChinaProvince {
  id: number;
  name_en: string;
  name_zh: string;
  lat: string;
  lng: string;
  type: "municipality" | "province" | "autonomous_region" | "sar";
}

export const chinaProvinces: ChinaProvince[] = [
  { id: 1, name_en: "Beijing", name_zh: "北京市", lat: "39.9042", lng: "116.4074", type: "municipality" },
  { id: 2, name_en: "Tianjin", name_zh: "天津市", lat: "39.3434", lng: "117.3616", type: "municipality" },
  { id: 3, name_en: "Shanghai", name_zh: "上海市", lat: "31.2304", lng: "121.4737", type: "municipality" },
  { id: 4, name_en: "Chongqing", name_zh: "重庆市", lat: "29.4316", lng: "106.9123", type: "municipality" },
  { id: 5, name_en: "Hebei", name_zh: "河北省", lat: "38.0428", lng: "114.5149", type: "province" },
  { id: 6, name_en: "Shanxi", name_zh: "山西省", lat: "37.8706", lng: "112.5489", type: "province" },
  { id: 7, name_en: "Inner Mongolia", name_zh: "内蒙古自治区", lat: "40.8175", lng: "111.7656", type: "autonomous_region" },
  { id: 8, name_en: "Liaoning", name_zh: "辽宁省", lat: "41.8057", lng: "123.4315", type: "province" },
  { id: 9, name_en: "Jilin", name_zh: "吉林省", lat: "43.8868", lng: "125.3245", type: "province" },
  { id: 10, name_en: "Heilongjiang", name_zh: "黑龙江省", lat: "45.7420", lng: "126.6610", type: "province" },
  { id: 11, name_en: "Jiangsu", name_zh: "江苏省", lat: "32.0603", lng: "118.7969", type: "province" },
  { id: 12, name_en: "Zhejiang", name_zh: "浙江省", lat: "30.2741", lng: "120.1551", type: "province" },
  { id: 13, name_en: "Anhui", name_zh: "安徽省", lat: "31.8612", lng: "117.2830", type: "province" },
  { id: 14, name_en: "Fujian", name_zh: "福建省", lat: "26.0745", lng: "119.2965", type: "province" },
  { id: 15, name_en: "Jiangxi", name_zh: "江西省", lat: "28.6820", lng: "115.8579", type: "province" },
  { id: 16, name_en: "Shandong", name_zh: "山东省", lat: "36.6683", lng: "116.9972", type: "province" },
  { id: 17, name_en: "Henan", name_zh: "河南省", lat: "34.7466", lng: "113.6254", type: "province" },
  { id: 18, name_en: "Hubei", name_zh: "湖北省", lat: "30.5928", lng: "114.3055", type: "province" },
  { id: 19, name_en: "Hunan", name_zh: "湖南省", lat: "28.2282", lng: "112.9388", type: "province" },
  { id: 20, name_en: "Guangdong", name_zh: "广东省", lat: "23.1291", lng: "113.2644", type: "province" },
  { id: 21, name_en: "Guangxi", name_zh: "广西壮族自治区", lat: "22.8170", lng: "108.3665", type: "autonomous_region" },
  { id: 22, name_en: "Hainan", name_zh: "海南省", lat: "20.0174", lng: "110.3492", type: "province" },
  { id: 23, name_en: "Sichuan", name_zh: "四川省", lat: "30.5728", lng: "104.0668", type: "province" },
  { id: 24, name_en: "Guizhou", name_zh: "贵州省", lat: "26.6470", lng: "106.6302", type: "province" },
  { id: 25, name_en: "Yunnan", name_zh: "云南省", lat: "25.0389", lng: "102.7183", type: "province" },
  { id: 26, name_en: "Tibet", name_zh: "西藏自治区", lat: "29.6500", lng: "91.1000", type: "autonomous_region" },
  { id: 27, name_en: "Shaanxi", name_zh: "陕西省", lat: "34.2658", lng: "108.9541", type: "province" },
  { id: 28, name_en: "Gansu", name_zh: "甘肃省", lat: "36.0611", lng: "103.8343", type: "province" },
  { id: 29, name_en: "Qinghai", name_zh: "青海省", lat: "36.6171", lng: "101.7782", type: "province" },
  { id: 30, name_en: "Ningxia", name_zh: "宁夏回族自治区", lat: "38.4872", lng: "106.2309", type: "autonomous_region" },
  { id: 31, name_en: "Xinjiang", name_zh: "新疆维吾尔自治区", lat: "43.7930", lng: "87.6271", type: "autonomous_region" },
  { id: 32, name_en: "Hong Kong", name_zh: "香港特别行政区", lat: "22.3193", lng: "114.1694", type: "sar" },
  { id: 33, name_en: "Macau", name_zh: "澳门特别行政区", lat: "22.1987", lng: "113.5439", type: "sar" },
  { id: 34, name_en: "Taiwan", name_zh: "台湾省", lat: "25.0330", lng: "121.5654", type: "province" },
];
