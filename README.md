# Site pessoal — Daniel da Cunha Buerno

Stack: Astro 4 + TailwindCSS + blog em Markdown. Deploy automático no GitHub Pages.

## Rodando localmente

1. Requisitos: Node.js 20+
2. Instale dependências e rode:

```
pwsh
npm install
npm run dev
```

O site abre em http://localhost:4321/personal-website (base configurada para GitHub Pages). Em dev, a raiz também funciona sem base.

## Adicionando posts

- Crie arquivos Markdown em `src/content/blog/*.md` com frontmatter:

```
---
title: "Título"
description: "Resumo do post"
date: 2025-09-15
tags: [".NET", "Angular"]
---

Conteúdo em Markdown aqui.
```

## Deploy automático

Cada push na branch `main` dispara o workflow `.github/workflows/deploy.yml` que:

- Instala dependências
- Executa `npm run build`
- Publica os arquivos de `dist/` no GitHub Pages

URL pública: https://danieldacunhabueno.github.io/personal-website

Se você mudar o nome do repositório ou publicar como site de usuário (sem base), atualize `astro.config.mjs` (campos `site` e `base`).

## Estrutura

- `src/pages/` — páginas Astro
- `src/layouts/BaseLayout.astro` — layout principal com SEO
- `src/content/` — Content Collections do blog
- `public/` — estáticos (favicon etc.)
