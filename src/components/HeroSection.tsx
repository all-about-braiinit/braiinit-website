import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { TypingEffect } from "./TypingEffect";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.getElementById("hero") as HTMLElement | null;
    footerRef.current = document.querySelector("footer") as HTMLElement | null;

    // 1) Show only while a meaningful part of the hero is visible
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        const heroVisible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        setShowScrollIndicator((prev) => heroVisible && prev);
      },
      { root: null, threshold: [0, 0.25, 1], rootMargin: "0px 0px 0px 0px" }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    // 2) Hide when the footer enters the viewport
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowScrollIndicator(false);
      },
      { root: null, threshold: [0, 0.5, 1] }
    );
    if (footerRef.current) footerObserver.observe(footerRef.current);

    // 3) Safety: hide at absolute page bottom
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setShowScrollIndicator(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // useEffect(() => {
  //   const onScroll = () => {
  //     const doc = document.documentElement;
  //     const atBottom = doc.clientHeight + window.scrollY >= (doc.scrollHeight - 2);
  //     const beyondHero = window.scrollY > window.innerHeight * 0.6; // hide after leaving hero
  //     setShowScrollIndicator(!atBottom && !beyondHero);
  //   };
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   onScroll(); // initialize on mount
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>


      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in py-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-card border border-primary/20 rounded-full text-sm text-muted-foreground">
            We are not just regular <span className="ml-1 text-primary font-semibold">AI Developers</span>
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
          </div>

          {/* Subtitle */}
          <div className="text-center max-w-lg mx-auto">
            <p className="text-3xl md:text-3xl lg:text-4xl font-bold text-white/80 leading-snug tracking-tight">
              Leaders Don't{" "}
              <span className="text-primary drop-shadow-[0_0_4px_rgba(0,255,255,0.3)] font-semibold">
              DEBATE
              </span>
              {" "}AI
            </p>
            <p className="text-3xl md:text-3xl lg:text-4xl font-bold text-white/80 leading-snug tracking-tight mt-1">
              They{" "}
              <span className="text-primary drop-shadow-[0_0_4px_rgba(0,255,255,0.3)] font-semibold">
                PROFIT
              </span>
              {" "}from it!
            </p>
          </div>

          {/* Hook Line */}
          <div className="mt-8 text-center">
            <p className="text-xl md:text-2xl lg:text-2xl md:text-base italic text-muted-foreground/80 font-large">
              Ready to dominate your industry with AI?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl">
                  Start Your AI Journey
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[100vh] overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>
            <Button 
            variant="outline" 
            size="xl"       
            onClick={() => window.open('https://calendly.com/braiinit/30min', '_blank', 'noopener,noreferrer')}>
              <a>Book a Call</a>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer hover:border-primary-glow transition-colors"
             onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};