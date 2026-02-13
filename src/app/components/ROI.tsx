"use client";

// src/app/components/ROI.tsx
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { FaCalculator, FaBolt } from "react-icons/fa";

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

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
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
        onClick={() => onChange(clamp((Number(value) || 0) - step, min, max))}
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
            if (Number.isFinite(n)) onChange(clamp(n, min, max));
            else onChange(min);
          }}
          inputMode="numeric"
          className="w-full rounded-[0.75rem] bg-[#0b1224] px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
        />
      </div>

      <button
        type="button"
        onClick={() => onChange(clamp((Number(value) || 0) + step, min, max))}
        className="w-11 rounded-xl border border-slate-700/80 bg-slate-950/70 text-white hover:bg-slate-900/70 transition-colors"
        aria-label="Plus"
      >
        +
      </button>
    </div>
  );
}

/**
 * WOW-ROI (für schnelle Entscheidung)
 * - Nur 3 Inputs
 * - Rechnet in "verlorenen Fahrstunden" (Wert pro Stunde)
 * - 52/12 Wochen pro Monat
 * - SmartDrive spart Planungszeit praktisch zu 100%
 */
export default function ROI() {
  const [instructors, setInstructors] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(3); // pro Fahrlehrer
  const [valuePerHour, setValuePerHour] = useState<number>(80); // "Wert 1 Stunde" (netto grob)

  const weeksPerMonth = 52 / 12;
  const savingFactor = 1.0;

  const { savedHoursMonth, savedHoursYear, savedValueMonth, savedValueYear } = useMemo(() => {
    const totalHoursWeek = Math.max(0, instructors) * Math.max(0, hoursPerWeek);
    const savedWeek = totalHoursWeek * savingFactor;

    const savedMonth = savedWeek * weeksPerMonth;
    const savedYear = savedWeek * 52;

    const v = Math.max(0, valuePerHour);

    return {
      savedHoursMonth: savedMonth,
      savedHoursYear: savedYear,
      savedValueMonth: savedMonth * v,
      savedValueYear: savedYear * v,
    };
  }, [instructors, hoursPerWeek, valuePerHour]);

  const extraLessonsMonth = savedHoursMonth;
  const extraLessonsYear = savedHoursYear;

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
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-300">
                ROI-Rechner
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Berechnen Sie Ihr{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-lime-200 to-emerald-200 bg-clip-text text-transparent">
              Sparpotenzial
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
            SmartDrive reduziert Planungsaufwand praktisch auf{" "}
            <span className="text-white font-semibold">0</span>.
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
          <div className="relative rounded-3xl bg-[#01040f] backdrop-blur-2xl border border-slate-800/90 overflow-hidden">
            <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

            <div className="relative group grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] p-6 sm:p-8">
              {/* Inputs */}
              <div className="space-y-6 min-w-0">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] p-[2px]">
                    <div className="h-full w-full rounded-full bg-[#020617] flex items-center justify-center">
                      <FaCalculator className="text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-lg">ROI-Rechner</div>
                    <div className="text-xs text-slate-300">3 Zahlen → Ergebnis</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-200">
                    Anzahl Fahrlehrer
                  </label>
                  <NumberStepper value={instructors} onChange={setInstructors} min={1} max={60} step={1} />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-200">
                    Planungszeit pro Fahrlehrer / Woche (Stunden)
                  </label>
                  <NumberStepper value={hoursPerWeek} onChange={setHoursPerWeek} min={0} max={20} step={1} />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-200">
                    Wert von 1 Stunde (in €)
                  </label>
                  <NumberStepper value={valuePerHour} onChange={setValuePerHour} min={0} max={250} step={5} />
                  <div className="text-[11px] text-slate-400">
                    Faustregel: Preis pro Fahrstunde (60 min) - Sprit und Autokosten/Stunde
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-emerald-200">
                      <FaBolt />
                    </div>
                    <div className="text-xs text-slate-200/90 leading-relaxed">
                      <span className="text-white font-semibold">Ihr stärkster Hebel:</span> Überfällige
                      Zeit für Planung wird Zeit für Fahrstunden.
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="min-w-0 flex flex-col justify-between rounded-2xl border border-slate-800/90 p-6 bg-[#020617] relative overflow-hidden">
                {/* overlay + accent (ohne top-line) */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

                <div className="relative z-10">
                  <div>
                    <p className="text-xs sm:text-sm text-indigo-100/80 leading-relaxed text-center">
                      Ergebnis aus Ihren Eingaben:
                    </p>

                    <div className="mt-5 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-5 text-center">
                      <p className="text-[11px] tracking-[0.22em] uppercase text-emerald-100/90">
                        Ihre Ersparnis / Monat
                      </p>

                      <div className="mt-2 text-4xl sm:text-5xl font-bold leading-none">
                        <span className="bg-gradient-to-r from-emerald-200 via-lime-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(163,230,53,0.30)]">
                          {formatEUR(savedValueMonth)}
                        </span>
                      </div>

                      <div className="mt-3 text-xs text-emerald-100/90">
                        {formatHoursDE(savedHoursMonth)} Std. frei / Monat ≈{" "}
                        {formatHoursDE(extraLessonsMonth)} zusätzliche Fahrstunden
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl bg-white/5 border border-indigo-400/50 p-4">
                        <p className="text-[11px] text-indigo-200/90">Freie Zeit / Woche</p>
                        <p className="mt-1 text-2xl font-semibold text-white tabular-nums">
                          {formatHoursDE(instructors * hoursPerWeek)} h
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-indigo-400/50 p-4">
                        <p className="text-[11px] text-indigo-200/90">Ersparnis / Jahr</p>
                        <p className="mt-1 text-2xl font-semibold text-emerald-200 tabular-nums">
                          {formatEUR(savedValueYear)}
                        </p>
                      </div>
                    </div>

                    {/* optional: extra Lessons / Jahr (falls du willst) */}
                    <div className="mt-4 text-center text-[11px] text-slate-400">
                      ≈ {formatHoursDE(extraLessonsYear)} zusätzliche Fahrstunden / Jahr
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <a
                      href="/pricing"
                      className="
                        relative group inline-flex items-center justify-center rounded-full
                        border border-slate-500/70 bg-slate-900/60
                        text-sm sm:text-base font-semibold text-slate-100
                        px-7 sm:px-8 py-2.5 sm:py-3
                        hover:bg-slate-900/80 transition-colors overflow-hidden
                      "
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 inline-flex items-center gap-2">
                        Wochenplanung automatisieren
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* /Results */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
