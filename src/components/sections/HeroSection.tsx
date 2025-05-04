import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const HeroSection = ({
  name = "Mithilesh Gaurihar",
  title = "Software Developer",
  description = "Innovative Software Engineer with MS in Computer Science from Arizona State University and 2+ years of global experience at SAP Labs. Proficient in full-stack development using JavaScript, Python, React, and Node.js, with expertise in cloud technologies (AWS) and database management. Skilled in AI integration, having developed applications utilizing OpenAI and Gemini AI APIs. Seeking to leverage technical expertise and problem-solving abilities in challenging development projects",
  // take poto from public/photo.jpg
  avatarUrl = "photo.jpg", 
  resumeUrl = "public/MithileshGaurihar_Resume.pdf",
  socialLinks = {
    github: "https://github.com/mithileshgau",
    linkedin: "https://linkedin.com/in/mithilesh-gaurihar",
    email: "mailto:mgauriha@asu.edu",
  },
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[700px] flex items-center justify-center py-20 bg-background">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Hi, I'm {name}
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-medium text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {title}
            </motion.h2>
          </div>

          <motion.p
            className="max-w-[600px] text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={resumeUrl} download>
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {socialLinks.email && (
              <a
                href={socialLinks.email}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img
              src={avatarUrl}
              alt={`${name}'s profile picture`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
