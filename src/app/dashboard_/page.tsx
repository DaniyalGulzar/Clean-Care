"use client";
import InputField from "@/components/InputField";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Cards from "@/components/CardsSectin";
import MotionFrame from "@/components/MotionDiv";

import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaHeadset,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import Button from "@/components/Button";
import { Collapse, Divider } from "antd";
import Footer from "@/components/Footer";
import Link from "next/link";

const DashBoard = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [pageTitle, setPageTitle] = useState("Home");
  const [sticky, setSticky] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollToPrevSlide = () => {
    sliderRef.current?.scrollBy({
      left: -(sliderRef.current?.offsetWidth || 0),
      behavior: "smooth",
    });
  };

  const scrollToNextSlide = () => {
    sliderRef.current?.scrollBy({
      left: sliderRef.current?.offsetWidth || 0,
      behavior: "smooth",
    });
  };
  const items = [
    {
      key: "1",
      label: "Commercial Cleaning Services",
      description:
        "Keep your workplace clean and free of distractions with customized commercial cleaning services that meet your unique needs. ",
    },
    {
      key: "2",
      label: "Janitorial Services",
      description:
        "Increase productivity & innovation with a clean space maintained by our team of dedicated professionals..",
    },
    {
      key: "3",
      label: "Disinfectant Services ",
      description:
        "Keep your team & customers healthy by sanitizing the germs that cause COVID-19, the flu and other contagious illnesses.",
    },
    {
      key: "4",
      label: "Porter Services",
      description:
        "Get the onsite help you need to keep your business running smoothly all day with our porter services.",
    },
    {
      key: "5",
      label: "Commercial Floor Cleaning",
      description:
        "Impress your clients by putting the luster back on your floor with regular maintenance and cleaning.",
    },
    {
      key: "6",
      label: "Commercial Restroom Cleaning",
      description:
        "We know you don’t want to do it, so let us keep your restroom clean, fresh-smelling and free of germs and pathogens.",
    },
    {
      key: "7",
      label: "Commercial Carpet Cleaning",
      description:
        "Extend the life of your carpets and keep them looking great with our thorough but affordable carpet cleaning.",
    },
    {
      key: "8",
      label: "Commercial Window Washing",
      description:
        "Spruce up your building façade and rid your windows of dirt, fingerprints and unsightly streaks.",
    },
  ];

  const customers = [
    {
      id: 1,
      text: "Sharp CV transformed my resume! Their templates are sleek, and the AI suggestions were spot-on. I landed my dream job in no time.",
      name: "John Doe",
      country: "USA",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 2,
      text: "As a career changer, I needed a resume that showcased my transferable skills. Sharp CV helped me craft a compelling resume that landed me interviews with top companies.",
      name: "Jane Smith",
      country: "Canada",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 3,
      text: "I've used multiple resume builders, but Sharp CV is by far the best. The platform is user-friendly, the templates are professional, and the AI suggestions are spot-on.",
      name: "Mike Johnson",
      country: "UK",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of type and scrambled it to make a type specimen book",
      name: "Mike Johnson",
      country: "UK",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of type and scrambled it to make a type specimen book",
      name: "Mike Johnson",
      country: "UK",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 6,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. of type and scrambled it to make a type specimen book",
      name: "Mike Johnson",
      country: "UK",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    // Add more customer reviews as needed
  ];

  const imageData = [
    { src: "/myImages/Construction.png", heading: "Constructions" },
    { src: "/myImages/Call-Center.png", heading: "Call Center" },
    {
      src: "/myImages/Medical-Office.png",
      heading: "Hospital & Medical Office",
    },
    { src: "/myImages/Convention-Center.png", heading: "Convention Center" },
    { src: "/myImages/Business-Office.png", heading: "Bussiness office" },
    { src: "/myImages/Retail-Stores.png", heading: "Places Of Worship" },
    { src: "/myImages/Retail-Stores.png", heading: "Retail Stores" },
    { src: "/myImages/Schools.png", heading: "Schools" },
    { src: "/myImages/restaurant.png", heading: "Restaurants" },
    { src: "/myImages/Warehouse3.png", heading: "Warehouse" },
    { src: "/myImages/hotels3.png", heading: "Hotels" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            Home
          </div>
          {/* <div className="relative">
            <Image
              src="/myImages/tub.png"
              alt="Background"
              width={230}
              height={120}
              className="w-[530px] h-[220px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 "
            />
          </div> */}
        </div>
      </div>

      <div>
        <Cards />
      </div>
      <div className="mb-[10px]">
        <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
            <Image
              src="/myImages/buiding.png"
              alt="Background"
              width={530}
              height={370}
              className="w-full h-full md:w-[600px] md:h-[370px] rounded-md "
            />
          </div>

          <div className="col-span-12 md:col-span-6 text-left">
            <span className="text-2xl md:text-3xl font-bold">
              Serving the Dallas-Fort Worth Area Since 2006
            </span>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              Spruce up your local business, office, hotel, store, warehouse, or
              school with commercial cleaning services from Dallas Janitorial
              Services.
            </p>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              We know how difficult it is to keep your business running smoothly
              and efficiently. So the last thing you want to think about is
              keeping the place clean. Let our team of dedicated professionals
              sweat the small stuff for you. We’ll keep your workspace clean,
              your restrooms sanitized, and your windows clear.
            </p>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              Whether it’s onsite porter services, after-hours cleanings or
              monthly carpet cleanings, Dallas Janitorial provides every service
              you need to maintain a clean, safe and healthy workspace.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[370px] w-full">
        <Image
          src="/myImages/sunset.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0 w-full h-[370px]"
        />

        <div className="absolute inset-0 bg-gray-100 opacity-60"></div>

        <div className="relative flex flex-col justify-center items-center h-full px-4">
          <span className="font-semibold text-3xl md:text-5xl lg:text-6xl text-black mb-4 text-center">
            Commercial Cleaning Services
          </span>
          <span className="text-sm md:text-lg lg:text-2xl text-center text-black mb-5">
            We take care of the small stuff so you can concentrate on your
            business.
          </span>
          <Link href="/contact">
            <Button
              type="button"
              className="w-[200px] md:w-[245px] h-[48px] md:h-[56px] text-sm md:text-lg rounded-sm mt-10 items-center flex justify-center py-2 px-4 bg-[#0f172a] text-white hover:bg-blue-700"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-[50px]">
        <div className=" flex flex-col justify-center items-center h-full px-4">
          <span className="font-semibold text-3xl md:text-5xl lg:text-6xl text-white mb-4 text-center">
            Our Local Commercial Cleaning & Janitorial Services
          </span>
          <span className="text-sm md:text-lg lg:text-2xl text-center text-gray-600 mb-5">
            Trust Dallas Janitorial Services to take care of all your commercial
            cleaning needs. We provide the following services:
          </span>
        </div>
      </div>
      <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
          <Image
            src="/myImages/buiding.png"
            alt="Background"
            width={530}
            height={370}
            className="w-full h-full md:w-[600px] md:h-[370px] rounded-md "
          />
        </div>

        <div className="col-span-12 md:col-span-6 text-left">
          <Collapse
            activeKey={activeKey}
            onChange={(key) => {
              if (typeof key === "string") {
                setActiveKey(key);
              } else if (Array.isArray(key) && key.length > 0) {
                setActiveKey(key[0]);
              }
            }}
            accordion
            expandIcon={() => null}
            bordered={false}
            items={items.map(({ key, label, description }) => ({
              key,
              label: (
                <div
                  className="font-bold text-xl md:text-3xl"
                  style={{
                    borderLeft: "3px solid gray",
                    padding: "10px",
                    color: activeKey === key ? "blue" : "white",
                    fontWeight: activeKey === key ? "bold" : "normal",
                    cursor: "pointer",
                    borderBottom: "none",
                  }}
                >
                  {label}
                </div>
              ),
              children: (
                <div
                  className="text-sm md:text-lg"
                  style={{
                    margin: 0,
                    paddingLeft: "10px",
                  }}
                >
                  {description} <br />
                  <br />
                  <span className="text-blue-500 cursor-pointer">
                    Read More &gt;&gt;
                  </span>
                </div>
              ),
            }))}
          />
        </div>
      </div>

      <MotionFrame imageData={imageData} />

      <div className="mb-[10px]">
        <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
          <div className="col-span-12 md:col-span-6 text-left ml-2 md:ml-10">
            <span className="text-2xl md:text-3xl font-bold">
              Doing Our Part to Keep You Healthy
            </span>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              At Clean Care Janitorial Services, protecting your team, our crews
              and the public from harmful viruses and bacteria is our top
              priority.
            </p>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              We stay up-to-date on the latest news and recommendations from the
              CDC, EPA, World Health Organization (WHO) and Occupational Safety
              and Health Administration (OSHA). Our disinfectant and cleaning
              methods are based on the cleaning protocols, safety measures and
              pathogen control recommended by these expert organizations.
            </p>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              For more information on keeping your business safe and productive,
              schedule a call when it’s convenient for you.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
            <Image
              src="/myImages/coronavirus.png"
              alt="Background"
              width={630}
              height={370}
              className="w-full h-full md:w-[600px] md:h-[370px] rounded-md "
            />
          </div>
        </div>
      </div>

      <div className="relative h-[370px] w-full mt-10 mb-10">
        <Image
          src="/myImages/sunset.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0 w-full h-[370px]"
        />

        <div className="absolute inset-0 bg-gray-100 opacity-60"></div>

        <div className="relative flex flex-col justify-center items-center h-full px-4">
          <span className="font-semibold text-3xl md:text-5xl lg:text-6xl text-black mb-4 text-center">
            Ready to Keep Your Workspace Safe and Productive?
          </span>
          <span className="text-sm md:text-lg lg:text-2xl text-center text-black mb-5">
            Schedule a call when it’s convenient for you.
          </span>
          <Link href="/contact">
            <Button
              type="button"
              className="w-[200px] md:w-[245px] h-[48px] md:h-[56px] text-sm md:text-lg rounded-sm mt-10 items-center flex justify-center py-2 px-4 bg-[#0f172a] text-white hover:bg-blue-700"
            >
              {/* Contact Us Today */}
              Request a Cleaning Quote
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <div className="mx-3 lg:mx-20 md:ml-[30px] mt-10 px-4 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between">
            <span className="text-[40px] font-semibold">
              What Our Customers Say!
            </span>
            <div className="flex justify-center gap-1">
              <Image
                src="/svgs/prev-button.svg"
                alt="left"
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                height={56}
                width={56}
                onClick={scrollToPrevSlide}
              />
              <Image
                src="/svgs/next-button.svg"
                alt="right"
                className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                height={56}
                width={56}
                onClick={scrollToNextSlide}
              />
            </div>
          </div>
        </div>
        <div className="ml-20 md:ml-[30px]">
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scrollbar-hide mt-5 gap-4"
          >
            {customers.map((customer, index) => (
              <div
                key={customer.id}
                className={`flex-none w-full lg:w-1/3 ${
                  (index + 1) % 3 === 0 ? "mr-0" : "mr-4"
                } border-r-2`}
              >
                <div className="px-10">
                  <Image
                    src="/svgs/fivestar.svg"
                    alt="star"
                    height={28}
                    width={168}
                  />
                  <p className="my-[20px] text-[#666666]">{customer.text}</p>
                  <div className="flex items-center mt-[48px]">
                    <Image
                      src="/svgs/landingprofile.svg"
                      alt="user"
                      height={70}
                      width={70}
                    />
                    <div className="ml-2">
                      <span className="block">{customer.name}</span>
                      <span className="text-gray-400 text-sm">
                        {customer.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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

export default DashBoard;
