
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">About Me</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
            <p className="text-gray-700 text-lg mb-6">
              Vamshi Krishna is a data-driven professional with a Master's in Business Analytics from Trine University
              and a background in Commerce & Computer Science. He specializes in building scalable data infrastructure,
              automating ETL workflows, and enabling real-time analytics using cloud platforms like Azure, AWS, and GCP.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              With a blend of business insight and technical expertise, Vamshi delivers machine learning and
              data engineering solutions that drive measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-blue/10 flex items-center justify-center mb-4">
                  <Briefcase className="text-portfolio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-1">Master's in Business Analytics</h3>
                <p className="text-gray-600">Trine University, 2024</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-blue/10 flex items-center justify-center mb-4">
                  <Award className="text-portfolio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-1">Salesforce Platform Developer I</h3>
                <p className="text-gray-600">Certified</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-blue/10 flex items-center justify-center mb-4">
                  <Code className="text-portfolio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-1">Technical Expertise</h3>
                <p className="text-gray-600">Python, SQL, Cloud-native tools</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
