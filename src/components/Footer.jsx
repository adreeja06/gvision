import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">GlucoVision</h1>
          <p className=" text-sm">
          TEAR-GUIDED NON-INVASIVE BLOOD GLUCOSE MONITORING USING OPTICAL INTELLIGENCE
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Team Members
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Easy Test Setup
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Easy Results
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              
Heritage Institute of Technology
Chowbaga Road, Anandapur
PO:East Kolkata Township, Kolkata 700 107
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              adreejamahto@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +91 9163605787
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> HITK team members </span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
