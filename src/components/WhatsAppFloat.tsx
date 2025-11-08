'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const phoneNumber = "+5534998864609" // Seu número no formato internacional
  const message = "Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades."
  
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2, // Aparece após 2 segundos
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 group relative overflow-hidden"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 15px 40px rgba(34, 197, 94, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <MessageCircle size={24} className="md:w-7 md:h-7 relative z-10" />
        
        {/* Tooltip - apenas desktop */}
        <motion.div
          className="hidden md:block absolute right-full mr-4 top-1/2 transform -translate-y-1/2 
                     bg-gray-800 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     pointer-events-none shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          💬 Fale comigo no WhatsApp!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                          border-4 border-transparent border-l-gray-800"></div>
        </motion.div>
        
        {/* Pulse Rings */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full -z-10"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-green-300 rounded-full -z-20"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.button>
    </motion.div>
  )
}