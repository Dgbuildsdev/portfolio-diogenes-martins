'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  const education = [
    {
      period: "Concluído - 2024",
      title: "DESENVOLVEDOR FRONT END",
      institution: "Dev Club",
      description: "Formação completa em desenvolvimento frontend com foco em React, JavaScript e tecnologias modernas.",
      type: "Curso"
    },
    {
      period: "Concluído - 2025",
      title: "DESENVOLVEDOR FULL STACK",
      institution: "Dev Club",
      description: "Formação completa em desenvolvimento full stack, abrangendo frontend, backend e banco de dados.",
      type: "Curso"
    },
    {
      period: "2013 - 2016",
      title: "CERTIFICADO DE ENSINO MÉDIO",
      institution: "Escola Estadual Professora Juvenília Ferreira dos Santos",
      description: "Conclusão do ensino médio com foco em ciências da computação e preparação para o ensino superior.",
      type: "Formação"
    },
    {
      period: "2024 - Atual",
      title: "CURSANDO CIENCIAS DA COMPUTAÇÃO",
      institution: "Estácio",
      description: "Cursando o 3º período do ensino superior.",
      type: "Formação"
    }
  ]

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Formação
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-400/30"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 z-10">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse-slow opacity-50"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/30 transition-colors">
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-2">
                      <Calendar size={16} />
                      {item.period}
                    </div>
                    
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-medium mb-3">
                      <GraduationCap size={14} />
                      {item.type}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-blue-300 font-semibold mb-3">
                      {item.institution}
                    </h4>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certificações & Conquistas
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Certificação React - Dev Club",
              "Certificação Node.js - Dev Club", 
              "Certificação Full Stack - Dev Club",
              "Git & GitHub Essentials",
              "TypeScript Fundamentals",
              "Database Design & Management"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-400/20 rounded-lg p-4 text-center hover:border-blue-400/40 transition-colors"
              >
                <GraduationCap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-medium text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}