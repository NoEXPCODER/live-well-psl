"use client";
import { useEffect, useState } from "react";
import type { Entry } from "@/lib/data";
import { isFree, outsidePSL, mapsUrl, salonLink, fmtDate } from "@/lib/data";

export function useSaved() {
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => {
    try { setSaved(JSON.parse(localStorage.getItem("lwpsl-saved") || "[]")); } catch {}
  }, []);
  const toggle = (id: string) =>
    setSaved((s) => {
      const n = s.includes(id) ? s.filter((x) => x !== id) : [...s, id];
      localStorage.setItem("lwpsl-saved", JSON.stringify(n));
      return n;
    });
  return { saved, toggle };
}

export function EntryCard({ e, n, id, saved, toggle }: { e: Entry; n?: number; id: string; saved: boolean; toggle: (id: string) => void }) {
  const ours = e.name.includes("(our salon)");
  const [more, setMore] = useState(false);
  const long = e.why.length > 130;
  return (
    <article className="entry" id={"e" + id.split(":")[1]}>
      {n ? <span className="num" aria-hidden>{n}</span> : null}
      <h3>{e.name}</h3>
      <div className="type">{e.type}</div>
      <p className={"why" + (long && !more ? " clamp" : "")}>{e.why}</p>
      {long && <button className="more" onClick={() => setMore(!more)} aria-expanded={more}>{more ? "Less" : "More"}</button>}
      {ours && <div className="ours">Our salon: we run G Salon &amp; Spa, so this entry is not an independent review.</div>}
      <dl className="facts">
        <dt>Where</dt><dd>{e.area} · <a href={mapsUrl(e)} rel="noopener">Directions</a></dd>
        <dt>Cost</dt><dd>{e.cost}</dd>
        <dt>When</dt><dd>{e.hours}</dd>
      </dl>
      <div className="tags">
        {isFree(e) && <span className="tag">Free</span>}
        {outsidePSL(e) && <span className="tag out">Outside PSL</span>}
        <a className="tag out" href={salonLink(e)} rel={ours ? "noopener" : "noopener nofollow"} target="_blank">Official source</a>
        <button className="save" onClick={() => toggle(id)} aria-pressed={saved}>{saved ? "Saved" : "Save"}</button>
      </div>
      <div className="chk">Checked on {fmtDate(e.checked)}</div>
    </article>
  );
}

export default function ListView({ slug, entries }: { slug: string; entries: Entry[] }) {
  const [f, setF] = useState<"all" | "free" | "fee" | "psl">("all");
  const { saved, toggle } = useSaved();
  const show = entries
    .map((e, i) => ({ e, i }))
    .filter(({ e }) => f === "all" || (f === "free" && isFree(e)) || (f === "fee" && !isFree(e)) || (f === "psl" && !outsidePSL(e)));
  const chips: [typeof f, string][] = [["all", "All"], ["free", "Free"], ["fee", "Fees apply"], ["psl", "In Port St. Lucie"]];
  return (
    <>
      <div className="chips" role="group" aria-label="Filter entries">
        {chips.map(([k, l]) => (
          <button key={k} className="chip" aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <div className="entries">
        {show.map(({ e, i }) => {
          const id = `${slug}:${i}`;
          return <EntryCard key={id} e={e} n={i + 1} id={id} saved={saved.includes(id)} toggle={toggle} />;
        })}
      </div>
      {show.length === 0 && <p>No entries match this filter.</p>}
    </>
  );
}
