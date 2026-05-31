import React from "react";
import { Logo } from "../../image";
import { Navlink } from "../../constant/Navbar";
type ResponsiveMenuProps = {
  showMenu: boolean;
};

const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed top-0 dark:bg-gray-900 h-screen w-[75%] dark:text-white px-8 py-8 duration-500 z-50`}>
      <div>
        <img src={Logo} alt="logo" className="h-16 w-16" />
      </div>

      <div>
        <ul>
            {Navlink.map((data) => (
                <li key={data.id}>
                    <a href={data.path}>{data.name}</a>
                </li>
            ))}
        </ul>
      </div>

      <div className="mt-auto">
        <button className="bg-yellow-400 px-5 rounded-xl font-semibold capitalize hover:bg-orange-700 duration-100">Join Now</button>
      </div>

    </div>
  );
};

export default ResponsiveMenu;
