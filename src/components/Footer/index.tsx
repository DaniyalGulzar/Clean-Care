import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import servicesData from "@/app/data/services";

function Footer() {
  const router = useRouter();
  const industries = [
    "Office",
    "Hospital and Medical",
    "Dental Office",
    "Construction",
    "Warehouses",
    "Bank",
    "Business Center",
    "Call Center",
    "Car Dealership",
    "Convention Center",
    "Federal Building",
    "Gym",
    "Hotel",
    "School",
    "Retail Store",
    "Veterinary & Animal",
  ];
  return (
    <>
      <div className="bg-[#0f172a]">
        <div className="flex justify-center py-[30px]">
          <Image
            src="https://drive.google.com/uc?export=view&id=1u7r2EpyzKdzIrwkJ9UfFLfmrNPqBK8y4"
            alt="Background"
            width={300}
            height={200}
            className="w-[200px] h-[150px] md:w-[300px] md:h-[200px] "
          />
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-4 md:mx-8 lg:mx-20 pb-10 border-b-2 border-[#ffffff]">
          <div className="w-full md:w-auto px-4">
            <h3 className="text-left text-[22px] text-[#ffffff] font-semibold">
              Clean care
            </h3>
            <ul className="space-y-[18px] text-left mt-4 list-none p-0 text-[#ffffff]">
              <li className="transition-transform transform hover:scale-105">
                Clean Care is one of the highest-rated and most trusted
                commercial cleaning services in the Pakistan. We provide a safe,
                clean workspace for you and your customers through the
                consistent delivery of our first-class customer service and
                strict attention to detail.
              </li>
              <li className="transition-transform transform hover:scale-105 mt-0 md:mt-20">
                <span className="font-bold text-xl">Contact Us </span>
                {/* <p>Clean Care</p> */}
                <p className="mt-3">Cavalary Ground Lahore Cantt (54810)</p>
                <span className="font-bold text-xl"> call us: </span>{" "}
                <span> +923024199408</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto px-4">
            <h3 className="text-left text-[22px] text-[#ffffff] font-semibold">
              Services
            </h3>
            <ul className="space-y-[18px] text-left mt-4 list-none p-0 text-[#ffffff]">
              {servicesData.map((service, index) => (
                <li
                  key={service.id}
                  className="transition-transform transform hover:scale-105"
                >
                  <Link href={`/service/${service.id}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto px-4">
            <h3 className="text-left text-[22px] text-[#ffffff] font-semibold">
              Industries
            </h3>
            <ul className="space-y-[18px] text-left mt-4 list-none p-0 text-[#ffffff]">
              {industries.map((industry, index) => (
                <li
                  key={index}
                  className="transition-transform transform hover:scale-105"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto px-4">
            <h3 className="text-left text-[22px] text-[#ffffff] font-semibold">
              SUPPORT
            </h3>
            <ul className="space-y-[18px] text-left mt-4 list-none p-0 text-[#ffffff]">
              <li className="transition-transform transform hover:scale-105">
                <Link href="/about" className="text-sm font-semibold">
                  About Us
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  FAQS
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Guidelines
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Media Mentions
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Accessibility
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto px-4">
            <h3 className="text-left text-[22px] text-[#ffffff] font-semibold">
              &nbsp;
            </h3>
            <ul className="space-y-[18px] text-left mt-4 list-none p-0 text-[#ffffff]">
              <li className="transition-transform transform hover:scale-105">
                <Link href="/privacy-policy" className="text-sm font-semibold">
                  Privacy Policy
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Terms of Services
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Terms & Conditions
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Cookies
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Tracking Policy
                </Link>
              </li>
              <li className="transition-transform transform hover:scale-105">
                <Link href="/coming-soon" className="text-sm font-semibold">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-4 md:mx-8 lg:mx-20 py-[44px]">
          <div className="text-base flex justify-center items-center lg:justify-start md:justify-start text-[#ffffff] font-normal">
            © 2025 Works Limited. All Rights Reserved.
          </div>
          <div className="gap-4 flex justify-center lg:justify-end md:justify-end items-center">
            <Link href="https://www.facebook.com" target="_blank">
              <Image
                className="transition-transform transform hover:scale-105 cursor-pointer"
                src="/svgs/facebook.svg"
                alt="Facebook logo"
                width={48}
                height={48}
              />
            </Link>

            <Link href="https://www.instagram.com" target="_blank">
              <Image
                className="transition-transform transform hover:scale-105 cursor-pointer"
                src="/svgs/insta.svg"
                alt="Instagram logo"
                width={48}
                height={48}
              />
            </Link>

            <Link href="https://www.twitter.com" target="_blank">
              <Image
                className="transition-transform transform hover:scale-105 cursor-pointer"
                src="/svgs/twitter.svg"
                alt="Twitter logo"
                width={48}
                height={48}
              />
            </Link>

            <Link href="https://www.linkedin.com" target="_blank">
              <Image
                className="transition-transform transform hover:scale-105 cursor-pointer"
                src="/svgs/linkedin.svg"
                alt="LinkedIn logo"
                width={48}
                height={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
