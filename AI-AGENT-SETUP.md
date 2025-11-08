# 🤖 Configuração do AI Agent (ChatBot Inteligente)

## Como ativar seu assistente virtual

### 1. Criar conta na OpenAI
1. Acesse [https://platform.openai.com/](https://platform.openai.com/)
2. Clique em "Sign up" e crie uma conta
3. Confirme seu email

### 2. Adicionar Créditos
1. Vá em **"Billing"** no menu lateral
2. Clique em **"Add to credit balance"**
3. Adicione **$5 USD** (suficiente para meses de uso)
   - GPT-4o mini custa apenas $0.15/1M tokens
   - Uma conversa típica usa ~1000 tokens = $0.0001
   - $5 = aproximadamente 50.000 conversas!

### 3. Criar API Key
1. Vá em **"API Keys"** no menu lateral
2. Clique em **"Create new secret key"**
3. Dê um nome: "Portfolio Chatbot"
4. **COPIE A CHAVE** (você só verá uma vez!)
   - Formato: `sk-proj-abc123...`

### 4. Configurar no Projeto
1. Crie um arquivo `.env.local` na raiz do projeto:
```bash
NEXT_PUBLIC_OPENAI_API_KEY=sk-proj-sua-chave-aqui
```

2. OU edite `src/config/openai.ts` e substitua:
```typescript
API_KEY: 'sk-proj-sua-chave-aqui'
```

### 5. Reiniciar o Servidor
```bash
pnpm run dev
```

### 6. Testar o AI Agent
1. Acesse seu portfólio
2. Clique no botão azul/roxo (canto inferior esquerdo)
3. Faça perguntas como:
   - "Quais tecnologias o Diógenes domina?"
   - "Ele tem experiência com React?"
   - "Como posso contratar ele?"
   - "Qual o melhor projeto dele?"

## 🎯 Funcionalidades do AI Agent

### 📋 O que ele sabe sobre você:
- ✅ **Perfil completo** (nome, contato, links)
- ✅ **Habilidades técnicas** (React, Node.js, TypeScript, etc.)
- ✅ **Soft skills** (comunicação, resolução de problemas)
- ✅ **Projetos principais** (DevBurger, Sistema de Gestão, etc.)
- ✅ **Formação acadêmica** (cursos e faculdade)
- ✅ **Disponibilidade** (freelance, CLT, consultoria)

### 💬 Exemplos de perguntas que responde:
- "O Diógenes tem experiência com MongoDB?"
- "Quanto tempo de experiência ele tem?"
- "Ele trabalha com TypeScript?"
- "Como posso ver os projetos dele?"
- "Ele está disponível para freelances?"
- "Qual o GitHub dele?"

### 🎨 Design e UX:
- ✅ **Botão flutuante** animado (azul/roxo)
- ✅ **Modal responsivo** para desktop e mobile
- ✅ **Animações suaves** com Framer Motion
- ✅ **Interface moderna** estilo WhatsApp
- ✅ **Indicador de digitação** realístico
- ✅ **Timestamps** nas mensagens

## 💰 Custo Estimado

### 📊 **Cenários Reais:**
- **100 conversas/mês:** ~$0.50 USD
- **500 conversas/mês:** ~$2.50 USD  
- **1000 conversas/mês:** ~$5.00 USD

### 🚀 **ROI:**
- **1 cliente** = anos de custo da IA
- **Impressiona recrutadores** = valor inestimável
- **Disponibilidade 24/7** = mais oportunidades

## 🛠️ Status Atual

### ✅ **Implementado:**
- Botão flutuante com animações
- Interface completa do chat
- API route configurada
- Sistema de fallback (funciona sem API)
- Informações completas sobre você

### ⏳ **Aguardando:**
- **Configuração da API Key da OpenAI**

### 🔄 **Funcionamento Atual:**
**Sem API configurada:** Responde com informações básicas e direciona para WhatsApp
**Com API configurada:** Responde inteligentemente usando GPT-4o mini

## 🎉 Após Configurar

Seu portfólio terá um **diferencial único**:
- ✅ **Assistente IA 24/7** respondendo sobre você
- ✅ **Experiência interativa** que impressiona
- ✅ **Qualificação automática** de leads
- ✅ **Tecnologia de ponta** no seu portfólio

**Poucos desenvolvedores têm isso!** 🚀🤖