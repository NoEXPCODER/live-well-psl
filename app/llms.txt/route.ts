import { ORDERED, SITE, TEASERS } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# Live Well PSL",
    "> Curated, checked guides to healthy living in Port St. Lucie, Florida. Every entry has an official source URL and a checked-on date. No paid placement. Presented by G Salon & Spa.",
    "",
    "## Lists",
    ...ORDERED.map((l) => `- [${l.title}](${SITE}/lists/${l.slug}): ${TEASERS[l.slug]}`),
    "",
    "## About",
    `- [About and criteria](${SITE}/about)`,
    `- [Changelog](${SITE}/changelog)`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
