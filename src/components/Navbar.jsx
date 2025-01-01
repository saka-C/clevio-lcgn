import { useState, useEffect } from "react";
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

  const handleNavLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isSidebarOpen) {
      setIsSidebarOpen(false); // Close the sidebar
    }
  };

  return (
    <nav
      className={`fixed z-50 top-0 flex items-center justify-between w-full px-6 lg:px-24  transition-shadow duration-300 ${
        isScrolled ? "shadow-md bg-[#EFEFEF]" : ""
      }`}
    >
      <div className="flex items-center">
        <img src="/images/logo.png" alt="logo" className="w-28 lg:w-32 mr-4" />
        <div className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNavLinkClick("tentang")}
            className="hover:text-gray-700"
          >
            <h4>Tentang</h4>
          </button>
          <button
            onClick={() => handleNavLinkClick("informasi")}
            className="hover:text-gray-700"
          >
            <h4>Informasi</h4>
          </button>
          <button
            onClick={() => handleNavLinkClick("testimoni")}
            className="hover:text-gray-700"
          >
            <h4>Testimoni</h4>
          </button>
          <button
            onClick={() => handleNavLinkClick("partner-section")}
            className="hover:text-gray-700"
          >
            <h4>Sponsorship</h4>
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Button page="https://clev.io/chat" text="Contact" />
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
          <button
            onClick={() => handleNavLinkClick("tentang")}
            className="text-lg hover:text-gray-700"
          >
            Tentang
          </button>
          <button
            onClick={() => handleNavLinkClick("informasi")}
            className="text-lg hover:text-gray-700"
          >
            Informasi
          </button>
          <button
            onClick={() => handleNavLinkClick("testimoni")}
            className="text-lg hover:text-gray-700"
          >
            Testimoni
          </button>
          <button
            onClick={() => handleNavLinkClick("partner-section")}
            className="text-lg hover:text-gray-700"
          >
            Sponsorship
          </button>
          <Button page="https://clev.io/chat" text="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
