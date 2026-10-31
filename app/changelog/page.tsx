import type { Metadata } from "next";
import { CHANGELOG, fmtDate } from "@/lib/data";

export const metadata: Metadata = { title: "Changelog", description: "What was added, changed or removed on Live Well PSL, and when.", alternates: { canonical: "/changelog" } };

export default function Changelog() {
  return (
    <>
      <h1>Changelog</h1>
      <p className="lede">Every addition, correction and removal, newest first.</p>
      {CHANGELOG.map((c) => (
        <div key={c.date} className="trust"><strong>{fmtDate(c.date)}</strong><p style={{ margin: "6px 0 0" }}>{c.text}</p></div>
      ))}
    </>
  );
}
