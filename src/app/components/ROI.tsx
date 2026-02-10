"use client";

// src/app/components/ROI.tsx
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { FaCheckCircle, FaCalculator } from "react-icons/fa";


const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

function formatHoursDE(value: number) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}

function formatEUR(value: number) {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="flex items-stretch gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, (Number(value) || 0) - step))}
        className="w-11 rounded-xl border border-slate-700/80 bg-slate-950/70 text-white hover:bg-slate-900/70 transition-colors"
        aria-label="Minus"
      >
        −
      </button>

      <div className="relative flex-1 rounded-xl bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] p-[1px]">
        <input
          value={value}
          onChange={(e) => {
            const n = Number(e.target.value);
            if (Number.isFinite(n)) onChange(Math.min(max, Math.max(min, n)));
            else onChange(min);
          }}
          inputMode="numeric"
          className="w-full rounded-[0.75rem] bg-[#0b1224] px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
        />
      </div>

      <button
        type="button"
        onClick={() => onChange(Math.min(max, (Number(value) || 0) + step))}
        className="w-11 rounded-xl border border-slate-700/80 bg-slate-950/70 text-white hover:bg-slate-900/70 transition-colors"
        aria-label="Plus"
      >
        +
      </button>
    </div>
  );
}

export default function ROI() {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(4);
  const [instructors, setInstructors] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(30);

  const savingFactor = 1.0; // 100% automatisiert
  const weeksPerMonth = 4; // Monat = 28 Tage

  const { savedHoursMonth, savedHoursYear, savedCostMonth, savedCostYear } = useMemo(() => {
    const baseHoursWeek = Math.max(0, hoursPerWeek) * Math.max(0, instructors);
    const savedWeek = baseHoursWeek * savingFactor;
    const savedMonth = savedWeek * weeksPerMonth;
    const savedYear = savedMonth * 12;

    const rate = Math.max(0, hourlyRate);
    return {
      savedHoursMonth: savedMonth,
      savedHoursYear: savedYear,
      savedCostMonth: savedMonth * rate,
      savedCostYear: savedYear * rate,
    };
  }, [hoursPerWeek, instructors, hourlyRate]);

  return (
    <section id="roi" className="relative py-20 px-6 sm:px-8">
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
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-300">ROI in Sekunden</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wie viel Zeit & Geld{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              sparen Sie?
            </span>
            
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
            Messen Sie Ihre Einsparpotenziale.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-slate-800 to-indigo-500/30 shadow-[0_0_55px_rgba(15,23,42,0.9)]"
        >
          <div className="relative rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-slate-800/90 overflow-hidden">
            <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

            {/* WICHTIG: IMMER 2 SPALTEN (links Input, rechts Output) */}
            <div className="relative grid gap-6 lg:gap-8 grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] p-6 sm:p-8">
              {/* Inputs */}
              <div className="space-y-6 min-w-0">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] p-[2px] shadow-none">
                    <div className="h-full w-full rounded-full bg-[#020617] flex items-center justify-center">
                      <FaCalculator className="text-white" />

                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-lg">ROI-Rechner</div>
                    <div className="text-xs text-slate-300">Fokus: Ermittlung gesparter Planungsarbeiten</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-200">
                    Planungszeit in der Woche pro Fahrlehrer in Stunden
                  </label>
                  <NumberStepper value={hoursPerWeek} onChange={setHoursPerWeek} min={0} max={60} step={1} />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-200">Anzahl Fahrlehrer</label>
                  <NumberStepper value={instructors} onChange={setInstructors} min={1} max={60} step={1} />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-200">
                    Durchschnittlicher Stundensatz (Kosten) in €
                  </label>
                  <NumberStepper value={hourlyRate} onChange={setHourlyRate} min={0} max={250} step={5} />
                </div>
              </div>

              {/* Results */}
<div className="min-w-0 flex flex-col justify-between rounded-2xl border border-transparent p-6 shadow-none bg-[linear-gradient(#020617,#020617),linear-gradient(90deg,#283593,#4f46e5,#00bcd4)] [background-origin:border-box] [background-clip:padding-box,border-box]">
                <div>
                  <p className="text-xs sm:text-sm text-indigo-100/80 leading-relaxed">
                    Ergebnis basierend auf Ihren Eingaben.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 border border-indigo-400/50 p-4">
                      <p className="text-[11px] text-indigo-200/90">Gesparte Zeit / Monat</p>
                      <p className="mt-1 text-2xl font-semibold text-white tabular-nums">
                        {formatHoursDE(savedHoursMonth)} h
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-indigo-400/50 p-4">
                      <p className="text-[11px] text-indigo-200/90">Gesparte Zeit / Jahr</p>
                      <p className="mt-1 text-2xl font-semibold text-white tabular-nums">
                        {formatHoursDE(savedHoursYear)} h
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/60 p-4">
                      <p className="text-[11px] text-emerald-100/90">Ersparnis / Monat</p>
                      <p className="mt-1 text-2xl font-semibold text-emerald-200">{formatEUR(savedCostMonth)}</p>
                    </div>
                    <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/60 p-4">
                      <p className="text-[11px] text-emerald-100/90">Ersparnis / Jahr</p>
                      <p className="mt-1 text-2xl font-semibold text-emerald-200">{formatEUR(savedCostYear)}</p>
                    </div>
                  </div>
                </div>

               <div className="mt-6 flex justify-center">
 <a
  href="#testen"
  className="
    relative group inline-flex items-center justify-center rounded-full
    bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
    p-[2px]
    shadow-[0_0_30px_rgba(79,70,229,0.85)]
    hover:shadow-[0_0_40px_rgba(79,70,229,1)]
    transition-shadow overflow-hidden
  "
>
<span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#020617] text-sm font-semibold text-white">
   
    Jetzt kostenlos testen
  </span>
</a>

</div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
