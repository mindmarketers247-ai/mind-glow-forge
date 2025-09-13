import React from 'react';
import { Target, Zap, DollarSign, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PaidAds = () => {
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
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Paid Advertising</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Google & Meta</span><br />
            Paid Ads
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Scale your business fast with precision-targeted ad campaigns that deliver maximum ROI. 
            We turn your ad spend into predictable revenue growth.
          </p>

          <button className="btn-hero text-lg px-8 py-4">
            Launch Your First Campaign
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Paid Ads <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stop waiting for organic growth. Our AI-optimized paid advertising gets you instant visibility and qualified leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Results</h3>
              <p className="text-muted-foreground text-sm">
                Start generating leads and sales within 24 hours of campaign launch. No waiting for SEO.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Precise Targeting</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered audience targeting ensures your ads reach the exact people ready to buy.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">High ROI</h3>
              <p className="text-muted-foreground text-sm">
                Average 4-6x return on ad spend through continuous optimization and smart bidding strategies.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Growth</h3>
              <p className="text-muted-foreground text-sm">
                Start small, scale fast. Our campaigns grow with your success and budget expansion.
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
              From strategy to scale, we handle every aspect of your paid advertising campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Audit & Research</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze your market, competitors, and identify the highest-converting audience segments.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Campaign Setup</h3>
                <p className="text-muted-foreground text-sm">
                  Create compelling ad creatives, landing pages, and precision-targeted campaigns across Google and Meta.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Launch & Monitor</h3>
                <p className="text-muted-foreground text-sm">
                  Go live with campaigns and monitor performance 24/7 with real-time optimization algorithms.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center">
              <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Scale & Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously test, optimize, and scale winning campaigns while pausing underperformers.
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
                  <span className="text-gradient">650% ROI</span> in 90 Days
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  E-commerce brand scaled from $10K to $75K monthly revenue through our Google and Meta ad optimization, 
                  achieving industry-leading conversion rates.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">650%</div>
                    <div className="text-sm text-muted-foreground">ROI Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">$75K</div>
                    <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">$2.1M</div>
                    <div className="text-sm text-muted-foreground">Total Sales</div>
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
                    <DollarSign className="w-24 h-24 text-accent mx-auto mb-4" />
                    <div className="text-lg font-semibold">Revenue Growth</div>
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
            Ready to Scale with <span className="text-gradient">Paid Advertising</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop burning money on ineffective ads. Let's create campaigns that consistently deliver profitable results.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Get Your Free Ad Audit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaidAds;