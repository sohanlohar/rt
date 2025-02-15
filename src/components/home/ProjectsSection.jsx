import Image from "next/image";
import syncTime from "../../assets/images/sync-time-image.png";
import ultrasoundMD from "../../assets/images/ultrasound-MD-image.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="container mb-16 md:mb-24">
      <div className="flex flex-col justify-center gap-3 w-full md:w-3/4 items-center mb-5 md:mb-14 max-w-screen-lg m-auto text-center">
        <h2 className="text-primary heading-h2">Our Projects</h2>
        <p className="text-sm md:text-xl text-black font-karla font-normal mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever. Lorem Ipsum is simply
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-full md:w-2/5">
            <Image src={syncTime} alt="sync Time" className="w-full h-full" />
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-between gap-5 md:gap-8 bg-gray p-5 md:p-10 border border-[#00000033] rounded-3xl">
            <h4 className="heading-h3 text-black">
              Sync Time
            </h4>
            <p className="text-xl md:text-2xl font-light  leading-7 md:leading-9 text-black font-karla">
              SyncTime is a scheduling software for service-based businesses. It
              offers online booking, payment integrations, and features for
              managing appointments, pricing, teams, and virtual meetings.
            </p>
            <button className="flex justify-between items-center bg-primary-light px-5 md:px-8 py-2 md:py-4 text-primary rounded-full font-archivo text-xl md:text-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              VIEW MORE
              <Image src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-between group relative">
          <div className="w-full md:w-3/5 flex flex-col justify-between gap-5 md:gap-8 bg-gray p-5 md:p-10 border border-[#00000033] rounded-3xl transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-primary/20 group-hover:to-white">
            <h4 className="heading-h3 text-black">
              Ultrasound MD
            </h4>
            <p className="text-xl md:text-2xl font-light leading-7 md:leading-9 text-black font-karla">
              We partnered with Ultrasound MD to design & develop a cutting-edge
              website that streamlines their patient experience. By simplifying
              scheduling and providing clear information, we helped them enhance
              their online presence and reach a wider audience of patients in
              need.
            </p>
            <button className="flex justify-between items-center bg-primary-light px-5 md:px-8 py-2 md:py-4 text-primary rounded-full font-archivo text-xl md:text-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              VIEW MORE
              <Image src={arrowRight} alt="arrow right" />
            </button>
          </div>

          <div className="w-full md:w-2/5 relative">
            <Image
              src={ultrasoundMD}
              alt="Original Image"
              className="w-full h-full transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={syncTime}
              alt="New Image"
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        <div className="flex justify-between rounded-full items-center bg-primary-light px-5 md:px-10 h-12 md:h-20 py-4 mt-5">
          <p className=" text-black font-archivo font-normal text-xs md:text-3xl capitalize">
            Explore more Projects
          </p>
          <button className=" flex flex-row gap-1 md:gap-3 items-center text-primary rounded-full font-karla text-xs md:text-3xl underline">
            See All projects
            <Image src={arrowRight} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
