'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Blog() {
  const blogPosts = [
    {
      title: "Como começar no desenvolvimento Full Stack",
      excerpt: "Guia completo para iniciantes que querem se tornar desenvolvedores Full Stack, incluindo tecnologias, roadmap e dicas práticas.",
      date: "15 de Novembro, 2024",
      readTime: "5 min",
      category: "Desenvolvimento",
      slug: "como-comecar-desenvolvimento-full-stack",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&auto=format"
    },
    {
      title: "React vs Next.js: Qual escolher?",
      excerpt: "Comparação detalhada entre React e Next.js, suas diferenças, vantagens e quando usar cada um em seus projetos.",
      date: "10 de Novembro, 2024", 
      readTime: "7 min",
      category: "Frontend",
      slug: "react-vs-nextjs-qual-escolher",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop&auto=format"
    },
    {
      title: "Otimização de Performance em Node.js",
      excerpt: "Técnicas avançadas para otimizar a performance de aplicações Node.js, incluindo clustering, caching e monitoramento.",
      date: "5 de Novembro, 2024",
      readTime: "8 min", 
      category: "Backend",
      slug: "otimizacao-performance-nodejs",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&auto=format"
    }
  ]

  return (
    <section id="blog" className="py-20 px-6 bg-slate-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 right-10 w-72 h-72 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              BLOG
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Compartilho conhecimentos, experiências e insights sobre desenvolvimento de software
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal 
              key={post.slug}
              direction="up"
              delay={index * 0.2}
            >
              <motion.article 
                className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 backdrop-blur-sm
                         hover:bg-slate-800/80 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/20
                         transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-400/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Ler mais 
                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center mt-12">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg
                       hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
                       transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/25"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos os artigos
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}