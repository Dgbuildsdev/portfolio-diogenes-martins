import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diógenes Martins - Desenvolvedor Full Stack',
  description: 'Portfólio profissional de desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas',
  keywords: ['desenvolvedor', 'full stack', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Diógenes Martins' }],
  openGraph: {
    title: 'Diógenes Martins - Desenvolvedor Full Stack',
    description: 'Portfólio profissional com projetos e experiências em desenvolvimento web',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}