import servicesSlide1 from "../../assets/images/services-slide1.jpg";
import servicesSlide2 from "../../assets/images/services-slide2.jpeg";
import servicesSlide3 from "../../assets/images/services-slide3.jpeg";
import servicesSlide4 from "../../assets/images/services-slide4.jpeg";
import servicesSlide5 from "../../assets/images/services-slide5.jpeg";
import servicesSlide6 from "../../assets/images/services-slide6.jpeg";

const slides = [
  {
    title: "Data Engineering",
    description:
      "Our data engineering services help you extract valuable insights, optimize operations, and make data-driven decisions.",
    image: servicesSlide1,
    bggredient:
      "linear-gradient(90deg, #014D57 0%, rgba(1, 110, 124, 0.6) 100%)",
    textDark: false,
  },
  {
    title: "Software Development",
    description:
      "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    image: servicesSlide2,
    bggredient:
      "linear-gradient(90deg, #F9F9F9 0%, rgba(210, 210, 210, 0.6) 100%)",
    textDark: true,
  },
  {
    title: "Mobile App & Website Development",
    description:
      "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    image: servicesSlide3,
    bggredient:
      "linear-gradient(90deg, #FEC286 0%, rgba(255, 255, 255, 0.6) 100%)",
    textDark: true,
  },
  {
    title: "API Development",
    description:
      "Integrate seamlessly and unlock new opportunities. Our API development services enable data sharing, system interoperability, and efficient business processes.",
    image: servicesSlide4,
    bggredient:
      "linear-gradient(90deg, #B5D0D3 0%, rgba(181, 208, 211, 0.6) 100%)",
    textDark: true,
  },
  {
    title: "UIUX Design",
    description:
      "We Create exceptional user experiences that boost customer satisfaction and loyalty. Our design expertise enhances brand perception and drives conversions.",
    image: servicesSlide5,
    bggredient:
      "linear-gradient(90deg, #FFE4CB 0%, rgba(255, 255, 255, 0.6) 100%)",
    textDark: true,
  },
  {
    title: "Software Testing",
    description:
      "We are focused on Mitigating risks and ensuring product quality. Our comprehensive testing services help you deliver reliable software that meets user expectations.",
    image: servicesSlide6,
    bggredient:
      "linear-gradient(90deg, #225A77 0%, rgba(34, 90, 119, 0.6) 100%)",
    textDark: false,
  },
];

const OurServicesSection = () => {
  return (
    <section className="container mb-10 sm:mb-28">
      <div className="flex flex-col justify-center gap-3 items-center mb-5 md:mb-14">
        <h2 className="heading-h2">Our Services</h2>
        <p className="text-sm md:text-xl text-black font-karla py-2 md:py-5 font-normal">
          We deliver results. Our services are designed to simplify your
          business, improve efficiency, and keep you ahead
        </p>
      </div>
      <div className="mt-6 flex flex-col-reverse md:flex-row justify-between gap-6">
        <div className="w-full md:w-1/3 flex flex-col justify-center md:bg-white md:px-10 md:py-12 md:border border-[#00000033] md:rounded-3xl">
          <h4 className="text-2xl md:text-[2rem] text-black font-archivo mb-5 font-semibold">
            We Deliver Results
          </h4>
          <p className="text-sm md:text-xl leading-4 md:leading-8 text-black font-light font-karla mb-5">
            At Ranav Technologies, we don&apos;t just offer services—
            {" "}<span className="text-primary font-semibold">we deliver outcomes</span>
            . Whether it&apos;s boosting efficiency, enhancing security, or
            improving customer experiences, our solutions are designed to create{" "}
            <span className="text-primary font-semibold">measurable impact</span>.
            We help you achieve more with technology that works as hard as you
            do.
          </p>
          <button className="btn-secondary w-fit">
            OUR PROCESS
          </button>
        </div>

        <div className="vertical-scroll-snap w-full md:w-2/3">
          {slides.map((slide, index) => {
            return (
              <div
                className="stacking-slide relative !bg-cover !bg-center px-8 md:px-14 py-10 md:py-20 rounded-xl md:rounded-40 text-white flex justify-between flex-col h-[260px] md:h-[515px]"
                style={{
                  background: `${slide.bggredient}, url('${slide.image.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={index}
              >
                <h2
                  className={`heading-h3 z-10  ${
                    slide.textDark ? "text-black" : "text-white"
                  }`}
                >
                  {slide.title}
                </h2>
                <p
                  className={`text-sm md:text-2xl z-10 ${
                    slide.textDark ? "text-black" : "text-white"
                  } font-light font-karla`}
                >
                  {slide.description}
                </p>
                <button
                  className={`w-fit z-10 border hover:border-primary-dark ${
                    slide.textDark
                      ? "text-black border-black"
                      : "text-white border-white"
                  }   rounded-full font-karla text-sm md:text-xl px-8 py-2 hover:bg-primary-dark hover:text-white`}
                >
                  EXPLORE MORE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
