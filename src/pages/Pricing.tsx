import { useState } from "react";
import { Check, Info, ArrowRight, MessageSquare, HelpCircle, Calculator, Smartphone, Music, Code, ShieldCheck, Mail } from "lucide-react";
import { BusinessConfig } from "../types";

interface PricingProps {
  config: BusinessConfig;
  onPageChange: (page: string) => void;
}

export default function Pricing({ config, onPageChange }: PricingProps) {
  const [customerCount, setCustomerCount] = useState<number>(5);
  const [activeTab, setActiveTab] = useState<"credit" | "livegrid" | "web">("credit");
  const [creditSubTab, setCreditSubTab] = useState<"packages" | "calculator">("packages");

  const packages = [
    {
      name: "Micro-Businesses",
      description: "Optimized for small-scale merchants, local vendors, and independent sellers.",
      prices: {
        daily: "KES 20",
        weekly: "KES 120",
        monthly: "KES 420",
      },
      features: [
        "Up to 10 active customers",
        "WhatsApp transaction logging",
        "Automated confirmation alerts",
        "Lipa na M-Pesa tracking",
        "Standard digital receipts",
      ],
      highlighted: false,
    },
    {
      name: "Retailers",
      description: "Designed for established retail shops, general stores, and family businesses.",
      prices: {
        daily: "KES 30",
        weekly: "KES 180",
        monthly: "KES 520",
      },
      features: [
        "Up to 50 active customers",
        "Priority WhatsApp processing",
        "Custom scheduled reminders",
        "Lipa na M-Pesa Daraja matching",
        "Exportable PDF ledgers",
        "Multiple operator support",
      ],
      highlighted: true,
    },
    {
      name: "Wholesalers",
      description: "Tailored for high-volume distributors, suppliers, and large-scale operators.",
      prices: {
        daily: "KES 50",
        weekly: "KES 300",
        monthly: "KES 800",
      },
      features: [
        "Unlimited active customers",
        "Dedicated WhatsApp channel support",
        "Automated bulk reminders",
        "Multi-till Daraja API integration",
        "Excel & CSV data exports",
        "Direct API ledger access",
      ],
      highlighted: false,
    },
  ];

  // Logic to determine recommended plan based on customer threshold input
  const getRecommendation = (count: number) => {
    if (count <= 10) {
      return {
        tier: "Micro-Businesses Plan",
        rate: "KES 20 Daily",
        details: "Ideal for handling small customer circles with simplified payment confirmations.",
      };
    } else if (count <= 50) {
      return {
        tier: "Retailers Plan",
        rate: "KES 30 Daily",
        details: "Optimized for retail businesses requiring steady customer reconciliation (up to 50 active accounts).",
      };
    } else {
      return {
        tier: "Wholesalers Plan",
        rate: "KES 50 Daily / 800 Monthly",
        details: "Businesses managing massive lists require dedicated high-throughput multi-channel capabilities.",
      };
    }
  };

  const recommendation = getRecommendation(customerCount);

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
            Pricing & Models
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent pricing for every software solution
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Explore pricing structures across our product portfolio—from micro-credit ledgers, to the free LiveGrid Android app, and enterprise dashboard consultations.
          </p>
        </div>

        {/* Global Product Tabs */}
        <div className="flex justify-center">
          <div className="bg-slate-200/60 p-1.5 rounded-2xl flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab("credit")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                activeTab === "credit"
                  ? "bg-white text-slate-900 shadow-sm animate-fade-in"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>Smartsort Credit Manager</span>
            </button>
            <button
              onClick={() => setActiveTab("livegrid")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                activeTab === "livegrid"
                  ? "bg-white text-purple-900 shadow-sm animate-fade-in"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Music className="w-3.5 h-3.5 text-purple-600" />
              <span>LiveGrid Media Player</span>
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                activeTab === "web"
                  ? "bg-white text-emerald-900 shadow-sm animate-fade-in"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code className="w-3.5 h-3.5 text-emerald-600" />
              <span>Custom Web Portals</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panels */}
        {activeTab === "credit" && (
          <div className="space-y-10">
            {/* Credit Manager Sub Navigation */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCreditSubTab("packages")}
                className={`text-xs font-bold border-b-2 pb-1.5 cursor-pointer border-0 ${
                  creditSubTab === "packages" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Subscription Packages
              </button>
              <button
                onClick={() => setCreditSubTab("calculator")}
                className={`text-xs font-bold border-b-2 pb-1.5 cursor-pointer border-0 ${
                  creditSubTab === "calculator" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Volume Calculator
              </button>
            </div>

            {creditSubTab === "packages" ? (
              /* Package Grid */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-3xl bg-white border p-8 flex flex-col justify-between transition-all duration-300 ${
                      pkg.highlighted
                        ? "border-blue-500 shadow-lg lg:-translate-y-2 ring-1 ring-blue-500/15"
                        : "border-slate-200 shadow-sm hover:border-slate-300"
                    }`}
                  >
                    {pkg.highlighted && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                        Recommended
                      </span>
                    )}

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed h-10">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Price breakdown */}
                      <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl space-y-2.5">
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs text-slate-500 font-medium">Daily billing</span>
                          <span className="text-lg font-bold text-slate-900">{pkg.prices.daily}</span>
                        </div>
                        <div className="flex items-baseline justify-between border-t border-slate-200/50 pt-2">
                          <span className="text-xs text-slate-500 font-medium">Weekly billing</span>
                          <span className="text-sm font-semibold text-slate-700">{pkg.prices.weekly}</span>
                        </div>
                        <div className="flex items-baseline justify-between border-t border-slate-200/50 pt-2">
                          <span className="text-xs text-slate-500 font-medium">Monthly billing</span>
                          <span className="text-sm font-semibold text-slate-700">{pkg.prices.monthly}</span>
                        </div>
                      </div>

                      {/* Features list */}
                      <div className="space-y-3.5 pt-2">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Included features:
                        </p>
                        <ul className="space-y-3">
                          {pkg.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8">
                      <a
                        href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello, I am interested in the ${pkg.name} Credit Manager package.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          pkg.highlighted
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                            : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Activate {pkg.name}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Interactive Volume Slider Calculator */
              <div className="max-w-4xl mx-auto space-y-10">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  <div className="space-y-3 pr-4 md:border-r border-slate-200">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Info className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Volume Limits</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      To keep systems predictable, active rates scale with the total number of customer accounts you actively manage in your database.
                    </p>
                  </div>

                  <div className="col-span-2 flex flex-col justify-center space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">0 - 10 Customers</p>
                        <p className="text-xl font-bold text-slate-900 mt-1">KES 20 / Day</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Micro Tier</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">11 - 50 Customers</p>
                        <p className="text-xl font-bold text-slate-900 mt-1">KES 30 / Day</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Retailer Tier</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">51+ Customers</p>
                        <p className="text-xl font-bold text-slate-900 mt-1">KES 50 / Day</p>
                        <p className="text-[10px] text-slate-500 mt-1">Wholesale Tier</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-blue-600" />
                        Interactive Rate Estimator
                      </h3>
                      <p className="text-xs text-slate-500">
                        Adjust the slider to match your current customer base size to find the recommended package.
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Volume</span>
                      <p className="text-2xl font-black text-slate-900">{customerCount} Active Customers</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={customerCount}
                      onChange={(e) => setCustomerCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                      <span>1 Customer</span>
                      <span>10 Customers</span>
                      <span>50 Customers</span>
                      <span>100+ Customers</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-md">
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
                        Recommended Setup
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">{recommendation.tier}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {recommendation.details}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-end space-y-3 min-w-[200px] md:border-l border-slate-200 md:pl-6">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Cost</span>
                        <p className="text-3xl font-black text-blue-600 leading-none mt-1">{recommendation.rate}</p>
                      </div>
                      
                      <a
                        href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello, I calculated my volume as ${customerCount} active customers on the slider.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-sm"
                      >
                        <span>Activate Setup</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "livegrid" && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Android Play Store Model
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Free-to-Download with Premium Upgrade
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The LiveGrid Media Player core experience is completely free to download from the Google Play Store. Enjoy local music folder scanning and seamless YouTube streams without paying a cent.
                </p>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Free local MP3 storage organizer</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Free YouTube Player API integrations</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Free background playlist rendering</span>
                  </div>
                </div>
              </div>

              {/* Pro Upgrade Card */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-extrabold text-lg text-white">LiveGrid PRO Upgrade</h3>
                    <p className="text-xs text-slate-400 mt-1">One-time in-app purchase</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-black text-purple-400">KES 250</p>
                    <span className="text-xs text-slate-400 font-medium">/ One-time fee</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>100% Ad-Free interface rendering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>Custom audio playback equalizer presets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>Pro sleep timers & background wake-locks</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => onPageChange("contact")}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md transition-all border-0 cursor-pointer"
                  >
                    Request Play Store Beta Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "web" && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 animate-fade-in">
            <div className="text-center space-y-4 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Custom Enterprise Architecture
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Quote-Based Software Projects
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                We engineer customized corporate systems, dedicated API sync ports, dynamic WhatsApp business bots, and specialized merchant dashboards. All enterprise systems feature 24/7 technical operations SLAs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Dashboard Integrations</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Custom cloud hosting setups, analytical dashboards, multi-till M-Pesa aggregations, and user privilege levels.</p>
                <p className="text-xs font-bold text-emerald-600 pt-2">Scoping consult: Free of charge</p>
              </div>

              <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Automated Messaging APIs</h4>
                <p className="text-xs text-slate-500 leading-relaxed">High-volume transactional SMS gateways, USSD code setups, and official Meta WhatsApp API integrations.</p>
                <p className="text-xs font-bold text-emerald-600 pt-2">Scoping consult: Free of charge</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
              <div className="space-y-1">
                <h4 className="font-bold text-base text-white">Need a bespoke software solution?</h4>
                <p className="text-xs text-slate-400">Speak directly with our system engineers to structure a dynamic quote.</p>
              </div>
              <button
                onClick={() => onPageChange("contact")}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all border-0 cursor-pointer shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Engineering Team</span>
              </button>
            </div>
          </div>
        )}

        {/* Informational FAQ Footer */}
        <div className="max-w-3xl mx-auto space-y-6 pt-8 border-t border-slate-200">
          <h3 className="text-base font-bold text-slate-900 text-center uppercase tracking-wider">
            Pricing & Product FAQs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">How is Credit Manager billing collected?</h4>
              <p className="leading-relaxed">
                All ledger subscriptions are collected seamlessly via Safaricom Lipa na M-Pesa. Standard plans can be set to automatic daily, weekly, or monthly intervals.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">Is LiveGrid Media Player safe for my device storage?</h4>
              <p className="leading-relaxed">
                Completely. Scans are governed strictly inside local app sandbox environments. Playback files are processed locally on the memory card and are never uploaded.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">What is the cost of scheduling web consulting?</h4>
              <p className="leading-relaxed">
                Initial operational consultations and project documentation architecture diagrams are structured completely free of charge.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">Can I request refunds on Play Store upgrades?</h4>
              <p className="leading-relaxed">
                All LiveGrid Pro in-app upgrades are processed under official Google Play Store Billing policies, which support standard 48-hour automated refund triggers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
