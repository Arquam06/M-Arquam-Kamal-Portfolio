import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check hover targets
      const target = e.target.closest("a, button, [data-cursor]");
      if (target) {
        setHovered(true);
        const cursorAttr = target.getAttribute("data-cursor");
        if (cursorAttr) {
          setLabel(cursorAttr);
        } else if (target.getAttribute("href")?.includes("github")) {
          setLabel("OPEN");
        } else if (target.innerText?.toLowerCase().includes("certificate")) {
          setLabel("VIEW");
        } else if (target.innerText?.toLowerCase().includes("project") || target.innerText?.toLowerCase().includes("demo")) {
          setLabel("EXPLORE");
        } else {
          setLabel("");
        }
      } else {
        setHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: hovered ? (label ? "54px" : "40px") : "24px",
          height: hovered ? (label ? "54px" : "40px") : "24px",
          borderRadius: "50%",
          border: "1.5px solid var(--color-yellow)",
          background: hovered ? "rgba(250, 204, 21, 0.12)" : "transparent",
          boxShadow: hovered ? "0 0 16px var(--color-yellow-glow)" : "none",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {label && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              fontWeight: 800,
              color: "var(--color-yellow)",
              letterSpacing: "0.05em"
            }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "var(--color-yellow)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10000
        }}
      />
    </>
  );
}
