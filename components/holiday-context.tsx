"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type HolidayPopupContextType = {
  isOpen: boolean
  openPopup: () => void
  closePopup: () => void
}

const HolidayPopupContext = createContext<HolidayPopupContextType | undefined>(undefined)

export function HolidayPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem("hasSeenHolidayPopup")
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Set flag in localStorage so it only shows automatically once
        localStorage.setItem("hasSeenHolidayPopup", "true")
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  return (
    <HolidayPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </HolidayPopupContext.Provider>
  )
}

export function useHolidayPopup() {
  const context = useContext(HolidayPopupContext)
  if (context === undefined) {
    throw new Error("useHolidayPopup must be used within a HolidayPopupProvider")
  }
  return context
}
