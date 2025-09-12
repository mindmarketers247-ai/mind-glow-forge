import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Rss } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  const categories = [
    'AI Marketing', 'SEO', 'Paid Ads', 'Social Media', 'Branding', 'Analytics'
  ];

  const featuredPost = {
    title: 'The AI Marketing Revolution: How Machine Learning is Transforming Digital Campaigns in 2024',
    excerpt: 'Discover the cutting-edge AI strategies that are helping brands achieve 300%+ ROI improvements and how you can implement them in your marketing stack.',
    category: 'AI Marketing',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    image: 'gradient-to-br from-purple-600 to-blue-600'
  };

  const blogPosts = [
    {
      title: 'SEO in the Age of AI: Optimizing for ChatGPT and Search Engines',
      excerpt: 'Learn how AI is reshaping search and the new SEO strategies you need to stay ahead of the competition.',
      category: 'SEO',
      readTime: '6 min read',
      date: 'Dec 12, 2024',
      image: 'gradient-to-br from-green-600 to-emerald-600'
    },
    {
      title: 'LinkedIn Personal Branding: From Zero to Thought Leader in 90 Days',
      excerpt: 'The exact framework we use to build executive thought leadership and generate high-quality B2B leads.',
      category: 'Branding',
      readTime: '10 min read',
      date: 'Dec 10, 2024',
      image: 'gradient-to-br from-blue-600 to-indigo-600'
    },
    {
      title: 'Meta Ads Mastery: Advanced Targeting Strategies for 2024',
      excerpt: 'Go beyond basic demographics with AI-powered audience insights and predictive targeting methods.',
      category: 'Paid Ads',
      readTime: '7 min read',
      date: 'Dec 8, 2024',
      image: 'gradient-to-br from-pink-600 to-rose-600'
    },
    {
      title: 'The Psychology of Conversion: How AI Analyzes Customer Behavior',
      excerpt: 'Understand the psychological triggers that drive conversions and how to implement them ethically.',
      category: 'Analytics',
      readTime: '9 min read',
      date: 'Dec 5, 2024',
      image: 'gradient-to-br from-orange-600 to-red-600'
    },
    {
      title: 'Social Media Automation: Tools and Strategies That Actually Work',
      excerpt: 'Cut through the noise with proven automation strategies that maintain authenticity and drive engagement.',
      category: 'Social Media',
      readTime: '5 min read',
      date: 'Dec 3, 2024',
      image: 'gradient-to-br from-teal-600 to-cyan-600'
    },
    {
      title: 'Building High-Converting Funnels: A Data-Driven Approach',
      excerpt: 'Step-by-step guide to creating sales funnels that convert visitors into loyal customers using AI insights.',
      category: 'Analytics',
      readTime: '12 min read',
      date: 'Dec 1, 2024',
      image: 'gradient-to-br from-violet-600 to-purple-600'
    }
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
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Mind Marketers Blog</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Insights That Drive Growth</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Stay ahead of the curve with cutting-edge marketing strategies, AI insights, and proven tactics 
            from the minds behind the most successful campaigns.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-full glass border border-accent text-accent glow-secondary font-medium">
              All Posts
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full glass border border-white/20 text-foreground hover:border-accent hover:text-accent transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-2">
              <span className="text-gradient">Featured Article</span>
            </h2>
          </div>

          <div className="glass card-glow rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <div className={`h-64 bg-${featuredPost.image} relative overflow-hidden`}>
              <div className="absolute inset-0 gradient-primary opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                    <span className="text-sm font-medium text-white">{featuredPost.category}</span>
                  </div>
                  <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto glow-secondary">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-gradient transition-colors cursor-pointer">
                {featuredPost.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-gradient">Latest Articles</span>
            </h2>
            <p className="text-muted-foreground text-center">
              Deep dives into the strategies and tactics that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="group card-glow rounded-2xl overflow-hidden glass cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-${post.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 gradient-primary opacity-90"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center glow-secondary">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-hero">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-deep-gray/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rss className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Ahead with <span className="text-gradient">AI-Driven Marketing Tips</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get weekly insights, strategies, and case studies delivered to your inbox. 
              Join 10,000+ marketers who stay ahead of the curve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-4 rounded-xl glass border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-secondary transition-all duration-300"
              />
              <button className="btn-hero px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;