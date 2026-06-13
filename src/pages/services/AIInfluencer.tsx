import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Clock,
  Palette,
  Zap,
  DollarSign,
  FlaskConical,
  Smartphone,
  Play,
  Heart,
  MessageCircle,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImg from '@/assets/ai-influencer-hero.jpg';
import ugcImg from '@/assets/ai-influencer-ugc.jpg';
import processImg from '@/assets/ai-influencer-process.jpg';

const influencers = [
  {
    name: 'Aria Vale',
    industry: 'Fitness Creator',
    followers: '842K',
    engagement: '7.2%',
    gradient: 'from-orange-500 to-red-500',
    creates: ['Workout videos', 'Supplement promotions', 'Fitness challenges', 'Gym UGC'],
    tagline: 'Daily routines, transformations, and high-energy reels.',
  },
  {
    name: 'Luna Reyes',
    industry: 'Beauty Creator',
    followers: '1.2M',
    engagement: '8.1%',
    gradient: 'from-pink-500 to-rose-400',
    creates: ['Product reviews', 'Makeup tutorials', 'Skincare content', 'Brand collaborations'],
    tagline: 'Skincare science meets editorial beauty content.',
  },
  {
    name: 'Kai Mercer',
    industry: 'Tech Reviewer',
    followers: '654K',
    engagement: '6.4%',
    gradient: 'from-blue-500 to-cyan-400',
    creates: ['App reviews', 'Software demos', 'Product comparisons', 'AI tool content'],
    tagline: 'Honest reviews of the tools shaping tomorrow.',
  },
  {
    name: 'Sienna Park',
    industry: 'Fashion Influencer',
    followers: '978K',
    engagement: '7.8%',
    gradient: 'from-fuchsia-500 to-purple-500',
    creates: ['Outfit showcases', 'Product placements', 'Styling videos', 'Trend content'],
    tagline: 'Editorial styling for streetwear and luxury alike.',
  },
  {
    name: 'Noa Lin',
    industry: 'Lifestyle Creator',
    followers: '512K',
    engagement: '9.0%',
    gradient: 'from-amber-400 to-orange-500',
    creates: ['Daily vlogs', 'Brand integrations', 'Product recommendations', 'Story content'],
    tagline: 'Slow living, soft mornings, sponsored seamlessly.',
  },
  {
    name: 'Marcus Hale',
    industry: 'Real Estate Consultant',
    followers: '388K',
    engagement: '5.9%',
    gradient: 'from-emerald-500 to-teal-500',
    creates: ['Property walkthroughs', 'Market updates', 'Investment education', 'Local guides'],
    tagline: 'Walkthroughs and market breakdowns that convert.',
  },
  {
    name: 'Eli Chen',
    industry: 'Finance Educator',
    followers: '1.5M',
    engagement: '6.8%',
    gradient: 'from-yellow-500 to-amber-500',
    creates: ['Financial education', 'Investment content', 'Business insights', 'Startup storytelling'],
    tagline: 'Money, markets, and startup playbooks made simple.',
  },
  {
    name: 'Dr. Maya Okafor',
    industry: 'Healthcare Expert',
    followers: '720K',
    engagement: '7.5%',
    gradient: 'from-sky-500 to-indigo-500',
    creates: ['Educational content', 'Wellness awareness', 'Informational videos', 'Professional branding'],
    tagline: 'Trusted, evidence-led wellness education at scale.',
  },
];

const benefits = [
  { icon: Clock, title: 'Available 24/7', desc: 'Generate content whenever your campaign needs it — no schedules, no waitlists.' },
  { icon: Palette, title: 'Consistent Brand Image', desc: 'Same appearance, personality, and style across every piece of content.' },
  { icon: Zap, title: 'Faster Production', desc: 'Create weeks of content in days instead of organizing multiple shoots.' },
  { icon: DollarSign, title: 'Cost Efficient', desc: 'Reduce recurring production, talent, and creator fees dramatically.' },
  { icon: FlaskConical, title: 'Unlimited Creative Testing', desc: 'Experiment with scripts, hooks, styles, and campaigns at speed.' },
  { icon: Smartphone, title: 'Multi-Platform Ready', desc: 'Built for Instagram, TikTok, LinkedIn, YouTube Shorts, and paid ads.' },
];

const steps = [
  { n: '01', title: 'Brand Discovery', desc: 'We understand your audience, positioning, niche, and content goals.' },
  { n: '02', title: 'Influencer Development', desc: 'We create a custom AI personality aligned with your brand.' },
  { n: '03', title: 'Visual Identity Creation', desc: 'We build a consistent look, style, and creator persona.' },
  { n: '04', title: 'Content Production', desc: 'Generate photos, reels, UGC videos, and promotional content.' },
  { n: '05', title: 'Campaign Scaling', desc: 'Deploy across ads, social, websites, and full marketing campaigns.' },
];

const useCases = [
  { title: 'E-commerce Brands', desc: 'Product promotions and UGC ads.' },
  { title: 'SaaS Companies', desc: 'Explainer videos and product education.' },
  { title: 'Startups', desc: 'Founder-style content and brand storytelling.' },
  { title: 'Real Estate Businesses', desc: 'Property marketing and lead generation.' },
  { title: 'Healthcare Brands', desc: 'Educational and awareness content.' },
  { title: 'Personal Brands', desc: 'Thought leadership and audience growth.' },
  { title: 'Fashion Brands', desc: 'Lookbooks and creator campaigns.' },
  { title: 'Fitness Companies', desc: 'Transformations, routines, and product promotions.' },
];

const faqs = [
  {
    q: 'What is an AI influencer?',
    a: 'An AI influencer is a digitally created brand personality that can generate realistic content, videos, and social media assets for marketing campaigns.',
  },
  {
    q: 'Can the influencer be customized for my brand?',
    a: 'Yes. Every AI influencer is designed around your brand identity, audience, and content goals.',
  },
  {
    q: 'Can AI influencers create UGC videos?',
    a: 'Yes. We create realistic UGC-style videos that can be used for social media and advertising campaigns.',
  },
  {
    q: 'Which industries can use AI influencers?',
    a: 'Fashion, beauty, fitness, healthcare, SaaS, education, real estate, finance, hospitality, and many more.',
  },
  {
    q: 'Can I use the content in ads?',
    a: 'Yes. The content can be used across social media, websites, and paid advertising campaigns.',
  },
];

const InfluencerCard = ({ inf, index }: { inf: typeof influencers[number]; index: number }) => (
  <div
    className="group relative rounded-3xl overflow-hidden glass card-glow cursor-pointer"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className={`relative aspect-[4/5] bg-gradient-to-br ${inf.gradient} overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.5), transparent 50%)',
        }}
      />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-white">
        {inf.industry}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-xl font-bold text-white mb-1">{inf.name}</div>
        <div className="flex items-center gap-4 text-xs text-white/80 mb-3">
          <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {inf.followers}</span>
          <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {inf.engagement}</span>
        </div>
        <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
          <p className="text-xs text-white/90 mb-2">{inf.tagline}</p>
          <ul className="space-y-1">
            {inf.creates.map((c) => (
              <li key={c} className="text-[11px] text-white/80 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-accent" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const AIInfluencer = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] gradient-primary rounded-full blur-3xl opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">AI Influencer Studio</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Create Your Own <span className="text-gradient">AI Influencer</span> For Your Brand
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build hyper-realistic AI influencers that look, speak, and create content like real creators.
                From product promotions to UGC-style videos, your brand gets a dedicated digital personality that
                can generate content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-hero inline-flex items-center justify-center gap-2">
                  Build My AI Influencer <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#showcase" className="btn-outline inline-flex items-center justify-center gap-2">
                  View AI Influencer Profiles
                </a>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-gradient">200+</div>
                  <div className="text-xs text-muted-foreground">Personas Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">10K+</div>
                  <div className="text-xs text-muted-foreground">UGC Videos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">24/7</div>
                  <div className="text-xs text-muted-foreground">Content Engine</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden glass card-glow">
                <img
                  src={heroImg}
                  alt="Futuristic AI digital persona visualization"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 gradient-glow rounded-full animate-float opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 gradient-glow rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 bg-deep-gray/40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            AI Influencers That <span className="text-gradient">Feel Human</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Your audience connects with people, not advertisements. That's why we create AI influencers
            designed around your brand identity and audience behavior.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every influencer is built with a consistent visual identity, content style, personality, and tone.
            Whether you need a beauty creator, fitness coach, tech reviewer, educator, or lifestyle influencer,
            we create digital personalities that align with your market.
          </p>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built For <span className="text-gradient">Every Industry</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hover any card to explore the creator's content style and capabilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencers.map((inf, i) => (
              <InfluencerCard key={inf.name} inf={inf} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-deep-gray/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Content Creation Without The <span className="text-gradient">Traditional Bottlenecks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why leading brands are moving their content engines to AI influencers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 rounded-2xl glass card-glow">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 glow-secondary">
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI UGC */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI UGC Videos That Look Like <span className="text-gradient">Real Customer Content</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modern audiences trust authentic creator-style videos more than polished advertisements.
                We create AI-generated UGC content that feels natural, relatable, and platform-native.
              </p>
              <p className="text-foreground font-semibold mb-3">Perfect for:</p>
              <ul className="grid grid-cols-2 gap-2">
                {['Product launches', 'Meta Ads', 'TikTok Ads', 'E-commerce campaigns', 'App promotions', 'SaaS marketing', 'Brand awareness'].map((u) => (
                  <li key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" /> {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[520px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass card-glow">
                <img
                  src={ugcImg}
                  alt="AI-generated UGC content visualization with floating smartphone screens"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-deep-gray/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Create Your <span className="text-gradient">AI Influencer</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl glass card-glow relative">
                <div className="text-5xl font-bold text-gradient mb-3 opacity-60">{s.n}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built For <span className="text-gradient">Modern Brands</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="p-6 rounded-2xl glass card-glow">
                <h3 className="text-lg font-bold mb-2 text-gradient">{u.title}</h3>
                <p className="text-sm text-muted-foreground">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 bg-deep-gray/40">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            One AI Influencer. <span className="text-gradient">Endless Content Possibilities.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['Product promotions', 'Talking videos', 'UGC ads', 'Testimonials', 'Reels', 'Shorts', 'Educational content', 'Social campaigns', 'Website visuals', 'Brand ambassador content'].map((c) => (
              <span key={c} className="px-5 py-2 rounded-full glass text-sm border border-accent/30 hover:border-accent hover:glow-secondary transition-all">
                {c}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mt-10">All from a single consistent digital personality.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl glass overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-accent transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Next Brand Ambassador <span className="text-gradient">Doesn't Need A Camera Crew</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Launch a custom AI influencer built specifically for your brand and start creating content at scale.
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
            Book A Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIInfluencer;
