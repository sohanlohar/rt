import AboutHero from "@/components/about/AboutHero";
import WorkWithUsSection from "@/components/about/WorkWithUsSection";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutHero />
      <WorkWithUsSection />
      <h1>About Page</h1>
      <p>This is the About page of my Next.js application.</p>
    </div>
  );
};

export default About;
