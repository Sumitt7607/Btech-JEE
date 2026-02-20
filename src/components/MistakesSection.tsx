import { useEffect, useRef, useState } from "react";
import {
  Building2,
  TrendingDown,
  HeartOff,
  Megaphone,
  Users,
  ShieldAlert,
  Footprints,
  MapPinOff,
} from "lucide-react";

const mistakes = [
  {
    icon: Building2,
    title: "Choosing College By Brand Name Only",
    description:
      "Many Parents Select Colleges Based Only On Brand Name Or Advertisements. A well-known Name Doesn't Always Guarantee Good Placements, Faculty Quality, Or Career Growth Opportunities.",
  },
  {
    icon: TrendingDown,
    title: "Ignoring Placement & Internship Records",
    description:
      "Placement And Internship Opportunities Are Critical For A Student's Career. Without Checking Real Placement Data, Students May Face Difficulty Getting Good Job Opportunities After Graduation.",
  },
  {
    icon: HeartOff,
    title: "Lack Of Proper Admission Guidance",
    description:
      "B.Tech Admission Involves Multiple Options Like Entrance Exams, Counselling, And Direct Admission. Without Expert Guidance, Parents May Miss Better Colleges And Career Opportunities.",
  },
  {
    icon: Megaphone,
    title: "Trusting Unverified Sources Or Agents",
    description:
      "Many parents Rely On Unreliable Agents Or Incomplete Information, Which Can Result In Wrong College Selection And False Placement Expectations.",
  },
  {
    icon: Users,
    title: "Missing Important Admission Deadlines",
    description:
      "Different Colleges And Counselling Processes Have Strict Timelines. Missing Deadlines Can Result In Losing The Opportunity To Secure Admission In Better Colleges.",
  },
  {
    icon: ShieldAlert,
    title: "Not Checking College Approval & Accreditation",
    description:
      "Approval From Authorities Like AICTE And University Affiliation Is Essential. Choosing Unapproved Colleges Can Create Problems In Degree validity And Future Career Opportunities.",
  },
  {
    icon: Footprints,
    title: "Taking Admission in Hurry Without Proper Research",
    description:
      "Due To Pressure And Confusion, Parents Sometimes Take Quick Decisions Without Proper Comparison, Which Can Affect The Student's Long-Term Career Growth.",
  },
  {
    icon: MapPinOff,
    title: "Not Comparing All Available College Options",
    description:
      "Without Comparing Multiple Colleges, Parents May Select Average Options While Better Colleges With Higher Placement And Growth Opportunities May Be Available.",
  },
];


const MistakesSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...prev, index]));
              }, index * 120);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-saffron-light"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-saffron/10 text-saffron font-semibold text-sm tracking-wide uppercase">
            Admission Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Common Mistakes Parents Make
            <br />
            <span className="text-saffron">During B.Tech Admission</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Avoid These Critical Errors To Secure The Best Engineering College
            For Your Child.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mistakes.map((mistake, index) => {
            const Icon = mistake.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative bg-background rounded-xl border-2 border-transparent p-6 shadow-sm cursor-default
                  transition-all duration-500 ease-out
                  hover:border-saffron hover:shadow-lg hover:shadow-saffron/15 hover:-translate-y-2
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                }}
              >
                {/* Number Badge */}
                <span
                  className={`absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-saffron text-saffron-foreground text-sm font-bold shadow-md
                    transition-transform duration-500 ${isVisible ? "scale-100" : "scale-0"}
                  `}
                  style={{ transitionDelay: `${index * 120 + 200}ms` }}
                >
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center mb-4 group-hover:animate-bounce">
                  <Icon className="w-6 h-6 text-saffron" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-foreground text-base mb-2 leading-snug">
                  {mistake.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MistakesSection;
