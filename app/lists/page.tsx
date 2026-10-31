import type { Metadata } from "next";
import { ORDERED, TEASERS, fmtDate, latestChecked } from "@/lib/data";

export const metadata: Metadata = { title: "All lists", description: "Every Live Well PSL list: 5Ks, parks, farmers markets, fitness, self-care and lighter eats in Port St. Lucie.", alternates: { canonical: "/lists" } };

export default function Lists() {
  return (
    <>
      <h1>All lists</h1>
      <p className="lede">Six checked guides to living well in Port St. Lucie. Each entry shows its official source and the date we last checked it.</p>
      <div className="cards" style={{ marginTop: 20 }}>
        {ORDERED.map((l) => (
          <a key={l.slug} className="card" href={`/lists/${l.slug}`}>
            <span className="pill">{l.entries.length} entries</span>
            <h3>{l.short}</h3>
            <p>{TEASERS[l.slug]}</p>
            <span className="meta">Checked {fmtDate(latestChecked(l))}</span>
          </a>
        ))}
      </div>
    </>
  );
}
