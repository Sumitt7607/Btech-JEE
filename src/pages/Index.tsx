import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";
import MistakesSection from "@/components/MistakesSection";
import CollegeComparison from "@/components/CollegeComparison";
import CounsellingSection from "@/components/CounsellingSection";
import AdmissionProcess from "@/components/AdmissionProcess";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MistakesSection/>
      <CollegeComparison/>
      <CounsellingSection/>
      <AdmissionProcess/>
      {/* <FooterSection /> */}
    </div>
  );
};

export default Index;
