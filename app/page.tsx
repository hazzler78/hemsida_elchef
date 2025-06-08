import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./components/Carousel";
import ElectricityPrice from './components/ElectricityPrice';
import { CheckCircleIcon, BoltIcon, CurrencyDollarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Spar pengar på din elräkning,{" "}
            <span className="text-blue-200">bli din egen elchef!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
            Gör det enkelt för dig själv! Välj ett av våra rekommenderade avtal här och bli din egen ELCHEF!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/rorligt-avtal"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Rörligt Månadspris
            </Link>
            <Link
              href="/fast-avtal"
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fastpris
            </Link>
          </div>
        </div>
      </section>

      {/* Electricity Price Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ElectricityPrice />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Varför välja Elchef?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enkelt byte</h3>
              <p className="text-gray-600">Vi sköter allt pappersarbete åt dig. Inga krångel, bara enkelt!</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <BoltIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bästa priset</h3>
              <p className="text-gray-600">Vi hjälper dig hitta det bästa elpriset för just dina behov.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <CurrencyDollarIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inga dolda kostnader</h3>
              <p className="text-gray-600">Transparenta priser utan överraskningar.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Säker och pålitlig</h3>
              <p className="text-gray-600">Samarbetar med Sveriges mest pålitliga elleverantörer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Så fungerar det
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Välj avtal</h3>
              <p className="text-gray-600">Välj mellan rörligt eller fast pris baserat på dina behov.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Fyll i uppgifter</h3>
              <p className="text-gray-600">Ange dina uppgifter för att komma igång.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Spara pengar</h3>
              <p className="text-gray-600">Vi sköter bytet och du börjar spara direkt!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Några följare som vi har hjälpt!
          </h2>
          <div className="max-w-6xl mx-auto">
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
}
