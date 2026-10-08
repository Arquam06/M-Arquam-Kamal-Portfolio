import React, { useState } from "react";
import { ExternalLink, Github, Layers, ArrowUpRight, X } from "lucide-react";
import { projectsData, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 04 FEATURED WORK</span>
        <h2 className="section-title">Projects &amp; Solutions</h2>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px"
          }}
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px"
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glow-card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {/* Header Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-yellow)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      background: "rgba(250, 204, 21, 0.08)",
                      border: "1px solid rgba(250, 204, 21, 0.2)",
                      padding: "2px 10px",
                      borderRadius: "4px"
                    }}
                  >
                    {project.category}
                  </span>
                  <Layers size={18} style={{ color: "var(--text-muted)" }} />
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    lineHeight: "1.3"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6"
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "2px 8px",
                        borderRadius: "4px"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)"
                }}
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{ fontSize: "11.5px", padding: "8px 14px", flex: 1, justifyContent: "center" }}
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yellow"
                    style={{ fontSize: "11.5px", padding: "8px 14px" }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-glass"
                  style={{ fontSize: "11.5px", padding: "8px 14px" }}
                >
                  <span>Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Lightbox Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 100,
            background: "rgba(5, 5, 8, 0.88)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: "560px",
              padding: "32px",
              position: "relative",
              border: "1px solid var(--color-yellow)",
              boxShadow: "0 0 40px var(--color-yellow-glow-subtle)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "20px", right: "20px",
                background: "none", border: "none",
                color: "var(--text-muted)", cursor: "pointer"
              }}
            >
              <X size={20} />
            </button>

            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-yellow)" }}>
              {selectedProject.category}
            </span>
            <h3 style={{ fontSize: "22px", color: "#FFFFFF", marginTop: "4px", marginBottom: "12px" }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
              {selectedProject.description}
            </p>

            {selectedProject.details && (
              <div style={{ padding: "14px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: "20px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-yellow)" }}>// KEY HIGHLIGHTS</span>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px", lineHeight: "1.6" }}>
                  {selectedProject.details}
                </p>
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-yellow" style={{ flex: 1, justifyContent: "center" }}>
                  <Github size={14} />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
