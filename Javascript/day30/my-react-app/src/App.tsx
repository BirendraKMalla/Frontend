import React from "react";

import Navbar from "./components/Navbar/Navbar";
import ResponsiveMenu from "./components/Navbar/ResponsiveMenu";
import HeroSection from "./components/Navbar/HeroSection/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  );
};

export default App;
