import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Award, BarChart, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'FinTech Startup: Zero to $2M ARR',
      category: 'SaaS',
      client: 'PayFlow Technologies',
      challenge: 'A fintech startup with innovative payment solutions but zero market presence needed to scale rapidly in a competitive market.',
      strategy: 'Implemented AI-powered lead scoring, LinkedIn thought leadership campaigns, and precision-targeted Google Ads focused on CFOs and finance directors.',
      results: [
        { metric: 'Revenue Growth', value: '1900%', description: 'From $100K to $2M ARR in 18 months' },
        { metric: 'Lead Quality', value: '300%', description: 'Improvement in qualified lead conversion' },
        { metric: 'CAC Reduction', value: '65%', description: 'Customer acquisition cost decreased' },
        { metric: 'Market Share', value: '15%', description: 'In their target segment within 2 years' }
      ],
      testimonial: {
        quote: "Mind Marketers didn't just help us grow—they transformed our entire approach to marketing. Their AI-driven strategies delivered results we never thought possible.",
        author: "Sarah Chen",
        role: "CEO, PayFlow Technologies"
      },
      image: 'gradient-to-br from-blue-600 to-purple-600',
      timeline: '18 months',
      industry: 'FinTech'
    },
    {
      title: 'E-commerce Brand: Digital Transformation',
      category: 'Retail',
      client: 'Urban Athletics',
      challenge: 'Traditional sportswear retailer struggling with declining in-store sales needed to pivot to digital-first strategy during market disruption.',
      strategy: 'Developed omnichannel marketing approach with AI-powered personalization, social commerce integration, and influencer partnerships.',
      results: [
        { metric: 'Online Sales', value: '400%', description: 'Increase in digital revenue streams' },
        { metric: 'ROAS', value: '8.5x', description: 'Return on ad spend across all channels' },
        { metric: 'Customer LTV', value: '220%', description: 'Improvement in customer lifetime value' },
        { metric: 'Market Expansion', value: '50+ Cities', description: 'Geographic reach through digital channels' }
      ],
      testimonial: {
        quote: "The team at Mind Marketers saved our business. Their digital transformation strategy didn't just help us survive—we're now thriving in ways we never imagined.",
        author: "Marcus Rodriguez",
        role: "Founder, Urban Athletics"
      },
      image: 'gradient-to-br from-emerald-600 to-teal-600',
      timeline: '12 months',
      industry: 'Retail'
    },
    {
      title: 'Professional Services: Thought Leadership',
      category: 'B2B',
      client: 'Nexus Consulting Group',
      challenge: 'Mid-sized consulting firm wanted to establish thought leadership and compete with larger players for enterprise clients.',
      strategy: 'Built comprehensive thought leadership platform with LinkedIn personal branding, industry report publications, and speaking engagement strategy.',
      results: [
        { metric: 'Lead Quality', value: '300%', description: 'Higher-value prospects in pipeline' },
        { metric: 'Pipeline Growth', value: '$5M+', description: 'New business opportunities created' },
        { metric: 'Brand Authority', value: '#1 Ranking', description: 'Industry thought leadership position' },
        { metric: 'Speaking Engagements', value: '50+', description: 'Industry conferences and events' }
      ],
      testimonial: {
        quote: "Mind Marketers positioned us as the go-to experts in our field. We're now competing with firms 10x our size and winning.",
        author: "Dr. Amanda Foster",
        role: "Managing Partner, Nexus Consulting"
      },
      image: 'gradient-to-br from-orange-600 to-red-600',
      timeline: '24 months',
      industry: 'Professional Services'
    }
  ];

  const stats = [
    { value: '150+', label: 'Successful Campaigns', icon: Award },
    { value: '$50M+', label: 'Revenue Generated', icon: DollarSign },
    { value: '95%', label: 'Client Retention', icon: Users },
    { value: '4.9/5', label: 'Client Satisfaction', icon: TrendingUp }
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
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Case Studies</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Real Results. Real Stories.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            See how we've transformed businesses across industries with AI-driven marketing strategies 
            that deliver measurable, extraordinary results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div key={index} className="relative">
                {/* Case Study Card */}
                <div className="glass card-glow rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    
                    {/* Visual Side */}
                    <div className={`bg-${study.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 gradient-primary opacity-90"></div>
                      <div className="relative z-10 p-12 flex flex-col justify-center h-full">
                        <div className="text-center text-white">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                            <span className="text-sm font-medium">{study.category}</span>
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            {study.title}
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-6 mt-8">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">Timeline</span>
                              </div>
                              <div className="font-semibold">{study.timeline}</div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <BarChart className="w-4 h-4" />
                                <span className="text-sm">Industry</span>
                              </div>
                              <div className="font-semibold">{study.industry}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-12">
                      <div className="space-y-8">
                        
                        {/* Client */}
                        <div>
                          <h4 className="text-2xl font-bold mb-2 text-gradient">{study.client}</h4>
                        </div>

                        {/* Challenge */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-accent">The Challenge</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Strategy */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-accent">Our Strategy</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.strategy}
                          </p>
                        </div>

                        {/* Results Grid */}
                        <div>
                          <h4 className="text-lg font-semibold mb-4 text-accent">The Results</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="p-4 rounded-xl glass">
                                <div className="text-2xl font-bold text-gradient mb-1">{result.value}</div>
                                <div className="text-sm font-medium mb-1">{result.metric}</div>
                                <div className="text-xs text-muted-foreground">{result.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="p-6 rounded-xl glass relative overflow-hidden">
                          <div className="absolute inset-0 gradient-primary opacity-5"></div>
                          <div className="relative z-10">
                            <p className="text-foreground italic mb-4 leading-relaxed">
                              "{study.testimonial.quote}"
                            </p>
                            <div>
                              <div className="font-semibold">{study.testimonial.author}</div>
                              <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 glow-secondary">
                          <span>View Full Case Study</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Want Results <span className="text-gradient">Like This</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every business is unique, but the principles of growth are universal. 
            Let's create your success story together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero text-lg px-8 py-4">
              Work With Us
            </button>
            <button className="px-8 py-4 rounded-xl border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;