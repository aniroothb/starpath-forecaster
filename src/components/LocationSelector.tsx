import { useMemo, useState, useEffect } from "react";
import type { CountryCode } from "@/data/countries";
import { countries } from "@/data/countries";
import { provinces, getDistrictsByProvince, getSubDistrictsByDistrict, provinceCoordinates } from "@/data/thaiProvinces";
import { japanPrefectures } from "@/data/japanPrefectures";
import { koreaProvinces } from "@/data/koreaProvinces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LocationSelectorProps {
  country: CountryCode;
  onLocationChange: (location: { city: string; district: string; latitude: string; longitude: string; utc: string }) => void;
}

const LocationSelector = ({ country, onLocationChange }: LocationSelectorProps) => {
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(1);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);

  useEffect(() => {
    setSelectedProvinceId(1);
    setSelectedDistrictId(null);

    if (country === "TH") {
      const coords = provinceCoordinates[1];
      onLocationChange({ city: "Bangkok", district: "", latitude: coords?.lat || "", longitude: coords?.lng || "", utc: "+07:00" });
    } else if (country === "JP") {
      const pref = japanPrefectures[0];
      onLocationChange({ city: pref.name_en, district: "", latitude: pref.lat, longitude: pref.lng, utc: "+09:00" });
    } else if (country === "KR") {
      const prov = koreaProvinces[0];
      onLocationChange({ city: prov.name_en, district: "", latitude: prov.lat, longitude: prov.lng, utc: "+09:00" });
    }
  }, [country]);

  const filteredDistricts = useMemo(
    () => (country === "TH" ? getDistrictsByProvince(selectedProvinceId) : []),
    [selectedProvinceId, country]
  );

  const filteredSubDistricts = useMemo(
    () => (country === "TH" && selectedDistrictId ? getSubDistrictsByDistrict(selectedDistrictId) : []),
    [selectedDistrictId, country]
  );

  if (country === "JP") {
    return (
      <div className="space-y-2">
        <Select
          value={String(selectedProvinceId)}
          onValueChange={(value) => {
            const id = Number(value);
            const pref = japanPrefectures.find((p) => p.id === id);
            setSelectedProvinceId(id);
            if (pref) {
              onLocationChange({ city: pref.name_en, district: pref.name_ja, latitude: pref.lat, longitude: pref.lng, utc: "+09:00" });
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Prefecture" />
          </SelectTrigger>
          <SelectContent>
            {japanPrefectures.map((p) => (
              <SelectItem key={p.id} value={String(p.id)}>
                {p.name_en} ({p.name_ja})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  if (country === "KR") {
    return (
      <div className="space-y-2">
        <Select
          value={String(selectedProvinceId)}
          onValueChange={(value) => {
            const id = Number(value);
            const prov = koreaProvinces.find((p) => p.id === id);
            setSelectedProvinceId(id);
            if (prov) {
              onLocationChange({ city: prov.name_en, district: prov.name_ko, latitude: prov.lat, longitude: prov.lng, utc: "+09:00" });
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Province / City" />
          </SelectTrigger>
          <SelectContent>
            {koreaProvinces.map((p) => (
              <SelectItem key={p.id} value={String(p.id)}>
                {p.name_en} ({p.name_ko})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  // Thailand
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <Select
        value={String(selectedProvinceId)}
        onValueChange={(value) => {
          const pid = Number(value);
          const prov = provinces.find((p) => p.id === pid);
          const coords = provinceCoordinates[pid];
          setSelectedProvinceId(pid);
          setSelectedDistrictId(null);
          onLocationChange({
            city: prov?.name_en || "",
            district: "",
            latitude: coords?.lat || "",
            longitude: coords?.lng || "",
            utc: "+07:00",
          });
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Province" />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((p) => (
            <SelectItem key={p.id} value={String(p.id)}>
              {p.name_en}
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
          onLocationChange({
            city: provinces.find((p) => p.id === selectedProvinceId)?.name_en || "",
            district: dist?.name_en || "",
            latitude: provinceCoordinates[selectedProvinceId]?.lat || "",
            longitude: provinceCoordinates[selectedProvinceId]?.lng || "",
            utc: "+07:00",
          });
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="District" />
        </SelectTrigger>
        <SelectContent>
          {filteredDistricts.map((d) => (
            <SelectItem key={d.id} value={String(d.id)}>
              {d.name_en}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => {
          const sd = filteredSubDistricts.find((s) => s.id === Number(value));
          if (sd) {
            const currentDistrict = filteredDistricts.find((d) => d.id === selectedDistrictId);
            onLocationChange({
              city: provinces.find((p) => p.id === selectedProvinceId)?.name_en || "",
              district: `${currentDistrict?.name_en || ""}, ${sd.name_en}`,
              latitude: provinceCoordinates[selectedProvinceId]?.lat || "",
              longitude: provinceCoordinates[selectedProvinceId]?.lng || "",
              utc: "+07:00",
            });
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Sub-district" />
        </SelectTrigger>
        <SelectContent>
          {filteredSubDistricts.map((s) => (
            <SelectItem key={s.id} value={String(s.id)}>
              {s.name_en}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationSelector;
