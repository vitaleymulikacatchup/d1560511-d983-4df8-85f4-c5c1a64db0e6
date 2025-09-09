import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeVerse",
  description: "Launch a single-page memes landing with sections for hero, about, how to buy, tokenomics, and footer; provide anchor navigation and basic visuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
        style={{ background: "linear-gradient(135deg, #FF5A7A 0%, #F472B6 40%, #4DDEFF 100%)" }}
      >
        {children}
      </body>
    </html>
  );
}
