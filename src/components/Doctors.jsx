import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Import images
import doc1 from "../assets/img/doc1.jpg"; // Dipjyoti Kodali
import doc2 from "../assets/img/doc2.jpg"; // Raunak Das
import doc3 from "../assets/img/doc3.jpeg"; // Adreeja Mahato
import doc4 from "../assets/img/doc4.jpg"; // Snehel Kar

const TeamMembers = () => {
  const data = [
    {
      img: doc1,
      name: "Dipjyoti Kodali",
    },
    {
      img: doc2,
      name: "Raunak Das",
    },
    {
      img: doc3,
      name: "Adreeja Mahato",
    },
    {
      img: doc4,
      name: "Snehel Kar",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Meet Our Team Members
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Get to know the talented individuals who make up our hackathon team.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((member, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-56 rounded-t-xl w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{member.name}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamMembers;
