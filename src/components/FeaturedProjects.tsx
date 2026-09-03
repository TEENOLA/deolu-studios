import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const MAX_HOME_PROJECTS = 6;

export default function FeaturedProjects() {
  // Home page shows a curated snapshot, not the whole catalog — the
  // /projects page is where people go to browse everything.
  const featured = projects.slice(0, MAX_HOME_PROJECTS);

  return (
    <section id="portfolio" className="section-pad relative">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Here's what that looks like for a real business
          </h2>
          <p className="mt-4 text-mist-400">
            Every project starts the same way: understand the business, the
            customer, and what needs to happen for a visitor to take the next
            step.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-3">
          <p className="text-sm text-mist-400">
            Every one of these started with a{" "}
            <Link
              to="/?intent=audit#contact"
              className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              free Website Opportunity Audit
            </Link>
            .
          </p>
          <Link to="/projects" className="btn-secondary">
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
