import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              <span className="text-primary">Braiin</span>It
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-muted-foreground hover:text-primary transition-smooth">
              Process
            </a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-smooth">
              Our Work
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
          </nav>

          {/* Get In Touch Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};