import type { Metadata } from "next"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Nosso Mosteiro",
  description: "Conheça a história do Mosteiro Maria Imaculada em Marília-SP, fundado em 1999 pelas Clarissas de Caicó. Único mosteiro feminino de clausura na diocese.",
}

const SISTERS = [
  { src: "/madre-serafica.jpg", name: "Madre Maria Seráfica do Santíssimo Sacramento, OSC" },
  { src: "/madre-juliana.jpg", name: "Ir. Maria Juliana do Santíssimo Sacramento, OSC" },
  { src: "/madre-agnela.jpg", name: "Ir. Maria Agnela do Sagrado Coração de Jesus, OSC" },
  { src: "/irma-boaventura.jpg", name: "Ir. Maria Boaventura da Sagrada Face, OSC" },
  { src: "/irma-imaculada.jpg", name: "Ir. Maria Imaculada da Conceição, OSC" },
  { src: "/madre-columba.jpg", name: "Ir. Maria Columba do Menino Jesus, OSC" },
] as const

const floatLeft =
  "mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-lg border-2 border-border md:float-left md:ml-0 md:mr-4 md:max-w-none md:w-80 md:shrink-0"
const floatRight =
  "mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-lg border-2 border-border md:float-right md:ml-4 md:mr-0 md:max-w-none md:w-80 md:shrink-0"

function TimelineDot() {
  return (
    <span
      aria-hidden
      className="absolute top-[0.35rem] -left-7 sm:-left-9 size-2.5 rounded-full bg-primary ring-2 ring-background"
    />
  )
}

function Location({ children }: { children: string }) {
  return (
    <div className="mb-3">
      <Badge variant="outline" className="gap-1 text-muted-foreground font-normal">
        <MapPin className="size-3" />
        {children}
      </Badge>
    </div>
  )
}

export default function NossoMosteiroPage() {
  return (
    <div className="bg-section-bg py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-6 w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border">
          <div className="relative aspect-4/3">
            <Image
              src="/mosteiro-marilia.jpg"
              alt="Mosteiro Maria Imaculada, Marília"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Nosso Mosteiro foi fundado na cidade de Marília em 1999 pelas Clarissas de Caicó, RN.
          Somos o único mosteiro feminino de clausura na diocese. Pertencemos carismaticamente à
          Custódia Franciscana do Sagrado Coração de Jesus, da qual recebemos o capelão do Mosteiro
          e a celebração frequente da Santa Missa.
        </p>

        <h2 className="text-primary mt-10 border-b border-border pb-3 mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
          Gênese do Mosteiro
        </h2>

        <div className="relative border-l-2 border-primary pl-6 sm:pl-8">

          <h3 className="text-primary relative mt-2 mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro de São Damião
          </h3>
          <Location>Assis, Itália</Location>
          <div className={floatRight}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-sao-damiao.webp"
                alt="Mosteiro de São Damião, Assis"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Em 1212, sob a orientação de São Francisco, a jovem Clara de Assis iniciou no Mosteiro de
            São Damião, junto com algumas irmãs, uma vida de penitência, oração e trabalho, na mais
            alta pobreza, integralmente dedicada à contemplação. Surgiu, ali, a Ordem de Santa Clara,
            ou Segunda Ordem Franciscana.
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro de Sta. Isabel da Hungria
          </h3>
          <Location>Reims, França</Location>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O arcebispo de Reims, Alberico, de volta do Concílio de Latrão (1215), visitou São Damião
            e pediu à Seráfica Mãe Clara que enviasse suas filhas para a França. Em 1219, Ir. Maria de
            Braye deixou Assis e foi recebida no ano seguinte em Reims pelo sucessor de Alberico,
            Guilherme de Joinville.
          </p>
          <blockquote className="border-primary text-muted-foreground my-4 rounded-r-lg border-l-4 bg-muted/30 py-3 pl-4 pr-4 italic">
            &quot;Vendo a irmã Maria de Braye que Deus abençoava de dia para dia o seu pequeno
            trabalho, e que o número de filhas aumentava, quis dar parecer à sua bem-aventurada Mãe Sta.
            Clara, que estimava tanto ausente como presente, honrando-a como abadessa e superiora,
            escrevendo-lhe com uma súplica muito humilde de querer aceitá-las todas para suas filhas,
            que todas a cumprimentavam e se prostravam a seus pés, em protestante obediência e
            submissão, como a sua querida abadessa e superiora, na pessoa da Ir. Marie de Braye, sua
            vigária, que tinha o seu lugar no seu pequeno mosteiro de Reims&quot;. (Remarques de
            l&apos;établissement du monastère de Sainte Claire de Reims)
          </blockquote>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Só depois da morte de Ir. Maria de Braye (1230), por sugestão de nossa Mãe Sta. Clara e do
            ministro geral da Ordem, foi eleita a primeira abadessa &quot;das pobres irmãs de São
            Damião de Reims&quot;. Em 20 de novembro de 1237, o Arcebispo de Reims consagrou a pequena
            igreja do mosteiro e a dedicou a Santa Isabel, que acabava de ser canonizada (1235).
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Reforma Coletina: Mosteiro de Besançon
          </h3>
          <Location>França</Location>
          <div className={floatLeft}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-besancon.png"
                alt="Mosteiro de Besançon"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O mosteiro de Besançon foi fundado na França em 1290, pelas irmãs de Reims. Por vários
            motivos, políticos e eclesiásticos, este mosteiro e muitos outros, deixaram de observar a
            Santa Regra escrita pela Seráfica Mãe, passando à Regra do papa Urbano IV.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Deus, zelador de sua santa obra, preparava um retorno à primitiva observância e, para este
            fim, chamou de um pequeno reclusório da cidadezinha de Corbie, a jovem Coleta Boylet, de
            24 anos. Em 16 de outubro de 1406, S.S. Bento XIII recebeu os votos de Coleta e expediu a
            bula autorizando a reforma proposta por ela. Nomeou-a Superiora Geral de todos os
            mosteiros de Clarissas que viesse a fundar ou reformar.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O Papa autorizou-a a tomar posse do mosteiro de Clarissas Urbanistas de Besançon em 27 de
            janeiro de 1408. A Santa Madre sofreu sérias oposições desta comunidade, e somente dois
            anos depois, em 14 de março de 1410, pode, enfim, levar a termo a reforma. A própria
            condessa de Genebra as acompanhou com uma grande comitiva.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Foi em Besançon que São João de Capistrano se encontrou com Madre Coleta, dizendo:
            &quot;Creio que sua reforma está de acordo com Deus e São Francisco; perseve, como você
            começou, porque Deus está contigo.&quot;
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro Belém
          </h3>
          <Location>Gant, Bélgica</Location>
          <div className={floatRight}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-belem.jpg"
                alt="Santa Coleta - Mosteiro Belém, Gant"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O Mosteiro de Belém foi fundado por Santa Coleta em 1442, a pedido dos magistrados de
            Gant, Bélgica. As irmãs vieram de diferentes mosteiros franceses.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Sta. Madre Coleta retornou a este mosteiro em 6 de dezembro de 1446 e morreu três meses
            depois, em 6 de março de 1447.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Com as perseguições religiosas no tempo das revoluções, a comunidade de Gant foi dispersada.
            Em 1812, seis religiosas sobreviventes tentaram restaurar sua comunidade. Haviam sido
            proibidas pelo governo holandês, do qual a cidade dependia, de receber noviços e só em
            1830 puderam recuperar todos os seus direitos. Desde então o convento se expandiu para
            receber as noviças que ali acorriam e a comunidade começou a fervilhar sob o impulso da
            madre Giovanna Francesca Dumortier: &quot;zelosíssima pela tradição de Santa Coleta,
            reunião essas tradições em uma coleção&quot;.
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro de Tongres
          </h3>
          <Location>Tongren, Bélgica</Location>
          <div className={floatLeft}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-tongren.png"
                alt="Tongres, Bélgica"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Em 1845, Gant fundou um mosteiro em Tongres com Madre Maria Lucia. Este mosteiro também
            acolheu irmãs alemãs que foram exiladas por conta da secularização do estado.
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro Sagrado Coração
          </h3>
          <Location>Düsseldorf, Alemanha</Location>
          <div className={floatRight}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-dusseldorf.jpg"
                alt="Mosteiro Sagrado Coração, Düsseldorf"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Em 1859, duas irmãs de Tongren partiram para Dusseldorf, Alemanha, para uma fundação. O
            mosteiro final foi concluído em 1863.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Por conta da repressão do governo, as Clarissas de Dusseldorf refugiaram-se em Harrefeld
            (Holanda), e de lá enviaram dois grupos de fundadoras para Cleveland (USA) e Rio de Janeiro
            (Brasil).
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro de N. Sra dos Anjos
          </h3>
          <Location>Rio de Janeiro, Brasil</Location>
          <div className={floatLeft}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-rio-gavera.jpg"
                alt="Mosteiro Nossa Senhora dos Anjos, Rio de Janeiro"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            No dia 25 de setembro de 1928, aportaram no Rio de Janeiro as oito irmãs escolhidas para
            a ereção do Mosteiro Nossa Senhora dos Anjos da Porciúncula. Eram elas: Madre Maria
            Seráfica, Ir. Maria Juliana, Ir. Maria Boaventura, Ir. Maria Clara, Ir. Maria Agnela, Ir.
            Maria Columba, Ir. Maria Imaculada e Ir. Maria Terezinha.
          </p>
          <div className="clear-left grid grid-cols-3 gap-3 sm:grid-cols-6 mb-4">
            {SISTERS.map((sister) => (
              <figure key={sister.src} className="overflow-hidden rounded-lg border-2 border-border">
                <div className="relative aspect-square">
                  <Image
                    src={sister.src}
                    alt={sister.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <figcaption className="bg-muted px-2 py-1.5 text-center text-xs text-muted-foreground leading-snug">
                  {sister.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro de N. Sra. de Guadalupe
          </h3>
          <Location>Caicó – RN</Location>
          <div className={floatRight}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-caico.jpg"
                alt="Mosteiro de N. Sra. de Guadalupe, Caicó"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O então Bispo da diocese de Caicó-RN, Dom Heitor de Araújo Sales, fez vários pedidos para
            a ereção de um Mosteiro da Ordem de Santa Clara em sua diocese. O pedido foi aceito no ano
            de 1984, pelo Most. N. Sra. dos Anjos, RJ.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Para a fundação foram enviadas: Ir. Maria Coleta do Sagrado Coração de Jesus, vigária; Ir.
            Maria Ângela do Santíssimo Sacramento; Ir. Maria Madalena da Santa Cruz; Ir. Marlene Inácia
            de Jesus Hóstia; Ir. Maria do Rosário de Fátima da Ressurreição; Ir. Maria José de Jesus
            (noviça); Ir. Francis Maris da Imaculada (noviça); Ir. Lúcia Maria do Imaculado Coração
            (noviça). Era o dia 12 de junho de 1984.
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Mosteiro Maria Imaculada
          </h3>
          <Location>Marília – SP</Location>
          <div className={floatLeft}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-maria-imaculada.jpg"
                alt="Mosteiro Maria Imaculada, Marília"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Entre os anos de 1997 e 1998, Frei Irineu Andreassa, OFM, pediu uma fundação para a cidade
            de Marília-SP ao Mosteiro N. Sra. de Guadalupe. Rezando e confiando na Providência de Deus,
            as irmãs aceitaram.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A aprovação pontifícia para a fundação ocorreu no dia 16 de julho de 1999.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Nossas fundadoras: Me. Marlene Inácia de Jesus Hóstia, Ir. Francis Maris da Imaculada, Ir.
            Maria Madalena da Virgem Dolorosa, Ir. Maria Inês do Menino Jesus, Ir. Maria Francisca das
            Cinco Chagas, Ir. Isabela de Santa Maria dos Anjos, e algumas postulantes, chegaram em
            Marília no dia 19 de setembro do mesmo ano. A comunidade permaneceu em uma casa provisória
            até o término da construção. A inauguração ocorreu no dia 15 de novembro do ano seguinte.
          </p>

          <Separator className="clear-both my-6" />

          <h3 className="text-primary relative mb-2 text-lg font-semibold">
            <TimelineDot />
            Refundação do Mosteiro Nazaré
          </h3>
          <Location>Lages – SC</Location>
          <div className={floatRight}>
            <div className="relative aspect-4/3">
              <Image
                src="/mosteiro-nazare.jpg"
                alt="Mosteiro Nazaré, Lages"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Em 2011 um grupo de irmãs de nossa comunidade saiu para revitalizar o Mosteiro de Lages-SC
            a pedido do bispo local, na época, Dom Frei Irineu Andreassa, OFM. Em 2012, o Mosteiro
            passou a ser autônomo.
          </p>
          <div className="clear-both" />

        </div>
      </div>
    </div>
  )
}
