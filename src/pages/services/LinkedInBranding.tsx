import React from 'react';
import { Linkedin, Users, TrendingUp, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const LinkedInBranding = () => {
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
            <Linkedin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Personal Branding</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">LinkedIn Personal</span><br />
            Branding
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Transform your LinkedIn presence into a lead-generating powerhouse. Build authority, 
            attract opportunities, and turn connections into customers.
          </p>

          <button className="btn-hero text-lg px-8 py-4">
            Build Your LinkedIn Authority
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why LinkedIn <span className="text-gradient">Personal Branding</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LinkedIn is where decision-makers hang out. Position yourself as the go-to expert and watch opportunities come to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Authority Building</h3>
              <p className="text-muted-foreground text-sm">
                Establish yourself as the thought leader in your industry with strategic content and engagement.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lead Generation</h3>
              <p className="text-muted-foreground text-sm">
                Turn your profile into a magnet for high-quality leads and business opportunities.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Engagement</h3>
              <p className="text-muted-foreground text-sm">
                Build meaningful relationships with prospects through authentic conversations and value-driven content.
              </p>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center group">
              <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Network Growth</h3>
              <p className="text-muted-foreground text-sm">
                Expand your professional network with strategic connections that drive business growth.
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
              From profile optimization to thought leadership, we build your LinkedIn presence strategically.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Profile Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Transform your profile into a conversion-focused landing page that attracts your ideal clients.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Content Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  Develop a content calendar with AI-optimized posts that position you as an industry authority.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl text-center">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Network Building</h3>
                <p className="text-muted-foreground text-sm">
                  Strategic outreach and connection building with your target audience and industry leaders.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="glass card-glow p-8 rounded-3xl text-center">
              <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Lead Conversion</h3>
              <p className="text-muted-foreground text-sm">
                Convert connections into conversations and conversations into customers through strategic engagement.
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
                  From <span className="text-gradient">Zero to Industry Leader</span>
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Tech CEO went from 500 to 15K+ followers in 8 months, generating $2M+ in pipeline through 
                  strategic LinkedIn content and networking.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">15K+</div>
                    <div className="text-sm text-muted-foreground">New Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">$2M+</div>
                    <div className="text-sm text-muted-foreground">Pipeline Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">500%</div>
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
                    <Linkedin className="w-24 h-24 text-accent mx-auto mb-4" />
                    <div className="text-lg font-semibold">Authority Building</div>
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
            Ready to Scale with <span className="text-gradient">LinkedIn Personal Branding</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your LinkedIn into a client acquisition machine. Let's build your authority and attract your ideal customers.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Get Your LinkedIn Strategy
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinkedInBranding;