import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const MAX_HOME_PROJECTS = 9;

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
            Real businesses, real websites
          </h2>
          <p className="mt-4 text-mist-400">
            A sample of the sites we've designed and built for clients across
            different industries and goals.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link to="/projects" className="btn-secondary">
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
