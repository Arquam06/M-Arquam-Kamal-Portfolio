import React, { useState, useEffect } from "react";
import { Folder, FileCode, Play, Terminal, ChevronRight, Circle } from "lucide-react";

export default function WorkspaceVisual() {
  const [activeTab, setActiveTab] = useState("RentFlow.jsx");
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [logIndex, setLogIndex] = useState(0);

  const files = {
    "RentFlow.jsx": `import { useEffect, useState } from 'react';
import { db } from './config/db';

export function RentFlowController() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaseData() {
      try {
        const data = await db.collection('rentals').find();
        setRentals(data);
      } catch (err) {
        console.error("RentFlow DB Error", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaseData();
  }, []);

  return (
    <div className="flow-container">
      <h3>Active Rental Lifecycles</h3>
      {loading ? <Spinner /> : <RentalList items={rentals} />}
    </div>
  );
}`,
    "Kavach_AI.py": `from fastapi import FastAPI, Request
from security.detector import HoneyPot
from utils.logger import audit_log

app = FastAPI(title="KAVACH AI API")
security_monitor = HoneyPot()

@app.post("/api/v1/shield")
async def monitor_requests(request: Request):
    client_ip = request.client.host
    payload = await request.json()
    
    is_malicious = security_monitor.scan(payload)
    if is_malicious:
        audit_log(client_ip, payload, status="BLOCKED")
        return {"shield_status": "alert_triggered", "action": "blocked"}
        
    return {"shield_status": "secure", "action": "forwarded"}`,
    "profile.json": `{
  "developer": "M Arquam Kamal",
  "role": "Frontend Developer",
  "university": "Adamas University",
  "degree": "B.Tech CSE Student",
  "focus": "Modern Web Application Architectures",
  "core_tech": ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  "open_to": ["Frontend Roles", "Placements", "Hackathons"]
}`
  };

  const logs = [
    "Initializing M-Arquam-Portfolio dev environment...",
    "Loading environment variables from .env.local",
    "MongoDB Connection: ESTABLISHED to RentFlow Cluster",
    "Running local dev server on http://localhost:5173",
    "Vite v8.2.0 ready in 340ms.",
    "Watching for file changes...",
    "Odoo HRMS Hackathon Sandbox module loaded successfully",
    "KAVACH AI Honeypot server running on Port 8000 (Protected)",
    "API metrics: 0 security violations in the last 24h",
    "Analyzing React component graph for unused dependencies...",
    "No compilation errors detected. Bundle is ready."
  ];

  // Typing simulation in mock terminal
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLogs(prev => {
        const nextLogs = [...prev, logs[logIndex]];
        if (nextLogs.length > 5) nextLogs.shift(); // Keep max 5 logs
        return nextLogs;
      });
      setLogIndex(prev => (prev + 1) % logs.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [logIndex]);

  return (
    <div
      className="glass-panel glow-card"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "460px",
        display: "flex",
        flexDirection: "column",
        fontSize: "12px",
        fontFamily: "var(--font-mono)",
        color: "var(--text-secondary)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 0 1px rgba(255,255,255,0.1)",
        overflow: "hidden"
      }}
    >
      {/* Top Title Bar / Windows controls */}
      <div
        style={{
          height: "36px",
          background: "rgba(3, 7, 18, 0.9)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px"
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <Circle size={10} style={{ color: "#ef4444", fill: "#ef4444" }} />
          <Circle size={10} style={{ color: "#eab308", fill: "#eab308" }} />
          <Circle size={10} style={{ color: "#22c55e", fill: "#22c55e" }} />
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "11px" }}>
          workspace@kamal: ~/arquam-portfolio
        </div>
        <div style={{ width: "38px" }} />
      </div>

      {/* Main Workspace split */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        
        {/* Editor Sidebar */}
        <div
          style={{
            width: "140px",
            background: "rgba(3, 7, 18, 0.4)",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "12px 8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
          className="workspace-sidebar"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-primary)", fontWeight: "600" }}>
            <Folder size={12} style={{ color: "var(--color-cyan)" }} />
            <span>src/data</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "8px" }}>
            {Object.keys(files).map((fileName) => (
              <button
                key={fileName}
                onClick={() => setActiveTab(fileName)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "none",
                  border: "none",
                  color: activeTab === fileName ? "var(--color-cyan)" : "var(--text-secondary)",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "11px"
                }}
              >
                <FileCode size={11} style={{ opacity: 0.8 }} />
                <span>{fileName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(3, 7, 18, 0.2)", overflow: "hidden" }}>
          
          {/* File Tabs */}
          <div
            style={{
              display: "flex",
              background: "rgba(3, 7, 18, 0.6)",
              borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            {Object.keys(files).map((fileName) => (
              <button
                key={fileName}
                onClick={() => setActiveTab(fileName)}
                style={{
                  padding: "8px 12px",
                  background: activeTab === fileName ? "rgba(13, 20, 38, 0.6)" : "transparent",
                  color: activeTab === fileName ? "var(--text-primary)" : "var(--text-muted)",
                  border: "none",
                  borderRight: "1px solid rgba(255,255,255,0.05)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "11px",
                  position: "relative"
                }}
              >
                {activeTab === fileName && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "var(--color-cyan)"
                    }}
                  />
                )}
                <FileCode size={10} style={{ color: activeTab === fileName ? "var(--color-cyan)" : "inherit" }} />
                {fileName}
              </button>
            ))}
          </div>

          {/* Code Viewer Panel */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              fontSize: "11px",
              lineHeight: "1.5"
            }}
          >
            <pre style={{ margin: 0, color: "var(--text-primary)", whiteSpace: "pre-wrap" }}>
              <code>
                {files[activeTab]}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Terminal Block bottom */}
      <div
        style={{
          height: "120px",
          background: "rgba(3, 7, 18, 0.9)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "8px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          overflow: "hidden"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-primary)", fontWeight: "600", fontSize: "11px", marginBottom: "4px" }}>
          <Terminal size={11} style={{ color: "var(--color-violet)" }} />
          <span>TERMINAL</span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            fontSize: "10.5px",
            color: "#10b981"
          }}
        >
          {terminalLogs.map((log, index) => (
            <div key={index} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <ChevronRight size={10} style={{ color: "var(--text-muted)" }} />
              <span style={{ color: log && log.includes("Error") ? "#ef4444" : "#10b981" }}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Workspace Status Bar */}
      <div
        style={{
          height: "24px",
          background: "var(--color-cyan)",
          color: "#030712",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          fontSize: "10px",
          fontWeight: "600"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Play size={8} style={{ fill: "#030712" }} />
            <span>Vite: dev</span>
          </div>
          <span>git: main*</span>
        </div>
        <div>
          <span>utf-8</span>
          <span style={{ marginLeft: "10px" }}>Ln 1, Col 1</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 500px) {
          .workspace-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
