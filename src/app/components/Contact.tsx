"use client";

// src/app/components/Contact.tsx
import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

const TALLY_EMBED_URL =
  "https://tally.so/embed/RG4PZJ?hideTitle=1&transparentBackground=1&dynamicHeight=1";

const CAL_LINK = "https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung";

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative group inline-flex items-center justify-center rounded-full
    border border-slate-500/70 bg-slate-900/60
    text-sm sm:text-base font-semibold text-slate-100
    px-7 sm:px-8 py-2.5 sm:py-3
    hover:bg-slate-900/80 transition-colors overflow-hidden
  "
>
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative z-10 flex w-[320px] max-w-full items-center justify-center gap-2 sm:gap-3 text-center">
    {children}
  </span>
</a>
  );
}

export default function Contact() {
  const [tallyReady, setTallyReady] = useState(false);

  useEffect(() => {
    // Helps on client-side navigations
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.Tally?.loadEmbeds?.();
  }, []);

  useEffect(() => {
    if (!tallyReady) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.Tally?.loadEmbeds?.();
  }, [tallyReady]);

  return (
    <section
      id="kontakt"
      className="
        relative py-20 px-6 sm:px-8
        flex justify-center
        scroll-mt-[40vh]
      "
    >
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          setTallyReady(true);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any)?.Tally?.loadEmbeds?.();
        }}
      />

      <div className="w-full max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          {/* HEADER */}
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">
                Kontakt
              </span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
             Unser{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Kontaktformular
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
              Füllen Sie das Kontaktformular aus, um SmartDrive kostenlos zu testen.
            </p>
          </div>

          {/* FORM */}
          <div className="mt-10">
            <div className="mx-auto w-full max-w-none">
              <div className="relative rounded-[1.8rem] border border-slate-800/90 bg-slate-950/80 backdrop-blur-2xl px-5 sm:px-8 py-7 shadow-[0_0_45px_rgba(15,23,42,0.95)] overflow-hidden">
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.7rem] border border-slate-800/70" />
                <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500" />

                <div className="relative text-center">
                  <p className="text-xs tracking-[0.22em] uppercase text-slate-400 mb-4">
                    Kontaktformular
                  </p>

                  <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 overflow-hidden">
                    <iframe
                      data-tally-src={TALLY_EMBED_URL}
                      loading="lazy"
                      width="100%"
                      height={360}
                      frameBorder={0}
                      marginHeight={0}
                      marginWidth={0}
                      title="SmartDrive Kontaktformular"
                      className="w-full"
                    />
                  </div>

                  <p className="mt-4 text-xs text-slate-400">
                    Antwort i. d. R. innerhalb von 24 Stunden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 STEPS */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            <div className="rounded-2xl border border-slate-800/90 bg-slate-950/70 px-5 py-5 text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-300/90">
                Schritt 1
              </div>
              <div className="mt-2 text-sm text-slate-200/90 leading-relaxed">
                Sie schicken das Kontaktformular ab.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-slate-950/70 px-5 py-5 text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-300/90">
                Schritt 2
              </div>
              <div className="mt-2 text-sm text-slate-200/90 leading-relaxed">
                Wir lassen Ihnen die Onboarding- und Verfügbarkeiten Formulare für SmartDrive zukommen.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-slate-950/70 px-5 py-5 text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-300/90">
                Schritt 3
              </div>
              <div className="mt-2 text-sm text-slate-200/90 leading-relaxed">
                SmartDrive übernimmt vollautomatisch Ihre Wochenplanung.
              </div>
            </div>
          </div>

          {/* CTA ausserhalb */}
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-xl rounded-2xl px-6 py-6 text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-cyan-300/90">
                Noch Fragen?
              </div>

              <div className="mt-5 flex justify-center">
                <SecondaryButton href={CAL_LINK}>
                  <FaComments className="w-4 h-4 sm:w-5 sm:h-5 opacity-90" />
                  Kostenloses Gespräch buchen
                </SecondaryButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}