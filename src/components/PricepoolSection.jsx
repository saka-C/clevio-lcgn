import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PricepoolSection = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const targetValue = 1000000;
  const increment = Math.ceil(targetValue / 100);

  useEffect(() => {
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.floor(Math.random() * increment + increment / 2);
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(interval);
        }
        setDisplayValue(current);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section
      className="prizepool flex flex-col items-center gap-2 lg:px-24 md:px-10 sm:px-10 px-5 py-20 bg-secondary-500 overflow-x-hidden"
      ref={ref}
    >
        <img src="/images/header.png" alt="lcgn" className="md:w-1/2 w-11/12" />
      <h2 className="mb-4 sm:text-[2.25rem] text-2xl text-white text-center">
        Ayo Berkompetisi dan Menangkan Total Prizepool
      </h2>
      <div className="md:text-6xl sm:text-5xl text-3xl font-extrabold text-primary-500 mb-4 bg-white border-4 border-primary-500 py-5 sm:px-20 px-10 text-center rounded-full">
        <span className="drop-shadow-lg ">
          Rp. {displayValue.toLocaleString("id-ID")}
        </span>
      </div>
      <h4 className="italic mt-2 text-white">Untuk Grand Champion!</h4>
    </section>
  );
};

export default PricepoolSection;
