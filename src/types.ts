export interface BusinessConfig {
  brandName: string;
  legalName: string;
  address: string;
  county: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  dailyFee: string;
  websiteUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  keywords?: string[];
  metaDescription?: string;
}
