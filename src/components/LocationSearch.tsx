import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { allLocations, type LocationEntry } from "@/data/allLocations";
import type { CountryCode } from "@/data/countries";

interface LocationSearchProps {
  onSelect: (location: LocationEntry) => void;
  onCountryChange: (country: CountryCode) => void;
}

const LocationSearch = ({ onSelect, onCountryChange }: LocationSearchProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (query.length < 1) return [];
    const q = query.toLowerCase();
    return allLocations
      .filter(
        (loc) =>
          loc.name_en.toLowerCase().includes(q) ||
          loc.name_local.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search city or province..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="pl-9"
        />
      </div>
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-md max-h-60 overflow-y-auto">
          {results.map((loc) => (
            <button
              key={loc.id}
              type="button"
              className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground text-sm flex items-center gap-2 transition-colors"
              onMouseDown={(e) => {
                e.preventDefault();
                onCountryChange(loc.country);
                onSelect(loc);
                setQuery(`${loc.countryFlag} ${loc.name_en}`);
                setIsOpen(false);
              }}
            >
              <span>{loc.countryFlag}</span>
              <span className="font-medium">{loc.name_en}</span>
              <span className="text-muted-foreground text-xs">({loc.name_local})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
