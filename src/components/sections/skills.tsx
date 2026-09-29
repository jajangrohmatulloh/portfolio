"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Architecture & Design",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zm0 7v13m10-8l-10 5-10-5" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      "System Designs",
      "SOLID Principles",
      "Design Patterns",
      "Technical Design Documentation"
    ],
  },
  {
    title: "Integration, APIs & Backend",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10H7zM4 12h3M17 12h3M12 4v3M12 17v3" />
      </svg>
    ),
    gradient: "from-orange-500 to-yellow-500",
    skills: ["REST API", "SOAP API", "GraphQL", "gRPC", "Pub/Sub API", "Webhook", "Platform Events", "Change Data Capture", "Named Credentials", "Messaging for In-App and Web", "XML", "Metadata", "MuleSoft", "AWS", "Heroku", "Java", "Python", "Go", "Node.js", "JUnit", "Mockito"],
  },
  {
    title: "Salesforce Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h8m-8 6h8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
    skills: [
      "Apex",
      "Apex Trigger",
      "Apex Controller",
      "Apex Extension",
      "Apex Testing",
      "Queueable Apex",
      "Future",
      "Apex Scheduler",
      "Batch Apex",
      "Governor Limits",
      "SOQL",
      "SOSL",
      "Lightning Web Component/LWC",
      "Aura Component",
      "Visualforce Page",
      "Visualforce Component",
      "SLDS",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jest",
    ],
  },
  {
    title: "Clouds & Platform",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 18h10a3 3 0 0 0 .5-5.96A5.5 5.5 0 0 0 6.5 11a4 4 0 0 0 .5 7Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    gradient: "from-indigo-500 to-violet-500",
    skills: [
      "Salesforce",
      "Salesforce Lightning",
      "Salesforce Classic",
      "Sales Cloud",
      "Service Cloud",
      "Financial Services Cloud",
      "Commerce Cloud",
      "Experience Cloud",
      "Marketing Cloud Account Engagement",
      "Engagement Studio",
      "Data 360",
      "Omni-Channel",
      "CTI",
      "AppExchange",
    ],
  },
  {
    title: "OmniStudio",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm3 3h10M7 13h6" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
    skills: ["OmniStudio", "Data Mapper/DataRaptors", "Integration Procedures", "Flexcards", "Omniscripts"],
  },
  {
    title: "Agentforce & AI",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18h6M10 21h4M12 3a6 6 0 016 6v3.5a3.5 3.5 0 01-3.5 3.5h-5A3.5 3.5 0 016 12.5V9a6 6 0 016-6z" />
      </svg>
    ),
    gradient: "from-violet-500 to-indigo-500",
    skills: [
      "Agentforce",
      "Agent Builder",
      "MCPs",
      "Einstein",
      "Agentforce Vibes",
      "Cursor",
      "Claude Code",
      "GitHub Copilot",
      "AI Prompt Design",
    ],
  },
  {
    title: "Data, Security & Declarative",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-6h-2M6 12H4m12.95 6.95l-1.41-1.41M8.46 8.46L7.05 7.05m9.9 0l-1.41 1.41M8.46 15.54l-1.41 1.41" />
      </svg>
    ),
    gradient: "from-sky-500 to-blue-500",
    skills: [
      "Flows",
      "Approval Processes",
      "Validation Rules",
      "Object Configuration",
      "Lightning App Builder",
      "Users",
      "Profiles",
      "Roles",
      "Permission Sets",
      "Sharing Rules",
      "Data Import Wizard",
      "Data Export Wizard",
      "Data Loader",
      "Reports",
      "Dashboards",
      "Forecasts",
      "Tableau",
    ],
  },
  {
    title: "DevOps & Delivery",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 004-4m-14-1V7a4 4 0 014-4h2a4 4 0 014 4v7m-8 0h8" />
      </svg>
    ),
    gradient: "from-cyan-500 to-sky-500",
    skills: [
      "Salesforce DX",
      "Agentforce Vibes IDE",
      "Code Builder",
      "Classic Developer Console",
      "Web Console",
      "Change Sets",
      "Sandboxes",
      "SDLC",
      "CI/CD",
      "Git",
      "GitHub",
      "Bitbucket",
      "Jenkins",
      "Copado",
      "GitHub Actions",
      "Agile",
      "Jira",
      "Confluence",
      "Slack",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group relative">
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="transition-all duration-300 hover:scale-110 hover:shadow-lg px-4 py-2 text-sm font-medium backdrop-blur-sm bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Languages
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-white flex items-center justify-center text-2xl flex-shrink-0 border border-slate-200 dark:border-slate-700">
                  🇮🇩
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Indonesian</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Native</p>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center text-2xl flex-shrink-0 border border-slate-200 dark:border-slate-700">
                  🇺🇸
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">English</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Fluent</p>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center text-2xl flex-shrink-0 border border-slate-200 dark:border-slate-700">
                  🇸🇦
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Arabic</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Elementary</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
