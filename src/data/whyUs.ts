import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  Layers,
  LifeBuoy,
} from "lucide-react";

export interface WhyUsItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyUs: WhyUsItem[] = [
  {
    id: "custom-built",
    icon: Sparkles,
    title: "Built Around Your Business",
    description:
      "Every site is designed and coded around your business — no drag-and-drop themes, no cookie-cutter layouts.",
  },
  {
    id: "mobile-first",
    icon: Smartphone,
    title: "Never Lose a Mobile Visitor",
    description:
      "More than half your visitors are on a phone. We design for that reality first, then scale up.",
  },
  {
    id: "fast-performance",
    icon: Zap,
    title: "Speed That Keeps Customers",
    description:
      "Lean code and optimized assets mean pages that load fast — because slow sites lose customers.",
  },
  {
    id: "seo-friendly",
    icon: Search,
    title: "Get Found by the Right People",
    description:
      "Semantic markup and clean structure help your site get found by the people searching for you.",
  },
  {
    id: "scalable",
    icon: Layers,
    title: "Grows With You, No Rebuild",
    description:
      "Your site grows with your business — new pages, features, and content without a rebuild.",
  },
  {
    id: "ongoing-support",
    icon: LifeBuoy,
    title: "A Partner After Launch, Too",
    description:
      "We don't disappear at launch. You get a partner who's there for updates and improvements.",
  },
];
