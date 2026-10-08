import React from "react";
import { Github, Linkedin, Youtube, Mail, MessageSquare, FileText } from "lucide-react";
import { profileData } from "../data/profile";

export default function SocialRail() {
  const items = [
    { icon: <Github size={18} />, href: profileData.urls.github, label: "GitHub" },
    { icon: <Linkedin size={18} />, href: profileData.urls.linkedin, label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: profileData.urls.youtube, label: "YouTube" },
    { icon: <Mail size={18} />, href: profileData.urls.gmail, label: "Email" },
    { icon: <MessageSquare size={18} />, href: profileData.urls.whatsapp, label: "WhatsApp" },
    { icon: <FileText size={18} />, href: "/resume/M_Arquam_Kamal_Resume.pdf", label: "Resume", download: true }
  ];

  return (
    <div className="social-rail" aria-label="Social links rail">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          download={item.download}
          className="social-rail-item"
          title={item.label}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
