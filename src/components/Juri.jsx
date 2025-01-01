import Vector from "../assets/Vector";
import CardJuri from "./CardJuri";

const Juri = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden mt-20">
      <div className="absolute bottom-0 -left-28 pointer-events-none -z-10">
        <Vector />
      </div>

      <div className="absolute top-10 -right-28 pointer-events-none -z-10">
        <Vector />
      </div>

        <div className="flex flex-col items-center gap-10">
            <h1 className="text-center sm:text-[40px] text-[2rem] flex items-center sm:gap-5 gap-2 sm:mx-14">
                <i class="bx bxs-certification text-primary-500"></i>
                Para Juri Hebat Di LCGN
                <i class="bx bxs-certification text-primary-500"></i>
            </h1>

            <div className="flex justify-center flex-wrap gap-10 mx-20">
                <CardJuri name="Fransiska Oetami" title="CEO Clevio Innovator Camp" images="juri1.png" instagram="#" linkin="#"/>
                <CardJuri name="Clara Verb" title="Head Master Lorem School" images="juri2.png" instagram="#" linkin="#"/>
                <CardJuri name="Budi Arie" title="Minister of KEMKOMINFO" images="juri3.png" instagram="#" linkin="#"/>
            </div>
        </div>
    </div>
  );
};
export default Juri;
