// src/app/components/Painpoints.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircleOff,
  PhoneOff,
  CalendarX2,
  Shuffle,
  ArrowRight,
} from "lucide-react";
import Section from "./Section";
import { styles } from "../lib/styles";

const ITEMS = [
  {
    icon: MessageCircleOff,
    title: "WhatsApp- & Nachrichten-Chaos",
    desc: "Infos verteilen sich über Chats, Screenshots und Sprachnachrichten – Rückfragen kosten jeden Tag Zeit.",
  },
  {
    icon: PhoneOff,
    title: "Dauertelefonieren statt Fahren",
    desc: "Verschieben, nachfragen, bestätigen – Planung wird zur Vollzeitaufgabe, statt nebenbei zu laufen.",
  },
  {
    icon: CalendarX2,
    title: "Konflikte & Doppelbelegungen",
    desc: "Fahrlehrer, Schüler, Auto, Standort – sobald eine Variable kippt, zerbricht der Plan manuell.",
  },
  {
    icon: Shuffle,
    title: "Lücken & Leerlauf in der Woche",
    desc: "Unnötige Lücken senken die Auslastung. Ohne System entstehen Fahrten und Zeiten, die sich nicht lohnen.",
  },
];

export default function Painpoints() {
  return (
    <Section tone="light" id="pain" className="relative overflow-hidden">
      {/* Subtle accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-[320px] w-[320px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-60px] h-[420px] w-[420px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_10px_35px_rgba(2,6,23,0.06)]">
            <span className="h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_18px_rgba(37,99,235,0.35)]" />
            Der Engpass ist nicht der Unterricht – es ist die Planung
          </div>

          <h2 className={`${styles.h2} mt-5 text-slate-950`}>
            Wenn Planung manuell ist, kostet sie dich Umsatz
          </h2>
          <p className={`${styles.lead} mt-4`}>
            SmartDrive ersetzt das „Hin-und-her“ durch einen klaren Wochenprozess:
            Verfügbarkeiten rein → Plan raus → Termine automatisch raus.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`${styles.card} p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative grid h-12 w-12 place-items-center rounded-[18px] border border-slate-200 bg-slate-50">
                    <Icon className="h-5 w-5 text-slate-800" />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-1 rounded-[20px] bg-gradient-to-r from-[#2563EB]/10 via-white/0 to-[#F59E0B]/10 blur-xl"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-slate-950">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-10"
        >
          <div className={`${styles.card} p-6 sm:p-7`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-display text-lg font-semibold text-slate-950">
                  Lösung: ein automatisierter Wochenprozess
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Damit du planbar skalierst – ohne mehr Verwaltung.
                </div>
              </div>

              <a
                href="#testen"
                className="inline-flex items-center justify-center rounded-[22px] bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_40px_rgba(245,158,11,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(245,158,11,0.3)]"
              >
                Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Weniger Rückfragen
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Weniger Konflikte
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Mehr Auslastung
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                Premium-Auftritt
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
