
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    position: "Data Analyst",
    company: "BTCM",
    period: "June 2024 - Present",
    responsibilities: [
      "Developed automated ETL pipelines using Apache Airflow and PySpark, reducing manual data processing by 30% for 300+ retail stores.",
      "Built scalable data solutions on Azure Databricks to process data from multiple sources (SQL Server, Oracle, Excel) for Power BI reporting.",
      "Optimized SQL queries and improved database performance by 25%, reducing report generation times significantly.",
      "Implemented containerized data workflows using Docker, improving deployment efficiency and system reliability.",
      "Created machine learning models using Python and TensorFlow for customer behavior analysis, supporting marketing initiatives.",
      "Collaborated with business teams to implement data quality standards and ensure accurate reporting across departments.",
      "Developed monitoring dashboards using Grafana to track data pipeline performance and reduce troubleshooting time by 40%.",
      "Supported cloud migration initiatives from on-premises to AWS and Azure, contributing to 35% cost savings.",
      "Built automated data validation frameworks using Python, reducing data errors in production by 60%.",
      "Applied NLP techniques to analyze customer feedback data, providing insights that improved customer satisfaction metrics by 12%."
    ]
  },
  {
    position: "Business Intelligence Developer",
    company: "KFintech Pvt Ltd",
    period: "April 2018 - December 2021",
    responsibilities: [
      "Designed and maintained ETL pipelines using SSIS and Informatica, improving data delivery efficiency by 30% for financial reporting.",
      "Integrated multiple financial data sources into a centralized data warehouse, enhancing data consistency by 20%.",
      "Developed optimized SQL scripts and stored procedures, reducing data processing times by 25% for critical reports.",
      "Created comprehensive Power BI dashboards for mortgage lifecycle tracking, providing stakeholders with real-time insights.",
      "Implemented star and snowflake schema designs for data warehouse optimization, reducing storage costs by 15%.",
      "Automated deployment processes using Jenkins, streamlining releases and reducing errors by 15%.",
      "Ensured GDPR compliance across financial data processing systems through improved data governance practices.",
      "Implemented Azure Data Catalog for better data discoverability, improving analyst productivity by 45%.",
      "Conducted training sessions for business users on self-service analytics tools, reducing BI team dependency by 25%.",
      "Successfully managed data migration for legacy financial systems, processing 5TB of historical data with zero downtime."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-portfolio-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-portfolio-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-heading text-center">Professional Experience</h2>
        <p className="text-center section-subheading mx-auto">
          My career journey in data analytics and engineering
        </p>
        
        <div className="space-y-12 mt-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center mr-4">
                      <Briefcase className="text-portfolio-blue h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-portfolio-darkgray">{exp.position}</h3>
                      <h4 className="text-xl font-medium text-portfolio-blue">{exp.company}</h4>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <Calendar className="text-portfolio-blue h-5 w-5 mr-2" />
                    <span className="text-gray-600">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 list-disc pl-5 text-gray-700">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li key={rIndex}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
