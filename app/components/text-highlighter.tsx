"use client"

import Link from 'next/link'

interface TextHighlighterProps {
  text: string
}

export function TextHighlighter({ text }: TextHighlighterProps) {
  const highlightText = (text: string) => {
    // Create a case-insensitive regex pattern for all keywords
    const keywords = [
      'Wool Forest',
      'học móc len',
      'Len Milk Cotton',
      'Len Cotton',
      'Len Sợi Tổng Hợp',
      'Chart móc len'
    ]
    const pattern = new RegExp(`(${keywords.join('|')})`, 'gi')
    
    // Split text into parts based on the keywords
    const parts = text.split(pattern)
    
    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase()
      
      if (lowerPart === 'wool forest') {
        return (
          <Link 
            key={index} 
            href="/"
            className="text-pink-800 font-semibold hover:text-pink-600 transition-colors"
          >
            {part}
          </Link>
        )
      }
      if (lowerPart === 'học móc len') {
        return (
          <Link 
            key={index} 
            href="/post2"
            className="text-pink-800 font-semibold hover:text-pink-600 transition-colors"
          >
            {part}
          </Link>
        )
      }
      if (lowerPart === 'chart móc len') {
        return (
          <Link 
            key={index} 
            href="/post1"
            className="text-pink-800 font-semibold hover:text-pink-600 transition-colors"
          >
            {part}
          </Link>
        )
      }
      if (lowerPart === 'len milk cotton' || lowerPart === 'len cotton' || lowerPart === 'len sợi tổng hợp') {
        return (
          <Link 
            key={index} 
            href="/products"
            className="text-pink-800 font-semibold hover:text-pink-600 transition-colors"
          >
            {part}
          </Link>
        )
      }
      return part
    })
  }

  return <>{highlightText(text)}</>
} 