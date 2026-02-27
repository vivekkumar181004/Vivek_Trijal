import React from 'react';
import profile from "../assets/profile.jpg";
import logo from "../assets/trijal_logo.png";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='navbar bg-gray-200'>
                <img className="logo h-[50px]" src={logo} alt="" />
                <img className='profile w-[50px] h-[50px] rounded-[50%]'  src={profile} alt="" />
            </div>
        </div>
    );
}

export default Navbar;
