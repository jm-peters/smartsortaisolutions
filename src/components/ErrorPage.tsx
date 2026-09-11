import { AlertTriangle, ArrowLeft, Home, LifeBuoy, RefreshCcw } from "lucide-react";
import { BusinessConfig } from "../types";

interface ErrorPageProps {
  config: BusinessConfig;
  type: "404" | "500";
  onNavigate: (page: string) => void;
}

export default function ErrorPage({ config, type, onNavigate }: ErrorPageProps) {
  const isNotFound = type === "404";
  const title = isNotFound ? "That page took a wrong turn." : "Something needs a quick reset.";
  const description = isNotFound
    ? "The page you are looking for may have moved, expired, or never existed."
    : "Our application hit an unexpected problem. Please try again, or return to the homepage while we get things back in order.";

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-cyan-400/20" />
      <div className="absolute -right-10 top-30 h-56 w-56 rounded-full border border-cyan-400/10" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-[2rem] border border-slate-700 bg-slate-900/80 shadow-2xl shadow-cyan-950/30 sm:h-64 sm:w-64">
            <div className="absolute inset-5 rounded-[1.5rem] border border-cyan-400/20" />
            <span className="font-mono text-7xl font-semibold tracking-[-0.08em] text-cyan-300 sm:text-8xl">
              {type}
            </span>
            <span className="absolute -bottom-3 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
              {isNotFound ? "signal lost" : "service pause"}
            </span>
          </div>
        </div>

        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            {isNotFound ? <AlertTriangle className="h-3.5 w-3.5" /> : <LifeBuoy className="h-3.5 w-3.5" />}
            {config.brandName} support signal
          </div>
          <h1 className="max-w-lg text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              <Home className="h-4 w-4" />
              Return home
            </button>
            {isNotFound ? (
              <button
                type="button"
                onClick={() => window.history.length > 1 ? window.history.back() : onNavigate("home")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-slate-500 hover:bg-slate-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Go back
              </button>
            ) : (
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-slate-500 hover:bg-slate-900"
              >
                <RefreshCcw className="h-4 w-4" />
                Try again
              </button>
            )}
          </div>
          <p className="pt-2 text-xs text-slate-500">
            Need help? <a className="font-semibold text-cyan-300 hover:text-cyan-200" href={`mailto:${config.email}`}>{config.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
