# 📧 Configuração do EmailJS para Formulário de Contato

## Como configurar o envio real de emails

### 1. Criar conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Configurar Serviço de Email
1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"** (recomendado)
4. Faça login com sua conta Gmail
5. Copie o **Service ID** (ex: `service_abc123`)

### 3. Criar Template de Email
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Subject (Assunto):**
```
Nova mensagem do portfólio - {{from_name}}
```

**Content (Conteúdo):**
```
Olá Diógenes,

Você recebeu uma nova mensagem através do seu portfólio:

Nome: {{from_name}}
Email: {{from_email}}
Mensagem: {{message}}

---
Enviado automaticamente do seu portfólio
Data: {{reply_to}}
```

4. Salve e copie o **Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key
1. Vá em **"Account"** → **"General"**
2. Copie a **Public Key** (ex: `user_def456`)

### 5. Atualizar Configuração
1. Abra o arquivo `src/config/emailjs.ts`
2. Substitua os valores:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Seu Service ID
  TEMPLATE_ID: 'template_xyz789', // Seu Template ID
  PUBLIC_KEY: 'user_def456', // Sua Public Key
}
```

### 6. Testar
1. Salve as alterações
2. Acesse seu portfólio
3. Preencha o formulário de contato
4. Verifique se o email chegou na sua caixa de entrada

## 🎉 Pronto!
Agora todas as mensagens do formulário serão enviadas diretamente para seu email!

## 📝 Status Atual
- ✅ EmailJS instalado
- ✅ Componente Contact configurado
- ⏳ **Aguardando configuração das chaves do EmailJS**

Enquanto não configurar, as mensagens aparecerão apenas no console do navegador (F12 → Console).