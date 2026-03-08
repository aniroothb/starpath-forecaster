import { useState } from "react";
import HoroscopeForm from "@/components/HoroscopeForm";
import Navbar from "@/components/Navbar";
import type { CountryCode } from "@/data/countries";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("TH");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl animate-float">
          <HoroscopeForm selectedCountry={selectedCountry} />
        </div>
      </div>
    </div>
  );
};

export default Index;
