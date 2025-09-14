import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, Zap } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-deep-gray/50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="pulse-glow absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="pulse-glow absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-primary/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6A00' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Glitch Effect 404 */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-gradient leading-none relative">
              404
              <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold opacity-70 animate-pulse">
                <span className="text-accent/50">4</span>
                <span className="text-primary/50">0</span>
                <span className="text-accent/50">4</span>
              </div>
            </h1>
          </div>

          {/* Glowing Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center glow-primary animate-pulse">
              <Search className="w-10 h-10 text-accent" />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Oops… Looks like you took a wrong turn in the <span className="text-gradient">digital universe</span>.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              But don't worry, we'll get you back on track. The page you're looking for doesn't exist in our system.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/" className="btn-hero flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Go Back Home
            </Link>
            <Link to="/services/ai-marketing" className="btn-outline flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Explore Our Services
            </Link>
          </div>

          {/* Futuristic Digital Element */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto glass rounded-full border border-primary/20 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-dashed border-accent/30 rounded-full animate-spin flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full glow-primary animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full glow-secondary animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/20 rounded-full glow-primary animate-bounce delay-500"></div>
            <div className="absolute top-8 -right-8 w-4 h-4 bg-primary-glow/30 rounded-full glow-secondary animate-bounce delay-1000"></div>
          </div>

          {/* Footer Links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/services/ai-marketing" className="text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
