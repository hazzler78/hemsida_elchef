'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    name: 'Anna S.',
    text: 'Tack vare Elchef sparade jag över 2000 kr på min elräkning!',
    location: 'Stockholm'
  },
  {
    name: 'Erik L.',
    text: 'Enkelt och smidigt att byta leverantör. Rekommenderas varmt!',
    location: 'Göteborg'
  },
  {
    name: 'Maria K.',
    text: 'Bästa beslutet jag tagit för min ekonomi i år!',
    location: 'Malmö'
  }
]

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 p-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4">
                <p className="text-lg text-gray-600">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        onClick={scrollPrev}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        onClick={scrollNext}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  )
} 