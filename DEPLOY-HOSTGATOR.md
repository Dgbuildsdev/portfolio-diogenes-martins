# 🚀 Guia Completo: Deploy do Portfólio Next.js na HostGator

## 📋 Preparação do Projeto para Deploy

### 1. 🔧 Build do Projeto
Primeiro, vamos preparar o projeto para produção:

```bash
# Entre no diretório do projeto
cd C:\Users\Lenovo\Desktop\Portifolio

# Instale as dependências (se necessário)
pnpm install

# Faça o build de produção
pnpm build

# Teste o build localmente (opcional)
pnpm start
```

### 2. 📁 Configuração para Export Estático
Como a HostGator é hospedagem tradicional, precisamos exportar como site estático.

Crie ou edite o arquivo `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  basePath: '',
}

module.exports = nextConfig
```

### 3. 🏗️ Gerar Build Estático
```bash
# Limpar builds anteriores
rm -rf .next out

# Build para produção estática
pnpm build

# Isso criará uma pasta 'out' com arquivos estáticos
```

---

## 🌐 Deploy na HostGator

### Método 1: Via cPanel File Manager (Recomendado)

#### **Passo 1: Acesse o cPanel**
1. Faça login no **cPanel da HostGator**
2. Localize e clique em **"File Manager"**
3. Navegue até a pasta **`public_html`** (pasta raiz do seu domínio)

#### **Passo 2: Upload dos Arquivos**
1. **Limpe a pasta `public_html`** (remova arquivos padrão da HostGator)
2. **Comprima a pasta `out`** em ZIP no seu computador
3. **Faça upload do ZIP** via File Manager
4. **Extraia o ZIP** na pasta `public_html`
5. **Mova todos os arquivos** da pasta `out` para `public_html` diretamente

#### **Passo 3: Configuração Final**
1. Certifique-se que o arquivo **`index.html`** está em `public_html`
2. Verifique se todas as pastas (**`_next`, `images`, etc.**) estão presentes
3. Teste o site acessando seu domínio

### Método 2: Via FTP (Alternativo)

#### **Configuração FTP:**
1. **Host:** ftp.seudominio.com.br
2. **Usuário:** seu_usuario_cpanel
3. **Senha:** sua_senha_cpanel
4. **Porta:** 21

#### **Upload via FTP:**
1. Conecte-se via **FileZilla** ou similar
2. Navegue até **`public_html`**
3. Limpe a pasta
4. Upload todos os arquivos da pasta **`out`**

---

## ⚙️ Configurações Específicas

### 1. 📄 Arquivo .htaccess (Para React Router)
Crie um arquivo `.htaccess` em `public_html`:

```apache
RewriteEngine On
RewriteBase /

# Handle Angular and React Routes
RewriteRule ^(?!.*\.).*$ /index.html [L]

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
</FilesMatch>

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### 2. 🔒 Configuração HTTPS
1. Vá no **cPanel** → **"SSL/TLS"**
2. Ative **"Force HTTPS Redirect"**
3. Instale certificado **Let's Encrypt** (gratuito)

### 3. 📧 Configuração de Emails (Para EmailJS)
No cPanel:
1. Vá em **"Email Accounts"**
2. Crie email **contato@seudominio.com.br**
3. Configure no **EmailJS** usando SMTP da HostGator

---

## 🔧 Resolução de Problemas Comuns

### ❌ **Problema: Páginas não carregam (404)**
**Solução:**
```apache
# Adicione no .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### ❌ **Problema: Imagens não carregam**
**Solução:**
1. Verifique se a pasta **`_next/static`** foi enviada
2. Confirme que `images: { unoptimized: true }` está no `next.config.js`

### ❌ **Problema: CSS/JS não carregam**
**Solução:**
1. Verifique se **`assetPrefix`** está correto
2. Confirme que **`trailingSlash: true`** está configurado

### ❌ **Problema: AI Assistant não funciona**
**Solução:**
1. O OpenAI API **não funciona** em hospedagem estática
2. **Alternativas:**
   - Use **Vercel** para funcionalidades serverless
   - Configure **subdomain** na Vercel (api.seudominio.com)
   - Implemente backend **Node.js** separado

---

## 🌟 Otimizações para HostGator

### 1. 📊 Performance
```javascript
// next.config.js - Otimizações adicionais
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: true, // Remove console.log em produção
  },
  experimental: {
    optimizeCss: true,
  }
}
```

### 2. 🗜️ Compressão de Arquivos
```bash
# Antes do upload, comprima arquivos JS/CSS
# Use ferramentas como gzip ou brotli
```

### 3. 📱 PWA Configuration
Adicione `manifest.json` para app-like experience:
```json
{
  "name": "Diógenes Martins - Portfolio",
  "short_name": "DM Portfolio",
  "theme_color": "#1e293b",
  "background_color": "#1e293b",
  "display": "standalone",
  "start_url": "/",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## ✅ Checklist Final

### **Antes do Deploy:**
- [ ] `pnpm build` executado com sucesso
- [ ] Pasta `out` criada e completa
- [ ] `next.config.js` configurado para export
- [ ] Arquivos comprimidos em ZIP

### **Durante o Deploy:**
- [ ] cPanel acessado
- [ ] `public_html` limpo
- [ ] Arquivos enviados e extraídos
- [ ] Estrutura de pastas correta

### **Após o Deploy:**
- [ ] Site carrega na URL principal
- [ ] Todas as páginas funcionam
- [ ] Imagens carregam corretamente
- [ ] Formulário de contato testado
- [ ] WhatsApp button funcional
- [ ] Site responsivo em mobile

### **Otimizações:**
- [ ] HTTPS ativado
- [ ] .htaccess configurado
- [ ] Cache configurado
- [ ] Compressão ativada

---

## 🆘 Suporte

### **Se precisar de ajuda:**
1. **HostGator Support:** Chat 24h em português
2. **Documentação:** [docs.hostgator.com.br](https://docs.hostgator.com.br)
3. **Comunidade:** Fóruns e grupos de desenvolvedores

### **Contatos de Emergência:**
- **Telefone HostGator:** 0800 722 4678
- **Email Support:** Através do cPanel

---

## 🎉 Parabéns!

Seu portfólio estará online em: **https://seudominio.com.br**

**Features que funcionarão:**
- ✅ Todas as animações
- ✅ Design responsivo
- ✅ WhatsApp integration
- ✅ Formulário de contato (com EmailJS)
- ✅ Performance otimizada

**Features que precisam de servidor:**
- ⚠️ AI Assistant (requer backend)
- ⚠️ APIs dinâmicas

**Para AI Assistant, considere:**
- Usar **Vercel** em paralelo
- Configurar subdomain para APIs
- Migrar para **HostGator Cloud** (com Node.js)

---

## 🚀 Próximos Passos

1. **Teste completo** do site online
2. **Configure Google Analytics**
3. **Setup Google Search Console**
4. **Otimize SEO** com meta tags
5. **Monitore performance** com Lighthouse

**Seu portfólio estará no ar com tecnologia de ponta! 🎯**