# Pasta para imagens públicas

## Como adicionar sua foto de perfil:

1. Adicione sua foto de perfil nesta pasta com o nome `profile.jpg`
2. Formatos suportados: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Tamanho recomendado: 400x400 pixels ou maior (formato quadrado)
4. A imagem será automaticamente otimizada pelo Next.js

## Outras imagens:

- Você pode adicionar outras imagens aqui que serão acessíveis via `/nome-da-imagem.ext`
- Para projetos, adicione imagens na pasta `public` e referencie como `/projeto1.jpg`

## Exemplo de uso:
```tsx
<Image 
  src="/profile.jpg" 
  alt="Sua descrição" 
  width={400} 
  height={400} 
/>
```