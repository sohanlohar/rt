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
              Explore Our Projects
            </h1>
            <p className="text-2xl text-white-light font-normal text-center">
              We bring innovative technology to life, helping businesses achieve
              their goals through custom solutions. From software development to
              data engineering, our portfolio showcases the expertise and
              creativity we bring to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
