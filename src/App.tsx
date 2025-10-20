// App.tsx (safe gating pattern)
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { Footer } from "./components/Footer";
import { TermsConditions } from './components/TermsConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Render ONLY the loader until it's done
  if (loading) {
    return (
      <>
        <LoadingScreen onComplete={handleLoadingComplete} />
        <Toaster />
        <Sonner />
      </>
    );
  }

  // Render the full app AFTER loading completes
  return (
    <BrowserRouter>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            {/* example routes */}
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <WorkSection />
              </>
            } />
            <Route path="*" element={<></>} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <Toaster />
          <Sonner />
        </QueryClientProvider>
      </TooltipProvider>
    </BrowserRouter>
  );
};

export default App;
