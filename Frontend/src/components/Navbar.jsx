
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/trijal_logo.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
       <div className="max-w-8xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition 
                  ${location.pathname === link.path
                    ? "text-red-600 font-semibold"
                    : "hover:text-red-600"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </div>

        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col space-y-6 px-6 mt-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`transition 
                ${location.pathname === link.path
                  ? "text-red-600 font-semibold"
                  : "hover:text-red-600"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;