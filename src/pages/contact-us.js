import FrequentlyAskedQuestions from "@/components/contact-us/FrequentlyAskedQuestions";
import HearFromYouSection from "@/components/contact-us/HearFromYouSection";
import HeroContact from "@/components/contact-us/HeroContact";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <HeroContact />
      <HearFromYouSection />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default ContactUs;
