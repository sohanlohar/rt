import React from "react";
import aboutUs from "../../assets/images/about-us-image.jpg";
import aboutUsBg from "../../assets/images/about-us-bg.png";
import iconSmile from "../../assets/icons/icon-smile.png";
import iconTimeline from "../../assets/icons/icon-timeline.png";
import iconSetting from "../../assets/icons/icon-setting.png";
import iconCode from "../../assets/icons/icon-code.png";
import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section
      id="target-section"
      className="container relative mb-8 sm:mb-28 px-4 md:px-20 py-4 md:pt-24 pb-10 rounded-40"
      style={{
        background: "linear-gradient(180deg, #E7EAEB 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex justify-between flex-row pb-5 md:pb-10 items-end">
        <h2 className="text-primary-extraDark heading-h2 z-10">About us</h2>
        <Link
          href="/about"
          className="btn-secondary"
        >
          READ MORE
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between z-10">
        <div className="w-full md:w-3/5 relative hidden md:block">
          <Image
            src={aboutUs}
            alt="about us"
            className="w-full h-full rounded-30"
          />
          <div className="bg-white flex items-center px-5 justify-between gap-1 flex-row w-80 h-24 absolute -bottom-10 left-16 rounded-10 shadow-0">
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-orange-500 opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconSmile}
                  alt="smile"
                  width={40}
                  height={40}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-orange-500">
                Satisfied <br /> Clients
              </p>
            </div>
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-primary opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconTimeline}
                  alt="smile"
                  width={40}
                  height={40}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-primary">
                Industry&apos;s <br />
                best Skillset
              </p>
            </div>
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-orange-500 opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconSetting}
                  alt="smile"
                  width={40}
                  height={40}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-orange-500">
                Timeless <br />
                Experience
              </p>
            </div>
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-primary opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconCode}
                  alt="smile"
                  width={40}
                  height={40}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-primary">
                Timeless <br />
                Experience
              </p>
            </div>
          </div>
        </div>
        <p className="w-full md:w-2/5 text-sm leading-4 md:leading-8 md:text-xl font-normal font-karla text-justify text-black">
          At Ranav Technologies, we specialize in crafting innovative, custom
          tech solutions that empower businesses to thrive in a digital-first
          world. With a focus on efficiency and growth, we deliver cutting-edge
          technology designed to meet the unique challenges of modern
          enterprises. <br />
          <br />
          Our team combines technical expertise with a deep understanding of
          business needs, ensuring that every solution we create is reliable,
          scalable, and impactful. From startups to established corporations, we
          partner with our clients to drive success through technology.
        </p>
      </div>
      <Image
        src={aboutUsBg}
        alt="about us background"
        className="absolute top-0 right-0 w-full h-full"
      />
    </section>
  );
};

export default AboutUsSection;
