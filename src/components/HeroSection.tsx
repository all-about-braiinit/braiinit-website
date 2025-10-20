import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { TypingEffect } from "./TypingEffect";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const atBottom = doc.clientHeight + window.scrollY >= (doc.scrollHeight - 2);
      const beyondHero = window.scrollY > window.innerHeight * 0.6; // hide after leaving hero
      setShowScrollIndicator(!atBottom && !beyondHero);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center pb-8 md:pb-12">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
    

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-card border border-primary/20 rounded-full text-sm text-muted-foreground">
            We are not just a regular <span className="ml-1 text-primary font-semibold">AI Agency</span>
          </div>

          {/* Main Heading with Typing Effect */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              We are 
              <TypingEffect 
                texts={[
                  "AI Strategists",
                  "Innovation Partners", 
                  "Digital Transformers",
                  "Future Builders"
                ]}
                className="text-primary ml-2"
                speed={70}
                deleteSpeed={50}
                delay={2000}
              />
            </h1>
            {/* <div className="text-5xl md:text-7xl font-bold animate-slide-up">
              We put <span className="text-primary bg-gradient-teal bg-clip-text text-transparent">AI</span>
            </div>
            <div className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              at the center of <span className="text-primary">everything we do.</span>
            </div> */}
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your trusted partner to bring you AI-Ideas to Life!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl">
                  Start Your AI Journey
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="xl">
              View Our Process
            </Button>
          </div>

          {/* Process Preview */}
          {/* <div className="pt-16 animate-slide-up">
            <p className="text-muted-foreground mb-8">
              We spend our days guiding companies through our 3-step AI Transformation Journey.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
              <div className="flex-1 space-y-2">
                <div className="text-primary text-2xl font-bold">01</div>
                <div className="text-lg font-semibold text-foreground">Identify</div>
                <p className="text-sm text-muted-foreground">High-impact AI opportunities</p>
              </div>
              <div className="hidden md:block w-8 h-px bg-primary"></div>
              <div className="flex-1 space-y-2">
                <div className="text-primary text-2xl font-bold">02</div>
                <div className="text-lg font-semibold text-foreground">Educate</div>
                <p className="text-sm text-muted-foreground">Train and support your team</p>
              </div>
              <div className="hidden md:block w-8 h-px bg-primary"></div>
              <div className="flex-1 space-y-2">
                <div className="text-primary text-2xl font-bold">03</div>
                <div className="text-lg font-semibold text-foreground">Develop</div>
                <p className="text-sm text-muted-foreground">Custom AI systems that deliver</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer hover:border-primary-glow transition-colors"
             onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};