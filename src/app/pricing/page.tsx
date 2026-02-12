import React from "react";
import BackgroundLayer from "../components/BackgroundLayer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import ROI from "../components/ROI";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden">
      <BackgroundLayer />
      <Header />
      <main>
        <Pricing />
        <ROI />
      </main>
      <Footer />
    </div>
  );
}
