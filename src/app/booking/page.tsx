"use client";

import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

import HomeHeader from "@/components/Home_header";
import Head from "next/head";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "emailjs-com";

const Booking = () => {
  const [formData, setFormData] = useState<{
    email: string;
    phone: string;
    address: string;
    services: string[];
  }>({
    email: "",
    phone: "",
    address: "",
    services: [],
  });
  const services = [
    "Deep Cleaning",
    "Residential Cleaning",
    "Commercial Cleaning",
    "Apartment Cleaning",
    "Post Construction Cleaning",
    "Move In Cleaning",
    "Pre or Post Event Cleaning",
    "Janitorial Services",
    "Floor Cleaning",
    "Kitchen Cleaning",
    "Toilet Cleaning",
    "Window Cleaning",
    "Solar Panel Cleaning",
    "Water Tank Cleaning",
    "Sofa Cleaning",
    "Carpet Cleaning",
    "Mattress Cleaning",
    "Curtain Cleaning",
    "Blinds Cleaning",
    "Pest Control",
    "Cockroach Control",
    "Rodent Control",
    "Mosquito - Dengue Control",
    "Fumigation",
    "Disinfection and Sanitisation",
    "Bed Bug Control",
  ];
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const templateParams = {
      user_email: formData.email,
      phone: formData.phone,
      address: formData.address,
      services: formData.services.join(", "),
    };

    emailjs
      .send(
        "service_lk758w9", // Replace with your EmailJS Service ID
        "template_wcfmja9", // Replace with your EmailJS Template ID
        templateParams,
        "ve7a3VEw1-pN7t_DI" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Your booking details have been sent successfully!");
          setFormData({ email: "", phone: "", address: "", services: [] });
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T60RRFF425"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T60RRFF425');
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
          <span className="text-base md:text-2xl lg:text-3xl font-semibold text-white whitespace-nowrap">
            +92(3024199048)
          </span>
        </div>

        <HomeHeader title="Booking" />

        <div className="flex justify-center items-center px-4 py-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl"
          >
            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your Cell Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Services */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Required Service <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 max-h-72 overflow-y-auto border border-gray-200 rounded-md p-3">
                {services.map((service, index) => (
                  <label
                    key={index}
                    className="flex items-center text-gray-700 space-x-2"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="accent-indigo-600 w-4 h-4"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#0f172a] text-white font-semibold px-6 py-2 rounded hover:bg-[#1e293b] transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Booking;
