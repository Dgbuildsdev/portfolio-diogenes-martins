'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            message: ''
        }
        
        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório'
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
        }
        
        setErrors(newErrors)
        return Object.values(newErrors).every(error => error === '')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) return
        
        setIsSubmitting(true)
        setSubmitStatus('idle')
        
        try {
            // Verificar se o EmailJS está configurado
            if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
                // Se não estiver configurado, simular envio por enquanto
                console.log('EmailJS não configurado. Dados do formulário:', formData)
                console.log('Para configurar o EmailJS:')
                console.log('1. Acesse https://www.emailjs.com/')
                console.log('2. Configure o serviço e template')
                console.log('3. Atualize src/config/emailjs.ts')
                
                // Simular delay
                await new Promise(resolve => setTimeout(resolve, 2000))
                setSubmitStatus('success')
            } else {
                // Enviar email real usando EmailJS
                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'diogenesmartins.dev@gmail.com', // Seu email
                }
                
                await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.TEMPLATE_ID,
                    templateParams,
                    EMAILJS_CONFIG.PUBLIC_KEY
                )
                
                setSubmitStatus('success')
                console.log('Email enviado com sucesso!')
            }
            
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Erro ao enviar email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    return (
        <section id="contact" className="py-20 px-6 bg-black/20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        CONTATO
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Se você tiver alguma dúvida ou preocupação, não hesite em entrar em contato comigo.
                        Estou aberto a qualquer oportunidade de trabalho que se alinhe com minhas habilidades e interesses.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-full">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white font-medium">dgbuildsdev@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-full">
                                        <Phone className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Telefone</p>
                                        <p className="text-white font-medium">+55 (34) 9 9886-4609</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-full">
                                        <MapPin className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Localização</p>
                                        <p className="text-white font-medium">Uberlândia, MG - Brasil</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Conecte-se Comigo</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Dgbuildsdev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/diogenes-martins-dgbuildsdev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Envie uma Mensagem</h3>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-green-300">Mensagem enviada com sucesso!</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                    <span className="text-red-300">Erro ao enviar mensagem. Tente novamente.</span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2">
                                        Seu nome:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 
                                                 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all
                                                 ${errors.name ? 'border-red-400/50 bg-red-500/10' : 'border-white/20'}`}
                                        placeholder="Digite seu nome"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2">
                                        Seu e-mail:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 
                                                 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all
                                                 ${errors.email ? 'border-red-400/50 bg-red-500/10' : 'border-white/20'}`}
                                        placeholder="Digite seu e-mail"
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2">
                                        Sua mensagem:
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 
                                                 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all resize-none
                                                 ${errors.message ? 'border-red-400/50 bg-red-500/10' : 'border-white/20'}`}
                                        placeholder="Digite sua mensagem (mínimo 10 caracteres)"
                                        disabled={isSubmitting}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                    )}
                                    <div className="mt-1 text-xs text-gray-400">
                                        {formData.message.length}/200 caracteres
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2
                                             ${isSubmitting 
                                               ? 'bg-gray-600 cursor-not-allowed' 
                                               : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/25'}`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ENVIANDO...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            ENVIAR MENSAGEM
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}