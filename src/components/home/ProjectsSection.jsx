import Image from "next/image";
import syncTime from "../../assets/images/sync-time-image.png";
console.log("🚀 ~ syncTime:", syncTime)
import ultrasoundMD from "../../assets/images/ultrasound-MD-image.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col justify-center gap-3 items-center mb-14 max-w-screen-lg m-auto text-center">
        <h2 className="text-7xl text-primary font-archivo font-normal">Our Projects</h2>
        <p className="text-xl text-black font-archivo font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever. Lorem Ipsum is simply
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8 justify-between">
          <div className="w-2/5">
            <Image src={syncTime} alt="sync Time" />
          </div>
          <div className="w-3/5 flex flex-col justify-center gap-10 bg-gray px-5 py-10 border border-[#00000033] rounded-3xl">
            <h4 className="text-3xl text-black font-archivo">Sync Time</h4>
            <p>
              SyncTime is a scheduling software for service-based businesses. It
              offers online booking, payment integrations, and features for
              managing appointments, pricing, teams, and virtual meetings.
            </p>
            <button className="flex justify-between items-center bg-primary-light px-8 py-2 text-primary rounded-full font-karla text-xl">
              VIEW MORE
              <Image src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <div className="w-3/5 flex flex-col justify-center gap-10 bg-gray px-5 py-10 border border-[#00000033] rounded-3xl">
            <h4 className="text-3xl text-black font-archivo">Ultrasound MD</h4>
            <p>
              We partnered with Ultrasound MD to design & develop a cutting-edge
              website that streamlines their patient experience. By simplifying
              scheduling and providing clear information, we helped them enhance
              their online presence and reach a wider audience of patients in
              need.
            </p>
            <button className="flex justify-between items-center bg-primary-light px-8 py-2 text-primary rounded-full font-karla text-xl">
              VIEW MORE
              <Image src={arrowRight} alt="arrow right" />
            </button>
          </div>
          <div className="w-2/5">
            <Image src={ultrasoundMD} alt="ultrasound MD" />
          </div>
        </div>
        <div className="flex justify-between rounded-full items-center bg-primary-light px-8 py-4 mt-5">
          <p className=" text-black font-karla text-xl">
            Explore more Projects
          </p>
          <button className=" flex flex-row gap-3 items-center text-primary rounded-full font-karla text-xl">
            See All projects
            <Image src={arrowRight} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
