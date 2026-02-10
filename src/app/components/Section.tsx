import React from "react";
import { styles } from "../lib/styles";

export default function Section({
  children,
  tone = "light",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
  id?: string;
}) {
  const base =
    tone === "dark"
      ? "bg-[#0F172A] text-white"
      : "bg-[#F9FAFB] text-slate-950";

  return (
    <section id={id} className={`${base} ${styles.sectionY} ${className}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
