// /components/Datenschutz.tsx
import React from "react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

      <p className="text-slate-200 mb-10">
        Mit dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung personenbezogener
        Daten bei Nutzung unserer Website und unserer Leistungen im B2B-Bereich (DACH).
      </p>

      {/* 1. Verantwortlicher */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
        <p className="text-slate-200 leading-relaxed">
          <strong>Hamsa Lif / KI-Partner</strong>
          <br />
          Scharhoferstr. 54, 68307 Mannheim
          <br />
          Deutschland
          <br />
          E-Mail:{" "}
          <a className="underline text-cyan-300" href="mailto:kontakt@ki-partner24.de">
            kontakt@ki-partner24.de
          </a>
          <br />
          Telefon:{" "}
          <a className="underline text-cyan-300" href="tel:+491782303112">
            +49 174 2303112
          </a>
        </p>
      </section>

      {/* 2. Allgemeines */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Allgemeines zur Datenverarbeitung</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
          funktionsfähigen Website sowie zur Erbringung unserer Leistungen erforderlich ist. Eine
          Verarbeitung erfolgt insbesondere auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          (Vertrag/Anbahnung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. sichere
          Bereitstellung der Website).
        </p>
      </section>

      {/* 3. Website & Hosting */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Website, Hosting & Bereitstellung</h2>

        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Unsere Website ist erreichbar unter <strong>smartdrive.ki-partner24.de</strong>.
          </p>

          <p>
            <strong>Domain/Registrar</strong>: Die Domain wird über <strong>STRATO AG</strong>{" "}
            (Deutschland) verwaltet.
          </p>

          <p>
            <strong>Hosting</strong>: Die Website wird technisch über <strong>Vercel</strong>{" "}
            bereitgestellt (Deployment über GitHub). Bei Aufruf der Website werden technisch
            notwendige Daten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit, angeforderte Seite,
            User-Agent, Referrer). Diese Daten sind erforderlich, um die Website auszuliefern, die
            Stabilität und Sicherheit zu gewährleisten und Angriffe abzuwehren.
          </p>

          <p className="text-slate-300">
            Hinweis: Auch wenn wir selbst keine „Tracking-Analytics“ einsetzen, können beim Hosting
            technisch notwendige Logs anfallen, die zur sicheren Bereitstellung erforderlich sind.
          </p>
        </div>
      </section>

      {/* 4. Kontaktformulare / Onboarding */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Formulare (Kontakt / Anfrage / Onboarding)</h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Wenn Sie uns über ein Formular kontaktieren oder Daten im Rahmen einer Anfrage bzw.
            eines Onboardings übermitteln, verarbeiten wir die von Ihnen eingegebenen Daten zur
            Bearbeitung Ihrer Anfrage sowie zur Vertragsanbahnung/-durchführung.
          </p>

          <p>
            <strong>Formularanbieter</strong>: Tally
            <br />
            <strong>Automatisierung</strong>: Make.com
            <br />
            <strong>Speicherung</strong>: je nach Prozess in Google Sheets und/oder auf einem
            Server bei Hetzner (Deutschland/EU).
          </p>

          <p>
            <strong>Zweck</strong>: Bearbeitung von Anfragen, Bereitstellung unserer Leistungen,
            Projektabwicklung, Kommunikation, Dokumentation.
          </p>
        </div>
      </section>

      {/* 5. E-Mail */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. E-Mail-Kommunikation</h2>
        <p className="text-slate-200 leading-relaxed">
          Für E-Mail-Kommunikation und automatisierte Benachrichtigungen nutzen wir{" "}
          <strong>Google Workspace</strong> (SMTP), teilweise automatisiert über{" "}
          <strong>Make.com</strong>. Dabei werden die für den Versand erforderlichen Daten
          verarbeitet (z. B. E-Mail-Adresse, Inhalt der Nachricht, Metadaten).
        </p>
      </section>

      {/* 6. Zahlungsabwicklung */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Zahlungsabwicklung & Rechnungsstellung (Stripe)</h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Für die Zahlungsabwicklung und Rechnungsstellung nutzen wir <strong>Stripe</strong>.
            Dabei werden je nach Zahlungsmethode personenbezogene Daten (z. B. Name, E-Mail,
            Rechnungsdaten, Zahlungsdaten) verarbeitet.
          </p>
          <p>
            Anbieter in Europa ist in der Regel: <strong>Stripe Payments Europe, Ltd.</strong>, 1
            Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland.
          </p>
          <p>
            Weitere Informationen finden Sie in der{" "}
            <a
              href="https://stripe.com/de/privacy"
              className="text-cyan-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von Stripe
            </a>
            .
          </p>
        </div>
      </section>

      {/* 7. WhatsApp */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. WhatsApp Business (API)</h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Für bestimmte Benachrichtigungen/Kommunikation kann die{" "}
            <strong>WhatsApp Business API</strong> genutzt werden. Dabei werden die für die
            Kommunikation erforderlichen Daten verarbeitet (z. B. Telefonnummer, Nachrichteninhalt,
            Zeitstempel).
          </p>
          <p className="text-slate-300">
            Hinweis: Die WhatsApp Business Plattform wird durch Unternehmen der Meta-Gruppe
            bereitgestellt. Je nach technischer Anbindung kann zusätzlich ein externer
            Lösungsanbieter eingebunden sein. In diesem Fall ergänzen wir diese Erklärung um die
            konkreten Anbieterdetails.
          </p>
        </div>
      </section>

      {/* 8. Newsletter/Marketing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Newsletter / Marketing-E-Mails</h2>
        <p className="text-slate-200 leading-relaxed">
          Sofern Sie einen Newsletter oder Marketing-E-Mails erhalten, erfolgt dies grundsätzlich
          auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder – im B2B-Kontext – im
          Rahmen der gesetzlichen Vorgaben. Sie können dem Erhalt jederzeit widersprechen bzw. eine
          erteilte Einwilligung widerrufen (z. B. per E-Mail an{" "}
          <a className="underline text-cyan-300" href="mailto:kontakt@ki-partner24.de">
            kontakt@ki-partner24.de
          </a>
          ).
        </p>
      </section>

      {/* 9. Cookies / Tracking */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">9. Cookies & Tracking</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir setzen derzeit keine Tracking-Tools wie Google Analytics, Meta Pixel oder ähnliche
          Technologien ein. Technisch notwendige Cookies können eingesetzt werden, soweit dies für
          den Betrieb und die Sicherheit der Website erforderlich ist.
        </p>
      </section>

      {/* 10. Speicherdauer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">10. Speicherdauer</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir speichern personenbezogene Daten grundsätzlich nur so lange, wie es für die genannten
          Zwecke erforderlich ist („solange erforderlich“) oder gesetzliche Aufbewahrungsfristen
          bestehen.
        </p>
      </section>

      {/* 11. Ihre Rechte */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">11. Ihre Rechte</h2>
        <p className="text-slate-200 leading-relaxed">
          Sie haben – je nach Voraussetzungen – das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
          Verarbeitung. Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
          beschweren.
        </p>
      </section>

      {/* 12. Löschanfragen */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">12. Löschung & Anfragen</h2>
        <p className="text-slate-200 leading-relaxed">
          Wenn Sie Fragen zum Datenschutz haben oder die Löschung von Daten anfragen möchten,
          schreiben Sie uns bitte an{" "}
          <a className="underline text-cyan-300" href="mailto:kontakt@ki-partner24.de">
            kontakt@ki-partner24.de
          </a>
          .
        </p>
      </section>

      {/* 13. Änderungen */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">13. Änderungen dieser Datenschutzerklärung</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich unsere Website,
          Prozesse oder Rechtslagen ändern. Bitte informieren Sie sich regelmäßig über den aktuellen
          Stand.
        </p>

       
      </section>
    </div>
  );
}
