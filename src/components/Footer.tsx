import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import logo from '@/assets/mind-marketers-logo-dark.png.asset.json';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'AI-Driven Marketing', href: '#' },
    { name: 'SEO & Content', href: '#' },
    { name: 'Paid Advertising', href: '#' },
    { name: 'LinkedIn Branding', href: '#' },
    { name: 'Social Media', href: '#' },
    { name: 'Web Development', href: '#' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/mind-marketers/' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/mindmarketersagency/' },
    { name: 'Pinterest', icon: FaPinterestP, href: 'https://in.pinterest.com/mindmarketers/' },
    { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/mindmarketer' },
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 gradient-primary rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo.url} alt="Mind Marketers" className="h-16 w-auto" />
            </div>
            
            <p className="font-semibold text-foreground mb-3">
              We build brands impossible to ignore.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We combine AI-driven strategies with creative excellence to deliver unprecedented growth for ambitious brands.
            </p>


            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:mindmarketerssupport@gmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                  mindmarketerssupport@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+918882911596" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 88829 11596
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground leading-relaxed">
                  Ground floor Plot no. 57, Industrial Area Phase I, Chandigarh, 160002
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient">Stay Updated</h3>
            
            <p className="text-muted-foreground mb-6 text-sm">
              Get the latest marketing insights and strategies delivered to your inbox.
            </p>

            {/* Newsletter Form */}
            <div className="mb-8">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-card border border-border rounded-l-lg focus:outline-none focus:border-accent text-sm"
                />
                <button className="px-6 py-3 gradient-glow rounded-r-lg text-white font-medium hover:glow-primary transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-accent hover:glow-secondary"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2026 Mind Marketers. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;