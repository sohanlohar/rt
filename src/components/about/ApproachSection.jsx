import Image from "next/image";
import React from "react";
import discoveryUnderstanding from "../../assets/images/discovery-Understanding.png";
import strategicPlanning from "../../assets/images/strategic-Planning.png";
import OngoingSupport from "../../assets/images/Ongoing-Support.png";
import SeamlessExecution from "../../assets/images/Seamless-Execution.png";
import DevelopmentDesign from "../../assets/images/Development-Design.png";

const ourApproach = [
  {
    title: "Discovery & Understanding",
    description:
      "Westart by listening. We dive deep into your business to fully understand your goals, pain points, and vision. Whether it’s a complex system overhaul or a simple software upgrade, we make sure we know what success looks like for you",
    imageUrl: discoveryUnderstanding,
    hoverImageUrl: discoveryUnderstanding,
  },
  {
    title: "Strategic Planning",
    description:
      "Once we understand where you are and where you want to go, we craft a detailed technology strategy that aligns with your business objectives. We don't just think about the here and now—we plan for the future, ensuring the solutions we deliver grow with your business.",
    imageUrl: strategicPlanning,
    hoverImageUrl: strategicPlanning,
  },
  {
    title: "Development & Design",
    description:
      "This is where the magic happens. Our team of expert developers and designers get to work, building custom solutions that are modern, reliable, and scalable. Every feature we create is tailored to your specific needs and designed to improve how your business runs.",
    imageUrl: DevelopmentDesign,
    hoverImageUrl: DevelopmentDesign,
  },
  {
    title: "Seamless Execution",
    description:
      "Once your solution is ready, we implement it with minimal disruption to your operations. Our goal is to make the transition as smooth as possible so that you can start seeing results from day one.",
    imageUrl: SeamlessExecution,
    hoverImageUrl: SeamlessExecution,
  },
  {
    title: "Ongoing Support",
    description:
      "Wedon’t just hand over the keys and walk away. We offer continuous support to ensure your systems are always running smoothly and evolving alongside your business. Your success is an ongoing journey, and we’re here for every step of the way.",
    imageUrl: OngoingSupport,
    hoverImageUrl: OngoingSupport,
  },
];

const ApproachSection = () => {
  return (
    <section className="container my-16">
      <div className="mb-20">
        <h2 className="heading-h2 mb-10">Our Approach</h2>
        <p className="text-xl font-karla font-normal leading-8 md:leading-10">
          At Ranav Technologies, we believe that every business is unique, and
          so are its challenges. That’s why we take the time to understand your
          business inside and out before crafting a solution that’s tailor-made
          for you. Our process is collaborative and transparent because we
          believe the best results come from working together.
        </p>
      </div>
      <div className="bg-[#F1F1F1] p-8 md:p-10 rounded-40">
        {ourApproach.map((item, index) => {
          return (
            <div
              className={`flex gap-12 sm:gap-28 items-center my-10 ${
                index % 2 == 0 ? "flex-col sm:flex-row" : "flex-col sm:flex-row-reverse"
              }`}
              key={item.title}
            >
              <div className="w-full sm:w-2/5">
                <Image src={item.imageUrl} alt="about us background" />
              </div>
              <div className="w-full sm:w-3/5">
                <h4 className="text-2xl md:text-4xl font-archivo text-black font-bold mb-5">
                  {item.title}
                </h4>
                <p className="text-xl font-karla text-black font-light leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApproachSection;
