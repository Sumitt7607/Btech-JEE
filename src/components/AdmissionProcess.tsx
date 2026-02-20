import { useEffect, useRef, useState } from "react";
import { ClipboardList, FileText, ListChecks, BadgeCheck, Wallet } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Registration / Apply Online",
    description:
      "Visit the official portal and fill out the application form with your personal and academic details.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Entrance Exam (JEE / State)",
    description:
      "Appear for JEE Main or the relevant state entrance exam and download your scorecard after results.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Merit List & Counselling",
    description:
      "Check the published merit list and register for your preferred counselling round to select a branch.",
    icon: ListChecks,
  },
  {
    id: 4,
    title: "Document Verification",
    description:
      "Attend the verification session with all original documents — marksheets, ID proof, category certificate etc.",
    icon: BadgeCheck,
  },
  {
    id: 5,
    title: "Fee Payment & Enrollment",
    description:
      "Pay the admission fee online or offline and complete your final enrollment to confirm your seat.",
    icon: Wallet,
  },
];

const AdmissionProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [lineProgress, setLineProgress] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
              setLineProgress((prev) => Math.max(prev, ((index + 1) / steps.length) * 100));
            }, index * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-20 px-4 bg-background">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          BTech Admission Process
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-5">
          Follow these simple steps to secure your admission and kickstart your engineering journey.
        </p>
        <div className="mx-auto h-1 w-24 rounded-full bg-saffron" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical connecting line (background track) */}
        <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-border" />

        {/* Animated line fill */}
        <div
          className="absolute left-8 top-10 w-0.5 bg-saffron transition-all duration-1000 ease-out"
          style={{ height: `${lineProgress}%` }}
        />

        {/* Steps */}
        <div className="flex flex-col gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);

            return (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`
                  relative flex items-start gap-6
                  transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
              >
                {/* Step Circle */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-saffron flex items-center justify-center shadow-lg transition-shadow duration-700 ${isVisible ? "saffron-glow animate-saffron-pulse" : ""}`}
                  >
                    <Icon size={26} color="white" strokeWidth={2} />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-saffron text-saffron text-[10px] font-bold flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 bg-card border border-border rounded-2xl p-6 shadow-sm
                    hover:shadow-md hover:-translate-y-1 transition-all duration-300 group
                    hover:border-saffron/40"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-saffron transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
