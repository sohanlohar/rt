import servicesBg from "../../assets/images/services-bg.png";

const ServicesHero = () => {
  return (
    <section className="container mb-24">
      <div className="relative mb-16">
        <div
          className="p-44 w-full h-96 md:h-[650px] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
          style={{ backgroundImage: `url(${servicesBg.src})` }}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <h1
              className="text-4xl md:text-6xl text-white-light z-10 font-archivo font-semibold"
              style={{ letterSpacing: "-2px" }}
            >
              Ready to Transform Your Business?
            </h1>
            <p className="text-2xl text-white-light font-normal text-center">
              Explore our services designed to drive your success with reliable,
              innovative tech solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      <p className="text-xl font-karla text-justify leading-10 text-black-dark mb-6">
        We’re committed to providing tailored solutions designed to empower
        businesses in today’s competitive digital landscape. Our expertise spans
        a diverse range of services that allow us to support every stage of your
        digital journey, from data engineering to custom software solutions. We
        focus on delivering innovative, scalable, and user-focused services that
        transform ideas into reality and ensure seamless operation and growth
        for your business.
      </p>
      <p className="text-xl font-karla text-justify leading-10 text-black">
        We combines technical expertise with industry knowledge to deliver
        services that help our clients stay ahead. Let us work with you to build
        the future of your business with technology that drives real results.
      </p>
    </section>
  );
};

export default ServicesHero;
