import React from 'react';
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AIMarketing = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Intelligent Campaign Optimization',
      description: 'Our AI algorithms continuously analyze performance data and automatically optimize your campaigns for maximum ROI, 24/7.'
    },
    {
      icon: Target,
      title: 'Predictive Audience Targeting',
      description: 'Machine learning models predict which prospects are most likely to convert, ensuring your budget targets high-value customers.'
    },
    {
      icon: BarChart,
      title: 'Real-Time Market Analysis',
      description: 'Stay ahead of trends with AI-powered market intelligence that identifies opportunities before your competition.'
    },
    {
      icon: Zap,
      title: 'Automated A/B Testing',
      description: 'AI runs thousands of micro-tests simultaneously, finding winning combinations faster than traditional methods.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Data Integration',
      description: 'We connect your marketing stack and analyze historical data to understand your customer journey and identify optimization opportunities.'
    },
    {
      step: '02',
      title: 'AI Strategy Development',
      description: 'Our team builds custom AI models tailored to your business goals, audience behavior, and market dynamics.'
    },
    {
      step: '03',
      title: 'Implementation & Launch',
      description: 'We deploy AI-powered campaigns across all channels with real-time monitoring and automated optimization systems.'
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      description: 'AI learns from every interaction, continuously improving performance and identifying new growth opportunities.'
    }
  ];

  const caseStudy = {
    client: 'TechFlow SaaS',
    challenge: 'Struggling with high CAC and low conversion rates despite significant ad spend',
    result: '340% increase in qualified leads with 60% reduction in cost per acquisition',
    metrics: [
      { label: 'Lead Quality', value: '+340%' },
      { label: 'CAC Reduction', value: '-60%' },
      { label: 'ROAS', value: '12.5x' }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Driven Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">AI-Powered Marketing</span><br />
              That Never Sleeps
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to create marketing campaigns that learn, adapt, and optimize themselves. 
              While your competitors sleep, your AI works around the clock to maximize every dollar spent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero text-lg px-8 py-4">
                Start AI Transformation
              </button>
              <button className="px-8 py-4 rounded-xl border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium">
                See AI in Action
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why AI Marketing is the <span className="text-gradient">Future</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional marketing relies on guesswork and gut feelings. AI marketing uses data science, 
              machine learning, and predictive analytics to make every decision based on evidence. 
              The result? Campaigns that consistently outperform human-only strategies by 300%+ while 
              reducing costs and increasing precision.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-deep-gray/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">AI Advantages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how artificial intelligence transforms every aspect of your marketing strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group card-glow p-8 rounded-2xl glass relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">AI Implementation</span> Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data integration to continuous optimization, here's how we transform your marketing with AI.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="glass card-glow p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 glass rounded-2xl flex items-center justify-center glow-secondary">
                    <Brain className="w-24 h-24 text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-deep-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Success Story</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See how AI transformed one client's entire marketing operation
              </p>
            </div>

            <div className="glass card-glow rounded-3xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gradient">{caseStudy.client}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-accent">The Challenge</h4>
                        <p className="text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-accent">The Result</h4>
                        <p className="text-muted-foreground">{caseStudy.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl glass">
                        <span className="text-foreground font-medium">{metric.label}</span>
                        <span className="text-2xl font-bold text-gradient">{metric.value}</span>
                      </div>
                    ))}
                    
                    <button className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
            Ready to Scale with <br />
            <span className="text-gradient">AI-Driven Marketing</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the AI revolution and watch your marketing performance soar. 
            Let's build campaigns that work while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero text-lg px-8 py-4">
              Start AI Transformation
            </button>
            <button className="px-8 py-4 rounded-xl border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMarketing;