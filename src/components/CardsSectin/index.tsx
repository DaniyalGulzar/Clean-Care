import Image from "next/image";
import React from "react";
import { FaEnvelope, FaHeadset, FaPhone, FaUser } from "react-icons/fa";

const cardsSection = () => {
  return (
    <div>
      <div className="bg-blue-500 p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Div */}

          <div className=" ml-0 md:ml-0 lg:ml-28">
            {/* Top text */}
            <div className="text-left mt-2 md:mt-10">
              <p className=" text-2xl md:text-5xl font-bold text-white">
                Professional Service
              </p>
              <p className="text-2xl md:text-5xl text-white">You Can Trust.</p>
            </div>

            <div className="flex justify-center md:justify-left mt-0 md:mt-10 ">
              <div className="bg-white  rounded-md shadow-lg flex flex-col items-start px-6 py-8 w-full ">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                  {/* Image Container */}
                  <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                    <Image
                      src="https://drive.google.com/uc?export=view&id=1CfGh7kGCos62rEdWuFLwR0hdXnZBdnuA"
                      alt="Background"
                      width={70}
                      height={70}
                      className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-left">
                    <p className="text-center md:text-left font-semibold text-black text-2xl md:text-3xl mb-4">
                      Reduced Turnover
                    </p>
                    <ul className="pl-4">
                      <li className="text-sm md:text-xl   text-gray-600 relative pl-2 before:content-['<'] before:absolute before:left-[-20px] before:top-0">
                        We Have One of the Lowest Turnover Rates in the
                        Industry.
                      </li>
                      <li className="text-sm md:text-xl text-gray-600 relative pl-2 before:content-['<'] before:absolute before:left-[-20px] before:top-0">
                        Less onboarding, recruitment and training means bigger
                        savings for you.
                      </li>
                      <li className="text-sm md:text-xl text-gray-600 relative pl-2 before:content-['<'] before:absolute before:left-[-20px] before:top-0">
                        Our high employee morale leads to increased production.
                      </li>
                      <li className="text-sm md:text-xl text-gray-600 relative pl-2 before:content-['<'] before:absolute before:left-[-20px] before:top-0">
                        Better cleaning improves your customer service and
                        customer experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Div */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-2 md:my-20">
            {[
              {
                id: 1,
                heading: "100% Satisfaction Guarantee",
                description: "If it’s not right, we’ll fix it.",
                image:
                  "https://drive.google.com/uc?export=view&id=1YIFC7CdMR4sXDI29kkD_uIf9VeLByiAa",
              },

              {
                id: 2,
                heading: "Quality & Vetted Staff",
                description: "We’re passionate about commercial cleaning.",
                image:
                  "https://drive.google.com/uc?export=view&id=1dv4qBCr5-14axCtN25aIfY8GWRQLOn00",
              },
              {
                id: 3,
                heading: "Customized Services",
                description: "Pick the cleaning services you need.",
                image:
                  "https://drive.google.com/uc?export=view&id=1x799t06pPPV_uXwHTsqsUVpsIGED6K37",
              },
              {
                id: 4,
                heading: "Personal Attention",
                description: "Get the right team for your site.",
                image:
                  "https://drive.google.com/uc?export=view&id=1RfwBMraZnJ2lGtIngxxBNF77aVExZEub",
              },
            ].map((card) => (
              <div
                key={card.id}
                className="bg-white w-full  px-6 py-8 rounded-md shadow-lg flex flex-col items-center text-center h-full"
              >
                {/* Icon */}
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center rounded-full bg-gray-300 mb-4">
                  <Image
                    src={card.image}
                    alt={card.heading}
                    width={70}
                    height={70}
                    className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full"
                  />
                </div>

                {/* Heading */}
                <span className="text-xl md:text-2xl text-black font-semibold mb-2">
                  {card.heading}
                </span>

                {/* Description */}
                <span className="text-gray-600 text-sm md:text-xl ">
                  {card.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardsSection;
