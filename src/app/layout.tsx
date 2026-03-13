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

export const metadata: Metadata = {
  title: "Jajang Rohmatulloh | Full-Stack Developer",
  description: "Full-Stack Developer passionate about creating beautiful and functional web applications. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Jajang Rohmatulloh", "Full-Stack Developer", "React", "Next.js", "Node.js", "Portfolio", "Indonesia"],
  authors: [{ name: "Jajang Rohmatulloh" }],
  openGraph: {
    title: "Jajang Rohmatulloh | Full-Stack Developer",
    description: "Full-Stack Developer passionate about creating beautiful and functional web applications.",
    type: "website",
  },
  icons: {
    icon: "/person.webp",
    apple: "/person.webp",
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
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <TooltipProvider>
            {children}
            <Toaster position="top-center" richColors closeButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
