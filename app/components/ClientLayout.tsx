'use client'

import { Navigation } from './Navigation'
import { ChatBubble } from './ChatBubble'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
      <ChatBubble />
    </>
  )
} 