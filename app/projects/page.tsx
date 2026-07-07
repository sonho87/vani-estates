import { Suspense } from "react";
import { projects, builders } from "@/lib/projects";
import type { Metadata } from "next";
import ProjectsView from "./ProjectsView";
import ProjectsStatic from "./ProjectsStatic";

export const metadata: Metadata = {
  title: "New Projects in Bangalore by Sobha, Prestige, Brigade & Total Environment",
  description:
    "Hand-picked new projects from India's most trusted builders — Sobha, Prestige, Brigade, Total Environment. Ready to move, ongoing and upcoming RERA-registered projects in Bangalore for investors and NRI buyers, with honest investment analysis.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "New Projects in Bangalore by Top Branded Builders — Vani Estates",
    description:
      "Invest early or buy ready-to-move. Curated branded-builder projects across Bangalore, marketed by Vani Estates — RERA registered.",
  },
};

export default function ProjectsPage() {
  // Static server-rendered grid is the Suspense fallback → it lands in the
  // static HTML for SEO. The interactive client filter hydrates over it.
  return (
    <Suspense fallback={<ProjectsStatic projects={projects} builders={builders} />}>
      <ProjectsView projects={projects} builders={builders} />
    </Suspense>
  );
}
