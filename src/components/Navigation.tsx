import { useState } from "react";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { BusinessConfig } from "../types";

interface NavigationProps {
  config: BusinessConfig;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ config, currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer focus:outline-none"
            id="nav-logo"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <div className="text-left">
              <span className="font-bold text-slate-900 text-lg tracking-tight block">
                {config.legalName.split(" ")[0]} <span className="text-blue-600">{config.legalName.split(" ").slice(1).join(" ")}</span>
              </span>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block leading-none">
                {config.brandName}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    currentPage === item.id
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Support Call-to-action button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-semibold px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg cursor-pointer border-0"
              id="nav-cta-whatsapp"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl absolute top-16 left-0 right-0 py-4 px-6 space-y-4 animate-slide-in">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-semibold py-2 transition-colors ${
                  currentPage === item.id
                    ? "text-blue-600 border-l-2 border-blue-600 pl-2"
                    : "text-slate-600 hover:text-blue-600 pl-2"
                }`}
                id={`mobile-nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-semibold px-4 py-3 rounded-full text-sm transition-all shadow-md border-0 cursor-pointer"
              id="mobile-nav-cta"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
