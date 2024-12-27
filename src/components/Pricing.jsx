import CardPrice from "./CardPrice";

const Pricing = () => {
  return (
    <section className="mt-32" id="informasi">
      <h1 className="text-center mb-5">
        Informasi Pendaftaran Lomba Cipta Game Nasional
      </h1>
      <h5 className="text-center text-gray-700">
        Segera daftarkan tim Mu, dengan memilih sesuai dengan kriteria yang kamu inginkan.
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
