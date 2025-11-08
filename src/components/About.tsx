'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 right-5 w-80 h-40 opacity-20"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/svg/section.svg" alt="" width={320} height={160} className="w-full h-full" />
        </motion.div>
        <motion.div 
          className="absolute bottom-5 left-5 w-60 h-60 opacity-15"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/svg/blur-23.svg" alt="" width={240} height={240} className="w-full h-full" />
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre Mim
              </h2>
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Olá, meu nome é <span className="text-blue-400 font-semibold">Diogenes Martins</span> e tenho 30 anos. 
                Sou um desenvolvedor Full Stack apaixonado pelo poder transformador da tecnologia e estou 
                comprometido em criar soluções inovadoras e eficientes.
              </p>
              
              <p>
                Com experiência em desenvolvimento web moderno, trabalho com tecnologias como React, Next.js, 
                Node.js, TypeScript e bancos de dados relacionais e não-relacionais. Tenho uma paixão especial 
                por criar interfaces de usuário intuitivas e sistemas backend robustos.
              </p>

              <p>
                Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, 
                contribuindo com soluções criativas e código de qualidade para projetos impactantes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="text-blue-400 font-semibold text-lg mb-2">Frontend</h3>
                <p className="text-gray-300 text-sm">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="text-blue-400 font-semibold text-lg mb-2">Backend</h3>
                <p className="text-gray-300 text-sm">
                  Node.js, Express, PostgreSQL, MongoDB
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-blue-400/30 overflow-hidden">
                <Image
                  src="/profile.jpg" // Adicione sua foto aqui
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}