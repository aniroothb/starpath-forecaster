import { useMemo, useState, useEffect } from "react";
import type { CountryCode } from "@/data/countries";
import { provinces, getDistrictsByProvince, getSubDistrictsByDistrict, provinceCoordinates } from "@/data/thaiProvinces";
import { japanPrefectures } from "@/data/japanPrefectures";
import { getJapanCitiesByPrefecture } from "@/data/japanCities";
import { koreaProvinces } from "@/data/koreaProvinces";
import { getKoreaDistrictsByProvince } from "@/data/koreaDistricts";
import { chinaProvinces } from "@/data/chinaProvinces";
import { getChinaCitiesByProvince } from "@/data/chinaCities";
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
        id: p.id, name_en: p.name_en, name_local: p.name_th,
        lat: provinceCoordinates[p.id]?.lat || "", lng: provinceCoordinates[p.id]?.lng || "", utc: "+07:00",
      }));
    case "JP":
      return japanPrefectures.map((p) => ({
        id: p.id, name_en: p.name_en, name_local: p.name_ja,
        lat: p.lat, lng: p.lng, utc: "+09:00",
      }));
    case "KR":
      return koreaProvinces.map((p) => ({
        id: p.id, name_en: p.name_en, name_local: p.name_ko,
        lat: p.lat, lng: p.lng, utc: "+09:00",
      }));
    case "CN":
      return chinaProvinces.map((p) => ({
        id: p.id, name_en: p.name_en, name_local: p.name_zh,
        lat: p.lat, lng: p.lng, utc: "+08:00",
      }));
    default:
      return [];
  }
};

const LocationSelector = ({ country, onLocationChange }: LocationSelectorProps) => {
  const provinceList = useMemo(() => getProvinceList(country), [country]);
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(provinceList[0]?.id || 1);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);

  // Thailand districts
  const thaiDistricts = useMemo(
    () => (country === "TH" ? getDistrictsByProvince(selectedProvinceId) : []),
    [selectedProvinceId, country]
  );
  const thaiSubDistricts = useMemo(
    () => (country === "TH" && selectedDistrictId ? getSubDistrictsByDistrict(selectedDistrictId) : []),
    [selectedDistrictId, country]
  );

  // Japan cities
  const japanCityList = useMemo(
    () => (country === "JP" ? getJapanCitiesByPrefecture(selectedProvinceId) : []),
    [selectedProvinceId, country]
  );

  // Korea districts
  const koreaDistrictList = useMemo(
    () => (country === "KR" ? getKoreaDistrictsByProvince(selectedProvinceId) : []),
    [selectedProvinceId, country]
  );

  // China cities
  const chinaCityList = useMemo(
    () => (country === "CN" ? getChinaCitiesByProvince(selectedProvinceId) : []),
    [selectedProvinceId, country]
  );

  useEffect(() => {
    const first = provinceList[0];
    if (first) {
      setSelectedProvinceId(first.id);
      setSelectedDistrictId(null);
      onLocationChange({
        city: first.name_en, district: "",
        latitude: first.lat, longitude: first.lng, utc: first.utc,
      });
    }
  }, [country]);

  const handleProvinceChange = (value: string) => {
    const pid = Number(value);
    const prov = provinceList.find((p) => p.id === pid);
    setSelectedProvinceId(pid);
    setSelectedDistrictId(null);
    if (prov) {
      onLocationChange({
        city: prov.name_en, district: "",
        latitude: prov.lat, longitude: prov.lng, utc: prov.utc,
      });
    }
  };

  const provinceLabel = country === "JP" ? "Prefecture" : "Province";
  const districtLabel = country === "JP" ? "City / Ward" : country === "KR" ? "District (구/시/군)" : country === "CN" ? "City / District" : "District";

  return (
    <div className="space-y-2">
      <div className={`grid grid-cols-1 ${country === "TH" ? "md:grid-cols-3" : "md:grid-cols-2"} gap-2`}>
        {/* Province / Prefecture */}
        <Select value={String(selectedProvinceId)} onValueChange={handleProvinceChange}>
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

        {/* Thailand: District + Sub-district */}
        {country === "TH" && (
          <>
            <Select
              value={selectedDistrictId ? String(selectedDistrictId) : ""}
              onValueChange={(value) => {
                const did = Number(value);
                const dist = thaiDistricts.find((d) => d.id === did);
                const prov = provinceList.find((p) => p.id === selectedProvinceId);
                setSelectedDistrictId(did);
                onLocationChange({
                  city: prov?.name_en || "", district: dist?.name_en || "",
                  latitude: prov?.lat || "", longitude: prov?.lng || "", utc: "+07:00",
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="District (อำเภอ)" />
              </SelectTrigger>
              <SelectContent>
                {thaiDistricts.map((d) => (
                  <SelectItem key={d.id} value={String(d.id)}>
                    {d.name_en} ({d.name_th})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => {
                const sd = thaiSubDistricts.find((s) => s.id === Number(value));
                if (sd) {
                  const dist = thaiDistricts.find((d) => d.id === selectedDistrictId);
                  const prov = provinceList.find((p) => p.id === selectedProvinceId);
                  onLocationChange({
                    city: prov?.name_en || "",
                    district: `${dist?.name_en || ""}, ${sd.name_en}`,
                    latitude: prov?.lat || "", longitude: prov?.lng || "", utc: "+07:00",
                  });
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sub-district (ตำบล)" />
              </SelectTrigger>
              <SelectContent>
                {thaiSubDistricts.map((s) => (
                  <SelectItem key={s.id} value={String(s.id)}>
                    {s.name_en} ({s.name_th})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}

        {/* Japan: City / Ward */}
        {country === "JP" && japanCityList.length > 0 && (
          <Select
            onValueChange={(value) => {
              const city = japanCityList.find((c) => c.id === Number(value));
              if (city) {
                const pref = provinceList.find((p) => p.id === selectedProvinceId);
                onLocationChange({
                  city: pref?.name_en || "", district: `${city.name_en} (${city.name_ja})`,
                  latitude: city.lat, longitude: city.lng, utc: "+09:00",
                });
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="City / Ward (市区町村)" />
            </SelectTrigger>
            <SelectContent>
              {japanCityList.map((c) => (
                <SelectItem key={c.id} value={String(c.id)}>
                  {c.name_en} ({c.name_ja})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* Korea: District */}
        {country === "KR" && koreaDistrictList.length > 0 && (
          <Select
            onValueChange={(value) => {
              const dist = koreaDistrictList.find((d) => d.id === Number(value));
              if (dist) {
                const prov = provinceList.find((p) => p.id === selectedProvinceId);
                onLocationChange({
                  city: prov?.name_en || "", district: `${dist.name_en} (${dist.name_ko})`,
                  latitude: dist.lat, longitude: dist.lng, utc: "+09:00",
                });
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="District (구/시/군)" />
            </SelectTrigger>
            <SelectContent>
              {koreaDistrictList.map((d) => (
                <SelectItem key={d.id} value={String(d.id)}>
                  {d.name_en} ({d.name_ko})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* China: City / District */}
        {country === "CN" && chinaCityList.length > 0 && (
          <Select
            onValueChange={(value) => {
              const city = chinaCityList.find((c) => c.id === Number(value));
              if (city) {
                const prov = provinceList.find((p) => p.id === selectedProvinceId);
                onLocationChange({
                  city: prov?.name_en || "", district: `${city.name_en} (${city.name_zh})`,
                  latitude: city.lat, longitude: city.lng, utc: "+08:00",
                });
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="City / District (市/区)" />
            </SelectTrigger>
            <SelectContent>
              {chinaCityList.map((c) => (
                <SelectItem key={c.id} value={String(c.id)}>
                  {c.name_en} ({c.name_zh})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;
