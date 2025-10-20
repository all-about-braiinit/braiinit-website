import { useEffect, useRef } from "react";
import CountUp, { useCountUp } from "react-countup"; // npm i react-countup
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


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

export const AboutSection = () => {
  const headerAnimation = useScrollAnimation(0.2);
  const cardsAnimation = useScrollAnimation(0.1);

  const processes = [
    {
      id: "01",
      title: "Discover",
      description: "We uncover untapped AI goldmines within your business operations and map out a data-driven strategy that turns your biggest challenges into competitive advantages.",
      features: [
        "AI Opportunity Deep-Dive Assessment",
        "Custom Strategic Roadmap Creation",
        "ROI Forecasting & Impact Analysis",
        "Implementation Risk Mitigation Planning"
      ]
    },
    {
      id: "02",
      title: "Design",
      description: "We architect tailored AI solutions that fit seamlessly into your workflow while simultaneously preparing your entire organization for AI-powered transformation.",
      features: [
        "Custom AI System Architecture",
        "Leadership Alignment Workshops",
        "Technical Team Upskilling Programs",
        "Change Management & Adoption Strategy"
      ]
    },
    {
      id: "03",
      title: "Deploy",
      description: "We implement your AI systems using our battle-tested methodology, then continuously optimize performance until your business operates as a true AI-first organization.",
      features: [
        "Full-Scale System Implementation",
        "Seamless Integration & Go-Live Support",
        "Real-Time Performance Tracking",
        "Ongoing Optimization & Scaling"
      ]
    }
  ];


  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20">
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-20 space-y-4 transition-all duration-1000 ${headerAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`} >
          <h2 className="text-5xl md:text-6xl font-bold">
            We <span className="text-primary">don't sell</span> AI
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">
            We sell <span className="text-primary bg-gradient-teal bg-clip-text text-transparent">Results!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-8">
            Our proven 3-step methodology transforms businesses into AI-first organizations
          </p>
        </div>

        {/* Process Cards */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1 */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-center">
              <span className="text-6xl font-bold text-primary">$</span>
              <StatCount end={100} suffix="K+" duration={2.2} />
            </div>
            <div className="text-lg text-muted-foreground font-medium">
              Saved for clients through AI automation & services
            </div>
          </div>

          {/* Stat 2 */}
          <div className="space-y-4">
            <StatCount end={15} suffix="+" duration={2} />
            <div className="text-lg text-muted-foreground font-medium">
              Businesses across industries boosted with smarter operations!
            </div>
          </div>

          {/* Stat 3 */}
          <div className="space-y-4">
            <StatCount end={75} suffix="+" duration={2} />
            <div className="text-lg text-muted-foreground font-medium">
              Custom AI solutions deployed for measurable growth!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};