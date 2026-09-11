import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, Brain, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://formsubmit.co/ajax/mindmarketerssupport@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Enquiry from ${formData.name} — Mind Marketers Website`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business,
          message: formData.message,
        }),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert('Something went wrong. Please email us directly at mindmarketerssupport@gmail.com');
    } finally {
      setSending(false);
    }
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
                              placeholder="+91 98775 81739"
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

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Message</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className="w-full p-3 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300 resize-none"
                            placeholder="Tell us about your business goals and how we can help you grow..."
                            required
                          />
                        </div>

                        <button type="submit" disabled={sending} className="btn-hero w-full flex items-center justify-center gap-3 disabled:opacity-60">
                          <Send className="w-5 h-5" />
                          {sending ? 'Sending…' : 'Get My Growth Plan'}
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
                      <a href="tel:+919877581739" className="text-accent hover:text-accent/80 transition-colors">
                        +91 98775 81739
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
                        1st floor Plot no. 25<br />
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