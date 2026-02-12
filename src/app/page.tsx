import React from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import ROI from "./components/ROI";
import QuickSetup from "./components/QuickSetup";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden">
      <BackgroundLayer />

      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <ROI />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
