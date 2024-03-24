import ContractorLists from "@/components/ContractorLists";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <WorkList />
      <ContractorLists />
      <CTA />
      <Faq />
    </>
  );
}
