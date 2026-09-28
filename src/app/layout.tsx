import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jajang Rohmatulloh - Salesforce Technical Architect",
    template: "%s | Jajang Rohmatulloh",
  },
  description:
    "Experienced Salesforce Technical Architect with Salesforce experience since 2023 and software development experience since 2019, holding 5+ certifications including Platform Developer I & II, Administrator, and MuleSoft Developer. Skilled in Apex, LWC, React, Visualforce, Aura, Cloud, and API integration, with experience delivering Salesforce solutions from architecture, development, configuration to deployment, including a Sales Pipeline application with a Google Drive integration that reduced manual steps by an estimated 15%. Backed by a strong full stack foundation (React, Node.js, Java, JavaScript), I build scalable, secure, and maintainable solutions.",
  keywords: [
    "Jajang Rohmatulloh",
    "Salesforce Solution Architect",
    "Salesforce Architect",
    "Flow",
    "OmniStudio",
    "Agentforce",
    "MuleSoft",
    "Salesforce",
    "CRM Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Jajang Rohmatulloh", url: siteUrl }],
  creator: "Jajang Rohmatulloh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  openGraph: {
    title: "Jajang Rohmatulloh - Salesforce Technical Architect",
    description:
      "Salesforce Technical Architect designing business-aligned CRM solutions, enterprise integrations, and scalable Salesforce implementations.",
    url: siteUrl,
    siteName: "Jajang Rohmatulloh Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jajang Rohmatulloh - Salesforce Technical Architect Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jajang Rohmatulloh - Salesforce Technical Architect",
    description:
      "Salesforce Technical Architect designing business-aligned CRM solutions, enterprise integrations, and scalable Salesforce implementations.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    google: "VaWU704-42HZSy3EyPKoBG2nZy2BsDN8lMkmnz1CQsg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="theme">
          <TooltipProvider>
            {children}
            <Toaster position="top-center" richColors closeButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
