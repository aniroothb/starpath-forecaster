import HoroscopeForm from "@/components/HoroscopeForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl animate-float">
        <HoroscopeForm />
      </div>
    </div>
  );
};

export default Index;