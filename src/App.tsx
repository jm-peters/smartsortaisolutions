/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, ReactNode, useState, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { BusinessConfig } from "./types";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import LegalPage from "./components/LegalPage";
import ErrorPage from "./components/ErrorPage";
import { blogPosts } from "./data/blog";

interface ErrorBoundaryProps {
  config: BusinessConfig;
  onNavigate: (page: string) => void;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  private handleNavigate = (page: string) => {
    this.setState({ hasError: false });
    this.props.onNavigate(page);
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage config={this.props.config} type="500" onNavigate={this.handleNavigate} />;
    }

    return this.props.children;
  }
}

const DEFAULT_CONFIG: BusinessConfig = {
  brandName: "Smartsort Solutions",
  legalName: "Smartsort Solutions",
  address: "Suite 4B, OTC Plaza, Opposite KCB Bank, Moi Avenue, Nairobi",
  county: "Nairobi County",
  email: "smartsortsolutions04@gmail.com",
  phone: "+254 757706978",
  whatsappNumber: "+254 108970183",
  dailyFee: "KES 20",
  websiteUrl: "https://roastme.site"
};

const normalizePath = (path: string): string => {
  const clean = path.replace(/^\/|\/$/g, "").toLowerCase();
  if (!clean) return "home";
  if (clean === "smartsort-credit-manager/privacy" || clean === "smartsort-credit-manager-privacy" || clean === "credit-manager-privacy" || clean === "privacy/credit-manager") {
    return "privacy/credit-manager";
  }
  if (clean === "livegrid-player/privacy" || clean === "livegrid-player-privacy" || clean === "livegrid-privacy" || clean === "privacy/livegrid") {
    return "privacy/livegrid";
  }
  if (clean === "smartsort-sales-manager/privacy" || clean === "smartsort-sales-manager-privacy" || clean === "ssm-privacy" || clean === "privacy/ssm") {
    return "privacy/ssm";
  }
  if (clean === "smartsort-credit-manager/terms" || clean === "smartsort-credit-manager-terms" || clean === "credit-manager-terms" || clean === "terms/credit-manager") {
    return "terms/credit-manager";
  }
  if (clean === "livegrid-player/terms" || clean === "livegrid-player-terms" || clean === "livegrid-terms" || clean === "terms/livegrid") {
    return "terms/livegrid";
  }
  if (clean === "smartsort-sales-manager/terms" || clean === "smartsort-sales-manager-terms" || clean === "ssm-terms" || clean === "terms/ssm") {
    return "terms/ssm";
  }
  return clean;
};

const isKnownRoute = (path: string): boolean => {
  const staticRoutes = new Set([
    "home",
    "about",
    "contact",
    "pricing",
    "blog",
    "privacy",
    "terms",
    "privacy/credit-manager",
    "privacy/livegrid",
    "privacy/ssm",
    "terms/credit-manager",
    "terms/livegrid",
    "terms/ssm",
  ]);

  return staticRoutes.has(path) || blogPosts.some((post) => path === `blog/${post.id}`);
};

export default function App() {
  // Synchronize state with URL pathname on load
  const [currentPage, setCurrentPage] = useState<string>(() => {
    return normalizePath(window.location.pathname);
  });
  const [config, setConfig] = useState<BusinessConfig>(DEFAULT_CONFIG);

  // Load custom configurations on startup
  useEffect(() => {
    try {
      const stored = localStorage.getItem("smartsort_business_config");
      if (stored) {
        setConfig(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load stored business config:", e);
    }
  }, []);

  // Keep the URL and active route synchronized with native View Transition support
  const handlePageChange = (pageId: string) => {
    const changeState = () => {
      setCurrentPage(pageId);
      const newPath = pageId === "home" ? "/" : `/${pageId}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState({ page: pageId }, "", newPath);
      }
    };

    if ("startViewTransition" in document) {
      (document as any).startViewTransition(() => {
        changeState();
      });
    } else {
      changeState();
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = normalizePath(window.location.pathname);
      setCurrentPage(path);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderPage = () => {
    if (!isKnownRoute(currentPage)) {
      return <ErrorPage config={config} type="404" onNavigate={handlePageChange} />;
    }

    if (currentPage.startsWith("privacy")) {
      const product = currentPage === "privacy/credit-manager" 
        ? "credit-manager" 
        : currentPage === "privacy/livegrid" 
        ? "livegrid" 
        : currentPage === "privacy/ssm"
        ? "ssm"
        : "universal";
      return <LegalPage type="privacy" initialProduct={product} config={config} onPageChange={handlePageChange} />;
    }

    if (currentPage.startsWith("terms")) {
      const product = currentPage === "terms/credit-manager" 
        ? "credit-manager" 
        : currentPage === "terms/livegrid" 
        ? "livegrid" 
        : currentPage === "terms/ssm"
        ? "ssm"
        : "universal";
      return <LegalPage type="terms" initialProduct={product} config={config} onPageChange={handlePageChange} />;
    }

    if (currentPage.startsWith("blog")) {
      return <Blog config={config} currentPage={currentPage} onPageChange={handlePageChange} />;
    }

    switch (currentPage) {
      case "home":
        return <Home config={config} onPageChange={handlePageChange} />;
      case "about":
        return <About config={config} onPageChange={handlePageChange} />;
      case "contact":
        return <Contact config={config} />;
      case "pricing":
        return <Pricing config={config} onPageChange={handlePageChange} />;
      default:
        return <Home config={config} onPageChange={handlePageChange} />;
    }
  };

  return (
    <AppErrorBoundary config={config} onNavigate={handlePageChange}>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <div aria-hidden="true" className="site-watermark" />
          <Navigation
            config={config}
            currentPage={currentPage}
            onNavigate={handlePageChange}
          />

          <main id="main-content" tabIndex={-1} className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer
            config={config}
            onPageChange={handlePageChange}
          />
        </div>
      </MotionConfig>
    </AppErrorBoundary>
  );
}

