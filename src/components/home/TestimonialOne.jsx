import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import profileImage from "../../assets/images/profile-image.jpg";

const slidesData = [
  {
    imagePath: profileImage,
    reviewwerName: "John Smith",
    reviewwerDesignation: "CEO",
    reviewDescription:
      "Ranav Technologies exceeded our expectations! Their team delivered a seamless and user-friendly mobile application that perfectly met our business needs. Highly recommended!",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Emma Johnson",
    reviewwerDesignation: "Marketing Head",
    reviewDescription:
      "Working with Ranav Technologies has been a game-changer for our business. Their expertise in web development helped us launch a high-performing website that attracts more customers.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "David Brown",
    reviewwerDesignation: "Founder",
    reviewDescription:
      "The Ranav Technologies team developed an intuitive and scalable mobile app for us. Their attention to detail and technical expertise truly stand out.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Sophia Martinez",
    reviewwerDesignation: "Product Manager",
    reviewDescription:
      "Their QA testing services ensured our software was bug-free and delivered on time. We appreciate their professionalism and commitment to quality.",
  },
];
const testimoialTwo = [
  {
    imagePath: profileImage,
    reviewwerName: "Michael Lee",
    reviewwerDesignation: "CEO",
    reviewDescription:
      "The team at Ranav Technologies is always responsive and ready to assist. Their support made our project smooth and stress-free.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Olivia Davis",
    reviewwerDesignation: "Project Lead",
    reviewDescription:
      "We were impressed with Ranav Technologies' ability to deliver our project ahead of schedule without compromising on quality. Their efficiency is commendable.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Daniel Wilson",
    reviewwerDesignation: "CTO",
    reviewDescription:
      "Ranav Technologies provided innovative solutions that enhanced our digital presence. Their expertise in Flutter and React Native helped us build a robust mobile application.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Liam Anderson",
    reviewwerDesignation: "Product Manager",
    reviewDescription:
      "Professional, skilled, and dedicated—Ranav Technologies truly stands out in the IT industry. Their commitment to excellence made our collaboration a success!",
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
    adaptiveHeight: true,
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
    adaptiveHeight: true,
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
        {testimoialTwo.map((slide, index) => {
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
