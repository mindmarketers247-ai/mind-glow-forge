import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 glow-secondary">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Let's Talk Growth</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to transform your marketing and scale beyond your wildest dreams? 
            Let's start a conversation that could change your business forever.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-gradient">Send Us a Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a custom growth strategy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
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
                      className="w-full p-4 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Business</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
                    placeholder="Your company or business"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-4 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300 resize-none"
                    placeholder="Tell us about your business goals and how we can help you grow..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-hero flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-gradient">Get In Touch</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Multiple ways to connect with our team. Choose what works best for you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-xl glass card-glow group">
                    <div className="p-3 rounded-xl glass glow-secondary group-hover:animate-pulse-glow">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">Get a response within 24 hours</p>
                      <a href="mailto:mindmarketerssupport@gmail.com" className="text-accent hover:text-accent/80 transition-colors break-all">
                        mindmarketerssupport@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl glass card-glow group">
                    <div className="p-3 rounded-xl glass glow-secondary group-hover:animate-pulse-glow">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">Speak with our team</p>
                      <a href="tel:+918882911596" className="text-accent hover:text-accent/80 transition-colors">
                        +91 88829 11596
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl glass card-glow group">
                    <div className="p-3 rounded-xl glass glow-secondary group-hover:animate-pulse-glow">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <p className="text-muted-foreground text-sm mb-2">Connect with our team</p>
                      <a href="https://www.linkedin.com/company/mind-marketers/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                        Mind Marketers
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl glass card-glow group">
                    <div className="p-3 rounded-xl glass glow-secondary group-hover:animate-pulse-glow">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground text-sm mb-2">Visit us (by appointment)</p>
                      <address className="text-accent not-italic">
                        Ground floor Plot no. 57<br />
                        Industrial Area Phase I<br />
                        Chandigarh, 160002
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Connectivity Illustration */}
              <div className="glass card-glow p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-10"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Always Connected</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Our AI-powered response system ensures you never wait long for answers. 
                    We're building the future of customer communication.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gradient">&lt; 2hrs</div>
                      <div className="text-xs text-muted-foreground">Avg Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">24/7</div>
                      <div className="text-xs text-muted-foreground">AI Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prefer to <span className="text-gradient">Book a Call</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a 30-minute strategy session where we'll analyze your current marketing and show you exactly how to 10x your results.
          </p>
          
          <button className="btn-hero text-lg px-8 py-4">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;