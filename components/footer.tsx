import { MapPin, Mail, Phone, Youtube, ChevronRight } from "lucide-react"

const CONTACT = [
  { icon: MapPin, label: "Alameda Sta. Carolina, 150, Marília, 17514830, BR" },
  {
    icon: Mail,
    label: "mosteiro@clarissasmarilia.com.br",
    href: "mailto:mosteiro@clarissasmarilia.com.br",
  },
  { icon: Phone, label: "(14) 3454-8758", href: "tel:+551434548758" },
  {
    icon: Youtube,
    label: "@MosteiroMariaImaculada",
    href: "https://youtube.com/@MosteiroMariaImaculada",
  },
]

const RELATED_SITES = [
  { name: "Santa Sé", href: "https://www.vatican.va/content/vatican/pt.html" },
  { name: "CNBB", href: "https://www.cnbb.org.br/" },
  { name: "Federação Sag. Família", href: "https://clarissas.net.br/" },
  { name: "Custódia Franciscana", href: "https://ofmscj.com.br/" },
  { name: "CFFB", href: "https://cffb.org.br/" },
] as const

const linkClass =
  "hover:text-taupe-800 dark:hover:text-taupe-200 transition-colors"
const sectionTitleClass =
  "mb-4 text-sm font-semibold uppercase tracking-wider text-taupe-800 dark:text-taupe-400"
const textClass = "text-taupe-600 dark:text-taupe-400 space-y-3 text-sm"

export function Footer() {
  return (
    <footer
      className="border-t border-border mt-auto shadow-(--header-footer-shadow-top)"
      style={{ background: "var(--header-footer-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-2 md:px-6 md:pt-5 md:pb-2">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <section>
            <h3 className={sectionTitleClass}>Contato</h3>
            <ul className={textClass}>
              {CONTACT.map((item) => {
                const Icon = item.icon
                const content = (
                  <span className="inline-flex items-center gap-3">
                    <Icon className="size-4 shrink-0" />
                    {item.label}
                  </span>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
          <section>
            <h3 className={sectionTitleClass}>Sites relacionados</h3>
            <ul className={textClass}>
              {RELATED_SITES.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} inline-flex items-center gap-2`}
                  >
                    <ChevronRight className="size-4 shrink-0" />
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-2 pb-4 md:px-6 md:pt-2 md:pb-5">
        <p className="text-black text-center text-sm font-medium dark:text-white">
          © 2026 Mosteiro Maria Imaculada
        </p>
      </div>
    </footer>
  )
}
