import React, { useState, useEffect } from "react";

export default function SystemLoader({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 650);
    const t3 = setTimeout(() => onComplete(), 950);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 10000,
        background: "#050505",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        color: "var(--color-yellow)",
        gap: "16px"
      }}
    >
      <div style={{ fontSize: "14px", letterSpacing: "0.15em", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ animation: "pulse 0.6s infinite alternate" }}>//</span>
        <span>SYSTEM.INIT()</span>
      </div>

      <div style={{ width: "220px", height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            background: "var(--color-yellow)",
            boxShadow: "0 0 12px var(--color-yellow)",
            width: step === 0 ? "30%" : step === 1 ? "75%" : "100%",
            transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />
      </div>

      <div style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
        {step === 0 && "INITIALIZING WORKSTATION ARCHITECTURE..."}
        {step === 1 && "LOADING PORTFOLIO DATA SCHEMAS..."}
        {step === 2 && "ACCESS GRANTED. RENDERING VIEW..."}
      </div>
    </div>
  );
}
