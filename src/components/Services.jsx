import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-white" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-white" />;
  const icon3 = <FaHeartbeat size={35} className="text-white" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-yellow-200">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Here are the various facilities we provide.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Easy Test Setup: Allows individuals to perform tests conveniently in their own homes."
        />
        <ServicesCard
          icon={icon2}
          title="Cost Effective: Focuses on affordability without compromising on quality, making essential monitoring tools and services accessible to everyone."
        />
        <ServicesCard
          icon={icon3}
          title="Immediate Results: With our diabetes monitoring system, individuals can obtain immediate results, empowering them to make timely decisions regarding their health."
        />
      </div>
    </div>
  );
};

export default Services;
