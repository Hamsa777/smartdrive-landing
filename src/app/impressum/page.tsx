// src/app/impressum/page.tsx
import Impressum from "../components/Impressum";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Impressum | SmartDrive",
  description: "Impressum von SmartDrive.",
};

export default function ImpressumPage() {
  return (
    <main className="relative">
      <Header />
      <Impressum />
      <Footer />
    </main>
  );
}
