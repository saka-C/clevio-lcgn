const Champions = () => {
    const badges = [
      {
        image: "1st.png",
        title: "Juara 1",
        order: "order-1 md:order-2 shadow-xl shadow-thirdnary-300 md:scale-110",
      },
      {
        image: "2nd.png",
        title: "Juara 2",
        order: "order-2 md:order-1 shadow-lg shadow-gray-300",
      },
      {
        image: "3rd.png",
        title: "Juara 3",
        order: "order-3 md:order-3 shadow-lg shadow-gray-300",
      },
    ];
    return (
      <section className="mt-28 px-10">
        <h1 className="text-center">Juara & Kriteria Lomba</h1>
        <div className="flex flex-col md:flex-row justify-center items-center lg:gap-10 gap-5 mt-10">
            {badges.map((badge, index) => (
            <div
                key={index}
                className={`bg-white lg:w-72 md:w-1/2 w-full flex flex-col items-center p-10 rounded-2xl  ${badge.order}`}
            >
                <img src={`/images/${badge.image}`} alt={badge.title} />
                <h3 className="font-bold">{badge.title}</h3>
                <ul className="list-inside list-disc marker:text-primary-500 text-gray-500">
                <li>kategori SMA</li>
                <li>kategori SMK</li>
                <li>kategori Guru</li>
                </ul>
            </div>
            ))}
        </div>
      </section>
    );
  };
  
  export default Champions;
  