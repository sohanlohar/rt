import Image from "next/image";
import syncTime from "../../assets/images/sync-time-image.png";
import ultrasoundMD from "../../assets/images/ultrasound-MD-image.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowRightHover from "../../assets/icons/arrow-right-white.png";
import React, { useState } from "react";

const ProjectsSection = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const projects = [
    {
      id: "syncTime",
      title: "Sync Time",
      description:
        "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      image: syncTime,
      hoverImage: ultrasoundMD, // Using ultrasoundMD as placeholder hover image for now
      link: "/projects/sync-time",
    },
    {
      id: "ultrasoundMD",
      title: "Ultrasound MD",
      description:
        "We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information, we helped them enhance their online presence.",
      image: ultrasoundMD,
      hoverImage: syncTime, // Using syncTime as placeholder hover image for now
      link: "/projects/ultrasound-md",
    },
  ];

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
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 justify-between relative group`}
              >
                {/* Image Section */}
                <div className="w-full md:w-2/5 relative overflow-hidden rounded-3xl h-[300px] md:h-auto min-h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-opacity duration-500 ${hoveredSection === project.id
                      ? "opacity-0"
                      : "opacity-100"
                      }`}
                  />
                  <Image
                    src={project.hoverImage}
                    alt={`${project.title} Hover`}
                    fill
                    className={`object-cover absolute top-0 left-0 transition-opacity duration-500 ${hoveredSection === project.id
                      ? "opacity-100"
                      : "opacity-0"
                      }`}
                  />
                </div>

                {/* Content Section */}
                <div
                  className={`hidden md:flex w-full md:w-3/5 flex-col justify-between gap-5 md:gap-8 p-6 md:p-10 border border-[#00000033] rounded-3xl transition-all duration-500 ${hoveredSection === project.id
                    ? "bg-gradient-to-t from-primary/20 to-white"
                    : "bg-gray"
                    }`}
                >
                  <div className="flex flex-col gap-3">
                    <h4 className="heading-h3 text-black">{project.title}</h4>
                    <p className="text-lg md:text-2xl font-light leading-7 md:leading-9 text-black font-karla">
                      {project.description}
                    </p>
                  </div>

                  <button
                    className="flex justify-between items-center bg-primary-light px-6 py-3 md:px-8 md:py-4 text-primary rounded-full font-archivo text-lg md:text-2xl hover:bg-primary-dark hover:text-white transition-all duration-300 ease-in-out w-full sm:w-auto"
                    onMouseEnter={() => setHoveredSection(project.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    VIEW MORE
                    <div className="relative w-6 h-6 md:w-8 md:h-8 ml-4">
                      <Image
                        src={
                          hoveredSection === project.id
                            ? arrowRightHover
                            : arrowRight
                        }
                        alt="arrow right"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="group cursor-pointer flex justify-between rounded-full items-center bg-[#B5D0D3] hover:bg-primary-dark px-5 md:px-10 h-14 md:h-24 py-4 mt-5 transition-all duration-300 ease-in-out">
          <p className="text-black group-hover:text-white font-archivo font-normal text-sm md:text-3xl capitalize transition-all">
            Explore more Projects
          </p>

          <button className="flex flex-row gap-2 md:gap-3 items-center text-black group-hover:text-white rounded-full font-karla text-xs md:text-2xl transition-all">
            <div className="relative w-4 h-4 md:w-8 md:h-8">
              <Image
                src={arrowRight}
                alt="arrow right"
                fill
                className="object-contain block group-hover:hidden"
              />
              <Image
                src={arrowRightHover}
                alt="arrow right hover"
                fill
                className="object-contain hidden group-hover:block"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
