import React, { useEffect, useState } from 'react';
import power from "../assets/power.jpg";
import sugar from "../assets/sugar.jpg";
import paper from "../assets/paper.jpg";
import railways from "../assets/railways.jpg";
import mining from "../assets/mining.png";
import it from "../assets/it.png";
import infrastructure from "../assets/infrastructure.jpg";
import cement from "../assets/cement.jpg";

const Industries = () => {

    const industries = [
        {
            title: "Power",
            image: power
        },
        {
            title: "Sugar",
            image: sugar
        },
        {
            title: "Paper",
            image: paper
        },
        {
            title: "Railways",
            image: railways
        },
        {
            title: "Mining",
            image: mining
        },
        {
            title: "IT",
            image: it
        },
        {
            title: "Infrastructure",
            image: infrastructure
        },
        {
            title: "Cement",
            image: cement
        }
    ];

    const statsData = [
        { label: "Happy Clients", value: 100 },
        { label: "Projects Delivered", value: 1000 },
        { label: "Number of Employees", value: 200 }
    ];

    const [count, setCount] = useState([0, 0, 0]);

    useEffect(() => {
        statsData.forEach((item, index) => {
            let start = 0;
            const timer = setInterval(() => {
                start += 5;   // increase speed
                setCount(prev => {
                    const newCount = [...prev];
                    newCount[index] = start;
                    return newCount;
                });
                if (start >= item.value) {
                     start = item.value; 
                    clearInterval(timer);
                }
            }, 30);
        });
    }, []);

    return (
        <div>
            <section className="py-20 bg-green-600 text-white text-center">
                <h2 className="text-5xl font-semibold mb-12">
                    INDUSTRIES WE ARE <span className="text-red-400">SERVING</span>
                </h2>

                <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                    {industries.map((item, i) => (
                        <div key={i} className="relative group overflow-hidden border-4 border-white rounded-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition">
                                <h3 className="text-white text-2xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-green-600 text-white text-center">
                <h2 className="text-5xl font-semibold mb-10">
                    Trijal Electrikals: Empowering your business with swift and <br /> impactful electrical solutions.
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {statsData.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-5xl font-bold">
                                {count[index]}+
                            </h3>
                            <p className="text-2xl mt-2">
                                {item.label}
                            </p>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
}

export default Industries;
