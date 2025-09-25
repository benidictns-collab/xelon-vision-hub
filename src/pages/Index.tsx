import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AdvantagesSection />
      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default Index;
