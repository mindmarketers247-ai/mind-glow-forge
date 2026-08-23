import React from 'react';
import { Brain, Target, Zap } from 'lucide-react';
import aboutVisual from '@/assets/about-visual.jpg';


const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-10 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/4 right-10 w-48 h-48 gradient-primary rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Who We Are</span>
              </h2>
              <p className="text-2xl font-semibold mb-6">
                We make businesses easier to find, trust, and choose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mind Marketers is a growth-focused marketing agency helping businesses build a stronger presence across search, social media, paid advertising, content, and founder branding.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We combine strategic thinking, creative execution, data, and AI-powered tools to create marketing that has a clear purpose.
              </p>
              <ul className="space-y-2 mb-2">
                {['Build visibility.', 'Strengthen credibility.', 'Generate opportunities.'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full gradient-glow"></span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl glass glow-secondary">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategy First</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business, audience, positioning, and goals before deciding what marketing you actually need.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl glass glow-secondary">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Built Around Your Brand</h3>
                  <p className="text-muted-foreground">
                    Your marketing shouldn't look or sound like everyone else's. We create a clear, consistent presence that reflects what makes your business different.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl glass glow-secondary">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Focused on Growth</h3>
                  <p className="text-muted-foreground">
                    Every campaign, piece of content, and channel should contribute to a business goal, whether that's visibility, authority, enquiries, or conversions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="btn-hero">
                Discover Our Process
              </button>
            </div>
          </div>


          {/* Visual Side */}
          <div className="relative">
            <div className="relative p-8">
              {/* Main Card */}
              <div className="glass card-glow rounded-3xl relative overflow-hidden">
                <img
                  src={aboutVisual}
                  alt="Glowing neural network sphere representing AI-powered marketing intelligence"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none"></div>

                <div className="relative z-10 p-8 text-center space-y-6 -mt-12">
                  <div className="w-20 h-20 gradient-glow rounded-2xl flex items-center justify-center mx-auto">
                    <Brain className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">The Tesla of Marketing</h3>
                    <p className="text-muted-foreground mb-6">
                      Innovative, bold, and always ahead of the curve
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gradient">5+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gradient">24/7</div>
                        <div className="text-sm text-muted-foreground">AI Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 gradient-glow rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 gradient-glow rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;