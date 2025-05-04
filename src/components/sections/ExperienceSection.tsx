import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo?: string;
  current?: boolean;
}

interface ExperienceSectionProps {
  experiences?: ExperienceItem[];
  title?: string;
  subtitle?: string;
}

const ExperienceSection = ({
  experiences = [
    {
      id: "1",
      company: "SAP",
      position: "Associate Developer",
      duration: "Jul 2021 - Jul 2023",
      location: "India",
      description: "Played a key role as a Developer in the Agile Project team, developing backend services and responsive user interfaces while ensuring data integrity and resolving customer incidents.",
      achievements: [
        "Developed a Commodity Management project using Node.js and Express for the backend",
        "Utilized React to build responsive user interfaces, improving overall user experience and reducing load times by 30%",
        "Developed RESTful APIs with Express.js to facilitate seamless communication between frontend and backend services",
        "Efficiently resolved more than 10 Priority-3 customer incidents",
        "Created utility software with Node.js to reduce data inconsistencies by 20%",
        "Conducted database administration and consistency testing for 4 tables in SAP HANA DB",
        "Improved team productivity by 15% through GitHub for version control and collaborative development"
      ],
      skills: ["Node.js", "Express.js", "React", "RESTful APIs", "SAP HANA DB", "GitHub", "Database Administration", "Agile Methodology"],
      logo: "Sap-01.png",
      current: false,
    },
    {
      id: "2",
      company: "SAP",
      position: "Software Engineer Intern",
      duration: "Jun 2019 - Aug 2020",
      location: "Remote",
      description: "Developed a full-stack web application for monitoring periodically operating schedulers while improving system reliability and performance.",
      achievements: [
        "Built a comprehensive monitoring system for 5 periodically operating schedulers",
        "Integrated real-time API calls into the scheduler system, decreasing scheduling errors by 30%",
        "Performed unit testing on developed code, improving code quality by 25% and reducing post-deployment issues",
        "Accelerated decision-making and improved resource allocation effectiveness through system optimizations"
      ],
      skills: ["Full-stack Development", "API Integration", "Unit Testing", "Web Application Development", "Scheduler Monitoring", "Code Quality Assurance"],
      logo: "Sap-01.png",
    },
    // {
    //   id: "3",
    //   company: "WebFront Systems",
    //   position: "Junior Developer",
    //   duration: "Jun 2017 - Feb 2019",
    //   location: "Seattle, WA",
    //   description:
    //     "Worked on front-end development for e-commerce applications.",
    //   achievements: [
    //     "Implemented responsive designs for multiple client websites",
    //     "Developed reusable component library that increased development speed",
    //     "Assisted in migration from legacy codebase to modern React framework",
    //   ],
    //   skills: ["HTML/CSS", "JavaScript", "React", "Sass", "Git"],
    //   logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=webfront",
    // },
  ],
  title = "Professional Experience",
  subtitle = "My journey in the software development industry",
}: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2 p-4">
                  <div
                    className={`flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <Card className="w-full md:max-w-md border shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        {experience.logo && (
                          <div className="h-12 w-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                            <img
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl">
                            {experience.position}
                          </CardTitle>
                          <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span className="font-medium">
                              {experience.company}
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span>{experience.duration}</span>
                          </CardDescription>
                          <div className="text-sm text-muted-foreground mt-1">
                            {experience.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{experience.description}</p>

                        {experience.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {experience.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-10 md:mt-16">
                  <div
                    className={`h-6 w-6 rounded-full border-4 ${experience.current ? "bg-primary border-primary/30" : "bg-background border-border"}`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
