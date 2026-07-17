"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "SALES PIPELINE",
    tagline: "Track your deals and boost team productivity",
    description: "A customer management application — an internal web-based Salesforce tool enabling sales teams to manage deal pipelines, improve cross-team collaboration, and increase overall productivity through streamlined workflow automation.",
    tags: ["Salesforce", "Apex", "VisualForce", "JavaScript", "HTML", "CSS", "API Integration"],
    gradient: "from-indigo-500 to-purple-500",
    shadowColor: "shadow-indigo-500/30",
    url: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "RURA",
    tagline: "Ask everything in Rura",
    description: "An intelligent Q&A platform that provides comprehensive answers to your questions. Built with modern web technologies for optimal performance and user experience.",
    tags: ["Vue", "TypeScript", "TailwindCSS", "Supabase", "Pinia", "API Integration", "AI"],
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/30",
    url: "https://rura-omega.vercel.app/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "TIKTOK LIVE GIFTVOICE",
    tagline: "Engage viewers with live gift-triggered audio",
    description: "A tool that connects to TikTok Live streams and triggers audio responses when viewers send gifts — like automated thank-you messages played through the device speaker that live viewers can hear. Designed to encourage viewer engagement and increase gift frequency.",
    tags: ["Node.js", "Express.js", "Socket.IO", "TikTok Live API", "Text-to-Speech", "API Integration"],
    gradient: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/30",
    url: "https://github.com/jajangrohmatulloh/tiktok-live-connector",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    name: "ADVANCE.AI API TESTER",
    tagline: "Web and Android request tester with response viewer",
    description: "An internal tool with a React.js web client and a separate React Native Android app for composing Advance.ai API requests and viewing responses.",
    tags: ["React.js", "React Native", "TypeScript", "JavaScript", "Node.js", "Bootstrap", "API Integration"],
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/30",
    url: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h8M8 13h5m-6 5h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "ZENITH",
    tagline: "Manage your tasks and focus on what matters",
    description: "A powerful task management system designed to help you organize your work, track progress, and achieve your goals efficiently.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "API Integration"],
    gradient: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/30",
    url: "https://zenith-two-pearl.vercel.app/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export function ProjectsSection() {
  const handleViewProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Decorative elements */}
      <div className="absolute top-36 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-gradient-to-br from-sky-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Some of the projects I have worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 overflow-hidden group border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 relative">
                <CardHeader>
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    whileHover={{ scale: 1.1, rotate: 6 }}
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.name}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                    {project.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="transition-all duration-300 hover:scale-110 hover:shadow-md px-3 py-1.5 text-xs font-medium backdrop-blur-sm bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full !h-auto rounded-xl py-4 text-base font-medium shadow-lg ${project.shadowColor} bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all duration-300 group/btn hover:shadow-xl text-white`}
                    >
                      View Project
                      <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Button
                      className={`!h-auto w-full cursor-default rounded-xl py-4 text-base font-medium shadow-lg ${project.shadowColor} bg-gradient-to-r ${project.gradient} opacity-75 transition-all duration-300 group/btn text-white`}
                      disabled
                    >
                      Internal Project
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/jajangrohmatulloh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 px-8 py-3 text-lg font-medium rounded-2xl border-2 border-slate-200 dark:border-slate-700 backdrop-blur-sm bg-white/80 dark:bg-slate-800/50 hover:bg-white/90 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300"
          >
            View All Projects
            <svg className="ml-3 w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
