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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <section className="my-16">
      <div className="flex flex-col justify-center gap-3 items-center mb-14 max-w-screen-lg m-auto text-center">
        <h2 className="text-7xl text-primary font-archivo font-normal">
          Our Blogs
        </h2>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          return (
            <div className="slide-wrapper" key={index}>
              <div
                className="bg-primary m-3 bg-cover bg-center p-8 rounded-3xl text-white flex justify-between flex-col h-96"
                style={{
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 43.4%, rgba(255, 255, 255, 0.9) 100%), url('${slide.slideBg.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="self-end bg-white p-4 rounded-full">
                  <Image
                    src={arrowRightYellow}
                    alt={slide.title}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-row justify-between items-end">
                  <div>
                    <h4 className="text-2xl text-black font-karla font-extrabold">
                      Title of Blog
                    </h4>
                    <p className="text-base text-black font-karla font-normal">
                      10 JULY 2024
                    </p>
                  </div>
                  <div>
                    <p className="bg-primary px-2 py-1 rounded-lg text-sm">
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
