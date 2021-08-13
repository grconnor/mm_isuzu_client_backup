// Library Imports:
import "./farger2.css";
import React from "react";

// Component Imports:

// Image Imports:
import SplashWhite from "../../../images/farger/SingleCab/xrs_white.png";


const Farger2 = () => {
  return (
    <>
      <div className="flexbox-farger2-outer-container">
        <div className="flexbox-farger2-inner-container">
          <div className="flexbox-farger2-heading-container">
            <h2 id="farger2-heading">
              Färger
            </h2>
            <p id="farger2-heading-paragraph">
              Single Cab erbjuds i färgen Splash White som ser lika bra ut i stadsmiljö som i tuff terräng.
            </p>
          </div>
          <div className="flexbox-farger2-image-container">
            <img src={SplashWhite} alt="splash-white" id="farger2-image" />
            <div className="flexbox-farger2-text-container">
              Splash White
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Farger2;
