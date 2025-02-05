"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname() || ""; // Fix 'null' issue

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const servicesData = [
    { id: 1, name: "Commercial Carpet Cleaning" },
    { id: 2, name: "Commercial Sanitation Services" },
    { id: 3, name: "Coronavirus Cleaning Services" },
    { id: 4, name: "Day Porter Services" },
    { id: 5, name: "Expert Disinfecting Services" },
    { id: 6, name: "Flood Cleaning Services" },
    { id: 7, name: "Restroom Cleaning Services" },
    { id: 8, name: "Post Renovation Cleaning Services" },
    { id: 9, name: "Veterinary & Animal Cleaning Services" },
    { id: 10, name: "Window Cleaning Services" },
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 ${
        sticky ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-2 md:px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/myImages/whitelogo.png"
              alt="Logo"
              width={250}
              height={150}
              className="w-[200px] h-[100px] md:w-[250px] md:h-[150px]"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/dashboard_"
              className={`text-xl px-4 py-2 rounded-full transition-all duration-300 ${
                pathname === "/dashboard_"
                  ? "bg-blue-600 text-white"
                  : "text-white hover:bg-gray-700 hover:text-blue-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xl px-4 py-2 rounded-full transition-all duration-300 ${
                pathname === "/about"
                  ? "bg-blue-600 text-white"
                  : "text-white hover:bg-gray-700 hover:text-blue-400"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2"
              >
                <span>Services</span>
                <FaChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md w-48">
                  <ul>
                    {/* Map over servicesData to create dropdown items */}
                    {servicesData.map((service: any) => (
                      <li key={service.id} className="p-2 hover:bg-gray-200">
                        <Link href={`/service/${service.id}`}>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <Link
              href="/contact"
              className={`text-xl px-4 py-2 rounded-full transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-blue-600 text-white"
                  : "text-white hover:bg-gray-700 hover:text-blue-400"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 pb-4">
          <Link
            href="/dashboard_"
            className={`block py-2 px-4 rounded-md transition-all duration-300 ${
              pathname === "/dashboard_"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700 hover:text-blue-400"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-2 px-4 rounded-md transition-all duration-300 ${
              pathname === "/about"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700 hover:text-blue-400"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Dropdown */}
          {/* <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="block w-full text-left py-2 px-4 rounded-md text-white hover:bg-gray-700"
          >
            Services
          </button> */}
          {dropdownOpen && (
            <div className="bg-gray-800 rounded-md ">
              {servicesData.map((service, index) => (
                <Link
                  className="block px-4 py-2  text-white hover:bg-gray-700"
                  href={`/services/${service.id}`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className={`block py-2 px-4 rounded-md transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700 hover:text-blue-400"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
