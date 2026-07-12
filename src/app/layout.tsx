import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://builddesk-portfolio.workers.dev"),
  title: {
    default: "Ayinachiso Nweze - Full-Stack Developer",
    template: "%s - Ayinachiso Nweze",
  },
  description:
    "A playful full-stack developer portfolio for Ayinachiso Nweze, covering polished interfaces, backend systems, SaaS, accessibility tech, ecommerce, and interactive web work.",
  openGraph: {
    title: "Ayinachiso Nweze - Full-Stack Developer",
    description: "BuildDesk: a playful digital workbench for serious web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF7E8" },
    { media: "(prefers-color-scheme: dark)", color: "#101812" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${sans.variable} ${display.variable} ${mono.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
