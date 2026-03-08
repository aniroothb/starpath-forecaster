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
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
};

export const calculateLunarMansion = (day: number): string => {
  const mansions = ["Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Sun", "Moon"];
  return mansions[day % 7];
};

export const calculateHoroscope = (data: HoroscopeData) => {
  const day = parseInt(data.birthDate.day);
  const month = parseInt(data.birthDate.month);
  const hour = parseInt(data.birthDate.hour);

  const zodiacSign = calculateZodiacSign(month, day);
  const lunarMansion = calculateLunarMansion(day);
  
  const dailyPlanet = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"][day % 7];
  
  const auspiciousHours = [
    hour >= 6 && hour < 7 ? "Mrtyu" : "",
    hour >= 7 && hour < 8 ? "Kalakini" : "",
    hour >= 8 && hour < 9 ? "Subha" : "",
    hour >= 9 && hour < 10 ? "Brahma" : "",
    hour >= 10 && hour < 11 ? "Utsaha" : "",
    hour >= 11 && hour < 12 ? "Athibodi" : "",
  ].filter(Boolean);

  return {
    zodiacSign,
    lunarMansion,
    dailyPlanet,
    auspiciousHours,
    interpretation: `${data.name || "You"} were born under ${zodiacSign}
Daily planet: ${dailyPlanet}
Lunar mansion: ${lunarMansion}
Auspicious period: ${auspiciousHours.join(", ") || "N/A"}`,
  };
};
