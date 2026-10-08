import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, Github, Linkedin, Youtube, CheckCircle2 } from "lucide-react";
import { profileData } from "../data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${profileData.emails.gmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setStatus("Your message draft has been opened in your default email client!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      title: "Primary Gmail",
      value: profileData.emails.gmail,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.emails.gmail}&su=${encodeURIComponent("Portfolio Contact — M Arquam Kamal")}`,
      icon: <Mail size={20} />,
      btnText: "Send Gmail"
    },
    {
      title: "University Outlook",
      value: profileData.emails.outlook,
      href: profileData.urls.outlook,
      icon: <Mail size={20} />,
      btnText: "Send Outlook"
    },
    {
      title: "WhatsApp Direct",
      value: profileData.contacts.whatsapp,
      href: profileData.urls.whatsapp,
      icon: <MessageSquare size={20} />,
      btnText: "Open WhatsApp"
    },
    {
      title: "Direct Phone Call",
      value: profileData.contacts.calling,
      href: profileData.urls.calling,
      icon: <Phone size={20} />,
      btnText: "Call Now"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 08 GET IN TOUCH</span>
        <h2 className="section-title">Contact &amp; Connect</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start"
          }}
          className="contact-grid"
        >
          {/* Quick Contact Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontSize: "24px", color: "#FFFFFF" }}>
              Let's build something <span className="yellow-text">great together</span>
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
              Whether you have a project inquiry, internship opportunity, technical collaboration, or simply want to connect, feel free to reach out directly through any channel.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {contactMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="glass-panel glow-card"
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ color: "var(--color-yellow)" }}>{method.icon}</div>
                    <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                      {method.title}
                    </span>
                  </div>

                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", wordBreak: "break-all" }}>
                    {method.value}
                  </span>

                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{ fontSize: "11px", padding: "6px 12px", justifyContent: "center" }}
                  >
                    <span>{method.btnText}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Location & Social Icons Bar */}
            <div
              className="glass-panel"
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={18} className="yellow-text" />
                <span style={{ fontSize: "13.5px", color: "var(--text-primary)", fontWeight: 500 }}>
                  {profileData.location}
                </span>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <a href={profileData.urls.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
                  <Github size={18} />
                </a>
                <a href={profileData.urls.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
                  <Linkedin size={18} />
                </a>
                <a href={profileData.urls.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-panel glow-card"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              border: "1px solid rgba(250, 204, 21, 0.2)"
            }}
          >
            <h3 style={{ fontSize: "20px", color: "#FFFFFF" }}>Send a Message</h3>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--text-muted)", marginBottom: "6px" }}>
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Smith"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "rgba(5, 5, 8, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px"
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--text-muted)", marginBottom: "6px" }}>
                YOUR EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "rgba(5, 5, 8, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px"
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--text-muted)", marginBottom: "6px" }}>
                SUBJECT
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Job Opportunity"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "rgba(5, 5, 8, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px"
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--text-muted)", marginBottom: "6px" }}>
                MESSAGE *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello M Arquam Kamal, I would like to discuss..."
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "rgba(5, 5, 8, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  resize: "vertical"
                }}
              />
            </div>

            <button type="submit" className="btn-yellow" style={{ width: "100%", justifyContent: "center" }}>
              <span>Send Message</span>
              <Send size={14} />
            </button>

            {status && (
              <div
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  background: "rgba(250, 204, 21, 0.08)",
                  border: "1px solid rgba(250, 204, 21, 0.25)",
                  color: "var(--color-yellow)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <CheckCircle2 size={16} />
                <span>{status}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
