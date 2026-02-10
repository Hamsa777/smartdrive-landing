// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import BackgroundLayer from "./components/BackgroundLayer";

export const metadata: Metadata = {
  title: "SmartDrive",
  description:
    "SmartDrive sammelt Verfügbarkeiten, erstellt den optimalen Wochenplan (Schüler, Fahrlehrer, Standort, Schaltung/Automatik) und versendet Termine automatisch per WhatsApp.",
 icons: {
  icon: [
    { url: "/favicon-v2.svg", type: "image/svg+xml" },
    { url: "/favicon.ico", type: "image/x-icon" },
  ],
  shortcut: "/favicon.ico",
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased min-h-screen overflow-x-hidden">
        <BackgroundLayer />
        {children}
      </body>
    </html>
  );
}
