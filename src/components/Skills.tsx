
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Database, Code, Cloud, BarChart3, Brain, Settings, Zap } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <Settings className="w-4 h-4" /> },
    { id: 'languages', name: 'Programming Languages', icon: <Code className="w-4 h-4" /> },
    { id: 'dataeng', name: 'Data Engineering', icon: <Database className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Platforms', icon: <Cloud className="w-4 h-4" /> },
    { id: 'visualization', name: 'Data Visualization', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'ml', name: 'Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'salesforce', name: 'Salesforce Platform', icon: <Zap className="w-4 h-4" /> }
  ];

  const skillCategories = {
    languages: [
      { name: 'Python', description: 'Data analysis, scripting, automation' },
      { name: 'SQL', description: 'Database queries, data manipulation' },
      { name: 'R', description: 'Statistical analysis, data modeling' },
      { name: 'Shell Scripting', description: 'Automation and system tasks' }
    ],
    dataeng: [
      { name: 'Apache Airflow', description: 'Workflow orchestration and scheduling' },
      { name: 'Apache Spark', description: 'Large-scale data processing' },
      { name: 'Apache Kafka', description: 'Real-time data streaming' },
      { name: 'SSIS', description: 'SQL Server Integration Services' },
      { name: 'Informatica', description: 'Enterprise data integration platform' },
      { name: 'ETL/ELT Pipelines', description: 'Data extraction and transformation' }
    ],
    cloud: [
      { name: 'Microsoft Azure', description: 'Databricks, Data Factory, SQL Database' },
      { name: 'Amazon AWS', description: 'S3, Lambda, RDS, Redshift services' },
      { name: 'Google Cloud', description: 'BigQuery, Cloud Functions, Storage' }
    ],
    visualization: [
      { name: 'Power BI', description: 'Interactive dashboards and reports' },
      { name: 'Tableau', description: 'Advanced data visualizations' },
      { name: 'Python Visualization', description: 'Matplotlib, Seaborn, Plotly' },
      { name: 'R Shiny', description: 'Interactive web applications' }
    ],
    ml: [
      { name: 'TensorFlow', description: 'Deep learning and neural networks' },
      { name: 'Scikit-learn', description: 'Machine learning algorithms' },
      { name: 'Time Series Analysis', description: 'Forecasting and trend analysis' },
      { name: 'Natural Language Processing', description: 'Text mining and sentiment analysis' }
    ],
    salesforce: [
      { name: 'Platform Developer I', description: 'Apex, Lightning Components, SOQL' },
      { name: 'Data Integration', description: 'APIs, connectors, data synchronization' },
      { name: 'Custom Objects & Fields', description: 'Schema design and customization' }
    ]
  };

  const getAllSkills = () => {
    return Object.entries(skillCategories).flatMap(([category, skills]) => 
      skills.map(skill => ({ ...skill, category }))
    );
  };

  const filteredSkills = activeCategory === 'all' 
    ? getAllSkills() 
    : skillCategories[activeCategory] || [];

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon;
  };

  return (
    <section id="skills" className="bg-gradient-to-br from-slate-50 to-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Technical Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive toolkit for data engineering, analysis, and visualization
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Skills Display */}
        {activeCategory === 'all' ? (
          // Category-based layout for 'all' view
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([categoryId, skills]) => (
              <div key={categoryId} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-white">
                      {getCategoryIcon(categoryId)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {categories.find(cat => cat.id === categoryId)?.name}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-100 hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-semibold text-slate-800 mb-2">{skill.name}</h4>
                      <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-700 w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Single category view
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="font-bold text-slate-800 text-lg mb-3">{skill.name}</h4>
                  <p className="text-sm text-slate-600 mb-4">{skill.description}</p>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-700 w-full"
                      style={{ 
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
