'use client'

const reviews = [
  {
    id: '1',
    stars: 5,
    text: 'Utmärkt service! Hjälpte mig att hitta ett bättre elavtal och spara pengar.',
    author: 'Anna S.',
    date: '2024-03-15'
  },
  {
    id: '2',
    stars: 5,
    text: 'Mycket nöjd med Elchef. Enkel och snabb process för att byta leverantör.',
    author: 'Johan L.',
    date: '2024-03-10'
  },
  {
    id: '3',
    stars: 5,
    text: 'Bästa tjänsten för att jämföra elavtal. Rekommenderas varmt!',
    author: 'Maria K.',
    date: '2024-03-05'
  }
]

export default function TrustpilotReviews() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Vad våra kunder säger
          </h2>
          <div className="mt-4">
            <span className="text-xl font-semibold text-gray-600">Trustpilot</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < review.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {review.author}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString('sv-SE')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 