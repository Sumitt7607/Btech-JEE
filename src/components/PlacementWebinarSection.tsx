import { useEffect, useRef, useState } from "react";
import {
  Calendar, Clock, User, Play, Video,
  Building2, Globe, TrendingUp, Users, Award, Briefcase
} from "lucide-react";

/* ─── Types ─── */
interface Webinar {
  id: string;
  type: "campus" | "offcampus";
  title: string;
  speaker: string;
  role: string;
  date: string;
  time: string;
  liveSoon: boolean;
}

interface Recording {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  type: "campus" | "offcampus";
  thumbnail: string;
}

/* ─── Data ─── */
const upcomingWebinars: Webinar[] = [
  {
    id: "w1",
    type: "campus",
    title: "Crack Campus Placements: Strategy & Resume Tips",
    speaker: "Dr. Anjali Mehra",
    role: "Placement Director, IIT Alumni",
    date: "March 15, 2025",
    time: "11:00 AM IST",
    liveSoon: true,
  },
  {
    id: "w2",
    type: "offcampus",
    title: "Off-Campus Hiring: LinkedIn, Job Boards & Cold Outreach",
    speaker: "Rahul Verma",
    role: "Senior HR, TCS & Ex-Infosys",
    date: "March 22, 2025",
    time: "3:00 PM IST",
    liveSoon: false,
  },
];

const pastRecordings: Recording[] = [
  {
    id: "r1",
    title: "How to Ace Technical Interviews",
    speaker: "Priya Sharma",
    duration: "52 min",
    type: "campus",
    thumbnail: "🖥️",
  },
  {
    id: "r2",
    title: "Off-Campus Job Hunt: A Step-by-Step Guide",
    speaker: "Arun Nair",
    duration: "45 min",
    type: "offcampus",
    thumbnail: "🌐",
  },
  {
    id: "r3",
    title: "Group Discussion & HR Round Mastery",
    speaker: "Sneha Kapoor",
    duration: "38 min",
    type: "campus",
    thumbnail: "💬",
  },
  {
    id: "r4",
    title: "Building a Portfolio That Gets You Hired",
    speaker: "Karthik Rao",
    duration: "61 min",
    type: "offcampus",
    thumbnail: "📁",
  },
];

const comparisonStats = [
  {
    label: "Eligibility",
    campus: "CGPA ≥ 6.5 + No backlogs",
    offcampus: "Varies by company",
    icon: Award,
  },
  {
    label: "Process",
    campus: "Aptitude → GD → Interview",
    offcampus: "Apply → Screen → Interview",
    icon: TrendingUp,
  },
  {
    label: "Companies",
    campus: "200+ on-campus recruiters",
    offcampus: "500+ hiring off-campus",
    icon: Building2,
  },
  {
    label: "Avg. Package",
    campus: "₹6.5 LPA",
    offcampus: "₹5.8 LPA",
    icon: Briefcase,
  },
];

/* ─── Hook ─── */
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

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Webinar Card ─── */
function WebinarCard({ webinar, index }: { webinar: Webinar; index: number }) {
  const { ref, inView } = useInView(0.1);
  const isLeft = webinar.type === "campus";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`transition-all duration-700 ${
        inView
          ? "opacity-100 translate-x-0"
          : isLeft
          ? "opacity-0 -translate-x-14"
          : "opacity-0 translate-x-14"
      }`}
    >
      <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-saffron/20 shadow-md hover:shadow-[0_10px_40px_hsl(24_100%_50%/0.2)] hover:-translate-y-1 transition-all duration-300 group">
        {/* Top gradient header */}
        <div
          className="px-6 py-5 text-white relative overflow-hidden"
          style={{
            background: isLeft
              ? "linear-gradient(135deg, hsl(18,100%,40%), hsl(24,100%,50%))"
              : "linear-gradient(135deg, hsl(24,100%,50%), hsl(32,100%,62%))",
          }}
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -right-2 -bottom-4 w-16 h-16 rounded-full bg-white/10" />

          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full flex items-center gap-1.5">
              {webinar.type === "campus" ? (
                <><Building2 className="w-3 h-3" /> On-Campus</>
              ) : (
                <><Globe className="w-3 h-3" /> Off-Campus</>
              )}
            </span>
            {webinar.liveSoon ? (
              <span className="flex items-center gap-1.5 text-xs font-bold bg-red-500 px-3 py-1 rounded-full animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                LIVE SOON
              </span>
            ) : (
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Upcoming</span>
            )}
          </div>

          <h3 className="font-bold text-lg leading-snug relative z-10">{webinar.title}</h3>
        </div>

        {/* Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <User className="w-4 h-4 text-saffron" />
            <span className="font-semibold text-gray-800">{webinar.speaker}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 text-xs">{webinar.role}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-saffron" />{webinar.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-saffron" />{webinar.time}</span>
          </div>

          <button
            className="mt-2 w-full py-3 rounded-xl font-bold text-white text-sm hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md"
            style={{
              background: "linear-gradient(90deg, hsl(18,100%,40%), hsl(24,100%,50%))",
            }}
          >
            🚀 Register Now — Free
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Recording Card ─── */
function RecordingCard({ rec, index }: { rec: Recording; index: number }) {
  const { ref, inView } = useInView(0.05);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-600 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="group relative rounded-2xl overflow-hidden border border-saffron/15 bg-white shadow-sm hover:shadow-[0_8px_30px_hsl(24_100%_50%/0.18)] transition-all duration-300 cursor-pointer">
        {/* Thumbnail */}
        <div className="relative h-40 bg-gradient-to-br from-saffron-muted to-white flex items-center justify-center overflow-hidden">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{rec.thumbnail}</span>
          {/* Saffron overlay on hover */}
          <div className="absolute inset-0 bg-saffron/0 group-hover:bg-saffron/20 transition-all duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
              <Play className="w-6 h-6 text-saffron ml-1" fill="hsl(24,100%,50%)" />
            </div>
          </div>
          {/* Type badge */}
          <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-white/90 text-saffron-dark border border-saffron/30">
            {rec.type === "campus" ? "On-Campus" : "Off-Campus"}
          </span>
          <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-md">
            {rec.duration}
          </span>
        </div>
        {/* Info */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-1">{rec.title}</h4>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Video className="w-3 h-3 text-saffron" /> {rec.speaker}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function PlacementWebinarSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.1);
  const { ref: compRef, inView: compInView } = useInView(0.1);

  return (
    <section className="py-20 px-4 bg-saffron-muted relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-saffron/30 text-saffron-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <Users className="w-4 h-4 text-saffron" />
            Placement Webinars
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Campus vs{" "}
            <span className="text-saffron">Off-Campus</span> Placement
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Learn, prepare, and get placed. Join live webinars or watch past
            recordings from industry experts covering both routes to your dream job.
          </p>
        </div>

        {/* Upcoming Webinar Cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-saffron inline-block" />
            🔴 Upcoming Webinars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingWebinars.map((w, i) => (
              <WebinarCard key={w.id} webinar={w} index={i} />
            ))}
          </div>
        </div>

        {/* Comparison Strip */}
        <div
          ref={compRef}
          className={`mb-16 rounded-3xl overflow-hidden shadow-xl transition-all duration-800 ${
            compInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div
            className="text-white px-8 py-5 flex items-center gap-3"
            style={{ background: "linear-gradient(90deg, hsl(18,100%,40%), hsl(24,100%,50%), hsl(32,100%,62%))" }}
          >
            <TrendingUp className="w-5 h-5" />
            <h3 className="font-bold text-lg">Campus vs Off-Campus — Quick Comparison</h3>
          </div>

          <div className="bg-white">
            {/* Column headers */}
            <div className="grid grid-cols-4 px-6 py-3 bg-saffron-muted border-b border-saffron/10 text-xs font-bold uppercase tracking-wider text-gray-500">
              <span>Category</span>
              <span className="flex items-center gap-1"><Building2 className="w-3 h-3 text-saffron" /> On-Campus</span>
              <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-saffron" /> Off-Campus</span>
              <span></span>
            </div>

            {comparisonStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                  className={`grid grid-cols-4 items-center px-6 py-4 border-b border-gray-50 hover:bg-saffron-muted/50 transition-colors duration-200 ${
                    compInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  } transition-all duration-600`}
                >
                  <div className="flex items-center gap-2 font-bold text-gray-700 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-saffron/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-saffron" />
                    </div>
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 pr-4">{stat.campus}</div>
                  <div className="text-sm text-gray-600 pr-4">{stat.offcampus}</div>
                  <div />
                </div>
              );
            })}
          </div>

          {/* Animated stats footer */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 text-white"
            style={{ background: "linear-gradient(90deg, hsl(18,100%,40%), hsl(24,100%,50%))" }}
          >
            {[
              { label: "Campus Recruiters", target: 200, suffix: "+" },
              { label: "Off-Campus Openings", target: 500, suffix: "+" },
              { label: "Placement Rate", target: 85, suffix: "%" },
              { label: "Avg. Package (LPA)", target: 6, suffix: ".5 ₹" },
            ].map((s) => (
              <div key={s.label} className="text-center py-5 border-r border-white/20 last:border-0">
                <div className="text-3xl font-extrabold">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Recordings */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-saffron inline-block" />
            🎬 Past Webinar Recordings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pastRecordings.map((rec, i) => (
              <RecordingCard key={rec.id} rec={rec} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
