
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cpu, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: 'Data Engineering Solutions',
      description: 'Custom ETL pipelines, cloud-based data lakes, real-time processing with Apache Spark & Kafka.',
      icon: <Database className="h-12 w-12" />,
    },
    {
      title: 'ML Model Development & Consulting',
      description: 'End-to-end development including data cleaning, feature engineering, model selection, training, evaluation, deployment (Docker + APIs), and monitoring.',
      icon: <Cpu className="h-12 w-12" />,
    },
    {
      title: 'BI & Reporting',
      description: 'Interactive dashboards in Power BI and Tableau, business metric reporting, and stakeholder insights.',
      icon: <BarChart3 className="h-12 w-12" />,
    },
  ];

  return (
    <section id="services" className="bg-portfolio-gray py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-heading text-center">What I Offer</h2>
        <p className="text-center section-subheading mx-auto">
          Professional services to help your business leverage data effectively
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-green flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
