import apex from "../assets/apex.png";
import fresh from "../assets/fresh.png";
import sweet from "../assets/sweet.png";
import modern from "../assets/modern.png";
import glp from "../assets/glp.png";
import course from "../assets/course.png";

export type ProjectCategory =
  | "Business"
  | "Landing Pages"
  | "E-commerce"
  | "Portfolio"
  | "Web Apps";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

/**
 * Add new work by appending an object to this array.
 * No component logic needs to change — FeaturedProjects and the
 * Portfolio page both read from this file directly.
 */
export const projects: Project[] = [
  {
    id: "apex-details",
    title: "Apex Detailing",
    category: "Landing Pages",
    thumbnail: apex,
    description: "A landing page for a car detailing company in Dallas, Texas",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ade-apex-detail.netlify.app",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "sweet-crumbs",
    title: "Sweet Crumbs Bakery",
    category: "Business",
    thumbnail: sweet,
    description:
      "Sweet, savory and everything in between! Quality bakes and pastries for your dining and catering needs",
    technologies: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://ade-sweet-crumbs.netlify.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "fresh-cuts",
    title: "Fresh Cuts ATL",
    category: "Landing Pages",
    thumbnail: fresh,
    description: "A landing page for a barbing salon in Atlanta",
    technologies: ["React", "TypeScript", "Stripe"],
    liveUrl: "https://ade-fresh-cuts.netlify.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "modern-auto-spa",
    title: "Modern Auto Spa",
    category: "Business",
    thumbnail: modern,
    description: "A business page for a car detailing company",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://modern-autospa.netlify.app/",
    featured: true,
  },
  {
    id: "learnly-app",
    title: "Learnly Course App",
    category: "Web Apps",
    thumbnail: course,
    description:
      "An app that simulates enrolling courses, and filtering based on select criteria",
    technologies: ["React", "TypeScript", "TanStack Query"],
    liveUrl: "https://ade-lms.netlify.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "glp-logistics",
    title: "GLP Logistics",
    category: "Landing Pages",
    thumbnail: glp,
    description:
      "A logistics company landing page equipped with tracking software",
    technologies: ["React", "Tailwind CSS", "Mapbox"],
    liveUrl: "https://glp-logistics.vercel.app/",
    featured: false,
  },
];
