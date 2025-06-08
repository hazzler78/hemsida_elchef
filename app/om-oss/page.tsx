import Image from 'next/image'

export default function OmOss() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Om Elchef</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Vår historia</h2>
            <p className="text-gray-600 mb-6">
              Elchef grundades 2023 med ett tydligt mål: att göra det enklare för svenska hushåll 
              och företag att spara pengar på sina elräkningar. Vi såg ett behov av transparens 
              och enkelhet i en marknad som ofta upplevs som komplicerad.
            </p>
            <p className="text-gray-600">
              Idag hjälper vi tusentals kunder att hitta bättre elavtal och spara pengar på sina 
              elräkningar. Vår plattform gör det enkelt att jämföra och byta leverantör, 
              allt för att du ska kunna ta kontroll över dina elkostnader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Vår vision</h2>
              <p className="text-gray-600">
                Vi vill göra det enkelt för alla att vara sin egen elchef. Genom att erbjuda 
                transparenta priser och enkel jämförelse av elavtal, hjälper vi dig att ta 
                kontroll över dina elkostnader och spara pengar.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Våra värderingar</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Transparens i alla priser och villkor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enkelhet i alla processer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Kundfokus i allt vi gör</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hållbarhet i våra erbjudanden</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Vårt team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                <h3 className="font-semibold mb-2">Mathias</h3>
                <p className="text-gray-600">VD & Grundare</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                <h3 className="font-semibold mb-2">Anna</h3>
                <p className="text-gray-600">Kundservice</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                <h3 className="font-semibold mb-2">Erik</h3>
                <p className="text-gray-600">Elmarknadsexpert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 