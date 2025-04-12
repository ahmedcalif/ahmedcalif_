"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown, Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/Global/ThemeToggle";
import { useTheme } from "next-themes";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Sample Project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website with animations and contact form.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    link: "#",
    github: "#",
  },
];

// Technical skills
const skills = [
  { name: "React", icon: "/react-2.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/tailwind-css-2.svg" },
  { name: "HTML5", icon: "/html-1.svg" },
  { name: "CSS3", icon: "/css-3.svg" },
  { name: "Git", icon: "/git-icon.svg" },
  { name: "Docker", icon: "/docker-3.svg" },
  {name: 'C#', icon: 'csharp.svg'},
  {name: "Dotnet", icon: "dotnet-svgrepo-com.svg"}, 
  {name: "PHP", icon: 'php-svgrepo-com.svg'}, 
  {name: 'Laravel', icon: 'laravel-svgrepo-com.svg' },
  {name: 'MySQL', icon: 'MySQL.svg'},
  {name: 'SQLite', icon: 'SQLite.svg'}



];



interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { theme } = useTheme();

  // References for each section
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  
  const homeInView = useInView(homeRef, { amount: 0.5 });
  const aboutInView = useInView(aboutRef, { amount: 0.5 });
  const projectsInView = useInView(projectsRef, { amount: 0.5 });
  const contactInView = useInView(contactRef, { amount: 0.5 });

  useEffect(() => {
    // Assign refs to DOM elements when component mounts
    homeRef.current = document.getElementById("home");
    aboutRef.current = document.getElementById("about");
    projectsRef.current = document.getElementById("projects");
    contactRef.current = document.getElementById("contact");
  }, []);

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, projectsInView, contactInView]);

  // Form handling
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Add your form submission logic here
    alert("Form submitted successfully! (This is a demo alert)");
    form.reset();
  }

  // Code lines for the typing animation in Hero section
  const codeLines = [
    "import { useState, useEffect } from 'react';",
    "import { motion } from 'framer-motion';",
    "",
    "const Portfolio = () => {",
    "  const [projects, setProjects] = useState([]);",
    "  ",
    "  useEffect(() => {",
    "    // Fetch portfolio data",
    "    fetchProjects().then(data => setProjects(data));",
    "  }, []);",
    "",
    '  return "<Ahmed.Projects />";',
    "};",
  ];

  // Typing effect
  const [text, setText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setText((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, 25);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setText((prev) => prev + "\n");
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIndex, currentCharIndex]);

  // Code highlighting function
  const applyCodeHighlighting = (code: string) => {
    const highlightedCode = code
      .replace(
        /import|export|from|const|let|var|return|function/g,
        (match) => `<span class="text-purple-400">${match}</span>`
      )
      .replace(
        /useState|useEffect/g,
        (match) => `<span class="text-yellow-400">${match}</span>`
      )
      .replace(
        /'[^']*'/g,
        (match) => `<span class="text-green-400">${match}</span>`
      )
      .replace(
        /\/\/.*/g,
        (match) => `<span class="text-gray-500">${match}</span>`
      )
      .replace(
        /\{|\}|\[|\]|\(|\)/g,
        (match) => `<span class="text-gray-300">${match}</span>`
      )
      .replace(
        /Ahmed\.Projects/g,
        (match) => `<span class="text-blue-400">${match}</span>`
      );

    return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white font-sans">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white z-50" 
        style={{ width: progressBarWidth }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold">Ahmed Calif</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                      activeSection === item.id ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/ahmedcalif" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ahmedcalif/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@ahmedcalif.com" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="space-y-1 px-4 py-5">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-base font-medium ${
                    activeSection === item.id ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/ahmedcalif" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ahmedcalif/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@ahmedcalif.com" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <Section 
          id="home" 
          className="min-h-screen flex items-center bg-white dark:bg-gray-950"
        >
          <div className="container mx-auto px-6 md:px-12 py-24">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-1/2 mt-12 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400">Ahmed Calif</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mb-8">
                    A passionate Full Stack Developer creating clean, efficient, and user-friendly digital experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button 
                      onClick={() => scrollToSection("projects")}
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
                    >
                      View Projects
                    </Button>
                    <Button 
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-12"
                >
                  <motion.div
                    animate={{ y: [10, 0, 10] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex justify-center md:justify-start"
                  >
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => scrollToSection("about")}
                      className="rounded-full"
                    >
                      <ChevronDown size={24} />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-full max-w-md bg-gray-900 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                >
                  <div className="h-6 bg-gray-800 dark:bg-gray-700 flex items-center px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1.5"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <pre className="p-4 text-xs font-mono overflow-hidden h-80 text-gray-300">
                    {applyCodeHighlighting(text)}
                    <span className="animate-pulse">|</span>
                  </pre>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section 
          id="about" 
          className="py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="h-1 w-20 bg-black dark:bg-white mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello, my name is Ahmed Calif. I’m an aspiring full-stack developer who recently completed my diploma in web development at BCIT. I’m passionate about creating production-ready web applications that solve real-world problems. 
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I’m not coding, you’ll find me on the basketball court, a passion I’ve had since childhood. Basketball taught me the value of teamwork, patience, and performing under pressure, skills that translate perfectly into web development. 
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                 While I may not be the most naturally gifted player, my love for the game keeps me returning. I bring that same dedication to development. There is nothing quite like creating something that impacts people’s lives. It’s what drives me to keep learning and growing as a developer.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Are you looking for a developer who’s passionate about creating impactful solutions? Let’s connect!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 lg:text-center">Technical Skills</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="h-12 w-12 p-2 relative mb-3">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section 
          id="projects" 
          className="py-20 bg-white dark:bg-gray-950"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">My Projects</h2>
              <div className="h-1 w-20 bg-black dark:bg-white mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects. Each one represents a unique challenge and solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-800">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        fill
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="dark:text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                      <Button variant="outline" size="sm" asChild className="border-gray-300 dark:border-gray-700">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section 
          id="contact" 
          className="py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Interested in collaborating or commissioning a piece? Let's create something amazing together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project..."
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm">
                © {new Date().getFullYear()} Ahmed Calif. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/ahmedcalif" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmedcalif/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@ahmedcalif.com" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}