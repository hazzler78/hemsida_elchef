import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/hero.png"
            alt="Elchef - Spara på elen"
            width={900}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg mb-8 object-cover"
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hitta ditt bästa elavtal
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Jämför och byt enkelt till ett bättre elavtal. Vi hjälper dig att spara pengar på din elkostnad.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/rorligt-avtal"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Jämför avtal
            </Link>
            <Link href="/om-oss" className="text-sm font-semibold leading-6 text-gray-900">
              Läs mer om oss <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="rounded-xl bg-gray-900/5 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  <p className="mb-4">✓ Jämför olika elavtal</p>
                  <p className="mb-4">✓ Hitta bästa priset</p>
                  <p className="mb-4">✓ Enkel och snabb bytprocess</p>
                  <p>✓ Säker och pålitlig service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 