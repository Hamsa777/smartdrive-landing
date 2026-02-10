"use client";

// src/app/components/QuickSetup.tsx
import { motion } from "framer-motion";
import { FaCalendarCheck, FaCheckCircle, FaComments, FaSlidersH, FaUserCheck, FaWhatsapp } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

export default function QuickSetup() {
  return (
    <section id="testen" className="relative py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">
                Kostenlos testen
              </span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
              Starte mit SmartDrive{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                ohne Risiko
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Für den Test reicht ein simples Setup: Onboarding-Formulare, WhatsApp-Versand und dein Planungszeitpunkt.
              Danach siehst du sofort, wie sauber die Wochenplanung laufen kann.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Schülerdaten strukturiert", i: <FaUserCheck /> },
                { t: "Verfügbarkeit per WhatsApp", i: <FaWhatsapp /> },
                { t: "Optimierung nach Regeln", i: <FaSlidersH /> },
                { t: "Automatischer Wochenplan", i: <FaCalendarCheck /> },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-xl border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-cyan-200">
                    {x.i}
                  </div>
                  <div className="text-sm text-slate-200">{x.t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-slate-800 to-indigo-500/30 shadow-[0_0_55px_rgba(15,23,42,0.9)]">
            <div className="relative rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-slate-800/90 overflow-hidden p-6 sm:p-7">
              <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

              <div className="relative">
                <p className="text-xs tracking-[0.22em] uppercase text-slate-400">Quick Start</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Test-Setup anfragen</h3>
                <p className="mt-3 text-sm text-slate-200/90 leading-relaxed">
                  Hier kannst du später ein Formular oder einen Buchungslink einbauen. Vorerst sind es Anker-Links.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {/* FIX: Buttontext korrekt */}
                  <a
                    href="#testen"
                    className="
                      relative group inline-flex items-center justify-center rounded-full
                      bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
                      p-[2px]
                      shadow-[0_0_22px_rgba(79,70,229,0.9)]
                      hover:shadow-[0_0_30px_rgba(79,70,229,1)]
                      transition-shadow
                    "
                  >
                    <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#020617] text-sm font-semibold text-white">
                      Jetzt kostenlos testen <FaCheckCircle className="text-cyan-200" />
                    </span>
                  </a>

                  <a
                    href="#kontakt"
                    className="
                      relative group inline-flex items-center justify-center rounded-full
                      border border-slate-500/70 bg-slate-900/60
                      text-sm font-medium text-slate-100
                      px-6 py-2.5 hover:bg-slate-900/80 transition-colors
                      overflow-hidden
                    "
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <FaComments className="text-cyan-200" />
                      Kontakt
                    </span>
                  </a>
                </div>

                <p className="mt-5 text-xs text-slate-400">
                  Du kannst die Links später easy auf Cal.com / Formular / Checkout setzen.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
