import React from "react";
import aboutImage from "../assets/img/about.png";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:px-20 px-6 pt-24 lg:pt-16 gap-10 bg-gradient-to-b from-white to-gray-50">
      {/* Text Section */}
      <div className="w-full lg:w-3/5 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left">
          About <span className="text-teal-500">The Project</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 text-justify lg:text-left">
          The device uses <span className="font-semibold text-teal-600">eye tears</span> as a non-invasive bio-specimen to measure blood glucose levels. 
          A chemical reaction is triggered in a reaction cell using tear fluid, and the time taken to form the end product (<em>reaction end time</em>) 
          is monitored by an integrated <span className="font-semibold">optical transceiver</span>. This end time correlates directly with blood glucose concentration.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 text-justify lg:text-left">
          The sensor system was calibrated and characterized using standard glucose solutions. Key performance metrics — including 
          <strong> repeatability</strong>, <strong> sensitivity</strong>, <strong> accuracy</strong>, and <strong>resistance to interfering ions</strong> — 
          were evaluated and found clinically suitable.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 text-justify lg:text-left">
          Real-time tests with blood samples demonstrated that the device is a reliable alternative to conventional invasive glucose 
          monitoring methods, providing a painless and efficient solution for diabetic care.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/5 flex justify-center">
        <div className="relative group max-w-md">
          <img
            className="rounded-xl shadow-lg border border-gray-200 object-contain max-h-[420px] transform transition-transform duration-300 group-hover:scale-105"
            src={aboutImage}
            alt="About"
          />
          <div className="absolute inset-0 rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
