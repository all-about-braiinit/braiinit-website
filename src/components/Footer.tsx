import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer id="footer" className="relative border-t border-border bg-gradient-subtle">
      {/* Compact vertical padding via clamp to stay thin across breakpoints */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(1.25rem,2.5vw,2rem)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground leading-none">
              Contact
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=hello@braiinit.com&su=BraiinIt%20Service%20Request&body=Hi%0A%0AI%20am%20reaching%20out%20from%20the%20BraiinIt%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded leading-tight"
                >
                  hello@braiinit.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918999890704?text=Hey%20BraiinIt!%20Let%27s%20discuss%20about%20an%20interesting%20AI%20Project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded leading-tight">
                  +918999890704
                </a>
              </li>
            </ul>



            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full h-10 px-4 text-sm leading-none"
                  >
                    Get In Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[100vh] overflow-y-auto">
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Center: Legal (desktop) */}
          <div className="hidden md:flex items-end justify-center">
            <nav className="flex items-center gap-6 text-sm text-muted-foreground leading-tight">
              <a
                href="/terms"
                className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Right: Follow */}
          <div className="text-right md:justify-self-end">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground leading-none">
              Follow
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/braiinit/"
                  className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded leading-tight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@lets-braiinit" 
                className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded leading-tight">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lets_braiinit" 
                className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded leading-tight">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal (mobile) */}
        <div className="mt-8 md:hidden flex justify-center">
          <nav className="flex items-center gap-6 text-sm text-muted-foreground leading-tight">
            <a
              href="/terms"
              className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
