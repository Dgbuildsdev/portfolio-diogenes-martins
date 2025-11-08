'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Retorna um placeholder durante SSR
  if (!isClient) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-blue-900/20" />
      </div>
    )
  }

  // Posições estáticas fixas para garantir consistência
  const particles = [
    { id: 1, left: 10, top: 20 }, { id: 2, left: 85, top: 15 }, { id: 3, left: 65, top: 45 }, 
    { id: 4, left: 25, top: 70 }, { id: 5, left: 90, top: 80 }, { id: 6, left: 5, top: 55 }, 
    { id: 7, left: 75, top: 25 }, { id: 8, left: 45, top: 85 }, { id: 9, left: 15, top: 10 }, 
    { id: 10, left: 95, top: 35 }, { id: 11, left: 35, top: 60 }, { id: 12, left: 70, top: 90 },
    { id: 13, left: 55, top: 5 }, { id: 14, left: 20, top: 40 }, { id: 15, left: 80, top: 65 }, 
    { id: 16, left: 40, top: 95 }, { id: 17, left: 60, top: 30 }, { id: 18, left: 30, top: 75 }
  ]

  const orbs = [
    { id: 1, left: 20, top: 30, size: 80 },
    { id: 2, left: 70, top: 60, size: 120 },
    { id: 3, left: 40, top: 80, size: 60 },
    { id: 4, left: 85, top: 20, size: 100 }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-blue-900/20" />
      
      {/* Small floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (particle.id % 3),
            repeat: Infinity,
            delay: particle.id * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-600/10 blur-xl"
          initial={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            width: orb.size,
            height: orb.size,
            opacity: 0
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6 + orb.id,
            repeat: Infinity,
            delay: orb.id * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}