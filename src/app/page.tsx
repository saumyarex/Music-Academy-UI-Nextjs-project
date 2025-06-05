import FeaturedCourse from "@/components/FeaturedCourse";
import FeaturedWebinars from "@/components/FeaturedWebinars";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorsSection from "@/components/InstructorsSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseUs />
      <TestimonialCards />
      <FeaturedWebinars />
      <InstructorsSection />
      <Footer />
    </main>
  );
}
