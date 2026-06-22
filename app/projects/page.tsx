import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import ProjectsView from "./ProjectsView";

export const metadata: Metadata = {
  title: "New Projects in Bangalore by Sobha, Total Environment & Prestige",
  description:
    "Hand-picked new projects from India's most trusted builders — Sobha, Total Environment, Prestige. Ready to move, ongoing and upcoming RERA-registered projects in Bangalore for investors and end-users.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "New Projects in Bangalore by Top Branded Builders — Vani Estates",
    description:
      "Invest early or buy ready-to-move. Curated branded-builder projects across Bangalore, marketed by Vani Estates — RERA registered.",
  },
};

export default function ProjectsPage() {
  return <ProjectsView projects={projects} />;
}
