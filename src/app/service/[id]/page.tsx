"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import servicesData from "../../data/services";
import HomeHeader from "@/components/Home_header";
import { FaArrowRight } from "react-icons/fa";

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
            <p className="my-4 text-sm md:text-xl  text-gray-600">
              Whether it&apos;s onsite porter services, after-hours cleanings or
              monthly carpet cleanings, Dallas Janitorial provides every service
              you need to maintain a clean, safe and healthy workspace.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;
