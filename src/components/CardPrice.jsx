import React from "react";

const CardPrice = ({ title, linkto = "", items = [], children }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl border-[1px] border-black p-7 lg:max-w-xs md:max-w-72 max-w-xs">
        <div>
            <h4 className="font-semibold text-primary-500 mb-2">{title}</h4>
            <h2 className="mb-4">{children}</h2>
            <ul className="mb-4 space-y-2">
                {items.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                    <span className="text-secondary-500 font-bold">●</span>
                    <h5 className="text-gray-700">{item}</h5>
                </li>
                ))}
            </ul>
        </div>
      <a
        className="bg-primary-500 self-baseline text-white font-semibold rounded-lg py-3 w-full text-center block"
        href={linkto}
      >
        Daftar Sekarang
      </a>
    </div>
  );
};

export default CardPrice;
