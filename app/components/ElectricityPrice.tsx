'use client'

import { useState, useEffect } from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

// Uppdaterad lista med exempelstäder och postnummer
const AREA_DETAILS = {
  'SE1': {
    name: 'Norra Sverige',
    examples: ['Luleå', 'Umeå', 'Skellefteå', 'Östersund', 'Sundsvall', 'Härnösand'],
    postalCodes: ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
  },
  'SE2': {
    name: 'Norra Mellansverige',
    examples: ['Arvika', 'Karlstad', 'Falun', 'Gävle', 'Västerås', 'Örebro'],
    postalCodes: ['67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89']
  },
  'SE3': {
    name: 'Södra Mellansverige',
    examples: ['Stockholm', 'Uppsala', 'Eskilstuna', 'Norrköping', 'Linköping', 'Jönköping'],
    postalCodes: ['08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66']
  },
  'SE4': {
    name: 'Södra Sverige',
    examples: ['Malmö', 'Helsingborg', 'Lund', 'Kristianstad', 'Halmstad', 'Göteborg'],
    postalCodes: ['01', '02', '03', '04', '05', '06', '07', '09']
  }
}

interface ApiResponse {
  displayDate: string
  lastUpdated: string
  areas: Array<{
    area: string
    areaName: string
    currentPrice: string
    maxPrice: string
    minPrice: string
    prices: Array<{
      price: number
      time: string
    }>
  }>
}

export default function ElectricityPrice() {
  const [postalCode, setPostalCode] = useState('')
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [areaData, setAreaData] = useState<ApiResponse['areas'][0] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log('Fetching electricity prices...')
        const response = await fetch('/api/electricity-prices')
        console.log('API Response status:', response.status)
        
        if (!response.ok) {
          const errorData = await response.json()
          console.error('API Error:', errorData)
          throw new Error(errorData.error || 'Kunde inte hämta elpriser')
        }

        const data: ApiResponse = await response.json()
        console.log('API Response data:', data)
        setApiData(data)
      } catch (err) {
        console.error('Error fetching prices:', err)
        setError(err instanceof Error ? err.message : 'Ett fel uppstod vid hämtning av elpriser')
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
  }, [])

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 3) {
      setPostalCode(value)
      setError(null)

      // Hantera både tvåsiffriga och tresiffriga postnummer
      if (value.length >= 2) {
        const prefix = value.substring(0, 2)
        console.log('Postal code:', value, 'Prefix:', prefix)
        
        // Hitta område baserat på exakt matchning av postnummerprefix
        const area = Object.entries(AREA_DETAILS).find(([, details]) => 
          details.postalCodes.includes(prefix)
        )?.[0]

        console.log('Mapped to area:', area)
        setSelectedArea(area || null)

        if (area && apiData) {
          const data = apiData.areas.find(a => a.area === area)
          console.log('Selected area:', area, 'Data:', data)
          setAreaData(data || null)
        } else {
          setAreaData(null)
          if (!area) {
            setError('Inget prisområde hittades för detta postnummer. Kontrollera att du har angett rätt postnummer.')
          }
        }
      } else {
        setSelectedArea(null)
        setAreaData(null)
      }
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Aktuella elpriser</h2>
        {apiData && (
          <p className="text-sm text-gray-500 mb-4">
            Uppdaterad: {apiData.lastUpdated}
          </p>
        )}
        
        <div className="mb-6">
          <label htmlFor="postalCode" className="block text-sm font-medium mb-2">
            Ange ditt postnummer
          </label>
          <Input
            id="postalCode"
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            placeholder="Ange de första två siffrorna i ditt postnummer (t.ex. 08 för Stockholm)"
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-2">
            Ange de första två siffrorna i ditt postnummer för att se priserna i ditt område
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {loading && (
          <div className="text-center py-4">
            <p>Hämtar elpriser...</p>
          </div>
        )}

        {selectedArea && areaData ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                {AREA_DETAILS[selectedArea as keyof typeof AREA_DETAILS].name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                T.ex. {AREA_DETAILS[selectedArea as keyof typeof AREA_DETAILS].examples.join(', ')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-sm font-medium text-gray-500">Aktuellt pris</h4>
                <p className="text-2xl font-bold mt-1">{areaData.currentPrice} kr/kWh</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-sm font-medium text-gray-500">Högsta pris</h4>
                <p className="text-2xl font-bold mt-1">{areaData.maxPrice} kr/kWh</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-sm font-medium text-gray-500">Lägsta pris</h4>
                <p className="text-2xl font-bold mt-1">{areaData.minPrice} kr/kWh</p>
              </div>
            </div>
          </div>
        ) : !error && !loading && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prisområden i Sverige</h3>
            <ScrollArea className="h-[300px]">
              {Object.entries(AREA_DETAILS).map(([area, details]) => (
                <div key={area} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium">{details.name} ({area})</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    T.ex. {details.examples.join(', ')}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Postnummer: {details.postalCodes.join(', ')}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </div>
        )}
      </Card>
    </div>
  )
} 