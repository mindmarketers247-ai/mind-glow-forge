import React from 'react';
import {
  Brain,
  Search,
  MousePointer,
  Users,
  MessageSquare,
  Globe,
  BarChart,
  Zap
} from 'lucide-react';
import aiImg from '@/assets/service-ai.jpg';
import seoImg from '@/assets/service-seo.jpg';
import adsImg from '@/assets/service-ads.jpg';
import linkedinImg from '@/assets/service-linkedin.jpg';
import socialImg from '@/assets/service-social.jpg';
import webImg from '@/assets/service-web.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      image: aiImg,
      title: 'AI-Driven Marketing Strategies',
      description: 'Leverage machine learning and AI to create data-driven marketing campaigns that adapt and optimize in real-time.',
    },
    {
      icon: Search,
      image: seoImg,
      title: 'SEO & Content Marketing',
      description: 'Dominate search rankings with AI-optimized content strategies that drive organic traffic and engagement.',
    },
    {
      icon: MousePointer,
      image: adsImg,
      title: 'Paid Ads (Google + Meta)',
      description: 'Maximize ROI with precision-targeted advertising campaigns across Google, Facebook, and Instagram platforms.',
    },
    {
      icon: Users,
      image: linkedinImg,
      title: 'LinkedIn Personal Branding',
      description: 'Build thought leadership and generate high-quality leads through strategic LinkedIn personal branding.',
    },
    {
      icon: MessageSquare,
      image: socialImg,
      title: 'Social Media Management',
      description: 'Engage your audience with compelling content and community management across all social platforms.',
    },
    {
      icon: Globe,
      image: webImg,
      title: 'Website & Funnel Development',
      description: 'Create conversion-optimized websites and sales funnels that turn visitors into customers.',
    },
  ];


  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Amplify Your Growth</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered strategies to conversion optimization, we provide comprehensive marketing solutions that scale your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group card-glow rounded-2xl glass relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 gradient-glow rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Gradient Background */}
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 p-8 pt-6">
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center text-accent font-medium">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your marketing approach?
          </p>
          <button className="btn-hero">
            Get Custom Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;