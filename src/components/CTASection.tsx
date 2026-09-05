import React from 'react';
import { Calendar, ArrowRight, Sparkles, Zap } from 'lucide-react';
import ctaBg from '@/assets/cta-bg.jpg';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-deep-gray">
        <img src={ctaBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" width={1536} height={768} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-deep-gray/70 to-background/80"></div>
        {/* Animated Gradient Streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 gradient-primary animate-pulse-glow"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 gradient-primary animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 left-0 w-full h-0.5 gradient-primary opacity-50 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-0.5 gradient-primary opacity-50 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-25 animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-float glow-secondary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8 glow-secondary">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Ready to Scale?</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gradient mb-2">Ready to grow your brand</span>
            <span className="block text-foreground">with AI-driven marketing?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 150+ successful brands that have transformed their growth trajectory with our proven AI-driven marketing strategies.
          </p>

          {/* Main CTA Button */}
          <div className="mb-12">
            <button className="btn-hero group text-xl px-12 py-6 flex items-center gap-4 mx-auto">
              <Calendar className="w-6 h-6" />
              Book a Free Strategy Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 glass p-4 rounded-2xl glow-secondary">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm">No Long-term Contracts</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass p-4 rounded-2xl glow-secondary">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm">30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass p-4 rounded-2xl glow-secondary">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm">Results in 30 Days or Less</span>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-outline text-lg px-8 py-3 flex items-center gap-3">
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-muted-foreground">
              or call us at{' '}
              <a href="tel:+918882911596" className="text-accent hover:underline font-semibold">
                +91 88829 11596
              </a>
            </div>
          </div>

          {/* Final Stats */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">24 Hours</div>
                <div className="text-muted-foreground text-sm">Average Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">300%</div>
                <div className="text-muted-foreground text-sm">Average Growth Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">$50M+</div>
                <div className="text-muted-foreground text-sm">Client Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;