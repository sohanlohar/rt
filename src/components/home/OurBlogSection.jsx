import Image from "next/image";
import Slider from "react-slick";
import blog1Image from "../../assets/images/blog1-image.jpg";
import blog2Image from "../../assets/images/blog2-image.jpg";
import blog3Image from "../../assets/images/blog3-image.jpg";
import arrowRightYellow from "../../assets/icons/arrow-right-yellow.png";

const slidesData = [
  {
    slideBg: blog1Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog2Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog3Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog1Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog2Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog3Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog1Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog2Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog3Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog1Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog2Image,
    title: "Amazon Web",
  },
  {
    slideBg: blog3Image,
    title: "Amazon Web",
  },
];

const OurBlogSection = () => {
  const settings = {
    cssEase: "linear",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    variableWidth: true,
  };
  return (
    <section className="mb-16 md:mb-28">
      <div className="flex flex-col justify-center gap-3 items-center mb-5 md:mb-14 max-w-screen-lg m-auto text-center">
        <h2 className="heading-h2 text-primary">Our Blogs</h2>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div className="group relative w-80 md:w-[500px] m-3 p-4 md:p-8 rounded-3xl text-white flex justify-between flex-col h-48 md:h-96 overflow-hidden">
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 43.4%, rgba(255, 255, 255, 0.9) 100%), url('${slide.slideBg.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(246, 147, 49, 0.1) 43.4%, rgba(246, 147, 49, 0.6) 100%)",
                  }}
                ></div>

                <div className="relative z-10 flex justify-between flex-col h-full">
                  <div className="self-end bg-white group-hover:bg-secondary p-4 w-10 md:w-20 h-10 md:h-20 flex justify-center items-center rounded-full">
                    <Image
                      src={arrowRightYellow}
                      alt={slide.title}
                      width={20}
                      height={20}
                      className="transition-transform group-hover:brightness-0 group-hover:contrast-100 group-hover:invert duration-500 rotate-[0deg] group-hover:rotate-[-45deg] "
                    />
                  </div>
                  <div className="flex flex-row justify-between items-end">
                    <div>
                      <h4 className="text-base md:text-4xl text-black-dark font-karla font-extrabold mb-1 md:mb-3">
                        Title of Blog
                      </h4>
                      <p className="text-[7px] md:text-base text-black-dark font-karla font-normal">
                        10 JULY 2024
                      </p>
                    </div>
                    <p className="bg-[#225A77] px-2 md:px-4 leading-none py-1 md:py-2 text-white-light rounded-[13px] text-[7px] md:text-sm">
                      Machine learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default OurBlogSection;
