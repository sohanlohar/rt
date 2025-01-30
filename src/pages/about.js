import AboutHero from "@/components/about/AboutHero";
import ApproachSection from "@/components/about/ApproachSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import WorkWithUsSection from "@/components/about/WorkWithUsSection";
import React from "react";

const About = () => {
  return (
    <>
      <AboutHero />
      <WorkWithUsSection />
      <ApproachSection />
      <MissionVisionSection />
    </>
  );
};

export default About;
