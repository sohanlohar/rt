import React from "react";
import workWithBg from "../../assets/images/work-with-bg.png";
import collaborationIcon from "../../assets/icons/collaboration-icon.png";
import personalIcon from "../../assets/icons/personal-icon.png";
import futureReadyIcon from "../../assets/icons/future-ready-icon.png";
import tailoredIcon from "../../assets/icons/tailored-icon.png";
import Image from "next/image";

const workWithUsData = [
  {
    title: "Tailored Solutions",
    description:
      "We don’t believe in one-size-fits-all. Every project is custom-built to fit your unique business needs.",
    imageUrl: tailoredIcon,
  },
  {
    title: "Future-Ready Technology",
    description:
      "We deliver scalable solutions that grow with your business and adapt to the future.",
    imageUrl: futureReadyIcon,
  },
  {
    title: "Collaboration at the Core",
    description:
      "We work with you, not for you. Your input shapes everything we do.",
    imageUrl: collaborationIcon,
  },
  {
    title: "Personal Commitment",
    description:
      "Our team is here for you at every step of the way, from the first meeting to long after the project is complete.",
    imageUrl: personalIcon,
  },
];

const WorkWithUsSection = () => {
  return (
    <section className="container rounded-40 mb-24 px-8 sm:px-14 py-12 sm:py-20 bg-[#F1F1F1]">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 mb-16">
        <h2 className="w-full sm:w-1/3 heading-h2 font-archivo font-bold text-primary">
          WHY <br />
          <span className="text-black font-normal">work with us?</span>
        </h2>
        <p className="w-full sm:w-2/3 text-xl font-karla font-normal">
          When you choose Ranav Technologies, you’re choosing more than just a
          technology provider you’re choosing a partner who’s invested in your
          long-term success. We bring years of experience, technical expertise,
          and a genuine commitment to helping your business thrive. Here’s why
          clients love working with us:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 mt-14 mb-20">
        {workWithUsData.map((item, index) => {
          return (
            <div className="flex flex-col sm:flex-row items-center gap-8" key={item.title}>
              <Image
                src={item.imageUrl}
                alt="about us background"
                className="w-20 h-20"
              />
              <div>
                <h5 className="text-lg font-karla text-black-dark font-bold">
                  {item.title}:
                </h5>
                <p className="text-lg font-karla text-black-dark font-normal leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex gap-5 text-center flex-col sm:flex-row justify-between items-center text-4xl font-archivo font-bold">
        <button className="btn-primary rounded-40">Contact Us</button>
        <h3>Because we care.</h3>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
