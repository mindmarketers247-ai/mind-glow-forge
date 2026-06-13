import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import fintechImg from '@/assets/case-fintech.jpg';
import ecommerceImg from '@/assets/case-ecommerce.jpg';
import b2bImg from '@/assets/case-b2b.jpg';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'FinTech Startup Growth',
      category: 'SaaS',
      description: 'Scaled a fintech startup from $100K to $2M ARR in 18 months through AI-driven customer acquisition.',
      results: [
        { metric: 'Revenue Growth', value: '1900%', icon: TrendingUp },
        { metric: 'New Customers', value: '15K+', icon: Users },
        { metric: 'CAC Reduction', value: '65%', icon: DollarSign },
      ],
      image: fintechImg,
    },
    {
      title: 'E-commerce Brand Scale',
      category: 'Retail',
      description: 'Transformed a traditional retailer into a digital-first brand with 400% increase in online sales.',
      results: [
        { metric: 'Online Sales', value: '400%', icon: TrendingUp },
        { metric: 'Market Reach', value: '50+ Cities', icon: Users },
        { metric: 'ROAS', value: '8.5x', icon: DollarSign },
      ],
      image: ecommerceImg,
    },
    {
      title: 'Professional Services',
      category: 'B2B',
      description: 'Positioned a consulting firm as industry thought leaders, generating $5M in new business.',
      results: [
        { metric: 'Lead Quality', value: '300%', icon: Award },
        { metric: 'Pipeline Growth', value: '$5M+', icon: DollarSign },
        { metric: 'Brand Authority', value: '#1 Ranking', icon: TrendingUp },
      ],
      image: b2bImg,
    },
  ];


  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-deep-gray">
        <div className="absolute top-1/3 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Case Studies</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Proven Results</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses achieve extraordinary growth through strategic AI-driven marketing.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group card-glow rounded-3xl overflow-hidden glass relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image/Visual Section */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={study.image}
                  alt={`${study.title} case study`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium glass text-accent">{study.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-4 mb-6">
                  {study.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl glass">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{result.metric}</span>
                        </div>
                        <div className="text-lg font-bold text-gradient">{result.value}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Action */}
                <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 group-hover:glow-secondary">
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">150+</div>
            <div className="text-muted-foreground">Successful Campaigns</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">$50M+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;