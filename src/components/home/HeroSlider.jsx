import Link from "next/link";
import Image from "next/image"; // Added import
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide1Bg from "../../assets/images/slide1-bg.png";
import slide2Bg from "../../assets/images/slide2-bg.jpg";
import slide3Bg from "../../assets/images/slide3-bg.gif";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const slidesData = [
  {
    background: slide3Bg,
    // bgGradient: "linear-gradient(135deg, #013b41, #05111d)",
    bgGradient:
      "linear-gradient(135deg, rgba(0, 38, 58, 0.7) 10.12%, rgba(0, 38, 58, 0.5) 79.96%)",
    title: "Coding Seamless Custom Solutions for Your Business",
    description:
      "We deliver solutions that streamline operations, & drive measurable results, ensuring you stay ahead in a competitive landscape.",
    stats: [
      { value: "500+", label: "Hours of Innovation" },
      { value: "30+", label: "Technologies Used" },
      { value: "50+", label: "Industry Awards" },
      { value: "10+", label: "Years of Experience" },
    ],
    specialWords: ["Seamless", "Solutions"],
    blendMode: true,
    hasBlur: false, // GIF does not support blur placeholder
  },
  {
    background: slide2Bg,
    bgGradient:
      "linear-gradient(52.91deg, rgba(0, 38, 58, 1) 1.12%, rgba(2, 113, 126, 0.9) 79.96%)",
    title: "Elevating Your Vision with Intuitive Mobile Apps",
    description:
      "From user-centered design to powerful functionality, we build mobile apps that engage users and drive your brand’s success.",
    stats: [
      { value: "120+", label: "Projects Delivered" },
      { value: "300+", label: "Happy Clients" },
      { value: "200+", label: "Successful Campaigns" },
      { value: "30+", label: "Industries Covered" },
    ],
    specialWords: ["Mobile", "Apps"],
    blendMode: false,
    hasBlur: true,
  },
  {
    background: slide1Bg,
    bgGradient:
      "linear-gradient(52.91deg, rgba(0, 38, 58, 0.85) 1.12%, rgba(2, 113, 126, 0.9) 79.96%)",
    title: "Building Websites that Inspire & Perform",
    description:
      "Elevate your digital presence with a website that’s tailored to your brand and designed to connect, captivate, and convert users.",
    stats: [
      { value: "700+", label: "Hours of Innovation" },
      { value: "200+", label: "Websites Delivered" },
      { value: "150+", label: "Happy Clients" },
      { value: "10+", label: "Years of Experience" },
    ],
    specialWords: ["Websites"],
    blendMode: false,
    hasBlur: true,
  },
];

const HeroSlider = () => {
  const settings = {
    cssEase: "linear",
    centerMode: false,
    autoplay: false,
    speed: 800,
    arrows: false,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mb-10 sm:mb-20 container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper relative h-[calc(80vh-130px)] md:h-[calc(100vh-130px)]" key={slide.title}>
              {/* Optimized Background Image */}
              <Image
                src={slide.background}
                alt={slide.title} // better accessible alt text
                fill
                priority={index === 0} // Prioritize LCP for the first slide
                placeholder={slide.hasBlur ? "blur" : "empty"} // Nice placeholder (works with static imports)
                className="object-cover -z-10 rounded-40"
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 z-0 rounded-40"
                style={{
                  background: slide.bgGradient,
                  mixBlendMode: slide.blendMode ? "overlay" : "normal",
                }}
              />

              <div className="banner-slider h-full p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 !pb-6 sm:!pb-10 rounded-40 text-white flex justify-between flex-col relative z-10">
                <div className="border text-[10px] sm:text-sm md:text-xl opacity-80 leading-5 sm:leading-6 border-white text-white font-karla font-thin px-4 sm:px-6 py-1 rounded-full w-fit text-center">
                  Explore . Execute . Elevate
                </div>
                <h1 className="heading-h1 max-w-5xl">
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
                  {/* Container for Description and Stats - Mobile: Col (Desc then Stats), Desktop: Row (Stats then Desc) */}
                  <div className="flex flex-col md:flex-row gap-10 sm:gap-20 md:gap-40 md:items-end mb-4 sm:mb-6 h-full justify-between">

                    {/* Description - Moves to top on mobile via order property or structural change */}
                    <p className="text-base sm:text-lg font-karla max-w-xl opacity-90 md:order-2">
                      {slide.description}
                    </p>

                    {/* Stats - Moves to bottom on mobile */}
                    <div className="grid grid-cols-4 gap-2 sm:gap-8 w-full md:w-auto md:order-1">
                      {slide.stats.map((stat, index) => {
                        return (
                          <div key={stat.value} className="flex flex-col items-start md:items-start">
                            <p
                              className="text-2xl md:text-4xl leading-none font-bold text-white font-archivo flex flex-col"
                            >
                              {stat.value}
                              <span className="text-[10px] sm:text-sm font-karla font-normal mt-1 opacity-80">
                                {stat.label}
                              </span>
                            </p>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                  <Link href="#target-section" passHref>
                    <div className="hidden md:block text-center border border-white max-w-32 cursor-pointer text-xs uppercase rounded-full m-auto p-2 hover:bg-white hover:text-black transition-colors duration-300">
                      scroll
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default HeroSlider;
