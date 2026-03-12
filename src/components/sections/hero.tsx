"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "@/components/aceternity/sparkles";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Aceternity Sparkles */}
      <Sparkles 
        particleCount={80}
        minSize={3}
        maxSize={8}
        minSpeed={0.3}
        maxSpeed={1.5}
        colors={["#3B82F6", "#8B5CF6", "#EC4899", "#06B6D4", "#F59E0B"]}
      />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/15 via-purple-400/15 to-pink-400/15 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/15 via-pink-400/15 to-blue-400/15 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-2.5 text-sm backdrop-blur-sm bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-lg text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2">👋</span>
            Welcome to my portfolio
            <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </Badge>

          {/* Name with Gradient Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Jajang Rohmatulloh
            </span>
          </h1>

          {/* Title */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-400 mb-8 max-w-3xl mx-auto font-medium">
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              Full-Stack Developer
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
            </span>
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A person with high interest in technology, especially programming. 
            Has been studying programming since 2019 and continues to explore to improve skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 px-8 py-6 text-lg rounded-2xl border-0 text-white"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 px-8 py-6 text-lg rounded-2xl border-2 backdrop-blur-sm bg-white/80 dark:bg-slate-800/50 hover:bg-white/90 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20">
            <div
              className="inline-flex flex-col items-center text-slate-500 dark:text-slate-400 cursor-pointer group"
              onClick={() => scrollToSection("about")}
            >
              <span className="text-sm mb-3 font-medium group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">Scroll to explore</span>
              <div className="w-8 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-2 group-hover:border-blue-500 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
