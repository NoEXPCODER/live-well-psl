import type { Metadata } from "next";
import SavedView from "@/components/SavedView";

export const metadata: Metadata = { title: "Saved", robots: { index: false } };

export default function Saved() {
  return (<><h1>Saved</h1><SavedView /></>);
}
