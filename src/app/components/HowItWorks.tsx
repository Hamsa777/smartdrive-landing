"use client";

// src/app/components/HowItWorks_Timeline.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState, type ReactNode } from "react";
import {
  FaWpforms,
  FaRegClock,
  FaCogs,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

type Step = {
  title: string;
  desc: string;
  icon: ReactNode;
  mockup?: ReactNode;
};

type Shot = {
  srcCandidates: string[];
  alt: string;
  label: string;
  w: number;
  h: number;
};

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
const u = (s: string) => encodeURI(s);

function ShotsShell({
  title,
  hint,
  children,
}: {
  title?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-5">
      <div className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-300 text-center">
        Screenshots
      </div>

      {title ? (
        <div className="mt-1 text-sm font-semibold text-white text-center">
          {title}
        </div>
      ) : null}

      {hint ? (
        <div className="mt-2 text-xs text-slate-300/90 leading-relaxed text-center">
          {hint}
        </div>
      ) : null}

      <div className="mt-4">{children}</div>
    </div>
  );
}

function MultiSrcImage({
  srcCandidates,
  alt,
  sizes,
}: {
  srcCandidates: string[];
  alt: string;
  sizes: string;
}) {
  const candidates = useMemo(() => {
    const all = srcCandidates.flatMap((s) => {
      const enc = u(s);
      return s === enc ? [s] : [s, enc];
    });
    return Array.from(new Set(all));
  }, [srcCandidates]);

  const [idx, setIdx] = useState(0);
  const src = candidates[Math.min(idx, candidates.length - 1)];

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-contain select-none"
      priority={false}
      onError={() => setIdx((v) => (v < candidates.length - 1 ? v + 1 : v))}
    />
  );
}

function IPhoneFrame({
  shot,
  sizeClassName,
}: {
  shot: Shot;
  sizeClassName?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full ${
        sizeClassName ?? "max-w-[320px] sm:max-w-[360px]"
      }`}
    >
      {/* Outer frame */}
      <div className="relative rounded-[2.85rem] border border-slate-700/70 bg-gradient-to-br from-slate-900/60 via-slate-950/40 to-slate-900/60 p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_60px_rgba(0,0,0,0.55)]">
        {/* subtle metallic highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2.85rem] opacity-[0.22] bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.14),transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.10),transparent_55%)]"
        />

        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-[2.35rem] bg-black"
          style={{ aspectRatio: `${shot.w} / ${shot.h}` }}
        >
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2 z-30 -translate-x-1/2">
            <div className="relative h-6 w-28 rounded-full border border-slate-700/60 bg-black/85 backdrop-blur-md shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
              <span className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-600/70" />
              <span className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-600/35" />
            </div>
          </div>

          {/* Gentle screen glow (does NOT crop content) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.10] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_52%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.18),transparent_55%)]"
          />

          {/* Screenshot */}
          <div className="absolute inset-0 z-0">
            <MultiSrcImage
              srcCandidates={shot.srcCandidates}
              alt={shot.alt}
              sizes="(min-width: 1024px) 360px, (min-width: 620px) 45vw, 100vw"
            />
          </div>
{/* Home Button (classic iPhone style: circle + squircle outline) */}
<div className="pointer-events-none absolute left-1/2 bottom-1 z-30 -translate-x-1/2">
  <div className="relative h-9 w-9 rounded-full border border-slate-500/35 bg-black/25 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.04),0_14px_28px_rgba(0,0,0,0.6)]">

    {/* squircle icon in the center */}
    <div className="absolute left-1/2 top-1/2 h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-[5px] border border-slate-300/25 shadow-[0_0_10px_rgba(148,163,184,0.12)]" />

    {/* subtle highlight */}
    <div className="absolute inset-0 rounded-full opacity-[0.18] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_55%)]" />
  </div>
</div>

          {/* Bezel vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),inset_0_-24px_48px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </div>
  );
}

function PhoneShots({
  title,
  hint,
  shots,
}: {
  title?: string;
  hint?: string;
  shots: Shot[];
}) {
  const isSingle = shots.length === 1;

  return (
    <ShotsShell title={title} hint={hint}>
      <div className="grid gap-5 sm:grid-cols-2">
        {shots.map((s) => (
          <div
            key={s.label}
            className={`relative w-full rounded-2xl border border-slate-800/80 bg-slate-950/55 overflow-hidden ${
              isSingle ? "sm:col-span-2 sm:mx-auto sm:max-w-[380px]" : ""
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/55 to-transparent" />

            <div className={`${isSingle ? "p-3 sm:p-4" : "p-4"}`}>
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 border border-slate-700/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)]" />
                  <span className="text-[0.65rem] tracking-[0.22em] uppercase text-slate-300">
                    {s.label}
                  </span>
                </span>
              </div>

              <div className="mt-4">
                <IPhoneFrame
                  shot={s}
                  sizeClassName={
                    isSingle ? "max-w-[220px] sm:max-w-[260px]" : undefined
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ShotsShell>
  );
}

function StepCard({
  idx,
  step,
  alignRight,
}: {
  idx: number;
  step: Step;
  alignRight: boolean;
}) {
  return (
    <div className="relative">
      <div className="relative rounded-3xl border border-slate-800/90 bg-slate-950/80 backdrop-blur-2xl px-6 sm:px-7 py-7 overflow-hidden">
        <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-500 opacity-70" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.22),transparent_55%)]"
        />

        <div
          className={`relative flex items-start gap-4 ${
            alignRight ? "lg:flex-row-reverse lg:text-right" : ""
          }`}
        >
          <div className="shrink-0">
            {/* Icon: only icon glow/zoom on hover */}
            <div className="group/icon relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-slate-800 to-indigo-500/40">
              <div className="h-12 w-12 rounded-2xl bg-slate-950/85 border border-slate-800/80 flex items-center justify-center">
                <span className="inline-flex text-cyan-200 transition-all duration-200 ease-out transform-gpu group-hover/icon:drop-shadow-[0_0_18px_rgba(34,211,238,0.55)] group-hover/icon:scale-110">
                  {step.icon}
                </span>
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <span
              className={`inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 border border-slate-700/70 ${
                alignRight ? "lg:justify-end" : ""
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-slate-300">
                Step {String(idx + 1).padStart(2, "0")}
              </span>
            </span>

            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-2 text-sm text-slate-200/90 leading-relaxed">
              {step.desc}
            </p>

            {step.mockup ? step.mockup : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks_Timeline() {
  const steps: Step[] = [
    {
      title: "Onboarding-Formulare",
      desc: "Fahrlehrer und Schüler tragen einmalig Stammdaten über ein digitales Onboarding-Formular ein. Damit ist die Basis für jede automatische Planung sauber gesetzt.",
      icon: <FaWpforms className="w-5 h-5" />,
      mockup: (
        <PhoneShots
          shots={[
            {
              label: "Fahrlehrer",
              w: 1290,
              h: 2841,
              alt: "Lehrer Onboarding (Screenshot)",
              srcCandidates: ["/Formulare/LehrerOnboarding.jpg"],
            },
            {
              label: "Fahrschüler",
              w: 1290,
              h: 2841,
              alt: "Schüler Onboarding (Screenshot)",
              srcCandidates: [
                "/Formulare/SchülerOnboading.jpg",
                "/Formulare/SchülerOnboarding.jpg",
                "/Formulare/SchuelerOnboarding.jpg",
              ],
            },
          ]}
        />
      ),
    },
    {
      title: "Verfügbarkeiten sammeln",
      desc: "Fahrlehrer und Schüler senden wöchentlich bis zu einer von Ihnen festgelegten Deadline ihre Verfügbarkeiten für die kommende Woche ab.",
      icon: <FaRegClock className="w-5 h-5" />,
      mockup: (
        <PhoneShots
          shots={[
            {
              label: "Fahrlehrer",
              w: 1290,
              h: 2841,
              alt: "Fahrlehrer Sperrzeiten (Screenshot)",
              srcCandidates: [
                "/Formulare/FahrlehrerSperrzeiten.jpg",
                "/Formulare/FahrlehrerBlockzeiten.jpg",
              ],
            },
            {
              label: "Fahrschüler",
              w: 1290,
              h: 2841,
              alt: "Schüler Verfügbarkeiten (Screenshot)",
              srcCandidates: [
                "/Formulare/Schülerverfügbarkeiten.jpg",
                "/Formulare/FahrschülerVerfügbarkeiten.jpg",
                "/Formulare/SchuelerVerfuegbarkeiten.jpg",
              ],
            },
          ]}
        />
      ),
    },
    {
      title: "Erstellung des Wochenplans",
      desc: "Nachdem die Verfügbarkeiten der Fahrschüler und die Blockzeiten der Fahrlehrer im System sind, erstellt SmartDrive vollautomatisch den Wochenplan.",
      icon: <FaCogs className="w-5 h-5" />,
     mockup: (
  <div className="mt-7 flex justify-center">
    <Image
      src="/SmartDriveFinal.png"
      alt="SmartDrive Logo"
      width={975}
      height={175}
      className="h-14 sm:h-16 w-auto object-contain -translate-x-6"
    />
  </div>
),

    },
    {
      title: "Wochenplan an Fahrlehrer",
      desc: "Die Wochenpläne werden automatisiert per WhatsApp an die Fahrlehrer gesendet. Bei Bedarf können Anpassungen vorgenommen werden.",
      icon: <FaWhatsapp className="w-5 h-5" />,
      mockup: (
        <PhoneShots
          shots={[
            {
              label: "Wochenplan",
              w: 848,
              h: 1750,
              alt: "Wochenplan Vorschau",
              srcCandidates: ["/Wochenplan1.png"],
            },
          ]}
        />
      ),
    },
    {
      title: "Bestätigung & Versand",
      desc: "Nach Bestätigung durch die Fahrlehrer werden die einzelnen Fahrstunden automatisch an die Fahrschüler versendet ohne manuelle Verteilung.",
      icon: <FaCheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <section id="ablauf" className="relative py-20 px-6 sm:px-8">
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
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200">
                Der Ablauf pro Woche
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            So funktioniert SmartDrive{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Schritt für Schritt
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
            Einmal eingerichtet – danach wiederholt sich der Prozess jede Woche
            automatisch.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-400/70 via-slate-700/60 to-transparent" />

          <div className="space-y-6">
            {steps.map((s, i) => {
              const alignRight = i % 2 === 1;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 items-start">
                    {!alignRight ? (
                      <>
                        <StepCard idx={i} step={s} alignRight={false} />
                        <div className="hidden lg:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden lg:block" />
                        <StepCard idx={i} step={s} alignRight />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
