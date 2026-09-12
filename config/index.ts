import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Lakshmi Srikanth Polavarapu | AI Engineer",
  description:
    "Portfolio of Lakshmi Srikanth Polavarapu — AI Engineer building end-to-end AI systems with LLMs, RAG, agents, and production infrastructure.",
  keywords: [
    "AI Engineer",
    "LLMs",
    "RAG",
    "Agentic AI",
    "MCP",
    "vLLM",
    "Kubernetes",
    "Full-stack AI",
    "Machine Learning",
    "Deep Learning",
    "LangChain",
    "PyTorch",
    "Python",
  ] as Array<string>,
  authors: {
    name: "Lakshmi Srikanth Polavarapu",
    url: "https://www.linkedin.com/in/lakshmi-srikanth-/",
  },
} as const;
