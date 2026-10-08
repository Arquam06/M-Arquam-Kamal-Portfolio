import React, { useState } from "react";
import { X, Sparkles, Download, CheckCircle, Code, Layers } from "lucide-react";

export default function PortfolioBuilder({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "Full Stack Developer",
    location: "Kolkata, India",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    theme: "Black + Yellow"
  });

  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerated(true);
  };

  const handleDownloadConfig = () => {
    const configData = JSON.stringify(formData, null, 2);
    const blob = new Blob([configData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.name ? formData.name.toLowerCase().replace(/\s+/g, "-") : "my"}-portfolio-config.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 100,
        background: "rgba(5, 5, 8, 0.92)",
        backdropFilter: "blur(16px)",
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
          maxWidth: "640px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px",
          position: "relative",
          border: "1px solid var(--color-yellow)",
          boxShadow: "0 0 50px var(--color-yellow-glow)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
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

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <Sparkles size={24} className="yellow-text" />
          <h3 style={{ fontSize: "22px", color: "#FFFFFF" }}>
            Create Your Own <span className="yellow-text">Portfolio</span>
          </h3>
        </div>

        <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
          Customize your developer identity parameters below to generate your custom data-driven portfolio schema file.
        </p>

        {!generated ? (
          <form onSubmit={handleGenerate} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "6px",
                    background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#FFF", fontSize: "13.5px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>
                  PROFESSIONAL TITLE
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Frontend Developer"
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "6px",
                    background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#FFF", fontSize: "13.5px"
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "6px",
                    background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#FFF", fontSize: "13.5px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>
                  LOCATION
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Kolkata, India"
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "6px",
                    background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#FFF", fontSize: "13.5px"
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>
                COLOR THEME SYSTEM
              </label>
              <select
                value={formData.theme}
                onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                style={{
                  width: "100%", padding: "10px 12px", borderRadius: "6px",
                  background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#FFF", fontSize: "13.5px"
                }}
              >
                <option value="Black + Yellow">Black + Golden Yellow (Default)</option>
                <option value="Cyber Cyan">Cyber Cyan + Dark Blue</option>
                <option value="Neon Purple">Neon Purple + Midnight</option>
                <option value="Deep Emerald">Deep Emerald + Obsidian</option>
              </select>
            </div>

            <button type="submit" className="btn-yellow" style={{ marginTop: "12px", justifyContent: "center" }}>
              <Layers size={16} />
              <span>Generate My Portfolio Schema</span>
            </button>
          </form>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                padding: "16px", borderRadius: "8px",
                background: "rgba(250, 204, 21, 0.08)",
                border: "1px solid rgba(250, 204, 21, 0.25)",
                display: "flex", alignItems: "center", gap: "12px",
                color: "var(--color-yellow)"
              }}
            >
              <CheckCircle size={22} />
              <div>
                <span style={{ fontWeight: 700, fontSize: "15px" }}>Portfolio Schema Ready!</span>
                <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", marginTop: "2px" }}>
                  Your configuration for <strong>{formData.name}</strong> ({formData.theme}) has been generated.
                </p>
              </div>
            </div>

            <div style={{ padding: "14px", background: "rgba(0,0,0,0.5)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-secondary)", maxHeight: "180px", overflowY: "auto" }}>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={handleDownloadConfig} className="btn-yellow" style={{ flex: 1, justifyContent: "center" }}>
                <Download size={14} />
                <span>Download config.json</span>
              </button>
              <button onClick={() => setGenerated(false)} className="btn-glass" style={{ flex: 1, justifyContent: "center" }}>
                <span>Edit Parameters</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
