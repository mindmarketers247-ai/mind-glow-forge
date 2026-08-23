import React from 'react';
import { Compass, Crosshair, Layers, LineChart, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Understand',
    description: 'Your business, audience, market, and positioning.',
  },
  {
    icon: Crosshair,
    title: 'Position',
    description: 'Define what you should be known for and why people should choose you.',
  },
  {
    icon: Layers,
    title: 'Build',
    description: 'Create the content, campaigns, presence, and assets needed to support that position.',
  },
  {
    icon: LineChart,
    title: 'Optimize',
    description: "Use performance data and AI-powered tools to improve what works and cut what doesn't.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-deep-gray">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
            <Lightbulb className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Why Us</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Why Businesses Work With Us</span>
          </h2>

          <p className="text-2xl font-semibold mb-4">
            You don't need more marketing. You need marketing that makes sense.
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Too many businesses are posting without a strategy, running ads without understanding the numbers, or investing in channels that don't match their goals.
          </p>

          <p className="text-lg text-accent font-medium">We bring the pieces together.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="group card-glow glass rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gradient opacity-40">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
