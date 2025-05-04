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
      title: "Class Registration System - Easy Enroll",
      description:
        "Easy Enroll is a smart class registration system built on AWS that uses an enhanced Gale-Shapley algorithm and OpenAI's language model to match students with their preferred courses, maximizing overall happiness while preventing the chaos typically associated with course registration",
      image:
        "Class_Registration_system.jpg",
      tags: ["React", "Java", "SpringBoot", "OpenAI", "AWS", "EC2"],
      demoUrl: "https://github.com/bhavesh2103/aws-class-registration-system/assets/55141824/8aeefcdc-ecc7-46b5-a6c3-710af7d28b9b",
      repoUrl: "https://github.com/bhavesh2103/aws-class-registration-system",
    },
    {
      id: "2",
      title: "AI Documentation Generator - DevDoc AI",
      description:
        "DevDoc AI is an AI-powered web application that automatically generates comprehensive code documentation by analyzing source files across multiple programming languages, providing developers with an intuitive interface to upload code, preview the resulting documentation, and download it in Markdown format",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["React", "Python", "Flask", "GeminiAI", "Langchain"],
      demoUrl: "https://devdoc-ai-frontend.onrender.com/",
      repoUrl: "https://github.com/mithileshgau/DevDoc-AI/",
    },
    {
      id: "3",
      title: "Analysis for Badminton Player Movement",
      description:
        "OpenPose-Analysis is a real-time sports analytics project that uses computer vision to track badminton players' movements, extracting key body coordinates to calculate metrics like total distance traveled, average speed, movement heatmaps, and court quadrant dominance for performance evaluation and strategic decision-making.",
      image:
        "Sport-Analysis.jpg",
      tags: ["OpenPose Model", "Python", "Google Colab", "Matplotlib"],
      demoUrl: "https://example.com/demo3",
      repoUrl: "https://github.com/mithileshgau/Openpose-Analysis",
    },
    {
      id: "4",
      title: "Social Media Analytics - TopicBubbler",
      description:
        "TopicBubbler is an innovative visual analytics system that enables users to interactively explore social media data across multiple hierarchical levels, offering six distinct visualization views to analyze topics, temporal trends, keyword correlations, and document content from coronavirus-related tweets",
      image:
        "Social-media-analysis.jpg",
      tags: ["D3.js", "Python", "FAST-API", "LDA", "CSV", "JSON", "Parquet"],
      demoUrl: "https://example.com/demo4",
      repoUrl: "https://github.com/mithileshgau/topic-bubbler",
    },
    {
      id: "5",
      title: "Time Series analysis using News Sentiment Data",
      description:
        "Time Series analysis using News Sentiment Data is a predictive modeling project that leverages LSTM networks and sentiment analysis of financial news to forecast stock prices with greater accuracy than traditional methods alone.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      tags: ["Python", "LSTM", "Pandas", "NumPy", "Matplotlib"],
      demoUrl: "https://example.com/demo5",
      repoUrl: "https://github.com/mithileshgau/Time-Series-Analyis-Using-News-Sentiment",
    },
    // {
    //   id: "6",
    //   title: "AI Image Generator",
    //   description:
    //     "Web application that uses machine learning to generate custom images based on text prompts.",
    //   image:
    //     "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80",
    //   tags: ["Python", "TensorFlow", "React", "Flask"],
    //   demoUrl: "https://example.com/demo6",
    //   repoUrl: "https://github.com/username/project6",
    // },
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
                  imageUrl={project.image}
                  technologies={project.tags}
                  // demoUrl={project.demoUrl}
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
