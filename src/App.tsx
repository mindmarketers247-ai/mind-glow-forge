import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import AIMarketing from "./pages/services/AIMarketing";
import AIInfluencer from "./pages/services/AIInfluencer";
import SEOContentMarketing from "./pages/services/SEOContentMarketing";
import SEO from "./pages/services/SEO";
import ContentMarketing from "./pages/services/ContentMarketing";
import PaidAds from "./pages/services/PaidAds";
import LinkedInBranding from "./pages/services/LinkedInBranding";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import WebsiteFunnelDevelopment from "./pages/services/WebsiteFunnelDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import FunnelDevelopment from "./pages/services/FunnelDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services/ai-marketing" element={<AIMarketing />} />
          <Route path="/services/ai-influencer" element={<AIInfluencer />} />
          <Route path="/services/seo-content-marketing" element={<SEOContentMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/paid-ads" element={<PaidAds />} />
          <Route path="/services/linkedin-branding" element={<LinkedInBranding />} />
          <Route path="/services/social-media" element={<SocialMediaManagement />} />
          <Route path="/services/website-funnel-development" element={<WebsiteFunnelDevelopment />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/funnel-development" element={<FunnelDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
