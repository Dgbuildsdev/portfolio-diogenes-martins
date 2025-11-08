'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-8 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Portfólio desenvolvido por{' '}
              <Link 
                href="https://www.linkedin.com/in/diogenes-martins-dgbuildsdev/" 
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Diogenes Martins
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Voltar ao topo
            </Link>
            <div className="flex gap-4">
              <a
                href="https://github.com/Dgbuildsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/diogenes-martins-dgbuildsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}