import { blogs, blogsData } from "@/utils/blogs";
import Image from "next/image";
import Slider from "react-slick";
import arrowRightYellow from "../../assets/icons/arrow-right-yellow.png";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const OurBlogSection = ({ sectionTitle }) => {
  const settings = {
    cssEase: "linear",
    centerMode: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 800,
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

  return (
    <section className="relative mb-16 md:mb-28">
      <div className="flex flex-col justify-center gap-3 items-center mb-5 md:mb-14  m-auto text-center">
        <h2 className="heading-h2 text-primary">{sectionTitle}</h2>
      </div>

      <div className={`transition-all duration-500 m-auto`}>
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div className="slide-wrapper" key={blog.title}>
              <div className="group relative w-80 md:w-[500px] mx-3 p-4 md:p-8 rounded-3xl text-white flex justify-between flex-col h-48 md:h-96 overflow-hidden">
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 43.4%, rgba(255, 255, 255, 0.9) 100%), url('${blog.featureImage.src}')`,
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
                    <Link href={`/blog/${blog.slug}`}>
                      <Image
                        src={arrowRightYellow}
                        alt={blog.title}
                        width={20}
                        height={20}
                        className="transition-transform group-hover:brightness-0 group-hover:contrast-100 group-hover:invert duration-500 rotate-[0deg] group-hover:rotate-[-45deg] "
                      />
                    </Link>
                  </div>

                  <div className="flex flex-col justify-between">
                    <Link href={`/blog/${blog.slug}`}>
                      {" "}
                      <h4 className="text-base md:text-4xl text-black-dark font-karla font-extrabold mb-1 md:mb-3 line-clamp-2">
                        {blog.title}
                      </h4>
                    </Link>
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-[7px] md:text-base text-black-dark font-karla font-normal">
                        {blog.publishedDate}
                      </p>
                      <div className="flex gap-3">
                        {blog.tags.map((item, index) => {
                          return (
                            <p
                              key={item.item}
                              className="bg-[#225A77] px-2 md:px-4 leading-none py-1 md:py-2 text-white-light rounded-[13px] text-[7px] md:text-sm"
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="slide-wrapper">
            <div className="flex justify-center items-center h-48 md:h-96 m-3 text-center">
              <Link
                href="/blog"
                target="_self"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 items-center px-6 py-3 text-3xl uppercase text-black rounded-lg font-semibold hover:bg-opacity-80 transition"
              >
                <div className="bg-secondary p-4 w-14 md:w-24 h-14 md:h-24 flex justify-center items-center rounded-full transition-colors duration-300 hover:bg-primary">
                  <Image
                    src={arrowRightYellow}
                    alt="arrow-title"
                    width={20}
                    height={20}
                    className="filter invert brightness-0"
                  />
                </div>
                View All
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurBlogSection;
