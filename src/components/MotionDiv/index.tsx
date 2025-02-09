"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import servicesData from "@/app/data/services";

// TypeScript interface for imageData items
interface ImageItem {
  src: string;
  heading: string;
}

// Props type for AnimatedGrid component
interface AnimatedGridProps {
  imageData: ImageItem[];
}

// Parent animation (for container)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delays each child animation
  },
};

// Child animation (for each image)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ imageData }) => {
  return (
    <motion.div
      className="mt-10 mb-10 md:mb-20 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center"
        variants={itemVariants}
      >
        <span className="font-semibold text-2xl md:text-5xl">
          Local Industries and Organizations We Serve
        </span>
      </motion.div>

      {imageData.map((item, index) => (
        <motion.div
          key={index}
          className="col-span-1 flex flex-col justify-center items-center"
          variants={itemVariants} // Apply animation to each item
        >
          <div className="relative w-full">
            <Image
              src={item.src}
              alt="Image"
              width={500}
              height={200}
              className="rounded-md transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
          <span className="text-center font-semibold text-xl sm:text-2xl mt-3">
            {item.heading}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedGrid;
