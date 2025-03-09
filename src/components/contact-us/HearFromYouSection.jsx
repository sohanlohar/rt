import React from "react";
import arrowRounded from "../../assets/icons/arrow-rounded-yellow.png";
import Image from "next/image";
import ContactForm from "../forms/ContactForm";
import Link from "next/link";

const HearFromYouSection = () => {
  return (
    <section className="container">
      <div className="grid"></div>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col justify-between py-10 pl-4">
          <div>
            <h3 className="text-6xl font-archivo font-bold text-[#0D0D0D]">
              We’d Love to Hear from You
            </h3>
            <div className="w-64 h-52 mx-auto">
              <Image src={arrowRounded} alt="arrow right" className="mx-auto" />
            </div>
          </div>
          <div>
            <Link href="mailto:support@ranavtechnologies.com" className="text-xl font-bold font-karla">support@ranavtechnologies.com</Link>
          </div>
        </div>
        <div class="col-span-2 bg-white rounded-40 px-8 py-12">
          <ContactForm requestQuote={true} />
        </div>
      </div>
    </section>
  );
};

export default HearFromYouSection;
