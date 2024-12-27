const CardJuri = ({ images = "", name, title, instagram = "", linkin = "" }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={`/images/${images}`} alt={name} className="rounded-full w-40 -mb-20 z-10" />
            <div className="bg-white flex flex-col items-center rounded-xl text-center w-72 shadow-secondary-200 shadow-xl">
                <div className="bg-secondary-500 h-10 w-full rounded-t-xl"></div>
                <div className="pt-14 py-9 px-5 text-center">
                    <h4 className="font-bold">{name}</h4>
                    <h5>{title}</h5>
                    <div className="flex gap-3 mt-3 justify-center items-center">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-instagram-alt text-3xl text-gray-400"></i>
                            </a>
                        )}
                        {linkin && (
                            <a href={linkin} target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-linkedin text-3xl text-gray-400"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardJuri;
