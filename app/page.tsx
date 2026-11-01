import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import JsonLd from "@/components/JsonLd";
import { SITE, ORDERED, NOW, NOW_CHECKED, TEASERS, CHANGELOG, fmtDate, latestChecked } from "@/lib/data";

export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { title: "Live Well PSL: checked guides to healthy living in Port St. Lucie", url: "/" } };

const LD = [
  { "@context": "https://schema.org", "@type": "WebSite", name: "Live Well PSL", url: SITE, description: "Curated, checked guides to healthy living in Port St. Lucie, Florida." },
  { "@context": "https://schema.org", "@type": "Organization", name: "Live Well PSL", url: SITE, sponsor: { "@type": "Organization", name: "G Salon & Spa", url: "https://gsalonspapsl.com" }, funder: { "@type": "Organization", name: "G Salon & Spa", url: "https://gsalonspapsl.com" } },
];

export default function Home() {
  const [feat, ...rest] = ORDERED;
  return (
    <>
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
      <h1 className="home-h1">Healthy living in Port St. Lucie: checked lists for Nov–Dec 2026</h1>
      <a className="arch" href={`/lists/${feat.slug}`}>
        <div className="arch-in">
          <span className="pill">Featured list</span>
          <h2>Turkey Trots &amp; 5Ks</h2>
          <p>{feat.entries.length} places and events for a healthy holiday season, Nov to Dec 2026.</p>
          <span className="go" aria-hidden>→</span>
        </div>
      </a>

      <h2 className="sec">Right now in PSL</h2>
      <div className="now">
        {NOW.map((n) => (
          <a key={n.title} href={n.href} rel="noopener nofollow" target="_blank">
            <b>{n.date}</b><br />{n.title}<span>{n.where}</span>
          </a>
        ))}
      </div>
      <p className="meta">Dates from official event pages, checked {fmtDate(NOW_CHECKED)}.</p>

      <h2 className="sec">More lists</h2>
      <div className="cards">
        {rest.map((l) => (
          <a key={l.slug} className="card" href={`/lists/${l.slug}`}>
            <span className="pill">{l.entries.length} entries</span>
            <h3>{l.short}</h3>
            <p>{TEASERS[l.slug]}</p>
            <span className="meta">Checked {fmtDate(latestChecked(l))}</span>
          </a>
        ))}
      </div>

      <Newsletter />

      <div className="trust">
        <h3 style={{ fontSize: 24, marginBottom: 6 }}>How we pick</h3>
        <p style={{ margin: 0 }}>
          Every place has an official page we read, and a date we checked it. No one pays to be listed. See the <a href="/about">criteria</a> and the <a href="/changelog">changelog</a> (latest: {fmtDate(CHANGELOG[0].date)}).
        </p>
      </div>
    </>
  );
}
