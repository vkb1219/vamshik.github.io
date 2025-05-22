
import React from 'react';
import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-darkgray text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-portfolio-blue via-portfolio-green to-portfolio-blue"></div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-3xl font-display font-bold">
              VK<span className="text-portfolio-blue">.</span>
            </a>
            <p className="mt-2 text-gray-300 max-w-md">
              Building intelligent data systems for impactful decisions.
              Transforming raw data into actionable insights.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://linkedin.com/in/vamshik09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a 
                href="mailto:vamshikrishna.b1219@gmail.com" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
              
              <a 
                href="tel:+14693120282" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <div className="text-gray-400 text-sm flex items-center">
              <span>&copy; {new Date().getFullYear()} Vamshi Krishna. All rights reserved.</span>
              <Heart className="h-3 w-3 mx-1 text-portfolio-blue" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <nav className="flex justify-center space-x-8 mb-6 flex-wrap">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors py-1">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors py-1">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors py-1">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors py-1">Projects</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors py-1">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-1">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
