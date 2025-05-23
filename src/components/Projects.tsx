import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: 'Diabetes Detection Model',
    description: 'CNN with TensorFlow; 92% accuracy on medical records.',
    tools: ['TensorFlow', 'Python', 'Medical Data'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '#'
  },
  {
    title: 'EV Charging Optimization',
    description: 'K-Means clustering; optimized station placement across Texas.',
    tools: ['K-Means', 'Python', 'GeoPandas', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    link: '#'
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Unsupervised ML; enabled data-driven marketing.',
    tools: ['Python', 'Clustering Algorithms', 'Marketing Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '#'
  },
  {
    title: 'ETL Data Pipeline',
    description: 'Apache Spark + Airflow; containerized with Docker.',
    tools: ['Apache Spark', 'Airflow', 'Docker', 'Python'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-portfolio-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-portfolio-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-heading text-center">Featured Projects</h2>
        <p className="text-center section-subheading mx-auto">
          Explore some of my recent work and technical solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex} 
                      className="bg-portfolio-lightblue text-portfolio-blue text-xs px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-portfolio-blue font-medium hover:text-portfolio-darkblue flex items-center transition-all group"
                >
                  View Project
                  <ArrowRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
