"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nameTarget = document.getElementById("hero-name");
    if (!nameTarget) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "hero-name") {
            setShowName(!entry.isIntersecting);
          }
        }
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );

    if (nameTarget) observer.observe(nameTarget);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const updateActiveSection = () => {
      const headerHeight = document.querySelector("header")?.clientHeight ?? 64;
      const currentScroll = window.scrollY + headerHeight + 8;
      const currentSection = sectionElements
        .map((section) => ({ id: `#${section.id}`, offset: section.offsetTop }))
        .filter((section) => section.offset <= currentScroll)
        .sort((a, b) => b.offset - a.offset)[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-opacity duration-300 ${showName ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"}`}>
            Jajang Rohmatulloh
          </button>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-1 absolute transition-all duration-300 ${showName ? "right-4 left-auto translate-x-0" : "left-1/2 -translate-x-1/2"}`}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className={`cursor-pointer transition-all ${activeSection === link.href ? "bg-gradient-to-r from-sky-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </Button>
            ))}
            <ThemeToggle />
          </nav>


          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <svg className="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </SheetTrigger>
            <SheetContent onClose={() => setIsOpen(false)} side="bottom" className="w-full rounded-t-[1.5rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 p-0 shadow-2xl">
              <div className="flex flex-col items-center gap-2 px-6 pt-4">
                <div className="h-1.5 w-16 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div className="w-full text-center">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Navigation</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Swipe down or tap outside to close</p>
                </div>
              </div>

              <nav className="grid gap-3 px-5 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full rounded-3xl border px-5 py-4 text-left text-base font-medium transition ${activeSection === link.href ? "bg-gradient-to-r from-sky-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20" : "border-slate-200 bg-slate-100 text-slate-900 hover:border-slate-300 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-slate-800"}`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="border-t border-slate-200 px-5 py-4 dark:border-slate-800">
                <div className="flex justify-center">
                  <ThemeToggle showLabel className="max-w-[8rem]" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
