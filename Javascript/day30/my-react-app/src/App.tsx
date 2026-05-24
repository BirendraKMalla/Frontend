import React from "react";
// import mountainImg from "./assets/mountain.jpg";
// import { TiSocialFacebook } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import companyLogo from "./assets/6563382.jpg";
import { MdLightMode } from "react-icons/md";

const App = () => {
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div className="h-[1000px] w-[1000px] bg-red-100 rounded-2xl">
    //     <img src={mountainImg} alt="mountain" className="h-[500px] w-[500px]" />
    //     <p className="capitalize text-justify">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
    //       necessitatibus quos voluptates sequi molestias sit obcaecati
    //       reprehenderit qui nisi quibusdam maiores voluptatum assumenda, labore
    //       aliquam tenetur corrupti dicta veritatis quo! Distinctio iure, nam
    //       omnis nesciunt tenetur, magni perferendis necessitatibus officia
    //       perspiciatis magnam sit esse. Reiciendis unde asperiores consectetur
    //       perferendis delectus molestiae commodi officiis iste. Pariatur eos
    //       accusamus nulla. Neque, repellat. Excepturi esse iste vero illo
    //       officia dicta. Laboriosam aperiam placeat in magnam recusandae ut,
    //       laudantium voluptate commodi ducimus officia quam quidem neque
    //       cupiditate veritatis ipsam et doloribus sit natus vitae! Explicabo,
    //       facere neque aut vitae sapiente unde voluptatibus quo voluptas
    //       ratione, nesciunt atque blanditiis sit molestiae autem dolor
    //       voluptatem, inventore quasi voluptate culpa? Ipsa facere explicabo
    //       ipsam labore voluptatum rerum? In magni esse aliquam odio. Expedita,
    //       nihil dolorem. Ex, id mollitia sed doloribus, sit architecto
    //       necessitatibus consequatur praesentium iure nulla illum dignissimos
    //       quas, voluptatum labore et temporibus odio facilis. Libero?
    //     </p>
    //     <button className="bg-blue-700 text-pink px-5 py-2 hover:bg-black hover:text-blue-500 duration-500 hover:scale-105">
    //       <a href="">
    //         <TiSocialFacebook />
    //       </a>
    //     </button>
    //   </div>
    // </div>
    <div className="bg-black w-screen h-screen">
      <div className="bg-amber-400 w-screen h-7 flex justify-between items-center px-4">
        <div className="flex items-center gap-1">
          <FaPhoneAlt className="text-white text-xs" />
          <p className="text-white text-xs">+977-8565685</p>
        </div>
        <div>
          <p className="text-white text-xs">
            Free Shipping on Orders Above Rs.2000
          </p>
        </div>
      </div>
      <div className="w-screen h-12 flex items-center justify-between px-3">
        <div>
          <img src={companyLogo} alt="" className="bg-white h-8" />
        </div>
        <div className="flex justify-between w-55/100 items-center">
          <button className="text-white text-xs rounded-md p-1.5 px-4 hover:bg-amber-400">Home</button>
          <button className="text-white text-xs rounded-md p-1.5 px-4 hover:bg-amber-400">About</button>
          <button className="text-white text-xs rounded-md p-1.5 px-4 hover:bg-amber-400">Collection</button>
          <button className="text-white text-xs rounded-md p-1.5 px-4 hover:bg-amber-400">Contact</button>
          <button className="text-white text-xs rounded-md p-1.5 px-4 hover:bg-amber-400">Login</button>
          <button className="text-white text-xs rounded-md p-1.5 px-4 hover:bg-amber-400">Shop now</button>
          <MdLightMode className="text-white text-s"/>
        </div>
      </div>
    </div>
  );
};

export default App;
