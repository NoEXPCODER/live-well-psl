import { ImageResponse } from "next/og";

export const alt = "Live Well PSL: checked guides to healthy living in Port St. Lucie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Type-only card in the brand palette (ivory, sage, gold, espresso). No photos, no AI imagery.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FAF6EC" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 1080, height: 510, border: "4px solid #B8943F", borderRadius: 40, background: "#DCE4CC", color: "#3B2A20", fontFamily: "Georgia, serif" }}>
          <div style={{ fontSize: 112, lineHeight: 1 }}>Live Well PSL</div>
          <div style={{ width: 120, height: 4, background: "#B8943F", margin: "28px 0" }} />
          <div style={{ fontSize: 38, color: "#4F6647" }}>Checked guides to healthy living in Port St. Lucie</div>
          <div style={{ fontSize: 26, marginTop: 22, color: "#65584C", letterSpacing: 4 }}>PRESENTED BY G SALON &amp; SPA</div>
        </div>
      </div>
    ),
    size,
  );
}
