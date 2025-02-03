"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            {[
              { name: "Home", path: "/dashboard_" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xl px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-white hover:bg-gray-700 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 pb-4">
          {[
            { name: "Home", path: "/dashboard_" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 hover:text-blue-400"
              }`}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
