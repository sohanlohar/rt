import Image from "next/image";
import { useRouter } from "next/router";
import arrowRight from "../../assets/icons/arrow-right.png";
import syncTime from "../../assets/images/sync-time-image.png";
import ultrasoundMD from "../../assets/images/ultrasound-MD-image.png";
import arrowRightHover from "../../assets/icons/arrow-right-white.png";
import { useState } from "react";

const projects = [
  {
    title: "Sync Time",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Ultrasound MD",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Sync Time 1",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Ultrasound MD 1",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Sync Time 2",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Ultrasound MD 2",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Sync Time 3",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
  {
    title: "Ultrasound MD 3",
    description:
      "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
    imageUrl: syncTime,
  },
];

const Portfolios = () => {
  const router = useRouter();
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleViewMore = (title) => {
    const projectSlug = title.replace(/\s+/g, "-").toLowerCase();
    router.push(`/portfolio/${projectSlug}`);
  };

  return (
    <section className="container flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h3 className=" text-black font-archivo font-normal heading-h3 capitalize">
          Projects
        </h3>
      </div>

      {/* {projects.map((project, index) => (
        <div
          className={`flex ${
            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
          } gap-8 justify-between group relative"`}
          key={project.title}
        >
          <div className="w-full md:w-3/5 flex flex-col justify-between gap-5 md:gap-8 bg-gray p-5 md:p-10 border border-[#00000033] rounded-3xl transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-primary/20 group-hover:to-white">
            <h4 className="heading-h3 text-black">{project.title}</h4>
            <p className="text-xl md:text-2xl font-light leading-7 md:leading-9 text-black font-karla">
              {project.description}
            </p>
            <button
              onClick={() => handleViewMore(project.title)}
              className="flex justify-between items-center bg-primary-light px-5 md:px-8 py-2 md:py-4 text-primary rounded-full font-archivo text-xl md:text-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
            >
              VIEW MORE
              <Image src={arrowRight} alt="arrow right" />
            </button>
          </div>

          <div className="w-full md:w-2/5 relative overflow-hidden rounded-30">
            <Image
              src={ultrasoundMD}
              alt="Original Image"
              className="w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      ))}  */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex ${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              } gap-8 justify-between group relative"`}
            >
              <div className="w-full md:w-2/5 relative">
                <Image
                  src={syncTime}
                  alt="Sync Time"
                  className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
                    hoveredSection === `${project.title}`
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />
                <Image
                  src={ultrasoundMD}
                  alt="New Image"
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                    hoveredSection === `${project.title}`
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </div>

              <div
                className={`w-full md:w-3/5 flex flex-col justify-between gap-5 md:gap-8 p-5 md:p-10 border border-[#00000033] rounded-3xl transition-all duration-500 ${
                  hoveredSection === `${project.title}`
                    ? "bg-gradient-to-t from-primary/20 to-white"
                    : "bg-gray"
                }`}
              >
                <h4 className="heading-h3 text-black">{project.title}</h4>
                <p className="text-xl md:text-2xl font-light leading-7 md:leading-9 text-black font-karla">
                  {project.description}
                </p>

                <button
                  className="flex justify-between items-center bg-primary-light px-5 md:px-8 py-2 md:py-4 text-primary rounded-full font-archivo text-xl md:text-2xl hover:bg-primary-dark hover:text-white transition-all duration-300 ease-in-out"
                  onMouseEnter={() => setHoveredSection(`${project.title}`)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => handleViewMore(project.title)}
                >
                  VIEW MORE
                  <Image
                    src={
                      hoveredSection === `${project.title}`
                        ? arrowRightHover
                        : arrowRight
                    }
                    alt="arrow right"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
