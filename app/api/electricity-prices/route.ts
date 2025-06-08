import { NextResponse } from 'next/server'

const PRICE_AREAS = ['SE1', 'SE2', 'SE3', 'SE4']
const AREA_NAMES = {
  'SE1': 'Norra Sverige',
  'SE2': 'Norra Mellansverige',
  'SE3': 'Södra Mellansverige',
  'SE4': 'Södra Sverige'
}

interface PriceRecord {
  SpotPriceDKK: number
  HourUTC: string
}

interface ProcessedPrice {
  price: number
  time: string
}

// Simulerad data för testning
const MOCK_DATA = {
  'SE1': {
    currentPrice: 45.23,
    maxPrice: 52.15,
    minPrice: 38.90,
    prices: Array.from({ length: 24 }, (_, i) => ({
      price: 45.23 + Math.sin(i / 24 * Math.PI * 2) * 10,
      time: new Date(Date.now() - i * 3600000).toISOString()
    }))
  },
  'SE2': {
    currentPrice: 48.75,
    maxPrice: 55.30,
    minPrice: 42.15,
    prices: Array.from({ length: 24 }, (_, i) => ({
      price: 48.75 + Math.sin(i / 24 * Math.PI * 2) * 10,
      time: new Date(Date.now() - i * 3600000).toISOString()
    }))
  },
  'SE3': {
    currentPrice: 52.30,
    maxPrice: 58.90,
    minPrice: 45.75,
    prices: Array.from({ length: 24 }, (_, i) => ({
      price: 52.30 + Math.sin(i / 24 * Math.PI * 2) * 10,
      time: new Date(Date.now() - i * 3600000).toISOString()
    }))
  },
  'SE4': {
    currentPrice: 55.80,
    maxPrice: 62.45,
    minPrice: 49.30,
    prices: Array.from({ length: 24 }, (_, i) => ({
      price: 55.80 + Math.sin(i / 24 * Math.PI * 2) * 10,
      time: new Date(Date.now() - i * 3600000).toISOString()
    }))
  }
}

export async function GET() {
  try {
    console.log('Starting to fetch electricity prices...')
    const results = []

    for (const area of PRICE_AREAS) {
      try {
        console.log(`Processing area ${area}...`)
        const areaData = MOCK_DATA[area as keyof typeof MOCK_DATA]
        
        if (!areaData) {
          console.error(`No data found for ${area}`)
          continue
        }

        results.push({
          area,
          areaName: AREA_NAMES[area as keyof typeof AREA_NAMES],
          currentPrice: areaData.currentPrice.toFixed(2),
          maxPrice: areaData.maxPrice.toFixed(2),
          minPrice: areaData.minPrice.toFixed(2),
          prices: areaData.prices
        })

        console.log(`Successfully processed ${area}:`, {
          currentPrice: areaData.currentPrice,
          maxPrice: areaData.maxPrice,
          minPrice: areaData.minPrice,
          priceCount: areaData.prices.length
        })
      } catch (areaError) {
        console.error(`Error processing area ${area}:`, areaError)
      }
    }

    if (results.length === 0) {
      console.error('No valid results found for any area')
      return NextResponse.json(
        { error: 'Kunde inte hitta några giltiga elpriser' },
        { status: 404 }
      )
    }

    const now = new Date()
    const response = {
      displayDate: now.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      lastUpdated: now.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      areas: results
    }

    console.log('Final response:', JSON.stringify(response, null, 2))
    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in electricity prices API:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod vid hämtning av elpriser' },
      { status: 500 }
    )
  }
} 