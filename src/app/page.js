import HeroSection from "@/components/home/HeroSection/HeroSection";
import PopularDestinations from "@/components/home/PopularDestinations/PopularDestinations";
import ContactCTA from "@/components/home/ContactCTA/ContactCTA";
import OfficeSection from "@/components/home/OfficeSection/OfficeSection";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import WhyAnvida from "@/components/home/WhyAnvida/WhyAnvida";
import SeasonalOffers from "@/components/home/SeasonalOffers/SeasonalOffers";


export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <SeasonalOffers />
      <WhyAnvida />
      <Testimonials />
      <ContactCTA />
      <OfficeSection />
    </>
  );
}
