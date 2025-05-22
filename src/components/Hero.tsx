
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-24 bg-gradient-to-b from-portfolio-lightblue to-white">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkgray mb-4">
            Vamshi Krishna
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Data Analyst | Data Engineer | Salesforce Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Building intelligent data systems for impactful decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-blue/10 absolute -top-4 -right-4"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-gray rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              {/* This would be replaced with Vamshi's actual profile photo */}
              <div className="w-full h-full bg-gradient-to-br from-portfolio-blue to-portfolio-green text-white flex items-center justify-center text-6xl font-bold">
                VK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
