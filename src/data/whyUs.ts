import type { LucideIcon } from "lucide-react";
import { Compass, Lightbulb, ArrowRight } from "lucide-react";

export interface WhyPillar {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyPillars: WhyPillar[] = [
  {
    id: "business-first",
    icon: Compass,
    title: "Business-first thinking",
    description:
      "We start with your business, your customers, and the action you want visitors to take. The goal isn't simply to build a website. It's to create a digital experience that supports the way your business actually works.",
  },
  {
    id: "clarity",
    icon: Lightbulb,
    title: "Clarity that builds confidence",
    description:
      "People should understand what you offer, why it matters, and why they should trust you without having to figure it out themselves. We turn complicated offers into clear, easy-to-navigate experiences.",
  },
  {
    id: "moves-people-forward",
    icon: ArrowRight,
    title: "Designed to move people forward",
    description:
      "Whether the next step is a call, enquiry, booking, consultation, or purchase, we make that path obvious — across desktop and mobile.",
  },
];
