import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Navlink } from "../../constant/Navbar";
import Darkmode from "./darkmode";
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
        <div className=" container hidden md:flex justify-between  items-center">
          <div className="flex items-center gap-5 p-2">
            <FaPhoneAlt />
            <span>+977 9857463728</span>
          </div>
          <div className="p-2">
            <p>Free Shipping on Orders Above Rs. 2000</p>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div className="flex justify-between dark:bg-black dark:text-white pr-2">
            <img src={Logo} alt="logo" className="w-20" />
            <div>
              <ul className="hidden md:flex items-center gap-3 font-semibold h-full">
                {Navlink.map((item) => (
                  <li
                    key={item.id}
                    className="font-semibold text-lg hover:text-yellow-500 duration-200"
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
                <button className="primary-btn bg-yellow-500 px-5 py-1 rounded-xl font-semibold">
                  Shop now
                </button>
                <Darkmode />
              </ul>
            </div>
            <div className="flex md:hidden items-center gap-3">
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
