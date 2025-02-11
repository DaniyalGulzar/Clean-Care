"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import servicesData from "../../data/services";
import HomeHeader from "@/components/Home_header";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";

const ServicePage = () => {
  const params = useParams();
  const id = params?.id;

  if (!id) {
    return (
      <div className="text-center text-white text-3xl mt-10">
        Service Not Found
      </div>
    );
  }

  const service = servicesData.find((s: any) => s.id === id);

  if (!service) {
    return (
      <div className="text-center text-white text-3xl mt-10">
        Service Not Found
      </div>
    );
  }

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of commercial cleaning services do you offer?",
      answer:
        "We offer a wide range of cleaning services, including commercial carpet cleaning, sanitation services, restroom cleaning, post-renovation cleaning, day porter services, window cleaning, and specialized veterinary & animal cleaning services. Our goal is to keep your business environment spotless, safe, and hygienic.",
    },
    {
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Yes, we prioritize eco-friendly and non-toxic cleaning solutions that are safe for employees, customers, and pets. Our cleaning methods are designed to reduce environmental impact while maintaining the highest standards of cleanliness.",
    },
    {
      question: "How often should commercial carpets be cleaned?",
      answer:
        "The frequency of carpet cleaning depends on foot traffic and usage. High-traffic areas like offices, hotels, and retail stores should have professional carpet cleaning every 3-6 months to maintain their appearance and hygiene.",
    },
    {
      question: "What is included in your restroom cleaning service?",
      answer:
        "Our restroom cleaning service includes deep sanitation of toilets, sinks, mirrors, and high-touch surfaces. We also remove odors, restock essential supplies, and ensure a fresh and hygienic restroom environment for employees and visitors.",
    },
    {
      question: "Do you offer emergency cleaning services?",
      answer:
        "Yes, we provide emergency cleaning services for unexpected spills, biohazards, or urgent sanitation needs. Our team is available for quick response to ensure your workplace remains clean and safe at all times.",
    },
    {
      question: "What is post-renovation cleaning, and why is it necessary?",
      answer:
        "Post-renovation cleaning involves removing dust, debris, and construction residue from newly renovated spaces. This service ensures your area is move-in ready, free from dust buildup, and completely clean for a fresh start.",
    },
    {
      question: "How does your coronavirus cleaning service work?",
      answer:
        "Our coronavirus cleaning service uses EPA-approved disinfectants and electrostatic spraying to eliminate viruses from high-touch surfaces. We follow strict sanitation protocols to help businesses maintain a safe and virus-free environment.",
    },
    {
      question: "Do you provide window cleaning for high-rise buildings?",
      answer:
        "Yes, we offer professional window cleaning for both ground-level and high-rise buildings. Our team uses safe and effective techniques to remove dirt, streaks, and smudges, leaving your windows crystal clear.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve various industries, including corporate offices, retail stores, healthcare facilities, hotels, warehouses, veterinary clinics, and educational institutions. Our cleaning solutions are tailored to meet industry-specific needs.",
    },
    {
      question: "How do I schedule a cleaning service?",
      answer:
        "You can schedule a cleaning service by contacting us via phone, email, or our website. We offer flexible scheduling to accommodate your business hours and minimize disruptions.",
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

      <HomeHeader title="Services" />

      <div className="mb-[10px]">
        <div className="my-10 grid grid-cols-12 gap-4  px-6 md:px-8 items-center">
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mr-0 md:mr-[50px] ">
            <Image
              src={service.image}
              alt="Background"
              width={530}
              height={370}
              className="w-full h-full md:w-[600px] md:h-[370px] rounded-md"
            />
          </div>

          <div className="col-span-12 md:col-span-6 text-left">
            <span className="text-2xl md:text-3xl font-bold">
              {service.name}
            </span>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              {service.description}
            </p>
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              We know how difficult it is to keep your business running smoothly
              and efficiently. So the last thing you want to think about is
              keeping the place clean. Let our team of dedicated professionals
              sweat the small stuff for you. We&apos;ll keep your workspace
              clean, your restrooms sanitized, and your windows clear.
            </p>
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

      {/* /// */}
      <div className=" pt-7 pb-[80px] mx-3">
        <div className="container mx-auto max-w-[1020px]">
          <h3 className="text-[40px] font-bold text-white mb-[48px] text-center">
            Frequently Asked Questions
          </h3>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="flex justify-center my-4">
                <div
                  className="faq-card shadow-lg p-8 bg-blue-400 text-left cursor-pointer font-bold w-full"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-black">{faq.question}</span>
                    <span className="ml-4">
                      {openFAQ === index ? (
                        <FaMinus className="text-black" />
                      ) : (
                        <FaPlus className="text-black" />
                      )}
                    </span>
                  </div>
                  {openFAQ === index && (
                    <div className="mt-2 text-left md:text-justify text-base  text-white font-normal w-[80%]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
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
            {/* <Button className="bg-[#0f172a] text-white px-6 py-3 rounded-md font-semibold">
              Learn More
            </Button> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;
