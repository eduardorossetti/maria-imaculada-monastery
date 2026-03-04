import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { PageLayout } from "@/components/page-layout";
import { Providers } from "@/components/providers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://clarissasmarilia.com.br"),
  title: {
    default: "Mosteiro Maria Imaculada — Irmãs Clarissas de Marília",
    template: "%s | Mosteiro Maria Imaculada",
  },
  description:
    "Mosteiro Maria Imaculada — comunidade de Irmãs Clarissas de vida contemplativa em Marília-SP. Conheça nossa história, carisma, vocação e formação.",
  keywords: [
    "Mosteiro Maria Imaculada",
    "Irmãs Clarissas",
    "Clarissas Marília",
    "vida contemplativa",
    "clausura",
    "vocação religiosa",
    "Ordem de Santa Clara",
    "Marília SP",
  ],
  openGraph: {
    title: "Mosteiro Maria Imaculada — Irmãs Clarissas de Marília",
    description:
      "Comunidade de Irmãs Clarissas de vida contemplativa em Marília-SP. Conheça nossa história, carisma e vocação.",
    locale: "pt_BR",
    type: "website",
    siteName: "Mosteiro Maria Imaculada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosteiro Maria Imaculada — Irmãs Clarissas de Marília",
    description:
      "Comunidade de Irmãs Clarissas de vida contemplativa em Marília-SP.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geist.variable} antialiased`}
      >
        <Providers>
          <PageLayout>{children}</PageLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
