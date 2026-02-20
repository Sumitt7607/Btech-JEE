import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Download, GraduationCap, CreditCard, FileText, School } from "lucide-react";

const documentCategories = [
  {
    icon: GraduationCap,
    title: "Academic Certificates",
    emoji: "🎓",
    color: "from-saffron to-saffron-light",
    documents: [
      "10th Class Marksheet & Certificate",
      "12th Class Marksheet & Certificate",
      "Transfer Certificate (TC)",
      "School Leaving Certificate",
    ],
  },
  {
    icon: CreditCard,
    title: "Identity Proofs",
    emoji: "🪪",
    color: "from-saffron-dark to-saffron",
    documents: [
      "Aadhaar Card (Original + Photocopy)",
      "Date of Birth Proof",
      "8 Passport-size Photographs",
      "Signature on white paper",
    ],
  },
  {
    icon: FileText,
    title: "Government Certificates",
    emoji: "📋",
    color: "from-saffron to-saffron-light",
    documents: [
      "Caste Certificate (SC/ST/OBC if applicable)",
      "Income Certificate (for fee concession)",
      "Domicile / Residence Certificate",
      "EWS Certificate (if applicable)",
    ],
  },
  {
    icon: School,
    title: "School Certificates",
    emoji: "📜",
    color: "from-saffron-dark to-saffron",
    documents: [
      "Migration Certificate",
      "Character Certificate",
      "Conduct Certificate",
      "Gap Certificate (if applicable)",
    ],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function DocumentationSection() {
  const { ref: sectionRef, inView: sectionInView } = useInView(0.1);
  const { ref: btnRef, inView: btnInView } = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-saffron blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 bg-saffron-light blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-saffron-muted border border-saffron/30 text-saffron-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse-dot inline-block" />
            Documents Required
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            B.Tech Admission{" "}
            <span className="text-saffron">Documentation</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Prepare all the required documents before applying. Keep originals
            and photocopies ready for a smooth admission process.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documentCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  animationDelay: `${i * 120}ms`,
                }}
                className={`group relative bg-white rounded-2xl border-2 border-saffron/20 p-6 shadow-sm
                  hover:shadow-[0_8px_32px_hsl(24_100%_50%/0.25)] hover:-translate-y-2 hover:border-saffron
                  transition-all duration-400 cursor-pointer
                  ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  transition-all duration-700`}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${cat.color}`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <span>{cat.emoji}</span> {cat.title}
                </h3>

                <ul className="space-y-2.5">
                  {cat.documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mt-0.5 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Download Button with Shimmer */}
        <div
          ref={btnRef}
          className={`mt-14 flex justify-center transition-all duration-700 delay-500 ${
            btnInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-base overflow-hidden shadow-lg hover:shadow-[0_8px_30px_hsl(24_100%_50%/0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, hsl(18,100%,40%), hsl(24,100%,50%), hsl(32,100%,62%), hsl(24,100%,50%), hsl(18,100%,40%))",
              backgroundSize: "300% auto",
              animation: "shimmer 2.5s linear infinite",
            }}
          >
            <Download className="w-5 h-5" />
            Download Complete Checklist
            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)",
                backgroundSize: "200% auto",
                animation: "shimmer 1.8s linear infinite",
              }}
            />
          </button>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-5">
          * All documents must be self-attested. Carry originals for verification.
        </p>
      </div>
    </section>
  );
}
