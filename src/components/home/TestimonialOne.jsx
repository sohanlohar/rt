import React from "react";
import Amazon_Web from "../../assets/icons/Amazon_Web.png";
import HTML5_logo from "../../assets/icons/HTML5_logo.png";
import python from "../../assets/icons/python.png";
import Google from "../../assets/icons/Google.png";
import postgresql from "../../assets/icons/postgresql.png";
import profileImage from "../../assets/images/profile-image.jpg";
import NodeJS from "../../assets/icons/Nodejs.png";
import reactLogo from "../../assets/icons/react-logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const slidesData = [
  {
    logoUri: profileImage,
    title: "Profile Image",
  },
  {
    logoUri: HTML5_logo,
    title: "HTML5 logo",
  },
  {
    logoUri: python,
    title: "python",
  },
  {
    logoUri: Google,
    title: "Google",
  },
  {
    logoUri: postgresql,
    title: "Postgre sql",
  },
  {
    logoUri: NodeJS,
    title: "Node JS",
  },
  {
    logoUri: reactLogo,
    title: "React Logo",
  },
];

const TestimonialOne = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <div className="py-10">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div className="flex gap-5 flex-col justify-center bg-gray px-5 py-10 m-3 border border-[#00000033] rounded-3xl">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full">
                    <Image
                      src={slide.logoUri}
                      alt="arrow right"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-[#0C0819] font-poppins font-extrabold leading-tight">
                      Ultrasound MD
                    </p>
                    <p className="text-lg text-[#F69331] font-poppins font-medium leading-tight">
                      Marketing Coordinator
                    </p>
                  </div>
                </div>
                <p className="text-base text-[#0C0819] font-poppins font-normal">
                  Ask CDCR San Quintin State Prison 2008. We installed Purex
                  dispensers throughout the prison to combat diseases…and it was
                  a Roaring Success (as in Roaring Drunk)
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div className="flex gap-5 flex-col justify-center bg-gray px-5 py-10 m-3 border border-[#00000033] rounded-3xl">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full">
                    <Image
                      src={slide.logoUri}
                      alt="arrow right"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-[#0C0819] font-poppins font-extrabold leading-tight">
                      Ultrasound MD
                    </p>
                    <p className="text-lg text-[#F69331] font-poppins font-medium leading-tight">
                      Marketing Coordinator
                    </p>
                  </div>
                </div>
                <p className="text-base text-[#0C0819] font-poppins font-normal">
                  Ask CDCR San Quintin State Prison 2008. We installed Purex
                  dispensers throughout the prison to combat diseases…and it was
                  a Roaring Success (as in Roaring Drunk)
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TestimonialOne;
