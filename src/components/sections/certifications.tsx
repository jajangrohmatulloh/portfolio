"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import jsDevBadge from "@/assets/badges/salesforce-certified-javascript-developer-i.png";
import platformDevIBadge from "@/assets/badges/salesforce-certified-platform-developer-i.png";
import platformDevIIBadge from "@/assets/badges/salesforce-certified-platform-developer-ii.png";
import muleSoftDevBadge from "@/assets/badges/salesforce-certified-mulesoft-developer-level-1.png";
import muleSoftIntegrationBadge from "@/assets/badges/salesforce-certified-mulesoft-integration-associate.png";

const certifications = [
  {
    name: "Salesforce Certified JavaScript Developer I",
    issuer: "Salesforce",
    badge: jsDevBadge,
    url: "https://drive.google.com/file/d/1Jlpj2Q6_wFTpxUsNuCZC4pXINKvRvogf/view?usp=sharing",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    badge: platformDevIBadge,
    url: "https://drive.google.com/file/d/175nfokNSCw8fseok_3MHSX3J2FjFXj7W/view?usp=drive_link",
  },
  {
    name: "Salesforce Certified Platform Developer II",
    issuer: "Salesforce",
    badge: platformDevIIBadge,
    url: "https://drive.google.com/file/d/15naqy4vL2yiGbrGYgIdwqhA5in0DR-Mh/view?usp=drive_link",
  },
  {
    name: "MuleSoft Certified Integration Associate",
    issuer: "MuleSoft",
    badge: muleSoftIntegrationBadge,
    url: "https://drive.google.com/file/d/1pQJSGXOfUZcTAkgq0G290GtaPmqi6AaK/view?usp=drive_link",
  },
  {
    name: "MuleSoft Certified Developer - Level 1",
    issuer: "MuleSoft",
    badge: muleSoftDevBadge,
    url: "https://drive.google.com/file/d/1kOvtI2szbUgwVR6H4zvaxPfIniuMbJ2Q/view?usp=drive_link",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 to-purple-600 flex items-center justify-center text-white shadow-xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:scale-105 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group relative cursor-pointer">
                  <CardContent className="p-6 relative z-10">
                    <div className="w-16 h-16 rounded-3xl overflow-hidden bg-white border border-slate-200 dark:border-slate-800 mb-4 shadow-lg">
                      <Image src={cert.badge} alt={`${cert.name} badge`} width={64} height={64} loading="lazy" className="object-contain w-full h-full" />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {cert.name}
                    </h3>

                    <Badge
                      variant="secondary"
                      className="mt-2 px-3 py-1 text-xs font-medium bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20"
                    >
                      {cert.issuer}
                    </Badge>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0 0L10 14" />
                      </svg>
                      View Certificate
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
