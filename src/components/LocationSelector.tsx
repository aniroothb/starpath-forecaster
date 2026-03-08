import { useMemo, useState, useEffect } from "react";
import type { CountryCode } from "@/data/countries";
import { provinces, getDistrictsByProvince, getSubDistrictsByDistrict, provinceCoordinates } from "@/data/thaiProvinces";
import { japanPrefectures } from "@/data/japanPrefectures";
import { koreaProvinces } from "@/data/koreaProvinces";
import { chinaProvinces } from "@/data/chinaProvinces";
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

const getProvinceList = (country: CountryCode) => {
  switch (country) {
    case "TH":
      return provinces.map((p) => ({
        id: p.id,
        name_en: p.name_en,
        name_local: p.name_th,
        lat: provinceCoordinates[p.id]?.lat || "",
        lng: provinceCoordinates[p.id]?.lng || "",
        utc: "+07:00",
      }));
    case "JP":
      return japanPrefectures.map((p) => ({
        id: p.id,
        name_en: p.name_en,
        name_local: p.name_ja,
        lat: p.lat,
        lng: p.lng,
        utc: "+09:00",
      }));
    case "KR":
      return koreaProvinces.map((p) => ({
        id: p.id,
        name_en: p.name_en,
        name_local: p.name_ko,
        lat: p.lat,
        lng: p.lng,
        utc: "+09:00",
      }));
    case "CN":
      return chinaProvinces.map((p) => ({
        id: p.id,
        name_en: p.name_en,
        name_local: p.name_zh,
        lat: p.lat,
        lng: p.lng,
        utc: "+08:00",
      }));
    default:
      return [];
  }
};

const LocationSelector = ({ country, onLocationChange }: LocationSelectorProps) => {
  const provinceList = useMemo(() => getProvinceList(country), [country]);
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(provinceList[0]?.id || 1);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);

  const filteredDistricts = useMemo(
    () => (country === "TH" ? getDistrictsByProvince(selectedProvinceId) : []),
    [selectedProvinceId, country]
  );

  const filteredSubDistricts = useMemo(
    () => (country === "TH" && selectedDistrictId ? getSubDistrictsByDistrict(selectedDistrictId) : []),
    [selectedDistrictId, country]
  );

  useEffect(() => {
    const first = provinceList[0];
    if (first) {
      setSelectedProvinceId(first.id);
      setSelectedDistrictId(null);
      onLocationChange({
        city: first.name_en,
        district: "",
        latitude: first.lat,
        longitude: first.lng,
        utc: first.utc,
      });
    }
  }, [country]);

  const provinceLabel = country === "JP" ? "Prefecture" : "Province";

  return (
    <div className={`grid grid-cols-1 ${country === "TH" ? "md:grid-cols-3" : ""} gap-2`}>
      {/* Province / Prefecture */}
      <Select
        value={String(selectedProvinceId)}
        onValueChange={(value) => {
          const pid = Number(value);
          const prov = provinceList.find((p) => p.id === pid);
          setSelectedProvinceId(pid);
          setSelectedDistrictId(null);
          if (prov) {
            onLocationChange({
              city: prov.name_en,
              district: "",
              latitude: prov.lat,
              longitude: prov.lng,
              utc: prov.utc,
            });
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder={provinceLabel} />
        </SelectTrigger>
        <SelectContent>
          {provinceList.map((p) => (
            <SelectItem key={p.id} value={String(p.id)}>
              {p.name_en} ({p.name_local})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* District - Thailand only */}
      {country === "TH" && (
        <>
          <Select
            value={selectedDistrictId ? String(selectedDistrictId) : ""}
            onValueChange={(value) => {
              const did = Number(value);
              const dist = filteredDistricts.find((d) => d.id === did);
              const prov = provinceList.find((p) => p.id === selectedProvinceId);
              setSelectedDistrictId(did);
              onLocationChange({
                city: prov?.name_en || "",
                district: dist?.name_en || "",
                latitude: prov?.lat || "",
                longitude: prov?.lng || "",
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
                const prov = provinceList.find((p) => p.id === selectedProvinceId);
                onLocationChange({
                  city: prov?.name_en || "",
                  district: `${currentDistrict?.name_en || ""}, ${sd.name_en}`,
                  latitude: prov?.lat || "",
                  longitude: prov?.lng || "",
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
        </>
      )}
    </div>
  );
};

export default LocationSelector;
