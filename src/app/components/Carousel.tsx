// src/app/components/Carousel.tsx
"use client";

import { motion } from "framer-motion";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/Logos_Fahrschulen/Fahrschule1.png", alt: "Logo 01" },
  { src: "/Logos_Fahrschulen/Fahrschule2.png", alt: "Logo 02" },
  { src: "/Logos_Fahrschulen/Fahrschule3.png", alt: "Logo 03" },
  { src: "/Logos_Fahrschulen/Fahrschule4.png", alt: "Logo 04" },
  { src: "/Logos_Fahrschulen/Fahrschule5.png", alt: "Logo 05" },
  { src: "/Logos_Fahrschulen/Fahrschule7.png", alt: "Logo 07" },
  { src: "/Logos_Fahrschulen/Fahrschule9.png", alt: "Logo 09" },
  { src: "/Logos_Fahrschulen/Fahrschule10.png", alt: "Logo 10" },
];

export default function Carousel() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-1">
          <p className="text-[11px] sm:text-[13px] uppercase tracking-[0.25em] text-white mb-4 text-center">
            Ausgewählte Fahrschulen, die bereits auf SmartDrive setzen
          </p>

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 45,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="
                    shrink-0
                    flex items-center justify-center
                    opacity-80 hover:opacity-100 transition-opacity
                    w-[180px] sm:w-[220px]
                    h-[90px] sm:h-[110px]
                  "
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                    className="max-h-full max-w-full object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
