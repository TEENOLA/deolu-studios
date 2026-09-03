import type { LucideIcon } from "lucide-react";
import { Eye, BadgeCheck, MousePointerClick, LayoutGrid } from "lucide-react";

export interface AuditCriterion {
  id: string;
  icon: LucideIcon;
  title: string;
  question: string;
}

export const auditCriteria: AuditCriterion[] = [
  {
    id: "clear-messaging",
    icon: Eye,
    title: "Clear Messaging",
    question: "Can a potential customer understand your offer within seconds?",
  },
  {
    id: "credibility",
    icon: BadgeCheck,
    title: "Credibility",
    question:
      "Does your website make your business look as trustworthy and professional as it actually is?",
  },
  {
    id: "clear-next-step",
    icon: MousePointerClick,
    title: "A Clear Next Step",
    question:
      "Can visitors easily contact you, book a service, request a quote, or take whatever action matters to your business?",
  },
  {
    id: "better-experience",
    icon: LayoutGrid,
    title: "A Better Experience",
    question:
      "Does the website work smoothly across phones, tablets, and desktops?",
  },
];
