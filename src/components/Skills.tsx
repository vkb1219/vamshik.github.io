
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'dataeng', name: 'Data Engineering' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'databases', name: 'Databases' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'ml', name: 'ML/AI' },
    { id: 'devops', name: 'DevOps' },
    { id: 'salesforce', name: 'Salesforce' },
  ];
  
  const skills = [
    { name: 'Python', category: 'languages', level: 90 },
    { name: 'SQL', category: 'languages', level: 85 },
    { name: 'R', category: 'languages', level: 75 },
    { name: 'Shell Scripting', category: 'languages', level: 70 },
    { name: 'Apache Spark', category: 'dataeng', level: 80 },
    { name: 'Kafka', category: 'dataeng', level: 75 },
    { name: 'Airflow', category: 'dataeng', level: 85 },
    { name: 'SSIS', category: 'dataeng', level: 80 },
    { name: 'Informatica', category: 'dataeng', level: 75 },
    { name: 'AWS', category: 'cloud', level: 80 },
    { name: 'Azure', category: 'cloud', level: 85 },
    { name: 'GCP', category: 'cloud', level: 75 },
    { name: 'SQL Server', category: 'databases', level: 85 },
    { name: 'PostgreSQL', category: 'databases', level: 80 },
    { name: 'BigQuery', category: 'databases', level: 75 },
    { name: 'Power BI', category: 'visualization', level: 90 },
    { name: 'Tableau', category: 'visualization', level: 85 },
    { name: 'Shiny', category: 'visualization', level: 70 },
    { name: 'TensorFlow', category: 'ml', level: 75 },
    { name: 'Keras', category: 'ml', level: 70 },
    { name: 'Time-Series Forecasting', category: 'ml', level: 80 },
    { name: 'NLP', category: 'ml', level: 75 },
    { name: 'Docker', category: 'devops', level: 80 },
    { name: 'Kubernetes', category: 'devops', level: 70 },
    { name: 'Jenkins', category: 'devops', level: 75 },
    { name: 'Terraform', category: 'devops', level: 70 },
    { name: 'Platform Developer I', category: 'salesforce', level: 85 },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="bg-portfolio-gray py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-portfolio-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-portfolio-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="text-center section-subheading mx-auto">
          My technical toolbox and areas of expertise
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-portfolio-blue text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-portfolio-lightblue'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm font-semibold bg-portfolio-blue/10 text-portfolio-blue px-2 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-portfolio-blue to-portfolio-green h-2 rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${skill.level}%`, transitionDelay: `${index * 50}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
