import ContactServices from "@/components/services/ContactServices";
import ExploreOurServices from "@/components/services/ExploreOurServices";
import OurProcess from "@/components/services/OurProcess";
import ServicesHero from "@/components/services/ServicesHero";

const services = () => {
  return (
    <>
      <ServicesHero />
      <ExploreOurServices />
      <OurProcess />
      <ContactServices />
    </>
  );
};

export default services;
