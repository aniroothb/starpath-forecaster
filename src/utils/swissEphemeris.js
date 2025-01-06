import * as swisseph from 'swisseph';

// Initialize ephemeris data path (using bundled data)
swisseph.swe_set_ephe_path(null);

// แปลงวันที่เป็น Julian Day Number
const getJulianDay = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours() + date.getMinutes() / 60;
  
  return swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);
}

// คำนวณตำแหน่งดาวเคราะห์
const calculatePlanetPosition = (julianDay, planet) => {
  const flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_SWIEPH;
  const result = swisseph.swe_calc_ut(julianDay, planet, flag);
  
  return {
    longitude: result.longitude || 0,
    latitude: result.latitude || 0,
    distance: result.distance || 0,
    speed: result.longitudeSpeed || 0
  };
}

// คำนวณตำแหน่งราหู/เกตุ
const calculateNodes = (julianDay) => {
  const flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_SWIEPH;
  const result = swisseph.swe_calc_ut(julianDay, swisseph.SE_MEAN_NODE, flag);
  
  const rahu = {
    longitude: result.longitude || 0,
    latitude: result.latitude || 0,
    distance: result.distance || 0,
    speed: result.longitudeSpeed || 0
  };
  
  // เกตุอยู่ตรงข้ามราหูเสมอ (180 องศา)
  const ketu = {
    longitude: (rahu.longitude + 180) % 360,
    latitude: -rahu.latitude,
    distance: rahu.distance,
    speed: -rahu.speed
  };
  
  return { rahu, ketu };
}

export const calculateAllPlanetPositions = (birthDate) => {
  const julianDay = getJulianDay(birthDate);
  const nodes = calculateNodes(julianDay);
  
  return {
    sun: calculatePlanetPosition(julianDay, swisseph.SE_SUN),
    moon: calculatePlanetPosition(julianDay, swisseph.SE_MOON),
    mars: calculatePlanetPosition(julianDay, swisseph.SE_MARS),
    mercury: calculatePlanetPosition(julianDay, swisseph.SE_MERCURY),
    jupiter: calculatePlanetPosition(julianDay, swisseph.SE_JUPITER),
    venus: calculatePlanetPosition(julianDay, swisseph.SE_VENUS),
    saturn: calculatePlanetPosition(julianDay, swisseph.SE_SATURN),
    rahu: nodes.rahu,
    ketu: nodes.ketu
  };
}

// แปลงองศาเป็นราศี
export const getLunarMansion = (longitude) => {
  const mansions = [
    "เมษ", "พฤษภ", "มิถุน", "กรกฎ", 
    "สิงห์", "กันย์", "ตุล", "พิจิก",
    "ธนู", "มังกร", "กุมภ์", "มีน"
  ];
  const mansionIndex = Math.floor(longitude / 30);
  return mansions[mansionIndex];
}

// ปิด ephemeris เมื่อเลิกใช้
export const closeEphemeris = () => {
  swisseph.swe_close();
}