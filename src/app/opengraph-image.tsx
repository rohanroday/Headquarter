import { ImageResponse } from "next/og";

export const alt = "Headquarter — The ultimate marketing base camp. Gangtok, Sikkim.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share preview for WhatsApp, Instagram DMs, LinkedIn etc.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0d0b",
          color: "#f4ede2",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -220,
            width: 640,
            height: 640,
            borderRadius: 640,
            background: "#ef6327",
            opacity: 0.9,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 84,
              background: "#ef6327",
              color: "#0f0d0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            HQ
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>Headquarter</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3 }}>The ultimate</div>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, color: "#ef6327" }}>
            marketing base camp.
          </div>
          <div style={{ fontSize: 30, marginTop: 28, color: "#a39887" }}>Content · Marketing · Events — Gangtok, Sikkim</div>
        </div>
      </div>
    ),
    size,
  );
}
