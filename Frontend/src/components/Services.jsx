// import React, { useState } from "react";

// // import img1 from "../assets/prisma.png";
// // import img2 from "../assets/lv.png";
// // import img3 from "../assets/consultancy.png";
// // import img4 from "../assets/epc.png";
// import whoWeAre from "../assets/whoWeAre.jpg";

// const HomeServices = () => {

//   const services = [
//     {
//       title: "Schneider Prisma Panels",
//       image: whoWeAre,
//       description:
//         "Trijal Elektrikals is excited to announce our new partnership with Schneider Electric. We deliver premium Prisma IPM solutions with cutting-edge LV panel systems."
//     },
//     {
//       title: "LV Distribution & Control Products",
//       image: whoWeAre,
//       description:
//         "We provide advanced low voltage distribution and control panels ensuring safe, reliable, and energy-efficient operations for industries."
//     },
//     {
//       title: "Electric Consultancy",
//       image: whoWeAre,
//       description:
//         "Our expert consultancy services help industries optimize power systems, improve efficiency, and maintain regulatory compliance."
//     },
//     {
//       title: "EPC Service",
//       image: whoWeAre,
//       description:
//         "Complete Engineering, Procurement & Construction solutions for industrial electrical infrastructure projects."
//     }
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-20 bg-gray-100">

//       {/* Heading */}
//       <h2 className="text-4xl font-semibold text-center text-gray-700 mb-12">
//         INNOVATIVE TECHNOLOGIES SERVICES TO ENERGIZE SOCIETY
//       </h2>

//       {/* Buttons */}
//       <div className="flex flex-wrap justify-center gap-6 mb-16">
//         {services.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`px-6 py-3 border rounded transition 
//             ${activeIndex === index 
//               ? "bg-green-600 text-white border-green-600" 
//               : "bg-white text-gray-700 hover:bg-green-100"}`}
//           >
//             {item.title}
//           </button>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* Image */}
//         <div>
//           <img
//             src={services[activeIndex].image}
//             alt="service"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text */}
//         <div>
//           <h3 className="text-3xl font-semibold mb-6 text-gray-800">
//             {services[activeIndex].title}
//           </h3>

//           <p className="text-gray-600 leading-relaxed">
//             {services[activeIndex].description}
//           </p>

//           <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
//             Explore
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default HomeServices;

import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeServices = () => {

  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services/all"
      );
      setServices(res.data.result);
    } catch (error) {
      console.log("Service fetch error:", error);
    }
  };

  if (services.length === 0) {
    return (
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold text-gray-700 mb-6">
          Loading Services...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-100">

      {/* Heading */}
      <h2 className="text-5xl font-semibold text-center text-gray-700 mb-12">
        INNOVATIVE TECHNOLOGIES SERVICES TO ENERGIZE SOCIETY
      </h2>

      {/* Buttons */}
      <div className="text-xl font-bold flex flex-wrap justify-center gap-6 mb-16">
        {services.map((item, index) => (
          <button
            key={item._id}
            onClick={() => setActiveIndex(index)}
            className={`px-6 py-3 border rounded transition 
            ${activeIndex === index
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-900 hover:bg-green-100"}`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={`http://localhost:5000/services/${services[activeIndex].image}`}
            alt={services[activeIndex].title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">
            {services[activeIndex].title}
          </h3>

          <p className="text-xl text-gray-600 leading-relaxed">
            {services[activeIndex].description}
          </p>

          <button className="mt-8 text-xl bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
            Explore
          </button>
        </div>

      </div>

    </section>
  );
};

export default HomeServices;