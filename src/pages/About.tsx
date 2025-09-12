import React from 'react';
import { Brain, Target, Zap, Award, Users, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge AI technology and marketing strategies that define the future.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear communication, honest reporting, and full visibility into your campaigns and results.'
    },
    {
      icon: Zap,
      title: 'Growth',
      description: 'Everything we do is designed to scale your business exponentially, not incrementally.'
    },
    {
      icon: Award,
      title: 'Results',
      description: 'We measure success by your success. Every strategy is built to deliver measurable ROI.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & AI Strategist',
      bio: 'Former Google engineer turned marketing visionary. 10+ years building AI-powered growth engines.',
      avatar: 'AC'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of Strategy',
      bio: 'Ex-Facebook marketing lead with a track record of scaling startups to $100M+ valuations.',
      avatar: 'SR'
    },
    {
      name: 'Marcus Thompson',
      role: 'Creative Director',
      bio: 'Award-winning designer and brand architect who has worked with Fortune 500 companies.',
      avatar: 'MT'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Data Scientist',
      bio: 'PhD in Machine Learning from MIT. Transforms complex data into actionable marketing insights.',
      avatar: 'PP'
    }
  ];

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
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">About Mind Marketers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Who We Are</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're the rebels who refuse to accept mediocre marketing. A team of AI pioneers, 
            growth hackers, and creative visionaries building the future of digital marketing.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Our Story</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  In 2019, we saw a problem. Traditional marketing agencies were stuck in the past, 
                  using outdated strategies while AI was revolutionizing every other industry.
                </p>
                
                <p>
                  So we built Mind Marketers—the world's first truly AI-native marketing agency. 
                  We combine human creativity with machine intelligence to deliver results that 
                  were impossible just five years ago.
                </p>
                
                <p>
                  Today, we're proud to be the "Tesla of marketing agencies"—innovative, bold, 
                  and always pushing the boundaries of what's possible in digital marketing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 rounded-2xl glass">
                  <div className="text-3xl font-bold text-gradient mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Brands Transformed</div>
                </div>
                <div className="text-center p-6 rounded-2xl glass">
                  <div className="text-3xl font-bold text-gradient mb-2">$50M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="glass card-glow p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-10"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 gradient-glow rounded-2xl flex items-center justify-center mx-auto">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Future is Now</h3>
                    <p className="text-muted-foreground mb-6">
                      While others adapt to change, we create it. Our AI-powered approach 
                      doesn't just follow trends—it predicts them.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 gradient-glow rounded-full"></div>
                        <span className="text-sm">24/7 AI Campaign Optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 gradient-glow rounded-full"></div>
                        <span className="text-sm">Predictive Market Analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 gradient-glow rounded-full"></div>
                        <span className="text-sm">Automated Growth Engines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-deep-gray/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that drive everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group card-glow p-8 rounded-2xl glass relative overflow-hidden text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Meet the Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind Mind Marketers, each bringing unique expertise to transform your marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group card-glow p-8 rounded-2xl glass relative overflow-hidden text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 gradient-glow rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white">
                    {member.avatar}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="text-accent font-medium mb-4">{member.role}</div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build the Future of <br />
            <span className="text-gradient">Marketing Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to join the AI revolution? Let's transform your marketing and scale your business beyond what you thought possible.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Start Your Transformation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;