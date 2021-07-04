// Library Imports:
import React from "react";
import { Button } from "semantic-ui-react";

// Component Imports:
import Footer from "./Footer";
import Finally from "./Finally";
// import MainFooter from "./Footer/MainFooter";
import BackgroundVideo from "./BackgroundVideo";

// Image imports:
// import maxusEDeliver from ".././images/maxus_edeliver3_hero.jpeg";

const Main = () => {
  return (
    <>
      {/* <div className="main-content">
      </div> */}
      <BackgroundVideo />
      <Finally />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
