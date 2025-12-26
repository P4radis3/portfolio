"use client"

import { useEffect, useRef } from "react"

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let animationFrame = 0
    let pointCount = 20
    let maxDistance = 110
    let speed = 0.28
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = []

    const random = (min: number, max: number) => Math.random() * (max - min) + min

    const computeSettings = () => {
      if (width < 640) {
        // Mobile: minimal mesh
        pointCount = 24
        maxDistance = 85
        speed = 0.2
      } else if (width < 1024) {
        // Tablet: moderate mesh
        pointCount = 32
        maxDistance = 130
        speed = 0.28
      } else {
        // Desktop: richer mesh
        pointCount = 64
        maxDistance = 160
        speed = 0.35
      }
    }

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      // Reset transform before applying scale to avoid compounding on re-renders
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      // Use viewport dimensions to ensure full-viewport coverage
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.scale(dpr, dpr)
      // Update responsive settings based on viewport width
      computeSettings()
    }

    const seedNodes = () => {
      nodes.length = 0
      for (let i = 0; i < pointCount; i += 1) {
        nodes.push({
          x: random(0, width),
          y: random(0, height),
          vx: random(-speed, speed),
          vy: random(-speed, speed),
          r: random(1.2, 2.2),
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy

        if (a.x <= 0 || a.x >= width) a.vx *= -1
        if (a.y <= 0 || a.y >= height) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance
            ctx.strokeStyle = `rgba(185, 210, 255, ${alpha * 0.25})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = "rgba(200, 220, 255, 0.7)"
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      setSize()
      seedNodes()
    }

    setSize()
    seedNodes()
    draw()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />
}
