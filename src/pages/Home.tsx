import { useState } from "react";
import { 
  ArrowRight, Check, ShieldCheck, Zap, Clock, Coins, Database, 
  Smartphone, Play, Music, Youtube, Code, Cloud, Layers, 
  Plus, ExternalLink, ChevronRight, MessageSquare, Laptop, Grid
} from "lucide-react";
import { motion } from "motion/react";
import { BusinessConfig } from "../types";
import WhatsAppDemo from "../components/WhatsAppDemo";

interface HomeProps {
  config: BusinessConfig;
  onPageChange: (page: string) => void;
}

export default function Home({ config, onPageChange }: HomeProps) {
  const [activeProductTab, setActiveProductTab] = useState<"credit" | "livegrid" | "web">("credit");

  const companyProducts = [
    {
      id: "credit" as const,
      name: "Smartsort Credit Manager",
      tagline: "Offline-First Credit Ledger",
      description: "Kenya's premier automated credit tracking solution operating completely over WhatsApp and USSD codes. Specially designed for retailers, distributors, and wholesale merchants.",
      icon: <Database className="w-5 h-5 text-blue-600" />,
      color: "blue"
    },
    {
      id: "livegrid" as const,
      name: "LiveGrid Media Player",
      tagline: "Android Audio-Visual Center",
      description: "A gorgeous Android media companion integrating online video streams with local music storage folders in a unified, battery-optimized interface.",
      icon: <Music className="w-5 h-5 text-purple-600" />,
      color: "purple"
    },
    {
      id: "web" as const,
      name: "Custom Web Portals & APIs",
      tagline: "Enterprise Grade Systems",
      description: "Custom dashboards, automated SMS/WhatsApp alerts, and cloud database integrations constructed to solve specific corporate logistics challenges.",
      icon: <Code className="w-5 h-5 text-emerald-600" />,
      color: "emerald"
    }
  ];

  const creditFeatures = [
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      title: "WhatsApp Syncing",
      description: "Log debit/credit parameters natively on your smartphone by exchanging simple chat patterns with our WhatsApp API."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
      title: "USSD Feature Phone Menu",
      description: "No smartphone? Simply dial our custom USSD code *384*12924# from any basic phone to register credit lines instantly."
    },
    {
      icon: <Coins className="w-5 h-5 text-blue-600" />,
      title: "Daraja M-Pesa Integration",
      description: "Your clients can pay outstanding dues via Lipa na M-Pesa. Payments automatically reconcile and update your ledger balance."
    }
  ];

  const livegridFeatures = [
    {
      icon: <Youtube className="w-5 h-5 text-purple-600" />,
      title: "YouTube Player API Integration",
      description: "Stream high-fidelity online video streams and curation lists within a unified playback queue."
    },
    {
      icon: <Music className="w-5 h-5 text-purple-600" />,
      title: "Local Device Indexer",
      description: "Scans and indexes internal audio storage directory files safely using standard Google Play Console sandbox permissions."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      title: "Battery & Storage Conscious",
      description: "Optimized background wake-locks to ensure zero system battery drains during active media stream rendering."
    }
  ];

  return (
    <div className="font-sans">
      {/* Universal Corporate Hero */}
      <section className="relative bg-white pt-16 pb-20 md:py-28 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Left Intro */}
            <motion.div 
              className="lg:col-span-6 space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.05
                  }
                }
              }}
            >
              <motion.span 
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                Smartsort Solutions &bull; Multi-Product Suite
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                Simple, High-Performance Software.
              </motion.h1>
              <motion.p 
                className="text-slate-600 text-base md:text-xl leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                We build durable, reliable, and highly responsive software applications. From offline-first credit manager ledgers operating over USSD, to immersive media players, and custom cloud portals.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 pt-2"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("our-products");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-bold px-6 py-3.5 rounded-full text-sm md:text-base transition-all shadow-md hover:shadow-lg cursor-pointer border-0"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onPageChange("about")}
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-6 py-3.5 rounded-full text-sm md:text-base transition-all cursor-pointer bg-white"
                >
                  <span>About Smartsort</span>
                </button>
              </motion.div>

              {/* Stat Pillars */}
              <motion.div 
                className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 text-slate-600"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">100%</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Cloud-Synced</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">USSD & Play</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Multi-Platform</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">KDPA</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Privacy Certified</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Right Visuals */}
            <motion.div 
              className="lg:col-span-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm text-left hover:border-blue-500 transition-all cursor-pointer" 
                  onClick={() => setActiveProductTab("credit")}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Credit Manager</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">WhatsApp & USSD ledger synchronization syncing outstanding dues directly via Daraja M-Pesa API.</p>
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1 mt-4">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>

                <motion.div 
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm text-left hover:border-purple-500 transition-all cursor-pointer" 
                  onClick={() => setActiveProductTab("livegrid")}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                    <Music className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">LiveGrid Player</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Android music core fusing local audio directories and live YouTube streaming endpoints safely.</p>
                  <span className="text-xs font-bold text-purple-600 flex items-center gap-1 mt-4">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>

                <motion.div 
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm text-left hover:border-emerald-500 transition-all cursor-pointer sm:col-span-2" 
                  onClick={() => setActiveProductTab("web")}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                        <Code className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base">Bespoke Web Dashboards</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Full-stack corporate setups, automated SMS gateways, custom billing wrappers, and API sync portals.</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 shrink-0 self-end">
                      Explore setups <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Suite Deep Dive Showcase */}
      <section id="our-products" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Engineered Product Portfolios
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              A variety of software solutions
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We engineer specialized applications spanning communication platforms, local consumer play apps, and tailored business models. Click on a product below to explore its architecture and capabilities.
            </p>
          </div>

          {/* Product Toggle Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-200/50 p-1.5 rounded-2xl max-w-2xl mx-auto border border-slate-200">
            {companyProducts.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActiveProductTab(prod.id)}
                className={`flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer border-0 ${
                  activeProductTab === prod.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {prod.icon}
                <span>{prod.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-12 text-left shadow-sm">
            {activeProductTab === "credit" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    Product 01: Smartsort Credit Manager
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Keep track of credit books via WhatsApp & USSD
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Designed for wholesale suppliers and neighborhood retail merchants. Access a secured ledger from any standard mobile phone via USSD codes (<strong className="text-blue-600">*384*12924#</strong>) or instantly logging transactions on WhatsApp.
                  </p>

                  <div className="space-y-4">
                    {creditFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mt-0.5">
                          {feat.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{feat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-bold px-5 py-3 rounded-full text-xs transition-all shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                      <span>Launch WhatsApp Ledger</span>
                    </a>
                    <button
                      onClick={() => onPageChange("pricing")}
                      className="text-slate-700 hover:text-slate-900 font-bold text-xs px-4"
                    >
                      View Pricing
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-slate-50 border border-slate-200 p-4 md:p-8 rounded-3xl">
                    <div className="text-center pb-4 mb-4 border-b border-slate-200">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Interactive Simulation</span>
                      <p className="text-[11px] text-slate-500 mt-1">Try logging a mock transaction inside the WhatsApp interface below:</p>
                    </div>
                    <WhatsAppDemo />
                  </div>
                </div>
              </div>
            )}

            {activeProductTab === "livegrid" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full">
                    Product 02: LiveGrid Media Player
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Your complete Android companion for YouTube & Local audio files
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    LiveGrid is an Android audio-visual core engineered to deliver premium audio playback. By integrating localized system media folders directly with authorized YouTube streaming frameworks, users enjoy curated, uninterrupted music sessions completely lag-free.
                  </p>

                  <div className="space-y-4">
                    {livegridFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 text-purple-600 mt-0.5">
                          {feat.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{feat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => onPageChange("contact")}
                      className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-bold px-5 py-3 rounded-full text-xs transition-all shadow-sm border-0 cursor-pointer"
                    >
                      <Play className="w-4 h-4 text-purple-400" />
                      <span>Request Android Beta Link</span>
                    </button>
                    <button
                      onClick={() => onPageChange("privacy")}
                      className="text-slate-500 hover:text-slate-800 font-semibold text-xs px-4"
                    >
                      Read Play Store Privacy Terms
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {/* Decorative Device Frame */}
                  <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
                    
                    {/* Simulated Player Interface */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Grid className="w-4 h-4 text-purple-400" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">LiveGrid Audio Dashboard</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full font-bold">V1.4 Stable</span>
                      </div>

                      {/* Music Art Card */}
                      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/30">
                          LG
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-bold text-sm text-white">Unstoppable Waves</p>
                          <p className="text-xs text-slate-400">YouTube Stream API &bull; 04:12</p>
                          <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mt-2">
                            <div className="bg-purple-500 h-full w-2/3"></div>
                          </div>
                        </div>
                      </div>

                      {/* Feature Checklist */}
                      <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 bg-slate-950/40 p-4 rounded-xl">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Google Play Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Zero background battery drains</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Scans SD cards safely</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Offline MP3 support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeProductTab === "web" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                    Product 03: Custom Web Applications
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Custom web software tailored for your operational model
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We specialize in constructing secure, cloud-enabled web portals, customized API gateways, corporate reporting sheets, and business dashboard infrastructures. Our team handles everything from UX scoping to production launch.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-emerald-600" />
                        <span>Cloud Database Sync</span>
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Secured cloud database setups with real-time replication.</p>
                    </div>

                    <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <Layers className="w-4 h-4 text-emerald-600" />
                        <span>Sleek Custom APIs</span>
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Integrations with Safaricom M-Pesa, SMS dispatch providers, and standard analytical systems.</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onPageChange("contact")}
                      className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-full text-xs transition-all shadow-sm border-0 cursor-pointer"
                    >
                      <span>Request Custom System Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl relative overflow-hidden">
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                    {/* Simulated Web Dashboard Mockup */}
                    <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-xs font-bold text-slate-800">Business Sales Portal</span>
                        <span className="text-[10px] text-slate-400">Live API Link</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-slate-50 p-3 rounded-lg text-center space-y-1">
                          <p className="text-[10px] text-slate-400 uppercase font-bold">Active Connections</p>
                          <p className="text-sm font-extrabold text-slate-900">4,120</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg text-center space-y-1">
                          <p className="text-[10px] text-slate-400 uppercase font-bold">API Success</p>
                          <p className="text-sm font-extrabold text-emerald-600">99.98%</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg text-center space-y-1">
                          <p className="text-[10px] text-slate-400 uppercase font-bold">M-Pesa sync</p>
                          <p className="text-sm font-extrabold text-blue-600">Active</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Endpoint health logs</p>
                        <div className="font-mono text-[9px] text-slate-600 space-y-1">
                          <p>&gt; GET /api/v1/ledger/sync ... [200 OK]</p>
                          <p>&gt; POST /api/v1/daraja/callback ... [200 OK]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Future Roadmap - Accommodative & Complete */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Future Roadmap
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              More software solutions under active development
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Smartsort Solutions is continuously growing. We are building unified, highly automated setups to solve common business bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-left relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full uppercase">Q3 2026</span>
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">Smartsort Web Dashboard</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                An advanced web extension for our Credit Manager, enabling wholesalers to generate rich financial statements, download spreadsheet sheets, and audit ledger entries.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-left relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full uppercase">Q4 2026</span>
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">LiveGrid iOS Version</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Expanding our visual media companion to Apple iOS, featuring optimized system widgets, local audio playback scans, and seamless YouTube playlists syncing.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-left relative overflow-hidden shadow-sm">
              <span className="absolute top-4 right-4 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase">Q1 2027</span>
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">Smartsort Logistics API</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                A plug-and-play developer API allowing inventory management systems, ERP setups, and retail checkouts to auto-post ledger logs and verify transaction lines instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-82 h-82 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Deploy smart software solutions for your operations
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Whether you want to streamline outstanding business credits via WhatsApp, download the LiveGrid Media Player, or discuss bespoke enterprise dashboards.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onPageChange("contact")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-md cursor-pointer border-0"
            >
              <span>Get in Touch with our Engineers</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
            <button
              onClick={() => onPageChange("about")}
              className="flex items-center gap-1.5 text-white hover:text-blue-400 font-bold text-sm transition-colors cursor-pointer border-0 bg-transparent"
            >
              <span>See our corporate profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs text-slate-500 pt-6">
            Smartsort Solutions is a registered technology provider.
          </div>
        </div>
      </section>
    </div>
  );
}
