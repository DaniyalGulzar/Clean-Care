import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

function HomeHeader({ title }: { title: string }) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="https://drive.google.com/uc?export=view&id=1ou3HnzyHRKEJgGULV-gWwk7QNvHrsk9G"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full opacity-80 transition-all duration-700 hover:opacity-90"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent mix-blend-multiply"></div>

      <div className="fixed top-10 md:top-16 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row  items-center md:items-start justify-between w-full"
        >
          {/* Left Side Text Content */}
          <div className="w-full md:w-1/2 lg:w-1/2 text-white text-left mt-[40px] md:mt-[0px] space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Clean Care is one of the highest-rated and most trusted commercial
              cleaning services in the Pakistan.
            </h2>
            <p className="text-lg md:text-xl">
              We provide a safe, clean workspace for you and your customers
              through the consistent delivery of our first-class customer
              service and strict attention to detail.
            </p>
          </div>

          {/* Right Side Motion Div */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center md:justify-end mt-[30px] md:mt-[50px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Glassmorphism Background for Text */}
              <div className="absolute inset-0 -m-6 bg-blue-300/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"></div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative px-12 py-6 text-4xl md:text-6xl m-[-10px] md:m-0 lg:text-7xl font-bold text-center"
              >
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
                    {title}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-700/70 to-blue-400/70 backdrop-blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeHeader;
