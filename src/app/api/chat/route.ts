import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'
import { OPENAI_CONFIG, DIOGENES_INFO } from '@/config/openai'

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: OPENAI_CONFIG.API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Validação básica
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mensagem inválida' },
        { status: 400 }
      )
    }

    // Verificar se a API está configurada
    if (OPENAI_CONFIG.API_KEY === 'YOUR_OPENAI_API_KEY') {
      return NextResponse.json({
        response: `Olá! 👋 

Sou o assistente virtual do Diógenes, mas ainda estou sendo configurado. 

Por enquanto, você pode:
📱 Falar direto com ele no WhatsApp: +55 34 9 9886-4609
📧 Enviar email: diogenesmartins.dev@gmail.com
🔗 Ver LinkedIn: linkedin.com/in/diogenes-martins-dgbuildsdev/

Sobre o Diógenes:
• Desenvolvedor Full Stack especialista em React e Node.js
• Experiência com Next.js, TypeScript, PostgreSQL e MongoDB  
• Projetos reais como DevBurger e Sistema de Gestão Empresarial
• Disponível para freelances e oportunidades CLT

`
      })
    }

    // Criar o prompt do sistema
    const systemPrompt = `${DIOGENES_INFO}

Responda como um assistente virtual profissional e amigável do portfólio do Diógenes Martins. 
- Use emojis moderadamente para deixar a conversa mais amigável
- Seja conciso mas informativo
- Se perguntarem sobre algo que não está nas informações, direcione para contato direto
- Sempre incentive o contato via WhatsApp ou email quando apropriado
- Mantenha tom profissional mas descontraído`

    // Chamar a API da OpenAI
    const completion = await openai.chat.completions.create({
      model: OPENAI_CONFIG.MODEL,
      max_tokens: OPENAI_CONFIG.MAX_TOKENS,
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ],
    })

    const aiResponse = completion.choices[0]?.message?.content || 
      'Desculpe, não consegui processar sua pergunta. Tente falar diretamente com o Diógenes pelo WhatsApp!'

    return NextResponse.json({ response: aiResponse })

  } catch (error) {
    console.error('Erro na API do chatbot:', error)
    
    return NextResponse.json({
      response: `Ops, ocorreu um erro! 😅

Mas você pode falar diretamente com o Diógenes:
📱 WhatsApp: +55 34 9 9886-4609
📧 Email: diogenesmartins.dev@gmail.com

Ele responde rapidamente e pode esclarecer qualquer dúvida sobre seus projetos e disponibilidade! 🚀`
    }, { status: 500 })
  }
}