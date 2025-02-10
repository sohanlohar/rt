import CustomQuoteSection from "@/components/services/CustomQuoteSection";
import ExploreOurServices from "@/components/services/ExploreOurServices";
import OurProcess from "@/components/services/OurProcess";
import ServicesHero from "@/components/services/ServicesHero";
import React from "react";

const services = () => {
  return (
    <>
      <ServicesHero />
      <ExploreOurServices />
      <OurProcess />
      <CustomQuoteSection />
    </>
  );
};

export default services;
