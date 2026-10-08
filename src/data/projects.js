/* ==========================================================================
   PROJECTS DATA SYSTEM — M ARQUAM KAMAL PORTFOLIO
   
   HOW TO ADD A NEW PROJECT IN THE FUTURE:
   1. Add a new object entry to the `projectsData` array below.
   2. Fields supported: id, title, description, category, technologies, githubUrl, liveUrl, details, featured.
   3. Save file — changes will automatically render on the portfolio website!
   ========================================================================== */

export const projectsData = [
  {
    id: "rental-flow",
    title: "Rental Flow",
    category: "Full Stack",
    description: "Full-stack rental management platform designed to streamline property tracking, booking workflows, tenant analytics, and financial statistics.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "REST API"],
    githubUrl: "https://github.com/Arquam06/Rental-Flow",
    liveUrl: null,
    details: "Built with a full MERN stack backend architecture, dynamic Chart.js dashboards for rental statistics, secure authentication handling, and responsive tenant management interfaces.",
    featured: true
  },
  {
    id: "odoo-hrms-adamas",
    title: "Odoo HRMS Adamas",
    category: "Web",
    description: "Human Resource Management System developed during the Odoo × Adamas University Hackathon 26 to digitize employee onboarding, attendance, and leave management.",
    technologies: ["Python", "Odoo ERP Framework", "JavaScript", "XML", "PostgreSQL"],
    githubUrl: "https://github.com/Arquam06/Odoo-Hrms-Adamas",
    liveUrl: null,
    details: "Custom ERP module developed for Adamas University Hackathon 26. Built HR management workflows, employee records database schema, and custom interface controllers.",
    featured: true
  },
  {
    id: "kavach-ai",
    title: "Kavach AI",
    category: "Cybersecurity",
    description: "Security-focused AI concept project implementing honeypot monitoring and automated threat detection APIs to safeguard modern web services.",
    technologies: ["FastAPI", "Python", "AI / ML Concept", "RESTful API", "Security Analytics"],
    githubUrl: "https://github.com/Arquam06/Kavach-AI",
    liveUrl: null,
    details: "Integrated FastAPI microservices to detect abnormal request patterns, logging honeypot access attempts, and providing REST endpoints for security telemetry.",
    featured: true
  }
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Web",
  "Cybersecurity",
  "AI/ML"
];
