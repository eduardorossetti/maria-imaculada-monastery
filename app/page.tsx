export default function Home() {
  return (
    <>
      <h1 className="sr-only">Mosteiro Maria Imaculada - Irmãs Clarissas</h1>

      <section className="border-b border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-muted-foreground text-center text-sm">
            [Carrossel - em breve]
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-xl font-semibold">Postagens recentes</h2>
          <p className="text-muted-foreground text-sm">
            [Cards de postagens - em breve]
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex-1">
            <h2 className="mb-4 text-xl font-semibold">Horário da Missa</h2>
            <p className="text-muted-foreground text-sm">
              [Horário da Missa - em breve]
            </p>
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-xl font-semibold">Doação</h2>
            <p className="text-muted-foreground text-sm">
              [QR Code para doação - em breve]
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
