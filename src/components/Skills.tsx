
import React, { useState } from 'react';

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
    <section id="skills" className="bg-portfolio-gray py-24">
      <div className="container-custom">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="text-center section-subheading mx-auto">
          My technical toolbox and areas of expertise
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-portfolio-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-portfolio-lightblue'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-portfolio-blue h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
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
