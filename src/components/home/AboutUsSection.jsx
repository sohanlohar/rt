import React from "react";
import aboutUs from "../../assets/images/about-us-image.jpg";
import aboutUsBg from "../../assets/images/about-us-bg.png";
import iconSmile from "../../assets/icons/icon-smile.png";
import iconTimeline from "../../assets/icons/icon-timeline.png";
import iconSetting from "../../assets/icons/icon-setting.png";
import iconCode from "../../assets/icons/icon-code.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section
      id="target-section"
      className="container relative mb-8 sm:mb-28 px-4 md:px-20 py-4 md:pt-24 pb-10 rounded-40 bg-gradient-to-b from-[#E7EAEB] to-[#FFFFFF]"
    >
      {/* Desktop Header: Visible only on md+ */}
      <div className="hidden md:flex justify-between flex-row pb-5 md:pb-10 items-end">
        <h2 className="text-primary-extraDark heading-h2 z-10">About us</h2>
        <Link href="/about" className="btn-secondary">
          READ MORE
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between z-10">
        <div className="w-full md:w-3/5 relative block">
          <Image
            src={aboutUs}
            alt="about us"
            className="w-full h-auto md:h-full rounded-30 object-cover min-h-[400px] md:min-h-auto"
          />
          {/* Stats Box - Mobile: Top-left overlay, Desktop: Bottom-left overlay */}
          <div className="bg-white/90 backdrop-blur-sm flex items-center px-4 py-2 justify-between gap-2 flex-row w-[90%] sm:w-auto absolute top-6 left-1/2 -translate-x-1/2 md:top-auto md:left-16 md:translate-x-0 md:-bottom-10 rounded-xl md:rounded-10 shadow-lg md:w-80 md:h-24 md:px-5">
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-orange-500 opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconSmile}
                  alt="Satisfied Clients Icon"
                  width={40}
                  height={40}
                  className="relative z-10 w-5 h-5 md:w-auto md:h-auto transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[9px] leading-[10px] sm:text-[8.5px] sm:leading-[10px] font-karla transition-all duration-300 group-hover:text-orange-500 font-semibold md:font-normal">
                Satisfied <br /> Clients
              </p>
            </div>
            <div className="w-[1px] h-8 bg-gray-300 md:hidden"></div>
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-primary opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconCode}
                  alt="Skillset Icon"
                  width={40}
                  height={40}
                  className="relative z-10 w-5 h-5 md:w-auto md:h-auto transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[9px] leading-[10px] sm:text-[8.5px] sm:leading-[10px] font-karla transition-all duration-300 group-hover:text-primary font-semibold md:font-normal">
                Industry&apos;s <br />
                Best Skillset
              </p>
            </div>
            <div className="w-[1px] h-8 bg-gray-300 md:hidden"></div>
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-orange-500 opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconSetting}
                  alt="Experience Icon"
                  width={40}
                  height={40}
                  className="relative z-10 w-5 h-5 md:w-auto md:h-auto transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[9px] leading-[10px] sm:text-[8.5px] sm:leading-[10px] font-karla transition-all duration-300 group-hover:text-orange-500 font-semibold md:font-normal">
                Solutions that <br />
                Caters all
              </p>
            </div>
            <div className="w-[1px] h-8 bg-gray-300 md:hidden"></div>
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-primary opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src={iconTimeline}
                  alt="Solutions Icon"
                  width={40}
                  height={40}
                  className="relative z-10 w-5 h-5 md:w-auto md:h-auto transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[9px] leading-[10px] sm:text-[8.5px] sm:leading-[10px] font-karla transition-all duration-300 group-hover:text-primary font-semibold md:font-normal">
                Timeless <br />
                Experience
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Header: Visible only on mobile (< md) */}
        <div className="flex justify-between flex-row items-center md:hidden mt-4">
          <h2 className="text-primary-extraDark heading-h2 z-10">About us</h2>
          <Link href="/about" className="text-black uppercase text-sm font-semibold border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition-colors">
            READ MORE
          </Link>
        </div>

        <div className="w-full md:w-2/5 mt-2 md:mt-0">
          <p className="text-base leading-6 md:leading-8 md:text-xl font-normal font-karla text-left text-gray-600 md:text-black opacity-90">
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
      </div>
      <Image
        src={aboutUsBg}
        alt="about us background"
        className="absolute top-0 right-0 w-full h-full -z-10 rounded-40"
      />
    </section>
  );
};

export default AboutUsSection;
