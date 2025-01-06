import { calculateAllPlanetPositions, getLunarMansion } from './swissEphemeris';

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

export const calculateHoroscope = (data: HoroscopeData) => {
  // แปลงข้อมูลวันเดือนปีเกิดเป็น Date object
  const birthDate = new Date(
    parseInt(data.birthDate.year),
    parseInt(data.birthDate.month) - 1,
    parseInt(data.birthDate.day),
    parseInt(data.birthDate.hour),
    parseInt(data.birthDate.minute)
  );

  // คำนวณตำแหน่งดาวด้วย Swiss Ephemeris
  const planetPositions = calculateAllPlanetPositions(birthDate);

  // แปลงตำแหน่งดาวเป็นราศี
  const sunSign = getLunarMansion(planetPositions.sun.longitude);
  const moonSign = getLunarMansion(planetPositions.moon.longitude);
  const ascendant = getLunarMansion(planetPositions.sun.longitude); // ต้องคำนวณลัคนาจริงๆ จากเวลาและพิกัด

  // สร้างคำทำนาย
  const interpretation = `${data.name || "ท่าน"} เกิดในราศี${sunSign}
ดวงจันทร์อยู่ราศี${moonSign}
ลัคนาอยู่ราศี${ascendant}

ตำแหน่งดาวเคราะห์:
- พระอาทิตย์: ${sunSign} (${planetPositions.sun.longitude.toFixed(2)}°)
- พระจันทร์: ${moonSign} (${planetPositions.moon.longitude.toFixed(2)}°)
- อังคาร: ${getLunarMansion(planetPositions.mars.longitude)} (${planetPositions.mars.longitude.toFixed(2)}°)
- พุธ: ${getLunarMansion(planetPositions.mercury.longitude)} (${planetPositions.mercury.longitude.toFixed(2)}°)
- พฤหัสบดี: ${getLunarMansion(planetPositions.jupiter.longitude)} (${planetPositions.jupiter.longitude.toFixed(2)}°)
- ศุกร์: ${getLunarMansion(planetPositions.venus.longitude)} (${planetPositions.venus.longitude.toFixed(2)}°)
- เสาร์: ${getLunarMansion(planetPositions.saturn.longitude)} (${planetPositions.saturn.longitude.toFixed(2)}°)
- ราหู: ${getLunarMansion(planetPositions.rahu.longitude)} (${planetPositions.rahu.longitude.toFixed(2)}°)
- เกตุ: ${getLunarMansion(planetPositions.ketu.longitude)} (${planetPositions.ketu.longitude.toFixed(2)}°)`;

  return {
    zodiacSign: sunSign,
    moonSign,
    ascendant,
    planetPositions,
    interpretation
  };
};