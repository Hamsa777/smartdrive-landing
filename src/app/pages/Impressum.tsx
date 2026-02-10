import React from "react";
import Head from "next/head";

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum | Smartdrive</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen relative overflow-hidden text-white">
        {/* Background (Smartdrive Style) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#020617]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-[#020617] to-slate-950" />
          <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute top-40 -right-24 h-[460px] w-[460px] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-[-140px] left-1/3 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="px-6 py-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            Rechtliches
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Impressum{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Smartdrive
            </span>
          </h1>

          <div className="mt-10 rounded-3xl border border-slate-700/80 bg-slate-950/80 p-8 backdrop-blur shadow-[0_0_40px_rgba(79,70,229,0.08)]">
            <section className="mb-8">
              <p className="text-white font-semibold">Angaben gemäß § 5 TMG:</p>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Hamsa Lif<br />
                Scharhoferstraße 54<br />
                68307 Mannheim<br />
                Deutschland
              </p>
            </section>

            <section className="mb-8">
              <p className="text-white font-semibold">Kontakt:</p>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Telefon: +49 (0) 178 3221470<br />
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@ki-partner24.de"
                  className="underline decoration-cyan-400/60 underline-offset-4 hover:text-cyan-200"
                >
                  kontakt@ki-partner24.de
                </a>
              </p>
            </section>

            <section className="mb-8">
              <p className="text-white font-semibold">Umsatzsteuer-ID:</p>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Nicht erforderlich gemäß § 19 UStG (Kleinunternehmerregelung)
              </p>
            </section>

            <section>
              <p className="text-white font-semibold">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Hamsa Lif<br />
                gleiche Anschrift wie oben
              </p>
            </section>
          </div>

          <div className="mt-8 text-sm text-slate-300">
            <a href="/" className="underline hover:text-cyan-200">
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
