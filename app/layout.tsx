import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "./GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * SEO + PWA + OpenGraph + Favicon
 * Compatível com App Router
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://planilhafinanceirafacil.net.br"),
  title: {
    default: "Planilha de Fluxo de Caixa Avançado | Planilha Financeira Fácil",
    template: "%s | Planilha Financeira Fácil",
  },
  description:
    "Clareza total do dinheiro que entra e sai — decida com segurança todo mês.",
  keywords: [
    "fluxo de caixa",
    "planilha financeira",
    "controle financeiro",
    "MEI",
    "pequenos negócios",
    "relatórios",
    "dashboard",
  ],
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://planilhafinanceirafacil.net.br/",
    siteName: "Planilha Financeira Fácil",
    title: "Planilha de Fluxo de Caixa Avançado",
    description:
      "Controle financeiro prático com dashboard, relatórios e gráficos.",
    images: [
      {
        url: "/Dashboard.jpg",
        width: 1280,
        height: 720,
        alt: "Dashboard da planilha",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planilha de Fluxo de Caixa Avançado",
    description:
      "Controle financeiro prático com dashboard, relatórios e gráficos.",
    images: ["/Dashboard.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
