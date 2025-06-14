import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';

const ADMIN_EMAIL = "designerfaiqamalik7@gmail.com";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Chat', path: '/chat' },
    { name: 'Admin', path: '/admin' }, // Add Admin nav item
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-dusty-lavender/20 via-white to-peach-accent/20 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-dusty-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/669f9703-acb4-4ba3-8593-99f3277ddc61.png"
              alt="Faiqa Malik"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-midnight-navy to-dusty-lavender bg-clip-text text-transparent">
              Faiqa Malik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-dusty-lavender border-b-2 border-dusty-lavender pb-1'
                    : 'text-slate-gray hover:text-midnight-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* REMOVE: Show admin email at far right */}
            {/* <div className="ml-8 flex items-center space-x-4 border-l border-dusty-lavender/20 pl-6">
              <span className="text-xs text-dusty-lavender font-bold">
                {ADMIN_EMAIL}
              </span>
            </div> */}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-dusty-lavender/30">
              <a
                href="https://instagram.com/designer_faiqamalik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray hover:text-dusty-lavender transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:designerfaiqamalik7@gmail.com"
                className="text-slate-gray hover:text-dusty-lavender transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-gray hover:text-midnight-navy transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-dusty-lavender/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-dusty-lavender bg-dusty-lavender/10 rounded-md'
                      : 'text-slate-gray hover:text-midnight-navy hover:bg-gray-50 rounded-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* REMOVE: Admin email mobile */}
              {/* <div className="flex items-center space-x-2 px-3 py-2 mt-2 border-t border-dusty-lavender/20">
                <span className="text-xs text-dusty-lavender font-bold">{ADMIN_EMAIL}</span>
              </div> */}

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 px-3 py-2 border-t border-dusty-lavender/20 mt-4">
                <a
                  href="https://instagram.com/designer_faiqamalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-dusty-lavender transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:designerfaiqamalik7@gmail.com"
                  className="text-slate-gray hover:text-dusty-lavender transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
