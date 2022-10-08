import React, { useState } from "react";
import { FaBars, FaTimesCircle ,FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOuttlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../ass/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handle = () => setNav(!nav);

  return (
    < div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>

      {/**menu */}
      
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      
      {/**hanburger */}
      <div onClick={handle} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimesCircle />}
      </div>

      {/**Mobil */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*socilaicon */}
      <div className="flex fixed flex-col top-[35%] left-0">
<ul>
    <li>
        
    </li>
</ul>

      </div>
    </div>
  );
};

export default Navbar;
