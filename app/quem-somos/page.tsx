import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Somos uma comunidade religiosa de vida contemplativa em Marília-SP. Pertencemos à Ordem de Santa Clara, professando os votos de pobreza, castidade, obediência e clausura.",
}

const floatLeftLg =
  "mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-lg border-2 border-border md:float-left md:ml-0 md:mr-4 md:max-w-none md:w-96 md:shrink-0 lg:w-[28rem]"
const floatRightLg =
  "mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-lg border-2 border-border md:float-right md:ml-4 md:mr-0 md:max-w-none md:w-96 md:shrink-0 lg:w-[28rem]"

export default function QuemSomosPage() {
  return (
    <div className="bg-section-bg py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className={floatLeftLg}>
          <div className="relative aspect-4/3">
            <Image
              src="/quem-somos.jpg"
              alt="Mosteiro Maria Imaculada"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Somos uma comunidade religiosa de vida contemplativa, que professa os votos de pobreza,
          castidade, obediência e clausura. Pertencemos à Ordem de Santa Clara (OSC), conhecida como
          &quot;Ordem das Clarissas&quot;, fundada em 1212 por nosso pai São Francisco e Santa Clara.
          Observamos a Regra de nossa Mãe Santa Clara e as Constituições das Pobres Clarissas
          Coletinas.
        </p>

        <blockquote className="border-primary text-muted-foreground my-5 rounded-r-lg border-l-4 bg-muted/30 py-3 pl-4 pr-4 italic">
          &quot;Por nossa vida contemplativa, somos especialmente dedicadas à união com Deus e ao Seu
          culto público, que encontra sua mais plena expressão na Sagrada Liturgia. A oração e o
          trabalho estão ordenados de tal modo que ao mesmo tempo fluam do e contribuam para o Santo
          Sacrifício da Missa e a Liturgia das Horas ao redor dos que gira o horário&quot;.
          (Constituições)
        </blockquote>

        <h2 className="text-primary clear-left mt-10 border-b border-border pb-3 mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
          Dia a dia
        </h2>
        <div className={floatRightLg}>
          <div className="relative aspect-4/3">
            <Image
              src="/dia-a-dia.jpg"
              alt="Dia a dia no mosteiro"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Acordamos às 5h da manhã, ao toque do sino. Dirigimo-nos, então, ao coro monástico onde,
          após as orações de oferecimento do dia, iniciamos o Ofício de Laudes. Um breve ensaio de
          canto e a oração do Angelus, antecedem a procissão que encaminha-se para o refeitório,
          onde tomamos o café da manhã. Após este, dedicamo-nos à trabalhos domésticos como varrer a
          casa, lavar a louça, etc…
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Às 6h40 o Santíssimo Sacramento é solenemente exposto e ali, diante d&apos;Ele, fazemos a
          meditação da Sagrada Escritura e preparamos para o ápice do dia: a Santa Missa! Após a
          ação de graças pela Santa Comunhão, o Santíssimo Sacramento é novamente exposto. Recitamos
          o santo terço e cantamos o Ofício de Tércia, pedindo a graça do Espírito Santo, não apenas
          para nosso dia, mas para todo o mundo. Com o início dos trabalhos manuais segue-se o
          revezamento na adoração diurna.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Cada irmã dedica-se a um trabalho: bordado de corporais, restauração de imagens,
          fabricação de velas, jardinagem, cozinha, lavanderia e costura. Tudo isso entrelaçado com a
          vida de oração, pois exorta-nos nossa Seráfica Mãe Clara: &quot;não extingam o espírito da
          santa oração e devoção, ao qual as outras coisas temporais devem servir&quot; (Reg. VII).
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Às 11h45 deixamos o trabalho e nos dirigimos para o coro, em procissão, para um breve
          exame de consciência, a oração do Angelus e o Ofício de Sexta. Segue-se o almoço no
          refeitório e os serviços domésticos. Às 13h45 o sino dá início ao horário de descanso.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Às 14h45 voltamos ao coro para cantar o Ofício de Nona. Segue-se o revezamento de oração e
          trabalho até o Ofício de Vésperas, seguido por um tempo de leitura espiritual.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Às 17h30 tomamos uma refeição frugal e dedicamo-nos, novamente, aos trabalhos domésticos
          até às 18h45, horário em que começa a recreação, onde temos licença de conversar. O sino
          encerra este momento após uma hora, preparamos-nos para a oração de Completas e o início
          do Grande Silêncio. A depender do dia, estaremos durante toda a noite em vigília,
          revezando-nos à companhia de Jesus Sacramentado; em outros despertaremos à meia-noite para
          cantar as Matinas, costume que perdura desde a fundação de nossa Ordem. Ou simplesmente
          descansaremos nossos corpos durante toda a noite, para podermos louvá-Lo, com nossas
          forças refeitas, ao raiar de um novo dia, para a maior honra e glória de Deus!
        </p>
        <div className="clear-both" />
      </div>
    </div>
  )
}
