import React, { useState, useEffect, useRef } from "react";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      image: "testi1.png",
      text: "Pengalaman baru, tambahan keterampilan tentang membuat games dengan bantuan AI",
      name: "Yuli Dianah",
      role: "Ketua Konsentrasi Keahlian RPL - SMKN 1 Cibinong",
    },
    {
      image: "testi2.png",
      text: "Karna ini menjadi pengalaman pertama untuk kelas X di sekolah kami, menjadikan siswa kami merasa senang tentang bahasa pemerograman  HTML, CSS dan Javascript",
      name: "Doni Putra Setiawan",
      role: "Guru SMKN 1 Gunung Putri",
    },
    {
      image: "testi3.png",
      text: "Sering - sering mengadakan workshop dan perlombaan seperti ini, karena siswa juga pasti senang selain menikmati game, siswa juga bisa mencoba untuk membuatnya.",
      name: "Ang Kian Chye",
      role: "Guru SMA Kristen Immanuel Pontianak",
    },
    {
      image: "testi4.png",
      text: "Lomba yang sangat seru, bisa liat game game keren yang udah dibuat sama sekolah sekolah lain.",
      name: "Shaka Aufa",
      role: "Juara 1 & Umum LCGN 2023",
    },
  ];

  // Track scroll position and update active slide
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.clientWidth / 3;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && sliderRef.current) {
        const maxScroll =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const newScrollLeft = sliderRef.current.scrollLeft + 1;

        if (newScrollLeft >= maxScroll) {
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollLeft = newScrollLeft;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isDragging]);

  // Add scroll event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-32" id="testimoni">
      <div className="sm:mx-0 mx-5">
        <h4 className="text-secondary-500">Testimonial</h4>
        <h1 className="sm:w-9/12">
          Apa Kata Mereka Tentang Lomba Cipta Game Nasional?
        </h1>
      </div>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-8 px-2 hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] "
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg h-full flex flex-col justify-between">
              <div>
                {/* Quote Icon */}
                <div className="text-5xl text-gray-300 mb-6">
                  <i class="bx bxs-quote-left"></i>
                </div>

                {/* Testimonial Text */}
                <h5 className="text-gray-600 mb-8 leading-relaxed">
                  {testimonial.text}
                </h5>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0">
                  {/* Container bulat dengan background */}
                  <div className="absolute inset-0 bg-gray-200 rounded-full" />
                  {/* Wrapper untuk gambar dengan mask */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={`images/${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <h5 className="text-sm text-gray-500">{testimonial.role}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? "bg-gray-800 w-4" : "bg-gray-300"
            }`}
            onClick={() => {
              if (sliderRef.current) {
                const slideWidth = sliderRef.current.clientWidth / 3;
                sliderRef.current.scrollLeft = slideWidth * index;
                setActiveSlide(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
