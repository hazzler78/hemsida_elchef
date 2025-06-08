'use client'

import { useState } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'private'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Här skulle vi normalt skicka formuläret till en API
    console.log('Form submitted:', formData)
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      type: 'private'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Kontakta oss</h1>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Skicka ett meddelande</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Jag är
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="private">Privatperson</option>
                  <option value="business">Företag</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Skicka meddelande
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Kontaktinformation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Telefon</h3>
                  <p className="text-gray-600">073-686 23 60</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">E-post</h3>
                  <p className="text-gray-600">info@elchef.se</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Organisationsnummer</h3>
                  <p className="text-gray-600">123456-7890</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Öppettider</h3>
                  <p className="text-gray-600">Måndag-Fredag: 09:00-17:00</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Följ oss</h2>
              <div className="space-y-4">
                <a
                  href="https://tiktok.com/@elchef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  TikTok
                </a>
                <a
                  href="https://instagram.com/elchef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 