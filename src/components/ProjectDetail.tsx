
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

export interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tools: string[];
    image: string;
    link: string;
    fullDescription?: string;
    challenge?: string;
    solution?: string;
    results?: string;
  };
}

const ProjectDetail = ({ isOpen, onClose, project }: ProjectDetailProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-portfolio-blue">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-600 mt-1">{project.description}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="rounded-md overflow-hidden mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
              <p className="text-gray-700">
                {project.fullDescription || "This project demonstrates advanced data processing techniques and machine learning applications in a real-world context."}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
              <p className="text-gray-700">
                {project.challenge || "The main challenge was processing large datasets efficiently while maintaining high accuracy in the predictive models."}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
              <p className="text-gray-700">
                {project.solution || "We implemented a custom algorithm that optimized for both speed and accuracy, leveraging the latest techniques in data science and machine learning."}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-gray-700">
                {project.results || "The implementation resulted in significant improvements in prediction accuracy and processing speed, providing valuable insights for decision-making."}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, index) => (
                  <Badge key={index} className="bg-portfolio-lightblue text-portfolio-blue">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            {project.link !== '#' && (
              <div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-blue font-medium hover:text-portfolio-darkblue transition-all"
                >
                  View Project Repository <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
