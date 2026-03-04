"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-8 dark:bg-gray-900">
        <h1 className="text-xl font-semibold">Erro inesperado</h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Ocorreu um erro. Por favor, tente novamente.
        </p>
        <button
          onClick={reset}
          className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
        >
          Tentar novamente
        </button>
      </body>
    </html>
  )
}
