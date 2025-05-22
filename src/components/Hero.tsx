
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-portfolio-lightblue via-white to-portfolio-lightblue/30">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in space-y-6">
          <div className="inline-block px-4 py-2 bg-portfolio-blue/10 rounded-full mb-2">
            <span className="text-portfolio-blue font-medium">Data Professional</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkgray">
            Vamshi <span className="text-portfolio-blue">Krishna</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600">
            Data Analyst | Data Engineer | Salesforce Developer
          </h2>
          
          <p className="text-lg text-gray-700 max-w-lg">
            Building intelligent data systems for impactful decisions.
            Transforming raw data into actionable insights.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              asChild
              className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-6 py-6 rounded-lg font-medium transition-all duration-300"
            >
              <a href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="bg-white text-portfolio-blue border border-portfolio-blue px-6 py-6 rounded-lg font-medium hover:bg-portfolio-lightblue transition-all duration-300"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-green/10 blur-sm"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-portfolio-blue/20 blur-sm"></div>
            
            {/* Main profile image/placeholder */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-portfolio-blue via-portfolio-blue/80 to-portfolio-green rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-portfolio-blue to-portfolio-green text-white flex items-center justify-center text-7xl font-bold">
                VK
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="absolute top-0 right-0 bg-white rounded-full shadow-lg p-3 z-20 animate-fade-in">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-600">Experience</span>
                <span className="text-lg font-bold text-portfolio-darkgray">5+ Years</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-0 bg-white rounded-full shadow-lg p-3 z-20 animate-fade-in">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-600">Projects</span>
                <span className="text-lg font-bold text-portfolio-darkgray">15+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blob shapes for decoration */}
      <div className="hidden lg:block absolute top-32 left-0 w-72 h-72 bg-portfolio-blue/5 rounded-full filter blur-3xl z-0"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-portfolio-green/5 rounded-full filter blur-3xl z-0"></div>
    </section>
  );
};

export default Hero;
