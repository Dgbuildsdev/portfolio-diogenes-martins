'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: "Nov 2025 - Atual",
      position: "DESENVOLVEDOR FULL STACK",
      company: "HSK SOLUÇÕES TECNOLÓGICAS LTDA",
      description: "Desenvolvimento de interfaces modernas e responsivas utilizando React, Next.js e Tailwind CSS.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      period: "Jan 2024 - Nov 2024",
      position: "DESENVOLVEDOR FULL STACK",
      company: "Fiverr / Workana (freelance)",
      description: "Desenvolvimento completo de aplicações web, desde o frontend até o backend e banco de dados.",
      technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "Express"],
    },
    {
      period: "Jan 2024 - Out 2025",
      position: "DESENVOLVEDOR AUTÔNOMO",
      company: "Desenvolvendo algo no dia a dia",
      description: "Projetos pessoais e estudos focados em aprimorar habilidades em desenvolvimento web moderno.",
      technologies: ["JavaScript", "TypeScript", "React", "Node.js"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experiências
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-400/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 z-10"
                  whileInView={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } group`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 backdrop-blur-sm
                                hover:bg-slate-800/80 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/20
                                transition-all duration-300 relative overflow-hidden">
                    
                    {/* Efeito de glow no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Efeito de borda animada */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300"
                         style={{
                           background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                           backgroundSize: '200% 200%',
                           animation: 'gradient-shift 3s ease infinite'
                         }}>
                    </div>
                    
                    <div className="relative z-10">
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <MapPin size={16} />
                      {exp.company}
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}