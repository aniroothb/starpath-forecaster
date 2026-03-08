import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Search } from "lucide-react";
import { calculateHoroscope } from "@/utils/horoscopeCalculations";
import type { CountryCode } from "@/data/countries";
import LocationSelector from "@/components/LocationSelector";
import LocationSearch from "@/components/LocationSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HoroscopeFormProps {
  selectedCountry: CountryCode;
  onCountryChange: (country: CountryCode) => void;
}

const HoroscopeForm = ({ selectedCountry, onCountryChange }: HoroscopeFormProps) => {
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
      city: "Bangkok",
      district: "",
      latitude: "13.7563",
      longitude: "100.5018",
      utc: "+07:00"
    }
  });

  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const horoscope = calculateHoroscope(formData);
      setResult(horoscope.interpretation);
    } catch (error) {
      console.error('Error:', error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl p-6 space-y-6 bg-white/80 backdrop-blur-sm">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Horoscope Reading</h1>
        <p className="text-muted-foreground">Enter your details to calculate your horoscope</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name (optional)"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="celestial-input"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date of Birth
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
                  <SelectValue placeholder="Day" />
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
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <SelectItem
                      key={month}
                      value={String(month).padStart(2, "0")}
                    >
                      {new Date(2024, month - 1).toLocaleString("en-US", {
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
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time of Birth
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
                  <SelectValue placeholder="Hour" />
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
                  <SelectValue placeholder="Min" />
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

        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search Birthplace
          </Label>
          <LocationSearch
            onSelect={(loc) => {
              setFormData({
                ...formData,
                location: {
                  city: loc.name_en,
                  district: "",
                  latitude: loc.lat,
                  longitude: loc.lng,
                  utc: loc.utc,
                },
              });
            }}
            onCountryChange={onCountryChange}
          />

          <Label className="flex items-center gap-2 mt-3">
            <MapPin className="w-4 h-4" />
            Or select from list
          </Label>
          <LocationSelector
            key={selectedCountry}
            country={selectedCountry}
            onLocationChange={(location) =>
              setFormData({
                ...formData,
                location: { ...formData.location, ...location },
              })
            }
          />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="text-sm text-muted-foreground">
              Latitude: {formData.location.latitude}
            </div>
            <div className="text-sm text-muted-foreground">
              Longitude: {formData.location.longitude}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full celestial-button"
            disabled={isLoading}
          >
            {isLoading ? "Reading..." : "Get Reading"}
          </Button>
        </div>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Your Reading</h2>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </Card>
  );
};

export default HoroscopeForm;
