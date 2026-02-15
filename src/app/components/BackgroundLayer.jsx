// src/app/components/BackgroundLayer.tsx
export default function BackgroundLayer() {
  return (
    <>
      {/* Base: immer durchgehend */}
      <div className="pointer-events-none fixed inset-0 -z-50 bg-[#020617]" />

      {/* Gradient: auch fixed -> keine Kante beim Scroll */}
      <div className="pointer-events-none fixed inset-0 -z-40 bg-gradient-to-b from-[#060f27] via-[#020617] to-black" />

      {/* Optional: minimaler Blur */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-black/10 backdrop-blur-[2px]" />
    </>
  );
}
