export interface ChinaCity {
  id: number;
  province_id: number;
  name_en: string;
  name_zh: string;
  lat: string;
  lng: string;
}

export const chinaCities: ChinaCity[] = [
  // Beijing (1) - districts
  { id: 101, province_id: 1, name_en: "Dongcheng", name_zh: "东城区", lat: "39.9289", lng: "116.4160" },
  { id: 102, province_id: 1, name_en: "Xicheng", name_zh: "西城区", lat: "39.9121", lng: "116.3660" },
  { id: 103, province_id: 1, name_en: "Chaoyang", name_zh: "朝阳区", lat: "39.9215", lng: "116.4434" },
  { id: 104, province_id: 1, name_en: "Haidian", name_zh: "海淀区", lat: "39.9590", lng: "116.2984" },
  { id: 105, province_id: 1, name_en: "Fengtai", name_zh: "丰台区", lat: "39.8585", lng: "116.2870" },
  { id: 106, province_id: 1, name_en: "Tongzhou", name_zh: "通州区", lat: "39.9026", lng: "116.6585" },
  // Tianjin (2)
  { id: 201, province_id: 2, name_en: "Heping", name_zh: "和平区", lat: "39.1174", lng: "117.2145" },
  { id: 202, province_id: 2, name_en: "Nankai", name_zh: "南开区", lat: "39.1383", lng: "117.1507" },
  { id: 203, province_id: 2, name_en: "Binhai New Area", name_zh: "滨海新区", lat: "39.0033", lng: "117.7115" },
  // Shanghai (3)
  { id: 301, province_id: 3, name_en: "Huangpu", name_zh: "黄浦区", lat: "31.2318", lng: "121.4846" },
  { id: 302, province_id: 3, name_en: "Xuhui", name_zh: "徐汇区", lat: "31.1884", lng: "121.4365" },
  { id: 303, province_id: 3, name_en: "Changning", name_zh: "长宁区", lat: "31.2204", lng: "121.4245" },
  { id: 304, province_id: 3, name_en: "Jing'an", name_zh: "静安区", lat: "31.2288", lng: "121.4484" },
  { id: 305, province_id: 3, name_en: "Pudong", name_zh: "浦东新区", lat: "31.2213", lng: "121.5440" },
  { id: 306, province_id: 3, name_en: "Minhang", name_zh: "闵行区", lat: "31.1129", lng: "121.3818" },
  { id: 307, province_id: 3, name_en: "Baoshan", name_zh: "宝山区", lat: "31.4045", lng: "121.4892" },
  // Chongqing (4)
  { id: 401, province_id: 4, name_en: "Yuzhong", name_zh: "渝中区", lat: "29.5529", lng: "106.5686" },
  { id: 402, province_id: 4, name_en: "Jiangbei", name_zh: "江北区", lat: "29.6066", lng: "106.5740" },
  { id: 403, province_id: 4, name_en: "Shapingba", name_zh: "沙坪坝区", lat: "29.5411", lng: "106.4544" },
  { id: 404, province_id: 4, name_en: "Nan'an", name_zh: "南岸区", lat: "29.5230", lng: "106.5634" },
  // Hebei (5)
  { id: 501, province_id: 5, name_en: "Shijiazhuang", name_zh: "石家庄市", lat: "38.0428", lng: "114.5149" },
  { id: 502, province_id: 5, name_en: "Tangshan", name_zh: "唐山市", lat: "39.6309", lng: "118.1801" },
  { id: 503, province_id: 5, name_en: "Baoding", name_zh: "保定市", lat: "38.8739", lng: "115.4646" },
  { id: 504, province_id: 5, name_en: "Handan", name_zh: "邯郸市", lat: "36.6256", lng: "114.5391" },
  { id: 505, province_id: 5, name_en: "Langfang", name_zh: "廊坊市", lat: "39.5187", lng: "116.6835" },
  // Shanxi (6)
  { id: 601, province_id: 6, name_en: "Taiyuan", name_zh: "太原市", lat: "37.8706", lng: "112.5489" },
  { id: 602, province_id: 6, name_en: "Datong", name_zh: "大同市", lat: "40.0761", lng: "113.3001" },
  { id: 603, province_id: 6, name_en: "Changzhi", name_zh: "长治市", lat: "36.1954", lng: "113.1163" },
  // Inner Mongolia (7)
  { id: 701, province_id: 7, name_en: "Hohhot", name_zh: "呼和浩特市", lat: "40.8414", lng: "111.7519" },
  { id: 702, province_id: 7, name_en: "Baotou", name_zh: "包头市", lat: "40.6571", lng: "109.8401" },
  { id: 703, province_id: 7, name_en: "Ordos", name_zh: "鄂尔多斯市", lat: "39.6086", lng: "109.7812" },
  // Liaoning (8)
  { id: 801, province_id: 8, name_en: "Shenyang", name_zh: "沈阳市", lat: "41.8057", lng: "123.4315" },
  { id: 802, province_id: 8, name_en: "Dalian", name_zh: "大连市", lat: "38.9140", lng: "121.6147" },
  { id: 803, province_id: 8, name_en: "Anshan", name_zh: "鞍山市", lat: "41.1087", lng: "122.9956" },
  // Jilin (9)
  { id: 901, province_id: 9, name_en: "Changchun", name_zh: "长春市", lat: "43.8868", lng: "125.3245" },
  { id: 902, province_id: 9, name_en: "Jilin City", name_zh: "吉林市", lat: "43.8378", lng: "126.5498" },
  // Heilongjiang (10)
  { id: 1001, province_id: 10, name_en: "Harbin", name_zh: "哈尔滨市", lat: "45.8038", lng: "126.5350" },
  { id: 1002, province_id: 10, name_en: "Qiqihar", name_zh: "齐齐哈尔市", lat: "47.3540", lng: "123.9180" },
  { id: 1003, province_id: 10, name_en: "Daqing", name_zh: "大庆市", lat: "46.5907", lng: "125.1040" },
  // Jiangsu (11)
  { id: 1101, province_id: 11, name_en: "Nanjing", name_zh: "南京市", lat: "32.0603", lng: "118.7969" },
  { id: 1102, province_id: 11, name_en: "Suzhou", name_zh: "苏州市", lat: "31.2990", lng: "120.5853" },
  { id: 1103, province_id: 11, name_en: "Wuxi", name_zh: "无锡市", lat: "31.4912", lng: "120.3119" },
  { id: 1104, province_id: 11, name_en: "Changzhou", name_zh: "常州市", lat: "31.8106", lng: "119.9741" },
  { id: 1105, province_id: 11, name_en: "Xuzhou", name_zh: "徐州市", lat: "34.2044", lng: "117.2859" },
  // Zhejiang (12)
  { id: 1201, province_id: 12, name_en: "Hangzhou", name_zh: "杭州市", lat: "30.2741", lng: "120.1551" },
  { id: 1202, province_id: 12, name_en: "Ningbo", name_zh: "宁波市", lat: "29.8683", lng: "121.5440" },
  { id: 1203, province_id: 12, name_en: "Wenzhou", name_zh: "温州市", lat: "28.0006", lng: "120.6721" },
  { id: 1204, province_id: 12, name_en: "Jiaxing", name_zh: "嘉兴市", lat: "30.7469", lng: "120.7555" },
  // Anhui (13)
  { id: 1301, province_id: 13, name_en: "Hefei", name_zh: "合肥市", lat: "31.8206", lng: "117.2272" },
  { id: 1302, province_id: 13, name_en: "Wuhu", name_zh: "芜湖市", lat: "31.3524", lng: "118.4331" },
  { id: 1303, province_id: 13, name_en: "Bengbu", name_zh: "蚌埠市", lat: "32.9168", lng: "117.3883" },
  // Fujian (14)
  { id: 1401, province_id: 14, name_en: "Fuzhou", name_zh: "福州市", lat: "26.0745", lng: "119.2965" },
  { id: 1402, province_id: 14, name_en: "Xiamen", name_zh: "厦门市", lat: "24.4798", lng: "118.0894" },
  { id: 1403, province_id: 14, name_en: "Quanzhou", name_zh: "泉州市", lat: "24.8741", lng: "118.6757" },
  // Jiangxi (15)
  { id: 1501, province_id: 15, name_en: "Nanchang", name_zh: "南昌市", lat: "28.6820", lng: "115.8579" },
  { id: 1502, province_id: 15, name_en: "Ganzhou", name_zh: "赣州市", lat: "25.8318", lng: "114.9334" },
  // Shandong (16)
  { id: 1601, province_id: 16, name_en: "Jinan", name_zh: "济南市", lat: "36.6512", lng: "117.1200" },
  { id: 1602, province_id: 16, name_en: "Qingdao", name_zh: "青岛市", lat: "36.0671", lng: "120.3826" },
  { id: 1603, province_id: 16, name_en: "Yantai", name_zh: "烟台市", lat: "37.4639", lng: "121.4479" },
  { id: 1604, province_id: 16, name_en: "Weifang", name_zh: "潍坊市", lat: "36.7068", lng: "119.1619" },
  // Henan (17)
  { id: 1701, province_id: 17, name_en: "Zhengzhou", name_zh: "郑州市", lat: "34.7466", lng: "113.6254" },
  { id: 1702, province_id: 17, name_en: "Luoyang", name_zh: "洛阳市", lat: "34.6202", lng: "112.4540" },
  { id: 1703, province_id: 17, name_en: "Kaifeng", name_zh: "开封市", lat: "34.7972", lng: "114.3074" },
  // Hubei (18)
  { id: 1801, province_id: 18, name_en: "Wuhan", name_zh: "武汉市", lat: "30.5928", lng: "114.3055" },
  { id: 1802, province_id: 18, name_en: "Yichang", name_zh: "宜昌市", lat: "30.6918", lng: "111.2865" },
  { id: 1803, province_id: 18, name_en: "Xiangyang", name_zh: "襄阳市", lat: "32.0422", lng: "112.1440" },
  // Hunan (19)
  { id: 1901, province_id: 19, name_en: "Changsha", name_zh: "长沙市", lat: "28.2282", lng: "112.9388" },
  { id: 1902, province_id: 19, name_en: "Zhuzhou", name_zh: "株洲市", lat: "27.8274", lng: "113.1340" },
  { id: 1903, province_id: 19, name_en: "Hengyang", name_zh: "衡阳市", lat: "26.8936", lng: "112.5717" },
  // Guangdong (20)
  { id: 2001, province_id: 20, name_en: "Guangzhou", name_zh: "广州市", lat: "23.1291", lng: "113.2644" },
  { id: 2002, province_id: 20, name_en: "Shenzhen", name_zh: "深圳市", lat: "22.5431", lng: "114.0579" },
  { id: 2003, province_id: 20, name_en: "Dongguan", name_zh: "东莞市", lat: "23.0207", lng: "113.7518" },
  { id: 2004, province_id: 20, name_en: "Foshan", name_zh: "佛山市", lat: "23.0218", lng: "113.1218" },
  { id: 2005, province_id: 20, name_en: "Zhuhai", name_zh: "珠海市", lat: "22.2710", lng: "113.5767" },
  { id: 2006, province_id: 20, name_en: "Huizhou", name_zh: "惠州市", lat: "23.1115", lng: "114.4161" },
  { id: 2007, province_id: 20, name_en: "Zhongshan", name_zh: "中山市", lat: "22.5176", lng: "113.3926" },
  // Guangxi (21)
  { id: 2101, province_id: 21, name_en: "Nanning", name_zh: "南宁市", lat: "22.8170", lng: "108.3665" },
  { id: 2102, province_id: 21, name_en: "Guilin", name_zh: "桂林市", lat: "25.2736", lng: "110.2907" },
  { id: 2103, province_id: 21, name_en: "Liuzhou", name_zh: "柳州市", lat: "24.3264", lng: "109.4281" },
  // Hainan (22)
  { id: 2201, province_id: 22, name_en: "Haikou", name_zh: "海口市", lat: "20.0174", lng: "110.3492" },
  { id: 2202, province_id: 22, name_en: "Sanya", name_zh: "三亚市", lat: "18.2528", lng: "109.5120" },
  // Sichuan (23)
  { id: 2301, province_id: 23, name_en: "Chengdu", name_zh: "成都市", lat: "30.5728", lng: "104.0668" },
  { id: 2302, province_id: 23, name_en: "Mianyang", name_zh: "绵阳市", lat: "31.4678", lng: "104.6818" },
  { id: 2303, province_id: 23, name_en: "Deyang", name_zh: "德阳市", lat: "31.1302", lng: "104.3970" },
  { id: 2304, province_id: 23, name_en: "Leshan", name_zh: "乐山市", lat: "29.5521", lng: "103.7660" },
  // Guizhou (24)
  { id: 2401, province_id: 24, name_en: "Guiyang", name_zh: "贵阳市", lat: "26.6470", lng: "106.6302" },
  { id: 2402, province_id: 24, name_en: "Zunyi", name_zh: "遵义市", lat: "27.7254", lng: "106.9272" },
  // Yunnan (25)
  { id: 2501, province_id: 25, name_en: "Kunming", name_zh: "昆明市", lat: "25.0389", lng: "102.7183" },
  { id: 2502, province_id: 25, name_en: "Dali", name_zh: "大理市", lat: "25.6065", lng: "100.2676" },
  { id: 2503, province_id: 25, name_en: "Lijiang", name_zh: "丽江市", lat: "26.8553", lng: "100.2271" },
  // Tibet (26)
  { id: 2601, province_id: 26, name_en: "Lhasa", name_zh: "拉萨市", lat: "29.6500", lng: "91.1000" },
  { id: 2602, province_id: 26, name_en: "Shigatse", name_zh: "日喀则市", lat: "29.2678", lng: "88.8805" },
  // Shaanxi (27)
  { id: 2701, province_id: 27, name_en: "Xi'an", name_zh: "西安市", lat: "34.2658", lng: "108.9541" },
  { id: 2702, province_id: 27, name_en: "Xianyang", name_zh: "咸阳市", lat: "34.3296", lng: "108.7088" },
  { id: 2703, province_id: 27, name_en: "Baoji", name_zh: "宝鸡市", lat: "34.3612", lng: "107.2378" },
  // Gansu (28)
  { id: 2801, province_id: 28, name_en: "Lanzhou", name_zh: "兰州市", lat: "36.0611", lng: "103.8343" },
  { id: 2802, province_id: 28, name_en: "Tianshui", name_zh: "天水市", lat: "34.5810", lng: "105.7249" },
  // Qinghai (29)
  { id: 2901, province_id: 29, name_en: "Xining", name_zh: "西宁市", lat: "36.6171", lng: "101.7782" },
  // Ningxia (30)
  { id: 3001, province_id: 30, name_en: "Yinchuan", name_zh: "银川市", lat: "38.4872", lng: "106.2309" },
  // Xinjiang (31)
  { id: 3101, province_id: 31, name_en: "Urumqi", name_zh: "乌鲁木齐市", lat: "43.7930", lng: "87.6271" },
  { id: 3102, province_id: 31, name_en: "Kashgar", name_zh: "喀什市", lat: "39.4704", lng: "75.9899" },
  // Hong Kong (32)
  { id: 3201, province_id: 32, name_en: "Central and Western", name_zh: "中西区", lat: "22.2869", lng: "114.1503" },
  { id: 3202, province_id: 32, name_en: "Wan Chai", name_zh: "湾仔区", lat: "22.2783", lng: "114.1747" },
  { id: 3203, province_id: 32, name_en: "Kowloon City", name_zh: "九龙城区", lat: "22.3282", lng: "114.1914" },
  { id: 3204, province_id: 32, name_en: "Sha Tin", name_zh: "沙田区", lat: "22.3819", lng: "114.1895" },
  { id: 3205, province_id: 32, name_en: "Tsuen Wan", name_zh: "荃湾区", lat: "22.3713", lng: "114.1142" },
  // Macau (33)
  { id: 3301, province_id: 33, name_en: "Macau Peninsula", name_zh: "澳门半岛", lat: "22.1987", lng: "113.5439" },
  { id: 3302, province_id: 33, name_en: "Taipa", name_zh: "氹仔", lat: "22.1560", lng: "113.5579" },
  // Taiwan (34)
  { id: 3401, province_id: 34, name_en: "Taipei", name_zh: "台北市", lat: "25.0330", lng: "121.5654" },
  { id: 3402, province_id: 34, name_en: "New Taipei", name_zh: "新北市", lat: "25.0120", lng: "121.4657" },
  { id: 3403, province_id: 34, name_en: "Taichung", name_zh: "台中市", lat: "24.1477", lng: "120.6736" },
  { id: 3404, province_id: 34, name_en: "Kaohsiung", name_zh: "高雄市", lat: "22.6273", lng: "120.3014" },
  { id: 3405, province_id: 34, name_en: "Tainan", name_zh: "台南市", lat: "22.9999", lng: "120.2269" },
  { id: 3406, province_id: 34, name_en: "Hsinchu", name_zh: "新竹市", lat: "24.8138", lng: "120.9675" },
];

export const getChinaCitiesByProvince = (provinceId: number): ChinaCity[] =>
  chinaCities.filter((c) => c.province_id === provinceId);
