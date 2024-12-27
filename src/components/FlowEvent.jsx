import CardFlowEvent from "./CardFlowEvent";
import Kriteria from "./Kriteria";

const FlowEvent = () => {
    return (
      <section className="flow-event-section lg:px-24 md:px-14 sm:px-10 px-5 py-20 bg-primary-500 mt-28">
        <h1 className="text-thirdnary-500 text-center">Alur Lomba Cipta Game Nasional</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 gap-y-14 mt-20">
            <CardFlowEvent event="Pendaftaran" date="03 - 20 January 2025">
                <i class='bx bxs-file'></i>
            </CardFlowEvent>
            <CardFlowEvent event="Workshop 1" date="21 January 2025">
                <i class='bx bxs-video-recording' ></i>
            </CardFlowEvent>
            <CardFlowEvent event="Workshop 2" date="28 Januari 2025">
                <i class='bx bxs-video-recording' ></i>
            </CardFlowEvent>
            <CardFlowEvent event="Workshop 3" date="04 Februari 2025">
                <i class='bx bxs-video-recording' ></i>
            </CardFlowEvent>
            <CardFlowEvent event="Opening Hackaton" date="11 Februari 2025">
                <i class='bx bxs-joystick' ></i>
            </CardFlowEvent>
            <CardFlowEvent event="Deadline Pengumpulan" date="15 Februari 2025">
                <i class='bx bxs-cloud-download'></i>
            </CardFlowEvent>
            <CardFlowEvent event="Seleksi Finalis" date="16 Februari 2025">
                <i class='bx bxs-dice-3'></i>
            </CardFlowEvent>
            <CardFlowEvent event="Pengumuman Finalis" date="17 Februari 2025">
                <i class='bx bxs-badge-check'></i>
            </CardFlowEvent>
            <CardFlowEvent event="Pameran Lomba Cipta Game(LIVE)" date="18 Februari 2025">
                <i class='bx bxs-trophy'></i>
            </CardFlowEvent>
        </div>
        <div className="">
            <Kriteria />
        </div>
      </section>
    );
  };
  
  export default FlowEvent;
  