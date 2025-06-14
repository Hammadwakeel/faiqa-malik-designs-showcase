
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-midnight-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-dusty-lavender">
              Faiqa Malik
            </h3>
            <p className="text-gray-300 font-inter">
              Fashion Designer & Creative Leader
            </p>
            <p className="text-sm text-gray-400 font-inter">
              Turning bold concepts into runway-ready collections.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-dusty-lavender">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-dusty-lavender transition-colors duration-200 font-inter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-dusty-lavender">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:designerfaiqamalik7@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-dusty-lavender transition-colors duration-200 font-inter"
              >
                <Mail size={16} />
                <span>designerfaiqamalik7@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/designer_faiqamalik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-dusty-lavender transition-colors duration-200 font-inter"
              >
                <Instagram size={16} />
                <span>@designer_faiqamalik</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm font-inter">
            © {new Date().getFullYear()} Faiqa Malik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
