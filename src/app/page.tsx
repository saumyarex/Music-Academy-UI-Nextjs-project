import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseUs />
      <TestimonialCards />
    </main>
  );
}
