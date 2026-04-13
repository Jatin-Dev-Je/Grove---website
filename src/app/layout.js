import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grove — The Memory Layer for Human Intelligence",
  description:
    "Grove watches silently as you work. Builds a living knowledge graph of everything you know. Makes every AI you use 10x smarter about you — automatically. 100% on-device. Zero cloud.",
  keywords: [
    "Grove",
    "knowledge graph",
    "AI memory",
    "personal AI",
    "MCP",
    "on-device AI",
    "second brain",
    "ambient capture",
    "knowledge management",
  ],
  authors: [{ name: "Grove" }],
  openGraph: {
    title: "Grove — The Memory Layer for Human Intelligence",
    description:
      "Your mind's operating system. Captures everything, builds your knowledge graph, surfaces memories proactively.",
    url: "https://grove.ai",
    siteName: "Grove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grove — The Memory Layer for Human Intelligence",
    description:
      "Your mind's operating system. 100% on-device. Zero cloud. Zero effort.",
  },
  metadataBase: new URL("https://grove.ai"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
