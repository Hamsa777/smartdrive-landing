// src/app/components/Impressum.tsx
import React from "react";

export default function Impressum() {
  return (
    <div className="min-h-screen text-[#ffffff] px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>

      {/* Angaben gemäß § 5 TMG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="text-slate-200 leading-relaxed">
          <strong>Hamsa Lif</strong>
          <br />
          Scharhoferstr. 54
          <br />
          68307 Mannheim
          <br />
          Deutschland
        </p>
      </section>

      {/* Kontakt */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p className="text-slate-200 leading-relaxed">
          Telefon:{" "}
          <a className="underline text-cyan-300" href="tel:+491782303112">
            +49 174 2303112
          </a>
          <br />
          E-Mail:{" "}
          <a className="underline text-cyan-300" href="mailto:kontakt@ki-partner24.de">
            kontakt@ki-partner24.de
          </a>
        </p>
      </section>

    

      {/* Verantwortlich für den Inhalt */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt</h2>
        <p className="text-slate-200 leading-relaxed">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          <br />
          <strong>Hamsa Lif</strong>, Scharhoferstr. 54, 68307 Mannheim
        </p>
      </section>

    <p className="text-slate-400 text-sm mt-10">
  Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB.
</p>


    
    </div>
  );
}
