import Button from "./Button";

const Hero = () => {
  
  return (
    <section className="flex lg:flex-row flex-col-reverse items-center mt-24">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="lg:w-1/2 w-full flex flex-col items-center"
      >
        <img src="/images/header.png" alt="lcgn" className="sm:w-5/6 lg:mb-2 mb-5 lg:block hidden"/>
        <h1 className="mb-5 sm:text-[2.5rem] text-[1.5rem] md:text-start text-center">
          Tantang Dirimu, Jadi Game Developer Muda!
        </h1>
        <h5 className="sm:mb-10 mb-5 text-gray-700 md:text-start text-center" >
          Tunjukkan kreativitasmu dan ciptakan game terbaikmu! Di ajang lomba cipta
          game nasional dan jadi bagian generasi developer muda.
        </h5>
        <div className="sm:flex-row flex-col flex items-center sm:gap-9 gap-5 lg:self-start self-center">
          <Button text="Daftar Sekarang" page="#informasi" />
          <h4 className="px-4 my-1 sm:text-xl text-base">
            <a href="https://clev.io/chat" className="underline hover:text-blue-700">
              Tertarik Sponsor?
            </a>
          </h4>
        </div>
        <img src="/images/heroimg.png" alt="hero" className="lg:hidden block"/>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        className="lg:w-1/2 w-full flex items-center justify-center flex-col"
      >
        <img src="/images/header.png" alt="lcgn" className="w-full lg:mb-2 mb-5 lg:hidden block"/>
        <img src="/images/heroimg.png" alt="hero" className="lg:block hidden"/>
      </div>
    </section>
  );
};
export default Hero;
