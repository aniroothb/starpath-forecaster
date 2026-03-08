import { useState } from "react";
import { countries, type CountryCode } from "@/data/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NavbarProps {
  selectedCountry: CountryCode;
  onCountryChange: (country: CountryCode) => void;
}

const Navbar = ({ selectedCountry, onCountryChange }: NavbarProps) => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary">🔮 Horoscope</h1>
        <Select
          value={selectedCountry}
          onValueChange={(value) => onCountryChange(value as CountryCode)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.flag} {c.name_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};

export default Navbar;
