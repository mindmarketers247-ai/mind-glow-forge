import React from 'react';
import { Search, FileText, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SEOContentMarketing = () => {
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
            <Search className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">SEO & Content Marketing</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">SEO & Content</span><br />
            Marketing
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Dominate search results and captivate your audience with AI-optimized content strategies 
            that drive organic traffic and convert visitors into customers.
          </p>

          <button className="btn-hero text-lg px-8 py-4">
            Start Growing Your Organic Traffic
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why SEO & Content <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's digital landscape, visibility is everything. Our data-driven approach ensures your content ranks higher and resonates deeper.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Rankings</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered keyword research and optimization strategies that get you to page 1 faster.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">More Traffic</h3>
              <p className="text-muted-foreground text-sm">
                Increase organic traffic by 300%+ with content that actually converts visitors to customers.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Authority</h3>
              <p className="text-muted-foreground text-sm">
                Establish thought leadership with content that positions you as the go-to expert in your field.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Content</h3>
              <p className="text-muted-foreground text-sm">
                AI-assisted content creation that's engaging, optimized, and designed to convert.
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
              A systematic approach that delivers measurable results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Discovery</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze your current SEO performance, competitors, and identify high-impact opportunities.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  Create a custom SEO and content roadmap with AI-powered keyword research and competitor analysis.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Execution</h3>
                <p className="text-muted-foreground text-sm">
                  Implement technical SEO fixes, create optimized content, and build authoritative backlinks.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center">
              <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-muted-foreground text-sm">
                Track rankings, traffic growth, and conversions with detailed monthly reports and ongoing optimization.
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
                  How We Increased Organic Traffic by <span className="text-gradient">547%</span>
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  TechStartup saw their organic traffic explode from 2K to 13K monthly visitors in just 6 months 
                  through our AI-driven SEO and content strategy.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">547%</div>
                    <div className="text-sm text-muted-foreground">Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">#1</div>
                    <div className="text-sm text-muted-foreground">Page Rankings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">280%</div>
                    <div className="text-sm text-muted-foreground">Lead Growth</div>
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
                    <TrendingUp className="w-24 h-24 text-accent mx-auto mb-4" />
                    <div className="text-lg font-semibold">Organic Growth</div>
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
            Ready to Scale with <span className="text-gradient">SEO & Content Marketing</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a content strategy that dominates search results and drives consistent organic growth for your business.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Get Your Free SEO Audit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOContentMarketing;