import React from "react";
import Amazon_Web from "../../assets/icons/Amazon_Web.png";
import HTML5_logo from "../../assets/icons/HTML5_logo.png";
import python from "../../assets/icons/python.png";
import Google from "../../assets/icons/Google.png";
import postgresql from "../../assets/icons/postgresql.png";
import NodeJS from "../../assets/icons/Nodejs.png";
import reactLogo from "../../assets/icons/react-logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const slidesData = [
  {
    logoUri: Amazon_Web,
    title: "Amazon Web",
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

const TechSlider = () => {
  const settings = {
    cssEase: "linear",
    centerMode: true,
    rtl: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="py-8 md:py-20">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div className="flex justify-center text-center">
                <Image src={slide.logoUri} alt={slide.title} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TechSlider;
