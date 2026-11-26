import raw from "@/data/lists.json";

export type Entry = { name: string; type: string; area: string; why: string; cost: string; hours: string; source: string; checked: string };
export type Faq = { q: string; a: string };
export type List = { slug: string; title: string; short: string; intro: string; faq: Faq[]; entries: Entry[] };

export const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://live-well-psl.vercel.app";
export const SALON_URL = "https://gsalonspapsl.com/?src=livewell";
export const LISTS = (raw as { lists: List[] }).lists;

// Order shown on the site: Holiday / 5K list first, healthy eats last (research/COMPETITORS.md).
const ORDER = ["healthy-holiday-season-2026","parks-trails-outdoor-workouts","farmers-markets-fresh-local-food","free-low-cost-fitness-classes","self-care-and-recovery","healthy-places-to-eat"];
export const ORDERED = ORDER.map((s) => LISTS.find((l) => l.slug === s)!);

export const TEASERS: Record<string, string> = {
  "healthy-holiday-season-2026": "Free holiday lights, the Dec 12 December Dash 5K and outdoor classes.",
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

// "Right now in PSL": only dates seen on an official page (checked 2026-11-26).
export const NOW = [
  { date: "Nov 27 to Dec 31", title: "PSLinLights walk-through (free)", where: "The Port District, dusk to 9 p.m.", href: "https://www.cityofpsl.com/PSLinLights" },
  { date: "Sat Dec 5", title: "Festival of Lights", where: "MIDFLORIDA Credit Union Event Center", href: "https://visitstlucie.com/event/festival-of-lights-2/" },
  { date: "Sat Dec 12", title: "Centennial Athletics December Dash 5K", where: "St. Lucie West Centennial High School, 8 a.m.", href: "https://runsignup.com/Race/FL/PortSaintLucie/CentennialAthleticsDecemberDash" },
];
export const NOW_CHECKED = "2026-11-26";

export const CHANGELOG = [
  { date: "2026-11-26", text: "Weekly re-check. Removed the Turkey Trot at Tradition and the Pelican Yacht Club Turkey Trot (Fort Pierce) because their Nov 26 date has passed, and took the Turkey Trot out of Right now; the holiday list is now led by PSLinLights, the Festival of Lights and the December Dash. Re-opened the official pages for PSLinLights (free walk-throughs at The Port District and the Community Center, Nov 27 to Dec 31, dusk to 9 p.m.), Festival of Lights (Dec 5, 2-10 p.m.; the City's page says free admission and asks for a new, unwrapped toy for Toys for Tots), the December Dash (Dec 12, 8-10 a.m.; registration opens Dec 11) and the City Fitness Parks Pass (outdoor season Nov-Apr; still no outdoor class times); their checked date is now Nov 26, 2026. Correction: the Winter Wonderland sensory-friendly period is now listed as 5-6 p.m. with music off (we had 4:30-5:30 p.m.), with no dates given. Other entries were not re-opened this week and keep their earlier checked dates." },
  { date: "2026-11-19", text: "Weekly re-check. Removed the Port St. Lucie Green Market (Nov 15) from the Farmers markets and Holiday lists and from Right now: its Visit St. Lucie page says the event has passed and lists no next date. Re-opened the official pages for the Turkey Trot at Tradition (Nov 26, 8 a.m., $45 adults / $35 ages 18 and under; registration open, closes shortly before race day, no date given), Pelican Turkey Trot (7:45 a.m.; $45, price rises after Nov 22), PSLinLights, Festival of Lights, December Dash, City Fitness Parks Pass (outdoor classes Nov-Apr; schedule still not published), Fort Pierce Farmers Market, Sprouts, Just Salad and the Botanical Gardens; details matched and their checked date is now Nov 19, 2026. Changes: Festival of Lights now shows free admission per the City's PSLinLights page; PSLinLights notes the Winter Wonderland sensory-friendly hour (4:30-5:30 p.m.); the December Dash joins Right now. Fleet Feet's community page blocked our check (403) and the Berry Forkin' Good and Down to Earth Yoga pages still showed no hours or prices, so those keep their earlier dates." },
  { date: "2026-11-14", text: "Weekly re-check. Removed the Freedom Isn't Free Run 5K (Clover Park) because its Nov 14 date has arrived and passed. Added PSLinLights at The Port District: the city page now lists free walk-through dates, Nov 27 to Dec 31, dusk to 9 p.m. Corrected the Pelican Yacht Club Turkey Trot start time to 7:45 a.m. (we had 7:15; the race page now reads 7:45). Re-opened the official pages for the Turkey Trot at Tradition, the Pelican Turkey Trot, Festival of Lights, the December Dash, the Green Market, the Fort Pierce market, Sprouts, Fleet Feet and the City Fitness Parks Pass; dates, hours and prices otherwise matched and their checked date is now Nov 14, 2026. Berry Forkin' Good and Down to Earth Yoga pages did not show hours or prices to our check and keep their earlier dates." },
  { date: "2026-11-09", text: "Weekly re-check. Removed the 22nd Annual Muster 5K Beach Challenge (Fort Pierce) because its Nov 7 date has passed. Re-opened the official pages for the race and event entries, both Tradition and St. Lucie West 3Natives stores, Field of Greens, Just Salad, We Be Healthy, Sprouts, the Fort Pierce markets, Oak Hammock Park, the Botanical Gardens, Fleet Feet, Natural Spa and Sanctuary Spa; dates, hours and prices matched and their checked date is now Nov 9, 2026. One note added: the Freedom Isn't Free Run 5K page showed a Donate button but no sign-up button, so confirm registration with the organizers. The Savannas Preserve and Oxbow county and state pages blocked our check and keep their Nov 1 date." },
  { date: "2026-11-01", text: "Re-read 14 city, county, state and cafe pages in a browser and set their checked date to Nov 1, 2026. Corrections: Oxbow Eco-Center now shows its county-listed hours (Eco-Center Tue-Fri noon-4 p.m., Sat 10 a.m.-4 p.m.; trails dawn to dusk; free) and 4.5 miles of trails. Both city fitness centers now show their posted hours. Savannas Preserve notes that its education center and information desk are closed for renovations. Removed details we could not see on the official page: McCarty Ranch camping rates and acreage, and Whispering Pines tennis program prices. Stars and Stripes Park is now described as the city's announced June 4 opening." },
  { date: "2026-10-31", text: "Corrections after review: Turkey Trot at Tradition youth price (ages 18 and under) is $35, not $30. Our salon entry now shows its real hours and a \"from $35\" pedicure price, and sits after the independent places. Removed Massage Envy St. Lucie West because its cost and hours could not be confirmed on the company page. Added the December Dash note that online registration opens Dec 11." },
  { date: "2026-10-31", text: "Site launched with 6 lists (40 entries from official pages). Race dates, times and prices on the 5K list re-read on 2026-10-31. Turkey Trot at Tradition adult price now shows $45 (the $40 tier ended Oct 26)." },
  { date: "2026-10-27", text: "Research pass. Dropped as unverifiable or possibly closed: Nutrition S'Mart PSL, Clean Eatz Tradition, Dale Arepa Bar, Healthy Spot PSL (relocating), Southern Salt, Berry Fresh Cafe, Hand & Stone, and two 2024-only free classes." },
];
