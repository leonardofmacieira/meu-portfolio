"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/python.png",
    category: "Python",
    name: "Python Games",
    description: "Guessing game and hangman game in Python.",
    link: "https://github.com/leonardofmacieira/python-games",
    github: "https://github.com/leonardofmacieira/python-games",
  },
  {
    image: "/work/react.png",
    category: "react js",
    name: "Portifolio",
    description: "This is my portfolio in ReactJS and Next.",
    link: "https://meu-portfolio-five-mu.vercel.app/",
    github: "https://github.com/leonardofmacieira/meu-portfolio",
  },
  {
    image: "/work/react.png",
    category: "react js",
    name: "Controle de Finanças",
    description: "This is my finance management project.",
    link: "https://controle-financas-eta.vercel.app/",
    github: "https://github.com/leonardofmacieira/ControleFinancas",
  },
  {
    image: "/work/react.png",
    category: "fullstack",
    name: "LM STORE",
    description: "This is my e-commerce LM Store",
    link: "https://lm-store-puce.vercel.app/",
    github: "https://github.com/leonardofmacieira/LM-Store",
  },

  {
    image: "/work/react.png",
    category: "fullstack",
    name: "Trip-Planner",
    description: "This my AI Trip-planner",
    link: "https://trip-planner-azure.vercel.app/",
    github: "https://github.com/leonardofmacieira/trip-planner",
  },
  
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
