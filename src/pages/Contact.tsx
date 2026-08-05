import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, AlertTriangle, Send } from "lucide-react";
import { BusinessConfig } from "../types";

interface ContactProps {
  config: BusinessConfig;
}

export default function Contact({ config }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    shopName: "",
    phone: "",
    county: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countiesList = [
    "Nairobi", "Mombasa", "Kiambu", "Nakuru", "Uasin Gishu", "Kisumu", "Machakos", "Meru", "Nyeri", "Kajiado", "Other"
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{9,15}$/.test(formData.phone)) {
      tempErrors.phone = "Provide a valid phone number (e.g., +254 757 706 978).";
    }
    if (!formData.county) tempErrors.county = "Please select your county.";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        shopName: "",
        phone: "",
        county: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="contact-header">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Direct Merchant Support
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We're happy to answer questions about <strong>{config.brandName}</strong>, help you get your retail shop onboarded, or assist with your existing merchant account.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Official Contact Metadata */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-info">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Our Headquarters
              </h3>
              
              <ul className="space-y-5 text-sm text-slate-600">
                <li className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Registered Business Entity</p>
                    <p className="mt-0.5">{config.legalName}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {config.address}
                      <br />
                      {config.county}, Kenya
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Official Email</p>
                    <a href={`mailto:${config.email}`} className="text-slate-500 hover:text-slate-900 transition-colors mt-0.5 block">
                      {config.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Phone & WhatsApp Support</p>
                    <a href={`tel:${config.phone}`} className="text-slate-500 hover:text-slate-900 transition-colors mt-0.5 block">
                      {config.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Business Hours</p>
                    <p className="text-slate-500 mt-0.5">Monday–Saturday</p>
                    <p className="text-slate-500 text-xs">8:00 AM – 6:00 PM EAT</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm space-y-4">
              <div className="p-2.5 bg-blue-500/10 rounded-xl inline-block text-blue-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold tracking-tight text-white text-base">
                Prefer WhatsApp?
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                You can bypass this contact form and text our merchant support specialists directly on WhatsApp for immediate onboarding assistance.
              </p>
              <a
                href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md cursor-pointer"
              >
                <span>Text Us Now</span>
                <span className="font-mono">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm text-left">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Smartsort Solutions. A customer agent will respond to you within two (2) business hours via WhatsApp or SMS.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-slate-900 underline pt-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    Send us a Message
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 outline-none transition-all"
                      placeholder="e.g. Mama Neri"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Optional Shop Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Business / Shop Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                      className="w-full text-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 outline-none transition-all"
                      placeholder="e.g. Mama Neri Fresh Kiosk"
                    />
                  </div>

                  {/* Phone & County in a row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 outline-none transition-all"
                        placeholder="e.g. +254 757 706 978"
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* County Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        County
                      </label>
                      <select
                        value={formData.county}
                        onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                        className="w-full text-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 outline-none transition-all bg-white"
                      >
                        <option value="">Select County</option>
                        {countiesList.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.county && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          {errors.county}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Inquiry
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 outline-none transition-all resize-none"
                      placeholder="Type your inquiry here..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-blue-100" />
                      <span>{isSubmitting ? "Submitting..." : "Send Secure Message"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
