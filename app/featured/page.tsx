import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Featured on Live Well PSL", description: "If your place is listed on Live Well PSL, here is a badge and link you can copy. Optional, free, and not an endorsement.", alternates: { canonical: "/featured" } };

const SNIP = `<a href="${SITE}" rel="noopener">Listed in Live Well PSL, Port St. Lucie healthy-living guides</a>`;

export default function Featured() {
  return (
    <>
      <h1>Featured on Live Well PSL</h1>
      <p className="lede">If your park, market, class, studio or event is on one of our lists, you are welcome to say so. This is optional and free. Being listed means we read your official page on the date shown; it is not a partnership, an award or an endorsement.</p>
      <h2 className="sec">The badge</h2>
      <p><a className="badge" href={SITE} rel="noopener"><small>Listed in</small><b>Live Well PSL</b><small>Port St. Lucie</small></a></p>
      <h2 className="sec">Copy this link</h2>
      <p>Paste this into your site&apos;s about, press or links page. Plain wording like this is best; please do not stuff keywords into the link text.</p>
      <pre className="snip">{SNIP}</pre>
      <h2 className="sec">Honest wording</h2>
      <p>Say &quot;listed in&quot; or &quot;featured in&quot;, not &quot;recommended by&quot; or &quot;award-winning&quot;. If you spot a wrong hour or price on your entry, tell us and we will fix it and note it in the <a href="/changelog">changelog</a>.</p>
    </>
  );
}
