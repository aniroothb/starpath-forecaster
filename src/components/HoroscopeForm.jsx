import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";
import { calculateHoroscope } from "@/utils/horoscopeCalculations";
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

  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const horoscope = calculateHoroscope(formData);
    setResult(horoscope.interpretation);
    console.log("Horoscope calculation:", horoscope);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Select
              value={formData.location.city}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  location: { ...formData.location, city: value }
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="จังหวัด" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="กรุงเทพมหานคร">กรุงเทพมหานคร</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={formData.location.district}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  location: { ...formData.location, district: value }
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="เขต" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="เขตพระนคร">เขตพระนคร</SelectItem>
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
          <Button type="submit" className="w-full celestial-button">
            ทำนาย
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