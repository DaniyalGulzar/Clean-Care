"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import MotionFrame from "@/components/MotionDiv";
import { FaArrowRight, FaPhone, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const page = () => {
  const imageData = [
    { src: "/myImages/Construction.png", heading: "Constructions" },
    { src: "/myImages/Call-Center.png", heading: "Call Center" },
    {
      src: "/myImages/Medical-Office.png",
      heading: "Hospital & Medical Office",
    },
    { src: "/myImages/Convention-Center.png", heading: "Convention Center" },
    { src: "/myImages/Business-Office.png", heading: "Bussiness office" },
    { src: "/myImages/Church2.png", heading: "Places Of Worship" },
    { src: "/myImages/Retail-Stores.png", heading: "Retail Stores" },
    { src: "/myImages/Schools.png", heading: "Schools" },
    { src: "/myImages/restaurant.png", heading: "Restaurants" },
    { src: "/myImages/Warehouse3.png", heading: "Warehouse" },
    { src: "/myImages/hotels3.png", heading: "Hotels" },
  ];

  const cavalryGroundCoords: [number, number] = [31.5021, 74.3587];

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 w-full px-4 md:px-8 flex justify-center items-center transition-all duration-300 z-50 bg-[#0f172a] py-4`}
      >
        <span className="text-base md:text-2xl lg:text-3xl font-semibold text-white whitespace-nowrap">
          GIVE US A CALL
        </span>
        <FaArrowRight className="text-white mx-2 md:mx-4 animate-move" />
        <span className="text-base md:text-2xl lg:text-3xl font-semibold text-white whitespace-nowrap">
          +92(3024199408)
        </span>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/myImages/bg_image.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full opacity-70"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent mix-blend-multiply"></div>

        <div className="fixed top-14 md:top-16 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>
        <div className="relative z-20 container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-[100px] ml-0 md:ml-80 md:mt-0 md:text-left">
            Contact us
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803.7119900654925!2d74.36390799158215!3d31.50064184469572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b7bfe005a9%3A0x9007fdd3229144a6!2sCavalry%20Ground%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738239941602!5m2!1sen!2s"
          width="900"
          height="550"
          style={{ border: "0" }}
          // allowFullScreen=" medium"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-40 md:gap-y-8">
          {" "}
          {/* Phone Number Section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/myImages/phone.png"
                alt="phone"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              <span className="text-lg font-semibold">Phone Number</span>
            </div>
            <p className="text-lg font-normal mt-1 ml-7">+1 234 567 890</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/myImages/whatsapp.png"
                alt="phone"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              <span className="text-lg font-semibold">Call/Whattsapp</span>
            </div>
            <p className="text-lg font-normal mt-1 ml-7">+923024199408</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/myImages/Email.png"
                alt="phone"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              <span className="text-lg font-semibold">Email</span>
            </div>
            <p className="text-lg font-normal mt-1 ml-7">
              amirgulzar08@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/myImages/Address.png"
                alt="phone"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              <span className="text-lg font-semibold">Address</span>
            </div>
            <p className="text-lg font-normal mt-1 ml-7">
              cavalary Ground Lahore Cantt
            </p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>

      <div className="absolute right-10 bottom-10">
        <div className="flex justify-center items-center rounded-full w-[82px] h-[82px]  mt-20">
          <Image
            src="/myImages/arrowtop.png"
            alt="Scroll to Top"
            width={50}
            height={50}
            className="fixed bottom-10 right-10 cursor-pointer hover:opacity-30 transition-opacity duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>

      <style>
        {`
        @keyframes move {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        .animate-move {
          animation: move 1s infinite;
        }
      `}
      </style>
    </div>
  );
};

export default page;
