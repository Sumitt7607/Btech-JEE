import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "B.Tech Programs", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Placements", href: "#" },
  { label: "Contact", href: "#" },
];

const programs = [
  "Computer Science",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "AI & Data Science",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const FooterSection = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-saffron-light to-accent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <AnimateOnScroll>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-extrabold">
                Career<span className="text-primary">4s</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Empowering students to achieve their dream of pursuing B.Tech from top-tier engineering colleges across India.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </AnimateOnScroll>

          {/* Quick Links */}
          <AnimateOnScroll delay={100}>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Programs */}
          <AnimateOnScroll delay={200}>
            <h3 className="text-lg font-bold mb-4 text-primary">B.Tech Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200 text-sm">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Contact */}
          <AnimateOnScroll delay={300}>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/60 text-sm">admissions@career4s.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/60 text-sm">123 Education Hub, Tech Park, Bangalore - 560001</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom bar */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/40 text-sm">
              © 2025 Career4s. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/40">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};

export default FooterSection;
