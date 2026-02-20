import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

const collegeTypes = [
{
  title: "State Government Colleges",
  icon: Building2,
  features: [
    "Very Low Tuition Fees (~₹10K–₹50K per year)",
  

    "Reserved Seats For Domicile Students",
    "Government Scholarships Available (SC/ST/OBC/EWS)",

    "Good Placement Opportunities In Local And Regional Companies",
  
    "Strong Alumni Network In Government And Private Sectors",
    "Better ROI (Return on Investment) Compared To Private Colleges",
    "Opportunity To Prepare For Government Jobs (PSUs, SSC, GATE)",

    "Stable Academic Environment With Structured Curriculum",
    "Good Option For Students With Limited Budget",
  ],
  cta: "Explore State Colleges",
},

{
  title: "Central Government Colleges",
  icon: Landmark,
  features: [
    "Admission Through National-Level Exams (JEE Main & JEE Advanced)",
    "Includes IITs, NITs, IIITs, And Other Centrally Funded Institutes",

    "Excellent Placement Opportunities With Top Companies",


    "World-Class Infrastructure And Advanced Laboratories",
    "Exposure To Cutting-Edge Technologies And Research",
    "Internship Opportunities In Top MNCs (Google, Microsoft, Amazon)",

    "Preferred By Top Recruiters And Tech Companies",
    "Opportunity To Work On Government-Funded Research Projects",
    "Strong Coding Culture And Competitive Environment",
  
  ],
  cta: "Explore Top Institutes",
},

{
  title: "Deemed & Private Colleges",
  icon: GraduationCap,
  features: [
    "Flexible Admission Through JEE Main, State Exams, Or Direct Admission",
    "Wide Range Of B.Tech Specializations (AI, Data Science, Cybersecurity, etc.)",
    "Modern Infrastructure With Smart Classrooms And Advanced Labs",
  
    "Regular Workshops, Seminars, And Industry Guest Lectures",
    "Good Placement Opportunities In IT And Private Sector Companies",
    "Dedicated Placement Training (Aptitude, Coding, Interview Prep)",

    "Better Campus Facilities (Hostel, Sports, Innovation Labs)",
    "Focus On Skill Development And Emerging Technologies",

    "Opportunities To Participate In Hackathons And Tech Events",
 
  ],
  cta: "Explore Private Colleges",
}

];

const CollegeComparison = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary mb-4">
            🎓 B.Tech Admissions 2025
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Choose Your Path To <span className="text-primary">B.Tech</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare State Government, Central Government & Private engineering
            Colleges — Find The Perfect Fit For Your Future.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-[1400px] mx-auto px-4 pb-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {collegeTypes.map((college, i) => {
            const Icon = college.icon;

            return (
              <>
                {/* Card */}
                <div
                  key={college.title}
                  className={`w-full md:w-[380px] transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + i * 200}ms` }}
                >
                  <Card className="group h-full border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl">

                    <div className="h-2 w-full bg-gradient-to-r from-primary via-orange-400 to-primary" />

                    <CardHeader className="text-center pb-4 pt-6">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon className="h-10 w-10" />
                      </div>

                      <CardTitle className="text-2xl font-bold">
                        {college.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col px-6 pb-6">
                      <ul className="space-y-4 mb-6 flex-1">
                        {college.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-base"
                          >
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* <Button className="w-full text-base font-semibold py-6">
                        {college.cta}
                      </Button> */}
                    </CardContent>
                  </Card>
                </div>

                {/* VS Separator */}
                {i < collegeTypes.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      VS
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CollegeComparison;
