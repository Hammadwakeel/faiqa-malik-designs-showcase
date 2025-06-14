
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Contemporary', 'Minimalist', 'Formal', 'Streetwear', 'Technical'];
  
  const projects = [
    {
      id: 1,
      title: "Motorsport Racing Jacket Collection",
      category: "Streetwear",
      description: "High-performance racing jackets featuring bold graphics and technical details. Designed for motorsport enthusiasts with attention to aerodynamics and style.",
      image: "/lovable-uploads/7ca5ea3c-8107-452a-b12b-dc64459c5214.png",
      tools: ["Adobe Illustrator", "Pattern Making", "Technical Drawing"],
      year: "2024"
    },
    {
      id: 2,
      title: "Tokyo Racing Street Edition",
      category: "Streetwear",
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
      category: "Streetwear",
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
    },
    {
      id: 7,
      title: "Minimalist Button-Up Collection",
      category: "Minimalist",
      description: "Clean lines and neutral tones define this sophisticated button-up shirt. Perfect for modern professional wardrobes.",
      image: "/lovable-uploads/01054f50-abaa-4fde-878b-239ba22b59d6.png",
      tools: ["Pattern Making", "Minimalist Design", "Textile Selection"],
      year: "2024"
    },
    {
      id: 8,
      title: "Navy Textured Oversized Shirt",
      category: "Contemporary",
      description: "Oversized silhouette in rich navy with subtle textural details. Modern comfort meets sophisticated design.",
      image: "/lovable-uploads/c9bb77c8-4338-49b6-9001-5a316abcaab9.png",
      tools: ["Draping", "Texture Work", "Contemporary Design"],
      year: "2024"
    },
    {
      id: 9,
      title: "Navy Button-Front Relaxed Fit",
      category: "Contemporary",
      description: "Relaxed button-front design with ribbed texture. Combines comfort with effortless style for everyday wear.",
      image: "/lovable-uploads/9b1b6098-e983-431a-ac10-3af5192e769a.png",
      tools: ["Relaxed Fit Design", "Ribbed Textures", "Pattern Making"],
      year: "2024"
    },
    {
      id: 10,
      title: "Olive Oversized Longline Shirt",
      category: "Contemporary",
      description: "Earthy olive tone in an oversized longline silhouette. Perfect for layering with modern street-inspired aesthetics.",
      image: "/lovable-uploads/743b35be-eb8e-403e-9555-29c0b89be375.png",
      tools: ["Oversized Pattern", "Color Theory", "Longline Construction"],
      year: "2024"
    },
    {
      id: 11,
      title: "Olive Button-Down Classic",
      category: "Minimalist",
      description: "Classic button-down reimagined in rich olive. Timeless design with contemporary proportions and finish.",
      image: "/lovable-uploads/8fe0c802-1915-4dfc-9895-441325e4fffc.png",
      tools: ["Classic Tailoring", "Color Matching", "Detail Work"],
      year: "2024"
    },
    {
      id: 12,
      title: "Wide-Leg Cargo Pants",
      category: "Contemporary",
      description: "Utilitarian-inspired wide-leg pants with functional cargo pockets. Modern interpretation of classic workwear.",
      image: "/lovable-uploads/e4488046-af7f-489b-8edf-40c83ab93e83.png",
      tools: ["Cargo Design", "Wide-Leg Pattern", "Functional Design"],
      year: "2024"
    },
    {
      id: 13,
      title: "Cropped Waffle Knit Top",
      category: "Contemporary",
      description: "Textured waffle knit in a flattering cropped silhouette. Combines comfort with contemporary styling.",
      image: "/lovable-uploads/4917c91c-ac7a-4d6d-b9f2-07ca3fe4e1b0.png",
      tools: ["Knit Construction", "Cropped Design", "Texture Development"],
      year: "2024"
    },
    {
      id: 14,
      title: "Cargo Pants with Bomber Set",
      category: "Streetwear",
      description: "Coordinated set featuring wide cargo pants and oversized bomber jacket. Perfect for urban street style.",
      image: "/lovable-uploads/ddf339b1-87f0-4d28-aadc-e1f17410e48f.png",
      tools: ["Set Design", "Cargo Construction", "Streetwear Aesthetics"],
      year: "2024"
    },
    {
      id: 15,
      title: "Layered Knit Ensemble",
      category: "Minimalist",
      description: "Sophisticated layering with waffle knit cardigan over ribbed tank. Neutral palette with texture focus.",
      image: "/lovable-uploads/c1149770-1e8c-4dcd-8e66-126f91f30e91.png",
      tools: ["Layering Design", "Knit Techniques", "Neutral Styling"],
      year: "2024"
    },
    {
      id: 16,
      title: "Boujee Streetwear Collection",
      category: "Streetwear",
      description: "Bold streetwear ensemble featuring cargo pants and branded styling. Contemporary urban fashion with attitude.",
      image: "/lovable-uploads/1d478f13-7cd4-44a0-8700-3a93779fdc25.png",
      tools: ["Brand Development", "Streetwear Design", "Urban Styling"],
      year: "2024"
    },
    {
      id: 17,
      title: "Burgundy Technical Shirt Design",
      category: "Technical",
      description: "Technical fashion drawing showcasing patch pocket construction and spread collar design. Features detailed stitching and U-tag placement.",
      image: "/lovable-uploads/152d74ae-0b8c-408c-ba56-a83c1803db40.png",
      tools: ["Technical Drawing", "CAD Design", "Pattern Construction"],
      year: "2024"
    },
    {
      id: 18,
      title: "Barrymore Cropped Jacket Technical",
      category: "Technical",
      description: "Detailed technical specification for cropped jacket featuring Barrymore collar, bishop sleeves, and dart construction.",
      image: "/lovable-uploads/3ff6183a-a2b1-408e-a472-30d677553fb5.png",
      tools: ["Technical Specification", "Pattern Making", "Detail Engineering"],
      year: "2024"
    },
    {
      id: 19,
      title: "Swallow-Tailed Shirt Technical",
      category: "Technical",
      description: "Technical drawing of swallow-tailed shirt with top-stitched square patch and fabric texture details. Professional construction specs.",
      image: "/lovable-uploads/4959c0a1-39b1-41ad-9b3f-4965c72d9507.png",
      tools: ["Technical Drawing", "Construction Details", "Pattern Engineering"],
      year: "2024"
    },
    {
      id: 20,
      title: "Navy Dress Shirt Technical",
      category: "Technical",
      description: "Technical specification for navy dress shirt with spread collar and three-button cuff construction. Detailed hem specifications.",
      image: "/lovable-uploads/68d555f0-027d-47d8-ab39-ed770c31a3df.png",
      tools: ["Technical Drawing", "Dress Shirt Construction", "Detail Work"],
      year: "2024"
    },
    {
      id: 21,
      title: "Knotted Barrymore Shirt",
      category: "Technical",
      description: "Technical drawing featuring Barrymore collar with knotted detail and bishop sleeves. Innovative construction with functional styling.",
      image: "/lovable-uploads/f0ba815d-6d7e-45a7-a24c-6a539c4e82c5.png",
      tools: ["Technical Specification", "Innovative Construction", "Detail Engineering"],
      year: "2024"
    },
    {
      id: 22,
      title: "Oversized T-Shirt Technical",
      category: "Technical",
      description: "Technical drawing of oversized t-shirt with spread collar, zipper detail, and mini cargo pocket. Modern streetwear construction.",
      image: "/lovable-uploads/b664106d-981d-494f-9c66-d548c6037857.png",
      tools: ["Streetwear Technical", "Oversized Construction", "Detail Work"],
      year: "2024"
    },
    {
      id: 23,
      title: "Cropped Shirt with Box Pleats",
      category: "Technical",
      description: "Technical specification for cropped shirt featuring box pleats and single-button cuff construction. Detailed engineering drawing.",
      image: "/lovable-uploads/9ad16900-0407-457f-8d07-a2c72ea91937.png",
      tools: ["Technical Drawing", "Pleat Construction", "Cropped Design"],
      year: "2024"
    },
    {
      id: 24,
      title: "Navy Center Back Technical",
      category: "Technical",
      description: "Technical drawing showcasing center back cut construction with two-button cuff and dress shirt hem details.",
      image: "/lovable-uploads/3300a1d8-1744-405d-be0e-917aea3f2360.png",
      tools: ["Technical Specification", "Back Construction", "Detail Engineering"],
      year: "2024"
    },
    {
      id: 25,
      title: "Sailor Cargo Pants Technical",
      category: "Technical",
      description: "Technical drawing of wide-leg sailor pants with long cargo pockets, flap details, and elastic waistband construction.",
      image: "/lovable-uploads/c91c9204-e5f3-4543-985d-4183777231d1.png",
      tools: ["Technical Drawing", "Cargo Construction", "Wide-leg Pattern"],
      year: "2024"
    },
    {
      id: 26,
      title: "Sweetheart Crop Camisol Technical",
      category: "Technical",
      description: "Technical specification for cropped camisole with sweetheart neckline and long armhole construction. Detailed pattern engineering.",
      image: "/lovable-uploads/3750e28c-6a75-4a7d-acac-8c14127feb13.png",
      tools: ["Technical Drawing", "Camisole Construction", "Neckline Engineering"],
      year: "2024"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 bg-gradient-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gradient-primary animate-gradient-shift">
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
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg transform scale-105 animate-gradient-shift'
                  : 'bg-white text-slate-gray border-2 border-dusty-lavender hover:bg-gradient-to-r hover:from-dusty-lavender/20 hover:to-midnight-navy/20 hover:text-midnight-navy hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-gradient-to-br from-white/80 to-dusty-lavender/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-dusty-lavender/20">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-white group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/0 via-transparent to-transparent group-hover:from-midnight-navy/30 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-secondary text-white px-3 py-1 rounded-full text-sm font-inter font-medium shadow-lg">
                  {project.year}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gradient-to-r from-white/90 to-dusty-lavender/20 backdrop-blur-sm text-midnight-navy p-3 rounded-full shadow-xl hover:bg-gradient-primary hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-playfair font-semibold text-gradient-primary">
                      {project.title}
                    </h3>
                    <span className="text-sm text-dusty-lavender font-inter font-medium bg-gradient-to-r from-dusty-lavender/10 to-peach-accent/10 px-2 py-1 rounded border border-dusty-lavender/20">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-gray font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-inter font-medium text-gradient-primary">
                    Tools & Techniques:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-r from-lavender-bg to-dusty-lavender/10 text-slate-gray px-2 py-1 rounded font-inter border border-dusty-lavender/10"
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
        <div className="text-center mt-20 bg-gradient-to-br from-lavender-bg/80 via-dusty-lavender/10 to-peach-accent/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-dusty-lavender/20 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient-primary animate-gradient-shift mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-slate-gray font-inter mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to discuss how we can bring your vision to life 
            through innovative fashion design.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white font-inter font-medium rounded-lg hover:bg-gradient-secondary transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105 animate-gradient-shift"
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
