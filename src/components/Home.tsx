"use client";

import Image from "next/image";
import Cards from "@/components/CardsSectin";
import MotionFrame from "@/components/MotionDiv";
import servicesData from "@/app/data/services";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import Button from "@/components/Button";
import { Collapse, Divider } from "antd";
import Footer from "@/components/Footer";
import Link from "next/link";
import HomeHeader from "@/components/Home_header";
import Head from "next/head";

const HomePage = () => {
  const [activeKey, setActiveKey] = useState("1");
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

  const customers = [
    {
      id: 1,
      text: "Clean Care provided exceptional cleaning services for my home. Their team was punctual, professional, and left my house spotless!",
      name: "Ali Khan",
      country: "Pakistan",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 2,
      text: "I booked Clean Care for office cleaning, and I am extremely satisfied. The staff was well-trained, and the results exceeded my expectations!",
      name: "Fatima Ahmed",
      country: "Pakistan",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 3,
      text: "Highly recommend Clean Care! They deep-cleaned my carpets and sofas, making them look brand new. Excellent service!",
      name: "Usman Raza",
      country: "Pakistan",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 4,
      text: "Clean Care's team did an amazing job cleaning my apartment. They were thorough, friendly, and used high-quality products. I will definitely book again!",
      name: "Ayesha Malik",
      country: "Pakistan",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 5,
      text: "I needed urgent cleaning before an event, and Clean Care delivered perfectly. They worked efficiently and left the space spotless. Great service!",
      name: "Bilal Saeed",
      country: "Pakistan",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
    {
      id: 6,
      text: "Professional, reliable, and affordable! Clean Care has been my go-to cleaning service for over a year now. I highly recommend them!",
      name: "Nadia Sheikh",
      country: "Pakistan",
      rating: "images/svgs/fivestar.svg",
      profile: "images/svgs/landingprofile.svg",
    },
  ];

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Clean Care Janitorial Services",
    image: "https://www.cleancare.pk/images/cleancare-hero.jpg",
    description:
      "Clean Care provides professional janitorial and cleaning services across Lahore and Pakistan. We specialize in commercial cleaning, office cleaning, residential cleaning, deep cleaning, carpet cleaning, and sanitization services.",
    url: "https://www.cleancare.pk",
    telephone: "+92-XXX-XXXXXXX",
    email: "info@cleancare.pk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.5804",
      longitude: "74.3587",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    serviceArea: [
      {
        "@type": "City",
        name: "Lahore",
      },
      {
        "@type": "Country",
        name: "Pakistan",
      },
    ],
    services: [
      "Commercial Cleaning Services",
      "Office Cleaning",
      "Residential Cleaning",
      "Deep Cleaning Services",
      "Carpet Cleaning",
      "Floor Cleaning",
      "Window Cleaning",
      "Sanitization Services",
      "Disinfection Services",
      "Janitorial Services",
    ],
    sameAs: [
      "https://www.facebook.com/cleancarepk",
      "https://www.instagram.com/cleancarepk",
      "https://www.linkedin.com/company/cleancarepk",
      "https://twitter.com/cleancarepk",
    ],
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>
          Clean Care Janitorial Services | Professional Cleaning Company Lahore
        </title>
        <meta
          name="description"
          content="Clean Care provides professional janitorial and cleaning services across Lahore and Pakistan. Trusted commercial, residential, office cleaning with trained staff and eco-friendly products. Available 24/7."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cleancare.pk/" />

        {/* Language and Charset */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en-PK" />
        <html lang="en" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="janitorial services Lahore, cleaning services Pakistan, clean care, office cleaning Lahore, commercial cleaning, residential cleaning, deep cleaning services, carpet cleaning Lahore, sanitization services, professional cleaning company, housekeeping services, floor cleaning, window cleaning, disinfection services Pakistan"
        />

        {/* Author and Publisher */}
        <meta name="author" content="Clean Care Janitorial Services" />
        <meta name="publisher" content="Clean Care Pakistan" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Clean Care Janitorial Services | Professional Cleaning Lahore Pakistan"
        />
        <meta
          property="og:description"
          content="Professional janitorial and cleaning services in Lahore and Pakistan. Commercial, office, residential cleaning with trained staff. Safe, reliable, and eco-friendly cleaning solutions."
        />
        <meta
          property="og:image"
          content="https://www.cleancare.pk/images/cleancare-hero.jpg"
        />
        <meta property="og:url" content="https://www.cleancare.pk/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Clean Care Janitorial Services"
        />
        <meta property="og:locale" content="en_PK" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Clean Care Janitorial Services | Professional Cleaning Lahore"
        />
        <meta
          name="twitter:description"
          content="Clean Care - Premium janitorial and cleaning services for offices, homes, and commercial spaces in Lahore and Pakistan. Available 24/7."
        />
        <meta
          name="twitter:image"
          content="https://www.cleancare.pk/images/cleancare-hero.jpg"
        />
        <meta name="twitter:site" content="@cleancarepk" />
        <meta name="twitter:creator" content="@cleancarepk" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#10B981" />
        <meta name="msapplication-TileColor" content="#10B981" />
        <meta
          name="application-name"
          content="Clean Care Janitorial Services"
        />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="geo.position" content="31.5804;74.3587" />
        <meta name="ICBM" content="31.5804, 74.3587" />

        {/* Mobile App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Clean Care" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics - Replace with your tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
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
          <a
            href="tel:+923024199048"
            className="text-base md:text-2xl lg:text-3xl font-semibold text-white whitespace-nowrap"
          >
            +92 302 4199048
          </a>
        </div>

        <HomeHeader title="Home" />

        <div>
          <Cards />
        </div>
        <div className="mb-[10px]">
          <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
              <Image
                src="https://drive.google.com/uc?export=view&id=1Vs2vhlEI1bRBynDdqtmurDhhCoRJIhsK"
                alt="Background"
                width={500}
                height={370}
                className="w-full h-full md:w-[600px] md:h-[370px] rounded-md"
              />
            </div>

            <div className="col-span-12 md:col-span-6 text-left">
              <span className="text-2xl md:text-3xl font-bold">
                Clean Care - Trusted Cleaning Services in Pakistan Since 2020
              </span>
              <p className="my-4 text-sm md:text-xl  text-gray-600">
                Spruce up your local business, office, hotel, store, warehouse,
                or school with commercial cleaning services from Dallas
                Janitorial Services.
              </p>
              <p className="my-4 text-sm md:text-xl  text-gray-600">
                We know how difficult it is to keep your business running
                smoothly and efficiently. So the last thing you want to think
                about is keeping the place clean. Let our team of dedicated
                professionals sweat the small stuff for you. We&apos;ll keep
                your workspace clean, your restrooms sanitized, and your windows
                clear.
              </p>
              <p className="my-4 text-sm md:text-xl  text-gray-600">
                Whether it&apos;s onsite porter services, after-hours cleanings
                or monthly carpet cleanings, Dallas Janitorial provides every
                service you need to maintain a clean, safe and healthy
                workspace.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[370px] w-full">
          <Image
            src="https://drive.google.com/uc?export=view&id=1rm2ZxIqzeynAnEryFSa63F-3w_Uahwhw"
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
              Trust Clean Care Services to take care of all your commercial
              cleaning needs. We provide the following services:
            </span>
          </div>
        </div>
        <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1UYqVB6n0v1qE-sSKg6BeWaSOk8hDN-OP"
              alt="Background"
              width={530}
              height={370}
              className="w-full h-full md:w-[600px] md:h-[370px] rounded-md "
            />
          </div>

          <div className="col-span-12 md:col-span-6 text-left">
            <Collapse
              activeKey={activeKey}
              onChange={(key) =>
                setActiveKey(Array.isArray(key) ? key[0] : key)
              }
              accordion
              expandIcon={() => null}
              bordered={false}
              className="border-b-0"
              items={servicesData.map((service) => ({
                key: service.id,
                label: (
                  <div
                    className="font-bold text-xl md:text-3xl"
                    style={{
                      borderLeft: "3px solid gray",
                      padding: "10px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    {service.name}
                  </div>
                ),
                children: (
                  <div className="text-sm md:text-lg pl-2 text-white">
                    {service.description.split("\n").slice(0, 2).join(" ")}...
                    <br />
                    <Link
                      href={`/service/${service.id}`}
                      className="text-blue-500 cursor-pointer"
                    >
                      Read More &gt;&gt;
                    </Link>
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
                At Clean Care Services, protecting your team, our crews and the
                public from harmful viruses and bacteria is our top priority.
              </p>
              <p className="my-4 text-sm md:text-xl  text-gray-600">
                We stay up-to-date on the latest news and recommendations from
                the CDC, EPA, World Health Organization (WHO) and Occupational
                Safety and Health Administration (OSHA). Our disinfectant and
                cleaning methods are based on the cleaning protocols, safety
                measures and pathogen control recommended by these expert
                organizations.
              </p>
              <p className="my-4 text-sm md:text-xl  text-gray-600">
                For more information on keeping your business safe and
                productive, schedule a call when it&apos;s convenient for you.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
              <Image
                src="https://drive.google.com/uc?export=view&id=15X9Nz3nW2wLZxl76HhQ4DbUKhGgfsZDw"
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
            src="https://drive.google.com/uc?export=view&id=1rm2ZxIqzeynAnEryFSa63F-3w_Uahwhw"
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
              Schedule a call when it&apos;s convenient for you.
            </span>
            <Link href="/contact">
              <Button
                type="button"
                className="w-[200px] md:w-[245px] h-[48px] md:h-[56px] text-sm md:text-lg rounded-sm mt-10 items-center flex justify-center py-2 px-4 bg-[#0f172a] text-white hover:bg-blue-700"
              >
                Request a Cleaning Quote
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <div className="mx-3 lg:mx-20 md:ml-[30px] mt-10 px-4 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between">
              <span className=" flex text-xl md:text-[40px] font-semibold">
                What Our Customers Say!
              </span>
              <div className="flex justify-center gap-1">
                <Image
                  src="/svgs/prev-button.svg"
                  alt="left"
                  className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  height={50}
                  width={50}
                  onClick={scrollToPrevSlide}
                />
                <Image
                  src="/svgs/next-button.svg"
                  alt="right"
                  className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  height={50}
                  width={50}
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
                      <FaUserCircle
                        className="text-gray-600 bg-white rounded-full border border-gray-300 p-1 shadow-md"
                        size={50}
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
          <div className="bg-gray-300 p-4 md:p-8 flex flex-col md:grid md:grid-cols-2 items-center text-center md:text-left">
            <div className="flex justify-center md:justify-end order-1 md:order-2 mb-4 md:mb-0">
              <Image
                src="https://drive.google.com/uc?export=view&id=1PTLU1QUaCpsloXTxhrzxhHmB_HIlUoP2"
                alt="Background"
                width={630}
                height={370}
                className="w-full h-auto max-w-[600px] rounded-md"
              />
            </div>

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
    </>
  );
};

export default HomePage;
