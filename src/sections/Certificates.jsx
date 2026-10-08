import React, { useState } from "react";
import { ExternalLink, Award, Linkedin, Eye } from "lucide-react";
import { certificatesData, certificateCategories } from "../data/certificates";
import CertificateModal from "../components/CertificateModal";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = activeCategory === "All"
    ? certificatesData
    : certificatesData.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 06 VERIFIED CREDENTIALS</span>
        <h2 className="section-title">Certifications</h2>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px"
          }}
        >
          {certificateCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: isActive ? "1px solid var(--color-yellow)" : "1px solid rgba(255,255,255,0.08)",
                  background: isActive ? "rgba(250, 204, 21, 0.12)" : "rgba(18, 18, 24, 0.5)",
                  color: isActive ? "var(--color-yellow)" : "var(--text-secondary)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glow-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "space-between",
                cursor: "pointer"
              }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Thumbnail Preview */}
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#000000",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    position: "relative"
                  }}
                >
                  <img
                    src={cert.file}
                    alt={cert.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: "4px"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(5, 5, 8, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <span
                      className="btn-yellow"
                      style={{ padding: "6px 12px", fontSize: "11px" }}
                    >
                      <Eye size={12} />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                {/* Badge & Details */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--color-yellow)",
                      textTransform: "uppercase",
                      background: "rgba(250, 204, 21, 0.08)",
                      border: "1px solid rgba(250, 204, 21, 0.2)",
                      padding: "2px 8px",
                      borderRadius: "4px"
                    }}
                  >
                    {cert.category}
                  </span>
                  {cert.date && (
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                      {cert.date}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: "16px", color: "#FFFFFF", lineHeight: "1.4" }}>
                  {cert.title}
                </h3>

                <p style={{ fontSize: "13px", color: "var(--color-yellow)", fontWeight: 500 }}>
                  {cert.issuer}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                <button
                  className="btn-yellow"
                  style={{ width: "100%", justifyContent: "center", fontSize: "11.5px", padding: "8px 16px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(cert);
                  }}
                >
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink size={12} />
                </button>

                {cert.linkedinUrl && (
                  <a
                    href={cert.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{ width: "100%", justifyContent: "center", fontSize: "11.5px", padding: "6px 12px" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={12} className="yellow-text" />
                    <span>View LinkedIn Post</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
