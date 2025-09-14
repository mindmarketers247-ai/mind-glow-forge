import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import mindMarketersLogo from '@/assets/mind-marketers-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'AI-Driven Marketing', path: '/services/ai-marketing' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Content Marketing', path: '/services/content-marketing' },
    { name: 'Paid Ads', path: '/services/paid-ads' },
    { name: 'LinkedIn Branding', path: '/services/linkedin-branding' },
    { name: 'Social Media', path: '/services/social-media' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Funnel Development', path: '/services/funnel-development' },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={mindMarketersLogo} 
              alt="Mind Marketers" 
              className="h-10 w-auto group-hover:animate-pulse-glow transition-all duration-300"
            />
            <span className="text-xl font-bold text-gradient hidden md:block">
              Mind Marketers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/about') ? 'text-accent' : 'text-foreground'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-filter backdrop-blur-xl rounded-xl border border-white/20 shadow-elegant transition-all duration-300 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-3 text-sm text-foreground hover:text-accent hover:bg-white/5 transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/case-studies') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/blog') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/contact') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="btn-hero ml-4"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-screen pb-6' : 'max-h-0 overflow-hidden'}`}>
          <div className="space-y-4 pt-4">
            <Link
              to="/"
              className={`block text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/') ? 'text-accent' : 'text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/about') ? 'text-accent' : 'text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Services</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block pl-4 text-sm text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/case-studies"
              className={`block text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/case-studies') ? 'text-accent' : 'text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className={`block text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/blog') ? 'text-accent' : 'text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`block text-sm font-medium transition-colors hover:text-accent ${
                isActiveRoute('/contact') ? 'text-accent' : 'text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="btn-hero inline-block mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;