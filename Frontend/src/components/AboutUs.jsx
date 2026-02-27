import React, { useState, useEffect } from "react";

import img1 from "../assets/ab1.jpg";
import img2 from "../assets/ab2.jpg";
import img3 from "../assets/ab3.jpg";
import img4 from "../assets/ab4.jpg";
import img5 from "../assets/ab5.jpg";

const AboutUs = () => {

  const images = [img1, img2, img3, img4, img5];

  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-semibold mb-6 text-gray-700">
            ABOUT US
          </h2>

          <h3 className="text-2xl font-semibold mb-4">
            Delivering Precision, Quality, and Expertise to Illuminate Your Vision.
          </h3>

          <p className="text-xl text-gray-600 leading-relaxed">
            Trijal Electrikals Pvt. Ltd., headquartered in Faridabad, Haryana, and certified with ISO 9001:2015 accreditation. Specializing in custom built power distribution panels and low tension switchgear, we ensure punctual delivery of top-tier products crafted with cutting-edge machinery. Under Mr. Som Sharma's adept leadership, boasting 30 years of expertise, we've emerged as a prominent name in electrical panel manufacturing, offering dependable solutions in control systems and services. Our comprehensive suite of services encompasses Manufacturing, Design & Engineering, and Erection & Commissioning, all driven by our unwavering commitment to excellence.
          </p>

          <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            Read More
          </button>
        </div>

        {/* Right Image Slider */}
        <div className="relative">

          <img
            src={images[activeIndex]}
            alt="about"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover transition-all duration-500"
          />

          {/* Bars */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 w-8 cursor-pointer transition-all duration-300 
                ${activeIndex === index
                    ? "bg-white w-12"
                    : "bg-gray-300 hover:bg-white"}`}
              ></div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;