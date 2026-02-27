import React from "react";
import logo from "../assets/trijal_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-200 py-12 px-6  relative">

        {/* Social Icons Section */}
        {/* Social Icons - Top Right */}
        <div className="absolute top-6 right-8 flex gap-6 text-4xl">

          <a
            href="https://www.youtube.com/@trijalelectrikalspvt.ltd.8634"
            className="text-red-600 hover:text-red-600 hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          <a
            href="https://www.instagram.com/trijal_electrikals_faridabad?igsh=MW5nazlrYTVrY21yYg%3D%3D"
            className="text-pink-600 hover:text-pink-500 hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.linkedin.com/company/trijal-electrikals-private-limited/"
            className="text-blue-600 hover:text-blue-600 hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

        </div>

        <div className=" max-w-8xl border-t mt-8 pt-4 mx-auto grid md:grid-cols-4 gap-8 text-gray-500">

          <div>
            <img
              src={logo}
              alt="Trijal Logo"
              className="h-25 w-auto object-contain"
            />
            <h1 className="text-gray-900 text-xl">We Work For Excellence</h1>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Service</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Schneider prisma panels</li>
              <li>Power distribution panels</li>
              <li>Electrical Consultancy</li>
              <li>EPC Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Blogs</li>
              <li>Gallery</li>
              <li>Certificates</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Get in touch</h3>
            <p className="text-gray-600 flex items-center gap-3">  <FontAwesomeIcon icon={faPhone} className="text-red-600" /> <span>+91-8588878612, +91-8588878600</span></p><br />
            <p className="text-gray-600 flex items-center gap-3">  <FontAwesomeIcon icon={faEnvelope} className="text-red-600" /><span>sales@trijal.com, <br /> contact@trijal.com</span></p><br />
            <p className="text-gray-600 flex items-center gap-3"> <FontAwesomeIcon icon={faLocationDot} className="text-red-600" /> <span>Faridabad Office : C/o- & Work, Plot No. 5B, Sector 15-A, First Floor, Crown Plaza Mall, Faridabad.-121007</span></p><br />
            <p className="text-gray-600 flex items-center gap-3"> <FontAwesomeIcon icon={faLocationDot} className="text-red-600" /><span>Alwar Works : F-642, MATSAYA INDUSTRIAL AREA,ALWAR -301030, RAJASTHAN</span></p><br />
            <p className="text-gray-600 flex items-center gap-3">   <FontAwesomeIcon icon={faClock} className="text-red-600" /><span>9:00 AM - 5:30 PM (Mon - Sat)</span></p>
          </div>

        </div>

        <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-m">
          <p>All Copyright Reserved ©2024</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <p className="hover:text-red-600 cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-red-600 cursor-pointer">Privacy Policy</p>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;