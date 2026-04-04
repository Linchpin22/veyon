import HeroSection from "@/Components/Home/HeroSection";
import PortfolioComp from "@/Components/Home/PortfolioComp";
import ServicesComp from "@/Components/Home/ServicesComp";
import WhyChooseUsComp from "@/Components/Home/WhyChooseUsComp";

export default function Page() {
  return (
    <>
     <HeroSection/>
     <ServicesComp/>
     <WhyChooseUsComp/>
     <PortfolioComp/>
    </>
  );
}