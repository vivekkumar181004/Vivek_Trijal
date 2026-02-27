import React, { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {

  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/hero/get");
      setHero(res.data.result);
    } catch (error) {
      console.log("Hero fetch error:", error);
    }
  };

  return (
    <div className="hero">
      <section className="relative w-full h-[90vh] overflow-hidden">
        {hero && hero.type === "image" && (
          <img
            src={`http://localhost:5000/hero/${hero.media}`}
            alt="hero"
            className="w-full h-full object-cover"
          />
        )}

        {hero && hero.type === "video" && (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source
              src={`http://localhost:5000/hero/${hero.media}`}
              type="video/mp4"
            />
          </video>
        )}


        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight max-w-5xl">
              SUPPLY, MANUFACTURING, TESTING AND COMMISSIONING OF HT AND LT
              PANELS ALONG WITH EPC SERVICES
            </h1>

            <div className="mt-10 max-w-xl ml-auto text-right hidden md:block">
              <h2 className="text-3xl font-bold">
                We work for <span className="text-red-500">'excellence'</span>
              </h2>
              <p className="mt-3 text-lg">
                By providing customized solutions, products & service that best
                satisfies the requirements of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;