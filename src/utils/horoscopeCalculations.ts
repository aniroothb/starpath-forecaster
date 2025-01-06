interface HoroscopeData {
  name: string;
  birthDate: {
    day: string;
    month: string;
    year: string;
    hour: string;
    minute: string;
  };
  location: {
    city: string;
    district: string;
    latitude: string;
    longitude: string;
    utc: string;
  };
}

export const calculateZodiacSign = (month: number, day: number): string => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "ราศีเมษ";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "ราศีพฤษภ";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "ราศีเมถุน";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "ราศีกรกฎ";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "ราศีสิงห์";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "ราศีกันย์";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "ราศีตุลย์";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "ราศีพิจิก";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "ราศีธนู";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "ราศีมังกร";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "ราศีกุมภ์";
  return "ราศีมีน";
};

export const calculateLunarMansion = (day: number): string => {
  const mansions = [
    "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี",
    "ศุกร์", "เสาร์", "อาทิตย์", "จันทร์"
  ];
  return mansions[day % 7];
};

export const calculateHoroscope = (data: HoroscopeData) => {
  const day = parseInt(data.birthDate.day);
  const month = parseInt(data.birthDate.month);
  const hour = parseInt(data.birthDate.hour);

  const zodiacSign = calculateZodiacSign(month, day);
  const lunarMansion = calculateLunarMansion(day);
  
  // คำนวณดวงดาวประจำวัน
  const dailyPlanet = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"][day % 7];
  
  // คำนวณเวลามงคล
  const auspiciousHours = [
    hour >= 6 && hour < 7 ? "มฤตยู" : "",
    hour >= 7 && hour < 8 ? "กาลกิณี" : "",
    hour >= 8 && hour < 9 ? "ศุภ" : "",
    hour >= 9 && hour < 10 ? "พรหม" : "",
    hour >= 10 && hour < 11 ? "อุตสาหะ" : "",
    hour >= 11 && hour < 12 ? "อธิบดี" : "",
  ].filter(Boolean);

  return {
    zodiacSign,
    lunarMansion,
    dailyPlanet,
    auspiciousHours,
    interpretation: `${data.name || "ท่าน"} เกิดในราศี${zodiacSign} 
    มีดาวประจำวันคือ ${dailyPlanet} 
    อยู่ในมฤตยุที่ ${lunarMansion}
    ช่วงเวลามงคล: ${auspiciousHours.join(", ") || "ไม่มีข้อมูล"}`,
  };
};