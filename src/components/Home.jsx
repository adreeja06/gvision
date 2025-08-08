import React from "react";
import homeImage from "../assets/img/home.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative w-full lg:w-4/5 space-y-6 mt-10">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug max-w-4xl">
          TEAR-GUIDED NON-INVASIVE BLOOD GLUCOSE MONITORING USING{" "}
          <span className="text-teal-400">OPTICAL INTELLIGENCE</span>.
          <br />
          Empowering Health Choices for a{" "}
          <span className="text-teal-300">Vibrant Life</span> You Can Trust.
        </h1>

        {/* Link Button */}
        <a
          href="https://drive.google.com/file/d/1mX9EkxF-MWSQFxFko1BOf-72bvsacHQJ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out inline-block"
        >
          Clinical Trials
        </a>
      </div>
    </div>
  );
};

export default Home;
