import React, { useState, useEffect } from "react";
import SystemLoader from "./components/SystemLoader";
import Canvas3DBackground from "./components/Canvas3DBackground";
import CustomCursor from "./components/CustomCursor";
import CommandPalette from "./components/CommandPalette";
import DigitalResumeModal from "./components/DigitalResumeModal";
import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import GithubSection from "./sections/Github";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { supabase, isSupabaseConfigured } from "./lib/supabaseClient";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [digitalResumeOpen, setDigitalResumeOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [adminSession, setAdminSession] = useState(() => {
    const saved = localStorage.getItem("arquam_admin_session");
    return saved ? JSON.parse(saved) : null;
  });

  // Track path changes & Supabase Auth Session
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    if (isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) setAdminSession(session);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setAdminSession(session);
      });

      return () => {
        window.removeEventListener("popstate", handlePopState);
        subscription.unsubscribe();
      };
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleAdminLogout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem("arquam_admin_session");
    setAdminSession(null);
    window.history.pushState({}, "", "/");
    setCurrentPath("/");
  };

  const handleAdminLoginSuccess = (session) => {
    setAdminSession(session);
    window.history.pushState({}, "", "/admin");
    setCurrentPath("/admin");
  };

  // Route Handling for Admin
  if (currentPath === "/admin" || currentPath === "/admin/login") {
    if (adminSession) {
      return <AdminDashboard onLogout={handleAdminLogout} />;
    }
    return <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />;
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#050505" }}>
      {/* System Loading Sequence */}
      {loading && <SystemLoader onComplete={() => setLoading(false)} />}

      {/* Futuristic Visual Components */}
      <Canvas3DBackground />
      <CustomCursor />

      {/* Floating Action Rail & Sticky Header */}
      <SocialRail />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Public Portfolio Sections */}
      <main>
        <Hero onOpenDigitalResume={() => setDigitalResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubSection />
        <Achievements />
        <Certificates />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setDigitalResumeOpen(true)}
      />

      {digitalResumeOpen && (
        <DigitalResumeModal onClose={() => setDigitalResumeOpen(false)} />
      )}
    </div>
  );
}
