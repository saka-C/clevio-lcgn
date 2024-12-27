import Kriteria from "./Kriteria";
import { motion } from "framer-motion";

const TimelineCard = ({
  date,
  title,
  description,
  position = "right",
  delay = 0,
  isLast,
  icon,
}) => {
  const isLeft = position === "left";

  return (
    <div className="relative flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`flex w-full items-center justify-between
            ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} 
            flex-row`} // Mobile always right aligned
      >
        <div className="w-full md:w-5/12 md:ml-0 ml-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg group bg-white/10 p-6 rounded-lg hover:shadow-lg hover:bg-white"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-thirdnary-500 group-hover:text-secondary-600 group-hover:bg-secondary-100 ring-2 group-hover:ring-0 ring-thirdnary-500 ring-inset  rounded-full">
              {date}
            </span>
            <h3 className=" text-white group-hover:text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-thirdnary-500 group-hover:text-gray-600">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Timeline Line & Dots Section */}
        <div className="absolute left-0 md:relative md:left-auto flex items-center justify-center w-1 md:w-2/12">
          {/* Main timeline dot */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="absolute w-6 h-6 bg-thirdnary-500 rounded-full z-20 shadow-lg"
          />

          {/* Connecting dots container */}
          {!isLast && (
            <div
              className="absolute w-1 flex flex-col items-center"
              style={{ height: "200%", top: "50%" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: delay + i * 0.1 }}
                  className="w-2 h-2 bg-thirdnary-500 rounded-full my-8 z-20"
                />
              ))}
            </div>
          )}
        </div>

        {/* Icon Section - Shows opposite to content on desktop, hidden on mobile */}
        <div className="hidden md:flex md:w-5/12 justify-center items-center">
          <i
            className={`bx ${icon} text-4xl text-primary-500 bg-thirdnary-500 p-8 rounded-full`}
          ></i>
        </div>
      </motion.div>
    </div>
  );
};

const FlowEvent = () => {
  const timelineData = [
    {
      date: "03 - 20 January 2025",
      title: "Pendaftaran",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "right",
      delay: 0,
      icon: "bxs-file",
    },
    {
      date: "21 January 2025",
      title: "Workshop 1",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "left",
      delay: 0.2,
      icon: "bxs-video-recording",
    },
    {
      date: "28 Januari 2025",
      title: "Workshop 2",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "right",
      delay: 0.2,
      icon: "bxs-video-recording",
    },
    {
      date: "04 Februari 2025",
      title: "Workshop 3",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "left",
      delay: 0.2,
      icon: "bxs-video-recording",
    },
    {
      date: "11 Februari 2025",
      title: "Opening Hackaton",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "right",
      delay: 0.2,
      icon: "bxs-joystick",
    },
    {
      date: "15 Februari 2025",
      title: "Deadline Pengumpulan",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "left",
      delay: 0.2,
      icon: "bxs-cloud-download",
    },
    {
      date: "16 Februari 2025",
      title: "Seleksi Finalis",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "right",
      delay: 0.2,
      icon: "bxs-dice-3",
    },
    {
      date: "17 Februari 2025",
      title: "Pengumuman Finalis",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "left",
      delay: 0.2,
      icon: "bxs-badge-check",
    },
    {
      date: "18 Februari 2025",
      title: "Pameran Lomba Cipta Game(LIVE)",
      description:
        "Lorem ipsum dolor sit amet, tempore aegam sits eros curae quam vero, dolorem cupiditate. Magna numquam?",
      position: "right",
      delay: 0.2,
      icon: "bxs-trophy",
    },
  ];
  return (
    <section className="flow-event-section lg:px-24 md:px-14 sm:px-10 px-5 py-20 bg-primary-500 mt-28 overflow-x-hidden">
      <h1 className="text-thirdnary-500 text-center">
        Alur Lomba Cipta Game Nasional
      </h1>
      <div className="relative mt-20">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-secondary-200 h-full" />

        <div className="flex flex-col space-y-5 relative">
          {timelineData.map((item, index) => (
            <TimelineCard
              key={index}
              {...item}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
      <div className="">
        <Kriteria />
      </div>
    </section>
  );
};

export default FlowEvent;
