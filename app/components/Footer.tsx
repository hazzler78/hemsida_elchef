import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elchef</h3>
            <p className="text-gray-400">
              Din egen elchef som hjälper dig spara pengar på elräkningen.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Snabb länkar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/rorligt-avtal" className="text-gray-400 hover:text-white">
                  Rörligt elprisavtal
                </Link>
              </li>
              <li>
                <Link href="/fast-avtal" className="text-gray-400 hover:text-white">
                  Fast elprisavtal
                </Link>
              </li>
              <li>
                <Link href="/foretag" className="text-gray-400 hover:text-white">
                  Företag
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-400 hover:text-white">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@elchef.se</li>
              <li>Telefon: 073-686 23 60</li>
              <li>Org.nr: 123456-7890</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Följ oss</h4>
            <div className="flex space-x-4">
              <a href="https://tiktok.com/@elchef" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                TikTok
              </a>
              <a href="https://instagram.com/elchef" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elchef.se. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
} 