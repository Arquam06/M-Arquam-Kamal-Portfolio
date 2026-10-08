import React from "react";
import { ArrowDownRight, FileText, Download, Code2, Terminal, Shield, Award, Sparkles } from "lucide-react";
import { profileData } from "../data/profile";
import { projectsData } from "../data/projects";
import { certificatesData } from "../data/certificates";

export default function Hero({ onOpenDigitalResume }) {
  const stats = [
    { label: "Projects Built", value: `${projectsData.length}+`, icon: <Code2 size={16} /> },
    { label: "Certifications", value: `${certificatesData.length}+`, icon: <Award size={16} /> },
    { label: "Internship", value: "1", icon: <Terminal size={16} /> },
    { label: "Hackathons", value: "3+", icon: <Shield size={16} /> }
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "calc(var(--nav-height) + 40px)",
        paddingBottom: "80px",
        position: "relative",
        zIndex: 2
      }}
    >
      <div className="max-width-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "54px",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Hero Content */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            
            {/* Intro Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "20px",
                background: "rgba(250, 204, 21, 0.08)",
                border: "1px solid rgba(250, 204, 21, 0.25)",
                marginBottom: "20px"
              }}
            >
              <Sparkles size={14} className="yellow-text" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--color-yellow)",
                  letterSpacing: "0.08em"
                }}
              >
                HELLO, I'M
              </span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: "clamp(42px, 5.5vw, 68px)",
                lineHeight: "1.05",
                marginBottom: "16px",
                fontFamily: "var(--font-heading)"
              }}
            >
              M ARQUAM <br />
              <span className="yellow-glow-text">KAMAL</span>
            </h1>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "20px",
                fontFamily: "var(--font-heading)"
              }}
            >
              {profileData.title}
            </h2>

            {/* Short Bio Description */}
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-muted)",
                lineHeight: "1.7",
                maxWidth: "540px",
                marginBottom: "36px"
              }}
            >
              {profileData.positioning}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "54px"
              }}
            >
              <a href="#projects" className="btn-yellow">
                <span>Explore My Work</span>
                <ArrowDownRight size={16} />
              </a>

              <button
                onClick={onOpenDigitalResume}
                className="btn-glass"
              >
                <FileText size={16} />
                <span>View Digital Resume</span>
              </button>

              <a
                href="/resume/M_Arquam_Kamal_Resume.pdf"
                download="M_Arquam_Kamal_Resume.pdf"
                className="btn-glass"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Truthful Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "16px",
                width: "100%",
                maxWidth: "540px"
              }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "6px"
                  }}
                >
                  <div style={{ color: "var(--color-yellow)" }}>{stat.icon}</div>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "#FFFFFF"
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10.5px",
                      color: "var(--text-muted)",
                      textTransform: "uppercase"
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Abstract 3D Technology Visual Panel */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(250, 204, 21, 0.18) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none"
              }}
            />

            <div
              className="glass-panel glow-card"
              style={{
                width: "100%",
                maxWidth: "440px",
                padding: "28px",
                position: "relative",
                zIndex: 2,
                transform: "perspective(1000px) rotateY(-6deg) rotateX(4deg)",
                border: "1px solid rgba(250, 204, 21, 0.25)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "20px"
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981" }} />
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
                  developer_workstation.v3.js
                </span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12.5px",
                  lineHeight: "1.8",
                  color: "var(--text-secondary)"
                }}
              >
                <p><span style={{ color: "#F43F5E" }}>const</span> <span style={{ color: "var(--color-yellow)" }}>developer</span> = &#123;</p>
                <p style={{ paddingLeft: "16px" }}>name: <span style={{ color: "#10B981" }}>"M Arquam Kamal"</span>,</p>
                <p style={{ paddingLeft: "16px" }}>role: <span style={{ color: "#10B981" }}>"Full Stack Web Developer"</span>,</p>
                <p style={{ paddingLeft: "16px" }}>university: <span style={{ color: "#10B981" }}>"Adamas University"</span>,</p>
                <p style={{ paddingLeft: "16px" }}>location: <span style={{ color: "#10B981" }}>"Kolkata, India"</span>,</p>
                <p style={{ paddingLeft: "16px" }}>skills: [<span style={{ color: "var(--color-yellow)" }}>"React"</span>, <span style={{ color: "var(--color-yellow)" }}>"Node.js"</span>, <span style={{ color: "var(--color-yellow)" }}>"Python"</span>, <span style={{ color: "var(--color-yellow)" }}>"MongoDB"</span>],</p>
                <p style={{ paddingLeft: "16px" }}>status: <span style={{ color: "#3B82F6" }}>"Available for Opportunities"</span></p>
                <p>&#125;;</p>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  background: "rgba(250, 204, 21, 0.08)",
                  border: "1px solid rgba(250, 204, 21, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: "var(--color-yellow)", boxShadow: "0 0 10px var(--color-yellow)"
                    }}
                  />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-yellow)" }}>
                    SYSTEM ONLINE
                  </span>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
                  KOLKATA, IN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
