
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Briefcase, Target, Zap, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Data Pipeline Development",
      description: "Built robust ETL pipelines serving 300+ retail locations",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization", 
      description: "Achieved 40% reduction in data processing times",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Business Intelligence",
      description: "Delivered actionable insights driving business growth",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Cross-functional Collaboration",
      description: "Worked with stakeholders across multiple departments",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 to-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNMjAgMjBMMjAgNDBNNDAgMjBMNDAgNDBNMCAyMEwwIDQwIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Crafting Data Solutions That Drive Results
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A passionate data professional with 4+ years of experience transforming raw data into 
              actionable insights and building scalable data solutions that empower business decisions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Professional Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Professional Journey</h3>
                </div>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800">Master's in Business Analytics</strong> from Trine University, 
                    with hands-on experience in modern data engineering and analytics practices.
                  </p>
                  <p>
                    Specialized in building <strong className="text-slate-800">data pipelines and analytics solutions</strong> 
                    using cloud technologies, with proven expertise in Azure, AWS, and modern data stack tools.
                  </p>
                  <p>
                    Led data initiatives that resulted in 
                    <strong className="text-slate-800"> 35% cost optimization</strong> and 
                    <strong className="text-slate-800"> 60% improvement in data accuracy</strong> across production systems.
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 h-5 w-5 mr-2" />
                  <h4 className="font-semibold text-slate-800">Professional Certifications</h4>
                </div>
                <div className="space-y-2 text-slate-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Salesforce Platform Developer I - Certified</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Data Analytics & Visualization Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Cloud Data Engineering Practices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 text-white`}>
                      {achievement.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{achievement.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Preview */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Core Technical Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Python & SQL", "Data Engineering", "Cloud Platforms", 
                "Business Intelligence", "ETL/ELT Pipelines", "Data Visualization",
                "Machine Learning", "Analytics & Reporting"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
