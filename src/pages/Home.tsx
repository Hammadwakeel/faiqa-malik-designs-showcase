
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Instagram, Mail } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

const Home = () => {
  // Get first 6 projects for featured work
  const featuredProjects = portfolioProjects.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-bg via-white to-dusty-lavender/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-midnight-navy leading-tight">
                  Faiqa
                  <span className="block text-dusty-lavender">Malik</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-gray font-inter font-light">
                  Fashion Designer
                </p>
              </div>

              <p className="text-lg text-slate-gray font-inter leading-relaxed max-w-lg">
                Driven visionary Fashion Designer with over four years of hands-on experience 
                turning bold concepts into runway-ready collections.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 bg-midnight-navy text-white font-inter font-medium rounded-lg hover:bg-midnight-navy/90 transition-colors duration-200 group"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-dusty-lavender text-midnight-navy font-inter font-medium rounded-lg hover:bg-dusty-lavender hover:text-white transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="https://instagram.com/designer_faiqamalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-dusty-lavender transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:designerfaiqamalik7@gmail.com"
                  className="text-slate-gray hover:text-dusty-lavender transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1200&fit=crop"
                  alt="Faiqa Malik - Fashion Designer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 border border-dusty-lavender/20">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-midnight-navy">4+</div>
                  <div className="text-sm text-slate-gray font-inter">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-midnight-navy">
              Crafting Fashion Stories
            </h2>
            <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto leading-relaxed">
              Passionate about fusing art and innovation, I excel at trend forecasting, team leadership, 
              and delivering standout designs that captivate both clients and markets. With a sharp eye 
              for detail and a flair for collaborative problem-solving, I lead projects from initial 
              sketch to final stitch—always pushing the boundaries of style.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 text-dusty-lavender font-inter font-medium hover:text-midnight-navy transition-colors duration-200 group"
            >
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-gradient-to-br from-dusty-lavender/20 via-lavender-bg to-peach-accent/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-slate-gray font-inter max-w-2xl mx-auto">
              A glimpse into my design journey and creative process
            </p>
          </div>

          {/* Sliding Animation Container */}
          <div className="relative">
            <div className="flex space-x-8" style={{ animation: 'slide-left 15s linear infinite' }}>
              {/* First set of projects */}
              {featuredProjects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-80 group cursor-pointer">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-white via-lavender-bg to-dusty-lavender/10 p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/10 via-transparent to-dusty-lavender/5 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-gray font-inter text-sm">
                    {project.description.substring(0, 80)}...
                  </p>
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {featuredProjects.map((project) => (
                <div key={`duplicate-${project.id}`} className="flex-shrink-0 w-80 group cursor-pointer">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-white via-lavender-bg to-dusty-lavender/10 p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/10 via-transparent to-dusty-lavender/5 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-gray font-inter text-sm">
                    {project.description.substring(0, 80)}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-dusty-lavender to-peach-accent text-white font-inter font-medium rounded-lg hover:from-dusty-lavender/90 hover:to-peach-accent/90 transition-all duration-200 group shadow-lg"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
