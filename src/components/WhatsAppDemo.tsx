import { useState, useEffect, useRef } from "react";
import { MessageSquare, CheckCheck, Send, ShoppingBag, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  sender: "user" | "bot" | "customer";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  isInteractive?: boolean;
  options?: string[];
  selectedOption?: string;
}

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "bot",
      text: "Welcome to Smartsort Ledger. Log credit, check balances, or reconcile M-Pesa. To log credit, just text: [Customer Name] [Amount] [Item Description].",
      time: "10:15 AM",
      status: "read",
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presets = [
    { label: "Log KES 1,200 for Papa Kibaki", text: "Papa Kibaki 1200 maize meal and sugar" },
    { label: "Check unpaid balances", text: "balances" },
    { label: "Log M-Pesa KES 450 payment", text: "MPESA QTX72HG6Y Mama Mboga 450" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const newMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "read"
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot reply
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      let options: string[] = [];
      let isInteractive = false;

      const lower = textToSend.toLowerCase();
      if (lower.includes("papa kibaki")) {
        replyText = "Ledger logged. A confirmation request has been sent to Papa Kibaki (+254 712 *** 890) for KES 1,200. You will be notified upon confirmation.";
        
        // Trigger customer side response after 3 seconds
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: `cust-notif-${Date.now()}`,
              sender: "bot",
              text: "[To Papa Kibaki]: Mama Neri has logged a credit sale of KES 1,200 (maize meal and sugar). Do you confirm this transaction?",
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              isInteractive: true,
              options: ["Confirm Amount", "Dispute Amount"]
            }
          ]);
        }, 2000);

      } else if (lower.includes("balances")) {
        replyText = "*Smartsort Active Balances Summary*\n\n1. *Papa Kibaki*: KES 3,400 (Last updated: Today)\n2. *Mama Mboga*: KES 850 (Last updated: Yesterday)\n3. *Baba Jomo*: KES 1,500 (Last updated: 3 days ago)\n\nTotal credit outstanding: *KES 5,750*. Reply with the customer's name to send a manual WhatsApp reminder.";
      } else if (lower.includes("mpesa") || lower.includes("qtx")) {
        replyText = "*Payment Reconciled.* M-Pesa reference QTX72HG6Y confirmed. Received KES 450 from Mama Mboga. Her outstanding balance has been reduced from KES 850 to *KES 400*. SMS receipt sent to customer.";
      } else {
        replyText = `Record registered. Action logged: "${textToSend}". Recorded in ledger sheet; customer notified. Text "balances" to see outstanding debt.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: "read",
          isInteractive,
          options
        }
      ]);
    }, 1500);
  };

  const handleOptionClick = (msgId: string, option: string) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === msgId ? { ...m, selectedOption: option } : m
      )
    );

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const isConfirm = option.includes("Confirm");
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-cust-resp-${Date.now()}`,
          sender: "bot",
          text: isConfirm
            ? "*Papa Kibaki confirmed.* The transaction is marked CONFIRMED. Your ledger has been updated, and credit-building metrics have been logged securely."
            : "*Dispute logged.* Papa Kibaki declined. Transaction marked DISPUTED. Please reach out to Papa Kibaki to reconcile, or text the corrected amount.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-stretch font-sans" id="whatsapp-demo-container">
      {/* Interactive Controls Column */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Live WhatsApp Simulator
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Try it yourself in real-time
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Click any of the quick-actions below to simulate texting our automated ledger, or type your own custom transaction. Watch how the customer confirmation and M-Pesa engines operate.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="space-y-2.5">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Quick Actions (Click to text)
          </p>
          <div className="grid grid-cols-1 gap-2">
            {presets.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(p.text)}
                className="w-full text-left bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/20 px-4 py-3 rounded-xl text-sm font-medium text-slate-800 transition-all flex items-center justify-between shadow-xs hover:shadow-md cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    {i + 1}
                  </span>
                  {p.label}
                </span>
                <span className="text-blue-600 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Send &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Info card */}
        <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex gap-3.5 items-start">
          <div className="p-2.5 bg-blue-50 rounded-xl text-blue-700">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">100% Conversational Ledger</h4>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              No apps for you or your customer to download. Works via standard WhatsApp and SMS, meaning it runs perfectly even on budget feature phones.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Interface Column */}
      <div className="flex-1 max-w-sm mx-auto w-full border border-slate-200 bg-slate-100 rounded-[2.5rem] p-3.5 shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]">
        {/* Notch / Speaker */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-12 h-1 bg-slate-800 rounded-full mb-1"></div>
        </div>

        {/* Inside Screen Container */}
        <div className="flex-1 bg-slate-50/30 rounded-[2rem] overflow-hidden flex flex-col relative pt-5 border border-slate-200">
          {/* WhatsApp Header */}
          <div className="bg-slate-900 text-white px-4 py-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
              SL
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                Smartsort Ledger
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-slate-400">Official Business Account</div>
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-100/30"></span>
              <span className="w-2 h-2 rounded-full bg-slate-100/30"></span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col text-xs scrollbar-thin">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`max-w-[85%] rounded-2xl p-3 shadow-xs relative ${
                    m.sender === "user"
                      ? "bg-blue-100 text-slate-800 rounded-tr-none self-end"
                      : m.sender === "customer"
                      ? "bg-slate-100 text-slate-800 rounded-tl-none self-start"
                      : "bg-white text-slate-800 rounded-tl-none self-start"
                  }`}
                >
                  {/* Message body */}
                  <div className="whitespace-pre-line leading-relaxed">{m.text}</div>
                  
                  {/* Interactive Button Selection inside Mock Chat */}
                  {m.isInteractive && m.options && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          disabled={!!m.selectedOption}
                          type="button"
                          onClick={() => handleOptionClick(m.id, opt)}
                          className={`w-full text-center py-1.5 px-3 rounded-lg border font-medium text-[11px] transition-all cursor-pointer ${
                            m.selectedOption === opt
                              ? "bg-blue-600 text-white border-blue-600"
                              : m.selectedOption
                              ? "bg-slate-50 text-slate-400 border-slate-100"
                              : opt.includes("Confirm")
                              ? "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                              : "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Message timestamp & ticks */}
                  <div className="text-[9px] text-slate-400 mt-1 flex items-center justify-end gap-1 font-mono">
                    {m.time}
                    {m.sender === "user" && (
                      <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white text-slate-500 rounded-2xl rounded-tl-none p-3 shadow-xs self-start max-w-[60px]"
                >
                  <div className="flex gap-1 items-center justify-center py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-150"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-300"></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp Footer Input bar */}
          <div className="bg-slate-50/95 p-2 flex gap-2 items-center border-t border-slate-100">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend(inputValue);
              }}
              placeholder="Type message..."
              className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-blue-600"
            />
            <button
              onClick={() => handleSend(inputValue)}
              disabled={!inputValue.trim()}
              type="button"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-white transition-colors disabled:bg-slate-300 disabled:text-slate-400"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
