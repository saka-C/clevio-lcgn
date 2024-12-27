import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse items-center mt-24">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="lg:w-1/2 w-full"
      >
        <h1 className="mb-5 sm:text-[2.5rem] text-[1.5rem]">
          Tantang Dirimu, Jadi Game Developer Muda! Di{" "}
          <span className="text-white bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400">
            Lomba Cipta Game Nasional.
          </span>
        </h1>
        <h5 className="sm:mb-16 mb-10 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Dictum nullam porttitor enim
          eleifend nunc. Lectus quis rhoncus bibendum massa.
        </h5>
        <div className="sm:flex items-center gap-9">
          <Button text="Daftar Sekarang" page="#" />
          <h4 className="px-4 my-5 sm:text-xl text-base">
            <a href="#" className="underline">
              Tertarik Sponsor?
            </a>
          </h4>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="100"
        className="lg:w-1/2 w-full flex items-center justify-center"
      >
        <img src="/images/heroimg.png" alt="" />
      </div>
    </section>
  );
};
export default Hero;
