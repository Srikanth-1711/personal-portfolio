import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

// ── Row 1: AI & Core ──────────────────────────────────────────────
export const SKILL_DATA = [
  { skill_name: "Python",      image: "python.svg",      width: 80, height: 80 },
  { skill_name: "PyTorch",     image: "pytorch.svg",     width: 80, height: 80 },
  { skill_name: "TensorFlow",  image: "tensorflow.svg",  width: 80, height: 80 },
  { skill_name: "NumPy",       image: "numpy.svg",       width: 80, height: 80 },
  { skill_name: "Pandas",      image: "pandas.svg",      width: 80, height: 80 },
  { skill_name: "scikit-learn", image: "sklearn.svg",    width: 80, height: 80 },
  { skill_name: "Matplotlib",  image: "matplotlib.svg",  width: 80, height: 80 },
  { skill_name: "OpenCV",      image: "opencv.svg",      width: 80, height: 80 },
  { skill_name: "Jupyter",     image: "jupyter.svg",     width: 80, height: 80 },
  { skill_name: "Transformers", image: "transformers.svg", width: 80, height: 80 },
  { skill_name: "HuggingFace", image: "huggingface.svg", width: 80, height: 80 },
  { skill_name: "NVIDIA NeMo", image: "nemo.svg",        width: 80, height: 80 },
] as const;

// ── Row 2: LLM & GenAI ───────────────────────────────────────────
export const FRONTEND_SKILL = [
  { skill_name: "LangChain",   image: "langchain.svg",   width: 80, height: 80 },
  { skill_name: "LangGraph",   image: "langgraph.svg",   width: 80, height: 80 },
  { skill_name: "OpenAI",      image: "openai.svg",      width: 80, height: 80 },
  { skill_name: "Gemini",      image: "gemini.svg",      width: 80, height: 80 },
  { skill_name: "Llama",       image: "llama.svg",       width: 80, height: 80 },
  { skill_name: "Ollama",      image: "ollama.svg",      width: 80, height: 80 },
  { skill_name: "RAG",         image: "rag.svg",         width: 80, height: 80 },
  { skill_name: "Embeddings",  image: "embeddings.svg",  width: 80, height: 80 },
  { skill_name: "MCP",         image: "mcp.svg",         width: 80, height: 80 },
  { skill_name: "IPython",     image: "ipython.png",     width: 80, height: 80 },
] as const;

// ── Row 3: Inference & Serving + Vector DBs ──────────────────────
export const BACKEND_SKILL = [
  { skill_name: "vLLM",        image: "vllm.png",        width: 80, height: 80 },
  { skill_name: "SGLang",      image: "sglang.svg",      width: 80, height: 80 },
  { skill_name: "LiteLLM",     image: "litellm.png",     width: 80, height: 80 },
  { skill_name: "FastAPI",     image: "fastapi.svg",     width: 80, height: 80 },
  { skill_name: "Milvus",      image: "milvus.svg",      width: 80, height: 80 },
  { skill_name: "ChromaDB",    image: "chromadb.svg",    width: 80, height: 80 },
  { skill_name: "FAISS",       image: "faiss.svg",       width: 80, height: 80 },
  { skill_name: "PostgreSQL",  image: "postgresql.svg",  width: 70, height: 70 },
  { skill_name: "MySQL",       image: "mysql.svg",       width: 75, height: 75 },
  { skill_name: "Redis",       image: "redis.svg",       width: 80, height: 80 },
] as const;

// ── Row 4: Infrastructure ────────────────────────────────────────
export const FULLSTACK_SKILL = [
  { skill_name: "Docker",      image: "docker.svg",      width: 80, height: 80 },
  { skill_name: "Kubernetes",  image: "kubernetes.svg",  width: 80, height: 80 },
  { skill_name: "Linux",       image: "linux.svg",       width: 80, height: 80 },
  { skill_name: "Nginx",       image: "nginx.svg",       width: 80, height: 80 },
  { skill_name: "Git",         image: "git.svg",         width: 80, height: 80 },
  { skill_name: "Bash",        image: "bash.svg",        width: 80, height: 80 },
] as const;

// ── Row 5: Languages & Web ───────────────────────────────────────
export const OTHER_SKILL = [
  { skill_name: "C",           image: "c.svg",           width: 80, height: 80 },
  { skill_name: "C++",         image: "cplusplus.svg",   width: 80, height: 80 },
  { skill_name: "TypeScript",  image: "typescript.svg",  width: 80, height: 80 },
  { skill_name: "React",       image: "react.svg",       width: 80, height: 80 },
  { skill_name: "Next.js",     image: "nextjs.svg",      width: 80, height: 80 },
  { skill_name: "VS Code",     image: "vscode.svg",      width: 80, height: 80 },
] as const;

// ── Socials ──────────────────────────────────────────────────────
export const SOCIALS = [
  { name: "GitHub",   icon: RxGithubLogo,      link: "https://github.com/Srikanth-1711" },
  { name: "LinkedIn", icon: RxLinkedinLogo,     link: "https://www.linkedin.com/in/lakshmi-srikanth-/" },
  { name: "Email",    icon: RxEnvelopeClosed,   link: "mailto:lakshmisrikanthpolavarapu@gmail.com" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Srikanth-1711/personal-portfolio",
  resume: "https://drive.google.com/file/d/1byedPQ9S-5z_g4Pz6BnRlGe45JcDUoc6/view?usp=sharing",
  resumePdf: "/resume.pdf",
};

// ── Projects ─────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "AI Diagnostic & Log Analysis Platform",
    description:
      "Internal AI system for the SAO (Systems and Optics) and QUAD (Quality and Diagnostics) organizations — enables engineers to explore diagnostic and regression-log data through retrieval-augmented workflows for enterprise router software.",
    image: "/projects/diag_arch.jpg",
    link: "#",
  },
  {
    title: "MCP Schematic Analysis Tool",
    description:
      "Internal MCP server supporting engineers with schematic analysis and AI-assisted engineering workflows across cross-functional hardware and firmware teams.",
    image: "/projects/mcp_schem.jpg",
    link: "#",
  },
  {
    title: "LLM Inference & Serving",
    description:
      "Hands-on model-serving work with vLLM, SGLang, and LiteLLM for GPU-backed AI applications across server environments and API gateways — powering internal AI tools at scale.",
    image: "/projects/inf_serve.jpg",
    link: "#",
  },
  {
    title: "Aure — Autonomous Agent Runtime",
    description:
      "Autonomous Python agent runtime for iterative tool and code-execution workflows, informed by open-source agent research and built with deep system design principles.",
    image: "/projects/aure_runtime.jpg",
    link: "#",
  },
  {
    title: "Ultron — Agentic Fine-tuning System",
    description:
      "Agentic system for orchestrating domain-specific fine-tuning workflows on engineering log datasets using NVIDIA NeMo — a standalone project focused on custom model intelligence.",
    image: "/projects/ultron_tune.jpg",
    link: "#",
  },
  {
    title: "Fan Plot Curve Automation",
    description:
      "AI-based automation for a traditionally manual fan-plot-curve workflow in thermal engineering — built for cross-functional teams and designed to extend to future engineering automation projects.",
    image: "/projects/fan_curve.jpg",
    link: "#",
  },
  {
    title: "Autonomous Workflow Agents",
    description:
      "Internal agents being built to automate and orchestrate repetitive engineering-team workflows across SAO, QUAD, and cross-functional hardware/firmware organizations.",
    image: "/projects/agents_dag.jpg",
    link: "#",
  },
  {
    title: "ShipAI — Personal AI Platform",
    description:
      "Personal AI engineering platform exploring local models, agents, MCP, context optimization, and multi-agent systems — an ongoing sandbox for end-to-end AI application building.",
    image: "/projects/shipai_plat.jpg",
    link: "https://github.com/Srikanth-1711/shipai",
  },
] as const;

// ── Footer ───────────────────────────────────────────────────────
export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      { name: "GitHub",   icon: RxGithubLogo,    link: "https://github.com/Srikanth-1711" },
      { name: "LinkedIn", icon: RxLinkedinLogo,   link: "https://www.linkedin.com/in/lakshmi-srikanth-/" },
      { name: "Email",    icon: RxEnvelopeClosed, link: "mailto:lakshmisrikanthpolavarapu@gmail.com" },
      { name: "Resume",   icon: null, link: "https://drive.google.com/file/d/1byedPQ9S-5z_g4Pz6BnRlGe45JcDUoc6/view?usp=sharing" },
    ],
  },
  {
    title: "Work",
    data: [
      { name: "ShipAI",       icon: null, link: "https://github.com/Srikanth-1711/shipai" },
      { name: "AI Projects",  icon: null, link: "#projects" },
      { name: "Experience",   icon: null, link: "#experience" },
    ],
  },
  {
    title: "About",
    data: [
      { name: "My Stack",    icon: null, link: "#skills" },
      { name: "Contact Me",  icon: null, link: "mailto:lakshmisrikanthpolavarapu@gmail.com" },
    ],
  },
] as const;

// ── Nav Links ────────────────────────────────────────────────────
export const NAV_LINKS = [
  { title: "About me",   link: "#about-me" },
  { title: "Skills",     link: "#skills" },
  { title: "Projects",   link: "#projects" },
  { title: "Experience", link: "#experience" },
] as const;



// ── Experience ───────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    period: "Dec 2025 — Present",
    title: "AI Engineer",
    company: "Cisco (via Adecco)",
    location: "Bengaluru, India",
    logo: "/companies/cisco.svg",
    logos: ["/companies/cisco.svg", "/companies/adecco.svg"],
    tag: "Current Role",
    skills: ["vLLM", "SGLang", "FastAPI", "Python", "C Embedded", "Agent Systems", "RAG"],
    description:
      "Building AI-powered engineering applications, autonomous agent systems, and inference infrastructure within the SAO (Systems and Optics) org. Working closely with QUAD (Quality and Diagnostics) software teams on enterprise router diagnostics. Deep cross-functional collaboration with C embedded firmware, PCB, EAC, mechanical, thermal, FPGA, chip testing, EDVGT, MDT, ODVT, and SI teams.",
  },
  {
    period: "Nov 2024 — Nov 2025",
    title: "AI Engineering Apprentice",
    company: "Cisco",
    location: "Bengaluru, India",
    logo: "/companies/cisco.svg",
    logos: ["/companies/cisco.svg"],
    tag: "1-Year Apprenticeship",
    skills: ["Python", "C", "Enterprise Diagnostics", "Linux", "Telemetry Analysis", "System Design"],
    description:
      "Completed a rigorous 1-year full-time technical apprenticeship within Cisco's SAO & QUAD organizations. Focused on diagnostic software for enterprise networking routers, integrating AI/ML workflows into regression-log analysis, hardware validation automation, and embedded system debugging.",
  },
  {
    period: "Sept 2024 — Nov 2024",
    title: "Junior Web Developer (Intern)",
    company: "Beedata Technologies",
    location: "Visakhapatnam (Remote / US Startup Client)",
    logo: "/companies/beedata.svg",
    logos: ["/companies/beedata.svg"],
    tag: "Startup Experience",
    skills: ["React", "JavaScript", "Node.js", "MySQL", "Full-Stack Dev", "REST APIs"],
    description:
      "Worked as a junior full-stack developer under senior contingent leads for US-based startup clients. Designed and implemented dynamic user interfaces in React, developed backend services in Node.js, and maintained relational databases using MySQL.",
  },
  {
    period: "2020 — 2024",
    title: "B.Tech, Electrical & Electronics Engineering",
    company: "Raghu Engineering College",
    location: "Visakhapatnam, India",
    logo: "/companies/raghu.svg",
    logos: ["/companies/raghu.svg"],
    tag: "Graduated 2024",
    skills: ["Linear Algebra", "Calculus", "Signal Processing", "Mathematics", "Core Engineering"],
    description:
      "Graduated with a strong academic foundation in engineering mathematics, linear algebra, and signal processing — the core mathematical bedrock underpinning modern machine learning, vector spaces, and neural architectures.",
  },
] as const;

