"use client";

// src/app/components/Benefits.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaCalendarCheck,
  FaCoins,
  FaBolt,
  FaUserShield,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

type Card = { icon: ReactNode; title: string; desc: string };

export default function Benefits() {
  const cards: Card[] = [
   {
  icon: <FaCalendarCheck className="w-5 h-5" />,
  title: "Zuverlässige Terminplanung",
  desc: "Alle Fahrstunden werden verlässlich eingeplant, sodass keine Termine durch manuelle Fehler oder Unübersichtlichkeit verloren gehen.",
},
{
  icon: <FaCoins className="w-5 h-5" />,
  title: "Reduzierte Personalkosten",
  desc: "Der Aufwand für Planung und Koordination sinkt deutlich, wodurch Fahrlehrer und Bürokräfte effizienter eingesetzt werden können.",
},
{
  icon: <FaBolt className="w-5 h-5" />,
  title: "Mehr Fahrstunden pro Woche",
  desc: "Fahrlehrer verbringen weniger Zeit mit Organisation und können mehr Zeit für Fahrstunden und Schülerbetreuung nutzen.",
},
{
  icon: <FaUserShield className="w-5 h-5" />,
  title: "Entlastung für das gesamte Team",
  desc: "Wiederkehrende Abstimmungen entfallen, der Stress sinkt und alle Beteiligten erhalten einen klaren, nachvollziehbaren Wochenplan.",
},
{
  icon: <FaRobot className="w-5 h-5" />,
  title: "Optimierte Planung per Algorithmus",
  desc: "Die Terminverteilung erfolgt automatisch nach festen Regeln und Prioritäten, damit Kapazitäten konsistent und fair genutzt werden.",
},
{
  icon: <FaChartLine className="w-5 h-5" />,
  title: "Messbar mehr Profitabilität",
  desc: "Weniger Verwaltungszeit und bessere Auslastung sorgen Woche für Woche für mehr Umsatzpotenzial und eine höhere Marge.",
},
  ];

  return (
    <section id="vorteile" className="relative py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-300">
                Ihre Vorteile
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Weniger Orga.{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Mehr Fahrstunden.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
            SmartDrive plant automatisch – Sie gewinnen jede Woche Zeit und Umsatz zurück.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-slate-800/90 bg-slate-950/80 backdrop-blur-2xl
                px-6 py-8 text-center
                transition-transform duration-200 ease-out
                hover:-translate-y-1 hover:scale-[1.02]
              "
            >
              {/* Top line bleibt konstant (kein Hover-Farbwechsel) */}
              <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />

              {/* Subtiles Ambient bleibt konstant (kein Hover-Boost) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

              <div className="relative flex flex-col items-center">
                {/* ICON: nur hier Glow/Highlight beim Hover */}
                <div
                  className="
                    mb-4 flex h-12 w-12 items-center justify-center rounded-2xl
                    border border-slate-700/80 bg-slate-900/70 text-cyan-200
                    transition-all duration-200 ease-out
                    group-hover:scale-110
                    group-hover:border-cyan-300/60
                    group-hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]
                  "
                >
                  {c.icon}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {c.title}
                </h3>

                <p className="mt-2 text-sm text-slate-200/90 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
