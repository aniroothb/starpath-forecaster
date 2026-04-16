export interface VietnamProvince {
  id: number;
  name_en: string;
  name_vi: string;
  lat: string;
  lng: string;
  type: "municipality" | "province";
}

export const vietnamProvinces: VietnamProvince[] = [
  // 5 municipalities
  { id: 1, name_en: "Hanoi", name_vi: "Hà Nội", lat: "21.0285", lng: "105.8542", type: "municipality" },
  { id: 2, name_en: "Ho Chi Minh City", name_vi: "TP Hồ Chí Minh", lat: "10.8231", lng: "106.6297", type: "municipality" },
  { id: 3, name_en: "Hai Phong", name_vi: "Hải Phòng", lat: "20.8449", lng: "106.6881", type: "municipality" },
  { id: 4, name_en: "Da Nang", name_vi: "Đà Nẵng", lat: "16.0544", lng: "108.2022", type: "municipality" },
  { id: 5, name_en: "Can Tho", name_vi: "Cần Thơ", lat: "10.0452", lng: "105.7469", type: "municipality" },
  // Northern provinces
  { id: 6, name_en: "Ha Giang", name_vi: "Hà Giang", lat: "22.8233", lng: "104.9838", type: "province" },
  { id: 7, name_en: "Cao Bang", name_vi: "Cao Bằng", lat: "22.6666", lng: "106.2576", type: "province" },
  { id: 8, name_en: "Lao Cai", name_vi: "Lào Cai", lat: "22.3380", lng: "104.1487", type: "province" },
  { id: 9, name_en: "Bac Kan", name_vi: "Bắc Kạn", lat: "22.1471", lng: "105.8348", type: "province" },
  { id: 10, name_en: "Lang Son", name_vi: "Lạng Sơn", lat: "21.8469", lng: "106.7614", type: "province" },
  { id: 11, name_en: "Tuyen Quang", name_vi: "Tuyên Quang", lat: "21.8237", lng: "105.2181", type: "province" },
  { id: 12, name_en: "Yen Bai", name_vi: "Yên Bái", lat: "21.7168", lng: "104.8985", type: "province" },
  { id: 13, name_en: "Thai Nguyen", name_vi: "Thái Nguyên", lat: "21.5928", lng: "105.8442", type: "province" },
  { id: 14, name_en: "Phu Tho", name_vi: "Phú Thọ", lat: "21.4190", lng: "105.2297", type: "province" },
  { id: 15, name_en: "Vinh Phuc", name_vi: "Vĩnh Phúc", lat: "21.3089", lng: "105.6050", type: "province" },
  { id: 16, name_en: "Bac Giang", name_vi: "Bắc Giang", lat: "21.2731", lng: "106.1946", type: "province" },
  { id: 17, name_en: "Bac Ninh", name_vi: "Bắc Ninh", lat: "21.1862", lng: "106.0763", type: "province" },
  { id: 18, name_en: "Quang Ninh", name_vi: "Quảng Ninh", lat: "21.0064", lng: "107.2925", type: "province" },
  { id: 19, name_en: "Hai Duong", name_vi: "Hải Dương", lat: "20.9373", lng: "106.3146", type: "province" },
  { id: 20, name_en: "Hung Yen", name_vi: "Hưng Yên", lat: "20.6464", lng: "106.0511", type: "province" },
  { id: 21, name_en: "Hoa Binh", name_vi: "Hoà Bình", lat: "20.8171", lng: "105.3382", type: "province" },
  { id: 22, name_en: "Son La", name_vi: "Sơn La", lat: "21.3270", lng: "103.9144", type: "province" },
  { id: 23, name_en: "Lai Chau", name_vi: "Lai Châu", lat: "22.3964", lng: "103.4583", type: "province" },
  { id: 24, name_en: "Dien Bien", name_vi: "Điện Biên", lat: "21.3860", lng: "103.0230", type: "province" },
  // Central provinces
  { id: 25, name_en: "Thai Binh", name_vi: "Thái Bình", lat: "20.4463", lng: "106.3365", type: "province" },
  { id: 26, name_en: "Ha Nam", name_vi: "Hà Nam", lat: "20.5835", lng: "105.9230", type: "province" },
  { id: 27, name_en: "Nam Dinh", name_vi: "Nam Định", lat: "20.4388", lng: "106.1621", type: "province" },
  { id: 28, name_en: "Ninh Binh", name_vi: "Ninh Bình", lat: "20.2506", lng: "105.9745", type: "province" },
  { id: 29, name_en: "Thanh Hoa", name_vi: "Thanh Hoá", lat: "19.8067", lng: "105.7852", type: "province" },
  { id: 30, name_en: "Nghe An", name_vi: "Nghệ An", lat: "18.6733", lng: "105.6922", type: "province" },
  { id: 31, name_en: "Ha Tinh", name_vi: "Hà Tĩnh", lat: "18.3559", lng: "105.8877", type: "province" },
  { id: 32, name_en: "Quang Binh", name_vi: "Quảng Bình", lat: "17.4690", lng: "106.5999", type: "province" },
  { id: 33, name_en: "Quang Tri", name_vi: "Quảng Trị", lat: "16.7543", lng: "107.1856", type: "province" },
  { id: 34, name_en: "Thua Thien Hue", name_vi: "Thừa Thiên Huế", lat: "16.4637", lng: "107.5909", type: "province" },
  { id: 35, name_en: "Quang Nam", name_vi: "Quảng Nam", lat: "15.5394", lng: "108.0191", type: "province" },
  { id: 36, name_en: "Quang Ngai", name_vi: "Quảng Ngãi", lat: "15.1214", lng: "108.8044", type: "province" },
  { id: 37, name_en: "Binh Dinh", name_vi: "Bình Định", lat: "13.7765", lng: "109.2237", type: "province" },
  { id: 38, name_en: "Phu Yen", name_vi: "Phú Yên", lat: "13.0882", lng: "109.0929", type: "province" },
  { id: 39, name_en: "Khanh Hoa", name_vi: "Khánh Hoà", lat: "12.2585", lng: "109.0526", type: "province" },
  { id: 40, name_en: "Ninh Thuan", name_vi: "Ninh Thuận", lat: "11.5752", lng: "108.9890", type: "province" },
  { id: 41, name_en: "Binh Thuan", name_vi: "Bình Thuận", lat: "10.9277", lng: "108.1021", type: "province" },
  // Central Highlands
  { id: 42, name_en: "Kon Tum", name_vi: "Kon Tum", lat: "14.3498", lng: "108.0004", type: "province" },
  { id: 43, name_en: "Gia Lai", name_vi: "Gia Lai", lat: "13.9831", lng: "108.0152", type: "province" },
  { id: 44, name_en: "Dak Lak", name_vi: "Đắk Lắk", lat: "12.7100", lng: "108.2378", type: "province" },
  { id: 45, name_en: "Dak Nong", name_vi: "Đắk Nông", lat: "12.2646", lng: "107.6098", type: "province" },
  { id: 46, name_en: "Lam Dong", name_vi: "Lâm Đồng", lat: "11.9404", lng: "108.4583", type: "province" },
  // Southern provinces
  { id: 47, name_en: "Binh Phuoc", name_vi: "Bình Phước", lat: "11.7512", lng: "106.7235", type: "province" },
  { id: 48, name_en: "Tay Ninh", name_vi: "Tây Ninh", lat: "11.3352", lng: "106.1099", type: "province" },
  { id: 49, name_en: "Binh Duong", name_vi: "Bình Dương", lat: "11.3254", lng: "106.4770", type: "province" },
  { id: 50, name_en: "Dong Nai", name_vi: "Đồng Nai", lat: "10.9453", lng: "106.8243", type: "province" },
  { id: 51, name_en: "Ba Ria Vung Tau", name_vi: "Bà Rịa-Vũng Tàu", lat: "10.5417", lng: "107.2430", type: "province" },
  // Mekong Delta
  { id: 52, name_en: "Long An", name_vi: "Long An", lat: "10.5360", lng: "106.4112", type: "province" },
  { id: 53, name_en: "Tien Giang", name_vi: "Tiền Giang", lat: "10.4494", lng: "106.3421", type: "province" },
  { id: 54, name_en: "Ben Tre", name_vi: "Bến Tre", lat: "10.2434", lng: "106.3756", type: "province" },
  { id: 55, name_en: "Tra Vinh", name_vi: "Trà Vinh", lat: "9.9347", lng: "106.3455", type: "province" },
  { id: 56, name_en: "Vinh Long", name_vi: "Vĩnh Long", lat: "10.2537", lng: "105.9722", type: "province" },
  { id: 57, name_en: "Dong Thap", name_vi: "Đồng Tháp", lat: "10.4938", lng: "105.6882", type: "province" },
  { id: 58, name_en: "An Giang", name_vi: "An Giang", lat: "10.5216", lng: "105.1259", type: "province" },
  { id: 59, name_en: "Kien Giang", name_vi: "Kiên Giang", lat: "10.0125", lng: "105.0809", type: "province" },
  { id: 60, name_en: "Hau Giang", name_vi: "Hậu Giang", lat: "9.7579", lng: "105.6413", type: "province" },
  { id: 61, name_en: "Soc Trang", name_vi: "Sóc Trăng", lat: "9.6038", lng: "105.9800", type: "province" },
  { id: 62, name_en: "Bac Lieu", name_vi: "Bạc Liêu", lat: "9.2941", lng: "105.7272", type: "province" },
  { id: 63, name_en: "Ca Mau", name_vi: "Cà Mau", lat: "9.1527", lng: "105.1961", type: "province" },
];
