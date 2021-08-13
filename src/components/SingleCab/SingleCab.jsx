// Library Imports:
import "./singlecab.css";
import React from "react";

// Component Imports:
import Grova from "./Grova/Grova";
import Farger2 from "./Farger2/Farger2";
import Betyder2 from "./Betyder2/Betyder2";
import Personlig2 from "./Personlig2/Personlig2";
import Utrustningsniva from "./Utrustningsniva/Utrustningsniva";

// Image Imports:
import MainImage from "../../images/single-cab/xrs-hero.jpeg";

const SingleCab = () => {
  return (
    <>
      <div className="flexbox-singlecab-main-container">
        <img src={MainImage} alt="main-xrs" id="single-cab-main-image" />
      </div>
      <Grova />
      <Utrustningsniva />
      <Farger2 />
      <Betyder2 />
      <Personlig2 />
    </>
  )
}

export default SingleCab;
