'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToNext = () => {
    if (isClient && typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  if (!isClient) {
    return (
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 opacity-0">
        <div className="flex flex-col items-center text-white/70 cursor-pointer">
          <span className="text-sm mb-2 font-light">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <motion.button
        onClick={scrollToNext}
        className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium">Role para baixo</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}