import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, Building, Award, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Students Counselled" },
  { icon: Building, value: 500, suffix: "+", label: "Partner Colleges" },
  { icon: Award, value: 5, suffix: "+", label: "Branches" },
  { icon: GraduationCap, value: 30, suffix: "+", label: "Expert counselor" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

function AnimateOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 animate-float blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-saffron-light/15 animate-float-reverse blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-accent/10 animate-pulse-glow blur-2xl" />
        <div className="absolute top-10 right-1/4 w-20 h-20 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 rounded-full bg-saffron-glow/25 animate-float-reverse" style={{ animationDelay: "2s" }} />
        {/* Saffron gradient wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <AnimateOnScroll className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary border border-primary/20">
            <GraduationCap className="w-4 h-4" />
            B.Tech Admissions 2026 Open
          </span>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll delay={150}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-4">
            Your Journey To{" "}
            <span className="text-gradient-saffron">B.Tech</span>
            <br/>
            Starts Here
          </h1>
        </AnimateOnScroll>

        {/* Brand */}
        <AnimateOnScroll delay={250}>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Career<span className="text-accent">4s</span>
          </p>
        </AnimateOnScroll>

        {/* Subtext */}
        <AnimateOnScroll delay={350}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Top placements, Premier Colleges, Exclusive Scholarships — we Guide You Every Step Of The Way To Your Dream Engineering Career.
          </p>
        </AnimateOnScroll>

        

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={550 + i * 100} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Scroll indicator */}
        <AnimateOnScroll delay={1000} className="mt-16">
          <ChevronDown className="w-8 h-8 text-primary/50 mx-auto animate-bounce" />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HeroSection;
