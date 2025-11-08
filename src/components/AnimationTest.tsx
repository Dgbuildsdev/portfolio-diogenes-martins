'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimationTest() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg text-sm">
      <p>Teste de Animação:</p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="w-4 h-4 bg-green-400 rounded-full mt-2"
      />
      <p className="mt-2">
        {typeof window !== 'undefined' ? '✅ Cliente' : '❌ Servidor'}
      </p>
    </div>
  )
}