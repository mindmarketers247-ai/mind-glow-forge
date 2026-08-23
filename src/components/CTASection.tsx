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
            <span className="text-sm font-medium text-accent">Let's Talk</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gradient mb-2">Ready to Build a</span>
            <span className="block text-foreground">Stronger Brand?</span>
          </h2>

          <p className="text-2xl font-semibold mb-6">
            Let's figure out what your marketing actually needs.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need stronger founder branding, better search visibility, more qualified leads, or a digital presence that finally reflects the quality of your business, we'll help you identify the right next move.
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
              <span className="text-sm">No generic packages</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass p-4 rounded-2xl glow-secondary">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm">No unnecessary services</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass p-4 rounded-2xl glow-secondary">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm">Just a clear conversation about your goals</span>
            </div>
          </div>

          {/* Let's Talk */}
          <div className="pt-12 border-t border-border">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Let's Talk</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or simply want to know what's possible?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-outline text-lg px-8 py-3 flex items-center gap-3">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-muted-foreground">
                or call us at{' '}
                <a href="tel:+918360221177" className="text-accent hover:underline font-semibold">
                  +91 83602 21177
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">24 Hours</div>
                <div className="text-muted-foreground text-sm">Typical Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">Strategy First</div>
                <div className="text-muted-foreground text-sm">Every engagement starts with understanding your goals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">Built for Growth</div>
                <div className="text-muted-foreground text-sm">Marketing aligned with your business objectives</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;