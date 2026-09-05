import React from 'react';
import { Brain, Target, Zap, TrendingUp, Palette, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Strategy Before Execution',
      description:
        'We start by understanding your business, audience, goals, and market before deciding what your marketing should look like.',
    },
    {
      icon: Palette,
      title: 'Creative That Builds Your Brand',
      description:
        'From content and social media to campaigns and digital experiences, we create marketing that makes your business easier to notice and remember.',
    },
    {
      icon: BarChart3,
      title: 'Marketing That Moves the Numbers',
      description:
        'We look beyond likes and impressions. We focus on the metrics that matter to your business, from visibility and engagement to leads, enquiries, and conversions.',
    },
  ];

  const growth = [
    { icon: Target, label: 'Strategy' },
    { icon: Palette, label: 'Creative' },
    { icon: TrendingUp, label: 'Performance' },
  ];

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
              <p className="text-2xl font-semibold text-foreground mb-6">
                Marketing That Starts With Your Business
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mind Marketers is a marketing agency that helps businesses build stronger brands, reach the right audience, and create marketing that drives meaningful growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bring strategy, creativity, technology, and performance together to help businesses market themselves with more clarity and purpose.
              </p>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl glass glow-secondary shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <button className="btn-hero">
                Explore Our Approach
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative p-8">
              <div className="glass card-glow rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-10"></div>

                <div className="relative z-10 p-10 text-center space-y-10">
                  <div className="w-20 h-20 gradient-glow rounded-2xl flex items-center justify-center mx-auto">
                    <Brain className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="text-gradient">Built Around Your Growth</span>
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Three pillars that power everything we do for your brand.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {growth.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={index}
                            className="glass rounded-2xl p-6 flex flex-col items-center gap-4 group hover:card-glow transition-all duration-300"
                          >
                            <div className="w-14 h-14 gradient-glow rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-lg font-semibold">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 gradient-glow rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 gradient-glow rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
