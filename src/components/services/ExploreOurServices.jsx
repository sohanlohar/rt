import React from "react";
import Image from "next/image";
import dataEngineering from "../../assets/images/data-engineering.jpg";
import servicesSlide2 from "../../assets/images/services-slide2.jpeg";
import servicesSlide5 from "../../assets/images/services-slide5.jpeg";
import servicesSlide4 from "../../assets/images/services-slide4.jpeg";
import uiUxDesign from "../../assets/images/ui-ux-design.jpg";
import servicesSlide6 from "../../assets/images/services-slide6.jpeg";

const ExploreServices = [
  {
    title: "Data Engineering",
    description:
      "Our data engineering services help you extract valuable insights, optimize operations, and make data driven decisions.",
    imageUrl: dataEngineering,
  },
  {
    title: "Software Development",
    description:
      "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    imageUrl: servicesSlide2,
  },
  {
    title: "Mobile App & Website Development",
    description:
      "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    imageUrl: servicesSlide5,
  },
  {
    title: "API Development",
    description:
      "Integrate seamlessly and unlock new opportunities. Our API development services enable data sharing, system interoperability, and efficient business processes.",
    imageUrl: servicesSlide4,
  },
  {
    title: "UIUX Design",
    description:
      "We Create exceptional user experiences that boost customer satisfaction and loyalty. Our design expertise enhances brand perception and drives conversions.",
    imageUrl: uiUxDesign,
  },
  {
    title: "Software Testing",
    description:
      "We are focused on Mitigating risks and ensuring product quality. Our comprehensive testing services help you deliver reliable software that meets user expectations.",
    imageUrl: servicesSlide6,
  },
];

const ExploreOurServices = () => {
  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-6xl font-archivo text-center font-normal text-black-dark">
          Explore Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {ExploreServices.map((item, index) => (
          <div
            key={index}
            className="px-5 py-8 rounded-40 bg-white border mb-5"
          >
            <div className="h-[355px] rounded-30 mb-5">
              <Image
                src={item.imageUrl}
                alt="about us background"
                className="w-full h-full object-cover rounded-30"
              />
            </div>
            <h2 className="text-2xl font-archivo text-black-dark font-bold mt-2 mb-3">
              {item.title}
            </h2>
            <p className="text-black-dark font-karla font-light leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreOurServices;
