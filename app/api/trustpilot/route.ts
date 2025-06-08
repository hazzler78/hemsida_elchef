import { NextResponse } from 'next/server'

const TRUSTPILOT_API_KEY = process.env.TRUSTPILOT_API_KEY

export async function GET() {
  if (!TRUSTPILOT_API_KEY) {
    return NextResponse.json(
      { error: 'Trustpilot API configuration missing' },
      { status: 500 }
    )
  }

  try {
    // Using the v2 API endpoint for elchef.se
    const response = await fetch(
      'https://api.trustpilot.com/v2/business-units/elchef.se/reviews?stars=4,5&perPage=6',
      {
        headers: {
          'Authorization': `Bearer ${TRUSTPILOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.error('Trustpilot API error:', await response.text())
      throw new Error('Failed to fetch reviews from Trustpilot')
    }

    const data = await response.json()
    
    // Transform the data to match our frontend needs
    const reviews = data.reviews.map((review: any) => ({
      id: review.id,
      stars: review.stars,
      text: review.text,
      author: review.consumer.displayName,
      date: review.createdAt,
    }))

    return NextResponse.json({ reviews })
  } catch (error) {
    console.error('Error fetching Trustpilot reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
} 