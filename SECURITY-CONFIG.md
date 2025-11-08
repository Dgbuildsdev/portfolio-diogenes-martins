# 🔐 Configuração de Dados Sensíveis

Este projeto usa configurações sensíveis que não devem ser expostas publicamente. Siga as instruções abaixo para configurar corretamente.

## 📋 Arquivos Necessários

### 1. Variáveis de Ambiente (.env.local)

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite e adicione suas chaves reais
# Não commite este arquivo!
```

### 2. Configuração do OpenAI (src/config/openai.ts)

```bash
# Copie o arquivo de exemplo
cp src/config/openai.example.ts src/config/openai.ts

# Edite e personalize com suas informações
```

### 3. Configuração do EmailJS (src/config/emailjs.ts)

```bash
# Copie o arquivo de exemplo
cp src/config/emailjs.example.ts src/config/emailjs.ts

# Configure com suas chaves do EmailJS
```

## 🛡️ Segurança

### ✅ Arquivos Protegidos pelo .gitignore:
- `.env*` (todas as variáveis de ambiente)
- `src/config/openai.ts` (configuração real do OpenAI)
- `src/config/emailjs.ts` (configuração real do EmailJS)
- Chaves de API e tokens
- Certificados e arquivos pessoais

### ✅ Arquivos Públicos (seguros para commit):
- `.env.example` (exemplo sem dados reais)
- `src/config/openai.example.ts` (template)
- `src/config/emailjs.example.ts` (template)
- Documentação e README files

## 🚀 Setup Rápido

1. **Clone o repositório**
2. **Instale dependências**: `npm install`
3. **Configure dados sensíveis** (seguindo instruções acima)
4. **Execute**: `npm run dev`

## 📝 Instruções Detalhadas

### OpenAI API Key:
1. Acesse [OpenAI Platform](https://platform.openai.com/)
2. Crie conta e adicione $5 de créditos
3. Gere uma API Key
4. Adicione em `.env.local`

### EmailJS:
1. Acesse [EmailJS](https://www.emailjs.com/)
2. Configure serviço de email
3. Crie template
4. Configure em `src/config/emailjs.ts`

## ⚠️ IMPORTANTE

- **NUNCA** commite arquivos com dados reais
- **SEMPRE** use os arquivos `.example` como base
- **VERIFIQUE** se o .gitignore está funcionando: `git status`
- **TESTE** as configurações em ambiente local antes do deploy

## 🔍 Verificação

Para verificar se está tudo configurado:

```bash
# Verificar se arquivos sensíveis estão sendo ignorados
git status

# Não devem aparecer:
# - .env.local
# - src/config/openai.ts
# - src/config/emailjs.ts
```

## 📞 Suporte

Se tiver dúvidas sobre a configuração, consulte:
- `EMAILJS-SETUP.md` - Configuração detalhada do EmailJS
- `AI-AGENT-SETUP.md` - Configuração detalhada do AI Agent
- `README.md` - Documentação geral do projeto