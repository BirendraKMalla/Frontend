import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Navlink } from "../../constant/Navbar";
import Darkmode from "./Darkmode";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu";
import { Logo } from "../../image";

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  const handleMenuToggle = () => setMenu(!showMenu);

  return (
    <div>
      <div className="bg-primary">
        {/* top */}
        <div className="container hidden md:flex justify-between items-center text-white">
          <div className="flex items-center gap-5 p-2">
            <FaPhoneAlt />
            <span>+977 9857463728</span>
          </div>
          <div className="p-2">
            <p>Free Shipping on Orders Above Rs. 2000</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-white dark:bg-black dark:text-white">
          {/* FIXED: Removed light: prefixes and added items-center */}
          <div className="container flex justify-between items-center bg-white text-black dark:bg-black dark:text-white px-4 py-2">
            <img src={Logo} alt="logo" className="w-20" />
            <div>
              <ul className="hidden md:flex items-center gap-5 font-semibold h-full">
                {Navlink.map((item) => (
                  <li
                    key={item.id}
                    className="font-semibold text-lg hover:text-yellow-500 duration-200"
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
                <button className="primary-btn bg-yellow-500 text-black px-5 py-1 rounded-xl font-semibold hover:bg-yellow-600 duration-200">
                  Shop now
                </button>
                <div className="cursor-pointer text-xl">
                  <Darkmode />
                </div>
              </ul>
            </div>
            {/* Mobile Icons Container */}
            <div className="flex md:hidden items-center gap-4 text-xl cursor-pointer">
              <Darkmode />
              {showMenu ? (
                <RxCross1 onClick={handleMenuToggle} className="text-2xl"/>
              ) : (
                <RxHamburgerMenu onClick={handleMenuToggle} className="text-2xl"/>
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
