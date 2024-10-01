import React from "react";
import Button from "../layouts/Button";
import homeImage from "../assets/img/home.jpg"; // Import the image

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover opacity-90"
      style={{ backgroundImage: `url(${homeImage})` }} // Use the imported image
    >
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight text-yellow">
          TEAR-GUIDED NON-INVASIVE BLOOD GLUCOSE MONITORING USING OPTICAL INTELLIGENCE.
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <Button title="Check your past records here" />
      </div>
    </div>
  );
};

export default Home;
