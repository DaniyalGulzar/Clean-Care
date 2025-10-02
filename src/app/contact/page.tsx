"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import MotionFrame from "@/components/MotionDiv";
import {
  FaAddressBook,
  FaAddressCard,
  FaAmilia,
  FaArrowRight,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HomeHeader from "@/components/Home_header";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T60RRFF425"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T60RRFF425');
      `,
          }}
        />
      </Head>
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

        <HomeHeader title="Contact Us" />

        <div className="flex justify-center items-center my-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803.7119900654925!2d74.36390799158215!3d31.50064184469572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b7bfe005a9%3A0x9007fdd3229144a6!2sCavalry%20Ground%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738239941602!5m2!1sen!2s"
            className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-40 md:gap-y-8">
            {" "}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-4xl text-blue-600" />
                <span className="text-lg font-semibold">Phone Number</span>
              </div>
              <p className="text-lg font-normal mt-1 ml-7">+923024199408</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-4xl text-blue-600" />
                <span className="text-lg font-semibold">Call/Whattsapp</span>
              </div>
              <p className="text-lg font-normal mt-1 ml-7">+923024199408</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaMailBulk className="text-4xl text-blue-600" />
                <span className="text-lg font-semibold">Email</span>
              </div>
              <p className="text-lg font-normal mt-1 ml-7">
                amirgulzar504@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaAddressBook className="text-4xl text-blue-600" />
                <span className="text-lg font-semibold">Address</span>
              </div>
              <p className="text-lg font-normal mt-1 ml-10">
                Cavalary Ground Lahore Cantt (54810)
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
              src="https://drive.google.com/uc?export=view&id=1_acUtitgK5-P0EFU5RYf_BfYX__zEwjB"
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
    </>
  );
};

export default page;
