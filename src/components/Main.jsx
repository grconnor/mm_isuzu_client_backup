// Library Imports:
import React from "react";

// Component Imports:
import Footer from "./Footer";
import Info from "./Info/Info";
import Funderar from "./Funderar/Funderar";
import Betyder from "./Betyder/Betyder";
import Antligen from "./Antligen/Antligen";
import BackgroundVideo from "./BackgroundVideo";
// import MainFooter from "./Footer/MainFooter";

// Image Imports:


const Main = () => {
  return (
    <>
      <BackgroundVideo />
      <Antligen />
      <Info />
      <Funderar />
      <Betyder />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
