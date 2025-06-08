'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Hej! Jag är Grodan, din elchef. Hur kan jag hjälpa dig idag?', isUser: false }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [currentStreamingMessage, setCurrentStreamingMessage] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory, currentStreamingMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || isLoading) return

    // Add user message
    setChatHistory(prev => [...prev, { text: message, isUser: true }])
    setIsLoading(true)
    setCurrentStreamingMessage('')
    const userMessage = message
    setMessage('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      })

      if (!response.ok) throw new Error('Network response was not ok')
      if (!response.body) throw new Error('No response body')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullMessage = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        fullMessage += chunk
        setCurrentStreamingMessage(fullMessage)
      }

      // Add the complete message to chat history
      setChatHistory(prev => [...prev, { text: fullMessage, isUser: false }])
      setCurrentStreamingMessage('')
    } catch (err) {
      setChatHistory(prev => [...prev, { text: 'Tyvärr kunde jag inte svara just nu. Försök igen senare.', isUser: false }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Grodan - Din Elchef</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    msg.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-green-50 text-gray-900 border border-green-100'
                  }`}
                >
                  <div className={`${!msg.isUser ? 'whitespace-pre-wrap break-words' : ''}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {currentStreamingMessage && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg p-3 bg-gray-100 text-gray-900">
                  <div className="whitespace-pre-wrap break-words">
                    {currentStreamingMessage}
                  </div>
                </div>
              </div>
            )}
            {isLoading && !currentStreamingMessage && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg p-3 bg-gray-100 text-gray-900 italic opacity-70">
                  Skriver...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Skriv ditt meddelande..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0"
                disabled={isLoading}
              >
                Skicka
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  )
} 