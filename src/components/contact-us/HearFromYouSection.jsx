import React from "react";
import arrowRounded from "../../assets/icons/arrow-rounded-yellow.png";
import arrowRoundedDown from "../../assets/icons/arrow-rounded-yellow-down.png";
import Image from "next/image";
import ContactForm from "../forms/ContactForm";
import Link from "next/link";

const HearFromYouSection = () => {
  return (
    <section className="container px-0 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col md:items-start justify-between py-10">
          <div className="text-center md:text-left relative">
            <h3 className="text-4xl md:text-6xl text-left font-archivo font-bold text-[#0D0D0D]">
              We’d Love to <br className="block md:hidden"/>Hear from You
            </h3>
            <div className="w-48 h-40 md:w-64 md:h-52 mx-auto hidden md:block">
              <Image src={arrowRounded} alt="arrow right" className="mx-auto" />
            </div>
            <div className="block md:hidden absolute top-14 right-8">
              <Image
                src={arrowRoundedDown}
                alt="arrow right"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-0 hidden md:block">
            <Link
              href="mailto:support@ranavtechnologies.com"
              className="text-sm md:text-xl font-bold font-karla block text-center md:text-left"
            >
              support@ranavtechnologies.com
            </Link>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 bg-white rounded-[40px] px-6 py-8 md:px-8 md:py-12">
          <ContactForm requestQuote={true} />
        </div>
        <div className="mt-6 md:mt-0 block md:hidden">
          <Link
            href="mailto:support@ranavtechnologies.com"
            className="text-lg md:text-xl font-bold font-karla block text-center md:text-left"
          >
            support@ranavtechnologies.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HearFromYouSection;
