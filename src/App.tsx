/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { RESUME_DATA } from "./constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

function ProjectCard({ project }: { project: typeof RESUME_DATA.projects[number] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = project.description.length > 120;

  return (
      <motion.div variants={fadeIn}>
        <Card className="group h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col">
          <div className="relative aspect-video overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <CardHeader className="p-5 space-y-3">
            <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group/title w-fit"
            >
              <CardTitle className="text-lg font-medium group-hover/title:text-white transition-colors">
                {project.title}
              </CardTitle>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover/title:text-white transition-colors" />
            </a>
            <div className="flex flex-col">
              <CardDescription className={cn(
                  "text-zinc-400 text-sm leading-relaxed transition-all duration-300",
                  !isExpanded && "line-clamp-2"
              )}>
                {project.description}
              </CardDescription>
              {isLongDescription && (
                  <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-xs text-zinc-300 hover:text-white mt-2 font-medium transition-colors w-fit"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-5 pt-0 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 font-mono text-[10px] hover:bg-zinc-700 transition-colors">
                    {tech}
                  </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-white transition-all overflow-hidden"
            aria-label="Toggle Menu"
        >
          <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
              <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                />
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#1c1a1a] border-l border-zinc-800 z-40 p-12 flex flex-col gap-8 shadow-2xl"
                >
                  <div className="space-y-4">
                    <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-widest">Featured Projects</h2>
                    <nav className="flex flex-col gap-6">
                      {RESUME_DATA.projects.map((project) => (
                          <a
                              key={project.title}
                              href={project.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center justify-between text-xl font-medium text-zinc-300 hover:text-white transition-colors"
                          >
                            {project.title}
                            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                          </a>
                      ))}
                    </nav>
                  </div>

                  <div className="mt-auto space-y-4">
                    <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-widest">Connect</h2>
                    <div className="flex gap-4">
                      <a href={RESUME_DATA.contact.social[0].url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={RESUME_DATA.contact.social[1].url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </>
          )}
        </AnimatePresence>
      </>
  );
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
      <div className="min-h-screen bg-[#1c1a1a] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 dark">
        <MobileMenu />
        {/* Background Glow */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-zinc-800/10 blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-zinc-800/10 blur-[120px]" />
        </div>

        <main className="relative max-w-4xl mx-auto px-6 py-20 space-y-12">
          {/* Hero Section */}
          <section className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="flex items-center md:items-start gap-4 md:gap-10 md:shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img
                      src={RESUME_DATA.avatarUrl}
                      alt={RESUME_DATA.name}
                      className="relative w-24 md:w-32 rounded-full object-cover border-2 border-zinc-800"
                      referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:hidden">
                  <h1 className="text-5xl font-bold tracking-tight text-white leading-[0.9]">
                    <span className="block">Casey</span>
                    <span className="block">Choiniere</span>
                  </h1>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h1 className="hidden md:block text-6xl lg:text-6xl font-bold tracking-tighter text-white mb-2">
                  Casey Choiniere
                </h1>
                <p className="text-xl text-zinc-300 font-light max-w-xl">
                  {RESUME_DATA.about}
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                <span className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="w-4 h-4" />
                  {RESUME_DATA.location}
                </span>
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a href={`tel:${RESUME_DATA.contact.tel}`} className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    {RESUME_DATA.contact.tel}
                  </a>
                  <a
                      href={RESUME_DATA.contact.social[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                      href={RESUME_DATA.contact.social[1].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Experience & Skills Tabs */}
          <motion.section
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-12"
          >
            <Tabs defaultValue="experience" className="w-full">
              <div className="flex items-center justify-between gap-4 mb-8 pr-2">
                <TabsList className="bg-zinc-900 p-1">
                  <TabsTrigger value="experience" tabIndex={0} className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                    Experience
                  </TabsTrigger>
                  <TabsTrigger value="projects" tabIndex={0} className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                    Projects
                  </TabsTrigger>
                  <TabsTrigger value="skills" tabIndex={0} className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                    Skills
                  </TabsTrigger>
                </TabsList>
                <div className="hidden md:block h-px flex-1 bg-zinc-500" />
              </div>

              <TabsContent value="experience" className="mt-0 space-y-12 outline-none">
                {RESUME_DATA.work.map((work, index) => (
                    <motion.div
                        key={work.company}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1
                        }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l border-zinc-500 group transition-colors duration-300 hover:bg-zinc-800/60 py-6 rounded-r-xl mb-0 pr-2"
                    >
                      <div className="absolute left-[-5.5px] top-8 w-2.5 h-2.5 rounded-full bg-zinc-500 group-hover:bg-zinc-300 transition-colors duration-300" />
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-medium text-white">{work.company}</h3>
                          {work.badges.map(badge => (
                              <Badge key={badge} className="bg-zinc-900 text-zinc-300 border-zinc-500 text-[10px]">
                                {badge}
                              </Badge>
                          ))}
                        </div>
                        <span className="text-sm font-mono text-zinc-400">{work.start} — {work.end}</span>
                      </div>
                      <h4 className="text-zinc-300 mb-4">{work.title}</h4>
                      <ul className="text-sm text-zinc-400 leading-relaxed max-w-2xl list-disc list-outside ml-4 space-y-2">
                        {work.description.map((bullet, i) => (
                            <li key={i} className="pl-1">
                              {bullet}
                            </li>
                        ))}
                      </ul>
                    </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="projects" className="mt-0 outline-none">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                >
                  {RESUME_DATA.projects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="skills" className="mt-0 outline-none">
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.map((skill, index) => (
                      <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.02 }}
                          viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="px-3 py-1.5 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all cursor-default">
                          {skill}
                        </Badge>
                      </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-0 space-y-6">
                {RESUME_DATA.education.map((edu) => (
                    <div key={edu.school} className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-lg font-medium text-white">{edu.school}</h3>
                        <span className="text-sm font-mono text-zinc-400">{edu.start} — {edu.end}</span>
                      </div>
                      <p className="text-zinc-300">{edu.degree}</p>
                    </div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.section>



          {/* Footer */}
          <footer className="pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Built with React, Tailwind & Motion</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a href={`tel:${RESUME_DATA.contact.tel}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                Phone
              </a>
              <a href={RESUME_DATA.contact.social[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href={RESUME_DATA.contact.social[1].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </footer>
        </main>
      </div>
  );
}
