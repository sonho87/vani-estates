import { Suspense } from "react";
import { listedProjects, listedBuilders } from "@/lib/projects";
import type { Metadata } from "next";
import ProjectsView from "./ProjectsView";
import ProjectsStatic from "./ProjectsStatic";

export const metadata: Metadata = {
  title: "New Projects in Bangalore by Sobha, Prestige, Brigade & Total Environment",
  description:
    "Curated new projects by Sobha, Prestige, Brigade & Total Environment in Bangalore — honest investment analysis and full NRI support. RERA registered.",
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
    <Suspense fallback={<ProjectsStatic projects={listedProjects()} builders={listedBuilders()} />}>
      <ProjectsView projects={listedProjects()} builders={listedBuilders()} />
    </Suspense>
  );
}
