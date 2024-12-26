const Footer = () => {
    return(
        <>
            <section className="bg-primary-500 pt-16 mt-28">
                <div className="flex lg:flex-row flex-col justify-between sm:px-24 px-5">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-white sm:w-96">Clevio Innovator Camp</h2>
                        <h5 className="text-white sm:w-80">Bukit Golf Cibubur, Riverside 1 Blok A7/25, Gunung Putri, Bojong Nangka, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16963</h5>
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-white text-5xl"><i class='bx bxl-instagram-alt' ></i></a>
                            <a href="#" className="text-white text-5xl"><i class='bx bxl-tiktok' ></i></a>
                            <a href="#" className="text-white text-5xl"><i class='bx bxl-youtube' ></i></a>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.844705629392!2d106.90748927413392!3d-6.413994262725711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb2c84e97e55%3A0x41d2b975b4c56e4a!2sClevio%20Coder%20Camp!5e0!3m2!1sid!2sid!4v1735204893247!5m2!1sid!2sid"
                        width=""
                        height="304"
                        style={{ border: 0 }}
                        className="rounded-xl lg:mt-0 mt-10 "
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <h5 className="text-white sm:px-24 px-5 py-10 text-start">©2025 Clevio Innovator Camp. All Right Reserved</h5>
            </section>
        </>
        
    )
}
export default Footer