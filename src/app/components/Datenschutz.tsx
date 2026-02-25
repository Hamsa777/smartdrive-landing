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

      {/* 2. Art und Zweck der Datenverarbeitung */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Art und Zweck der Datenverarbeitung</h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Wir differenzieren die Verarbeitung Ihrer Daten nach zwei Hauptzwecken:
          </p>

          <p>
            <strong>A. Technischer Betrieb der Website</strong>: Um Ihnen unsere Website sicher und
            stabil anzeigen zu können, verarbeiten wir technisch notwendige Daten (z. B. Logfiles).
            Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO
            (Sicherheit, Stabilität, Missbrauchs-/Angriffsabwehr).
          </p>

          <p>
            <strong>B. Erbringung unserer Leistungen (Onboarding &amp; Projektabwicklung)</strong>:
            Wenn Sie unsere Dienste in Anspruch nehmen, verarbeiten wir Daten zur Vertragserfüllung
            oder zur Durchführung vorvertraglicher Maßnahmen. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
            b DSGVO.
          </p>
        </div>
      </section>

      {/* 3. Webhosting & Bereitstellung */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          3. Webhosting &amp; Bereitstellung (Vercel &amp; STRATO)
        </h2>

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
            bereitgestellt (Deployment über GitHub). Beim Aufruf der Website werden automatisch
            Informationen in sogenannten Server-Logfiles verarbeitet, z. B.:
          </p>

          <ul className="list-disc pl-6 text-slate-200 space-y-1">
            <li>IP-Adresse (ggf. anonymisiert/gekürzt, je nach Systemkonfiguration)</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Aufgerufene Seite/URL</li>
            <li>Browsertyp/-version (User-Agent)</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>

          <p className="text-slate-200">
            Diese Daten sind technisch erforderlich, um die Stabilität und Sicherheit der Website zu
            gewährleisten und Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <p className="text-slate-300">
            Soweit erforderlich, schließen wir mit Dienstleistern Auftragsverarbeitungsverträge
            (AVV) gemäß Art. 28 DSGVO ab.
          </p>
        </div>
      </section>

      {/* 4. Formulare / Onboarding / Automatisierung */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          4. Onboarding-Prozess &amp; Automatisierung (Tally, Make, Google, Hetzner)
        </h2>

        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Wenn Sie uns über ein Formular kontaktieren oder Daten im Rahmen einer Anfrage bzw.
            eines Onboardings übermitteln, verarbeiten wir die von Ihnen eingegebenen Daten zur
            Bearbeitung Ihrer Anfrage sowie zur Vertragsanbahnung/-durchführung (Art. 6 Abs. 1 lit.
            b DSGVO).
          </p>

          <p>
            Für unsere Dienstleistungen nutzen wir teilweise automatisierte Prozesse:
          </p>

          <ul className="list-disc pl-6 text-slate-200 space-y-2">
            <li>
              <strong>Datenerfassung (Tally)</strong>: Zur Aufnahme Ihrer Daten (z. B. Name,
              E-Mail-Adresse, Telefonnummer, unternehmensbezogene Angaben) nutzen wir Formulare des
              Anbieters <strong>Tally</strong>.
            </li>
            <li>
              <strong>Automatisierung (Make.com)</strong>: Die Datenübertragung zwischen Tools kann
              über <strong>Make.com</strong> erfolgen (z. B. Weiterleitung, Benachrichtigungen,
              Prozesslogik).
            </li>
            <li>
              <strong>Zwischenspeicherung/Organisation (Google Sheets / Google Workspace)</strong>:
              Zur internen Organisation können Daten in Google Sheets innerhalb von Google Workspace
              verarbeitet werden. Soweit hierbei eine Verarbeitung außerhalb der EU/EWR nicht
              ausgeschlossen werden kann, nutzen wir geeignete Garantien (z. B.
              Standardvertragsklauseln der EU-Kommission), sofern erforderlich.
            </li>
            <li>
              <strong>Verarbeitung &amp; Speicherung (Hetzner)</strong>: Je nach Projekt kann die
              eigentliche Verarbeitung/Speicherung auf Servern bei{" "}
              <strong>Hetzner (Deutschland/EU)</strong> erfolgen.
            </li>
          </ul>

          <p>
            <strong>Zweck</strong>: Bearbeitung von Anfragen, Projektabwicklung, Kommunikation,
            Dokumentation und Erbringung unserer vertraglichen Leistungen.
          </p>

          <p className="text-slate-300">
            Soweit erforderlich, schließen wir Auftragsverarbeitungsverträge (AVV) gemäß Art. 28
            DSGVO mit den jeweiligen Dienstleistern ab.
          </p>
        </div>
      </section>

      {/* 5. Kommunikation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Kommunikation (E-Mail)</h2>
        <p className="text-slate-200 leading-relaxed">
          Für E-Mail-Kommunikation und automatisierte Benachrichtigungen nutzen wir{" "}
          <strong>Google Workspace</strong> (z. B. SMTP). Dabei werden die für den Versand erforderlichen Daten
          verarbeitet (z. B. E-Mail-Adresse, Inhalt der Nachricht, Metadaten). Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (effiziente
          Kommunikation) – abhängig vom Einzelfall.
        </p>
      </section>

      {/* 6. Zahlungsabwicklung */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          6. Zahlungsabwicklung &amp; Rechnungsstellung (Stripe)
        </h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Für die Zahlungsabwicklung und ggf. Rechnungsstellung nutzen wir <strong>Stripe</strong>.
            Dabei werden je nach Zahlungsmethode personenbezogene Daten (z. B. Name, E-Mail,
            Rechnungsdaten, Zahlungsdaten) verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO (Vertragserfüllung).
          </p>
          <p>
            Anbieter in Europa ist in der Regel: <strong>Stripe Payments Europe, Ltd.</strong>, 1
            Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland.
          </p>
          <p className="text-slate-200">
            Stripe verarbeitet Zahlungsdaten nach hohen Sicherheitsstandards (z. B. PCI-DSS).
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
          <p>
            Sofern die Kommunikation über WhatsApp auf Ihrer Einwilligung beruht, ist die
            Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen.
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
        <h2 className="text-2xl font-semibold mb-4">9. Cookies &amp; Tracking</h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Wir verzichten bewusst auf den Einsatz von Analyse-Tools (z. B. Google Analytics) oder
            Werbe-Trackern (z. B. Meta-Pixel).
          </p>
          <p>
            Es können <strong>technisch notwendige Cookies</strong> eingesetzt werden, soweit dies
            für den Betrieb, die Sicherheit und die grundlegende Funktionalität der Website
            erforderlich ist. Dabei kann es sich z. B. um Session-Cookies handeln, die nach dem
            Schließen des Browsers gelöscht werden.
          </p>
        </div>
      </section>

      {/* 10. Speicherdauer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">10. Speicherdauer</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir speichern personenbezogene Daten grundsätzlich nur so lange, wie es für die genannten
          Zwecke erforderlich ist („solange erforderlich“) oder gesetzliche Aufbewahrungsfristen
          bestehen. Handels- und steuerrechtliche Aufbewahrungsfristen können im Regelfall bis zu{" "}
          <strong>10 Jahre</strong> betragen. Nach Ablauf der Fristen werden die Daten gelöscht oder
          anonymisiert, sofern keine weitere rechtliche Grundlage besteht.
        </p>
      </section>

      {/* 11. Ihre Rechte */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">11. Ihre Rechte</h2>
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            Sie haben – je nach Voraussetzungen – das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
            Verarbeitung.
          </p>
          <p>
            Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
          </p>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a className="underline text-cyan-300" href="mailto:kontakt@ki-partner24.de">
              kontakt@ki-partner24.de
            </a>
            .
          </p>
        </div>
      </section>

      {/* 12. Löschung & Anfragen */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">12. Löschung &amp; Anfragen</h2>
        <p className="text-slate-200 leading-relaxed">
          Wenn Sie Fragen zum Datenschutz haben oder die Löschung von Daten anfragen möchten,
          schreiben Sie uns bitte an{" "}
          <a className="underline text-cyan-300" href="mailto:kontakt@ki-partner24.de">
            kontakt@ki-partner24.de
          </a>
          .
        </p>
      </section>

      {/* 13. Datensicherheit */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">13. Datensicherheit</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir setzen angemessene technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre
          Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen
          Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Die Übertragung
          von Daten erfolgt in der Regel verschlüsselt (SSL/TLS), soweit dies technisch möglich ist.
        </p>
      </section>

      {/* 14. Änderungen */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">14. Änderungen dieser Datenschutzerklärung</h2>
        <p className="text-slate-200 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich unsere Website,
          Prozesse oder Rechtslagen ändern. Bitte informieren Sie sich regelmäßig über den aktuellen
          Stand.
        </p>
      </section>
    </div>
  );
}