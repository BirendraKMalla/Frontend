import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Logo } from "../../image";
import { Navlink } from "../../constant/Navbar";

const Navbar = () => {
  return (
    <div>
      <div>
        {/* top */}
        <div className="flex justify-between items-center bg-amber-400 text-white">
          <div className="flex items-center gap-5 p-2">
            <p>
              <FaPhoneAlt />
            </p>
            <p>+977 9857463728</p>
          </div>
          <div className="p-2">
            <p>Free Shipping on Orders Above Rs. 2000</p>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div className="flex justify-between bg-black text-white">
            <img src={Logo} alt="logo" className="w-20" />
            <div>
              <ul className="flex justify-between items-center gap-5 h-full">
                {Navlink.map((item) => (
                  <li key={item.id} className="font-semibold text-lg hover:text-yellow-500 duration-200">
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
                <button className="bg-yellow-500 px-5 py-1 rounded-xl font-semibold">Shop now</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
