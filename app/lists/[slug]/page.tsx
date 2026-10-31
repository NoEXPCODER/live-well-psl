import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ListView from "@/components/ListView";
import { LISTS, SITE, fmtDate, latestChecked } from "@/lib/data";

export function generateStaticParams() { return LISTS.map((l) => ({ slug: l.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = LISTS.find((x) => x.slug === slug);
  if (!l) return {};
  return { title: l.title, description: l.intro.slice(0, 155), alternates: { canonical: `/lists/${slug}` }, openGraph: { title: l.title, description: l.intro.slice(0, 155), type: "article" } };
}

export default async function ListPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = LISTS.find((x) => x.slug === slug);
  if (!l) notFound();
  const url = `${SITE}/lists/${l.slug}`;
  const upd = latestChecked(l);
  const ld = [
    { "@context": "https://schema.org", "@type": "Article", headline: l.title, description: l.intro, dateModified: upd, datePublished: "2026-10-31", mainEntityOfPage: url, author: { "@type": "Organization", name: "Live Well PSL" }, publisher: { "@type": "Organization", name: "Live Well PSL", url: SITE } },
    { "@context": "https://schema.org", "@type": "ItemList", name: l.title, numberOfItems: l.entries.length, itemListElement: l.entries.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.name, url: e.source })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Live Well PSL", item: SITE },
      { "@type": "ListItem", position: 2, name: "Lists", item: `${SITE}/lists` },
      { "@type": "ListItem", position: 3, name: l.short, item: url } ] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: l.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
      <div className="crumbs"><a href="/">Live Well PSL</a> / <a href="/lists">Lists</a> / {l.short}</div>
      <h1>{l.title}</h1>
      <p className="lede">{l.intro}</p>
      <p className="meta">Updated {fmtDate(upd)} · {l.entries.length} entries · Presented by G Salon &amp; Spa, no paid placement</p>
      <div className="criteria">
        <strong>Why a place is on this list</strong>
        <ul>
          <li>It has an official page (city, county, state, race registration or the business&apos;s own site) that we read.</li>
          <li>It is open to the public, with price and hours shown only when that page states them.</li>
          <li>Nobody paid to be here. Where a fact was not published, we say so instead of guessing.</li>
        </ul>
      </div>
      <ListView slug={l.slug} entries={l.entries} />
      <h2 className="sec">Questions</h2>
      <div className="faq">
        {l.faq.map((f) => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
      </div>
      <p className="disclosure">Prices, dates and hours change. Use the source link on each entry to confirm before you go.</p>
    </>
  );
}
