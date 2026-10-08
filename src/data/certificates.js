/* ==========================================================================
   CERTIFICATES DATA SYSTEM — M ARQUAM KAMAL PORTFOLIO
   
   HOW TO ADD A NEW CERTIFICATE IN THE FUTURE:
   1. Place your certificate image or PDF inside the `public/certificates/` folder.
      Example: `public/certificates/my-new-cert.png`
   2. Add a new object to the `certificatesData` array below:
      {
        id: "my-new-cert",
        title: "Certificate Title",
        issuer: "Issuing Organization",
        category: "AI/ML", // Choose from: "Frontend", "Security", "AI/ML", "Data Engineering", "Achievements"
        date: "2026",
        file: "/certificates/my-new-cert.png",
        type: "image", // "image" or "pdf"
        verificationUrl: "https://example.com/verify",
        linkedinUrl: "", // Optional individual LinkedIn post URL
        description: "Description of skills verified by this certificate."
      }
   3. Save file — changes will render immediately on the portfolio website!
   ========================================================================== */

export const certificatesData = [
  {
    id: "guvi-data-engineering",
    title: "Introduction to Data Engineering and Big Data",
    issuer: "GUVI × HCL",
    category: "Data Engineering",
    date: "April 4, 2026",
    description: "Concepts of big data engineering, file systems (Hadoop), pipelines, and databases.",
    file: "/certificates/guvi-data-engineering-bigdata.png",
    type: "image",
    verificationUrl: "https://www.guvi.in/certificate?id=5E1787Ib3e4Q20165u",
    linkedinUrl: ""
  },
  {
    id: "ibm-ethical-genai",
    title: "Ethical Considerations for Generative AI",
    issuer: "IBM SkillsBuild",
    category: "AI/ML",
    date: "September 4, 2025",
    description: "Frameworks for safety, accountability, transparency, and bias elimination in generative AI models.",
    file: "/certificates/ibm-ethical-generative-ai.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "india-ai-impact-participation",
    title: "India AI Impact Buildathon — Certificate of Participation",
    issuer: "India AI Impact Summit / HCL GUVI",
    category: "Achievements",
    date: "February 16, 2026",
    description: "National buildathon organized to solve real-world problems using AI and modern engineering solutions.",
    file: "/certificates/india-ai-impact-buildathon.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "ibm-rag",
    title: "Introduction to Retrieval Augmented Generation",
    issuer: "IBM SkillsBuild",
    category: "AI/ML",
    date: "September 4, 2025",
    description: "Integrating external enterprise data structures with generative models to construct contextual RAG applications.",
    file: "/certificates/ibm-rag.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "infosys-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    category: "AI/ML",
    date: "April 27, 2026",
    description: "Fundamental concept areas of artificial intelligence, search algorithms, and machine learning structures.",
    file: "/certificates/infosys-artificial-intelligence.png",
    type: "image",
    verificationUrl: "https://verify.onwingspan.com",
    linkedinUrl: ""
  },
  {
    id: "cognifyz-internship",
    title: "Front-End Development Internship Completion",
    issuer: "Cognifyz Technologies",
    category: "Frontend",
    date: "April 9, 2026",
    description: "Completed a structured Front-End Development internship involving practical web-development tasks and project-based learning.",
    file: "/certificates/cognifyz-frontend-internship.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "guvi-chatgpt",
    title: "ChatGPT for Everyone",
    issuer: "GUVI × HCL",
    category: "AI/ML",
    date: "2026",
    description: "Fundamentals of generative AI, prompt engineering, and productivity workflows using large language models.",
    file: "/certificates/guvi-chatgpt-for-everyone.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "infosys-cybersecurity",
    title: "Cybersecurity",
    issuer: "Infosys Springboard",
    category: "Security",
    date: "2026",
    description: "Foundational training on cybersecurity principles, network defenses, threat types, and response protocols.",
    file: "/certificates/infosys-cybersecurity.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "analytics-vidhya-aiml",
    title: "Introduction to AI & ML",
    issuer: "Analytics Vidhya",
    category: "AI/ML",
    date: "2026",
    description: "Supervised and unsupervised learning, simple model regressions, and classification algorithms.",
    file: "/certificates/analytics-vidhya-ai-ml.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "odoo-hackathon-26",
    title: "Odoo × Adamas University Hackathon 26 — Certificate of Participation",
    issuer: "Odoo × Adamas University",
    category: "Achievements",
    date: "2026",
    description: "Participation in the 2026 hackathon, building custom HR modules and integrations on top of the Odoo ERP framework.",
    file: "/certificates/odoo-adamas-hackathon-2026.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "solution-challenge-2026",
    title: "Solution Challenge 2026: Build with AI — Certificate of Participation",
    issuer: "Google Solution Challenge 2026",
    category: "AI/ML",
    date: "2026",
    description: "Participation in the Google Solution Challenge 2026, building AI-enabled software solutions to address global community problems.",
    file: "/certificates/solution-challenge-build-with-ai-2026.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  },
  {
    id: "adamas-poster-2025",
    title: "Adamas University Poster Making Competition 2025 — Certificate of Appreciation",
    issuer: "Adamas University & CSI",
    category: "Achievements",
    date: "2025",
    description: "Certificate of appreciation in the 2025 poster making competition held at Adamas University.",
    file: "/certificates/adamas-csi-poster-competition-2025.png",
    type: "image",
    verificationUrl: "",
    linkedinUrl: ""
  }
];

export const certificateCategories = [
  "All",
  "Frontend",
  "Security",
  "AI/ML",
  "Data Engineering",
  "Achievements"
];
