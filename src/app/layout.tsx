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
    default: "Jajang Rohmatulloh - Full-Stack Developer",
    template: "%s | Jajang Rohmatulloh",
  },
  description:
    "Full-stack developer turning ideas into working software — end to end, backend to browser. Started programming since 2019. Proficient and experienced in building APIs and services with Spring Boot, Go, Node.js, NestJS, Express.js, MySQL, PostgreSQL, MongoDB and responsive and interactive interfaces with React.js, Next.js, TypeScript, JavaScript, TailwindCSS, and SASS.",
  keywords: [
    "Jajang Rohmatulloh",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Jajang Rohmatulloh", url: siteUrl }],
  creator: "Jajang Rohmatulloh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  openGraph: {
    title: "Jajang Rohmatulloh - Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about creating beautiful and functional web applications.",
    url: siteUrl,
    siteName: "Jajang Rohmatulloh Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jajang Rohmatulloh - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jajang Rohmatulloh - Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about creating beautiful and functional web applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
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
