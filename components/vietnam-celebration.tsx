"use client"

import { useEffect, useRef } from "react"

interface VietnamFlagDecorationProps {
  variant: 'light' | 'dark';
  density: 'low' | 'medium' | 'high';
}

export default function VietnamFlagDecoration({ variant, density }: VietnamFlagDecorationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create confetti particles
    const confettiColors = ["#e60019", "#ffff00", "#ffd1dc", "#ffffff"]
    const flags: Flag[] = []
    const confetti: Confetti[] = []

    // Create flag class
    class Flag {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 15 + Math.random() * 10
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = Math.random() * 0.001 - 0.0005
        this.opacity = 0.1 + Math.random() * 0.2
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = this.opacity

        // Draw simplified Vietnam flag
        ctx.fillStyle = "#e60019"
        ctx.fillRect(-this.size / 2, -this.size / 3, this.size, (this.size * 2) / 3)

        // Draw star
        ctx.fillStyle = "#ffff00"
        const starSize = this.size / 4
        drawStar(0, 0, 5, starSize, starSize / 2)

        ctx.restore()
      }

      update() {
        this.rotation += this.rotationSpeed
        this.y += 0.2

        if (this.y > canvas.height + this.size) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }
      }
    }

    // Create confetti class
    class Confetti {
      x: number
      y: number
      size: number
      color: string
      speed: number
      angle: number
      spin: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 3 + Math.random() * 5
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
        this.speed = 0.5 + Math.random() * 2
        this.angle = Math.random() * Math.PI * 2
        this.spin = Math.random() * 0.2 - 0.1
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.globalAlpha = 0.7
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        ctx.restore()
      }

      update() {
        this.y += this.speed
        this.angle += this.spin

        if (this.y > canvas.height + this.size) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }
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

    // Create flags and confetti
    for (let i = 0; i < 5; i++) {
      flags.push(new Flag())
    }

    for (let i = 0; i < 50; i++) {
      confetti.push(new Confetti())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update flags
      flags.forEach((flag) => {
        flag.update()
        flag.draw()
      })

      // Draw and update confetti
      confetti.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" aria-hidden="true" />
}
