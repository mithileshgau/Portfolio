import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProjectCard from "../ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
  title?: string;
  description?: string;
}

const ProjectsSection = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/username/project",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      demoUrl: "https://example.com/demo2",
      repoUrl: "https://github.com/username/project2",
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      demoUrl: "https://example.com/demo3",
      repoUrl: "https://github.com/username/project3",
    },
    {
      id: "4",
      title: "Social Media Analytics",
      description:
        "Dashboard for tracking and analyzing social media performance across multiple platforms.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      tags: ["React", "D3.js", "Node.js", "OAuth"],
      demoUrl: "https://example.com/demo4",
      repoUrl: "https://github.com/username/project4",
    },
    {
      id: "5",
      title: "Fitness Tracker",
      description:
        "Mobile application for tracking workouts, nutrition, and fitness progress.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      tags: ["React Native", "GraphQL", "HealthKit"],
      demoUrl: "https://example.com/demo5",
      repoUrl: "https://github.com/username/project5",
    },
    {
      id: "6",
      title: "AI Image Generator",
      description:
        "Web application that uses machine learning to generate custom images based on text prompts.",
      image:
        "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80",
      tags: ["Python", "TensorFlow", "React", "Flask"],
      demoUrl: "https://example.com/demo6",
      repoUrl: "https://github.com/username/project6",
    },
  ],
  title = "My Projects",
  description = "A showcase of my recent work, personal projects, and contributions to open-source software.",
}: ProjectsSectionProps) => {
  const [filter, setFilter] = useState("all");

  // Extract unique tags from all projects
  const allTags = [
    "all",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  // Filter projects based on selected tag
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              {allTags.map((tag) => (
                <TabsTrigger
                  key={tag}
                  value={tag}
                  onClick={() => setFilter(tag)}
                  className="capitalize"
                >
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={filter} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  demoUrl={project.demoUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
