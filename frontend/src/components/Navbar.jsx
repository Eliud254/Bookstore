import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";

const NavLinks = [
  "Home", "About", "Reviews","Authors", "Sell"
];

const Navbar = () => {
  const [nav, setNavbar] = useState(false);

  const toggleNav = () => {
    setNavbar((prev) => {
      return !prev;
    });
  };

  return (
    <nav className="p-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-screen-xl relative">
        {/* Flex container*/}
        <div className="flex justify-between items-center text-white">
          <a href="/" className="text-2xl font-bold uppercase text-transparent bg-clip-text
          bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
            <span>BooKs </span>Hub
          </a>

          {/* Menu */}
          <div className="hidden lg:flex space-x-6 text-sm items-center">
            {NavLinks.map((link, index) => (
              <a key={index} className="hover:text-indigo-600 duration-300 ease-in-out cursor-pointer">
                {link}
              </a>
            ))}
            <button className="px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600
            hover:bg-indigo-700 hover:border-indigo-700">Buy</button>
          </div>
          
          {/* Hamburger menu */}
          <div className="lg:hidden" onClick={toggleNav}>
            {nav ? <IoClose size={28} className="text-white"/> : <AiOutlineMenuFold size={25}/>}
          </div>

          {/*mobile menu view */}

          {
            nav && 
                <div className="absolute top-14 left-0 right-0 bg-gradient-to-r from-rose-700
                 via-fuchsia-700 to-indigo-600 z-50 px-4 py-8 rounded-lg">
               <div className="space-y-6 text-sm flex flex-col items-center">
            {NavLinks.map((link, index) => (
              <a 
              key={index} 
              className="hover:text-indigo-600 duration-300 ease-in-out cursor-pointer">
                {link}
              </a>
            ))}
            <button className="px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600
            hover:bg-indigo-700 hover:border-indigo-700">Buy</button>
          </div>
          
            </div>
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;



