// src/app/components/Pricing.tsx
"use client";

import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaComments, FaBolt, FaCalculator } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

const CAL_LINK = "https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung";

/** ✅ TODO: Deine Stripe Payment Links (ein Produkt, 3 Intervalle) */
type Billing = "weekly" | "monthly" | "yearly";
const PAY_LINKS: Record<Billing, string> = {
  weekly: "#",
  monthly: "#",
  yearly: "#",
};

/* ============================================================
   Pricing: 1 Paket
   - 49€ / Monat für 1 Fahrlehrer
   - jeder weitere Fahrlehrer: +25€ / Monat
   - Weekly / Yearly werden sinnvoll umgerechnet
   ============================================================ */

const BASE_MONTHLY = 49;
const ADDON_MONTHLY = 25;

// realistische Umrechnung: weekly etwas teurer (Flex), yearly mit Rabatt
const BASE_WEEKLY = 14;
const BASE_YEARLY = 499;

function billingSuffix(billing: Billing) {
  if (billing === "weekly") return " / Woche";
  if (billing === "yearly") return " / Jahr";
  return " / Monat";
}

function unitWord(billing: Billing) {
  if (billing === "weekly") return "Woche";
  if (billing === "yearly") return "Jahr";
  return "Monat";
}

function cancelText(billing: Billing) {
  if (billing === "weekly") return "Einmalig 99€ Einrichtungsgebühr | Wöchentlich kündbar";
  if (billing === "monthly") return "Einmalig 99€ Einrichtungsgebühr | Monatlich kündbar";
  return "Einrichtungsgebühr entfällt | Jährliche Abrechnung";
}

function formatPrice(n: number) {
  return `${Math.round(n)}€`;
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

function basePriceForBilling(billing: Billing) {
  if (billing === "weekly") return BASE_WEEKLY;
  if (billing === "yearly") return BASE_YEARLY;
  return BASE_MONTHLY;
}

function addonPriceForBilling(billing: Billing) {
  if (billing === "monthly") return ADDON_MONTHLY;

  // skaliere Add-on proportional zum Basisverhältnis
  const weeklyRatio = BASE_WEEKLY / BASE_MONTHLY;
  const yearlyRatio = BASE_YEARLY / (BASE_MONTHLY * 12);

  if (billing === "weekly") return Math.max(1, Math.round(ADDON_MONTHLY * weeklyRatio));
  return Math.max(10, Math.round(ADDON_MONTHLY * 12 * yearlyRatio));
}

function totalCost(billing: Billing, instructors: number) {
  const ins = clamp(Math.round(instructors || 1), 1, 60);
  const base = basePriceForBilling(billing);
  const addon = addonPriceForBilling(billing);
  const total = base + Math.max(0, ins - 1) * addon;
  return { ins, base, addon, total };
}

function savingsPctMonthlyVsWeekly(ins: number) {
  const weekly = totalCost("weekly", ins).total;
  const weeklyAsMonth = weekly * (52 / 12);
  const monthly = totalCost("monthly", ins).total;
  const raw = (1 - monthly / Math.max(1, weeklyAsMonth)) * 100;
  return Math.max(0, Math.round(raw));
}

function savingsPctYearlyVsWeekly(ins: number) {
  const weekly = totalCost("weekly", ins).total;
  const weeklyAsYear = weekly * 52;
  const yearly = totalCost("yearly", ins).total;
  const raw = (1 - yearly / Math.max(1, weeklyAsYear)) * 100;
  return Math.max(0, Math.round(raw));
}

/* ============================================================
   UI Buttons
   ============================================================ */

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative group inline-flex w-full sm:w-auto items-center justify-center rounded-full
        bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
        p-[2px]
        shadow-[0_0_22px_rgba(79,70,229,0.65)]
        hover:shadow-[0_0_30px_rgba(79,70,229,0.9)]
        transition-shadow overflow-hidden
        sm:min-w-[240px]
      "
    >
      <span
        className="
          relative inline-flex w-full items-center justify-center gap-2 sm:gap-3
          px-7 sm:px-9 py-3
          rounded-full bg-[#020617] text-sm sm:text-base font-semibold text-white
        "
      >
        {children}
      </span>
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
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
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

function SavingsButton({ onClick, pressed }: { onClick: () => void; pressed?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative inline-flex items-center justify-center rounded-full overflow-hidden",
        "px-3.5 py-1.5",
        "text-[11px] font-extrabold tracking-[0.22em] uppercase",
        "border border-slate-700/70 bg-slate-950/70 text-slate-100 backdrop-blur",
        "transition-transform duration-200 ease-out hover:scale-[1.06] active:scale-[0.99]",
        pressed ? "border-cyan-400/35 text-white" : "",
      ].join(" ")}
    >
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
        "
      />
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          shadow-[0_0_28px_rgba(79,70,229,0.70)]
        "
      />
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_55%)]
        "
      />

      <span className="relative z-10 inline-flex items-center gap-2">
        <span>Ersparnis</span>
        <FaCalculator className="w-3.5 h-3.5 opacity-90" />
      </span>
    </button>
  );
}

function BillingToggle({ billing, setBilling }: { billing: Billing; setBilling: (b: Billing) => void }) {
  const items: { key: Billing; label: string }[] = [
    { key: "weekly", label: "Wöchntl" },
    { key: "monthly", label: "Mntl" },
    { key: "yearly", label: "Jährl" },
  ];

  return (
    <div className="mt-5 flex justify-center">
      <div
        className="
          relative inline-flex rounded-full border border-slate-700/70 bg-slate-950/70
          p-1 backdrop-blur-xl shadow-[0_0_45px_rgba(15,23,42,0.65)]
          overflow-hidden
        "
      >
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_55%)]" />

        <motion.span
          layout
          layoutId="billing-pill-single"
          className="
            absolute top-1 bottom-1
            rounded-full
            bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
            shadow-[0_0_28px_rgba(79,70,229,0.70)]
          "
          style={{
            left:
              billing === "weekly"
                ? "4px"
                : billing === "monthly"
                ? "calc(33.333% + 2px)"
                : "calc(66.666% + 0px)",
            width: "calc(33.333% - 6px)",
          }}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />

        {items.map((it) => {
          const active = billing === it.key;
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => setBilling(it.key)}
              className={[
                "relative z-10 w-[108px] sm:w-[120px] rounded-full px-3 py-2",
                "text-xs sm:text-sm font-semibold",
                "transition-colors",
                active ? "text-white" : "text-slate-200/80 hover:text-slate-100",
              ].join(" ")}
            >
              <div className="flex items-center justify-center leading-none">
                <span className="tracking-[0.18em] uppercase">{it.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SmallStepper({
  value,
  onChange,
  min,
  max,
  step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div className="flex items-stretch gap-2">
      <button
        type="button"
        onClick={() => onChange(clamp((Number(value) || 0) - step, min, max))}
        className="w-10 rounded-xl border border-slate-700/80 bg-slate-950/70 text-white hover:bg-slate-900/70 transition-colors"
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
          className="
            w-full rounded-[0.75rem] bg-[#0b1224] px-3 py-2 text-sm text-white
            placeholder:text-slate-400 focus:outline-none
            text-center tabular-nums
          "
        />
      </div>

      <button
        type="button"
        onClick={() => onChange(clamp((Number(value) || 0) + step, min, max))}
        className="w-10 rounded-xl border border-slate-700/80 bg-slate-950/70 text-white hover:bg-slate-900/70 transition-colors"
        aria-label="Plus"
      >
        +
      </button>
    </div>
  );
}

/* ============================================================
   Sparrechner Overlay Modal (immer 100%)
   ============================================================ */

function MiniSavingsPopover({
  billing,
  setBilling,
  instructors,
  setInstructors,
  open,
  onOpen,
  onClose,
}: {
  billing: Billing;
  setBilling: (b: Billing) => void;
  instructors: number;
  setInstructors: (n: number) => void;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [hoursPerWeekPerInstructor, setHoursPerWeekPerInstructor] = useState<number>(2);
  const [valuePerHour, setValuePerHour] = useState<number>(80);

  const calc = useMemo(() => {
    const ins = clamp(Math.round(instructors || 1), 1, 60);
    const h = Math.max(0, hoursPerWeekPerInstructor);
    const v = Math.max(0, valuePerHour);

    const savedHoursWeek = ins * h;
    const savedHoursMonth = savedHoursWeek * (52 / 12);
    const savedHoursYear = savedHoursWeek * 52;

    const savedValueWeek = savedHoursWeek * v;
    const savedValueMonth = savedHoursMonth * v;
    const savedValueYear = savedHoursYear * v;

    const cost = totalCost(billing, ins).total;
    const saved = billing === "weekly" ? savedValueWeek : billing === "monthly" ? savedValueMonth : savedValueYear;

    return { ins, savedHoursWeek, saved, cost, net: saved - cost };
  }, [billing, instructors, hoursPerWeekPerInstructor, valuePerHour]);

  const modal =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <div
              className="relative w-full max-w-[420px]"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-slate-800 to-indigo-500/30 shadow-[0_0_75px_rgba(0,0,0,0.75)]">
                <div className="relative rounded-3xl bg-[#01040f] backdrop-blur-2xl border border-slate-800/90 overflow-hidden">
                  <div className="absolute inset-x-6 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

                  <div className="relative p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-white font-semibold text-sm">Sparrechner</div>
                        <div className="text-[11px] text-slate-400">Rechnet konservativ mit 100% der Zeitersparnis.</div>
                      </div>
                      <button
                        type="button"
                        onClick={onClose}
                        className="text-slate-300 hover:text-white text-sm px-2"
                        aria-label="Schließen"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {(["weekly", "monthly", "yearly"] as Billing[]).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setBilling(p)}
                          className={[
                            "rounded-xl border px-3 py-2 text-xs font-semibold transition-colors",
                            billing === p
                              ? "border-cyan-400/40 bg-cyan-500/10 text-white"
                              : "border-slate-700/70 bg-slate-950/50 text-slate-200 hover:bg-slate-900/60",
                          ].join(" ")}
                        >
                          {p === "weekly" ? "Woche" : p === "monthly" ? "Monat" : "Jahr"}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="text-[11px] text-slate-200 mb-1">Anzahl Fahrlehrer</div>
                        <SmallStepper value={instructors} onChange={setInstructors} min={1} max={60} step={1} />
                      </div>

                      <div>
                        <div className="text-[11px] text-slate-200 mb-1">Planungszeit pro Fahrlehrer / Woche</div>
                        <SmallStepper
                          value={hoursPerWeekPerInstructor}
                          onChange={setHoursPerWeekPerInstructor}
                          min={0}
                          max={20}
                          step={1}
                        />
                      </div>

                      <div>
                        <div className="text-[11px] text-slate-200 mb-1">Wert pro Stunde (€)</div>
                        <SmallStepper value={valuePerHour} onChange={setValuePerHour} min={0} max={250} step={5} />
                        <div className="mt-1 text-[10px] text-slate-500">Typisch: 60–80€</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                      <div className="text-[11px] tracking-[0.22em] uppercase text-emerald-100/90">Ergebnis</div>

                      <div className="mt-2 space-y-1 text-sm">
                        <div className="flex items-center justify-between text-slate-200">
                          <span>Ersparnis</span>
                          <span className="text-white font-semibold">{formatEUR(calc.saved)}</span>
                        </div>

                        <div className="flex items-center justify-between text-slate-200">
                          <span>SmartDrive Kosten</span>
                          <span className="text-white font-semibold">{formatEUR(calc.cost)}</span>
                        </div>

                        <div className="mt-2 h-px bg-slate-800/80" />

                        <div className="flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">Netto-Vorteil</span>
                          <span className={["font-bold", calc.net >= 0 ? "text-emerald-200" : "text-rose-200"].join(" ")}>
                            {formatEUR(calc.net)}
                          </span>
                        </div>

                        <div className="mt-2 text-[11px] text-slate-400">
                          Basis: {calc.ins} Fahrlehrer · ~{Math.round(calc.savedHoursWeek)}h Planungszeit/Woche gespart
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] text-slate-500">
                      Hinweis: Ergebnis ist eine Schätzung und hängt von Verfügbarkeit & Regeln ab.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className="relative inline-block">
      <SavingsButton onClick={() => (open ? onClose() : onOpen())} pressed={open} />
      {modal}
    </div>
  );
}

/* ============================================================
   Pricing (1 Card)
   ============================================================ */

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [instructors, setInstructors] = useState<number>(1);
  const [openCalc, setOpenCalc] = useState<boolean>(false);

  const cost = useMemo(() => totalCost(billing, instructors), [billing, instructors]);
  const payHref = PAY_LINKS[billing] || PAY_LINKS.monthly;

  const headerNote = useMemo(() => {
    return `${billing === "weekly" ? "Wöchentliche" : billing === "yearly" ? "Jährliche" : "Monatliche"} Abrechnung pro Fahrlehrer.`;
  }, [billing]);

  const perInstructorAvg = cost.total / cost.ins;

  const monthlyVsWeeklyPct = useMemo(() => savingsPctMonthlyVsWeekly(cost.ins), [cost.ins]);
  const weeklyAsMonth = useMemo(() => totalCost("weekly", cost.ins).total * (52 / 12), [cost.ins]);

  const yearlyVsWeeklyPct = useMemo(() => savingsPctYearlyVsWeekly(cost.ins), [cost.ins]);
  const weeklyAsYear = useMemo(() => totalCost("weekly", cost.ins).total * 52, [cost.ins]);

  return (
    <section
      id="preise"
      className="
        relative py-20 sm:py-24 px-6 sm:px-8
        flex justify-center
        scroll-mt-[40vh]
        overflow-hidden

        before:content-[''] before:absolute before:inset-0 before:pointer-events-none
        before:bg-[radial-gradient(560px_560px_at_0%_0%,rgba(79,70,229,0.22),transparent_60%),radial-gradient(560px_560px_at_100%_0%,rgba(56,189,248,0.18),transparent_60%)]
        before:opacity-90

        after:content-[''] after:absolute after:inset-0 after:pointer-events-none
        after:bg-[radial-gradient(420px_420px_at_0%_0%,rgba(56,189,248,0.10),transparent_62%),radial-gradient(420px_420px_at_100%_0%,rgba(99,102,241,0.10),transparent_62%)]
        after:opacity-80
      "
    >
      <div className="w-full max-w-screen-2xl 2xl:max-w-[92rem] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">Preise</span>
            </div>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Unser{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Angebot
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">{headerNote}</p>

          <BillingToggle billing={billing} setBilling={setBilling} />
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="
              relative isolate group w-full max-w-6xl
              rounded-[1.8rem] border border-cyan-400/30
              bg-slate-950/80 backdrop-blur-2xl
              shadow-[0_0_55px_rgba(15,23,42,0.88)]
            "
          >
            <div className="pointer-events-none absolute inset-[1px] rounded-[1.7rem] border border-slate-800/70" />
            <div className="absolute inset-x-10 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500" />

            <div className="relative p-6 sm:p-10">
              {/* ✅ Mobile: alles mittig / Desktop: normal links+rechts */}
              <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-8">
                {/* Left */}
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 min-w-0 flex-1">
                  <div className="relative mt-1">
                    <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/22 via-cyan-400/18 to-sky-500/22 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
                    <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]">
                      <div className="relative w-12 h-12 rounded-3xl bg-[#020617] border border-slate-800/70 flex items-center justify-center shadow-[0_0_22px_rgba(79,70,229,0.28)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.34)] transition-shadow">
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.14),transparent_62%)] opacity-80" />
                        <span className="relative text-cyan-200 text-base">
                          <FaBolt className="text-cyan-200" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-lg sm:text-xl font-bold text-white">SmartDrive</div>

                    <div className="mt-1 text-sm text-slate-300/90">
                      <span className="text-white font-semibold">
                        {formatPrice(cost.base)}/{unitWord(billing)}
                      </span>{" "}
                      für den ersten Fahrlehrer{" "}
                      <span className="text-white font-semibold">
                        + {formatPrice(cost.addon)}/{unitWord(billing)}
                      </span>{" "}
                      je weiterer Fahrlehrer
                    </div>

                    <div className="mt-5">
                      <div className="text-[11px] tracking-[0.22em] uppercase text-slate-200/90 mb-2">
                        Anzahl Fahrlehrer
                      </div>

                      {/* ✅ Mobile: Ersparnis-Button mittig UNTER dem Stepper (nur Mobile)
                          ✅ ab sm: Button wieder rechts neben dem Stepper */}
                      <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-start sm:gap-3">
                        <div className="w-full max-w-[260px] sm:max-w-[240px] mx-auto sm:mx-0">
                          <SmallStepper value={cost.ins} onChange={setInstructors} min={1} max={60} step={1} />
                        </div>

                        <MiniSavingsPopover
                          billing={billing}
                          setBilling={setBilling}
                          instructors={instructors}
                          setInstructors={setInstructors}
                          open={openCalc}
                          onOpen={() => setOpenCalc(true)}
                          onClose={() => setOpenCalc(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right (Price) */}
                <div className="shrink-0 w-full lg:w-auto text-center lg:text-right">
                  <div className="text-3xl sm:text-4xl font-bold leading-none">
                    <span className="bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent opacity-95 group-hover:opacity-100 transition-opacity">
                      {formatPrice(cost.total)}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 mt-2">
                    Ø {formatPrice(perInstructorAvg)}
                    {billingSuffix(billing)} pro Fahrlehrer
                  </div>

                  {/* ✅ monatlich: vs weekly */}
                  {billing === "monthly" && monthlyVsWeeklyPct > 0 ? (
                    <div className="mt-2 flex items-center justify-center gap-2 lg:justify-end">
                      <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-slate-950/80 px-2.5 py-1">
                        <span className="text-[0.65rem] tracking-[0.22em] uppercase bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent">
                          Spare {monthlyVsWeeklyPct}%
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 line-through">{formatPrice(weeklyAsMonth)}</span>
                    </div>
                  ) : null}

                  {/* ✅ yearly: vs weekly (nicht monatlich) */}
                  {billing === "yearly" && yearlyVsWeeklyPct > 0 ? (
                    <div className="mt-2 flex items-center justify-center gap-2 lg:justify-end">
                      <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-slate-950/80 px-2.5 py-1">
                        <span className="text-[0.65rem] tracking-[0.22em] uppercase bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent">
                          Spare {yearlyVsWeeklyPct}%
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 line-through">{formatPrice(weeklyAsYear)}</span>
                    </div>
                  ) : null}

                  <div className="mt-6 flex justify-center lg:justify-end">
                    <PrimaryButton href={payHref}>Weiter zur Zahlung</PrimaryButton>
                  </div>

                  <p className="mt-3 text-xs text-slate-400 text-center lg:text-right">{cancelText(billing)}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="text-sm font-semibold text-slate-100">Enthalten</div>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      "Vollautomatische Wochenplanung",
                      "Eliminierung jeglicher Leerläufe",
                      "Pausen-Regeln zwischen Fahrstunden",
                      "Minimierung von Fahrzeug- & Prüfungsstadtwechseln",
                      "WhatsApp Benachrichtigungen (Fahrlehrer)",
                      "Mehrfache Planberechnung",
                      "Übersicht ungeplanter Schüler",
                    ].map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-slate-200/90">
                        <FaCheckCircle className="w-4 h-4 flex-none mt-[2px] text-cyan-300/90" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-slate-200/90">Kurz erklärt</div>
                  <div className="mt-3 text-sm text-slate-200/90 leading-relaxed">
                    Sie wählen einfach die Anzahl Fahrlehrer, der Preis passt sich automatisch an.
                    <div className="mt-3 text-xs text-slate-500">
                      {billing === "yearly" ? (
                        <>
                          Einrichtungsgebühr entfällt · {formatEUR(cost.base)} für den ersten Fahrlehrer · Zusatz je
                          weiterer Fahrlehrer: {formatEUR(cost.addon)} (jährlich)
                        </>
                      ) : (
                        <>
                          99 € Einrichtungsgebühr + {formatEUR(cost.base)} für den ersten Fahrlehrer · Zusatz je
                          weiterer Fahrlehrer: {formatEUR(cost.addon)} {billing === "weekly" ? "(wöchentlich)" : "(monatlich)"}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA ausserhalb der Card */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-xl rounded-2xl px-6 py-6 text-center">
            <div className="text-xs tracking-[0.22em] uppercase text-cyan-300/90">Noch Fragen?</div>

            <div className="mt-5 flex justify-center">
              <SecondaryButton href={CAL_LINK}>
                <FaComments className="w-4 h-4 sm:w-5 sm:h-5 opacity-90" />
                Kostenloses Gespräch buchen
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}