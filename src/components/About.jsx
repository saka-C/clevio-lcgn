const About = () => {
  return (
    <section className="mt-28">
      <img src="/images/shape.png" alt="" />
      <div className="flex xl:flex-row flex-col gap-20 -mt-40">
        <div className="flex flex-col xl:w-1/2">
          <div className="flex xl:items-end xl:justify-end justify-center items-center">
            <img
              src="/images/aboutimg.png"
              alt="about"
              className="rounded-xl xl:w-11/12"
            />
          </div>
          <div className="flex xl:justify-end justify-center mt-11">
            <div className="flex flex-col items-center sm:px-10 px-5">
              <h2 className="sm:text-4xl text-2xl">100+</h2>
              <h5 className="text-center">Peserta</h5>
            </div>
            <div className="flex flex-col items-center sm:px-10 px-5 border-l-4 border-r-4 border-gray-200">
              <h2 className="sm:text-4xl text-2xl">50+</h2>
              <h5 className="text-center">Karya Digital</h5>
            </div>
            <div className="flex flex-col items-center sm:px-10 px-5">
              <h2 className="sm:text-4xl text-2xl">20+</h2>
              <h5 className="text-center">Sekolah</h5>
            </div>
          </div>
        </div>

        <div className=" xl:w-1/2">
          <h1>Apa Itu Lomba Cipta Game Nasional Clevio?</h1>
          <div className="inline-block bg-gradient-to-r rounded-full from-secondary-500 to-secondary-300 w-1/2 h-2"></div>
          <h5 className="mt-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Integer magnis sed dictum
            gravida. Tincidunt vitae arcu curabitur mi scelerisque porttitor
            fringilla nisi. Ipsum ullamcorper hac tortor dui fames eu venenatis
            eget nullam. Sit gravida at faucibus lectus nunc arcu venenatis eget
            libero. Sagittis molestie cras risus at a. Tellus commodo nulla arcu
            scelerisque fermentum mattis nullam eget integer. Mi ipsum enim sed
            pharetra lobortis lacus. Duis felis consectetur amet adipiscing
            vitae iaculis. Nibh hendrerit sit diam dui venenatis scelerisque non
            et erat. Nulla elementum porta quam sed consectetur duis quis sit.
            Eu rhoncus cursus hac quam. Fames quis faucibus nec tortor. Sem
            tortor massa sit nisl dolor libero viverra. Donec quis at imperdiet
            eget mi commodo fringilla in morbi. Integer amet.
          </h5>
        </div>
      </div>
    </section>
  );
};
export default About;
