import React from "react";
import aboutImage from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">About The Project</h1>
        <p className="text-justify lg:text-start">
          We use eye tears as a bio-specimen. A chemical reaction using eye tears is initiated in a reaction cell. The reaction takes a certain amount of time (end time) to produce a colorless compound which is detected by an optical transceiver, attached to the cell. End time is a function of glucose concentration in blood. Sensor was calibrated and characterized using standard glucose solutions. Several performance metrics, including repeatability, sensitivity, accuracy, and interaction with interfering ions, were examined and found to be clinically appropriate. The device was tested with real-time blood samples and found satisfactory replacement of the present invasive techniques.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img className="rounded-lg" src={aboutImage} alt="About" />
      </div>
    </div>
  );
};

export default About;
