// Library Imports:
import "./utrustningsnivaextended.css";
import React from "react";

// Component Imports:

// Image Imports:
import XRM from "../../../images/general/xrm_icon.png";
import ExtendedCabWhite from "../../../images/utrustning/xrm_white.png";

const UtrustningsnivaExtended = () => {
  return (
    <>
      <div className="flexbox-utrustningsnivaextended-outer-container">
        <div className="flexbox-utrustningsnivaextended-inner-container">
          <div className="flexbox-utrustningsnivaextended-text-container">
            <div className="flexbox-utrustningsnivaextended-heading-container-1">
              <h3 id="utrustningsnivaextended-heading-1">Utrustningsnivå</h3>
            </div>
            <div className="flexbox-utrustningsnivaextended-paragraph-container">
              <p id="utrustningsnivaextended-paragraph-1">
                Här visas utvald standardutrustning för utrustningsnivå XRM
              </p>
            </div>
            <div className="flexbox-utrustningsnivaextended-heading-container-2">
              <h4 id="utrustningsnivaextended-heading-2">Utöver XRS erbjuder XRM:</h4>
            </div>
            <ul className="utrustningsnivaextended-bullet">
              <li>Parkeringssensorer bak</li>
              <li>18" Alu fälgar</li>
              <li>Stötfångare lackerade i bilens färg</li>
              <li>Diff-spär</li>
              <li>Stolsvärmare fram</li>
            </ul>
            <button type="button" id="utrustningsnivaextended-button">
              Se Utrustningslista
            </button>
          </div>
          <div className="flexbox-utrustningsnivaextended-image-container">
            <img src={XRM} alt="xrm-icon" id="utrustningsnivaextended-icon" />
            <img
              src={ExtendedCabWhite}
              alt="xrs-single-cab-white"
              id="utrustningsnivaextended-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UtrustningsnivaExtended;
