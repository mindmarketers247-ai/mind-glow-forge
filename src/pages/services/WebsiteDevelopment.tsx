import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Smartphone, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-deep-gray/50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="pulse-glow absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="pulse-glow absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Code className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Website Development</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Websites That <span className="text-gradient">Convert</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Build lightning-fast, mobile-optimized websites that turn visitors into customers with cutting-edge technology and user-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-hero">
                Start Your Website Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/case-studies" className="btn-outline">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Modern Websites <span className="text-gradient">Drive Growth</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your website is your most important sales tool. We build fast, secure, and conversion-optimized sites that work 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">Sub-2 second load times that keep visitors engaged and improve search rankings.</p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground">Responsive designs that look perfect on every device, from smartphones to desktops.</p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security measures to protect your business and customer data.</p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conversion Optimized</h3>
              <p className="text-muted-foreground">Every element designed to guide visitors toward taking action and becoming customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-deep-gray/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Development <span className="text-gradient">Process</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we follow a proven process that delivers exceptional websites on time and on budget.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Strategy</h3>
                <p className="text-muted-foreground">Understand your goals, audience, and technical requirements to plan the perfect solution.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Design & Wireframing</h3>
                <p className="text-muted-foreground">Create stunning visual designs and user experiences that align with your brand identity.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Development & Testing</h3>
                <p className="text-muted-foreground">Build with modern technologies and rigorous testing across all devices and browsers.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
            </div>
            
            <div>
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
                <p className="text-muted-foreground">Deploy your website and provide ongoing maintenance, updates, and technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-medium text-accent">Success Story</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">E-commerce Site Boosted Conversions by 185% with New Design</h3>
                  <p className="text-muted-foreground mb-6">
                    A retail brand transformed their online presence with a modern, conversion-optimized website that drives sales.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Page load speed: 3x faster</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Conversion rate: +185%</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Mobile users: +240% engagement</span>
                    </li>
                  </ul>
                  <Link to="/case-studies" className="btn-outline">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="bg-card/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">185%</div>
                    <div className="text-muted-foreground mb-4">Conversion Boost</div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-500">3x</div>
                        <div className="text-xs text-muted-foreground">Faster Loading</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-500">100%</div>
                        <div className="text-xs text-muted-foreground">Mobile Ready</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">240%</div>
                        <div className="text-xs text-muted-foreground">Mobile Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/10 to-primary/20"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-primary/5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6A00' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale with <span className="text-gradient">Website Development</span>? Let's Talk.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 200+ businesses that trust us to build websites that convert visitors into customers.
            </p>
            <Link to="/contact" className="btn-hero text-lg px-8 py-4">
              Get Your Website Quote
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;