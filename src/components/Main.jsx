// Library Imports:
import React from "react";

// Component Imports:
import Footer from "./Footer";
import Info from "./Info/info";
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
      {/* <Footer /> */}
    </>
  );
};

export default Main;
