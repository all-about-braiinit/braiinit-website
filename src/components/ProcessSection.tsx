import { useEffect, useRef } from "react";
import CountUp, { useCountUp } from "react-countup"; // npm i react-countup
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function useInViewOnce(options: IntersectionObserverInit = { threshold: 0.3 }) {
  const ref = useRef<HTMLElement | null>(null);
  const hasFiredRef = useRef(false);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    if (!ref.current || hasFiredRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        hasFiredRef.current = true;
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function StatCount({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const { ref: triggerRef, inView } = useInViewOnce({ threshold: 0.3 });

  const { start, reset } = useCountUp({
    ref: spanRef,
    start: 0,
    end,
    duration,
    separator: ",",
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) {
      reset();
      start();
    }
  }, [inView, start, reset]);

  return (
    <div ref={triggerRef as any} className="inline-flex items-baseline justify-center">
      <span ref={spanRef} className="text-6xl font-bold text-primary" />
      <span className="text-6xl font-bold text-primary">{suffix}</span>
    </div>
  );
}

export const ProcessSection = () => {

  const processes = [
    {
      id: "01",
      title: "Identify",
      description: "We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.",
      features: [
        "AI Opportunity Assessment",
        "Strategic Roadmap Development",
        "ROI Analysis & Prioritization",
        "Risk Assessment & Mitigation"
      ]
    },
    {
      id: "02", 
      title: "Educate",
      description: "We train and support your team with the right tools and know-how to embed AI across your entire organization.",
      features: [
        "Executive AI Workshops",
        "Technical Team Training",
        "Change Management Support",
        "Best Practices Implementation"
      ]
    },
    {
      id: "03",
      title: "Develop",
      description: "We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.",
      features: [
        "Custom AI Solutions",
        "Integration & Deployment",
        "Performance Monitoring",
        "Continuous Optimization"
      ]
    }
  ];

  return (
    <section id="process" className="pt-8 md:pt-12 scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            We <span className="text-primary">don't sell</span> AI.
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">
            We sell <span className="text-primary bg-gradient-teal bg-clip-text text-transparent">Results.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-8">
            Our proven 3-step methodology transforms businesses into AI-first organizations
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {processes.map((process, index) => (
            <Card key={process.id} className="group hover:glow-teal transition-smooth">
              <CardContent className="p-8 space-y-6">
                {/* Process Number */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-primary">{process.id}</div>
                  <div className="h-px bg-primary flex-1 opacity-50"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Connection Line */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-primary opacity-50 transform -translate-y-1/2"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-12">
          <div className="space-y-4">
            <StatCount end={500} suffix="M+" duration={2.2} />
            <div className="text-lg text-muted-foreground">
              Professionals upskilled in AI via our platforms
            </div>
          </div>

          <div className="space-y-4">
            <StatCount end={200} suffix="+" duration={2} />
            <div className="text-lg text-muted-foreground">
              AI Opportunities identified for businesses
            </div>
          </div>

          <div className="space-y-4">
            <StatCount end={150} suffix="+" duration={2} />
            <div className="text-lg text-muted-foreground">
              Custom AI systems deployed successfully
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};