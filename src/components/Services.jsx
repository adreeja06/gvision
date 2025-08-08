import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../layouts/Button";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={28} className="text-white" />;
  const icon2 = <MdHealthAndSafety size={28} className="text-white" />;
  const icon3 = <FaHeartbeat size={28} className="text-white" />;

  const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl w-full lg:w-1/3">
      <div className="bg-teal-400 w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href="#" className="text-teal-500 hover:underline text-sm">
        Learn more
      </a>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-gradient-to-b from-yellow-100 to-white">
      {/* Heading & Button */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-700">
            Here are the various facilities we provide.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6 pt-14">
        <ServiceCard
          icon={icon1}
          title="Easy Test Setup"
          description="Allows individuals to perform tests conveniently in their own homes."
        />
        <ServiceCard
          icon={icon2}
          title="Cost Effective"
          description="Focuses on affordability without compromising on quality, making essential monitoring tools and services accessible to everyone."
        />
        <ServiceCard
          icon={icon3}
          title="Immediate Results"
          description="With our diabetes monitoring system, individuals can obtain immediate results, empowering them to make timely decisions regarding their health."
        />
      </div>
    </div>
  );
};

export default Services;
