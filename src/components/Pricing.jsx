import CardPrice from "./CardPrice";

const Pricing = () => {
  return (
    <section className="mt-32">
      <h1 className="text-center mb-5">
        Informasi Pendaftaran Lomba Cipta Game Nasional
      </h1>
      <h5 className="text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur. Purus ac nulla at ipsum morbi.
        Eu quam amet id egestas phasellus. Faucibus ornare a laoreet massa
        mauris volutpat.{" "}
      </h5>

      <div className="flex flex-wrap justify-center gap-20 mt-14">
        <CardPrice
          title="Peserta Guru"
          linkto="#"
          items={[
            "1 tim, minimal 2 orang.",
            "Mengikuti Workshop & Hackaton.",
            "Berkomitmen mengikuti jalannya acara hingga selesai.",
          ]}
        >
          <div className="flex items-baseline space-x-1">
            Free
          </div>
        </CardPrice>

        <CardPrice
          title="Peserta Siswa SMA/SMK"
          linkto="#"
          items={[
            "1 tim, minimal 2 orang.",
            "Mengikuti Workshop & Hackaton.",
            "Berkomitmen mengikuti jalannya acara hingga selesai.",
          ]}
        >
          <div className="flex items-baseline space-x-1">
            Rp.250K
            <span className="text-sm text-gray-500">/tim</span>
          </div>
        </CardPrice>

        <CardPrice
          title="Peserta Workshop"
          linkto="#"
          items={[
            "1 Orang. ",
            "Mengikuti Workshop.",
            "Tidak mengikuti rangkaian lomba.",
          ]}
        >
          <div className="flex items-baseline space-x-1">
            Rp.150K
            <span className="text-sm text-gray-500">/Orang</span>
          </div>
        </CardPrice>
      </div>
    </section>
  );
};
export default Pricing;
