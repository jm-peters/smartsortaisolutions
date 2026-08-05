import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Share2, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  FileText,
  TrendingUp,
  MessageSquare,
  Smartphone
} from "lucide-react";
import { BlogPost, BusinessConfig } from "../types";
import { blogPosts } from "../data/blog";

interface BlogProps {
  config: BusinessConfig;
  currentPage?: string;
  onPageChange?: (pageId: string) => void;
}

export default function Blog({ config, currentPage, onPageChange }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ["All", "Business Growth", "Finance & Payments", "Legal & Compliance"];

  // Popular long-tail search intent phrases for SEO value & user ease
  const seoShortcuts = [
    { label: "Track Debt on WhatsApp", value: "track customer debt on WhatsApp" },
    { label: "Pochi vs Buy Goods", value: "pochi la biashara vs buy goods till" },
    { label: "M-Pesa Reconciliation", value: "automate lipa na mpesa till reconciliation" },
    { label: "Data Protection Act Kenya", value: "kenya data protection act" }
  ];

  // Visual FAQs with high-intent long-tail keywords in questions and rich answers
  const visualFaqs = [
    {
      q: "How can I track customer debts on WhatsApp in Kenya without using paper notebooks?",
      a: "Tracking customer debt on WhatsApp is simple with digital ledger platforms like Smartsort. Instead of writing credit entries in a physical counter-book, you record transactions in your ledger, and our system automatically sends a secure, itemized WhatsApp transaction confirmation message to your customer. The client can confirm their balance instantly, creating a transparent digital paper trail with zero friction.",
      keywords: ["track customer debt on WhatsApp", "digital ledger book for retail shopkeepers", "counter-book alternative"]
    },
    {
      q: "What is the difference between Safaricom Pochi la Biashara and a Buy Goods Till for a retail kiosk?",
      a: "Safaricom's Buy Goods Till (the merchant Till Number) is a formal corporate till where customers pay zero transaction fees to buy items, making it ideal for retail shops. Safaricom Pochi la Biashara allows small kiosk owners, food vendors, and boda-boda riders to separate their business cash from personal mobile money on a single SIM card. Both setups can be integrated with digital credit trackers to automate ledger reconciliations.",
      keywords: ["safaricom pochi la biashara vs buy goods till", "mpesa business till for retail shops"]
    },
    {
      q: "Does the Kenya Data Protection Act 2019 apply to local retail shops and kiosks?",
      a: "Yes, under the Kenya Data Protection Act 2019, any retail business, wholesale supplier, or kiosk that collects and stores client phone numbers and credit histories is legally a 'data controller'. Shopkeepers must obtain explicit customer consent before logging their debt, keep customer contact details completely confidential from third parties, and respect their legal right to deletion.",
      keywords: ["kenya data protection act requirements for small businesses", "compliance guide for retail shopkeepers in kenya"]
    },
    {
      q: "How do I automate Lipa na M-Pesa till statement reconciliation with my ledger?",
      a: "You can fully automate Lipa na M-Pesa till reconciliation by connecting your merchant paybill or buy goods till with Safaricom's Daraja API. When a customer sends a payment, secure webhook notifications feed the transaction ID and amount directly to your digital ledger system. This instantly matches the payment against their outstanding debt without any manual bookkeeping errors.",
      keywords: ["how to automate lipa na mpesa till reconciliation", "safaricom daraja api integration for automated merchant reconciliation"]
    }
  ];

  // Determine current active blog post from currentPage routing
  const selectedPost = currentPage && currentPage.startsWith("blog/")
    ? blogPosts.find((p) => p.id === currentPage.substring("blog/".length)) || null
    : null;

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.keywords && post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (post: BlogPost) => {
    if (onPageChange) {
      onPageChange(`blog/${post.id}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlog = () => {
    if (onPageChange) {
      onPageChange("blog");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = (post: BlogPost) => {
    const shareUrl = `${window.location.origin}/blog/${post.id}`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: shareUrl,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  // Dynamic SEO Tags and Structured Schema (JSON-LD) Markup Injection
  useEffect(() => {
    // 1. Establish page-specific meta details
    let title = "Expert Retail & Fintech Insights | Smartsort Solutions";
    let desc = "Read actionable guides, M-Pesa till reconciliation tips, and Kenyan credit ledger bookkeeping guides from Smartsort Solutions.";
    let keywordsString = "whatsapp credit manager, lipa na mpesa reconciliation, pochi la biashara vs buy goods till, kenya data protection act small business, digital ledger book kenya";
    let ogImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800";
    const pageUrl = window.location.href;

    if (selectedPost) {
      title = `${selectedPost.title} | Smartsort Solutions`;
      desc = selectedPost.metaDescription || selectedPost.excerpt;
      keywordsString = selectedPost.keywords ? selectedPost.keywords.join(", ") : keywordsString;
      ogImage = selectedPost.image;
    }

    // 2. Set document title
    document.title = title;

    // 3. Update Meta Description Tag
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement("meta");
      metaDescTag.setAttribute("name", "description");
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute("content", desc);

    // 4. Update Meta Keywords Tag
    let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsTag) {
      metaKeywordsTag = document.createElement("meta");
      metaKeywordsTag.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywordsTag);
    }
    metaKeywordsTag.setAttribute("content", keywordsString);

    // 5. Update OpenGraph Social Share Meta Properties
    const ogTags = {
      "og:title": title,
      "og:description": desc,
      "og:image": ogImage,
      "og:url": pageUrl,
      "og:type": selectedPost ? "article" : "webpage",
    };

    Object.entries(ogTags).forEach(([property, value]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    });

    // 6. Generate and Inject JSON-LD Rich Schema Tags (Highly valued by Google Web Crawlers)
    const oldSchemaScript = document.getElementById("blog-seo-schema");
    if (oldSchemaScript) oldSchemaScript.remove();

    const schemaScript = document.createElement("script");
    schemaScript.id = "blog-seo-schema";
    schemaScript.type = "application/ld+json";

    let schemaCollection: any = [];

    if (selectedPost) {
      // Dynamic BlogPosting Schema
      schemaCollection.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        "headline": selectedPost.title,
        "description": selectedPost.metaDescription || selectedPost.excerpt,
        "image": selectedPost.image,
        "datePublished": selectedPost.date,
        "author": {
          "@type": "Person",
          "name": selectedPost.author,
        },
        "publisher": {
          "@type": "Organization",
          "name": config.legalName,
          "logo": {
            "@type": "ImageObject",
            "url": `${config.websiteUrl}/logo.png`,
          },
        },
      });
    } else {
      // Blog Index Page Schema
      schemaCollection.push({
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": pageUrl,
        "name": "Smartsort Solutions Merchant Blog",
        "description": desc,
        "publisher": {
          "@type": "Organization",
          "name": config.legalName,
        }
      });

      // Interactive FAQ Schema to boost google search snippet rankings
      schemaCollection.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": visualFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      });
    }

    schemaScript.textContent = JSON.stringify(schemaCollection);
    document.head.appendChild(schemaScript);

    return () => {
      const scriptToRemove = document.getElementById("blog-seo-schema");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [selectedPost, config, currentPage]);

  if (selectedPost) {
    const recommended = blogPosts.filter((p) => p.id !== selectedPost.id).slice(0, 2);

    return (
      <div className="bg-slate-50 min-h-screen py-12 md:py-20 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation - Excellent for Search crawler pathways */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-semibold print:hidden">
            <span className="hover:text-blue-600 cursor-pointer" onClick={() => onPageChange && onPageChange("home")}>Home</span>
            <span>&bull;</span>
            <span className="hover:text-blue-600 cursor-pointer" onClick={handleBackToBlog}>Blog</span>
            <span>&bull;</span>
            <span className="text-slate-800 line-clamp-1">{selectedPost.title}</span>
          </nav>

          {/* Back Trigger */}
          <button
            onClick={handleBackToBlog}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold mb-8 text-sm cursor-pointer group border-0 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-blue-600" />
            Back to Articles
          </button>

          {/* Main Article Block */}
          <article className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            {/* Header image with semantic Alt Tag */}
            <div className="relative h-64 md:h-96 w-full bg-slate-900">
              <img
                src={selectedPost.image}
                alt={`${selectedPost.title} - Smartsort Solutions Kenya`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-700/50">
                  {selectedPost.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-12 space-y-6">
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* H1 Title with clean typography matching search title headings */}
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {selectedPost.title}
              </h1>

              {/* Share & Bookmarking controls */}
              <div className="flex items-center justify-between py-4 border-y border-slate-100 print:hidden">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Verified Merchant Guide</span>
                </div>
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/70 px-4 py-2 rounded-full cursor-pointer transition-colors border-0"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? "Link Copied!" : "Share Article"}</span>
                </button>
              </div>

              {/* Dynamic Content Body formatted into Paragraphs */}
              <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm md:text-base leading-relaxed pt-2">
                {selectedPost.content.trim().split("\n\n").map((para, idx) => {
                  const trimmed = para.trim();
                  if (!trimmed) return null;

                  // Heading trigger (H3 elements for perfect SEO document nesting)
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3 key={idx} className="text-lg md:text-xl font-bold text-slate-900 pt-4 tracking-tight">
                        {trimmed.replace(/^###\s+/, "")}
                      </h3>
                    );
                  }

                  // Numbered list trigger
                  if (/^[0-9]+\.\s+/.test(trimmed)) {
                    return (
                      <div key={idx} className="bg-slate-50 border-l-4 border-blue-500 p-5 rounded-r-2xl space-y-2">
                        {trimmed.split("\n").map((line, lIdx) => {
                          const isBoldHeader = line.startsWith("* **") || line.startsWith("**") || line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.");
                          return (
                            <p key={lIdx} className={`text-slate-700 text-xs md:text-sm leading-relaxed ${isBoldHeader ? "font-bold text-slate-900" : ""}`}>
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    );
                  }

                  // Bullet list trigger
                  if (trimmed.startsWith("* ")) {
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-600 text-xs md:text-sm">
                        {trimmed.split("\n").map((line, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">
                            {line.replace(/^\*\s+/, "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={idx} className="text-slate-600 whitespace-pre-line leading-relaxed text-sm md:text-base">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* Article Footer Keywords Cloud - Exposes long-tail keywords to crawlers natively */}
              {selectedPost.keywords && (
                <div className="pt-8 border-t border-slate-100 space-y-3 print:hidden">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.keywords.map((kw, kwIdx) => (
                      <span 
                        key={kwIdx}
                        onClick={() => {
                          setSearchQuery(kw);
                          handleBackToBlog();
                        }}
                        className="text-[11px] font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer px-3 py-1 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </article>

          {/* Contextual CTA Box - Turns organic search traffic into leads! */}
          <div className="mt-8 bg-blue-600 text-white rounded-3xl p-6 md:p-10 text-center md:text-left shadow-sm relative overflow-hidden print:hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <h3 className="text-lg md:text-xl font-bold">Ready to secure your business records?</h3>
                <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
                  Join thousands of smart Kenyan shopkeepers using Smartsort Credit Manager to track customer debt on WhatsApp and reconcile payments automatically.
                </p>
              </div>
              <button
                onClick={() => onPageChange && onPageChange("pricing")}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-full text-xs shrink-0 cursor-pointer transition-all border-0 shadow-sm"
              >
                Get Started Risk-Free
              </button>
            </div>
          </div>

          {/* Recommended Articles Block */}
          {recommended.length > 0 && (
            <div className="mt-16 space-y-6 print:hidden">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Recommended Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recommended.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base leading-snug line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold pt-4 border-t border-slate-50">
                      <span>{post.date}</span>
                      <span className="text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header Block */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 text-xs font-semibold px-3.5 py-1 rounded-full border border-blue-500/20">
              <BookOpen className="w-3.5 h-3.5" /> Retail & Compliance Insights
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Smartsort Solutions Merchant Knowledge Base
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Step-by-step guides, payment updates, and legal advice on tracking customer debt on WhatsApp and automating Lipa na M-Pesa till reconciliations safely.
            </p>
          </div>
        </div>

        {/* Dynamic Search, Filter & Quick-intent Keywords Tool */}
        <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border-0 ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-sm font-bold"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Main Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keywords (e.g. Lipa na M-Pesa till reconciliation)..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl text-xs outline-none transition-all"
              />
            </div>

          </div>

          {/* Quick-Search long-tail search terms - Boosts indexation structure & assists search intent */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-50 text-xs">
            <span className="text-slate-400 font-bold flex items-center gap-1.5 shrink-0">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {seoShortcuts.map((sc, scIdx) => (
                <button
                  key={scIdx}
                  type="button"
                  onClick={() => setSearchQuery(sc.value)}
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100/80 transition-colors px-3 py-1 rounded-full text-[11px] font-semibold border-0 cursor-pointer"
                >
                  {sc.label}
                </button>
              ))}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-red-500 font-bold ml-2 underline border-0 bg-transparent cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Blog Post Card Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                onClick={() => handlePostClick(post)}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col group"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Visual Image Block */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={post.image}
                    alt={`${post.title} - Smartsort solutions`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-slate-700/50">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read details */}
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-50">
                    <span className="text-slate-400 font-medium">{post.readTime}</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl space-y-3">
            <p className="text-slate-400 text-sm">No articles matched your search filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-xs font-bold text-blue-600 underline border-0 bg-transparent cursor-pointer"
            >
              Clear filters and search
            </button>
          </div>
        )}

        {/* Visual SEO Accordion Section - Directly exposes rich schema content on-page to Google */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Merchant Help Desk
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQ) for Kenyan Retailers
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Find instant, legally-verified answers to common questions regarding credit ledger books, Pochi la Biashara setups, and data security requirements in Kenya.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            {visualFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-800 text-sm md:text-base hover:bg-slate-50 cursor-pointer transition-colors border-0 bg-white"
                  >
                    <span className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 bg-slate-50/50 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100/50 space-y-4">
                          <p className="text-slate-600 leading-relaxed pt-4">
                            {faq.a}
                          </p>
                          
                          {/* Interactive metadata details with long-tail keywords tags */}
                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-slate-400">
                            <span>Related Topics:</span>
                            {faq.keywords.map((kw, kwIdx) => (
                              <span 
                                key={kwIdx} 
                                onClick={() => setSearchQuery(kw)}
                                className="bg-white border border-slate-200 text-slate-600 font-semibold px-2.5 py-0.5 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
