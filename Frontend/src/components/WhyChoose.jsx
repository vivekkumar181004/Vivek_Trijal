import React from 'react';
import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.png";
import why4 from "../assets/why4.png";
import cement from "../assets/cement.jpg";

const WhyChoose = () => {

    const whychoose = [
        {
            title: "Smart Technology",
            des: "Smart technology integration for efficient solutions",
            image: why1
        },
        {
            title: "Certified Expert",
            des: "Certified experts ensuring quality and reliability",
            image: why2
        },
        {
            title: "Eco Technology",
            des: "Eco-friendly technology for sustainable practices",
            image: why3
        },
        {
            title: "Accessibility",
            des: "24/7 support ensuring continuous assistance and peace of mind",
            image: why4
        }
    ];

    return (
        <div>
            <section className="relative py-20">
                <img
                    src={cement}
                    alt="why choose"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-green-900/80"></div>

                <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
                    <h2 className="text-5xl font-semibold mb-6">
                        WHY CHOOSE <span className="text-red-400">US</span>
                    </h2>
                    <p className='text-3xl'>At trijal electrikals our unparalleled expertise in electrical panels sets us apart, making us the top choice for those seeking exceptional quality and relatability</p>

                    <div className="grid md:grid-cols-4 gap-8 mt-12">
                        {whychoose.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center hover:scale-105 transition duration-300"
                            >

                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-14 mx-auto mb-4"
                                />

                                {/* Title */}
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm mt-3 text-gray-200">
                                    {item.des}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WhyChoose;
