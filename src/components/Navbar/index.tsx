"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import servicesData from "@/app/data/services";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname() || "";
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
              src="https://drive.google.com/uc?export=view&id=1u7r2EpyzKdzIrwkJ9UfFLfmrNPqBK8y4"
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
            {["dashboard", "about", "booking", "contact"].map((item) => {
              const linkPath = item === "dashboard" ? "/" : `/${item}`;
              return (
                <Link
                  key={item}
                  href={linkPath}
                  className={`text-xl px-4 py-2 rounded-full transition-all duration-300 ${
                    pathname === linkPath
                      ? "bg-blue-600 text-white"
                      : "text-white hover:bg-gray-700 hover:text-blue-400"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-2 text-xl px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname.includes("/service")
                    ? "bg-blue-600 text-white"
                    : "text-white hover:bg-gray-700 hover:text-blue-400"
                }`}
              >
                <span>Services</span>
                <FaChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-[-80px] mt-2 bg-white text-black shadow-md rounded-md w-56 py-2 z-50">
                  <ul className="overflow-auto h-[400px]">
                    {servicesData.map((service) => (
                      <li
                        key={service.id}
                        className="px-4 py-2 hover:bg-purple-100"
                      >
                        <Link href={`/service/${service.id}`}>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white p-4">
          {["dashboard", "about", "booking", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                pathname === `/${item}`
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 hover:text-blue-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* Services Modal Trigger */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full text-left py-2 px-4 rounded-md hover:bg-gray-700 hover:text-blue-400 text-white"
          >
            Services
          </button>
        </div>
      )}

      {/* Modal for Mobile Services */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-600 p-5 m-2 rounded-lg w-80 max-h-[60vh] overflow-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Our Services</h2>
            <ul>
              {servicesData.map((service) => (
                <li
                  key={service.id}
                  className="py-2 px-1 text-white hover:bg-blue-200 cursor-pointer text-center"
                  onClick={() => {
                    setIsModalOpen(false);
                    router.push(`/service/${service.id}`);
                  }}
                >
                  {service.name}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
