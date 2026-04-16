export interface LaosDistrict {
  id: number;
  province_id: number;
  name_en: string;
  name_lo: string;
  lat: string;
  lng: string;
}

export const laosDistricts: LaosDistrict[] = [
  // Vientiane Capital (1)
  { id: 101, province_id: 1, name_en: "Chanthabuly", name_lo: "ຈັນທະບູລີ", lat: "17.9667", lng: "102.6333" },
  { id: 102, province_id: 1, name_en: "Sikhottabong", name_lo: "ສີໂຄດຕະບອງ", lat: "17.9700", lng: "102.5900" },
  { id: 103, province_id: 1, name_en: "Xaysetha", name_lo: "ໄຊເສດຖາ", lat: "17.9600", lng: "102.6700" },
  { id: 104, province_id: 1, name_en: "Sisattanak", name_lo: "ສີສັດຕະນາກ", lat: "17.9500", lng: "102.6400" },
  { id: 105, province_id: 1, name_en: "Hadxaifong", name_lo: "ຫາດຊາຍຟອງ", lat: "17.9200", lng: "102.6900" },
  { id: 106, province_id: 1, name_en: "Naxaithong", name_lo: "ນາຊາຍທອງ", lat: "18.1200", lng: "102.5200" },
  { id: 107, province_id: 1, name_en: "Xaythany", name_lo: "ໄຊທານີ", lat: "18.0400", lng: "102.7600" },
  { id: 108, province_id: 1, name_en: "Sangthong", name_lo: "ສັງທອງ", lat: "18.1800", lng: "102.3000" },
  { id: 109, province_id: 1, name_en: "Pakngum", name_lo: "ປາກງື່ມ", lat: "18.0600", lng: "102.9200" },

  // Luang Prabang (6)
  { id: 601, province_id: 6, name_en: "Luang Prabang City", name_lo: "ເມືອງຫຼວງພະບາງ", lat: "19.8860", lng: "102.1347" },
  { id: 602, province_id: 6, name_en: "Xiengngeun", name_lo: "ຊຽງເງິນ", lat: "19.7700", lng: "102.2200" },
  { id: 603, province_id: 6, name_en: "Nan", name_lo: "ນານ", lat: "20.0500", lng: "102.0700" },
  { id: 604, province_id: 6, name_en: "Pak Ou", name_lo: "ປາກອູ", lat: "20.0800", lng: "102.2200" },

  // Savannakhet (13)
  { id: 1301, province_id: 13, name_en: "Kaysone Phomvihane", name_lo: "ໄກສອນ ພົມວິຫານ", lat: "16.5463", lng: "104.7525" },
  { id: 1302, province_id: 13, name_en: "Outhoumphone", name_lo: "ອຸທຸມພອນ", lat: "16.5700", lng: "104.9700" },
  { id: 1303, province_id: 13, name_en: "Atsaphangthong", name_lo: "ອາດສະພັງທອງ", lat: "16.5500", lng: "104.5500" },

  // Champasak (16)
  { id: 1601, province_id: 16, name_en: "Pakse", name_lo: "ປາກເຊ", lat: "15.1203", lng: "105.7992" },
  { id: 1602, province_id: 16, name_en: "Champasak District", name_lo: "ເມືອງຈຳປາສັກ", lat: "14.8907", lng: "105.9699" },
  { id: 1603, province_id: 16, name_en: "Khong", name_lo: "ໂຂງ", lat: "14.1200", lng: "105.8500" },
];

export const getLaosDistrictsByProvince = (provinceId: number): LaosDistrict[] =>
  laosDistricts.filter((d) => d.province_id === provinceId);
