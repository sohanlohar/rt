import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import arrowLeftWhite from "../../assets/icons/arrow-left-white.png";
import portfolioHeroBg from "../../assets/images/portfolio-hero.png";
import syncTime from "../../assets/images/sync-time-image.png";

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

const ProjectDetail = () => {
  const router = useRouter();
  const { project } = router.query;
  const [projectDetail, setProjectDetail] = useState(null);

  useEffect(() => {
    if (project) {
      const formattedTitle = project.replace(/-/g, " ");

      const foundProject = projects.find(
        (p) => p.title.toLowerCase() === formattedTitle.toLowerCase()
      );

      if (foundProject) {
        setProjectDetail(foundProject);
      }
    }
  }, [project]);

  if (!projectDetail) {
    return <h1 className="text-center text-3xl mt-10">Project Not Found</h1>;
  }

  return (
    <>
      <section className="container mb-20">
        <div className="relative">
          <div
            className="p-44 w-full h-96 md:h-[650px] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
            style={{ backgroundImage: `url(${syncTime.src})` }}
          >
            <div className="absolute inset-0 bg-black/50 z-0 rounded-40"></div>
            <div className="flex flex-col items-center justify-center gap-10 z-10">
              <button onClick={() => router.back()} className="flex items-center gap-2 rounded-10 bg-white px-2 py-1 absolute left-10 top-10">
                <span className="flex items-center bg-primary w-5 h-5 rounded-full justify-center text-center">
                  <Image src={arrowLeftWhite} alt="arrow right" />
                </span>{" "}
                Back
              </button>
              <h1
                className="text-4xl md:text-6xl text-white-light z-10 font-archivo font-semibold"
                style={{ letterSpacing: "-2px" }}
              >
                Sync Time
              </h1>
              <p className="text-2xl text-white-light font-normal text-center">
                SyncTime is a scheduling software for service-based businesses.
                It offers online booking, payment integrations, and features for
                managing appointments, pricing, teams, and virtual meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-5">{projectDetail.title}</h1>
        <p className="text-lg">{projectDetail.description}</p>
      </div>
    </>
  );
};

export default ProjectDetail;
