import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Cloud } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Vamshi
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Krishna
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl text-blue-300 font-medium">
                  Data Analyst & Engineer
                </h2>
                <div className="flex flex-wrap gap-3 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <Database className="w-4 h-4" />
                    Data Engineering
                  </span>
                  <span className="flex items-center gap-1">
                    <Cloud className="w-4 h-4" />
                    Cloud Analytics
                  </span>
                  <span className="flex items-center gap-1">
                    <Code className="w-4 h-4" />
                    Business Intelligence
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Building robust data pipelines and insightful analytics solutions that drive{" "}
              <span className="text-cyan-300 font-semibold">business growth</span>.
              Transforming complex data into actionable insights using modern tools 
              and cloud technologies.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">4+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">300+</div>
                <div className="text-sm text-white/60">Stores Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">5TB+</div>
                <div className="text-sm text-white/60">Data Processed</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <a href="#projects" className="flex items-center justify-center">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 px-8 py-6 rounded-lg font-medium text-lg hover:bg-white/20 transition-all duration-300">
                <a href="#contact" className="flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Outer Ring Animation */}
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{
                animationDuration: '20s'
              }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                {/* Inner Profile Circle */}
                <div className="absolute inset-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                  <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-transparent flex items-center justify-center">
                    <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                      VK
                    </div>
                  </div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 animate-bounce">
                  <Database className="w-6 h-6 text-cyan-300" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 animate-bounce" style={{
                animationDelay: '1s'
              }}>
                  <Cloud className="w-6 h-6 text-blue-300" />
                </div>
                
                <div className="absolute top-1/4 -left-8 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 animate-bounce" style={{
                animationDelay: '2s'
              }}>
                  <Code className="w-6 h-6 text-purple-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;