import React, { useEffect } from "react";
import { X, ExternalLink, ShieldCheck, Linkedin, Download } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(5, 5, 8, 0.92)",
        backdropFilter: "blur(16px)"
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          padding: "32px",
          border: "1px solid var(--color-yellow)",
          boxShadow: "0 0 50px var(--color-yellow-glow)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: "4px"
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-yellow)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldCheck size={26} className="yellow-text" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-yellow)",
                textTransform: "uppercase",
                background: "rgba(250, 204, 21, 0.1)",
                border: "1px solid rgba(250, 204, 21, 0.25)",
                padding: "2px 8px",
                borderRadius: "4px"
              }}
            >
              {certificate.category}
            </span>
          </div>

          <div>
            <h3 style={{ fontSize: "21px", color: "#FFFFFF", lineHeight: "1.3" }}>
              {certificate.title}
            </h3>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-yellow)" }}>
                {certificate.issuer}
              </span>
              {certificate.date && (
                <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  Issued: {certificate.date}
                </span>
              )}
            </div>
          </div>

          {/* Certificate Image Preview */}
          <div
            style={{
              width: "100%",
              maxHeight: "340px",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              marginTop: "4px"
            }}
          >
            <img
              src={certificate.file}
              alt={certificate.title}
              style={{
                maxWidth: "100%",
                maxHeight: "320px",
                objectFit: "contain",
                borderRadius: "6px"
              }}
            />
          </div>

          <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            {certificate.description}
          </p>

          {/* Actions */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <span>View Full Document</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={certificate.file}
              download
              className="btn-glass"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <Download size={14} />
              <span>Download Image</span>
            </a>

            {certificate.linkedinUrl && (
              <a
                href={certificate.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Linkedin size={14} className="yellow-text" />
                <span>View LinkedIn Post</span>
              </a>
            )}

            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                style={{ flex: 1, justifyContent: "center" }}
              >
                <span>Verify Credential</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
