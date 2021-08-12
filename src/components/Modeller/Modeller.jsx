// Library Imports:
import "./modeller.css";
import React from "react";

// Component Imports:

// Image Imports:
import SingleCab from "../../images/modeller/single-cab.png";
import ExtendedCab from "../../images/modeller/extended-cab.png";
import DoubleCab from "../../images/modeller/double-cab.png";


const Modeller = () => {
  return (
    <>
      <div className="flexbox-modeller-outer-container">
        <div className="flexbox-modeller-container">
          <div className="flexbox-modeller-item flexbox-modeller-item-1">
            <a href="/single-cab">
              <img src={SingleCab} alt="single-cab" id="modeller-single-cab-image" />
              <h2 id="single-cab-heading">
                Single Cab
              </h2>
              <p id="single-cab-para">
                i XRS-utförande <br /> fr. 254.900:- exkl. moms
              </p>
            </a>
          </div>
          <div className="flexbox-modeller-item flexbox-modeller-item-2">
            <a href="/extended-cab">
              <img src={ExtendedCab} alt="extended-cab" id="modeller-extended-cab-image" />
              <h2 id="extended-cab-heading">
                Extended Cab
              </h2>
              <p id="extended-cab-para">
                i XRM-utförande <br /> fr. 274.900:- exkl. moms
              </p>
            </a>
          </div>
          <div className="flexbox-modeller-item flexbox-modeller-item-3">
            <a href="/double-cab">
              <img src={DoubleCab} alt="double-cab" id="modeller-double-cab-image" />
              <h2 id="double-cab-heading">
                Double Cab
              </h2>
              <p id="double-cab-para">
                i XRS-utförande fr. 269.900:- exkl. moms
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modeller
