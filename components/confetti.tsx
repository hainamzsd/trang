"use client"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

export function IndependenceConfetti() {
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.05}
          colors={["#DA251D", "#FFFF00"]}
        />
      )}
    </>
  )
}
