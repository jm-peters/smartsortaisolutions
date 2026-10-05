import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Shield, Scroll, Check, Loader2, DollarSign } from "lucide-react";
import { BusinessConfig } from "../types";
import { subscribeToNewsletter } from "../lib/firebase";

interface FooterProps {
  config: BusinessConfig;
  onPageChange: (page: string) => void;
}

export default function Footer({ config, onPageChange }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePageClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      await subscribeToNewsletter(email);
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Subscription failed. Please try again later.");
    }
  };

  return (
    <footer className="bg-slate-900 text-white font-sans border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand/About Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/smartsort-mark.svg" alt="SmartSort Solutions" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block leading-tight">
                  Smart<span className="text-blue-400">sort</span> <span className="text-emerald-400">Solutions</span>
                </span>
                <span className="text-[10px] text-slate-400 block leading-tight">
                  the solution your business needs
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We build simple, high-performance software systems and tailored digital tools. Our product suite includes the offline-first <strong className="text-blue-400">Smartsort Credit Manager</strong>, the <strong className="text-blue-400">LiveGrid Media Player</strong>, and <a href="https://ssm.roastme.site/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">SmartSort Sales Manager (SSM)</a>, an externally built phone POS for small shops in Kenya, alongside custom enterprise web portals.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Contact & Support
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong>{config.legalName}</strong>
                  <br />
                  {config.address}
                  <br />
                  {config.county}, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-white transition-colors">
                  {config.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`tel:${config.phone}`} className="hover:text-white transition-colors">
                  {config.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Legal & Information
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <button
                onClick={() => handlePageClick("privacy")}
                className="text-left hover:text-white transition-colors flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <Shield className="w-4 h-4 text-blue-500" />
                Privacy Policy
              </button>
              <button
                onClick={() => handlePageClick("terms")}
                className="text-left hover:text-white transition-colors flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <Scroll className="w-4 h-4 text-blue-500" />
                Terms of Service
              </button>
              <button
                onClick={() => handlePageClick("pricing")}
                className="text-left hover:text-white transition-colors flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <DollarSign className="w-4 h-4 text-blue-500" />
                Pricing Plans
              </button>
              <button
                onClick={() => handlePageClick("contact")}
                className="text-left hover:text-white transition-colors flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                Contact Us
              </button>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-800">
              Some products are operated by external providers. Review each product's information and terms before use.
            </p>
          </div>

          {/* Newsletter/Updates Col */}
          <div className="space-y-4" id="newsletter-col">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Service Updates
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to receive notifications about system upgrades, outstanding ledger compliance guidelines, and M-Pesa integration updates.
            </p>
            
            {status === "success" ? (
              <div role="status" aria-live="polite" className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-xs space-y-1 text-slate-300">
                <p className="font-semibold text-blue-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Subscription Active
                </p>
                <p>Your business email has been registered successfully for ledger service updates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <label htmlFor="newsletter-email" className="sr-only">Email address for service updates</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    autoComplete="email"
                    aria-invalid={status === "error"}
                    aria-describedby={status === "error" ? "newsletter-error" : undefined}
                    disabled={status === "submitting"}
                    className="form-control w-full bg-slate-800 border-slate-700 text-white placeholder-slate-500 px-3.5 pr-10 text-base sm:text-sm disabled:opacity-50"
                    required
                  />
                  <Mail className="absolute right-3 top-3 w-4 h-4 text-slate-500" />
                </div>
                
                {status === "error" && (
                  <p id="newsletter-error" role="alert" className="text-[11px] text-red-400 font-medium">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm disabled:bg-blue-800 disabled:opacity-75 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Subscribe to Updates</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {config.legalName}. All rights reserved. Reg. in Kenya.
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handlePageClick("privacy")}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => handlePageClick("terms")}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
