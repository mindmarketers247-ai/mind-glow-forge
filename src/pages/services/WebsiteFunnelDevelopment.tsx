import React from 'react';
import { Globe, Zap, TrendingUp, Code, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const WebsiteFunnelDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Web Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Website & Funnel</span><br />
            Development
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Build high-converting websites and sales funnels that turn visitors into customers. 
            Lightning-fast, mobile-optimized, and designed for maximum conversions.
          </p>

          <button className="btn-hero text-lg px-8 py-4">
            Build Your Conversion Machine
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Your Website <span className="text-gradient">Needs to Convert</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A beautiful website is worthless if it doesn't convert. We build conversion-focused experiences that turn traffic into revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Sub-3 second load times that keep visitors engaged and improve your search rankings.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversion Optimized</h3>
              <p className="text-muted-foreground text-sm">
                Every element is designed and positioned to guide visitors toward taking action.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile First</h3>
              <p className="text-muted-foreground text-sm">
                Responsive design that looks perfect and converts on any device, any screen size.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Tech</h3>
              <p className="text-muted-foreground text-sm">
                Built with cutting-edge technologies for security, scalability, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-deep-gray/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From wireframes to launch, we create websites that look amazing and convert like crazy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Define goals, map user journeys, and create a conversion-focused architecture.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Design & Prototype</h3>
                <p className="text-muted-foreground text-sm">
                  Create stunning designs and interactive prototypes that wow your audience.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Development</h3>
                <p className="text-muted-foreground text-sm">
                  Build with modern frameworks for speed, security, and seamless user experience.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center">
              <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Launch & Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Deploy, test, and continuously optimize based on real user data and behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass card-glow p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-10"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Success Story</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">320% Conversion</span> Increase
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  SaaS startup redesigned their landing page and sales funnel, resulting in a 320% increase 
                  in trial signups and $1.2M additional ARR in the first quarter.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">320%</div>
                    <div className="text-sm text-muted-foreground">Conversion Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">$1.2M</div>
                    <div className="text-sm text-muted-foreground">Additional ARR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">1.8s</div>
                    <div className="text-sm text-muted-foreground">Load Time</div>
                  </div>
                </div>
                
                <button className="btn-secondary flex items-center gap-3">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-accent mx-auto mb-4" />
                    <div className="text-lg font-semibold">Conversion Machine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-gray/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale with <span className="text-gradient">Website & Funnel Development</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop losing customers to slow, ugly websites. Let's build you a conversion machine that works 24/7.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteFunnelDevelopment;