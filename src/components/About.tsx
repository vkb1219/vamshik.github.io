
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container-custom">
        <h2 className="section-heading text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg mb-6">
            Vamshi Krishna is a data-driven professional with a Master's in Business Analytics from Trine University
            and a background in Commerce & Computer Science. He specializes in building scalable data infrastructure,
            automating ETL workflows, and enabling real-time analytics using cloud platforms like Azure, AWS, and GCP.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            With a blend of business insight and technical expertise, Vamshi delivers machine learning and
            data engineering solutions that drive measurable business outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-portfolio-lightblue p-6 rounded-lg">
              <div className="text-portfolio-blue text-4xl font-bold mb-2">MSc</div>
              <h3 className="text-xl font-medium mb-1">Master's in Business Analytics</h3>
              <p className="text-gray-600">Trine University, 2024</p>
            </div>
            
            <div className="bg-portfolio-lightblue p-6 rounded-lg">
              <div className="text-portfolio-blue text-4xl font-bold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-1">Salesforce Platform Developer I</h3>
              <p className="text-gray-600">Certified</p>
            </div>
            
            <div className="bg-portfolio-lightblue p-6 rounded-lg">
              <div className="text-portfolio-blue text-4xl font-bold mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-1">Technical Expertise</h3>
              <p className="text-gray-600">Python, SQL, Cloud-native tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
