import React, { useState, useEffect } from "react";
import { Search, Command, ArrowRight, X, User, Code, Briefcase, Award, Shield, FileText, Lock, Mail } from "lucide-react";

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    { name: "Go to Home", section: "#home", icon: <Command size={16} /> },
    { name: "About M Arquam Kamal", section: "#about", icon: <User size={16} /> },
    { name: "Technical Skills", section: "#skills", icon: <Code size={16} /> },
    { name: "Work Experience", section: "#experience", icon: <Briefcase size={16} /> },
    { name: "Featured Projects", section: "#projects", icon: <Code size={16} /> },
    { name: "GitHub Repositories", section: "#github", icon: <Code size={16} /> },
    { name: "Achievements & Hackathons", section: "#achievements", icon: <Award size={16} /> },
    { name: "Certifications", section: "#certificates", icon: <Shield size={16} /> },
    { name: "Academic Education", section: "#education", icon: <User size={16} /> },
    { name: "Open Interactive Digital Resume", action: "resume", icon: <FileText size={16} /> },
    { name: "Contact & Socials", section: "#contact", icon: <Mail size={16} /> },
    { name: "Private Admin CMS Login", href: "/admin", icon: <Lock size={16} /> }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd) => {
    onClose();
    if (cmd.action === "resume") {
      onOpenResume();
    } else if (cmd.href) {
      window.location.href = cmd.href;
    } else if (cmd.section) {
      const el = document.querySelector(cmd.section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 1000,
        background: "rgba(5, 5, 8, 0.88)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "12vh",
        paddingLeft: "16px",
        paddingRight: "16px"
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "560px",
          overflow: "hidden",
          border: "1px solid var(--color-yellow)",
          boxShadow: "0 0 40px var(--color-yellow-glow)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <Search size={18} className="yellow-text" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or section name..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "#FFFFFF",
              fontFamily: "var(--font-mono)",
              fontSize: "14px"
            }}
          />
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Command List */}
        <div style={{ maxHeight: "320px", overflowY: "auto", padding: "8px" }}>
          {filteredCommands.length === 0 ? (
            <p style={{ padding: "16px", textAlignment: "center", fontSize: "13px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              No matching commands found.
            </p>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(cmd)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(250, 204, 21, 0.1)";
                  e.currentTarget.style.color = "var(--color-yellow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ color: "var(--color-yellow)" }}>{cmd.icon}</div>
                  <span style={{ fontSize: "13.5px", fontFamily: "var(--font-mono)" }}>
                    {cmd.name}
                  </span>
                </div>
                <ArrowRight size={14} style={{ opacity: 0.6 }} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
