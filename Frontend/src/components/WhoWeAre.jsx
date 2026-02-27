import React from 'react';
import whoWeAre from "../assets/whoWeAre.jpg";
import howItWorks from "../assets/howItWorks.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faLightbulb,
    faBrain,
    faGem
} from "@fortawesome/free-solid-svg-icons";


const WhoWeAre = () => {
    return (
        <div>
            {/* ================= WHO WE ARE ================= */}

            <section className="py-20 ">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-semibold mb-6 text-gray-700">
                        WHO <span className="text-red-500">WE</span> ARE
                    </h2>

                    <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                        Trijal Electrikals Pvt. Ltd. an ISO 9001:2015 certified company
                        based at Faridabad, Haryana is one of the leading manufacturer of
                        custom built low tension switchgear and power distribution panels
                        of all range and capacity.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-16">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-5xl font-semibold mb-6 text-gray-700">
                            Trijal Electrikals:
                        </h3>
                        <h3 className="text-4xl font-semibold mb-6 text-gray-700">
                            The "K" Essence
                        </h3>

                        <ul className="space-y-6 text-gray-600 text-lg">
                            <li className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faBolt} className="text-green-600 text-xl mt-1" />
                                <span><strong>Kilowatt Power:</strong> Managing high-power systems.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faLightbulb} className="text-green-600 text-xl mt-1" />
                                <span><strong>Empowering Solutions:</strong> Efficient power distribution.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faBrain} className="text-green-600 text-xl mt-1" />
                                <span><strong>Strategic Thinking:</strong> Smart execution and planning.</span>
                            </li>

                            <li className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faGem} className="text-green-600 text-xl mt-1" />
                                <span><strong>Versatility & Value:</strong> Meeting diverse energy needs with dedication..</span>
                            </li>

                        </ul>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src={whoWeAre}
                            alt="team"
                            className="shadow-lg"
                        />
                    </div>

                </div>
            </section>


            {/* ================= EMPOWERING PROJECTS ================= */}
            <section className="text-center py-16">
                <h2 className="text-5xl font-semibold text-gray-700">
                    EMPOWERING PROJECTS, CREATING{" "}
                    <span className="text-red-500">EXCELLENCE</span>
                </h2>
            </section>


            {/* ================= VIDEO SECTION ================= */}
            <section className="relative h-[500px] md:h-[700px] lg:h-[1000px]  overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src={howItWorks}
                        type="video/mp4"
                    />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Optional Text Over Video */}
                <div className="relative z-10 flex items-center justify-center h-full text-white text-3xl font-semibold  text-center px-4">
                    Powering Innovation Through Excellence
                </div>

            </section>
        </div>
    );
}

export default WhoWeAre;
