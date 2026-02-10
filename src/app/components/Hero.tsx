"use client";

// src/app/components/Hero.tsx
import { motion } from "framer-motion";
import {
  FaClock,
  FaSlidersH,
  FaUserCheck,
  FaWhatsapp,
  FaComments,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 sm:pt-20 pb-14 px-6 sm:px-8">
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_78%,transparent_100%)]">
    <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(56,189,248,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.10)_1px,transparent_1px)] bg-[size:46px_46px]" />
    <div className="absolute inset-y-0 left-0 w-[32vw] max-w-[520px] bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent" />
    <div className="absolute inset-y-0 right-0 w-[32vw] max-w-[520px] bg-gradient-to-l from-slate-950/60 via-slate-950/20 to-transparent" />
    <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.14),transparent_55%)]" />
  </div>
</div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-slate-200 font-semibold">
                SmartDrive · Wir automatisieren Ihre Terminplanung
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-5xl mx-auto text-white"
          >
            Ihre Fahrschule mit{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              SmartDrive.
            </span>
            <br />
            <span className="text-slate-300">Mehr fahren. Weniger planen.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Automatisieren Sie Ihre wöchentliche Terminplanung mit{" "}
            <span className="font-semibold text-white">unserer Software.</span>
            <br />
            Für entlastete Fahrlehrer und{" "}
            <span className="font-semibold bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(79,70,229,0.45)]">
              mehr Zeit im Auto.
            </span>
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mt-10 mb-2 grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center"
          >
            {[
              { icon: <FaUserCheck className="w-6 h-6" />, text: "DSGVO-konform" },
              { icon: <FaClock className="w-6 h-6" />, text: "Simples Onboarding" },
              { icon: <FaSlidersH className="w-6 h-6" />, text: "Keine App für Schüler" },
              { icon: <FaWhatsapp className="w-6 h-6" />, text: "WhatsApp-Versand" },
            ].map((p) => (
              <div key={p.text} className="flex flex-col items-center text-center gap-2">
                <span className="text-cyan-200">{p.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                  {p.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#testen"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                relative group inline-flex items-center justify-center rounded-full
                bg-gradient-to-r from-[#283593] via-[#4f46e5] to-[#00bcd4]
                group-hover:from-[#4f46e5] group-hover:via-[#00bcd4] group-hover:to-[#283593]
                p-[2px]
                shadow-[0_0_28px_rgba(79,70,229,0.9)]
                hover:shadow-[0_0_36px_rgba(79,70,229,1)]
                transition-shadow duration-300
              "
            >
              <span className="flex items-center gap-3 px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#020617] text-sm sm:text-base font-semibold text-white">
                Jetzt kostenlos testen
              </span>
            </motion.a>

            <motion.a
              href="https://cal.com/ki-partner/smartdrive-vollautomatische-terminplanung"
                target="_blank"
                rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
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
                <FaComments className="text-cyan-200" />
                Kontakt
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
