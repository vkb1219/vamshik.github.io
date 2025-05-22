
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-portfolio-darkgray">
          VK<span className="text-portfolio-blue">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#contact" className="btn-primary">Get in Touch</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-portfolio-darkgray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col space-y-4">
          <a href="#home" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#services" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
