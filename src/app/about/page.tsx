"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import MotionFrame from "@/components/MotionDiv";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import HomeHeader from "@/components/Home_header";

const page = () => {
  const imageData = [
    {
      src: "https://drive.google.com/uc?export=view&id=16-VgAtA4wfrGHHhtb2sY2bi_OorV_KTP",
      heading: "Constructions",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=18qRB2_ZQCUoRANUpsMJPHPUsA5uCVTYu",
      heading: "Call Center",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1H00hMXfkEaupxm4UknEY3brjA_ZTXcE4",
      heading: "Hospital & Medical Office",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1YpA0qi9Wgmzj_KM_S0umpeA45z9IKuq-",
      heading: "Convention Center",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1nI7O5TUbs5bH9oJkeMSkqcTPRdH72E_I",
      heading: "Bussiness office",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1xv7xmWfzKzgqymxFCTPloBXJgxL0-gIi",
      heading: "Places Of Worship",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1ghab4sI_lZC8vHr2JdnNnpxGPZBoi2F5",
      heading: "Retail Stores",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1KgTlwBnj8nyTuDtqxtMmLN5Yp-eQ84hQ",
      heading: "Schools",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1WQaBPdXLxmIvlsBsZUONq1fX7bLHxSdH",
      heading: "Restaurants",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1qlZDds374UN5XwKD6E1YgNUp1LMyujsV",
      heading: "Warehouse",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1s4ZpoSKKEU_uqZL9XtUF3QYLLT564vNz",
      heading: "Hotels",
    },
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

      {/* <div className="relative h-full flex flex-col items-center justify-center">
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
      </div> */}
      <HomeHeader title="About Us" />

      {/* there about us content placed here  */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 rounded-lg shadow-lg">
        {/* Introduction Text */}
        <p className="text-lg text-white text-justify sm:text-left ">
          {/* <p className="text-lg text-white  text-justify"> */}
          At Clean Care, we take immense pride in being recognized as one of the
          highest-rated and most trusted commercial cleaning services in
          Pakistan. With an unwavering commitment to excellence, we strive to
          ensure that businesses, offices, and commercial spaces remain not just
          clean but also hygienic, safe, and welcoming for employees, customers,
          and visitors. Our comprehensive cleaning solutions are tailored to
          meet the diverse needs of various industries, including corporate
          offices, hospitals, educational institutions, shopping malls,
          industrial facilities, and many more. Whether it's routine janitorial
          services, deep cleaning, disinfecting, carpet and upholstery cleaning,
          or specialized industrial cleaning, our expert team is equipped with
          the latest tools, eco-friendly cleaning products, and industry-best
          practices to deliver outstanding results.
          <br /> At Clean Care, we understand that a clean environment directly
          impacts health, productivity, and overall well-being. That’s why we go
          beyond surface-level cleaning to ensure every nook and corner is
          thoroughly sanitized, reducing the risk of germs, bacteria, and
          allergens. Our highly trained and professional staff undergo rigorous
          training to meet international hygiene standards, guaranteeing
          impeccable service and customer satisfaction. We take a proactive
          approach to cleaning, customizing our services to fit the specific
          requirements of our clients, whether they need daily, weekly, or
          on-demand cleaning solutions.
          <br /> One of our core values is reliability, and we believe in
          maintaining long-term relationships with our clients by consistently
          delivering high-quality cleaning services. Our dedication to customer
          satisfaction means that we listen to our clients’ needs, respond
          promptly to their concerns, and continuously improve our services to
          exceed expectations. With a strong focus on using environmentally
          friendly and sustainable cleaning methods, we ensure that our
          practices not only enhance the cleanliness of your workspace but also
          contribute positively to a greener planet.
          <br /> From small offices to large corporate buildings, from medical
          facilities to commercial complexes, Clean Care is your trusted partner
          for maintaining a pristine and sanitized environment. Our goal is to
          create a space that fosters productivity, enhances brand reputation,
          and promotes the well-being of everyone who enters. Choose Clean Care
          for professional, efficient, and top-quality cleaning services across
          Pakistan, and experience the difference of a spotless, healthier, and
          more inviting workspace.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mt-6 text-center">
          Why Choose Clean Care?
        </h2>

        {/* List of Features */}
        <ul className="mt-4 space-y-4 text-white">
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">
                Comprehensive Cleaning Solutions –{" "}
              </span>
              From commercial spaces to deep cleaning, we do it all.
            </span>
          </li>

          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Trained & Certified Staff – </span>
              Our team consists of highly skilled professionals.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Eco-Friendly Products – </span>
              We use safe and effective cleaning solutions.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Affordable Pricing – </span>
              High-quality cleaning services at competitive rates.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Customer Satisfaction – </span>
              Your satisfaction is our priority.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Fast & Efficient Service – </span>
              We value your time and work quickly without compromising quality.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Pet & Child Safe – </span>
              Our products are non-toxic and safe for families.{" "}
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Licensed & Insured – </span>
              Fully certified for your peace of mind.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">Advanced Equipment – </span>
              Using modern tools for efficient and effective cleaning.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-300">
              <span className="font-bold">24/7 Availability – </span>
              We are here for you any time, day or night.
            </span>
          </li>
        </ul>
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
                src="https://drive.google.com/uc?export=view&id=1tt8-RNwpqAoVanNFAW_JKeMoffIl8bbR"
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
        <div className="bg-gray-300 p-4 md:p-8 flex flex-col md:grid md:grid-cols-2 items-center text-center md:text-left">
          {/* Image on top in small screens, right in large screens */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 mb-4 md:mb-0">
            <Image
              src="https://drive.google.com/uc?export=view&id=1PTLU1QUaCpsloXTxhrzxhHmB_HIlUoP2"
              alt="Background"
              width={630}
              height={370}
              className="w-full h-auto max-w-[600px] rounded-md"
            />
          </div>

          {/* Text and Button in the center for small screens, left for large screens */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <span className="text-3xl md:text-4xl font-bold mb-4 text-black cursor-pointer">
              Do Your Part to Stop the Spread of Illnesses
            </span>
            <p className="text-md text-black cursor-pointer mb-4">
              Read about our cleaning and disinfectant solutions for COVID-19
            </p>
            <Button className="bg-[#0f172a] text-white px-6 py-3 rounded-md font-semibold">
              Learn More
            </Button>
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
  );
};

export default page;
