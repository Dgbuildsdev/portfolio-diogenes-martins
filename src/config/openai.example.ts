// OpenAI Configuration Example
// Para configurar:
// 1. Acesse https://platform.openai.com/
// 2. Crie uma conta e adicione créditos ($5 é suficiente para meses)
// 3. Vá em API Keys e crie uma nova chave
// 4. Copie este arquivo para openai.ts e substitua 'YOUR_OPENAI_API_KEY' pela sua chave real

export const OPENAI_CONFIG = {
  API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY',
  MODEL: 'gpt-4o-mini', // Modelo mais barato e eficiente
  MAX_TOKENS: 500, // Limita o tamanho das respostas
}

// Informações sobre você para o AI Agent
// PERSONALIZE ESTAS INFORMAÇÕES COM SEUS DADOS REAIS
export const DIOGENES_INFO = `
INFORMAÇÕES SOBRE [SEU NOME]:

PERFIL PROFISSIONAL:
- Nome: [Seu Nome Completo]
- Cargo: [Seu Cargo Principal]
- Localização: [Sua Cidade, Estado]
- Anos de experiência: [X anos]

ESPECIALIDADES:
- [Sua especialidade principal]
- [Segunda especialidade]
- [Terceira especialidade]

TECNOLOGIAS PRINCIPAIS:
Frontend:
- [Tecnologia 1] (X anos)
- [Tecnologia 2] (X anos)
- [Tecnologia 3] (X anos)

Backend:
- [Tecnologia 1] (X anos)
- [Tecnologia 2] (X anos)
- [Tecnologia 3] (X anos)

PROJETOS DESTACADOS:
1. [Nome do Projeto]
   - Descrição: [Breve descrição]
   - Tecnologias: [Tech stack]
   - Resultado: [Impacto/resultado]

2. [Nome do Projeto]
   - Descrição: [Breve descrição]
   - Tecnologias: [Tech stack]
   - Resultado: [Impacto/resultado]

FORMAÇÃO:
- [Curso] - [Instituição] ([Ano])
- [Certificação] - [Plataforma] ([Ano])

SOFT SKILLS:
- [Skill 1]
- [Skill 2]
- [Skill 3]

OBJETIVOS PROFISSIONAIS:
- [Objetivo 1]
- [Objetivo 2]

CONTATO:
- Email: [seu-email@exemplo.com]
- LinkedIn: [linkedin.com/in/seu-perfil]
- GitHub: [github.com/seu-usuario]
- WhatsApp: [+55 XX XXXXX-XXXX]

INSTRUÇÕES PARA O AI:
- Sempre responda de forma profissional e amigável
- Use as informações acima para responder sobre experiência e projetos
- Se não souber algo específico, seja honesto e sugira entrar em contato
- Mantenha respostas concisas mas informativas
- Destaque sempre os pontos fortes e diferenciais
`

// Instruções para configuração:
// 1. Cadastre-se em https://platform.openai.com/
// 2. Adicione créditos (mínimo $5)
// 3. Gere uma API Key
// 4. Crie arquivo .env.local na raiz do projeto
// 5. Adicione: NEXT_PUBLIC_OPENAI_API_KEY=sua-chave-aqui
// 6. Personalize DIOGENES_INFO com suas informações
// 7. Renomeie este arquivo para openai.ts