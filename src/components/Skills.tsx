import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Database, Code, Cloud, BarChart3, Brain, Settings, Lightning } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <Settings className="w-4 h-4" /> },
    { id: 'languages', name: 'Languages', icon: <Code className="w-4 h-4" /> },
    { id: 'dataeng', name: 'Data Engineering', icon: <Database className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Platforms', icon: <Cloud className="w-4 h-4" /> },
    { id: 'visualization', name: 'Visualization', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'ml', name: 'ML/AI', icon: <Brain className="w-4 h-4" /> },
    { id: 'salesforce', name: 'Salesforce', icon: <Lightning className="w-4 h-4" /> }
  ];

  const skillCategories = {
    languages: [
      { name: 'Python', level: 90, description: 'Data analysis, automation, ML' },
      { name: 'SQL', level: 85, description: 'Complex queries, optimization' },
      { name: 'R', level: 75, description: 'Statistical analysis, modeling' },
      { name: 'Shell Scripting', level: 70, description: 'Automation, system administration' }
    ],
    dataeng: [
      { name: 'Apache Airflow', level: 85, description: 'Workflow orchestration' },
      { name: 'Apache Spark', level: 80, description: 'Big data processing' },
      { name: 'Kafka', level: 75, description: 'Real-time data streaming' },
      { name: 'SSIS', level: 80, description: 'ETL pipeline development' },
      { name: 'Informatica', level: 75, description: 'Enterprise data integration' }
    ],
    cloud: [
      { name: 'Azure', level: 85, description: 'Databricks, Data Factory, SQL DB' },
      { name: 'AWS', level: 80, description: 'S3, Lambda, RDS, Redshift' },
      { name: 'GCP', level: 75, description: 'BigQuery, Cloud Functions' }
    ],
    visualization: [
      { name: 'Power BI', level: 90, description: 'Interactive dashboards, DAX' },
      { name: 'Tableau', level: 85, description: 'Advanced visualizations' },
      { name: 'Shiny', level: 70, description: 'R-based web applications' }
    ],
    ml: [
      { name: 'TensorFlow', level: 75, description: 'Deep learning models' },
      { name: 'Scikit-learn', level: 80, description: 'ML algorithms, preprocessing' },
      { name: 'Time-Series Forecasting', level: 80, description: 'ARIMA, Prophet, LSTM' },
      { name: 'NLP', level: 75, description: 'Text analysis, sentiment analysis' }
    ],
    salesforce: [
      { name: 'Platform Developer I', level: 85, description: 'Apex, Lightning, SOQL' },
      { name: 'Data Integration', level: 80, description: 'APIs, data connectors' }
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
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My comprehensive toolkit for data engineering, analysis, and visualization
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
                  <h3 className="text-2xl font-bold text-slate-800 capitalize">
                    {categories.find(cat => cat.id === categoryId)?.name}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-slate-800">{skill.name}</h4>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
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
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-slate-800 text-lg">{skill.name}</h4>
                    <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{skill.description}</p>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-700"
                      style={{ 
                        width: `${skill.level}%`,
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
