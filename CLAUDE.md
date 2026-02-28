# CLAUDE.md

Guia para assistentes de IA ao trabalhar neste repositório.

## Visão geral do projeto

Mosteiro Maria Imaculada - Irmãs Clarissas é um blog para irmãs clarissas, construído com Next.js 16. O site apresenta informações sobre o mosteiro, carisma, vocação, formação, obra e contato.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, pnpm

## Estrutura do projeto

```
app/
├── layout.tsx          # Layout raiz
├── page.tsx            # Home
├── globals.css         # Estilos globais + tema Taupe
└── ...

components/
├── form/               # Componentes de formulário (padrão zona-azul)
│   └── ErrorMessage.tsx
├── confirm-modal.tsx   # Modal de confirmação
├── header.tsx          # Header com nav, menu mobile (expand de cima), ThemeToggle
├── footer.tsx          # Rodapé (© 2026 Mosteiro Maria Imaculada)
├── page-layout.tsx     # Layout com Header + main + Footer
├── theme-toggle.tsx   # Toggle light/dark (next-themes)
└── ui/                 # Componentes shadcn/ui
    ├── alert.tsx
    ├── alert-dialog.tsx
    ├── error-alert.tsx
    ├── spinner.tsx
    └── ...

lib/
├── utils.ts            # cn(), getField()
├── helpers/
│   ├── date.ts        # formatDate, formatDateTime, formatTime
│   ├── error.ts       # errorMessageHandler
│   ├── string.ts      # truncate, slugify, capitalize
│   ├── time.ts        # toHoursAndMinutes
│   ├── mask/
│   │   └── decimal.ts # maskDecimal, maskMoney
│   └── validation.ts  # isCpf, isCnpj, isEmail, isOnlyNumbers
├── hooks/
│   ├── use-dialog.ts
│   └── use-confirm-modal.ts
└── validations/
    └── contact.ts     # Schemas Zod
```

## Páginas planejadas

- **Home** – Carrossel, cards de postagens, horário Missa, QR Code para doação
- **Carisma**
- **Vocação**
- **Formação**
- **Obra**
- **Nosso Mosteiro**
- **Contate-nos**

## Padrão de cores

O cliente solicitou uso da paleta **Taupe** do Tailwind CSS v4.2. O tema está configurado em `app/globals.css`:

- **Background:** taupe-50 (claro) / taupe-950 (escuro)
- **Foreground:** taupe-950 (claro) / taupe-50 (escuro)
- **Primary:** taupe-600 (cor principal para botões, links)
- **Muted:** taupe-100 / taupe-600

Use classes `bg-taupe-*`, `text-taupe-*`, `border-taupe-*` para manter consistência.

## Componentes UI

Componentes em `components/ui/` usam **shadcn/ui** (Radix UI + Tailwind):

- **Alert** – Callout com variant destructive para erros
- **AlertDialog** – Modal de confirmação (AlertDialogContent, AlertDialogTitle, etc.)
- **AspectRatio** – Proporção fixa para imagens
- **Badge** – Tags/categorias
- **Button** – Variantes: default, destructive, outline, secondary, ghost, link
- **Card** – Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter
- **Carousel** – Carrossel com Embla
- **ErrorAlert** – Alerta de erro (usa Alert destructive)
- **Field** – Campo de formulário (FieldLabel, FieldError, FieldDescription, FieldGroup)
- **Input** – Input com estilos do tema
- **Label** – Label para formulários
- **Navigation Menu** – Menu de navegação do header
- **Separator** – Divisor horizontal/vertical
- **Sheet** – Painel lateral (menu mobile)
- **Skeleton** – Loading placeholder
- **Spinner** – Indicador de carregamento
- **Tabs** – Abas para conteúdo
- **Textarea** – Área de texto
- **Toaster (Sonner)** – Notificações toast

Importe via `@/components/ui` ou `@/components/ui/button` etc.

## Formulários (padrão zona-azul)

- **react-hook-form** + **@hookform/resolvers** + **zod** (v4)
- **FormProvider** envolve o formulário
- **register()** nos campos (não Controller)
- **ErrorMessage** com `field="nome"` usa useFormState + getField
- **ErrorAlert** para erros de root (setError('root', { message }))
- **errorMessageHandler** para mapear erros de API (401, 403, 404, 429, 500)
- Exemplo em `components/contact-form.tsx` e schema em `lib/validations/contact.ts`
- Schemas Zod v4: `.trim()`, `.min(1)`, `.refine()`, `.check()` para validações condicionais

## Helpers

- **lib/helpers/date.ts** – formatDate, formatDateTime, formatTime, parseToInput (pt-BR)
- **lib/helpers/error.ts** – errorMessageHandler (status HTTP → mensagem amigável)
- **lib/helpers/string.ts** – truncate, slugify, capitalize
- **lib/helpers/time.ts** – toHoursAndMinutes (1.5 → "01:30")
- **lib/helpers/mask/decimal.ts** – maskDecimal, maskMoney
- **lib/helpers/validation.ts** – isCpf, isCnpj, isEmail, isOnlyNumbers

## Hooks

- **useDialog** – `const [show, toggle] = useDialog()` – toggle para modais
- **useConfirmModal** – `const { isOpen, openModal, closeModal, data } = useConfirmModal<T>()` – modal de confirmação com dados

## ConfirmModal

Componente para confirmações. Usa AlertDialog do shadcn.

```tsx
const [show, toggle] = useDialog()

<ConfirmModal
  show={show}
  title="Limpar formulário?"
  message="Os dados preenchidos serão perdidos."
  confirmText="Limpar"
  onClose={toggle}
  onConfirm={async () => form.reset()}
/>
```

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
- **React Compiler** – Habilitado em next.config.ts
