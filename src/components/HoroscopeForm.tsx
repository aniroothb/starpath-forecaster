import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement horoscope calculation
    console.log("Form submitted:", formData);
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
              <Select>
                <option value="06">06</option>
              </Select>
              <Select>
                <option value="01">มกราคม</option>
              </Select>
              <Select>
                <option value="2005">2548</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              เวลา
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <Select>
                <option value="10">10</option>
              </Select>
              <Select>
                <option value="53">53</option>
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
            <Select>
              <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
            </Select>
            <Select>
              <option value="เขตพระนคร">เขตพระนคร</option>
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
    </Card>
  );
};

export default HoroscopeForm;