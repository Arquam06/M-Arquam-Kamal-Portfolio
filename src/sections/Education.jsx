import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { educationData } from "../data/experience";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 07 ACADEMICS</span>
        <h2 className="section-title">Education</h2>

        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel glow-card"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                borderLeft: "3px solid var(--color-yellow)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "rgba(250, 204, 21, 0.1)",
                    border: "1px solid rgba(250, 204, 21, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-yellow)",
                    flexShrink: 0
                  }}
                >
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h3 style={{ fontSize: "21px", color: "#FFFFFF", lineHeight: "1.3" }}>
                    {edu.degree}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
                    <span style={{ color: "var(--color-yellow)", fontSize: "14px", fontWeight: 600 }}>
                      {edu.institution}
                    </span>
                    <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>•</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "14.5px", lineHeight: "1.7" }}>
                {edu.description}
              </p>

              {/* Coursework */}
              {edu.coursework && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <BookOpen size={16} className="yellow-text" />
                    <span style={{ fontWeight: 600, fontSize: "14px", color: "#FFFFFF" }}>
                      Relevant Computer Science Coursework
                    </span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "10px"
                    }}
                  >
                    {edu.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "13px",
                          color: "var(--text-secondary)"
                        }}
                      >
                        <span style={{ color: "var(--color-yellow)", fontFamily: "var(--font-mono)" }}>▸</span>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
