import React, { useEffect, useState } from "react";

const Sponsorship = () => {
  const [isVisible, setIsVisible] = useState(false);

  const partners = [
    {
      name: "Trans Studio Mall",
      logo: "/images/tsm.png",
    },
    {
      name: "Axioo",
      logo: "/images/axio.png",
    },
    {
      name: "Kominfo",
      logo: "/images/kominfo.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("partner-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="partner-section" className="py-20 mt-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h1
          className={`text-center  mb-16 
            transition-all duration-700 transform
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          Partner & Sponsorship
        </h1>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-5 md:gap-y-10 items-center justify-items-center px-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`w-full flex items-center justify-center
                transition-all duration-700 transform delay-${index * 200}
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Logo Container */}
              <div
                className="relative w-full h-32rounded-xl"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300
                            hover:-translate-y-1"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
