// Library Imports:
import React from "react";

// Component Imports:
import Footer from "./Footer";
import Info from "./Info/Info";
import Farger from "./Farger/Farger";
import Betyder from "./Betyder/Betyder";
import Funderar from "./Funderar/Funderar";
import Antligen from "./Antligen/Antligen";
import BackgroundVideo from "./BackgroundVideo";
import Utrustning from "./Utrustning/Utrustning";
import Hyttstorlekar from "./Hyttstorlekar/Hyttstorlekar";
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
      <Hyttstorlekar />
      <Utrustning />
      <Farger />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
