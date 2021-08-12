// Library Imports:
import "./singlecab.css";
import React from "react";

// Component Imports:
import Grova from "./Grova/Grova";
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
    </>
  )
}

export default SingleCab;
