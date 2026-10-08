import React, { useState } from "react";
import { Layout, Server, Database, Code, Wrench, Layers } from "lucide-react";
import { skillsData } from "../data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: <Layers size={14} /> },
    { name: "Frontend", icon: <Layout size={14} /> },
    { name: "Backend", icon: <Server size={14} /> },
    { name: "Database", icon: <Database size={14} /> },
    { name: "Programming", icon: <Code size={14} /> },
    { name: "Tools & Deployment", icon: <Wrench size={14} /> },
    { name: "Concepts & Other", icon: <Layers size={14} /> }
  ];

  const filteredCategories = activeCategory === "All"
    ? Object.keys(skillsData)
    : Object.keys(skillsData).filter(cat => cat.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(cat.toLowerCase()));

  return (
    <section id="skills" className="section-padding">
      <div className="max-width-container">
        <span className="section-tag">// 02 TECHNICAL PROFICIENCY</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px"
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
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
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {filteredCategories.map((categoryKey) => {
            const items = skillsData[categoryKey];
            return (
              <div
                key={categoryKey}
                className="glass-panel glow-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px"
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{ color: "var(--color-yellow)", fontFamily: "var(--font-mono)", fontSize: "14px" }}>
                    //
                  </span>
                  {categoryKey}
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  {items.map((skill, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(250, 204, 21, 0.15)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12.5px",
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "all 0.25s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-yellow)";
                        e.currentTarget.style.background = "rgba(250, 204, 21, 0.08)";
                        e.currentTarget.style.color = "var(--color-yellow)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(250, 204, 21, 0.15)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.color = "var(--text-primary)";
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--color-yellow)"
                        }}
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
