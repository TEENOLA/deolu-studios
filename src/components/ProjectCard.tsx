import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30">
      <div className="relative overflow-hidden">
        {/* Browser chrome frame — gives wide hero screenshots a designed, cohesive
            presentation instead of a raw crop, and reads as "portfolio piece"
            rather than a plain photo. */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-ink-700 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
          <img
            src={project.thumbnail}
            alt={`${project.title} website preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-mist-100 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-mist-50">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
          >
            View Live
            <ArrowUpRight size={14} />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 p-2.5 text-mist-300 transition-colors hover:border-white/30 hover:text-mist-50"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
