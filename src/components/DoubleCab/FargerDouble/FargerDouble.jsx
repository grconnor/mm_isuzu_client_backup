// Library Imports:
import "./fargerdouble.css";
import React from "react";

// Component Imports:

// Image Imports:
import splashWhite from "../../../images/farger/splash-white.png";
import silkyWhitePearl from "../../../images/farger/silky-white-pearl.png";
import mercurySilver from "../../../images/farger/mercury-silver.png";
import obsidianGray from "../../../images/farger/obsidian-grey.png";
import valenciaOrange from "../../../images/farger/valencia-orange.png";
import sapphireBlue from "../../../images/farger/sapphire-blue.png";
import redSpinel from "../../../images/farger/red-spinel.png";
import onyxBlack from "../../../images/farger/onyx-black.png";

const FargerDouble = () => {
  return (
    <div className="flexbox-fargerdouble-outer-container">
      <div className="flexbox-fargerdouble-heading-container">
        <h2 id="fargerdouble-heading-heading">Färger</h2>
        <p id="fargerdouble-heading-paragraph">
          Välj mellan en mängd moderna färgalternativ som ser lika bra ut i
          stadsmiljö som i tuff terräng.
        </p>
      </div>
      <div className="flexbox-fargerdouble-top-item-container">
        <div className="flexbox-fargerdouble-item">
          <img src={splashWhite} alt="splash-white" />
          <div className="flexbox-fargerdouble-item-color">Splash White</div>
        </div>
        <div className="flexbox-fargerdouble-item">
          <img src={silkyWhitePearl} alt="silky-white-pearl" />
          <div className="flexbox-fargerdouble-item-color">
            Silky White Pearl
          </div>
        </div>
        <div className="flexbox-fargerdouble-item">
          <img src={mercurySilver} alt="mercury-silver" />
          <div className="flexbox-fargerdouble-item-color">Mercury Silver</div>
        </div>
        <div className="flexbox-fargerdouble-item">
          <img src={obsidianGray} alt="obsidian-gray" />
          <div className="flexbox-fargerdouble-item-color">Obsidian Gray</div>
        </div>
      </div>
      <div className="flexbox-fargerdouble-bottom-item-container">
        <div className="flexbox-fargerdouble-item">
          <img src={valenciaOrange} alt="valencia-orange" />
          <div className="flexbox-fargerdouble-item-color">Valencia Orange</div>
        </div>
        <div className="flexbox-fargerdouble-item">
          <img src={redSpinel} alt="red-spinel" />
          <div className="flexbox-fargerdouble-item-color">Red Spinel</div>
        </div>
        <div className="flexbox-fargerdouble-item">
          <img src={sapphireBlue} alt="sapphire-blue" />
          <div className="flexbox-fargerdouble-item-color">Sapphire Blue</div>
        </div>
        <div className="flexbox-fargerdouble-item">
          <img src={onyxBlack} alt="onyx-black" />
          <div className="flexbox-fargerdouble-item-color">Onyx Black</div>
        </div>
      </div>
    </div>
  );
};

export default FargerDouble;
