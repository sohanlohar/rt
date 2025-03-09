import React from 'react'
import careerHeroBg from "../../assets/images/career-hero-bg.jpg";

const CareersHero = () => {
  return (
    <section className="container">
    <div className="relative mb-16">
      <div
        className="p-12 w-full h-[calc(100vh-90px)] md:h-[calc(100vh-125px)] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
        style={{
          backgroundImage: `url(${careerHeroBg.src})`,
          backgroundColor: "#00000080",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <h1
            className="text-4xl md:text-6xl text-white-light text-center z-10 font-archivo font-semibold"
            style={{ letterSpacing: "-2px" }}
          >
            Careers & Jobs
          </h1>
          <p className="text-base md:text-2xl text-white-light font-normal text-center">
            At Ranav Technologies, we’re shaping the future of technology.
            Join a team that values innovation, collaboration, and impact.
            Grow with us and make a real difference in the tech world.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CareersHero