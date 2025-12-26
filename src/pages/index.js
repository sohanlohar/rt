import AboutUsSection from "@/components/home/AboutUsSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSlider from "@/components/home/HeroSlider";
import OurBlogSection from "@/components/home/OurBlogSection";
import OurServicesSection from "@/components/home/OurServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TechSlider from "@/components/home/TechSlider";
import TestimonialOne from "@/components/home/TestimonialOne";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ranav Tech - Custom Software Solutions & Mobile Apps</title>
        <meta
          name="description"
          content="Ranav Tech delivers seamless custom software solutions, intuitive mobile apps, and inspiring websites to streamline operations and drive business success."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSlider />
      <AboutUsSection />
      <TechSlider />
      <OurServicesSection />
      <ProjectsSection />
      <TestimonialOne />
      <OurBlogSection sectionTitle="Our Blog" />
      <ContactSection />
    </>
  );
}
