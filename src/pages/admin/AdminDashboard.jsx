import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, User, FileText, ShieldCheck, Code, Briefcase, 
  Layers, Award, GraduationCap, LogOut, ExternalLink, Plus, Trash2, Edit3, Save, CheckCircle
} from "lucide-react";
import { portfolioService } from "../../services/portfolioService";

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [experience, setExperience] = useState([]);
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(true);

  // New item draft states
  const [newProject, setNewProject] = useState({ title: "", description: "", category: "Full Stack", technologies: "React, Node.js", githubUrl: "", liveUrl: "" });
  const [newCert, setNewCert] = useState({ title: "", issuer: "", category: "AI/ML", date: "2026", description: "", file: "", linkedinUrl: "" });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const profData = await portfolioService.getProfile();
      const projData = await portfolioService.getProjects();
      const certData = await portfolioService.getCertificates();
      const expData = await portfolioService.getExperience();

      setProfile(profData);
      setProjects(projData);
      setCertificates(certData);
      setExperience(expData);
    } catch (err) {
      console.error("Error loading CMS data:", err);
    } finally {
      setLoading(false);
    }
  };

  const showStatus = (msg) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(""), 3500);
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();
    await portfolioService.updateProfile(profile);
    showStatus("Profile information updated successfully!");
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const projectObj = {
      ...newProject,
      id: `proj-${Date.now()}`,
      technologies: typeof newProject.technologies === "string" ? newProject.technologies.split(",").map(s => s.trim()) : newProject.technologies
    };
    await portfolioService.saveProject(projectObj);
    setProjects([projectObj, ...projects]);
    setNewProject({ title: "", description: "", category: "Full Stack", technologies: "React, Node.js", githubUrl: "", liveUrl: "" });
    showStatus("New project added to portfolio!");
  };

  const handleDeleteProject = async (id) => {
    await portfolioService.deleteProject(id);
    setProjects(projects.filter(p => p.id !== id));
    showStatus("Project deleted.");
  };

  const handleAddCertificate = async (e) => {
    e.preventDefault();
    const certObj = {
      ...newCert,
      id: `cert-${Date.now()}`,
      file: newCert.file || "/certificates/cognifyz-frontend-internship.png",
      type: "image"
    };
    await portfolioService.saveCertificate(certObj);
    setCertificates([certObj, ...certificates]);
    setNewCert({ title: "", issuer: "", category: "AI/ML", date: "2026", description: "", file: "", linkedinUrl: "" });
    showStatus("New certificate added to portfolio!");
  };

  const handleDeleteCertificate = async (id) => {
    await portfolioService.deleteCertificate(id);
    setCertificates(certificates.filter(c => c.id !== id));
    showStatus("Certificate deleted.");
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "profile", label: "Profile Identity", icon: <User size={18} /> },
    { id: "resume", label: "Resume Manager", icon: <FileText size={18} /> },
    { id: "certificates", label: "Certificates", icon: <ShieldCheck size={18} /> },
    { id: "projects", label: "Projects", icon: <Code size={18} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={18} /> }
  ];

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-yellow)", fontFamily: "var(--font-mono)" }}>
        Loading Admin CMS Environment...
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "#F9FAFB", display: "flex", flexDirection: "column" }}>
      {/* Top Navbar Header */}
      <header
        style={{
          height: "64px",
          borderBottom: "1px solid rgba(250, 204, 21, 0.2)",
          background: "rgba(10, 10, 14, 0.95)",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 20
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "17px", color: "#FFFFFF" }}>
            PORTFOLIO <span className="yellow-text">CMS ADMIN</span>
          </span>
          <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", background: "rgba(250,204,21,0.08)", padding: "2px 8px", borderRadius: "4px", border: "1px solid rgba(250,204,21,0.2)" }}>
            v3.0 ADMIN
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="/"
            className="btn-glass"
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            <span>View Live Site</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={onLogout}
            style={{
              background: "none", border: "none", color: "#EF4444", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontFamily: "var(--font-mono)"
            }}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main CMS Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Sidebar */}
        <aside
          style={{
            width: "240px",
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(8, 8, 12, 0.6)",
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: active ? "1px solid var(--color-yellow)" : "1px solid transparent",
                  background: active ? "rgba(250, 204, 21, 0.12)" : "transparent",
                  color: active ? "var(--color-yellow)" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ color: active ? "var(--color-yellow)" : "var(--text-muted)" }}>
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Right Content Manager Panel */}
        <main style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
          {statusMsg && (
            <div
              style={{
                padding: "14px 18px", borderRadius: "8px",
                background: "rgba(250, 204, 21, 0.1)", border: "1px solid var(--color-yellow)",
                color: "var(--color-yellow)", fontFamily: "var(--font-mono)", fontSize: "13px",
                display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px"
              }}
            >
              <CheckCircle size={18} />
              <span>{statusMsg}</span>
            </div>
          )}

          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div>
              <h2 style={{ fontSize: "24px", color: "#FFF", marginBottom: "8px" }}>Overview &amp; Health</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "28px" }}>
                System operational status for M Arquam Kamal's Developer Portfolio.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                <div className="glass-panel" style={{ padding: "24px" }}>
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>TOTAL PROJECTS</span>
                  <p style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-yellow)", marginTop: "4px" }}>{projects.length}</p>
                </div>
                <div className="glass-panel" style={{ padding: "24px" }}>
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>CERTIFICATIONS</span>
                  <p style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-yellow)", marginTop: "4px" }}>{certificates.length}</p>
                </div>
                <div className="glass-panel" style={{ padding: "24px" }}>
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>EXPERIENCE RECORDS</span>
                  <p style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-yellow)", marginTop: "4px" }}>{experience.length}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE MANAGER */}
          {activeTab === "profile" && profile && (
            <div>
              <h2 style={{ fontSize: "24px", color: "#FFF", marginBottom: "20px" }}>Edit Profile Identity</h2>
              <form onSubmit={handleProfileSave} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px" }}>FULL NAME</label>
                    <input
                      type="text"
                      value={profile.fullName || ""}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "6px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px" }}>PROFESSIONAL TITLE</label>
                    <input
                      type="text"
                      value={profile.title || ""}
                      onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "6px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px" }}>LOCATION</label>
                  <input
                    type="text"
                    value={profile.location || ""}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    style={{ width: "100%", padding: "10px", borderRadius: "6px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF" }}
                  />
                </div>

                <button type="submit" className="btn-yellow" style={{ width: "fit-content" }}>
                  <Save size={16} />
                  <span>Save Profile</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: RESUME MANAGER */}
          {activeTab === "resume" && (
            <div>
              <h2 style={{ fontSize: "24px", color: "#FFF", marginBottom: "8px" }}>Resume Management</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "24px" }}>
                Current static PDF file is mapped to: <code>public/resume/M_Arquam_Kamal_Resume.pdf</code>
              </p>

              <div className="glass-panel" style={{ padding: "24px", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontSize: "13px", color: "#FFF", fontWeight: 600 }}>Active Public Resume File:</span>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-yellow)" }}>
                  /resume/M_Arquam_Kamal_Resume.pdf (4,033 Bytes - Valid PDF)
                </code>

                <div style={{ display: "flex", gap: "12px" }}>
                  <a href="/resume/M_Arquam_Kamal_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-yellow" style={{ fontSize: "12px" }}>
                    <span>Preview Current Resume</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATES MANAGER */}
          {activeTab === "certificates" && (
            <div>
              <h2 style={{ fontSize: "24px", color: "#FFF", marginBottom: "20px" }}>Certificates Management</h2>

              {/* Add Form */}
              <form onSubmit={handleAddCertificate} className="glass-panel" style={{ padding: "24px", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px" }}>
                <h3 style={{ fontSize: "16px", color: "var(--color-yellow)" }}>+ Add New Certificate</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <input type="text" required placeholder="Certificate Title" value={newCert.title} onChange={e => setNewCert({ ...newCert, title: e.target.value })} style={{ padding: "10px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF", borderRadius: "6px" }} />
                  <input type="text" required placeholder="Issuer (e.g. Infosys, IBM)" value={newCert.issuer} onChange={e => setNewCert({ ...newCert, issuer: e.target.value })} style={{ padding: "10px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF", borderRadius: "6px" }} />
                </div>
                <button type="submit" className="btn-yellow" style={{ width: "fit-content" }}>
                  <Plus size={16} /> Add Certificate
                </button>
              </form>

              {/* List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {certificates.map(c => (
                  <div key={c.id} className="glass-panel" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h4 style={{ color: "#FFF", fontSize: "15px" }}>{c.title}</h4>
                      <span style={{ fontSize: "12px", color: "var(--color-yellow)" }}>{c.issuer} • {c.date}</span>
                    </div>
                    <button onClick={() => handleDeleteCertificate(c.id)} style={{ background: "none", border: "none", color: "#EF4444", cursor: "pointer" }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PROJECTS MANAGER */}
          {activeTab === "projects" && (
            <div>
              <h2 style={{ fontSize: "24px", color: "#FFF", marginBottom: "20px" }}>Projects Management</h2>

              {/* Add Form */}
              <form onSubmit={handleAddProject} className="glass-panel" style={{ padding: "24px", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px" }}>
                <h3 style={{ fontSize: "16px", color: "var(--color-yellow)" }}>+ Add New Project</h3>
                <input type="text" required placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} style={{ padding: "10px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF", borderRadius: "6px" }} />
                <textarea rows={3} required placeholder="Description" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} style={{ padding: "10px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF", borderRadius: "6px" }} />
                <input type="text" placeholder="GitHub Repository URL" value={newProject.githubUrl} onChange={e => setNewProject({ ...newProject, githubUrl: e.target.value })} style={{ padding: "10px", background: "rgba(5,5,8,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFF", borderRadius: "6px" }} />
                <button type="submit" className="btn-yellow" style={{ width: "fit-content" }}>
                  <Plus size={16} /> Add Project
                </button>
              </form>

              {/* List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {projects.map(p => (
                  <div key={p.id} className="glass-panel" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h4 style={{ color: "#FFF", fontSize: "15px" }}>{p.title}</h4>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{p.category}</span>
                    </div>
                    <button onClick={() => handleDeleteProject(p.id)} style={{ background: "none", border: "none", color: "#EF4444", cursor: "pointer" }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: EXPERIENCE MANAGER */}
          {activeTab === "experience" && (
            <div>
              <h2 style={{ fontSize: "24px", color: "#FFF", marginBottom: "20px" }}>Work Experience</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {experience.map(e => (
                  <div key={e.id} className="glass-panel" style={{ padding: "16px" }}>
                    <h4 style={{ color: "#FFF", fontSize: "15px" }}>{e.role} — <span style={{ color: "var(--color-yellow)" }}>{e.company}</span></h4>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
