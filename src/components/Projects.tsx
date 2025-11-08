'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import ProjectImage from './ProjectImage'
import { useState, useMemo } from 'react'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('Todos')

  const projects = useMemo(() => [
    {
      name: "DevBurger",
      description: "Desenvolvi um sistema web full-stack chamado DevBurger, um sistema de controle de pedidos de uma Hamburgueria completa.",
      technologies: ["Express", "MongoDB", "NodeJS", "React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      role: "Desenvolvedor Full Stack",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=500&fit=crop&auto=format",
      fallbackImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=500&fit=crop&auto=format",
      github: "https://github.com/Dgbuildsdev/devburguer-interface",
      live: "https://github.com/Dgbuildsdev/devburguer-interface"
    },
    {
      name: "Sistema de gestao empresarial",
      description: "Desenvolvi um Sistema de Gestão Empresarial completo e eficiente, focado em otimizar a gestão de inventário em armazéns ou lojas.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "Node.js", "Express", "PostgreSQL", "Sequelize", "Docker"],
      role: "Desenvolvedor Full Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
      fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
      github: "https://github.com/Dgbuildsdev",
      live: "https://demonstracao.hsktecnologia.com.br/"
    },
    {
      name: "HSK Tecnologia",
      description: "Utilizamos tecnologias modernas para desenvolver soluções inovadoras.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "Node.js", "Express", "PostgreSQL", "Sequelize", "Docker"],
      role: "Desenvolvedor Full Stack",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&auto=format",
      fallbackImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&auto=format",
      github: "https://github.com/Dgbuildsdev",
      live: "https://site.hsktecnologia.com.br/home"
    },
    {
      name: "Portfólios",
      description: "Desenvolvi diversos projetos que demonstram minha habilidade em criar soluções tecnológicas inovadoras e eficazes.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "Node.js", "Express", "PostgreSQL", "Sequelize", "Docker"],
      role: "Desenvolvedor Full Stack",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop&auto=format", 
      fallbackImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop&auto=format",
      github: "https://github.com/Dgbuildsdev",
      live: "https://diogenesmartins.dev"
    }
  ], [])

  // Extrair todas as tecnologias únicas
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech))
    })
    return ['Todos', ...Array.from(techs).sort()]
  }, [projects])

  // Filtrar projetos baseado na tecnologia selecionada
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'Todos') return projects
    return projects.filter(project => 
      project.technologies.includes(selectedFilter)
    )
  }, [selectedFilter, projects])

  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            PROJETOS
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {allTechnologies.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === tech
                    ? 'bg-blue-400 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-blue-400/50 hover:bg-white/8 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ProjectImage
                  src={project.image}
                  fallbackSrc={project.fallbackImage}
                  alt={project.name}
                  className="w-full h-full"
                />
                
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Code-style header */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm">
                  <div className="text-blue-400">const projeto = {'{'}</div>
                  <div className="ml-4">
                    <div className="text-white">Nome: <span className="text-green-400">&apos;{project.name}&apos;</span>,</div>
                    <div className="text-white">ferramentas: <span className="text-yellow-400">[</span></div>
                    <div className="ml-4 text-green-400">
                      {project.technologies.map((tech, i) => (
                        <span key={tech}>
                          &apos;{tech}&apos;{i < project.technologies.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    <div className="text-yellow-400">],</div>
                    <div className="text-white">minhaFuncao: <span className="text-green-400">&apos;{project.role}&apos;</span>,</div>
                    <div className="text-white">Descricao: <span className="text-green-400">&apos;{project.description}&apos;</span></div>
                  </div>
                  <div className="text-blue-400">{'};'}</div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs font-medium">
                      +{project.technologies.length - 6} mais
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}