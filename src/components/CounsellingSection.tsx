import {
  GraduationCap,
  Building2,
  BookOpen,
  Landmark,
  Users,
  FileText,
 
 
} from "lucide-react";

const counsellingData = [
  {
    title: "JoSAA",
    subtitle: "Joint Seat Allocation Authority",
    students: "62,853",
    colleges: "121  ",
    description:
      "JoSAA conducts centralized counselling for IITs, NITs, IIITs, and GFTIs based on JEE Main and Advanced ranks.",
    icon: GraduationCap,
  },
  {
    title: "CSAB",
    subtitle: "Central Seat Allocation Board",
    students: "8,000",
    colleges: "32",
    description:
      "CSAB conducts special rounds counselling to fill vacant seats in NITs, IIITs and GFTIs.",
    icon: FileText,
  },
  {
    title: "JAC Delhi",
    subtitle: "Joint Admission Counselling Delhi",
    students: "7,000",
    colleges: "4",
    description:
      "JAC Delhi manages admissions for DTU, NSUT, IGDTUW, and IIIT Delhi based on JEE Main.",
    icon: Landmark,
  },
  {
    title: "IPU Counselling",
    subtitle: "Guru Gobind Singh Indraprastha University",
    students: "43,000",
    colleges: "130",
    description:
      "IPU counselling is conducted for admission into various B.Tech colleges affiliated with IPU.",
    icon: Building2,
  },
    {
    title: "HSTES",
    subtitle: "Haryana State Technical Entrance Society",
    students: "24,000",
    colleges: "143",
    description:
      "HSTES Counselling is conducted for engineering colleges across Haryana.",
    icon: Users,
  },
  {
    title: "AKTU Counselling",
    subtitle: "Dr. A.P.J. Abdul Kalam Technical University",
    students: "1,20,000",
    colleges: "800",
    description:
      "AKTU conducts centralized counselling for engineering colleges across Uttar Pradesh.",
   icon: GraduationCap,
  },
    {
    title: "MHT CET",
    subtitle: "Maharastra Common Entrance Test",
    students: "1,30,000",
    colleges: "450",
    description:
      "MHT CET conducts centralized counselling for engineering colleges across Maharastra.",
    icon: Users,
  },
  {
    title: "COMEDK",
    subtitle: "Consortium of Medical Engineering Colleges",
    students: "25,000",
    colleges: "20",
    description:
      "COMEDK counselling is conducted for private engineering colleges in Karnataka.",
    icon: BookOpen,
  },
];

export default function CounsellingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-orange-600 mb-3">
            Engineering Counselling
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore All Major Counselling Processes Across India To Secure Admission
            In Top Engineering Colleges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {counsellingData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-500 text-white mb-4 group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {item.subtitle}
                </p>

                {/* Stats */}
         <div className="flex justify-between text-sm mb-3">

  <span className="text-orange-600 font-medium flex items-center gap-1">
    <Users size={16} />
    {item.students}
  </span>

  <span className="text-orange-600 font-medium flex items-center gap-1">
    <Building2 size={16} />
    {item.colleges}
  </span>

</div>


                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                {/* Button */}
                <button className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2">
                  View Details →
                </button>
          
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
