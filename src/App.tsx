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
import SEOContentMarketing from "./pages/services/SEOContentMarketing";
import PaidAds from "./pages/services/PaidAds";
import LinkedInBranding from "./pages/services/LinkedInBranding";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import WebsiteFunnelDevelopment from "./pages/services/WebsiteFunnelDevelopment";
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
          <Route path="/services/seo-content-marketing" element={<SEOContentMarketing />} />
          <Route path="/services/paid-ads" element={<PaidAds />} />
          <Route path="/services/linkedin-branding" element={<LinkedInBranding />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/services/website-funnel-development" element={<WebsiteFunnelDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
