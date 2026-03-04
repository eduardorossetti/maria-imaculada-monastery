import type { Metadata } from "next"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Vocacional",
  description: "Sente um chamado para a vida contemplativa? Conheça as etapas de discernimento e formação das Irmãs Clarissas do Mosteiro Maria Imaculada em Marília-SP.",
}

function TimelineDot() {
  return (
    <span
      aria-hidden
      className="absolute top-[0.35rem] -left-7 sm:-left-9 size-2.5 rounded-full bg-primary ring-2 ring-background"
    />
  )
}

const floatLeft =
  "mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-lg border-2 border-border md:float-left md:ml-0 md:mr-4 md:max-w-none md:w-56 md:shrink-0"
const floatRight =
  "mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-lg border-2 border-border md:float-right md:ml-4 md:mr-0 md:max-w-none md:w-56 md:shrink-0"

export default function VocacaoPage() {
  return (
    <div className="bg-section-bg py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-6 w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border">
          <div className="relative aspect-4/3">
            <Image
              src="/santa-clara.jpg"
              alt="Santa Clara de Assis"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Quando uma jovem se sente interpelada por Deus na sua escolha de vida, surgem muitas
          perguntas. É sempre assim. Queremos saber tudo. Tanto para nós, como para explicar aos
          outros a nossa opção de vida. É sempre difícil, quiçá impossível, determinar o momento em
          que Deus convida a si aquela alma, por meio daquilo que chamamos de &quot;vocação&quot;.
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          É sobretudo difícil porque o momento em que Deus se torna presente na alma, chamando-a de
          modo preciso e pessoal, permanece sempre um segredo confiado à mesma alma; é difícil
          também porque o chamado de Deus, na maioria das vezes, não acontece de improviso, mas
          gradualmente, através de um lento atuar da graça, que invade a alma, a fim de que possa
          reconhecer a voz daquele que a chama.
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Em todo caso, o nascimento de uma vocação, quer a alma esteja consciente, quer não,
          implica sempre uma mudança de vida: a vocação produz sempre uma &quot;conversão&quot; (é
          precisamente este o termo que nossa Mãe Santa Clara usou para indicar o momento no qual
          ela deixou o mundo para seguir a Cristo). Nem sempre essa mudança de vida é nítida
          exteriormente, sobretudo nos casos em que a pessoa chamada jamais esteve longe de Deus.
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          Uma vez percebido o convite de Deus, mesmo que a vida pareça continuar inalterada, muda o
          sentido interior dos atos, aquilo que se fazia para conseguir determinados objetivos agora
          se faz somente para aderir à vontade de Deus. Certamente o desejo de solidão que acompanha
          o início da vocação contemplativa, como costuma acontecer, é a necessidade de um silêncio
          no qual a voz de Deus, que chega até a alma, possa ser escutada mais nitidamente,
          entendida em seu significado mais autêntico e desfrutada em sua doçura. A própria Santa
          Clara demonstra que é realmente assim: quando a família está reunida e conversando, ela
          participa animadamente, mas um só é o seu assunto, de uma coisa só parece saber falar: de
          Deus e das coisas de Deus, porque não pensava em outra coisa.
        </p>

        <blockquote className="border-primary text-muted-foreground my-5 rounded-r-lg border-l-4 bg-muted/30 py-3 pl-4 pr-4 italic">
          &quot;Clara, a primeira plantinha de Francisco&quot;, Ir. Chiara Augusta Lainati, OSC.
        </blockquote>

        {/* Etapas de Formação */}
        <h2 className="text-primary mt-10 border-b border-border pb-3 mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
          Etapas de Formação
        </h2>

        <blockquote className="border-primary text-muted-foreground mb-8 rounded-r-lg border-l-4 bg-muted/30 py-3 pl-4 pr-4 italic">
          &quot;A formação da pessoa consagrada é um itinerário que deve levar à configuração com o
          Senhor Jesus e à assimilação dos seus sentimentos na sua oblação total ao Pai&quot;.
          <footer className="mt-2 not-italic font-medium text-sm">Vultum Dei Quaerere</footer>
        </blockquote>

        <div className="relative border-l-2 border-primary pl-6 sm:pl-8">

          {/* Candidata */}
          <div className="relative mb-0">
            <TimelineDot />
            <h3 className="text-primary mb-3 text-lg font-semibold">Candidata</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ao entrar em contato conosco, a jovem passa por um tempo de discernimento através de
              visitas ao mosteiro, a fim de adquirir um conhecimento básico da essência e das
              exigências de nossa vida. Tudo isso em um acompanhamento conjunto com a comunidade,
              que a ajuda a discernir a vontade de Deus.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Aspirante e Postulante */}
          <div className="relative mb-0">
            <TimelineDot />
            <h3 className="text-primary mb-3 text-lg font-semibold">Aspirante e Postulante</h3>
            <div className={floatLeft}>
              <Image
                src="/aspirantado.jpg"
                alt="Aspirante e Postulante"
                width={0}
                height={0}
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Feito o pedido de entrada e obtido o consentimento das irmãs, a jovem inicia o
              aspirantado, sendo este, primeiramente, fora da clausura, sem o uso do véu.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Após certo período, inicia sua experiência na clausura e, para isso, recebe o véu. É
              inserida no ritmo da comunidade e no convívio fraterno das irmãs.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Esta etapa dura um ano, sendo que, no primeiro ano, após cada semestre, a jovem visita
              a família.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seguindo para o postulantado, a jovem, já introduzida nos santos costumes, adentra a
              espiritualidade própria de nossa Ordem com um conhecimento maior de nossos Seráficos
              Fundadores. Este período dura dois anos.
            </p>
            <div className="clear-both" />
          </div>

          <Separator className="my-8" />

          {/* Noviça */}
          <div className="relative mb-0">
            <TimelineDot />
            <h3 className="text-primary mb-3 text-lg font-semibold">Noviça</h3>
            <div className={floatRight}>
              <Image
                src="/novica.jpg"
                alt="Noviça"
                width={0}
                height={0}
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Optando em prosseguir o caminho, a postulante faz o pedido de admissão ao noviciado.
              Obtido o consentimento das irmãs, em uma cerimônia tradicional belíssima, a jovem,
              vestida de noiva, tem os cabelos tonsurados pela abadessa.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A noviça recebe um nome religioso e as vestes da Ordem: o véu branco, sinal da pureza
              de coração; a pala, touca branca que vela parte do rosto e o busto, sinal da
              mortificação dos sentidos e do coração; o santo hábito, que costurado em forma de
              cruz, significa a configuração ao Cristo crucificado; a corda franciscana, que nos
              lembra que somos peregrinas e forasteiras neste mundo, e é um sinal de nosso desejo de
              união com o Senhor; a Coroa Seráfica, um rosário de sete dezenas, onde meditamos as
              sete alegrias de Maria Santíssima; e, por fim, a capa, sinal da presença escondida de
              Cristo em nós, seus templos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Esta etapa tem dois anos e meio de duração e é todo imbuído de um discernimento mais
              profundo e uma preparação direta para a emissão dos santos votos.
            </p>
            <div className="clear-both" />
          </div>

          <Separator className="my-8" />

          {/* Juniorista */}
          <div className="relative mb-0">
            <TimelineDot />
            <h3 className="text-primary mb-3 text-lg font-semibold">Juniorista</h3>
            <p className="text-muted-foreground leading-relaxed">
              Recebida a aprovação da comunidade, durante a Santa Missa, a noviça faz os votos de
              viver em pobreza, castidade, obediência e clausura por três anos e troca o véu branco
              pelo preto, sinal da morte para o mundo e da vida entregue ao Senhor e ao serviço da
              Santa Igreja. Após o término dos três primeiros anos a jovem professa renova os votos
              por mais dois, durando esta etapa cinco anos.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Professa Solene */}
          <div className="relative mb-0">
            <TimelineDot />
            <h3 className="text-primary mb-3 text-lg font-semibold">Professa Solene</h3>
            <div className={floatLeft}>
              <Image
                src="/professa.jpg"
                alt="Professa Solene"
                width={0}
                height={0}
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Após este longo tempo de discernimento e preparação, estando decidida a viver até à
              morte na Santa Ordem e observar a Santa Regra, confiando não nas próprias forças, mas
              na graça de Deus, faz assim a sua Profissão Solene de Votos Perpétuos durante a Santa
              Missa, em uma celebração de profundo significado. Nela a irmã recebe a coroa de
              espinhos sobre a cabeça e o anel esponsal que usará constantemente, pois é agora,
              verdadeiramente, esposa de Cristo… não por seus méritos, mas por um desígnio
              insondável do amor de Deus!
            </p>
            <div className="clear-both" />
          </div>

        </div>
      </div>
    </div>
  )
}
