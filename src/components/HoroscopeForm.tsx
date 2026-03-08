import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";
import { calculateHoroscope } from "@/utils/horoscopeCalculations";
import { generateHoroscopePrediction } from "@/utils/huggingfaceApi";
import { provinces, getDistrictsByProvince, getSubDistrictsByDistrict, provinceCoordinates } from "@/data/thaiProvinces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HoroscopeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: {
      day: "06",
      month: "01",
      year: "2005",
      hour: "10",
      minute: "53"
    },
    location: {
      city: "กรุงเทพมหานคร",
      district: "เขตพระนคร",
      latitude: "13.752555",
      longitude: "100.494066",
      utc: "+07:00"
    }
  });

  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(1);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);

  const filteredDistricts = useMemo(
    () => getDistrictsByProvince(selectedProvinceId),
    [selectedProvinceId]
  );

  const filteredSubDistricts = useMemo(
    () => (selectedDistrictId ? getSubDistrictsByDistrict(selectedDistrictId) : []),
    [selectedDistrictId]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const horoscope = calculateHoroscope(formData);
      
      if (apiKey) {
        const aiPrediction = await generateHoroscopePrediction(
          apiKey,
          horoscope.zodiacSign,
          horoscope.lunarMansion,
          horoscope.dailyPlanet
        );
        setResult(aiPrediction);
      } else {
        setResult(horoscope.interpretation);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult("เกิดข้อผิดพลาดในการทำนาย กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl p-6 space-y-6 bg-white/80 backdrop-blur-sm">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">ดูดวง โหราศาสตร์</h1>
        <p className="text-muted-foreground">กรอกข้อมูลเพื่อคำนวณดวงชะตา</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">ชื่อ-สกุล</Label>
          <Input
            id="name"
            placeholder="ไม่ระบุชื่อ"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="celestial-input"
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              วันเดือนปีเกิด
            </Label>
            <div className="grid grid-cols-3 gap-2">
              <Select
                value={formData.birthDate.day}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    birthDate: { ...formData.birthDate, day: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="วัน" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <SelectItem
                      key={day}
                      value={String(day).padStart(2, "0")}
                    >
                      {String(day).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={formData.birthDate.month}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    birthDate: { ...formData.birthDate, month: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="เดือน" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <SelectItem
                      key={month}
                      value={String(month).padStart(2, "0")}
                    >
                      {new Date(2024, month - 1).toLocaleString("th-TH", {
                        month: "long"
                      })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={formData.birthDate.year}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    birthDate: { ...formData.birthDate, year: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="ปี" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year + 543}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              เวลา
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <Select
                value={formData.birthDate.hour}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    birthDate: { ...formData.birthDate, hour: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="ชั่วโมง" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                    <SelectItem
                      key={hour}
                      value={String(hour).padStart(2, "0")}
                    >
                      {String(hour).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={formData.birthDate.minute}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    birthDate: { ...formData.birthDate, minute: value }
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="นาที" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                    <SelectItem
                      key={minute}
                      value={String(minute).padStart(2, "0")}
                    >
                      {String(minute).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            สถานที่เกิด
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Select
              value={String(selectedProvinceId)}
              onValueChange={(value) => {
                const pid = Number(value);
                const prov = provinces.find((p) => p.id === pid);
                const coords = provinceCoordinates[pid];
                setSelectedProvinceId(pid);
                setSelectedDistrictId(null);
                setFormData({
                  ...formData,
                  location: {
                    ...formData.location,
                    city: prov?.name_th || "",
                    district: "",
                    latitude: coords?.lat || "",
                    longitude: coords?.lng || "",
                  },
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="จังหวัด" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((p) => (
                  <SelectItem key={p.id} value={String(p.id)}>
                    {p.name_th}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedDistrictId ? String(selectedDistrictId) : ""}
              onValueChange={(value) => {
                const did = Number(value);
                const dist = filteredDistricts.find((d) => d.id === did);
                setSelectedDistrictId(did);
                setFormData({
                  ...formData,
                  location: {
                    ...formData.location,
                    district: dist?.name_th || "",
                  },
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="อำเภอ/เขต" />
              </SelectTrigger>
              <SelectContent>
                {filteredDistricts.map((d) => (
                  <SelectItem key={d.id} value={String(d.id)}>
                    {d.name_th}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => {
                const sd = filteredSubDistricts.find((s) => s.id === Number(value));
                if (sd) {
                  setFormData({
                    ...formData,
                    location: {
                      ...formData.location,
                      district: `${formData.location.district} ต.${sd.name_th}`,
                    },
                  });
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="ตำบล/แขวง" />
              </SelectTrigger>
              <SelectContent>
                {filteredSubDistricts.map((s) => (
                  <SelectItem key={s.id} value={String(s.id)}>
                    {s.name_th}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="text-sm text-muted-foreground">
              ละติจูด: {formData.location.latitude}
            </div>
            <div className="text-sm text-muted-foreground">
              ลองจิจูด: {formData.location.longitude}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full celestial-button"
            disabled={isLoading}
          >
            {isLoading ? "กำลังทำนาย..." : "ทำนาย"}
          </Button>
        </div>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">ผลการทำนาย</h2>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </Card>
  );
};

export default HoroscopeForm;
