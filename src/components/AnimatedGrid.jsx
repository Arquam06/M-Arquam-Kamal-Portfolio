import React from "react";

export default function AnimatedGrid() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
      }}
    >
      {/* Panning Grid Overlay */}
      <div className="cyber-grid" />
      
      {/* Slow Floating Ambient Orbs (Fulfills visual request #14) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.045) 0%, rgba(59, 130, 246, 0.01) 50%, transparent 70%)",
          filter: "blur(60px)",
          animation: "ambientFloat1 24s infinite alternate ease-in-out"
        }}
      />
      
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, rgba(59, 130, 246, 0.01) 50%, transparent 70%)",
          filter: "blur(80px)",
          animation: "ambientFloat2 32s infinite alternate ease-in-out"
        }}
      />
    </div>
  );
}
