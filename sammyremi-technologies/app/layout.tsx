import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SitePreloader } from "@/components/ui/SitePreloader";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SammyRemi Technologies | Software Development & Digital Solutions",
  description:
    "SammyRemi Technologies designs and builds websites, mobile applications, custom business software, and AI-powered solutions for businesses.",
  keywords: [
    "Software Development",
    "Digital Solutions",
    "Web Development",
    "Mobile Applications",
    "Custom Business Software",
    "AI Integration",
    "SammyRemi Technologies",
  ],
  authors: [{ name: "SammyRemi Technologies" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0B0D13] text-neutral-900 dark:text-[#F3F4F6] font-sans selection:bg-[#D96B18] selection:text-white transition-colors duration-300">
        <NextTopLoader
          color="#D96B18"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={300}
          shadow="0 0 10px #D96B18,0 0 5px #D96B18"
        />
        <SitePreloader />
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
