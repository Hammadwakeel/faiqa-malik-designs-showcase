
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
