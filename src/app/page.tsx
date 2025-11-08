import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import AIAgent from '@/components/AIAgent'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog />
        <Contact />
        <Footer />
      </div>
      
      {/* Botões Flutuantes */}
      <WhatsAppFloat />
      <AIAgent />
    </main>
  )
}