import Row from "./Row";

const Kriteria = () => {
  return (
    <div className="bg-thirdnary-500 sm:rounded-2xl rounded-md flex flex-col mt-20 border-2 border-black">
      <div className="flex lg:justify-center sm:gap-5 justify-between pb-10 -mt-[2px] px-3">
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="sm:hidden block bg-primary-500 w-6 h-4 rounded-b-full border-2 border-black border-t-0"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped lg:block hidden"></div>
        <div className="ripped lg:block hidden"></div>
        <div className="ripped xl:block hidden"></div>
        <div className="ripped xl:block hidden"></div>
        <div className="ripped xl:block hidden"></div>
      </div>

    <h2 className="px-10">Kriteria Penilaian</h2>
      <div className="overflow-x-auto p-10">
      <table className="min-w-[640px] w-full table-auto border-collapse">
        <tbody>
          <Row
            name="Tema"
            desc="Lorem ipsum dolor sit amet consectetur. Lacus lacus sed commodo a platea elit elementum in. Amet laoreet odio nec sed maecenas aliquam vitae."
            percent="60%"
          />
          <Row
            name="Kreativitas"
            desc="Lorem ipsum dolor sit amet consectetur. Lacus lacus sed commodo a platea elit elementum in. Amet laoreet odio nec sed maecenas aliquam vitae."
            percent="30%"
            isStriped
          />
          <Row
            name="Orisinalitas"
            desc="Lorem ipsum dolor sit amet consectetur. Lacus lacus sed commodo a platea elit elementum in. Amet laoreet odio nec sed maecenas aliquam vitae."
            percent="10%"
          />
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default Kriteria;
