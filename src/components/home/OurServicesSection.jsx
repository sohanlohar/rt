import React from "react";
import servicesSlide1 from "../../assets/images/services-slide1.jpg";

const OurServicesSection = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col justify-center gap-3 items-center mb-14">
        <h2 className="text-7xl font-archivo font-normal">Our Services</h2>
        <p className="text-xl text-black font-archivo font-normal">
          We deliver results. Our services are designed to simplify your
          business, improve efficiency, and keep you ahead
        </p>
      </div>
      <div className="mt-6 flex flex-row justify-between gap-10">
        <div className="w-1/3 flex flex-col justify-center gap-10 bg-gray px-5 py-10 border border-[#00000033] rounded-3xl">
          <h4 className="text-3xl text-black font-archivo">
            We Deliver Results
          </h4>
          <p>
            At Ranav Technologies, we don&apos;t just offer services—we deliver
            outcomes. Whether it&apos;s boosting efficiency, enhancing security,
            or improving customer experiences, our solutions are designed to
            create measurable impact. We help you achieve more with technology
            that works as hard as you do.
          </p>
          <button className="w-fit border border-primary text-primary rounded-full font-karla text-xl px-8 py-2">
            OUR PROCESS
          </button>
        </div>
        <div
          className="w-2/3 bg-primary bg-cover bg-center px-12 py-16 rounded-3xl text-white flex justify-between flex-col min-h-[450px]"
          style={{
            background: `linear-gradient(270deg, #014D57 0%, rgba(1, 110, 124, 0.6) 100%), url('${servicesSlide1.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-5xl text-white font-bold  font-archivo">
            Data Engineering
          </h2>
          <p className="text-xl text-white font-light font-archivo">
            Our data engineering services help you extract valuable insights,
            optimize operations, and make data driven decisions.
          </p>
          <button className="w-fit border border-white text-white rounded-full font-karla text-xl px-8 py-2">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
