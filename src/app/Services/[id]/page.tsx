"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import servicesData from "../../data/services";

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
      <div className="fixed top-14 md:top-16 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/myImages/bg_image.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full opacity-70"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent mix-blend-multiply"></div>

        {/* Service Details */}
        <div className="relative z-20 container mx-auto px-4 lg:px-8 flex flex-col items-center text-white">
          <h1 className="text-4xl font-bold">{service.name}</h1>
          <p className="text-lg mt-4 max-w-2xl text-center">
            {service.description}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;
