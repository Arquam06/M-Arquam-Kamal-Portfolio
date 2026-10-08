import React, { useState } from "react";
import { Github, Linkedin, Youtube, Mail, MessageSquare, MapPin, Sparkles, Lock } from "lucide-react";
import { profileData } from "../data/profile";
import PortfolioBuilder from "./PortfolioBuilder";

export default function Footer() {
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <footer
      style={{
        background: "rgba(3, 3, 5, 0.95)",
        borderTop: "1px solid rgba(250, 204, 21, 0.15)",
        padding: "60px 24px 36px",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="max-width-container">
        {/* Create Your Own Portfolio Banner CTA */}
        <div
          className="glass-panel"
          style={{
            padding: "32px",
            marginBottom: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            border: "1px solid rgba(250, 204, 21, 0.3)",
            boxShadow: "0 0 30px rgba(250, 204, 21, 0.08)"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <Sparkles size={18} className="yellow-text" />
              <h3 style={{ fontSize: "19px", color: "#FFFFFF" }}>
                Want a Portfolio Like This?
              </h3>
            </div>
            <p style={{ fontSize: "13.5px", color: "var(--text-secondary)" }}>
              Customize your developer identity parameters and build your own data-driven portfolio.
            </p>
          </div>

          <button
            onClick={() => setShowBuilder(true)}
            className="btn-yellow"
            style={{ fontSize: "12.5px" }}
          >
            <span>Create Your Own Portfolio</span>
          </button>
        </div>

        {/* Main Footer Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px"
          }}
          className="footer-grid"
        >
          {/* Identity Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "20px", color: "#FFFFFF", fontFamily: "var(--font-heading)" }}>
              M ARQUAM <span className="yellow-text">KAMAL</span>
            </h4>
            <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {profileData.title}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
              <MapPin size={16} className="yellow-text" />
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Contact Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h5 style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-yellow)", textTransform: "uppercase" }}>
              // CONTACT DETAILS
            </h5>
            <a href={profileData.urls.gmail} style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              {profileData.emails.gmail}
            </a>
            <a href={profileData.urls.outlook} style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              {profileData.emails.outlook}
            </a>
            <a href={profileData.urls.calling} style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              {profileData.contacts.calling}
            </a>
          </div>

          {/* Social Links Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h5 style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-yellow)", textTransform: "uppercase" }}>
              // SOCIAL NETWORK
            </h5>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href={profileData.urls.github} target="_blank" rel="noopener noreferrer" className="social-rail-item" title="GitHub">
                <Github size={16} />
              </a>
              <a href={profileData.urls.linkedin} target="_blank" rel="noopener noreferrer" className="social-rail-item" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={profileData.urls.youtube} target="_blank" rel="noopener noreferrer" className="social-rail-item" title="YouTube">
                <Youtube size={16} />
              </a>
              <a href={profileData.urls.whatsapp} target="_blank" rel="noopener noreferrer" className="social-rail-item" title="WhatsApp">
                <MessageSquare size={16} />
              </a>
              <a href={profileData.urls.gmail} className="social-rail-item" title="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "24px 0" }} />

        {/* Bottom Bar & Discrete Admin Access */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            © 2026 M Arquam Kamal. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              Built with React &amp; Vite • Black + Yellow Theme
            </span>
            <a
              href="/admin"
              style={{ color: "var(--text-muted)", display: "flex", alignItems: "center" }}
              title="Admin Portal Access"
            >
              <Lock size={14} />
            </a>
          </div>
        </div>
      </div>

      {showBuilder && <PortfolioBuilder onClose={() => setShowBuilder(false)} />}

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
