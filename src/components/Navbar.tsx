import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navigation";
import { goToHomeSection } from "../utils/scrollTo";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: (typeof navLinks)[number]) => {
    setIsMenuOpen(false);
    if (link.type === "route") {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      goToHomeSection(link.href, location.pathname, navigate);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    goToHomeSection("#home", location.pathname, navigate);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-ink-950/85 backdrop-blur-lg border-b border-white/[0.06]"
          : "bg-gradient-to-b from-ink-950/70 to-transparent"
      }`}
    >
      <nav
        className="container-page flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleLogoClick();
          }}
          className="flex items-center gap-2.5"
        >
          <img src={logo} alt="deolustudio" className="h-9 w-9 rounded-lg" />
          <span className="font-display text-lg font-semibold tracking-tight text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            deolustudio
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
                className="text-sm font-medium text-mist-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goToHomeSection("#contact", location.pathname, navigate);
            }}
            className="btn-primary !px-5 !py-2.5 !text-[13px]"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-lg lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-mist-300 hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  goToHomeSection("#contact", location.pathname, navigate);
                }}
                className="btn-primary w-full"
              >
                Start a Project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
