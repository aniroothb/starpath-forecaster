export interface VietnamDistrict {
  id: number;
  province_id: number;
  name_en: string;
  name_vi: string;
  lat: string;
  lng: string;
}

export const vietnamDistricts: VietnamDistrict[] = [
  // Hanoi (1) - districts
  { id: 101, province_id: 1, name_en: "Ba Dinh", name_vi: "Ba Đình", lat: "21.0340", lng: "105.8124" },
  { id: 102, province_id: 1, name_en: "Hoan Kiem", name_vi: "Hoàn Kiếm", lat: "21.0285", lng: "105.8542" },
  { id: 103, province_id: 1, name_en: "Tay Ho", name_vi: "Tây Hồ", lat: "21.0728", lng: "105.8120" },
  { id: 104, province_id: 1, name_en: "Long Bien", name_vi: "Long Biên", lat: "21.0470", lng: "105.8893" },
  { id: 105, province_id: 1, name_en: "Cau Giay", name_vi: "Cầu Giấy", lat: "21.0333", lng: "105.7989" },
  { id: 106, province_id: 1, name_en: "Dong Da", name_vi: "Đống Đa", lat: "21.0160", lng: "105.8279" },
  { id: 107, province_id: 1, name_en: "Hai Ba Trung", name_vi: "Hai Bà Trưng", lat: "20.9960", lng: "105.8579" },
  { id: 108, province_id: 1, name_en: "Hoang Mai", name_vi: "Hoàng Mai", lat: "20.9776", lng: "105.8575" },
  { id: 109, province_id: 1, name_en: "Thanh Xuan", name_vi: "Thanh Xuân", lat: "20.9935", lng: "105.8100" },
  { id: 110, province_id: 1, name_en: "Nam Tu Liem", name_vi: "Nam Từ Liêm", lat: "21.0139", lng: "105.7588" },
  { id: 111, province_id: 1, name_en: "Bac Tu Liem", name_vi: "Bắc Từ Liêm", lat: "21.0683", lng: "105.7618" },
  { id: 112, province_id: 1, name_en: "Ha Dong", name_vi: "Hà Đông", lat: "20.9717", lng: "105.7781" },

  // Ho Chi Minh City (2) - districts
  { id: 201, province_id: 2, name_en: "District 1", name_vi: "Quận 1", lat: "10.7756", lng: "106.7019" },
  { id: 202, province_id: 2, name_en: "District 3", name_vi: "Quận 3", lat: "10.7834", lng: "106.6868" },
  { id: 203, province_id: 2, name_en: "District 4", name_vi: "Quận 4", lat: "10.7579", lng: "106.7010" },
  { id: 204, province_id: 2, name_en: "District 5", name_vi: "Quận 5", lat: "10.7540", lng: "106.6633" },
  { id: 205, province_id: 2, name_en: "District 6", name_vi: "Quận 6", lat: "10.7482", lng: "106.6353" },
  { id: 206, province_id: 2, name_en: "District 7", name_vi: "Quận 7", lat: "10.7340", lng: "106.7218" },
  { id: 207, province_id: 2, name_en: "District 8", name_vi: "Quận 8", lat: "10.7240", lng: "106.6286" },
  { id: 208, province_id: 2, name_en: "District 10", name_vi: "Quận 10", lat: "10.7747", lng: "106.6669" },
  { id: 209, province_id: 2, name_en: "District 11", name_vi: "Quận 11", lat: "10.7629", lng: "106.6504" },
  { id: 210, province_id: 2, name_en: "District 12", name_vi: "Quận 12", lat: "10.8671", lng: "106.6414" },
  { id: 211, province_id: 2, name_en: "Binh Tan", name_vi: "Bình Tân", lat: "10.7653", lng: "106.6035" },
  { id: 212, province_id: 2, name_en: "Binh Thanh", name_vi: "Bình Thạnh", lat: "10.8105", lng: "106.7091" },
  { id: 213, province_id: 2, name_en: "Go Vap", name_vi: "Gò Vấp", lat: "10.8386", lng: "106.6652" },
  { id: 214, province_id: 2, name_en: "Phu Nhuan", name_vi: "Phú Nhuận", lat: "10.8010", lng: "106.6802" },
  { id: 215, province_id: 2, name_en: "Tan Binh", name_vi: "Tân Bình", lat: "10.8015", lng: "106.6528" },
  { id: 216, province_id: 2, name_en: "Tan Phu", name_vi: "Tân Phú", lat: "10.7900", lng: "106.6280" },
  { id: 217, province_id: 2, name_en: "Thu Duc City", name_vi: "TP Thủ Đức", lat: "10.8494", lng: "106.7533" },

  // Hai Phong (3)
  { id: 301, province_id: 3, name_en: "Hong Bang", name_vi: "Hồng Bàng", lat: "20.8560", lng: "106.6750" },
  { id: 302, province_id: 3, name_en: "Le Chan", name_vi: "Lê Chân", lat: "20.8419", lng: "106.6881" },
  { id: 303, province_id: 3, name_en: "Ngo Quyen", name_vi: "Ngô Quyền", lat: "20.8550", lng: "106.7100" },
  { id: 304, province_id: 3, name_en: "Kien An", name_vi: "Kiến An", lat: "20.8320", lng: "106.6370" },
  { id: 305, province_id: 3, name_en: "Do Son", name_vi: "Đồ Sơn", lat: "20.7080", lng: "106.7810" },

  // Da Nang (4)
  { id: 401, province_id: 4, name_en: "Hai Chau", name_vi: "Hải Châu", lat: "16.0678", lng: "108.2208" },
  { id: 402, province_id: 4, name_en: "Thanh Khe", name_vi: "Thanh Khê", lat: "16.0640", lng: "108.1910" },
  { id: 403, province_id: 4, name_en: "Son Tra", name_vi: "Sơn Trà", lat: "16.1100", lng: "108.2440" },
  { id: 404, province_id: 4, name_en: "Ngu Hanh Son", name_vi: "Ngũ Hành Sơn", lat: "16.0200", lng: "108.2500" },
  { id: 405, province_id: 4, name_en: "Lien Chieu", name_vi: "Liên Chiểu", lat: "16.0870", lng: "108.1500" },
  { id: 406, province_id: 4, name_en: "Cam Le", name_vi: "Cẩm Lệ", lat: "16.0150", lng: "108.2050" },

  // Can Tho (5)
  { id: 501, province_id: 5, name_en: "Ninh Kieu", name_vi: "Ninh Kiều", lat: "10.0341", lng: "105.7676" },
  { id: 502, province_id: 5, name_en: "Binh Thuy", name_vi: "Bình Thuỷ", lat: "10.0670", lng: "105.7410" },
  { id: 503, province_id: 5, name_en: "Cai Rang", name_vi: "Cái Răng", lat: "10.0090", lng: "105.7530" },
  { id: 504, province_id: 5, name_en: "O Mon", name_vi: "Ô Môn", lat: "10.1120", lng: "105.6340" },

  // Khanh Hoa / Nha Trang (39)
  { id: 3901, province_id: 39, name_en: "Nha Trang City", name_vi: "TP Nha Trang", lat: "12.2388", lng: "109.1967" },
  { id: 3902, province_id: 39, name_en: "Cam Ranh", name_vi: "Cam Ranh", lat: "11.9214", lng: "109.1590" },

  // Lam Dong / Da Lat (46)
  { id: 4601, province_id: 46, name_en: "Da Lat City", name_vi: "TP Đà Lạt", lat: "11.9404", lng: "108.4583" },
  { id: 4602, province_id: 46, name_en: "Bao Loc", name_vi: "Bảo Lộc", lat: "11.5477", lng: "107.8070" },

  // Quang Ninh / Ha Long (18)
  { id: 1801, province_id: 18, name_en: "Ha Long City", name_vi: "TP Hạ Long", lat: "20.9511", lng: "107.0848" },
  { id: 1802, province_id: 18, name_en: "Cam Pha", name_vi: "Cẩm Phả", lat: "21.0167", lng: "107.3000" },

  // Thua Thien Hue (34)
  { id: 3401, province_id: 34, name_en: "Hue City", name_vi: "TP Huế", lat: "16.4637", lng: "107.5909" },

  // Binh Duong (49)
  { id: 4901, province_id: 49, name_en: "Thu Dau Mot", name_vi: "Thủ Dầu Một", lat: "11.0036", lng: "106.6520" },
  { id: 4902, province_id: 49, name_en: "Di An", name_vi: "Dĩ An", lat: "10.9027", lng: "106.7676" },
  { id: 4903, province_id: 49, name_en: "Thuan An", name_vi: "Thuận An", lat: "10.9293", lng: "106.7109" },

  // Dong Nai (50)
  { id: 5001, province_id: 50, name_en: "Bien Hoa", name_vi: "Biên Hoà", lat: "10.9453", lng: "106.8243" },
  { id: 5002, province_id: 50, name_en: "Long Khanh", name_vi: "Long Khánh", lat: "10.9333", lng: "107.2333" },
];

export const getVietnamDistrictsByProvince = (provinceId: number): VietnamDistrict[] =>
  vietnamDistricts.filter((d) => d.province_id === provinceId);
