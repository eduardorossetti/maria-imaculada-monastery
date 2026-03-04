# CLAUDE.md

Guia para assistentes de IA ao trabalhar neste repositório.

## Visão geral do projeto

Mosteiro Maria Imaculada - Irmãs Clarissas é um site institucional com blog, construído com Next.js 16. Apresenta informações sobre o mosteiro, vocação, formação (blog), obra e contato.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, pnpm

## Estrutura do projeto

```
app/
├── layout.tsx               # Layout raiz (metadata SEO, metadataBase, title template)
├── page.tsx                 # Home (carrossel, cards de postagens, seção de doação)
├── globals.css              # Estilos globais + tema Taupe
├── api/image/route.ts       # Proxy de imagens do Notion (redirect para URL fresca)
├── formacao/page.tsx        # Blog — lista todas as postagens do Notion
├── vocacao/page.tsx         # Vocacional — texto + etapas de formação (timeline)
├── quem-somos/page.tsx      # Quem Somos — texto + imagens flutuantes
├── nosso-mosteiro/page.tsx  # Nosso Mosteiro — história + gênese (timeline)
├── obra/page.tsx            # Obra — redireciona para postagem fixada
├── contate-nos/page.tsx     # Contate-nos — formulário de contato
└── postagens/[id]/page.tsx  # Postagem individual (Notion)

components/
├── back-button.tsx          # Botão Voltar com router.back() (client component)
├── contact-form.tsx         # Formulário de contato (react-hook-form + zod)
├── donation-section.tsx     # Seção de doação com QR Code
├── footer.tsx               # Rodapé (© 2026 Mosteiro Maria Imaculada)
├── header.tsx               # Header com nav, menu mobile (Sheet), ThemeToggle
├── home-carousel.tsx        # Carrossel da home (Embla)
├── notion-block-renderer.tsx # Renderiza blocos do Notion
├── page-layout.tsx          # Layout com Header + main + Footer
├── post-card.tsx            # Card de postagem
├── theme-toggle.tsx         # Toggle light/dark (next-themes)
├── form/
│   └── ErrorMessage.tsx     # Mensagem de erro de formulário
└── ui/                      # Componentes shadcn/ui

lib/
├── notion.ts                # Cliente Notion, getPosts, getPostById, getImageSrc
├── utils.ts                 # cn(), getField()
├── helpers/
│   ├── date.ts              # formatDate, formatDateTime, formatTime
│   ├── error.ts             # errorMessageHandler
│   ├── string.ts            # truncate, slugify, capitalize
│   └── ...
├── hooks/
│   ├── use-dialog.ts
│   └── use-confirm-modal.ts
└── validations/
    └── contact.ts           # Schema Zod do formulário de contato
```

## Navegação (header)

```ts
const navItems = [
  { href: "/vocacao",        label: "Vocacional" },
  { href: "/formacao",       label: "Formação" },
  { href: "/obra",           label: "Obra" },
  { href: "/quem-somos",     label: "Quem Somos" },
  { href: "/nosso-mosteiro", label: "Nosso Mosteiro" },
]
```

## Integração com Notion

- **`lib/notion.ts`** — busca postagens e blocos via `@notionhq/client` v5, `notionVersion: "2025-09-03"`
- Cache: `unstable_cache` com revalidação a cada 15 minutos
- Imagens tipo `file` (S3 assinado, expira em ~1h) → usam `/api/image?id=<pageId>` (redirect para URL fresca)
- Imagens tipo `external` → URL direta, não expira
- `OBRA_POST` — post fixado sobre a obra do mosteiro (não vem do Notion)
- **Variáveis de ambiente necessárias:**
  - `NOTION_API_KEY`
  - `NOTION_POSTS_PAGE_ID`
  - `NEXT_PUBLIC_SITE_URL` (opcional, fallback: `https://clarissasmarilia.com.br`)

## Padrão de imagens nas páginas de conteúdo

- **Imagem de cabeçalho** (centralizada, maior): `mx-auto mb-6 w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border`
- **Float esquerda (timeline)**: `floatLeft` — `md:float-left md:w-80`
- **Float direita (timeline)**: `floatRight` — `md:float-right md:w-80`
- **Imagens de proporção fixa**: `<div className="relative aspect-4/3">` + `<Image fill />`
- **Imagens de proporção natural**: `width={0} height={0} sizes="..." style={{ width: "100%", height: "auto" }}`
- Sempre usar `<div className="clear-both" />` ao final de seções com floats

## Timeline (Gênese, Etapas de Formação)

Padrão usado em `nosso-mosteiro` e `vocacao`:
```tsx
<div className="relative border-l-2 border-primary pl-6 sm:pl-8">
  <div className="relative mb-0">
    <TimelineDot />  {/* absolute, -left-7 sm:-left-9 */}
    <h3>Título</h3>
    {/* conteúdo com imagem float opcional */}
    <div className="clear-both" />
  </div>
  <Separator className="my-8" />
  ...
</div>
```

## Padrão de cores

Paleta **Taupe** (Tailwind CSS v4.2), configurada em `app/globals.css`:

- **Background:** taupe-50 (claro) / taupe-950 (escuro)
- **Primary:** taupe-600
- **Section bg:** `bg-section-bg` (usar em todas as páginas de conteúdo)

## Formulários

- **react-hook-form** + **`standardSchemaResolver`** de `@hookform/resolvers/standard-schema` + **zod** v4
- Import zod: `import { z } from "zod"` (não `"zod/v4"`)
- Schema em `lib/validations/contact.ts`

## Componentes UI (shadcn/ui)

Badge, Button, Card, Carousel, Sheet, Separator, Skeleton, Spinner, AspectRatio, Alert, AlertDialog, Field, Input, Textarea, Toaster (Sonner).

## Comandos

```bash
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção
pnpm lint         # ESLint + TypeScript check
pnpm lint-staged  # Lint em arquivos staged (pre-commit)
```

## Padrão de commits

Conventional Commits com commitlint. Tipos: feat, fix, docs, chore, style, refactor, test, perf, ci, revert.

Exemplo: `feat: Adiciona carrossel na home`

## Configuração

- **Husky** – pre-commit (lint + lint-staged), commit-msg (commitlint)
- **EditorConfig** – LF, 2 espaços, UTF-8
- **React Compiler** – Habilitado em `next.config.ts`
