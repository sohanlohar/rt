import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="container">
      <div className="flex  flex-col sm:flex-row items-center gap-10 sm:gap-28 bg-[#7FABB0] bg-gradient-to-l from-[#7FABB0] to-white/80 p-10 sm:p-16 rounded-40 my-10">
        <h2 className="w-full sm:w-2/5 heading-h2 font-archivo font-normal text-black">
          Our <br />
          <span className="text-secondary">Mission</span>
        </h2>
        <p className="w-full sm:w-3/5 text-xl font-karla font-light text-black-dark text-justify">
          Our mission at Ranav Technologies is to empower businesses with
          innovative and reliable IT solutions that drive growth and efficiency.
          We strive to deliver high-quality, customized services that meet the
          unique needs of our clients, leveraging the latest technologies and
          best practices to foster digital transformation and create value.
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-28 bg-[#7FABB0] bg-gradient-to-r from-[#7FABB0] to-white/80 p-10 sm:p-16 rounded-40">
        <p className="w-full sm:w-3/5 text-xl font-karla font-light text-black-dark text-justify">
          Our mission at Ranav Technologies is to empower businesses with
          innovative and reliable IT solutions that drive growth and efficiency.
          We strive to deliver high-quality, customized services that meet the
          unique needs of our clients, leveraging the latest technologies and
          best practices to foster digital transformation and create value.
        </p>
        <h2 className="w-full sm:w-2/5 heading-h2 font-archivo font-normal text-black text-right">
          Our <br />
          <span className="text-secondary">Vision</span>
        </h2>
      </div>
    </section>
  );
};

export default MissionVisionSection;
