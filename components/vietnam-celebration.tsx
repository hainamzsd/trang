"use client"

import { useEffect, useRef } from "react"

type VietnamFlagDecorationProps = {
  variant?: "light" | "dark"
  density?: "low" | "medium" | "high"
  className?: string
}

export default function VietnamFlagDecoration({
  variant = "light",
  density = "low",
  className = "",
}: VietnamFlagDecorationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 2 // Make it taller for scrolling sections
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define colors based on variant
    const flagColor = variant === "light" ? "#e60019" : "#ff3b54"
    const starColor = variant === "light" ? "#ffda44" : "#ffe066"
    const opacity = variant === "light" ? 0.05 : 0.08

    // Define number of elements based on density
    let flagCount = 3
    if (density === "medium") flagCount = 5
    if (density === "high") flagCount = 8

    // Create flag elements
    const flags: Flag[] = []

    // Create flag class
    class Flag {
      x: number
      y: number
      size: number
      rotation: number
      type: "flag" | "star" | "outline"

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 30 + Math.random() * 40
        this.rotation = Math.random() * Math.PI * 2
        this.type = Math.random() > 0.6 ? "flag" : Math.random() > 0.5 ? "star" : "outline"
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = opacity

        if (this.type === "flag") {
          // Draw simplified Vietnam flag
          ctx.fillStyle = flagColor
          ctx.fillRect(-this.size / 2, -this.size / 3, this.size, (this.size * 2) / 3)

          // Draw star
          ctx.fillStyle = starColor
          const starSize = this.size / 4
          drawStar(0, 0, 5, starSize, starSize / 2)
        } else if (this.type === "star") {
          // Draw just a star
          ctx.fillStyle = starColor
          drawStar(0, 0, 5, this.size / 3, this.size / 6)
        } else {
          // Draw flag outline
          ctx.strokeStyle = flagColor
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.rect(-this.size / 2, -this.size / 3, this.size, (this.size * 2) / 3)
          ctx.stroke()

          // Draw star outline
          ctx.strokeStyle = starColor
          const starSize = this.size / 4
          drawStarOutline(0, 0, 5, starSize, starSize / 2)
        }

        ctx.restore()
      }
    }

    // Helper function to draw star
    function drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
      if (!ctx) return

      let rot = (Math.PI / 2) * 3
      let x = cx
      let y = cy
      const step = Math.PI / spikes

      ctx.beginPath()
      ctx.moveTo(cx, cy - outerRadius)

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }

      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath()
      ctx.fill()
    }

    // Helper function to draw star outline
    function drawStarOutline(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
      if (!ctx) return

      let rot = (Math.PI / 2) * 3
      let x = cx
      let y = cy
      const step = Math.PI / spikes

      ctx.beginPath()
      ctx.moveTo(cx, cy - outerRadius)

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }

      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath()
      ctx.stroke()
    }

    // Create flags
    for (let i = 0; i < flagCount; i++) {
      flags.push(new Flag())
    }

    // Draw flags
    flags.forEach((flag) => {
      flag.draw()
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant, density])

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`} aria-hidden="true" />
  )
}
