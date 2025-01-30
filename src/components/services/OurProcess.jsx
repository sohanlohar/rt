import Image from "next/image";
import React from "react";
import vectorDeployment from "../../assets/icons/vector-Deployment.png";
import vectorTesting from "../../assets/icons/vector-testing.png";
import vectorDevelopment from "../../assets/icons/vector-development.png";
import vectorDesign from "../../assets/icons/vector-design.png";
import vectorResearch from "../../assets/icons/vector-research.png";

const processData = [
  {
    title: "Research",
    description:
      "We conduct in-depth research to understand your business challenges. Our modern approach combines data-driven insights with strategic thinking to identify opportunities for digital transformation.",
    imageUrl: vectorResearch,
    textColor: "",
  },
  {
    title: "Design",
    description:
      "We believe that exceptional user experiences are the cornerstone of successful software. Our design process blends aesthetics with usability, creating intuitive & visually appealing interfaces. With a mature understanding of user behavior, we craft digital solutions that resonate with your target audience.",
    imageUrl: vectorDesign,
  },
  {
    title: "Development",
    description:
      "Our agile development methodology ensures rapid delivery of high-quality software. Our expert team leverages the latest technologies to build robust and scalable solutions. With a focus on efficiency and innovation, we deliver products that exceed expectations.",
    imageUrl: vectorDevelopment,
  },
  {
    title: "Software Testing",
    description:
      "We are committed to delivering flawless software. Our rigorous testing processes guarantee optimal performance, security, and user satisfaction. Our expertise in quality assurance ensures that every aspect of your product meets the highest standards.",
    imageUrl: vectorTesting,
  },
  {
    title: "Deployment",
    description:
      "Our seamless deployment process ensures a smooth transition to live environments. With meticulous planning and execution, we minimize disruptions and maximize user adoption. Our ongoing support and maintenance services provide peace of mind and ensure long-term success.",
    imageUrl: vectorDeployment,
  },
];

const OurProcess = () => {
  return (
    <>
      <section className="mx-16 mt-24">
        <div className="mb-10 mx-auto max-w-6xl text-center">
          <h2 className="text-6xl font-archivo text-center font-normal text-black-dark mb-5">
            Our Process
          </h2>
          <p className="text-xl font-karla font-normal leading-9 text-black">
            Our streamlined process starts with understanding your goals,
            followed by precise design and agile development. After rigorous
            testing, we deploy smoothly, then provide ongoing support to keep
            your solution efficient and impactful.
          </p>
        </div>
      </section>
      <section>
        {processData.map((item, index) => {
          return (
            <div
              className={`flex ${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              } my-20`}
              key={index}
            >
              <div className="w-1/3"></div>
              <div className="w-2/3 bg-[#EFEFEF] p-6 rounded-tl-full rounded-bl-full px-11 py-12">
                <div className="flex gap-10 items-center">
                  <div>
                    <div className="w-36 h-36 flex items-center justify-center relative border-[2.1px] border-dashed border-black rounded-full">
                      <div className="w-28 h-28 flex items-center justify-center border-[20px] border-red-500 rounded-full">
                        <Image
                          src={item.imageUrl}
                          alt="about us background"
                          className="object-cover rounded-[30px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-4xl text-[#026F7C] font-archivo font-bold mb-6">
                      {item.title}
                    </h4>
                    <p className="text-xl font-karla font-light text-[#222222]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default OurProcess;
