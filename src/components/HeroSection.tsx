import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import logo from '@/assets/mind-marketers-logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-deep-gray"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full animate-float glow-secondary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 animate-fade-in-up">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="Mind Marketers" 
            className="h-20 w-auto animate-float"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8 glow-secondary">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">AI-Driven Marketing Solutions</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-gradient">Smart Marketing,</span>
          <span className="block text-foreground">Real Results</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          We help startups, founders, and brands scale with AI-driven digital marketing strategies that deliver measurable growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-hero group flex items-center gap-3">
            Work With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="btn-outline group flex items-center gap-3">
            See Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">150+</div>
            <div className="text-muted-foreground">Brands Scaled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">$50M+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">300%</div>
            <div className="text-muted-foreground">Avg. Growth Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;