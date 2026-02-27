import React from "react";

import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
import client4 from "../assets/client-4.jpg";
import client5 from "../assets/client-5.jpg";
import client6 from "../assets/client-6.jpg";
// import client7 from "../assets/client-7.jpg";
import client8 from "../assets/client-8.jpg";
import client9 from "../assets/client-9.jpg";
import client10 from "../assets/client-10.jpg";
import client11 from "../assets/client-11.jpg";
import client12 from "../assets/client-12.jpg";


const ClientsSlider = () => {

    const logos = [
        client1, client2, client3, client4, client5, client6, client8, client9, client10, client11, client12
    ];

    return (
        <section className="py-16 bg-gray-200 overflow-hidden">

            <div className="max-w-8xl mx-auto px-28">

                <div className="relative w-full overflow-hidden">

                    <div className="flex animate-slide gap-16 w-max">

                        {/* Duplicate logos for infinite effect */}
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="client"
                                className="h-16 md:h-20 object-contain transition duration-300"
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ClientsSlider;