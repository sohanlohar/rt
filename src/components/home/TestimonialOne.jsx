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
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Jane Cooper",
    reviewwerDesignation: "Marketing Coordinator",
    reviewDescription:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk)",
  },
];

const TestimonialOne = () => {
  const settings = {
    cssEase: "linear",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50,
    speed: 5000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2 = {
    cssEase: "linear",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50,
    speed: 8000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    variableWidth: true,
    rtl: true, 
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-[100vw] !overflow-hidden mb-28">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div className="flex gap-3 md:gap-5 flex-col w-80 md:w-[550px] justify-center bg-white px-4 md:px-8 py-5 md:py-10 m-3 border border-[#00000033] rounded-3xl">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full">
                    <Image
                      src={slide.imagePath}
                      alt="arrow right"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-lg text-gray-dark font-extrabold leading-tight">
                      {slide.reviewwerName}
                    </p>
                    <p className="text-xs md:text-lg text-[#F69331] font-medium leading-tight">
                      {slide.reviewwerDesignation}
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-base text-gray-dark font-medium">
                  {slide.reviewDescription}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <Slider {...settings2}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div className="flex gap-3 md:gap-5 flex-col w-80 md:w-[550px] justify-center bg-white  px-4 md:px-8 py-5 md:py-10 m-3 border border-[#00000033] rounded-3xl">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full">
                    <Image
                      src={slide.imagePath}
                      alt="arrow right"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-lg text-[#0C0819] font-extrabold leading-tight">
                      {slide.reviewwerName}
                    </p>
                    <p className="text-xs md:text-lg text-[#F69331] font-medium leading-tight">
                      {slide.reviewwerDesignation}
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-base text-[#0C0819] font-medium">
                  {slide.reviewDescription}
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
