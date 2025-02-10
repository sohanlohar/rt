import Image from "next/image";
import React from "react";
import aboutUsBg from "../../assets/images/about-hero-background.png";
import heroAboutUs from "../../assets/images/hero-about-us.jpeg";

const AboutHero = () => {
  return (
    <>
      <section className="relative my-10">
        <div className="rounded-40">
          <div
            className="p-12 w-full h-96 md:h-[650px] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
            style={{ backgroundImage: `url(${heroAboutUs.src})` }}
          >
            <div className="flex flex-col items-center gap-1 md:gap-40">
              <div className="border text-[10px] sm:text-xs md:text-2xl opacity-80 leading-5 sm:leading-6 border-white text-white font-karla font-thin px-4 sm:px-6 py-1 rounded-full w-fit">
                Explore . Execute . Elevate
              </div>
              <h1 className="text-4xl md:text-8xl text-white-light z-10 font-archivo font-semibold uppercase">
                About Us
              </h1>
            </div>
            <div
              className="absolute top-0 w-full h-full z-5 pointer-events-none rounded-40"
              style={{
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.2) 27.66%, rgba(0, 0, 0, 0.2) 27.66%, rgba(0, 0, 0, 0.2) 53.66%, rgba(0, 0, 0, 0.2) 84.3%)",
              }}
            />
          </div>
        </div>
        <Image
          src={aboutUsBg}
          alt="about us background"
          className="absolute top-0 w-full h-full z-0"
        />
      </section>
      <p className="text-2xl font-karla text-justify leading-normal text-black mb-6">
        At Ranav Technologies, we believe that technology should work for
        people, not the other way around. We exist to make the complex
        simple—using innovative solutions to solve your biggest challenges. Our
        passion lies in creating custom technology that not only meets your
        business needs but helps you unlock new opportunities for growth.
      </p>
      <p className="text-2xl font-karla text-justify leading-normal text-black">
        Behind every line of code, every design, and every solution we create is
        a dedicated team of professionals who care about your success. We
        partner with businesses to develop tailored solutions—from powerful apps
        to seamless integrations—that push the boundaries of what’s possible.
        Our clients trust us because we take the time to understand their vision
        and work hand-in-hand to turn that vision into reality.
      </p>
    </>
  );
};

export default AboutHero;
