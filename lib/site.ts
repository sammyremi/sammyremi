export const siteConfig = {
  name: "SammyRemi Technologies",
  url: "https://sammyremi.com",
  email: "officialsammyremi@gmail.com",
  phone: "+2348147468979",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348147468979",
  whatsappDefaultMessage:
    "Hello SammyRemi Technologies, I would like to discuss a project.",
  description:
    "SammyRemi Technologies builds modern websites, mobile applications, custom business software, backend APIs, and AI-powered solutions to help businesses grow and operate efficiently.",
  keywords: [
    "sammyremi",
    "SammyRemi Technologies",
    "Software Development",
    "Digital Solutions",
    "Website Development",
    "Mobile Applications",
    "Custom Business Software",
    "Search Engine Optimization",
    "SEO Services",
    "Backend Development",
    "API Engineering",
    "AI Automation",
  ],
  social: {
    github: "https://github.com/sammyremi",
    linkedin: "https://www.linkedin.com/in/sammyremi/",
    facebook: "https://www.facebook.com/sammyremi",
    tiktok: "https://www.tiktok.com/@sammyremi",
    twitter: "https://twitter.com/sammyremi",
  },
};

export type SiteConfig = typeof siteConfig;
