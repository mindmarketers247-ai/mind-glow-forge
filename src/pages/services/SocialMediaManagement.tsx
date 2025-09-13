import React from 'react';
import { Share2, Heart, Eye, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SocialMediaManagement = () => {
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
            <Share2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Social Media</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Social Media</span><br />
            Management
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Build a community that converts. We create engaging content strategies that turn followers 
            into loyal customers across all major social platforms.
          </p>

          <button className="btn-hero text-lg px-8 py-4">
            Grow Your Social Presence
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Social Media <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your audience is scrolling right now. Meet them where they are with content that stops the scroll and drives action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Visibility</h3>
              <p className="text-muted-foreground text-sm">
                Stay top-of-mind with consistent, engaging content that builds brand recognition and trust.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Building</h3>
              <p className="text-muted-foreground text-sm">
                Foster loyal communities around your brand that become advocates and repeat customers.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Viral Potential</h3>
              <p className="text-muted-foreground text-sm">
                Create shareable content that expands your reach organically and attracts new audiences.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Consistent Presence</h3>
              <p className="text-muted-foreground text-sm">
                Never miss a post with AI-powered content planning and automated scheduling systems.
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
              From strategy to execution, we handle every aspect of your social media presence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy & Audit</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze your current presence, define your brand voice, and create a winning content strategy.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Content Creation</h3>
                <p className="text-muted-foreground text-sm">
                  Design scroll-stopping visuals and craft compelling copy that drives engagement and conversions.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Publishing & Engagement</h3>
                <p className="text-muted-foreground text-sm">
                  Schedule posts at optimal times and actively engage with your community to build relationships.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center">
              <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Analytics & Growth</h3>
              <p className="text-muted-foreground text-sm">
                Track performance, optimize content strategy, and scale what works to maximize ROI.
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
                  <span className="text-gradient">400K Followers</span> in 12 Months
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Fashion brand grew from 5K to 400K+ Instagram followers while driving $500K+ in direct sales 
                  through strategic content and influencer partnerships.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">400K</div>
                    <div className="text-sm text-muted-foreground">New Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">$500K</div>
                    <div className="text-sm text-muted-foreground">Direct Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">8.5%</div>
                    <div className="text-sm text-muted-foreground">Engagement Rate</div>
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
                    <Heart className="w-24 h-24 text-accent mx-auto mb-4" />
                    <div className="text-lg font-semibold">Community Growth</div>
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
            Ready to Scale with <span className="text-gradient">Social Media Management</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop posting into the void. Let's create a social strategy that builds community and drives real business results.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Get Your Social Strategy
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaManagement;