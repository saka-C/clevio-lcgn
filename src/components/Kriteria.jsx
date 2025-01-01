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
              name="Orisinal"
              desc="berapa orisinal software yang dibuat team peserta sendiri? Apakah 100% orisinal? Apakah mengembangkan inspirasi sumber lain? Apakah sekedar meniru sumber lain? (mempunyai ciri khas, menghindari copy-paste karya orang lain, menghadirkan sesuatu yang baru)."
            />
            <Row name="Manfaat" desc="Seberapa seru dan asik gimmu dalam mengajarkan hal baru? Apakah gimmu berhasil bikin pemainnya ketagihan belajar?, Apakah gimmu berhasil bikin pemainnya paham konsep sulit jadi gampang? Atau mungkin, gimmu bisa bikin pemainnya jadi lebih kreatif dan inovatif dalam memecahkan masalah?" isStriped />
            <Row name="Menyenangkan" desc="Berapa menyenangkan software game ini?  Berapa penasaran dari pemain untuk menguasainya? (nilai hiburan, plot tantangan, konteks cerita, karakter). " />
            <Row name="Kualitas operasi software" desc="Sebi kapa software game ini berjalan? Seberapa halus animasinya? Apakah 100% selesai? Apakah masih ada error?" isStriped/>
            <Row name="Komposisi Design" desc="Seberapa bagus perpaduan warna, bentuk, tulisan, gambar, dan suara game karya peserta lomba? " />
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Kriteria;
