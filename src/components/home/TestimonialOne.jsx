import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import profileImage from "../../assets/images/profile-image.jpg";

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
    adaptiveHeight:true,
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
    adaptiveHeight:true,
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
    <section className="mb-10 sm:mb-28">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper h-auto" key={slide.reviewwerName}>
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
            <div className="slide-wrapper h-auto" key={slide.reviewwerName}>
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
    </section>
  );
};

export default TestimonialOne;
