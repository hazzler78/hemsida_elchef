import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rörligt Elprisavtal | Elchef',
  description: 'Jämför och teckna rörligt elprisavtal utan bindningstid. Få bättre elpris och spara pengar på din elräkning.',
  openGraph: {
    title: 'Rörligt Elprisavtal | Elchef',
    description: 'Jämför och teckna rörligt elprisavtal utan bindningstid. Få bättre elpris och spara pengar på din elräkning.',
    type: 'website',
  },
}

export default function RorligtAvtal() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Rörligt Elprisavtal</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fördelar med rörligt elpris</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Ingen bindningstid - du kan byta när som helst</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Följer marknadspriset - kan vara billigare när elpriserna är låga</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Transparenta priser utan dolda avgifter</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Flexibilitet att anpassa din förbrukning efter pris</span>
            </li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Vårt bästa rörliga avtal</h3>
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
                <span className="font-medium">Bindningstid:</span>
                <span>Ingen bindningstid</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.cheapenergy.se/elchef-rorligt/"
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
              <h3 className="text-lg font-medium mb-2">Vad är ett rörligt elpris?</h3>
              <p className="text-gray-600">
                Ett rörligt elpris följer marknadens utveckling och kan variera från månad till månad. 
                När elpriserna är låga på marknaden får du ett lägre pris, och när de är höga får du ett högre pris.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Kan jag byta avtal när som helst?</h3>
              <p className="text-gray-600">
                Ja, med våra rörliga avtal är du inte bunden till någon bindningstid. 
                Du kan byta leverantör eller avtal när det passar dig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 