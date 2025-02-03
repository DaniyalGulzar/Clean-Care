"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import MotionFrame from "@/components/MotionDiv";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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
            About us
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-10 md:my-16 text-center px-4 md:px-8 lg:px-20">
        <span className="font-semibold text-3xl">
          What Our Customer Like Us?
        </span>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <div className="p-6 shadow-lg rounded-2xl bg-white">
              <Image src="/svgs/cv.svg" alt="cv" height={40} width={40} />
              <div className="font-medium text-xl text-[#555370] my-3">
                We are Experts
              </div>
              <p className="text-left text-base text-[#555370] font-normal">
                and dominate the industry in scale and scope with an adaptable,
                extensive network that consistently delivers exceptional
                results.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-2xl bg-white md:mt-16">
              <Image
                src="/svgs/united.svg"
                alt="ats-friendly"
                height={40}
                width={40}
              />
              <div className="font-medium text-xl text-[#555370] my-3">
                We are Committed
              </div>
              <p className="text-left text-base text-[#555370] font-normal">
                to our customers and are guided according to their needs.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs md:max-w-md lg:max-w-lg shadow-lg rounded-2xl overflow-hidden">
              <Image
                src="/myImages/Group-image.png"
                alt="group"
                className="w-full h-auto object-cover"
                height={590}
                width={413.45}
                layout="responsive"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6">
            <div className="p-6 shadow-lg rounded-2xl bg-white">
              <Image
                src="/svgs/content-marketing.svg"
                alt="support"
                height={40}
                width={40}
              />
              <div className="font-medium text-xl text-[#555370] my-3">
                We Are Complete
              </div>
              <p className="text-left text-base text-[#555370] font-normal">
                and seek to provide exceptional service and engage in proactive
                behavior.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-2xl bg-white md:mt-16">
              <Image
                src="/svgs/cover-letter.svg"
                alt="cover letter"
                height={40}
                width={40}
              />
              <div className="font-medium text-xl text-[#555370] my-3">
                We Are Driven
              </div>
              <p className="text-left text-base text-[#555370] font-normal">
                to pursue the highest standards and continuously improve in all
                aspects of our business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MotionFrame imageData={imageData} />

      <div className="my-5 md:my-20">
        <div className="bg-gray-300 grid grid-cols-2 items-center pl-4 md:pl-8 py-4 ">
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold mb-4 text-black cursor-pointer">
              Do Your Part to Stop the Spread of Illnesses
            </span>
            <p className="text-md text-black cursor-pointer mb-4">
              Read about our cleaning and disinfectant solutions for COVID-19
            </p>
            <Button className="bg-[#0f172a] text-white px-4 py-2 rounded-md font-semibold">
              Learn More
            </Button>
          </div>

          <div className="flex justify-end items-center">
            <Image
              src="/myImages/spray2.png"
              alt="Background"
              width={630}
              height={370}
              className="w-full h-full md:w-[600px] md:h-[370px] rounded-md "
            />
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
