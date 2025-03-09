import React from "react";
import heroContactBg from "../../assets/images/hero-contact-bg.jpg";

const HeroContact = () => {
  return (
    <section className="container">
      <div className="relative mb-16">
        <div
          className="p-12 w-full h-[calc(100vh-90px)] md:h-[calc(100vh-125px)] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
          style={{ backgroundImage: `url(${heroContactBg.src})` }}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <h1
              className="text-4xl md:text-6xl text-white-light text-center z-10 font-archivo font-semibold"
              style={{ letterSpacing: "-2px" }}
            >
              Let’s Connect
            </h1>
            <p className="text-base md:text-2xl text-white-light font-normal text-center">
              Ready to discuss your project or need more information?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
