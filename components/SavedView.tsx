"use client";
import { LISTS, entryId, type Entry } from "@/lib/data";
import { EntryCard, useSaved } from "./ListView";

export default function SavedView() {
  const { saved, toggle } = useSaved();
  const items = saved
    .map((id) => {
      const s = id.split(":")[0];
      const l = LISTS.find((x) => x.slug === s);
      const e = l?.entries.find((x) => entryId(s, x) === id);
      return e ? { id, e: e as Entry } : null;
    })
    .filter(Boolean) as { id: string; e: Entry }[];
  if (!items.length) return <p>Nothing saved yet. Tap Save on any entry. Saves stay on this device only; there is no login.</p>;
  return (
    <>
      <p className="disclosure">
        Saved on this device only. <button className="save" style={{ marginLeft: 0 }} onClick={() => window.print()}>Print this list</button>
      </p>
      <div className="entries">
        {items.map(({ id, e }) => <EntryCard key={id} e={e} id={id} saved toggle={toggle} />)}
      </div>
    </>
  );
}
