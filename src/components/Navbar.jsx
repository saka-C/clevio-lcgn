import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav
            className={`fixed z-50 top-0 flex items-center justify-between w-full px-6 lg:px-24 bg-[#EFEFEF] transition-shadow duration-300 ${
                isScrolled ? "shadow-md" : ""
            }`}
        >
            <div className="flex items-center">
                <img src="/images/logo.png" alt="logo" className="w-28 lg:w-32 mr-4" />
                <div className="hidden lg:flex items-center gap-7">
                    <Link to="#">
                        <h4 className="hover:text-gray-700">Tentang</h4>
                    </Link>
                    <Link to="#">
                        <h4 className="hover:text-gray-700">Informasi</h4>
                    </Link>
                    <Link to="#">
                        <h4 className="hover:text-gray-700">Testimoni</h4>
                    </Link>
                    <Link to="#">
                        <h4 className="hover:text-gray-700">Sponsorship</h4>
                    </Link>
                </div>
            </div>
            <div className="hidden lg:block">
                <Button page="#" text="Contact" />
            </div>

            {/* Hamburger Menu */}
            <button
                className="block lg:hidden text-gray-800 focus:outline-none"
                onClick={toggleSidebar}
            >
                <i className="bx bx-menu text-3xl"></i>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } lg:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-gray-800 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <i className="bx bx-x text-3xl"></i>
                    </button>
                </div>
                <div className="flex flex-col items-start gap-6 px-6 mt-10">
                    <Link to="#" className="text-lg hover:text-gray-700" onClick={toggleSidebar}>
                        Tentang
                    </Link>
                    <Link to="#" className="text-lg hover:text-gray-700" onClick={toggleSidebar}>
                        Informasi
                    </Link>
                    <Link to="#" className="text-lg hover:text-gray-700" onClick={toggleSidebar}>
                        Testimoni
                    </Link>
                    <Link to="#" className="text-lg hover:text-gray-700" onClick={toggleSidebar}>
                        Sponsorship
                    </Link>
                    <Button page="#" text="Contact" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
