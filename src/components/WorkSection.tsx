import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WorkSection = () => {
  const headerAnimation = useScrollAnimation(0.2);
  const cardsAnimation = useScrollAnimation(0.1);
  // const workAreas = [
  //   {
  //     title: "SaaS Solutions",
  //     description: "AI-powered software as a service platforms that scale with your business needs",
  //     projects: [
  //       "Intelligent Customer Support Automation",
  //       "Predictive Analytics Dashboard",
  //       "AI-Driven Content Management",
  //       "Smart Workflow Optimization"
  //     ],
  //     metrics: {
  //       efficiency: "85% increase",
  //       satisfaction: "92% user satisfaction",
  //       roi: "300% ROI in 6 months"
  //     },
  //     color: "from-primary to-primary-glow"
  //   },
  //   {
  //     title: "Mobile & Apps",
  //     description: "Next-generation mobile applications with embedded AI capabilities",
  //     projects: [
  //       "Computer Vision Mobile App",
  //       "Voice-Activated Assistant",
  //       "Personalized Recommendation Engine",
  //       "Real-time Language Translation"
  //     ],
  //     metrics: {
  //       downloads: "2M+ downloads",
  //       rating: "4.8★ app rating",
  //       engagement: "40% higher engagement"
  //     },
  //     color: "from-primary/80 to-primary"
  //   },
  //   {
  //     title: "Automation",
  //     description: "End-to-end business process automation powered by artificial intelligence",
  //     projects: [
  //       "Document Processing Automation",
  //       "Supply Chain Optimization",
  //       "Quality Control Systems",
  //       "Financial Process Automation"
  //     ],
  //     metrics: {
  //       time_saved: "70% time reduction",
  //       accuracy: "99.5% accuracy rate",
  //       cost_savings: "$2M annual savings"
  //     },
  //     color: "from-primary-glow/60 to-primary/80"
  //   }
  // ];

  const workAreas = [
    {
      title: "SaaS Solutions",
      description: "AI-powered software as a service platforms that scale with your business needs",
      videoSrc: "/videos/saas-demo.mp4",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Mobile & Apps",
      description: "Next-generation mobile applications with embedded AI capabilities",
      videoSrc: "/videos/saas-demo.mp4",
      color: "from-primary/80 to-primary"
    },
    {
      title: "Automation",
      description: "End-to-end business process automation powered by artificial intelligence",
      videoSrc: "/videos/saas-demo.mp4",
      color: "from-primary-glow/60 to-primary/80"
    }
  ];
  const handleVideoHover = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.play();
  };

  const handleVideoLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.pause();
    video.currentTime = 0; // Reset to beginning
  };

  return (
    <section id="work" className="pt-8 md:pt-12 scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative" style={{ paddingTop: '50px' }}>
        {/* Section Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-20 space-y-4 transition-all duration-1000 ${headerAnimation.isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`} >
          <h2 className="text-5xl md:text-6xl font-bold">
            Our <span className="text-primary">Previous Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-8">
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
              className={`transition-all duration-700 ${cardsAnimation.isVisible
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
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                      {area.title}
                    </h3>
                    {/* Video Frame */}
                    <div className="relative aspect-video bg-muted/20 mx-4 rounded-lg overflow-hidden">
                      <video
                        src={area.videoSrc}
                        className="w-full h-full object-cover cursor-pointer"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={handleVideoHover}
                        onMouseLeave={handleVideoLeave}
                      >
                        <div className="flex items-center justify-center h-full bg-muted/40">
                          <div className="text-muted-foreground">Video Preview</div>
                        </div>
                      </video>

                      {/* Play indicator overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-primary/20 rounded-full p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-primary"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Work Areas Grid */}
        <div
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {workAreas.map((area, index) => (
            <div
              key={area.title}
              className={`transition-all duration-700 ${cardsAnimation.isVisible
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
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                      {area.title}
                    </h3>
                    {/* Video Frame */}
                    <div className="relative aspect-video bg-muted/20 mx-4 rounded-lg overflow-hidden">
                      <video
                        src={area.videoSrc}
                        className="w-full h-full object-cover cursor-pointer"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={handleVideoHover}
                        onMouseLeave={handleVideoLeave}
                      >
                        <div className="flex items-center justify-center h-full bg-muted/40">
                          <div className="text-muted-foreground">Video Preview</div>
                        </div>
                      </video>

                      {/* Play indicator overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-primary/20 rounded-full p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-primary"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>


        {/* Portfolio CTA */}
        <div className="text-center space-y-6" style={{ paddingBottom: '40px', paddingTop: '20px' }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to dominate with AI?
            </h3>
            <p className="text-lg text-muted-foreground">
              Book a strategic consultation and discover exactly how AI can 10x your business results in the next 90 days.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};