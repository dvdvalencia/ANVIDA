import HeroSection from "@/components/home/HeroSection/HeroSection";
import PopularDestinations from "@/components/home/PopularDestinations/PopularDestinations";
import ContactCTA from "@/components/home/ContactCTA/ContactCTA";

export default function Home() {
  return (
    <>
      <ContactCTA />
      <HeroSection />
      <PopularDestinations />
    </>
  );
}
