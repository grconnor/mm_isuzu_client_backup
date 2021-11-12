// Library Imports:
import "./fargerextended.css";
import React from "react";

// Component Imports:

// Image Imports:
import splashWhite from "../../../images/farger/splash-white.png";
import mercurySilver from "../../../images/farger/mercury-silver.png";
import obsidianGray from "../../../images/farger/obsidian-grey.png";
import sapphireBlue from "../../../images/farger/sapphire-blue.png";
import redSpinel from "../../../images/farger/red-spinel.png";
import onyxBlack from "../../../images/farger/onyx-black.png";

const FargerExtended = () => {
  return (
    <div className="flexbox-fargerextended-outer-container">
      <div className="flexbox-fargerextended-heading-container">
        <h2 id="fargerextended-heading-heading">
          Färger
        </h2>
        <p id="fargerextended-heading-paragraph">
          Välj mellan en mängd moderna färgalternativ som ser lika bra ut i
          stadsmiljö som i tuff terräng.
        </p>
      </div>
      <div className="flexbox-fargerextended-top-item-container">
        <div className="flexbox-fargerextended-item">
          <img src={splashWhite} alt="splash-white" />
          <div className="flexbox-fargerextended-item-color">
            Splash White
          </div>
        </div>
        <div className="flexbox-fargerextended-item">
          <img src={mercurySilver} alt="mercury-silver" />
          <div className="flexbox-fargerextended-item-color">
            Mercury Silver
          </div>
        </div>
        <div className="flexbox-fargerextended-item">
          <img src={obsidianGray} alt="obsidian-gray" />
          <div className="flexbox-fargerextended-item-color">
            Obsidian Gray
          </div>
        </div>
      </div>
      <div className="flexbox-fargerextended-bottom-item-container">
        <div className="flexbox-fargerextended-item">
          <img src={sapphireBlue} alt="sapphire-blue" />
          <div className="flexbox-fargerextended-item-color">
            Sapphire Blue
          </div>
        </div>
        <div className="flexbox-fargerextended-item">
          <img src={redSpinel} alt="red-spinel" />
          <div className="flexbox-fargerextended-item-color">
            Red Spinel
          </div>
        </div>
        <div className="flexbox-fargerextended-item">
          <img src={onyxBlack} alt="onyx-black" />
          <div className="flexbox-fargerextended-item-color">
            Onyx Black
          </div>
        </div>
      </div>
    </div>
  );
};

export default FargerExtended;
