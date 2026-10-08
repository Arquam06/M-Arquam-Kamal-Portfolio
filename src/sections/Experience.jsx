import React from "react";
import { Briefcase, Calendar, Building, ExternalLink, ShieldCheck } from "lucide-react";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 03 WORK HISTORY</span>
        <h2 className="section-title">Practical Experience</h2>

        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel glow-card"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                borderLeft: "3px solid var(--color-yellow)"
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <Briefcase size={20} className="yellow-text" />
                    <h3 style={{ fontSize: "20px", color: "#FFFFFF" }}>{exp.role}</h3>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Building size={14} style={{ color: "var(--text-muted)" }} />
                    <span style={{ color: "var(--color-yellow)", fontWeight: 600, fontSize: "14px" }}>
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    background: "rgba(250, 204, 21, 0.08)",
                    border: "1px solid rgba(250, 204, 21, 0.2)",
                    padding: "4px 12px",
                    borderRadius: "20px"
                  }}
                >
                  <Calendar size={13} style={{ color: "var(--color-yellow)" }} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "var(--text-secondary)", fontSize: "14.5px", lineHeight: "1.7" }}>
                {exp.description}
              </p>

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13.5px", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--color-yellow)", fontFamily: "var(--font-mono)", marginTop: "2px" }}>▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Connected Internship Documents */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)"
                }}
              >
                <a
                  href="/certificates/cognifyz-frontend-internship.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                  style={{ fontSize: "12px", padding: "8px 16px" }}
                >
                  <ShieldCheck size={14} className="yellow-text" />
                  <span>View Internship Certificate</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
