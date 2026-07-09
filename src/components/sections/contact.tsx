"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
    mode: "onChange",
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      toast.success("Message sent!", {
        description: "Thank you for contacting me. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Send me a message!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">Send me a message</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 text-sm">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-slate-700 dark:text-slate-300 text-sm">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 h-11"
                                disabled={isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-slate-700 dark:text-slate-300 text-sm">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 h-11"
                                disabled={isSubmitting}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-slate-700 dark:text-slate-300 text-sm">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Project Collaboration"
                              className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 h-11"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-slate-700 dark:text-slate-300 text-sm">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Hi, I'd like to collaborate with you on a web development project..."
                              className="min-h-[140px] transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl resize-none bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 rounded-xl py-6 text-base font-medium group/btn text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
