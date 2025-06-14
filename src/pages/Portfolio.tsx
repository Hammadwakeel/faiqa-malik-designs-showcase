
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Streetwear', 'Racing', 'Formal', 'Illustrations'];
  
  const projects = [
    {
      id: 1,
      title: "Motorsport Racing Jacket Collection",
      category: "Racing",
      description: "High-performance racing jackets featuring bold graphics and technical details. Designed for motorsport enthusiasts with attention to aerodynamics and style.",
      image: "/lovable-uploads/7ca5ea3c-8107-452a-b12b-dc64459c5214.png",
      tools: ["Adobe Illustrator", "Pattern Making", "Technical Drawing"],
      year: "2024"
    },
    {
      id: 2,
      title: "Tokyo Racing Street Edition",
      category: "Racing",
      description: "Street-inspired racing jacket with Japanese motorsport influences. Features custom patches and racing-inspired graphics.",
      image: "/lovable-uploads/2c9c2418-8c05-4f49-a27b-fab124efc173.png",
      tools: ["CAD Design", "Textile Sourcing", "Graphic Design"],
      year: "2024"
    },
    {
      id: 3,
      title: "New York Streetwear Collection",
      category: "Streetwear",
      description: "Urban-inspired jacket design featuring NYC boroughs and street culture elements. Modern fit with classic street style.",
      image: "/lovable-uploads/f3073f5b-bab4-4f01-b0ca-d2ae1d1a2c04.png",
      tools: ["Adobe Photoshop", "Pattern Making", "Urban Design"],
      year: "2024"
    },
    {
      id: 4,
      title: "Military-Inspired General Jacket",
      category: "Formal",
      description: "Formal jacket with military-inspired details and ranking elements. Professional design with tactical aesthetics.",
      image: "/lovable-uploads/1ec00232-19d4-47ae-9b45-eb4031a2ceb4.png",
      tools: ["Pattern Making", "Formal Construction", "Detail Work"],
      year: "2023"
    },
    {
      id: 5,
      title: "Motorsport Leather Jacket",
      category: "Racing",
      description: "Premium leather jacket design with racing heritage. Features custom racing graphics and performance-oriented construction.",
      image: "/lovable-uploads/bf5fd6a0-435b-4d0c-90be-fec47fd12d4f.png",
      tools: ["Leather Work", "Pattern Making", "Racing Design"],
      year: "2024"
    },
    {
      id: 6,
      title: "Urban Gasoline Collection",
      category: "Streetwear",
      description: "Contemporary streetwear design with motorsport influences. Clean lines and bold branding for urban fashion.",
      image: "/lovable-uploads/c33e2291-1d31-4155-b79d-2117be6fb5cf.png",
      tools: ["Modern Design", "Streetwear Construction", "Brand Development"],
      year: "2023"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-midnight-navy">
            Portfolio
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            A curated collection of my fashion design work, showcasing creativity, 
            technical skill, and artistic vision across various categories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-dusty-lavender text-white'
                  : 'bg-white text-slate-gray border-2 border-dusty-lavender hover:bg-dusty-lavender hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-midnight-navy/0 group-hover:bg-midnight-navy/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-dusty-lavender text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                  {project.year}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-midnight-navy p-3 rounded-full shadow-lg hover:bg-dusty-lavender hover:text-white transition-colors duration-200">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-playfair font-semibold text-midnight-navy">
                      {project.title}
                    </h3>
                    <span className="text-sm text-dusty-lavender font-inter font-medium bg-dusty-lavender/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-gray font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-inter font-medium text-midnight-navy">
                    Tools & Techniques:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-lavender-bg text-slate-gray px-2 py-1 rounded font-inter"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-lavender-bg rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-midnight-navy mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-slate-gray font-inter mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to discuss how we can bring your vision to life 
            through innovative fashion design.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-midnight-navy text-white font-inter font-medium rounded-lg hover:bg-midnight-navy/90 transition-colors duration-200 group"
          >
            Start a Project
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
