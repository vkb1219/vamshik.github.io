
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    position: "Data Analyst",
    company: "BTCM",
    period: "June 2024 - Present",
    responsibilities: [
      "Designed and automated ETL pipelines using Apache Airflow and PySpark, reducing manual intervention by 30% and improving data delivery efficiency for 300+ retail stores.",
      "Built scalable data pipelines on Azure Databricks to process and transform data from multiple sources (SQL Server, Oracle, Excel) for real-time reporting in Power BI.",
      "Optimized SQL queries and database schemas, improving query performance by 25% and reducing execution times.",
      "Containerized data workflows using Docker and orchestrated deployments with Kubernetes, improving scalability and reducing deployment times by 20%.",
      "Developed machine learning models using Python and TensorFlow to forecast customer behavior, improving marketing campaign ROI by 15%.",
      "Collaborated with cross-functional teams to implement data governance practices, ensuring data accuracy and compliance with privacy regulations.",
      "Implemented real-time monitoring dashboards using Grafana and Prometheus to track data pipeline performance, reducing troubleshooting time by 40%.",
      "Led the migration of on-premises data infrastructure to cloud platforms (AWS, Azure), resulting in 35% cost savings and improved system reliability.",
      "Created automated data quality validation frameworks using Python and Great Expectations, reducing data errors by 60% in production pipelines.",
      "Utilized NLP techniques on customer feedback data to extract actionable insights, directly contributing to a 12% improvement in customer satisfaction metrics."
    ]
  },
  {
    position: "Business Intelligence Developer",
    company: "KFintech Pvt Ltd",
    period: "April 2020 - December 2021",
    responsibilities: [
      "Designed and maintained ETL pipelines using SQL Server Integration Services (SSIS) and Informatica, reducing data delivery times by 30% and ensuring timely availability of financial data for 50+ reports.",
      "Integrated 10+ financial data sources into a centralized data warehouse, improving data consistency by 20% and enabling seamless access for analytics.",
      "Developed advanced SQL scripts and stored procedures to optimize data extraction, reducing processing times by 25%.",
      "Created Power BI dashboards to track mortgage lifecycle metrics, improving visibility into loan processing stages for stakeholders.",
      "Implemented data modeling techniques like star schema, snowflake schema to design efficient and scalable data warehouses, reducing storage costs by 15%.",
      "Automated CI/CD pipelines using Jenkins and Terraform, streamlining deployment processes and reducing errors by 15%.",
      "Spearheaded the implementation of a new data governance framework, ensuring GDPR compliance across all financial data processing systems.",
      "Designed and implemented a comprehensive data catalog using Azure Data Catalog, improving data discoverability by 45% for business analysts.",
      "Conducted training sessions for 30+ business users on self-service analytics tools, reducing dependency on the BI team by 25%.",
      "Led a critical data migration project for legacy financial systems, successfully migrating 5TB of historical data with zero downtime."
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
        <h2 className="section-heading text-center">Work Experience</h2>
        <p className="text-center section-subheading mx-auto">
          My professional journey and key accomplishments
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
