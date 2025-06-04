"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const vietnameseResponses = [
  "Xin chào! Cảm ơn bạn đã liên hệ với Wool Forest. Chúng tôi có thể giúp gì cho bạn?",
  "Chúng tôi chuyên cung cấp len cao cấp và các sản phẩm Việt Nam chất lượng.",
  "Bạn có thể xem các sản phẩm của chúng tôi trên website hoặc liên hệ qua Facebook để được tư vấn chi tiết.",
  "Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi!",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy để lại thông tin liên hệ để được tư vấn tốt nhất.",
  "Wool Forest cam kết mang đến những sản phẩm chất lượng nhất cho khách hàng.",
]

export default function FloatingBubbles() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý ảo của Wool Forest. Tôi có thể giúp gì cho bạn?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFacebookClick = () => {
    window.open("https://m.me/61573046981705", "_blank")
  }

  const handleTikTokClick = () => {
    window.open("https://www.tiktok.com/@wofo.boutique", "_blank")
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    const randomResponse = vietnameseResponses[Math.floor(Math.random() * vietnameseResponses.length)]

    const botMessage: Message = {
      id: messages.length + 2,
      text: randomResponse,
      isUser: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInputMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Bubbles */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Facebook Messenger Bubble */}
        <Button
          onClick={handleFacebookClick}
          size="icon"
          className="w-16 h-16 rounded-full bg-[#0084FF] hover:bg-[#0078E9] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0 flex items-center justify-center"
        >
          <Image
            src="/facebook.ico"
            alt="Facebook"
            width={32}
            height={32}
            className="w-8 h-8 brightness-0 invert"
          />
        </Button>

        {/* TikTok Bubble */}
        <Button
          onClick={handleTikTokClick}
          size="icon"
          className="w-16 h-16 rounded-full bg-[#010101] hover:bg-[#121212] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0 flex items-center justify-center"
        >
          <Image
            src="/tiktok.ico"
            alt="TikTok"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Button>

        {/* Chatbot Bubble */}
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          size="icon"
          className="w-16 h-16 rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0 flex items-center justify-center"
        >
          <Image
            src="/chat.ico"
            alt="Chat"
            width={32}
            height={32}
            className="w-8 h-8 brightness-0 invert"
          />
        </Button>
      </div>

      {/* Floating Chat Box */}
      <div
        className={cn(
          "fixed bottom-6 right-24 w-96 bg-white rounded-lg shadow-2xl transition-all duration-500 ease-in-out z-40",
          isChatOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20 pointer-events-none"
        )}
      >
        <div className="p-4 border-b bg-pink-500 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Image
              src="/chat.ico"
              alt="Chat"
              width={24}
              height={24}
              className="w-6 h-6 brightness-0 invert"
            />
            <h3 className="font-semibold">Trợ lý Wool Forest</h3>
          </div>
        </div>

        <div className="flex flex-col h-96">
          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={cn(
                      "max-w-xs px-4 py-2 rounded-lg",
                      message.isUser
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập tin nhắn của bạn..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-pink-500 hover:bg-pink-600">
                Gửi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
