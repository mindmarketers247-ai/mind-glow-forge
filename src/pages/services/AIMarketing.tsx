import React from 'react';
import {
  Brain,
  Sparkles,
  ArrowRight,
  PenTool,
  Share2,
  Search,
  Users,
  Mail,
  LineChart,
  FileText,
  Zap,
  Target,
  Cpu,
  UserCheck,
  Shield,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AIMarketing = () => {
  const aiCapabilities = [
    {
      icon: PenTool,
      title: 'Content',
      description:
        'Create content ideas, briefs, captions, blogs and campaign content based on your brand and audience.',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description:
        'Plan content, maintain publishing consistency, repurpose existing content and support your social media workflow.',
    },
    {
      icon: Search,
      title: 'SEO',
      description:
        'Identify content opportunities, support keyword research, create briefs and help keep your SEO activities moving.',
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description:
        'Research prospects, organize lead information, support qualification and trigger follow-up workflows.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description:
        'Create campaigns, nurture sequences and follow-up content to keep prospects engaged.',
    },
    {
      icon: LineChart,
      title: 'Marketing Intelligence',
      description:
        'Analyze marketing data, identify trends and highlight areas that need attention.',
    },
    {
      icon: FileText,
      title: 'Reporting',
      description:
        'Turn campaign data into clear reports and actionable insights without spending hours building them manually.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Understand',
      description:
        'We start by understanding your business, audience, marketing goals and existing processes.',
    },
    {
      step: '02',
      title: 'Design',
      description:
        'We identify the marketing tasks that can be automated and design the right AI-powered workflows for your business.',
    },
    {
      step: '03',
      title: 'Deploy',
      description:
        'We configure and deploy your AI marketing agents with the workflows, information and instructions they need.',
    },
    {
      step: '04',
      title: 'Connect',
      description:
        'We connect the system with the tools and platforms already used in your marketing workflow wherever possible.',
    },
    {
      step: '05',
      title: 'Monitor',
      description:
        'AI handles the repetitive execution while our marketing team monitors performance, quality and outcomes.',
    },
    {
      step: '06',
      title: 'Improve',
      description:
        'The system continuously evolves as we learn what works, what doesn\'t, and where new opportunities exist.',
    },
  ];

  const aiBrings = ['Speed', 'Automation', 'Consistency', 'Data processing', 'Scalability'];
  const teamBrings = [
    'Strategy',
    'Positioning',
    'Creative direction',
    'Brand understanding',
    'Human judgment',
    'Performance optimization',
  ];

  const automateFlows = [
    {
      title: 'Content That Keeps Moving',
      subtitle: 'Never start from a blank screen again.',
      description:
        'Your AI agent can support your entire content workflow, from research and ideation to content creation, repurposing and publishing.',
      flow: ['Research', 'Ideas', 'Creation', 'Repurposing', 'Publishing'],
    },
    {
      title: 'SEO That Keeps Working',
      subtitle: 'SEO requires consistent effort.',
      description:
        'Your AI-powered workflows can help identify opportunities, analyze competitors, develop content briefs, support on-page optimization and keep your SEO pipeline moving.',
      flow: ['Research', 'Strategy', 'Content', 'Optimization', 'Monitoring'],
    },
    {
      title: 'Lead Generation Without the Manual Work',
      subtitle: 'Finding and managing prospects shouldn\'t consume your entire day.',
      description:
        'Automate parts of your prospect research, lead organization, qualification and follow-up process so your team can spend more time having actual conversations.',
      flow: ['Find', 'Qualify', 'Organize', 'Follow Up', 'Convert'],
    },
    {
      title: 'Marketing Insights Without the Spreadsheet Headache',
      subtitle: 'Your marketing generates data every day.',
      description:
        'Your AI system can help bring that data together, identify patterns and surface the insights that deserve your attention.',
      flow: ['Collect', 'Analyze', 'Identify', 'Recommend', 'Act'],
    },
  ];

  const continuousActions = ['Research.', 'Create.', 'Publish.', 'Analyze.', 'Follow up.', 'Optimize.'];

  const audiences = [
    {
      title: 'Startups',
      description: 'Build a marketing engine without immediately building a large marketing team.',
      icon: Zap,
    },
    {
      title: 'Growing Businesses',
      description: 'Automate repetitive work and increase marketing output without increasing workload at the same pace.',
      icon: Target,
    },
    {
      title: 'Marketing Teams',
      description: 'Give your team AI-powered support for research, content, reporting, lead generation and execution.',
      icon: Cpu,
    },
    {
      title: 'Agencies',
      description: "Extend your team's capabilities and automate workflows across multiple clients.",
      icon: UserCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8 glow-secondary">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Driven Marketing</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient">AI-Powered Marketing</span><br />
              That Never Sleeps
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy an AI-powered marketing system that keeps your business visible, your content moving,
              and your marketing working 24/7.
            </p>

            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop spending hours managing repetitive marketing tasks. Our AI-powered marketing agents
              automate the work behind your marketing while our experts provide the strategy, direction,
              and oversight your brand needs to grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero text-lg px-8 py-4 flex items-center gap-2">
                Deploy Your AI Marketing System
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              What If Your Marketing Could Keep Working <span className="text-gradient">Even When You Don't?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Most businesses don't have a marketing problem. They have a consistency and execution problem.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-3xl mx-auto">
              {[
                'Content gets delayed.',
                'Leads aren\'t followed up.',
                'SEO tasks pile up.',
                'Reports take hours to prepare.',
                'Opportunities get missed.',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 glass rounded-xl p-4">
                  <div className="w-2 h-2 rounded-full bg-accent glow-secondary"></div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI-driven marketing system takes care of the repetitive work so your marketing doesn't
                stop when your team does.
              </p>
              <p className="text-lg font-semibold text-foreground">
                Your marketing keeps moving.
              </p>
              <p className="text-lg font-semibold text-foreground">
                Your team focuses on what actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your AI Marketing Agent */}
      <section className="py-24 bg-deep-gray/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Your <span className="text-gradient">AI Marketing Agent</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              An AI-powered marketing system built around your business.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deploy AI agents that can take care of specific marketing workflows, automate repetitive
              tasks, analyze information, and keep your marketing engine running continuously.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 italic">
              Think of it as an AI marketing team working alongside your human team.
            </p>
          </div>

          <p className="text-center text-xl font-semibold mb-12">
            It can help with:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="group card-glow p-8 rounded-2xl glass relative overflow-hidden"
                >
                  <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 gradient-glow rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
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
              From Marketing Tasks to an <span className="text-gradient">Automated System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              We don't just give you an AI tool. We build the system around your marketing.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every business has different goals, audiences and workflows. That's why we don't believe in a
              one-size-fits-all AI solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="glass card-glow p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 gradient-primary rounded-full blur-2xl opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Humans Section */}
      <section className="py-24 bg-deep-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              AI Does the Work. <span className="text-gradient">Your Marketing Strategy Still Comes First.</span>
            </h2>

            <div className="space-y-3 text-lg text-muted-foreground mb-8">
              <p>AI can generate content.</p>
              <p>It can analyze data.</p>
              <p>It can automate workflows.</p>
            </div>

            <p className="text-xl text-foreground font-semibold mb-6">
              But AI alone doesn't understand your business the way a marketing strategist does.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              That's where we come in. At Mind Marketers, we combine AI automation with human marketing
              expertise to make sure your marketing isn't just automated, but actually aligned with your
              business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass card-glow p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AI brings:</h3>
              </div>
              <ul className="space-y-3">
                {aiBrings.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent glow-secondary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass card-glow p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-glow rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our marketing team brings:</h3>
              </div>
              <ul className="space-y-3">
                {teamBrings.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent glow-secondary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-xl font-semibold mt-12">
            Together, they create a marketing system that <span className="text-gradient">works smarter.</span>
          </p>
        </div>
      </section>

      {/* What Can You Automate */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Can You <span className="text-gradient">Automate?</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {automateFlows.map((flow, index) => (
              <div key={index} className="glass card-glow p-8 md:p-10 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">{flow.title}</h3>
                <p className="text-lg text-foreground font-medium mb-4">{flow.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{flow.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {flow.flow.map((step, i) => (
                    <React.Fragment key={i}>
                      <span className="px-4 py-2 rounded-lg glass text-accent font-medium text-sm">
                        {step}
                      </span>
                      {i < flow.flow.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Marketing Section */}
      <section className="py-24 bg-deep-gray/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Your Marketing Doesn't Have to Start From Zero <span className="text-gradient">Every Morning.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              With the right AI-powered system in place, your marketing can continuously:
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {continuousActions.map((action, i) => (
                <span key={i} className="px-6 py-3 rounded-full glass text-foreground font-semibold text-lg">
                  {action}
                </span>
              ))}
            </div>

            <p className="text-xl text-muted-foreground">
              While you focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Businesses Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Businesses That Want to <span className="text-gradient">Scale Their Marketing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a growing startup, an established business or a marketing team that needs to do
              more with less, our AI-driven marketing systems can be designed around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((aud, index) => {
              const Icon = aud.icon;
              return (
                <div key={index} className="group glass card-glow p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 gradient-glow rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                    {aud.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{aud.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't Replace Section */}
      <section className="py-24 bg-deep-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Don't Replace Your Marketing Team. <span className="text-gradient">Upgrade It.</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p className="text-xl text-foreground font-semibold">
                The future of marketing isn't AI vs. humans.
              </p>
              <p className="text-2xl font-bold text-gradient">It's AI + humans.</p>
              <p>Let AI handle the repetitive work.</p>
              <p>Let marketers handle the thinking.</p>
              <p className="text-foreground">
                And let your business benefit from a marketing system that can operate around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-glow rounded-2xl mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to put your marketing on <span className="text-gradient">autopilot?</span>
          </h2>

          <p className="text-2xl font-semibold text-foreground mb-10">
            Deploy Your AI Marketing System
          </p>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let's build an AI-powered marketing engine designed around your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero text-lg px-8 py-4 flex items-center gap-2">
              Deploy Your AI Marketing System
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMarketing;
