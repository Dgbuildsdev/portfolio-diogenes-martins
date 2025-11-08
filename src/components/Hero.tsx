'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollIndicator from './ScrollIndicator'
import Typewriter from './Typewriter'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const downloadCV = () => {
    // Abre o currículo em uma nova aba para visualização/download
    window.open('/curriculo.html', '_blank')
  }

  const [text, setText] = useState('')
  const fullText = `const desenvolvedor = {
  nome: 'Diógenes Martins',
  habilidades: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB'],
  profissionalDedicado: true,
  aprendizagemRapida: true,
  solucionadorProblemas: true,
  contratavel: function(cargo) {
    return (
      this.profissionalDedicado && 
      this.solucionadorProblemas && 
      this.habilidades.length >= 5
    );
  }
};`

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image src="/svg/hero.svg" alt="" width={384} height={384} className="w-full h-full" priority />
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 w-72 h-72 opacity-20"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/svg/blur-23.svg" alt="" width={288} height={288} className="w-full h-full" priority />
        </motion.div>
        
        {/* Elementos decorativos adicionais */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-20 h-20 bg-purple-400/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full"
          animate={{ 
            y: [20, -20, 20],
            opacity: [1, 0, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                Olá,
                <br />
                Sou <span className="text-blue-400">Diógenes Martins</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 min-h-[2em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.4,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                Eu sou um profissional,{' '}
                <Typewriter
                  texts={[
                    'Desenvolvedor Full Stack',
                    'Desenvolvedor Frontend',
                    'Desenvolvedor Backend',
                    'Especialista em React',
                    'Especialista em Node.js'
                  ]}
                  className="text-blue-400 font-semibold"
                  speed={100}
                  deleteSpeed={50}
                  delay={2000}
                />
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/Dgbuildsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/diogenes-martins-dgbuildsdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:dgbuildsdev@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors hover:scale-105 transform"
              >
                CONTATAR
              </button>
              <button 
                onClick={downloadCV}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors flex items-center gap-2 hover:scale-105 transform"
              >
                <Download size={20} />
                CURRÍCULO
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <pre className="text-gray-300 overflow-hidden">
                <code>{text}</code>
                <span className="animate-pulse">|</span>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            QUEM SOU EU?
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  )
}