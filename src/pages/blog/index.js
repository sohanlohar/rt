// pages/blog/index.js
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/utils/blogs";
import blogBg from "../../assets/images/our-blog-hero.jpg";
import arrowRightYellow from "../../assets/icons/arrow-right-yellow.png";
import Slider from "react-slick";
import OurBlogSection from "@/components/home/OurBlogSection";

const BlogList = () => {
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
    <>
      <section className="container mb-24">
        <div className="relative mb-16">
          <div
            className="p-12 w-full h-[calc(100vh-90px)] md:h-[calc(100vh-125px)] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
            style={{ backgroundImage: `url(${blogBg.src})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70 rounded-40"></div>

            <div className="flex flex-col items-center justify-center gap-10 relative z-10">
              <h1
                className="text-4xl md:text-6xl text-white text-center font-archivo font-semibold"
                style={{ letterSpacing: "-2px" }}
              >
                Blogs and Resources
              </h1>
              <p className="text-base md:text-2xl text-white font-normal text-center">
                The latest industry news, interviews, technologies, and
                resources.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-14">
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div className="slide-wrapper" key={blog.title}>
                <div className="group relative w-full mx-3 p-4 md:p-8 rounded-3xl text-white flex justify-between flex-col h-48 md:h-96 overflow-hidden">
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
          </div>
        </div>
      </section>
      <OurBlogSection sectionTite="Must read/Trending" />
    </>
  );
};

export default BlogList;
