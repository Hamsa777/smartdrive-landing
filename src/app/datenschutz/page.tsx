// src/app/datenschutz/page.tsx
import Datenschutz from "../components/Datenschutz";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Datenschutz | SmartDrive",
  description: "Datenschutzerklärung von SmartDrive (KI-Partner24).",
};

export default function DatenschutzPage() {
  return (
    <main className="relative">
         <Header />
      <Datenschutz />
       <Footer />
    </main>
    
  );
}
