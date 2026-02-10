// src/app/components/Header.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaComments } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Exakt der Hover aus deinem Snippet (Gradient-Overlay erscheint beim Hover)
  const headerHoverBtnClass =
    "relative group inline-flex items-center justify-center rounded-full " +
    "border border-slate-500/70 bg-slate-900/60 " +
    "text-sm font-semibold text-slate-100 " +
    "hover:bg-slate-900/80 transition-colors overflow-hidden " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

  const headerHoverOverlay = (
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  );

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 h-16 overflow-hidden border-b backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-slate-700/70 bg-slate-950/85 shadow-[0_18px_40px_rgba(0,0,0,0.40)]"
            : "border-slate-800/70 bg-slate-950/55",
        ].join(" ")}
      >
        {/* Accent-Line */}
        <div
          className={[
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] transition-opacity duration-300",
            scrolled ? "opacity-70" : "opacity-25",
          ].join(" ")}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            {/* ICON: groß, nichts abgeschnitten */}
            <div className="relative h-[280px] w-[280px] shrink-0">
              <Image
                src="/testlogo.png"
                alt="SmartDrive Icon"
                fill
                sizes="200px"
                quality={100}
                priority
                className="object-contain scale-[1.12] -translate-y-[-3px]"
              />
            </div>
          </a>

          {/* NAV: alle Links bekommen exakt den Hover */}
          <nav className="hidden md:flex items-center gap-3">
            <a href="#ablauf" className={headerHoverBtnClass + " px-4 py-2"}>
              {headerHoverOverlay}
              <span className="relative z-10">Ablauf</span>
            </a>

            <a href="#vorteile" className={headerHoverBtnClass + " px-4 py-2"}>
              {headerHoverOverlay}
              <span className="relative z-10">Vorteile</span>
            </a>

            <a href="#roi" className={headerHoverBtnClass + " px-4 py-2"}>
              {headerHoverOverlay}
              <span className="relative z-10">ROI-Rechner</span>
            </a>

            <a href="#faq" className={headerHoverBtnClass + " px-4 py-2"}>
              {headerHoverOverlay}
              <span className="relative z-10">FAQ</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Kontakt: exakt der Hover */}
            <a
              href="https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung"
                target="_blank"
                rel="noopener noreferrer"
              className={"hidden sm:inline-flex " + headerHoverBtnClass + " px-5 py-2"}
            >
              {headerHoverOverlay}
              <span className="relative z-10 inline-flex items-center gap-2">
                <FaComments className="text-cyan-200" />
                Kontakt
              </span>
            </a>

            {/* JETZT KOSTENLOS TESTEN: bleibt wie vorher (ausgenommen vom neuen Hover) */}
            <a
              href="#testen"
              className={[
                "relative group inline-flex items-center justify-center rounded-full",
                "bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] p-[2px]",
                "shadow-[0_0_28px_rgba(79,70,229,0.9)] hover:shadow-[0_0_36px_rgba(79,70,229,1)]",
                "transition-shadow duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]",
              ].join(" ")}
            >
              <span className="absolute inset-[2px] rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
              <span className="absolute inset-[2px] rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

              <span className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full bg-[#020617] text-sm font-semibold text-white">
                Jetzt kostenlos testen
              </span>
            </a>
          </div>
        </div>
      </header>

      <div className="h-16" aria-hidden="true" />
    </>
  );
}
