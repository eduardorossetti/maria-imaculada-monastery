import Image from "next/image"

export function DonationSection() {
  return (
    <section id="obra" className="py-4 md:py-6">
      <blockquote className="text-muted-foreground mx-auto mb-4 max-w-3xl px-4 text-center text-lg italic sm:text-xl">
        <p>&quot;Olha, medita, contempla e que o teu coração se inflame na imitação d&apos;Ele.&quot;</p>
        <footer className="not-italic">(Seráfica Mãe Santa Clara)</footer>
      </blockquote>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-stretch md:gap-6 md:px-6">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-lg border border-border p-4 text-center">
          <h2 className="text-primary text-lg font-semibold">Conta Bancária</h2>
          <div className="w-full text-muted-foreground space-y-1 text-base">
            <p className="font-medium text-foreground">Mosteiro Maria Imaculada</p>
            <p>Agência: 141-4</p>
            <p>CC: 73472-1</p>
            <p>Banco do Brasil</p>
          </div>
        </div>
        <div className="flex flex-2 flex-col items-center justify-center gap-4 rounded-lg border border-border p-4 text-center">
          <h2 className="text-primary text-xl font-semibold md:text-2xl">
            Ajude as irmãs Clarissas a terminar a obra do Mosteiro!
          </h2>
          <p className="mx-auto max-w-prose text-muted-foreground text-base leading-relaxed">
            Há 23 anos, estamos tentando concluir a obra do nosso mosteiro. Em 2019, suspendemos a
            construção por falta de recursos financeiros. Contamos com a sua ajuda com qualquer valor
            que o seu coração mandar. Também pode nos ajudar divulgando esta iniciativa para todos
            os seus amigos. Que Deus recompense com a vida eterna a todos os que nos tenham prestado
            benefícios. Amém!
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-lg border border-border p-4 text-center">
          <div className="rounded-lg border border-border bg-muted/30 p-2">
            <Image
              src="/qr-code.png"
              alt="QR Code PIX"
              width={180}
              height={180}
              className="size-40 object-contain sm:size-48"
            />
          </div>
          <div className="text-muted-foreground text-center text-sm">
            <p className="font-semibold text-foreground">CHAVE PIX</p>
            <p>CNPJ: 08.309.408/0001-51</p>
          </div>
        </div>
      </div>
    </section>
  )
}
