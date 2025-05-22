
import React from 'react';

const projects = [
  {
    title: 'Diabetes Detection Model',
    description: 'CNN with TensorFlow; 92% accuracy on medical records.',
    tools: ['TensorFlow', 'Python', 'Medical Data'],
    image: 'https://via.placeholder.com/600x400/E8F0FF/0066FF?text=Diabetes+Detection',
    link: '#'
  },
  {
    title: 'EV Charging Optimization',
    description: 'K-Means clustering; optimized station placement across Texas.',
    tools: ['K-Means', 'Python', 'GeoPandas', 'Data Visualization'],
    image: 'https://via.placeholder.com/600x400/E8F0FF/0066FF?text=EV+Charging',
    link: '#'
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Unsupervised ML; enabled data-driven marketing.',
    tools: ['Python', 'Clustering Algorithms', 'Marketing Analytics'],
    image: 'https://via.placeholder.com/600x400/E8F0FF/0066FF?text=Customer+Segmentation',
    link: '#'
  },
  {
    title: 'ETL Data Pipeline',
    description: 'Apache Spark + Airflow; containerized with Docker.',
    tools: ['Apache Spark', 'Airflow', 'Docker', 'Python'],
    image: 'https://via.placeholder.com/600x400/E8F0FF/0066FF?text=ETL+Pipeline',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="container-custom">
        <h2 className="section-heading text-center">Featured Projects</h2>
        <p className="text-center section-subheading mx-auto">
          Explore some of my recent work and technical solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
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
                  className="text-portfolio-blue font-medium hover:text-portfolio-darkblue flex items-center transition-all"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
