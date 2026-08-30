import { Shield, FileText, Download, Printer, Check, ArrowRight, Database, Music } from "lucide-react";
import { useState, useEffect } from "react";
import { BusinessConfig } from "../types";

interface LegalPageProps {
  type: "privacy" | "terms";
  initialProduct?: "universal" | "credit-manager" | "livegrid";
  config: BusinessConfig;
  onPageChange?: (pageId: string) => void;
}

export default function LegalPage({ type, initialProduct = "universal", config, onPageChange }: LegalPageProps) {
  const [activeProduct, setActiveProduct] = useState<"universal" | "credit-manager" | "livegrid">(initialProduct);
  const [downloaded, setDownloaded] = useState(false);

  // Sync active product when route changes externally
  useEffect(() => {
    setActiveProduct(initialProduct);
  }, [initialProduct]);

  const handleProductSwitch = (product: "universal" | "credit-manager" | "livegrid") => {
    setActiveProduct(product);
    if (onPageChange) {
      const pageId = product === "universal" ? type : `${type}/${product}`;
      onPageChange(pageId);
    }
  };

  const getPrivacyContent = (product: "universal" | "credit-manager" | "livegrid") => {
    switch (product) {
      case "credit-manager":
        return `
Smartsort Credit Manager Privacy Policy
Last Updated: June 26, 2026

This Privacy Policy governs the "Smartsort Credit Manager" service (operated by ${config.legalName}), which includes our automated WhatsApp Business ledger utility, our basic cellular USSD dialer platform (*384*12924#), and the associated merchant synchronization systems.

Smartsort Credit Manager is built specifically as a secure, high-performance, and lightweight ledger tool for Kenyan retail merchants, wholesale distributors, and shopkeepers. We understand the critical confidentiality of your commercial ledger and outstanding debt logs, and we protect this data with industry-grade cloud credentials.

1. Information We Collect & Process

To deliver automated ledger calculations and instant customer reconciliation notices, we collect and process the following specific parameters:

a) Merchant Account Data
- Registered Phone Number: Your primary phone number serves as your unique login ID across WhatsApp and USSD.
- Shop / Business Name: Used to brand client notifications and customize your ledger workspace.
- Owner Name: For official billing records and security verification.

b) Transactional Ledger Entries
- Client Contact Number: The phone number of your customer/debtor.
- Transaction Log Parameters: Outstanding credit values, debit payments, running balances, descriptions, and entry timestamps.
- Metadata: Auto-generated entry identifiers to prevent double-posting.

c) Lipa na M-Pesa Daraja API Data
- When a client pays outstanding dues using your merchant Lipa na M-Pesa paybill/buy-goods number, our systems receive standard webhook notifications from Safaricom.
- Processed parameters include: Transaction ID, sender's phone number, amount paid, and timestamp. No PINs or private bank credentials are ever received.

2. How We Use Your Information

We process transaction data strictly on your behalf to execute the core service:
- To compute and maintain running balances for each client in your ledger.
- To transmit automated, compliant SMS balance alerts to your clients when you update their credit file.
- To reconcile client-initiated M-Pesa payments with your active ledger sheets automatically.
- To compile secure dashboard analytics so you can track outstanding credit risks.

We never sell, analyze, or package your ledger entries for external credit profiling or marketing. Your commercial records remain strictly yours.

3. Data Sharing & Service Integrations

To transmit communications and handle mobile money transfers, we integrate with secure external gateways:
- Safaricom Daraja API: For real-time Lipa na M-Pesa ledger balance reconciliations.
- Meta / WhatsApp Business API: To facilitate conversational ledger commands on WhatsApp.
- Licensed SMS Gateway Providers: To deliver instant transactional notifications to your clients.
- Secure cloud databases: To store and sync encrypted ledger database files.

4. Data Security and Retentions

- Encryption: All synced data is transferred via HTTPS and stored in secure cloud databases shielded by strict access controls and multi-factor credentials.
- Retentions: We retain your ledger records as long as your merchant profile is active. If you delete your account, all associated client lists and transaction logs are immediately purged from our live production databases.

5. Kenya Data Protection Act (2019) Compliance

All data processing is aligned with Kenyan regulations:
- You retain complete ownership over your customer ledger.
- You have the right to inspect, export, or permanently erase your complete ledger records at any time.
- If you have questions regarding data security, contact us at ${config.email}.
`;
      case "livegrid":
        return `
${config.legalName} Privacy Policy for LiveGrid Player
Last Updated: June 26, 2026

${config.legalName} ("we", "us", or "our") operates the Livegrid mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.

We are committed to protecting your privacy. Livegrid is designed as a local media player that respects your privacy by default. We do not collect, store, or share your personal files or media content.

By using the App, you agree to the collection and use of information in accordance with this policy.

1. Information We Collect

We collect several different types of information to provide and improve our App.

a) Information You Provide Directly
- Playlists & Favorites: You may create playlists, bookmark items, or save stream URLs within the App. This data is stored locally on your device and is never transmitted to our servers.
- Custom Settings: Theme preferences, equalizer presets, and playback settings are also stored only on your device.
- In-App Purchases: If you purchase a premium unlock, the transaction is handled entirely by the Google Play Store. We do not receive or store your credit card or payment details.

b) Information Collected Automatically
- Device Information & Crash Reports: We collect anonymous crash logs to improve stability and fix bugs. These reports do not contain any personally identifiable information (PII) or media file details.
- Usage Data (Optional): With your explicit consent (if required by law), we may collect anonymised, aggregated usage statistics (e.g., which features are used most) to guide future development. This data cannot be linked to an individual user.

c) Information Accessed via Permissions
To function as a full-featured media player, the App requires the following permissions:
- Storage / Media Access: The App scans your device’s internal and external storage for audio, video, and playlist files. We do not upload, copy, or monitor your media files. All scanning and indexing happens on-device.
- Internet Access: The App connects to the internet only for the following optional, user-initiated purposes:
  - Fetching album artwork, artist images, movie posters, and metadata from free third-party services (e.g., TMDB, TheAudioDB, MusicBrainz).
  - Downloading subtitles from OpenSubtitles if you choose to do so.
  - Retrieving synchronized lyrics from LRCLIB.
  - Loading remote stream URLs (e.g., internet radio, HLS streams) that you explicitly add.
- Network State & Wi-Fi: Used to check connectivity before attempting online operations, to avoid unnecessary data usage.
- Picture-in-Picture / Wake Lock: To play video in a floating window and keep the screen on during playback (respectively). These do not collect any personal data.

No microphone, camera, location, contacts, or phone permissions are ever requested.

2. How We Use Your Information

We use the collected data for the following purposes:
- To provide and maintain the App: The core functionality (media playback, library management) operates entirely offline.
- To improve stability: Anonymous crash reports help us identify and fix bugs.
- To enhance user experience: Aggregated usage insights (if collected with consent) allow us to refine the interface and features.
- To fulfill your requests: When you manually trigger a metadata fetch or subtitle download, the App transmits the song/movie title to the respective third-party API solely to retrieve the requested information. No personal data is attached.

We do not use your data for any form of advertising, profiling, or automated decision-making.

3. Data Retention & Security

- Local Data: All your personal media, playlists, and settings remain on your device. They are deleted when you uninstall the App.
- Crash Reports: Anonymised crash reports are retained on secure cloud servers for a limited period (typically 90 days) before automatic deletion.
- Security: We implement industry-standard security measures to protect the data we do handle. However, no method of electronic storage or transmission is 100% secure.

4. Third-Party Services

The App may integrate the following third-party services, each of which has its own privacy policy:
- Anonymous crash reporting: For anonymous crash reporting. See the relevant service privacy policy.
- TMDB, TheAudioDB, MusicBrainz: For metadata and artwork. These services receive only the name of the artist, album, movie, or song, and do not receive any user identification.
- OpenSubtitles: For subtitle search and download (optional). Data processing is subject to OpenSubtitles' Privacy Policy.
- LRCLIB: For synced lyrics (optional). No user account is required.

We do not control these third parties and are not responsible for their privacy practices. We encourage you to review their policies.

5. Children's Privacy

Livegrid is a general-audience media player and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately so we can take necessary action.

6. Your Data Rights (GDPR, CCPA, etc.)

Depending on your location, you may have the following rights regarding your personal data:
- Right to Access: You can request a copy of any personal data we might hold (note: we hold almost none).
- Right to Rectification: You can correct any inaccurate data directly in the App’s settings or by contacting us.
- Right to Erasure: Uninstalling the App removes all locally stored data. For any residual anonymised crash logs, you can request deletion by providing your approximate device identifiers (which we do not routinely collect – please contact support for guidance).
- Right to Object / Restrict Processing: Because we do not process personal data for marketing or profiling, these rights are inherently respected.

To exercise any of these rights, email us at ${config.email}. We will respond within 30 days.

7. International Data Transfers

All App processing occurs on your device. The minimal anonymous data that may be collected (crash reports) is stored on servers that may be located in the United States or other countries. By using the App, you consent to this transfer, which is protected by the service provider’s compliance with Standard Contractual Clauses and equivalent data protection frameworks.

8. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and, where feasible, through an in-app notice. You are advised to review this Privacy Policy periodically for any changes.

9. Contact Us

If you have any questions about this Privacy Policy, please contact us:
- Email: ${config.email}
- Website: ${config.websiteUrl}
`;
      case "universal":
      default:
        return `
${config.legalName} Universal Portal & Corporate Privacy Policy
Last Updated: June 26, 2026

${config.legalName} ("we", "us", or "our") operates the primary corporate portal located at ${config.websiteUrl} and associated web administrative tools. This document governs our global collection and processing of personal data when you visit our websites, contact our customer support channels, or register for our service newsletters.

We are committed to securing merchant and user privacy. We do not sell or rent your personal contact information to any advertising networks. All core data is processed under the strict regulations of the Kenya Data Protection Act, 2019.

1. Information We Collect

We collect limited personal identifier details to process your business inquiries and maintain web session states:

a) Direct Correspondence Details
- Registered Name: To address support tickets and generate invoices.
- Email Address: To deliver subscription invoices, password recovery links, and service updates.
- Phone & WhatsApp Numbers: To communicate setup guidelines and system dispatch rules.

b) Automated Analytics & Logs
- Cookies: Standard functional cookies to keep you logged into the client admin portal.
- Technical Logs: IP addresses, browser agent headers, and referral links to prevent fraudulent log-ins and malicious attacks.

2. How We Use Your Information

All website information is utilized solely for servicing your account:
- To authenticate admin logins and secure client portals.
- To dispatch critical newsletter updates regarding Safaricom M-Pesa Daraja or Meta WhatsApp API changes.
- To analyze general web traffic patterns to improve site responsive rendering.

3. Third-Party Integrations

Our website may use standard external utilities:
- Secure Auth: For secured web merchant login sessions.
- Google Cloud: For high-speed web hosting and traffic load balancing.

4. Your Legal Rights (Kenya Data Protection Act, 2019)

As a Kenyan-registered entity, we fully protect your statutory data rights:
- Access & Portability: You may request a complete export of your personal correspondence records.
- Rectification: Correct any administrative typo in your registered address or business name.
- Erasure: Request complete deletion of your corporate contact credentials.

5. Contact Support

If you have any questions regarding data security, please contact us:
- Email: ${config.email}
- Phone: ${config.phone}
- Address: ${config.address}, ${config.county}, Kenya
`;
    }
  };

  const getTermsContent = (product: "universal" | "credit-manager" | "livegrid") => {
    switch (product) {
      case "credit-manager":
        return `
Smartsort Credit Manager Terms of Service
Last Updated: June 26, 2026

These Terms of Service ("Terms") govern your use of the "Smartsort Credit Manager" service (operated by ${config.legalName}), including our WhatsApp ledger utility, our basic cellular USSD system (*384*12924#), and the merchant synchronization dashboards.

By registering for a Credit Manager account, activating our USSD interface, or exchanging conversational commands with our WhatsApp ledger bot, you agree to these binding Terms.

1. Merchant Ledger Responsibilities

Smartsort Credit Manager acts strictly as a secure digital ledger tool to help retail and wholesale businesses record credit transactions.
- Accuracy: You are solely responsible for verifying the accuracy of every credit, debit, and payment amount you log in the ledger. We do not audit your entries.
- Debt Collection Disclaimer: We do not operate as a debt collection agency, financial institution, or credit guarantor. We are not responsible for unpaid client debts, merchant cash flow deficits, or disputes between you and your customers.
- Notifications: By using our automated SMS notification feature, you warrant that you have obtained appropriate consent from your clients to send them transactional balance notices.

2. Fees, Billing, and M-Pesa Payments

To maintain server synchronization, USSD carrier integrations, and automated SMS broadcasts, we charge a nominal service fee:
- Subscription Rate: The standard service fee is set at ${config.dailyFee} per active day, which is billed dynamically via Lipa na M-Pesa or standard monthly packages.
- Payment Reconciliation: While our systems integrate with the Safaricom Daraja API to automatically log payments, you remain responsible for verifying receipt of funds in your official physical M-Pesa till/paybill statement before releasing inventory.
- Non-Payment: We reserve the right to suspend USSD or WhatsApp command access if subscription dues remain outstanding for more than 14 consecutive days.

3. WhatsApp & Carrier Acceptable Use

- You must not use our WhatsApp or USSD commands to log fraudulent transactions, engage in money laundering simulations, or harass individuals.
- You must comply with Meta's WhatsApp Business Terms of Service and local telecommunications guidelines in Kenya.

4. Limitation of Liability

To the maximum extent permitted by Kenyan law, our total aggregate liability for any operational downtime, M-Pesa sync failures, or cellular network drops shall be limited to the subscription fees you paid to us during the preceding three (3) months. We are not liable for any lost profits, business interruptions, or missing ledger histories resulting from device loss or unauthorized account sharing.

5. Termination & Portability

- You may cease using our service at any time. You can request a complete Excel/CSV export of your ledger data before terminating your profile.
- We reserve the right to terminate merchant profiles that engage in fraudulent activities or violate local Kenyan consumer protection laws.

6. Contact Support
- Email: ${config.email}
- Phone: ${config.phone}
`;
      case "livegrid":
        return `
${config.legalName} Terms of Service for LiveGrid Player
Last Updated: June 26, 2026

Please read these Terms of Service ("Terms") carefully before using the Livegrid mobile application (the "App") operated by ${config.legalName} ("us", "we", or "our").

Your access to and use of the App is conditioned on your acceptance of and compliance with these Terms. By downloading, installing, or using the App, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the App.

1. License & Usage

We grant you a non-exclusive, non-transferable, revocable license to use Livegrid on a device that you own or control, solely for your personal, non-commercial entertainment purposes, in accordance with these Terms.

You may not:
- Copy, modify, distribute, sell, or lease any part of the App.
- Reverse engineer, decompile, or attempt to extract the source code of the App, except as expressly permitted by applicable law.
- Use the App for any illegal or unauthorized purpose.
- Remove, alter, or obscure any copyright, trademark, or other proprietary notices.

2. User-Generated Content & Media Files

Livegrid is a media player that reads and plays files stored on your device. We do not host, verify, or control the content of those files.
- Responsibility: You are solely responsible for all audio, video, and stream URLs you access through the App. You must ensure you have the legal right to possess and play such content in your jurisdiction.
- Copyright Infringement: We respect intellectual property rights. If you believe that any content accessible through our App infringes your copyright, please contact us with a detailed notice. However, because we do not host or distribute media, we cannot remove files from your device. We will cooperate with legitimate requests to disable features that access alleged infringing content from third-party online services, where technically feasible.

3. Intellectual Property

The App itself, including its name, logo, design, code, and all related features, is the exclusive property of ${config.legalName} and is protected by copyright, trademark, and other intellectual property laws. These Terms do not grant you any rights to our trademarks or to the underlying software, except the limited usage license set forth above.

Third-party libraries and open-source components used within the App are governed by their respective licenses, which are acknowledged in the App’s “About” or “Open Source Licenses” section.

4. In-App Purchases & Billing

Livegrid may offer optional premium features through a one-time in-app purchase. All payments are processed by the Google Play Store under its own Terms of Service and Privacy Policy. We do not handle or store your payment instrument details.
- All purchases are final and non-refundable, except as required by applicable law or the Google Play refund policies.
- Premium features are tied to your Google account and can be restored on any device where that account is active, subject to the App’s availability.

5. Third-Party Services & Links

The App may allow you to access third-party websites or services, such as metadata providers, subtitle databases, or stream URLs that you manually add. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. You acknowledge and agree that we shall not be liable for any damage or loss caused or alleged to be caused by your use of or reliance on any such content, goods, or services.

6. Disclaimer of Warranties

The App is provided on an "AS IS" and "AS AVAILABLE" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to:
- That the App will function uninterrupted, securely, or error-free.
- That any defects will be corrected.
- The accuracy, completeness, or reliability of any metadata or artwork fetched from online sources.
- Any implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

You use the App at your own risk. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusions may not apply to you.

7. Limitation of Liability

In no event shall ${config.legalName}, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, profits, use, or other intangible losses, resulting from:
- Your use or inability to use the App.
- Any conduct or content of any third party.
- Unauthorized access, use, or alteration of your transmissions or content.

Our total aggregate liability for any claim arising out of or relating to these Terms or the App shall not exceed the amount you paid us (if any) in the twelve months preceding the claim, or $10 USD, whichever is greater. The limitations of liability in this section apply even if we have been advised of the possibility of such damages.

8. Indemnification

You agree to indemnify, defend, and hold harmless ${config.legalName} and its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including reasonable attorney’s fees) arising from:
- Your use of the App in violation of these Terms.
- Your violation of any third-party right, including any copyright or privacy right.
- Any claim that the content you access through the App caused damage to a third party.

9. Termination

We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms. Upon termination, your right to use the App will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

10. Governing Law

These Terms shall be governed and construed in accordance with the laws of Kenya (the location where ${config.legalName} is established), without regard to its conflict of law provisions. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts located in Nairobi.

For users in the European Union, you may also be entitled to the protections of mandatory consumer laws of your country of residence.

11. Changes to Terms

We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by posting the updated Terms on this page and, where appropriate, through an in-app alert. Your continued use of the App after the effective date of the revised Terms constitutes your acceptance of the changes.

12. Contact Information

For questions about these Terms, please contact:
- Email: ${config.email}
- Website: ${config.websiteUrl}
`;
      case "universal":
      default:
        return `
${config.legalName} Universal Website Terms of Service
Last Updated: June 26, 2026

Welcome to the corporate website of ${config.legalName} ("us", "we", or "our"). These Terms of Service ("Terms") govern your access to and use of our public website located at ${config.websiteUrl} and any informational portals we operate.

By accessing or browsing this website, you agree to be bound by these Terms. If you do not agree to any part of these terms, please stop using the website immediately.

1. Informational Purpose Only
All content, product previews, and guides displayed on our website are for general information purposes only. While we endeavor to keep specifications up to date, actual software implementations are subject to specific product license agreements.

2. Intellectual Property Rights
The design, layout, visual themes, custom graphics, logo marks, and codebase of this website are the exclusive intellectual property of ${config.legalName}. You may not copy, scrape, modify, or redistribute our assets without explicit written consent.

3. Subscriptions & Newsletters
By subscribing to our newsletter, you agree to receive periodic operational updates, M-Pesa integration alerts, and technical announcements. You can opt out at any time using the unsubscribe link provided in our emails.

4. Limitation of Liability
Our website is provided on an "as-is" and "as-available" basis. We make no warranties that the website will remain uninterrupted or completely secure. In no event shall ${config.legalName} be liable for any temporary web downtime or browser rendering issues.

5. Governing Law
These Terms shall be governed and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from your use of this website shall be settled exclusively in the courts of Nairobi.

6. Support Contacts
If you have any questions regarding these terms, please contact us:
- Email: ${config.email}
- Website: ${config.websiteUrl}
`;
    }
  };

  const handleDownload = () => {
    const content = type === "privacy" ? getPrivacyContent(activeProduct) : getTermsContent(activeProduct);
    const productLabel = activeProduct === "universal" ? "Universal" : activeProduct === "credit-manager" ? "Credit_Manager" : "LiveGrid_Player";
    const filename = `${config.legalName.replace(/\s+/g, "_")}_${productLabel}_${
      type === "privacy" ? "Privacy_Policy" : "Terms_of_Service"
    }.txt`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const getSections = () => {
    if (type === "privacy") {
      switch (activeProduct) {
        case "credit-manager":
          return [
            { num: "1", title: "Information We Collect & Process", desc: "Merchant account data, ledger entries, and Safaricom Daraja API." },
            { num: "2", title: "How We Use Your Information", desc: "Balance computing, automated SMS alerts, and payment reconciliations." },
            { num: "3", title: "Data Sharing & Gateways", desc: "Safaricom integration, WhatsApp Business API, and SMS dispatchers." },
            { num: "4", title: "Data Security & Retention", desc: "Firestore encryption and automatic account purge timelines." },
            { num: "5", title: "Kenya Data Protection Act Compliance", desc: "Your statutory ledger rights under Kenya Data Protection Act, 2019." }
          ];
        case "livegrid":
          return [
            { num: "1", title: "Information We Collect", desc: "Data provided directly, automated logs, and accessed storage permissions." },
            { num: "2", title: "How We Use Your Information", desc: "Operation, stability improvements, and fetching song metadata." },
            { num: "3", title: "Data Retention & Security", desc: "On-device storage policies and limited Firebase storage life." },
            { num: "4", title: "Third-Party Services", desc: "External APIs for analytics, subtitles, lyrics, and metadata." },
            { num: "5", title: "Children's Privacy", desc: "Standard general-audience restrictions for kids under 13." },
            { num: "6", title: "Your Data Rights", desc: "Access, correction, erasure, and objecting to processing details." },
            { num: "7", title: "International Transfers", desc: "Minimal anonymous processing logs and server storage parameters." },
            { num: "8", title: "Policy Updates", desc: "How we post subsequent changes and notify active users." },
            { num: "9", title: "Contact Information", desc: `Official support contact coordinates at ${config.legalName}.` }
          ];
        case "universal":
        default:
          return [
            { num: "1", title: "Information We Collect", desc: "Direct correspondence, admin details, cookies, and traffic logs." },
            { num: "2", title: "How We Use Your Information", desc: "Aiding accounts, billing setups, dispatching service announcements." },
            { num: "3", title: "Third-Party Integrations", desc: "Security logins via secure cloud infrastructure." },
            { num: "4", title: "Your Legal Rights", desc: "Access, corrections, and complete erasure under KDPA 2019." },
            { num: "5", title: "Contact Support", desc: `Direct official support channels for ${config.legalName}.` }
          ];
      }
    } else {
      switch (activeProduct) {
        case "credit-manager":
          return [
            { num: "1", title: "Merchant Ledger Responsibilities", desc: "Verifying logged records, client consents, and debt collection disclaimers." },
            { num: "2", title: "Fees, Billing, and M-Pesa", desc: "Daily subscription rates, automated paybill integration, and non-payment." },
            { num: "3", title: "WhatsApp & Carrier Acceptable Use", desc: "Meta Business policies, telecommunication rules, and fraud prevention." },
            { num: "4", title: "Limitation of Liability", desc: "Statutory transaction cap limits under Kenyan regulations." },
            { num: "5", title: "Termination & Portability", desc: "How account deletion operates and ledger spreadsheet exports." },
            { num: "6", title: "Contact Support", desc: "Direct email and phone support details." }
          ];
        case "livegrid":
          return [
            { num: "1", title: "License & Usage", desc: "Non-exclusive, revocable personal entertainment usage rules." },
            { num: "2", title: "User-Generated Content", desc: "Your direct liabilities regarding stored files and streaming audio." },
            { num: "3", title: "Intellectual Property", desc: "Ownership rights of the core software assets and layouts." },
            { num: "4", title: "Billing & Purchases", desc: "In-app Google Play billing and purchase refund terms." },
            { num: "5", title: "Third-Party Links", desc: "Disclaimers regarding external subtitles, metadata, and lyrics sites." },
            { num: "6", title: "Warranty Disclaimer", desc: "Standard 'as-is' and 'as-available' operational disclaimers." },
            { num: "7", title: "Limitation of Liability", desc: "Statutory capping of overall liability limits." },
            { num: "8", title: "Indemnification", desc: "Agreement to protect developers against external legal suits." },
            { num: "9", title: "Termination", desc: "How licenses can be suspended for policy violations." },
            { num: "10", title: "Governing Law", desc: "Exclusive jurisdiction under national Kenyan law rules." },
            { num: "11", title: "Terms Changes", desc: "How subsequent updates are published on the portal." },
            { num: "12", title: "Contact Information", desc: "Developer support email and main domain coordinates." }
          ];
        case "universal":
        default:
          return [
            { num: "1", title: "Informational Purpose Only", desc: "General information limitations and service updates." },
            { num: "2", title: "Intellectual Property Rights", desc: "Ownership of custom designs, source codes, logos, and graphics." },
            { num: "3", title: "Subscriptions & Newsletters", desc: "Terms of email subscriptions and opt-out specifications." },
            { num: "4", title: "Limitation of Liability", desc: "As-is website representation and temporary downtime disclaimers." },
            { num: "5", title: "Governing Law", desc: "Legal compliance under Kenyan laws and Nairobi courts." },
            { num: "6", title: "Support Contacts", desc: "Authorized business coordinates." }
          ];
      }
    }
  };

  const sections = getSections();
  const contentText = type === "privacy" ? getPrivacyContent(activeProduct) : getTermsContent(activeProduct);

  const getProductTitle = () => {
    switch (activeProduct) {
      case "credit-manager":
        return "Smartsort Credit Manager";
      case "livegrid":
        return "LiveGrid Media Player";
      case "universal":
      default:
        return `${config.brandName} Portal`;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 font-sans print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Product Switcher Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 mb-8 bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm print:hidden">
          <button
            onClick={() => handleProductSwitch("universal")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              activeProduct === "universal"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Universal Portal</span>
          </button>
          <button
            onClick={() => handleProductSwitch("credit-manager")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              activeProduct === "credit-manager"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Credit Manager</span>
          </button>
          <button
            onClick={() => handleProductSwitch("livegrid")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              activeProduct === "livegrid"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-600 hover:text-purple-600 hover:bg-purple-50/50"
            }`}
          >
            <Music className="w-4 h-4" />
            <span>LiveGrid Player</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm mb-8 relative overflow-hidden print:shadow-none print:border-none print:p-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                {type === "privacy" ? "Compliance Asset" : "Legal Framework"}
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h1>
              <p className="text-sm text-slate-500">
                Official document for <strong>{getProductTitle()}</strong> &bull; Effective: June 26, 2026
              </p>
            </div>

            {/* Document Controls */}
            <div className="flex flex-wrap items-center gap-3 print:hidden">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                {downloaded ? <Check className="w-4 h-4 text-white" /> : <Download className="w-4 h-4" />}
                <span>{downloaded ? "Downloaded!" : "Download Doc"}</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200 text-xs print:hidden">
            <div>
              <p className="text-slate-400">Operator</p>
              <p className="font-semibold text-slate-900 mt-0.5">{config.legalName}</p>
            </div>
            <div>
              <p className="text-slate-400">Jurisdiction</p>
              <p className="font-semibold text-slate-900 mt-0.5">Republic of Kenya</p>
            </div>
            <div>
              <p className="text-slate-400">Compliance Code</p>
              <p className="font-semibold text-slate-900 mt-0.5">KDPA-2019-REG</p>
            </div>
            <div>
              <p className="text-slate-400">Version Status</p>
              <p className="font-semibold text-blue-600 mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Active / Verified
              </p>
            </div>
          </div>
        </div>

        {/* Section Navigation Quick Guide */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm mb-8 print:hidden">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            Document Sections Index
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sections.map((sec) => (
              <div key={sec.num} className="p-3 bg-slate-50/50 rounded-xl hover:bg-slate-50 transition-colors flex gap-3 items-start">
                <span className="w-5 h-5 rounded-md bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                  {sec.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{sec.title}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fully Rendered Text Body */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm print:shadow-none print:border-none print:p-0">
          <div className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-6">
            
            {/* Split paragraphs into readable HTML content */}
            {contentText.trim().split("\n\n").map((para, idx) => {
              const trimmed = para.trim();
              if (!trimmed) return null;

              // If it's a section header (e.g. "1. Who We Are" or heading)
              if (/^[0-9]+\.\s+/.test(trimmed) || trimmed.endsWith("Terms of Service") || trimmed.endsWith("Privacy Policy") || trimmed.startsWith("Operated by") || trimmed.startsWith("Effective Date:") || trimmed.startsWith("Last Updated:") || trimmed.startsWith("Please read these Terms") || trimmed.includes("Welcome to the corporate website")) {
                const isSectionHeader = /^[0-9]+\.\s+/.test(trimmed);
                return (
                  <h2 
                    key={idx} 
                    className={`font-sans text-slate-900 tracking-tight ${
                      isSectionHeader 
                        ? "text-lg md:text-xl font-bold pt-6 border-t border-slate-200 first:border-none first:pt-0" 
                        : trimmed.includes("Terms of Service") || trimmed.includes("Privacy Policy")
                        ? "text-xl md:text-2xl font-black text-center"
                        : "text-xs md:text-sm font-semibold text-slate-500 text-center"
                    }`}
                  >
                    {trimmed}
                  </h2>
                );
              }

              // If it's a list item starting with a dash or bullet
              if (trimmed.startsWith("- ")) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-600 text-sm leading-relaxed">
                    {trimmed.split("\n").map((line, lIdx) => (
                      <li key={lIdx}>{line.replace(/^-\s+/, "")}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={idx} className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {trimmed}
                </p>
              );
            })}

          </div>

          {/* Footer signature inside legal block */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center space-y-2">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Authorized Attestation</p>
            <p className="font-sans font-bold text-slate-800">{config.legalName}</p>
            <p className="text-xs text-slate-500">Suite 4B, Plaza 2000, Mombasa Road, Nairobi, Republic of Kenya</p>
          </div>
        </div>

      </div>
    </div>
  );
}
