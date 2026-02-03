import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartDrive",
  description:
    "SmartDrive sammelt Verfügbarkeiten, erstellt den optimalen Wochenplan (Schüler, Fahrlehrer, Standort, Schaltung/Automatik) und versendet Termine automatisch per WhatsApp.",
  icons: {
    icon: [{ url: "/favicon-v2.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon-v2.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
