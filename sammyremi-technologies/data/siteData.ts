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
      "Performance & SEO Optimization",
    ],
  },
  {
    id: "mobile-apps",
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
    id: "bizz-hunter",
    number: "01",
    client: "BIZZ-HUNTER",
    title: "Find the businesses worth reaching out to.",
    description:
      "A business prospecting platform that helps freelancers, agencies and sales teams discover businesses that may become potential customers.",
    accentBg: "dark",
    tags: ["Prospecting Platform", "SaaS", "Lead Intelligence", "Automated Search"],
  },
  {
    id: "medex",
    number: "02",
    client: "MEDEX",
    title: "Medical supply procurement, connected and streamlined.",
    description:
      "A comprehensive medical supply procurement and logistics platform involving manufacturers, importers, distributors, and retailers. Automates quotes, orders, invoices, payments, deliveries, and compliance tracking.",
    accentBg: "light",
    tags: ["Supply Chain Logistics", "B2B Procurement", "Regulatory Workflows", "Multi-Tier Commerce"],
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
