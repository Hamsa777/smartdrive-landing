// src/app/components/Testimonials.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { styles } from "../lib/styles";

/**
 * Lege deine Logos z.B. hier ab:
 * public/logos/fahrschule-1.svg
 * public/logos/fahrschule-2.png
 * ...
 * Dann hier unten die Liste anpassen.
 */
const LOGOS: { src: string; alt: string }[] = [
  { src: "/logos/fahrschule-1.svg", alt: "Fahrschule Logo 1" },
  { src: "/logos/fahrschule-2.svg", alt: "Fahrschule Logo 2" },
  { src: "/logos/fahrschule-3.svg", alt: "Fahrschule Logo 3" },
  { src: "/logos/fahrschule-4.svg", alt: "Fahrschule Logo 4" },
  { src: "/logos/fahrschule-5.svg", alt: "Fahrschule Logo 5" },
  { src: "/logos/fahrschule-6.svg", alt: "Fahrschule Logo 6" },
];

export default function Testimonials() {
  return (
    <Section tone="light" id="trust" className="relative overflow-hidden">
      {/* Subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-60px] h-[420px] w-[420px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_10px_35px_rgba(2,6,23,0.06)]">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] shadow-[0_0_18px_rgba(245,158,11,0.45)]" />
            Vertraut von Fahrschulen in DE/AT/CH
          </div>

          <h2 className={`${styles.h2} mt-5 text-slate-950`}>
            Premium-Abläufe statt Termin-Chaos
          </h2>
          <p className={`${styles.lead} mt-4`}>
            SmartDrive sorgt für klare Prozesse: Verfügbarkeiten rein, Wochenplan raus —
            zuverlässig und skalierbar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-10"
        >
          <div
            className={[
              styles.card,
              "relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8",
            ].join(" ")}
          >
            {/* Edge fade */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
            />

            {/* Row 1 */}
            <MarqueeRow logos={LOGOS} speedSec={22} direction="left" />

            {/* Row 2 (reverse, slightly faster) */}
            <div className="mt-6">
              <MarqueeRow logos={LOGOS} speedSec={18} direction="right" />
            </div>

            {/* Bottom micro text */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Weniger Rückfragen
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Bessere Auslastung
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Klarer Wochenprozess
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function MarqueeRow({
  logos,
  speedSec,
  direction,
}: {
  logos: { src: string; alt: string }[];
  speedSec: number;
  direction: "left" | "right";
}) {
  // Repeat twice for seamless loop
  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`marquee ${direction === "right" ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as any]: `${speedSec}s` }}
      >
        {items.map((l, idx) => (
          <div
            key={`${l.src}-${idx}`}
            className="grid h-12 w-44 place-items-center rounded-[18px] border border-slate-200 bg-white px-4 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:h-14 sm:w-52"
          >
            {/* Use <img> so missing files don't crash dev builds */}
            <img
              src={l.src}
              alt={l.alt}
              className="max-h-7 w-auto max-w-[140px] opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:max-h-8 sm:max-w-[160px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: marquee var(--marquee-duration) linear infinite;
          will-change: transform;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
