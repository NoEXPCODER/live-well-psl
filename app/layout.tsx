import type { Metadata } from "next";
import { Playfair_Display, Barlow } from "next/font/google";
import "./globals.css";
import { SITE, SALON_URL } from "@/lib/data";

const head = Playfair_Display({ subsets: ["latin"], variable: "--font-head", display: "swap" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Live Well PSL: checked guides to healthy living in Port St. Lucie", template: "%s | Live Well PSL" },
  description: "Curated, checked and free of paid placements. Parks, 5Ks, markets, fitness and self-care in Port St. Lucie, each with an official source and a checked-on date.",
  openGraph: { siteName: "Live Well PSL", type: "website", title: "Live Well PSL: checked guides to healthy living in Port St. Lucie" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>
        <div className="wrap">
          <header className="mast">
            <a href="/" className="logo">Live Well PSL</a>
            <div className="rule" />
            <p className="promise">Curated, checked and free of paid placements.</p>
            <nav className="top" aria-label="Main">
              <a href="/">Home</a><a href="/lists">Lists</a><a href="/saved">Saved</a><a href="/about">About</a>
            </nav>
            <div className="rule-full" />
          </header>
          <main>{children}</main>
          <footer>
            <p>Live Well PSL is presented by <a href={SALON_URL} rel="noopener">G Salon &amp; Spa</a>, a nail salon in Port St. Lucie. Listed places are not partners and nothing here is paid placement.</p>
            <p><a href="/about">About &amp; criteria</a> · <a href="/changelog">Changelog</a> · <a href="/featured">Featured places</a> · <a href="/llms.txt">llms.txt</a></p>
          </footer>
        </div>
      </body>
    </html>
  );
}
