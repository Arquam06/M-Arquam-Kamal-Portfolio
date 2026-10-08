import React from "react";
import { Github, Star, GitFork, ArrowUpRight, FolderGit2 } from "lucide-react";
import { profileData } from "../data/profile";
import { githubProjectsData } from "../data/githubProjects";

export default function GithubSection() {
  return (
    <section id="github" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">08 // REPOSITORIES</span>
        <h2 className="section-title">GitHub Activity</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.8fr",
            gap: "48px",
            alignItems: "center"
          }}
          className="github-grid"
        >
          {/* Pitch & Button */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                background: "rgba(6, 182, 212, 0.08)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-cyan)"
              }}
            >
              <FolderGit2 size={24} />
            </div>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "14.5px", lineHeight: "1.7" }}>
              Explore my projects, experiments and development work on GitHub. I build open source architectures, collaborate with developers, and track my logs version-by-version.
            </p>

            <a
              href={profileData.urls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber"
            >
              <Github size={16} />
              <span>View GitHub Profile</span>
            </a>
          </div>

          {/* Repo Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            {githubProjectsData.map((repo) => (
              <a
                key={repo.id || repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glow-card"
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-cyan)",
                        fontWeight: "600"
                      }}
                    >
                      {repo.name}
                    </h3>
                  </div>
                  
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {repo.description}
                  </p>

                  <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "4px" }}>
                    {/* Lang Dot */}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: repo.langColor
                        }}
                      />
                      <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                        {repo.language}
                      </span>
                    </div>
                    {/* Stars */}
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--text-muted)", fontSize: "11px" }}>
                      <Star size={12} />
                      <span>{repo.stars}</span>
                    </div>
                    {/* Forks */}
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--text-muted)", fontSize: "11px" }}>
                      <GitFork size={12} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>

                <div style={{ color: "var(--text-muted)" }}>
                  <ArrowUpRight size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .github-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .github-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
