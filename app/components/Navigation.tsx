'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Hem', href: '/' },
  { name: 'Rörligt elprisavtal', href: '/rorligt-avtal' },
  { name: 'Fast elprisavtal', href: '/fast-avtal' },
  { name: 'Företag', href: '/foretag' },
  { name: 'Om Elchef.se', href: '/om-oss' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-blue-600">Elchef</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Öppna huvudmeny</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/kontakt"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
          >
            Kontakta oss
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="relative lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-3xl font-bold text-blue-600">Elchef</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Stäng meny</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <nav className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-4 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/kontakt"
                    className="-mx-3 block rounded-lg px-3 py-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontakta oss
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 