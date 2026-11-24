import raw from "@/data/lists.json";

export type Entry = { name: string; type: string; area: string; why: string; cost: string; hours: string; source: string; checked: string };
export type Faq = { q: string; a: string };
export type List = { slug: string; title: string; short: string; intro: string; faq: Faq[]; entries: Entry[] };

export const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://live-well-psl.vercel.app";
export const SALON_URL = "https://gsalonspapsl.com/?src=livewell";
export const LISTS = (raw as { lists: List[] }).lists;

// Order shown on the site: Turkey Trot / 5K list first, healthy eats last (research/COMPETITORS.md).
const ORDER = ["healthy-holiday-season-2026","parks-trails-outdoor-workouts","farmers-markets-fresh-local-food","free-low-cost-fitness-classes","self-care-and-recovery","healthy-places-to-eat"];
export const ORDERED = ORDER.map((s) => LISTS.find((l) => l.slug === s)!);

export const TEASERS: Record<string, string> = {
  "healthy-holiday-season-2026": "Turkey Trot at Tradition on Nov 26, plus the 5Ks we could confirm.",
  "parks-trails-outdoor-workouts": "Trails and boardwalks with an official page, hours and fees.",
  "farmers-markets-fresh-local-food": "Where to buy fresh, local food, side by side.",
  "free-low-cost-fitness-classes": "City passes, park loops and a weekly group run.",
  "self-care-and-recovery": "Spa, massage, yoga and a license check before you book.",
  "healthy-places-to-eat": "Lighter menus, one source and one date each.",
};

export const isFree = (e: Entry) => /^(free|no fee|no day-use|no charge)/i.test(e.cost);
export const outsidePSL = (e: Entry) => /outside port st\. lucie|fort pierce/i.test(e.why + " " + e.area);
export const latestChecked = (l: List) => l.entries.map((e) => e.checked).sort().slice(-1)[0];
export const fmtDate = (iso: string) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
export const mapsUrl = (e: Entry) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(e.area.replace(/\s*\(.*\)\s*$/, "") + (/port st\. lucie|fort pierce/i.test(e.area) ? "" : ", Port St. Lucie, FL"));
export const salonLink = (e: Entry) => (e.source.startsWith("https://gsalonspapsl.com") ? SALON_URL : e.source);

// "Right now in PSL": only dates seen on an official page (checked 2026-10-31).
export const NOW = [
  { date: "Sat Nov 14", title: "Freedom Isn't Free Run 5K", where: "Clover Park, St. Lucie West", href: "https://runsignup.com/Race/FL/PortSaintLucie/FreedomIsnTFreeRun5K" },
  { date: "Thu Nov 26", title: "Turkey Trot at Tradition (9th annual)", where: "Tradition Town Hall, 8:00 a.m. 5K", href: "https://raceroster.com/events/2026/138972/turkey-trot-at-tradition" },
  { date: "Sat Dec 5", title: "Festival of Lights", where: "MIDFLORIDA Credit Union Event Center", href: "https://visitstlucie.com/event/festival-of-lights-2/" },
];
export const NOW_CHECKED = "2026-10-31";

export const CHANGELOG = [
  { date: "2026-11-01", text: "Re-read 14 city, county, state and cafe pages in a browser and set their checked date to Nov 1, 2026. Corrections: Oxbow Eco-Center now shows its county-listed hours (Eco-Center Tue-Fri noon-4 p.m., Sat 10 a.m.-4 p.m.; trails dawn to dusk; free) and 4.5 miles of trails. Both city fitness centers now show their posted hours. Savannas Preserve notes that its education center and information desk are closed for renovations. Removed details we could not see on the official page: McCarty Ranch camping rates and acreage, and Whispering Pines tennis program prices. Stars and Stripes Park is now described as the city's announced June 4 opening." },
  { date: "2026-10-31", text: "Corrections after review: Turkey Trot at Tradition youth price (ages 18 and under) is $35, not $30. Our salon entry now shows its real hours and a \"from $35\" pedicure price, and sits after the independent places. Removed Massage Envy St. Lucie West because its cost and hours could not be confirmed on the company page. Added the December Dash note that online registration opens Dec 11." },
  { date: "2026-10-31", text: "Site launched with 6 lists (40 entries from official pages). Race dates, times and prices on the 5K list re-read on 2026-10-31. Turkey Trot at Tradition adult price now shows $45 (the $40 tier ended Oct 26)." },
  { date: "2026-10-27", text: "Research pass. Dropped as unverifiable or possibly closed: Nutrition S'Mart PSL, Clean Eatz Tradition, Dale Arepa Bar, Healthy Spot PSL (relocating), Southern Salt, Berry Fresh Cafe, Hand & Stone, and two 2024-only free classes." },
];
