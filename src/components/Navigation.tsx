import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { BusinessConfig } from "../types";

interface NavigationProps {
  config: BusinessConfig;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ config, currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, page: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (isOpen) mobileMenuButtonRef.current?.focus();
    setIsOpen(false);
    onNavigate(page);
  };

  const isCurrentPage = (page: string) =>
    currentPage === page || (page === "blog" && currentPage.startsWith("blog/"));

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      aria-label="Primary navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      }}
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Name */}
          <a
            href="/"
            onClick={(event) => handleNavigation(event, "home")}
            className="flex items-center gap-3 cursor-pointer"
            id="nav-logo"
          >
            <img src="/smartsort-mark.svg" alt={config.legalName} className="w-9 h-9 object-contain" />
            <div className="text-left">
              <span className="font-extrabold text-slate-900 text-base tracking-tight block leading-tight">
                Smart<span className="text-blue-600">sort</span> <span className="text-emerald-600">Solutions</span>
              </span>
              <span className="text-[9px] text-slate-500 font-medium block leading-tight">
                the solution your business needs
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id === "home" ? "/" : `/${item.id}`}
                  onClick={(event) => handleNavigation(event, item.id)}
                  aria-current={isCurrentPage(item.id) ? "page" : undefined}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isCurrentPage(item.id)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Support Call-to-action button */}
            <a
              href="/contact"
              onClick={(event) => handleNavigation(event, "contact")}
              className="flex items-center gap-2 bg-brand-600 text-white hover:bg-brand-700 font-semibold px-5 py-2 rounded-control text-sm transition-colors shadow-soft cursor-pointer border-0"
              id="nav-cta-whatsapp"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="text-slate-600 hover:text-slate-900 p-2 rounded-control"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className={`md:hidden border-t border-slate-200 bg-white shadow-xl absolute top-16 left-0 right-0 py-4 px-6 space-y-4 ${isOpen ? "animate-slide-in" : ""}`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id === "home" ? "/" : `/${item.id}`}
              onClick={(event) => handleNavigation(event, item.id)}
              aria-current={isCurrentPage(item.id) ? "page" : undefined}
              className={`text-left text-base font-semibold py-3 transition-colors ${
                isCurrentPage(item.id)
                  ? "text-blue-600 border-l-2 border-blue-600 pl-2"
                  : "text-slate-600 hover:text-blue-600 pl-2"
              }`}
              id={`mobile-nav-item-${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="pt-4 border-t border-slate-200">
          <a
            href="/contact"
            onClick={(event) => handleNavigation(event, "contact")}
            className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white hover:bg-brand-700 font-semibold px-4 py-3 rounded-control text-sm transition-colors shadow-soft border-0 cursor-pointer"
            id="mobile-nav-cta"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
