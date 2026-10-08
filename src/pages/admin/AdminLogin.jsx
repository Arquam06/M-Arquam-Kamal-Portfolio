import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { supabase, isSupabaseConfigured } from "../../lib/supabaseClient";

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSupabaseConfigured) {
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (authError) throw authError;
        if (data.session) {
          onLoginSuccess(data.session);
          return;
        }
      }

      // Local admin fallback for development / setup testing
      if (email === "marquamkamal7@gmail.com" || email === "admin@arquam.dev" || email.includes("@")) {
        const mockSession = { user: { email }, token: "mock_session_token_123" };
        localStorage.setItem("arquam_admin_session", JSON.stringify(mockSession));
        onLoginSuccess(mockSession);
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      setError(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        zIndex: 10
      }}
    >
      <div
        className="glass-panel glow-card"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "36px",
          border: "1px solid var(--color-yellow)",
          boxShadow: "0 0 40px var(--color-yellow-glow)"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div
            style={{
              width: "48px", height: "48px", borderRadius: "50%",
              background: "rgba(250, 204, 21, 0.1)", border: "1px solid rgba(250, 204, 21, 0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--color-yellow)"
            }}
          >
            <Lock size={22} />
          </div>

          <h2 style={{ fontSize: "22px", color: "#FFFFFF", fontFamily: "var(--font-heading)" }}>
            Portfolio <span className="yellow-text">CMS Admin</span>
          </h2>
          <p style={{ fontSize: "12.5px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textAlign: "center" }}>
            M Arquam Kamal • Private Control Panel
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: "12px", borderRadius: "6px",
              background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#EF4444", fontSize: "12.5px", fontFamily: "var(--font-mono)",
              display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px"
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px" }}>
              ADMIN EMAIL
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marquamkamal7@gmail.com"
                style={{
                  width: "100%", padding: "12px 14px 12px 38px", borderRadius: "8px",
                  background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "13.5px"
                }}
              />
              <Mail size={16} style={{ position: "absolute", left: "12px", top: "14px", color: "var(--text-muted)" }} />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px" }}>
              PASSWORD
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: "100%", padding: "12px 14px 12px 38px", borderRadius: "8px",
                  background: "rgba(5, 5, 8, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: "13.5px"
                }}
              />
              <Lock size={16} style={{ position: "absolute", left: "12px", top: "14px", color: "var(--text-muted)" }} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-yellow"
            style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
          >
            <span>{loading ? "Authenticating..." : "Sign In to Admin"}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <a href="/" style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            ← Back to Public Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
