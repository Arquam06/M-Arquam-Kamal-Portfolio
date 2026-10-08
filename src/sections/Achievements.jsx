import React from "react";
import { Award, Trophy, Star, Sparkles } from "lucide-react";

export default function Achievements() {
  const achievementsList = [
    {
      id: "odoo-hackathon-26",
      title: "Odoo × Adamas University Hackathon 26",
      role: "Hackathon Participant",
      date: "2026",
      description: "Designed and developed Odoo HRMS Adamas, digitizing HR onboarding and employee management modules on the Odoo ERP framework.",
      badge: "Hackathon 26"
    },
    {
      id: "india-ai-impact",
      title: "India AI Impact Buildathon 2026",
      role: "Buildathon Participant",
      date: "February 16, 2026",
      description: "Participated in the India AI Impact Buildathon organized by HCL GUVI, tackling national AI challenges alongside 40,000+ developers across India.",
      badge: "National Level"
    },
    {
      id: "solution-challenge-2026",
      title: "Solution Challenge 2026: Build with AI",
      role: "Challenge Participant",
      date: "2026",
      description: "Engaged in Google's Solution Challenge 2026, building AI-enabled software prototypes to solve local community challenges.",
      badge: "Google Challenge"
    },
    {
      id: "adamas-poster-2025",
      title: "Adamas University Poster Competition 2025",
      role: "Certificate of Appreciation",
      date: "2025",
      description: "Awarded Certificate of Appreciation by Adamas University & Computer Society of India (CSI) for poster design and technical presentation.",
      badge: "CSI Appreciation"
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 05 MILESTONES &amp; RECOGNITION</span>
        <h2 className="section-title">Achievements &amp; Hackathons</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "24px"
          }}
        >
          {achievementsList.map((ach) => (
            <div
              key={ach.id}
              className="glass-panel glow-card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Trophy size={22} className="yellow-text" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10.5px",
                      color: "var(--color-yellow)",
                      textTransform: "uppercase",
                      background: "rgba(250, 204, 21, 0.08)",
                      border: "1px solid rgba(250, 204, 21, 0.2)",
                      padding: "2px 8px",
                      borderRadius: "4px"
                    }}
                  >
                    {ach.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "17px", color: "#FFFFFF", lineHeight: "1.4" }}>
                  {ach.title}
                </h3>

                <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  {ach.role} • {ach.date}
                </span>

                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
