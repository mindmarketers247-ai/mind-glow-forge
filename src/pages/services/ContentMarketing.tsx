import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Edit3, Users, Zap, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

const ContentMarketing = () => {
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
              <Edit3 className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Content Marketing</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Content That <span className="text-gradient">Converts</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your brand into a thought leader with strategic content that educates, engages, and drives action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-hero">
                Launch Your Content Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/case-studies" className="btn-outline">
                View Content Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Content Marketing <span className="text-gradient">Wins</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Content marketing generates 3x more leads than outbound marketing while costing 62% less. Build trust and authority that drives sales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Building</h3>
              <p className="text-muted-foreground">Create loyal communities around your brand with valuable, consistent content that resonates.</p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Authority</h3>
              <p className="text-muted-foreground">Position yourself as the industry expert through thought leadership and valuable insights.</p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <BarChart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
              <p className="text-muted-foreground">Content marketing generates 3x more leads than traditional outbound marketing methods.</p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl bg-card border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-primary">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-term Value</h3>
              <p className="text-muted-foreground">Quality content continues attracting and converting customers months or years after publication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-deep-gray/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Content <span className="text-gradient">Strategy Process</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create content that educates, entertains, and converts at every stage of the customer journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Strategy & Research</h3>
                <p className="text-muted-foreground">Analyze your audience, competitors, and identify content gaps that drive business goals.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
                <p className="text-muted-foreground">Produce high-quality blogs, videos, infographics, and interactive content that engages.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Distribution & Promotion</h3>
                <p className="text-muted-foreground">Amplify reach through multi-channel distribution and strategic content promotion.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
            </div>
            
            <div>
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3">Optimize & Scale</h3>
                <p className="text-muted-foreground">Analyze performance data and optimize content strategy for maximum ROI and engagement.</p>
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
                  <h3 className="text-3xl font-bold mb-4">FinTech Brand Generated 10,000 Qualified Leads Through Content</h3>
                  <p className="text-muted-foreground mb-6">
                    A financial services company transformed their lead generation with strategic content marketing and thought leadership.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Blog traffic: 800% increase</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Lead generation: 10,000 qualified leads</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Brand mentions: 300% growth</span>
                    </li>
                  </ul>
                  <Link to="/case-studies" className="btn-outline">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="bg-card/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">10K</div>
                    <div className="text-muted-foreground mb-4">Qualified Leads</div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-500">800%</div>
                        <div className="text-xs text-muted-foreground">Blog Traffic</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-500">50</div>
                        <div className="text-xs text-muted-foreground">Articles</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">300%</div>
                        <div className="text-xs text-muted-foreground">Brand Mentions</div>
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
              Ready to Scale with <span className="text-gradient">Content Marketing</span>? Let's Talk.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 300+ brands that trust us to create content that converts and builds lasting relationships.
            </p>
            <Link to="/contact" className="btn-hero text-lg px-8 py-4">
              Start Your Content Journey
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentMarketing;