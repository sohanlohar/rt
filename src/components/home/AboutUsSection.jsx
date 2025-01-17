import React from "react";
import aboutUs from "../../assets/images/about-us-image.jpg";
import aboutUsBg from "../../assets/images/about-us-bg.png";
import iconSmile from "../../assets/icons/icon-smile.png";
import iconTimeline from "../../assets/icons/icon-timeline.png";
import iconSetting from "../../assets/icons/icon-setting.png";
import iconCode from "../../assets/icons/icon-code.png";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section
      className="relative my-10 px-12 py-14 rounded-3xl"
      style={{
        background: "linear-gradient(180deg, #E7EAEB 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex justify-between pb-10 items-end">
        <h2 className="text-primary text-6xl font-archivo">About us</h2>
        <button className="border border-primary text-primary rounded-full font-karla text-xl px-5 py-2">
          READ MORE
        </button>
      </div>
      <div className="flex gap-8">
        <div className="w-2/3 relative">
          <Image src={aboutUs} alt="about us" className="rounded-3xl" />
          <div className="bg-white flex justify-between gap-1 flex-row w-2/5 absolute -bottom-10 right-20 rounded-10 p-5 shadow-0">
            <div className="flex flex-col items-center text-center">
              <Image src={iconSmile} alt="smile" />
              <p className="text-[9px] font-karla">
                Satisfied <br />
                Clients
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src={iconTimeline} alt="smile" />
              <p className="text-[9px] font-karla">
                Industry’s <br />
                best Skillset
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src={iconSetting} alt="smile" />
              <p className="text-[9px] font-karla">
                Solutions that <br />
                Caters all
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src={iconCode} alt="smile" />
              <p className="text-[9px] font-karla">
                Timeless <br />
                Experience
              </p>
            </div>
          </div>
        </div>
        <p className="w-1/3 text-xl font-karla text-justify text-[#212121]">
          At Ranav Technologies, we specialize in crafting innovative, custom
          tech solutions that empower businesses to thrive in a digital-first
          world. With a focus on efficiency and growth, we deliver cutting-edge
          technology designed to meet the unique challenges of modern
          enterprises. Our team combines technical expertise with a deep
          understanding of business needs, ensuring that every solution we
          create is reliable, scalable, and impactful. From startups to
          established corporations, we partner with our clients to drive success
          through technology.
        </p>
      </div>
      <Image
        src={aboutUsBg}
        alt="nknk"
        className="absolute top-0 right-0 w-full h-full"
      />
    </section>
  );
};

export default AboutUsSection;
