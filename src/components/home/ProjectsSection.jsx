import Image from "next/image";
import syncTime from "../../assets/images/sync-time-image.png";
import ultrasoundMD from "../../assets/images/ultrasound-MD-image.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowRightHover from "../../assets/icons/arrow-right-white.png";
import React, { useState } from "react";

const ProjectsSection = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <section className="container mb-16 md:mb-24">
      <div className="flex flex-col justify-center gap-3 w-full md:w-3/4 items-center mb-5 md:mb-14 max-w-screen-lg m-auto text-center">
        <h2 className="text-primary heading-h2">Our Projects</h2>
        <p className="text-sm md:text-xl text-black font-karla font-normal mb-5">
          Explore our portfolio to see how we transform ideas into reality
          through cutting-edge development and exceptional user experiences.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
            <div className="w-full md:w-2/5 relative">
              <Image
                src={syncTime}
                alt="Sync Time"
                className={`w-full h-full transition-opacity duration-500 ${
                  hoveredSection === "syncTime" ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src={ultrasoundMD}
                alt="New Image"
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                  hoveredSection === "syncTime" ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div
              className={`w-full md:w-3/5 flex flex-col justify-between gap-5 md:gap-8 p-5 md:p-10 border border-[#00000033] rounded-3xl transition-all duration-500 ${
                hoveredSection === "syncTime"
                  ? "bg-gradient-to-t from-primary/20 to-white"
                  : "bg-gray"
              }`}
            >
              <h4 className="heading-h3 text-black">Sync Time</h4>
              <p className="text-xl md:text-2xl font-light leading-7 md:leading-9 text-black font-karla">
                SyncTime is a scheduling software for service-based businesses.
                It offers online booking, payment integrations, and features for
                managing appointments, pricing, teams, and virtual meetings.
              </p>

              <button
                className="flex justify-between items-center bg-primary-light px-5 md:px-8 py-2 md:py-4 text-primary rounded-full font-archivo text-xl md:text-2xl hover:bg-primary-dark hover:text-white transition-all duration-300 ease-in-out"
                onMouseEnter={() => setHoveredSection("syncTime")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                VIEW MORE
                <Image
                  src={
                    hoveredSection === "syncTime" ? arrowRightHover : arrowRight
                  }
                  alt="arrow right"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
            <div
              className={`w-full md:w-3/5 flex flex-col justify-between gap-5 md:gap-8 p-5 md:p-10 border border-[#00000033] rounded-3xl transition-all duration-500 ${
                hoveredSection === "ultrasoundMD"
                  ? "bg-gradient-to-t from-primary/20 to-white"
                  : "bg-gray"
              }`}
            >
              <h4 className="heading-h3 text-black">Ultrasound MD</h4>
              <p className="text-xl md:text-2xl font-light leading-7 md:leading-9 text-black font-karla">
                We partnered with Ultrasound MD to design & develop a
                cutting-edge website that streamlines their patient experience.
                By simplifying scheduling and providing clear information, we
                helped them enhance their online presence and reach a wider
                audience of patients in need.
              </p>

              <button
                className="flex justify-between items-center bg-primary-light px-5 md:px-8 py-2 md:py-4 text-primary rounded-full font-archivo text-xl md:text-2xl hover:bg-primary-dark hover:text-white transition-all duration-300 ease-in-out"
                onMouseEnter={() => setHoveredSection("ultrasoundMD")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                VIEW MORE
                <Image
                  src={
                    hoveredSection === "ultrasoundMD"
                      ? arrowRightHover
                      : arrowRight
                  }
                  alt="arrow right"
                />
              </button>
            </div>

            <div className="w-full md:w-2/5 relative">
              <Image
                src={ultrasoundMD}
                alt="Original Image"
                className={`w-full h-full transition-opacity duration-500 ${
                  hoveredSection === "ultrasoundMD"
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />
              <Image
                src={syncTime}
                alt="New Image"
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                  hoveredSection === "ultrasoundMD"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="group cursor-pointer flex justify-between rounded-full items-center bg-primary-light hover:bg-primary-dark px-5 md:px-10 h-12 md:h-20 py-4 mt-5 transition-all duration-300 ease-in-out">
          <p className="text-black group-hover:text-white font-archivo font-normal text-xs md:text-3xl capitalize transition-all">
            Explore more Projects
          </p>

          <button className="flex flex-row gap-1 md:gap-3 items-center text-primary group-hover:text-white rounded-full font-karla text-xs md:text-3xl underline transition-all">
            See All Projects
            <Image
              src={arrowRight}
              alt="arrow right"
              className="block group-hover:hidden"
            />
            <Image
              src={arrowRightHover}
              alt="arrow right hover"
              className="hidden group-hover:block"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
