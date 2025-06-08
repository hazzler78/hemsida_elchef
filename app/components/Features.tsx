import { BoltIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Spara på din elkostnad',
    description: 'Jämför och hitta det bästa elavtalet för just ditt behov. Vi hjälper dig att spara pengar på din elkostnad.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Enkel och snabb',
    description: 'Med vår tjänst kan du enkelt jämföra olika elavtal och byta leverantör på bara några minuter.',
    icon: BoltIcon,
  },
  {
    name: 'Säker och pålitlig',
    description: 'Vi samarbetar endast med pålitliga elbolag och säkerställer att du får bästa möjliga service.',
    icon: ShieldCheckIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Fördelar</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Varför välja Elchef?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vi hjälper dig att hitta det bästa elavtalet för ditt hem eller företag.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">Spara på din elkostnad</h3>
              <p className="mt-4 text-base text-gray-600">
                Jämför och hitta det bästa elavtalet för just ditt behov.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">Enkel och snabb</h3>
              <p className="mt-4 text-base text-gray-600">
                Byta leverantör på bara några minuter.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">Säker och pålitlig</h3>
              <p className="mt-4 text-base text-gray-600">
                Vi samarbetar endast med pålitliga elbolag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 