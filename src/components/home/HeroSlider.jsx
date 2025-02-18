import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide1Bg from "../../assets/images/slide1-bg.png";
import slide2Bg from "../../assets/images/slide2-bg.jpg";

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="mb-10 sm:mb-20 container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper relative" key={slide.title}>
              <div
                className="banner-slider h-[calc(100vh-130px)] bg-cover bg-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 !pb-6 sm:!pb-10 rounded-40 text-white flex justify-between flex-col"
                style={{
                  background: `linear-gradient(52.91deg, rgba(0, 38, 58, 0.9) 1.12%, rgba(2, 113, 126, 0.9) 79.96%), url('${slide.background.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="border text-[10px] sm:text-xs md:text-xl opacity-80 leading-5 sm:leading-6 border-white text-white font-karla font-thin px-4 sm:px-6 py-1 rounded-full w-fit text-center">
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
                  <div className="flex justify-between flex-col-reverse md:flex-row gap-10 sm:gap-20 md:gap-40 md:items-end mb-4 sm:mb-6">
                    <div className="flex gap-2 justify-between sm:gap-8">
                      {slide.stats.map((stat, index) => {
                        return (
                          <p
                            className="text-2xl md:text-4xl leading-none font-bold text-white font-archivo flex flex-col"
                            key={stat.value}
                          >
                            {stat.value}
                            <span className="text-[8px] sm:text-sm font-karla font-normal">
                              {stat.label}
                            </span>
                          </p>
                        );
                      })}
                    </div>
                    <p className="text-xs sm:text-base font-karla">
                      {slide.description}
                    </p>
                  </div>
                  <Link href="#target-section" passHref>
                    <div className="hidden md:block text-center border border-white max-w-32 cursor-pointer text-xs uppercase rounded-full m-auto p-2">
                      scroll
                    </div>
                  </Link>
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
    </section>
  );
};

export default HeroSlider;
