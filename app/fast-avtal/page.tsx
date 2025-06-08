import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast Elprisavtal | Elchef',
  description: 'Teckna fast elprisavtal och få förutsägbar kostnad hela året. Skydd mot prisökningar och enkel budgetplanering.',
  openGraph: {
    title: 'Fast Elprisavtal | Elchef',
    description: 'Teckna fast elprisavtal och få förutsägbar kostnad hela året. Skydd mot prisökningar och enkel budgetplanering.',
    type: 'website',
  },
}

export default function FastAvtal() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Fast Elprisavtal</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fördelar med fast elpris</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Förutsägbar kostnad - samma pris hela året</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Skydd mot prisökningar på elmarknaden</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Enkel budgetplanering</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Ingen överraskning på elräkningen</span>
            </li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Vårt bästa fastprisavtal</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Pris per kWh:</span>
                <span className="text-2xl font-bold text-blue-600">Marknadspris</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Månadsavgift:</span>
                <span>0 kr/månad</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Påslag:</span>
                <span>0 kr/kWh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Avtalsperiod:</span>
                <span>3 månader - 10 år</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Fastprisgaranti</h3>
            <div className="space-y-4">
              <p className="text-lg font-medium">
                Om ni hittar något billigare fastprisavtal på elmarknaden så prismatchar vi det och ger i tillägg 1 öre / kWh i extra rabatt*
              </p>
              <p className="text-sm text-gray-600">
                * Gäller endast privatkunder och ej i kombination med andra rabatterbjudanden.
              </p>
              <p className="text-lg font-bold text-blue-600">
                – Bara en kan vara billigast!
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.svealandselbolag.se/elchef-fastpris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Teckna avtal nu
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Vanliga frågor</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Vad är ett fast elpris?</h3>
              <p className="text-gray-600">
                Med ett fast elpris betalar du samma pris per kilowattimme under hela avtalsperioden, 
                oavsett hur elpriserna utvecklas på marknaden. Det ger dig trygghet och förutsägbarhet i din budget.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Hur lång är avtalsperioden?</h3>
              <p className="text-gray-600">
                Vi erbjuder flexibla avtalsperioder från 3 månader upp till 10 år. Du kan välja den 
                period som passar dig bäst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 