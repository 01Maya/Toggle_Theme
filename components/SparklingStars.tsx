'use client'

import React, { useState, useEffect, useCallback } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  rotation: number
  color: string
}

export default function SparklingStars() {
  const [stars, setStars] = useState<Star[]>([])

  const createStar = useCallback((x: number, y: number): Star => {
    const pastelColors = [
      '#FFB3BA', // Light Pink
      '#BAFFC9', // Light Green
      '#BAE1FF', // Light Blue
      '#FFFFBA', // Light Yellow
      '#FFDFBA', // Light Peach
    ];
    return {
      id: Math.random(),
      x,
      y,
      size: Math.random() * 20 + 10, // Increased size range from (5-15) to (10-30)
      opacity: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 360,
      color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
    };
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newStars = Array.from({ length: 3 }, () => createStar(e.clientX, e.clientY))
      setStars(prevStars => [...prevStars, ...newStars])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [createStar])

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setStars(prevStars =>
        prevStars
          .map(star => ({
            ...star,
            y: star.y - 1,
            opacity: star.opacity - 0.01, // Slowed down the fade-out
            size: star.size - 0.2, // Slowed down the size reduction
          }))
          .filter(star => star.opacity > 0 && star.size > 0)
      )
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [stars])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
              fill={star.color}
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

