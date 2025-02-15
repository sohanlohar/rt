import portfolioHeroBg from "../../assets/images/portfolio-hero.png";

const PortfolioHero = () => {
  return (
    <section className="container mb-20">
      <div className="relative">
        <div
          className="p-44 w-full h-96 md:h-[650px] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
          style={{ backgroundImage: `url(${portfolioHeroBg.src})` }}
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
    </section>
  );
};

export default PortfolioHero;
