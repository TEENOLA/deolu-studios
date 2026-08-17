import { useNavigate, useLocation, Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { navLinks, socialLinks } from "../data/navigation";
import { services } from "../data/services";
import { goToHomeSection } from "../utils/scrollTo";
import logo from "../assets/logo.png";

const socialIcons: Record<string, typeof Twitter> = {
  Twitter,
  LinkedIn: Linkedin,
  Instagram,
  GitHub: Github,
};

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                goToHomeSection("#home", location.pathname, navigate);
              }}
              className="flex items-center gap-2.5"
            >
              <img
                src={logo}
                alt="deolustudio"
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-display text-lg font-semibold text-mist-50">
                deolustudio
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-400">
              Websites built to turn visitors into customers — fast,
              conversion-focused, and made to help your business grow online.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-400 transition-colors hover:border-white/25 hover:text-mist-50"
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-mist-50">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.type === "route") {
                        navigate(link.href);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        goToHomeSection(link.href, location.pathname, navigate);
                      }
                    }}
                    className="text-sm text-mist-400 transition-colors hover:text-mist-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-mist-50">Services</h4>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href={service.learnMoreHref}
                    onClick={(e) => {
                      e.preventDefault();
                      goToHomeSection(
                        service.learnMoreHref,
                        location.pathname,
                        navigate
                      );
                    }}
                    className="text-sm text-mist-400 transition-colors hover:text-mist-100"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-mist-500">
            © {new Date().getFullYear()} deolustudio. All rights reserved.
          </p>
          <p className="text-xs text-mist-500">
            Designed &amp; built by deolustudio.
          </p>
        </div>
      </div>
    </footer>
  );
}
