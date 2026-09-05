import React, { useState } from 'react';
import { Brain, Target, Zap, TrendingUp, Palette, BarChart3, Send, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', business: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

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

          {/* Lead Capture Form */}
          <div className="relative">
            <div className="relative p-4 md:p-6">
              <div className="glass card-glow rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-10"></div>

                <div className="relative z-10 p-8 md:p-10">
                  <div className="text-center mb-8 space-y-3">
                    <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      <span className="text-gradient">Let's Grow Your Brand</span>
                    </h3>
                    <p className="text-muted-foreground">
                      Tell us about your business and we'll get back to you with a tailored growth plan.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                      <CheckCircle className="w-14 h-14 text-accent animate-pulse-glow" />
                      <p className="text-xl font-semibold text-foreground">Thank you!</p>
                      <p className="text-muted-foreground">
                        We've received your details and will be in touch within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
                          placeholder="you@company.com"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
                            placeholder="+91 88829 11596"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Business</label>
                          <input
                            type="text"
                            name="business"
                            value={formData.business}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <button type="submit" className="btn-hero w-full flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Get My Growth Plan
                      </button>

                      <p className="text-xs text-center text-muted-foreground">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  )}
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
