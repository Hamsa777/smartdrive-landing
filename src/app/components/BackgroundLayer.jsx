// src/app/components/BackgroundLayer.tsx
export default function BackgroundLayer() {
  return (
    <>
      {/* Diese Layer sind ABSOLUTE -> hängen am Seiten-Wrapper (nicht fixed) */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#060d2c]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-gradient-to-b from-[#060f27] via-[#020617] to-black" />


      {/* Optional: minimaler Blur, damit’s “smoother” wirkt */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-black/10 backdrop-blur-[2px]" />
    </>
  );
}
