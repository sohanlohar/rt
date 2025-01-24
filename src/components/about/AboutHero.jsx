import Image from "next/image";
import React from "react";
import aboutUsBg from "../../assets/images/about-hero-background.png";
import heroAboutUs from "../../assets/images/hero-about-us.jpeg";

const AboutHero = () => {
  return (
    <section className="relative my-10">
      <div className="mx-14 rounded-40">
        <div
          className="w-full h-[650px] rounded-40 bg-cover bg-center relative z-10"
          style={{ backgroundImage: `url(${heroAboutUs.src})` }}
        >
          <h2>jhhjhj</h2>
          <h2>jhhjhj</h2>
          <h2>jhhjhj</h2>
          <h2>jhhjhj</h2>
        </div>
      </div>
      <Image
        src={aboutUsBg}
        alt="about us background"
        className="absolute top-0 w-full h-full"
      />
    </section>
  );
};

export default AboutHero;
