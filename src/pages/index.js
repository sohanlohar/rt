import AboutUsSection from "@/components/home/AboutUsSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSlider from "@/components/home/HeroSlider";
import OurBlogSection from "@/components/home/OurBlogSection";
import OurServicesSection from "@/components/home/OurServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TechSlider from "@/components/home/TechSlider";
import TestimonialOne from "@/components/home/TestimonialOne";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutUsSection />
      <TechSlider />
      <OurServicesSection />
      <ProjectsSection />
      <TestimonialOne />
      <OurBlogSection sectionTite="Our Blog"/>
      <ContactSection />
    </>
  );
}
