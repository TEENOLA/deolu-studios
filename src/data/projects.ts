import apex from "../assets/apex.png";
import fresh from "../assets/fresh.png";
import sweet from "../assets/sweet.png";
import modern from "../assets/modern.png";
import glp from "../assets/glp.png";
import course from "../assets/course.png";
import invoice from "../assets/cbc-invoice.png";
import velvet from "../assets/velvet.png";
import omotola from "../assets/omotola.png";

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

export const projects: Project[] = [
  {
    id: "velvet-glow-booking",
    title: "Velvet Glow",
    category: "Web Apps",
    thumbnail: velvet,
    description:
      "A full booking platform for salons and barbershops — live client booking flow, a multi-step salon onboarding wizard, and a real-time dashboard for tracking appointments, revenue, and no-show rates.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://velvet-glow-beige.vercel.app",
    featured: true,
  },
  {
    id: "apex-details",
    title: "Apex Detailing",
    category: "Landing Pages",
    thumbnail: apex,
    description:
      "A conversion-focused landing page for a Dallas car detailing studio — built around instant appointment booking and a call-to-action tuned for mobile leads.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ade-apex-detail.netlify.app",
    featured: true,
  },
  {
    id: "glp-logistics",
    title: "GLP Logistics",
    category: "Landing Pages",
    thumbnail: glp,
    description:
      "A logistics company site with a mock package-tracking flow, built as a speculative pitch for a real courier business.",
    technologies: ["React", "Tailwind CSS", "Mapbox"],
    liveUrl: "https://glp-logistics.vercel.app/",
    featured: false,
  },
  {
    id: "sweet-crumbs",
    title: "Sweet Crumbs Bakery",
    category: "Business",
    thumbnail: sweet,
    description:
      "A full business site for a bakery and catering brand — menu showcase, catering inquiry form, and a warm, appetite-driven visual identity.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://ade-sweet-crumbs.netlify.app/",
    featured: true,
  },
  {
    id: "omotola-firm",
    title: "Omotola & Partners LLP",
    category: "Business",
    thumbnail: omotola,
    description:
      "A premium, multi-page website for Omotola & Partners LLP, a fictional full-service commercial law firm based in Lagos, Nigeria.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://omotola-and-partners.vercel.app",
    featured: true,
  },
  {
    id: "fresh-cuts",
    title: "Fresh Cuts ATL",
    category: "Landing Pages",
    thumbnail: fresh,
    description:
      "A clean, booking-first landing page for an Atlanta barbershop — built to turn walk-in interest into scheduled appointments.",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://ade-fresh-cuts.netlify.app/",
    featured: true,
  },
  {
    id: "modern-auto-spa",
    title: "Modern Auto Spa",
    category: "Business",
    thumbnail: modern,
    description:
      "A polished business site for a car detailing company, with a before/after showcase and service tiers built to justify premium pricing.",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://modern-autospa.netlify.app/",
    featured: true,
  },
  {
    id: "cbc-invoice",
    title: "Cakes B' Caking Invoice Generator",
    category: "Web Apps",
    thumbnail: invoice,
    description:
      "A full invoice management system for bakeries — built from a real ordering workflow, right down to a cake configurator for layers, flavors, size, and covering.",
    technologies: ["React", "TypeScript", "Recharts"],
    liveUrl: "https://cbc-invoice.vercel.app",
    featured: true,
  },
  {
    id: "learnly-app",
    title: "Learnly Course App",
    category: "Web Apps",
    thumbnail: course,
    description:
      "A course marketplace simulation with real filtering, search, and enrollment flows — modeled on platforms like Udemy and Coursera.",
    technologies: ["React", "TypeScript", "TanStack Query"],
    liveUrl: "https://ade-lms.netlify.app/",
    featured: true,
  },
];
