"use client";

// src/app/components/FAQ.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

const faqs = [
  {
    q: "Was genau macht SmartDrive?",
    a: "SmartDrive sammelt Verfügbarkeiten (Schüler) und Blockzeiten (Fahrlehrer), erstellt daraus den optimalen Wochenplan und versendet den Plan sowie einzelne Termine automatisch per WhatsApp.",
  },
  {
    q: "Welche Daten werden beim Schüler-Onboarding abgefragt?",
    a: "Vor- und Nachname, Telefonnummer (WhatsApp), Getriebe (Schaltung/Automatik) und Prüfungsstadt. Danach erhalten Schüler automatisch ein Formular zur wöchentlichen Eingabe ihrer Verfügbarkeit.",
  },
  {
    q: "Welche Daten werden beim Fahrlehrer-Onboarding abgefragt?",
    a: "Vor- und Nachname, Telefonnummer (WhatsApp), Arbeitszeiten, Anzahl Termine pro Schüler/Woche, Pausen zwischen Fahrstunden. Danach erhalten Fahrlehrer automatisch ein Formular zur wöchentlichen Eingabe ihrer Sperrzeiten.",
  },
  {
    q: "Können wir den Planungszeitpunkt festlegen?",
    a: "Ja. Sie legen Wochentag und Uhrzeit fest (z. B. Samstag 18:00). Danach läuft der Prozess jede Woche automatisch.",
  },
  {
    q: "Wie schnell sind wir startklar?",
    a: "Sobald Ihre Formulare stehen, können Sie sehr schnell live gehen: Onboarding → Verfügbarkeiten → Planlauf → WhatsApp-Versand. Anschließend wiederholt sich der Ablauf wöchentlich.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-300">
                Häufige Fragen
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Kurz & klar{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              beantwortet
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
            Hier finden Sie die wichtigsten Antworten – kompakt, transparent und auf den Punkt.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className="relative rounded-2xl border border-slate-800/90 bg-slate-950/80 backdrop-blur-2xl overflow-hidden"
              >
                <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">{f.q}</span>
                  <span
                    className={`shrink-0 text-slate-300 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-sm text-slate-200/90 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
