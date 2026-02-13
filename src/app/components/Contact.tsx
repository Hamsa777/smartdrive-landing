"use client";

// src/app/components/Contact.tsx
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="
        relative py-20 px-6 sm:px-8
        flex justify-center
        scroll-mt-[40vh]
      "
    >
      <div className="w-full max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="
            grid gap-10
            md:grid-cols-[1.2fr_1fr]
            md:grid-rows-[auto_1fr]
            items-start
          "
        >
          {/* LEFT / ROW 1 */}
          <div className="md:col-start-1 md:row-start-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">
                Kontakt
              </span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
              Lassen Sie Ihre {" "}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
               Planung automatisieren
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
                            Schreiben Sie uns eine kurze Nachricht und wir setzen uns mit Ihnen in Verbindung.

            </p>
          </div>

          {/* LEFT / ROW 2: Step Cards */}
          <div className="md:col-start-1 md:row-start-2">
            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
              {[
                { t: "Schritt 1", d: "Sie füllen die Onboarding Formulare aus und schicken uns Ihre Verfügbarkeiten zu." },
                { t: "Schritt 2", d: "Wir setzen Regeln, Versand und Planlauf sauber auf und automatisieren Ihre Planung." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-800/90 bg-slate-950/70 px-5 py-4"
                >
                  <div className="text-xs tracking-[0.22em] uppercase text-cyan-300/90">
                    {x.t}
                  </div>
                  <div className="mt-2 text-sm text-slate-200/90">{x.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT / ROW 2: hochziehen bis Bottom mit Step-Cards fluchtet */}
          <div className="md:col-start-2 md:row-start-2 md:-mt-19">
            <div className="relative rounded-[1.8rem] border border-slate-800/90 bg-slate-950/80 backdrop-blur-2xl px-6 sm:px-8 py-8 text-center shadow-[0_0_45px_rgba(15,23,42,0.95)] overflow-hidden">
              <div className="pointer-events-none absolute inset-[1px] rounded-[1.7rem] border border-slate-800/70" />
              <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500" />

              <div className="relative">
                <p className="text-xs tracking-[0.22em] uppercase text-slate-400 mb-3">
                  Direkt loslegen
                </p>

                <a
                  href="https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="
                    relative group inline-flex items-center justify-center rounded-full
                    bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
                    p-[2px]
                    shadow-[0_0_30px_rgba(79,70,229,0.85)]
                    hover:shadow-[0_0_40px_rgba(79,70,229,1)]
                    transition-shadow overflow-hidden
                  "
                >
                  <span className="relative flex items-center gap-2 sm:gap-3 px-7 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#020617] text-sm sm:text-base font-semibold text-white">
                    <FaComments className="w-4 h-4 sm:w-5 sm:h-5 opacity-90" />
                    Kontakt aufnehmen
                  </span>
                </a>

                <p className="mt-4 text-xs text-slate-400">
                  Monatlich kündbar.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
