"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaComments, FaBolt, FaCrown, FaRocket, FaCalculator } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

const CAL_LINK = "https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung";

type Billing = "weekly" | "monthly" | "yearly";

type Plan = {
  key: "A" | "B" | "C";
  name: string;
  icon: React.ReactNode;
  prices: Record<Billing, number>;
  highlight?: boolean;
  features: string[];
  limitations: string[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
};

const plans: Plan[] = [
  {
    key: "A",
    name: "SmartDrive Core",
    icon: <FaBolt className="text-cyan-200" />,
    prices: { weekly: 29, monthly: 99, yearly: 1049 },
    features: [
      "Automatische Wochenplan-Erstellung",
      "Priorisierung unflexibler Schüler",
      "Fahrzeug- und Standortwechsel werden minimiert",
      "Max. 2 Termine pro Schüler / Woche",
      "Automatisierter Whatsapp-Versand an Fahrlehrer",
      "Sperrzeiten für Fahrlehrer definierbar",
      "Liste mit ungeplanten Schülern",
    ],
    limitations: [
      "Mehrfache Planberechnung",
      "Unbegrenzte Termine pro Schüler / Woche",
      "Automatisierter WhatsApp-Versand an Fahrschüler",
      "Pausen-Regeln zwischen Fahrstunden",
      "Planung an Wochenenden",
      "Begründungen für nicht geplante Schüler",
    ],
    cta: {
      label: "Weiter zur Zahlung",
      href: "https://buy.stripe.com/4gM7sL4UGbGE9OYacj7bW09",
      variant: "secondary",
    },
  },
  {
    key: "B",
    name: "SmartDrive Pro",
    icon: <FaRocket className="text-cyan-200" />,
    prices: { weekly: 39, monthly: 129, yearly: 1299 },
    highlight: true,
    features: [
      "Alles aus Core",
      "Max. 3 Termine pro Schüler / Woche",
      "Pausen zwischen jeder Fahrstunde konfigurierbar",
      "Planung an Wochenenden möglich",
    ],
    limitations: [
      "Mehrfache Planberechnung",
      "Unbegrenzte Termine pro Schüler / Woche",
      "Automatisierter WhatsApp-Versand an Fahrschüler",
      "Begründungen für geplante und nicht geplante Schüler",
    ],
    cta: { label: "Weiter zur Zahlung", href: CAL_LINK, variant: "secondary" },
  },
  {
    key: "C",
    name: "SmartDrive Ultimate",
    icon: <FaCrown className="text-cyan-200" />,
    prices: { weekly: 59, monthly: 159, yearly: 1599 },
    features: [
      "Alles aus Pro",
      "Mehrfache Planberechnung und Auswahl des besten Plans",
      "Automatisierter WhatsApp-Versand an alle Fahrschüler",
      "Unbegrenzte Termine pro Schüler / Woche",
      "Begründungen für geplante und nicht geplante Schüler einsehbar",
    ],
    limitations: [],
    cta: { label: "Weiter zur Zahlung", href: CAL_LINK, variant: "secondary" },
  },
];

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
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
      <span
        className="
          relative flex items-center gap-2 sm:gap-3 px-7 sm:px-9 py-2.5 sm:py-3
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

/**
 * SavingsButton:
 * - Button selbst: nur Zoom bei Hover
 * - Money/Glow: wie BillingToggle pill (Card-hover via group-hover)
 * - Calculator Icon
 */
function SavingsButton({
  onClick,
  pressed,
}: {
  onClick: () => void;
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative inline-flex items-center justify-center rounded-full overflow-hidden",
        "px-3.5 py-1.5",
        "text-[11px] font-extrabold tracking-[0.22em] uppercase",
        "border border-slate-700/70 bg-slate-950/70 text-slate-100 backdrop-blur",
        // ONLY button hover: zoom
        "transition-transform duration-200 ease-out hover:scale-[1.06] active:scale-[0.99]",
        // pressed state slightly brighter
        pressed ? "border-cyan-400/35 text-white" : "",
      ].join(" ")}
    >
      {/* Same vibe as BillingToggle pill (Card-hover) */}
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

function formatPrice(n: number) {
  return `${n}€`;
}

function billingSuffix(billing: Billing) {
  if (billing === "weekly") return " / Woche";
  if (billing === "yearly") return " / Jahr";
  return " / Monat";
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
          layoutId="billing-pill"
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

function cancelText(billing: Billing) {
  if (billing === "weekly") return "Wöchentlich kündbar";
  if (billing === "monthly") return "Monatlich kündbar";
  return "Jährliche Abrechnung";
}

/* ============================================================
   Mini-Sparrechner (Popover)
   - Kosten: EXAKT prices[period] * Anzahl Fahrlehrer
   - Ersparnis-Faktor: Core 80%, Pro 90%, Ultimate 100%
   ============================================================ */

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
          className="w-full rounded-[0.75rem] bg-[#0b1224] px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
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

type Period = Billing;

function savingsPercentForPlan(planName: string) {
  const n = planName.toLowerCase();
  if (n.includes("core")) return 80;
  if (n.includes("pro")) return 90;
  return 100; // Ultimate
}

function MiniSavingsPopover({
  prices,
  planName,
  open,
  onOpen,
  onClose,
}: {
  prices: Record<Billing, number>;
  planName: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [period, setPeriod] = useState<Period>("monthly");
  const [instructors, setInstructors] = useState<number>(5);
  const [hoursPerWeekPerInstructor, setHoursPerWeekPerInstructor] = useState<number>(2);
  const [valuePerHour, setValuePerHour] = useState<number>(80);

  const percent = savingsPercentForPlan(planName);
  const factor = percent / 100;

  const calc = useMemo(() => {
    const ins = Math.max(1, instructors);
    const h = Math.max(0, hoursPerWeekPerInstructor);
    const v = Math.max(0, valuePerHour);

    const savedHoursWeek = ins * h;
    const savedHoursMonth = savedHoursWeek * (52 / 12);
    const savedHoursYear = savedHoursWeek * 52;

    const baseSavedValueWeek = savedHoursWeek * v;
    const baseSavedValueMonth = savedHoursMonth * v;
    const baseSavedValueYear = savedHoursYear * v;

    // Plan-Faktor: Core 80%, Pro 90%, Ultimate 100%
    const savedValueWeek = baseSavedValueWeek * factor;
    const savedValueMonth = baseSavedValueMonth * factor;
    const savedValueYear = baseSavedValueYear * factor;

    // Kosten EXAKT aus prices (pro Fahrlehrer) * Anzahl Fahrlehrer
    const cost = (prices[period] || 0) * ins;

    const saved =
      period === "weekly" ? savedValueWeek : period === "monthly" ? savedValueMonth : savedValueYear;

    return {
      ins,
      savedHoursWeek,
      saved,
      cost,
      net: saved - cost,
    };
  }, [period, instructors, hoursPerWeekPerInstructor, valuePerHour, prices, factor]);

  return (
    <div className="relative inline-block">
      <SavingsButton onClick={() => (open ? onClose() : onOpen())} pressed={open} />

      {open && (
        <div className="absolute left-0 top-full mt-3 w-[340px] sm:w-[380px] z-50">
          <div className="rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-slate-800 to-indigo-500/30 shadow-[0_0_55px_rgba(15,23,42,0.9)]">
            <div className="relative rounded-3xl bg-[#01040f] backdrop-blur-2xl border border-slate-800/90 overflow-hidden">
              <div className="absolute inset-x-6 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_60%)]" />

              <div className="relative p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-white font-semibold text-sm">Sparrechner für {planName}</div>
                    <div className="text-[11px] text-slate-400">Schätzung basierend auf Ihren Angaben</div>
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
                  {(["weekly", "monthly", "yearly"] as Period[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriod(p)}
                      className={[
                        "rounded-xl border px-3 py-2 text-xs font-semibold transition-colors",
                        period === p
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
                    <div className="mt-1 text-[10px] text-slate-500">Tipp: konservativ starten (z.B. 50–70€).</div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-emerald-100/90">Ergebnis</div>

                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="inline-flex items-center gap-2">
                        Ersparnis
                        <span className="text-[11px] font-semibold text-cyan-200/90">({percent}%)</span>
                      </span>
                      <span className="text-white font-semibold">{formatEUR(calc.saved)}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-200">
                      <span>{planName} Kosten</span>
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
      )}
    </div>
  );
}

/* ============================================================
   Pricing
   ============================================================ */

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [openPopoverKey, setOpenPopoverKey] = useState<Plan["key"] | null>(null);

  function roundDiscountPercent(n: number) {
    return Math.round(n);
  }

  function discountFromWeekly(prices: Record<Billing, number>, billing: Billing) {
    if (billing === "weekly") return null;

    const weekly = prices.weekly;
    const chosen = prices[billing];

    if (!weekly || weekly <= 0 || !chosen || chosen <= 0) return null;

    const yearlyFromWeekly = weekly * 52;
    const equivalent = billing === "monthly" ? yearlyFromWeekly / 12 : yearlyFromWeekly;

    const raw = (1 - chosen / equivalent) * 100;
    const pct = roundDiscountPercent(raw);

    if (pct <= 0) return null;
    return pct;
  }

  const headerNote = useMemo(() => {
    if (billing === "yearly") return "Jährliche Abrechnung pro Fahrlehrer.";
    if (billing === "weekly") return "Wöchentliche Abrechnung pro Fahrlehrer.";
    return "Monatliche Abrechnung pro Fahrlehrer.";
  }, [billing]);

  return (
    <section
      id="preise"
      className="
        relative py-20 sm:pt-22 sm:py-10 px-6 sm:px-6
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
      <div className="w-full max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">Unsere Preise</span>
            </div>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Wählen Sie Ihr{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              SmartDrive
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
            {headerNote} Klare Limits pro Schüler/Woche – damit der Plan stabil bleibt.
          </p>

          <BillingToggle billing={billing} setBilling={setBilling} />
        </motion.div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((p, idx) => {
            const price = p.prices[billing];
            const suffix = billingSuffix(billing);
            const isOpen = openPopoverKey === p.key;

            return (
              <motion.div
                key={p.key}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                className={[
                  "relative isolate group rounded-[1.8rem] border bg-slate-950/80 backdrop-blur-2xl",
                  isOpen ? "z-30" : "z-10",
                  p.highlight
                    ? "border-cyan-400/40 shadow-[0_0_40px_rgba(56,189,248,0.18)]"
                    : "border-slate-800/90 shadow-[0_0_45px_rgba(15,23,42,0.85)]",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.7rem] border border-slate-800/70" />
                <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500" />

                <div className="relative p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative">
                        <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/22 via-cyan-400/18 to-sky-500/22 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

                        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]">
                          <div className="relative w-12 h-12 rounded-3xl bg-[#020617] border border-slate-800/70 flex items-center justify-center shadow-[0_0_22px_rgba(79,70,229,0.28)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.34)] transition-shadow">
                            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.14),transparent_62%)] opacity-80" />
                            <span className="relative text-cyan-200 text-base">{p.icon}</span>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-0 flex flex-col justify-center">
                        <div className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">{p.name}</div>

                        <div className="mt-2">
                          <MiniSavingsPopover
                            prices={p.prices}
                            planName={p.name}
                            open={isOpen}
                            onOpen={() => setOpenPopoverKey(p.key)}
                            onClose={() => setOpenPopoverKey(null)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 relative">
                      <div className="text-3xl sm:text-4xl font-bold leading-none">
                        <span className="bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent opacity-95 group-hover:opacity-100 transition-opacity">
                          {formatPrice(price)}
                        </span>
                      </div>

                      <div className="text-xs text-slate-400 mt-2">pro Fahrlehrer{suffix}</div>

                      {billing !== "weekly"
                        ? (() => {
                            const discountPct = discountFromWeekly(p.prices, billing);
                            if (discountPct === null) return null;

                            const old =
                              billing === "monthly" ? (p.prices.weekly * 52) / 12 : p.prices.weekly * 52;

                            return (
                              <div className="absolute right-0 top-full mt-2 z-10 flex items-center gap-2 leading-none">
                                <div className="relative inline-flex items-center rounded-full border border-emerald-400/30 bg-slate-950/80 backdrop-blur px-2.5 py-1 overflow-hidden">
                                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-100/10 via-lime-100/10 to-emerald-100/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <span className="text-[0.65rem] tracking-[0.22em] uppercase bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(163,230,53,0.25)] group-hover:drop-shadow-[0_0_14px_rgba(163,230,53,0.45)] transition-[filter,opacity]">
                                    -{discountPct}%
                                  </span>
                                </div>

                                <span className="text-xs text-slate-400 line-through">{formatPrice(Math.round(old))}</span>
                              </div>
                            );
                          })()
                        : null}
                    </div>
                  </div>

                  <div className="mt-7 flex-1">
                    <div className="text-sm font-semibold text-slate-100">Enthalten</div>
                    <ul className="mt-3 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-slate-200/90">
                          <FaCheckCircle className="w-4 h-4 flex-none mt-[2px] text-cyan-300/90" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 text-sm font-semibold text-slate-100">Nicht enthalten</div>
                    <ul className="mt-3 space-y-2.5">
                      {(p.limitations.length > 0 ? p.limitations : ["—"]).map((f, i) => (
                        <li key={`${p.key}-lim-${i}`} className="flex gap-2.5 text-sm text-slate-300/80">
                          <span className="w-4 h-4 flex-none mt-[3px] inline-flex items-center justify-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-500/80" />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-7">
                    {p.cta.variant === "primary" ? (
                      <PrimaryButton href={p.cta.href}>{p.cta.label}</PrimaryButton>
                    ) : (
                      <SecondaryButton href={p.cta.href}>{p.cta.label}</SecondaryButton>
                    )}

                    <p className="mt-4 text-xs text-slate-400">{cancelText(billing)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
