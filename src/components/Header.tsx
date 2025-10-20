import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const Header = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/braiinit/30min', '_blank', 'noopener,noreferrer');
  };
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              <a href="/"><span className="text-primary">Braiin</span>It</a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="/#work" className="text-muted-foreground hover:text-primary transition-smooth">
              Our Work
            </a>
            <a href="/#footer" className="text-muted-foreground hover:text-primary transition-smooth">
              Let's Connect!
            </a>
          </nav>

          {/* Get In Touch Button */}
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  Get In Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[100vh] overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>

            <Button variant="hero"
              onClick={handleBookCall}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};