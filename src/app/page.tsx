import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-zinc-900" />
            <span className="text-lg font-semibold">SmartDrive</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-zinc-700 hover:text-zinc-900" href="#features">
              Features
            </a>
            <a className="text-sm text-zinc-700 hover:text-zinc-900" href="#how">
              Ablauf
            </a>
            <a className="text-sm text-zinc-700 hover:text-zinc-900" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#cta"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Demo anfragen
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              KI-Automatisierung für Fahrschulen
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Automatische Wochenplanung & Termine per WhatsApp – ohne Chaos.
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-zinc-700">
              SmartDrive sammelt Verfügbarkeiten, erstellt einen optimalen Plan (Schüler, Fahrlehrer, Standort,
              Schaltung/Automatik) und verschickt alle Termine automatisch.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
              >
                Kostenlose Demo anfragen
              </Link>
              <Link
                href="#features"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              >
                Features ansehen
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-600">
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">✔ 100% automatisiert</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">✔ WhatsApp Versand</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">✔ Setup in wenigen Tagen</span>
            </div>
          </div>

          {/* Mock Card */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Beispiel: Wochenplan</p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200">
                erstellt in 1 Klick
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { time: "Mo 10:00–11:30", text: "Anumol • Speyer • Automatik" },
                { time: "Mo 12:00–13:30", text: "Mert • Speyer • Schaltung" },
                { time: "Di 09:00–10:30", text: "Lina • Ludwigshafen • Automatik" },
                { time: "Mi 16:00–17:30", text: "Yusuf • Speyer • Schaltung" },
              ].map((x) => (
                <div
                  key={x.time}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                >
                  <div className="text-xs font-medium text-zinc-700">{x.time}</div>
                  <div className="text-xs text-zinc-700">{x.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-sm font-medium">WhatsApp-Versand</p>
              <p className="mt-1 text-xs text-zinc-700">
                Fahrlehrer bekommen ihren Wochenplan, Schüler nur ihre eigenen Termine – automatisch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Was SmartDrive automatisiert</h2>
          <p className="mt-2 max-w-2xl text-zinc-700">
            Vom Einsammeln der Verfügbarkeiten bis zur fertigen Woche inkl. WhatsApp-Nachrichten.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Verfügbarkeiten einsammeln",
                desc: "Schüler & Fahrlehrer füllen ein Formular aus. Deadline z. B. Mittwoch.",
              },
              {
                title: "Intelligenter Wochenplan",
                desc: "Berücksichtigt Standort, Fahrzeugtyp, Schaltung/Automatik, Blöcke und Regeln.",
              },
              {
                title: "Automatischer Versand",
                desc: "Fahrlehrer erhalten den Wochenplan, Schüler erhalten nur ihre Termine per WhatsApp.",
              },
              {
                title: "Weniger Rückfragen",
                desc: "Klare, personalisierte Nachrichten reduzieren Chaos und Telefonate drastisch.",
              },
              {
                title: "Nachvollziehbar & sauber",
                desc: "Alle Termine sind strukturiert, reproduzierbar und bei Bedarf exportierbar.",
              },
              {
                title: "Skalierbar",
                desc: "Funktioniert auch bei vielen Schülern und mehreren Fahrlehrern/Standorten.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">So läuft’s ab</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { step: "1", title: "Formulare", desc: "Links an Schüler & Fahrlehrer (z. B. Tally)." },
              { step: "2", title: "Deadline", desc: "Bis zur Deadline werden Verfügbarkeiten gesammelt." },
              { step: "3", title: "Scheduler", desc: "Optimiert die Woche automatisch und erzeugt Termine." },
              { step: "4", title: "WhatsApp", desc: "Versendet Wochenplan + Termine personalisiert." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-sm font-semibold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">Demo anfragen</h2>
            <p className="mt-2 max-w-2xl text-zinc-700">
              Schreib kurz deine Fahrschule + Anzahl Fahrlehrer/Schüler – ich zeige dir eine Demo mit deinem Ablauf.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@ki-partner24.de?subject=SmartDrive%20Demo%20anfragen"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
              >
                E-Mail senden
              </a>
              <a
                href="#faq"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              >
                FAQ lesen
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-600">
              Tipp: Später kannst du hier auch ein Formular + Stripe Checkout einbauen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Brauche ich dafür neue Tools?",
                a: "Nein. Formular + Scheduler + WhatsApp-Versand kann in deinen aktuellen Stack integriert werden.",
              },
              {
                q: "Bekommen Schüler wirklich nur ihre Termine?",
                a: "Ja. Die Logik filtert je Schüler (z. B. über student_id) und verschickt nur die passenden Einträge.",
              },
              {
                q: "Wie lange dauert das Setup?",
                a: "Wenn Datenquellen stehen (Formular/Sheets/WhatsApp), ist der Rest schnell integriert.",
              },
              {
                q: "Kann ich Regeln hinzufügen?",
                a: "Ja, z. B. Blocklängen, Städte, Fahrlehrer-Prioritäten, Schaltung/Automatik, etc.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="font-semibold">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} SmartDrive</p>
          <div className="flex gap-4 text-sm">
            <a className="text-zinc-600 hover:text-zinc-900" href="#">
              Impressum
            </a>
            <a className="text-zinc-600 hover:text-zinc-900" href="#">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
