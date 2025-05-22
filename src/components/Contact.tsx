
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-portfolio-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-portfolio-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="text-center section-subheading mx-auto">
          Have a question or want to work together? Reach out to me!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="w-full min-h-[150px] border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-darkblue hover:from-portfolio-darkblue hover:to-portfolio-blue transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="border-none shadow-lg h-full bg-gradient-to-br from-portfolio-blue/10 to-portfolio-lightblue/40 backdrop-blur-sm">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-portfolio-darkgray">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full shadow-md text-portfolio-blue">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Phone</p>
                      <p className="text-gray-600">(469) 312-0282</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full shadow-md text-portfolio-blue">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Email</p>
                      <p className="text-gray-600">vamshikrishna.b1219@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full shadow-md text-portfolio-blue">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/vamshik09" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-blue hover:underline"
                      >
                        linkedin.com/in/vamshik09
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium mb-4 text-lg">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/vamshik09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-all shadow-md"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    
                    <a 
                      href="mailto:vamshikrishna.b1219@gmail.com" 
                      className="bg-white p-4 rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-all shadow-md"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                    
                    <a 
                      href="tel:+14693120282" 
                      className="bg-white p-4 rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-all shadow-md"
                    >
                      <Phone className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
