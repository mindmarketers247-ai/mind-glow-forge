import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      company: 'SaaS Startup',
      content: 'Mind Marketers transformed our marketing approach completely. Their AI-driven strategies helped us scale from 1K to 50K users in just 8 months. The ROI has been incredible.',
      rating: 5,
      initials: 'SC',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GreenEarth Co',
      company: 'E-commerce',
      content: 'The team at Mind Marketers doesn\'t just execute campaigns; they become strategic partners. Our online revenue increased by 400% in the first year working together.',
      rating: 5,
      initials: 'MR',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Managing Partner, Foster Consulting',
      company: 'Professional Services',
      content: 'Their LinkedIn personal branding strategy positioned me as a thought leader in my industry. We\'ve generated over $2M in new business from the leads they helped create.',
      rating: 5,
      initials: 'AF',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Jake Thompson',
      role: 'CMO, FitLife Nutrition',
      company: 'Health & Wellness',
      content: 'Mind Marketers understands the pulse of digital marketing like no other agency. Their data-driven approach and creative execution have exceeded all our expectations.',
      rating: 5,
      initials: 'JT',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the founders and leaders who've experienced transformational growth.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass card-glow p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-primary opacity-5"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-16 h-16 text-accent opacity-50" />
              </div>
              
              {/* Content */}
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold text-lg glow-secondary`}>
                    {testimonials[currentIndex].initials}
                  </div>
                  
                  {/* Info */}
                  <div>
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-accent">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          {/* Previous Button */}
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-secondary transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent glow-secondary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-secondary transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;