import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Företag | Elchef',
  description: 'Företagsavtal för el. Få bättre elpris och spara pengar på din företags elräkning.',
  openGraph: {
    title: 'Företag | Elchef',
    description: 'Företagsavtal för el. Få bättre elpris och spara pengar på din företags elräkning.',
    type: 'website',
  },
}

export default function Foretag() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">FAST ELPRIS TILL FÖRETAG IDAG</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fastprisgaranti med lägsta elpris till företag</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Konkurrenskraftiga priser för företag</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Enkel administration och fakturahantering</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Personlig service och support</span>
            </li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Fastprisgaranti på ert elavtal!</h3>
            <div className="space-y-4">
              <p className="text-lg font-medium">
                Om ni hittar något billigare fastprisavtal på elmarknaden så prismatchar vi det och ger i tillägg 1 öre / kWh i extra rabatt.
              </p>
              <p className="text-sm text-gray-600">
                Gäller endast företag och ej i kombination med andra rabatterbjudanden.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.cheapenergy.se/elchef-foretag/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Kontakta oss för offert
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Vanliga frågor</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Vilka typer av företag kan teckna avtal?</h3>
              <p className="text-gray-600">
                Vi erbjuder avtal för alla typer av företag, från småföretag till större organisationer. 
                Kontakta oss för att få en skräddarsydd lösning för just ert företag.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Hur fungerar prismatchningen?</h3>
              <p className="text-gray-600">
                Om ni hittar ett billigare fastprisavtal från en annan leverantör, så matchar vi det priset 
                och ger er dessutom en extra rabatt på 1 öre per kWh. Detta gäller för privatkunder och 
                kan inte kombineras med andra rabatterbjudanden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 