export const profile = {
  name: "Ariba Razi",
  title: "Computer Science Undergraduate",
  tagline: "Building fast, reliable software and teaching machines to learn along the way.",
  location: "Kolkata, India",
  email: "aribarazi8@gmail.com",
  resumeUrl: "/resume.pdf",
  // Replace with your own photo at public/profile.jpg (square image works best)
  photo: "/profile.jpg",
  social: {
    github: "https://github.com/AribaRazi",
    linkedin: "https://www.linkedin.com/in/ariba-razi-5822b2333",
    leetcode: "https://leetcode.com/u/AribaRazi_12345/",
    // codeforces: "https://codeforces.com/profile/alexsharma",
    email: "aribarazi8@gmail.com",
  },
};

export const about = {
  paragraphs: [
    "I'm a third year B.Tech Computer Science student with a strong interest in building intelligent and scalable software systems. My primary areas of focus are Artificial Intelligence & Machine Learning, backend development, and cloud computing.",
"I enjoy solving real-world problems through code and learning new technologies that help me build efficient, reliable applications. Whether it's backend APIs, machine learning models, or cloud deployment, I like creating practical solutions.",
"Outside of academics, you'll usually find me working on personal projects, sharpening my problem-solving skills through competitive programming, learning new technologies, or contributing to open-source whenever I can. I'm always looking for opportunities to learn, collaborate, and build software that makes a meaningful impact.",
  ],
  highlights: [
    { label: "Focus", value: "Software Engineering" },
    { label: "Mindset", value: "Problem solver, fast learner" },
    { label: "Currently", value: "Open to internships" },
  ],
};

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "JavaScript","React","HTML","CSS"],
  },
  {
    category: "Frameworks",
    items: ["Flask", "FastApi", "Django", "Express"],
  },
  {
    category: "ML & Data",
    items: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  // Optional: path to a real screenshot, e.g. "/projects/distribuq.png".
  // Leave undefined to show the generated gradient pattern instead.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Deepfake Audio Detection",
    description:
      "A Machine Learning-powered web application that detects whether an uploaded audio sample is Human-generated or AI-generated (Deepfake) using advanced audio signal processing and feature extraction techniques.",
    stack: ["TypeScript", "Python", "CSS"],
    github: "https://github.com/AribaRazi/deepfake-Audio-Detection",
    demo: "https://deepfake-audio-detection-4qel.vercel.app",
    featured: true,
    image: "/projects/deepfake.png",
  },
  {
    title: "MedTriageAi",
    description:
      "A retrieval-augmented research assistant that summarizes and cross-references arXiv papers, with citation-aware answers grounded in source text.",
    stack: ["Python", "FastAPI", "LangChain", "PostgreSQL"],
    github: "https://github.com/AribaRazi/MedTriageAI",
    demo: "https://medical-tracker-pro--aribarazi8.replit.app/",
    featured: true,
    image: "/projects/med.png",
  },
    {
    title: "D-LOCK",
    description:
      "D-LOCK is a next-generation secure file storage application that combines military-grade encryption (AES-256) with blockchain technology (Aptos) to provide users with an unprecedented level of data security, integrity verification, and decentralized trust.",
    stack: ["TypeScript", "Python", "Move","HTML", "CSS", "JavaScript"],
    github: "https://github.com/AribaRazi/D-LOCK-Secure",
    demo:"https://d-lock-secure.vercel.app/",
    featured: true,
    image: "/projects/dlock.png",
  },
  {
    title: "Coloring Book Web App",
    description:
      "Built an interactive coloring book web application using HTML, CSS, and JavaScript, featuring SVG-based coloring, multiple drawing templates, customizable backgrounds, eraser functionality, and canvas reset.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/alexsharma/orbit",
    demo: "https://colourwithease.vercel.app/",
    featured: true,
    image: "/projects/image.png",
  },
  // {
  //   title: "Cipher CLI",
  //   description:
  //     "A command-line password manager with local AES-256 encryption, zero network calls, and a focus on auditable, minimal code.",
  //   stack: ["Rust", "SQLite"],
  //   github: "https://github.com/alexsharma/cipher-cli",
  // },
  // {
  //   title: "MarketPulse",
  //   description:
  //     "A time-series forecasting pipeline for short-term stock volatility, benchmarked against classical and deep-learning baselines.",
  //   stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
  //   github: "https://github.com/alexsharma/marketpulse",
  // },
];

export const achievements = [
   {
  title: "1st Runner-Up — Gemma for Bharat Hackathon",
  date: "2026",
  description:
    "Secured 1st Runner-Up at the Gemma for Bharat Hackathon organized by GDG on Campus JIS University, built MandiMitra,an AI-powered solution using Google's Gemma model.",
},
  {
    title: "Open Source Contributor — Selected",
    date: "2026",
    description:
      "Selected for GSSoC 2026 and Nexus Spring of Code 2026, contributing to open-source projects through collaborative development, issue resolution, and feature implementation.",
  },
  {
    title: "Comsys Hackathon 6 — Finalist",
    date: "2026",
    description:
      "Advanced to the final round of a competitive national-level hackathon, developing innovative solutions under time-constrained, team-based problem-solving environments.",
  },
  {
    title: "Hackathon Participant",
    date: "2025",
    description:
      "Actively participated in CosmoHack, Algorand Build Station (Kolkata Edition), and other technical hackathons, collaborating on real-world software and blockchain-based solutions.",
  },
  {
    title: "Associate Member — Google Developers Group (GDG)",
    date: "2025 & 2026",
    description:
      "Engaged with the developer community through technical workshops, networking events, and industry-focused sessions to enhance practical skills and stay updated with emerging technologies.",
  },
];

export const experience = [
  {
    role: "AICTE EduSkills Certified Internship",
    org: "Deep Learning, Generative AI & Large Language Models (LLMs)",
    period: "May 2026 — Jul 2026",
    points: [
      "Completed an AICTE EduSkills virtual internship focused on Deep Learning, Generative AI, and Large Language Models.",
      "Built practical understanding of modern AI workflows, neural networks, transformer architectures, and LLM applications.",
      "Worked on hands-on exercises covering model development, prompt engineering, and AI-powered applications.",
    ],
  },
  {
    role: "AIML Virtual Internship",
    org: "Google for Developers",
    period: "Apr 2026 — June 2026",
    points: [
      "Completed a virtual internship covering the fundamentals of Artificial Intelligence and Machine Learning.",
      "Gained practical exposure to supervised learning, model evaluation, feature engineering, and TensorFlow-based workflows.",
      "Applied machine learning concepts through guided projects and real-world datasets."
    ],
  },
  {
    role: "SheFi × Aptos Bootcamp Participant",
    org: "SheFi & Aptos Foundation",
    period: "October 2025",
    points: [
      "Participated in an intensive blockchain bootcamp exploring the Aptos ecosystem and Web3 development.",
      "Learned core blockchain concepts including smart contracts, decentralized applications, and the Move programming language.",
      "Collaborated with fellow participants through technical workshops and hands-on learning sessions.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Narula Institute of Technology",
    period: "2024 — 2028",
    cgpa: "9.4 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Machine Learning",
      "Computer Networks",
      // "Distributed Systems",
    ],
  },
  {
    degree: "Higher Secondary Education (PCM)",
    institution: "Kerala Samajam Model School",
    period: "2022 — 2024",
    cgpa: "96.5%",
    coursework: [],
  },
];

export const certifications = [
  { name: "Contributor in Nexus Spring of Code", issuer: "NSOC'26", url: "/certificates/nsocCertificate.jpg" },
  { name: "AICTE EduSkills Certified Internship", issuer: "Deep Learning, Generative AI & Large Language Models (LLMs)", url: "/certificates/deep.jpg" },
  { name: "AIML Virtual internship", issuer: "Google for Developers", url: "/certificates/aiml.jpg" },
  // { name: "Meta Front-End Developer", issuer: "Meta", url: "#" },
  // { name: "Database Engineering", issuer: "Coursera", url: "#" },
  // { name: "Algorithms Specialization", issuer: "Stanford Online", url: "#" },
];
export const badges = [
  {
    name: "GSSOC 2026 contributor",
    issuer: "GirlScript Summer of Code",
    date: "May 2026",
    image: "/badges/nsoc.jpeg",  
    // url: "https://www.credly.com/badges/your-badge",
    color: "from-[#FF9900]/20 to-[#FF9900]/5",
  },
  {
    name: "GSSOC Open Source track",
    issuer: "GirlScript Summer of Code",
    date: "May 2026",
    image: "/badges/nsoc2.jpeg",
    // url: "https://www.credly.com/badges/nsoc2.jpeg",
    color: "from-[#4285F4]/20 to-[#4285F4]/5",
  },
  {
    name: "Tech Contributor",
    issuer: "Nexus Spring of Code",
    date: "April 2026",
    image: "/badges/tech.jpeg",
    // url: "https://www.credly.com/badges/your-badge-id",
    color: "from-[#a78bfa]/20 to-[#a78bfa]/5",
  },
    {
    name: "Nsoc'26",
    issuer: "Nexus Spring of Code",
    date: "April 2026",
    image: "/badges/contri.jpeg",
    // url: "https://www.credly.com/badges/your-badge-id",
    color: "from-[#a78bfa]/20 to-[#a78bfa]/5",
  },
];
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Badges", href: "#badges" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
