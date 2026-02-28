"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/carisma", label: "Carisma" },
  { href: "/vocacao", label: "Vocação" },
  { href: "/formacao", label: "Formação" },
  { href: "/obra", label: "Obra" },
  { href: "/nosso-mosteiro", label: "Nosso Mosteiro" },
  { href: "/contate-nos", label: "Contate-nos" },
] as const

function NavLinks() {
  return (
    <>
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex flex-col">
          <span className="font-semibold text-lg leading-tight">
            Mosteiro Maria Imaculada
          </span>
          <span className="text-muted-foreground text-xs">
            Irmãs Clarissas
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            <NavLinks />
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Abrir menu de navegação"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon className="size-5" />
            <span className="text-sm font-medium">MENU</span>
          </Button>
        </div>
      </nav>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden"
        style={{ maxHeight: menuOpen ? "500px" : "0" }}
      >
        <ul
          className="border-t border-border bg-muted"
          role="navigation"
          aria-label="Menu principal"
        >
          {navItems.map(({ href, label }) => (
            <li key={href} className="border-b border-border last:border-b-0">
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground block py-4 pl-4 text-sm font-medium uppercase tracking-wide hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
