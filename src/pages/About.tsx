import { useState } from "react";
import { Users, Heart, ShieldCheck, MapPin, Target, ArrowRight, BookOpen, Smartphone, Hash, RefreshCcw, Send, CheckCircle } from "lucide-react";
import { BusinessConfig } from "../types";

interface AboutProps {
  config: BusinessConfig;
  onPageChange: (page: string) => void;
}

export default function About({ config, onPageChange }: AboutProps) {
  // USSD Simulator States
  const [ussdState, setUssdState] = useState<
    | "dial"
    | "main"
    | "register_name"
    | "register_success"
    | "log_customer"
    | "log_amount"
    | "log_confirm"
    | "log_success"
    | "pay_customer"
    | "pay_amount"
    | "pay_confirm"
    | "pay_success"
    | "balances"
    | "help"
  >("dial");
  const [ussdInput, setUssdInput] = useState("");
  const [ussdError, setUssdError] = useState("");
  
  // Simulated data
  const [shopName, setShopName] = useState("Mama Neri Duka");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [logAmount, setLogAmount] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [babaKamauBal, setBabaKamauBal] = useState(1200);
  const [mamaShiruBal, setMamaShiruBal] = useState(450);

  const resetSimulator = () => {
    setUssdState("dial");
    setUssdInput("");
    setUssdError("");
    setLogAmount("");
    setPayAmount("");
    setSelectedCustomer("");
  };

  const handleDial = () => {
    setUssdState("main");
  };

  const handleMainSubmit = (choice: string) => {
    const val = choice.trim();
    if (val === "1") {
      setUssdState("register_name");
      setUssdInput("");
    } else if (val === "2") {
      setUssdState("log_customer");
      setUssdInput("");
    } else if (val === "3") {
      setUssdState("pay_customer");
      setUssdInput("");
    } else if (val === "4") {
      setUssdState("balances");
    } else if (val === "5") {
      setUssdState("help");
    } else {
      setUssdError("Invalid selection. Try 1 - 5.");
    }
  };

  const values = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Radical Accessibility",
      description: "We design software that doesn't demand expensive hardware or massive data plans. If it runs WhatsApp or SMS, it runs Smartsort."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Consent-First Records",
      description: "A transaction log is only valid when both parties agree. We enforce instant confirmation notifications to eliminate customer disputes."
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Kenyan Localized Design",
      description: "We build specifically for local informal structures—dukas, mamambogas, wholesale dealers—fully aligned with Safaricom M-Pesa."
    }
  ];

  const team = [
    {
      name: "Peter Ngecu",
      role: "Co-Founder & CEO",
      bio: "Over 8 years in digital logistics and wholesale distributions. Dedicated to bringing financial security and structured ledger software to the informal merchant economy.",
      avatar: "PN"
    },
    {
      name: "Wanjiku Njoroge",
      role: "Operations & Merchant Growth",
      bio: "Formerly a retail coordinator at major East African consumer goods brands. Focuses on user-experience design and training modules for shop owners.",
      avatar: "WN"
    },
    {
      name: "Kamau Otieno",
      role: "Lead Fintech Architect",
      bio: "Expert in Safaricom Daraja integration, SMS gateway infrastructures, and scalable database synchronization. Ensures the platform runs with 99.9% uptime.",
      avatar: "KO"
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden" id="about-hero">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5 -z-10"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-700/50">
            <BookOpen className="w-3.5 h-3.5" /> Our Core Mission
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Empowering Kenyan micro- and macro-businesses with digital trust
          </h1>
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            Smartsort Solutions is a technology provider registered in Nairobi, Kenya. We build conversational software tools that bring financial clarity, automated record-keeping, and trust to micro-merchants and their clients.
          </p>
        </div>
      </section>

      {/* Story / Context Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Callout */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 text-left shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                The notebook problem
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In Kenya, billions of shillings are transacted daily on short-term retail credit. But the current ledger system—paper notebooks, school diaries, and memory—is broken. Booklets get wet, numbers are miscalculated, and customers dispute entries months later.
              </p>
              <div className="p-4 bg-blue-50 border border-blue-100/50 rounded-2xl">
                <p className="text-xs text-blue-800 leading-relaxed italic">
                  &ldquo;We realized that business owners didn't need complicated accounting software that takes weeks to learn. They just needed a digital version of their trusty notebook on an app they already use: WhatsApp.&rdquo;
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Who we are & how we operate
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Founded by a team of Kenyan logisticians and software engineers, <strong className="text-blue-600">Smartsort Solutions</strong> builds tools that integrate with existing social behaviors. By combining the WhatsApp Business API with Safaricom M-Pesa automated callbacks, we enable a shop owner to run a fully secure, synchronized credit and sales book.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Our technology works behind the scenes. When a duka owner logs a sale, we automatically format, trigger, and track the customer confirmation messages. If a dispute arises, we provide transparent timestamps and digital paper-trails to help both parties find agreement quickly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onPageChange("contact")}
                  className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                  id="about-cta-connect"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive USSD Simulator Section */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden" id="about-ussd">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-500/20">
              <Smartphone className="w-3.5 h-3.5" /> Offline-First USSD Service
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Access Ledgers Offline via USSD
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              No internet? No smartphone? No problem. Smartsort operates on any basic mobile phone across Kenya via our dedicated USSD code <code className="text-blue-400 font-mono font-bold bg-slate-900 px-1.5 py-0.5 rounded">*384*45#</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Step-by-Step Guide */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  How our USSD Service works:
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  USSD allows small businesses to interact with our ledger servers instantaneously and securely over Safaricom and Airtel cellular signals without requiring an active mobile data bundle.
                </p>
              </div>

              {/* Steps list */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono flex items-center justify-center shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dial the Smartsort code</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                      Dial <strong className="text-blue-400 font-mono">*384*45#</strong> on your phone's dialer. It takes less than 2 seconds to establish a secure ledger session.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono flex items-center justify-center shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Select your operation</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                      Register your store, log credit sales, record payments, or check outstanding ledger sheets instantly using numeric keypad choices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono flex items-center justify-center shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Automated Client Reminders</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                      Any updates you make via USSD automatically trigger instant, customized SMS confirmation messages to your customers so both of you stay fully synchronized.
                    </p>
                  </div>
                </div>
              </div>

              {/* Informational Box */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Zero-Cost Sessions:</strong> Unlike SMS billing, USSD transactions do not charge airtime or data from the customer. Any micro-merchant can perform balances or registration operations completely free.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Beautiful Interactive Numpad & Phone screen USSD Emulator */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-[40px] p-5 shadow-2xl relative ring-1 ring-white/10">
                
                {/* Smartphone Ear speaker and Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full flex items-center justify-center gap-1.5 z-20">
                  <span className="w-8 h-1 bg-slate-800 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                </div>

                {/* Smartphone Screen container */}
                <div className="bg-slate-900 rounded-[30px] overflow-hidden border border-slate-800 aspect-[9/16] p-4 flex flex-col justify-between relative mt-4 bg-gradient-to-b from-slate-900 to-slate-950">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] font-semibold text-slate-500 px-1 font-mono">
                    <span>Safcom 4G</span>
                    <span className="text-emerald-500 flex items-center gap-1">● Live Connection</span>
                    <span>100%</span>
                  </div>

                  {/* Simulator Screen Output Area */}
                  <div className="flex-1 my-4 flex items-center justify-center">
                    
                    {ussdState === "dial" && (
                      <div className="text-center space-y-6 w-full px-4">
                        <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                          <Smartphone className="w-7 h-7" />
                        </div>
                        <div className="space-y-1.5">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Dialer</h4>
                          <p className="text-2xl font-mono font-extrabold text-white tracking-wide">*384*45#</p>
                        </div>
                        <button
                          onClick={handleDial}
                          className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer border-0"
                        >
                          <Send className="w-3.5 h-3.5 rotate-45" />
                          <span>Dial USSD Code</span>
                        </button>
                        <p className="text-[10px] text-slate-500">
                          Click dial to initiate mock USSD session
                        </p>
                      </div>
                    )}

                    {ussdState !== "dial" && (
                      <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-[11px] leading-relaxed text-slate-200 shadow-xl space-y-3.5 text-left select-none relative">
                        
                        {/* USSD Modal Header bar */}
                        <div className="border-b border-slate-800/80 pb-2 flex justify-between items-center">
                          <span className="text-[10px] font-bold text-blue-400 tracking-wider">USSD SCREEN</span>
                          <button 
                            onClick={resetSimulator}
                            className="text-[9px] hover:text-white text-slate-500 flex items-center gap-1 cursor-pointer bg-transparent border-0 focus:outline-none"
                          >
                            <RefreshCcw className="w-2.5 h-2.5" /> Reset
                          </button>
                        </div>

                        {/* Screen Content Renderers */}
                        {ussdState === "main" && (
                          <div className="space-y-2">
                            <p className="text-white font-bold border-b border-slate-900 pb-1">Smartsort Ledger:</p>
                            <button onClick={() => { setUssdState("register_name"); setUssdInput(""); }} className="block w-full text-left bg-transparent border-0 hover:text-white text-blue-400 hover:bg-slate-900 py-0.5 rounded px-1 transition-all focus:outline-none cursor-pointer">1. Register New Shop</button>
                            <button onClick={() => { setUssdState("log_customer"); setUssdInput(""); }} className="block w-full text-left bg-transparent border-0 hover:text-white text-blue-400 hover:bg-slate-900 py-0.5 rounded px-1 transition-all focus:outline-none cursor-pointer">2. Log Credit Sale</button>
                            <button onClick={() => { setUssdState("pay_customer"); setUssdInput(""); }} className="block w-full text-left bg-transparent border-0 hover:text-white text-blue-400 hover:bg-slate-900 py-0.5 rounded px-1 transition-all focus:outline-none cursor-pointer">3. Record Payment</button>
                            <button onClick={() => { setUssdState("balances"); }} className="block w-full text-left bg-transparent border-0 hover:text-white text-blue-400 hover:bg-slate-900 py-0.5 rounded px-1 transition-all focus:outline-none cursor-pointer">4. View Balances</button>
                            <button onClick={() => { setUssdState("help"); }} className="block w-full text-left bg-transparent border-0 hover:text-white text-blue-400 hover:bg-slate-900 py-0.5 rounded px-1 transition-all focus:outline-none cursor-pointer">5. Help & Support</button>
                            
                            <div className="pt-2">
                              <p className="text-[9px] text-slate-500">Or type number selection below:</p>
                            </div>
                          </div>
                        )}

                        {ussdState === "register_name" && (
                          <div className="space-y-3">
                            <p className="text-white">Enter your shop name:</p>
                            <div className="grid grid-cols-2 gap-1.5 pt-1">
                              <button onClick={() => { setShopName("Mama Neri Duka"); setUssdState("register_success"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">Mama Neri Duka</button>
                              <button onClick={() => { setShopName("Kevo Wholesale"); setUssdState("register_success"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">Kevo Wholesale</button>
                            </div>
                            <p className="text-[9px] text-slate-500 mt-1">Alternatively, type a custom name in the field below.</p>
                          </div>
                        )}

                        {ussdState === "register_success" && (
                          <div className="space-y-4 text-center py-2">
                            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                            <div className="space-y-1">
                              <p className="text-white font-bold">Registration Successful!</p>
                              <p className="text-slate-400 text-[10px]">Shop Name: <strong className="text-emerald-400">{shopName}</strong></p>
                            </div>
                            <p className="text-[10px] leading-relaxed text-slate-300">
                              Your shop is now set up! You can log customer credit ledgers instantly.
                            </p>
                            <button
                              onClick={() => setUssdState("main")}
                              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold border-0 cursor-pointer transition-all focus:outline-none"
                            >
                              Go to Main Menu
                            </button>
                          </div>
                        )}

                        {ussdState === "log_customer" && (
                          <div className="space-y-3">
                            <p className="text-white">Select customer to debit:</p>
                            <div className="space-y-1.5 pt-1">
                              <button onClick={() => { setSelectedCustomer("0712345678 (Baba Kamau)"); setUssdState("log_amount"); }} className="block w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 py-1.5 px-2 rounded border border-slate-800 transition-all cursor-pointer focus:outline-none">1. Baba Kamau (0712345678)</button>
                              <button onClick={() => { setSelectedCustomer("0722998877 (Mama Shiru)"); setUssdState("log_amount"); }} className="block w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 py-1.5 px-2 rounded border border-slate-800 transition-all cursor-pointer focus:outline-none">2. Mama Shiru (0722998877)</button>
                              <button onClick={() => { setSelectedCustomer("0799887766 (New Customer)"); setUssdState("log_amount"); }} className="block w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 py-1.5 px-2 rounded border border-slate-800 transition-all cursor-pointer focus:outline-none">3. Custom / New Number</button>
                            </div>
                          </div>
                        )}

                        {ussdState === "log_amount" && (
                          <div className="space-y-3">
                            <p className="text-white">Enter credit sale amount:</p>
                            <p className="text-[10px] text-slate-400">Customer: {selectedCustomer}</p>
                            <div className="grid grid-cols-3 gap-1.5 pt-1">
                              <button onClick={() => { setLogAmount("250"); setUssdState("log_confirm"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">KES 250</button>
                              <button onClick={() => { setLogAmount("500"); setUssdState("log_confirm"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">KES 500</button>
                              <button onClick={() => { setLogAmount("1200"); setUssdState("log_confirm"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">KES 1,200</button>
                            </div>
                            <p className="text-[9px] text-slate-500">Or type custom amount in the input bar below.</p>
                          </div>
                        )}

                        {ussdState === "log_confirm" && (
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <p className="text-white font-bold">Confirm Log Credit?</p>
                              <p className="text-slate-300 text-[10px]">Merchant: <strong className="text-slate-100">{shopName}</strong></p>
                              <p className="text-slate-300 text-[10px]">Client: <strong className="text-slate-100">{selectedCustomer}</strong></p>
                              <p className="text-slate-300 text-[10px]">Amount: <strong className="text-blue-400 font-bold">KES {logAmount}</strong></p>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-relaxed">
                              An instant SMS notification request will be sent to the customer requesting confirmation.
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => {
                                  if (selectedCustomer.includes("Baba Kamau")) {
                                    setBabaKamauBal(prev => prev + parseInt(logAmount || "0"));
                                  } else {
                                    setMamaShiruBal(prev => prev + parseInt(logAmount || "0"));
                                  }
                                  setUssdState("log_success");
                                }}
                                className="py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-[10px] font-bold text-center border-0 cursor-pointer transition-all focus:outline-none"
                              >
                                1. Yes, Send
                              </button>
                              <button
                                onClick={() => setUssdState("main")}
                                className="py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold text-center border-0 cursor-pointer transition-all focus:outline-none"
                              >
                                2. Cancel
                              </button>
                            </div>
                          </div>
                        )}

                        {ussdState === "log_success" && (
                          <div className="space-y-4 text-center py-2">
                            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                            <div className="space-y-1">
                              <p className="text-white font-bold">Credit Logged!</p>
                              <p className="text-slate-300 text-[10px]">Successfully registered KES {logAmount} debit.</p>
                            </div>
                            <p className="text-[9px] text-slate-400 leading-relaxed">
                              Customer received the Smartsort automated confirmation link on their phone.
                            </p>
                            <button
                              onClick={() => setUssdState("main")}
                              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold border-0 cursor-pointer transition-all focus:outline-none"
                            >
                              Back to Main Menu
                            </button>
                          </div>
                        )}

                        {ussdState === "pay_customer" && (
                          <div className="space-y-3">
                            <p className="text-white">Record payment from:</p>
                            <div className="space-y-1.5 pt-1">
                              <button onClick={() => { setSelectedCustomer("0712345678 (Baba Kamau)"); setUssdState("pay_amount"); }} className="block w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 py-1.5 px-2 rounded border border-slate-800 transition-all cursor-pointer focus:outline-none">1. Baba Kamau (Bal: KES {babaKamauBal})</button>
                              <button onClick={() => { setSelectedCustomer("0722998877 (Mama Shiru)"); setUssdState("pay_amount"); }} className="block w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 py-1.5 px-2 rounded border border-slate-800 transition-all cursor-pointer focus:outline-none">2. Mama Shiru (Bal: KES {mamaShiruBal})</button>
                            </div>
                          </div>
                        )}

                        {ussdState === "pay_amount" && (
                          <div className="space-y-3">
                            <p className="text-white">Enter payment received:</p>
                            <p className="text-[10px] text-slate-400">Payer: {selectedCustomer}</p>
                            <div className="grid grid-cols-2 gap-1.5 pt-1">
                              <button onClick={() => { setPayAmount(selectedCustomer.includes("Baba Kamau") ? babaKamauBal.toString() : mamaShiruBal.toString()); setUssdState("pay_confirm"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">Clear Full Balance</button>
                              <button onClick={() => { setPayAmount("200"); setUssdState("pay_confirm"); }} className="bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 p-1.5 rounded border border-slate-800 text-center transition-all cursor-pointer focus:outline-none">Partial KES 200</button>
                            </div>
                            <p className="text-[9px] text-slate-500">Or type custom payment below.</p>
                          </div>
                        )}

                        {ussdState === "pay_confirm" && (
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <p className="text-white font-bold">Confirm Payment Entry?</p>
                              <p className="text-slate-300 text-[10px]">From: <strong className="text-slate-100">{selectedCustomer}</strong></p>
                              <p className="text-slate-300 text-[10px]">Payment: <strong className="text-emerald-400 font-bold">KES {payAmount}</strong></p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-2">
                              <button
                                onClick={() => {
                                  if (selectedCustomer.includes("Baba Kamau")) {
                                    setBabaKamauBal(prev => Math.max(0, prev - parseInt(payAmount || "0")));
                                  } else {
                                    setMamaShiruBal(prev => Math.max(0, prev - parseInt(payAmount || "0")));
                                  }
                                  setUssdState("pay_success");
                                }}
                                className="py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-[10px] font-bold text-center border-0 cursor-pointer transition-all focus:outline-none"
                              >
                                1. Yes, Save
                              </button>
                              <button
                                onClick={() => setUssdState("main")}
                                className="py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold text-center border-0 cursor-pointer transition-all focus:outline-none"
                              >
                                2. Cancel
                              </button>
                            </div>
                          </div>
                        )}

                        {ussdState === "pay_success" && (
                          <div className="space-y-4 text-center py-2">
                            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                            <div className="space-y-1">
                              <p className="text-white font-bold">Payment Recorded!</p>
                              <p className="text-slate-300 text-[10px]">Balance updated successfully.</p>
                            </div>
                            <button
                              onClick={() => setUssdState("main")}
                              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold border-0 cursor-pointer transition-all focus:outline-none"
                            >
                              Back to Main Menu
                            </button>
                          </div>
                        )}

                        {ussdState === "balances" && (
                          <div className="space-y-3.5">
                            <p className="text-white font-bold border-b border-slate-900 pb-1">Ledger Balances:</p>
                            <div className="space-y-1 text-[10px] text-slate-300">
                              <p className="flex justify-between"><span>Baba Kamau:</span> <span className="font-bold text-white">KES {babaKamauBal}</span></p>
                              <p className="flex justify-between"><span>Mama Shiru:</span> <span className="font-bold text-white">KES {mamaShiruBal}</span></p>
                              <div className="border-t border-slate-900 mt-1 pt-1 flex justify-between font-bold text-blue-400">
                                <span>Total Book:</span>
                                <span>KES {babaKamauBal + mamaShiruBal}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => setUssdState("main")}
                              className="w-full mt-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold border-0 cursor-pointer transition-all focus:outline-none"
                            >
                              Back to Main Menu
                            </button>
                          </div>
                        )}

                        {ussdState === "help" && (
                          <div className="space-y-3 text-[10px] text-slate-300">
                            <p className="text-white font-bold border-b border-slate-900 pb-1">Smartsort Help & Info:</p>
                            <p>● Platform Base Fee: {config.dailyFee} daily</p>
                            <p>● Live Hotline: {config.phone}</p>
                            <p>● Email Contact: {config.email}</p>
                            <p className="text-slate-400 leading-relaxed mt-2">
                              Your records are continuously fully backed up securely in cloud storage.
                            </p>
                            <button
                              onClick={() => setUssdState("main")}
                              className="w-full mt-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-bold border-0 cursor-pointer transition-all focus:outline-none"
                            >
                              Back to Main Menu
                            </button>
                          </div>
                        )}

                        {/* Interactive Input Form for Simulated Typing */}
                        {["main", "register_name", "log_amount", "pay_amount"].includes(ussdState) && (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              setUssdError("");
                              const trimmed = ussdInput.trim();
                              if (!trimmed) return;
                              
                              if (ussdState === "main") {
                                handleMainSubmit(trimmed);
                              } else if (ussdState === "register_name") {
                                setShopName(trimmed);
                                setUssdState("register_success");
                              } else if (ussdState === "log_amount") {
                                if (isNaN(Number(trimmed))) {
                                  setUssdError("Please enter numbers only.");
                                } else {
                                  setLogAmount(trimmed);
                                  setUssdState("log_confirm");
                                }
                              } else if (ussdState === "pay_amount") {
                                if (isNaN(Number(trimmed))) {
                                  setUssdError("Please enter numbers only.");
                                } else {
                                  setPayAmount(trimmed);
                                  setUssdState("pay_confirm");
                                }
                              }
                              setUssdInput("");
                            }}
                            className="border-t border-slate-900 pt-3 space-y-2 mt-2"
                          >
                            <div className="flex gap-1.5">
                              <input
                                type="text"
                                value={ussdInput}
                                onChange={(e) => {
                                  setUssdInput(e.target.value);
                                  setUssdError("");
                                }}
                                placeholder="Type response..."
                                className="flex-1 bg-slate-900 border border-slate-800 text-slate-200 text-[10px] px-2 py-1.5 rounded focus:outline-none focus:border-blue-500 font-mono"
                              />
                              <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded text-[10px] cursor-pointer transition-all shrink-0 border-0"
                              >
                                Send
                              </button>
                            </div>
                            {ussdError && (
                              <p className="text-[9px] text-rose-500">{ussdError}</p>
                            )}
                          </form>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Navigation Home Indicator Bar on Phone screen */}
                  <div className="flex justify-center pb-1">
                    <span className="w-24 h-1 bg-slate-800 rounded-full"></span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200" id="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              What Guides Us
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our commitment to merchants
            </h2>
            <p className="text-slate-600 text-sm">
              We operate under strict ethical data rules, helping small businesses grow while protecting individual consumer privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 text-left space-y-4 shadow-sm">
                <div className="p-3 bg-blue-50 rounded-xl inline-block text-blue-700 shadow-xs">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Meet The Founders
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Smartsort Leadership Team
            </h2>
            <p className="text-slate-600 text-sm">
              An experienced group of technology and retail professionals based in Nairobi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-slate-50/50 border border-slate-200 rounded-3xl p-6 text-left flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center font-bold text-lg font-mono">
                    {member.avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                    <p className="text-xs text-blue-600 font-semibold">{member.role}</p>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location/County CTA info card */}
      <section className="py-12 bg-blue-50/10 border-b border-slate-200 text-center" id="about-location">
        <div className="max-w-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Nairobi HQ: {config.address}, {config.county}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
