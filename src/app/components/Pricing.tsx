"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaComments, FaBolt, FaCrown, FaRocket } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

const CAL_LINK =
  "https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung";

type Billing = "weekly" | "monthly" | "yearly";

type Plan = {
  key: "A" | "B" | "C";
  name: string;
  icon: React.ReactNode;

  /**
   * Manuelle Preise pro Abrechnung (pro Fahrlehrer)
   * -> KEINE Berechnung mehr
   */
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
    prices: {
      weekly: 29,
      monthly: 99,
      yearly: 1049,
    },
    features: [
      "Automatische Wochenplan-Erstellung",
      "Max. 2 Termine pro Schüler / Woche",
      "Automatisierter Whatsapp-Versand an Fahrlehrer",
      "Sperrzeiten für Fahrlehrer definierbar"
      
    ],
    limitations: ["Unbegrenzte Termine pro Schüler / Woche","Automatisierter WhatsApp-Versand an Fahrschüler", "Pausen-Regeln zwischen Fahrstunden"],
    cta: { label: "Weiter zur Zahlung", href: CAL_LINK, variant: "secondary" },
  },
  {
    key: "B",
    name: "SmartDrive Pro",
    icon: <FaRocket className="text-cyan-200" />,
    prices: {
      weekly: 39,
      monthly: 129,
      yearly: 1299,
    },
    highlight: true,
    features: [
      "Alles aus Core",
      "Max. 3 Termine pro Schüler / Woche",
      "Kurze Pausen zwischen jeder Fahrstunde setzbar",
      
    ],
    limitations: ["Unbegrenzte Termine pro Schüler / Woche","Automatisierter WhatsApp-Versand an Fahrschüler"],
    cta: { label: "Weiter zur Zahlung", href: CAL_LINK, variant: "secondary" },
  },
  {
    key: "C",
    name: "SmartDrive Ultimate",
    icon: <FaCrown className="text-cyan-200" />,
    prices: {
      weekly: 59,
      monthly: 159,
      yearly: 1599,
    },
    features: [
      "Alles aus Pro",
      "Automatisierter WhatsApp-Versand an alle Fahrschüler",
      "Unbegrenzte Termine pro Schüler / Woche",
    ],
    limitations: [],
    cta: { label: "Weiter zur Zahlung", href: CAL_LINK, variant: "secondary" },
  },
];

function PrimaryButton({
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
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
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

function BillingToggle({
  billing,
  setBilling,
}: {
  billing: Billing;
  setBilling: (b: Billing) => void;
}) {
  const items: { key: Billing; label: string; sub?: string }[] = [
    { key: "weekly", label: "Wöchntl" },
    { key: "monthly", label: "Mntl" },
    { key: "yearly", label: "Jährl" },
  ];

  return (
    // (1) Weniger Luft nach unten: mt-7 -> mt-5, und unnötige Subline-Reserve entfernt
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
              {/* (1) Unnötige Sub-Zeile entfernt -> weniger Höhe/Spacing */}
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

  // (4) Jährlich „kündbar“ ist unklar – sinnvoller:
  // Alternative 1 (Standard): „Jährliche Abrechnung“
  // Alternative 2: „Laufzeit 12 Monate“
  // Alternative 3: „Jahresvertrag (12 Monate)“
  return "Jährliche Abrechnung";
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
function roundDiscountPercent(n: number) {
  // ab 0,5 aufrunden -> Math.round
  return Math.round(n);
}

function discountFromWeekly(prices: Record<Billing, number>, billing: Billing) {
  if (billing === "weekly") return null;

  const weekly = prices.weekly;
  const chosen = prices[billing];

  if (!weekly || weekly <= 0 || !chosen || chosen <= 0) return null;

  const yearlyFromWeekly = weekly * 52;
  const equivalent =
    billing === "monthly" ? yearlyFromWeekly / 12 : yearlyFromWeekly; // monthly-equivalent bzw yearly-equivalent

  // Rabatt in %: (1 - chosen/equivalent) * 100
  const raw = (1 - chosen / equivalent) * 100;
  const pct = roundDiscountPercent(raw);

  // Nur anzeigen wenn wirklich Rabatt
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
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">
                Unsere Preise
              </span>
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((p, idx) => {
            // (2) keine Berechnung mehr – rein manuell aus prices
            const price = p.prices[billing];
            const suffix = billingSuffix(billing);
            const discountPct = discountFromWeekly(p.prices, billing);
            return (
              <motion.div
                key={p.key}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                className={[
                  "relative  group rounded-[1.8rem] border bg-slate-950/80 backdrop-blur-2xl overflow-hidden",
                  p.highlight
                    ? "border-cyan-400/40 shadow-[0_0_40px_rgba(56,189,248,0.18)]"
                    : "border-slate-800/90 shadow-[0_0_45px_rgba(15,23,42,0.85)]",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.7rem] border border-slate-800/70" />
                <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500" />

                <div className="relative p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    {/* ICON + NAME (premium, aber clean: kein floating, kein underline, kein name-glow) */}
<div className="flex items-center gap-3.5 min-w-0">
  {/* ICON CHIP (gradient ring + glow, ohne motion) */}
  <div className="relative">
    {/* outer glow */}
    <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/22 via-cyan-400/18 to-sky-500/22 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

    {/* ring */}
    <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]">
      <div className="relative w-12 h-12 rounded-3xl bg-[#020617] border border-slate-800/70 flex items-center justify-center shadow-[0_0_22px_rgba(79,70,229,0.28)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.34)] transition-shadow">
        {/* inner glow (subtle) */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.14),transparent_62%)] opacity-80" />
        <span className="relative text-cyan-200 text-base">{p.icon}</span>
      </div>
    </div>
  </div>

  {/* NAME (clean, slightly smaller) */}
  <div className="min-w-0 h-12 flex items-center">
    <div className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">
      {p.name}
    </div>
  </div>
</div>

<div className="text-right shrink-0 relative">
  <div className="text-3xl sm:text-4xl font-bold leading-none">
 <span className="bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent opacity-95 group-hover:opacity-100 transition-opacity">
  {formatPrice(price)}
</span>

</div>


  <div className="text-xs text-slate-400 mt-2">
    pro Fahrlehrer{suffix}
  </div>

  {/* Overlay: nimmt keinen Layout-Platz weg */}
  {billing !== "weekly" ? (() => {
    const discountPct = discountFromWeekly(p.prices, billing);
    if (discountPct === null) return null;

    const old =
      billing === "monthly"
        ? (p.prices.weekly * 52) / 12
        : p.prices.weekly * 52;

    return (
      <div className="absolute right-0 top-full mt-2 z-10 flex items-center gap-2 leading-none">
        <div className="relative inline-flex items-center rounded-full border border-emerald-400/30 bg-slate-950/80 backdrop-blur px-2.5 py-1 overflow-hidden">
  {/* gleiche Money-Gradient-Farbe wie Preis + stärker beim Hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-emerald-100/10 via-lime-100/10 to-emerald-100/10 opacity-0 group-hover:opacity-100 transition-opacity" />

  <span className="text-[0.65rem] tracking-[0.22em] uppercase bg-gradient-to-r from-emerald-100 via-lime-100 to-emerald-100 bg-clip-text text-transparent opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(163,230,53,0.25)] group-hover:drop-shadow-[0_0_14px_rgba(163,230,53,0.45)] transition-[filter,opacity]">
    -{discountPct}%
  </span>
</div>

        <span className="text-xs text-slate-400 line-through">
          {formatPrice(Math.round(old))}
        </span>
      </div>
    );
  })() : null}
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
                        <li
                          key={`${p.key}-lim-${i}`}
                          className="flex gap-2.5 text-sm text-slate-300/80"
                        >
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


                    {/* (4) Dynamischer Text je Auswahl, Free-Month entfernt */}
                    <p className="mt-4 text-xs text-slate-400">{cancelText(billing)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

<div className="mt-10 flex justify-center">
         

<div className="w-full max-w-xl rounded-2xl  bg-slate-950/70 px-6 py-6 text-center">
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
      </div>
    </section>
  );
}
