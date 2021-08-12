// Library Imports:
import "./utrustningsniva.css";
import React from "react";

// Component Imports:

// Image Imports:
import XRS from "../../../images/general/xrs_icon.png";
import SingleCabWhite from "../../../images/utrustning/xrs_white.png";


const Utrustningsniva = () => {
  return (
    <>
      <div className="flexbox-utrustningsniva-outer-container">
        <div className="flexbox-utrustningsniva-inner-container">
          <div className="flexbox-utrustningsniva-text-container">
            <div className="flexbox-utrustningsniva-heading-container-1">
              <h3 id="utrustningsniva-heading-1">
                Utrustningsnivå
              </h3>
            </div>
            <div className="flexbox-utrustningsniva-paragraph-container">
              <p id="utrustningsniva-paragraph-1">
                Här visas utvald standardutrustning för utrustningsnivå XRS
              </p>
            </div>
            <div className="flexbox-utrustningsniva-heading-container-2">
              <h4 id="utrustningsniva-heading-2">
                Grundutförande
              </h4>
            </div>
            <ul className="utrustningsniva-bullet">
              <li>Dubbel-Din Stereo med Bluetooth</li>
              <li>Manuell växellåda</li>
              <li>ADAS säkerhetssystem</li>
              <li>Teleskopisk ratt</li>
              <li>Automatiskt helljus</li>
            </ul>
            <button type="button" id="utrustningsniva-button">
              Se Utrustningslista
            </button>
          </div>
          <div className="flexbox-utrustningsniva-image-container">
            <img src={XRS} alt="xrs-icon" id="utrustningsniva-icon" />
            <img src={SingleCabWhite} alt="xrs-single-cab-white" id="utrustningsniva-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Utrustningsniva;
