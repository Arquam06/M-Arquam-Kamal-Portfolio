import React from "react";
import { User, GraduationCap, MapPin, Mail, Phone, Code, Cpu } from "lucide-react";
import { profileData } from "../data/profile";

export default function About() {
  const details = [
    { icon: <User size={18} />, label: "Full Name", value: profileData.fullName },
    { icon: <GraduationCap size={18} />, label: "Education", value: `${profileData.degree}, ${profileData.university}` },
    { icon: <MapPin size={18} />, label: "Location", value: profileData.location },
    { icon: <Mail size={18} />, label: "Primary Email", value: profileData.emails.gmail },
    { icon: <Phone size={18} />, label: "Phone / WhatsApp", value: profileData.contacts.whatsapp }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 01 IDENTITY</span>
        <h2 className="section-title">About Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center"
          }}
          className="about-grid"
        >
          {/* Text Content & Credentials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontSize: "24px", color: "#FFFFFF", lineHeight: "1.3" }}>
              Full Stack Web Developer &amp; <br />
              <span className="yellow-text">Computer Science Student</span>
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
              {profileData.introduction}
            </p>

            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7" }}>
              I focus on building intuitive web applications using modern JavaScript frameworks, responsive CSS architectures, and scalable RESTful APIs. I am passionate about software engineering principles, algorithm design, clean code practices, and security-aware web development.
            </p>

            {/* Quick Details Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
                marginTop: "8px"
              }}
            >
              {details.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px"
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(250, 204, 21, 0.1)",
                      border: "1px solid rgba(250, 204, 21, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-yellow)",
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      {item.label}
                    </span>
                    <p style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--text-primary)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3D Visual Panel */}
          <div style={{ position: "relative" }}>
            <div
              className="glass-panel glow-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                border: "1px solid rgba(250, 204, 21, 0.2)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Cpu size={24} className="yellow-text" />
                <h4 style={{ fontSize: "18px", color: "#FFFFFF" }}>Engineering Focus</h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ padding: "14px", borderRadius: "8px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-yellow)" }}>// CORE COMPETENCIES</span>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                    Full Stack Web Architecture, Responsive Frontend Engineering, RESTful APIs, Database Schemas, Version Control Workflows.
                  </p>
                </div>

                <div style={{ padding: "14px", borderRadius: "8px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-yellow)" }}>// ACADEMIC FOUNDATION</span>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                    B.Tech CSE at Adamas University. Strong foundation in Data Structures (DSA), DBMS, OOP, Operating Systems, and Computer Networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
