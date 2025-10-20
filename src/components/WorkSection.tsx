import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WorkSection = () => {
  const headerAnimation = useScrollAnimation(0.2);
  const cardsAnimation = useScrollAnimation(0.1);
  const workAreas = [
    {
      title: "SaaS Solutions",
      description: "AI-powered software as a service platforms that scale with your business needs",
      projects: [
        "Intelligent Customer Support Automation",
        "Predictive Analytics Dashboard",
        "AI-Driven Content Management",
        "Smart Workflow Optimization"
      ],
      metrics: {
        efficiency: "85% increase",
        satisfaction: "92% user satisfaction",
        roi: "300% ROI in 6 months"
      },
      color: "from-primary to-primary-glow"
    },
    {
      title: "Mobile & Apps", 
      description: "Next-generation mobile applications with embedded AI capabilities",
      projects: [
        "Computer Vision Mobile App",
        "Voice-Activated Assistant",
        "Personalized Recommendation Engine",
        "Real-time Language Translation"
      ],
      metrics: {
        downloads: "2M+ downloads",
        rating: "4.8★ app rating",
        engagement: "40% higher engagement"
      },
      color: "from-primary/80 to-primary"
    },
    {
      title: "Automation",
      description: "End-to-end business process automation powered by artificial intelligence",
      projects: [
        "Document Processing Automation",
        "Supply Chain Optimization",
        "Quality Control Systems",
        "Financial Process Automation"
      ],
      metrics: {
        time_saved: "70% time reduction",
        accuracy: "99.5% accuracy rate",
        cost_savings: "$2M annual savings"
      },
      color: "from-primary-glow/60 to-primary/80"
    }
  ];

  return (
    <section id="work" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-20 space-y-4 transition-all duration-1000 ${
            headerAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-heading text-foreground">Our Previous Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed businesses across different industries with cutting-edge AI solutions
          </p>
        </div>

        {/* Work Areas Grid */}
        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {workAreas.map((area, index) => (
            <div
              key={area.title}
              className={`transition-all duration-700 ${
                cardsAnimation.isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: cardsAnimation.isVisible ? `${index * 200}ms` : '0ms' 
              }}
            >
              <Card className="group hover:glow-teal-strong hover:scale-105 transition-all duration-500 h-full cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 space-y-6 h-full flex flex-col relative z-10">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-2xl font-bold text-white">{index + 1}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{area.description}</p>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4 flex-grow">
                    <h4 className="text-lg font-semibold text-foreground">Key Projects</h4>
                    <ul className="space-y-3">
                      {area.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4 pt-6 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                    <h4 className="text-lg font-semibold text-foreground">Results</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(area.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</span>
                          <span className="text-sm font-semibold text-primary group-hover:text-primary-glow transition-colors duration-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full mt-4 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                    View Case Studies
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to see your business transformed?
            </h3>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can bring similar results to your organization with our proven AI solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Explore Full Portfolio
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};