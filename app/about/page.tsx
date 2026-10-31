import type { Metadata } from "next";
import { SALON_URL } from "@/lib/data";

export const metadata: Metadata = { title: "About and criteria", description: "Who runs Live Well PSL, how places are picked, and what no paid placement means.", alternates: { canonical: "/about" } };

export default function About() {
  return (
    <>
      <h1>About Live Well PSL</h1>
      <p className="lede">Live Well PSL is a small community magazine of checked lists that help people in Port St. Lucie, Florida live a little healthier. It is free, with no accounts and no ads.</p>
      <h2 className="sec">Who is behind it</h2>
      <p>It is presented by <a href={SALON_URL} rel="noopener">G Salon &amp; Spa</a>, a nail salon in Port St. Lucie. We pay for the site; listed places do not pay and are not our partners. Our salon appears once, in the self-care list, and is labeled &quot;our salon&quot;.</p>
      <h2 className="sec">How a place gets on a list</h2>
      <ul>
        <li>An official source: city, county or state page, race registration, or the business&apos;s own site.</li>
        <li>Open to the public. Free or reasonably priced where we say so.</li>
        <li>Facts only from that source, with the date we read it. If hours or prices conflict between sources, we leave them out.</li>
        <li>No paid placement, no rankings, no &quot;best of&quot; claims. We list what we could confirm.</li>
      </ul>
      <h2 className="sec">What we do not do</h2>
      <p>We do not give medical advice. General wellness information comes only from the linked official sources. If you have a health concern, ask a licensed professional.</p>
      <h2 className="sec">Keeping it current</h2>
      <p>Each entry shows a &quot;checked on&quot; date. Lists are re-read against their sources every week, and changes are written to the <a href="/changelog">changelog</a>.</p>
    </>
  );
}
