export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  client: string;
  title: string;
  description: string;
  accentBg: "dark" | "light";
  tags: string[];
  metrics?: string;
  link?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: string;
}

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Website Development",
    description: "Modern, responsive websites designed around the goals of your business.",
    details: [
      "Custom Web Applications",
      "High-Conversion Landing Pages",
      "Headless CMS Integration",
      "Performance Optimization",
      "SEO-Friendly Architecture",
      "Conversion-Focused UX",
    ],
  },
  {
    id: "seo",
    number: "02",
    title: "Search Engine Optimization",
    description:
      "We optimize your website so search engines can better understand your business, while improving the experience for the people searching for your services.",
    details: [
      "Technical SEO & Site Structure",
      "On-Page SEO & Content Optimization",
      "Google Search Console & Indexing",
      "Structured Data & Schema",
      "Performance & Core Web Vitals",
      "Local & Business Search Visibility",
    ],
  },
  {
    id: "mobile-apps",
    number: "03",
    title: "Mobile Applications",
    description: "Mobile experiences that help businesses serve customers and operate more efficiently.",
    details: [
      "Cross-Platform iOS & Android Apps",
      "Intuitive Mobile UX/UI",
      "Offline-First Data Sync",
      "Push Notifications & Analytics",
    ],
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Business Software",
    description: "Software designed around your actual workflow — not a generic tool.",
    details: [
      "Internal Business Tooling",
      "Workflow Automation Systems",
      "Custom ERP & CRM Engines",
      "Role-Based Access Control",
    ],
  },
  {
    id: "backend-apis",
    number: "05",
    title: "Backend & APIs",
    description: "Reliable backend systems, APIs and integrations that power your digital product.",
    details: [
      "Scalable REST & GraphQL APIs",
      "Database Architecture & Optimization",
      "Third-Party Payment & Cloud Integrations",
      "High-Availability Cloud Hosting",
    ],
  },
  {
    id: "ai-automation",
    number: "06",
    title: "AI & Automation",
    description: "Practical AI integrations and automation that reduce repetitive work.",
    details: [
      "Custom AI Assistant Integration",
      "Automated Document Processing",
      "Data Extraction & Summarization",
      "Predictive Analytics Workflows",
    ],
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "nova-car",
    number: "01",
    client: "NOVA CAR",
    title: "A premium luxury car dealership website designed for buying and renting high-end vehicles.",
    description:
      "Built with cinematic scroll-driven vehicle animations, interactive car showcases, responsive layouts, and a refined premium automotive experience.",
    accentBg: "dark",
    tags: ["Luxury Automotive", "Car Dealership", "Vehicle Sales & Rentals", "Interactive Experience"],
    link: "https://sammyremi.github.io/luxury-car/",
  },
  {
    id: "remi-homes",
    number: "02",
    client: "REMI HOMES",
    title: "Where Lagos luxury real estate meets world-class digital presence.",
    description:
      "A premium luxury real estate website for Nigeria's foremost high-end property developer — showcasing oceanfront villas, Ikoyi penthouses, and Banana Island estates. Built with cinematic scroll animations, curated property galleries, and a seamless inquiry experience designed to attract high-net-worth buyers.",
    accentBg: "light",
    tags: ["Luxury Real Estate", "Premium Website", "Property Showcase", "High-Net-Worth Market"],
    link: "https://sammyremi.github.io/Luxury-Real-Estate/",
  },
  {
    id: "bizz-hunter",
    number: "03",
    client: "BIZZ-HUNTER",
    title: "Find the businesses worth reaching out to.",
    description:
      "An AI-powered business prospecting platform that helps freelancers, agencies, and sales teams discover businesses that could become their next customers.",
    accentBg: "dark",
    tags: ["Prospecting Platform", "SaaS", "Lead Intelligence", "Automated Search"],
  },
  {
    id: "medex",
    number: "04",
    client: "MEDEX",
    title: "Streamlined medical supply procurement and logistics.",
    description:
      "A medical supply procurement and logistics platform connecting manufacturers, importers, distributors, and retailers with automated quotations, orders, invoicing, payments, delivery tracking, and regulatory compliance workflows.",
    accentBg: "light",
    tags: ["Medical Supply Chain", "Procurement Platform", "B2B Logistics", "Regulatory Workflows"],
  },
];

export const opportunityTags = [
  "Manual processes",
  "Disconnected tools",
  "Slow workflows",
  "Outdated customer experiences",
];

export const makeTheShiftTags = [
  "Manual processes",
  "Disconnected systems",
  "Slow workflows",
  "Ideas that never become products",
];

export const processStepsData: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    description:
      "We dissect your existing operations, target audience, and business goals to define exact software requirements and technical architecture.",
  },
  {
    number: "02",
    title: "UX & System Architecture",
    description:
      "We craft high-fidelity interface prototypes and design resilient, scalable backend data schemas built for speed and long-term stability.",
  },
  {
    number: "03",
    title: "Agile Engineering",
    description:
      "We build your software in rapid, transparent sprints with automated testing, clean code standards, and frequent prototype reviews.",
  },
  {
    number: "04",
    title: "Deployment & Growth",
    description:
      "We launch your application on enterprise-grade cloud infrastructure (such as Fly.io/AWS), providing continuous monitoring and iterative updates.",
  },
];

export const whySammyRemiData: AdvantageItem[] = [
  {
    title: "Business-Driven Engineering",
    description:
      "We design and build software around key business metrics — accelerating revenue, reducing operational costs, and eliminating manual bottlenecks.",
    iconName: "Target",
  },
  {
    title: "End-to-End Delivery",
    description:
      "From early technical ideation and UI design to cloud infrastructure deployment, we take complete ownership of your digital product lifecycle.",
    iconName: "Layers",
  },
  {
    title: "Senior Engineering Craft",
    description:
      "We build using modern, battle-tested technologies (Next.js, TypeScript, PostgreSQL, scalable APIs) that guarantee speed and durability.",
    iconName: "Cpu",
  },
  {
    title: "Direct & Transparent Partnership",
    description:
      "No communication layers or bloated agency overhead. You work directly with engineers dedicated to your product's success.",
    iconName: "Users",
  },
];
