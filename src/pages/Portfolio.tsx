
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Bridal', 'Commercial', 'Illustrations', 'Ready-to-Wear'];
  
  const projects = [
    {
      id: 1,
      title: "Elegance Bridal Collection",
      category: "Bridal",
      description: "A sophisticated bridal collection featuring intricate embroidery and modern silhouettes. Each piece tells a story of timeless elegance.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1000&fit=crop",
      tools: ["Adobe Illustrator", "Pattern Making", "Hand Embroidery"],
      year: "2024"
    },
    {
      id: 2,
      title: "Urban Fusion Collection",
      category: "Commercial",
      description: "Contemporary streetwear that blends traditional Pakistani elements with modern urban aesthetics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop",
      tools: ["CAD Design", "Textile Sourcing", "Technical Drawing"],
      year: "2024"
    },
    {
      id: 3,
      title: "Fashion Illustration Series",
      category: "Illustrations",
      description: "A collection of fashion illustrations showcasing various design concepts and seasonal trends.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Hand Drawing"],
      year: "2023"
    },
    {
      id: 4,
      title: "Minimalist Ready-to-Wear",
      category: "Ready-to-Wear",
      description: "Clean lines and sustainable fabrics come together in this minimalist ready-to-wear collection.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=1000&fit=crop",
      tools: ["Pattern Making", "Sustainable Fabrics", "Draping"],
      year: "2023"
    },
    {
      id: 5,
      title: "Avant-Garde Showcase",
      category: "Commercial",
      description: "Experimental designs pushing the boundaries of conventional fashion with bold shapes and innovative materials.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=1000&fit=crop",
      tools: ["3D Modeling", "Experimental Fabrics", "Innovative Construction"],
      year: "2024"
    },
    {
      id: 6,
      title: "Traditional Reimagined",
      category: "Bridal",
      description: "Classic Pakistani bridal wear reimagined with contemporary cuts and modern embellishments.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=1000&fit=crop",
      tools: ["Traditional Embroidery", "Modern Draping", "Beadwork"],
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
