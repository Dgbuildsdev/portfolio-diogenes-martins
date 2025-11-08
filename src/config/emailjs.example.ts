// EmailJS Configuration Example
// Para configurar:
// 1. Acesse https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Configure um serviço de email (Gmail recomendado)
// 4. Crie um template de email
// 5. Copie este arquivo para emailjs.ts e substitua os valores abaixo pelas suas chaves

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Ex: 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Ex: 'template_xyz789'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Ex: 'user_def456'
}

// Template sugerido para o EmailJS:
/*
Assunto: Nova mensagem do portfólio - {{from_name}}

Olá Diógenes,

Você recebeu uma nova mensagem através do seu portfólio:

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio
Data: {{send_date}}
*/

// Instruções completas:
// 1. Cadastre-se em https://www.emailjs.com/
// 2. Conecte seu email (Gmail recomendado)
// 3. Crie um template usando as variáveis acima
// 4. Copie o Service ID, Template ID e Public Key
// 5. Substitua os valores acima
// 6. Renomeie este arquivo para emailjs.ts