'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Sequelize", level: 70 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      category: "Ferramentas",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "Figma", level: 70 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Vercel", level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 relative overflow-hidden group"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
                    "linear-gradient(225deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.h3 
                className="text-xl font-bold text-blue-400 mb-6 text-center relative z-10"
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                transition={{ duration: 0.2 }}
              >
                {category.category}
              </motion.h3>
              
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-center">
                      <motion.span 
                        className="text-white font-medium"
                        whileHover={{ color: "#60a5fa" }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-blue-400 text-sm font-bold"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          type: "spring",
                          stiffness: 500
                        }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.15,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 h-3 rounded-full relative overflow-hidden"
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ["-100%", "100%"]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                      
                      {/* Pulse effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0"
                        whileHover={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 relative z-10"
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-white drop-shadow-lg"
              animate={{
                textShadow: [
                  "0 0 20px #60a5fa",
                  "0 0 20px #a855f7", 
                  "0 0 20px #ec4899",
                  "0 0 20px #60a5fa"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Tecnologias Favoritas
            </motion.span>
            
            {/* Decorative underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', color: 'from-blue-400 to-cyan-400' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
              { name: 'Node.js', color: 'from-green-500 to-green-700' },
              { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
              { name: 'MongoDB', color: 'from-green-400 to-green-600' },
              { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
              { name: 'Express', color: 'from-gray-600 to-gray-800' },
              { name: 'Git', color: 'from-orange-500 to-red-500' },
              { name: 'Docker', color: 'from-blue-400 to-blue-600' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  rotateZ: [0, -5, 5, 0],
                  y: -5,
                  transition: { 
                    duration: 0.3,
                    rotateZ: { duration: 0.5, repeat: 2 }
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 bg-gradient-to-r ${tech.color} rounded-2xl text-white font-bold cursor-pointer group overflow-hidden shadow-lg hover:shadow-2xl`}
              >
                {/* Animated background shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Glowing border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 4px rgba(59, 130, 246, 0.3)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                <span className="relative z-10">{tech.name}</span>
                
                {/* Particle effect on hover */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                animate={{
                  x: [0, 100, 200, 300],
                  y: [0, -50, 50, 0],
                  opacity: [0, 0.5, 0.5, 0],
                  scale: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1
                }}
                style={{
                  left: (i * 6) + "%",
                  top: (i * 4 + 20) + "%"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}