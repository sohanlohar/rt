import slide1Bg from "../../assets/images/slide1-bg.png";
import slide2Bg from "../../assets/images/slide2-bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const slidesData = [
  {
    background: slide1Bg,
    title: "Building Websites that Inspire & Perform",
    description:
      "Elevate your digital presence with a website that’s tailored to your brand and designed to connect, captivate, and convert users.",
    stats: [
      { value: "250+", label: "Lorem Ipsum" },
      { value: "300+", label: "Lorem Ipsum" },
      { value: "150+", label: "Lorem Ipsum" },
      { value: "400+", label: "Lorem Ipsum" },
    ],
    specialWords: ["Websites"],
  },
  {
    background: slide2Bg,
    title: "Elevating Your Vision with Intuitive Mobile Apps",
    description:
      "From user-centered design to powerful functionality, we build mobile apps that engage users and drive your brand’s success.",
    stats: [
      { value: "120+", label: "Projects Delivered" },
      { value: "50+", label: "Happy Clients" },
      { value: "200+", label: "Successful Campaigns" },
      { value: "30+", label: "Industries Covered" },
    ],
    specialWords: ["Mobile", "Apps"],
  },
  {
    background: slide2Bg,
    title: "Coding Seamless Custom Solutions for Your Business",
    description:
      "We deliver solutions that streamline operations, & drive measurable results, ensuring you stay ahead in a competitive landscape.",
    stats: [
      { value: "500+", label: "Hours of Innovation" },
      { value: "300+", label: "Technologies Used" },
      { value: "50+", label: "Industry Awards" },
      { value: "10+", label: "Years of Experience" },
    ],
    specialWords: ["Seamless", "Solutions"],
  },
];

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="mx-7">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper relative" key={index}>
              <div
                className="banner-slider bg-cover bg-center p-10 sm:p-10 md:p-16 lg:p-20 xl:p-28 !pb-10 rounded-40 text-white flex justify-between flex-col min-h-[800px]"
                style={{
                  background: `linear-gradient(52.91deg, rgba(0, 38, 58, 0.9) 1.12%, rgba(2, 113, 126, 0.9) 79.96%), url('${slide.background.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="border text-2xl opacity-80 leading-6 border-white text-white font-karla font-thin px-6 py-2 rounded-full w-fit text-center">
                  Explore . Execute . Elevate
                </div>
                <h1 className="text-8xl font-archivo max-w-6xl">
                  {slide.title.split(" ").map((word, i) => {
                    const isSpecial = slide.specialWords.includes(word);
                    return (
                      <span
                        key={i}
                        className={isSpecial ? "text-gradient" : ""}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </h1>
                <div>
                  <div className="flex justify-between gap-40 items-end mb-10">
                    <div className="flex gap-8">
                      {slide.stats.map((stat, index) => {
                        return (
                          <p
                            className="text-5xl font-normal text-white font-archivo flex flex-col"
                            key={stat.value}
                          >
                            {stat.value}
                            <span className="text-sm font-karla font-normal">{stat.label}</span>
                          </p>
                        );
                      })}
                    </div>
                    <p className="text-xl font-karla">{slide.description}</p>
                  </div>
                  <div className="text-center border max-w-32 cursor-pointer text-sm uppercase rounded-full m-auto p-2">
                    scroll
                  </div>
                </div>
              </div>
              {/* <Image
                src={slide1Bg}
                alt=""
                className="absolute w-full h-full top-0 left-0 rounded-40"
              /> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
