import React, { useState } from "react";
import { X, FileText, Download, ExternalLink, GraduationCap, Briefcase, Code, ShieldCheck, Mail, MapPin } from "lucide-react";
import { profileData } from "../data/profile";
import { projectsData } from "../data/projects";
import { certificatesData } from "../data/certificates";
import { experienceData, educationData } from "../data/experience";

export default function DigitalResumeModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Full Resume" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certifications" }
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 1000,
        background: "rgba(5, 5, 8, 0.92)",
        backdropFilter: "blur(18px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "780px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px",
          position: "relative",
          border: "1px solid var(--color-yellow)",
          boxShadow: "0 0 50px var(--color-yellow-glow)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px", right: "20px",
            background: "none", border: "none",
            color: "var(--text-muted)", cursor: "pointer"
          }}
        >
          <X size={22} />
        </button>

        {/* Header Block */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "24px", marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-yellow)" }}>
                // DIGITAL RESUME
              </span>
              <h2 style={{ fontSize: "28px", color: "#FFFFFF", marginTop: "4px" }}>
                {profileData.fullName}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--color-yellow)", fontWeight: 600 }}>
                {profileData.title}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px", fontSize: "12.5px", color: "var(--text-muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={13} className="yellow-text" /> {profileData.location}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Mail size={13} className="yellow-text" /> {profileData.emails.gmail}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="/resume/M_Arquam_Kamal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow"
                style={{ fontSize: "11.5px", padding: "8px 14px" }}
              >
                <span>View PDF</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="/resume/M_Arquam_Kamal_Resume.pdf"
                download
                className="btn-glass"
                style={{ fontSize: "11.5px", padding: "8px 14px" }}
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Nav Filter Tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11.5px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: activeTab === tab.id ? "1px solid var(--color-yellow)" : "1px solid rgba(255,255,255,0.08)",
                  background: activeTab === tab.id ? "rgba(250, 204, 21, 0.12)" : "transparent",
                  color: activeTab === tab.id ? "var(--color-yellow)" : "var(--text-muted)",
                  cursor: "pointer"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          
          {/* Experience Section */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <Briefcase size={18} className="yellow-text" />
                <h3 style={{ fontSize: "18px", color: "#FFFFFF" }}>Work Experience</h3>
              </div>

              {experienceData.map(exp => (
                <div key={exp.id} style={{ padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", borderLeft: "3px solid var(--color-yellow)", marginBottom: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    <h4 style={{ color: "#FFFFFF", fontSize: "15px" }}>{exp.role} — <span className="yellow-text">{exp.company}</span></h4>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>{exp.period}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "6px" }}>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {(activeTab === "all" || activeTab === "education") && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <GraduationCap size={18} className="yellow-text" />
                <h3 style={{ fontSize: "18px", color: "#FFFFFF" }}>Education</h3>
              </div>

              {educationData.map(edu => (
                <div key={edu.id} style={{ padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", borderLeft: "3px solid var(--color-yellow)", marginBottom: "12px" }}>
                  <h4 style={{ color: "#FFFFFF", fontSize: "15px" }}>{edu.degree}</h4>
                  <p style={{ fontSize: "13px", color: "var(--color-yellow)" }}>{edu.institution}</p>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Projects Section */}
          {(activeTab === "all" || activeTab === "projects") && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <Code size={18} className="yellow-text" />
                <h3 style={{ fontSize: "18px", color: "#FFFFFF" }}>Key Software Projects</h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {projectsData.map(p => (
                  <div key={p.id} style={{ padding: "14px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <h4 style={{ color: "#FFFFFF", fontSize: "14px" }}>{p.title}</h4>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px", lineHeight: "1.4" }}>{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {(activeTab === "all" || activeTab === "certificates") && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <ShieldCheck size={18} className="yellow-text" />
                <h3 style={{ fontSize: "18px", color: "#FFFFFF" }}>Verified Certifications ({certificatesData.length})</h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px" }}>
                {certificatesData.map(c => (
                  <div key={c.id} style={{ padding: "10px", background: "rgba(255,255,255,0.02)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize: "12.5px", color: "#FFFFFF", display: "block", fontWeight: 600 }}>{c.title}</span>
                    <span style={{ fontSize: "11px", color: "var(--color-yellow)" }}>{c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
