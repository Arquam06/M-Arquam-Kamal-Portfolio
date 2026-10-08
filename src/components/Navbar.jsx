import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Youtube, Mail, Command, Lock } from "lucide-react";
import { profileData } from "../data/profile";

export default function Navbar({ onOpenCommandPalette }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "GitHub", href: "#github", id: "github" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "var(--nav-height)",
        zIndex: 50,
        background: scrolled ? "rgba(5, 5, 5, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(250, 204, 21, 0.15)" : "1px solid transparent",
        transition: "all 0.35s ease",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        className="max-width-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px"
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "18px",
            letterSpacing: "0.04em",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span style={{ color: "var(--color-yellow)" }}>//</span>
          <span>M ARQUAM</span>
          <span style={{ color: "var(--color-yellow)", textShadow: "0 0 12px var(--color-yellow-glow)" }}>
            KAMAL
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Desktop Navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: isActive ? "var(--color-yellow)" : "var(--text-secondary)",
                  fontWeight: isActive ? 700 : 500
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Command Palette Trigger & Socials */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="header-socials">
          <button
            onClick={onOpenCommandPalette}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 10px",
              borderRadius: "6px",
              background: "rgba(250, 204, 21, 0.08)",
              border: "1px solid rgba(250, 204, 21, 0.2)",
              color: "var(--color-yellow)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              cursor: "pointer"
            }}
            title="Open Command Palette (Ctrl + K)"
          >
            <Command size={13} />
            <span>Ctrl K</span>
          </button>

          <a href={profileData.urls.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
            <Github size={17} />
          </a>
          <a href={profileData.urls.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
            <Linkedin size={17} />
          </a>
          <a href={profileData.urls.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
            <Youtube size={17} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileOpen}
          style={{
            background: "none",
            border: "1px solid rgba(250, 204, 21, 0.3)",
            color: "var(--color-yellow)",
            borderRadius: "6px",
            padding: "6px",
            cursor: "pointer",
            display: "none"
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className="mobile-drawer"
        style={{
          position: "fixed",
          top: "var(--nav-height)", left: 0, right: 0,
          background: "rgba(5, 5, 8, 0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-yellow-glow)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          transform: mobileOpen ? "translateY(0)" : "translateY(-120%)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: activeSection === link.id ? "var(--color-yellow)" : "var(--text-primary)",
              fontWeight: activeSection === link.id ? 700 : 500,
              padding: "6px 0"
            }}
          >
            <span style={{ color: "var(--color-yellow)", marginRight: "8px" }}>//</span>
            {link.name}
          </a>
        ))}

        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "4px 0" }} />

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href={profileData.urls.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-yellow)" }}>
            <Github size={18} />
          </a>
          <a href={profileData.urls.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-yellow)" }}>
            <Linkedin size={18} />
          </a>
          <a href={profileData.urls.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-yellow)" }}>
            <Youtube size={18} />
          </a>
          <a href={profileData.urls.gmail} style={{ color: "var(--color-yellow)" }}>
            <Mail size={18} />
          </a>
          <a href="/admin" style={{ color: "var(--text-muted)", marginLeft: "auto" }} title="Admin Login">
            <Lock size={18} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .header-socials { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
