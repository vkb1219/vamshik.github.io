
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import ProjectDetail from './ProjectDetail';

const projects = [
  {
    title: 'Diabetes Detection Model',
    description: 'CNN with TensorFlow; 92% accuracy on medical records.',
    tools: ['TensorFlow', 'Python', 'Medical Data'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: 'https://github.com/vamshikrishna/diabetes-detection',
    fullDescription: 'This project focused on developing an advanced convolutional neural network (CNN) for detecting diabetes from medical records. We processed thousands of patient records to train a model that can identify early signs of diabetes with high accuracy.',
    challenge: 'Medical data is often inconsistent, with missing values and different formats. We needed to clean the data while preserving its integrity and develop a model that could work with limited information.',
    solution: 'We implemented a TensorFlow-based CNN architecture with specialized preprocessing techniques for medical data. The model includes advanced features like dropout layers to prevent overfitting and batch normalization for training stability.',
    results: 'Our model achieved 92% accuracy on unseen test data, significantly outperforming traditional statistical methods. It's now being evaluated for potential integration into clinical decision support systems.'
  },
  {
    title: 'EV Charging Optimization',
    description: 'K-Means clustering; optimized station placement across Texas.',
    tools: ['K-Means', 'Python', 'GeoPandas', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    link: 'https://github.com/vamshikrishna/ev-charging-optimization',
    fullDescription: 'This project aimed to determine the optimal locations for new electric vehicle charging stations across Texas. We analyzed traffic patterns, existing infrastructure, and population density to identify underserved areas with high potential demand.',
    challenge: 'With limited resources, it was crucial to maximize the coverage and utility of each new charging station. We needed to balance urban needs with providing coverage for long-distance travel corridors.',
    solution: 'We applied K-Means clustering algorithms to geospatial data, incorporating weighted factors such as traffic density, existing charging infrastructure, and projected EV adoption rates. GeoPandas was used for the spatial data processing and analysis.',
    results: 'The project identified 35 optimal locations that would provide charging access to over 85% of the Texas population within a 15-mile radius. The findings were presented to the state's transportation department for implementation planning.'
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Unsupervised ML; enabled data-driven marketing.',
    tools: ['Python', 'Clustering Algorithms', 'Marketing Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: 'https://github.com/vamshikrishna/customer-segmentation',
    fullDescription: 'This project involved analyzing customer purchase history and behavior patterns for a major retail chain to identify distinct customer segments. The goal was to enable more targeted marketing strategies and personalized customer experiences.',
    challenge: 'The client had vast amounts of unstructured customer data spanning multiple systems and formats. The challenge was to integrate and clean this data, then identify meaningful patterns without preconceived notions of what segments should exist.',
    solution: 'We implemented a combination of unsupervised machine learning techniques, including hierarchical clustering and principal component analysis (PCA). This approach allowed us to reduce dimensionality while preserving the most important variables for segmentation.',
    results: 'The analysis revealed six distinct customer segments with unique purchasing behaviors and preferences. After implementing targeted marketing strategies based on these segments, the client saw a 24% increase in campaign response rates and a 13% increase in average purchase value.'
  },
  {
    title: 'ETL Data Pipeline',
    description: 'Apache Spark + Airflow; containerized with Docker.',
    tools: ['Apache Spark', 'Airflow', 'Docker', 'Python'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
    link: 'https://github.com/vamshikrishna/etl-pipeline',
    fullDescription: 'This project involved designing and implementing a scalable ETL (Extract, Transform, Load) data pipeline for a financial services company. The system needed to process terabytes of transaction data daily from multiple sources.',
    challenge: 'The existing system was manual and error-prone, taking over 8 hours to complete daily processing. It couldn't scale to handle increasing data volumes, and errors were difficult to trace and resolve.',
    solution: 'We built a fully automated pipeline using Apache Spark for distributed processing and Apache Airflow for workflow orchestration. The entire solution was containerized with Docker to ensure consistent environments across development and production.',
    results: 'The new pipeline reduced processing time from 8+ hours to under 45 minutes, eliminated manual interventions, and provided comprehensive logging and error handling. It now handles 3x the original data volume with capacity to scale further.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const openProjectDetail = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

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
                <button 
                  onClick={() => openProjectDetail(project)}
                  className="text-portfolio-blue font-medium hover:text-portfolio-darkblue flex items-center transition-all group"
                >
                  View Project
                  <ArrowRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail 
          isOpen={!!selectedProject}
          onClose={closeProjectDetail}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
