import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-foreground">
              <span className="text-primary">Braiin</span>It
            </div>
            <p className="text-muted-foreground">
              Building Smarter Solutions for Smarter Businesses.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  Get In Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">AI Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Team Training</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Custom Development</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Process Automation</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Industries</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">SaaS & Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Financial Services</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Manufacturing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">AI Insights</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Whitepapers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">YouTube Content</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 BraiinIt. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};