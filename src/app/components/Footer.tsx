// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/45 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} SmartDrive · Automatisierte Terminplanung für Fahrschulen
        </div>
        <div className="flex items-center gap-5 text-xs text-slate-400">
          <a href="https://ki-partner24.de/datenschutz"  target="_blank"
          rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">Datenschutz</a>
          <a href="https://ki-partner24.de/impressum"  target="_blank"
          rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">Impressum</a>
        </div>
      </div>
    </footer>
  );
}
