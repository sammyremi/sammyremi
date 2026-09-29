export const siteConfig = {
  name: "SammyRemi Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://officialsammyremi.fly.dev",
  email: "officialsammyremi@gmail.com",
  phone: "+2348147468979",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348147468979",
  whatsappDefaultMessage:
    "Hello SammyRemi Technologies, I would like to discuss a project.",
  description:
    "SammyRemi Technologies builds websites, mobile applications, custom business software, backend systems, APIs, and AI-powered solutions for businesses.",
  keywords: [
    "sammyremi",
    "SammyRemi Technologies",
    "Software Development",
    "Digital Solutions",
    "Web Development",
    "Mobile Applications",
    "Custom Business Software",
    "Backend Development",
    "API Engineering",
    "AI Automation",
  ],
  social: {
    github: "https://github.com/sammyremi",
    linkedin: "https://www.linkedin.com/in/sammyremi/",
    facebook: "https://www.facebook.com/sammyremi",
    tiktok: "https://www.tiktok.com/@sammyremi",
  },
};

export type SiteConfig = typeof siteConfig;
