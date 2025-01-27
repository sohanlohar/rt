import React from "react";
import workWithBg from "../../assets/images/work-with-bg.png";
import collaborationIcon from "../../assets/icons/collaboration-icon.png";
import personalIcon from "../../assets/icons/personal-icon.png";
import futureReadyIcon from "../../assets/icons/future-ready-icon.png";
import tailoredIcon from "../../assets/icons/tailored-icon.png";
import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section
      className="rounded-40 mx-14 my-28 px-14 pt-20 pb-16"
      style={{ backgroundImage: `url(${workWithBg.src})` }}
    >
      <div className="flex gap-14 mb-16">
        <h2 className="w-1/3 text-6xl font-archivo font-bold text-primary">
          WHY <br />
          <span className="text-black font-normal">work with us?</span>
        </h2>
        <p className="w-2/3 text-xl font-karla font-normal">
          When you choose Ranav Technologies, you’re choosing more than just a
          technology provider you’re choosing a partner who’s invested in your
          long-term success. We bring years of experience, technical expertise,
          and a genuine commitment to helping your business thrive. Here’s why
          clients love working with us:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 mt-14 mb-20">
        <div className="flex items-center gap-8">
          <Image
            src={collaborationIcon}
            alt="about us background"
            className="w-20 h-20"
          />
          <div>
            <h5 className="text-lg font-karla text-black-dark font-bold">
              Tailored Solutions:
            </h5>
            <p className="text-lg font-karla text-black-dark font-normal leading-6">
              We don’t believe in one-size-fits-all. Every project is
              custom-built to fit your unique business needs.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Image
            src={collaborationIcon}
            alt="about us background"
            className="w-20 h-20"
          />
          <div>
            <h5 className="text-lg font-karla text-black-dark font-bold">
              Tailored Solutions:
            </h5>
            <p className="text-lg font-karla text-black-dark font-normal leading-6 leading-6">
              We don’t believe in one-size-fits-all. Every project is
              custom-built to fit your unique business needs.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Image
            src={collaborationIcon}
            alt="about us background"
            className="w-20 h-20"
          />
          <div>
            <h5 className="text-lg font-karla text-black-dark font-bold">
              Tailored Solutions:
            </h5>
            <p className="text-lg font-karla text-black-dark font-normal leading-6">
              We don’t believe in one-size-fits-all. Every project is
              custom-built to fit your unique business needs.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Image
            src={collaborationIcon}
            alt="about us background"
            className="w-20 h-20"
          />
          <div>
            <h5 className="text-lg font-karla text-black-dark font-bold">
              Tailored Solutions:
            </h5>
            <p className="text-lg font-karla text-black-dark font-normal leading-6">
              We don’t believe in one-size-fits-all. Every project is
              custom-built to fit your unique business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center text-4xl font-archivo font-bold">
        <button className="btn-primary rounded-40">Contact Us</button>
        <h3>Because we care.</h3>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
